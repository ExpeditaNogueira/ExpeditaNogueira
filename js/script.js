const seta_topo = document.querySelector('.seta-topo');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            seta_topo.style.scale = '0';
        } else {
            seta_topo.style.scale = '1';
        }
    });
});

const alvo = document.querySelector('#cabecalho');
observer.observe(alvo);