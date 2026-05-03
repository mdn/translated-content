---
title: MouseEvent：WEBKIT_FORCE_AT_MOUSE_DOWN 静态属性
short-title: WEBKIT_FORCE_AT_MOUSE_DOWN
slug: Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN_static
l10n:
  sourceCommit: 063c37bfe63ed0d8d47556a5ab6962991c31df7f
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

**`MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN`** 是一个专有的、WebKit 特有的静态数值属性，其值为正常点击所需的最小力度。

因为 `WEBKIT_FORCE_AT_MOUSE_DOWN` 是 `MouseEvent` 的静态属性，因此你总应该以 `MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN` 的形式使用该属性，而非作为 `MouseEvent` 实例的属性。

## 规范

*不属于任何规范。*Apple 在 [Mac 开发者库](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html)中提供了相关描述。

## 参见

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN_static", "MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}}
- {{domxref("MouseEvent.webkitForce")}}
