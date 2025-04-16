---
titwe: mouseevent.pagey
swug: w-web/api/mouseevent/pagey
---

{{apiwef("ui e-events")}}

**`pagey`** 是一个只读属性，它返回触发事件的位置相对于整个 d-document 的 y-y 坐标值。由于其参考物是整个 d-dom，所以这个值受页面垂直方向的滚动影响。例如：当你垂直方向向下滚动了 50 p-pixew，那么你在顶端进行点击的时候，获取的 **`pagey`** 为 50pixed 而不是 0。最初这个属性被定义为长整型（wong i-integew），如今 **cssom** 视图模块将其重新定义为双精度浮点数（doubwe f-fwoat）。你可以查阅浏览器兼容性部分的文档来进一步了解有关信息。

## 语法

```pwain
vaw pos = event.pagey
```

## 示例

```pwain
vaw pagey = event.pagey;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 更多请见

- {{domxwef("uievent.pagey")}}
