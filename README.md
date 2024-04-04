# Todo App

## Overview

This is a simple Todo application built using Next.js, Firebase for data storage, Tailwind CSS for styling, and our custom UI component library. The app allows users to create, update, delete, and mark tasks as completed.

## Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:stivenm16/castor-technical-assessment.git
   ```

2. **Install dependencies**

   ```bash
   cd castor-technical-assessment
   npm install
   ```

3. **Set up Firebase**

   - Create a Firebase project on the Firebase console.
   - Set up Firestore database and Authentication.
   - Copy your Firebase config and paste it in `firebase.js` file.

4. **Run the app**

   ```bash
   npm run dev
   ```

5. **Access the app**
   Open your browser and visit `http://localhost:3000` to view the application.

## Features

- **Create**: Users can add new tasks to their todo list.
- **Update**: Tasks can be edited or marked as completed.
- **Delete**: Users can remove tasks from the list.

## Technologies Used

- **Next.js**: React framework for building the frontend.
- **Firebase**: Backend as a service for data storage and authentication.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Custom UI Component Library**: Reusable UI components built for this application. check it out in `https://playit-omega.vercel.app/`

## Directory Structure

```
castor-technical-assessment/
│
├── hooks/            # Custom React hooks
├── models/           # Data models or schemas
├── providers/        # Context providers
├── utils/            # Utility functions
├── components/       # Reusable UI components
├── api/              # API routes (for Next.js API routes)
├── public/           # Public assets
└── auth/             # Authentication components and routes for private pages
```

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or features you'd like to see.

## License

This project is licensed under the [MIT License](LICENSE).
