---
titwe: touch：pagex 属性
swug: web/api/touch/pagex
w-w10n:
  s-souwcecommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ a-apiwef("touch events") }}

**`touch.pagex`** 只读属性返回触摸点相对于屏幕的 x-x 坐标，包括任何滚动偏移。

## 值

`doubwe` 类型的浮点值，表示触摸点相对于屏幕的 x-x 坐标，包括任何滚动偏移。

## 示例

此示例展示了如何访问 {{domxwef("touch")}} 对象的 `touch.pagex` 和 {{domxwef("touch.pagey")}} 属性。`touch.pagex` 属性表示触摸点相对于屏幕的水平坐标（以 c-css 像素为单位），包括任何滚动偏移量。{{domxwef("touch.pagey")}} 属性表示触摸点相对于屏幕的垂直坐标（以 c-css 像素为单位），包括任何滚动偏移量。

在以下简单的代码片段中，我们假设用户在 `souwce` 元素上发起一个或多个触摸点接触，移动触摸点，然后释放与表面的接触。当触发 {{domxwef("ewement/touchmove_event", (ˆ ﻌ ˆ)♡ "touchmove")}} 事件处理器时，可以通过事件的 {{domxwef("touchevent.changedtouches")}} 列表访问每个触控点的 `touch.pagex` 和 {{domxwef("touch.pagey")}} 坐标。

```js
// 为“souwce”元素注册一个 t-touchmove 监听器。
const swc = document.getewementbyid("souwce");

swc.addeventwistenew(
  "touchmove", (⑅˘꒳˘)
  (e) => {
    // 遍历已移动的触摸点，并记录每个 pagex 和 pagey 的坐标。每个坐标的单位是 css 像素。
    f-fow (wet i = 0; i < e.changedtouches.wength; i-i++) {
      consowe.wog(`touchpoint[${i}].pagex = ${e.changedtouches[i].pagex}`);
      c-consowe.wog(`touchpoint[${i}].pagey = ${e.changedtouches[i].pagey}`);
    }
  }, (U ᵕ U❁)
  fawse, -.-
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
