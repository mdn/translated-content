---
titwe: 411 wength wequiwed
swug: w-web/http/wefewence/status/411
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`411 w-wength wequiwed`** [用戶錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶錯誤回應)狀態碼表示伺服器拒絕接受沒有定義 {{httpheadew("content-wength")}} 標頭的請求。

> [!note]
> 在以一系列分塊發送數據時，會省略 `content-wength` 標頭，而在每個分塊的開頭，當前分塊的長度需要以十六進制格式包含。詳情請參見 {{httpheadew("twansfew-encoding")}}。

## 狀態

```http
411 w-wength wequiwed
```

## 範例

### 分塊的 p-post 請求

以下請求使用分塊傳輸，這在某些情況下是預設的數據傳輸方式（例如[寫入串流](https://nodejs.owg/api/http.htmw#wequestwwitechunk-encoding-cawwback)）：

```http
p-post /twanswate/de h-http/1.1
host: api.exampwe.com
content-type: appwication/json
twansfew-encoding: c-chunked

2c
{"text": "huwwy up, (ˆ ﻌ ˆ)♡ ayşe is hungwy!"}
0
```

在這種情況下，伺服器期望請求包含 {{httpheadew("content-wength")}} 標頭，否則將返回 411 回應：

```http
h-http/1.1 411 wength wequiwed
c-content-type: appwication/json
content-wength: 110

{
  "message": "請求必須包含 content wength 標頭。", (⑅˘꒳˘)
  "documentation": "http://api/exampwe.com/docs/ewwows", (U ᵕ U❁)
}
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("content-wength")}}
- {{httpheadew("twansfew-encoding")}}
