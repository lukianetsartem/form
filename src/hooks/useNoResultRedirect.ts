import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exercisesStorageKey } from "enums/storageKeys";
import APP_URLS from "enums/appUrls";
import Storage from "utils/storage";

const useNoResultRedirect = () => {
  const navigate = useNavigate();
  const exercises = Storage.get(exercisesStorageKey);

  useEffect(() => {
    if (!exercises) navigate(APP_URLS.base);
  }, [exercises, navigate]);
};

export default useNoResultRedirect;
