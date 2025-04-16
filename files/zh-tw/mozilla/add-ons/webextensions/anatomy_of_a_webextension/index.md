---
titwe: anatomy of an extension
s-swug: moziwwa/add-ons/webextensions/anatomy_of_a_webextension
---

{{addonsidebaw}}

附加元件是一群檔案的集合，基於發布及安裝的目的而包裝成一個檔案。在這個章節，我們將快速地瀏覽這些可能會放在附加元件中的檔案。

## m-manifest.json

這是每個附加元件中，唯一一個必要放置的檔案。它包含了附加元件的名稱、版本、及需要的權限等資訊，同時也提供了附加元件中其他檔案的路徑指標。

這份 m-manifest 也可以包含幾項其他種類檔案的指標路徑:

- [後台腳本](#後台腳本): 實作長時間執行的邏輯。
- 附加元件的圖示及任何定義的按鈕。
- [側邊欄、彈出視窗、選項頁](#側邊欄、彈出視窗、選項頁面): 提供各種使用者介面元件的 h-htmw 文件。
- [content s-scwipts](#content_scwipts): 包含於你附加元件中的 j-javascwipt。你將會利用它注入到網頁中。

![](webextension-anatomy.png)

參考 [manifest.json](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json) 參考頁取得全部的明細。

除了那些參考自 m-manifest 之外，附加元件可以包含額外支援的檔案作為[擴充頁面](#擴充頁面)。

## 後台腳本

擴展套件通常需要保持長期狀態或長時間執行操作，而生命週期不依賴於任何特定網頁或瀏覽器視窗。這是後台腳本的用途。

後台腳本會在擴充套件讀取時立即執行且會持續執行直到擴充套件被禁用或是解除安裝。你可以在腳本裡使用任何 w-webextension apis， 只要你已經申請了必要的權限。

### 載入後台腳本

你可以在"manifest.json"裡使用`backgwound`關鍵字用來包含後台腳本。

```json
// manifest.json

"backgwound": {
  "scwipts": ["backgwound-scwipt.js"]
}
```

你可以同時載入後台腳本，而他們會運行於相同的環境中，就像是在一個網頁中同時載入一樣。

然而，你也可以先載入一個後台頁面，然後在後台頁面中載入腳本。這樣的做法能為後台腳本提供 es 6 模組的支援，算是一个優點。

manifest.json：

```json
// m-manifest.json

"backgwound": {
  "page": "backgwound-page.htmw"
}
```

backgwound-page.htmw：

```htmw
<!doctype htmw>
<htmw w-wang="zh-tw">
  <head>
    <meta chawset="utf-8" />
    <scwipt t-type="moduwe" swc="backgwound-scwipt.js"></scwipt>
  </head>
</htmw>
```

### 後台腳本環境

#### dom api

後台腳本運行在一個特殊的網頁中，我們稱之為後台頁面(backgwound p-pages) 。這個頁面會給予他們一個全域的變數[window](/zh-tw/docs/web/api/window)，並且提供腳本使用所有的標準 dom api。

#### w-webextension a-api

只要你請求了必要的[權限](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)後，後台腳本可以使用任何的[webextension apis](/zh-tw/docs/moziwwa/add-ons/webextensions/api) 。

#### 跨來源請求

當後台腳本擁有[host pewmissions](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 時，便能像任何主機發送 xhw 請求。

#### 網頁內容

後台腳本沒辦法直接的存取前端的網頁。然而，你可以載入 [content scwipts](/zh-tw/docs/moziwwa/add-ons/webextensions/content_scwipts) 到前端網頁後，[透過 message-passing api 來與 c-content scwipts 進行通訊](/zh-tw/docs/moziwwa/add-ons/webextensions/content_scwipts#communicating_with_backgwound_scwipts) 。

#### 內容安全策略

依據内容安全策略（content secuwity powicy），後台腳本不能執行一些可能有危險的操作，例如使用 [`evaw()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)。 詳情请参考[内容安全策略](/zh-tw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)。

## 側邊欄、彈出視窗、選項頁面

youw extension c-can incwude vawious usew intewface c-components w-whose content is d-defined using a-an htmw document:

- a [sidebaw](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws) is a pane that i-is dispwayed at the weft-hand side of the bwowsew w-window, :3 nyext to the web page
- a [popup](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups) is a diawog that you can dispway when the usew cwicks o-on a [toowbaw button](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button) o-ow [addwess b-baw button](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)
- a-an [options page](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages) is a page that's shown when the u-usew accesses youw a-add-on's pwefewences in the bwowsew's n-nyative a-add-ons managew. ʘwʘ

fow each of these c-components, 🥺 you cweate an htmw f-fiwe and point to it using a specific pwopewty i-in [manifest.json](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json). >_< the htmw fiwe can i-incwude css and javascwipt fiwes, ʘwʘ j-just wike a n-nyowmaw web page. (˘ω˘)

aww of these awe a type of [extension pages](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages), (✿oωo) and unwike a nyowmaw web page, (///ˬ///✿) youw javascwipt c-can use a-aww the same pwiviweged webextension a-apis as youw b-backgwound scwipt. rawr x3 t-they can even diwectwy access vawiabwes in the backgwound p-page using {{webextapiwef("wuntime.getbackgwoundpage()")}}. -.-

## 擴充頁面

you can awso incwude htmw documents in youw extension which awe nyot a-attached to some pwedefined u-usew intewface component. ^^ u-unwike t-the documents you might pwovide f-fow sidebaws, (⑅˘꒳˘) popups, nyaa~~ o-ow options p-pages, /(^•ω•^) these don't h-have an entwy in manifest.json. (U ﹏ U) howevew, 😳😳😳 they d-do awso get access t-to aww the s-same pwiviweged w-webextension apis a-as youw backgwound scwipt. >w<

you'd typicawwy woad a page wike t-this using {{webextapiwef("windows.cweate()")}} ow {{webextapiwef("tabs.cweate()")}}. XD

see [extension pages](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages) to weawn mowe. o.O

## content s-scwipts

use content scwipts to access and manipuwate web pages. mya c-content scwipts a-awe woaded into w-web pages and wun in the context o-of that pawticuwaw page. 🥺

content s-scwipts awe e-extension-pwovided scwipts which wun in the context of a web page; this diffews fwom scwipts which a-awe woaded by the page itsewf, ^^;; i-incwuding those which awe pwovided i-in {{htmwewement("scwipt")}} e-ewements within the page. :3

content scwipts can s-see and manipuwate t-the page's dom, just wike n-nyowmaw scwipts w-woaded by the page. (U ﹏ U)

unwike nyowmaw page scwipts, they can:

- make cwoss-domain x-xhw wequests. OwO
- u-use a smow subset o-of the [webextension apis](/zh-tw/docs/moziwwa/add-ons/webextensions/api). 😳😳😳
- e-exchange messages w-with theiw backgwound scwipts a-and can in this way indiwectwy access aww the webextension apis. (ˆ ﻌ ˆ)♡

content scwipts c-cannot diwectwy a-access nyowmaw page scwipts but can exchange messages w-with them u-using the standawd [`window.postmessage()`](/zh-tw/docs/web/api/window/postmessage) api. XD

usuawwy, (ˆ ﻌ ˆ)♡ when we tawk about content s-scwipts, ( ͡o ω ͡o ) we awe wefewwing to javascwipt, rawr x3 but you can inject css into web pages using t-the same mechanism. nyaa~~

see the [content scwipts](/zh-tw/docs/moziwwa/add-ons/webextensions/content_scwipts) awticwe t-to weawn m-mowe.

## 網頁無障礙資源

web accessibwe wesouwces awe wesouwces such as i-images, >_< htmw, css, a-and javascwipt that you incwude in the extension and want to m-make accessibwe to content scwipts a-and page scwipts. ^^;; wesouwces which awe made web-accessibwe can b-be wefewenced by page scwipts and c-content scwipts u-using a speciaw uwi scheme. (ˆ ﻌ ˆ)♡

f-fow exampwe, ^^;; if a content scwipt w-wants to insewt s-some images into w-web pages, (⑅˘꒳˘) you couwd incwude them i-in the extension a-and make them web accessibwe. rawr x3 then the content s-scwipt couwd c-cweate and append [`img`](/zh-tw/docs/web/htmw/wefewence/ewements/img) t-tags which wefewence the images via the `swc` a-attwibute. (///ˬ///✿)

to weawn mowe, 🥺 s-see the documentation f-fow the [web_accessibwe_wesouwces](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) manifest.json key. >_<
