// 知識庫 (Knowledge Base) - 參照報告第 1, 3, 4, 5 題的擷取知識
const KnowledgeBase = {
    // 第1題：風險事件知識
    riskEvents: {
        deepseek: { title: "DeepSeek 爆紅", type: "黑天鵝", desc: "【科技市場層面】AI 競爭原本由美國大型科技公司主導，多數人沒預期中國團隊能突然以低成本模型快速崛起，短時間內引發全球市場震盪，屬於『突然改變市場預期』的突發事件。" },
        covid: { title: "COVID-19 疫情爆發", type: "灰犀牛", desc: "全球公共衛生專家多年警告『全球大流行病一定會再來』。過去已有 SARS、MERS 等前例，各國其實知道高傳染性病毒是重大風險，但因長期忽視導致爆發時準備不足。" },
        trump1: { title: "川普第一次當選", type: "黑天鵝", desc: "主流媒體、民調與市場普遍預測他不會贏。結果出現後打破傳統政治預期，全球金融市場劇烈震盪，極難預測且衝擊巨大。" },
        911: { title: "911 事件", type: "黑天鵝", desc: "幾乎沒人預期民航機會被劫持當成大型攻擊武器。具備高度突發性與非典型性，對全球政治、戰爭、安全制度影響深遠。" },
        climate: { title: "氣候變遷", type: "灰犀牛", desc: "科學界已警告數十年，極端氣候與海平面上升風險早已清楚可見。問題核心不在於『不知道』，而是社會與體制長期不願面對與處理。" },
        finance: { title: "2008年金融海嘯", type: "灰犀牛", desc: "房市泡沫、過度槓桿、次貸問題早有警訊，許多經濟學家與投資人事前已提出警告，屬於金融體系長期累積、明顯存在卻被忽視的風險。" }
    },
    // 第5題：AI 知識樹狀圖規則
    aiTree: "🌳 根據報告第5題的 AI 知識樹狀圖：人工智慧(AI) 分為『機器學習』與『深度學習』。深度學習內含 CNN、RNN、Transformer，並延伸出 NLP (Chatbot) 與 電腦視覺(CV) 兩大實務領域。",
    // 第4題：Puff 系統故事背景
    puffSystem: "🫁 呼應報告第4題！Puff 是歷史上著名的醫療專家系統，用於診斷肺部疾病。這正好能連結到你小時候在老家看到鄉下阿伯阿姨們抽菸、肺功能不佳，進而想用科技改善醫療的溫暖初衷。"
};

// 推理引擎 (Inference Engine) - 執行 IF-THEN 規則
function runInference(userInput) {
    const query = userInput.toLowerCase();
    
    // 規則 1：查詢功能或幫助
    if (query.includes("功能") || query.includes("幫助") || query.includes("help")) {
        return "💡 本系統提供：1. 基於樹狀圖規則的 NLP 諮詢、2. 第一題黑天鵝/灰犀牛決策模擬、3. 第三題知識擷取方法論展示。";
    }
    // 規則 2：查詢 AI 知識樹狀結構 (第5題)
    if (query.includes("樹狀圖") || query.includes("ai") || query.includes("結構") || query.includes("深度學習")) {
        return KnowledgeBase.aiTree;
    }
    // 規則 3：查詢 Puff 專家系統與醫療初衷 (第4題)
    if (query.includes("puff") || query.includes("抽菸") || query.includes("肺") || query.includes("醫療")) {
        return KnowledgeBase.puffSystem;
    }
    // 規則 4：預設模糊推理機制
    return `🤖 系統推論提示：您輸入的『${userInput}』在現有知識庫中屬於專家隱性知識。建議您切換至「風險評估」分頁，測試本系統的黑天鵝/灰犀牛專家規則引擎。`;
}
