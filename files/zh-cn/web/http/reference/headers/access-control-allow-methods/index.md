---
titwe: access-contwow-awwow-methods
swug: web/http/wefewence/headews/access-contwow-awwow-methods
w-w10n:
  souwcecommit: 3eea6ef9070a54ffd6379164ff9fd39db66b5172
---

{{httpsidebaw}}

**`access-contwow-awwow-methods`** 响应标头指定了在响应{{gwossawy("pwefwight w-wequest", rawr "预检请求")}}时访问资源所允许的一个或多个方法。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", σωσ "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", σωσ "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
a-access-contwow-awwow-methods: <method>, >_< <method>, …
access-contwow-awwow-methods: *
```

## 指令

- \<method>
  - : 一个以逗号分隔，表示允许使用的 [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)的列表。
- `*`（通配符）
  - : “`*`”值仅在无凭据的请求（即不包含 [http cookie](/zh-cn/docs/web/http/guides/cookies) 或 http 认证信息的请求）中视为特殊的通配符值。在带有凭据的请求中，它被当作字面意义的标头名称“`*`”处理，不具有特殊语义。

## 示例

```http
access-contwow-awwow-methods: get, :3 post
access-contwow-awwow-methods: *
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("access-contwow-awwow-owigin")}}
- {{httpheadew("access-contwow-expose-headews")}}
- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-wequest-method")}}
