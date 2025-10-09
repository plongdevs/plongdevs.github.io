// APP DATA CONFIGURATION

const apps = [
    {
        name: 'FakeLag Reborn ✅ ',
        url: 'https://drive.google.com/file/d/19HLe6X61w-V3z3FvWYHv4sO2XpOOrrVA/view?usp=drivesdk',
        img: './img/appicons/fạkelag reborn.jpg',
        descriptions: 'Hack FakeLag chống band vv',
        size: '352 KB',
        updated: '09/10/2025',
        downloads: 0
    },
    {
        name: 'PlayPing ✅',
        url: 'https://www.mediafire.com/file/80vwmrhzly94e10/PlayPing+No+Update.apk/file',
        img: './img/appicons/playping.jpg',
        descriptions: 'Playping No update by ©PLong X Nguyễn Tiêu',
        size: '16 MB',
        updated: '08/10/2025',
        downloads: 0
    },
    {
        name: 'Netwing',
        url: 'https://www.mediafire.com/file/h9xc4z01xj0fwxp/Netwing+0.11.0B.F2++.apk/file',
        img: './img/appicons/netwing.jpg',
        descriptions: 'Hack FakeLag Anti thấp ko nên tải',
        size: '34 MB',
        updated: '07/10/2025',
        downloads: 0
    },
    {
        name: 'FayFayConfig ✅',
        url: 'https://www.mediafire.com/file/w691w2cg0u5mrtq/FayFay+Config+2.0.6.apk/file',
        img: './img/appicons/fayfayconfig.jpg',
        descriptions: 'PlayPing bản cũ chống ban anti 100%',
        size: '4 MB',
        updated: '06/10/2025',
        downloads: 0
    },
];

const ksignApps = [
    {
        name: 'DATA Bom Keo mini Antiband ✅',
        url: 'https://www.mediafire.com/file/7szp1su417oq3iz/Keo+Mini.zip/file',
        img: 'img/pf/zip.png',
        descriptions: 'Áp dụng cho keo TCXH,STXH',
        size: '21 MB',
        updated: '09/10/2025',
        downloads: 0
    },
    {
        name: 'DATA Xe bay đảo thế kỉ✅',
        url: 'https://www.mediafire.com/file/lrplx2guoies3ns/xe+bay+đảo+thế+kỉ.zip/file',
        img: 'img/pf/zip.png',
        descriptions: 'Dùng để tank bo cho ae antiband 100%',
        size: '6 MB',
        updated: '08/10/2025',
        downloads: 0
    },
    {
        name: 'DATA Tử chiến xuyên lòng đất đảo thế kỉ ✅',
        url: 'https://www.mediafire.com/file/2faijugnfaqvobm/Tử+chiến+xuyên+lòng+đất.zip/file',
        img: 'img/pf/zip.png',
        descriptions: 'Nhớ bật orion khi xuống...',
        size: '29 MB',
        updated: '08/10/2025',
        downloads: 0
    }
];

// ICON SVG

const cloudIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     class="lucide lucide-download">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="7 10 12 15 17 10"/>
  <line x1="12" y1="15" x2="12" y2="3"/>
</svg>`;

// DOM ELEMENTS

const appContainer = document.querySelector('.app-section');
const ksignContainer = document.querySelector('.ksign-section');
const esignContainer = document.querySelector('.esign-section');

// UTILITY FUNCTIONS

function render(app, index, type) {
    return `
    <div class="app-container" data-type="${type}" data-index="${index}">
        <div class="app">
            <img src="${app.img}" class="app-img box-shadow" alt="${app.name}">
            <h1 style="margin-left: 1em">${app.name}<br>
                <p>${app.descriptions}</p>
                <p><strong>Dung lượng:</strong> ${app.size}</p>
                <p><strong>Ngày cập nhật:</strong> ${app.updated}</p>
                <p><strong>Lượt tải:</strong> <span class="download-count">${app.downloads}</span></p>
            </h1>
        </div>
        <a href="${app.url}" target="_blank" class="download-btn" style="color: #007aff; text-decoration: none;">
            ${cloudIcon}
        </a>
    </div>`;
}

function addClickHandler(container, dataArray, type) {
    if (!container) return;

    container.addEventListener('click', (event) => {
        const target = event.target.closest('.app-container');
        if (target) {
            const index = target.getAttribute('data-index');
            const app = dataArray[index];

            app.downloads++;
            target.querySelector('.download-count').textContent = app.downloads;

            // Mở link tải
            const url = target.querySelector('.download-btn').getAttribute('href');
            window.open(url, '_blank');

            // Lưu lượt tải vào localStorage (giữ lại sau khi tải lại trang)
            saveDownloadCounts();
        }
    });
}

// Lưu và khôi phục lượt tải từ localStorage
function saveDownloadCounts() {
    localStorage.setItem('appDownloads', JSON.stringify({ apps, ksignApps }));
}

function loadDownloadCounts() {
    const saved = JSON.parse(localStorage.getItem('appDownloads'));
    if (saved) {
        if (saved.apps) saved.apps.forEach((a, i) => apps[i].downloads = a.downloads);
        if (saved.ksignApps) saved.ksignApps.forEach((a, i) => ksignApps[i].downloads = a.downloads);
    }
}

// INITIALIZATION
loadDownloadCounts();

// Render apps
if (appContainer) {
    apps.forEach((app, i) => {
        appContainer.innerHTML += render(app, i, 'apps');
    });
}

if (ksignContainer) {
    ksignApps.forEach((app, i) => {
        ksignContainer.innerHTML += render(app, i, 'ksign');
    });
}

// Add click handlers
addClickHandler(appContainer, apps, 'apps');
addClickHandler(ksignContainer, ksignApps, 'ksign');
