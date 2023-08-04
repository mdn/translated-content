---
title: MutationObserver.observe()
slug: Web/API/MutationObserver/observe
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} 的 **`observe()`** 方法配置了 `MutationObserver` 对象的回调方法以开始接收与给定选项匹配的 DOM 变化的通知。根据配置，观察者会观察 DOM 树中的单个 {{domxref("Node")}}，也可能会观察被指定节点的部分或者所有的子孙节点。

要停止 `MutationObserver`（以便不再触发它的回调方法），需要调用 {{domxref("MutationObserver.disconnect()")}} 方法。

## 语法

```plain
mutationObserver.observe(target[, options])
```

### 参数

- `target`
  - : DOM 树中的一个要观察变化的 DOM {{domxref("Node")}} (可能是一个 {{domxref("Element")}})，或者是被观察的子节点树的根节点。
- `options`

  - : 此对象的配置项描述了 DOM 的哪些变化应该报告给 `MutationObserver` 的 `callback`。当调用 {{domxref("MutationObserver.observe", "observe()")}} 时，`childList`、`attributes` 和 `characterData` 中，必须有一个参数为 `true`。否则会抛出 `TypeError` 异常。

    `options` 的属性如下：

    - `subtree` {{optional_inline}}
      - : 当为 `true` 时，将会监听以 `target` 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 `target`。默认值为 `false`。
    - `childList` {{optional_inline}}
      - : 当为 `true` 时，监听 `target` 节点中发生的节点的新增与删除（同时，如果 `subtree` 为 `true`，会针对整个子树生效）。默认值为 `false`。
    - `attributes` {{optional_inline}}
      - : 当为 `true` 时观察所有监听的节点属性值的变化。默认值为 `true`，当声明了 `attributeFilter` 或 `attributeOldValue`，默认值则为 `false`。
    - `attributeFilter` {{optional_inline}}
      - : 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知。
    - `attributeOldValue` {{optional_inline}}
      - : 当为 `true` 时，记录上一次被监听的节点的属性变化；可查阅[监听属性值](/zh-CN/docs/Web/API/MutationObserver#监听属性值)了解关于观察属性变化和属性值记录的详情。默认值为 `false`。
    - `characterData` {{optional_inline}}
      - : 当为 `true` 时，监听声明的 `target` 节点上所有字符的变化。默认值为 `true`，如果声明了 `characterDataOldValue`，默认值则为 `false`
    - `characterDataOldValue` {{optional_inline}}
      - : 当为 `true` 时，记录前一个被监听的节点中发生的文本变化。默认值为 `false`

### 返回值

`undefined`。

### 异常

- `TypeError`

  - : 以下任一情况都会抛出异常：

    - 配置选项使得实际上不会监视任何内容（例如，如果 {{domxref("MutationObserverInit.childList")}}，{{domxref("MutationObserverInit.attributes")}} 和 {{domxref("MutationObserverInit.characterData")}} 都为 `false`）。
    - `attributes` 选项为 `false`（表示不监视属性更改）但是`attributeOldValue` 为 `true` 并且/或者 `attributeFilter` 配置存在。
    - {{domxref("MutaitonObserverInit.characterDataOldValue", "characterDataOldValue")}} 选项为 `true` 但是 {{domxref("MutationObserverInit.characterData")}} 为 `false`（表示不跟踪字符更改）。

## 使用说明

### 复用 MutationObserver

你可以多次调用同一个 `MutationObserver` 对象的 `observe()` 方法，来观察 DOM 树中不同部分的变化，和/或不同类型的变化。有一些需要注意的注意事项：

- 如果在已经被同一 `MutationObserver` 观察的节点上调用 `observe()` 方法，则在激活新观察者之前，所有现有观察者将自动从所有正在观察的目标中移除。
- 如果同一个 `MutationObserver` 还没有作用在 target 上，则保留现有观察者并添加新观察者。

### 当节点断开连接时继续观察节点

`MutationObserver` 旨在让您能够随着时间的推移观察所需的节点集，即使这些节点之间的直接连接被切断。如果你开始观察节点的子树，并且该子树的一部分被分离并移动到 DOM 中的其他位置，你将继续观察分离的节点段，接收与节点从原始子树分离之前相同的回调。

换句话说，在你收到有关节点从被观察子树中拆分的通知之前，你将收到有关该拆分子树及其节点的更改的通知。这可以防止你丢失在切断连接之后以及在你有机会专门开始观察已移动的节点或子树之前发生的变化。

这意味着理论上如果你跟踪描述发生的变化的 {{domxref("MutationRecord")}} 对象，你就可以“撤销”这些改动，将 DOM 恢复到初始状态。

## 示例

在此例子中，将为你演示如何在实例 {{domxref("MutationObserver")}} 中调用 **`observe()`** 方法，一旦设置后，会传给他一个目标元素和一个 {{domxref("MutationObserverInit")}} 配置对象。

```js
// 得到要观察的元素
var elementToObserve = document.querySelector("#targetElementId");

// 创建一个叫 `observer` 的新 `MutationObserver` 实例，
// 并将回调函数传给它
var observer = new MutationObserver(function () {
  console.log("callback that runs when observer is triggered");
});

// 在 MutationObserver 实例上调用 `observe` 方法，
// 并将要观察的元素与选项传给此方法
observer.observe(elementToObserve, { subtree: true, childList: true });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
