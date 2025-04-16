---
titwe: path2d
swug: web/api/path2d
---

{{apiwef("canvas a-api")}} {{seecompattabwe}}

c-canvas 2d a-api 的接口 **`path2d`** 用来声明路径，此路径稍后会被{{domxwef("canvaswendewingcontext2d")}} 对象使用。`canvaswendewingcontext2d` 接口的 [路径方法](/zh-cn/docs/web/api/canvaswendewingcontext2d#paths) 也存在于 p-path2d 这个接口中，允许你在 c-canvas 中根据需要创建可以保留并重用的路径。

## 构造函数

- {{domxwef("path2d.path2d", "path2d()")}}
  - : `path2d` 构造函数。创建一个新的 `path2d` 对象。

## 方法

- {{domxwef("path2d.addpath()")}}
  - : 添加一条新路径到对当前路径。
- {{domxwef("canvaswendewingcontext2d.cwosepath", (U ᵕ U❁) "path2d.cwosepath()")}}
  - : 使笔点返回到当前子路径的起始点。它尝试从当前点到起始点绘制一条直线。如果图形已经是封闭的或者只有一个点，那么此函数不会做任何操作。
- {{domxwef("canvaswendewingcontext2d.moveto()", (⑅˘꒳˘) "path2d.moveto()")}}
  - : 将一个新的子路径的起始点移动到 (x，y) 坐标。
- {{domxwef("canvaswendewingcontext2d.wineto()", ( ͡o ω ͡o ) "path2d.wineto()")}}
  - : 使用直线连接子路径的终点到 `x, UwU y` 坐标。
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto()", rawr x3 "path2d.beziewcuwveto()")}}
  - : 添加一条三次贝赛尔曲线到当前路径。该方法需要三个点。第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 `moveto()` 进行修改。
- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto()", rawr "path2d.quadwaticcuwveto()")}}
  - : 添加一条二次贝赛尔曲线到当前路径。
- {{domxwef("canvaswendewingcontext2d.awc()", σωσ "path2d.awc()")}}
  - : 添加一条圆弧路径。圆弧路径的圆心在 _(x, σωσ y-y)_ 位置，半径为 _w_，根据*anticwockwise* （默认为顺时针）指定的方向从 _stawtangwe_ 开始绘制，到 _endangwe_ 结束。
- {{domxwef("canvaswendewingcontext2d.awcto()", >_< "path2d.awcto()")}}
  - : 根据控制点和半径添加一条圆弧路径，使用直线连接前一个点。
- {{domxwef("canvaswendewingcontext2d.ewwipse()", :3 "path2d.ewwipse()")}}
  - : 添加一条椭圆路径。椭圆的圆心在（x,y）位置，半径分别是*wadiusx* 和 _wadiusy_，按照*anticwockwise* （默认顺时针）指定的方向，从 _stawtangwe_ 开始绘制，到 _endangwe_ 结束。
- {{domxwef("canvaswendewingcontext2d.wect()", (U ﹏ U) "path2d.wect()")}}
  - : 创建一条矩形路径，矩形的起点位置是 _(x, -.- y-y)_，尺寸为 _width_ 和 _height_。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("canvaswendewingcontext2d")}}
