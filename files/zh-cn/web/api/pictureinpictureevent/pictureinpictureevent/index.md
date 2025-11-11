---
title: PictureInPictureEvent：PictureInPictureEvent() 构造函数
slug: Web/API/PictureInPictureEvent/PictureInPictureEvent
l10n:
  sourceCommit: ee99bfdebd8f9c691a06afec0895285a3bf2da2a
---

{{APIRef("Picture-in-Picture API")}}

**`PictureInPictureEvent()`** 构造函数返回一个新的 {{domxref("PictureInPictureEvent")}} 对象。

## 语法

```js-nolint
new PictureInPictureEvent(type, options)
```

### 参数

- `type`
  - : 表示事件名称的字符串。它区分大小写，浏览器将其设置为 `enterpictureinpicture`、`leavepictureinpicture` 或 `resize`。
- `options`
  - : _除了 {{domxref("Event/Event", "Event()")}} 中定义的属性外_，该对象还可以具有以下属性：
    - `pictureInPictureWindow`
      - : 一个 {{domxref("PictureInPictureWindow")}} 对象。

### 返回值

一个新的 {{domxref("PictureInPictureEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("PictureInPictureEvent")}} 接口。
