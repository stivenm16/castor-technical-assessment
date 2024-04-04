import { signOut } from 'next-auth/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { auth } from '../../../../firebase'
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password', placeholder: '*****' },
      },
      async authorize(credentials, req): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || '',
          (credentials as any).password || '',
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user
            }
            return null
          })
          .catch((error) => console.log(error))
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: any) {
      if (user) token.user = user
      return token
    },
    async session({ session, user }: any) {
      console.log('session', session)
      console.log('user', user)
      const userFound = {
        id: 1,
        userName: 'test',
        email: '',
        role: 'admin',
      }
      session.user.role = userFound.role
      session.user.userId = userFound.id
      return session
    },
  },
  pages: {
    signIn: '/',
    signOut: '/',
  },
}
