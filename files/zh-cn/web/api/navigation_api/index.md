---
title: 导航 API
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 132d7ff76c89ed913b27eb85fc353adc3eb00e06
---

{{SeeCompatTable}}{{DefaultAPISidebar("Navigation API")}}

**导航 API**（Navigation API）提供了启动、拦截和管理浏览器导航操作的功能。它还可以检查应用程序的历史记录条目。这是对之前 Web 平台特性（例如{{domxref("History API", "历史记录 API", "", "nocode")}} 和 {{domxref("window.location")}} 的继承并解决了它们的缺点，且专门针对{{glossary("SPA", "单页应用程序（SPA）")}}的需求。

## 概念和用法

在 SPA 中，页面模板在使用过程中往往保持不变，而内容会在用户访问不同页面或功能时动态重写。因此，浏览器中只会加载一个不同的页面，这破坏了在浏览历史记录的不同位置之间来回导航的预期用户体验。此问题可以通过{{domxref("History API", "历史记录 API", "", "nocode")}} 在一定程度上得到解决，但它并非为满足 SPA 的需求而设计。导航 API 旨在弥补这一差距。

API 可通过 {{domxref("Window.navigation")}} 属性访问，该属性返回对全局 {{domxref("Navigation")}} 对象的引用。每个 `window` 对象都有自己对应的 `navigation` 实例。

### 处理导航

`navigation` 接口有几个相关事件，其中最值得注意的是 {{domxref("Navigation/navigate_event", "navigate")}} 事件。当启动[任何类型的导航](https://github.com/WICG/navigation-api#appendix-types-of-navigations)时，都会触发此事件，这意味着你可以从一个核心位置控制所有页面导航，非常适合 SPA 框架中的路由功能。（但{{domxref("History API", "历史记录 API", "", "nocode")}} 并非如此，有时很难弄清楚如何响应所有导航。）`navigate` 事件处理器会传递一个 {{domxref("NavigateEvent")}} 对象，其中包含详细信息，包括导航目的地的详细信息、类型、是否包含 `POST` 表单数据或下载请求等。

`NavigationEvent` 对象还提供两种方法：

- {{domxref("NavigateEvent.intercept", "intercept()")}} 将返回 promise 的回调处理器函数作为参数。它允许你控制启动导航时发生的情况。例如，在 SPA 的情况下，它可用于根据导航到的 URL 的路径将相关的新内容加载到 UI 中。
- {{domxref("NavigateEvent.scroll", "scroll()")}} 允许你手动启动浏览器的滚动行为（例如，到 URL 中的片段标识符），如果它对你的代码有意义，而不是等待浏览器自动处理它。

一旦启动导航并调用你的 `intercept()` 处理器，就会创建一个 {{domxref("NavigationTransition")}} 对象实例（可通过 {{domxref("Navigation.transition")}} 访问），可用于跟踪正在进行的导航的过程。

> [!NOTE]
> 在此上下文中，“过渡”是指一个历史条目与另一个历史条目之间的过渡。它与 CSS 过渡无关。

> [!NOTE]
> 对于大多数[导航类型](/zh-CN/docs/Web/API/NavigateEvent/navigationType#值)，你还可以调用 {{domxref("Event.preventDefault", "preventDefault()")}} 来完全停止导航；尚未实现取消遍历导航的功能。

当 `intercept()` 处理器的 promise 兑现时，`Navigation` 对象的 {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} 事件将触发，允许你在成功导航完成后运行清理代码。如果它拒绝，意味着导航失败，则 {{domxref("Navigation/navigateerror_event", "navigateerror")}} 将改为触发，允许你优雅地处理失败情况。`NavigationTransition` 对象上还有一个 {{domxref("NavigationTransition.finished", "finished")}} 属性，它在触发上述事件的同时实现或拒绝，为处理成功和失败情况提供了另一种途径。

> [!NOTE]
> 在导航 API 可用之前，要执行类似操作，你必须监听链接上的所有点击事件，运行 `e.preventDefault()`，执行适当的 {{domxref("History.pushState()")}} 调用，然后根据新 URL 设置页面视图。而且这无法处理所有导航——只能处理用户发起的链接点击。

### 以编程方式更新和遍历导航历史记录

当用户浏览你的应用程序时，导航到的每个新位置都会导致创建导航历史记录条目。每个历史记录条目都由一个不同的 {{domxref("NavigationHistoryEntry")}} 对象实例表示。这些实例包含多个属性，例如条目的键、URL 和状态信息。你可以使用 {{domxref("Navigation.currentEntry")}} 获取用户当前所在的条目，并使用 {{domxref("Navigation.entries()")}} 获取所有现有历史记录条目的数组。每个 `NavigationHistoryEntry` 对象都有一个 {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}} 事件，当条目不再是浏览器历史记录的一部分时触发。例如，如果用户向后导航三次，然后向前导航到其他地方，则这三个历史记录条目将被丢弃。

> [!NOTE]
> 导航 API 仅公开在当前浏览上下文中创建的与当前页面同源的历史记录条目（例如，不是嵌入式 {{htmlelement("iframe")}} 内的导航或跨源导航），为你的应用提供所有先前历史记录条目的准确列表。与使用旧版{{domxref("History API", "历史记录 API", "", "nocode")}} 相比，这使得遍历历史记录变得不那么脆弱。

`Navigation` 对象包含更新和遍历导航历史记录所需的所有方法：

- {{domxref("Navigation.navigate", "navigate()")}} {{Experimental_Inline}}
  - : 导航到新的 URL，创建新的导航历史记录条目。
- {{domxref("Navigation.reload", "reload()")}} {{Experimental_Inline}}
  - : 重新加载当前导航历史记录条目。
- {{domxref("Navigation.back", "back()")}} {{Experimental_Inline}}
  - : 如果可能的话，导航到上一个导航历史记录条目。
- {{domxref("Navigation.forward", "forward()")}} {{Experimental_Inline}}
  - : 如果可能的话，导航到下一个导航历史记录条目。
- {{domxref("Navigation.traverseTo", "traverseTo()")}} {{Experimental_Inline}}
  - : 导航到由其键值标识的特定导航历史记录条目，该键值是通过相关条目的 {{domxref("NavigationHistoryEntry.key")}} 属性获得的。

上述每个方法都返回一个包含两个 promise（`{committed, finish}`）的对象。这允许调用函数等待采取进一步的操作，直到：

- `committed` 兑现，意味着可见的 URL 已经改变，并且创建了一个新的 {{domxref("NavigationHistoryEntry")}}。
- `finished` 兑现，这意味着你的 `intercept()` 处理器返回的所有 promise 均已兑现。这相当于当 {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} 事件触发时，{{domxref("NavigationTransition.finished")}} promise 已兑现，如前所述。
- 上述任意一个 promise 被拒绝，这意味着导航由于某种原因失败了。

### 状态

导航 API 允许你存储每个历史记录条目的状态。这是开发人员定义的信息——可以是任何你喜欢的内容。例如，你可能希望存储一个 `visitCount` 属性来记录某个视图被访问的次数，或者存储一个包含多个与 UI 状态相关的属性的对象，以便当用户返回该视图时可以恢复该状态。

要获取 {{domxref("NavigationHistoryEntry")}} 的状态，请调用其 {{domxref("NavigationHistoryEntry.getState", "getState()")}} 方法。该方法最初返回 `undefined`，但当在条目上设置状态信息时，它将返回先前设置的状态信息。

设置状态有点微妙。你无法检索状态值然后直接更新它——存储在条目上的副本不会更改。相反，你可以在执行 {{domxref("Navigation.navigate", "navigate()")}} 方法或 {{domxref("Navigation.reload", "reload()")}} 方法时更新它——其中每个都可选地接受 options 对象参数，其中包括一个 `state` 属性，其中包含要在历史记录条目上设置的新状态。当这些导航提交时，状态更改将自动应用。

但是在某些情况下，状态更改将独立于导航或重新加载——例如，当页面包含可展开/可折叠的 {{htmlelement("details")}} 元素时。在这种情况下，你可能希望将展开/折叠状态存储在历史记录条目中，以便在用户返回页面或重新启动浏览器时恢复它。使用 {{domxref("Navigation.updateCurrentEntry()")}} 处理此类情况。当前条目更改完成后，将触发 {{domxref("Navigation/currententrychange_event", "currententrychange")}}。

### 限制

导航 API 存在一些明显的限制：

1. 当前规范不会在页面首次加载时触发 {{domxref("Navigation.navigate_event", "navigate")}} 事件。对于使用服务器端渲染（SSR）的网站来说，这可能没问题——你的服务器可以返回正确的初始状态，这是向用户提供内容的最快方式。但利用客户端代码创建页面的网站可能需要额外的函数来初始化页面。
2. 导航 API 仅在单个框架内运行——顶级页面或单个特定的 {{htmlelement("iframe")}}。这有一些有趣的含义，[在规范中进一步记录](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites)，但在实践中，这将减少开发人员的困惑。以前的{{domxref("History API", "历史记录 API", "", "nocode")}} 有几个令人困惑的边缘情况，例如对框架的支持，而导航 API 会预先处理。
3. 你目前无法使用导航 API 以编程方式修改或重新排列历史记录列表。设置临时状态可能会很有用，例如将用户导航到临时模式，要求他们提供一些信息，然后返回上一个 URL。在这种情况下，你需要删除临时模式导航条目，以便用户不会通过点击前进按钮并再次打开它来扰乱应用程序流程。

## 接口

- {{domxref("NavigateEvent")}} {{Experimental_Inline}}
  - : {{domxref("Navigation/navigate_event", "navigate")}} 事件的事件对象，当[任何类型的导航](https://github.com/WICG/navigation-api#appendix-types-of-navigations)启动时触发。它提供对有关该导航的信息的访问，最值得注意的是 {{domxref("NavigateEvent.intercept", "intercept()")}}，它允许你控制启动导航时发生的情况。
- {{domxref("Navigation")}} {{Experimental_Inline}}
  - : 允许在一个中心位置控制当前 `window` 的所有导航操作，包括以编程方式启动导航、检查导航历史记录条目以及在导航发生时管理导航。
- {{domxref("NavigationActivation")}} {{Experimental_Inline}}
  - : 表示最近的跨文档导航。它包含导航类型以及当前和目标的文档历史记录条目。
- {{domxref("NavigationCurrentEntryChangeEvent")}} {{Experimental_Inline}}
  - : {{domxref("Navigation/currententrychange_event", "currententrychange")}} 事件的事件对象，当 {{domxref("Navigation.currentEntry")}} 发生更改时触发。它提供对导航类型以及导航的上一个历史记录条目的访问。
- {{domxref("NavigationDestination")}} {{Experimental_Inline}}
  - : 表示当前导航中正在导航到的目的地。
- {{domxref("NavigationHistoryEntry")}} {{Experimental_Inline}}
  - : 代表单个导航历史记录条目。
- {{domxref("NavigationTransition")}} {{Experimental_Inline}}
  - : 代表正在进行的导航。

## 对其他接口的扩展

- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回当前 `window` 关联的 {{domxref("Navigation")}} 对象。这是导航 API 的入口点。

## 示例

> [!NOTE]
> 查看 Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)。

### 使用 `intercept()` 处理导航

```js
navigation.addEventListener("navigate", (event) => {
  // 如果此导航不应被拦截，则提前退出，例如，如果导航是跨源的，或者是下载请求
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // URL 已更改，因此在获取新内容时显示占位符，例如旋转器或加载中的页面
        renderArticlePagePlaceholder();

        // 获取新内容并在准备就绪时显示
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

### 使用 `scroll()` 处理滚动

在这个拦截导航的例子中，`handler()` 函数首先获取并呈现一些文章内容，然后获取并呈现一些次要内容。尽快将页面滚动到主要文章内容以便用户与其交互是有意义的，而不是等到次要内容也呈现后再滚动。为了实现这一点，我们在两者之间添加了 {{domxref("NavigateEvent.scroll", "scroll()")}} 调用。

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(event)) {
    return;
  }
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);

        event.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
      },
    });
  }
});
```

### 遍历到特定的历史记录条目

```js
// 在 JS 启动时，获取第一个加载页面的键，以便用户可以随时返回该页面。
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// 导航离开，但按钮始终有效。
await navigation.navigate("/another_url").finished;
```

### 更新状态

```js
navigation.navigate(url, { state: newState });
```

或

```js
navigation.reload({ state: newState });
```

或者如果状态独立于导航或重新加载：

```js
navigation.updateCurrentEntry({ state: newState });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
