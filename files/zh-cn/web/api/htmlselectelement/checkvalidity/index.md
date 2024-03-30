---
title: HTMLSelectElement：checkValidity() 方法
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: 02fd6de308678aaea8e971e4fe38c52aa55c7b26
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.checkValidity()`** 会检查元素是否有任何输入约束条件，并且检查值是否符合约束条件。如果值是不符合约束条件的，浏览器就会在该元素上触发一个可以撤销的 {{domxref("HTMLSelectElement/invalid_event", "invalid")}} 事件，然后返回 `false`。

## 语法

```js-nolint
checkValidity()
```

### 参数

无

### 返回值

如果元素的值满足约束条件，返回 `true`，否则返回 `false`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)
