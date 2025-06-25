from flask import Flask, render_template

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route("/")
def index():
    """
    Renders the main beauty parlor website UI.
    The HTML content is located in templates/index.html.
    """
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
