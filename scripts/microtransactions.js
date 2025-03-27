"use strict"
function mtxUpg(n) {
  switch (n) {
    case 0:
      if (game.mtx.money >= 1) {
        game.mtx.money -= 1
        game.mtx.doublerTicks += 1200000000 * 1000
      }
      break
    case 1:
      if (game.mtx.money >= 2) {
        game.mtx.money -= 2
        game.lastTick -= 500 * 1000
      }
      break
    case 2:
      if (game.mtx.money >= 30) {
        game.mtx.money -= 30
        
        if (game.ord.b > 19) game.ord.b = Math.floor(game.ord.b * 0.95)
        else game.mtx.doubleIncs = true
      }
      break
  }
}
