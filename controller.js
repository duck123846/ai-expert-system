// 應用控制層 (Application Controller) - 負責處理呈現層與推理引擎的資料流

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

function handleSendClick() {
    const inputEl = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const text = inputEl.value.trim();
    if(!text) return;

    chatBox.innerHTML += `
        <div class="flex gap-2 justify-end">
            <div class="bg-cyan-600 text-white p-3 rounded-lg shadow-xs text-sm max-w-[80%]">${text}</div>
            <span class="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded h-fit">使用者</span>
        </div>
    `;

    const reply = runInference(text);

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

function handleRiskClick(eventKey) {
    const data = KnowledgeBase.riskEvents[eventKey];
    const panel = document.getElementById('risk-result');
    const badge = document.getElementById('risk-badge');
    const title = document.getElementById('risk-title');
    const desc = document.getElementById('risk-desc');

    panel.className = `p-5 rounded-xl border ${data.type === '黑天鵝' ? 'bg-red-100 border-red-300' : 'bg-amber-100 border-amber-300'} block`;
    badge.className = `px-2.5 py-1 rounded text-xs font-bold ${data.type === '黑天鵝' ? 'bg-red-600 text-white' : 'bg-amber-600 text-white'}`;
    badge.innerText = data.type;
    title.innerText = data.title;
    title.className = `font-bold text-lg ${data.type === '黑天鵝' ? 'text-red-800' : 'text-amber-800'}`;
    desc.innerText = data.desc;
    desc.className = `text-sm ${data.type === '黑天鵝' ? 'text-red-800' : 'text-amber-800'} opacity-90 mt-2`;
}

function checkTrumpBonus() {
    const panel = document.getElementById('risk-result');
    const badge = document.getElementById('risk-badge');
    const title = document.getElementById('risk-title');
    const desc = document.getElementById('risk-desc');

    panel.className = "p-5 rounded-xl border bg-amber-100 border-amber-300 block";
    badge.className = "px-2.5 py-1 rounded text-xs font-bold bg-amber-600 text-white";
    badge.innerText = "灰犀牛";
    title.innerText = "全球關稅政策評估";
    title.className = "font-bold text-lg text-amber-800";
    desc.innerText = "【保護主義與貿易政策層面】關稅屏障政策通常具備高度公開性，在前期推動與競選期間皆有明確、公開的施政方針與言論主張。此類政策帶來的經濟風險在市場上早已明確存在，雖經常被部分投資群體短期忽視，但在知識工程的風險模型中，屬於極具代表性的『灰犀牛』事件。";
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleSendClick();
    }
});
