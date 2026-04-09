---
title: "Permissions-Policy: deferred-fetch 指令"
short-title: deferred-fetch
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头的 **`deferred-fetch`** 指令是 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的一部分。

此指令与 {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} 一起，决定了 640KiB 的总配额限制如何在顶级源及其跨源子框架之间分配。默认情况下，顶级源获得 512KiB，每个跨源子框架从剩余的 128KiB 中获得 8KiB。`deferred-fetch` 权限策略可以允许子框架源从顶级 512KiB 配额中获得更大的 64KiB 配额，以替代默认情况下它们会收到的 8KiB 最小配额。

更多详情和示例，请参见 [`fetchLater()` 配额](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配额)。

## 语法

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <url-list>)
Permissions-policy: deferred-fetch=(<url-list>)
```

- `<url-list>`
  - : 以空格分隔的源列表（每个源都用引号括起来），这些源被授予从父级主配额中获取的更大 64KiB 配额。64KiB 配额在子框架创建时分配。

跨源子框架可以将 `deferred-fetch` 授予其跨源子框架后代，委托其全部配额。这仅在当前未使用任何配额时才有效。

权限策略检查与配额检查无法区分。如果配额确实超出，以及如果通过权限策略限制了该源的配额，调用 `fetchLater()` 都会抛出 `QuotaExceededError`。

## 默认策略

`deferred-fetch` 的默认允许列表是 `self`。

## 示例

更多示例，请参见 [`fetchLater()` 配额](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配额)。

### 用尽最小配额

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. `b.com` 的子框架在创建时从顶级的 512KiB 限制中获得 64KiB。
2. `c.com` 的子框架未在列表中，因此在创建时从 128KiB 共享限制中获得 8KiB。
3. 另外 15 个不同源的子框架在创建时会获得 8KiB（类似于 `c.com`）。
4. 下一个子框架将不会被授予任何配额。
5. 如果其中一个子框架被移除，其延迟 fetch 将被发送。
6. 下一个子框架将获得 8KiB 配额，因为又有配额可用了。

## 完全撤销最小配额

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `b.com` 的子框架在创建时获得 64KiB。
2. `c.com` 的子框架在创建时不会获得任何配额。
3. 顶级文档及其同源后代可以使用最多 640KiB，但如果创建了 `b.com` 子框架，则会减少到 574KiB。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- {{domxref("window.fetchLater()")}}
- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)
