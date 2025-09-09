---
title: 与嵌入框架进行通信
slug: Web/API/Fenced_frame_API/Communication_with_embedded_frames
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{DefaultAPISidebar("Fenced Frame API")}}

本文提供关于嵌入器与嵌入不同类型框架（即 {{htmlelement("iframe")}} 和 {{htmlelement("fencedframe")}}）中的内容之间的通信方式有何不同以及传递的数据如何存储的信息。

## 如何在嵌入器与 `<iframe>` 之间进行通信

![下图说明本地存储与共享存储之间的区别以及与 iframe 的通信方式，具体解释如下](iframe-storage-communication.png)

当第三方代码被嵌入到 `<iframe>` 中时，`<iframe>` 和嵌入方可以自由地相互发送消息，将请求数据写入客户端的[共享存储](/zh-CN/docs/Web/API/Shared_Storage_API)中。嵌入方可以向 `<iframe>` 发送请求，使用 {{domxref("Window.postMessage()")}} 以通过跨文档通信通道将数据写入其自身的第三方存储中。第三方也可以通过发送 `postMessage()` 请求与嵌入方进行通信。

在 `<iframe>` 中，你可以监听来自嵌入方的 [`message`](/zh-CN/docs/Web/API/Window/message_event) 事件。当嵌入方使用 `postMessage()` 向 `<iframe>` 发送消息时，`<iframe>` 可以接收这些数据并将其存储在自身的客户端共享存储中。相反，`<iframe>` 也可以发送一条消息，嵌入方可以监听这条消息，并通过将数据写入其共享存储来做出响应。

## 如何在嵌入方与 `<fencedframe>` 之间进行通信

围栏框架（Fenced frame）旨在用于诸如通过[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 和 {{domxref("WindowSharedStorage.selectURL()")}} 选择并展示定向广告等场景。页面上的 `<fencedframe>` 与 `<fencedframe>` 外部的其他页面之间的通信是故意受到限制的，但存在一种嵌入方与共享存储 worklet 之间的通信方法——{{domxref("FencedFrameConfig.setSharedStorageContext()")}}。

> [!NOTE]
> 在同一个 `<fencedframe>` 树结构中，允许各框架之间进行通信。例如，根 `<fencedframe>` 可以向其自己树结构中的子 `<iframe>` 发送消息，而子 `<iframe>` 也可以向父 `<fencedframe>` 发送消息。

让我们来看一个更复杂的例子，使用 `selectURL` 输出门操作（gate operation）来在 `<fencedframe>` 中渲染广告。

![一个复杂的嵌入情况：嵌入方嵌入了一个 iframe，该 iframe 又嵌入了一个围栏框架，而该围栏框架又嵌入了一个 iframe](multiple-embed-levels.png)

在这个例子中，发布商（Publisher）请求第三方内容提供商（Content Provider）在页面上渲染一些内容（Content）。使用 {{domxref("WindowSharedStorage.selectURL()")}} 选择的内容将在 `<fencedframe>` 中渲染，并且该内容包含一个来自衡量服务提供商（Measurement）的 `<iframe>`。请注意，发布商可以代表任何嵌入第三方 `<fencedframe>` 的实体。同样，衡量服务提供商代表在任何不同第三方的 `<fencedframe>` 中运行的任何嵌套第三方代码。

为了将数据传递到 `<fencedframe>` 中以便在共享存储 worklet 中使用，嵌入方可以在 {{domxref("FencedFrameConfig")}} 中设置数据。该值将在共享存储 worklet 内部作为 {{domxref("WorkletSharedStorage.context")}} 提供。此数据在 worklet 之外不可用，并且只能在共享存储 worklet 提供的安全和私密环境中访问。

![发布商使用 selectURL 创建了一个 FencedFrameConfig，该配置可以通过 setSharedStorageContext 设置上下文数据，然后这些数据将在共享存储 worklet 中可用](share-contextual-data.png)

当 `selectURL()` 调用返回 `FencedFrameConfig` 时，框架嵌入方可以通过调用 `setSharedStorageContext(data)` 传递数据：

```js
const fencedFrameConfig = await window.sharedStorage.selectURL(
  "creative-rotation",
  urls,
  {
    // …
    resolveToConfig: true,
  },
);

fencedFrameConfig.setSharedStorageContext("some-data");

// 导航至配置所指定的围栏框架。
document.getElementById("my-fenced-frame").config = fencedFrameConfig;
```

必须在将预期的 `<fencedframe>` 元素接收者的 `config` 属性设置为 `fencedFrameConfig` 之前，在 `fencedFrameConfig` 上调用 `setSharedStorageContext(data)`，因为这会触发框架的导航。

在共享存储 worklet 内部，可以访问 `WorkletSharedStorage.context` 来检索该数据：

```js
class ReportingOperation {
  async run() {
    sharedStorage.set("some-data-from-embedder", sharedStorage.context);
  }
}
register("send-report", ReportingOperation);
```
