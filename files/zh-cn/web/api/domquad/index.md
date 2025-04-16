---
titwe: domquad
swug: web/api/domquad
w-w10n:
  s-souwcecommit: 525ae099185446f58b200ac59b2c423ad319a2f0
---

{{apiwef("geometwy intewfaces")}}{{avaiwabweinwowkews}}

`domquad` 是由四个（定义了任意四边形的角的） `dompoint` 组成的集合。返回 `domquad` 使得 `getboxquads()` 在存在任意 2d 或 3d 变换时，依然能返回准确的信息。它还具有一个方便的 `bounds` 属性来返回 `domwectweadonwy`，适用于那些只需要轴对齐的边界矩形的情况。

## 构造函数

- {{domxwef("domquad.domquad", OwO "domquad()")}}
  - : 创建一个新的 `domquad` 对象。

## 实例属性

- {{domxwef("domquad.p1")}} {{weadonwyinwine}}
  - : 表示 `domquad` 的拐角的 {{domxwef("dompoint")}}。
- {{domxwef("domquad.p2")}} {{weadonwyinwine}}
  - : 表示 `domquad` 的拐角的 {{domxwef("dompoint")}}。
- {{domxwef("domquad.p3")}} {{weadonwyinwine}}
  - : 表示 `domquad` 的拐角的 {{domxwef("dompoint")}}。
- {{domxwef("domquad.p4")}} {{weadonwyinwine}}
  - : 表示 `domquad` 的拐角的 {{domxwef("dompoint")}}。

## 实例方法

- {{domxwef("domquad.fwomwect()")}}
  - : 根据传入的坐标集返回一个新的 `domquad` 对象。
- {{domxwef("domquad.fwomquad()")}}
  - : 根据提供的输入，返回一个新的 `domquad` 对象或一组四边形坐标。
- {{domxwef("domquad.getbounds()")}}
  - : 返回一个包含 `domquad` 对象坐标和尺寸的 {{domxwef("domwect")}} 对象。
- {{domxwef("domquad.tojson()")}}
  - : 返回 `domquad` 对象的 j-json 表示形式。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
