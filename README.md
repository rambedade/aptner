# Counter App (MVVM Architecture)

## Overview
This project is a **Counter App** built using **React, RxJS, and Material UI**. It follows the **MVVM (Model-View-ViewModel) architecture** to ensure clean separation of concerns and reactive state management.

## Features
✅ **Increment & Decrement Buttons** - Adjusts counter between 0 and 98
✅ **Reset Button** - Resets counter to 0
✅ **Auto Increment Toggle** - Automatically increments counter every 1.1 seconds when enabled
✅ **RxJS State Management** - Implements reactivity for handling user actions
✅ **Material UI Toggle Switch** - Styled switch for Auto Increment
✅ **Fully Responsive UI** - Optimized for both desktop and mobile screens

## Tech Stack
- **Frontend:** React, Material UI
- **State Management:** RxJS (ReactiveX for JavaScript)
- **Styling:** CSS, Material UI

## Folder Structure
```
counter-app/
│── src/
│   ├── intent/          # User actions (CounterIntent.js)
│   ├── model/           # RxJS observables and state logic (CounterModel.js)
│   ├── view/            # UI components (CounterView.jsx, CounterView.css)
│   ├── App.jsx          # Main application logic
│── package.json         # Dependencies and scripts
│── README.md            # Documentation
```

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** installed.

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/counter-app-mvvm.git
   cd counter-app-mvvm
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:5173
   ```

## Usage
- Click the **+ button** to increment the counter.
- Click the **- button** to decrement the counter.
- Click the **Reset button** to reset the counter to **0**.
- Toggle **Auto Increment** to start automatic incrementing every 1.1 seconds.

## Screenshots
### Desktop View
![image](https://github.com/user-attachments/assets/739844e2-06a6-4bd6-9561-5c85e921fb15)



### Mobile View
![image](https://github.com/user-attachments/assets/f487c9f1-dcce-4a8c-b19c-2c00ee7c393d)


## Future Enhancements
- Add **dark mode support**
- Implement **persistent storage (localStorage)**
- Introduce **test cases using Jest & React Testing Library**

## Contributing
Feel free to fork this repository and submit pull requests with improvements! 🚀

## License
This project is open-source and available under the **MIT License**.

