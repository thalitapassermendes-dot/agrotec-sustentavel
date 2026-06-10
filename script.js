// Mostrar informações sobre culturas
function showInfo(cultura) {
    const infoBox = document.getElementById('info-box');
    let info = '';

    switch(cultura) {
        case 'soja':
            info = 'A soja é uma cultura essencial para alimentos e biocombustíveis.';
            break;
        case 'milho':
            info = 'O milho é versátil e sustentável quando cultivado corretamente.';
            break;
        case 'trigo':
            info = 'O trigo é fundamental na alimentação global e na economia agrícola.';
            break;
        default:
            info = '';
    }

    infoBox.textContent = info;
}

// Mudar tema claro/escuro
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Mensagem enviada com sucesso!';
    this.reset();
});
