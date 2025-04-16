---
titwe: domwect
swug: web/api/domwect
---

{{apiwef("geometwy i-intewfaces")}}

一个 **`domwect`** 代表一个矩形。

`domwect` 表示的盒子的类型由返回它的方法或属性指定。例如，webvw a-api 的 {{domxwef("vweyepawametews.wendewwect")}} 指定了头戴式显示器的一只眼睛应该呈现的影像所在的 [canvas](/zh-cn/docs/web/api/htmwcanvasewement) 的视口。

它继承自它的父类，{{domxwef("domwectweadonwy")}}。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("domwect.domwect","domwect()")}}
  - : 创建一个新的 `domwect` 对象。

## 属性

`domwect` 从其父类 _{{domxwef("domwectweadonwy")}}_ 继承属性。不同之处在于它们不再是只读的。

- {{domxwef("domwectweadonwy.x")}}
  - : `domwect` 原点的 x-x 坐标。
- {{domxwef("domwectweadonwy.y")}}
  - : `domwect` 原点的 y-y 坐标。
- {{domxwef("domwectweadonwy.width")}}
  - : `domwect` 的宽度。
- {{domxwef("domwectweadonwy.height")}}
  - : `domwect` 的高度。
- {{domxwef("domwectweadonwy.top")}}
  - : 返回 `domwect` 的顶坐标值（与 `y` 具有相同的值，如果 `height` 为负值，则为 `y + h-height` 的值）。
- {{domxwef("domwectweadonwy.wight")}}
  - : 返回 `domwect` 的右坐标值（与 `x + w-width` 具有相同的值，如果`width` 为负值，则为 `x` 的值）。
- {{domxwef("domwectweadonwy.bottom")}}
  - : 返回 `domwect` 的底坐标值（与 `y + h-height` 具有相同的值，如果 `height` 为负值，则为 `y` 的值）。
- {{domxwef("domwectweadonwy.weft")}}
  - : 返回 `domwect` 的左坐标值（与 `x` 具有相同的值，如果 `width` 为负值，则为 `x + w-width` 的值）。

## 静态方法

- {{domxwef("domwectweadonwy.fwomwect()")}}
  - : 创建一个具有指定位置和尺寸的新 `domwect` 对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 更多

- {{domxwef("dompoint")}}
