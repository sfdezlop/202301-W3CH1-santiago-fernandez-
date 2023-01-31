import { series } from "./classes.js";

// const series = [];

// class Serie {
//   constructor(name, productor, prizes, broadcasters) {
//     this.name = name;
//     this.productor = productor;
//     (this.prizes = prizes), (this.broadcasters = broadcasters);
//   }
//   palmares() {
//     return "Rewarded at " + this.prizes.join(", ");
//   }
// }

// series.push(
//   new Serie(
//     "Juego de Tronos",
//     "Netflix",
//     ["Cannes", "Málaga"],
//     ["Amazon", "Movistar"]
//   )
// );


describe("Testing Class Series", () => {
  test("El primer premio de la serie Juego de Tronos fue en Cannes ", () => {

    const result=series[0].palmares();
    expect(result).toBe('Rewarded at Cannes, Málaga');
  });
});
