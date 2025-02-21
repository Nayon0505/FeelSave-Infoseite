from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def Hauptseite():
    return render_template('E-Business.html')

@app.route('/Finanzen')
def Finanzen():
    return render_template('Finanzen.html')

@app.route('/Daten')
def Daten():
    return render_template('Daten.html')

@app.route('/Ethik')
def Ethik():
    return render_template('Ethik.html')

if __name__ == '__main__':
    app.run(debug=True)
