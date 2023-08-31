const { REACT_APP_API_KEY = "" } = process.env;

const Fetch = {
  get: <T>(url: string): Promise<T> =>
    fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": REACT_APP_API_KEY,
      },
    }).then((res) => {
      if (res.ok) return res.json();
      return res.text().then((text) => {
        throw new Error(text);
      });
    }),
};

export default Fetch;
