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

let sayi = 9999999;
let date = new date();