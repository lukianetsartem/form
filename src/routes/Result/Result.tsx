import React from "react";
import Storage from "utils/storage";
import APP_URLS from "enums/appUrls";
import { exercisesStorageKey } from "enums/storageKeys";
import Button from "components/Button/Button";
import "./Result.css";

function Result() {
  const exercises = Storage.get(exercisesStorageKey);
  return (
    <>
      {exercises?.length ? (
        <pre>{JSON.stringify(exercises, null, 4)}</pre>
      ) : (
        <>
          Unfortunately, there are no exercises corresponding to your request :(
        </>
      )}
      <Button className="getBackButton" to={APP_URLS.base}>
        Get back
      </Button>
    </>
  );
}

export default Result;
