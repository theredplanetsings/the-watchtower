// initial loading screen animation (runs on page reload/entry)
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    setTimeout(function(){
        d3.select("#loader").classed("fade-out", true);
        // unhides social and language buttons once the loader fades out.
        d3.select(".social-buttons").style("visibility", "visible");
        d3.select(".language-buttons").style("visibility", "visible");
        // sets loading animation text for default language (English)
        d3.select("#loader").select("p").text(translations.en.loaderText);
    }, 2000);
});

// translation object for all supported languages
const translations = {
    en: {
      headerTitle: "The Watchtower",
      headerSubtitle: "A law enforcement project",
      dashboardHeader: "Tip Line Dashboard",
      loaderText: "Entering The Watchtower...", //initial loading text
      reconfiguringText: "Reconfiguring...",  // reconfig
      fbiTitle: "FBI",
      fbiDesc: "Connect to the FBI Tip Line:",
      fbiButton: "Open FBI Tip Line",
      ciaTitle: "CIA",
      ciaDesc: "Connect to the CIA Tip Submission:",
      ciaButton: "Open CIA Contact",
      nsaTitle: "NSA",
      nsaDesc: "Connect to the NSA Tip Line:",
      nsaButton: "Open NSA Tip Line",
      secretServiceTitle: "Secret Service",
      secretServiceDesc: "Connect to the U.S. Secret Service for financial and cyber crime tips:",
      secretServiceButton: "Open Secret Service Tips",
      deaTitle: "DEA",
      deaDesc: "Connect to the DEA Tip Line:",
      deaButton: "Open DEA Tip Line",
      usMarshalsTitle: "U.S. Marshals",
      usMarshalsDesc: "Connect to the U.S. Marshals Service:",
      usMarshalsButton: "Visit US Marshals",
      atfTitle: "ATF",
      atfDesc: "Connect to the ATF Tip Line:",
      atfButton: "Open ATF Tip Line",
      dhsTitle: "DHS",
      dhsDesc: "Connect to the Department of Homeland Security for suspicious activity reports:",
      dhsButton: "Open DHS Report",
      iceTitle: "ICE",
      iceDesc: "Connect to the ICE Tip Line:",
      iceButton: "Open ICE Tip Line",
      dojTitle: "Department of Justice",
      dojDesc: "Connect to the DOJ tip line:",
      dojButton: "Open DOJ Tip Line",
      parkPoliceTitle: "U.S. Park Police",
      parkPoliceDesc: "Connect to the U.S. Park Police tip reporting:",
      parkPoliceButton: "Open Park Police Tips",
      cbpTitle: "Customs & Border Protection",
      cbpDesc: "Connect to CBP for border security tips:",
      cbpButton: "Open CBP Tips",
      capitolPoliceTitle: "Capitol Police",
      capitolPoliceDesc: "Connect to the Capitol Police tip line:",
      capitolPoliceButton: "Open Capitol Police Tips",
      dssTitle: "Diplomatic Security Service",
      dssDesc: "Connect to the Diplomatic Security Service:",
      dssButton: "Open DSS Info",
      ncisTitle: "Naval Criminal Investigative Service",
      ncisDesc: "Connect to NCIS for reporting tips:",
      ncisButton: "Open NCIS",
      bopTitle: "Federal Bureau of Prisons",
      bopDesc: "Connect to the BOP tip line:",
      bopButton: "Open BOP Tips",
      footerText: "© 2025 The Watchtower"
    },
    es: {
      headerTitle: "La Torre de Vigilancia",
      headerSubtitle: "Un proyecto de las fuerzas del orden",
      dashboardHeader: "Panel de Líneas de Denuncia",
      loaderText: "Entrando en La Torre de Vigilancia...", //initial loading text
      reconfiguringText: "Reconfigurando...", // reconfig
      fbiTitle: "FBI",
      fbiDesc: "Conectar con la línea de denuncia del FBI:",
      fbiButton: "Abrir línea del FBI",
      ciaTitle: "CIA",
      ciaDesc: "Conectar con el envío de pistas a la CIA:",
      ciaButton: "Abrir contacto CIA",
      nsaTitle: "NSA",
      nsaDesc: "Conectar con la línea de denuncia de la NSA:",
      nsaButton: "Abrir línea de la NSA",
      secretServiceTitle: "Servicio Secreto",
      secretServiceDesc: "Conectar con el Servicio Secreto para denuncias de delitos financieros y cibernéticos:",
      secretServiceButton: "Abrir denuncias Servicio Secreto",
      deaTitle: "DEA",
      deaDesc: "Conectar con la línea de denuncia de la DEA:",
      deaButton: "Abrir línea de la DEA",
      usMarshalsTitle: "U.S. Marshals",
      usMarshalsDesc: "Conectar con el Servicio de Alguaciles de EE.UU.:",
      usMarshalsButton: "Visitar U.S. Marshals",
      atfTitle: "ATF",
      atfDesc: "Conectar con la línea de denuncia de la ATF:",
      atfButton: "Abrir línea de la ATF",
      dhsTitle: "DHS",
      dhsDesc: "Conectar con el DHS para reportes de actividades sospechosas:",
      dhsButton: "Abrir reporte DHS",
      iceTitle: "ICE",
      iceDesc: "Conectar con la línea de denuncia de ICE:",
      iceButton: "Abrir línea ICE",
      dojTitle: "Departamento de Justicia",
      dojDesc: "Conectar con la línea de denuncia del DOJ:",
      dojButton: "Abrir línea DOJ",
      parkPoliceTitle: "Policía de Parques",
      parkPoliceDesc: "Conectar con el informe de pistas de la Policía de Parques:",
      parkPoliceButton: "Abrir denuncias Policía de Parques",
      cbpTitle: "Aduanas y Protección Fronteriza",
      cbpDesc: "Conectar con CBP para denuncias sobre seguridad fronteriza:",
      cbpButton: "Abrir denuncias CBP",
      capitolPoliceTitle: "Policía del Capitolio",
      capitolPoliceDesc: "Conectar con la línea de denuncia de la Policía del Capitolio:",
      capitolPoliceButton: "Abrir denuncias Capitolio",
      dssTitle: "Servicio de Seguridad Diplomática",
      dssDesc: "Conectar con el Servicio de Seguridad Diplomática:",
      dssButton: "Abrir info DSS",
      ncisTitle: "Servicio de Investigación Criminal Naval",
      ncisDesc: "Conectar con NCIS para reportar pistas:",
      ncisButton: "Abrir NCIS",
      bopTitle: "Oficina Federal de Prisiones",
      bopDesc: "Conectar con la línea de denuncia de BOP:",
      bopButton: "Abrir denuncias BOP",
      footerText: "© 2025 La Torre de Vigilancia"
    },
    fr: {
      headerTitle: "La Tour de Garde",
      headerSubtitle: "Un projet des forces de l'ordre",
      dashboardHeader: "Tableau de Bord des Lignes de Signalement",
      loaderText: "Entrée dans La Tour de Garde...", //initial loading text
      reconfiguringText: "Reconfiguration...", // reconfig
      fbiTitle: "FBI",
      fbiDesc: "Se connecter à la ligne de signalement du FBI :",
      fbiButton: "Ouvrir ligne FBI",
      ciaTitle: "CIA",
      ciaDesc: "Soumettre une information à la CIA :",
      ciaButton: "Ouvrir contact CIA",
      nsaTitle: "NSA",
      nsaDesc: "Se connecter à la ligne de signalement de la NSA :",
      nsaButton: "Ouvrir ligne NSA",
      secretServiceTitle: "Service Secret",
      secretServiceDesc: "Se connecter au Service Secret pour les signalements financiers et cybercriminels :",
      secretServiceButton: "Ouvrir signalements Service Secret",
      deaTitle: "DEA",
      deaDesc: "Se connecter à la ligne de signalement de la DEA :",
      deaButton: "Ouvrir ligne DEA",
      usMarshalsTitle: "U.S. Marshals",
      usMarshalsDesc: "Se connecter au Service des Marshals des États-Unis :",
      usMarshalsButton: "Visiter U.S. Marshals",
      atfTitle: "ATF",
      atfDesc: "Se connecter à la ligne de signalement de l'ATF :",
      atfButton: "Ouvrir ligne ATF",
      dhsTitle: "DHS",
      dhsDesc: "Se connecter au DHS pour signaler une activité suspecte :",
      dhsButton: "Ouvrir rapport DHS",
      iceTitle: "ICE",
      iceDesc: "Se connecter à la ligne de signalement d'ICE :",
      iceButton: "Ouvrir ligne ICE",
      dojTitle: "Ministère de la Justice",
      dojDesc: "Se connecter à la ligne de signalement du DOJ :",
      dojButton: "Ouvrir ligne DOJ",
      parkPoliceTitle: "Police des Parcs",
      parkPoliceDesc: "Se connecter au service de signalement de la Police des Parcs :",
      parkPoliceButton: "Ouvrir signalements Parcs",
      cbpTitle: "Douanes et Protection des Frontières",
      cbpDesc: "Se connecter à la CBP pour signaler des problèmes de sécurité frontalière :",
      cbpButton: "Ouvrir signalements CBP",
      capitolPoliceTitle: "Police du Capitole",
      capitolPoliceDesc: "Se connecter à la ligne de signalement de la Police du Capitole :",
      capitolPoliceButton: "Ouvrir signalements Capitole",
      dssTitle: "Service de Sécurité Diplomatique",
      dssDesc: "Se connecter au Service de Sécurité Diplomatique :",
      dssButton: "Ouvrir info DSS",
      ncisTitle: "Service d'Enquête Criminelle de la Marine",
      ncisDesc: "Se connecter au NCIS pour signaler des informations :",
      ncisButton: "Ouvrir NCIS",
      bopTitle: "Bureau Fédéral des Prisons",
      bopDesc: "Se connecter à la ligne de signalement du BOP :",
      bopButton: "Ouvrir signalements BOP",
      footerText: "© 2025 La Tour de Garde"
    },
    ru: {
      headerTitle: "Сторожевая Башня",
      headerSubtitle: "Проект правоохранительных органов",
      dashboardHeader: "Панель Горячих Линий",
      loaderText: "Вход в Сторожевую Башню...", //initial loading text
      reconfiguringText: "Переконфигурация...", // reconfig
      fbiTitle: "ФБР",
      fbiDesc: "Подключение к горячей линии ФБР:",
      fbiButton: "Открыть линию ФБР",
      ciaTitle: "ЦРУ",
      ciaDesc: "Отправить информацию в ЦРУ:",
      ciaButton: "Открыть контакт с ЦРУ",
      nsaTitle: "АНБ",
      nsaDesc: "Подключение к горячей линии АНБ:",
      nsaButton: "Открыть линию АНБ",
      secretServiceTitle: "Секретная Служба",
      secretServiceDesc: "Подключение к Секретной Службе для сообщений о финансовых и киберпреступлениях:",
      secretServiceButton: "Открыть Секретную Службу",
      deaTitle: "УБН",
      deaDesc: "Подключение к горячей линии УБН:",
      deaButton: "Открыть линию УБН",
      usMarshalsTitle: "Маршалы США",
      usMarshalsDesc: "Подключение к Службе Маршалов США:",
      usMarshalsButton: "Посетить Маршалов",
      atfTitle: "АТФ",
      atfDesc: "Подключение к горячей линии АТФ:",
      atfButton: "Открыть линию АТФ",
      dhsTitle: "DHS",
      dhsDesc: "Подключение к DHS для сообщений о подозрительной активности:",
      dhsButton: "Открыть отчет DHS",
      iceTitle: "ICE",
      iceDesc: "Подключение к горячей линии ICE:",
      iceButton: "Открыть линию ICE",
      dojTitle: "Минюст США",
      dojDesc: "Подключение к горячей линии Минюста:",
      dojButton: "Открыть линию Минюста",
      parkPoliceTitle: "Полиция Парков",
      parkPoliceDesc: "Подключение к полиции парков для сообщений:",
      parkPoliceButton: "Открыть сообщения Парков",
      cbpTitle: "Таможня и Пограничная Служба",
      cbpDesc: "Подключение к CBP для сообщений о безопасности границ:",
      cbpButton: "Открыть сообщения CBP",
      capitolPoliceTitle: "Полиция Капитолия",
      capitolPoliceDesc: "Подключение к линии полиции Капитолия:",
      capitolPoliceButton: "Открыть сообщения Капитолия",
      dssTitle: "Служба дипломатической безопасности",
      dssDesc: "Подключение к Службе дипломатической безопасности:",
      dssButton: "Открыть информацию DSS",
      ncisTitle: "Военно-морская следственная служба",
      ncisDesc: "Подключение к NCIS для сообщений:",
      ncisButton: "Открыть NCIS",
      bopTitle: "Федеральное бюро тюрем",
      bopDesc: "Подключение к горячей линии BOP:",
      bopButton: "Открыть сообщения BOP",
      footerText: "© 2025 Сторожевая Башня"
    },
    zh: {
        headerTitle: "瞭望塔",
        headerSubtitle: "一个执法项目",
        dashboardHeader: "举报信息面板",
        loaderText: "正在进入瞭望塔...", //initial loading text
        reconfiguringText: "重新配置中...", // reconfig
        fbiTitle: "联邦调查局 (FBI)",
        fbiDesc: "连接至FBI举报热线：",
        fbiButton: "打开FBI举报",
        ciaTitle: "中央情报局 (CIA)",
        ciaDesc: "连接至CIA举报提交：",
        ciaButton: "打开CIA联系方式",
        nsaTitle: "国家安全局 (NSA)",
        nsaDesc: "连接至NSA举报热线：",
        nsaButton: "打开NSA举报",
        secretServiceTitle: "特勤局",
        secretServiceDesc: "连接至美国特勤局举报金融和网络犯罪：",
        secretServiceButton: "打开特勤局举报",
        deaTitle: "缉毒局 (DEA)",
        deaDesc: "连接至DEA举报热线：",
        deaButton: "打开DEA举报",
        usMarshalsTitle: "美国法警署",
        usMarshalsDesc: "连接至美国法警署：",
        usMarshalsButton: "访问美国法警署",
        atfTitle: "烟酒枪炮及爆炸物管理局 (ATF)",
        atfDesc: "连接至ATF举报热线：",
        atfButton: "打开ATF举报",
        dhsTitle: "国土安全部 (DHS)",
        dhsDesc: "连接至DHS报告可疑活动：",
        dhsButton: "打开DHS报告",
        iceTitle: "移民与海关执法局 (ICE)",
        iceDesc: "连接至ICE举报热线：",
        iceButton: "打开ICE举报",
        dojTitle: "司法部 (DOJ)",
        dojDesc: "连接至司法部举报热线：",
        dojButton: "打开DOJ举报",
        parkPoliceTitle: "美国国家公园警察",
        parkPoliceDesc: "连接至国家公园警察举报平台：",
        parkPoliceButton: "打开公园警察举报",
        cbpTitle: "海关与边境保护局 (CBP)",
        cbpDesc: "连接至CBP举报边境安全问题：",
        cbpButton: "打开CBP举报",
        capitolPoliceTitle: "国会警察",
        capitolPoliceDesc: "连接至国会警察举报热线：",
        capitolPoliceButton: "打开国会警察举报",
        dssTitle: "外交安全局 (DSS)",
        dssDesc: "连接至外交安全局：",
        dssButton: "打开DSS信息",
        ncisTitle: "海军刑事调查局 (NCIS)",
        ncisDesc: "连接至NCIS举报信息：",
        ncisButton: "打开NCIS",
        bopTitle: "联邦监狱局",
        bopDesc: "连接至BOP举报热线：",
        bopButton: "打开BOP举报",
        footerText: "© 2025 瞭望塔"
      },
      de: {
        headerTitle: "Der Wachturm",
        headerSubtitle: "Ein Projekt der Strafverfolgung",
        dashboardHeader: "Hinweis-Dashboard",
        loaderText: "Betrete den Wachturm...", //initial loading text
        reconfiguringText: "Neu konfigurieren...", // reconfig
        fbiTitle: "FBI",
        fbiDesc: "Verbinde dich mit der FBI-Hinweisstelle:",
        fbiButton: "FBI-Hinweis öffnen",
        ciaTitle: "CIA",
        ciaDesc: "Verbinde dich mit dem CIA-Hinweisformular:",
        ciaButton: "CIA-Kontakt öffnen",
        nsaTitle: "NSA",
        nsaDesc: "Verbinde dich mit der NSA-Hinweisstelle:",
        nsaButton: "NSA-Hinweis öffnen",
        secretServiceTitle: "Geheimdienst",
        secretServiceDesc: "Verbinde dich mit dem US-Geheimdienst für Hinweise zu Finanz- und Cyberkriminalität:",
        secretServiceButton: "Geheimdienst-Hinweise öffnen",
        deaTitle: "DEA",
        deaDesc: "Verbinde dich mit der DEA-Hinweisstelle:",
        deaButton: "DEA-Hinweis öffnen",
        usMarshalsTitle: "US Marshals",
        usMarshalsDesc: "Verbinde dich mit dem U.S. Marshals Service:",
        usMarshalsButton: "US Marshals besuchen",
        atfTitle: "ATF",
        atfDesc: "Verbinde dich mit der ATF-Hinweisstelle:",
        atfButton: "ATF-Hinweis öffnen",
        dhsTitle: "DHS",
        dhsDesc: "Verbinde dich mit dem Heimatschutzministerium für Berichte über verdächtige Aktivitäten:",
        dhsButton: "DHS-Bericht öffnen",
        iceTitle: "ICE",
        iceDesc: "Verbinde dich mit der ICE-Hinweisstelle:",
        iceButton: "ICE-Hinweis öffnen",
        dojTitle: "Justizministerium",
        dojDesc: "Verbinde dich mit der DOJ-Hinweisstelle:",
        dojButton: "DOJ-Hinweis öffnen",
        parkPoliceTitle: "U.S. Parkpolizei",
        parkPoliceDesc: "Verbinde dich mit der U.S. Parkpolizei für Hinweisberichte:",
        parkPoliceButton: "Parkpolizei-Hinweise öffnen",
        cbpTitle: "Zoll- und Grenzschutz",
        cbpDesc: "Verbinde dich mit CBP für Hinweise zur Grenzsicherheit:",
        cbpButton: "CBP-Hinweise öffnen",
        capitolPoliceTitle: "Kapitolpolizei",
        capitolPoliceDesc: "Verbinde dich mit der Kapitolpolizei-Hinweisstelle:",
        capitolPoliceButton: "Kapitolpolizei-Hinweise öffnen",
        dssTitle: "Diplomatischer Sicherheitsdienst",
        dssDesc: "Verbinde dich mit dem Diplomatischen Sicherheitsdienst:",
        dssButton: "DSS-Informationen öffnen",
        ncisTitle: "Marine-Ermittlungsdienst (NCIS)",
        ncisDesc: "Verbinde dich mit NCIS zur Meldung von Hinweisen:",
        ncisButton: "NCIS öffnen",
        bopTitle: "Bundesgefängnisbehörde",
        bopDesc: "Verbinde dich mit der BOP-Hinweisstelle:",
        bopButton: "BOP-Hinweise öffnen",
        footerText: "© 2025 Der Wachturm"
      }
  };
  

  function getReconfiguringText(lang) {
    if (translations[lang] && translations[lang].reconfiguringText) {
        return translations[lang].reconfiguringText;
    }
    return "Reconfiguring...";
}

// updates the page text based on selected language
function updateContentLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function(el) {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    console.log("Content language updated to " + lang);
}

// adds event listeners for language buttons
d3.selectAll('.language-button').on('click', function() {
    var btn = d3.select(this);
    var lang = btn.attr('data-lang');
    
    // if the language is already active, do nothing.
    if (btn.classed("active")) return;
    
    window.scrollTo(0, 0);

    // remove active class from all language buttons and mark the clicked one as active.
    d3.selectAll('.language-button').classed("active", false);
    btn.classed("active", true);
    
    // reset the loader animation and show it.
    d3.select("#loader")
        .classed("fade-out", false)
        .style("opacity", "1")
        .style("visibility", "visible");
    
    // set reconfiguration text using the correct translation.
    d3.select("#loader").select("p").text(getReconfiguringText(lang));
    
    // hide social and language buttons during "reconfiguration"
    d3.select(".social-buttons").style("visibility", "hidden");
    d3.select(".language-buttons").style("visibility", "hidden");
    
    // after 2000ms, update the loader text to the initial animation text,
    // update content, and then run the fade-out animation.
    setTimeout(function(){
        // update loader text to the language's loaderText translation.
        d3.select("#loader").select("p").text(translations[lang].loaderText);
        
        // update the page content.
        updateContentLanguage(lang);
        
        // now fade out the loader.
        d3.select("#loader")
          .transition()
          .duration(1500)
          .style("opacity", "0")
          .on("end", function(){
              d3.select(this).style("visibility", "hidden");
          });
        // unhide social and language buttons.
        d3.select(".social-buttons").style("visibility", "visible");
        d3.select(".language-buttons").style("visibility", "visible");
    }, 1500);
});