// ============================================
// ESTADO GLOBAL
// ============================================

let items = [];
let editingItemId = null;

// ============================================
// CATEGORÍAS AGRONÓMICAS
// ============================================

const CATEGORIES = {
  cereal: { name: 'Cereal', emoji: '🌽' },
  hortaliza: { name: 'Hortaliza', emoji: '🥦' },
  frutal: { name: 'Frutal', emoji: '🍎' },
  leguminosa: { name: 'Leguminosa', emoji: '🌱' },
  otro: { name: 'Otro', emoji: '🌾' },
};

const PRIORITIES = {
  high: { name: 'Urgente', color: '#c62828' },
  medium: { name: 'Media', color: '#f9a825' },
  low: { name: 'Baja', color: '#43a047' },
};

// ============================================
// PERSISTENCIA
// ============================================

const loadItems = () =>
  JSON.parse(localStorage.getItem('agroFichas') ?? '[]');

const saveItems = itemsToSave =>
  localStorage.setItem('agroFichas', JSON.stringify(itemsToSave));

// ============================================
// CRUD
// ============================================

const createItem = (itemData = {}) => {
  const newItem = {
    id: Date.now(),
    name: itemData.name ?? '',
    description: itemData.description ?? '',
    category: itemData.category ?? 'otro',
    priority: itemData.priority ?? 'medium',
    area: itemData.area ?? '',
    evaluationDate: itemData.evaluationDate ?? '',
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: null,
    ...itemData,
  };

  const newItems = [...items, newItem];
  saveItems(newItems);
  return newItems;
};

const updateItem = (id, updates) => {
  const updatedItems = items.map(item =>
    item.id === id
      ? { ...item, ...updates, updatedAt: new Date().toISOString() }
      : item
  );

  saveItems(updatedItems);
  return updatedItems;
};

const deleteItem = id => {
  const filtered = items.filter(item => item.id !== id);
  saveItems(filtered);
  return filtered;
};

const toggleItemActive = id => {
  const updated = items.map(item =>
    item.id === id
      ? { ...item, active: !item.active, updatedAt: new Date().toISOString() }
      : item
  );

  saveItems(updated);
  return updated;
};

const clearInactive = () => {
  const activeItems = items.filter(item => item.active);
  saveItems(activeItems);
  return activeItems;
};

// ============================================
// FILTROS
// ============================================

const filterByStatus = (itemsToFilter, status = 'all') => {
  if (status === 'all') return itemsToFilter;
  if (status === 'active') return itemsToFilter.filter(i => i.active);
  if (status === 'inactive') return itemsToFilter.filter(i => !i.active);
  return itemsToFilter;
};

const filterByCategory = (itemsToFilter, category = 'all') =>
  category === 'all'
    ? itemsToFilter
    : itemsToFilter.filter(i => i.category === category);

const filterByPriority = (itemsToFilter, priority = 'all') =>
  priority === 'all'
    ? itemsToFilter
    : itemsToFilter.filter(i => i.priority === priority);

const searchItems = (itemsToFilter, query = '') => {
  if (!query.trim()) return itemsToFilter;
  const searchTerm = query.toLowerCase();

  return itemsToFilter.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    (item.description ?? '').toLowerCase().includes(searchTerm)
  );
};

const applyFilters = (itemsToFilter, filters = {}) => {
  const {
    status = 'all',
    category = 'all',
    priority = 'all',
    search = '',
  } = filters;

  let result = filterByStatus(itemsToFilter, status);
  result = filterByCategory(result, category);
  result = filterByPriority(result, priority);
  result = searchItems(result, search);

  return result;
};

// ============================================
// ESTADÍSTICAS
// ============================================

const getStats = (itemsToAnalyze = []) => {
  const total = itemsToAnalyze.length;
  const active = itemsToAnalyze.filter(i => i.active).length;
  const inactive = total - active;

  const byCategory = itemsToAnalyze.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});

  const byPriority = itemsToAnalyze.reduce((acc, item) => {
    acc[item.priority] = (acc[item.priority] ?? 0) + 1;
    return acc;
  }, {});

  return { total, active, inactive, byCategory, byPriority };
};

// ============================================
// RENDER
// ============================================

const getCategoryEmoji = category =>
  CATEGORIES[category]?.emoji ?? '🌾';

const formatDate = dateString =>
  new Date(dateString).toLocaleDateString('es-ES');

const renderItem = item => {
  const {
    id,
    name,
    description,
    category,
    priority,
    active,
    createdAt,
    area,
    evaluationDate,
  } = item;

  return `
    <div class="item-card priority-${priority}" data-item-id="${id}">
      <h3>${getCategoryEmoji(category)} ${name}</h3>
      ${description ? `<p>${description}</p>` : ''}
      <div class="task-meta">
        <span class="badge badge-category">
          ${CATEGORIES[category]?.name}
        </span>
        <span class="badge badge-priority-${priority}">
          ${PRIORITIES[priority]?.name}
        </span>
        ${area ? `<span>🌍 ${area} ha</span>` : ''}
        ${evaluationDate ? `<span>📅 ${evaluationDate}</span>` : ''}
        <span>🕒 ${formatDate(createdAt)}</span>
      </div>
      <div class="task-actions">
        <button class="btn-edit">✏️</button>
        <button class="btn-delete">🗑️</button>
        <button class="btn-toggle">${active ? '✔️' : '⏳'}</button>
      </div>
    </div>
  `;
};

const renderItems = itemsToRender => {
  const itemList = document.getElementById('item-list');
  const emptyState = document.getElementById('empty-state');

  if (itemsToRender.length === 0) {
    itemList.innerHTML = '';
    emptyState.classList.add('show');
  } else {
    emptyState.classList.remove('show');
    itemList.innerHTML = itemsToRender.map(renderItem).join('');
  }
};

const renderStats = stats => {
  document.getElementById('stat-total').textContent = stats.total;
  document.getElementById('stat-active').textContent = stats.active;
  document.getElementById('stat-inactive').textContent = stats.inactive;
};

// ============================================
// EVENTOS
// ============================================

const handleFormSubmit = e => {
  e.preventDefault();

  const name = document.getElementById('item-name').value.trim();
  if (!name) return alert('El nombre del cultivo es obligatorio');

  const itemData = {
    name,
    description: document.getElementById('item-description').value.trim(),
    category: document.getElementById('item-category').value,
    priority: document.getElementById('item-priority').value,
    area: document.getElementById('item-area')?.value ?? '',
    evaluationDate: document.getElementById('item-date')?.value ?? '',
  };

  items = editingItemId
    ? updateItem(editingItemId, itemData)
    : createItem(itemData);

  resetForm();
  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

const handleItemDelete = id => {
  if (!confirm('¿Eliminar esta ficha?')) return;
  items = deleteItem(id);
  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

const handleItemToggle = id => {
  items = toggleItemActive(id);
  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

const getCurrentFilters = () => ({
  status: document.getElementById('filter-status').value,
  category: document.getElementById('filter-category').value,
  priority: document.getElementById('filter-priority').value,
  search: document.getElementById('search-input').value,
});

const applyCurrentFilters = () =>
  applyFilters(items, getCurrentFilters());

const resetForm = () => {
  document.getElementById('item-form').reset();
  editingItemId = null;
};

// ============================================
// LISTENERS
// ============================================

const attachEventListeners = () => {
  document
    .getElementById('item-form')
    .addEventListener('submit', handleFormSubmit);

  document
    .getElementById('item-list')
    .addEventListener('click', e => {
      const card = e.target.closest('.item-card');
      if (!card) return;

      const id = Number(card.dataset.itemId);

      if (e.target.classList.contains('btn-delete')) {
        handleItemDelete(id);
      }

      if (e.target.classList.contains('btn-toggle')) {
        handleItemToggle(id);
      }
    });

  document
    .querySelectorAll('.filters select, #search-input')
    .forEach(el =>
      el.addEventListener('change', () =>
        renderItems(applyCurrentFilters())
      )
    );
};

// ============================================
// INIT
// ============================================

const init = () => {
  items = loadItems();
  renderItems(items);
  renderStats(getStats(items));
  attachEventListeners();
  console.log('🌱 AgroAsesor iniciado correctamente');
};

document.addEventListener('DOMContentLoaded', init);