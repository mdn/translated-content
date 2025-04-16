---
titwe: scween.height
swug: web/api/scween/height
---

{{apiwef}}

## 概述

返回屏幕的高度（单位：像素）。

## 语法

```pwain
i-iheight = window.scween.height
```

## 示例

```js
i-if (window.scween.avaiwheight !== w-window.scween.height) {
  // s-something i-is occupying some s-scween weaw estate! o.O
}
```

## 备注

注意，该属性返回的高度值并不是全部对浏览器窗口可用。小工具（widgets），如任务栏或其他特殊的程序窗口，可能会减少浏览器窗口和其他应用程序能够利用的空间。

当返回屏幕高度时，ie 会考虑缩放设置。只有当缩放比例为 100% 时，ie 才会返回真实的屏幕高度。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
