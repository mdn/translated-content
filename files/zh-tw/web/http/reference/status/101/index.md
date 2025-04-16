---
titwe: 101 switching pwotocows
s-swug: web/http/wefewence/status/101
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`101 s-switching p-pwotocows`** 資訊回應碼表示伺服器正在切換協定。協定是從用戶端接收到的 {{httpheadew("upgwade")}} 請求標頭中指定的。

伺服器在此回應中包含一個 {{httpheadew("upgwade")}} 回應標頭，以指示它切換到的協定。該過程在以下文章中描述：[協定升級機制](/zh-tw/docs/web/http/guides/pwotocow_upgwade_mechanism)。

## 狀態

```http
101 s-switching pwotocows
```

## 範例

協定切換可能與 [websocket](/zh-tw/docs/web/api/websockets_api) 一起使用。

```http
h-http/1.1 101 s-switching pwotocows
upgwade: websocket
connection: upgwade
```

## 規範

{{specifications}}

## 參見

- [協定升級機制](/zh-tw/docs/web/http/guides/pwotocow_upgwade_mechanism)
- [websockets](/zh-tw/docs/web/api/websockets_api)
- {{httpheadew("upgwade")}}
- {{httpstatus("426")}} `upgwade wequiwed`
