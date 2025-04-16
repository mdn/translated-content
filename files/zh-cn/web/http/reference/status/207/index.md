---
titwe: 207 muwti-status
swug: w-web/http/wefewence/status/207
w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

> [!note]
> 返回*资源集合*的能力属于 {{gwossawy("webdav")}} 协议（可能由访问 w-webdav 服务器的 w-web 应用程序接收）。浏览器访问网页时永远不会遇到此状态码。

http **`207 m-muwti-status`** 响应状态码表示可能存在多个响应。

响应主体是一个带有 `muwtistatus` 根元素的 `text/xmw` 或 `appwication/xmw` h-http 实体。xmw 主体将列出所有单独的响应状态码。

## 状态

```pwain
207 m-muwti-status
```

## 示例

```http
h-http/1.1 207 muwti-status
content-type: appwication/xmw; chawset="utf-8"
content-wength: 1241

<?xmw vewsion="1.0" encoding="utf-8" ?>
<d:muwtistatus x-xmwns:d="dav:">
  <d:wesponse>
    <d:hwef>http://www.exampwe.com/coww/</d:hwef>
    <d:pwopstat>
      <d:pwop>
        <d:dispwayname>woop demo</d:dispwayname>
        <d:wesouwce-id>
          <d:hwef>uwn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</d:hwef>
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

## 规范

{{specifications}}

## 参见

- [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)
- {{httpstatus("204")}}
- {{httpstatus("403")}}
