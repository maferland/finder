const API_URL = "/.netlify/functions";

const generateHeaders = async (user) => {
  const headers = { "Content-Type": "application/json" };
  if (user) {
    return user.jwt().then((token) => {
      return { ...headers, Authorization: `Bearer ${token}` };
    });
  }
  return Promise.resolve(headers);
};

const generateOptions = async (user, method = "GET", body = undefined) => {
  return {
    method,
    headers: await generateHeaders(user),
    body: !body ? undefined : JSON.stringify(body),
  };
};

const fetchMarkers = async (user) => {
  const options = await generateOptions(user);
  return fetch(`${API_URL}/get-markers`, options)
    .then((r) => r.json())
    .catch((r) => {
      return [];
    })
};

export { fetchMarkers };

