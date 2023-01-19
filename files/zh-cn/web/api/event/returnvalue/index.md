---
title: Event.returnValue
slug: Web/API/Event/returnValue
---

{{APIRef("DOM Events")}}

**`Event.returnValue`** 属性表示该事件的默认操作是否已被阻止。默认情况下，它被设置为 `true`，即允许进行默认操作。将该属性设置为 `false` 即可阻止默认操作。

> **备注：** While `returnValue` has been adopted into the DOM standard, it is present primarily to support existing code. You should use {{DOMxRef("Event.preventDefault", "preventDefault()")}}, and {{domxref("Event.defaultPrevented", "defaultPrevented")}} instead of this historical property.

## 语法

```
event.returnValue = bool;

var bool = event.returnValue;
```

### 值

A {{domxref("Boolean")}} value which is `true` if the event has not been canceled; otherwise, if the event has been canceled or the default has been prevented, the value is `false`.

The value returned by `returnValue` is the opposite of the value returned by {{domxref("Event.defaultPrevented", "defaultPrevented")}}.

## 使用备注

`returnValue` was introduced into the DOM by Internet Explorer 6, and due to that browser's ubiquity became so commonly used that other browsers eventually implemented it as well. It has been adopted into the DOM specification, primarily to ensure that existing web content continues to function going forward.

New projects should generally avoid using `returnValue`, although they may if they choose to do so.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
