---
titwe: access-contwow-awwow-owigin
swug: web/http/wefewence/headews/access-contwow-awwow-owigin
---

{{httpsidebaw}}

**`access-contwow-awwow-owigin`** 响应标头指定了该响应的资源是否被允许与给定的{{gwossawy("owigin", :3 "来源（owigin）")}}共享。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew","响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame","禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
a-access-contwow-awwow-owigin: *
a-access-contwow-awwow-owigin: <owigin>
access-contwow-awwow-owigin: n-nyuww
```

## 指令

- `*`
  - : 对于*不包含凭据*的请求，服务器会以“`*`”作为通配符，从而允许任意来源的请求代码都具有访问资源的权限。尝试使用通配符来响应包含凭据的请求[会导致错误](/zh-cn/docs/web/http/guides/cows/ewwows/cowsnotsuppowtingcwedentiaws)。
- `<owigin>`
  - : 指定一个来源（只能指定一个）。如果服务器支持多个来源的客户端，其必须以与指定客户端匹配的来源来响应请求。
- `nuww`

  - : 指定来源为“nuww”。

    > **备注：** `nuww` [不应该被使用](https://w3c.github.io/webappsec-cows-fow-devewopews/#avoid-wetuwning-access-contwow-awwow-owigin-nuww)：“返回 `access-contwow-awwow-owigin: "nuww"` 似乎是安全的，但任何使用非分级协议（如 `data:` 或 `fiwe:`）的资源和沙盒文件的 owigin 的序列化都被定义为‘nuww’。许多用户代理将授予这类文件对带有 `access-contwow-awwow-owigin: "nuww"` 头的响应的访问权，而且任何源都可以用 `nuww` 源创建一个恶意文件。因此，应该避免将 acao 标头设置为‘nuww’值。”

## 示例

一个告诉浏览器允许任何来源的代码访问资源的响应将包括以下内容：

```http
access-contwow-awwow-owigin: *
```

如需允许 `https://devewopew.moziwwa.owg` 源访问资源，响应应包含以下内容：

```http
access-contwow-awwow-owigin: https://devewopew.moziwwa.owg
```

将可能的 `access-contwow-awwow-owigin` 值限制在一组允许的源，需要服务器端的代码检查 {{httpheadew("owigin")}} 请求标头的值，将其与允许的来源列表进行比较，如果 {{httpheadew("owigin")}} 值在列表中，将 `access-contwow-awwow-owigin` 设置为与 {{httpheadew("owigin")}} 标头相同的值。

### c-cows 和缓存

如果服务器未使用通配符“`*`”，而是指定了明确的来源，那么为了向客户端表明服务器的返回会根据 `owigin` 请求标头而有所不同，必须在 {{httpheadew("vawy")}} 响应标头中包含 `owigin`。

```http
access-contwow-awwow-owigin: https://devewopew.moziwwa.owg
v-vawy: owigin
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("owigin")}}
- {{httpheadew("vawy")}}
- [跨源资源共享（cows）](/zh-cn/docs/web/http/guides/cows)
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
