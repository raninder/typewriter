

const typewriter = function () {
    let time = 0;
    for (const char of sentence) {
        setTimeout(() => {
            process.stdout.write(char);
        }, time);
        time += 50;

    }
    setTimeout(() => {
        process.stdout.write('\n');
    }, time);
};
const sentence = "hello there from lighthouse labs";
typewriter(sentence);
