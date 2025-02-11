---
title: 何謂網路伺服器？
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
original_slug: Learn/Common_questions/Web_mechanics/What_is_a_web_server
---

{{QuicklinksWithSubPages("Learn_web_development/Howto")}}

本文章將講解網路伺服器是什麼、如何運作、還有他們的重要性。

<table>
  <tbody>
    <tr>
      <th scope="row">要求：</th>
      <td>
        你要知道
        <a href="/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >Internet 是怎麼運作的</a
        >、並<a href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >知道網頁、網站、網路伺服器的不同</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>你將知道網路伺服器是什麼、並大致了解它的運作原理。</td>
    </tr>
  </tbody>
</table>

## 概要

「網路伺服器」（web server）可以指軟體、也可以指硬體、還可以指它們共同運作的狀態。

1. 以硬體來說，web server 是存放網路伺服器軟體、還有網站檔案（如 HTML 文件、圖片、CSS 樣式表、JavaScript 檔案）的電腦。它會連上網際網路（Internet）並能和其他連上網的設備做物理數據交換。
2. 以軟體來說，web server 包含了一連串控制網路用戶如何訪問託管檔案 ── 至少有 HTTP 伺服器 ── 的檔案。HTTP 伺服器是其中一個部份，它理解 {{Glossary("URL","URLs")}}（網路地址）與 {{Glossary("HTTP")}}（瀏覽器用來觀察網頁的協議）。它能透過域名（domain name）訪問託管的網站（如 `mozilla.org`）、並將其內容遞送到終端用戶（end-user）的設備上。

以最基本的層面來說，如果瀏覽器需要網路伺服器所託管的檔案，它就需要透過 HTTP 發送對該檔案的請求。如果請求已經傳送到正確的（硬體）網路伺服器，那 HTTP（軟體）伺服器就會接受請求、找出所請求的文件（假若不是接著回傳 [404](/zh-TW/docs/Web/HTTP/Status/404) 頁面）、再透過 HTTP 回傳給瀏覽器。

![Basic representation of a client/server connection through HTTP](web-server.svg)

要發布網站，你需要一個靜態或動態的網路伺服器。

**靜態網路伺服器**（static web server）、或是 stack，由（硬體的）電腦和（軟體的） HTTP 伺服器組成。之所以稱為「靜態」是因為伺服器只會給你的瀏覽器，傳送「事先寫好的」（as-is）檔案。

**動態網路伺服器**（dynamic web server）除了靜態網路伺服器以外、還附加了一些軟體：通常是應用伺服器（application server）與資料庫（database）之所以稱為「動態」是因為：應用伺服器會在託管檔案，透過 HTTP 伺服器傳送到瀏覽器之前更新之。

例如說，要生成瀏覽器看到的最終網頁，應用伺服器會使用從資料庫讀取資料的 HTML 模板（HTML template）填補之。像 MDN 或維基百科（Wikipedia）這樣的網站也有上千個網頁：但它們全都不是「真的」HTML 文件，而是少數的 HTML 模板、還有龐大的資料庫。如此一來，要維護並傳送資料、都會變得很容易。

## 主動學習

_目前還沒有好用的內容。[請考慮貢獻一下](/zh-TW/docs/MDN/Community/Getting_started)。_

## 深入一點……

如同我們講過的：要取得網頁，瀏覽器會向伺服器發送一個在伺服器內，尋找某個檔案的請求。如果伺服器找到了檔案，就會讀取它、按需求處理、並回傳檔案。讓我們逐步檢視它們。

### 託管檔案

首先，網路伺服器要儲存網站檔案，也就是所有 HTML 文件、和附屬的 asset：asset 包含了圖片、CSS 樣式表、JavaScript 檔案、字型檔、還有影片。

技術上來說，你可以把它們都放在自己的電腦裡面，但放在網路伺服器上面會方便許多，理由是伺服器：

- 永遠開機並運轉
- 永遠連上網際網路
- 永遠都有相同的 IP 地址（不是所有{{Glossary("ISP", "網際網路提供者")}}都給家庭用戶提供固定的 IP 地址）
- 由第三方提供者維護

因此，找到優秀的託管提供者，是建立網站的重點之一。好好探索各大公司提供的服務、並選擇一個符合需求、預算也能負擔的方案（服務的價格從免費到上千美元都有）。你可以[在這篇文章](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting)找到更多資訊。

一旦找到適合的網絡託管解決方案，你只要[把文件上傳到網路伺服器](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)就行了。

### 透過 HTTP 溝通

接下來，網路伺服器會支援 {{Glossary("HTTP")}}（**H**yper**t**ext **T**ransfer **P**rotocol，超文本傳輸協議）。顧名思義，HTTP 會指定兩台電腦之間，該如何傳送超文本（例如 linked web document）。

協議（{{Glossary("Protocol")}}）是一套兩台電腦間該如何溝通的規則。HTTP 是文本性、無狀態的協議。

- 文本性（Textual）
  - : 所有指令都是純文字、人類也容易理解。
- 無狀態（Stateless）
  - : 無論伺服器還是瀏覽器，都不會記得他們上一次的溝通。像是伺服器，如果只依賴 HTTP 的話，它就不會記得你輸入的帳號密碼、或是在交易中採取了哪些步驟。要完成這樣的任務，你需要應用伺服器（我們將在其他文章中介紹這種技術）。

HTTP 提供了用戶端與伺服器端，該如何溝通的明確規則。我們將在之後的[技術文章](/zh-TW/docs/Web/HTTP)內講解 HTTP 本身。目前，我們會先聚焦在：

- 只有用戶端能發出 HTTP 請求，也只有伺服器能接受它。相對地，也只有伺服器能回應用戶端的 HTTP 請求。
- 如果透過 HTTP 請求檔案，用戶端必須提供檔案的 {{Glossary("URL")}}。
- 網路伺服器**必須回應**所有的 HTTP 請求，最起碼需要回應錯誤訊息。

[![MDN 404 錯誤頁面範例](mdn-404.jpg)](/zh-TW/docs/Web/HTTP/Status/404) 在網路伺服器裡面，HTTP 伺服器負責處理和回答傳入的請求。

1. HTTP 伺服器接收請求後，會先檢查請求的 URL 是否匹配現有文件。
2. 如果匹配，網路伺服器會把檔案內容回傳給瀏覽器。不然，應用伺服器會建立需要的檔案。
3. 如果都沒有用的話，網路伺服器會回傳錯誤訊息給瀏覽器，最常見的就是「404 Not Found」。（這個錯誤很常見，所以許多網頁設計師花了相當多的心力設計 404 錯誤頁面。）

### 靜態與動態內容

大略上來說，伺服器能儲存動態與靜態的內容。「靜態」是指「提供事先寫好的」。靜態網站設定上最簡單，所以我們建議選擇靜態內容，作為你的第一個網站。

「動態」指的是伺服器處理內容、甚至從資料庫即時產生。這個解決方案提供了更多靈活性，但技術會變得難以駕馭、令網站明顯複雜許多。

以你目前閱讀的頁面為例。在託管的伺服器裡面，有個應用伺服器會從資料庫取得內容、規範化、再把它塞進某些 HTML 模板裡面。這裡的應用伺服器，是以 Python 語言的 Django 框架為基礎，所組建的 [Kuma](https://github.com/mdn/yari/tree/main/docs/what-yari-does.md)。Mozilla 團隊基於 MDN 的特殊需求開發了 Kuma，不過也有很多相似、但使用其他技術的應用程式。

從海量的應用伺服器裡面選一個推薦，是個大難題。有些應用程式會迎合特定的類別，如部落格、百科、電子商務。其他還有更通用的 {{Glossary("CMS")}}（content management systems，內容管理系統）。如果要建立動態網站，花點時間找個符合需求的工具。除非想學習伺服器端程式設計（也是個扣人心弦的領域！），否則不用建立屬於自己的應用伺服器。那樣只是在[重造輪子](https://zh.wikipedia.org/wiki/重造輪子)。

## 下一步

熟悉了伺服器以後可以：

- 讀讀[how much it costs to do something on the web](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- 了解[various software you need to create a website](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- 移駕到[how to upload files on a web server](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)之類的實戰。
