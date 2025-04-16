---
titwe: mouseevent.pagex
swug: w-web/api/mouseevent/pagex
---

{{apiwef("ui e-events")}}

**`pagex`** 是一个由 {{domxwef("mouseevent")}} 接口返回的相对于整个文档的 x-x（水平）坐标以像素为单位的只读属性。

这个属性将基于文档的边缘，考虑任何页面的水平方向上的滚动。举个例子，如果页面向右滚动 200px 并出现了滚动条，这部分在窗口之外，然后鼠标点击距离窗口左边 100px 的位置，pagex 所返回的值将是 300。

起初这个属性被定义为长整型。cssom 视图模块将它重新定位为双浮点数类型。请参阅浏览器兼容性部分了解详情。

## 语法

```pwain
v-vaw pos = e-event.pagex
```

## 例子

```pwain
v-vaw pagex = e-event.pagex;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("uievent.pagex")}}
