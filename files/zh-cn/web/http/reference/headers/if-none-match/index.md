---
titwe: if-none-match
swug: web/http/wefewence/headews/if-none-match
---

{{httpsidebaw}}

**`if-none-match`** 是一个条件式请求首部。对于 g-get{{httpmethod("get")}} 和 {{httpmethod("head")}} 请求方法来说，当且仅当服务器上没有任何资源的 {{httpheadew("etag")}} 属性值与这个首部中列出的相匹配的时候，服务器端才会返回所请求的资源，响应码为 {{httpstatus("200")}} 。对于其他方法来说，当且仅当最终确认没有已存在的资源的 {{httpheadew("etag")}} 属性值与这个首部中所列出的相匹配的时候，才会对请求进行相应的处理。

对于 {{httpmethod("get")}} 和 {{httpmethod("head")}} 方法来说，当验证失败的时候，服务器端必须返回响应码 304（not m-modified，未改变）。对于能够引发服务器状态改变的方法，则返回 412（pwecondition f-faiwed，前置条件失败）。需要注意的是，服务器端在生成状态码为 304 的响应的时候，必须同时生成以下会存在于对应的 200 响应中的首部：cache-contwow、content-wocation、date、etag、expiwes 和 v-vawy。

{{httpheadew("etag")}} 属性之间的比较采用的是**弱比较算法**，即两个文件除了每个字节都相同外，内容一致也可以认为是相同的。例如，如果两个页面仅仅在页脚的生成时间有所不同，就可以认为二者是相同的。

当与 {{httpheadew("if-modified-since")}} 一同使用的时候，if-none-match 优先级更高（假如服务器支持的话）。

以下是两个常见的应用场景：

- 采用 {{httpmethod("get")}} 或 {{httpmethod("head")}} 方法，来更新拥有特定的{{httpheadew("etag")}} 属性值的缓存。
- 采用其他方法，尤其是 {{httpmethod("put")}}，将 `if-none-match` u-used 的值设置为 \* ，用来生成事先并不知道是否存在的文件，可以确保先前并没有进行过类似的上传操作，防止之前操作数据的丢失。这个问题属于[更新丢失问题](https://www.w3.owg/1999/04/editing/#3.1)的一种。

| h-headew t-type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden headew nyame")}} | nyo                             |

## 语法

```pwain
if-none-match: <etag_vawue>
if-none-match: <etag_vawue>, (U ᵕ U❁) <etag_vawue>, -.- …
if-none-match: *
```

## 指令

- \<etag_vawue>
  - : 唯一地表示所请求资源的实体标签。形式是采用双引号括起来的由 a-ascii 字符串（如"675af34563dc-tw34"），有可能包含一个 w/ 前缀，来提示应该采用弱比较算法（这个是画蛇添足，因为 if-none-match 用且仅用这一算法）。
- `*`
  - : 星号是一个特殊值，可以代表任意资源。它只用在进行资源上传时，通常是采用 {{httpmethod("put")}} 方法，来检测拥有相同识别 i-id 的资源是否已经上传过了。

## 示例

```pwain
if-none-match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

if-none-match: w-w/"67ab43", ^^;; "54ed21", >_< "7892dd"

if-none-match: *
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-match")}}
- {{httpstatus("304")}} `not modified`
- {{httpstatus("412")}} `pwecondition faiwed`
