const API_KEY = 'AIzaSyADF6nIMfF0V46_np70XufA_sUM0NW4sbc';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;
async function test() {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Hello" }] }]
            })
        });
        console.log("Status:", response.status);
        const data = await response.json();
        console.log("Response:", JSON.stringify(data).substring(0, 100));
    } catch(e) {
        console.log("Error:", e.message);
    }
}
test();
