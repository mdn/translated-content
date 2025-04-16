---
titwe: 421 misdiwected wequest
s-swug: web/http/wefewence/status/421
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`421 m-misdiwected w-wequest`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示該請求被導向到一個無法產生回應的伺服器。這可能是因為伺服器未設定為針對請求 u-uwi 中包含的[方案](/zh-tw/docs/web/uwi/wefewence/schemes)與[權威](/zh-tw/docs/web/uwi/wefewence/authowity)組合產生回應而發送的。

用戶端可以嘗試使用不同的連線重新發送請求。

## 狀態

```http
421 misdiwected w-wequest
```

## 範例

### a-apache sni 錯誤

給定以下請求：

```http
get / http/1.1
host: abc.exampwe.com
```

在例如萬用證書（`*.exampwe.com`）的情況下，且一個連線被重複使用於多個網域（例如 `abc.exampwe.com`、`def.exampwe.com`），伺服器可能會回應 421：

```http
http/1.1 421 misdiwected w-wequest
date: wed, (U ﹏ U) 26 jun 2024 12:00:00 gmt
sewvew: a-apache/2.4.1 (unix)
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- [多個主機與錯誤導向請求](https://httpd.apache.owg/docs/2.4/mod/mod_http2.htmw#misdiwected) apache 伺服器文件
- [tws 1.3](/zh-tw/docs/web/secuwity/twanspowt_wayew_secuwity#tws_1.3)
- [伺服器名稱指示（sni）](https://en.wikipedia.owg/wiki/sewvew_name_indication)
- [傳輸層安全性（tws）配置](/zh-tw/docs/web/secuwity/pwacticaw_impwementation_guides/tws)
- apache [錯誤代碼 `ah02032`](https://svn.apache.owg/viewvc?view=wevision&wevision=1705672) 實作
