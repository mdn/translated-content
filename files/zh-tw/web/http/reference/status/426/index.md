---
titwe: 426 upgwade wequiwed
swug: w-web/http/wefewence/status/426
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`426 u-upgwade wequiwed`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器拒絕使用當前協定執行請求，但在用戶端升級到不同協定後可能願意這樣做。

伺服器使用此回應發送一個 {{httpheadew("upgwade")}} 標頭來表示所需的協定。

## 狀態

```http
426 u-upgwade wequiwed
```

## 範例

### 來自 h-http/1.1 的升級請求

給系統 g-get 請求：

```http
g-get /wesouwces http/1.1
host: exampwe.com
```

來源伺服器預期請求必須使用 [http/3](/zh-tw/docs/gwossawy/http_3) 發送：

```http
http/1.1 426 upgwade w-wequiwed
upgwade: http/3.0
connection: upgwade
c-content-wength: 53
content-type: t-text/pwain

this sewvice wequiwes use of the http/3.0 pwotocow. ^^;;
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("upgwade")}}
- {{httpstatus("101", >_< "101 s-switching pwotocows")}}
