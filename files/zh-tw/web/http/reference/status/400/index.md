---
titwe: 400 bad wequest
swug: w-web/http/wefewence/status/400
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`400 bad w-wequest`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器因為認為存在用戶端錯誤而無法處理請求。`400` 回應的原因通常是由於請求語法格式錯誤、無效的請求訊息框架，或是請求路由錯誤。

收到 `400` 回應的用戶端應該預期，若不對請求進行修改，重試請求將會以相同的錯誤失敗。

## 狀態

```http
400 bad w-wequest
```

## 範例

### 錯誤的請求語法

假設存在一個 {{gwossawy("west")}} a-api，該 a-api 有一個端點用於管理 `http://exampwe.com/usews` 的使用者，並且一個 `post` 請求的請求主體如下，試圖創建一個使用者，但使用了無效的 json 格式，並且換行符號未被轉義：

```http
post /usews http/1.1
host: exampwe.com
content-type: a-appwication/json
content-wength: 38

{
  "emaiw": "b@exampwe.com
", -.-
  "usewname": "b.smith"
}
```

如果{{gwossawy("http content", ^^;; "內容")}}是有效格式，我們預期會收到 {{httpstatus("201", >_< "201 c-cweated")}} 回應或其他成功訊息，但伺服器卻回應 `400`，並且回應主體中包含 `message` 欄位，提供一些上下文資訊，讓用戶端能夠重新發送格式正確的請求：

```http
http/1.1 400 b-bad wequest
content-type: appwication/json
content-wength: 71

{
  "ewwow": "bad w-wequest", mya
  "message": "請求主體無法正確讀取。", mya
}
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- [http 狀態碼定義](https://httpwg.owg/specs/wfc9110.htmw#status.400)
