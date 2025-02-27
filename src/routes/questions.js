import express from "express";
import controllers from "../controllers/questions";
import validate from "../validation/validation";
import checkAuth from "../../middleWare/check-auth";

const router = express.Router();

router.get("/", controllers.getQuestions);
router.get("/:id", controllers.getQuestion);
router.post(
  "/",
  checkAuth,
  validate.questionValidation,
  controllers.createQuestion
);

router.put(
  "/:id",
  checkAuth,
  validate.updateQuestion,

  controllers.updateQuestion
);
router.delete("/:id", checkAuth, controllers.deleteQuestion);
// Answers

router.post(
  "/:id/answers",
  checkAuth,
  validate.createAnswer,
  controllers.createAnswer
);

router.get("/:id/answers/", controllers.getAnswer);

router.put("/:id/answers/:ansid", checkAuth, controllers.updateAnswer);
// <questionId>/answers/<answerId>

export default router;
