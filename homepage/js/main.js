// translations for homepage text
const translations = {
    en: {
         headerTitle: "The Watchtower",
         headerSubtitle: "A law enforcement project",
         homepageWelcome: "Welcome to The Watchtower. This centralized platform will bring together various tools and resources to enhance communication between civilians and law enforcement agencies. More functionalities will be added in the future.",
         footerText: "© 2025 The Watchtower",
         loaderText: "Entering The Watchtower...",
         reconfiguringText: "Reconfiguring...",
         tiplineButton: "Access Tip Line Dashboard"
    },
    es: {
         headerTitle: "La Torre de Vigilancia",
         headerSubtitle: "Un proyecto de las fuerzas del orden",
         homepageWelcome: "Bienvenido a La Atalaya. Esta plataforma centralizada reunirá diversas herramientas y recursos para mejorar la comunicación entre civiles y cuerpos de seguridad. En el futuro se añadirán más funcionalidades.",
         footerText: "© 2025 La Torre de Vigilancia",
         loaderText: "Entrando en La Torre de Vigilancia...",
         reconfiguringText: "Reconfigurando...",
         tiplineButton: "Acceder al tablero de denuncias"
    },
    fr: {
         headerTitle: "La Tour de Garde",
         headerSubtitle: "Un projet des forces de l'ordre",
         homepageWelcome: "Bienvenue à la Tour de Garde. Cette plateforme centralisée rassemblera divers outils et ressources afin d'améliorer la communication entre les civils et les forces de l'ordre. D'autres fonctionnalités seront ajoutées à l'avenir.",
         footerText: "© 2025 La Tour de Garde",
         loaderText: "Entrée dans La Tour de Garde...",
         reconfiguringText: "Reconfiguration...",
         tiplineButton: "Accéder au tableau de bord des dénonciations"
    },
    ru: {
         headerTitle: "Сторожевая Башня",
         headerSubtitle: "Проект правоохранительных органов",
         homepageWelcome: "Добро пожаловать в «Сторожевую башню». Эта централизованная платформа объединит различные инструменты и ресурсы для улучшения коммуникации между гражданскими лицами и правоохранительными органами. В будущем будут добавлены дополнительные функции.",
         footerText: "© 2025 Сторожевая Башня",
         loaderText: "Вход в Сторожевую Башню...",
         reconfiguringText: "Переконфигурация...",
         tiplineButton: "Перейти к панели подачи сообщений"
    },
    de: {
         headerTitle: "Der Wachturm",
         headerSubtitle: "Ein Projekt der Strafverfolgung",
         homepageWelcome: "Willkommen bei The Watchtower. Diese zentrale Plattform wird verschiedene Tools und Ressourcen zusammenführen, um die Kommunikation zwischen Zivilisten und Strafverfolgungsbehörden zu verbessern. Weitere Funktionalitäten werden in Zukunft hinzugefügt werden.",
         footerText: "© 2025 Der Wachturm",
         loaderText: "Betrete den Wachturm...",
         reconfiguringText: "Neu konfigurieren...",
         tiplineButton: "Zum Hinweis-Dashboard"
    },
    zh: {
         headerTitle: "瞭望塔",
         headerSubtitle: "一个执法项目",
         homepageWelcome: "欢迎来到守望先锋。这个集中式平台将汇集各种工具和资源，以加强平民与执法机构之间的沟通。未来还将增加更多功能。",
         footerText: "© 2025 瞭望塔",
         loaderText: "正在进入瞭望塔...",
         reconfiguringText: "重新配置中...",
         tiplineButton: "进入举报面板"
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