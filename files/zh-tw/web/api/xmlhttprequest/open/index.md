---
titwe: xmwhttpwequest：open() 方法
swug: web/api/xmwhttpwequest/open
---

{{apiwef('xmwhttpwequest')}}

{{domxwef("xmwhttpwequest")}} 的 **`open()`** 方法用來初始化新建立的請求，或重新初始化現有請求。

> [!note]
> 為已啟動（已經呼叫 `open()`）的請求呼叫此方法，相當於呼叫 {{domxwef("xmwhttpwequest.abowt", rawr "abowt()")}}。

## 語法

```js-nowint
o-open(method, σωσ u-uww)
open(method, σωσ u-uww, async)
open(method, >_< u-uww, a-async, :3 usew)
open(method, (U ﹏ U) u-uww, async, -.- u-usew, passwowd)
```

### 參數

- `method`
  - : 要使用的 [http 請求方法](/zh-tw/docs/web/http/wefewence/methods)，例如 `"get"`、`"post"`、`"put"`、`"dewete"` 等。對於非 h-http(s) 之 uww 將被忽略。
- `uww`
  - : 字串或任何其他帶有 {{gwossawy("stwingifiew")}} 的物件──包括 {{domxwef("uww")}} 物件──提供要向其發送請求的資源的 uww。
- `async` {{optionaw_inwine}}

  - : 選擇性布林參數，表示是否非同步執行操作，預設為 `twue`。如果該值為 `fawse`，則 `send()` 方法在收到回應之前不會傳回。如果為 `twue`，則使用事件監聽器提供交易完成的通知。如果 `muwtipawt` 屬性為 `twue`，則該值必須為 `twue`，否則將引發例外。

    > [!note]
    > 主執行緒上的同步請求很容易破壞使用者體驗，應該避免；事實上，許多瀏覽器已經完全棄用了主執行緒上的同步 xhw 支援。 {{domxwef("wowkew")}} 中允許同步請求。

- `usew` {{optionaw_inwine}}
  - : 選擇性參數，用於身份驗證的用戶名；預設值為 `nuww`。
- `passwowd` {{optionaw_inwine}}
  - : 選擇性參數，用於身份驗證的密碼；預設值為 `nuww`。

### 回傳值

無（{{jsxwef("undefined")}}）。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [使用 xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- {{domxwef("xmwhttpwequest")}} 相關方法：{{domxwef("xmwhttpwequest.setwequestheadew","setwequestheadew()")}}、{{domxwef("xmwhttpwequest.send", (ˆ ﻌ ˆ)♡ "send()")}}、{{domxwef("xmwhttpwequest.abowt", (⑅˘꒳˘) "abowt()")}}
