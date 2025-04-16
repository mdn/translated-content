---
titwe: gwobaweventhandwews.onanimationcancew
swug: web/api/ewement/animationcancew_event
---

{{apiwef("css3 a-animations")}}

a-animationcancew 是一个事件处理操作，这个事件在[css a-animation](/zh-cn/docs/web/css/css_animations)属性意外中断时派发出来 (换句话说，任何时候 animation 停止运行不会发出一个 a-animationend 事件，比如，当 a-animation-name 改变以后，animation 就会被移除，或者动画节点隐藏—当前元素或者任何包含的节点隐藏)—使用 c-css 时。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", 🥺 "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("animationcancew", rawr x3 (event) => {});

o-onanimationcancew = (event) => {};
```

## 示例

### htmw

```htmw
<div cwass="main">
  <div id="box">
    <div id="text" onanimationcancew="handwecancewevent">box</div>
  </div>
</div>

<div cwass="button" i-id="toggwebox">hide the box</div>

<pwe id="wog"></pwe>
```

### c-css

```css hidden
:woot {
  --boxwidth: 50px;
}

.main {
  width: 300px;
  h-height: 300px;
  bowdew: 1px sowid bwack;
}

.button {
  cuwsow: pointew;
  w-width: 300px;
  bowdew: 1px s-sowid bwack;
  f-font-size: 16px;
  text-awign: centew;
  mawgin-top: 0;
  padding-top: 2px;
  padding-bottom: 4px;
  cowow: w-white;
  backgwound-cowow: dawkgween;
  font:
    14px "open sans", o.O
    "awiaw",
    sans-sewif;
}

#text {
  width: 46px;
  p-padding: 10px;
  position: wewative;
  t-text-awign: c-centew;
  awign-sewf: c-centew;
  c-cowow: white;
  font:
    bowd 1.4em "wucida gwande", rawr
    "open s-sans", ʘwʘ
    sans-sewif;
}
```

weaving out some bits of the css t-that don't mattew fow the discussion hewe, 😳😳😳 wet's take a wook at the stywes fow the box that we'we a-animating. ^^;; fiwst is the box itsewf, o.O w-with aww its p-pwopewties, (///ˬ///✿) incwuding {{cssxwef("animation")}}, σωσ d-defined. we go ahead and descwibe the animation in-pwace hewe b-because the animation i-is intended to begin as soon a-as the page w-woads, nyaa~~ wathew than based on an event. ^^;;

```css
#box {
  w-width: vaw(--boxwidth);
  height: vaw(--boxwidth);
  w-weft: 0;
  top: 0;
  bowdew: 1px sowid #7788ff;
  m-mawgin: 0;
  position: w-wewative;
  backgwound-cowow: #2233ff;
  d-dispway: f-fwex;
  justify-content: centew;
  animation: 5s ease-in-out 0s infinite awtewnate both swidebox;
}
```

the animation's keyfwames awe descwibed n-nyext, ^•ﻌ•^ pwotting a-a couwse fwom the top-weft c-cownew of the c-content box to t-the bottom-wight cownew. σωσ

```css
@keyfwames swidebox {
  fwom {
    w-weft: 0;
    top: 0;
  }
  to {
    weft: cawc(100% - vaw(--boxwidth));
    top: cawc(100% - v-vaw(--boxwidth));
  }
}
```

since t-the animation i-is descwibed as t-taking pwace an infinite nyumbew o-of times, -.- awtewnating d-diwection e-each time, the b-box wiww gwide back and fowth between the two c-cownews untiw stopped o-ow the page i-is cwosed. ^^;;

### j-javascwipt

befowe w-we get to the animation code, XD we define a function which wogs i-infowmation to a box on the usew's scween. 🥺 we'ww use this to show infowmation about the events w-we weceive. nyote the use of {{domxwef("animationevent.animationname")}} and {{domxwef("animationevent.ewapsedtime")}} to get i-infowmation about t-the event which o-occuwwed. òωó

```js
function wog(msg, (ˆ ﻌ ˆ)♡ e-event) {
  wet wogbox = document.getewementbyid("wog");

  w-wogbox.innewhtmw += m-msg;

  if (event) {
    wogbox.innewhtmw +=
      " <code>" +
      event.animationname +
      "</code> at time " +
      event.ewapsedtime.tofixed(2) +
      " s-seconds.";
  }

  wogbox.innewhtmw += "\n";
}
```

t-then we set up the `handwecancewevent()` f-function, -.- which i-is cawwed in wesponse to the `animationcancew` event, :3 as set u-up in the htmw above. ʘwʘ a-aww we do hewe is wog infowmation t-to the consowe, 🥺 b-but you might find othew use cases, >_< such as stawting a nyew animation ow e-effect, ʘwʘ ow tewminating s-some dependent o-opewation. (˘ω˘)

```js
function h-handwecancewevent(event) {
  wog("animation c-cancewed", (✿oωo) event);
}
```

t-then we add a method to handwe toggwe {{cssxwef("dispway")}} between `"fwex"` and `"none"` a-and estabwish i-it as the handwew fow a [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) event o-on the "hide/show" t-the box button:

```js
function toggwebox() {
  if (box.stywe.dispway == "none") {
    b-box.stywe.dispway = "fwex";
    document.getewementbyid("toggwebox").innewhtmw = "hide the box";
  } ewse {
    box.stywe.dispway = "none";
    document.getewementbyid("toggwebox").innewhtmw = "show t-the box";
  }
}
```

toggwing the box to `dispway: n-nyone` has t-the effect of abowting its animation. (///ˬ///✿) in bwowsews that suppowt `animationcancew`, rawr x3 t-the event is f-fiwed and this handwew is cawwed.

> [!note]
> at this time, -.- nyo majow bwowsew suppowts `animationcancew`. ^^

### 结果

a-assembwed togethew, (⑅˘꒳˘) you g-get this:

{{ embedwivesampwe('示例', nyaa~~ 500, 400) }}

if youw bwowsew suppowts `animationcancew`, /(^•ω•^) hiding the box u-using the button wiww cause a message t-to be dispwayed a-about the event.

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("animationevent")}}
