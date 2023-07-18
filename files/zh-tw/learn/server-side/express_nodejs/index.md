---
title: Express web framework (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
---

{{LearnSidebar}}

Express 是一個流行的 web 框架，使用 JavsScript 實現，執行在 node.js 環境上。本系列解釋 Express 的優點、如何設定開發環境、完成常見的 web 開發和佈署。

## 前置需求

在開始前你需要了解什麼是伺服器端 web 程式和什麼是 web 框架，推薦閱讀[伺服器端網站開發第一步](/zh-TW/docs/Learn/Server-side/First_steps)。建議了解基本的程式知識和[JavaScript](/zh-TW/docs/Web/JavaScript)，但不需要知道核心概念。

> **備註：** 本網站有許多學習 JavaScript 應用在客戶端開發的有用資源，如：[JavaScript](/zh-TW/docs/Web/JavaScript)、[JavaScript 指南](/zh-TW/docs/Web/JavaScript/Guide)、[JavaScript 基礎](/zh-TW/docs/Learn/Getting_started_with_the_web/JavaScript_basics)、[JavaScript](/zh-TW/docs/Learn/JavaScript) (learning)。使用 Node.js 開發伺服器端使用的 JavaScript 語言與概念和客戶端是一樣的。Node.js 提供[額外的 APIs](https://nodejs.org/dist/latest-v6.x/docs/api/)以支援無瀏覽器環境，例如：建立 HTTP 服務和讀取檔案系統。但不支援 DOM 及瀏覽器相關的 JavaScript API。
>
> 這份指南將提供一些使用 Node.js 和 Express 的資訊以及數個優秀的學習資源。部分連結由 [How do I get started with Node.js](http://stackoverflow.com/a/5511507/894359)(StackOverflow) 與 [What are the best resources for learning Node.js?](https://www.quora.com/What-are-the-best-resources-for-learning-Node-js?)(Quora) 提供。

## 指南

- [Express/Node 介紹](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : 第一篇的系列文章中回答了「什麼是 Node」和「什麼是 Express？」並概略的說明為什麼 Express web 框架如此特別。此文章將重點放在主要的功能上，並展示一些 Express 應用常見的建構模塊（儘管此時你還沒有可供測試的開發環境）
- [設定 Node (Express) 開發環境](/zh-TW/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : 現在你已經了解 Express 的目的了，接下來繼續說明如何設定和測試 Windows、Linux (Ubuntu)和 Mac OS X 上的 Node/Express 開發環境。不管你用的是什麼作業系統，你都能在本文中找到開發 Express 應用的入門需知。
- [Express 教學(1): The Local Library website](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : 在第一篇實務教學系列文章中將說明你將會學到什麼？以及提供範例網站 local library 的概覽，我們將在後續的文章中繼續改進它。
- [Express 教學(2): 建構網站骨架](/zh-TW/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : 本文章展示如何建構網站的骨架，接著你可以自己添加路由、模板/畫面和資料庫。
- [Express 教學(3): 使用資料庫(以 Mongoose 為例)](/zh-TW/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : 本文簡短的介紹 Node/Express 如何使用資料庫。接下來展示 LocalLibray 網站如何透過[Mongoose](http://mongoosejs.com/)進行資料庫的存取。說明物件綱要(object schema)和模型(models)如何宣告、the main field types 和基本驗證。同時簡單的展示幾個讀取資料的主要方法。
- [Express 教學(4): 路由和控制器](/zh-TW/docs/Learn/Server-side/Express_Nodejs/routes)
  - : 在本教學中，我們將為 LocalLibrary 網站中的所有資源終端設定「虛擬」處理函數的路由（URL 處理代碼）。 完成後，我們將為我們的路由處理程式提供模組化結構，以便我們可以在後續的教學中擴展真正的處理函數。 我們也將了解如何使用 Express 創建模組化路由。
- [Express 教學(5): 顯示圖書館的資料](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : 現在已經準備好新增頁面來展示館藏和其他資料了。這些頁面包括一個展示我們有多少種 model 型態的首頁、所有 models 的列表和詳細資料頁面。透過本教學你可以得到從資料庫取得紀錄和使用模板的實務經驗。
- [Express 教學(6): 使用表單](/zh-TW/docs/Learn/Server-side/Express_Nodejs/forms)
  - : 本教學中展示如何使用 Express 的插件-Pug 來使用 HTML Forms，以及如何編寫表單來創造、更新和刪除資料庫的文件。
- [Express 教學(7): 網站佈署](/zh-TW/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : 現在你完成了很棒的*LocalLibrary* 網站，你希望圖書館的員工和會員可以透過網路讀取它。本教學概略說明如何找到主機來佈署你的網站以及為了使你的網站正式上線所需做的準備。

## 或許你也想看

- [在 PWS/Cloud Foundry 上安裝 LocalLibrary](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry)
  - : 本文展示如何在[Pivotal Web Services PaaS cloud](http://run.pivotal.io)上安裝*LocalLibrary* ，PWS/Cloud Foundry 是一個完整且開源的 Heroku 替代品，可使用於教學(7)。如果你正在尋找 Heroku 或其他 PaaS 的替代品或只是想玩點不同的東西，那 PWS/Cloud Foundry 絕對值得一試。

## 新增其他教學

現在已經有了很多教學，但你可能會想寫其他有趣主題的模塊，包括：

- Using sessions
- 使用者認證
- 使用者授權與權限
- 測試 Express web 應用
- Express web 應用之安全性

當然，如果能作個評估模塊就更好了！
