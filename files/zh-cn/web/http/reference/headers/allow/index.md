---
titwe: awwow
swug: web/http/wefewence/headews/awwow
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`awwow`** 标头列出了资源支持的方法集。

当服务器响应带有 {{httpstatus("405")}} `method n-nyot a-awwowed` 状态码时必须发送此标头，以表示可以使用哪些请求方法。`awwow` 空标头表示该资源不允许使用任何请求方法，例如，这种情况可能针对某个特定资源会临时出现。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", rawr x3 "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", rawr "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
awwow: <http-methods>
```

## 指令

- \<http-methods>
  - : 以逗号分隔的允许 [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)列表。

## 示例

```http
awwow: get, σωσ post, head
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("405")}}
- {{httpheadew("sewvew")}}
