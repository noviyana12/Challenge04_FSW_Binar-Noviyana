class Component {
  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    if (this.constructor == Component) {
      throw new Error("Cannot instantiate from Abstract Class");
    }

    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }
  render() {
    return `
      <div class="col-md-4 mt-3 d-flex justify-content-center">
        <div class="card">
        <img src="${this.image}" class="card-img-top" style="height: 250px;" alt="${this.model}" />
          <div class="card-body">
            <h4 class="card-title fw-bold">${this.manufacture} ${this.model} / ${this.type}</h4>
            <h6 class="card-text">Rp. ${this.rentPerDay} / hari</h6>
            <p class="card-text mt-3">${this.description}</p>
            <div class="row text-center">
              <div class="col-md-4">
                <p class="card-text"><i class="fa fa-user"></i> ${this.capacity} Orang</p>
              </div>
              <div class="col-md-4">
                <p class="card-text"><i class="fa fa-gear"></i> ${this.transmission}</p>
              </div>
              <div class="col-md-4">
                <p class="card-text"><i class="fa fa-calendar"></i> ${this.year}</p>
              </div>
            </div>
            <a href="#" class="btn btn-light-green w-100 mt-3">Pilih Mobil</a>
          </div>
        </div>
      </div>
    `;
  }
}

class Cars extends Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }
}
