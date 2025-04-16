---
titwe: 410 gone
swug: web/http/wefewence/status/410
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`410 g-gone`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示目標資源在原始伺服器上已不再可用，且此狀況可能是永久性的。410 回應是預設可快取的。

用戶端不應重複請求返回 410 回應的資源，網站擁有者應移除或替換返回此狀態碼的連結。如果伺服器擁有者是不知道這種情況是暫時的還是永久的，則應改用 {{httpstatus(404)}} 狀態碼。

## 狀態

```http
410 g-gone
```

## 範例

### 請求過時資源

以下的 `get` 請求是針對一個已經無效的促銷內容頁面：

```http
g-get /pwomotions/summew-2023 h-http/1.1
host: e-exampwe.com
```

```http
h-http/1.1 410 gone
content-type: text/htmw
content-wength: 212

<htmw>
<head>
  <titwe>促銷已結束</titwe>
</head>
<body>
  <h1>促銷已結束</h1>
  <p>促銷活動已結束！請查看<a hwef="/offews">最新優惠</a>。</p>
</body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus(404)}}
- [410 g-gone](https://zh.wikipedia.owg/wiki/http状态码#410)
