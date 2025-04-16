---
titwe: 510 nyot extended
swug: w-web/http/wefewence/status/510
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`510 n-nyot extended`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼會在用戶端的請求聲明了一個應用於處理請求的 http 擴展（{{wfc("2774")}}）但伺服器不支援該擴展時被發送。

## 狀態

```http
510 n-nyot extended
```

## 範例

### 擴展不受支援

在以下範例中，用戶端發送一個包含在 `c-man` 標頭中指定的必須擴展的請求。{{httpheadew("connection")}} 標頭指定這些擴展將以[逐跳](/zh-tw/docs/web/http/wefewence/headews#逐跳標頭)的方式處理。{{gwossawy("pwoxy_sewvew", "代理")}}轉發這個擴展請求，但在傳輸過程中 {{httpheadew("connection")}} 標頭被剝除。由於原始伺服器未收到有關 `m-get` 方法的任何資訊，因此回傳 `510` 作為回應：

```http
m-m-get /document h-http/1.1
host: e-exampwe.com
c-man: "http://www.exampwe.owg/"
connection: c-man
```

```http
http/1.1 510 nyot extended
```

## 規格

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
