---
title: Document：visibilitychange 事件
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef}}

当其选项卡的内容变得可见或被隐藏时，会在 document 上触发 `visibilitychange` 事件。

该事件不可取消。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## 事件类型

通用 {{domxref("Event")}}。

## 使用说明

该事件不包括文档的更新可见性状态，但是你可以从文档的 {{domxref("Document.visibilityState", "visibilityState")}} 属性中获取该信息。

当用户导航到新页面、切换标签页、关闭标签页、最小化或关闭浏览器，或者在移动设备上从浏览器切换到不同的应用程序时，该事件就以 `visibilityState` 为 `hidden` 的状态触发。过渡到 `hidden` 是页面能可靠观察到的最后一个事件，因此开发人员应将其视为用户会话的可能结束（例如，用于[发送分析数据](/zh-CN/docs/Web/API/Navigator/sendBeacon)）。

向 `hidden` 过渡也是页面停止用户界面更新和停止用户不想在后台运行的任何任务的好时机。

## 示例

### 在文档转向隐藏状态时暂停音乐

本示例的音频在页面隐藏时暂停播放，在页面再次可见时恢复播放。

有关完整示例，参见[页面可见性 API：在页面隐藏时暂停音频](/zh-CN/docs/Web/API/Page_Visibility_API#在页面隐藏时暂停音频)文档。

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else {
    // 如果音频处于“隐藏播放”，则恢复播放。
    if (playingOnHide) {
      audio.play();
    }
  }
});
```

### 在文档转向隐藏状态时发送会话结束分析报告

本示例将 `hidden` 转换视为用户会话的结束，并使用 {{domxref("Navigator.sendBeacon()")}} API 发送相应的分析结果。

```js
document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [页面可见性 API](/zh-CN/docs/Web/API/Page_Visibility_API)
- {{domxref("Document.visibilityState")}}
- {{domxref("Document.hidden")}}
- [使用页面可见性，不丢失用户和应用程序状态](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/)详细解释了为什么应该使用 `visibilitychange`，而不是 `beforeunload`/`unload`。
- [页面生命周期 API](https://developer.chrome.google.cn/docs/web-platform/page-lifecycle-api) 提供了在 web 应用程序中处理页面生命周期行为的最佳实践指导。
