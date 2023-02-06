from flask import Flask, jsonify
import plotly.express as px

app = Flask(__name__)

@app.route('/plotly_plot')
def plotly_plot():
    x=[1,2,3,4,5]
    y = [1,4,9,16,25]
    fig = px.line(x=x,y=y)
    return fig.to_html()

if __name__ == '__main__':
    app.run(debug=True)
