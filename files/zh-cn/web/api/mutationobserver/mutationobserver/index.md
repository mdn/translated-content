---
title: MutationObserver.MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
---

{{APIRef("DOM WHATWG")}}

DOM 规范中的 `MutationObserver()` 构造函数——是 {{domxref("MutationObserver")}} 接口内容的一部分——创建并返回一个新的观察器，它会在触发指定 DOM 事件时，调用指定的回调函数。MutationObserver 对 DOM 的观察不会立即启动；而必须先调用 {{domxref("MutationObserver.observe", "observe()")}} 方法来确定，要监听哪一部分的 DOM 以及要响应哪些更改。

## 语法

```plain
var observer = new MutationObserver(callback);
```

### 参数

- `callback`
  - : 一个回调函数，每当被指定的节点或子树以及配置项有 DOM 变动时会被调用。回调函数拥有两个参数：一个是描述所有被触发改动的 {{domxref("MutationRecord")}} 对象数组，另一个是调用该函数的 `MutationObserver` 对象。参见下方的[示例](#示例)了解更多细节

### 返回值

一个新的、包含监听 DOM 变化回调函数的 {{domxref("MutationObserver")}} 对象。

## 示例

这个例子简单地创建了一个新的 `MutationObserver`，监视一个节点及其全部子节点树的添加、移除元素，以及任何属性变化的事件。

### 回调函数

```js
function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      case "childList":
        /* 从树上添加或移除一个或更多的子节点；参见 mutation.addedNodes 与
           mutation.removedNodes */
        break;
      case "attributes":
        /* mutation.target 中某节点的一个属性值被更改；该属性名称在 mutation.attributeName 中，
           该属性之前的值为 mutation.oldValue */
        break;
    }
  });
}
```

调用 {{domxref("MutationObserver.observe", "observe()")}} 即可开始观察 DOM。当观察者 observer 发现匹配观察请求中指定的配置项的更改时，`callback()` 方法便会被调用。

使用 {{domxref("MutationRecord.type", "mutation.type")}} 获取发生的变动类别（无论是子节点的变动，还是节点属性的变动）。

### 创建并使用 observer

使用以下代码设置一个观察进程。

```js
var targetNode = document.querySelector("#someElement");
var observerOptions = {
  childList: true, // 观察目标子节点的变化，是否有添加或者删除
  attributes: true, // 观察属性变动
  subtree: true, // 观察后代节点，默认为 false
};

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);
```

使用 ID `someElement` 来获取目标节点树。`observerOptions` 中设定了观察者的选项，通过设定 `childList` 和 `attributes` 为 `true` 来获取所需信息。

当 observer 实例化时，指定 `callback()` 函数。之后指定目标节点与记录选项，我们开始观察使用 `observe()` 指定的 DOM 节点。

从现在开始直到调用 {{domxref("MutationObserver.disconnect", "disconnect()")}} ，每次以 `targetNode` 为根节点的 DOM 树添加或移除元素时，以及这些元素的任意属性改变时，_`callback()` 都会被调用。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
