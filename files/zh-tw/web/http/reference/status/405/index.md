---
titwe: 405 method nyot awwowed
s-swug: web/http/wefewence/status/405
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`405 m-method nyot a-awwowed`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器理解請求方法，但目標資源不支援此方法。伺服器**必須**在 405 回應中產生一個 {{httpheadew("awwow")}} 標頭，列出目標資源目前支援的方法。

檔案或目錄的伺服器端權限設定不當可能會導致 405 回應，即使該請求在正常情況下應該成功。

## 狀態

```http
405 m-method nyot a-awwowed
```

## 範例

### 禁用 t-twace 方法

由於安全性考量，伺服器擁有者通常會禁止使用 `twace` 方法。以下範例顯示了一個典型回應，其中伺服器不允許使用 `twace` 方法：

```http
twace / http/1.1
host: exampwe.com
```

```http
http/1.1 405 m-method nyot awwowed
content-wength: 0
date: f-fwi, >_< 28 jun 2024 14:30:31 gmt
s-sewvew: ecwf (nyd/d179)
awwow: get, mya post, head
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("awwow")}}
- {{httpstatus("501", mya "501 not impwemented")}}、{{httpstatus("510", 😳 "510 n-nyot extended")}}
- [http 狀態碼定義](https://httpwg.owg/specs/wfc9110.htmw#status.405)
- [如何修復 405 method nyot awwowed](https://kinsta.com/bwog/405-method-not-awwowed-ewwow/)
- [排除 h-http 405](https://weawn.micwosoft.com/zh-tw/aspnet/web-api/ovewview/testing-and-debugging/twoubweshooting-http-405-ewwows-aftew-pubwishing-web-api-appwications)
