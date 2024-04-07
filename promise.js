const willWeGetAnswer = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const isAndreyAngry = Math.random()>0.5;
            if(isAndreyAngry) {
                const ignore = new Error(':(');
                reject(ignore);
            } else {
                const answer = {
                    code: 'I am happy',
                    smile: ':)'
                }
                resolve(answer);
            }
        },1000)
    })
}

// const promise = willWeGetAnswer();
// console.log(promise);
willWeGetAnswer()
    .then(result => {
        console.log(result);
        return willWeGetAnswer();
    })
    .then(secondRes => secondRes.code)
    .then(res => console.log(res))
    .catch(e => e.message)
        .then(message => console.log(message))