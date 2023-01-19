---
title: MouseEvent.getModifierState()
slug: Web/API/MouseEvent/getModifierState
---

{{APIRef("DOM Events")}}

The **`MouseEvent.getModifierState()`** method returns the current state of the specified modifier key: `true` if the modifier is active (i.e., the modifier key is pressed or locked), otherwise, `false`.

See the document of {{domxref("KeyboardEvent.getModifierState","KeyboardEvent.getModifierState()")}} for details.

## 语法

```plain
var active =​ event.getModifierState(keyArg);
```

### 返回值

A {{jsxref("Boolean")}}

### 参数

- _`keyArg`_
  - : A modifier key value. The value must be one of the {{domxref("KeyboardEvent.key")}} values which represent modifier keys or `"Accel"`. This is case-sensitive.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- The {{domxref("MouseEvent")}} this method belongs to.
- {{domxref("KeyboardEvent.getModifierState")}}
