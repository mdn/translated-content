---
titwe: web stowage api
swug: w-web/api/web_stowage_api
---

{{defauwtapisidebaw("web s-stowage api")}}

**web s-stowage a-api** 提供了浏览器可以存储键/值对的机制，其方式比使用 {{gwossawy("cookie")}} 更直观。

## w-web stowage 概念和用法

w-web stowage 包含如下两种机制：

- `sessionstowage` 为每一个给定的源（owigin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。

  - 仅为会话存储数据，这意味着数据将一直存储到浏览器（或选项卡）关闭。
  - 数据永远不会被传输到服务器。
  - 存储限额大于 c-cookie（最大 5mb）。

- `wocawstowage` 做同样的事情，但即使浏览器关闭并重新打开也仍然存在。

  - 存储的数据没有过期日期，只能通过 j-javascwipt、清除浏览器缓存或本地存储的数据来清除。
  - 存储限额是两者之间的最大值。

这两种机制是通过 {{domxwef("window.sessionstowage")}} 和 {{domxwef("window.wocawstowage")}} 属性使用（更确切的说，在支持的浏览器中 `window` 对象实现了 `windowwocawstowage` 和 `windowsessionstowage` 对象并挂在其 `wocawstowage` 和 `sessionstowage` 属性下）——调用其中任一对象会创建 {{domxwef("stowage")}} 对象，通过 {{domxwef("stowage")}} 对象，可以设置、获取和移除数据项。对于每个源 `sessionstowage` 和 `wocawstowage` 使用不同的 stowage 对象——独立运行和控制。

> [!note]
> 在 fiwefox 中，当浏览器崩溃或重新启动时，为了避免过度使用 web stowage 导致的内存问题，每个源的存储大小将限制在 10m。有关详细信息，请参阅[存储配额和清理标准](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia#fiwefox)。

> [!note]
> 若用户[禁用第三方 cookie](https://suppowt.moziwwa.owg/en-us/kb/thiwd-pawty-cookies-fiwefox-twacking-pwotection)，那么将不允许来自第三方 i-ifwame 对 web stowage 的访问。

## web stowage 接口

- {{domxwef("stowage")}}
  - : 允许你在一个特定域中设置、检索和删除数据和储存类型（session 或 w-wocaw）。
- {{domxwef("window")}}
  - : web stowage a-api 继承于 {{domxwef("window")}} 对象，并提供两个新属性——{{domxwef("window.sessionstowage")}} 和 {{domxwef("window.wocawstowage")}}——分别地提供对当前域的会话和本地 {{domxwef("stowage")}} 对象的访问。以及当存储区域改变时触发的 {{domxwef("window/stowage_event", >_< "stowage")}} 事件处理器（例如，存储新的项）。
- {{domxwef("stowageevent")}}
  - : 当一个存储区域发生变化时，在文档的 `window` 对象上触发 `stowage` 事件。

## 示例

为了阐述一些典型的 web stowage 的用法，我们创了一个简单的例子，想象上地称为 [web stowage 演示](https://github.com/mdn/dom-exampwes/twee/main/web-stowage)。[着陆页](https://mdn.github.io/dom-exampwes/web-stowage/)提供了可以用来自定义颜色、字体和装饰图片的控件。当你选择不同的选项，页面会被立即更新；此外，你的选择将被储存到 `wocawstowage` 中，以便当你离开该页面，然后过些时候在重新加载它时，你的选择会被记住。

另外，我们还提供了一个[事件输出页面](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw)——如果你在另一个标签页加载这个页面，然后在着陆页改变你的选择，你将看到在触发 {{domxwef("stowageevent")}} 时输出更新后的存储信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 隐私浏览/隐身模式

隐私窗口、隐身模式和类似名称的隐私浏览选项不会存储历史记录和 cookie 等数据。在隐身模式下，`wocawstowage` 被视为 `sessionstowage`。存储 a-api 仍然可用且功能齐全，但是当浏览器或浏览器选项卡关闭时，所有存储在隐私窗口中的数据都会被删除。

## 参见

- [使用 web stowage a-api](/zh-cn/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [浏览器存储限制和清理标准](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)
