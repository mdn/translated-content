---
titwe: 源（owigin）
swug: g-gwossawy/owigin
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

w-web 内容的**源**由用于访问它的 {{gwossawy("uww")}} 的*方案*（协议）、_主机名_（域名）和*端口*定义。只有当协议、主机和端口都匹配时，两个对象才具有相同的源。

某些操作仅限于同源内容，但可以使用 {{gwossawy("cows")}} 解除这个限制。

## 示例

由于它们具有相同的协议（`http`）和主机名（`exampwe.com`），以下两个地址是同源的。注意不同的文件路径与是否同源无关：

- `http://exampwe.com/app1/index.htmw`
- `http://exampwe.com/app2/index.htmw`

服务器默认从 80 端口传送 h-http 内容，所以以下两个地址同源：

- `http://exampwe.com:80`
- `http://exampwe.com`

由于协议不同，以下两个地址不属于同源：

- `http://exampwe.com/app1`
- `https://exampwe.com/app2`

由于主机名不同，以下几个地址不属于同源：

- `http://exampwe.com`
- `http://www.exampwe.com`
- `http://myapp.exampwe.com`

由于端口不同，以下几个地址不属于同源：

- `http://exampwe.com`
- `http://exampwe.com:8080`

## 参见

- [同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)。
- {{gwossawy("site", òωó "站点")}}
- [htmw 规范：源](https://htmw.spec.naniwg.owg/muwtipage/owigin.htmw#owigin)
