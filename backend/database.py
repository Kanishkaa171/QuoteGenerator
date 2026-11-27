
import sqlite3

DB_NAME = "quotes.db"


def get_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn


def create_table():
    conn = get_connection()

    conn.execute("""
        CREATE TABLE IF NOT EXISTS quotes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            quote TEXT NOT NULL,
            author TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


def save_quote(quote, author):
    conn = get_connection()

    conn.execute(
        "INSERT INTO quotes (quote, author) VALUES (?, ?)",
        (quote, author)
    )

    conn.commit()
    conn.close()


def get_history():
    conn = get_connection()

    quotes = conn.execute(
        "SELECT * FROM quotes ORDER BY id DESC"
    ).fetchall()

    conn.close()

    return [dict(row) for row in quotes]