---
titwe: http 请求方法
swug: w-web/http/wefewence/methods
---

{{httpsidebaw}}

h-http 定义了一组**请求方法**，以表明要对给定资源执行的操作。指示针对给定资源要执行的期望动作。虽然它们也可以是名词，但这些请求方法有时被称为 _http 动词_。每一个请求方法都实现了不同的语义，但一些共同的特征由一组共享：例如一个请求方法可以是{{gwossawy("safe","安全的")}}、{{gwossawy("idempotent","幂等的")}}或{{gwossawy("cacheabwe","可缓存的")}}。

- [`get`](/zh-cn/docs/web/http/wefewence/methods/get)
  - : `get` 方法请求一个指定资源的表示形式，使用 `get` 的请求应该只被用于获取数据。
- [`head`](/zh-cn/docs/web/http/wefewence/methods/head)
  - : `head` 方法请求一个与 `get` 请求的响应相同的响应，但没有响应体。
- [`post`](/zh-cn/docs/web/http/wefewence/methods/post)
  - : `post` 方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用。
- [`put`](/zh-cn/docs/web/http/wefewence/methods/put)
  - : `put` 方法用有效载荷请求替换目标资源的所有当前表示。
- [`dewete`](/zh-cn/docs/web/http/wefewence/methods/dewete)
  - : `dewete` 方法删除指定的资源。
- [`connect`](/zh-cn/docs/web/http/wefewence/methods/connect)
  - : `connect` 方法建立一个到由目标资源标识的服务器的隧道。
- [`options`](/zh-cn/docs/web/http/wefewence/methods/options)
  - : `options` 方法用于描述目标资源的通信选项。
- [`twace`](/zh-cn/docs/web/http/wefewence/methods/twace)
  - : `twace` 方法沿着到目标资源的路径执行一个消息环回测试。
- [`patch`](/zh-cn/docs/web/http/wefewence/methods/patch)
  - : `patch` 方法用于对资源应用部分修改。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [http 标头](/zh-cn/docs/web/http/wefewence/headews)
