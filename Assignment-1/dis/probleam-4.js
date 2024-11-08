"use strict";
const calculateShapeArea = (shape) => {
    if (shape.shape === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    return 0;
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea.toFixed(2));
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea.toFixed(2));
