from flask import Flask, render_template, request, make_response, render_template_string, send_file
import os
import subprocess 
from socket import gethostbyname


username = subprocess.run('whoami', capture_output = True).stdout.decode().split("\\")[1][:-2]
app = Flask(__name__)

@app.route('/')
def my_form():
    return render_template('PyDrop.html')

@app.route('/download', methods=['POST'])
def download():
    filepath = request.form['downloadfilepath']
    filename = request.form['downloadfile']
    os.chdir(filepath)
    return send_file(rf'{os.getcwd()}\{filename}', as_attachment=True ,attachment_filename=filename)


@app.route('/upload', methods=['POST'])
def upload():
    # text = request.form['textfile']
    # print(text)
    try:
        os.chdir(rf"C:\Users\{username}\Desktop")
        # files = request.files.getlist('uploadfiles[]')
        for file in request.files.getlist('uploadfiles[]'):
            file.save(os.path.join(os.getcwd(), file.filename))
    except Exception as e:
        print(e)
        return 'OOPS'
    return 'uploaded'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port="80", debug=True)