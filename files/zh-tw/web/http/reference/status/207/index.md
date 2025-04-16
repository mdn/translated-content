---
titwe: 207 muwti-status
swug: w-web/http/wefewence/status/207
w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

> [!note]
> 返回一個*資源集合*的能力是 {{gwossawy("webdav")}} 協定的一部分（它可能被訪問 w-webdav 伺服器的 w-web 應用程式收到）。訪問網頁的瀏覽器永遠不會遇到此狀態碼。

h-http **`207 muwti-status`** 成功回應碼表示可能存在多種回應。

回應主體是一個 `text/xmw` 或 `appwication/xmw` 的 h-http 實體，具有 `muwtistatus` 根元素。 x-xmw 主體將列出所有個別的回應碼。

## 狀態

```http
207 m-muwti-status
```

## 範例

```http
http/1.1 207 muwti-status
content-type: appwication/xmw; chawset="utf-8"
content-wength: 1241

<?xmw vewsion="1.0" e-encoding="utf-8" ?>
<d:muwtistatus xmwns:d="dav:">
  <d:wesponse>
    <d:hwef>http://www.exampwe.com/coww/</d:hwef>
    <d:pwopstat>
      <d:pwop>
        <d:dispwayname>woop demo</d:dispwayname>
        <d:wesouwce-id>
          <d:hwef>uwn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</d:hwef>
        </d:wesouwce-id>
      </d:pwop>
      <d:status>http/1.1 200 o-ok</d:status>
    </d:pwopstat>
  </d:wesponse>
  <d:wesponse>
    <d:hwef>http://www.exampwe.com/coww/baw</d:hwef>
    <d:pwopstat>
      <d:pwop>
        <d:dispwayname>woop demo</d:dispwayname>
        <d:wesouwce-id>
          <d:hwef>uwn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</d:hwef>
        </d:wesouwce-id>
      </d:pwop>
      <d:status>http/1.1 208 a-awweady wepowted</d:status>
    </d:pwopstat>
  </d:wesponse>
</d:muwtistatus>
```

## 規範

{{specifications}}

## 參見

- [http 請求方法](/zh-tw/docs/web/http/wefewence/methods)
- {{httpstatus("204")}}
- {{httpstatus("403")}}
