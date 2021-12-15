const db = require('../config/database')
const Event = require('../models/Evnet')


let newEvents = [

    new Event({
        title: 'beach cleaning at london',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'london',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at my',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'my',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sohar',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'london',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Nizwa',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'berlin',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Sur',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Amsterdam',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Amsterdam',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Amsterdam',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Amsterdam',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Amsterdam',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Amsterdam',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Amsterdam',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'beach cleaning at Amsterdam',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Amesterdam',
        date: Date.now(),
        created_at: Date.now()
    }),
    
]

newEvents.forEach( (event)=> {
    event.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})
// let newEvent = new Event({
//     title: ' this is event 1',
//     description: ' ths is the best event in world',
//     location: 'my',
//     date: Date.now()

// })


// newEvent.save( (err)=> {
    
//     if(!err) {
//         console.log('record was added')
//     } else {
//         console.log(err)
//     }
    
// })




