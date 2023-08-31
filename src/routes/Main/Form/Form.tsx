import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import Select from "react-select";
import { ExercisesParams } from "interfaces/exercises";
import { types, difficulties, muscles } from "enums/options";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import "./Form.css";

interface Props {
  handleSubmit(
    params: ExercisesParams,
    formikHelpers: FormikHelpers<ExercisesParams>
  ): void;
}

function ExerciseForm({ handleSubmit }: Props) {
  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({ setFieldValue, dirty, isSubmitting }) => (
        <Form className="form">
          <Input
            name="name"
            placeholder="Name"
            onChange={(e) =>
              setFieldValue("name", (e.target as HTMLInputElement).value)
            }
          />
          <Select
            name="type"
            placeholder="Type"
            options={types}
            onChange={(option) => setFieldValue("type", option?.value)}
          />
          <Select
            name="difficulty"
            placeholder="Difficulty"
            options={difficulties}
            onChange={(option) => setFieldValue("difficulty", option?.value)}
          />
          <Select
            name="muscle"
            placeholder="Muscle"
            options={muscles}
            onChange={(option) => setFieldValue("muscle", option?.value)}
          />
          <Button
            type="submit"
            disabled={!dirty || isSubmitting}
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ExerciseForm;
