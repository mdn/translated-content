---
title: Large-Allocation
slug: Web/HTTP/Headers/Large-Allocation
---

{{HTTPSidebar}}

非标准的**`Large-Allocation`** 响应头部是用来告诉浏览器加载该页面可能需要申请大内存。当前只有 Firefox 实现该特性，但是对其他浏览器也无损害。

[WebAssembly](/zh-CN/docs/WebAssembly) 或者 asm.js 会使用比较大的连续内存空间。例如，对于一些复杂的游戏，其申请的空间将会非常大，甚至会达到 1GB。`Large-Allocation` 告诉浏览器其将要加载的页面可能需要申请一个大的连续内存空间，浏览器依据该头部可能会单独启动一个专有的进程用于处理该页面。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Large-Allocation: 0
Large-Allocation: <megabytes>
```

## 指令

- `0`
  - : 0 是一个特殊的值，代表给它分配的大小是不确定的 (动态允许).
- `<megabytes>`
  - : 预期需要申请的内存大小，以 M 为单位

## 示例

```plain
Large-Allocation: 0
Large-Allocation: 500
```

## 排除错误

如果使用不当， `Large-Allocation` 会抛出警告或者错误信息，你可以在 [web console](/zh-CN/docs/Tools/Web_Console) 查看它们。

- 由于`Large-Allocation 报头存在，这个页面会在一个新的进程处理和加载`
  - : This message means that the browser saw the `Large-Allocation` header, and was able to reload the page into a new process which should have more available contiguous memory.
- `Large-Allocation` 报头由于非`non-GET 请求而直接忽略`
  - : 当一个 {{HTTPMethod("POST")}} 请求用语加载文档，that load cannot currently be redirected into a new process. This error is displayed when loading a document with a `Large-Allocation` header with a non-GET HTTP method. This could be caused due to the document being loaded by a form submission, for example.
- A `Large-Allocation` header was ignored due to the presence of windows which have a reference to this browsing context through the frame hierarchy or {{domxref("window.opener")}}.

  - : This error means that the document was not loaded at the top level of an user-opened or noopener-opened tab or window. It can occur in these situations:

    - The document with the `Large-Allocation` header was loaded in an {{HTMLElement("iframe")}}. Firefox cannot move an iframe into a new process currently, so the document must load in the current process.
    - The document with the `Large-Allocation` header was loaded in a window which was opened by {{domxref("window.open()")}}, `<a target="_blank">` or other similar methods without `rel="noopener"` or the `"noopener"` feature being set. These windows must remain in the same process as their opener, as they can communicate, meaning that we cannot allow them to switch processes.
    - The document with the `Large-Allocation header` has opened another window with {{domxref("window.open()")}}, `<a target="_blank">` or other similar methods without `rel="noopener"` or the `"noopener"` feature being set. This is for the same reason as above, namely that they can communicate and thus we cannot allow them to switch processes.

- `Large-Allocation` 报头由于 文档在加载过程没有被加载而直接忽略
  - : Firefox has moved to a [multiprocess architecture](/zh-CN/docs/Mozilla/Firefox/Multiprocess_Firefox), and this architecture is required in order to support the `Large-Allocation` header. Some [legacy Addons](/zh-CN/docs/Mozilla/Add-ons/SDK) can prevent Firefox from using this new, faster, multiprocess architecture. If you have one of these Addons installed, then we will continue to use the old single process architecuture for compatibility, and cannot handle the `Large-Allocation` header.
- 由于`Large-Allocation`头部，此页面应将被加载到新进程中，但是在非 Win32 平台上禁用此选项。
  - : 由于在 64 位系统里内存碎片不是问题，Firefox 只在 32 位系统支持`Large-Allocation`头部。如果你运行一个非 32 位的程序，这类信息就会出现。可以设置 about:config 里面的"dom.largeAllocation.forceEnable"布尔值来关闭此检查。

## 规范

现还不属于任何规范，可以通过[这篇文档](https://gist.github.com/mystor/5739e222e398efc6c29108be55eb6fe3)了解该头部的背后思想。

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly)
