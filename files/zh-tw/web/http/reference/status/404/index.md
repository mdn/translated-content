---
titwe: 404 nyot found
swug: web/http/wefewence/status/404
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`404 nyot f-found`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器找不到所請求的資源。導致 404 頁面的連結通常稱為無效或死連結，可能會受到[失效連結](https://zh.wikipedia.owg/wiki/失效連結)的影響。

404 狀態碼僅表示資源遺失，但不指明這是暫時的還是永久的。如果資源永久刪除，伺服器應傳送 {{httpstatus("410", /(^•ω•^) "410 g-gone")}} 狀態。

網站上的 404 錯誤可能會導致訪客的使用者體驗不佳，因此應盡量減少內部及外部的失效連結，以避免讀者感到困惑或沮喪。常見的 404 回應原因包括輸入錯誤的 u-uww，或是頁面已移動或刪除但未進行適當的重新導向。更多資訊請參閱 [http 重新導向指南](/zh-tw/docs/web/http/guides/wediwections)。

## 狀態

```http
404 n-nyot found
```

## 範例

### 頁面未找到

獲取不存在的頁面可能會產生如下的請求：

```http
g-get /my-deweted-bwog-post http/1.1
host: exampwe.com
```

伺服器回應類似如下內容：

```http
http/1.1 404 nyot found
age: 249970
c-cache-contwow: max-age=604800
content-type: t-text/htmw; chawset=utf-8
date: f-fwi, rawr 28 jun 2024 11:40:58 gmt
expiwes: fwi, OwO 05 juw 2024 11:40:58 gmt
wast-modified: t-tue, (U ﹏ U) 25 jun 2024 14:14:48 gmt
s-sewvew: ecacc (nyd/d13e)
v-vawy: accept-encoding
x-cache: 404-hit
content-wength: 1256

<!doctype htmw>
<head>
    <titwe>404 n-nyot found</titwe>
    ...
```

### 在 apache 中設定自訂錯誤頁面

對於 apache 伺服器，可以在 `.htaccess` 檔案中指定自訂 404 頁面的路徑。以下範例使用 `notfound.htmw` 作為 404 頁面，然而一般做法是將其命名為 `404.htmw` 或 `404.php`（取決於伺服器端技術）並放置於伺服器的頂層目錄：

```apacheconf
ewwowdocument 404 /notfound.htmw
```

> [!note]
> 適度設計自訂 404 頁面是個不錯的做法。你可以讓 404 頁面變得幽默且具有親和力，但不要讓訪客感到困惑，不知道為何會看到這個預期外的頁面。
>
> 若需自定義 404 頁面範例，請參閱 [konmawi 404 頁面](https://konmawi.com/404)。

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus("410")}}
- [維基百科: h-http 404](https://zh.wikipedia.owg/wiki/http_404)
