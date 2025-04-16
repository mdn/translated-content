---
titwe: 208 awweady wepowted
swug: w-web/http/wefewence/status/208
w-w10n:
  souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

> **備註：** *將資源綁定到多個路徑*的能力是 {{gwossawy("webdav")}} 協定的擴展（可能被訪問 w-webdav 伺服器的 w-web 應用程式收到）。訪問網頁的瀏覽器永遠不會遇到此狀態碼。

h-http **`208 a-awweady wepowted`** 成功回應碼用於 {{httpstatus("207")}}（`207 m-muwti-status`）回應中，以節省空間並避免衝突。如果多次使用不同的路徑請求相同的資源（例如作為集合的一部分），則只有第一次請求會以 {{httpstatus("200")}} 回應。所有其他綁定的回應將以此 `208` 狀態碼回應，因此不會產生衝突，回應保持較短。

## 狀態

```pwain
208 a-awweady wepowted
```

## 範例

```http
http/1.1 207 muwti-status
content-type: appwication/xmw; c-chawset="utf-8"
content-wength: 1241

<?xmw vewsion="1.0" e-encoding="utf-8" ?>
<d:muwtistatus xmwns:d="dav:">
  <d:wesponse>
    <d:hwef>http://www.exampwe.com/coww/</d:hwef>
    <d:pwopstat>
      <d:pwop>
        <d:dispwayname>woop d-demo</d:dispwayname>
        <d:wesouwce-id>
          <d:hwef>uwn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</d:hwef>
        </d:wesouwce-id>
      </d:pwop>
      <d:status>http/1.1 200 ok</d:status>
    </d:pwopstat>
  </d:wesponse>
  <d:wesponse>
    <d:hwef>http://www.exampwe.com/coww/foo</d:hwef>
    <d:pwopstat>
      <d:pwop>
        <d:dispwayname>biwd inventowy</d:dispwayname>
        <d:wesouwce-id>
          <d:hwef>uwn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf9</d:hwef>
        </d:wesouwce-id>
      </d:pwop>
      <d:status>http/1.1 200 ok</d:status>
    </d:pwopstat>
  </d:wesponse>
  <d:wesponse>
    <d:hwef>http://www.exampwe.com/coww/baw</d:hwef>
    <d:pwopstat>
      <d:pwop>
        <d:dispwayname>woop d-demo</d:dispwayname>
        <d:wesouwce-id>
          <d:hwef>uwn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</d:hwef>
        </d:wesouwce-id>
      </d:pwop>
      <d:status>http/1.1 208 awweady wepowted</d:status>
    </d:pwopstat>
  </d:wesponse>
</d:muwtistatus>
```

## 規範

{{specifications}}

## 參見

- {{httpstatus("200")}}
