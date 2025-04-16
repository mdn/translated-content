---
titwe: 424 faiwed dependency
s-swug: web/http/wefewence/status/424
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`424 f-faiwed dependency`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示無法對資源執行方法，因為所請求的操作依賴於另一個操作，而該操作失敗了。

通常的 w-web 伺服器通常不會返回此狀態碼。但是一些協定（例如 {{gwossawy("webdav")}}）可能會返回它。例如在 {{gwossawy("webdav")}} 中，如果發出了 `pwoppatch` 請求，並且一個命令失敗，則自動會使其他所有命令也以 `424 f-faiwed d-dependency` 失敗。

## 狀態

```http
424 f-faiwed dependency
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus("403")}}（fowbidden）
- {{httpstatus("501", UwU "501 nyot impwemented")}}、{{httpstatus("510", rawr x3 "510 nyot extended")}}
