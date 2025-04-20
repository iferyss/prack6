window.addEventListener('load', function() {
    alert('Добро пожаловать в мой блог о путешествиях по Москве!');
});

if (document.getElementById('map')) {
    var map = L.map('map').setView([55.7558, 37.6173], 11); 

    var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © <a href="https://www.esri.com">Esri</a>',
        maxZoom: 18
    });

    var streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    });

    satellite.addTo(map);
    streets.addTo(map);

    var baseMaps = {
        "Гибрид": L.layerGroup([satellite, streets]),
        "Схема": streets,
        "Спутник": satellite
    };
    L.control.layers(baseMaps).addTo(map);

    var places = [
        {
            id: 'red-square',
            name: 'Красная площадь',
            coords: [55.7539, 37.6208],
            tooltip: 'Сердце Москвы с Собором Василия Блаженного.'
        },
        {
            id: 'gorky-park',
            name: 'Парк Горького',
            coords: [55.7298, 37.6006],
            tooltip: 'Оазис для отдыха и развлечений.'
        },
        {
            id: 'vdnh',
            name: 'ВДНХ',
            coords: [55.8310, 37.6298],
            tooltip: 'Советская эпоха и современные выставки.'
        },
        {
            id: 'bolshoi',
            name: 'Большой театр',
            coords: [55.7601, 37.6186],
            tooltip: 'Центр мирового балета и оперы.'
        },
        {
            id: 'zaryadye',
            name: 'Парк Зарядье',
            coords: [55.7510, 37.6289],
            tooltip: 'Современный парк с парящим мостом.'
        },
        {
            id: 'kolomenskoye',
            name: 'Коломенское',
            coords: [55.6678, 37.6688],
            tooltip: 'Историческая усадьба с яблоневыми садами.'
        },
        {
            id: 'arbat',
            name: 'Арбат',
            coords: [55.7500, 37.5931],
            tooltip: 'Богемная улица с уличными артистами.'
        }
    ];

    places.forEach(function(place) {
        var marker = L.marker(place.coords).addTo(map)
            .bindPopup(place.tooltip);
        marker.on('click', function() {
            document.getElementById(place.id).scrollIntoView({ behavior: 'smooth' });
        });
    });
}

if (document.getElementById('explore')) {
    document.getElementById('explore').addEventListener('click', function() {
        alert('Погрузитесь в мои приключения по Москве!');
    });
}

if (document.querySelector('form')) {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за ваше сообщение!');
    });
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});