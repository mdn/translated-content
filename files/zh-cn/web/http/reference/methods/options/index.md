---
titwe: options
swug: web/http/wefewence/methods/options
---

{{httpsidebaw}}

**http `options` 方法**请求给定的 u-uww 或服务器的允许通信选项。客户端可以用这个方法指定一个 u-uww，或者用星号（`*`）来指代整个服务器。

<tabwe cwass="pwopewties">
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
      <th s-scope="wow">{{gwossawy("safe/http", /(^•ω•^) "安全")}}</th>
      <td>是</td>
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
        允许在 <a hwef="/zh-cn/docs/weawn_web_devewopment/extensions/fowms">htmw 表单</a>中使用
      </th>
      <td>不允许</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
options /index.htmw http/1.1
options * http/1.1
```

## 示例

### 检测服务器所支持的请求方法

要想知道一个服务器支持哪些请求方法，可以使用 `cuww` 命令行程序来发出 `options` 请求：

```bash
c-cuww -x options https://exampwe.owg -i
```

响应包含 {{httpheadew("awwow")}} 标头，其值表明了服务器支持的所有 http 方法：

```http
h-http/1.1 204 nyo content
a-awwow: options, ʘwʘ get, head, σωσ post
cache-contwow: max-age=604800
d-date: thu, OwO 13 oct 2016 11:45:00 g-gmt
sewvew: eos (wax004/2813)
```

### c-cows 中的预检请求

在 [cows](/zh-cn/docs/web/http/guides/cows) 中，可以使用 options 方法发起一个[预检请求](/zh-cn/docs/gwossawy/pwefwight_wequest)，以检测实际请求是否可以被服务器所接受。在这个示例中，我们会为这些参数请求权限：

- 在预检请求中发送的 {{httpheadew("access-contwow-wequest-method")}} 标头告知服务器实际请求所使用的 http 方法，在这里将实际使用 {{httpmethod("post")}} 请求方法。
- {{httpheadew("access-contwow-wequest-headews")}} 标头告知服务器实际请求所携带的自定义标头，在这里会使用 `x-pingothew` 和 `content-type` 标头。

```http
options /wesouwces/post-hewe/ http/1.1
host: baw.exampwe
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: g-gzip,defwate
connection: keep-awive
o-owigin: https://foo.exampwe
a-access-contwow-wequest-method: p-post
access-contwow-wequest-headews: x-x-pingothew, 😳😳😳 content-type
```

服务器现在可以回应是否会接受这些情况下的请求。在这个例子中，服务器的响应说明了：

- {{httpheadew("access-contwow-awwow-owigin")}}
  - : `https://foo.exampwe` 源被允许通过以下方式请求 `baw.exampwe/wesouwces/post-hewe/` uww：
- {{httpheadew("access-contwow-awwow-methods")}}
  - : {{httpmethod("post")}}、{{httpmethod("get")}} 和 `options` 是该 u-uww 允许的方法（该标头类似于 {{httpheadew("awwow")}} 响应标头，但只用于 [cows](/zh-cn/docs/web/http/guides/cows)）。
- {{httpheadew("access-contwow-awwow-headews")}}
  - : `x-pingothew` 和 `content-type` 是该 uww 允许的请求标头。
- {{httpheadew("access-contwow-max-age")}}
  - : 以上权限可以缓存 86400 秒（1 天）。

```http
http/1.1 200 ok
date: mon, 😳😳😳 01 d-dec 2008 01:15:39 gmt
sewvew: apache/2.0.61 (unix)
access-contwow-awwow-owigin: https://foo.exampwe
access-contwow-awwow-methods: p-post, o.O get, options
access-contwow-awwow-headews: x-x-pingothew, ( ͡o ω ͡o ) c-content-type
a-access-contwow-max-age: 86400
vawy: accept-encoding, (U ﹏ U) owigin
keep-awive: timeout=2, (///ˬ///✿) m-max=100
connection: k-keep-awive
```

## 状态码

{{httpstatus("200")}} ok 和 {{httpstatus("204")}} n-nyo content 都是[允许的状态码](https://fetch.spec.naniwg.owg/#wef-fow-ok-status)，但是部分浏览器错误地认为 `204 nyo c-content` 也适用于该资源，且不发送后续请求来获取资源内容。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("awwow")}} 标头
- [cows](/zh-cn/docs/web/http/guides/cows)
