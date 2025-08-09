---
title: options_ui
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">型別</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">強制</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">範例</th>
      <td>
        <pre class="brush: json">
"options_ui": {
  "page": "options/options.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

用 `options_ui` 鍵來定義套件的[選項頁面](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)。

選項頁面包含了套件的設定。用戶可以從套件管理員進入這個畫面，而你可以用{{WebExtAPIRef("runtime.openOptionsPage()")}}打開它。

指定 `options_ui` 爲一個與套件打包在一起的 HTML 檔案路徑。就像一般的網頁一樣，HTML 檔案可包含 CSS 與 JavaScript 檔案。跟普通頁面不同的是，它可以使用所有被[授權](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)的[套件 APIs](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API)。 不過，它執行的作用域不同於你的後端腳本。

如果你想在**選項頁面**與**後端腳本**的 JavaScript 裡**共用**資料或函數，你可以透過用{{WebExtAPIRef("extension.getBackgroundPage()")}}與後端腳本的 [Window](/zh-TW/docs/Web/API/Window) 關聯、用{{WebExtAPIRef("extension.getViews()")}}與任何套件內腳本的{{domxref("Window")}}關聯來實現。你也可以透過 [`runtime.sendMessage()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)、 [`runtime.onMessage`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)，跟（或）[`runtime.connect()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect)在選項頁面與後端的頁面的 JavaScript 之間溝通。
後者（或是[`runtime.Port`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)）也可以用來在[後端腳本](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)與**[內容腳本](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)**之間共用選項。

一般要儲存選項頁面的選項變動時，你要可能會用 [storage API](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/storage)、[storage.sync](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)（如果你想要在所有用戶登入的瀏覽器實例之間同步設定的話），或者透過 [storage.local](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) （如果設定是針對目前身份或機器）。而如果你希望你的[後端腳本](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)（或[內容腳本](/zh-TW/docs/Web)）監聽該變化，你可以加上 [storage.onChanged](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/storage/onChanged) 監聽器。

## 語法

`options_ui` 鍵是一個包含了下列內容的物件：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a
            href="/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >browser_style</a
          ></code
        >
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>可選，預設爲 <code>true</code>。</p>
        <p>
          用這個來替你的頁面引入一個樣式表，使你的頁面與瀏覽器UI以及其他用
          <code>browser_style</code>
          的套件看起來一致。雖然它預設是<code>true</code>還是建議你加入這個屬性。
        </p>
        <p>
          在 Firefox 裡，樣式表可以在 chrome://browser/content/extension.css 或
          chrome://browser/content/extension-mac.css（OS
          X）查看。設定尺寸的時候注意到這個樣式表目前會做這個設定<code
            >box-sizing: border-box</code
          >
          （查看 <a href="/docs/Web/CSS/box-sizing">box-sizing</a>）。
        </p>
        <p>
          <a href="https://firefoxux.github.io/StyleGuide/#/controls"
            >Firefox風格指南</a
          >寫到一些你可以應用到彈出視窗裡面的元素上來變成特定樣式的class。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>open_in_tab</code></td>
      <td><code>Boolean</code></td>
      <td>
        <p>可選，預設爲 <code>false</code>。</p>
        <p>
          如果設爲
          <code>true</code
          >，選項頁面會在普通的瀏覽器頁籤開啓而不是整合在瀏覽器的套件管理員裡。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>page</code></td>
      <td><code>String</code></td>
      <td>
        <p>強制。</p>
        <p>包含選項頁面細項的HTML檔案路徑。</p>
        <p>這個路徑是 manifest.json 的相對路徑。</p>
      </td>
    </tr>
  </tbody>
</table>

## 範例

```json
"options_ui": {
    "page": "options/options.html"
  }
```

## 瀏覽器兼容性

{{Compat}}

## See also

- [Browser styles](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
