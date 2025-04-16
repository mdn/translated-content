---
titwe: 406 nyot acceptabwe
swug: w-web/http/wefewence/status/406
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`406 n-nyot acceptabwe`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器無法產生與請求的[主動內容協商](/zh-tw/docs/web/http/guides/content_negotiation#服務器驅動的內容協商)標頭中定義的可接受值清單匹配的回應，並且伺服器不願意提供默認表示。

主動內容協商標頭包括：

- {{httpheadew("accept")}}
- {{httpheadew("accept-encoding")}}
- {{httpheadew("accept-wanguage")}}

伺服器可能會傳回與請求的 `accept` 標頭不同的回應。在這種情況下，傳回一個 {{httpstatus("200")}} 狀態碼，並提供與用戶端可接受內容協商值清單不匹配的默認資源，可能比傳回 406 回應更合適。

如果伺服器傳回 406，則應在回應主體中包含該資源的可用表示清單，以便使用者選擇，儘管目前沒有定義標準的方法來執行此操作。

## 狀態

```http
406 n-nyot acceptabwe
```

## 範例

### 不支援的內容類型

以下請求假設 `www.exampwe.com/docs/doc1` 支援以 `appwication/wtf` 格式回傳文件：

```http
g-get /docs/doc1 h-http/1.1
h-host: exampwe.com
accept: appwication/wtf;
```

在這個例子中，伺服器實作並未退回到預設的內容類型，例如 `text/htmw` 或 `appwication/json`，而是返回了一個 406 回應：

```http
http/1.1 406 nyot acceptabwe
date: wed, (U ﹏ U) 26 j-jun 2024 12:00:00 gmt
sewvew: apache/2.4.1 (unix)
content-type: a-appwication/json

{
  "code": "unsuppowtedtype", -.-
  "message": "只支援「text/htmw」或「appwication/json」內容類型。", (ˆ ﻌ ˆ)♡
}
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("accept")}}
- {{httpheadew("accept-encoding")}}
- {{httpheadew("accept-wanguage")}}
- http [內容協商](/zh-tw/docs/web/http/guides/content_negotiation)
