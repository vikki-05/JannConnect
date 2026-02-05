# 🌐 JannConnect

### One Platform for Government & NGO Welfare Schemes

🔗 **Live Demo:**
`[JannConnect](https://jannconnect.netlify.app)`

---

## 🚩 Problem

Millions of citizens are unaware of welfare schemes because:

* Information is scattered across multiple portals
* Schemes have complex eligibility rules
* Official documents are difficult to understand
* Limited accessibility support
* Language barriers

---

## 💡 Solution

**JannConnect** is a unified platform that helps citizens:

* Discover **Government and NGO schemes**
* Understand them through **simple summaries**
* Access them with **language and accessibility support**
* Apply directly through official links

---

## ✨ Key Features

### 🔎 Scheme Discovery

* Government and NGO schemes in one place
* Category-based browsing
* Tabbed results:

  * All
  * Government
  * NGO

### 📄 Simplified Scheme Details

Each scheme includes:

* Overview
* Benefits
* Eligibility
* Required Documents
* Step-by-step application guide
* Direct “Apply Now” link

### ♿ Accessibility Tools

* Font size adjustment
* High contrast mode
* Grayscale mode
* Dyslexia-friendly font
* Reduced motion
* Floating accessibility panel

### 🌍 Multi-Language Support

* English
* Hindi
* Language switch across all pages

### 👤 User Features

* Sign-in system
* Personalized browsing
* Extendable for saved schemes

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS 3.4
* JavaScript (ES6)

### Routing

* React Router

### State Management

* React Context API

  * LanguageContext
  * ThemeContext
  * AccessibilityContext
  * AuthContext

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Stats.jsx
│   ├── HowItWorks.jsx
│   ├── Categories.jsx
│   ├── Footer.jsx
│   ├── AccessibilityPanel.jsx
│   └── FilterPanel.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── SearchResults.jsx
│   ├── SchemeDetails.jsx
│   ├── SignIn.jsx
│   └── About.jsx
│
├── context/
│   ├── LanguageContext.jsx
│   ├── ThemeContext.jsx
│   ├── AccessibilityContext.jsx
│   └── AuthContext.jsx
│
├── data/
│   └── schemes.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/jannconnect.git
cd jannconnect
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the development server

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🚀 Build for Production

```
npm run build
```

---

## 🌐 Deployment

Deployed using **Netlify**.

Live URL:
`[JannConnect](https://jannconnect.netlify.app)`

---

## 🔮 Future Improvements

* AI-based scheme recommendations
* Real-time government API integration
* User dashboard with saved schemes
* Mobile app version
* Voice-based search

---

## 👨‍💻 Author

**Atharv Pandab**
Project: **JannConnect**

---

## 📜 License

This project is for HackElite Hackathon.
