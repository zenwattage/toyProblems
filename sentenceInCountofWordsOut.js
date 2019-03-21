const howManyWords = (sentence) => {
    var count = 0;
    for (var i = 0; i < sentence.lenght; i++) {
        if(sentence[i] === ' ') {
            count++;
        }
    }
    return count;
};