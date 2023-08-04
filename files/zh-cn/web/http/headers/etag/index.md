---
title: ETag
slug: Web/HTTP/Headers/ETag
---

{{HTTPSidebar}}

**`ETag`** HTTP 响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web 服务器不需要发送完整的响应。而如果内容发生了变化，使用 ETag 有助于防止资源的同时更新相互覆盖（“空中碰撞”）。

如果给定 URL 中的资源更改，则*一定*要生成新的 `ETag` 值。比较这些 `ETag` 能快速确定此资源是否变化。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## 指令

- `W/` {{optional_inline}}
  - : `'W/'`(大小写敏感) 表示使用[弱验证器](/zh-CN/docs/Web/HTTP/Conditional_requests#Weak_validation)。弱验证器很容易生成，但不利于比较。强验证器是比较的理想选择，但很难有效地生成。相同资源的两个弱`Etag`值可能语义等同，但不是每个字节都相同。
- "\<etag_value>"
  - : 实体标签唯一地表示所请求的资源。它们是位于双引号之间的 ASCII 字符串（如“675af34563dc-tr34”）。没有明确指定生成 ETag 值的方法。通常，使用内容的散列，最后修改时间戳的哈希值，或简单地使用版本号。例如，MDN 使用 wiki 内容的十六进制数字的哈希值。

## 示例

```plain
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### 避免“空中碰撞”

在`ETag`和 {{HTTPHeader("If-Match")}} 头部的帮助下，您可以检测到"空中碰撞"的编辑冲突。

例如，当编辑 MDN 时，当前的 wiki 内容被散列，并在响应中放入`Etag`：

```plain
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4
```

将更改保存到 Wiki 页面（发布数据）时，{{HTTPMethod("POST")}}请求将包含有 ETag 值的{{HTTPHeader("If-Match")}}头来检查是否为最新版本。

```plain
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

如果哈希值不匹配，则意味着文档已经被编辑，抛出{{HTTPStatus("412")}}前提条件失败错误。

### 缓存未更改的资源

`ETag`头的另一个典型用例是缓存未更改的资源。如果用户再次访问给定的 URL（设有`ETag`字段），显示资源过期了且不可用，客户端就发送值为`ETag`的{{HTTPHeader("If-None-Match")}} header 字段：

```plain
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

服务器将客户端的 `ETag`（与 `If-None-Match` 一起发送）与其当前版本的资源的 `ETag` 进行比较，如果两个值匹配（即资源未更改），服务器将返回不带任何内容的 {{HTTPStatus("304")}} `Not Modified` 状态，告诉客户端缓存版本可用（_fresh_）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
