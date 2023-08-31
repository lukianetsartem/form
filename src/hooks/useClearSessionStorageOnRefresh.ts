import { useEffect } from "react";
import Storage from "utils/storage";

const useClearSessionStorageOnRefresh = (): void => {
  const { clear } = Storage;
  useEffect(() => {
    window.addEventListener("beforeunload", clear);
    return () => {
      window.removeEventListener("beforeunload", clear);
    };
  }, [clear]);
};

export default useClearSessionStorageOnRefresh;
