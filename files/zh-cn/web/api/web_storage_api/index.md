---
title: Web Storage API
slug: Web/API/Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

**Web Storage API** 提供了浏览器可以存储键/值对的机制，其方式比使用 {{glossary("cookie")}} 更直观。

## Web Storage 概念和用法

Web Storage 包含如下两种机制：

- `sessionStorage` 为每一个给定的源（origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。

  - 仅为会话存储数据，这意味着数据将一直存储到浏览器（或选项卡）关闭。
  - 数据永远不会被传输到服务器。
  - 存储限额大于 cookie（最大 5MB）。

- `localStorage` 做同样的事情，但即使浏览器关闭并重新打开也仍然存在。

  - 存储的数据没有过期日期，只能通过 JavaScript、清除浏览器缓存或本地存储的数据来清除。
  - 存储限额是两者之间的最大值。

这两种机制是通过 {{domxref("Window.sessionStorage")}} 和 {{domxref("Window.localStorage")}} 属性使用（更确切的说，在支持的浏览器中 `Window` 对象实现了 `WindowLocalStorage` 和 `WindowSessionStorage` 对象并挂在其 `localStorage` 和 `sessionStorage` 属性下）——调用其中任一对象会创建 {{domxref("Storage")}} 对象，通过 {{domxref("Storage")}} 对象，可以设置、获取和移除数据项。对于每个源 `sessionStorage` 和 `localStorage` 使用不同的 Storage 对象——独立运行和控制。

> [!NOTE]
> 在 Firefox 中，当浏览器崩溃或重新启动时，为了避免过度使用 Web storage 导致的内存问题，每个源的存储大小将限制在 10M。有关详细信息，请参阅[存储配额和清理标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#firefox)。

> [!NOTE]
> 若用户[禁用第三方 cookie](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection)，那么将不允许来自第三方 IFrame 对 Web Storage 的访问。

## Web Storage 接口

- {{domxref("Storage")}}
  - : 允许你在一个特定域中设置、检索和删除数据和储存类型（session 或 local）。
- {{domxref("Window")}}
  - : Web Storage API 继承于 {{domxref("Window")}} 对象，并提供两个新属性——{{domxref("Window.sessionStorage")}} 和 {{domxref("Window.localStorage")}}——分别地提供对当前域的会话和本地 {{domxref("Storage")}} 对象的访问。以及当存储区域改变时触发的 {{domxref("Window/storage_event", "storage")}} 事件处理器（例如，存储新的项）。
- {{domxref("StorageEvent")}}
  - : 当一个存储区域发生变化时，在文档的 `Window` 对象上触发 `storage` 事件。

## 示例

为了阐述一些典型的 web storage 的用法，我们创了一个简单的例子，想象上地称为 [Web Storage 演示](https://github.com/mdn/dom-examples/tree/main/web-storage)。[着陆页](https://mdn.github.io/dom-examples/web-storage/)提供了可以用来自定义颜色、字体和装饰图片的控件。当你选择不同的选项，页面会被立即更新；此外，你的选择将被储存到 `localStorage` 中，以便当你离开该页面，然后过些时候在重新加载它时，你的选择会被记住。

另外，我们还提供了一个[事件输出页面](https://mdn.github.io/dom-examples/web-storage/event.html)——如果你在另一个标签页加载这个页面，然后在着陆页改变你的选择，你将看到在触发 {{domxref("StorageEvent")}} 时输出更新后的存储信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 隐私浏览/隐身模式

隐私窗口、隐身模式和类似名称的隐私浏览选项不会存储历史记录和 cookie 等数据。在隐身模式下，`localStorage` 被视为 `sessionStorage`。存储 API 仍然可用且功能齐全，但是当浏览器或浏览器选项卡关闭时，所有存储在隐私窗口中的数据都会被删除。

## 参见

- [使用 Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [浏览器存储限制和清理标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
