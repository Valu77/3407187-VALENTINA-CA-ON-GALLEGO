/* ============================================
   PROYECTO SEMANA 01 - FICHA DE INFORMACIÓN INTERACTIVA
   Dominio: Asesoría Agronómica - AgroAsesor
   ============================================ */

// ============================================
// DATOS PRINCIPALES DEL DOMINIO
// ============================================

const entityData = {
  name: 'AgroAsesor',
  description: 'Aplicación web de asesoría agronómica que brinda recomendaciones sobre cultivos, fertilización, riego y control de plagas.',
  identifier: 'AGR-2026',

  contact: {
    email: 'valentinamimin@gmail.com',
    phone: '3042877302',
    location: 'Colombia'
  },

  items: [
    { name: 'Diagnóstico de cultivos', level: 95, category: 'servicio' },
    { name: 'Control de plagas', level: 90, category: 'servicio' },
    { name: 'Optimización de riego', level: 88, category: 'servicio' },
    { name: 'Recomendación de fertilización', level: 92, category: 'servicio' },
    { name: 'Asesoría sostenible', level: 85, category: 'servicio' }
  ],

  links: [
    { platform: 'WhatsApp', url: 'https://wa.me/', icon: '📱' },
    { platform: 'Correo', url: 'valentinamimin@gmail.com', icon: '✉️' }
  ],

  stats: {
    total: 120,
    active: 85,
    rating: 4.9,
    custom: 5
  }
};

// ============================================
// REFERENCIAS AL DOM
// ============================================

const entityName = document.getElementById('entity-name');
const entityDescription = document.getElementById('entity-description');
const itemsList = document.getElementById('items-list');
const statsContainer = document.getElementById('stats');
const linksContainer = document.getElementById('links');
const themeToggle = document.getElementById('theme-toggle');
const copyBtn = document.getElementById('copy-btn');
const toggleItemsBtn = document.getElementById('toggle-items');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// ============================================
// RENDER INFORMACIÓN BÁSICA
// ============================================

const renderBasicInfo = () => {
  const { name, description, contact: { email, phone, location } } = entityData;

  entityName.textContent = name;

  entityDescription.innerHTML = `
    <p>${description}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Ubicación:</strong> ${location}</p>
  `;
};

// ============================================
// RENDER ITEMS
// ============================================

const renderItems = (showAll = false) => {
  const { items } = entityData;

  const itemsToShow = showAll ? items : items.slice(0, 4);

  const itemsHtml = itemsToShow.map(item => {
    const { name, level } = item;

    return `
      <div class="item">
        <div class="item-name">${name}</div>
        <div class="item-level">
          <span>${level}%</span>
          <div class="level-bar">
            <div class="level-fill" style="width: ${level}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  itemsList.innerHTML = itemsHtml;
};

// ============================================
// RENDER LINKS
// ============================================

const renderLinks = () => {
  const { links } = entityData;

  const linksHtml = links.map(link => {
    const { platform, url, icon } = link;

    return `
      <a href="${url}" target="_blank">
        ${icon} ${platform}
      </a>
    `;
  }).join('');

  linksContainer.innerHTML = linksHtml;
};

// ============================================
// RENDER STATS
// ============================================

const renderStats = () => {
  const { stats } = entityData;

  const statsArray = [
    { label: 'Usuarios Totales', value: stats.total },
    { label: 'Activos', value: stats.active },
    { label: 'Calificación', value: stats.rating },
    { label: 'Servicios', value: stats.custom }
  ];

  const statsHtml = statsArray.map(stat => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');

  statsContainer.innerHTML = statsHtml;
};

// ============================================
// CAMBIO DE TEMA
// ============================================

const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';

  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

// ============================================
// COPIAR INFORMACIÓN
// ============================================

const copyInfo = () => {
  const { name, description, contact } = entityData;

  const infoText = `
${name}
${description}
Contacto: ${contact?.email ?? 'No disponible'}
  `.trim();

  navigator.clipboard.writeText(infoText);

  showToast('¡Información copiada!');
};

const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

// ============================================
// MOSTRAR / OCULTAR ITEMS
// ============================================

let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;

  renderItems(showingAllItems);

  toggleItemsBtn.textContent = showingAllItems ? 'Mostrar menos' : 'Mostrar más';
};

// ============================================
// EVENT LISTENERS
// ============================================

themeToggle.addEventListener('click', toggleTheme);
copyBtn.addEventListener('click', copyInfo);
toggleItemsBtn.addEventListener('click', handleToggleItems);

// ============================================
// INIT
// ============================================

const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
  console.log('✅ Aplicación AgroAsesor inicializada correctamente');
};

init();
