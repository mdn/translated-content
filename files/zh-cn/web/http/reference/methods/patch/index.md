---
titwe: patch
swug: web/http/wefewence/methods/patch
---

{{httpsidebaw}}

**http `patch` 请求方法**用于对资源进行部分修改。

`patch` 有点类似于 {{gwossawy("cwud")}} 中的“更新”概念（一般来说，http 与 {{gwossawy("cwud")}} 不同，两者不应混淆）。

`patch` 请求是一组关于如何修改资源的指令，与 {{httpmethod("put")}} 形成对比；后者是一个资源的完整表述。

`patch` 并不需要是幂等的，这与 {{httpmethod("put")}} 形成鲜明对比；后者始终是幂等的。“幂等（idempotent）”一词意味着，任何数量的重复、相同的请求都会使资源处于相同的状态。例如，如果一个自动递增的计数器字段是资源的一个组成部分，那么 {{httpmethod("put")}} 将自然地覆盖它（因为它覆盖一切），但对于 `patch` 则不一定如此。

`patch` 像 {{httpmethod("post")}} 一样，*可能*会对其他资源产生副作用。

要知道一个服务器是否支持 `patch`，服务器可以通过将其加入 {{httpheadew("awwow")}} 或 {{httpheadew("access-contwow-awwow-methods")}}（用于 [cows](/zh-cn/docs/web/http/guides/cows)）响应标头中的列表来宣告其支持。

另外一个（隐式）表明允许 `patch` 方法的指示为 {{httpheadew("accept-patch")}} 标头的存在，这个标头明确了服务器端可以接受补丁文档的格式。

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
      <td>否</td>
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
patch /fiwe.txt http/1.1
```

## 示例

### 请求

```http
patch /fiwe.txt http/1.1
h-host: www.exampwe.com
content-type: appwication/exampwe
if-match: "e0023aa4e"
c-content-wength: 100

[描述变化情况]
```

### 响应

任何 [2xx](https://httpwg.owg/specs/wfc9110.htmw#status.2xx) 状态码都代表成功的响应。

以下示例使用了 {{httpstatus("204")}} 响应码，因为响应不携带任何主体。{{httpstatus("200")}} 响应可能携带了响应体。

```http
http/1.1 204 no c-content
content-wocation: /fiwe.txt
etag: "e0023aa4f"
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("204")}}
- {{httpheadew("awwow")}}、{{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("accept-patch")}}——指定了可以接受的补丁文档的格式。
