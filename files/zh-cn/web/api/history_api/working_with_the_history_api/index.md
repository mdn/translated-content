---
title: 使用历史记录 API
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: 56bbf2804abdfdbf9ad93386ba4c956196d06a37
---

{{DefaultAPISidebar("History API")}}

历史记录 API 使网站能够与浏览器的会话历史记录（即用户在给定窗口中访问过的页面列表）进行交互。当用户通过点击链接等方式访问新页面时，这些新页面就会被添加到会话历史记录中。用户还可以使用浏览器的“后退”和“前进”按钮在历史记录中来回移动。

历史记录 API 中定义的主要接口是 {{domxref("History")}} 接口，它定义了两套截然不同的方法：

1. 在会话历史记录中导航到页面的方法：
   - {{domxref("History.back()")}}
   - {{domxref("History.forward()")}}
   - {{domxref("History.go()")}}

2. 修改会话历史记录的方法：
   - {{domxref("History.pushState()")}}
   - {{domxref("History.replaceState()")}}

在本指南中，我们将只关注第二组方法，因为这些方法的行为更为复杂。

`pushState()` 方法会向会话历史记录添加新条目，而 `replaceState()` 方法则会更新当前页面的会话历史记录条目。这两种方法都接收一个 `state` 参数，该参数可包含任何{{Glossary("Serializable_object", "可序列化对象")}}。当浏览器导航到该历史条目时，浏览器会触发 {{domxref("Window.popstate_event", "popstate")}} 事件，其中包含与该条目相关的状态对象。

这些 API 的主要目的是支持像{{Glossary("SPA", "单页应用")}}这样的网站，它们使用 JavaScript API（如 {{domxref("fetch()")}}）来更新页面的新内容，而不是加载整个新页面。

## 单页应用和会话历史记录

传统上，网站是以页面集合的形式实现的。当用户通过点击链接浏览网站的不同部分时，浏览器每次都会加载一个全新的页面。

虽然这对许多网站来说很好，但也有一些缺点：

- 如果只需要更新页面的一部分，每次加载整个页面的效率会很低。
- 跨页面导航时很难保持应用程序状态

由于这些原因，{{Glossary("SPA", "单页应用")}}（SPA）是一种流行的 web 应用程序模式，在这种模式中，网站由一个页面组成，当用户点击链接时，页面会：

1. 阻止加载新页面的默认行为
2. {{domxref("fetch()", "获取", "", "nocode")}}要显示的新内容
3. 用新内容更新页面

例如：

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    // 阻止新页面加载
    event.preventDefault();
    try {
      // 获取新内容
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      // 用新内容更新页面
      displayContent(json);
    } catch (err) {
      console.error(err);
    }
  }
});
```

在该单击处理器中，如果链接包含数据属性 `"data-creature"`，我们就会使用该属性的值来获取包含页面新内容的 JSON 文件。

JSON 文件可能如下所示：

```json
{
  "description": "Bald eagles are not actually bald.",
  "image": {
    "src": "images/eagle.jpg",
    "alt": "A bald eagle"
  },
  "name": "Eagle"
}
```

`displayContent()` 函数使用 JSON 内容更新页面：

```js
// 使用新内容更新页面
function displayContent(content) {
  document.title = `生物：${content.name}`;

  const description = document.querySelector("#description");
  description.textContent = content.description;

  const photo = document.querySelector("#photo");
  photo.setAttribute("src", content.image.src);
  photo.setAttribute("alt", content.image.alt);
}
```

问题在于，它破坏了浏览器“后退”和“前进”按钮的预期行为。

从用户的角度来看，他们点击了一个链接，页面就更新了，所以看起来像是一个新页面。如果用户按下浏览器的“后退”按钮，就会返回到点击链接之前的状态。

但在浏览器看来，最后一个链接并没有加载新页面，因此“后退”按钮会将浏览器带回到用户打开 SPA 之前加载的页面。

这正是 `pushState()`、`replaceState()` 和 `popstate` 事件所要解决的问题。它们使我们能够合成历史条目，并在当前会话历史条目更改为这些条目之一（例如，由于用户按下了“后退”或“前进”按钮）时收到通知。

## 使用 `pushState()`

我们可以像下面这样在单击事件处理器中添加历史记录条目：

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    event.preventDefault();
    try {
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      displayContent(json);
      // 向历史记录中添加新条目
      // 模拟了新页面的加载
      history.pushState(json, "", creature);
    } catch (err) {
      console.error(err);
    }
  }
});
```

这里，我们使用三个参数调用了 `pushState()`：

- `json`：这是我们刚刚获取的内容。它将与历史条目一起存储，之后将作为 {{domxref("PopStateEvent.state", "state")}} 属性包含在传递给 `popstate` 事件处理器的参数中。
- `""`：这是与传统网站向后兼容所必需的，应始终为空字符串。
- `creature`：这将用作条目的 URL。它将显示在浏览器的 URL 栏中，并在页面发出的任何 HTTP 请求中用作 {{httpheader("Referer")}} 标头的值。请注意，这必须与页面{{Glossary("Same-origin policy", "同源")}} 。

## 使用 `popstate` 事件

假设用户：

1. 点击了 SPA 中的一个链接，因此我们使用 `pushState()` 更新页面并添加历史记录条目 A
2. 点击 SPA 中的另一个链接，因此我们使用 `pushState()` 更新页面并添加历史记录条目 B
3. 按下“后退”按钮

现在，新的当前历史记录条目是 A，因此浏览器触发了 `popstate` 事件，事件处理器参数包括我们在处理导航到 A 时传递给 `pushState()` 的 JSON，这意味着我们可以通过这样的事件处理器来恢复正确的内容：

```js
// 处理前进/回退按钮
window.addEventListener("popstate", (event) => {
  // 如果提供了一个状态（state），我们“模拟”一个页面并更新当前页面
  if (event.state) {
    // 模拟前一个页面加载
    displayContent(event.state);
  }
});
```

## 使用 `replaceState()`

我们还需要添加一项内容。当用户加载 SPA 时，浏览器会添加一个历史记录条目。由于这是一次实际的页面加载，因此该条目没有与之相关的状态。因此，假设用户：

1. 加载 SPA：浏览器添加历史记录条目
2. 点击 SPA 中的一个链接：点击处理程序会更新页面，并使用 `pushState()` 添加一个历史记录条目
3. 按下“后退”按钮

现在我们想回到 SPA 的初始状态，但由于这是同一文档中的导航，页面不会被重新加载，而且初始页面的历史条目没有状态，我们无法使用 `popstate` 恢复它。

解决办法是使用 `replaceState()` 为初始页面设置状态对象。例如：

```js
// 在页面加载时创建状态，并用其替换当前历史记录
const image = document.querySelector("#photo");
const initialState = {
  description: document.querySelector("#description").textContent,
  image: {
    src: image.getAttribute("src"),
    alt: image.getAttribute("alt"),
  },
  name: "Home",
};
history.replaceState(initialState, "", document.location.href);
```

在页面加载时，我们会收集页面的所有部分，以便在用户返回 SPA 的起点时还原这些部分。这与我们在处理其他导航时获取的 JSON 结构相同。我们将这个 `initialState` 对象传递给 `replaceState()`，这样就能有效地将状态对象添加到当前历史记录条目中。

当用户返回到我们的起点时，`popstate` 事件将包含此初始状态，我们可以使用 `displayContent()` 函数更新页面。

## 一个完整的示例

你可以在 <https://github.com/mdn/dom-examples/tree/main/history-api> 中看到完整的示例，并在 <https://mdn.github.io/dom-examples/history-api/> 访问到实时运行的版本。

## 参见

- [历史记录 API](/zh-CN/docs/Web/API/History_API)
- {{domxref("window.history", "history")}} 全局对象
