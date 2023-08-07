---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
---

{{APIRef("High Resolution Time")}}

**`DOMHighResTimeStamp`** 是一个 double 类型，用于存储毫秒级的时间值。这种类型可以用来描述离散的时间点或者一段时间（两个离散时间点之间的时间差）。

这种基于毫秒精度的时间，应该精确到 5 微秒级别，其数值的小数部分代表了一个毫秒的小数（也就是微秒）。但是，如果浏览器不能提供精确到 5 微秒的时间值 (例如，由于硬件或软件的限制)，浏览器可以在表示一个以毫秒为单位的时间值时，精确到毫秒级别。同时要注意，在下一节中提到，由浏览器首选项控制的**降低时间精度**，是为了防止时序攻击和记录指纹。

此外，如果用户代理运行所在的设备或操作系统不具备精确到微秒级别的时钟，那么他们只能精确到毫秒。

## 降低时间精度

为了提供对抗时序攻击和记录指纹的保护措施，时间戳可能会四舍五入，这取决于浏览器设置。在火狐浏览器中，`privacy.reduceTimerPrecision` 首选项默认被启用，并且在火狐浏览器 59 版本中，它的默认值是 20 微秒。在火狐浏览器 60 版本中，这个默认值将是 2 毫秒。

```js
// reduced time precision (2ms) in Firefox 60
event.timeStamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

在火狐浏览器中，你也可以启用 `privacy.resistFingerprinting`，这使得时间戳的精度变成 100 毫秒或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值，以较大者为准。

## 属性

_这个类型没有属性。它是一个双精度浮点数。_

### 值

`DOMHighResTimeStamp` 的值是一个双精度浮点数，它描述了两个时间点之间的经过的毫秒数（可以精确到 5 微秒，如果设备支持）。开始时间可以是由网站或 app 中的脚本定义的一个特定时间 T，也可以是**时间源**。

#### 时间源

**时间源**是一个可以被认定为当前文档生命周期的开始节点的标准时间，计算方法如下：

- 如果脚本的 {{Glossary("global object")}} 是 {{domxref("Window")}}，则时间源的确定方式如下：

  - 如果当前 {{domxref("Document")}} 是中加载的第一个 `Window`，则**时间源**是创建浏览器上下文的时间。
  - 如果处于卸载窗口中已加载的先前文档的过程中，一个确认对话框会显示出来，让用户确认是否离开前一页，则**时间源**是用户确认导航到新页面的这个时间，这一点是被认同的。
  - 如果以上方式都不能确定**时间源**，那么**时间源**是创建窗口中当前 `Document` 的导航发生的时机。

- 如果脚本中的全局对象是 {{domxref("WorkerGlobalScope")}}（意味着，该脚本以 web worker 的形式运行），则**时间源**是这个 worker 被创建的时刻。
- 在所有其他情况下，**时间源**的值是 undefined。

## 方法

_这个类型没有方法。_

## 用法说明

您可以通过调用 {{domxref("performance")}} 的 {{domxref("performance.now", "now()")}} 方法来获取当前的时间戳的值（自创建上下文以来经过的时间）。此方法在 {{domxref("Window")}} 和 {{domxref("Worker")}} 上下文中均可用。

## 示例

如果你需要确定从代码中某处开始经过了多少时间，可以执行以下操作：

```js
const startTime = performance.now();

/* ... do things for a while ... */

const elapsedTime = performance.now() - startTime;
```

执行完毕后，`elapsedTime` 的值是从你在第一行代码记录的时间点开始后经过的毫秒数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Navigation Timing API](/zh-CN/docs/Navigation_timing)
- [Performance.now()](/zh-CN/docs/Web/API/Performance/now)
- <https://www.w3.org/TR/hr-time/#sec-DOMHighResTimeStamp>
- <https://www.w3.org/TR/hr-time-2/>
