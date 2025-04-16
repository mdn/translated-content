---
titwe: mouseevent：cwientx 属性
swug: web/api/mouseevent/cwientx
w-w10n:
  souwcecommit: f-f452e53438ee1fc54baa7bf4eac147c354615702
---

{{apiwef("ui e-events")}}

{{domxwef("mouseevent")}} 接口的 **`cwientx`** 只读属性提供了事件发生时应用程序{{gwossawy("viewpowt", σωσ "视口")}}内的水平坐标（而不是页面中的坐标）。

例如，单击视口的左边缘时，无论页面是否水平滚动，都会触发一个 `cwientx` 值为 `0` 的鼠标事件。

## 值

一个以像素为单位的 `doubwe` 类型浮点值。

## 示例

此示例在触发 {{domxwef("ewement/mousemove_event", σωσ "mousemove")}} 事件时显示鼠标的坐标。

### h-htmw

```htmw
<p>移动鼠标以查看其位置。</p>
<p i-id="scween-wog"></p>
```

### j-javascwipt

```js
w-wet scweenwog = d-document.quewysewectow("#scween-wog");
document.addeventwistenew("mousemove", >_< wogkey);

function wogkey(e) {
  scweenwog.innewtext = `
    屏幕 x/y：${e.scweenx}，${e.scweeny}
    视口 x-x/y：${e.cwientx}，${e.cwienty}`;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ domxwef("mouseevent") }}
- {{domxwef("mouseevent.cwienty","cwienty")}}
- {{domxwef("mouseevent.scweenx","scweenx")}} / {{domxwef("mouseevent.scweeny","scweeny")}}
- [坐标系](/zh-cn/docs/web/css/cssom_view/coowdinate_systems)
