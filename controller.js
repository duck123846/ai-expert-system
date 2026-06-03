// 控制器邏輯 - 負責協調呈現層與推理引擎層的交互

// 頁籤切換控制
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('bg-cyan-600', 'text-white', 'shadow');
        el.classList.add('text-gray-300', 'hover:bg-slate-700');
    });

    document.getElementById(tabId).classList.add('active');
    const activeBtn = document.getElementById('btn-' + tabId);
    activeBtn.classList.remove('text-gray-300', 'hover:bg-slate-700');
    activeBtn.classList.add('bg-cyan-600', 'text-white', 'shadow');
}

// 處理 NLP 對話框的發送點擊
function handleSendClick() {
    const inputEl = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const text = inputEl.value.trim();
    if(!text) return;

    // 1. 更新前端 UI (使用者訊息)
    chatBox.innerHTML += `
        <div class="flex gap-2 justify-end">
            <div class="bg-cyan-600 text-white p-3 rounded-lg shadow-xs text-sm max-w-[80%]">${text}</div>
            <span class="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded h-fit">你</span>
        </div>
    `;

    // 2. 呼叫後端推理引擎層 (Inference Engine) 取得決策
    const reply = runInference(text);

    // 3. 將推理結果渲染回前端 UI (AI 回應)
    setTimeout(() => {
        chatBox.innerHTML += `
            <div class="flex gap-2">
                <span class="bg-cyan-100 text-cyan-800 text-xs font-bold px-2 py-1 rounded h-fit">AI</span>
                <div class="bg-white p-3 rounded-lg shadow-xs text-sm max-w-[80%]">${reply}</div>
            </div>
        `;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 250);

    inputEl.value = "";
}

// 處理風險評估按鈕點擊
function handleRiskClick(eventKey) {
    // 從後端知識庫讀取資料
    const data = KnowledgeBase.riskEvents[eventKey];
    
    const panel = document.getElementById('risk-result');
    const badge = document.getElementById('risk-badge');
    const title = document.getElementById('risk-title');
    const desc = document.getElementById('risk-desc');

    // 渲染至前端
    panel.className = `p-5 rounded-xl border ${data.type === '黑天鵝' ? 'bg-red-100 border-red-300' : 'bg-amber-100 border-amber-300'} block`;
    badge.className = `px-2.5 py-1 rounded text-xs font-bold ${data.type === '黑天鵝' ? 'bg-red-600 text-white' : 'bg-amber-600 text-white'}`;
    badge.innerText = data.type;
    title.innerText = data.title;
    title.className = `font-bold text-lg ${data.type === '黑天鵝' ? 'text-red-800' : 'text-amber-800'}`;
    desc.innerText = data.desc;
    desc.className = `text-sm ${data.type === '黑天鵝' ? 'text-red-800' : 'text-amber-800'} opacity-90 mt-2`;
}

// 加分題：手動串接報告第1-(4)題川普關稅政策
function checkTrumpBonus() {
    const panel = document.getElementById('risk-result');
    const badge = document.getElementById('risk-badge');
    const title = document.getElementById('risk-title');
    const desc = document.getElementById('risk-desc');

    panel.className = "p-5 rounded-xl border bg-amber-100 border-amber-300 block";
    badge.className = "px-2.5 py-1 rounded text-xs font-bold bg-amber-600 text-white";
    badge.innerText = "灰犀牛";
    title.innerText = "川普關稅政策";
    title.className = "font-bold text-lg text-amber-800";
    desc.innerText = "【政策發展層面】川普長期以來強烈主張保護主義與對中強硬。在競選期間就明確提出提高關稅，政策方向公開透明。這屬於早已看得到、風險明顯存在但常被市場忽視的典型『灰犀牛』。";
}

// 綁定輸入框 Enter 鍵
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleSendClick();
    }
});
