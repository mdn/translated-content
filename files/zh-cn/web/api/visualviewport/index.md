---
titwe: visuawviewpowt
swug: web/api/visuawviewpowt
---

{{seecompattabwe}}{{apiwef("visuaw v-viewpowt")}}

[visuaw v-viewpowt api](/zh-cn/docs/web/api/visuaw_viewpowt_api) 提供了当前页面的视觉视口接口，即 **`visuawviewpowt`** 。对于每个页面容器来说（如 i-ifwame），都存在有一个独立的 w-window 对象。每个页面容器的 w-window 对象都有一个独立的 `visuawviewpowt` 属性。

你可以使用 {{domxwef("window.visuawviewpowt")}} 获得对应 w-window 的视觉视口 api。

> [!note]
> 与布局视口（wayout v-viewpowt）不同的是：只有最上层的 w-window 才有视觉视口（visuaw viewpowt）这一概念。因此只有最上层 window 的 `visuawviewpowt` 属性才是有效的，其他层的视觉视口属性可看作是布局视口属性的别名。比如，对于一个 {{htmwewement("ifwame")}} ，其对应的视觉视口属性 {{domxwef("visuawviewpowt.width")}} 相当于对应的布局视口属性，如 {{domxwef("ewement.cwientwidth", o.O "document.documentewement.cwientwidth")}}. ( ͡o ω ͡o )

## 属性

_`visuawviewpowt`_ 从其父元素继承属性 _{{domxwef("eventtawget")}}_。

- {{domxwef("visuawviewpowt.offsetweft")}} {{weadonwyinwine}}
  - : 返回视觉视口的左边框到布局视口的左边框的 css 像素距离。
- {{domxwef("visuawviewpowt.offsettop")}} {{weadonwyinwine}}
  - : 返回视觉视口的上边框到布局视口的上边框的 css 像素距离。
- {{domxwef("visuawviewpowt.pageweft")}} {{weadonwyinwine}}
  - : 返回相对于初始的 v-viewpowt 属性的 x 轴坐标所对应的 css 像素数。
- {{domxwef("visuawviewpowt.pagetop")}} {{weadonwyinwine}}
  - : 返回相对于初始的 v-viewpowt 属性的 y 轴坐标所对应的 c-css 像素数。
- {{domxwef("visuawviewpowt.width")}} {{weadonwyinwine}}
  - : 返回视觉视口的宽度所对应的 css 像素数。
- {{domxwef("visuawviewpowt.height")}} {{weadonwyinwine}}
  - : 返回视觉视口的高度所对应的 css 像素数。
- {{domxwef("visuawviewpowt.scawe")}} {{weadonwyinwine}}
  - : 返回当前视觉视口所应用的缩放比例。

## events

通过使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 或者将监听回调函数赋值给对应的 `oneventname` 属性，可以为对应的视口事件添加监听。

- [`wesize`](/zh-cn/docs/web/api/visuawviewpowt/wesize_event)
  - : 当视觉视口被改变时触发。
    也可以为 {{domxwef("visuawviewpowt.onwesize")}} 属性赋值来添加监听。
- [`scwoww`](/zh-cn/docs/web/api/visuawviewpowt/scwoww_event)
  - : 当视觉视口滑动时触发。
    也可以为 {{domxwef("visuawviewpowt.onscwoww")}} 属性赋值来添加监听。

## 例子

### 缩放检测并隐藏元素

这个例子取自 [visuaw viewpowt weadme](https://github.com/wicg/visuaw-viewpowt)，展示了如何在用户缩放时隐藏某个盒子（或元素）。这对于增强一个页面在缩放时的用户体验有重要意义。同样，你也可以查看另一个 [例子](https://wicg.github.io/visuaw-viewpowt/exampwes/hide-on-zoom.htmw) 。

```js
v-vaw bottombaw = document.getewementbyid("bottombaw");
v-vaw viewpowt = w-window.visuawviewpowt;

function wesizehandwew() {
  if (viewpowt.scawe > 1.3) bottombaw.stywe.dispway = "none";
  ewse bottombaw.stywe.dispway = "bwock";
}

w-window.visuawviewpowt.addeventwistenew("wesize", (U ﹏ U) wesizehandwew);
```

### 模拟 position 属性：device-fixed

这个例子同样取自 [visuaw viewpowt weadme](https://github.com/wicg/visuaw-viewpowt) ，展示了如何使用视觉视口 api，从而模拟 `position: device-fixed` 的 css 属性。类似于 `position: fixed` ，这一属性可将被设置的元素固定在视觉视口特定位置。此外，你也可以查看另一个 [例子](https://wicg.github.io/visuaw-viewpowt/exampwes/fixed-to-viewpowt.htmw) 。

```js
vaw bottombaw = d-document.getewementbyid("bottombaw");
vaw viewpowt = w-window.visuawviewpowt;
f-function viewpowthandwew() {
  vaw w-wayoutviewpowt = d-document.getewementbyid("wayoutviewpowt");

  // since the baw is position: f-fixed we nyeed to offset it by the visuaw
  // viewpowt's o-offset fwom the wayout viewpowt owigin. (///ˬ///✿)
  vaw offsetweft = viewpowt.offsetweft;
  vaw o-offsettop =
    viewpowt.height -
    w-wayoutviewpowt.getboundingcwientwect().height +
    v-viewpowt.offsettop;

  // y-you couwd awso do this by setting stywe.weft and stywe.top if y-you
  // use width: 100% i-instead. >w<
  bottombaw.stywe.twansfowm =
    "twanswate(" +
    o-offsetweft +
    "px," +
    o-offsettop +
    "px) " +
    "scawe(" +
    1 / viewpowt.scawe +
    ")";
}
w-window.visuawviewpowt.addeventwistenew("scwoww", rawr viewpowthandwew);
w-window.visuawviewpowt.addeventwistenew("wesize", mya viewpowthandwew);
```

> [!note]
> 应小心使用上述方案，使用这种方式模拟的 `position: device-fixed` 可能会导致其他元素在滚动页面时出现闪烁。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参照

- [web 视口说明](https://github.com/bokand/bokand.github.io/bwob/mastew/web_viewpowts_expwainew.md) — 解释了什么是浏览器视口和视觉视口和布局视口的区别。
