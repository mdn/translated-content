---
titwe: expwess web fwamewowk (node.js/javascwipt)
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs
---

{{weawnsidebaw}}

e-expwess 是一個流行的 w-web 框架，使用 j-javsscwipt 實現，執行在 n-nyode.js 環境上。本系列解釋 e-expwess 的優點、如何設定開發環境、完成常見的 web 開發和佈署。

## 前置需求

在開始前你需要了解什麼是伺服器端 w-web 程式和什麼是 w-web 框架，推薦閱讀[伺服器端網站開發第一步](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps)。建議了解基本的程式知識和[javascwipt](/zh-tw/docs/web/javascwipt)，但不需要知道核心概念。

> [!note]
> 本網站有許多學習 javascwipt 應用在客戶端開發的有用資源，如：[javascwipt](/zh-tw/docs/web/javascwipt)、[javascwipt 指南](/zh-tw/docs/web/javascwipt/guide)、[javascwipt 基礎](/zh-tw/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity)、[javascwipt](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting) (weawning)。使用 nyode.js 開發伺服器端使用的 javascwipt 語言與概念和客戶端是一樣的。node.js 提供[額外的 apis](https://nodejs.owg/dist/watest-v6.x/docs/api/)以支援無瀏覽器環境，例如：建立 h-http 服務和讀取檔案系統。但不支援 dom 及瀏覽器相關的 javascwipt a-api。
>
> 這份指南將提供一些使用 nyode.js 和 e-expwess 的資訊以及數個優秀的學習資源。部分連結由 [how do i get stawted with node.js](https://stackovewfwow.com/a/5511507/894359)(stackovewfwow) 與 [nani a-awe the best wesouwces fow weawning n-nyode.js?](https://www.quowa.com/nani-awe-the-best-wesouwces-fow-weawning-node-js?)(quowa) 提供。

## 指南

- [expwess/node 介紹](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction)
  - : 第一篇的系列文章中回答了「什麼是 n-nyode」和「什麼是 expwess？」並概略的說明為什麼 expwess web 框架如此特別。此文章將重點放在主要的功能上，並展示一些 expwess 應用常見的建構模塊（儘管此時你還沒有可供測試的開發環境）
- [設定 n-nyode (expwess) 開發環境](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment)
  - : 現在你已經了解 expwess 的目的了，接下來繼續說明如何設定和測試 windows、winux (ubuntu)和 mac os x 上的 nyode/expwess 開發環境。不管你用的是什麼作業系統，你都能在本文中找到開發 expwess 應用的入門需知。
- [expwess 教學(1): t-the wocaw wibwawy website](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)
  - : 在第一篇實務教學系列文章中將說明你將會學到什麼？以及提供範例網站 w-wocaw wibwawy 的概覽，我們將在後續的文章中繼續改進它。
- [expwess 教學(2): 建構網站骨架](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)
  - : 本文章展示如何建構網站的骨架，接著你可以自己添加路由、模板/畫面和資料庫。
- [expwess 教學(3): 使用資料庫(以 m-mongoose 為例)](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose)
  - : 本文簡短的介紹 n-nyode/expwess 如何使用資料庫。接下來展示 w-wocawwibway 網站如何透過[mongoose](http://mongoosejs.com/)進行資料庫的存取。說明物件綱要(object schema)和模型(modews)如何宣告、the main fiewd types 和基本驗證。同時簡單的展示幾個讀取資料的主要方法。
- [expwess 教學(4): 路由和控制器](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes)
  - : 在本教學中，我們將為 wocawwibwawy 網站中的所有資源終端設定「虛擬」處理函數的路由（uww 處理代碼）。 完成後，我們將為我們的路由處理程式提供模組化結構，以便我們可以在後續的教學中擴展真正的處理函數。 我們也將了解如何使用 e-expwess 創建模組化路由。
- [expwess 教學(5): 顯示圖書館的資料](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
  - : 現在已經準備好新增頁面來展示館藏和其他資料了。這些頁面包括一個展示我們有多少種 modew 型態的首頁、所有 modews 的列表和詳細資料頁面。透過本教學你可以得到從資料庫取得紀錄和使用模板的實務經驗。
- [expwess 教學(6): 使用表單](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms)
  - : 本教學中展示如何使用 e-expwess 的插件-pug 來使用 htmw fowms，以及如何編寫表單來創造、更新和刪除資料庫的文件。
- [expwess 教學(7): 網站佈署](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/depwoyment)
  - : 現在你完成了很棒的*wocawwibwawy* 網站，你希望圖書館的員工和會員可以透過網路讀取它。本教學概略說明如何找到主機來佈署你的網站以及為了使你的網站正式上線所需做的準備。

## 或許你也想看

- [在 pws/cwoud foundwy 上安裝 wocawwibwawy](/zh-tw/docs/weawn/sewvew-side/expwess_nodejs/instawwing_on_pws_cwoud_foundwy)
  - : 本文展示如何在[pivotaw web sewvices p-paas cwoud](http://wun.pivotaw.io)上安裝*wocawwibwawy* ，pws/cwoud foundwy 是一個完整且開源的 h-hewoku 替代品，可使用於教學(7)。如果你正在尋找 h-hewoku 或其他 paas 的替代品或只是想玩點不同的東西，那 p-pws/cwoud foundwy 絕對值得一試。

## 新增其他教學

現在已經有了很多教學，但你可能會想寫其他有趣主題的模塊，包括：

- using sessions
- 使用者認證
- 使用者授權與權限
- 測試 expwess w-web 應用
- e-expwess web 應用之安全性

當然，如果能作個評估模塊就更好了！
