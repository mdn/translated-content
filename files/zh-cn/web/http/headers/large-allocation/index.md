---
title: Large-Allocation
slug: Web/HTTP/Headers/Large-Allocation
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

非标准的 **`Large-Allocation`** 响应标头用于告知浏览器加载该页面可能需要申请大内存块。它没有被任何当前版本的浏览器实现，但将它发送到任何浏览器都是安全的。

[WebAssembly](/zh-CN/docs/WebAssembly) 或者 asm.js 应用会使用大量连续的已分配内存块。例如，对于一些复杂的游戏，其申请的空间将会非常大，有时甚至会达到 1GB。`Large-Allocation` 告知浏览器其将要加载的页面可能需要申请一个大的连续内存空间，浏览器依据该标头可能会单独启动一个专有的进程用于处理该页面。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Large-Allocation: 0
Large-Allocation: <megabytes>
```

## 指令

- `0`
  - : 0 是一个特殊的值，代表分配的大小是不确定的。
- `<megabytes>`
  - : 预期需要申请的内存大小，以兆字节为单位。

## 示例

```http
Large-Allocation: 0
Large-Allocation: 500
```

## 排除错误

如果使用不当，`Large-Allocation` 标头会抛出警告或者错误信息，你可以在 [web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)中查看它们。

- 由于存在 `Large-Allocation` 标头，当前页面会在一个新的进程加载。
  - : 该消息意味着浏览器遇到了 `Large-Allocation` 标头，并且能够在一个新的进程中重新加载页面，这个进程应该有更多的可用连续内存。
- `Large-Allocation` 标头由非 GET 请求触发而被直接忽略。
  - : 当使用 {{HTTPMethod("POST")}} 请求加载文档时，加载目前无法被重定向到新的进程中。这个错误会在使用非 GET HTTP 方法加载带有 `Large-Allocation` 标头的文档时显示。例如，这可能是由于当前文档是通过表单提交加载的。
- 由于存在通过框架层级或者 {{domxref("window.opener")}} 引用当前浏览上下文的窗口，`Large-Allocation` 标头被直接忽略。

  - : 该错误意味着文档不是在用户打开的或者 noopener 打开的标签或窗口的顶层加载的。它可能在以下情况下出现：

    - 带有 `Large-Allocation` 标头的文档是在 {{HTMLElement("iframe")}} 中加载的。Firefox 目前无法将 iframe 移动到新的进程中，所以文档必须在当前进程中加载。
    - 带有 `Large-Allocation` 标头的文档是在由 {{domxref("window.open()")}}、`<a target="_blank">` 或者其他类似方法在没有设置 `rel="noopener"` 或者 `"noopener"` 特性的情况下打开的窗口中加载的。这些窗口必须与其打开的窗口保持在同一进程中，因为它们可以相互通信，这意味着我们不能允许它们切换进程。
    - 带有 `Large-Allocation` 标头的文档已经使用 {{domxref("window.open()")}}、`<a target="_blank">` 或其他类似方法在没有设置 `rel="noopener"` 或者 `"noopener"` 特性的情况下打开了另一个窗口。这与上面的原因相同，即它们可以相互通信，因此我们不能允许它们切换进程。

- 由于存在 `Large-Allocation` 标头，当前页面会在一个新的进程加载，然而 `Large-Allocation` 进程创建在非 Win32 平台上被禁用了。
  - : Firefox 目前仅在 32 位 Windows 构建中支持 `Large-Allocation` 标头，因为内存碎片化在 64 位构建中不是问题。如果你正在运行非 win32 版本的 Firefox，这个错误会出现。你可以在 about:config 中使用 `dom.largeAllocation.forceEnable` 布尔首选项来禁用该检查。

## 规范

现还不属于任何规范，可以通过[这篇文档](https://gist.github.com/mystor/5739e222e398efc6c29108be55eb6fe3)了解该标头的背后思想。

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly)
