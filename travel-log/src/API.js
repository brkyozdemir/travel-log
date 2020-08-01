const API_URL = 'http://localhost:1337';
export const listLogEntries = async () => {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export const createLogEntry = async (entry) => {
  const response = await fetch(`${API_URL}/api/logs`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry)
  });
  return response.json();
}
