// ==========================
// APP DATA
// ==========================
const apps = [
    {
        name: 'FakeLag Reborn ✅',
        url: 'https://plongdevs.github.io/fakelagreborn',
        img: './img/appicons/fakelagreborn.png',
        descriptions: 'Hack FakeLag',
        size: '352 KB',
        updated: '09/10/2025'
    },
    {
        name: 'PlayPing Premium Crack ✅',
        url: 'https://plongdevs.github.io/playpingpremium',
        img: './img/appicons/playping.png',
        descriptions: 'PlayPing Premium by PLong X NguyễnTiêu',
        size: '7 MB',
        updated: '2/11/2025'
    },
    {
        name: 'Hopper V7 Crack ✅',
        url: 'https://plongdevs.github.io/hoppercrack',
        img: './img/appicons/hopper.png',
        descriptions: 'Hopper crack by NDL',
        size: '4 MB',
        updated: '09/10/2025'
    }
];

const datafile = [
    {
        name: 'Data bom Keo mini Antiband ✅',
        url: 'https://plongdevs.github.io/keomini',
        img: 'img/pf/zip.png',
        descriptions: 'Áp dụng cho keo TCXH,STXH',
        size: '21 MB',
        updated: '09/10/2025'
    },
    {
        name: 'Data xe bay đảo thế kỉ ✅',
        url: 'https://plongdevs.github.io/dataxebay',
        img: 'img/pf/zip.png',
        descriptions: 'Dùng để tank bo giống bug lòng đất',
        size: '6 MB',
        updated: '09/10/2025'
    }
];

const Other = [
    {
        name: 'Termux 1.1.9_1 ✅',
        url: 'https://plongdevs.github.io/termux',
        img: 'img/appicons/termux.png',
        descriptions: 'Termux Newest Version',
        size: '107 MB',
        updated: '16/11/2025'
    },
    {
        name: 'MT Manager Vip 2.14.5-Clone ✅',
        url: 'https://plongdevs.github.io/mtmanager.png',
        img: 'img/appicons/mtmanager.png',
        descriptions: 'Ko đăng nhập tk hoặc cập nhật app tránh lỗi',
        size: '22 MB',
        updated: '16/11/2025'
    },
    {
        name: 'NP Manager Vip ✅',
        url: 'https://plongdevs.github.io/npvip',
        img: 'img/appicons/npmanager.png',
        descriptions: 'Vào app thì sẽ hiện dialog cập nhật vì vậy hãy tắt mạng trước khi dùng!',
        size: '51 MB',
        updated: '16/11/2025'
    }
];

// ==========================
// ICON SVG
// ==========================
const downloadIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
</svg>`;

// DOM ELEMENTS
const appContainer = document.querySelector('.app-section');
const dataContainer = document.querySelector('.data-section'); // đổi tên
const otherContainer = document.querySelector('.other-section');

// ==========================
// RENDER UI
// ==========================
function render(app) {
    return `
    <div class="app-container">
        <div class="app">
            <img src="${app.img}" class="app-img box-shadow" alt="${app.name}">
            <h1 style="margin-left: 1em">
                ${app.name}<br>
                <p>${app.descriptions}</p>
                ${app.size ? `<p><strong>Dung lượng:</strong> ${app.size}</p>` : ''}
                ${app.updated ? `<p><strong>Ngày cập nhật:</strong> ${app.updated}</p>` : ''}
            </h1>
        </div>
        <a href="${app.url}" target="_blank" class="download-btn" 
           style="color: #007aff; text-decoration: none;">
            ${downloadIcon}
        </a>
    </div>`;
}

// ==========================
// INIT
// ==========================
if (appContainer) {
    apps.forEach(app => {
        appContainer.innerHTML += render(app);
    });
}

if (dataContainer) {
    datafile.forEach(app => {
        dataContainer.innerHTML += render(app);
    });
}

if (otherContainer) {
    Other.forEach(app => {
        otherContainer.innerHTML += render(app);
    });
}
