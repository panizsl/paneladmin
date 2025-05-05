# React + Vite

# Admin Panel 🛡️
A modern Admin Panel built with React, React Router, Material UI, and strong use of React Hooks.
## 🚀 Features

- User authentication (login & register)
- Role-based access control
- Dynamic theming (light/dark mode)
- Internationalization (i18n) with react-i18next
- Modular architecture (features, contexts, services)
- Reusable layouts and components
- Optimized HTTP service handling

## 🧠 Technologies Used
- **React**
- **React Router DOM**
- **React Hook Form** for form handling
- **Axios** (via custom HTTP service)
- react-i18next for multilingual support
- **Bootstrap** / **Material UI** 🎨 — UI styling frameworks
- **Framer Motion** 🎞️ — Animations and transitions (optional)
- Authentication: Token-based authentication using localStorage
- State Management: **Context API** with **useReducer** for global state management
  
## 📦 Getting Started
1- Clone the repository:

   ```
   git clone https://github.com/your-username/admin-panel.git

   ```

2- Install dependencies:
   ```
npm install
   ```

3- Start the development server:
   ```
npm run dev
   ```

## Usage 🏃‍♂️
- Run the app locally to test features like login, registration, language change, and theme toggle.

- The app will automatically redirect to the login page if the user is not authenticated.

- You can switch between light and dark themes using the theme toggle button.

- Language can be switched between English and Persian (fa) using the language dropdown in the header.

 ## Folder Structure 📂
 Here’s an overview of the project structure:
 ```
project-name/
│
├── public/                    # Static assets like images, fonts, etc.
│
├── src/
│   ├── components/            # Reusable UI components
│   ├── contexts/              # Context providers (e.g., theme, language)
│   ├── features/              # Feature-based components (e.g., login, courses)
│   ├── layouts/               # Layout components (e.g., sidebar, top nav)
│   ├── pages/                 # Page components (e.g., Home, Course List)
│   ├── core/                  # Core services and utilities (e.g., HTTP service)
│   ├── App.js                 # Root component that renders the entire app
│   ├── i18n.js                # Internationalization configuration
│   └── router.js              # Routing configuration
│
├── .gitignore                 # Git ignore file
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

### API Endpoints 📡
Here are the key endpoints used in the app:
- POST /Users/login: User login.
- POST /Users/register: User registration.
- GET /Course/list: Fetch a list of courses.

### Environment Variables 🔑
If you're running the app locally and need to configure environment variables, create a .env file in the root directory and add the following:
```
REACT_APP_API_BASE_URL=your-api-base-url
```
### Screenshot


![2025-03-11 (4)](https://github.com/user-attachments/assets/c52905d9-b263-4ce3-b66f-bbeaf368e842)

