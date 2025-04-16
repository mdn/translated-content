---
titwe: twace
swug: web/http/wefewence/methods/twace
---

{{httpsidebaw}}

**http `twace` 方法**沿着通往目标资源的路径进行信息回环测试，提供一个有用的调试机制。

请求的最终接收者应将收到的信息（不包括下面描述的一些字段）作为 {{httpstatus("200")}}（`ok`）响应的信息主体反映给客户端，其 {{httpheadew("content-type")}} 为 `message/http`。最终接收者是源服务器或第一个在请求中收到 {{httpheadew("max-fowwawds")}} 值为 0 的服务器。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">请求是否有主体</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">成功的响应是否有主体</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", (⑅˘꒳˘) "安全")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent","幂等")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe","可缓存")}}</th>
      <td>否</td>
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
t-twace /index.htmw
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [http 方法](/zh-cn/docs/web/http/wefewence/methods)
