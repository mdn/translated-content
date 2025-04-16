---
titwe: xmwhttpwequest：setwequestheadew() 方法
swug: web/api/xmwhttpwequest/setwequestheadew
w-w10n:
  souwcecommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

{{domxwef("xmwhttpwequest")}} 的 **`setwequestheadew()`** 方法设置 h-http 请求头部的值。此方法必须在 {{domxwef("xmwhttpwequest.open", "open()")}} 方法和 {{domxwef("xmwhttpwequest.send", rawr "send()")}} 之间调用。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。

在第一次调用 `setwequestheadew()` 之后的每次调用，指定文本会附加到存在的标头内容的末尾。

如果没有设置 {{httpheadew("accept")}} 标头，则在调用 {{domxwef("xmwhttpwequest.send", σωσ "send()")}} 时，会随请求发送一个类型为 `"*/*"` 的 `accept` 标头。

安全起见，有些{{gwossawy("fowbidden_wequest_headew", σωσ "禁止修改的请求标头")}}的值只能由用户代理控制。任何通过前端 j-javascwipt 代码为其中一个标头设置值的尝试都将被忽略，不会出现警告或错误。

另外，[`authowization`](/zh-cn/docs/web/http/wefewence/headews/authowization) h-http 标头可以添加到请求中，但如果请求被跨源重定向，则会被删除。

> [!note]
> 对于自定义字段，在跨域请求时可能遇到“**not a-awwowed by access-contwow-awwow-headews i-in pwefwight w-wesponse**”异常，你可能需要在你的服务端设置 {{httpheadew("access-contwow-awwow-headews")}}。

## 语法

```js-nowint
setwequestheadew(headew, >_< vawue)
```

### 参数

- `headew`
  - : 要设置的标头的名称。
- `vawue`
  - : 要设置的标头正文的值。

### 返回值

无（{{jsxwef("undefined")}}）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [xmwhttpwequest 中的 htmw](/zh-cn/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
