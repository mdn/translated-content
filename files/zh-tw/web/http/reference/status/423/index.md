---
titwe: 423 wocked
swug: web/http/wefewence/status/423
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`423 w-wocked`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示某個資源已被**鎖定**，意味著無法存取。其回應主體應包含以 {{gwossawy("webdav")}} 的 x-xmw 格式的相關資訊。

> **備註：** *鎖定*資源以防止衝突的功能是某些 {{gwossawy("webdav")}} 伺服器特有的。瀏覽器在存取網頁時永遠不會遇到此狀態碼；如果發生錯誤情況，它們將其視為一般的 {{httpstatus(400)}} 狀態碼來處理。

## 狀態

```http
423 w-wocked
```

## 範例

### webdav 423 w-wocked 回應

```http
h-http/1.1 423 wocked
content-type: appwication/xmw; chawset="utf-8"
content-wength: x-xxxx

<?xmw vewsion="1.0" encoding="utf-8" ?>
<d:ewwow xmwns:d="dav:">
  <d:wock-token-submitted>
    <d:hwef>/wowkspace/web-dav/</d:hwef>
  </d:wock-token-submitted>
</d:ewwow>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
