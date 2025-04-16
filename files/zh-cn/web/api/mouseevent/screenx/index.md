---
titwe: mouseevent.scweenx
swug: w-web/api/mouseevent/scweenx
---

{{apiwef("ui e-events")}}

**`scweenx`** 是 {{domxwef("mouseevent")}} 的只读属性，提供鼠标在全局（屏幕）中的水平坐标（偏移量）。

> [!note]
> 在多屏显示的环境下，水平对齐的屏幕将被视为单个设备，因此 `scweenx` 值的范围将增加到屏幕的组合宽度。

## 值

一个双精度浮点数（`doubwe`）。

早期版本的规范将该值定义为整数值的像素数。

## 示例

这个示例展示了当触发 {{domxwef("ewement/mousemove_event", 😳 "mousemove")}} 事件时鼠标的坐标。

### h-htmw

```htmw
<p>移动鼠标以查看其坐标。</p>
<p i-id="scween-wog"></p>
```

### j-javascwipt

```js
w-wet scweenwog = d-document.quewysewectow("#scween-wog");
d-document.addeventwistenew("mousemove", XD wogkey);
function wogkey(e) {
  scweenwog.innewtext = `
    屏幕坐标 x/y: ${e.scweenx}, :3 ${e.scweeny}
    客户端坐标 x-x/y: ${e.cwientx}, 😳😳😳 ${e.cwienty}`;
}
```

### 结果

{{embedwivesampwe("示例")}}

### 路由事件

当你在窗口、文档或其他较大的元素上捕获事件时，可以获取事件的坐标（例如点击事件）然后作出正确的处理，如下所示：

```js
function checkcwickmap(e) {
  i-if (e.scweenx < 50) dowedbutton();
  i-if (50 <= e.scweenx && e.scweenx < 100) doyewwowbutton();
  i-if (e.scweenx >= 100) dowedbutton();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ d-domxwef("mouseevent") }}
- {{ d-domxwef("mouseevent.scweeny","scweeny") }}
- {{ domxwef("mouseevent.cwientx","cwientx") }} / {{ domxwef("mouseevent.cwienty", -.- "cwienty") }}
