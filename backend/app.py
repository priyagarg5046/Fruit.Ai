from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data store
faqs = {}
@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

@app.route('/faqs/<int:faq_id>', methods=['GET'])
def get_faq(faq_id):
    faq = faqs.get(faq_id)
    if faq is None:
        return jsonify({'error': 'FAQ not found'}), 404
    return jsonify(faq)

@app.route('/faqs', methods=['POST'])
def create_faq():
    if not request.json or 'question' not in request.json or 'answer' not in request.json:
        return jsonify({'error': 'Bad request'}), 400
    faq_id = len(faqs) + 1
    faq = {
        'id': faq_id,
        'question': request.json['question'],
        'answer': request.json['answer']
    }
    faqs[faq_id] = faq
    return jsonify(faq), 201

@app.route('/faqs/<int:faq_id>', methods=['PUT'])
def update_faq(faq_id):
    if faq_id not in faqs:
        return jsonify({'error': 'FAQ not found'}), 404
    if not request.json or 'question' not in request.json or 'answer' not in request.json:
        return jsonify({'error': 'Bad request'}), 400
    faq = faqs[faq_id]
    faq['question'] = request.json['question']
    faq['answer'] = request.json['answer']
    return jsonify(faq)

@app.route('/faqs/<int:faq_id>', methods=['DELETE'])
def delete_faq(faq_id):
    if faq_id not in faqs:
        return jsonify({'error': 'FAQ not found'}), 404
    del faqs[faq_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
