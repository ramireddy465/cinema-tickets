booking api
--------------
method : POST
url:'http://localhost:3000/api/booking'
body:{
    "cinemaId":"64ad02d938d602318875eca4",
    "seatNo":["1","2"]
}

tickets api
--------------
method : POST
url:'http://localhost:3000/api/tickets'
body:{
    "cinemaId":"64ad02d938d602318875eca4",
    "seatNo":"1"
}

cimemas api
--------------
method : POST
url:'http://localhost:3000/api/cinemas'
body:{
    "cinemaName":"Avatar",
    "location":"hyderabad"
}