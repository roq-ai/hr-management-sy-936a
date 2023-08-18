import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date().required(),
  evaluation_score: yup.number().integer().nullable(),
  comments: yup.string().nullable(),
  user_id: yup.string().nullable(),
  evaluator_id: yup.string().nullable(),
});
