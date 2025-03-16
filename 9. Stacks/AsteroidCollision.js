/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let destroyed = false;

        while (
            stack.length > 0 &&
            asteroid < 0 &&
            stack[stack.length - 1] > 0
        ) {
            let top = stack[stack.length - 1];

            if (top < -asteroid) {
                stack.pop(); // top asteroid explodes
                continue;
            } else if (top === -asteroid) {
                stack.pop(); // both explode
                destroyed = true;
                break;
            } else {
                // current asteroid is destroyed
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
};
