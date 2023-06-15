---
title: Web Storage API
slug: Web/API/Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

**Web Storage API** 提供了浏览器可以存储键/值对的机制，其方式比使用 {{glossary("cookie", "cookies")}} 更直观。

## Web Storage 概念和用法

Web Storage 包含如下两种机制：

- `sessionStorage` 为每一个给定的源维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。

  - 仅为会话存储数据，这意味着数据将一直存储到浏览器（或选项卡）关闭。
  - 数据永远不会被传输到服务器。
  - 存储限额大于 cookie（最大 5MB）。

- `localStorage` 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。

  - 存储的数据没有过期日期，只能通过 JavaScript，或清除浏览器缓存/本地存储的数据来清除。
  - 存储限额是两者之间的最大值。

这两种机制是通过 {{domxref("Window.sessionStorage")}} 和 {{domxref("Window.localStorage")}} 属性使用（更确切的说，在支持的浏览器中 `Window` 对象实现了 `WindowLocalStorage` 和 `WindowSessionStorage` 对象并挂在其 `localStorage` 和 `sessionStorage` 属性下）—— 调用其中任一对象会创建 {{domxref("Storage")}} 对象，通过 {{domxref("Storage")}} 对象，可以设置、获取和移除数据项。对于每个源（origin）`sessionStorage` 和 `localStorage` 使用不同的 Storage 对象——独立运行和控制。

> **备注：** 在 Firefox 中，当浏览器崩溃或重新启动时，为了避免过度使用 Web storage 导致的内存问题，每个源的存储大小将限制在 10M。有关详细信息，请参阅[存储配额和清理标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#firefox)。

> **备注：** 若用户[禁用第三方 cookie](https://support.mozilla.org/en-US/kb/disable-third-party-cookies)，那么将不允许来自第三方 IFrames 对 Web Storage 的访问。（从[Firefox 43](/zh-CN/Firefox/Releases/43)版本开始实行）

## Web Storage 接口

- {{domxref("Storage")}}
  - : 允许你在一个特定域中设置，检索和删除数据和储存类型 (session or local.)
- {{domxref("Window")}}
  - : Web Storage API 继承于 {{domxref("Window")}} 对象，并提供两个新属性 —— {{domxref("Window.sessionStorage")}} 和 {{domxref("Window.localStorage")}} —— 它们分别地提供对当前域的会话和本地 {{domxref("Storage")}} 对象的访问。以及当存储区域改变时触发的 {{domxref("Window/storage_event", "storage")}} 事件处理程序（例如，存储新的项）。
- {{domxref("StorageEvent")}}
  - : 当一个存储区域发生变化时，在文档的 `Window` 对象上触发 `storage` 事件。

## 例子

为了阐述一些典型的 web storage 的用法，我们创了一个简单的例子，想象上地称为 [Web Storage 演示](https://github.com/mdn/dom-examples/tree/main/web-storage)。[landing page](https://mdn.github.io/dom-examples/web-storage/) 提供控制器可以用来自定义颜色，字体和装饰图片。当你选择不同的选项，页面会被立即更新;此外，你的选择被储存到 localStorage 中，以便当你离开该页面，然后过些时候在重新加载它时，你的选择会被记住。

另外，我们提供了一个 [event output page](https://mdn.github.io/dom-examples/web-storage/event.html) — 如果你在另一个标签页加载这个页面，然后在 landing page 改变你的选择，当 {{domxref("StorageEvent")}} 被触发时，你将会看到被更新的储存信息输出。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

不同的浏览器对 localStorage 和 sessionStorage 有不同的容量限制。[点此查看各版本浏览器对存储容量的描述详情](http://dev-test.nemikor.com/web-storage/support-test/)

> **备注：** 手机 Safari 从 iOS 5.1 版本开始，将 localStorage 数据到存放到缓存文件夹中，当空间不足时，系统将会时不时地自动清理缓存。

## 隐私浏览/隐身模式

大多数现代浏览器支持称为 'Incognito' 的用户隐私选择，“隐私浏览”或类似的功能可以不像历史记录和 cookie 那样存储数据。这明显与 Web Storage 不兼容。因此，浏览器厂商正尝试不同的方式来处理不兼容问题。

多数浏览器可以选择一种策略使存储的 API 可以使用并且不受限制，最大的不同是存储的数据在浏览器关闭后被清除。这些浏览器对如何处理已经存在的数据（从定期的 session 中获取到的），仍旧持有不同解释。在隐私模式还应该可读吗？然后就有一些浏览器，尤其是 Safari，提供了可选的解决方式：存储可用，但是给其分配 0 字节的存储空间，有效的使其不能被写入数据。

开发者需明确不同的实现，并在用 Web Storage API 开发网站时考虑这些实现的差别。更多信息请查看 [this WHATWG blog post](https://blog.whatwg.org/tag/localstorage) ，这里有更详细的讨论。

## 参见

- [Web Storage API 的使用](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [HTML5 Storage API By Venkatraman](https://medium.com/@ramsunvtech/onfocus-html5-storage-apis-b45d92aa424b)
