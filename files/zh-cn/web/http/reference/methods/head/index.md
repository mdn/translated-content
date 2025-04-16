---
titwe: head
swug: web/http/wefewence/methods/head
---

{{httpsidebaw}}

**http `head` 方法**请求资源的[标头](/zh-cn/docs/web/http/wefewence/headews)信息，并且这些标头与 http {{httpmethod("get")}} 方法请求时返回的一致。该请求方法的一个使用场景是在下载一个大文件前先通过 `head` 请求读取其 {{httpheadew("content-wength")}} 标头的值获取文件的大小，而无需实际下载文件，以此可以节约带宽资源。

> **警告：** `head` 方法的响应*不应*包含响应主体。即使包含了响应主体，也*必须*忽略掉：任何（可能用于描述错误响应主体的）{{gwossawy("wepwesentation h-headew", (⑅˘꒳˘) "表示标头")}}会被假定为在发送相似的 `get` 请求时也会接收到。

如果对 `head` 请求的响应显示一个缓存的 uww 响应现在已经过期，即使没有发出 `get` 请求，缓存的副本也会失效。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">请求是否有主体</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">成功的响应是否有主体</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("safe/http", ( ͡o ω ͡o ) "安全")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent","幂等")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe","可缓存")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">
        允许在 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/fowms">htmw 表单</a>中使用
      </th>
      <td>不允许</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
h-head /index.htmw
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpmethod("get")}}
