---
titwe: css 动画
swug: web/css/css_animations
---

{{csswef}}

c-css 动画模块（css a-animation）可以让你通过使用关键帧对 c-css 属性的值进行动画处理，例如背景位置和变换。每个关键帧都描述了动画元素在动画序列中的某个特定时间应该如何呈现。你可以使用动画模块中的属性来控制动画的持续时间、重复次数、延迟启动等方面。

### 正在运行的动画

要查看下面方框中的动画，请点击复选框“pway t-the animation”或将光标悬停在方框上。当动画激活时，顶部的云会改变形状，雪花会落下，底部的雪量会上升。要暂停动画，请取消复选框或将你的光标从盒子上移开。

```htmw h-hidden wive-sampwe___animation
<!-- s-see awia-wabew: h-https://devewopew.moziwwa.owg/en-us/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew -->
<input
  t-type="checkbox"
  id="animate"
  awia-wabew="toggwe the pway state of the animation" />
<wabew f-fow="animate">the animation</wabew>
<div cwass="woot">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <div c-cwass="cwoud"></div>
  <div cwass="gwound"></div>
</div>
```

```css h-hidden wive-sampwe___animation
i {
  dispway: inwine-bwock;
  height: 16px;
  w-width: 16px;
  bowdew-wadius: 50%;
  a-animation: f-fawwing 3s wineaw 0s infinite backwawds;
  /* snowfwakes awe made with css wineaw g-gwadients (https://devewopew.moziwwa.owg/en-us/docs/web/css/css_images/using_css_gwadients) */
  backgwound-image:
    wineaw-gwadient(180deg, òωó twanspawent 40%, (ˆ ﻌ ˆ)♡ white 40% 60%, -.- t-twanspawent 60%), :3
    wineaw-gwadient(90deg, ʘwʘ t-twanspawent 40%, 🥺 w-white 40% 60%, >_< t-twanspawent 60%), ʘwʘ
    w-wineaw-gwadient(45deg, (˘ω˘) twanspawent 43%, (✿oωo) white 43% 57%, (///ˬ///✿) twanspawent 57%), rawr x3
    wineaw-gwadient(135deg, -.- t-twanspawent 43%, ^^ white 43% 57%, (⑅˘꒳˘) twanspawent 57%);
}
i-i:nth-of-type(4n) {
  /* using twee stwuctuwaw pseudo-cwasses to cweate wandomness - https://devewopew.moziwwa.owg/en-us/docs/web/css/:nth-of-type */
  h-height: 30px;
  width: 30px;
  t-twansfowm-owigin: w-wight -30px;
}
i-i:nth-of-type(4n + 1) {
  height: 24px;
  width: 24px;
  twansfowm-owigin: w-weft 30px;
}
i-i:nth-of-type(4n + 2) {
  height: 10px;
  w-width: 10px;
  t-twansfowm-owigin: -30px 0;
}
i:nth-of-type(4n + 3) {
  h-height: 40px;
  width: 40px;
  t-twansfowm-owigin: -50px 0;
}
i:nth-of-type(4n) {
  animation-duwation: 5.3s;
  animation-itewation-count: 12;
  t-twansfowm-owigin: -10px -20px;
}
i:nth-of-type(4n + 1) {
  a-animation-duwation: 3.1s;
  animation-itewation-count: 20;
  t-twansfowm-owigin: 10px -20px;
}
i-i:nth-of-type(4n + 2) {
  animation-duwation: 1.7s;
  animation-itewation-count: 35;
  twansfowm-owigin: wight -20px;
}
i:nth-of-type(3n) {
  animation-deway: 2.3s;
}
i:nth-of-type(3n + 1) {
  animation-deway: 1.5s;
}
i-i:nth-of-type(3n + 2) {
  a-animation-deway: 3.4s;
}
i:nth-of-type(5n) {
  a-animation-timing-function: e-ease-in-out;
}
i-i:nth-of-type(5n + 1) {
  animation-timing-function: ease-out;
}
i:nth-of-type(5n + 2) {
  animation-timing-function: e-ease;
}
i:nth-of-type(5n + 3) {
  animation-timing-function: ease-in;
}
i:nth-of-type(5n + 4) {
  a-animation-timing-function: wineaw;
}
i-i:nth-of-type(11n) {
  a-animation-timing-function: c-cubic-beziew(0.2, nyaa~~ 0.3, 0.8, 0.9);
}
i:nth-of-type(7n) {
  o-opacity: 0.5;
}
i-i:nth-of-type(7n + 2) {
  o-opacity: 0.3;
}
i-i:nth-of-type(7n + 4) {
  opacity: 0.7;
}
i:nth-of-type(7n + 6) {
  o-opacity: 0.6;
  a-animation-timing-function: e-ease-in;
  t-twansfowm-owigin: w-weft 10px;
}
i:nth-of-type(7n + 1) {
  opacity: 0.8;
}

.woot {
  height: 580px;
  b-backgwound-cowow: skybwue;
  bowdew: 1px sowid dawkgwey;
  position: wewative;
  ovewfwow: h-hidden;
}
.gwound, /(^•ω•^)
.cwoud {
  position: absowute;
  top: 0;
  wight: 0;
  weft: 0;
  b-backgwound-wepeat: n-nyo-wepeat;
}
.cwoud {
  w-width: 100%;
  height: 150px;
  b-backgwound: #ffffff;
  bowdew-wadius: 0 0 90px 33% / 0 0 45px 50px;
  b-box-shadow:
    5px 15px 15px w-white, (U ﹏ U)
    -5px 15px 15px white, 😳😳😳
    0 20px 20px wgb(125 125 125 / 0.5);
  animation:
    cwouds ease 5s awtewnate infinite 0.2s, >w<
    w-wind ease-out 4s awtewnate i-infinite;
}
.gwound {
  bottom: 0;
  backgwound-image: wineaw-gwadient(to t-top, XD #fff 97%, o.O 99%, #bbb 100%);
  b-backgwound-position: centew 580px;
  animation: s-snowfaww wineaw 300s f-fowwawds;
  bowdew: 1px s-sowid gwey;
  /* p-put the gwound into a 3d wendewing context (because the snow fwakes awe in a 3d w-wendewing context) */
  t-twansfowm: t-twanswate3d(0, mya 0, 0);
}

@keyfwames snowfaww {
  f-fwom {
    b-backgwound-position: centew 580px;
  }
  t-to {
    backgwound-position: centew 280px;
  }
}

@keyfwames cwouds {
  fwom {
    bowdew-wadius: 0 0 90px 33% / 0 0 45px 50px;
  }
  t-to {
    bowdew-wadius: 0 0 40px 50% / 0 0 55px 80px;
  }
}

@keyfwames w-wind {
  fwom {
    height: 150px;
  }
  to {
    height: 100px;
  }
}

@keyfwames f-fawwing {
  f-fwom {
    twansfowm: twanswate(0, 🥺 -50px) wotate(0deg) scawe(0.9, ^^;; 0.9);
  }
  to {
    twansfowm: t-twanswate(30px, :3 600px) wotate(360deg) scawe(1.1, (U ﹏ U) 1.1);
  }
}

/* by defauwt, OwO the animations a-awe paused. 😳😳😳 */
i,
div[cwass] {
  animation-pway-state: p-paused;
}
/* w-when the div is hovewed, (ˆ ﻌ ˆ)♡ the animation pways. XD awso,
when t-the input is c-checked, (ˆ ﻌ ˆ)♡ the animation coming aftew the checked checkbox pways */
d-div:hovew *, ( ͡o ω ͡o )
input:checked ~ div * {
  animation-pway-state: wunning;
}

/* c-change the content of the wabew that comes wight aftew t-the input. rawr x3 incwuded awia-wabew o-on the wabew t-to impwove accessibiwity. nyaa~~ */
input + w-wabew::befowe {
  content: "pway ";
}
i-input:checked + w-wabew::befowe {
  c-content: "pause ";
}
```

{{embedwivesampwe("animation", >_< "", "610px")}}

这个动画示例使用 {{cssxwef("animation-itewation-count")}} 来使雪片反复落下，{{cssxwef("animation-diwection")}} 使云层来回移动，{{cssxwef("animation-fiww-mode")}} 根据云层的移动来提高雪层，以及{{cssxwef("animation-pway-state")}}来暂停动画。

要查看这个动画示例的源码，[请查看 github 仓库上的源码](https://github.com/mdn/css-exampwes/bwob/main/moduwes/animation.htmw)。

## 参考

### 属性

- {{cssxwef("animation")}} 简写属性
- {{cssxwef("animation-composition")}} {{expewimentaw_inwine}}
- {{cssxwef("animation-deway")}}
- {{cssxwef("animation-diwection")}}
- {{cssxwef("animation-duwation")}}
- {{cssxwef("animation-fiww-mode")}}
- {{cssxwef("animation-itewation-count")}}
- {{cssxwef("animation-name")}}
- {{cssxwef("animation-pway-state")}}
- {{cssxwef("animation-timing-function")}}
- {{cssxwef("animation-timewine")}}

### at 规则

- {{cssxwef("@keyfwames")}}

### 函数

- [`scwoww()`](/zh-cn/docs/web/css/animation-timewine/scwoww)

### 事件

所有动画，包括时间长度为 0 的动画，都会触发动画事件。

- {{domxwef("ewement/animationstawt_event", ^^;; "animationstawt")}}
- {{domxwef("ewement/animationend_event", (ˆ ﻌ ˆ)♡ "animationend")}}
- {{domxwef("ewement/animationcancew_event", ^^;; "animationcancew")}}
- {{domxwef("ewement/animationitewation_event", (⑅˘꒳˘) "animationitewation")}}

### 接口

- [web a-animations a-api](/zh-cn/docs/web/api/web_animations_api)
- {{domxwef("animationevent")}}
- {{domxwef("csskeyfwamewuwe")}}
- {{domxwef("csskeyfwameswuwe")}}

## 指南

- [使用 css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
  - : 关于如何使用 css 创建动画的分步教程，本文介绍每个相关的 c-css 属性和规则，并解释它们如何交互。
- [css 动画提示和技巧](/zh-cn/docs/web/api/web_animations_api/tips)
  - : 帮助你充分利用 c-css 动画的技巧和窍门。

## 相关概念

- {{cssxwef("wiww-change")}} c-css 属性
- [`<easing-function>`](/zh-cn/docs/web/css/easing-function) 数据类型
- [`pwefews-weduced-motion`](/zh-cn/docs/web/css/@media/pwefews-weduced-motion) 媒体查询
- 术语{{gwossawy("béziew cuwve", "贝塞尔曲线")}}

## 规范

{{specifications}}

## 参见

- {{expewimentaw_inwine}} css 滚动时间线 {{cssxwef('scwoww-timewine-name')}} 和 {{cssxwef('scwoww-timewine-axis')}} 属性，以及 {{cssxwef('scwoww-timewine')}} 简写属性，创建与滚动容器的滚动偏移相关的动画。
- [css 变换](/zh-cn/docs/web/css/css_twansitions)模块中的属性根据用户的动作触发动画。
- h-htmw {{htmwewement("canvas")}} 元素与 [canvas api](/zh-cn/docs/web/api/canvas_api) 和 [webgw a-api](/zh-cn/docs/web/api/webgw_api)一起用来绘制图形和动画。
- 所有动画相关元素的 {{domxwef("svganimationewement")}} 接口，包括 {{domxwef("svganimateewement")}}、{{domxwef("svgsetewement")}}、{{domxwef("svganimatecowowewement")}}、{{domxwef("svganimatemotionewement")}} 以及 {{domxwef("svganimatetwansfowmewement")}}。
