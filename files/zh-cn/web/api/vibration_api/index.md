---
title: 振动 API
slug: Web/API/Vibration_API
l10n:
  sourceCommit: 77915a2ad318fb78b1d02a35d6b1de61ea1b1f5f
---

{{DefaultAPISidebar("Vibration API")}}

大多数现代移动设备包括振动硬件，其允许软件代码通过使设备振动来向用户提供物理反馈。**振动 API**（Vibration API）为 Web 应用程序提供访问此硬件的功能（如果存在），如果设备不支持此功能，则不会执行任何操作。

## 概念和用法

振动被抽象成开——关脉冲的模式，且可以具有变化的长度。模式可以是单个整数，表示持续振动的毫秒数；或一个整数数组，描述振动和暂停模式。振动由单一方法控制：{{DOMxRef("Navigator.vibrate()")}}。

### 一个单次振动

你可以通过指定单个值或仅由一个值组成的数组来向振动硬件发出一次脉冲：

```js
navigator.vibrate(200);
navigator.vibrate([200]);
```

以上两个例子都可以使设备振动 200 ms。

### 振动模式

一组数值描述了设备振动和不振动的交替周期。数组中的每个值都将转换成一个整数，然后交替解析为设备应该振动的毫秒数和不振动的毫秒数。例如：

```js
navigator.vibrate([200, 100, 200]);
```

这会使设备振动 200 ms，然后暂停 100 ms，然后再次振动设备 200 ms。

你可以根据需要设定多个振动/暂停对，数组的值可以是偶数或奇数个；值得注意的是，由于振动在每个振动周期结束时自动停止，因此你不必提供最后一个值去暂停。

### 取消现有振动

当调用 {{DOMxRef("Navigator.vibrate()")}} 的参数为 `0`、空数组或包含全 0 值的数组时会取消任何正在进行中的振动。

### 持续振动

一些基于 `setInterval` 和 `clearInterval` 操作将允许你创建持续的振动：

```js
let vibrateInterval;

// 在通过的级别开始振动
function startVibrate(duration) {
  navigator.vibrate(duration);
}

// 停止振动
function stopVibrate() {
  // 清除周期并停止持续振动
  if (vibrateInterval) clearInterval(vibrateInterval);
  navigator.vibrate(0);
}

// 以给定的持续时间和周期开始持续振动，假设已给定一个数值
function startPersistentVibrate(duration, interval) {
  vibrateInterval = setInterval(() => {
    startVibrate(duration);
  }, interval);
}
```

当然上面的代码片段没有考虑到振动参数为数组的情况；基于阵列的持久性振动将需要计算数组项的和，并基于该数量创建周期（可能具有额外的延迟）。

## 接口

### 其他接口的扩展

- {{domxref("Navigator.vibrate()")}}
  - : 在支持它的设备上引起振动。如果振动支持不可用，则不执行任何操作。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Navigator.vibrate()")}}
