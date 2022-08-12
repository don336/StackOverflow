import { celebrate, Joi, Segments } from "celebrate";
class validate {
  static registration = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(6).required(),
      email: Joi.string().min(6).max(255).required(),
      password: Joi.string().min(8).max(1024).required(),
    }),
  });
  static questionValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().min(3).required(),
      description: Joi.string().min(6).required(),
    }),
  });

  static updateQuestion = celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().min(3).required(),
      description: Joi.string().min(6).required(),
    }),
  });

  static createAnswer = celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().min(3).required(),
      description: Joi.string().min(6).required(),
    }),
  });
}

export default validate;
