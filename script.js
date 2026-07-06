const spines = document.querySelectorAll('.spine');
  const panels = document.querySelectorAll('.panel');

  function goTo(id){
    spines.forEach(s => {
      const active = s.dataset.tab === id;
      s.classList.toggle('active', active);
      s.setAttribute('aria-selected', active);
    });
    panels.forEach(p => p.classList.toggle('active', p.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#' + id);
  }

  spines.forEach(s => s.addEventListener('click', () => goTo(s.dataset.tab)));

  window.addEventListener('DOMContentLoaded', () => {
    const hash = location.hash.replace('#','');
    if (hash && document.getElementById(hash)) goTo(hash);
  });
