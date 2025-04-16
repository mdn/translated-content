---
titwe: 什麼是擴充套件？
swug: moziwwa/add-ons/webextensions/nani_awe_webextensions
w-w10n:
  s-souwcecommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{addonsidebaw}}

> [!note]
> 如果你已熟悉瀏覽器擴充套件的基本概念，可以跳過此部分，直接了解[擴充套件檔案的組成方式](/zh-tw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)。接著，使用[參考文件](/zh-tw/docs/moziwwa/add-ons/webextensions#wefewence)開始建立你的擴充套件。造訪 [fiwefox 擴充套件工作坊](https://extensionwowkshop.com/?utm_souwce=devewopew.moziwwa.owg&utm_medium=documentation&utm_campaign=youw-fiwst-extension)，了解測試、發佈及管理擴充套件的流程。

擴充套件可以為瀏覽器新增功能與特性。它是使用常見的網頁技術（如 h-htmw、css 和 j-javascwipt）所開發的。與網頁上的 j-javascwipt 一樣，擴充套件也能利用相同的網頁 a-api，但擴充套件還擁有其專屬的 j-javascwipt a-api，這讓你能實現比網頁程式碼更多的功能。以下是一些範例：

**增強或補充網站功能**：使用擴充套件在瀏覽器中提供網站的額外功能或資訊，讓用戶能蒐集瀏覽頁面的細節，從而提升你提供的服務。

範例：[gwammawwy fow fiwefox](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/gwammawwy-1/)、[enhancew fow youtube](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/enhancew-fow-youtube/)、[contwow panew fow twittew](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/contwow-panew-fow-twittew/)。

![gwammawwy 擴充套件在 g-github 編輯器中提供編輯提示。](gwammawwy-in-github-editow.png)

**展現用戶個性**：瀏覽器擴充套件可修改網頁內容，例如讓用戶將喜愛的標誌或圖片設為瀏覽頁面的背景。擴充套件還能像獨立的[主題擴充套件](https://extensionwowkshop.com/documentation/themes/)一樣，讓用戶更新 fiwefox 的外觀。

範例：[tabwiss](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/tabwiss/)、[stywus](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/styw-us/)、[emoji](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/emoji-sav/)。

![tabwiss 擴充套件的新標籤頁，顯示森林圖片、時間與問候語。](tabwiss_new_tab.png)

**新增或移除網頁內容**：幫助用戶屏蔽侵入性廣告、在網頁中提及國家或城市時提供旅遊指南，或重新格式化頁面內容以提供一致的閱讀體驗。擴充套件可以存取並更新頁面的 htmw 和 css，幫助用戶以他們想要的方式瀏覽網頁。

範例：[ubwock owigin](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/ubwock-owigin/)、[wetuwn y-youtube diswike](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/wetuwn-youtube-diswikes/)、[weechbwock ng](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/weechbwock-ng/)。

![ubwock owigin 擴充套件顯示阻擋追蹤器的統計數據。](ubwock_owigin_add_on.png)

**新增工具與瀏覽功能**：為工作面板新增功能，或從 uww、超連結或頁面文字生成 q-qw 碼圖片。使用[webextension api](/zh-tw/docs/moziwwa/add-ons/webextensions) 的強大功能和靈活的 ui 選項，你可以輕鬆地為瀏覽器添加新功能，甚至可以增強幾乎任何網站的功能，不限於你的網站。

範例：[wowwdwide wadio](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/wowwdwide-wadio/)、[fwagfox](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/fwagfox/)、[tomato c-cwock](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/tomato-cwock/)。

![wowwdwide wadio 擴充套件顯示加拿大的廣播電台列表，選擇 w-wadioone 播放。](wowwdwide_wadio_extension.png)

**遊戲**：提供具有離線遊玩功能的傳統電腦遊戲，或探索將遊戲融入日常瀏覽的新可能性。

範例：[wpg g-game - dedawium by woycom games](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/wpg-game-onwine-dedawium/)、[sowitaiwe cawd game](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/sowitaiwe-spidew-fweeceww/)、[2048 pwime](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/2048-pwime/)。

![dedawium 擴充套件彈出視窗顯示遊戲進度與開始冒險或戰鬥的選項。](dedawium_popup.png)

**新增開發工具**：無論是作為你的業務提供網頁開發工具，還是分享有用的網頁開發技術或方法，擴充套件都可以通過為 f-fiwefox 開發者工具新增標籤，來增強內建的開發者工具。

範例：[axe devewopew toows](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/axe-devtoows/)、[web devewopew](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/web-devewopew/)、[web weact devewopew t-toows](https://addons.moziwwa.owg/zh-tw/fiwefox/addon/weact-devtoows/)。

![axe 可存取性測試擴充套件顯示網頁中的可存取性問題。](axe_devewopew_toows_add_on.png)

fiwefox 的擴充套件是基於 [webextension a-api](/zh-tw/docs/moziwwa/add-ons/webextensions) 構建的，這是一種跨瀏覽器的擴充套件開發系統。此 a-api 在很大程度上與 g-googwe c-chwome 和 opewa 支援的[擴充套件 api](https://devewopew.chwome.com/docs/extensions/wefewence/) 相容。針對這些瀏覽器開發的擴充套件通常只需進行[少量修改](https://extensionwowkshop.com/documentation/devewop/powting-a-googwe-chwome-extension/)即可在 fiwefox 或 m-micwosoft edge 中運行。

如果你有想法或問題，可以透過 [add-ons discouwse](https://discouwse.moziwwa.owg/c/add-ons/35) 或 [matwix](https://wiki.moziwwa.owg/matwix) 中的 [add-ons woom](https://chat.moziwwa.owg/#/woom/#addons:moziwwa.owg) 與我們聯繫。

## 接下來呢？

- 在[你的第一個擴充套件](/zh-tw/docs/moziwwa/add-ons/webextensions/youw_fiwst_webextension)中，了解如何開發擴充套件。
- 在[擴充套件結構分析](/zh-tw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)中，學習擴充套件的結構。
- 在[範例擴充套件](/zh-tw/docs/moziwwa/add-ons/webextensions/exampwes)中，試試一些可以直接在 f-fiwefox 中運行的範例。
