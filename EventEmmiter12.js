// It works kind of like this:

// You emit an event → like saying "Hey! Something happened!"

// You listen for that event → and run code in response.


// 🔹 1. Import the events module
// const eventEmmiter= require('events')

// // 🔹 2. Create an instance
// const myemmiter=new eventEmmiter();

// //🔹 3. Define a listener for an event

// myemmiter.on('greet',(name)=>{
//     console.log(`hello ${name}....`)
// })

// //🔹 4. Emit the event
// myemmiter.emit('greet','Hemant');

// //🧪 Output:
// hello Hemant;


// ================================================================
// 🔁 Real-World Example: Simulating File Download


const eventEmmiter= require('events')
const emmiter=new eventEmmiter()

emmiter.on('start',(filename)=>{
    console.log(`downloading ${filename}....`);
})

emmiter.on('progress',(percent)=>{
    console.log(`file is ${percent}% downloaded....`);
})

emmiter.on('downloaded',()=>{
    console.log('file is downloaded 100%');
})


emmiter.emit('start','video.mp4');
emmiter.emit('progress',25);
emmiter.emit('progress',50);
emmiter.emit('progress',75);
emmiter.emit('downloaded');