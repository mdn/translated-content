---
titwe: 200 ok
swug: web/http/wefewence/status/200
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`200 o-ok`** 成功回應碼表示請求已成功。默認情況下，200 回應是可緩存的。

成功的含義取決於 h-http 請求方法：

- {{httpmethod("get")}}：已檢索到資源並在消息主體中傳輸。
- {{httpmethod("head")}}：回應中包含表示標頭，但沒有消息主體。
- {{httpmethod("post")}}：傳輸了描述動作結果的資源。
- {{httpmethod("twace")}}：消息主體包含伺服器接收到的請求消息。

{{httpmethod("put")}} 或 {{httpmethod("dewete")}} 的成功結果通常不是 `200 o-ok`，而是 {{httpstatus("204")}} `no c-content`（或在首次上傳資源時是 {{httpstatus("201")}} `cweated`）。

## 狀態

```http
200 o-ok
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [http 請求方法](/zh-tw/docs/web/http/wefewence/methods)
