const Storage = {
  set: <V>(key: string, value: V): void =>
    sessionStorage.setItem(key, JSON.stringify(value)),
  get: (key: string): string | null => {
    const value = sessionStorage.getItem(key);
    if (value) return JSON.parse(value);
    return value;
  },
};

export default Storage;
