---
title: 使用历史记录 API
slug: Web/API/History_API/Working_with_the_History_API
---

{{DefaultAPISidebar("History API")}}

{{DOMxRef("History.pushState", "pushState()")}} 和 {{DOMxRef("History.replaceState", "replaceState()")}} 方法分别添加和修改历史条目。这些方法与 {{domxref("Window/popstate_event", "popstate")}} 事件一起工作。

## 添加和修改历史记录

使用 {{DOMxRef("History.pushState", "pushState()")}} 可以改变在你改变状态后创建的 {{domxref("XMLHttpRequest")}} 对象的 HTTP 标头中使用的 referrer。referrer 将是创建 {{domxref("XMLHttpRequest")}} 对象时其窗口为 `this` 的文档的 URL。

### pushState() 方法示例

假设 `https://mozilla.org/foo.html` 执行下面的 JavaScript:

```js
const stateObj = {
  foo: "bar",
};

history.pushState(stateObj, "page 2", "bar.html");
```

这将导致地址栏显示 `https://mozilla.org/bar.html`，但不会导致浏览器加载 `bar.html` 或甚至检查 `bar.html` 是否存在。

假设现在用户导航到 `https://google.com`，然后点击了**返回**按钮。这时，地址栏将显示 `https://mozilla.org/bar.html`，`history.state` 将包含 `stateObj`。`popstate` 事件将不会被触发，因为页面已经被重新加载。页面本身将看起来像 `bar.html`。

如果用户再次点击**返回**，URL 将变为 `https://mozilla.org/foo.html`，并且文档将得到一个 `popstate` 事件，这次是一个 `null` 状态对象。在这里，返回也不会改变文档的内容，尽管文档在收到 `popstate` 事件后可能会手动更新其内容。

### pushState() 方法

`pushState()` 需要三个参数：一个**状态对象**；一个**标题**（目前忽略）；以及一个（可选）**URL**。

让我们详细地解释一下这三个参数

- **状态对象**
  - : 状态对象是一个 JavaScript 对象，它与由 `pushState()` 创建的新历史条目相关。每当用户浏览到新的状态时，一个 `popstate` 事件被触发，该事件的 `state` 属性包含历史条目的状态对象的副本。状态对象可以是任何可以被序列化的东西。因为 Firefox 将状态对象保存在用户的磁盘上，以便在用户重新启动浏览器后恢复，所以我们对状态对象的序列化表示法规定了 640k 字符的大小限制。如果你传递给 `pushState()` 的状态对象的序列化表示大于这个大小，该方法将抛出一个异常。如果你需要比这更多的空间，我们鼓励你使用 `sessionStorage` 和/或 `localStorage`。
- **标题**
  - : [除了 Safari，所有的浏览器目前都忽略了这个参数](https://github.com/whatwg/html/issues/2174)，尽管它们在未来可能会使用这个参数。在这里传递空字符串应该是安全的，可以避免将来对该方法的修改。另外，你也可以为你要移动的状态传入一个简短的标题。
- **URL**
  - : 新的历史条目的 URL 是由这个参数给出的。注意，在调用 `pushState()` 后，浏览器不会尝试加载这个 URL，但它可能会在以后尝试加载这个 URL，例如在用户重新启动浏览器后。新的 URL 不需要是绝对的；如果它是相对的，它就会相对于当前的 URL 进行解析。新的 URL 必须与当前的 URL 同源；否则，`pushState()` 将抛出一个异常。这个参数是可选的；如果没有指定它，它将被设置为文档的当前 URL。

在某种意义上，调用 `pushState()` 类似于设置 `window.location = "#foo"`，因为两者都将创建并激活与当前文档相关的另一个历史条目。

但是 `pushState()` 有几条优势：

- 新的 URL 可以是与当前 URL 同源的任何 URL。相比之下，只有当你只修改锚点值时，设置 `window.location` 使你保持在同一个 {{ domxref("document") }}。
- 如果你不愿意，你不必改变 URL。相反，设置 `window.location = "#foo";` 只在当前锚点值不是 `#foo` 的情况下创建一个新的历史条目。
- 你可以将任意的数据与你的新历史条目联系起来。使用基于哈希的方法，你需要将所有的相关数据编码成一个短字符串。
- 如果 `title` 随后被浏览器使用，这个数据可以被利用（而锚点值会独立于每个历史条目）。

请注意，`pushState()` 永远不会触发 `hashchange` 事件，即使新的 URL 与旧的 URL 只在锚点值上有所不同。

在其他文档中，它创建了一个具有 `null` 命名空间 URI 的元素。

### replaceState() 方法

`history.replaceState()` 的操作与 `history.pushState()` 完全一样，只是 `replaceState()` 修改了当前的历史条目，而不是创建一个新的。注意，这并不妨碍在全局浏览器历史中创建一个新条目。

`replaceState()` 在你想更新当前历史条目的状态对象或 URL 以响应某些用户操作时特别有用。

### replaceState() 方法示例

假设 `https://mozilla.org/foo.html` 执行了下列 JavaScript 代码：

```js
const stateObj = {
  foo: "bar",
};
history.pushState(stateObj, "page 2", "bar.html");
```

上面这两行的解释可以在上面的 [_pushState() 方法的例子_](#pushstate_方法示例)部分找到。

然后，假设 `https://mozilla.org/bar.html` 执行了下列 JavaScript 代码：

```js
history.replaceState(stateObj, "page 3", "bar2.html");
```

这将导致 URL 栏显示 `https://mozilla.org/bar2.html`，但不会导致浏览器加载 `bar2.html` 或甚至检查 `bar2.html` 是否存在。

假设现在用户导航到 `https://www.microsoft.com`，然后点击**返回**按钮。此时，URL 栏将显示 `https://mozilla.org/bar2.html`。如果用户现在再次点击**返回**，URL 栏将显示`https://mozilla.org/foo.html`，完全绕过了 `bar.html`。

### popstate 事件

每次活动的历史条目发生变化时，都会向窗口派发一个 `popstate` 事件。如果被激活的历史条目是通过调用 {{DOMxRef("History.pushState", "pushState")}} 创建的，或通过调用 {{DOMxRef("History.replaceState", "replaceState")}} 影响的，`popstate` 事件的 `state` 属性包含历史条目的状态对象副本。

请参阅 {{domxref("Window/popstate_event", "popstate")}} 了解使用示例。

### 读取当前状态

当你的页面加载时，它可能有一个非空的状态对象。例如，如果页面设置了一个状态对象（使用 {{DOMxRef("History.pushState", "pushState()")}} 或 {{DOMxRef("History.replaceState", "replaceState()")}}），然后用户重新启动他们的浏览器，这种情况就会发生。当页面重新加载时，该页面将收到一个 `onload` 事件，但没有 `popstate` 事件。然而，如果你读取 {{DOMxRef("History.state", "history.state")}} 属性，你会重新得到 `popstate` 事件发生时应该得到的状态对象。

你可以使用 {{DOMxRef("History.state", "history.state")}} 属性读取当前历史条目的状态，而不需要等待 `popstate` 事件，像这样：

```js
const currentState = history.state;
```

## 参见

- [历史记录 API](/zh-CN/docs/Web/API/History_API)
- [历史导航示例](/zh-CN/docs/Web/API/History_API/Example)
- {{domxref("window.history", "history")}} 全局对象
