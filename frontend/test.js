const API_URL = "https://api-inference.huggingface.co/models/Dan2205/Llama-2-7b-chatbot-Eshop_2";
const API_TOKEN = "Bearer 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";

async function chatWithBot(message) {
  const payload = {
    inputs: {
      past_user_inputs: [],
      generated_responses: [],
      text: message
    }
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: API_TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data.generated_text; // ή όπου είναι το response text
}

// Χρήση:
chatWithBot("Γεια σου!")
  .then(answer => console.log(answer))
  .catch(err => console.error(err));
