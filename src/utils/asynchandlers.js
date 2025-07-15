const asyncHandler = (requestHandler)=> {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}

export {asyncHandler}

// This is a classic higherorder function where we are taking params as function and also returning function .