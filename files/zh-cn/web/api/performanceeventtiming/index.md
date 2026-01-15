---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
---

{{APIRef("Performance API")}}

事件计时 API 的 `PerformanceEventTiming` 接口用来观察用户交互触发的某些事件的延迟情况。

## 描述

此 API 通过提供某些事件类型（[见下文](#暴露的事件)）的时间戳和持续时间，实现对慢事件的可见性。例如，你可以监控用户操作与事件处理程序开始执行之间的时间，或事件处理程序自身的执行时间。

此 API 对于测量{{Glossary("Interaction to Next Paint", "交互至下一次绘制（INP）")}}特别有用：从用户与应用交互到浏览器实际响应该交互的最长时间（去除一些异常值）。

通常通过创建 {{domxref("PerformanceObserver")}} 实例来使用 `PerformanceEventTiming` 对象，然后调用其 [`observe()`](/zh-CN/docs/Web/API/PerformanceObserver/observe) 方法，传入 `"event"` 或 `"first-input"` 作为 [`type`](/zh-CN/docs/Web/API/PerformanceEntry/entryType) 选项的值。然后，`PerformanceObserver` 对象的回调将接收到一个 `PerformanceEventTiming` 对象列表，你可以对其进行分析。请参阅[下面的示例](#获取事件时间信息)以了解更多信息。

默认情况下，当 `PerformanceEventTiming` 条目的持续时间达到 104 毫秒或以上时，该条目会被暴露。研究表明，如果用户输入在 100 毫秒内未得到处理，则被认为是缓慢的，而 104 毫秒是大于 100 毫秒的第一个 8 的倍数（出于安全原因，此 API 四舍五入为最接近的 8 毫秒的倍数）。但是，你可以使用 [`observe()`](/zh-CN/docs/Web/API/PerformanceObserver/observe) 方法中的 `durationThreshold` 选项将 {{domxref("PerformanceObserver")}} 设置为不同的阈值。

此接口从其父级 {{domxref("PerformanceEntry")}} 继承方法和属性：

{{InheritanceDiagram}}

### 暴露的事件

事件计时 API 暴露以下事件类型：

<table>
  <tbody>
    <tr>
      <th scope="row">点击事件</th>
      <td>
        {{domxref("Element/auxclick_event", "auxclick")}}、{{domxref("Element/click_event", "click")}}、{{domxref("Element/contextmenu_event", "contextmenu")}}、{{domxref("Element/dblclick_event", "dblclick")}}
      </td>
    </tr>
    <tr>
      <th scope="row">合成事件</th>
      <td>
        {{domxref("Element/compositionend_event", "compositionend")}}、{{domxref("Element/compositionstart_event", "compositionstart")}}、{{domxref("Element/compositionupdate_event", "compositionupdate")}}
      </td>
    </tr>
    <tr>
      <th scope="row">拖放事件</th>
      <td>
        {{domxref("HTMLElement/dragend_event", "dragend")}}、{{domxref("HTMLElement/dragenter_event", "dragenter")}}、{{domxref("HTMLElement/dragleave_event", "dragleave")}}、{{domxref("HTMLElement/dragover_event", "dragover")}}、{{domxref("HTMLElement/dragstart_event", "dragstart")}}、{{domxref("HTMLElement/drop_event", "drop")}}
      </td>
    </tr>
    <tr>
      <th scope="row">输入事件</th>
      <td>
        {{domxref("Element/beforeinput_event", "beforeinput")}}、{{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <th scope="row">键盘事件</th>
      <td>
        {{domxref("Element/keydown_event", "keydown")}}、{{domxref("Element/keypress_event", "keypress")}}、{{domxref("Element/keyup_event", "keyup")}}
      </td>
    </tr>
    <tr>
      <th scope="row">鼠标事件</th>
      <td>
        {{domxref("Element/mousedown_event", "mousedown")}}、{{domxref("Element/mouseenter_event", "mouseenter")}}、{{domxref("Element/mouseleave_event", "mouseleave")}}、{{domxref("Element/mouseout_event", "mouseout")}}、{{domxref("Element/mouseover_event", "mouseover")}}、{{domxref("Element/mouseup_event", "mouseup")}}
      </td>
    </tr>
    <tr>
      <th scope="row">指针事件</th>
      <td>
        {{domxref("Element/pointerover_event", "pointerover")}}、{{domxref("Element/pointerenter_event", "pointerenter")}}、{{domxref("Element/pointerdown_event", "pointerdown")}}、{{domxref("Element/pointerup_event", "pointerup")}}、{{domxref("Element/pointercancel_event", "pointercancel")}}、{{domxref("Element/pointerout_event", "pointerout")}}、{{domxref("Element/pointerleave_event", "pointerleave")}}、{{domxref("Element/gotpointercapture_event", "gotpointercapture")}}、{{domxref("Element/lostpointercapture_event", "lostpointercapture")}}
      </td>
    </tr>
    <tr>
      <th scope="row">触摸事件</th>
      <td>
        {{domxref("Element/touchstart_event", "touchstart")}}、{{domxref("Element/touchend_event", "touchend")}}、{{domxref("Element/touchcancel_event", "touchcancel")}}
      </td>
    </tr>
  </tbody>
</table>

请注意，以下事件未包含在列表中，因为这些事件属于连续事件，无法在此阶段获得有意义的事件计数或性能指标：{{domxref("Element/mousemove_event", "mousemove")}}、{{domxref("Element/pointermove_event", "pointermove")}}、{{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}、{{domxref("Element/touchmove_event", "touchmove")}}、{{domxref("Element/wheel_event", "wheel")}}、{{domxref("HTMLElement/drag_event", "drag")}}。

要获取所有暴露的事件的列表，你还可以在 {{domxref("performance.eventCounts")}} 映射中查找键：

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## 构造函数

该接口没有自己的构造函数。请参阅[下方示例](#获取事件时间信息)，了解如何获取 `PerformanceEventTiming` 对象所包含的信息。

## 实例属性

此接口通过以下限定方式扩展了事件计时性能条目类型的以下 {{domxref("PerformanceEntry")}} 属性：

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("DOMHighResTimeStamp")}}，表示从 `startTime` 到下一次渲染绘制的时间（四舍五入到最接近的 8 毫秒）。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : 返回 `"event"`（对于长事件）或 `"first-input"`（对于第一次用户交互）。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : 返回关联事件的类型。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("DOMHighResTimeStamp")}}，表示关联事件的 [`timestamp`](/zh-CN/docs/Web/API/Event/timeStamp) 属性。这是事件创建的时间，可以被视为用户交互发生时间的代理。

该接口还支持以下属性：

- {{domxref("PerformanceEventTiming.cancelable")}} {{ReadOnlyInline}}
  - : 返回关联事件的 [`cancelable`](/zh-CN/docs/Web/API/Event/cancelable) 属性。
- {{domxref("PerformanceEventTiming.interactionId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回唯一标识触发相关事件的用户交互的 ID。
- {{domxref("PerformanceEventTiming.processingStart")}} {{ReadOnlyInline}}
  - 返回一个 {{domxref("DOMHighResTimeStamp")}}，表示事件调度开始的时间。要测量用户操作与事件处理程序开始运行之间的时间，请计算 `processingStart-startTime`。
- {{domxref("PerformanceEventTiming.processingEnd")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("DOMHighResTimeStamp")}}，表示事件调度结束的时间。要测量事件处理程序的运行时间，请计算 `processingEnd - processingStart`。
- {{domxref("PerformanceEventTiming.target")}} {{ReadOnlyInline}}
  - : 返回与该事件关联的最后一个目标，如果该目标尚未被移除。

## 实例方法

- {{domxref("PerformanceEventTiming.toJSON()")}}
  - : 返回 `PerformanceEventTiming` 对象的 JSON 表示形式。

## 示例

### 获取事件时间信息

要获取事件时间信息，请创建一个 {{domxref("PerformanceObserver")}} 实例，然后调用其 [`observe()`](/zh-CN/docs/Web/API/PerformanceObserver/observe) 方法，传入 `"event"` 或 `"first-input"` 作为 [`type`](/zh-CN/docs/Web/API/PerformanceEntry/entryType) 选项的值。需要将 `buffered` 设置为 `true` 才能访问用户代理在构建文档时缓冲的事件。然后，`PerformanceObserver` 对象的回调会接收到一个 `PerformanceEventTiming` 对象列表，你可以对其进行分析。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // 全程
    const duration = entry.duration;

    // 输入延迟（在处理事件之前）
    const delay = entry.processingStart - entry.startTime;

    // 同步事件处理时间
    // （开始和结束调度之间）
    const eventHandlerTime = entry.processingEnd - entry.processingStart;
    console.log(`总时长：${duration}`);
    console.log(`事件延迟：${delay}`);
    console.log(`事件处理程序执行时间：${eventHandlerTime}`);
  });
});

// 注册事件观察器
observer.observe({ type: "event", buffered: true });
```

你还可以设置不同的 [`durationThreshold`](/zh-CN/docs/Web/API/PerformanceObserver/observe#durationthreshold)。默认值为 104 毫秒，最小可能的持续时间阈值为 16 毫秒。

```js
observer.observe({ type: "event", durationThreshold: 16, buffered: true });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [交叉观察器 API](/zh-CN/docs/Web/API/Intersection_Observer_API)
- [页面可见性 API](/zh-CN/docs/Web/API/Page_Visibility_API)
