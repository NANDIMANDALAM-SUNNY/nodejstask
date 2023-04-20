
const express= require('express');
const app = express();
app.use(express.json());
const rooms = require('./data')
require('dotenv').config()
const PORT = process.env.PORT||5000;




app.get("/", (request, response) => {
  response.send("Hello Backend");
});

//Creating a room
app.post("/rooms/create",(request, response) => {

 const newRoom = request.body;
  rooms.push(newRoom);
  response.send(newRoom);
  console.log(newRoom);
})

// Booking a room
app.post("/rooms", (request, response) => {
console.log("booking a room")
  const booking = request.body;

    rooms.map((room) => {
        if (room.roomID == booking.roomID) {
          console.log(room);
            if (room.customerDetails.date != booking.date) {
                room.customerDetails.customerName = booking.customerName;
                room.customerDetails.date = booking.date;
                room.customerDetails.startTime = booking.startTime;
                room.customerDetails.endTime = booking.endTime;
                room.bookedStatus = !room.bookedStatus;
                response.send("successfully booked")
            } else {
                response.send("This room has been booked already")
            }
        }
        return room;
    })

})

//get all rooms with booked data
app.get("/rooms", (request, response) => {
  response.send(
    rooms.map((room) => {
      if (room.bookedStatus == true) {
        return {
          "Room name": room.roomName,
          "Booked Status": "Booked",
          "Customer Name": room.customerDetails.customerName,
          "Date": room.customerDetails.date,
          "Start Time": room.customerDetails.startTime,
          "End Time": room.customerDetails.endTime,
        };
      } else {
        return { "Room name": room.roomName, "Booked Status": "Vacant" };
      }
    })
  );
});

//List all customers with booked data
app.get("/customers", (request, response) => {
  response.send(
    rooms
      .filter((room) => {
        if (room.bookedStatus === true) {
          return room;
        }
      })
      .map((room) => {
        return {
          "Customer name": room.customerDetails.customerName,
          "Room name": room.roomName,
          Date: room.customerDetails.date,
          "Start Time": room.customerDetails.startTime,
          "End Time": room.customerDetails.endTime,
        };
      })
  );
});


app.listen(PORT, () => console.log("server has started at port", PORT));
