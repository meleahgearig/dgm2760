async function getHotelData() {
    try{
        const response = await fetch('hotel.json')
        return await response.json() //Return the JSON object
    } catch(error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => {
    hotelData = data
    console.log(hotelData)
})

document.querySelectorAll('li a').forEach(anchor => {
    anchor.addEventListener('click', hotelInfo)
  })

// document.querySelector("#marriott").addEventListener('click', hotelInfo)
// document.querySelector("#sheraton").addEventListener('click', hotelInfo)
// document.querySelector("#hilton").addEventListener('click', hotelInfo)


function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name}`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
    document.querySelector('#available').textContent = `${hotelChoice.rooms}`
    document.querySelector('#available').textContent = `${hotelChoice.rooms}`
    document.querySelector('#picture').src = `${hotelChoice.picture}`  

}