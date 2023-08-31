import React from "react";
import Storage from "utils/storage";
import { exercisesStorageKey } from "enums/storageKeys";

function Result() {
  const exercises = Storage.get(exercisesStorageKey);
  return <pre>{JSON.stringify(exercises, null, 4)}</pre>;
}

export default Result;
