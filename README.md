# Employee Management System (Frontend)

A simple **Employee Management System** built using **React.js** and **Tailwind CSS**.  
This project demonstrates basic **CRUD operations**, **search**, and **filtering** using frontend state only (no backend or database).

---

## Features

- Create, Read, Update, Delete (CRUD) employees
- Search employees by:
  - Name
  - Mobile number
  - Age
  - Employee ID
- Filter employees by age
- Client-side routing using React Router DOM
- Responsive UI with Tailwind CSS
- Delete confirmation popup
- Mobile-friendly design

---

## Tech Stack

- React.js
- React Router DOM
- Tailwind CSS
- React Icons
- JavaScript (ES6)
- Vite
- VS Code

---

## Home Component Description

The **Home** component displays employee data in a table format with:

- Search input for live filtering
- Dropdown to filter employees by age
- Create button to add a new employee
- Edit and Delete actions for each employee
- Message display when no records are found

All CRUD operations are handled using React `useState` and passed as props.  
No backend or database is used.

---

## How to Run the Project

1. Download the project ZIP file
2. Extract the ZIP file
3. Open the project folder in VS Code
4. Install dependencies:
   ```bash
   npm install

Start the development server:
npm run dev

Open the browser and visit:
http://localhost:5173

---

## Important Notes

- This is a frontend-only project
- Data is stored in memory (refreshing the page will reset data)
- CRUD operations are implemented using JavaScript arrays


## Author

Sagar Kasar
Frontend Developer (React.js)


## Output
![Home Page](./public/images/Home.png)

