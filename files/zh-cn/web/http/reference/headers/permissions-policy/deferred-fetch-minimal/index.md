---
title: "Permissions-Policy: deferred-fetch-minimal 指令"
short-title: deferred-fetch-minimal
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头的 **`deferred-fetch-minimal`** 指令是 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的一部分。

此指令与 {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} 一起，决定了 640KiB 的总配额限制如何在顶级源及其跨源子框架之间分配。默认情况下，顶级源获得 512KiB，每个跨源子框架从剩余的 128KiB 中获得 8KiB。`deferred-fetch-minimal` 权限策略还可以阻止所有源；这将把 128KiB 共享限制重新分配给顶级配额，使其能够访问完整的 640KiB 限制。

更多详情和示例，请参见 [`fetchLater()` 配额](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配额)。

## 语法

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<url-list>)
```

- `<url-list>`
  - : 以空格分隔的源列表，这些源被允许使用次要的 128KiB 配额（每个子框架最多 8KiB）。

将 `deferred-fetch-minimal` 权限设置为 `self` 或 `()` 的顶级框架完全不允许跨源子框架使用默认的共享 128KiB 配额。相反，子框架的 128KiB 配额会被添加到其正常配额中。

## 默认策略

`deferred-fetch-minimal` 的默认允许列表是 `*`。

## 示例

更多示例，请参见 [`fetchLater()` 配额](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配额)。

### 用尽最小配额

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. `b.com` 的子框架在创建时从顶级的 512KiB 限制中获得 64KiB。
2. `c.com` 的子框架未在列表中，因此在创建时从 128KiB 共享限制中获得 8KiB。
3. 另外 15 个子框架在创建时会获得 8KiB（类似于 `c.com`，另一个 `c.com` 子框架也会获得另一个 8KiB 配额）。
4. 下一个子框架将不会被授予任何配额。
5. 如果其中一个子框架被移除，其延迟 fetch 将被发送。
6. 下一个子框架将获得 8KiB 配额，因为又有配额可用了。

### 完全撤销最小配额（有例外）

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `b.com` 的子框架在创建时获得 64KiB。
2. `c.com` 的子框架在创建时不会获得任何配额。
3. 顶级文档及其同源后代可以使用最多 640KiB，但如果创建了 `b.com` 子框架，则会减少到 574KiB。

### 完全撤销最小配额（无例外）

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. 顶级文档及其同源后代可以使用最多 640KiB。
2. 子框架不会被分配任何配额，无法使用 `fetchLater()`。

### 将最小配额限制为指定源

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. `b.com` 的子框架在创建时获得 64KiB。
2. `c.com` 的子框架在创建时获得 8KiB。
3. `d.com` 的子框架在创建时不会获得任何配额。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- {{domxref("window.fetchLater()")}}
- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)
