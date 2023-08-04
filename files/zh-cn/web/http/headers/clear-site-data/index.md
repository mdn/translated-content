---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
---

{{HTTPSidebar}}

**`Clear-Site-Data`** 响应头，表示清除当前请求网站有关的浏览器数据（cookie，存储，缓存）。它让 Web 开发人员对浏览器本地存储的数据有更多控制能力。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

`Clear-Site-Data` 可以接受一个或多个参数，如果想要清除所有类型的数据，可以使用通配符 (`"*"`)

```plain
// 单个参数
Clear-Site-Data: "cache"

// 多个参数 (用逗号分隔)
Clear-Site-Data: "cache", "cookies"

// 通配
Clear-Site-Data: "*"
```

## 指令

- `"cache"`
  - : 表示服务端希望删除本 URL 原始响应的本地缓存数据（即：浏览器缓存，请参阅 [HTTP 缓存](/zh-CN/docs/Web/HTTP/Caching)）。根据浏览器的不同，可能还会清除预渲染页面，脚本缓存，WebGL 着色器缓存或地址栏建议等内容。
- `"cookies"`
  - : 表示服务端希望删除 URL 响应的所有 cookie。HTTP 身份验证凭据也会被清除。会影响整个主域，包括子域。所以 `https://example.com` 以及 `https://stage.example.com` 的 Cookie 都会被清除。
- `"storage"`

  - : 表示服务端希望删除 URL 原响应的所有 DOM 存储。这包括存储机制，如

    - localStorage (执行 `localStorage.clear`),
    - sessionStorage (执行 `sessionStorage.clear`),
    - IndexedDB (对每个库执行 {{domxref("IDBFactory.deleteDatabase")}}),
    - 服务注册线程 (对每个服务之注册线程执行 {{domxref("ServiceWorkerRegistration.unregister")}}),
    - [AppCache,](/zh-CN/docs/Web/HTML/Using_the_application_cache)
    - WebSQL 数据库，
    - [FileSystem API data](/zh-CN/docs/Web/API/File_and_Directory_Entries_API),
    - Plugin data (Flash via [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"`
  - : 表示服务端希望浏览器重新加载本请求 ({{domxref("Location.reload")}}).
- `"*"` (通配符)
  - : 表示服务端希望清除原请求响应的所有类型的数据。如果在此头的未来版本中添加了更多数据类型，它们也将被涉及。

## 示例

### 登出

如果用户退出您的网站或服务，您可能希望删除本地存储的数据。您可以通过在 `https://example.com/logout` 的响应头增加 Clear-Site-Data，以达到目的：

```plain
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### 清除 cookie

如果它在 `https://example.com/clear-cookies` 的响应头中出现，则同一域 `https://example.com` 和所有子域（如 `https://stage.example.com` 等）中的所有 Cookie，将都被清除。

```plain
Clear-Site-Data: "cookies"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Cache-Control")}}
