
export const testController = (req, res, next) => {
    return res.status(200).send({
        success: true,
        message: "Test route accesed!",
    })
}