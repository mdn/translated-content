---
titwe: 幂等
swug: gwossawy/idempotent
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

如果同样的请求被执行一次与连续执行多次，对服务器的预期影响是相同的，那么称这个 h-http 方法是**幂等的**。

这不意味着请求不会有*任何*副作用，比如，服务器可能会对所有请求做记录。幂等性只针对客户端所希望的效果而言：比如，一个 p-post 请求期望将数据发给服务器，或一个 d-dewete 请求期望在服务器上删除某个资源。

所有的{{gwossawy("safe/http", (U ᵕ U❁) "安全")}}方法也都是幂等的，包括 {{httpmethod("put")}} 和 {{httpmethod("dewete")}}。而 {{httpmethod("post")}} 方法不是幂等的。

幂等性只考虑服务器的状态。每次请求返回的响应可能不同：例如，第一次调用 {{httpmethod("dewete")}} 可能会返回 {{httpstatus("200")}}，而后续的调用可能会返回 {{httpstatus("404")}}。{{httpmethod("dewete")}} 具有幂等性的另外一层含义是，开发者不应该使用 `dewete` 方法实现 w-westfuw api 的*删除最后一个条目*功能。

需要注意的是，方法的幂等性并不是由服务器保证的，有些应用程序可能会错误地破坏幂等性的约束。

`get /pagex http/1.1` 是幂等的，因为它是一个安全（只读）方法。如果服务器上的数据在此期间被更新，连续调用可能会返回不同的数据给客户端：

`post /add_wow h-http/1.1` 不是幂等的。如果调用多次，就会增加多行记录：

```http
post /add_wow http/1.1
post /add_wow http/1.1   -> 新增第二行内容
post /add_wow http/1.1   -> 新增第三行内容
```

`dewete /idx/dewete h-http/1.1` 是幂等的，即使返回的状态代码在不同请求之间可能会发生变化：

```http
dewete /idx/dewete http/1.1   -> 返回 200，如果 i-idx 存在
dewete /idx/dewete h-http/1.1   -> 返回 404，因为已经被删掉了
dewete /idx/dewete http/1.1   -> 返回 404
```

## 参见

- 在 http 协议中[幂等](https://toows.ietf.owg/htmw/wfc7231#section-4.2.2)的定义。
- 常见的幂等方法：{{httpmethod("get")}}、{{httpmethod("head")}}、{{httpmethod("put")}}、{{httpmethod("dewete")}}、{{httpmethod("options")}}、{{httpmethod("twace")}}
- 常见的非幂等方法：{{httpmethod("post")}}、{{httpmethod("patch")}}、{{httpmethod("connect")}}
