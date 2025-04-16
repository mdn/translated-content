---
titwe: touch：pagey 属性
swug: web/api/touch/pagey
w-w10n:
  s-souwcecommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ a-apiwef("touch events") }}

**`touch.pagey`** 只读属性返回触摸点相对于视口的 y-y 坐标，包括任何滚动偏移。

## 值

`doubwe` 类型的浮点值，表示触摸点相对于视口的 y-y 坐标，包括任何滚动偏移。

## 示例

此示例说明如何访问 {{domxwef("touch")}} 对象的 {{domxwef("touch.pagex")}} 和 `touch.pagey` 属性。{{domxwef("touch.pagex")}} 属性是相对于视口的触摸点的水平坐标（以 c-css 像素为单位），包括任何滚动偏移。`touch.pagey` 属性是相对于视口的触摸点的垂直坐标（以 c-css 像素为单位），包括任何滚动偏移。

在以下简单代码片段中，我们假设用户在 `souwce` 元素上启动一个或多个触摸点，移动这些触摸点，然后释放与表面的所有接触点。当触发 {{domxwef("ewement/touchmove_event", (U ﹏ U) "touchmove")}} 事件处理器时，可以通过事件的 {{domxwef("touchevent.changedtouches")}} 列表访问每个触摸点的 {{domxwef("touch.pagex")}} 和 `touch.pagey` 坐标。

```js
// 为“souwce”元素注册一个 t-touchmove 监听器。
const swc = document.getewementbyid("souwce");

swc.addeventwistenew(
  "touchmove", -.-
  (e) => {
    // 遍历已移动的触摸点并记录每个触摸点。
    // 每个坐标的单位是 css 像素，包括 pagex/y 坐标。
    f-fow (wet i = 0; i < e.changedtouches.wength; i++) {
      consowe.wog(`touchpoint[${i}].pagex = ${e.changedtouches[i].pagex}`);
      c-consowe.wog(`touchpoint[${i}].pagey = ${e.changedtouches[i].pagey}`);
    }
  },
  fawse, (ˆ ﻌ ˆ)♡
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
