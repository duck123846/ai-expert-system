// 知識庫 (Knowledge Base) - 儲存結構化知識規則
const KnowledgeBase = {
    riskEvents: {
        deepseek: { title: "DeepSeek 爆紅事件", type: "黑天鵝", desc: "【科技市場層面】AI 競爭原本由美國大型科技公司主導，市場未預期非美團隊能突然以極低成本模型快速崛起 [cite: 6]。該事件在短時間內引發全球金融與晶片股劇烈震盪，屬於改變市場預期的突發事件 [cite: 7, 8]。" },
        covid: { title: "COVID-19 疫情大流行", type: "灰犀牛", desc: "全球公共衛生專家多年警告大型流感與大流行病必然捲土重來 [cite: 10]，且過去已有 SARS、MERS 等前例 [cite: 11]。各國明知高傳染性病毒為潛在重大風險，卻因長期忽視導致防範與應變不足 [cite: 12]。" },
        trump1: { title: "川普第一次當選", type: "黑天鵝", desc: "當時主流媒體、民調與全球金融市場普遍預測其勝選機率極低 [cite: 26]。結果打破傳統政治常態與市場既定預期，引發全球金融市場劇烈震盪 [cite: 27, 28]。" },
        911: { title: "911 突發事件", type: "黑天鵝", desc: "國安與民航體系事前極難預測民航機會被劫持作為戰略性大型攻擊武器 [cite: 30]。具備高度非典型性與非預期性，對全球政治與安全制度產生劇烈衝擊 [cite: 31, 32]。" },
        climate: { title: "全球氣候變遷", type: "灰犀牛", desc: "科學界已持續發出預警數十年 [cite: 34]，極端氣候與海平面上升等環境危機早已清晰可見 [cite: 35]。核心難題並非風險未知，而是社會體制長期不願正視與處理 [cite: 36]。" },
        finance: { title: "2008 金融海嘯", type: "灰犀牛", desc: "房市泡沫化、過度金融槓桿與次級房貸問題在爆發前早已頻現警訊 [cite: 42]，多位經濟學家亦曾提出嚴正警告 [cite: 43]，屬於體系長期累積、明顯存在卻被市場選擇性忽視的系統性風險 [cite: 44]。" }
    },
    // 已移除「根據第5題」字樣
    aiTree: "🌳 本系統的核心技術藍圖：人工智慧 (AI) 架構分為『機器學習』與『深度學習』兩大範疇 [cite: 125, 126, 130]。其中深度學習包含 CNN、RNN、Transformer 等核心網路結構 [cite: 131, 132, 133]，進而延伸出自然語言處理 (NLP) 與電腦視覺 (Computer Vision) 兩大實務應用技術 [cite: 134, 138]。",
    // 已移除「呼應第4題」字樣
    puffSystem: "🫁 Puff 系統歷史背景：Puff 是醫療人工智慧發展史上著名的經典專家系統之一，主要用於診斷與評估患者的肺部疾病與呼吸功能 [cite: 67, 68]。這類型系統的開發初衷，往往是為了解決偏遠或特定區域因醫療資源分布不均、環境因素（如長期抽菸與空污環境）導致的呼吸系統健康問題 [cite: 68, 69, 70]，期望透過結構化專家知識來輔助與提升基層醫療的診斷精準度。"
};

// 推理引擎 (Inference Engine) - 執行結構化條件比對
function runInference(userInput) {
    const query = userInput.toLowerCase();
    
    if (query.includes("功能") || query.includes("幫助") || query.includes("help")) {
        return "💡 本系統提供：1. 核心技術藍圖諮詢、2. 全球風險評估專家決策模擬、3. 知識擷取方法論結構化展示。";
    }
    if (query.includes("樹狀圖") || query.includes("ai") || query.includes("結構") || query.includes("技術") || query.includes("學習")) {
        return KnowledgeBase.aiTree;
    }
    if (query.includes("puff") || query.includes("抽菸") || query.includes("肺") || query.includes("醫療")) {
        return KnowledgeBase.puffSystem;
    }
    return `🤖 推理引擎提示：您輸入的『${userInput}』屬於專家隱性經驗知識。建議您可以切換至「全球風險評估」模組，測試本系統針對黑天鵝與灰犀牛事件的推導邏輯。`;
}
