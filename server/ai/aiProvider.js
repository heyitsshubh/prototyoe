// MOCK AI PROVIDER (NO BILLING REQUIRED)

export async function generateAdvice(message, product) {
  const prompt = `
Product: ${product.name}
Category: ${product.category}
Material: ${product.material}
Style: ${product.style}

User: ${message}
`;

  return await openaiSuggest(prompt);
}

export async function openaiSuggest(prompt) {

  console.log("Mock AI received:", prompt);

  const replies = [
    "This jacket works great with blue denim and sneakers.",
    "Perfect for winter evenings — layer it with a hoodie.",
    "You can style it in a streetwear look with cargo pants.",
    "Nice casual outfit choice for travel or college.",
    "Pair it with neutral colors for a clean look."
  ];

  // simulate AI thinking delay
  await new Promise(res => setTimeout(res, 600));

  return replies[Math.floor(Math.random() * replies.length)];
}
