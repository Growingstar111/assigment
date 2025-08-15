from flask import Flask, request, jsonify
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)  

@app.route("/")
def home():
    return jsonify({
        "message": "Python server is running!",
        "status": "healthy",
        "endpoints": ["/", "/update-section", "/health"]
    })

@app.route("/health")
def health_check():
    return jsonify({
        "status": "healthy",
        "server": "Flask Python Server",
        "version": "1.0.0"
    })

@app.route("/update-section", methods=["POST"])
def log_edit():
    try:
        data = request.get_json()

        component = data.get("component")
        field = data.get("field")
        new_value = data.get("value")

        print("FRONTEND EDIT DETECTED")
        print(f"Component: {component}")
        print(f"Field: {field}")
        print("New Value:")
        print(new_value)
        print("-" * 50)

        return jsonify({"message": "Edit logged successfully"}), 200

    except Exception as e:
        print("Error logging edit:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
