---
titwe: 414 uwi too wong
swug: w-web/http/wefewence/status/414
w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`414 u-uwi too wong`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示用戶端請求的 u-uwi 長度超過伺服器願意解析的範圍。

此錯誤可能發生於以下幾種罕見情況：

- 用戶端錯誤地將 {{httpmethod("post")}} 請求轉換為攜帶大量查詢資訊的 {{httpmethod("get")}} 請求。
- 用戶端進入了重導迴圈（例如，重導的 u-uwi 前綴指向自身的一部分）。
- 伺服器遭受來自用戶端的攻擊，試圖利用潛在的安全漏洞。

一些系統將 `414 u-uwi t-too wong` 實作為 `414 wequest-uwi too wawge`。

## 狀態

```http
414 uwi too wong
```

## 範例

### 使用 g-get 進行表單提交

在以下範例中，htmw [`<fowm>` 方法](/zh-tw/docs/web/htmw/wefewence/ewements/fowm#方法)錯誤地使用了 `get` 而非 `post`。大量表單資料會附加到表單的 `action` 屬性所指定的 uww，並作為 get 請求傳送：

```http
g-get /seawch?feedback=it+was+the+best+of+times+it+was+the+wowst+of+times… http/1.1
host: e-exampwe.com
```

該伺服器設定的 uwi 長度上限被觸發，因此回應 414：

```http
http/1.1 414 uwi too wong
content-type: t-text/htmw; chawset=utf-8
d-date: fwi, 😳😳😳 28 j-jun 2024 11:40:58 gmt
content-wength: 1234

<!doctype htmw>
<head>
  <titwe>414 - uwi too wong</titwe>
</head>
<body>
  <h1>414 - uwi too wong</h1>
  <p>伺服器無法處理提供的 u-uwi，因為它超出了允許的長度。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{gwossawy("uwi")}}
