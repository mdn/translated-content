---
title: 伺服端網站程式設計
slug: Learn_web_development/Extensions/Server-side
---

**_動態網站_**——**伺服端網站程式設計**是一連串有關如何建立動態網站的模組：動態網站可以針對 HTTP 請求，發送客製化的資訊。這些模組將介紹伺服端網站程式設計：還有以初學者的角度，來教你怎麼使用 Django (Python) 與 Express (Node.js/JavaScript) 來架設基本的動態網路程式。

大多數主流網站會使用伺服端技術，以根據需要呈現動態資料。例如說，來想想亞馬遜（Amazon）上架多少商品、還有臉書（Facebook）貼了多少動態。如果都用靜態頁面來呈現這些內容，開發就會毫無效率可言。因此，我們會使用靜態技術（[HTML](/zh-TW/docs/Learn_web_development/Core/Structuring_content)、[CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics)、[JavaScript](/zh-TW/docs/Learn_web_development/Core/Scripting)）來顯示靜態模板；並在需要時，動態更新模板內的資料。一如你在逛亞馬遜時，看著五花八門的產品一般。

在當今的 Web development 的世界，我們強烈建議學習怎麼開發伺服端網站程式。

## 學習路徑

學習伺服端網站程式設計通常比用戶端網站程式設計簡單，因為動態網站比較傾向執行多次相似的操作（像是從資料庫擷取資料並放到頁面上、驗證用戶輸入的資料並存到資料庫、檢查登入用戶權限之類的）、使用框架建立網站能讓上述操作、以及其他常見操作變得簡單許多。

基本的程式概念（或是理解特定的語言）會很有用，但不是必須的。同樣地，精於用戶端網站程式設計不是必須，但它能在前端開發時，幫你做得更好。

首先你要知道「web 是怎麼作動的」。我們建議先看看這些文章：

- [何謂網路伺服器？](/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [建立網站需要什麼軟體？](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- [如何把檔案傳到伺服器？](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)

有了基本觀念後，就可以開始去學習模組章節的東西了。

## 模組

本章節包含了以下模組。你首先要從第一個模組開始，再循序漸進，學習接下來的模組。這些模組將告訴你如何與訪間最熱門的其中兩個伺服器端框架共事。

- [伺服器端程式設計起步走](/zh-TW/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : 本模組會提供與技術無關的伺服器資訊，像是「那什麼？」、「和用戶端有啥不同？」、「有用嗎？」之類的。本模組也會概述一些比較熱門的伺服器端 web 框架、並告訴你如何選擇。最後，我們還會概述有關伺服器服務的安全性問題。
- [Django 網站框架 (Python)](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Django)
  - : Django 以 Python 寫成，是個非常熱門的伺服器端 web 框架。本模組會講解 Django 是好框架的理由、如何建立開發環境、還有如何處理常見工作。
- [Express web framework (Node.js/JavaScript)](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : Express 以 JavaScript 寫成、並在 node.js 執行環境執行。它也是個非常熱門的伺服器端 web 框架。本模組會講解一些有關本框架的重要優點、也同樣會講解如何建立開發環境、還有如何處理常見工作。

## 參見

- [不用框架的 Node 伺服器](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)
  - : 如果不想用框架的話，這篇文章會告訴你如何使用純 Node.js 提供簡易的靜態檔案。
