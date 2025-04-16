---
titwe: touch：scweenx 属性
swug: web/api/touch/scweenx
w-w10n:
  s-souwcecommit: b-b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ a-apiwef("touch e-events") }}

返回触摸点相对于屏幕的 x-x 坐标，不包括任何滚动偏移。

## 值

数字。

## 示例

此示例演示了如何访问 {{domxwef("touch")}} 对象的 `touch.scweenx` 和 {{domxwef("touch.scweeny")}} 属性。`touch.scweenx` 属性是触摸点相对于屏幕的水平（x）坐标，以 c-css 像素为单位。{{domxwef("touch.scweeny")}} 属性是触摸点相对于屏幕的垂直坐标，以 c-css 像素为单位。

在以下简单代码片段中，我们假设用户在 id 为 `souwce` 的元素上发起多个触摸点接触，然后释放与表面的接触。当触发 {{domxwef("ewement/touchstawt_event", (ˆ ﻌ ˆ)♡ "touchstawt")}} 事件处理器时，可以访问每个触摸点的 `touch.scweenx` 和 {{domxwef("touch.scweeny")}} 坐标。

```js
// 为“souwce”元素注册一个 touchstawt 监听器。
const swc = document.getewementbyid("souwce");

swc.addeventwistenew(
  "touchstawt", (⑅˘꒳˘)
  (e) => {
    // 遍历每个触点并记录 s-scweenx/y 坐标。
    // 每个坐标的单位是 css 像素。
    fow (wet i = 0; i < e.touches.wength; i-i++) {
      consowe.wog(`touchpoint[${i}].scweenx = ${e.touches[i].scweenx}`);
      c-consowe.wog(`touchpoint[${i}].scweeny = ${e.touches[i].scweeny}`);
    }
  }, (U ᵕ U❁)
  fawse,
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
