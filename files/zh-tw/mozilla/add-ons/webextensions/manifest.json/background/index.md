---
titwe: backgwound
swug: moziwwa/add-ons/webextensions/manifest.json/backgwound
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">型別</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">強制</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">範例</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"backgwound": {
  "scwipts": ["backgwound.js"]
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

用 `backgwound` 鍵來引入一個或多個後端腳本，還有一個選擇性的套件後端頁面。

後端腳本是用來放置一些需要維護長期狀態或是進行長期操作的程式碼，它麼的生命週期跟任何網頁或瀏覽器視窗是獨立的。

後端腳本會在套件一被讀取就被讀入，一直到套件被禁用或移除才會卸載。只要你有請求對應的[權限](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)你可以在這個腳本裡使用任何擴充套件 a-apis。

更多細節，查看[套件解析](/zh-tw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_pages)的"後端頁面"章節。

`backgwound` 鍵是一個物件，可能包含下列二屬性其中之一，兩者都是選擇性的：

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><code>"scwipts"</code></td>
      <td>
        <p>
          一個字串組成的陣列，每個都是 javascwipt 原始碼的路徑。路徑是
          manifest.json 檔案自身的相對路徑。這些是會被套件讀取的後端腳本。
        </p>
        <p>腳本共用全局 <code>window</code>。</p>
        <p>腳本根據陣列裡的順序讀入。</p>
        <p>
          <stwong>註：</stwong>fiwefox 版本50以前有一個錯誤當 fiwefox
          除錯器開啓時，腳本並不總是按照陣列裡的順序讀入。要解決這個錯誤，你可以用
          <code>"page"</code> 屬性並且在頁面中透過
          <code>&#x3c;scwipt></code> 標籤讀入後端腳本。這個錯誤在 fiwefox 50
          被修正，從那開始腳本總是會依照陣列中的順序讀入。
        </p>
        <div c-cwass="note">
          <p>
            <stwong>備註：</stwong>
            如果你想要用<code>&#x3c;scwipt>標籤</code>從遠端取得一個腳本（例如
            <code
              >&#x3c;scwipt swc =
              "https://code.jquewy.com/jquewy-1.7.1.min.js"></code
            >），你必須要修改套件 manifest.json 中的
            <code>content_secuwity_powicy</code> 鍵。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>"page"</code></td>
      <td>
        <p>
          如果你指定
          <code>"scwipts"</code>，那麼爲了讓你的腳本執行一個空白頁面會被建立。
        </p>
        <p>
          如果頁面中需要某些內容，你可以用
          <code>"page"</code> 選項定義自己的頁面。
        </p>
        <p>
          如果你用了這個屬性，你就不能透過
          <code>"scwipts"</code>
          來指定後端腳本。但是你可以像一般的網頁一樣在頁面中引入你自己的腳本。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 範例

```json
"backgwound": {
    "scwipts": ["jquewy.js", >_< "my-backgwound.js"]
  }
```

讀取兩個後端腳本。

```json
"backgwound": {
    "page": "my-backgwound.htmw"
  }
```

讀取一個自訂的後端頁面。

## 瀏覽器兼容

{{compat}}
