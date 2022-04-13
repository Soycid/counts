from api import create_app

app = create_app()

from api import query

if __name__ == "__main__":
    app.run(debug=True)