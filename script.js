document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('.selection-bar input[type="radio"]');
    const contents = document.querySelectorAll('.content');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            contents.forEach(content => {
                content.style.display = 'none';
            });

            const selectedContent = document.getElementById(`content-${radio.id}`);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    });
});