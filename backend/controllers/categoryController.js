import asyncHandler from "../middleware/asyncHandler.js";
import Category from "../models/categoryModel.js";

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({ });
  // const subjects = await Subject.find({});
  // console.log(subjects);
  if (categories) {
    res.json(categories);
  } else {
    res.status(404);
    throw new Error("Category Not Found");
  }
});

export { getCategories };
