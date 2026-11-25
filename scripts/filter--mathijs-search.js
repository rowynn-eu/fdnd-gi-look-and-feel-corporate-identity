//vertuurd door Mathijs Nijhoff via teams

const input = document.getElementById('searchIcon');

const params = new URLSearchParams(window.location.search);
  input.value = params.get('q') || '';

 input.addEventListener('input', () => {
    const url = new URL(window.location);
    if (input.value) {
      url.searchParams.set('q', input.value);
    } else {
      url.searchParams.delete('q');
    }
    history.replaceState(null, '', url);
  });

    document.getElementById('searchForm')
    .addEventListener('submit', e => e.preventDefault());