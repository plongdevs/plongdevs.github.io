// ==========================
// APP DATA
// ==========================
const apps = [
    {
        name: 'FakeLag Reborn ✅',
        url: 'https://drive.google.com/file/d/19HLe6X61w-V3z3FvWYHv4sO2XpOOrrVA/view?usp=drivesdk',
        img: './img/appicons/fạkelag reborn.jpg',
        descriptions: 'Hack FakeLag',
        size: '352 KB',
        updated: '09/10/2025'
    },
    {
        name: 'Netwing',
        url: 'https://www.mediafire.com/file/h9xc4z01xj0fwxp/Netwing+0.11.0B.F2++.apk/file',
        img: './img/appicons/netwing.jpg',
        descriptions: 'Hack FakeLag Anti thấp ko nên tải',
        size: '34 MB',
        updated: '09/10/2025'
    },
    {
        name: 'FayFayConfig ✅',
        url: 'https://www.mediafire.com/file/w691w2cg0u5mrtq/FayFay+Config+2.0.6.apk/file',
        img: './img/appicons/fayfayconfig.jpg',
        descriptions: 'PlayPing bản cũ chống ban anti 100%',
        size: '4 MB',
        updated: '09/10/2025'
    },
];

const datafile = [
    {
        name: 'DATA Bom Keo mini Antiband ✅',
        url: 'https://www.mediafire.com/file/7szp1su417oq3iz/Keo+Mini.zip/file',
        img: 'img/pf/zip.png',
        descriptions: 'Áp dụng cho keo TCXH,STXH',
        size: '21 MB',
        updated: '09/10/2025'
    },
    {
        name: 'DATA Xe bay đảo thế kỉ✅',
        url: 'https://www.mediafire.com/file/lrplx2guoies3ns/xe+bay+đảo+thế+kỉ.zip/file',
        img: 'img/pf/zip.png',
        descriptions: 'Dùng để tank bo cho ae antiband 100%',
        size: '6 MB',
        updated: '09/10/2025'
    },
    {
        name: 'DATA Tử chiến độn thổ đảo thế kỉ ✅',
        url: 'https://www.mediafire.com/file/2faijugnfaqvobm/Tử+chiến+xuyên+lòng+đất.zip/file',
        img: 'img/pf/zip.png',
        descriptions: 'Nhớ bật orion khi xuống...',
        size: '29 MB',
        updated: '09/10/2025'
    }
];

// ==========================
// ICON SVG
// ==========================
const cloudIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="7 10 12 15 17 10"/>
  <line x1="12" y1="15" x2="12" y2="3"/>
</svg>`;

// ==========================
// DOM ELEMENTS
// ==========================
const appContainer = document.querySelector('.app-section');
const ksignContainer = document.querySelector('.ksign-section');

// ==========================
// RENDER UI
// ==========================
function render(app) {
    return `
    <div class="app-container">
        <div class="app">
            <img src="${app.img}" class="app-img box-shadow" alt="${app.name}">
            <h1 style="margin-left: 1em">${app.name}<br>
                <p>${app.descriptions}</p>
                <p><strong>Dung lượng:</strong> ${app.size}</p>
                <p><strong>Ngày cập nhật:</strong> ${app.updated}</p>
            </h1>
        </div>
        <a href="${app.url}" target="_blank" class="download-btn" style="color: #007aff; text-decoration: none;">
            ${cloudIcon}
        </a>
    </div>`;
}

// ==========================
// INIT
// ==========================
if (appContainer) apps.forEach(app => appContainer.innerHTML += render(app));
if (ksignContainer) datafile.forEach(app => ksignContainer.innerHTML += render(app));
