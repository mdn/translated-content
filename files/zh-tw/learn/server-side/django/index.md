---
title: Django 網站框架 (Python)
slug: Learn/Server-side/Django
---

{{LearnSidebar}}

Django 使用 Python 語言編寫，是一個廣受歡迎、且功能完整的服務器端網站框架。本模塊將為您展示，為什麼 Django 能夠成為一個廣受歡迎的服務器端框架，如何設置開發環境，以及如何開始創建你自己的網絡應用。

## 先決條件

開始學習本模塊，並不需要任何 Django 知識. 但您要理解什麼是服務器端網絡編程、什麼是網絡框架，最好能夠閱讀我們的[服務端網站編程的第一步模塊](/zh-TW/docs/Learn/Server-side/First_steps)。

最好能有基本的編程概念、並了解 [Python](/zh-TW/docs/Glossary/Python) 語言，但並不是理解本教程的核心概念的必然條件。

> **備註：** 對於初學者來說，Python 是最容易閱讀和理解的編程語言之一。也就是說，如果您想更好的理解本教程，網上有很多免費書籍及免費教程可供參考學習（建議初學者查看 Python 官網的 [Python for Non Programmers](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) )。

## 指引

- [Django 簡介](/zh-TW/docs/Learn/Server-side/Django/Introduction)
  - : 在第一篇關於 Django 的文章裡，我們會回答"什麼是 Django?"，並概述這個網絡框架的特殊之處。我們會列出主要的功能，包括一些高級的功能特性，這些高級特性我們在這部分教程裡沒有時間詳細說明。在你設置好 Django 應用、並開始把玩它之前，我們會展示 Django 應用的一些主要模塊，讓你明白 Django 應用能做什麼。
- [架設 Django 開發環境](/zh-TW/docs/Learn/Server-side/Django/development_environment)
  - : 現在你知道 Django 是做什麼的，我們會展示怎樣在 Windows、Linux(Ubuntu)、和 Mac OS X 上，創建和測試 Django 的開發環境—不管你是用什麼操作系統，這篇文章會教給你能夠開發 Django 應用所需要的開發環境。
- [Django 教學 1: 本地圖書館網站](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website)
  - : 我們實用教程系列的第一篇文章，會解釋你將學習到什麼，並提供 "本地圖書館" 網站這個例子的概述。我們會在接下來的文章裡，完成並不斷的改進這個網站。
- [Django 教學 2: 創建骨架網站](/zh-TW/docs/Learn/Server-side/Django/skeleton_website)
  - : 這篇文章會教你，怎樣創建一個網站的 "框架" 。以這個網站為基礎，你可以填充網站特定的 settings、urls、models、views 和 templates。
- [Django 教學 3: 使用模型](/zh-TW/docs/Learn/Server-side/Django/Models)
  - : 這篇文章會為 「本地圖書館網站」 定義數據模板—數據模板是我們為應用存儲的數據結構。並且允許 Django 在資料庫中存儲數據(以後可以修改)。此文章解釋了什麼是數據模板、怎樣聲明它、和一些主要的數據種類。文章還簡要的介紹了一些，你可以獲得數據模板的方法。
- [Django 教學 4: Django 管理員頁面](/zh-TW/docs/Learn/Server-side/Django/Admin_site)
  - : 現在我們已經為本地圖書館網站，創建了模型，我們將使用 Django 管理員頁面添加一些『真實的』的圖書數據。首先，我們將向你介紹，如何使用管理員頁面註冊模型，然後我們介紹如何登錄和創建一些數據。最後我們展示一些，進一步改進管理員頁面呈現的方法。
- [Django 教學 5: 創建我們的首頁](/zh-TW/docs/Learn/Server-side/Django/Home_page)
  - : 我們現在可以添加代碼，來展示我們的第一個完整頁面—本地圖書館主頁，來顯示我們對每個模型類型有多少條記錄，並提供我們其他頁面的側邊欄導航鏈接。一路上，我們將獲得編寫基本 URL 地圖和視圖、從數據庫獲取記錄、以及使用模版的實踐經驗。.
- [Django 教學 6: 通用列表與詳細視圖](/zh-TW/docs/Learn/Server-side/Django/Generic_views)
  - : 本教學課程擴展了我們的本地圖書館網站，添加書籍和作者和詳細頁面。在這裡，我們將了解基於類別的通用視圖，並展示如何減少常用代碼用例的代碼量。我們還將更詳細地深入理解 URL 處理，展示如何執行基本模式匹配。
- [Django 教學 7: 會話框架](/zh-TW/docs/Learn/Server-side/Django/Sessions)
  - : 本教學擴展本地圖書館網站，向首頁添加了一個基於會話的訪問計數器。這是個比較簡單的例子，但它顯示如何使用會話框架，為你自己的網站中的匿名用戶，提供一致的行為。
- [Django 教學 8: 使用者身份驗証和權限](/zh-TW/docs/Learn/Server-side/Django/Authentication)
  - : 本教程，我們將向你展示，如何允許使用者用自己的賬戶，登錄到你的網站，以及如何根據他們是否登錄、及其權限，來控制他們可以做什麼、和看到什麼。作為此次演示的一部分，我們將擴展本地圖書館網站，添加登錄和登出頁面，以及使用者和工作人員特定頁面，以查看已借用的書籍。
- [Django 教學 9: 使用表單](/zh-TW/docs/Learn/Server-side/Django/Forms)
  - : 本教程，我們將向你展示如何使用 Django 中的 [HTML Forms](/zh-TW/docs/Web/Guide/HTML/Forms) 表單，特別是編寫表單以創建、更新、和刪除模型實例的最簡單方法。作為此次演示的一部分，我們將擴展本地圖書館網站，以便圖書館員，可以使用我們自己的表單 (而不是使用管理應用程序) 來更新書籍，創建、更新、刪除作者。
- [Django 教學 10: 測試 Django 網頁應用](/zh-TW/docs/Learn/Server-side/Django/Testing)
  - : 隨著網站的的發展，手工測試越來越難測試—不僅要測試更多，而且隨著組件之間的相互作用變得越來越複雜，一個領域的一個小的變化，可能需要許多額外的測試，來驗證其對其他領域的影響。減輕這些問題的一種方法，是編寫自動化測試，每次更改時，都可以輕鬆可靠地運行。本教程將介紹如何使用 Django 的測試框架，對你的網站進行單元測試自動化。
- [Django 教學 11: 部署 Django 到生產環境](/zh-TW/docs/Learn/Server-side/Django/Deployment)
  - : 現在，你已創建（並測試）一個很酷的 「本地圖書館網站」，你將要把它安裝在公共 Web 服務器上，以便圖書館員工和成員，可以通過 Internet 訪問。本文概述如何找到主機，來部署你的網站，以及你需要做什麼，才能使你的網站準備好投入生產環境。
- [Django 網頁應用安全](/zh-TW/docs/Learn/Server-side/Django/web_application_security)
  - : 保護用戶數據，是任何網站設計的重要組成部分，我們以前解釋了 Web 安全文章中，一些更常見的安全威脅—本文提供了 Django 內置、如何保護處理這種危險的實際演示。

## 評估

以下評估，將測試你對如何使用 Django 創建網站的理解，如上述指南中所列出的項目。

- [Django 小部落格 DIY](/zh-TW/docs/Learn/Server-side/Django/django_assessment_blog)
  - : 在這個評估中，你將使用你從本單元中學到的一些知識，來創建自己的部落格。
