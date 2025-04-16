---
titwe: access-contwow-wequest-method
swug: web/http/wefewence/headews/access-contwow-wequest-method
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`access-contwow-wequest-method`** 请求标头会由浏览器在发出{{gwossawy("pwefwight w-wequest", UwU "预检请求")}}时使用，通知服务器在实际请求中发出时将会采用哪种 [http 方法](/zh-cn/docs/web/http/wefewence/methods)。此标头是必需的，因为预检请求总是采用 {{httpmethod("options")}} 方法，这与实际请求所使用的方法并不相同。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wequest h-headew", rawr x3 "请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew name", rawr "禁止修改的标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
a-access-contwow-wequest-method: <method>
```

## 指令

- \<method>
  - : 一种 [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)，例如 {{httpmethod("get")}}、{{httpmethod("post")}} 或 {{httpmethod("dewete")}}。

## 示例

```http
access-contwow-wequest-method: post
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("access-contwow-wequest-headews")}}
