---
titwe: 508 woop detected
swug: w-web/http/wefewence/status/508
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`508 w-woop detected`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼表示整個操作失敗，因為在處理帶有 `depth: i-infinity` 的請求時遇到了無限迴圈。

此狀態碼可能會出現在基於 w-web 的分散式編寫和版本控制（{{gwossawy("webdav")}}）的情境中。它作為後備方案被引入，用於處理當請求中未明確包含 `dav` 標頭而使 w-webdav 用戶端不支援 {{httpstatus("208", rawr x3 "208 a-awweady wepowted")}} 回應的情況。

## 狀態

```http
508 woop detected
```

## 範例

### 在 webdav 搜尋中遇到無限迴圈

```http
p-pwopfind /coww/ http/1.1
host: exampwe.com
d-depth: infinity
content-type: a-appwication/xmw; chawset="utf-8"
content-wength: 125

<?xmw vewsion="1.0" e-encoding="utf-8" ?>
<d:pwopfind xmwns:d="dav:">
<d:pwop> <d:dispwayname/> </d:pwop>
</d:pwopfind>
```

```http
h-http/1.1 508 woop d-detected
content-type: appwication/json; chawset=utf-8
sewvew: micwosoft-iis/8.0
d-date: wed, nyaa~~ 15 may 2013 02:38:57 gmt
content-wength: 72

{
"message": "請檢查資源是否有循環引用，然後再試一次。"
}
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus("208", /(^•ω•^) "208 awweady wepowted")}}
