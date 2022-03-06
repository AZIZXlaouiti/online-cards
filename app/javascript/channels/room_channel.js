import consumer from "./consumer"
const $ = require("jquery")
consumer.subscriptions.create("RoomChannel", {
  connected() {
     console.log("connect...")
     $('#status').html("Waiting for another player")
     $('#turn').click(function(){
       $('.player_hand').css({ transition: 'transform .2s ease,filter .5s ease',
        transform: 'scale(0.8)'})
     })
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
    // $('#status').html("Player found")
    // Called when there's incoming data on the websocket for this channel
  }
});
//<div class="player_hand"><img class="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Chkobba_carreau_01.svg/163px-Chkobba_carreau_01.svg.png" style="transform: rotate(-6deg);/* bottom: -2px; *//* z-index: 2; */left: 0px;/* opacity: 1; *//* filter: brightness(0.5); *//* pointer-events: none; */"><img class="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chkobba_carreau_09.svg/163px-Chkobba_carreau_09.svg.png" style="transform: rotate(6deg);/* bottom: -12px; */z-index: 6;left: 219px;opacity: 1;filter: brightness(0.5);/* pointer-events: none; */"><img class="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chkobba_pique_10.svg/163px-Chkobba_pique_10.svg.png" style="transform: rotate(0deg);bottom: -1px;z-index: 4;left: 100px;/* opacity: 1; */filter: brightness(0.5);/* pointer-events: none; */"></div>
