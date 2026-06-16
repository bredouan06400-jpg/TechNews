// Populate header
document.getElementById('week').textContent = pageData.report.week;
document.getElementById('dates').textContent = pageData.report.dates;
document.getElementById('title').textContent = pageData.report.title;
document.getElementById('subtitle').textContent = pageData.report.subtitle;

// Populate featured section
const featuredGrid = document.getElementById('featured-grid');
pageData.featured.forEach(item => {
    const card = document.createElement('div');
    card.className = `featured-card ${item.variant}`;
    card.innerHTML = `
        <div class="card-tag ${item.tag.toLowerCase()}">${item.tag}</div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-summary">${item.summary}</p>
        <a href="${item.url}" target="_blank" class="card-source">
            <span>📍</span>
            <span>${item.source}</span>
        </a>
    `;
    featuredGrid.appendChild(card);
});

// Populate categories section
const categoriesGrid = document.getElementById('categories-grid');
pageData.categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
        <div class="category-id">${category.id}</div>
        <h3>${category.title}</h3>
        <p>${category.description}</p>
        <a href="${category.url}" target="_blank" class="category-source">
            <span>🔗</span>
            <span>${category.source}</span>
        </a>
    `;
    categoriesGrid.appendChild(card);
});

// Populate watchlist section
document.getElementById('watchlist-title').textContent = pageData.watchlist.title;
document.getElementById('watchlist-summary').textContent = pageData.watchlist.summary;
document.getElementById('watchlist-note').textContent = pageData.watchlist.note;

// Populate stats section
const statsGrid = document.getElementById('stats-grid');
pageData.stats.forEach(stat => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
    `;
    statsGrid.appendChild(card);
});

// Populate external links section
const linksGrid = document.getElementById('links-grid');
pageData.externalLinks.forEach(link => {
    const card = document.createElement('a');
    card.href = link.url;
    card.target = '_blank';
    card.className = 'link-card';
    card.innerHTML = `<span>${link.title}</span>`;
    linksGrid.appendChild(card);
});
