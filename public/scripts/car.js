class Car {
  constructor() {
    this.carContainer = document.getElementById("car-container");
    this.notFound = document.getElementById("not-found");
    this.searchBtn = document.getElementById("search-btn");
    this.driverType = document.getElementById("driver-type");
    this.passengerValue = document.getElementById("passenger-value");
    this.pickUpTime = document.getElementById("time");
    this.date = document.getElementById("tanggal");
  }

  async init() {
    await this.load();
    this.searchBtn.onclick = console.log("button berhasil diklik");
    this.searchBtn.onclick = this.search;
  }

  search = () => {
    let dateTime = new Date(`${this.date.value}`);
    let year = dateTime.getFullYear();
    console.log(dateTime.getFullYear());
    let cards = "";

    if (this.driverType.value == "dengansopir") {
      let result = Cars.list.filter(
        (car) =>
          car.available == true &&
          car.capacity >= this.passengerValue.value &&
          car.year >= year
      );

      result.forEach((result) => {
        cards += result.render();
        this.carContainer.innerHTML = cards;
      });

      //console.log(result);
      if (result != "") {
        console.log(result);
      } else {
        let alerts = `<div class="alert alert-danger text-center" role="alert">
          Tidak ada data!
    </div>`;

        this.notFound.innerHTML = alerts;
        console.log("ga ada data");
      }
    } else if (this.driverType.value == "tanpasopir") {
      let result2 = Cars.list.filter(
        (car) =>
          car.available == false &&
          car.capacity >= this.passengerValue.value &&
          car.year >= year
      );

      result2.forEach((result) => {
        cards += result.render();
        this.carContainer.innerHTML = cards;
      });

      //console.log(result);
      if (result2 != "") {
        console.log(result2);
      } else {
        let alerts = `<div class="alert alert-danger text-center" role="alert">
          Tidak ada data!
    </div>`;

        this.notFound.innerHTML = alerts;
        console.log("ga ada data");
      }
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Cars.init(cars);
  }
}
