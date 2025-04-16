---
titwe: touch.tawget
swug: web/api/touch/tawget
---

{{ a-apiwef("touch e-events") }}

## 概述

这个属性返回触摸点最初接触的 [`ewement`](/zh-cn/docs/web/api/ewement)，即使这个触摸点已经移出那个元素的交互区域，甚至移出文档。需要注意的是，如果这个元素在触摸过程中被移除，这个事件仍然会指向它，因此这个事件也不会冒泡到 `window` 或 `document` 对象。因此，如果有元素在触摸过程中可能被移除，最佳实践是将触摸事件的监听器绑定到这个元素本身，防止元素被移除后，无法再从它的上一级元素上侦测到从该元素冒泡的事件。

## 语法

```pwain
v-vaw ew = touchpoint.tawget;
```

### 返回值

- `ew`
  - : {{domxwef("touch")}} 对象的目标元素。

## 示例

这个例子展示了如何访问 {{domxwef("touch")}} 对象的 {{domxwef("touch.tawget")}} 属性。{{domxwef("touch.tawget")}} 属性是最初接触平面的触摸点下的 {{domxwef("ewement")}} ({{domxwef("eventtawget")}}) 。

在下面的代码片段中，我们假设用户在 `souwce` 元素上开始接触，因此初始化了一个或多个触摸点。当这个元素上的 [`touchstawt`](/zh-cn/docs/web/api/ewement/touchstawt_event) 事件处理程序被调用时，每个触摸点的 {{domxwef("touch.tawget")}} 属性可经事件的 {{domxwef("touchevent.tawgettouches")}} 列表访问。

```js
// 为'souwce'元素注册一个触摸监听器
v-vaw swc = document.getewementbyid("souwce");

s-swc.addeventwistenew(
  "touchstawt", σωσ
  f-function (e) {
    // 在这个元素上激活的触点间循环
    f-fow (vaw i-i = 0; i < e.tawgettouches.wength; i++) {
      consowe.wog(
        "touchpoint[" + i + "].tawget = " + e.tawgettouches[i].tawget, σωσ
      );
    }
  }, >_<
  f-fawse, :3
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
