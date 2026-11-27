from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import requests

from database import create_table, save_quote, get_history

app = Flask(
    __name__,
    static_folder="../frontend",
    static_url_path=""
)

CORS(app)

create_table()


@app.route("/")
def home():
    return app.send_static_file("index.html")


@app.route("/api/quote")
def random_quote():
    try:
        response = requests.get(
            "https://dummyjson.com/quotes/random",
            timeout=10
        )

        response.raise_for_status()

        data = response.json()

        quote = data["quote"]
        author = data["author"]

        save_quote(quote, author)

        return jsonify({
            "quote": quote,
            "author": author
        })

    except requests.RequestException:
        return jsonify({"error": "Unable to fetch quote"}), 503


@app.route("/api/history")
def quote_history():
    return jsonify(get_history())


if __name__ == "__main__":
    app.run(debug=True)
