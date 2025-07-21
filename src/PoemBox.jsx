import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from './apiKey';

export default function PoemBox() {
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPoem = async () => {
    setLoading(true);
    setError(null);
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = "Write a 5 line poem haiku style about the beauty of nature";
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Poem Generator</h2>
      <button onClick={fetchPoem} disabled={loading}>
        {loading ? 'Generating...' : 'Generate New Poem'}
      </button>

      <div style={{ marginTop: '1rem' }}>
        {error && <p style={{ color: 'red' }}>❌ {error}</p>}
        {response && <p>{response}</p>}
      </div>
    </div>
  );
}
