const rooms = [
    {
      roomID: 0,
      roomName: "230",
      noOfSeatsAvailable: "2",
      amenities: ["Wifi", "Fitness Center"],
      pricePerHr: 100,
      bookedStatus: true,
      customerDetails: {
        customerName: "Agnes",
        date: "20/03/2023",
        startTime: "11:00",
        endTime: "16:00",
      },
    },
    {
      roomID: 1,
      roomName: "121",
      noOfSeatsAvailable: "2",
      amenities: ["Parking", "Fitness Center"],
      pricePerHr: 100,
      bookedStatus: true,
      customerDetails: {
        customerName: "Naveen",
        date: "16/02/2023",
        startTime: "11:00",
        endTime: "18:00",
      },
    },
    {
      roomID: 2,
      roomName: "102",
      noOfSeatsAvailable: "2",
      amenities: ["Fitness Center"],
      pricePerHr: 1000,
      bookedStatus: true,
      customerDetails: {
        customerName: "Shalem",
        date: "18/04/2023",
        startTime: "10:00",
        endTime: "18:00",
      },
    },
    {
      roomID: 3,
      roomName: "133",
      noOfSeatsAvailable: "2",
      amenities: ["Parking", "Breakfast", "Wifi", "Fitness Center"],
      pricePerHr: 1000,
      bookedStatus: false,
      customerDetails: {
        customerName: "",
        date: "",
        startTime: "",
        endTime: "",
      },
    },
    {
      roomID: 4,
      roomName: "214",
      noOfSeatsAvailable: "2",
      amenities: ["Parking"],
      pricePerHr: 100,
      bookedStatus: false,
      customerDetails: {
        customerName: "",
        date: "",
        startTime: "",
        endTime: "",
      },
    },
  ];

  module.exports = rooms