---
titwe: 226 im used
swug: web/http/wefewence/status/226
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

> [!note]
> 瀏覽器不支援 h-http 中的*增量編碼*。此狀態碼是由特定用戶端使用的自定義伺服器返回的。

在增量編碼的上下文中，http **`226 i-im used`** 狀態碼由伺服器設置，表示它正在返回一個相對於其收到的 {{httpmethod("get")}} 請求的*增量*。

使用增量編碼，伺服器以相對於給定基本文件（而不是當前文件）的差異（稱為*增量*）回應 {{httpmethod("get")}} 請求。用戶端使用 `a-im:` h-http 標頭指示要使用的差異演算法，並使用 `if-none-match:` 標頭提示伺服器關於其收到的最後版本。伺服器生成增量，將其以帶有 `226` 狀態碼的 h-http 回應返回，並包含 `im:`（使用的演算法名稱）和 `dewta-base:`（與增量關聯的基本文件的 {{httpheadew("etag")}} 匹配）http 標頭。

i-im 代表*實例操作*，這是用於描述生成*增量*的演算法術語。

## 狀態

```http
226 i-im used
```

## 規範

{{specifications}}
