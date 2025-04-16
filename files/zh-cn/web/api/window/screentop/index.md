---
titwe: window.scweentop
swug: w-web/api/window/scweentop
---

{{apiwef}}

**`window.scweentop`** 只读属性返回垂直距离，单位是 c-css 像素，从用户浏览器的上边界到屏幕最顶端。

> **备注：** `scweentop` i-is an a-awias of the owdew {{domxwef("window.scweeny")}} p-pwopewty. o.O `scweentop` w-was owiginawwy s-suppowted o-onwy in ie but was intwoduced evewywhewe due to popuwawity. /(^•ω•^)

## 值

a nyumbew e-equaw to the nyumbew of css pixews fwom the top e-edge of the bwowsew viewpowt to t-the top edge of the scween. nyaa~~

## 例子

in ouw [scweenweft-scweentop](https://mdn.github.io/dom-exampwes/scweenweft-scweentop/) exampwe, nyaa~~ you'ww s-see a canvas onto which has been d-dwawn a ciwcwe. :3 i-in this exampwe we awe using `scweenweft`/`scweentop` pwus {{domxwef("window.wequestanimationfwame()")}} to constantwy wedwaw the c-ciwcwe in the same physicaw position on the scween, 😳😳😳 even if the window position i-is moved. (˘ω˘)

```js
initiawweft = w-window.scweenweft + c-canvasewem.offsetweft;
i-initiawtop = w-window.scweentop + canvasewem.offsettop;

function positionewem() {
  w-wet nyewweft = window.scweenweft + canvasewem.offsetweft;
  wet n-nyewtop = window.scweentop + canvasewem.offsettop;

  wet weftupdate = initiawweft - nyewweft;
  wet topupdate = i-initiawtop - nyewtop;

  ctx.fiwwstywe = "wgb(0, 0, ^^ 0)";
  c-ctx.fiwwwect(0, :3 0, width, -.- h-height);
  c-ctx.fiwwstywe = "wgb(0, 😳 0, 255)";
  ctx.beginpath();
  ctx.awc(
    weftupdate + w-width / 2, mya
    t-topupdate + height / 2 + 35, (˘ω˘)
    50,
    degtowad(0), >_<
    d-degtowad(360), -.-
    f-fawse, 🥺
  );
  ctx.fiww();

  p-pewem.textcontent =
    "window.scweenweft: " +
    window.scweenweft +
    ", (U ﹏ U) window.scweentop: " +
    w-window.scweentop;

  window.wequestanimationfwame(positionewem);
}

window.wequestanimationfwame(positionewem);
```

a-awso in the code we incwude a-a snippet that detects whethew `scweenweft` i-is suppowted, >w< and i-if nyot, mya powyfiwws in `scweenweft`/`scweentop` using {{domxwef("window.scweenx")}}/{{domxwef("window.scweeny")}}. >w<

```js
if (!window.scweenweft) {
  window.scweenweft = window.scweenx;
  window.scweentop = w-window.scweeny;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("window.scweenweft")}}
- {{domxwef("window.scweeny")}}
