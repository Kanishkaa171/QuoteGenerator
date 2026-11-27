# ✦ Evergreen – Quote Generator

A simple and elegant Quote Generator built using Flask, JavaScript, and SQLite. It fetches random inspirational quotes from an external API and maintains a history of previously generated quotes.

## ✨ Features

- Generate random inspirational quotes.
- Fetch quotes using the DummyJSON API.
- Display the quote and author's name.
- Automatically save generated quotes in an SQLite database.
- View previously generated quotes in Quote History.
- Responsive and clean user interface.
- Persistent quote history even after refreshing the page.

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3
- JavaScript

**Backend:**
- Python
- Flask
- Flask-CORS
- Requests

**Database:**
- SQLite

**API:**
- DummyJSON Quotes API

## 📁 Project Structure

```text
QuoteGenerator/
│
├── backend/
│   ├── app.py
│   └── database.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
├── requirements.txt
└── README.md
```

## 🚀 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Kanishkaa171/QuoteGenerator.git
```

2. Navigate to the project folder:

```bash
cd QuoteGenerator
```

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Navigate to the backend folder:

```bash
cd backend
```

5. Start the Flask server:

```bash
python app.py
```

6. Open your browser and visit:

```text
http://127.0.0.1:5000
```

## 💾 Database

SQLite is used to store generated quotes and their authors. The application automatically creates the database table when the Flask server starts.

## 👩‍💻 Developed With

Python, Flask, HTML, CSS, JavaScript, and SQLite.