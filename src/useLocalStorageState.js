import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  // const [watched, setWatched] = useState([]);
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
