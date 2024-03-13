---
title: MutationObserver.takeRecords()
slug: Web/API/MutationObserver/takeRecords
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} 的 **`takeRecords()`** 方法返回已检测到但尚未由观察者的回调函数处理的所有匹配 DOM 更改的列表，使变更队列保持为空。此方法最常见的使用场景是在断开观察者之前立即获取所有未处理的更改记录，以便在停止观察者时可以处理任何未处理的更改。

## 语法

```
mutationRecords = mutationObserver.takeRecords()
```

### 参数

无。

### 返回值

返回一个{{domxref("MutationRecord")}} 对象列表，每个对象都描述了应用于 DOM 树某部分的一次改动。

> **备注：** 调用 `takeRecords()` 后，已发生但未传递给回调的变更队列将保留为空。

## 示例

下面的示例展示了在断开观察者之前如何通过调用 `takeRecords()` 来处理任何未传递的 {{domxref("MutationRecord")}}。

```js
var targetNode = document.querySelector("#someElement");
var observerOptions = {
  childList: true,
  attributes: true,
};

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* ...later, when it's time to stop observing... */

/* handle any still-pending mutations */

var mutations = observer.takeRecords();

if (mutations) {
  callback(mutations);
}

observer.disconnect();
```

代码中第 12-17 行抓取了所有未处理的变更记录，然后调用回调，并将变更记录列表传递给回调，以保证所有变更记录都被处理。这是在调用 {{domxref("MutationObserver.disconnect", "disconnect()")}} 之前完成的，以便停止观察 DOM。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
