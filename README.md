# 🌐 Unit Converter Web App

A simple yet powerful **Unit Converter Web Application** built using **Java (Spring Boot)** for backend and **HTML, CSS, and JavaScript** for frontend.

---

## 🚀 Features

- Convert between **Length**, **Weight**, and **Temperature** units.
- **Real-time conversion** powered by Spring Boot REST API.
- **Clean and responsive UI** using pure HTML, CSS, and JavaScript.
- Automatic dropdown update when switching between unit categories.
- Error handling for invalid or empty inputs.
- Conversion accuracy up to **3 decimal places**.

---

## 🧩 Tech Stack

**Frontend:**
- HTML5  
- CSS3  
- Vanilla JavaScript (Fetch API)

**Backend:**
- Java 17+
- Spring Boot (REST Controller)
- Maven Build System

---

## ⚙️ How It Works

1. **Frontend (HTML + JS)**  
   - The user enters a value, selects the units, and clicks “Convert”.
   - JavaScript sends a `GET` request to `/convert` endpoint (Spring Boot backend).
   - The backend returns a JSON response with the converted result.
   - The result is displayed instantly on the page.

2. **Backend (Spring Boot)**  
   - Handles `/convert` API calls.
   - Uses logic to convert values between various units based on the selected type.
   - Sends the conversion result as JSON back to the frontend.

---

## 📁 Folder Structure

```
UnitConverterWebApp/
│
├── src/
│   └── main/
│       ├── java/com/example/unitconverterwebapp/
│       │   ├── UnitConverterWebAppApplication.java
│       │   └── ConverterController.java
│       └── resources/
│           └── static/
│               ├── index.html
│               ├── style.css
│               └── script.js
│
├── pom.xml
└── README.txt
```

---

## ▶️ Running Locally

### Prerequisites
- Java 17 or higher
- Maven installed
- Web browser

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/<your-username>/unit-converter-webapp.git
   ```
2. Navigate to the project directory:
   ```
   cd unit-converter-webapp
   ```
3. Run the Spring Boot app:
   ```
   mvn spring-boot:run
   ```
4. Open your browser and visit:
   ```
   http://localhost:8080
   ```

---

## 🔗 Project URL
https://roadmap.sh/projects/unit-converter

---

## 👨‍💻 Author
**Mahtab Yasin**  
B.Tech CSE (AI & ML) Student  
GITA Autonomous College, Bhubaneswar  

---

## 🏁 License
This project is open-source and available under the **MIT License**.
