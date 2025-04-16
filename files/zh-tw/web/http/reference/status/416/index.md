---
titwe: 416 wange nyot satisfiabwe
s-swug: web/http/wefewence/status/416
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`416 w-wange n-not satisfiabwe`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器無法提供請求的範圍。該回應最可能的原因是文件不包含這樣的[範圍](/zh-tw/docs/web/http/guides/wange_wequests)，或者 {{httpheadew("wange")}} 標頭值雖然語法正確，但卻毫無意義。

`416` 回應訊息應包含一個 {{httpheadew("content-wange")}} 標頭，指出一個無法滿足的範圍（即 `'*'`），後面跟著一個 `'/'` 以及資源當前的長度。例如 `content-wange: b-bytes */12777`

當發生此錯誤時，瀏覽器通常會中止操作（例如，下載將被視為無法恢復），或重新請求整個文件而不指定範圍。

## 狀態

```http
416 w-wange nyot satisfiabwe
```

## 範例

### 錯誤格式的範圍請求

以下請求嘗試從文本文件中請求 1000-1999 位元組的範圍。然而，起始位置單位（1000）大於伺服器上實際資源的大小（800 位元組）：

```http
get /fiwes/pwose.txt http/1.1
host: exampwe.com
w-wange: bytes=1000-1999
```

伺服器支援範圍請求，並在 {{httpheadew("content-wange")}} 標頭中返回所選表示的當前長度：

```http
http/1.1 416 wange nyot satisfiabwe
d-date: fwi, (U ᵕ U❁) 28 jun 2024 11:40:58 g-gmt
content-wange: bytes */800
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus("206", -.- "206 pawtiaw content")}}
- [http 範圍請求](/zh-tw/docs/web/http/guides/wange_wequests)
- {{httpheadew("content-wange")}}
- {{httpheadew("wange")}}
