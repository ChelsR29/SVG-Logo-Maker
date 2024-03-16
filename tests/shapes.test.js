const { Triangle, Square, Circle } = require('../lib/shapes');

describe('Triangle Rendering', () => {
    test('Render Triangle with specific color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
});

describe('Square Rendering', () => {
    test('Render Square with specific color', () => {
         const shape = new Square();
        shape.setColor("green");
         expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="green"/>');
     });
});
    
 describe('Circle Rendering', () => {
    test('Render Circle with specific color', () => {
        const shape = new Circle();
         shape.setColor("yellow");
         expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="yellow"/>');
      });
});
