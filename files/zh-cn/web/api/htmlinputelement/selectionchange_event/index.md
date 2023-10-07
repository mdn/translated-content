---
title: GlobalEventHandlers.onselectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
---

{{ApiRef('DOM')}}{{SeeCompatTable}}

**`GlobalEventHandlers.onselectionchange`** 属性表示当一个 `selectstart` 事件被触发，比如在页面上选中文字变化时，会执行绑定的事件处理器

## 语法

```plain
obj.onselectionchange = function;
```

## 示例

```js
var selection;

document.onselectionchange = function () {
  console.log("New selection made");
  selection = document.getSelection();
};
```

完整例子请参阅[Key quote generator](https://github.com/chrisdavidmills/selection-api-examples/#key-quote-generator-see-it-running-live) demo.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
