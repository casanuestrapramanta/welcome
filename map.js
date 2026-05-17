function initMap() {
    // ── MAP DATA — ΕΠΑΛΗΘΕΥΜΕΝΑ ──
    // Πηγές: allovergreece.com, mytzoumerka.gr, allovergreece.com caves,
    //        voreiatzoumerka.gr, hotellanassa.gr, ipernity.com
    const PLACES = [

        // ── ΑΞΙΟΘΕΑΤΑ ──
        {
            lat: 39.5267, lng: 21.1029,
            category: 'sight', emoji: '🏠', color: '#2d6a4f',
            title: 'Casa Nuestra',
            desc: 'Η βάση σας στα Τζουμέρκα. Πράμαντα, 840μ. υψόμετρο, έδρα του Δήμου Βορείων Τζουμέρκων.',
            tag: 'Βάση σας', tagClass: ''
        },
        {
            lat: 39.584, lng: 21.124,
            category: 'sight', emoji: '🏛️', color: '#5a7a30',
            title: 'Μουσείο Αργυροτεχνίας Καλαρρύτων',
            desc: 'Μοναδικό μουσείο αφιερωμένο στην παραδοσιακή αργυροτεχνία. Γενέτειρα του οίκου Bulgari.',
            tag: 'Μουσείο', tagClass: ''
        },
        {
            lat: 39.594, lng: 21.108,
            category: 'sight', emoji: '🏘️', color: '#5a7a30',
            title: 'Συρράκο',
            desc: 'Παραδοσιακό βλάχικο χωριό 1.150μ., ανακηρυγμένο διατηρητέο μνημείο. Γενέτειρα του Κολέττη.',
            tag: 'Αξιοθέατο', tagClass: ''
        },
        {
            lat: 39.568, lng: 21.130,
            category: 'sight', emoji: '⛪', color: '#5a7a30',
            title: 'Μονή Κηπίνας',
            desc: 'Μοναστήρι λαξευμένο στο βράχο (1212μ.Χ.), πάνω από τη χαράδρα του Καλαρρύτικου. Πρόσβαση μόνο από κρεμαστή ξύλινη γέφυρα.',
            tag: 'Μοναστήρι', tagClass: ''
        },
        {
            lat: 39.556, lng: 20.972,
            category: 'sight', emoji: '⛪', color: '#5a7a30',
            title: 'Μονή Παναγίας Τσούκας',
            desc: 'Το μεγαλύτερο προσκύνημα του Ν. Ιωαννίνων (1190μ.Χ.), 760μ., θέα στη χαράδρα του Αράχθου. Κοντά στο χωριό Ελληνικό.',
            tag: 'Μοναστήρι', tagClass: ''
        },
        {
            lat: 39.513, lng: 21.087,
            category: 'sight', emoji: '🕳️', color: '#5a7a30',
            title: 'Σπήλαιο Ανεμότρυπα',
            desc: 'Το πιο λευκό σπήλαιο στην Ελλάδα, 3χλμ. από τα Πράμαντα, 900μ. Ανακαλύφθηκε 1960. Μήκος 270μ., είσοδος 3€.',
            tag: 'Σπήλαιο', tagClass: ''
        },

        // ── ΦΥΣΗ / ΧΩΡΙΑ ──
        {
            lat: 39.584, lng: 21.124,
            category: 'nature', emoji: '🌾', color: '#52b788',
            title: 'Καλαρρύτες',
            desc: 'Παραδοσιακός οικισμός 1.120μ., ανακηρυγμένος διατηρητέο μνημείο. Γνωστός για αργυροτεχνία και βλάχικη παράδοση.',
            tag: 'Φύση / Χωριό', tagClass: 'natura'
        },
        {
            lat: 39.591, lng: 21.109,
            category: 'nature', emoji: '🏔️', color: '#52b788',
            title: 'Μονοπάτι Συρράκου–Καλαρρυτών',
            desc: 'Ιστορικό καλντερίμι 5χλμ. που ενώνει τα δύο παραδοσιακά χωριά μέσα από τη χαράδρα του Χρούσια. Μέρος του Epirus Trail.',
            tag: 'Πεζοπορία', tagClass: 'natura'
        },
        {
            lat: 39.527, lng: 21.103,
            category: 'nature', emoji: '🌿', color: '#52b788',
            title: 'Πράμαντα — Κεντρική Πλατεία',
            desc: 'Έδρα Δήμου Βορείων Τζουμέρκων, 840μ. Ο υπεραιωνόβιος πλάτανος και η βρύση "Αράπης" είναι η καρδιά του χωριού.',
            tag: 'Χωριό', tagClass: 'natura'
        },

        // ── ΚΑΤΑΡΡΑΚΤΕΣ ──
        {
            lat: 39.562, lng: 21.160,
            category: 'waterfall', emoji: '💧', color: '#4a90d9',
            title: 'Καταρράκτης Καμίλη (Ματσούκι)',
            desc: 'Ύψος 42μ., τροφοδοτείται από 4-5 φυσικές πηγές. Οκτώ διαδοχικοί καταρράκτες. Ρέει ακόμα και το καλοκαίρι.',
            tag: 'Καταρράκτης', tagClass: 'waterfall'
        },
        {
            lat: 39.496, lng: 21.009,
            category: 'waterfall', emoji: '💧', color: '#4a90d9',
            title: 'Καταρράκτης Κλίφκης (Καλέντζι)',
            desc: 'Ύψος 47μ., κοντά στο χωριό Καλέντζι. Τροφοδοτείται από υπόγειο ποτάμι. Κατάλληλος για canyoning όλο τον χρόνο.',
            tag: 'Καταρράκτης', tagClass: 'waterfall'
        },
        {
            lat: 39.463, lng: 21.068,
            category: 'waterfall', emoji: '💧', color: '#4a90d9',
            title: 'Κρεμαστός Καταρράκτης Ανατολικής',
            desc: 'Εντυπωσιακός καταρράκτης κοντά στο χωριό Ανατολική. Κοντά στο γεφύρι Παπαστάθη (τετράτοξο) πάνω από τον Άραχθο.',
            tag: 'Καταρράκτης', tagClass: 'waterfall'
        },
    ];

    // ── INIT MAP ──
    const map = L.map('explore-map', {
        center: [39.545, 21.065],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: false,
        tap: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18
    }).addTo(map);

    function makeIcon(emoji, color) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44">
            <path d="M18 0C8 0 0 8 0 18c0 12 18 26 18 26S36 30 36 18C36 8 28 0 18 0z" fill="${color}" stroke="#fff" stroke-width="2"/>
            <text x="18" y="23" text-anchor="middle" font-size="16" font-family="sans-serif">${emoji}</text>
        </svg>`;
        return L.divIcon({ html: svg, className: '', iconSize: [36, 44], iconAnchor: [18, 44], popupAnchor: [0, -44] });
    }

    function makePopup(p) {
        return `<div class="popup-inner">
            <div class="popup-title">${p.emoji} ${p.title}</div>
            <div class="popup-desc">${p.desc}</div>
            <span class="popup-tag ${p.tagClass}">${p.tag}</span>
        </div>`;
    }

    const markers = PLACES.map(p => {
        const m = L.marker([p.lat, p.lng], { icon: makeIcon(p.emoji, p.color) })
            .bindPopup(makePopup(p), { maxWidth: 240 });
        m._category = p.category;
        m.addTo(map);
        return m;
    });

    document.querySelectorAll('.pill').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const f = this.dataset.filter;
            markers.forEach(m => {
                if (f === 'all' || m._category === f) { m.addTo(map); }
                else { map.removeLayer(m); }
            });
        });
    });

    setTimeout(() => map.invalidateSize(), 300);
}

function loadLeaflet(urls, cssUrl, idx) {
    idx = idx || 0;
    if (idx >= urls.length) {
        document.getElementById('explore-map').innerHTML =
            '<p style="padding:1rem;color:#888;font-size:0.85rem;">Ο χάρτης δεν φορτώθηκε. Ελέγξτε τη σύνδεση.</p>';
        return;
    }
    if (!document.querySelector('link[data-leaflet]')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.setAttribute('data-leaflet', '1');
        link.href = cssUrl;
        document.head.appendChild(link);
    }
    var s = document.createElement('script');
    s.src = urls[idx];
    s.onload = function () { initMap(); };
    s.onerror = function () { loadLeaflet(urls, cssUrl, idx + 1); };
    document.body.appendChild(s);
}

window.addEventListener('DOMContentLoaded', function () {
    loadLeaflet([
        'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js',
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    ],
    'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css');
});