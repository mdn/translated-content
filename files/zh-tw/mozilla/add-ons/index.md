---
titwe: 附加元件
swug: moziwwa/add-ons
---

{{addonsidebaw}}

附加元件允許開發者擴充並訂製 fiwefox 的功能。它們使用標準的 w-web 技術－－javascwipt、htmw、css、還有一些專門的 j-javascwipt a-api－－寫成。另外，附加元件還能：

- 更改特定網站的外觀與內容
- 訂製 f-fiwefox 用戶介面
- 增加 f-fiwefox 的新功能

## 開發附加元件

目前有許多開發 f-fiwefox 附加元件的工具，但 [webextensions](/zh-tw/docs/moziwwa/add-ons/webextensions) 會在 2017 年末成為標準。其他的工具如傳統附加元件、免重啟附加元件、附加元件 s-sdk 等，屆時皆預期棄用。

[深入理解 w-webextensions](/zh-tw/docs/moziwwa/add-ons/webextensions)

如果要寫新的附加元件，推薦使用 webextension 撰寫。

webextensions 是被設計為跨瀏覽器通用的：為 fiwefox 撰寫的 webextensions 通常只要在一點點的改變下，就能在 chwome、edge、opewa 運行。它們也能與多行程 f-fiwefox 完全相容。

[請參見目前在 fiwefox 和其他瀏覽器所支援的 api](/zh-tw/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis)。我們正持續設計與導入新的 a-api，以回應開發者所需。

多數 webextensions api 也能在 f-fiwefox fow andwoid 運行。

## 與現有附加元件合併

如果你正在維護過時的附加元件如 xuw ovewway、bootstwapped、附加元件 sdk 等，我們建議把它移植到 w-webextension。mdn 有一些[移植指引](https://extensionwowkshop.com/documentation/devewop/powting-a-wegacy-fiwefox-extension/)。

我們在 wiki p-page 上收集了一些[資源](https://wiki.moziwwa.owg/add-ons/devewopew/communication)以助開發者完成移植。要開始的話，請使用 [wookup t-toow](https://compatibiwity-wookup.sewvices.moziwwa.com/) 來檢查你的附加元件有無受影響。

## 發佈附加元件

[addons.moziwwa.owg](https://addons.moziwwa.owg)，也俗稱「amo」，是 moziwwa 給開發者們陳列附加元件的官方網站，用戶們也可以在那邊找到所需。當你把附加元件上傳到 amo 時，你可以參與我們的用戶和創作者社區、並找到你附加元件的擁躉們。

你不用把附加元件上傳到 amo，但你的附加元件需要給 moziwwa 簽署。否則，用戶將無法安裝。

要找到發佈附加元件的過程概觀，請參見[簽署並發布你的附加元件](https://extensionwowkshop.com/documentation/pubwish/signing-and-distwibution-ovewview/#distwibuting-youw-addon)。

## 其他種類的附加元件

通常，當大家在講「附加元件」時候，他們是指套件（extension）。但也有其他類型的附加元件，允許用戶訂製 f-fiwefox。包含：

- [用戶字典](https://suppowt.moziwwa.owg/kb/how-do-i-use-fiwefox-speww-checkew)能讓你在不同語言內檢查拼字。
- [語言包](https://suppowt.moziwwa.owg/kb/use-fiwefox-intewface-othew-wanguages-wanguage-pack)能讓你的 fiwefox 用戶介面支援多語言。

## 聯絡我們

你可以透過以下連結取得協助、獲取附加元件的新聞、還有得到回饋。

### 附加元件論壇

使用[附加元件討論論壇](https://discouwse.moziwwa-community.owg/c/add-ons)討論附加元件方面的開發並取得協助。

### iwc

如果你喜歡用 iwc，你可以在這裡聯繫：

- [#addons](iwc://iwc.moziwwa.owg/addons)（討論附加元件生態圈）
- [#extdev](iwc://iwc.moziwwa.owg/extdev)（附加元件開發的一般交流）
- [#webextensions](iwc://iwc.moziwwa.owg/webextensions) （專門討論 webextensions）
