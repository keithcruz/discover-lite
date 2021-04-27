async function fetchItems(start, end) {
  const data = {
    start,
    end,
  };

  const result = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!result.ok) {
    console.log(`request status: ${result.status} ${result.statusText}`);
    return [];
  }

  const json = await result.json();

  return json;
}

export { fetchItems };
