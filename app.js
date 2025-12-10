// ==========================
// 1. FIREBASE SETUP
// ==========================
const firebaseConfig = {
    apiKey: "AIzaSyBOtGYgShMoSFFwZhICeSmtrEe2lR7zW8M",
    authDomain: "plongdownloads.firebaseapp.com",
    databaseURL: "https://plongdownloads-default-rtdb.firebaseio.com",
    projectId: "plongdownloads",
    storageBucket: "plongdownloads.firebasestorage.app",
    messagingSenderId: "569849912189",
    appId: "1:569849912189:web:7becaa77cfd741f66f4a14"
};

// Khởi tạo Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// ==========================
// 2. APP DATA
// ==========================
const apps = [
    { id: "fakelag", name: 'FakeLag Reborn ✅', url: 'https://plongdevs.github.io/fakelagreborn', img: './img/appicons/fakelagreborn.png', descriptions: 'Hack FakeLag', size: '352 KB', updated: '09/10/2025' },
    { id: "playping", name: 'PlayPing Premium Crack ✅', url: 'https://plongdevs.github.io/playpingpremium', img: './img/appicons/playping.png', descriptions: 'PlayPing Premium by PLong X NguyễnTiêu', size: '7 MB', updated: '2/11/2025' },
    { id: "hopper", name: 'Hopper V7 Crack ✅', url: 'https://plongdevs.github.io/hoppercrack', img: './img/appicons/hopper.png', descriptions: 'Hopper crack by NDL', size: '4 MB', updated: '09/10/2025' }
];

const datafile = [
    { id: "keomini", name: 'Data bom Keo mini Antiband ✅', url: 'https://plongdevs.github.io/keomini', img: 'img/pf/zip.png', descriptions: 'Áp dụng cho keo TCXH,STXH', size: '21 MB', updated: '09/10/2025' },
    { id: "dataxebay", name: 'Data xe bay đảo thế kỉ ✅', url: 'https://plongdevs.github.io/dataxebay', img: 'img/pf/zip.png', descriptions: 'Dùng để tank bo giống bug lòng đất', size: '6 MB', updated: '09/10/2025' }
];

const Other = [
    { id: "termux", name: 'Termux 1.1.9_1 ✅', url: 'https://plongdevs.github.io/termux', img: 'img/appicons/termux.png', descriptions: 'Termux Newest Version', size: '107 MB', updated: '16/11/2025' },
    { id: "mtmanager", name: 'MT Manager Vip 2.14.5-Clone ✅', url: 'https://plongdevs.github.io/mtvip', img: 'img/appicons/mtmanager.png', descriptions: 'Ko đăng nhập tk hoặc cập nhật app tránh lỗi', size: '22 MB', updated: '16/11/2025' },
    { id: "npmanager", name: 'NP Manager Vip ✅', url: 'https://plongdevs.github.io/npvip', img: 'img/appicons/npmanager.png', descriptions: 'Vào app sẽ hiện dialog cập nhật, tắt mạng trước khi dùng!', size: '51 MB', updated: '16/11/2025' }
];

// ==========================
// 3. ICON SVG
// ==========================
const downloadIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
</svg>`;

// ==========================
// 4. DOM ELEMENTS
// ==========================
const appContainer = document.querySelector('.app-section');
const dataContainer = document.querySelector('.data-section');
const otherContainer = document.querySelector('.other-section');

// ==========================
// 5. RENDER FUNCTION
// ==========================
function render(app) {
    // Lưu ý: onclick gọi window.increaseDownload
    return `
    <div class="app-container">
        <div class="app">
            <img src="${app.img}" class="app-img box-shadow" alt="${app.name}">
            <h1 style="margin-left: 1em">
                ${app.name}<br>
                <p>${app.descriptions}</p>
                ${app.size ? `<p><strong>Dung lượng:</strong> ${app.size}</p>` : ''}
                ${app.updated ? `<p><strong>Ngày cập nhật:</strong> ${app.updated}</p>` : ''}
                <p><strong>Lượt tải:</strong> <span class="download-count" data-id="${app.id}">Waiting...</span></p>
            </h1>
        </div>
        <a href="${app.url}" target="_blank" class="download-btn" 
           style="color: #007aff; text-decoration: none;" 
           onclick="increaseDownload('${app.id}')">
            ${downloadIcon}
        </a>
    </div>`;
}

// ==========================
// 6. FUNCTION TĂNG LƯỢT TẢI (QUAN TRỌNG)
// ==========================
// Gán hàm vào window để HTML có thể gọi được
window.increaseDownload = function(id) {
    console.log("Đang click tải ID:", id); // Check log
    const ref = database.ref('downloads/' + id);
    
    ref.transaction((current_value) => {
        return (current_value || 0) + 1;
    }).then(() => {
        console.log("Đã tăng lượt tải thành công cho: " + id);
    }).catch((error) => {
        console.error("Lỗi khi tăng lượt tải:", error);
        alert("Lỗi kết nối database! Hãy kiểm tra tab Console.");
    });
};

// ==========================
// 7. LOAD APPS & REALTIME LISTENER
// ==========================
function loadApps() {
    // Render HTML một lần duy nhất (Tối ưu hiệu năng)
    if (appContainer) appContainer.innerHTML = apps.map(render).join('');
    if (dataContainer) dataContainer.innerHTML = datafile.map(render).join('');
    if (otherContainer) otherContainer.innerHTML = Other.map(render).join('');

    // Lắng nghe thay đổi từ Firebase để cập nhật số hiển thị
    // Chạy sau khi HTML đã được render
    const allCountElements = document.querySelectorAll('.download-count');
    
    allCountElements.forEach(el => {
        const id = el.dataset.id;
        const ref = database.ref('downloads/' + id);
        
        // Lắng nghe realtime
        ref.on('value', (snapshot) => {
            const val = snapshot.val();
            el.textContent = val !== null ? val : 0;
        });
    });
}

// ==========================
// 8. INIT
// ==========================
document.addEventListener('DOMContentLoaded', loadApps);