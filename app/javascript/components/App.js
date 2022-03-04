import React from "react"
const App = () => {
  return (
      <div className="game-field perspective red">

        <div id="player">
          
          <div id="tag">(You)</div>



          <div className="player_hand">
            <div className="player_hand">
              <img className="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Chkobba_carreau_01.svg/163px-Chkobba_carreau_01.svg.png"  />
              <img className="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Chkobba_carreau_07.svg/163px-Chkobba_carreau_07.svg.png"  />
              <img className="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chkobba_pique_07.svg/163px-Chkobba_pique_07.svg.png"  />
              <img className="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chkobba_carreau_09.svg/163px-Chkobba_carreau_09.svg.png"  />
              <img className="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chkobba_pique_10.svg/163px-Chkobba_pique_10.svg.png"  />
              <img className="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Chkobba_carreau_10.svg/163px-Chkobba_carreau_10.svg.png"  />
              <img className="card" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chkobba_dos.svg/163px-Chkobba_dos.svg.png"  />

            </div>
          </div>
        </div>
    
      <div id="player_top">Top Player
        <div className="player_hand">
          <div className="card turned" data-index="0">
            <div className="bckg"></div>
          </div>
          <div className="card turned" data-index="1">
            <div className="bckg"></div>
          </div>
          <div className="card turned" data-index="2">
            <div className="bckg"></div>
          </div>
          <div className="card turned" data-index="3">
            <div className="bckg"></div>
          </div>
          <div className="card turned" data-index="4">
            <div className="bckg"></div>
          </div>
          <div className="card turned" data-index="5">
            <div className="bckg"></div>
          </div>
          <div className="card turned" data-index="6">
            <div className="bckg"></div>
          </div>
        </div>
      </div>
      <div id="player_right">Right Player
        
      </div>
      <div id="piles_area">
        <div id="draw_pile">
          {/* <div className="card turned top-card">
            <div className="bckg"></div>
          </div> */}
          
        </div>
        <div className="loading"></div>
        
      </div>
      </div>
  )
}
export default App
