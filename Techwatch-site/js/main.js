document.addEventListener('DOMContentLoaded', () => {
    const reportTitle = document.querySelector('.hero-card h1');
    const reportSubtitle = document.querySelector('.hero-copy');
    const statsContainer = document.querySelector('.hero-card__stats');
    const featuredGrid = document.querySelector('#featured .grid');
    const categoriesGrid = document.querySelector('.section--categories .grid');
    const watchlistTitle = document.querySelector('.watchlist-card h2');
    const watchlistSummary = document.querySelector('.watchlist-card p');
    const watchlistNote = document.querySelector('.watchlist-card__note');
    const referenceList = document.querySelector('#reference-list');
    const visitCountElement = document.querySelector('#visit-count');

    if (!pageData) return;

    reportTitle.textContent = `${pageData.report.title} — Semaine ${pageData.report.week} (${pageData.report.dates})`;
    reportSubtitle.textContent = pageData.report.subtitle;

    statsContainer.innerHTML = pageData.stats.map(stat => `
        <div class="stat-card">
            <span>${stat.value}</span>
            <p>${stat.label}</p>
        </div>
    `).join('');

    featuredGrid.innerHTML = pageData.featured.map(item => `
        <article class="card ${item.variant === 'highlight' ? 'card--highlight' : ''} ${item.variant === 'alert' ? 'card--alert' : ''}">
            <span class="card__tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <p class="card__source">Source : ${item.source} — <a href="${item.url}">${item.source}</a></p>
        </article>
    `).join('');

    categoriesGrid.innerHTML = pageData.categories.map(item => `
        <article id="${item.id}" class="category-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p class="category-card__source">Source : <a href="${item.url}">${item.source}</a></p>
        </article>
    `).join('');

    watchlistTitle.textContent = pageData.watchlist.title;
    watchlistSummary.textContent = pageData.watchlist.summary;
    watchlistNote.textContent = pageData.watchlist.note;

    if (referenceList && pageData.externalLinks) {
        referenceList.innerHTML = pageData.externalLinks.map(link => `
            <li><a href="${link.url}" rel="noreferrer noopener">${link.title}</a></li>
        `).join('');
    }

    if (visitCountElement) {
        const visits = Number(localStorage.getItem('techwatch_visit_count') || '0') + 1;
        localStorage.setItem('techwatch_visit_count', visits);
        visitCountElement.textContent = visits;
    }
});
