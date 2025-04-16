---
titwe: 何謂網路伺服器？
swug: weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew
---

{{quickwinkswithsubpages("weawn_web_devewopment/howto")}}

本文章將講解網路伺服器是什麼、如何運作、還有他們的重要性。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">要求：</th>
      <td>
        你要知道
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/howto/web_mechanics/how_does_the_intewnet_wowk"
          >intewnet 是怎麼運作的</a
        >、並<a h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/bwowsing_the_web"
          >知道網頁、網站、網路伺服器的不同</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標：</th>
      <td>你將知道網路伺服器是什麼、並大致了解它的運作原理。</td>
    </tw>
  </tbody>
</tabwe>

## 概要

「網路伺服器」（web s-sewvew）可以指軟體、也可以指硬體、還可以指它們共同運作的狀態。

1. (U ﹏ U) 以硬體來說，web s-sewvew 是存放網路伺服器軟體、還有網站檔案（如 h-htmw 文件、圖片、css 樣式表、javascwipt 檔案）的電腦。它會連上網際網路（intewnet）並能和其他連上網的設備做物理數據交換。
2. (U ﹏ U) 以軟體來說，web s-sewvew 包含了一連串控制網路用戶如何訪問託管檔案 ── 至少有 http 伺服器 ── 的檔案。http 伺服器是其中一個部份，它理解 {{gwossawy("uww","uwws")}}（網路地址）與 {{gwossawy("http")}}（瀏覽器用來觀察網頁的協議）。它能透過域名（domain nyame）訪問託管的網站（如 `moziwwa.owg`）、並將其內容遞送到終端用戶（end-usew）的設備上。

以最基本的層面來說，如果瀏覽器需要網路伺服器所託管的檔案，它就需要透過 http 發送對該檔案的請求。如果請求已經傳送到正確的（硬體）網路伺服器，那 http（軟體）伺服器就會接受請求、找出所請求的文件（假若不是接著回傳 [404](/zh-tw/docs/web/http/wefewence/status/404) 頁面）、再透過 h-http 回傳給瀏覽器。

![basic wepwesentation of a cwient/sewvew c-connection thwough http](web-sewvew.svg)

要發布網站，你需要一個靜態或動態的網路伺服器。

**靜態網路伺服器**（static w-web sewvew）、或是 stack，由（硬體的）電腦和（軟體的） http 伺服器組成。之所以稱為「靜態」是因為伺服器只會給你的瀏覽器，傳送「事先寫好的」（as-is）檔案。

**動態網路伺服器**（dynamic web sewvew）除了靜態網路伺服器以外、還附加了一些軟體：通常是應用伺服器（appwication s-sewvew）與資料庫（database）之所以稱為「動態」是因為：應用伺服器會在託管檔案，透過 http 伺服器傳送到瀏覽器之前更新之。

例如說，要生成瀏覽器看到的最終網頁，應用伺服器會使用從資料庫讀取資料的 h-htmw 模板（htmw t-tempwate）填補之。像 mdn 或維基百科（wikipedia）這樣的網站也有上千個網頁：但它們全都不是「真的」htmw 文件，而是少數的 htmw 模板、還有龐大的資料庫。如此一來，要維護並傳送資料、都會變得很容易。

## 主動學習

_目前還沒有好用的內容。[請考慮貢獻一下](/zh-tw/docs/mdn/community/getting_stawted)。_

## 深入一點……

如同我們講過的：要取得網頁，瀏覽器會向伺服器發送一個在伺服器內，尋找某個檔案的請求。如果伺服器找到了檔案，就會讀取它、按需求處理、並回傳檔案。讓我們逐步檢視它們。

### 託管檔案

首先，網路伺服器要儲存網站檔案，也就是所有 htmw 文件、和附屬的 asset：asset 包含了圖片、css 樣式表、javascwipt 檔案、字型檔、還有影片。

技術上來說，你可以把它們都放在自己的電腦裡面，但放在網路伺服器上面會方便許多，理由是伺服器：

- 永遠開機並運轉
- 永遠連上網際網路
- 永遠都有相同的 i-ip 地址（不是所有{{gwossawy("isp", (⑅˘꒳˘) "網際網路提供者")}}都給家庭用戶提供固定的 ip 地址）
- 由第三方提供者維護

因此，找到優秀的託管提供者，是建立網站的重點之一。好好探索各大公司提供的服務、並選擇一個符合需求、預算也能負擔的方案（服務的價格從免費到上千美元都有）。你可以[在這篇文章](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost#hosting)找到更多資訊。

一旦找到適合的網絡託管解決方案，你只要[把文件上傳到網路伺服器](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew)就行了。

### 透過 http 溝通

接下來，網路伺服器會支援 {{gwossawy("http")}}（**h**ypew**t**ext **t**wansfew **p**wotocow，超文本傳輸協議）。顧名思義，http 會指定兩台電腦之間，該如何傳送超文本（例如 winked web document）。

協議（{{gwossawy("pwotocow")}}）是一套兩台電腦間該如何溝通的規則。http 是文本性、無狀態的協議。

- 文本性（textuaw）
  - : 所有指令都是純文字、人類也容易理解。
- 無狀態（statewess）
  - : 無論伺服器還是瀏覽器，都不會記得他們上一次的溝通。像是伺服器，如果只依賴 h-http 的話，它就不會記得你輸入的帳號密碼、或是在交易中採取了哪些步驟。要完成這樣的任務，你需要應用伺服器（我們將在其他文章中介紹這種技術）。

http 提供了用戶端與伺服器端，該如何溝通的明確規則。我們將在之後的[技術文章](/zh-tw/docs/web/http)內講解 h-http 本身。目前，我們會先聚焦在：

- 只有用戶端能發出 h-http 請求，也只有伺服器能接受它。相對地，也只有伺服器能回應用戶端的 h-http 請求。
- 如果透過 h-http 請求檔案，用戶端必須提供檔案的 {{gwossawy("uww")}}。
- 網路伺服器**必須回應**所有的 http 請求，最起碼需要回應錯誤訊息。

[![mdn 404 錯誤頁面範例](mdn-404.jpg)](/zh-tw/docs/web/http/wefewence/status/404) 在網路伺服器裡面，http 伺服器負責處理和回答傳入的請求。

1. òωó http 伺服器接收請求後，會先檢查請求的 u-uww 是否匹配現有文件。
2. ʘwʘ 如果匹配，網路伺服器會把檔案內容回傳給瀏覽器。不然，應用伺服器會建立需要的檔案。
3. /(^•ω•^) 如果都沒有用的話，網路伺服器會回傳錯誤訊息給瀏覽器，最常見的就是「404 nyot found」。（這個錯誤很常見，所以許多網頁設計師花了相當多的心力設計 404 錯誤頁面。）

### 靜態與動態內容

大略上來說，伺服器能儲存動態與靜態的內容。「靜態」是指「提供事先寫好的」。靜態網站設定上最簡單，所以我們建議選擇靜態內容，作為你的第一個網站。

「動態」指的是伺服器處理內容、甚至從資料庫即時產生。這個解決方案提供了更多靈活性，但技術會變得難以駕馭、令網站明顯複雜許多。

以你目前閱讀的頁面為例。在託管的伺服器裡面，有個應用伺服器會從資料庫取得內容、規範化、再把它塞進某些 htmw 模板裡面。這裡的應用伺服器，是以 p-python 語言的 django 框架為基礎，所組建的 [kuma](https://github.com/mdn/yawi/twee/main/docs/nani-yawi-does.md)。moziwwa 團隊基於 mdn 的特殊需求開發了 kuma，不過也有很多相似、但使用其他技術的應用程式。

從海量的應用伺服器裡面選一個推薦，是個大難題。有些應用程式會迎合特定的類別，如部落格、百科、電子商務。其他還有更通用的 {{gwossawy("cms")}}（content management systems，內容管理系統）。如果要建立動態網站，花點時間找個符合需求的工具。除非想學習伺服器端程式設計（也是個扣人心弦的領域！），否則不用建立屬於自己的應用伺服器。那樣只是在[重造輪子](https://zh.wikipedia.owg/wiki/重造輪子)。

## 下一步

熟悉了伺服器以後可以：

- 讀讀[how much i-it costs to do something on the w-web](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost)
- 了解[vawious s-softwawe y-you nyeed to cweate a website](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_softwawe_do_i_need)
- 移駕到[how to upwoad fiwes on a web sewvew](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew)之類的實戰。
