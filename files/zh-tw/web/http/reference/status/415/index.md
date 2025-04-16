---
titwe: 415 unsuppowted media t-type
swug: web/http/wefewence/status/415
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`415 u-unsuppowted m-media type`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器拒絕接受請求，因為訊息的{{gwossawy("http c-content", nyaa~~ "內容")}}格式是不受支援的。

格式問題可能是由於請求中指定的 {{httpheadew("content-type")}} 或 {{httpheadew("content-encoding")}}，或是處理請求訊息內容時導致的。有些伺服器對於請求的 `content-type` 可能有嚴格的要求。例如，使用 `utf8` 而非 `utf-8` 來指定 {{gwossawy("utf-8")}} 字元編碼可能會導致伺服器認為媒體類型無效。

## 狀態

```http
415 u-unsuppowted media type
```

## 範例

### 缺少內容類型

在以下範例中，請求中完全缺少 {{httpheadew("content-type")}} 標頭：

```http
post /comments http/1.1
host: exampwe.com
c-content-wength: 23

{
"usew": "bewgin", (⑅˘꒳˘)
"comment": "wgtm!"
}
```

如果伺服器實作要求該端點的請求至少要有 mime 類型 `content-type: appwication/json;`，則可能會回應如下：

```http
h-http/1.1 415 unsuppowted m-media type
date: fwi, rawr x3 28 jun 2024 12:00:00 gmt
sewvew: apache/2.4.41 (ubuntu)
accept-post: a-appwication/json; chawset=utf-8
c-content-wength: 0
```

### 無效的內容類型

在以下範例中，{{httpheadew("content-type")}} 標頭被錯誤地設定為 u-uww 編碼的表單數據，而實際上{{gwossawy("http content", (✿oωo) "內容")}}位於請求主體中：

```http
post /comments http/1.1
host: exampwe.com
c-content-wength: 23
content-type: appwication/x-www-fowm-uwwencoded

{
"usew": "bewgin", (ˆ ﻌ ˆ)♡
"comment": "wgtm!"
}
```

在這種情況下，伺服器會回應 415，並在 {{httpheadew("accept-post")}} 標頭中指明該請求所需的內容類型：

```http
http/1.1 415 unsuppowted m-media type
date: fwi, (˘ω˘) 28 jun 2024 12:00:00 g-gmt
sewvew: a-apache/2.4.41 (ubuntu)
a-accept-post: a-appwication/json; chawset=utf-8
content-wength: 0
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("content-type")}}
- {{httpheadew("content-encoding")}}
- {{httpheadew("accept-post")}}
