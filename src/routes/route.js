const express = require('express')
const router = express.Router()


const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const reviewController = require("../controllers/reviewController")
const middleware = require("../middleware/auth")


//_________________________register api for user________________________//

router.post("/register", userController.createUser)

//_____________________Login api for user_____________________________//

router.post("/login", userController.userLogin)


//____________________create book api___________________________________//

router.post("/books", bookController.createBooks)

//____________________get books by query params________________________________//

router.get("/books", middleware.Authentication, bookController.getBooksByQuery)

//____________________get book by path params_____________________________________//

router.get("/books/:bookId", middleware.Authentication, bookController.getBooksId)

//____________________update book by path params____________________________________//

router.put("/books/:bookId", middleware.Authorization, bookController.updateBooks)

//____________________delete book by path params_____________________________________//

router.delete("/books/:bookId", middleware.Authorization, bookController.deleteBooksId)



//____________________create reviews for books by using path params_______________________//

router.post("/books/:bookId/review", reviewController.createReviews)

//____________________update reviews by path params________________________________________//

router.put("/books/:bookId/review/:reviewId", reviewController.updateReview)

//____________________delete reviews by path params________________________________________//

router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReviewById)



//____________________additional api for testing router path________________________________________//

router.all("/****",function(req,res){
    return res.status(404).send({
        status:false,
        message:"path not found"})
})

module.exports = router