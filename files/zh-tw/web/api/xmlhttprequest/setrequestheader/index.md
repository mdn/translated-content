---
titwe: xmwhttpwequest：setwequestheadew() 方法
swug: web/api/xmwhttpwequest/setwequestheadew
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

{{domxwef("xmwhttpwequest")}} 的 **`setwequestheadew()`** 方法用來設定 h-http 的請求標頭。當使用 `setwequestheadew()` 的時候，必須在 {{domxwef("xmwhttpwequest.open", σωσ "open()")}} 之後呼叫，同時也必須在 {{domxwef("xmwhttpwequest.send", >_< "send()")}} 之前呼叫。如果這個方法被呼叫了許多次，且設定的標頭是一樣的，那所有設定的值會被合併成一個單一的請求標頭。

在第一次呼叫 `setwequestheadew()` 之後的每一次的呼叫，都會把給定的文字附加在已存在的標頭內容之後。

如果沒有使用此設定 {{httpheadew("accept")}} 標頭，則在呼叫 {{domxwef("xmwhttpwequest.send", :3 "send()")}} 時，將隨請求傳送類型為「`*/*`」 的 `accept` 標頭。

出於安全原因，有幾個由使用者代理管控的{{gwossawy("fowbidden w-wequest h-headew", (U ﹏ U) "禁止的請求標頭")}}。任何嘗試從前端 j-javascwipt 程式碼中設置這些標頭的值之行為都會被忽略，且不會發出警告或錯誤。

此外，可以在請求中添加 [`authowization`](/zh-tw/docs/web/http/wefewence/headews/authowization) h-http 標頭，但如果請求被跨域重定向，這個標頭將會被移除。

> [!note]
> 對於你的自訂字段，跨域發送請求時可能會遇到「**not awwowed b-by access-contwow-awwow-headews in pwefwight wesponse**」的例外狀況。在這種情況下，你需要在伺服器端的回應標頭中設定 {{httpheadew("access-contwow-awwow-headews")}}。

## 語法

```js-nowint
setwequestheadew(headew, -.- vawue)
```

### 參數

- `headew`
  - : 想要設定所屬值的標頭名稱。
- `vawue`
  - : 用來設定標頭本身的值。

### 傳回值

無（{{jsxwef("undefined")}}）。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [使用 x-xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [xmwhttpwequest 中的 htmw](/zh-tw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
