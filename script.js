const images = [
    'https://picsum.photos/id/1/200/300',
    'https://picsum.photos/id/2/200/300',
    'https://picsum.photos/id/3/200/300',
    'https://picsum.photos/id/4/200/300',
    'https://picsum.photos/id/5/200/300',
    'https://picsum.photos/id/6/200/300',
    'https://picsum.photos/id/7/200/300',
    'https://picsum.photos/id/8/200/300',
    'https://picsum.photos/id/9/200/300',
    'https://picsum.photos/id/10/200/300',
    'https://picsum.photos/id/11/200/300',
    'https://picsum.photos/id/12/200/300',
    'https://picsum.photos/id/13/200/300',
    'https://picsum.photos/id/14/200/300',
    'https://picsum.photos/id/15/200/300',
    'https://picsum.photos/id/16/200/300',
    'https://picsum.photos/id/17/200/300',
    'https://picsum.photos/id/18/200/300',
    'https://picsum.photos/id/19/200/300',
    'https://picsum.photos/id/20/200/300',
];

const gallery = document.querySelector('.gallery');

images.forEach((src, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${index + 1}.Resim`;
    img.dataset.bsToggle = 'modal';
    img.dataset.bsTarget = '#imageModal';
    img.onclick = () => {
        document.getElementById('modalImage').src = src;
    };
    col.appendChild(img);
    gallery.appendChild(col);
});


dodocument.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('imageModal'); // Modal ID'sini buraya ekleyin

    modal.addEventListener('show.bs.modal', function () {
        // Modal gösterildiðinde çalýþacak kod
        setTimeout(function () {
            var backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.classList.add('blur-backdrop');
            }
        }, 10); // Arka planýn oluþmasý için kýsa bir gecikme
    });

    modal.addEventListener('hidden.bs.modal', function () {
        // Modal gizlendiðinde çalýþacak kod
        var backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.classList.remove('blur-backdrop');
        }
    });
});