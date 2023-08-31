import React from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import Storage from "utils/storage";
import { exercisesStorageKey } from "enums/storageKeys";
import { ExercisesParams } from "interfaces/exercises";
import { fetchExercises } from "routes/Main/api";
import ExerciseForm from "routes/Main/Form/Form";

function Main() {
  const navigate = useNavigate();

  const handleSubmit = (
    values: ExercisesParams,
    { setSubmitting }: FormikHelpers<ExercisesParams>
  ): void => {
    fetchExercises(values)
      .then((res) => {
        Storage.set(exercisesStorageKey, res);
        navigate("/result");
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(err.message);
      })
      .then(() => setSubmitting(false));
  };

  return (
    <div>
      <h1 className="title">Exercises API</h1>
      <ExerciseForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default Main;
