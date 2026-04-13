document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');
    const contents = document.querySelectorAll('.accordion-content');

    headers.forEach((header, index) => {
        header.addEventListener('click', function() {
            contents.forEach((content, i) => {
                if (i === index) {
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
});
