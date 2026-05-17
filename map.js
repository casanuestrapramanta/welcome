function initMap() {
    // ── MAP DATA — ΕΠΑΛΗΘΕΥΜΕΝΑ ──
    // Πηγές: allovergreece.com, mytzoumerka.gr, allovergreece.com caves,
    //        voreiatzoumerka.gr, hotellanassa.gr, ipernity.com
    const PLACES = [
 
        // ── ΑΞΙΟΘΕΑΤΑ / ΠΟΛΙΤΙΣΜΟΣ ──────────────────────────────
 
        {   // [K]
            lat: 39.5267, lng: 21.1029,
            category: 'sight', emoji: '🏠', color: '#2d6a4f',
            title: 'Casa Nuestra',
            desc: 'Η βάση σας στα Τζουμέρκα. Πράμαντα ~840μ., έδρα Δήμου Βορείων Τζουμέρκων.',
            tag: 'Βάση σας', tagClass: ''
        },
        {   // [A] 39.59441, 21.10767
            lat: 39.5944, lng: 21.1077,
            category: 'sight', emoji: '🏘️', color: '#5a7a30',
            title: 'Συρράκο',
            desc: 'Βλάχικο χωριό 1.150μ., ανακηρυγμένο διατηρητέο μνημείο. Γενέτειρα του ποιητή Κρυστάλλη και του πρωθυπουργού Κωλέττη.',
            tag: 'Αξιοθέατο', tagClass: ''
        },
        {   // [A] 39.58369, 21.1239
            lat: 39.5837, lng: 21.1239,
            category: 'sight', emoji: '🏛️', color: '#5a7a30',
            title: 'Μουσείο Αργυροτεχνίας Καλαρρύτων',
            desc: 'Αφιερωμένο στην παραδοσιακή αργυροτεχνία. Οι Καλαρρύτες είναι γενέτειρα του Σωτήριου Βούλγαρη, ιδρυτή του οίκου Bulgari.',
            tag: 'Μουσείο', tagClass: ''
        },
        {   // [A] 39.56753, 21.13019
            lat: 39.5675, lng: 21.1302,
            category: 'sight', emoji: '⛪', color: '#5a7a30',
            title: 'Μονή Κηπίνας',
            desc: 'Μοναστήρι λαξευμένο στο βράχο (~1212 μ.Χ.) πάνω από τη χαράδρα του Καλαρρύτικου. Πρόσβαση από κρεμαστή ξύλινη γέφυρα.',
            tag: 'Μοναστήρι', tagClass: ''
        },
        {   // [I] 39.555545, 20.971935
            lat: 39.5555, lng: 20.9719,
            category: 'sight', emoji: '⛪', color: '#5a7a30',
            title: 'Μονή Παναγίας Τσούκας',
            desc: 'Μεγαλύτερο προσκύνημα Ν. Ιωαννίνων (1190 μ.Χ.), 760μ., στο χείλος του γκρεμού με θέα στη χαράδρα του Αράχθου. Χωριό Ελληνικό.',
            tag: 'Μοναστήρι', tagClass: ''
        },
        {   // [GEO] Μεταξύ Πραμάντων–Μελισσουργών, λίγο Α του δρόμου ~39.535, 21.130
            lat: 39.5350, lng: 21.1300,
            category: 'sight', emoji: '⛪', color: '#5a7a30',
            title: 'Μονή Αγίας Παρασκευής Πραμάντων',
            desc: 'Ιδρύθηκε 1876–78, στο δρόμο Πραμάντων–Μελισσουργών, σε λόφο μέσα σε ελατόδασος. Ήταν έδρα του οπλαρχηγού Πουτέτση (1908–12) και νοσοκομείο στην Κατοχή.',
            tag: 'Μοναστήρι', tagClass: ''
        },
        {   // [C] 39.51322, 21.08699
            lat: 39.5132, lng: 21.0870,
            category: 'sight', emoji: '🕳️', color: '#5a7a30',
            title: 'Σπήλαιο Ανεμότρυπα',
            desc: 'Το πιο λευκό σπήλαιο στην Ελλάδα, 3χλμ. από τα Πράμαντα, 900μ. Ανακαλύφθηκε 1960. Επισκέψιμη διαδρομή 270μ. — είσοδος 3€.',
            tag: 'Σπήλαιο', tagClass: ''
        },
        {   // [GEO] Χωριό Ελληνικό — κοντά στη Μονή Τσούκας, μουσείο στο σχολείο
            lat: 39.5460, lng: 20.9730,
            category: 'sight', emoji: '🎨', color: '#5a7a30',
            title: 'Μουσείο Σύγχρονης Τέχνης «Θ. Παπαγιάννης»',
            desc: 'Μοναδικό μουσείο γλυπτικής στο παλιό σχολείο του Ελληνικού. Έργα του βοσκού-γλύπτη Θόδωρου Παπαγιάννη — ο δρόμος 5χλμ. ώς τη Μονή Τσούκας είναι στολισμένος με γλυπτά.',
            tag: 'Μουσείο', tagClass: ''
        },
        {   // [W] Wikipedia — Γεφύρι Πλάκας: 39.46056, 21.03000
            lat: 39.4606, lng: 21.0300,
            category: 'sight', emoji: '🌉', color: '#b5838d',
            title: 'Γεφύρι Πλάκας',
            desc: 'Μεγαλύτερο μονότοξο γεφύρι Βαλκανίων (τόξο 40μ., ύψος 21μ.), 1866. Κατέρρευσε 2015, αναστηλώθηκε 2019–20. Βραβείο Europa Nostra 2021. Ιδανικό για rafting.',
            tag: 'Γεφύρι', tagClass: ''
        },
        {   // [GEO] Ανατολική–Δρίσκος ~39.4678, 21.0361
            lat: 39.4678, lng: 21.0361,
            category: 'sight', emoji: '🌉', color: '#b5838d',
            title: 'Γεφύρι Παπαστάθη',
            desc: 'Τετράτοξο πέτρινο γεφύρι (1746) στον Άραχθο — ένα από τα ελάχιστα τετράτοξα γεφύρια της Ηπείρου.',
            tag: 'Γεφύρι', tagClass: ''
        },
 
        // ── ΦΥΣΗ / ΧΩΡΙΑ ─────────────────────────────────────────
 
        {   // [A] 39.58369, 21.1239
            lat: 39.5837, lng: 21.1239,
            category: 'nature', emoji: '🌾', color: '#52b788',
            title: 'Καλαρρύτες',
            desc: 'Παραδοσιακός οικισμός 1.120μ., ανακηρυγμένος διατηρητέο μνημείο. Καλντερίμια, βρύσες, μοναδική πέτρινη αρχιτεκτονική.',
            tag: 'Χωριό', tagClass: 'natura'
        },
        {   // [K] Πράμαντα κέντρο
            lat: 39.5270, lng: 21.1030,
            category: 'nature', emoji: '🌿', color: '#52b788',
            title: 'Πράμαντα — Κεντρική Πλατεία',
            desc: 'Καρδιά Βορείων Τζουμέρκων (840μ.). Υπεραιωνόβιος πλάτανος, βρύση "Αράπης" και εκκλησία Αγίας Παρασκευής.',
            tag: 'Χωριό', tagClass: 'natura'
        },
        {   // [W] Wikipedia — Μελισσουργοί: 39.517, 21.150
            lat: 39.5170, lng: 21.1500,
            category: 'nature', emoji: '🌲', color: '#52b788',
            title: 'Μελισσουργοί',
            desc: 'Ορεινό χωριό 900μ. με πυκνό ελατόδασος, κρυστάλλινες πηγές και εντυπωσιακή θέα στις κορυφές των Τζουμέρκων. Εμφιάλωση του νερού "Αγκάθι".',
            tag: 'Χωριό', tagClass: 'natura'
        },
        {   // [A] Μεταξύ Καλαρρυτών–Συρράκου ~39.591, 21.109
            lat: 39.5910, lng: 21.1090,
            category: 'nature', emoji: '🥾', color: '#52b788',
            title: 'Μονοπάτι Συρράκου–Καλαρρυτών',
            desc: 'Ιστορικό καλντερίμι ~5χλμ. που ενώνει τα δύο παραδοσιακά χωριά μέσα από τη χαράδρα του Χρούσια. Μέρος του Epirus Trail.',
            tag: 'Πεζοπορία', tagClass: 'natura'
        },
        {   // [M] Κουιάσα — κοιλάδα Χρούσια κοντά Καλαρρύτες ~39.576, 21.131
            lat: 39.5760, lng: 21.1310,
            category: 'nature', emoji: '💦', color: '#52b788',
            title: 'Νερόμυλος & Γεφύρι Κουιάσας',
            desc: 'Παραδοσιακός νερόμυλος με μονότοξο γεφύρι στον Καλαρρύτικο ποταμό. Μαγευτική τοποθεσία με φυσικές λίμνες και μικρούς καταρράκτες.',
            tag: 'Φύση', tagClass: 'natura'
        },
 
        // ── ΟΡΕΙΒΑΤΙΚΑ ΚΑΤΑΦΥΓΙΑ ─────────────────────────────────
 
        {   // [GEO] θέση "Ίσιωμα" ΒΔ Πραμάντων ~39.512, 21.093 @ 1245μ.
            // Πηγή υψόμετρου & περιγραφής: topoguide.gr, routes.gr
            lat: 39.5120, lng: 21.0930,
            category: 'nature', emoji: '⛺', color: '#2a9d8f',
            title: 'Καταφύγιο Πραμάντων',
            desc: '1.245μ., θέση "Ίσιωμα", ΒΔ των Πραμάντων. Πανοραμική θέα στη Στρογγούλα (2.112μ.). Εστιατόριο, 16 κλίνες. Σημείο εκκίνησης για Στρογγούλα & Καταρράκτη Κεφαλόβρυσο.',
            tag: 'Καταφύγιο', tagClass: 'natura'
        },
        {   // [GEO] ΒΔ Μελισσουργών ~39.523, 21.155 @ 1023μ.
            // Πηγή υψόμετρου: scout-treasure.gr, routes.gr
            lat: 39.5230, lng: 21.1550,
            category: 'nature', emoji: '⛺', color: '#2a9d8f',
            title: 'Καταφύγιο Μελισσουργών',
            desc: '1.023μ., πάνω από τον ομώνυμο οικισμό. Αφετηρία για τον καταρράκτη Κεφαλόβρυσο (300–350μ. ύψος) και τη σπηλιά του Κατσαντώνη.',
            tag: 'Καταφύγιο', tagClass: 'natura'
        },
 
        // ── ΚΑΤΑΡΡΑΚΤΕΣ ──────────────────────────────────────────
 
        {   // [A] allovergreece.com 39.56231, 21.15987
            lat: 39.5623, lng: 21.1599,
            category: 'waterfall', emoji: '💧', color: '#4a90d9',
            title: 'Καταρράκτης Καμίλη (Ματσούκι)',
            desc: 'Ύψος 42μ., 8 διαδοχικοί καταρράκτες από 4–5 φυσικές πηγές. Ρέει ακόμα και τον Αύγουστο. Πρόσβαση με σύντομη πεζοπορία.',
            tag: 'Καταρράκτης', tagClass: 'waterfall'
        },
        {   // [H] hotellanassa.gr GPS waypoint: 39°29'46.57", 21°0'34.19" → 39.4963, 21.0095
            lat: 39.4963, lng: 21.0095,
            category: 'waterfall', emoji: '💧', color: '#4a90d9',
            title: 'Καταρράκτης Κλίφκης (Καλέντζι)',
            desc: 'Ύψος 47μ., τροφοδοτείται από υπόγειο ποτάμι. Κοντά στο χωριό Καλέντζι — δημοφιλές για canyoning όλο τον χρόνο.',
            tag: 'Καταρράκτης', tagClass: 'waterfall'
        },
        {   // [GEO] Μεταξύ καταφυγίων Μελισσουργών–Πραμάντων ~39.518, 21.126
            // Υψόμετρο & περιγραφή: wikiloc.com, scout-treasure.gr
            lat: 39.5180, lng: 21.1260,
            category: 'waterfall', emoji: '💧', color: '#4a90d9',
            title: 'Καταρράκτης Κεφαλόβρυσο',
            desc: 'Ένας από τους μεγαλύτερους καταρράκτες στην Ελλάδα, συνολικό ανάπτυγμα 300–350μ. Προσβάσιμος από τα καταφύγια Μελισσουργών ή Πραμάντων.',
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