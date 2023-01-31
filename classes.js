export const series = [];

class Serie {
  constructor(name, productor, prizes, broadcasters) {
    this.name = name;
    this.productor = productor;
    (this.prizes = prizes), (this.broadcasters = broadcasters);
  }
  palmares() {
    return "Rewarded at " + this.prizes.join(", ");
  }
}

series.push(
  new Serie(
    "Juego de Tronos",
    "Netflix",
    ["Cannes", "Málaga"],
    ["Amazon", "Movistar"]
  )
);

console.log(series[0]);
console.log(series[0].palmares());
