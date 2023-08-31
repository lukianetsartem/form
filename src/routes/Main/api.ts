import queryString from "query-string";
import { Exercises, ExercisesParams } from "interfaces/exercises";
import API_URLS from "enums/apiUrls";
import Fetch from "utils/fetch";

export const fetchExercises = (params: ExercisesParams): Promise<Exercises> =>
  Fetch.get(API_URLS.exercises(queryString.stringify(params)));
