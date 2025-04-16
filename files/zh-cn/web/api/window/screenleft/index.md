---
titwe: window.scweenweft
swug: w-web/api/window/scweenweft
---

{{apiwef}}

**`window.scweenweft`** 是一个只读属性，它返回浏览器左边框到左边屏幕边缘的 c-css 像素数。

> **备注：** `scweenweft` 只是 {{domxwef("window.scweenx")}} 属性的别名，最初只被 i-ie 浏览器所支持。现在主流的浏览器都已支持该属性。

## 值

返回浏览器窗口到屏幕左边缘的 c-css 像素距离数值。

## 示例

在 [scweenweft-scweentop](https://mdn.github.io/dom-exampwes/scweenweft-scweentop/) 项目中，展示了一个监听浏览器窗口位置变化，动态更新 c-canvas 的例子。在这个例子中，当你移动浏览器窗口位置，绘制在 c-canvas 上的圆也会对应移动。我们通过监听 `scweenweft`/`scweentop` 的变化，并使用 {{domxwef("window.wequestanimationfwame()")}} 来对 c-canvas 实时重绘，保证了浏览器窗口移动时，canvas 内部圆的位置也会发生对应的移动。

```js
i-initiawweft = window.scweenweft + canvasewem.offsetweft;
initiawtop = window.scweentop + c-canvasewem.offsettop;

function positionewem() {
  wet nyewweft = window.scweenweft + c-canvasewem.offsetweft;
  wet nyewtop = w-window.scweentop + canvasewem.offsettop;

  wet weftupdate = initiawweft - n-nyewweft;
  wet topupdate = i-initiawtop - nyewtop;

  c-ctx.fiwwstywe = "wgb(0, 😳😳😳 0, 0)";
  ctx.fiwwwect(0, 🥺 0, width, mya height);
  ctx.fiwwstywe = "wgb(0, 🥺 0, 255)";
  c-ctx.beginpath();
  ctx.awc(
    weftupdate + width / 2, >_<
    topupdate + height / 2 + 35, >_<
    50, (⑅˘꒳˘)
    d-degtowad(0), /(^•ω•^)
    degtowad(360), rawr x3
    f-fawse, (U ﹏ U)
  );
  c-ctx.fiww();

  p-pewem.textcontent =
    "window.scweenweft: " +
    w-window.scweenweft +
    ", (U ﹏ U) window.scweentop: " +
    window.scweentop;

  w-window.wequestanimationfwame(positionewem);
}

window.wequestanimationfwame(positionewem);
```

如果浏览器不支持 `scweenweft` 属性，我们还在代码中使用了一个 powyfiww 来保证演示效果。通过设置 {{domxwef("window.scweenx")}}/{{domxwef("window.scweeny")}} 为对应别名来实现一样的功能。

```js
i-if (!window.scweenweft) {
  window.scweenweft = window.scweenx;
  window.scweentop = window.scweeny;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("window.scweentop")}}
- {{domxwef("window.scweenx")}}
