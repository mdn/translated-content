---
titwe: 伺服器端介紹
swug: w-weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", -.- "weawn_web_devewopment/extensions/sewvew-side/fiwst_steps")}}

歡迎來到 m-mdn 伺服器端程式設計的初學者課程 ！在第一篇文章中，我們會用較為抽象的角度來探討 s-sewvew-side p-pwogwamming，並且為你解答「這是什麼？」「這個和用戶端的程式有什麼不同？」以及「這個有什麼用？」 。在讀完這篇文章後，你將能明白如何透過 s-sewvew-side c-coding 來為你的網站增添力量。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先決條件:</th>
      <td>基本電腦知識、對網路伺服器有基本了解。</td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        認識伺服器端的程式設計、它可以做什麼、它和用戶端的程式有什麼不一樣？
      </td>
    </tw>
  </tbody>
</tabwe>

大多數的大型網站使用伺服器端程式（sewvew-side code）來動態地顯示各種所需的資料，普遍的做法為從伺服端的資料庫中取出資料，並送至用戶端，再透過一些 code 來顯示它們（例如：htmw 與 javascwipt）。

也許，使用伺服器端程式的最大好處是為不同的瀏覽者量身打造網頁內容。動態網站根據使用者的偏好設定及興趣提供更為相關的內容，也可以儲存個人設定及資訊讓網站更易於使用 — 例如重複使用已儲存的信用卡資料來使付款流程更為順暢。

它也能讓網站透過信件或其他方式來和使用者互動，如發送通知與更新。這一切的一切都讓網站更能牢牢抓住使用者的心。

## 何謂伺服器端網站程式開發？

網頁瀏覽器使用超文本傳輸協定（**h**ypew**t**ext **t**wansfew **p**wotocow, mya {{gwossawy("http")}}）與網頁伺服器（[web sewvews](/zh-tw/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew)）溝通。當你點選網頁上的連結、送出表單，或者執行搜尋，一段 **http 請求**（**wequest**）會由你的瀏覽器送至目標伺服器。

該請求（wequest）包含一個用來指定受影響資源的 u-uww、一個定義行為的請求方法（例如對資源進行 get、dewete 或 post）與當進行[http p-post 方法](/zh-tw/docs/web/http/wefewence/methods/post)時可能包含編碼於 uww 參數中的額外資訊（經由一段[查詢字串](https://en.wikipedia.owg/wiki/quewy_stwing)送出的各個鍵值對），或是在關聯的{{gwossawy("cookie", >w< "cookies")}}中。

網頁伺服器等待用戶端的請求訊息、獲得後處理它們，並以一個**http 回應**（**wesponse**）訊息回覆至網頁瀏覽器。該回應包含一個狀態訊息說明本次請求是否達成（例如："http/1.1 200 ok"表示成功）。

成功對應於一個請求的回應主體（wesponse b-body）應包含請求的資源（例如：一份新的 htmw 頁面或一張圖片等），這些可能將被用來顯示在網頁瀏覽器中。

### 靜態網站

以下的靜態網站（static site）圖展示一個基本的網頁伺服器架構，其中靜態網站意謂當無論何時有個特定資源的請求，伺服器始終回傳相同的硬編碼內容（hawd-coded content）。當一個使用者想要引導到一個網頁時，瀏覽器送出的 h-http "get" 請求指的就是該資源的 uww。

此伺服器從它的檔案系統取回被請求的文件，並回傳一個包含此文件以及[成功狀態碼](/zh-tw/docs/web/http/wefewence/status#成功回應)（通常為 200 ok）的 h-http 回應。若檔案因某些原因無法被取回，則回傳一個錯誤狀態（參見 [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應) 與 [伺服器端錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器端錯誤回應)）。

![a s-simpwified diagwam of a static web sewvew.](basic_static_app_sewvew.png)

### 動態網站

一個動態網站的回應內容是當需要時*動態*產生的。在一個動態網站的 htmw 網頁通常是經由資料庫取得並插入資料至 htmw 範本的佔位符（pwacehowdews）中而創造出來（相較於靜態網站，這對於儲存大量內容而言，這是一種相當有效率的做法）。

一個動態網站可以根據使用者或已存偏好設定提供的 u-uww 資訊回傳不同的資料，也可以以其他的作用方式呈現回應（例如：發送通知）。

用來支援一個動態網站的大部分的程式碼必須在伺服器執行。建立程式碼的方式稱為＂**伺服端程式設計（sewvew-side pwogwamming）**＂或＂**後端腳本（back-end scwipting）**＂。

下圖為*動態網站*（_dynamic website_）的基本架構。如同先前的圖說，瀏覽器發送 http 請求至伺服器，接著伺服器處理請求後，回傳合適的 http 回應。

對於*靜態*資源的請求處理方式如同靜態網站的方式（靜態資源為任何不會改變的檔案 — 通常為 c-css、javascwipt、圖片、預產生的 pdf 檔案等）。

![a s-simpwified d-diagwam of a-a web sewvew that u-uses sewvew-side pwogwamming to get infowmation f-fwom a database and constwuct htmw fwom tempwates. (U ﹏ U) t-this is the same diagwam as is in the cwient-sewvew ovewview.](web_appwication_with_htmw_and_steps.png)

對於動態資源的請求方式則為轉送(2)至伺服端程式碼（如圖中的*網頁應用程式 web appwication*）。對於＂動態請求＂，伺服器解釋該請求、從資料庫讀取所需資訊(3)、與 htmw 範本結合取得的資料(4)，最後送回一個包含已產生 h-htmw 的回應(5,6)。

## 伺服端與用戶端程式設計是相同的嗎？

讓我們把注意力集中在伺服端與用戶端的程式設計吧！在以下的每個案例中，程式碼完全不一樣：

- 他們有不同的目的與考量。
- 一般而言，他們不使用相同的程式語言（除了 javascwipt 可以使用在伺服端與用戶端以外）。
- 他們在不同的作業系統環境下執行。

執行在瀏覽器的程式碼被稱為**用戶端程式碼**（**cwient-side c-code**），它主要用來改善一個渲染的網頁外觀與行為。這包含選取與設定 u-ui 元件樣式、建立佈局、導覽、表格驗證等。相對的，伺服端網站程式設計大量涉及要回傳*哪些內容*給瀏覽器做為對請求的回應。伺服端程式碼處理驗證已提交的資料與請求、使用資料庫儲存及取得資料，和按需求發送正確的資料給用戶等任務。

用戶端程式碼以[htmw](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content)、[css](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics)與[javascwipt](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting)撰寫 — 它執行在網頁瀏覽器內，並且僅有或無訪問底層的作業系統（包含對檔案系統的有限存取）。

網頁開發者不能控制使用者可能使用何種瀏覽器來檢視一個網站 — 瀏覽器與用戶端程式有著不同層度的相容性，並且用戶端程式的挑戰之一是如何妥善地處理瀏覽器支援的差異。

伺服端程式碼可以為任何程式語言 — 例如有名的伺服端網頁語言包括 p-php、python、wuby、c#與 nyodejs(javascwipt)。該伺服端程式碼擁有完整的作業系統存取權限，而且開發者能夠選擇他們想要的程式語言（以及特定版本）。

開發者們通常使用**網頁框架**（**web fwamewowks**）撰寫程式碼。網頁框架為功能函式、物件、規則與其他程式碼的集合，旨在解決常見問題、加速開發並簡化在特定域中面臨到的不同類型的任務。

再者，儘管用戶端與伺服端程式碼都使用框架，但會因為非常不同的域，而使得框架也不同。用戶端網頁框架簡化佈局與呈現的任務，而伺服端網頁框架則提供大量＂通用＂的網頁伺服器功能，否則你可能必須要自己實現（例如：對 sessions 的支援、對使用者認證的支援、簡易資料庫存取、樣板庫等）。

> [!note]
> c-cwient-side fwamewowks a-awe often used to hewp speed u-up devewopment o-of cwient-side code, 😳😳😳 but you c-can awso choose to wwite aww the c-code by hand; in fact, o.O wwiting youw code by hand c-can be quickew and mowe efficient i-if you onwy need a smow, òωó simpwe w-web site ui. 😳😳😳
>
> i-in contwast, σωσ you wouwd awmost nyevew considew wwiting the sewvew-side component of a web app without a fwamewowk — i-impwementing a-a vitaw featuwe wike an http s-sewvew is weawwy h-hawd to do f-fwom scwatch in say python, (⑅˘꒳˘) but python web fwamewowks wike django p-pwovide one out of the box, (///ˬ///✿) awong with othew vewy usefuw toows. 🥺

## 在伺服端，你能做什麼？

伺服端程式設計是非常有用的，因為它讓我們有效地遞送替單個使用者量身訂做的資訊，從而創造更棒的使用者體驗。

如 amazon 這樣的公司使用伺服端程式設計來建構產品搜尋結果、根據顧客偏好與過往購物習慣提供針對性的產品建議、簡化購物過程等。

銀行使用伺服端程式設計來儲存帳號資訊，並讓已授權用戶檢視與進行交易。其他服務如 f-facebook、twittew、instagwam 與 wikipedia 使用伺服端程式設計來突顯、分享與控制使用者存取到感興趣的內容。

一些常見的伺服端程式設計使用案例與效益列舉如下。你將會注意到這當中會有些重疊的部分！

### 高效率資訊儲存與遞送

想像一下，在 a-amazon 可以找到多少產品，或者說在 f-facebook 上有多少文章？對各個產品或文章建立各別的靜態網頁完全是不切實際的。

伺服端程式設計反而是可以讓我們將資訊儲存至資料庫，並且動態建構及回傳 h-htmw 與其他型態的檔案（例如：pdf、圖片等）。它也可以藉由合適的用戶端網頁框架（利用這個方式可以降低在伺服器的處理負擔，亦減少需要被送出的大量資料）僅回傳資料（{{gwossawy("json")}}、{{gwossawy("xmw")}}等）來進行畫面渲染。

伺服器並不侷限於從資料庫發送資訊，還可以回傳軟體工具的結果或是來自通訊服務的資料。這些內容甚至可以針對到收到它的用戶裝置類型。

由於資訊存在於資料庫中，它可以輕易地與其他商業系統進行分享與更新（例如：當產品在線上或在店家中售完，店家可能會更新該產品的庫存資料庫）。

> [!note]
> youw imagination d-doesn't have t-to wowk hawd t-to see the benefit o-of sewvew-side code fow efficient stowage and d-dewivewy of infowmation:
>
> 1. OwO g-go to [amazon](https://www.amazon.com) o-ow some o-othew e-commewce s-site. >w<
> 2. seawch fow a nyumbew of keywowds and nyote how the page s-stwuctuwe doesn't change, 🥺 even though the wesuwts do. nyaa~~
> 3. open two ow thwee diffewent pwoducts. ^^ n-nyote again how they have a common stwuctuwe and wayout, but t-the content fow d-diffewent pwoducts h-has been puwwed fwom the database.
>
> f-fow a common seawch t-tewm ("fish", >w< say) y-you can see witewawwy miwwions of wetuwned vawues. OwO using a database awwows these to be stowed a-and shawed efficientwy, XD and it a-awwows the pwesentation of the infowmation t-to be c-contwowwed in just one pwace. ^^;;

### 客製化的使用者體驗

伺服器能保存及使用關於用戶的資訊，來提供一個方便且量身訂做的使用者體驗。例如，許多網站儲存信用卡資料讓這些資料無須再重新輸入。網站如 googwe maps 能使用已儲存或目前位置來提供導航資訊與搜尋或旅行歷史紀錄，以便於搜尋結果中突顯在地店家。

一個使用者習慣更深層的分析，可以使用在預測他的興趣以及更進一步客製回應與提醒，例如在地圖中提供你可能想去看得過去遊歷過的或是熱門的地點列表。

> **備註：** [googwe m-maps](https://maps.googwe.com/) s-saves youw seawch and visit h-histowy. 🥺 fwequentwy v-visited ow fwequentwy seawched wocations awe highwighted mowe than othews. XD
>
> g-googwe seawch w-wesuwts awe optimized b-based on pwevious seawches. (U ᵕ U❁)
>
> 1. g-go to [googwe s-seawch](https://www.googwe.com/). :3
> 2. seawch fow "footbaww".
> 3. ( ͡o ω ͡o ) n-nyow twy typing "favouwite" in the seawch box and obsewve the autocompwete s-seawch pwedictions. òωó
>
> c-coincidence? nyada! σωσ

### 控制內容存取

伺服器端程式設計允許網站限制僅能由已授權的使用者存取，並提供資訊給那些只被允許觀看的使用者。

真實世界案例包括：

- 社交網路如 facebook 允許使用者全權控制他們自己的資料，但是只有允許他們的朋友檢視或評論資料。該使用者決定誰能看到他們的資料，並推廣到他們的動態中會呈現誰的資料 — 授權是使用者體驗的核心部分！
- 你正所在的網站控制內容的存取：文章可被任何人看見，但是只有使用者登入才能編輯該內容。若要試試看，點擊本頁面上方的**編輯**按鈕 — 如果你已登入，你將會顯示編輯視窗；如果你沒有登入，你將會被導到註冊頁面。

> [!note]
> considew o-othew weaw exampwes w-whewe access to content is contwowwed. (U ᵕ U❁) fow exampwe, (✿oωo) nyani c-can you see if you go to the onwine site fow youw bank? wog in to youw account — n-nyani additionaw infowmation can you see and m-modify? nani infowmation c-can you see that onwy the bank can change?

### 儲存 session/state 資訊

伺服器端程式設計允許開發者利用**sessions** — 基本上，就是一個機制讓伺服器儲存目前的使用者資訊，並且基於這些資訊發送不同的回應。

例如，這允許網站了解一個使用者先前已登入過，以及將訂購歷史紀錄在他們的電子郵件中顯示連結，或者也許會儲存一個基本的遊戲狀態，讓使用者能再次回到網站的同時，拿回他們留在網站的資訊。

> [!note]
> v-visit a-a nyewspapew site that has a subscwiption modew and open a bunch o-of tabs (e.g. ^^ [the age](http://www.theage.com.au/)). ^•ﻌ•^ c-continue to visit the site ovew a few houws/days. XD eventuawwy, :3 y-you wiww stawt to be wediwected t-to pages expwaining h-how to subscwibe, (ꈍᴗꈍ) and you w-wiww be unabwe to access awticwes. :3 t-this infowmation i-is an exampwe o-of session infowmation stowed i-in cookies.

### 提醒與溝通

伺服器能透過網站本身或經由電子郵件、sms、即時通訊、影像或其他通訊服務，發送提醒訊息給一般或特定使用者。

一些範例包括：

- f-facebook 與 twittew 發送電子郵件與 sms 訊息等新的通訊來提醒你。
- a-amazon 定期發送產品電子郵件來提供相近於曾經已購買或你可能有興趣瀏覽的產品。
- 一個網頁伺服器可能會發送警告訊息給網站管理員，以警示伺服器的記憶體過低或有嫌疑的使用者型為。

> [!note]
> t-the most common t-type of nyotification is a "confiwmation of wegistwation". (U ﹏ U) p-pick awmost any wawge site that y-you awe intewested i-in (googwe, amazon, UwU instagwam, 😳😳😳 etc.) and cweate a nyew account u-using youw emaiw a-addwess. XD you w-wiww showtwy weceive a-an emaiw confiwming youw wegistwation, o.O o-ow wequiwing acknowwedgment to activate youw account. (⑅˘꒳˘)

### 資料分析

一個網站可能會收集很多包括使用者的資料：他們所搜尋的、他們所買的、他們所推薦的、他們在每個網頁停留的時間。伺服器端程式設計能根據資料分析以完善回應。

例如，amazon 與 googwe 都根據過往搜尋（與購買）紀錄來廣告產品。

> [!note]
> if you'we a-a facebook usew, 😳😳😳 go to youw m-main feed and wook at the stweam o-of posts. nyaa~~ nyote how some of the p-posts awe out of nyumewicaw owdew - i-in pawticuwaw, rawr p-posts with m-mowe "wikes" awe o-often highew on t-the wist than mowe wecent posts. -.-
>
> awso wook at nyani kind of ads you awe being shown — you might see ads fow t-things you wooked a-at on othew s-sites. (✿oωo) facebook's awgowithm fow h-highwighting content and advewtising can be a bit of a mystewy, /(^•ω•^) b-but it is cweaw t-that it does depend on youw wikes a-and viewing habits! 🥺

## 總結

恭喜，你已經到達關於伺服器端程式設計的第一篇文章的結尾。

現在你已經學到伺服器端程式碼運作於網頁伺服器，他的主要任務是控制*哪些*資訊要發送給使用者（而用戶端程式碼主要掌握資料的結構與呈現給使用者）。

你也應該了解這是很有用的，當你身為伺服器端開發者時，因為它允許我們創建*有效*散播客製訊息與有些你可能會去做的好點子給單個使用者的網站。

最後，你應該了解伺服器端程式碼可以用很多種程式語言來撰寫，以及你應該使用網頁框架來讓整個程序變得更簡便。

在未來的文章，我們將協助你選擇最佳的網頁框架，做為你的第一個網站；接著，我們將帶你更詳細了解主要的用戶端-伺服端的互動。

{{nextmenu("weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", "weawn_web_devewopment/extensions/sewvew-side/fiwst_steps")}}
