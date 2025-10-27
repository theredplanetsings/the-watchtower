// translations for homepage text
const translations = {
    en: {
         headerTitle: "The Watchtower",
         headerSubtitle: "A law enforcement project",
         homepageWelcome: "Welcome to The Watchtower. This centralized platform will bring together various tools and resources to enhance communication between civilians and law enforcement agencies. More functionalities will be added in the future.",
         footerText: "© 2025 The Watchtower",
         loaderText: "Entering The Watchtower...",
         reconfiguringText: "Reconfiguring...",
         tiplineButton: "Access Tip Line Dashboard",
         missingMapButton: "View Missing Persons Map",
         missingMapTitle: "Missing Persons Map",
    },
    es: {
         headerTitle: "La Torre de Vigilancia",
         headerSubtitle: "Un proyecto de las fuerzas del orden",
         homepageWelcome: "Bienvenido a La Atalaya. Esta plataforma centralizada reunirá diversas herramientas y recursos para mejorar la comunicación entre civiles y cuerpos de seguridad. En el futuro se añadirán más funcionalidades.",
         footerText: "© 2025 La Torre de Vigilancia",
         loaderText: "Entrando en La Torre de Vigilancia...",
         reconfiguringText: "Reconfigurando...",
         tiplineButton: "Acceder al tablero de denuncias",
         missingMapButton: "Ver mapa de personas desaparecidas",
         missingMapTitle: "Mapa de Personas Desaparecidas"
    },
    fr: {
         headerTitle: "La Tour de Garde",
         headerSubtitle: "Un projet des forces de l'ordre",
         homepageWelcome: "Bienvenue à la Tour de Garde. Cette plateforme centralisée rassemblera divers outils et ressources afin d'améliorer la communication entre les civils et les forces de l'ordre. D'autres fonctionnalités seront ajoutées à l'avenir.",
         footerText: "© 2025 La Tour de Garde",
         loaderText: "Entrée dans La Tour de Garde...",
         reconfiguringText: "Reconfiguration...",
         tiplineButton: "Accéder au tableau de bord des dénonciations",
         missingMapButton: "Voir la carte des personnes disparues",
         missingMapTitle: "Carte des personnes disparues"
    },
    ru: {
         headerTitle: "Сторожевая Башня",
         headerSubtitle: "Проект правоохранительных органов",
         homepageWelcome: "Добро пожаловать в «Сторожевую башню». Эта централизованная платформа объединит различные инструменты и ресурсы для улучшения коммуникации между гражданскими лицами и правоохранительными органами. В будущем будут добавлены дополнительные функции.",
         footerText: "© 2025 Сторожевая Башня",
         loaderText: "Вход в Сторожевую Башню...",
         reconfiguringText: "Переконфигурация...",
         tiplineButton: "Перейти к панели подачи сообщений",
         missingMapButton: "Посмотреть карту пропавших без вести",
         missingMapTitle: "Карта пропавших без вести"
    },
    de: {
         headerTitle: "Der Wachturm",
         headerSubtitle: "Ein Projekt der Strafverfolgung",
         homepageWelcome: "Willkommen bei The Watchtower. Diese zentrale Plattform wird verschiedene Tools und Ressourcen zusammenführen, um die Kommunikation zwischen Zivilisten und Strafverfolgungsbehörden zu verbessern. Weitere Funktionalitäten werden in Zukunft hinzugefügt werden.",
         footerText: "© 2025 Der Wachturm",
         loaderText: "Betrete den Wachturm...",
         reconfiguringText: "Neu konfigurieren...",
         tiplineButton: "Zum Hinweis-Dashboard",
         missingMapButton: "Vermisstenkarte anzeigen",
         missingMapTitle: "Vermisstenkarte"
    },
    zh: {
         headerTitle: "瞭望塔",
         headerSubtitle: "一个执法项目",
         homepageWelcome: "欢迎来到守望先锋。这个集中式平台将汇集各种工具和资源，以加强平民与执法机构之间的沟通。未来还将增加更多功能。",
         footerText: "© 2025 瞭望塔",
         loaderText: "正在进入瞭望塔...",
         reconfiguringText: "重新配置中...",
         tiplineButton: "进入举报面板",
         missingMapButton: "查看失踪人员地图",
         missingMapTitle: "失踪人员地图"
    }
};

// update text on the page based on the selected language
function updateContentLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function(el) {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    console.log("Content language updated to " + lang);
}

// ensures the page starts at the top and fades out the loader after load
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    setTimeout(function(){
        d3.select("#loader").classed("fade-out", true);
        d3.select(".social-buttons").style("visibility", "visible");
        d3.select(".language-buttons").style("visibility", "visible");
    }, 2000);
});

// language button event handling
d3.selectAll('.language-button').on('click', function() {
    var btn = d3.select(this);
    var lang = btn.attr('data-lang');

    // skips if already active
    if (btn.classed("active")) return;

    // removes the active class from all language buttons then mark this one as active
    d3.selectAll('.language-button').classed("active", false);
    btn.classed("active", true);

    // scrolls to top when changing language
    window.scrollTo(0, 0);

    // shows loading animation with reconfiguring text for the selected language
    d3.select("#loader")
        .classed("fade-out", false)
        .style("opacity", "1")
        .style("visibility", "visible")
        .select("p")
        .text(translations[lang].reconfiguringText);

    // hides social and language buttons during transition
    d3.select(".social-buttons").style("visibility", "hidden");
    d3.select(".language-buttons").style("visibility", "hidden");

    // after a delay, update page text, change loader text to initial value, then fade out the loader
    setTimeout(function(){
        // update loader text to the initial loader text in the selected language
        d3.select("#loader").select("p").text(translations[lang].loaderText);

        // update page content
        updateContentLanguage(lang);

        // fade out the loader
        d3.select("#loader")
            .transition()
            .duration(1500)
            .style("opacity", "0")
            .on("end", function(){
                d3.select(this).style("visibility", "hidden");
            });

        // unhide social and language buttons after transition
        d3.select(".social-buttons").style("visibility", "visible");
        d3.select(".language-buttons").style("visibility", "visible");
    }, 2000);
});

// --- Missing Persons Map Tool ---

// Hardcoded missing persons data
const missingPersons = [
    { name: "Jane Doe", age: 17, date: "2025-05-10", lat: 37.7749, lon: -122.4194, city: "San Francisco, CA", info: "Last seen wearing a red jacket." },
    { name: "Carlos Ruiz", age: 22, date: "2025-04-22", lat: 34.0522, lon: -118.2437, city: "Los Angeles, CA", info: "Last seen near Union Station." },
    { name: "Marie Dubois", age: 15, date: "2025-05-01", lat: 40.7128, lon: -74.0060, city: "New York, NY", info: "Last seen in Central Park." }
];

// Show modal and draw map
const missingMapBtn = document.getElementById('missing-map-btn');
if (missingMapBtn) {
    missingMapBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('missing-map-modal').style.display = 'flex';
        drawMissingMap();
        document.getElementById('missing-map-info').textContent = '';
    });
}

// Close modal
const closeMissingMapBtn = document.getElementById('close-missing-map');
if (closeMissingMapBtn) {
    closeMissingMapBtn.addEventListener('click', function() {
        document.getElementById('missing-map-modal').style.display = 'none';
        d3.select("#missing-map").selectAll("*").remove();
    });
}

// Draw a simple US map with D3 and plot missing persons
function drawMissingMap() {
    // gets the actual rendered size of the map container
    const mapDiv = document.getElementById('missing-map');
    const width = mapDiv.clientWidth;
    const height = mapDiv.clientHeight;
    d3.select("#missing-map").selectAll("*").remove();

    const projection = d3.geoAlbersUsa().translate([width/2, height/2]).scale(width * 1.1);
    const path = d3.geoPath().projection(projection);

    const svg = d3.select("#missing-map")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "#181818");

    d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json").then(us => {
        const states = topojson.feature(us, us.objects.states);

        svg.append("g")
            .selectAll("path")
            .data(states.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "#222")
            .attr("stroke", "#444")
            .attr("stroke-width", 1);

        svg.selectAll("circle")
            .data(missingPersons)
            .enter()
            .append("circle")
            .attr("cx", d => {
                const coords = projection([d.lon, d.lat]);
                return coords ? coords[0] : -100;
            })
            .attr("cy", d => {
                const coords = projection([d.lon, d.lat]);
                return coords ? coords[1] : -100;
            })
            .attr("r", 10)
            .attr("fill", "#ff0000")
            .attr("stroke", "#fff")
            .attr("stroke-width", 2)
            .style("cursor", "pointer")
            .on("click", function(event, d) {
                document.getElementById('missing-map-info').innerHTML =
                    `<strong>${d.name}</strong> (${d.age})<br>
                    <em>${d.city}</em><br>
                    <span>${d.date}</span><br>
                    <small>${d.info}</small>`;
            });

        svg.selectAll("text")
            .data(missingPersons)
            .enter()
            .append("text")
            .attr("x", d => {
                const coords = projection([d.lon, d.lat]);
                return coords ? coords[0] : -100;
            })
            .attr("y", d => {
                const coords = projection([d.lon, d.lat]);
                return coords ? coords[1] - 15 : -100;
            })
            .attr("text-anchor", "middle")
            .attr("fill", "#00ffee")
            .attr("font-size", "0.9rem")
            .text(d => d.name);
    });
}