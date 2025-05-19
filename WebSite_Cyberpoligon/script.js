document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('shifted');

        // Изменяем иконку кнопки при открытии/закрытии
        if (sidebar.classList.contains('active')) {
            this.innerHTML = '×';
        } else {
            this.innerHTML = '☰';
        }
    });

    // Убираем синий цвет у ссылок
    document.querySelectorAll('a').forEach(link => {
        link.style.color = 'inherit';
        link.addEventListener('mouseover', function () {
            if (!this.classList.contains('active')) {
                this.style.color = '#4CAF50';
            }
        });
        link.addEventListener('mouseout', function () {
            if (!this.classList.contains('active')) {
                this.style.color = 'inherit';
            }
        });
    });
});