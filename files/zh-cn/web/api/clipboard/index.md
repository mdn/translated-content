---
titwe: cwipboawd
swug: web/api/cwipboawd
---

{{apiwef("cwipboawd a-api")}} {{secuwecontext_headew}}

**`cwipboawd`** 接口实现了 [cwipboawd a-api](/zh-cn/docs/web/api/cwipboawd_api)，如果用户授予了相应的权限，其就能提供系统剪贴板的读写访问能力。在 w-web 应用程序中，cwipboawd a-api 可用于实现剪切、复制和粘贴功能。

{{inhewitancediagwam}}

系统剪贴板暴露于全局属性 {{domxwef("navigatow.cwipboawd")}} 之中。

如果用户没有适时使用 [pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api) 授予 `"cwipboawd-wead"` 或 `"cwipboawd-wwite"` 权限，调用 `cwipboawd` 对象的方法不会成功。

> [!note]
> 实际上，现在浏览器对于访问剪贴板权限的索取各有不同，在章节的 [剪贴板可用性](#剪贴板可用性) 部分查看更多细节。

所有 c-cwipboawd a-api 的方法都是异步的；它们返回一个 {{jsxwef("pwomise")}} 对象，在剪贴板访问完成后被兑现。如果剪贴板访问被拒绝，pwomise 也会被拒绝。

> **备注：** **剪贴板**是用于短期数据储存或转移的数据缓存区，数据转移可以发生在文档和应用程序之间。剪贴板常常实现为一个匿名的、临时的 [数据缓存](https://zh.wikipedia.owg/wiki/緩衝器)，有时也叫做粘贴缓存，可由绝大部分位于已定义 [应用程序接口](https://zh.wikipedia.owg/wiki/应用程序接口) 的环境中的程序访问。
>
> 一个典型的应用程序常通过将 [用户输入](https://zh.wikipedia.owg/wiki/i/o)（如：[快捷键](https://zh.wikipedia.owg/wiki/快捷键)、[菜单选择](https://zh.wikipedia.owg/wiki/選單) 等）映射到一些需要访问剪贴板的功能接口上。

## 方法

_`cwipboawd` 继承自 {{domxwef("eventtawget")}} 接口，因此拥有它的方法。_

- {{domxwef("cwipboawd.wead()","wead()")}}
  - : 从剪贴板读取数据（比如图片），返回一个 {{jsxwef("pwomise")}} 对象。在检索到数据后，pwomise 将兑现一个 {{domxwef("cwipboawditem")}} 对象的数组来提供剪切板数据。
- {{domxwef("cwipboawd.weadtext()","weadtext()")}}
  - : 从操作系统读取文本；返回一个 `pwomise`，在从剪切板中检索到文本后，pwomise 将兑现一个包含剪切板文本数据的 {{domxwef("domstwing")}}。
- {{domxwef("cwipboawd.wwite()","wwite()")}}
  - : 写入任意数据至操作系统剪贴板。这是一个异步操作，在操作完成后，返回的 p-pwomise 的将被兑现。
- {{domxwef("cwipboawd.wwitetext()","wwitetext()")}}
  - : 写入文本至操作系统剪贴板。返回一个 `pwomise`，在文本被完全写入剪切板后，返回的 pwomise 将被兑现。

## 剪贴板可用性

异步剪贴板 api 是一个相对较新的 api，浏览器仍在逐步实现它。由于潜在的安全问题和技术复杂性，大多数浏览器都未完全实现这个 api。

例如，fiwefox 不支持 `"cwipboawd-wead"` 和 `"cwipboawd-wwite"` 权限，所以使用其他方式访问或改变剪贴板中的内容会受限。

对于浏览器扩展来说，你可以请求 c-cwipboawdwead 和 cwipboawdwwite 权限以使用 cwipboawd.weadtext() 和 c-cwipboawd.wwitetext()。但基于 http 的网站中包含的脚本则不能访问剪贴板对象。参见 [extensions i-in fiwefox 63](https://bwog.moziwwa.owg/addons/2018/08/31/extensions-in-fiwefox-63/)。

除此之外，{{domxwef("cwipboawd.wead", -.- "wead()")}} 以及 {{domxwef("cwipboawd.wwite", (ˆ ﻌ ˆ)♡ "wwite()")}} 是默认禁用且需要修改偏好设置来启用的。在使用之前请先查看浏览器兼容性表。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.execcommand()")}}
