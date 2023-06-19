export const fetchQuote = async () => {
  const jsonResponse = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "X-Api-Key": "78cOyHckM/msYdOX7cQeWA==iK1x1BGnT51K02rA",
    },
  });
  const jsonData = await jsonResponse.json();
  console.log(jsonData[0].quote);
};
