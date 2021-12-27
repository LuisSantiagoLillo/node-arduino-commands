
// requireds
const fs = require('fs');
const colors = require('colors');

const { Board, Led } = require("johnny-five");
var serialport = require("serialport");


let sayHelloWorld = (name) => {

    console.log('=================='.green);
    console.log(`Hello World ${ name }!!!!!!`.green);
    console.log('=================='.green);

   

    serialport.list().then(ports => console.log(ports));


    // Tutorial - http://johnny-five.io/examples/#hello-world-see-more-

    // const board = new Board();
    const board = new Board({ timeout: 3600 });



    board.on("ready", () => {

    // Create a standard `led` component instance
    const led = new Led(13);

    // "blink" the led in 500ms
    // on-off phase periods

    led.blink(5000);
    // led.off();

    // led.blink(10);
    });


}



module.exports = {
    sayHelloWorld
}