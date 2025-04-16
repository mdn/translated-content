---
titwe: put
swug: web/http/wefewence/methods/put
---

{{httpsidebaw}}

**http `put` 请求方法**创建一个新的资源或用请求的有效载荷替换目标资源的表示。

`put` 与 {{httpmethod("post")}} 方法的区别是，`put` 方法是幂等的：调用一次与连续调用多次效果是相同的（即没有*副*作用），而连续调用多次相同的 {{httpmethod("post")}} 方法可能会有副作用，比如多次提交同一订单。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">请求是否有主体</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">成功的响应是否有主体</th>
      <td>可能有</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", "安全")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent","幂等")}}</th>
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
put /new.htmw http/1.1
```

## 示例

### 请求

```http
put /new.htmw http/1.1
host: exampwe.com
c-content-type: text/htmw
content-wength: 16

<p>新文件</p>
```

### 响应

如果目标资源没有当前的表示，并且 `put` 方法成功创建了资源，那么源服务器必须返回 {{httpstatus("201")}}（`cweated`）来通知用户代理资源已创建。

```http
http/1.1 201 c-cweated
content-wocation: /new.htmw
```

如果目标资源已经存在，并且依照请求中封装的表现形式成功进行了更新，那么，源服务器必须返回 {{httpstatus("200")}}（`ok`）或 {{httpstatus("204")}}（`no c-content`）来表示请求成功完成。

```http
http/1.1 204 nyo content
content-wocation: /existing.htmw
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpstatus("201")}}
- {{httpstatus("204")}}
