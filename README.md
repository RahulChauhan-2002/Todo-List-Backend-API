# Todo List Backend API
A RESTful API for managing todo items built with Node.js, Express, and MongoDB.
This project is a backend service that provides API endpoints for creating, reading, updating, and deleting todo items. 
It serves as a robust foundation for todo list applications and demonstrates clean architecture principles with Express.js and MongoDB.



🛠️ **Tech Stack**

* **Node.js:** JavaScript runtime
* **Express.js:** Web framework
* **MongoDB:** NoSQL database
* **Mongoose:** MongoDB object modeling
* **dotenv:**Environment variable management

🚀 **Features**

* **Create new todo items:**
* **Retrieve all todo items**
* **Structured with MVC pattern** 
* **Error handling**
* **MongoDB integration** 

📁 **Project Structure**<br/>
todo-backend/<br/>
├── config/<br/>
│   └── dbConnect.js        # Database connection setup<br/>
├── controllers/<br/>
│   └── todoControllers.js  # Request handlers for todo routes<br/>
├── models/<br/>
│   └── todoSchema.js       # Mongoose schema for todo items<br/>
├── routes/<br/>
│   └── TodoRoute.js        # API routes definition<br/>
├── .env                    # Environment variables<br/>
├── .gitignore              # Git ignore file<br/>
├── index.js                # Application entry point<br/>
├── package.json            # Project dependencies<br/>
└── README.md               # Project documentation<br/>


🚀 **Getting Started**

**Prerequisites**

* Node.js and npm installed on your machine.
* MongoDB installed and running.

**Installation**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/RahulChauhan-2002/Todo-List-Backend-API.git](https://github.com/RahulChauhan-2002/Todo-List-Backend-API.git)
    cd Todo-List-Backend-API
    ```

2.  **Set up the backend:**
    ```bash
    cd todo-backend
    npm install
    ```


**Running the Application**

1.  **Start the server:**
    ```bash
    cd todo-backend
    # Development mode
    npm run dev
    
    # Production mode
    npm start
    ```

3.  **Access the application:**
    Open your browser and navigate to `http://localhost:4000` to use Todo-List-Backend-API.

📸 **Screenshots**

*Note: Include screenshots of your application here to showcase the UI and features.*
*(Replace the placeholder paths above with the actual paths to your screenshot images within your repository. Make sure the image files exist in a `screenshots` folder or adjust the paths accordingly.)*

📬 **Contact**

For any inquiries or feedback, feel free to reach out:

* **Email:** rahulchauhan962108@gmail.com
* **GitHub:** [RahulChauhan-2002](https://github.com/RahulChauhan-2002)
