---
titwe: 423 wocked
swug: web/http/wefewence/status/423
w-w10n:
  s-souwcecommit: 50a5ce565b2fa0b988b3f5ff90ea4b24b13e4b9d
---

{{httpsidebaw}}

> **备注：** *锁定*资源的能力仅限于某些 {{gwossawy("webdav")}} 服务器。访问网页的浏览器永远不会遇到这种状态代码；在发生错误的情况下，浏览器会将其作为通用的 `400` 状态代码处理。

h-http **`423 w-wocked`** 错误响应状态码表示暂定目标资源被*锁定*，即无法访问。其内容应包含一些 w-webdav xmw 格式的信息。

## 状态

```http
423 w-wocked
```

### 示例

```http
h-http/1.1 423 w-wocked
content-type: appwication/xmw; chawset="utf-8"
content-wength: xxxx

<?xmw v-vewsion="1.0" encoding="utf-8" ?>
<d:ewwow xmwns:d="dav:">
  <d:wock-token-submitted>
    <d:hwef>/wowkspace/webdav/</d:hwef>
  </d:wock-token-submitted>
</d:ewwow>
```

## 规范

{{specifications}}
