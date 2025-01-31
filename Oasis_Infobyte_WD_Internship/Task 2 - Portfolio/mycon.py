from flask import Flask, request
import mysql.connector

app = Flask(__name__)

@app.route('/submit_form', methods=['POST'])
def submit_form():
    fullNname = request.form['fullName']
    contact = request.form['contact']
    email = request.form['email']
    subject = request.form['subject']
    message = request.form['message']
    
    # Connect to the database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="12345",
        database="portDb"
    )
    
    # Create a cursor object
    cursor = db.cursor()
    
    # Execute an INSERT statement
    sql = "insert into portdata( fullName, contact, email, subject, message) VALUES (%s, %s, %s, %s, %s)"
    val = (fullName, contact, email, subject, message)
    cursor.execute(sql, val)
    
    # Commit the transaction
    db.commit()
    
    # Close the cursor and the database connection
    cursor.close()
    db.close()
    
    return "Form submitted successfully!"

if __name__ == '__main__':
    app.run(debug=True)
