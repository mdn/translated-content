---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
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
"background": {
  "scripts": ["background.js"]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

用 `background` 鍵來引入一個或多個後端腳本，還有一個選擇性的套件後端頁面。

後端腳本是用來放置一些需要維護長期狀態或是進行長期操作的程式碼，它麼的生命週期跟任何網頁或瀏覽器視窗是獨立的。

後端腳本會在套件一被讀取就被讀入，一直到套件被禁用或移除才會卸載。只要你有請求對應的[權限](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)你可以在這個腳本裡使用任何擴充套件 APIs。

更多細節，查看[套件解析](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_pages)的"後端頁面"章節。

`background` 鍵是一個物件，可能包含下列二屬性其中之一，兩者都是選擇性的：

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>"scripts"</code></td>
      <td>
        <p>
          一個字串組成的陣列，每個都是 JavaScript 原始碼的路徑。路徑是
          manifest.json 檔案自身的相對路徑。這些是會被套件讀取的後端腳本。
        </p>
        <p>腳本共用全局 <code>window</code>。</p>
        <p>腳本根據陣列裡的順序讀入。</p>
        <p>
          <strong>註：</strong>Firefox 版本50以前有一個錯誤當 Firefox
          除錯器開啓時，腳本並不總是按照陣列裡的順序讀入。要解決這個錯誤，你可以用
          <code>"page"</code> 屬性並且在頁面中透過
          <code>&#x3C;script></code> 標籤讀入後端腳本。這個錯誤在 Firefox 50
          被修正，從那開始腳本總是會依照陣列中的順序讀入。
        </p>
        <div class="note">
          <p>
            <strong>備註：</strong>
            如果你想要用<code>&#x3C;script>標籤</code>從遠端取得一個腳本（例如
            <code
              >&#x3C;script src =
              "https://code.jquery.com/jquery-1.7.1.min.js"></code
            >），你必須要修改套件 manifest.json 中的
            <code>content_security_policy</code> 鍵。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>"page"</code></td>
      <td>
        <p>
          如果你指定
          <code>"scripts"</code>，那麼爲了讓你的腳本執行一個空白頁面會被建立。
        </p>
        <p>
          如果頁面中需要某些內容，你可以用
          <code>"page"</code> 選項定義自己的頁面。
        </p>
        <p>
          如果你用了這個屬性，你就不能透過
          <code>"scripts"</code>
          來指定後端腳本。但是你可以像一般的網頁一樣在頁面中引入你自己的腳本。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 範例

```json
"background": {
    "scripts": ["jquery.js", "my-background.js"]
  }
```

讀取兩個後端腳本。

```json
"background": {
    "page": "my-background.html"
  }
```

讀取一個自訂的後端頁面。

## 瀏覽器兼容

{{Compat}}
