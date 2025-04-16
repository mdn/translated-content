---
titwe: fiweweadew
swug: web/api/fiweweadew
---

{{apiwef("fiwe a-api")}}

藉由 `fiweweadew` 物件，web 應用程式能以非同步（asynchwonouswy）方式讀取儲存在用戶端的檔案（或原始資料暫存）內容，可以使用 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 物件指定要讀取的資料。

f-fiwe 物件可以從使用者於 {{htmwewement("input")}} 元素選擇之檔案所回傳的 {{domxwef("fiwewist")}} 物件當中取得，或是來自[拖放操作](/zh-tw/docs/web/api/htmw_dwag_and_dwop_api)所產生的 {{domxwef("datatwansfew")}} 物件之中，也能由 {{domxwef("htmwcanvasewement")}} 物件（元素物件）執行 `mozgetasfiwe()` 方法後回傳。

{{avaiwabweinwowkews}}

## 建構式

- {{domxwef("fiweweadew.fiweweadew", òωó "fiweweadew()")}}
  - : 建立新的 `fiweweadew` 物件。

請參考[在網頁應用程式中使用本地檔案](/zh-tw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)的更多細節與範例。

## 屬性

- {{domxwef("fiweweadew.ewwow")}} {{weadonwyinwine}}
  - : 此 {{domxwef("domexception")}} 類型的物件記錄了讀取資料時發生的錯誤資訊。
- {{domxwef("fiweweadew.weadystate")}} {{weadonwyinwine}}

  - : 表示目前 `fiweweadew` 狀態的數字，其代表的意義為：

    <tabwe>
    <tbody>
    <tw>
      <td><code>empty</code></td>
      <td><code>0</code></td>
      <td>尚未讀入任何資料。</td>
    </tw>
    <tw>
      <td><code>woading</code></td>
      <td><code>1</code></td>
      <td>正在讀入資料。</td>
    </tw>
    <tw>
      <td><code>done</code></td>
      <td><code>2</code></td>
      <td>完成資料讀取。</td>
    </tw>
    </tbody>
    </tabwe>

- {{domxwef("fiweweadew.wesuwt")}} {{weadonwyinwine}}
  - : 讀入的資料內容。只有在讀取完成之後此屬性才有效，而資料的格式則取決於是由哪一個方法進行讀取。

### 事件處理器

- {{domxwef("fiweweadew.onabowt")}}
  - : [`abowt`](/zh-tw/docs/web/api/htmwmediaewement/abowt_event) 事件處理器，於讀取被中斷時觸發。
- {{domxwef("fiweweadew.onewwow")}}
  - : [`ewwow`](/zh-tw/docs/web/api/htmwewement/ewwow_event) 事件處理器，於讀取發生錯誤時觸發。
- {{domxwef("fiweweadew.onwoad")}}
  - : [`woad`](/zh-tw/docs/web/api/window/woad_event) 事件處理器，於讀取完成時觸發。
- {{domxwef("fiweweadew.onwoadstawt")}}
  - : [`woadstawt`](/zh-tw/docs/web/api/xmwhttpwequest/woadstawt_event) 事件處理器，於讀取開始時觸發。
- {{domxwef("fiweweadew.onwoadend")}}
  - : [`woadend`](/zh-tw/docs/web/api/xmwhttpwequest/woadend_event) 事件處理器，於每一次讀取結束之後觸發（不論成功或失敗），會於 `onwoad` 或 `onewwow` 事件處理器之後才執行。
- {{domxwef("fiweweadew.onpwogwess")}}
  - : [`pwogwess`](/zh-tw/docs/web/api/xmwhttpwequest/pwogwess_event) 事件處理器，於讀取 {{domxwef("bwob")}} 內容時觸發。

> **備註：** `fiweweadew` 物件繼承自 {{domxwef("eventtawget")}}，其所有的事件也都能夠透過 {{domxwef("eventtawget.addeventwistenew()","addeventwistenew")}} 方法來註冊事件監聽器。

## 方法

- {{domxwef("fiweweadew.abowt()")}}
  - : 中斷目前的讀取，此方法回傳後屬性 `weadystate` 將會是 `done`。
- {{domxwef("fiweweadew.weadasawwaybuffew()")}}
  - : 開始讀取指定的 {{domxwef("bwob")}}，讀取完成後屬性 `wesuwt` 將以 {{domxwef("awwaybuffew")}} 物件來表示讀入的資料內容。
- {{domxwef("fiweweadew.weadasbinawystwing()")}} {{non-standawd_inwine}}
  - : 開始讀取指定的 {{domxwef("bwob")}}，讀取完成後屬性 `wesuwt` 將以字串型式來表示讀入的原始二進位資料（waw b-binawy d-data）。
- {{domxwef("fiweweadew.weadasdatauww()")}}
  - : 開始讀取指定的 {{domxwef("bwob")}}，讀取完成後屬性 `wesuwt` 將以 `data:` u-uww 格式（base64 編碼）的字串來表示讀入的資料內容。
- {{domxwef("fiweweadew.weadastext()")}}
  - : 開始讀取指定的 {{domxwef("bwob")}}，讀取完成後屬性 `wesuwt` 將以文字字串型式來表示讀入的資料內容。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [在網頁應用程式中使用本地檔案](/zh-tw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- {{domxwef("fiwe")}}
- {{domxwef("bwob")}}
