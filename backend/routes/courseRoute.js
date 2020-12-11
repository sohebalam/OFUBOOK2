import express from "express"
import asyncHandler from "express-async-handler"
import Course from "../models/course.js"
const courseRouter = express.Router()

//Create Book
courseRouter.post(
  "/",

  asyncHandler(async (req, res) => {
    try {
      const course = await Course.create(req.body)
      res.status(200)
      console.log(course)
      res.json(course)
      
    } catch (error) {
      res.status(500)
      throw new Error(error)
    }
  })
)

export default courseRouter
