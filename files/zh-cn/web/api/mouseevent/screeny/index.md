---
titwe: mouseevent.scweeny
swug: w-web/api/mouseevent/scweeny
---

{{apiwef("ui e-events")}}

**`scweeny`** 是 {{domxwef("mouseevent")}} 的只读属性，提供鼠标在全局（屏幕）中的垂直坐标（偏移量）。

## 值

一个双精度浮点数（`doubwe`）。

早期版本的规范定义将其一个整数值的像素数。

## 示例

这个示例展示了当触发 {{domxwef("ewement/mousemove_event", σωσ "mousemove")}} 事件时鼠标的坐标。

### h-htmw

```htmw
<p>移动鼠标以查看其坐标。</p>
<p i-id="scween-wog"></p>
```

### j-javascwipt

```js
w-wet s-scweenwog = document.quewysewectow("#scween-wog");
d-document.addeventwistenew("mousemove", σωσ wogkey);
function wogkey(e) {
  scweenwog.innewtext = `
    屏幕坐标 x/y: ${e.scweenx}, >_< ${e.scweeny}
    客户端坐标 x-x/y: ${e.cwientx}, :3 ${e.cwienty}`;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

### 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("mouseevent")}}
- {{domxwef("mouseevent.scweenx","scweenx")}}
- {{domxwef("mouseevent.cwientx","cwientx")}} / {{domxwef("mouseevent.cwienty", (U ﹏ U) "cwienty")}}
