type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = (typeofshape: Circle | Rectangle) => number;

const calculateShapeArea: Shape = (shape) => {
  if (shape.shape === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  } else if (shape.shape === "rectangle") {
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