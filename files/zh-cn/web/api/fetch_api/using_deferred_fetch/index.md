---
title: 使用延迟 Fetch
slug: Web/API/Fetch_API/Using_Deferred_Fetch
l10n:
  sourceCommit: a417ab306b1c4c675959ff77be5f685bf991e3ae
---

{{DefaultAPISidebar("Fetch API")}}

**`fetchLater()` API** 提供了一个用于请求延迟获取（fetch）的接口，该请求可在指定时间后发送，或者在页面关闭或导航离开时发送。

## 概述

开发者通常需要将数据发回（或发送信标）至服务器，尤其是在用户访问页面结束时——例如，用于分析服务。实现这一目标的方法有多种：从向页面添加 1 像素的 {{HTMLElement("img")}} 元素，到使用 {{domxref("XMLHttpRequest")}}，再到专用的{{domxref("Beacon API", "信标 API", "", "nocode")}}，以及 {{domxref("Fetch API", "Fetch API", "", "nocode")}} 本身。

问题在于，所有这些方法在处理访问结束时的信标发送时都存在可靠性问题。虽然信标 API 和 Fetch API 的 {{domxref("Request.keepalive", "keepalive")}} 属性在文档被销毁时仍尝试发送数据（在此情境下已尽最大努力），但这仅解决了部分问题。

另一个更难解决的部分在于确定*何时*发送数据，因为在页面的生命周期中，并没有一个理想的时机来调用 JavaScript 调用发送信标：

- {{domxref("Window.unload_event", "unload")}} 和 {{domxref("Window.beforeunload_event", "beforeunload")}} 事件并不可靠，且被多个主要浏览器直接忽略。
- {{domxref("Window.pagehide_event", "pagehide")}} 和 {{domxref("document.visibilitychange_event", "visibilitychange")}} 事件虽然更可靠，但在移动平台上仍存在问题。

这意味着希望通过信标可靠地发送数据的开发者，必须比理想情况更频繁地发送数据。例如，他们可能会在每次发生变化时发送信标，即使页面尚未达到最终值。这会带来网络使用、服务器处理以及在服务器上合并或丢弃过期信标等方面的开销。

或者，开发者也可以选择接受一定程度的缺失数据——具体可通过以下方式实现：

- 在指定的截止时间后发送信标，且不再收集后续数据。
- 在页面生命周期结束时发送信标，但接受这种做法有时可能不可靠。

`fetchLater()` API 扩展了 {{domxref("Fetch API", "Fetch API", "", "nocode")}}，允许提前设置获取请求。这些延迟获取在发送之前可以更新，从而使有效载荷反映要发送的最新数据。

随后，当标签页关闭或导航离开时，浏览器会发送信标，若指定了时间，则会在设定时间后发送。这既避免了多次发送信标，又在合理预期范围内确保了信标的可靠性（即排除浏览器进程因崩溃而意外关闭的情况）。

如果不再需要延迟获取，也可以使用 {{domxref("AbortController")}} 中止，从而避免进一步的不必要开销。

## 配额

延迟获取会在标签页关闭时被批量处理，并被一次性发送；此时，用户无法中止它们。为防止文档滥用此带宽在网络上发送无限量的数据，顶级文档的总配额上限为 640KiB。

`fetchLater()` 的调用者应该采取防御性措施，并在几乎所有情况下捕获 `QuotaExceededError` 错误，特别是如果他们嵌入了第三方 JavaScript。

由于此上限使延迟获取带宽成为一种稀缺资源，且需要由多个报告源（例如，多个 RUM 库）以及来自多个源的子框架共享，因此平台提供了该配额的合理默认分配方案。此外，它还提供了 {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} 和 {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)指令，以便在需要时进行不同的分配。

`fetchLater()` 的总体配额为每个文档 640KiB。默认情况下，这被分为 512KiB 的顶级配额和 128KiB 的共享配额：

- 默认情况下，512KiB 的顶级配额用于顶级文档以及使用该源的直接子框架发出的任何 `fetchLater()` 请求。
- 默认情况下，128KiB 共享配额默认用于在跨源子框架（例如，`<iframe>`、`<object>`、`<embed>` 和 `<frame>` 元素）中发出的任何 `fetchLater()` 请求。

`fetchLater()` 请求可以发送到任何 URL，并不受限于与文档或子框架相同的源，因此必须区分在顶级文档内容中发出的请求（无论是针对第一方还是第三方源）与在子框架中发出的请求。

例如，如果顶级 `a.com` 文档包含一个向 `analytics.example.com` 发出 `fetchLater()` 请求的 `<script>`，则此请求将受顶级文档 512KiB 限制的约束。反之，如果顶级文档嵌入了一个源为 `analytics.example.com` 的 `<iframe>`，该 iframe 发出 `fetchLater()` 请求，则该请求将受 128KiB 限制的约束。

### 按报告源和子框架的配额限制

顶级 512KiB 配额中只有 64KiB 可以同时用于同一报告源（请求 URL 的源）。此限制可防止第三方库在尚未有数据发送时就趁机预留配额。

默认情况下，每个跨源子框架会从共享的 128KiB 配额中获得 8KiB 配额，该配额在子框架添加到 DOM 时分配（无论该子框架中是否会使用 `fetchLater()`）。这意味着，通常情况下，只有前 16 个添加到页面中的跨源子框架可以使用 `fetchLater()`，因为它们将耗尽 128KiB 配额。

### 通过共享顶级配额增加子框架配额

顶级源可以为选定的跨源子框架提供 64KiB 的增加配额，该配额从更大的顶级 512KiB 限制中扣除。实现方式是在 {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} 权限策略指令中列出这些源。该配额在子框架添加到 DOM 时分配，从而减少了顶级文档和直接同源子框架的可用配额。多个同源子域可以各自获得 64KiB 配额。

### 限制共享配额

顶级源还可以通过在 {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} 权限策略中列出特定源，将 128KiB 共享配额限制为指定的跨源子框架。此外，它还可以通过将 {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} 权限策略设置为 `()` 来撤销整个 128KiB 默认子框架配额，并将完整的 640KiB 配额保留给自己和任何指定的 `deferred-fetch` 多个来源。

### 将配额委托给子框架的子框架

默认情况下，子框架的子框架不会被分配配额，因此无法使用 `fetchLater()`。被分配了增加的 64KiB 配额的子框架可以通过设置自己的 `deferred-fetch` 权限策略，将完整的 64KiB 配额委托给更深层的子框架，并允许它们使用 `fetchLater()`。它们只能将完整配额委托给更深层的子框架，而不能分批委派，也无法指定新的配额。使用最小 8KiB 配额的子框架不能将配额委托给子框架。要获得委托配额，子孙框架必须同时包含在顶级和子框架的 `deferred-fetch` {{httpheader('Permissions-Policy')}} 指令中。

### 当配额超出时

当配额超出时，若调用 {{domxref('Window.fetchLater()','fetchLater()')}} 方法启动延迟请求时会抛出 `QuotaExceededError`。

权限策略检查与配额检查无法区分。无论是因为实际配额超限，还是该源通过权限策略被限制了配额，调用 `fetchLater()` 都会抛出 `QuotaExceededError`。

`fetchLater()` 的调用方应采取防御性措施，并在几乎所有情况下都应捕获 `QuotaExceededError` 错误，尤其是在嵌入第三方 JavaScript 时。

## 配额示例

### 使用最小配额

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. 当 `<iframe src="https://b.com/page">` 被添加到顶级文档时，会从顶级的 512KiB 限制中获得 64KiB。
2. 一个 `<iframe src="https://c.com/page">` 未被列入列表，因此在添加到顶级文档时，将从 128KiB 共享限制中获得 8KiB。
3. 另外 15 个跨源 iframe 在添加到顶级文档时各自获得 8KiB（类似于 `c.com`）。
4. 下一个跨源 iframe 将不会获得任何配额。
5. 如果其中一个跨源 iframe 被移除，其延迟获取将被发送。
6. 由于配额再次可用，下一个跨源 iframe *将*获得 8KiB 配额。

### 将最小配额限制为指定源

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` 被添加到顶级文档时获得 8KiB。
2. `<iframe src="https://c.com/page">` 被添加到顶级文档时未被分配配额。
3. 顶级文档及其同源后代最多可以使用 512KiB。

### 通过顶级例外完全撤销最小配额

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` 被添加到顶级文档时获得 64KiB。
2. `<iframe src="https://c.com/page">` 被添加到顶级文档时不获得任何配额。
3. 顶级文档及其同源后代最多可以使用完整的 640KiB，但如果创建 `b.com` 子框架，则减少到 574KiB（如果创建多个 `b.com` 子框架，每个将被分配 64KiB 配额，则配额会更少）。

### 完全撤销最小配额且不作任何例外

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. 顶级文档及其同源后代最多可以使用完整的 640KiB。
2. 子框架不会分配任何配额，且无法使用 `fetchLater()`。

### 同源子框架与顶级共享配额并可以委托给子框架

假设 `a.com` 上的顶级文档，嵌入了一个 `a.com` 的子框架，该子框架又嵌入了一个 `b.com` 的子框架，且没有明确的权限策略。

1. `a.com` 的顶级文档具有默认的 512KiB 配额。
2. `<iframe src="https://a.com/embed">` 被添加到顶级文档时共享 512KiB 配额。
3. `<iframe src="https://b.com/embed">` 被添加到顶级文档时获得 8KiB 配额。

### 同源子框架被跨源子框架分隔时不能与顶级文档共享配额

假设 `a.com` 上的顶级文档，嵌入了一个 `<iframe src="https://b.com/">`，该子框架又嵌入了一个 `<iframe src="https://a.com/embed">`，且没有明确的权限策略。

1. `a.com` 的顶级文档具有默认的 512KiB 配额。
2. `<iframe src="https://b.com/">` 共享 8KiB 配额。
3. `<iframe src="https://a.com/embed">` 未获得配额；尽管其与顶级源同源，但被跨源框架隔开。

### 子框架的子框架默认不获得配额

假设 `a.com` 上的顶级文档，嵌入了一个 `<iframe src="https://b.com/">`，该子框架又嵌入了一个 `<iframe src="https://c.com/">`，且没有明确的权限策略。

1. `a.com` 的顶级框架具有默认的 512KiB 配额。
2. `<iframe src="https://b.com/">` 从默认共享配额中获得 8KiB。
3. `<iframe src="https://c.com/">` 不获得任何配额。

### 将完整配额授予更深层子框架

假设 `a.com` 上的顶级文档，嵌入了一个 `<iframe src="https://b.com/">`，该子框架又嵌入了一个 `<iframe src="https://c.com/">`。

假设 `a.com` 具有以下权限策略：

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

并且，假设 `b.com` 具有以下权限策略：

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. `a.com` 的顶级框架具有默认的 512KiB 配额。
2. `<iframe src="https://b.com/">` 从默认配额中获得 64KiB。
3. `<iframe src="https://b.com/">` 将其全部的 8KiB 配额委托给 `c.com`。`b.com` 无法使用 `fetchLater()`。
4. `<iframe src="https://c.com/">` 获得 8KiB 配额。

### 重定向不会转移配额

假设 `a.com` 上的顶级文档，嵌入了一个 `<iframe src="https://b.com/">`，该子框架重定向到 `c.com`，且没有明确的顶级权限策略。

1. `a.com` 的顶级框架具有默认的 512KiB 配额。
2. `<iframe src="https://b.com/">` 从默认共享配额中获得 8KiB。
3. 当 `<iframe src="https://b.com/">` 重定向到 `c.com` 时，这 8KiB 配额不会转移给 `c.com`，但也不会释放。

### 沙箱化的同源 iframe 实际上是独立的源

例如，如果以下 `<iframe>` 嵌入在 `https://www.example.com` 上：

```html
<iframe src="https://www.example.com/iframe" sandbox="allow-scripts"></iframe>
```

这不会被认为是“同源”，尽管它与顶级文档托管在同一源上，但由于 `<iframe>` 处于沙箱化环境中。因此，默认情况下，应从总计 128KiB 的共享配额中为其分配 8KiB 的配额。

### 禁止 iframe 使用 `fetchLater()`

你可以使用 `<iframe>` 的 [`allow`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#allow) 属性来阻止 `fetchLater()` 配额分配给 `<iframe>`：

```html
<iframe
  src="https://www.example.com/iframe"
  allow="deferred-fetch;deferred-fetch-minimal;"></iframe>
```

需要使用 `allow="deferred-fetch"` 指令来阻止同源 iframe 用完 512KiB 配额，而 `allow="deferred-fetch-minimal"` 指令则用于防止跨源 iframe 耗尽 128KiB 配额。同时包含这两条指令将阻止两种配额被使用，无论 `src` 值如何。

### 抛出 `QuotaExceededError` 的示例

```js
// 每个源最多 64KiB
const url = "<72KiB 的字符>";
fetchLater(url);

// 每个源最多 64KiB，包括标头
fetchLater("https://origin.example.com", { headers: headersExceeding64KiB });

// 每个源最多 64KiB，包括正文和标头
fetchLater("<32KiB 的字符>", { headers: headersExceeding32KiB });

// 每个源最多 64KiB，包括正文
fetchLater("https://origin.example.com", {
  method: "POST",
  body: bodyExceeding64KiB,
});

// 每个源最多 64KiB，包括正文和自动添加的标头
fetchLater("<62KiB 的字符>" /* 包含 3kb referrer */);
```

### 最终抛出 `QuotaExceededError` 的示例

在以下包含于顶级文档中的请求序列中，前两个请求会成功，但第三个请求会抛出异常。这是因为，尽管总配额 640KiB 尚未超出，但第三个请求超出了 `https://a.example.com` 的报告源配额，因此会抛出异常。

```js
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://b.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
```

### 子框架重定向回顶级源时，允许使用顶级配额

假设 `a.com` 上的顶级文档，嵌入了 `<iframe src="https://b.com/">`，该子框架重定向到 `a.com`，且没有明确的顶级权限策略：

1. `a.com` 的顶级框架具有默认的 512KiB 配额。
2. `<iframe src="https://b.com/">` 将从默认的 128KiB 共享配额中获得 8KiB。
3. 当 `<iframe src="https://b.com/">` 重定向到 `a.com` 时，8KiB 不会转移给 `a.com`，但它可以再次共享完整的顶级配额，并且之前分配的 8KiB 配额会被释放。
