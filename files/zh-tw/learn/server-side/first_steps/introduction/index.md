---
title: 伺服器端介紹
slug: Learn/Server-side/First_steps/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}

歡迎來到 MDN 伺服器端程式設計的初學者課程 ！在第一篇文章中，我們會用較為抽象的角度來探討 server-side programming，並且為你解答「這是什麼？」「這個和用戶端的程式有什麼不同？」以及「這個有什麼用？」 。在讀完這篇文章後，你將能明白如何透過 server-side coding 來為你的網站增添力量。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先決條件:</th>
      <td>基本電腦知識、對網路伺服器有基本了解。</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        認識伺服器端的程式設計、它可以做什麼、它和用戶端的程式有什麼不一樣？
      </td>
    </tr>
  </tbody>
</table>

大多數的大型網站使用伺服器端程式（server-side code）來動態地顯示各種所需的資料，普遍的做法為從伺服端的資料庫中取出資料，並送至用戶端，再透過一些 code 來顯示它們（例如：HTML 與 JavaScript）。

也許，使用伺服器端程式的最大好處是為不同的瀏覽者量身打造網頁內容。動態網站根據使用者的偏好設定及興趣提供更為相關的內容，也可以儲存個人設定及資訊讓網站更易於使用 — 例如重複使用已儲存的信用卡資料來使付款流程更為順暢。

它也能讓網站透過信件或其他方式來和使用者互動，如發送通知與更新。這一切的一切都讓網站更能牢牢抓住使用者的心。

## 何謂伺服器端網站程式開發？

網頁瀏覽器使用超文本傳輸協定（**H**yper**T**ext **T**ransfer **P**rotocol, {{glossary("HTTP")}}）與網頁伺服器（[web servers](/zh-TW/docs/Learn/Common_questions/What_is_a_web_server)）溝通。當您點選網頁上的連結、送出表單，或者執行搜尋，一段 **HTTP 請求**（**request**）會由您的瀏覽器送至目標伺服器。

該請求（request）包含一個用來指定受影響資源的 URL、一個定義行為的請求方法（例如對資源進行 get、delete 或 post）與當進行[HTTP POST 方法](/zh-TW/docs/Web/HTTP/Methods/POST)時可能包含編碼於 URL 參數中的額外資訊（經由一段[查詢字串](https://en.wikipedia.org/wiki/Query_string)送出的各個鍵值對），或是在關聯的{{glossary("Cookie", "cookies")}}中。

網頁伺服器等待用戶端的請求訊息、獲得後處理它們，並以一個**HTTP 回應**（**response**）訊息回覆至網頁瀏覽器。該回應包含一個狀態訊息說明本次請求是否達成（例如："HTTP/1.1 200 OK"表示成功）。

成功對應於一個請求的回應主體（response body）應包含請求的資源（例如：一份新的 HTML 頁面或一張圖片等），這些可能將被用來顯示在網頁瀏覽器中。

### 靜態網站

以下的靜態網站（static site）圖展示一個基本的網頁伺服器架構，其中靜態網站意謂當無論何時有個特定資源的請求，伺服器始終回傳相同的硬編碼內容（hard-coded content）。當一個使用者想要引導到一個網頁時，瀏覽器送出的 HTTP "GET" 請求指的就是該資源的 URL。

此伺服器從它的檔案系統取回被請求的文件，並回傳一個包含此文件以及[成功狀態碼](/zh-TW/docs/Web/HTTP/Status#成功回應)（通常為 200 OK）的 HTTP 回應。若檔案因某些原因無法被取回，則回傳一個錯誤狀態（參見 [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Status#用戶端錯誤回應) 與 [伺服器端錯誤回應](/zh-TW/docs/Web/HTTP/Status#伺服器端錯誤回應)）。

![A simplified diagram of a static web server.](basic_static_app_server.png)

### 動態網站

一個動態網站的回應內容是當需要時*動態*產生的。在一個動態網站的 HTML 網頁通常是經由資料庫取得並插入資料至 HTML 範本的佔位符（placeholders）中而創造出來（相較於靜態網站，這對於儲存大量內容而言，這是一種相當有效率的做法）。

一個動態網站可以根據使用者或已存偏好設定提供的 URL 資訊回傳不同的資料，也可以以其他的作用方式呈現回應（例如：發送通知）。

用來支援一個動態網站的大部分的程式碼必須在伺服器執行。建立程式碼的方式稱為＂**伺服端程式設計（server-side programming）**＂或＂**後端腳本（back-end scripting）**＂。

下圖為*動態網站*（_dynamic website_）的基本架構。如同先前的圖說，瀏覽器發送 HTTP 請求至伺服器，接著伺服器處理請求後，回傳合適的 HTTP 回應。

對於*靜態*資源的請求處理方式如同靜態網站的方式（靜態資源為任何不會改變的檔案 — 通常為 CSS、JavaScript、圖片、預產生的 PDF 檔案等）。

![A simplified diagram of a web server that uses server-side programming to get information from a database and construct HTML from templates. This is the same diagram as is in the Client-Server overview.](web_application_with_html_and_steps.png)

對於動態資源的請求方式則為轉送(2)至伺服端程式碼（如圖中的*網頁應用程式 Web Application*）。對於＂動態請求＂，伺服器解釋該請求、從資料庫讀取所需資訊(3)、與 HTML 範本結合取得的資料(4)，最後送回一個包含已產生 HTML 的回應(5,6)。

## 伺服端與用戶端程式設計是相同的嗎？

讓我們把注意力集中在伺服端與用戶端的程式設計吧！在以下的每個案例中，程式碼完全不一樣：

- 他們有不同的目的與考量。
- 一般而言，他們不使用相同的程式語言（除了 JavaScript 可以使用在伺服端與用戶端以外）。
- 他們在不同的作業系統環境下執行。

執行在瀏覽器的程式碼被稱為**用戶端程式碼**（**client-side code**），它主要用來改善一個渲染的網頁外觀與行為。這包含選取與設定 UI 元件樣式、建立佈局、導覽、表格驗證等。相對的，伺服端網站程式設計大量涉及要回傳*哪些內容*給瀏覽器做為對請求的回應。伺服端程式碼處理驗證已提交的資料與請求、使用資料庫儲存及取得資料，和按需求發送正確的資料給用戶等任務。

用戶端程式碼以[HTML](/zh-TW/docs/Learn/HTML)、[CSS](/zh-TW/docs/Learn/CSS)與[JavaScript](/zh-TW/docs/Learn/JavaScript)撰寫 — 它執行在網頁瀏覽器內，並且僅有或無訪問底層的作業系統（包含對檔案系統的有限存取）。

網頁開發者不能控制使用者可能使用何種瀏覽器來檢視一個網站 — 瀏覽器與用戶端程式有著不同層度的相容性，並且用戶端程式的挑戰之一是如何妥善地處理瀏覽器支援的差異。

伺服端程式碼可以為任何程式語言 — 例如有名的伺服端網頁語言包括 PHP、Python、Ruby、C#與 NodeJS(JavaScript)。該伺服端程式碼擁有完整的作業系統存取權限，而且開發者能夠選擇他們想要的程式語言（以及特定版本）。

開發者們通常使用**網頁框架**（**web frameworks**）撰寫程式碼。網頁框架為功能函式、物件、規則與其他程式碼的集合，旨在解決常見問題、加速開發並簡化在特定域中面臨到的不同類型的任務。

再者，儘管用戶端與伺服端程式碼都使用框架，但會因為非常不同的域，而使得框架也不同。用戶端網頁框架簡化佈局與呈現的任務，而伺服端網頁框架則提供大量＂通用＂的網頁伺服器功能，否則你可能必須要自己實現（例如：對 sessions 的支援、對使用者認證的支援、簡易資料庫存取、樣板庫等）。

> **備註：** Client-side frameworks are often used to help speed up development of client-side code, but you can also choose to write all the code by hand; in fact, writing your code by hand can be quicker and more efficient if you only need a small, simple web site UI.
>
> In contrast, you would almost never consider writing the server-side component of a web app without a framework — implementing a vital feature like an HTTP server is really hard to do from scratch in say Python, but Python web frameworks like Django provide one out of the box, along with other very useful tools.

## 在伺服端，你能做什麼？

伺服端程式設計是非常有用的，因為它讓我們有效地遞送替單個使用者量身訂做的資訊，從而創造更棒的使用者體驗。

如 Amazon 這樣的公司使用伺服端程式設計來建構產品搜尋結果、根據顧客偏好與過往購物習慣提供針對性的產品建議、簡化購物過程等。

銀行使用伺服端程式設計來儲存帳號資訊，並讓已授權用戶檢視與進行交易。其他服務如 Facebook、Twitter、Instagram 與 Wikipedia 使用伺服端程式設計來突顯、分享與控制使用者存取到感興趣的內容。

一些常見的伺服端程式設計使用案例與效益列舉如下。您將會注意到這當中會有些重疊的部分！

### 高效率資訊儲存與遞送

想像一下，在 Amazon 可以找到多少產品，或者說在 Facebook 上有多少文章？對各個產品或文章建立各別的靜態網頁完全是不切實際的。

伺服端程式設計反而是可以讓我們將資訊儲存至資料庫，並且動態建構及回傳 HTML 與其他型態的檔案（例如：PDF、圖片等）。它也可以藉由合適的用戶端網頁框架（利用這個方式可以降低在伺服器的處理負擔，亦減少需要被送出的大量資料）僅回傳資料（{{glossary("JSON")}}、{{glossary("XML")}}等）來進行畫面渲染。

伺服器並不侷限於從資料庫發送資訊，還可以回傳軟體工具的結果或是來自通訊服務的資料。這些內容甚至可以針對到收到它的用戶裝置類型。

由於資訊存在於資料庫中，它可以輕易地與其他商業系統進行分享與更新（例如：當產品在線上或在店家中售完，店家可能會更新該產品的庫存資料庫）。

> **備註：** Your imagination doesn't have to work hard to see the benefit of server-side code for efficient storage and delivery of information:
>
> 1. Go to [Amazon](https://www.amazon.com) or some other e-commerce site.
> 2. Search for a number of keywords and note how the page structure doesn't change, even though the results do.
> 3. Open two or three different products. Note again how they have a common structure and layout, but the content for different products has been pulled from the database.
>
> For a common search term ("fish", say) you can see literally millions of returned values. Using a database allows these to be stored and shared efficiently, and it allows the presentation of the information to be controlled in just one place.

### 客製化的使用者體驗

伺服器能保存及使用關於用戶的資訊，來提供一個方便且量身訂做的使用者體驗。例如，許多網站儲存信用卡資料讓這些資料無須再重新輸入。網站如 Google Maps 能使用已儲存或目前位置來提供導航資訊與搜尋或旅行歷史紀錄，以便於搜尋結果中突顯在地店家。

一個使用者習慣更深層的分析，可以使用在預測他的興趣以及更進一步客製回應與提醒，例如在地圖中提供你可能想去看得過去遊歷過的或是熱門的地點列表。

> **備註：** [Google Maps](https://maps.google.com/) saves your search and visit history. Frequently visited or frequently searched locations are highlighted more than others.
>
> Google search results are optimized based on previous searches.
>
> 1. Go to [Google search](https://www.google.com/).
> 2. Search for "football".
> 3. Now try typing "favourite" in the search box and observe the autocomplete search predictions.
>
> Coincidence? Nada!

### 控制內容存取

伺服器端程式設計允許網站限制僅能由已授權的使用者存取，並提供資訊給那些只被允許觀看的使用者。

真實世界案例包括：

- 社交網路如 Facebook 允許使用者全權控制他們自己的資料，但是只有允許他們的朋友檢視或評論資料。該使用者決定誰能看到他們的資料，並推廣到他們的動態中會呈現誰的資料 — 授權是使用者體驗的核心部分！
- 你正所在的網站控制內容的存取：文章可被任何人看見，但是只有使用者登入才能編輯該內容。若要試試看，點擊本頁面上方的**編輯**按鈕 — 如果你已登入，你將會顯示編輯視窗；如果你沒有登入，你將會被導到註冊頁面。

> **備註：** Consider other real examples where access to content is controlled. For example, what can you see if you go to the online site for your bank? Log in to your account — what additional information can you see and modify? What information can you see that only the bank can change?

### 儲存 session/state 資訊

伺服器端程式設計允許開發者利用**sessions** — 基本上，就是一個機制讓伺服器儲存目前的使用者資訊，並且基於這些資訊發送不同的回應。

例如，這允許網站了解一個使用者先前已登入過，以及將訂購歷史紀錄在他們的電子郵件中顯示連結，或者也許會儲存一個基本的遊戲狀態，讓使用者能再次回到網站的同時，拿回他們留在網站的資訊。

> **備註：** Visit a newspaper site that has a subscription model and open a bunch of tabs (e.g. [The Age](http://www.theage.com.au/)). Continue to visit the site over a few hours/days. Eventually, you will start to be redirected to pages explaining how to subscribe, and you will be unable to access articles. This information is an example of session information stored in cookies.

### 提醒與溝通

伺服器能透過網站本身或經由電子郵件、SMS、即時通訊、影像或其他通訊服務，發送提醒訊息給一般或特定使用者。

一些範例包括：

- Facebook 與 Twitter 發送電子郵件與 SMS 訊息等新的通訊來提醒你。
- Amazon 定期發送產品電子郵件來提供相近於曾經已購買或你可能有興趣瀏覽的產品。
- 一個網頁伺服器可能會發送警告訊息給網站管理員，以警示伺服器的記憶體過低或有嫌疑的使用者型為。

> **備註：** The most common type of notification is a "confirmation of registration". Pick almost any large site that you are interested in (Google, Amazon, Instagram, etc.) and create a new account using your email address. You will shortly receive an email confirming your registration, or requiring acknowledgment to activate your account.

### 資料分析

一個網站可能會收集很多包括使用者的資料：他們所搜尋的、他們所買的、他們所推薦的、他們在每個網頁停留的時間。伺服器端程式設計能根據資料分析以完善回應。

例如，Amazon 與 Google 都根據過往搜尋（與購買）紀錄來廣告產品。

> **備註：** If you're a Facebook user, go to your main feed and look at the stream of posts. Note how some of the posts are out of numerical order - in particular, posts with more "likes" are often higher on the list than more recent posts.
>
> Also look at what kind of ads you are being shown — you might see ads for things you looked at on other sites. Facebook's algorithm for highlighting content and advertising can be a bit of a mystery, but it is clear that it does depend on your likes and viewing habits!

## 總結

恭喜，你已經到達關於伺服器端程式設計的第一篇文章的結尾。

現在你已經學到伺服器端程式碼運作於網頁伺服器，他的主要任務是控制*哪些*資訊要發送給使用者（而用戶端程式碼主要掌握資料的結構與呈現給使用者）。

你也應該了解這是很有用的，當你身為伺服器端開發者時，因為它允許我們創建*有效*散播客製訊息與有些你可能會去做的好點子給單個使用者的網站。

最後，你應該了解伺服器端程式碼可以用很多種程式語言來撰寫，以及你應該使用網頁框架來讓整個程序變得更簡便。

在未來的文章，我們將協助你選擇最佳的網頁框架，做為你的第一個網站；接著，我們將帶你更詳細了解主要的用戶端-伺服端的互動。

{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}
