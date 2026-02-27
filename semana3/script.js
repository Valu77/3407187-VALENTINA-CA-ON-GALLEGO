// ============================================
// SISTEMA DE ASESORÍA AGRONÓMICA
// ============================================

// ============================================
// CLASE BASE - Service
// ============================================

class Service {
  #id;
  #name;
  #active;
  #location;
  #dateCreated;

  constructor(name, location) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#location = location;
    this.#active = true;
    this.#dateCreated = new Date().toISOString();
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get isActive() { return this.#active; }
  get location() { return this.#location; }
  get dateCreated() { return this.#dateCreated; }

  set location(value) {
    if (!value || value.trim() === '') {
      throw new Error('La ubicación no puede estar vacía');
    }
    this.#location = value.trim();
  }

  activate() {
    this.#active = true;
  }

  deactivate() {
    this.#active = false;
  }

  getInfo() {
    throw new Error('Debe implementarse en la clase hija');
  }

  getType() {
    return this.constructor.name;
  }
}

// ============================================
// CLASES DERIVADAS
// ============================================

class CropAdvisory extends Service {
  #cropType;
  #season;

  constructor(name, location, cropType, season) {
    super(name, location);
    this.#cropType = cropType;
    this.#season = season;
  }

  get cropType() { return this.#cropType; }
  get season() { return this.#season; }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
      cropType: this.#cropType,
      season: this.#season,
      active: this.isActive,
      type: this.getType()
    };
  }
}

class SoilAnalysis extends Service {
  #phLevel;
  #nutrients;

  constructor(name, location, phLevel, nutrients) {
    super(name, location);
    this.#phLevel = phLevel;
    this.#nutrients = nutrients;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
      phLevel: this.#phLevel,
      nutrients: this.#nutrients,
      active: this.isActive,
      type: this.getType()
    };
  }
}

class IrrigationPlan extends Service {
  #waterSource;
  #area;

  constructor(name, location, waterSource, area) {
    super(name, location);
    this.#waterSource = waterSource;
    this.#area = area;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
      waterSource: this.#waterSource,
      area: this.#area,
      active: this.isActive,
      type: this.getType()
    };
  }
}

// ============================================
// CLASE BASE USER
// ============================================

class User {
  #id;
  #name;
  #email;
  #registrationDate;

  constructor(name, email) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.email = email;
    this.#registrationDate = new Date().toISOString();
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get email() { return this.#email; }
  get registrationDate() { return this.#registrationDate; }

  set email(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      throw new Error('Email inválido');
    }
    this.#email = value;
  }
}

class Agronomist extends User {
  #specialty;

  constructor(name, email, specialty) {
    super(name, email);
    this.#specialty = specialty;
  }
}

class Client extends User {
  #farmSize;

  constructor(name, email, farmSize) {
    super(name, email);
    this.#farmSize = farmSize;
  }
}

// ============================================
// SISTEMA PRINCIPAL
// ============================================

class AdvisorySystem {
  #items = [];
  #users = [];

  static {
    this.VERSION = "1.0.0";
    this.SYSTEM_NAME = "Agro Advisory System";
    console.log(`${this.SYSTEM_NAME} v${this.VERSION} cargado`);
  }

  addItem(item) {
    if (!(item instanceof Service)) {
      return { success: false };
    }
    this.#items.push(item);
    return { success: true };
  }

  getAllItems() {
    return [...this.#items];
  }

  getStats() {
    const total = this.#items.length;
    const active = this.#items.filter(i => i.isActive).length;
    const inactive = total - active;

    return { total, active, inactive };
  }

  addUser(user) {
    if (!(user instanceof User)) return;
    this.#users.push(user);
  }
}

// ============================================
// INSTANCIA
// ============================================

const system = new AdvisorySystem();

// Datos de prueba
system.addItem(new CropAdvisory("Asesoría Maíz", "Tolima", "Maíz", "Primavera"));
system.addItem(new SoilAnalysis("Análisis Finca Norte", "Huila", 6.5, "NPK"));
system.addItem(new IrrigationPlan("Riego Goteo", "Córdoba", "Pozo", 5));

console.log(system.getAllItems());
console.log(system.getStats());
// ============================================
// CONEXIÓN CON LA INTERFAZ (DOM)
// ============================================

// Referencias HTML
const totalServicesEl = document.getElementById("totalServices");
const activeServicesEl = document.getElementById("activeServices");
const inactiveServicesEl = document.getElementById("inactiveServices");
const serviciosSection = document.querySelector("#servicios .card-container");

// ============================================
// ACTUALIZAR ESTADÍSTICAS EN PANTALLA
// ============================================

function updateStatsUI() {
  const stats = system.getStats();
  totalServicesEl.textContent = stats.total;
  activeServicesEl.textContent = stats.active;
  inactiveServicesEl.textContent = stats.inactive;
}

// ============================================
// MOSTRAR SERVICIOS EN PANTALLA
// ============================================

function renderServices() {
  serviciosSection.innerHTML = "";

  system.getAllItems().forEach(service => {
    const info = service.getInfo();

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${info.name}</h3>
      <p><strong>Ubicación:</strong> ${info.location}</p>
      <p><strong>Tipo:</strong> ${info.type}</p>
      <p><strong>Estado:</strong> ${info.active ? "Activo" : "Inactivo"}</p>
      <button data-id="${info.id}">Cambiar Estado</button>
    `;

    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
      if (service.isActive) {
        service.deactivate();
      } else {
        service.activate();
      }
      renderServices();
      updateStatsUI();
    });

    serviciosSection.appendChild(card);
  });
}

// ============================================
// CREAR FORMULARIO DINÁMICO
// ============================================

function createForm() {
  const form = document.createElement("form");
  form.style.marginBottom = "2rem";

  form.innerHTML = `
    <h3>Registrar Nuevo Proyecto</h3>
    <input type="text" id="name" placeholder="Nombre del proyecto" required />
    <input type="text" id="location" placeholder="Ubicación" required />
    <select id="type">
      <option value="crop">Asesoría Cultivo</option>
      <option value="soil">Análisis Suelo</option>
      <option value="irrigation">Plan de Riego</option>
    </select>
    <button type="submit">Guardar Proyecto</button>
    <hr>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value;
    const location = form.querySelector("#location").value;
    const type = form.querySelector("#type").value;

    let newService;

    if (type === "crop") {
      newService = new CropAdvisory(name, location, "General", "2026");
    }

    if (type === "soil") {
      newService = new SoilAnalysis(name, location, 6.5, "NPK");
    }

    if (type === "irrigation") {
      newService = new IrrigationPlan(name, location, "Reservorio", 10);
    }

    system.addItem(newService);

    form.reset();
    renderServices();
    updateStatsUI();
  });

  document.querySelector("#servicios").prepend(form);
}

// ============================================
// INICIALIZACIÓN
// ============================================

renderServices();
updateStatsUI();
createForm();

