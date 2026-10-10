// 🌟 1. Стартовая анимация исчезновения экрана загрузки (Preloader)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 2000); 
});

// 2. Sahifa aylantirilganda navigatsiya havolalarini faollashtirish
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 120) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#cbd5e1'; 
        if (link.getAttribute('href').includes(currentSection)) {
            link.style.color = '#0ea5e9'; 
        }
    });
});

// 📋 3. ИНТЕРАКТИВНОЕ ОКНО С КОДОМ (Доказательство для ментора)
const projectCodes = {
    landing: `<!-- O'quv Landing Page kodi (HTML + CSS) -->\n<div class="header">\n  <h1>Mening birinchi saytim</h1>\n  <p>Stillar CSS faylda sozlangan</p>\n</div>`,
    portfolio: `<!-- Portfolio kodi (HTML) -->\n<section id="skills">\n  <h2>Ko'nikmalar</h2>\n  <div class="card">HTML, CSS, JS</div>\n</section>`,
    'js-project': `// Interaktiv JS kodi (JavaScript)\nlet count = 0;\nfunction increment() {\n  count++;\n  console.log("Bosildi: " + count);\n}`
};

const modal = document.getElementById('code-modal');
const codeDisplay = document.getElementById('code-display');
const closeBtn = document.querySelector('.close-modal');

// Нажатие на кнопку "Kodlarni ko'rish"
document.querySelectorAll('.view-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const projectKey = btn.getAttribute('data-project');
        codeDisplay.textContent = projectCodes[projectKey]; // Подставляем нужный код
        modal.style.display = 'flex'; // Показываем окно
    });
});

// Закрытие окна при клике на крестик
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие окна при клике в любое пустое место экрана
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

