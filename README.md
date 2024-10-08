
# Hospital Management Web App Overview

This is a hospital management web application built with React for the frontend and Node.js for the backend. The app manages patient data, doctor profiles, and appointment scheduling. The backend is located in the `backend` folder and handles server-side logic for managing the hospital's data.

![Screenshot 2024-10-08 100820](https://github.com/user-attachments/assets/e5db9441-ef11-4a76-a28f-2b5e8cabd617)
![Screenshot 2024-10-08 100911](https://github.com/user-attachments/assets/639aba7f-b86e-4284-922d-9f3f859d2134)
![Screenshot 2024-10-08 100950](https://github.com/user-attachments/assets/0a11c883-c06c-47ef-85f3-5d6dfd63fa80)

## Prerequisites

Before running the app, make sure you have Node.js installed and that you install the necessary dependencies for both the frontend and backend.

### Steps to Install Dependencies:

1. Navigate to the main project directory and run:
   ```bash
   npm install
   ```
2. Then, navigate to the `backend` folder and install the backend dependencies:
   ```bash
   cd backend
   npm install
   ```

## Running the App

The app requires the backend to be running before starting the frontend. Here’s how you can start both:

### Start the Backend

Navigate to the `backend` folder and run the following command to start the backend server:

```bash
cd backend
node index.js
```

Make sure the backend server is running properly on the designated port.

### Start the Frontend

In a separate terminal, navigate back to the main project directory and run:

```bash
npm run start
```

This will start the React frontend and open it at [http://localhost:3000](http://localhost:3000).

### Running Both Frontend and Backend Together

You can run both the frontend and backend simultaneously with:

```bash
npm run both
```

This command will start the backend first and then the frontend, enabling both to run concurrently.

## Key Features

- **Patient Management:** Easily add, edit, and view patient records, including their medical history and personal details.
- **Doctor Profiles:** Manage the list of doctors, their specializations, and availability.
- **Appointment Scheduling:** Book, view, and manage appointments between patients and doctors, with real-time updates on available slots.

## Project Images

You can add images or screenshots of key features such as the patient dashboard, doctor management interface, and appointment scheduling system. Store these images in a dedicated folder (e.g., `/images`) and update this section with links or previews.

---

## Available Scripts

In the project directory, you can run:

- **`npm start`** – Starts the frontend in development mode.
- **`cd backend && node index.js`** – Starts the backend server.
- **`npm run both`** – Runs both the frontend and backend together.

## Notes

- Ensure that both the frontend and backend dependencies are installed before running the app.
- The backend configuration files (e.g., ports and database settings) are located in the `backend` folder.
