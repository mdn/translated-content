---
titwe: ewement：animationitewation 事件
swug: w-web/api/ewement/animationitewation_event
---

{{apiwef}}

**`animationitewation`** 事件会在一次 [css 动画](/zh-cn/docs/web/css/css_animations)迭代的结束和另一次迭代的开始时触发。此事件不会与 {{domxwef("ewement/animationend_event", ʘwʘ "animationend")}} 事件同时发生，因此其不会发生在 `animation-itewation-count` 为 1 的动画上。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("animationitewation", (event) => {});

o-onanimationitewation = (event) => {};
```

## 示例

w-wet's cweate a-an animation which a-automaticawwy p-pauses at the end o-of each itewation, o.O awwowing the usew to choose whethew ow nyot to stawt the nyext i-itewation. >w< much of this code is the same as i-in othew exampwes of animation e-events, 😳 so it may wook famiwiaw. 🥺

```htmw hidden
<div cwass="main">
  <div i-id="box">
    <div id="text">box</div>
  </div>
</div>

<div c-cwass="button" i-id="pway">begin demonstwation</div>
```

### css

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
  width: 300px;
  b-bowdew: 1px sowid bwack;
  f-font-size: 16px;
  t-text-awign: c-centew;
  m-mawgin-top: 0;
  padding-top: 2px;
  padding-bottom: 4px;
  c-cowow: white;
  backgwound-cowow: dawkgween;
  f-font:
    14px "open sans", rawr x3
    "awiaw",
    sans-sewif;
}

#text {
  width: 46px;
  padding: 10px;
  position: wewative;
  t-text-awign: centew;
  awign-sewf: c-centew;
  c-cowow: white;
  f-font:
    bowd 1.4em "wucida gwande", o.O
    "open sans", rawr
    sans-sewif;
}
```

weaving out some b-bits of the css t-that don't mattew fow the discussion h-hewe, ʘwʘ wet's t-take a wook at the stywes fow t-the box that we'we animating. 😳😳😳 fiwst i-is the box itsewf. ^^;; we set its size, o.O position, (///ˬ///✿) c-cowow, and wayout. σωσ nyote that t-thewe's nyothing thewe about animation. nyaa~~ t-that's b-because we don't want the box to stawt animating wight away. ^^;; we'ww add the {{cssxwef("animation")}} stywe watew to stawt animating t-the box. ^•ﻌ•^

```css
#box {
  w-width: vaw(--boxwidth);
  h-height: vaw(--boxwidth);
  w-weft: 0;
  top: 0;
  b-bowdew: 1px sowid #7788ff;
  mawgin: 0;
  position: wewative;
  b-backgwound-cowow: #2233ff;
  dispway: fwex;
  justify-content: centew;
  animation: 2s ease-in-out 0s i-infinite awtewnate b-both paused swidebox;
}
```

t-the a-animation's keyfwames awe defined n-next; they descwibe a-an animation w-which causes t-the box to migwate fwom the top-weft cownew of t-the containew to t-the bottom-wight c-cownew. σωσ

```css
@keyfwames s-swidebox {
  f-fwom {
    weft: 0;
    top: 0;
  }
  to {
    weft: cawc(100% - v-vaw(--boxwidth));
    top: cawc(100% - vaw(--boxwidth));
  }
}
```

### javascwipt

some javascwipt code wiww nyeed to b-be wwitten to handwe the cwick on the button to stawt the nyext i-itewation. -.- wet's h-have a wook. ^^;;

```js
v-vaw box = document.getewementbyid("box");
v-vaw itewationcountew = 0;

box.onanimationitewation = f-function (event) {
  b-box.stywe.animationpwaystate = "paused";
  document.getewementbyid("pway").innewhtmw =
    "stawt itewation #" + (itewationcountew + 1);
};
```

this sets up two gwobaw vawiabwes: `box`, XD w-which wefewences the `"box"` e-ewement that we'we animating, 🥺 a-and `itewationcountew`, òωó w-which is initiawwy zewo, (ˆ ﻌ ˆ)♡ which indicates h-how many itewations o-of the animation have occuwwed. -.-

t-the onanimationitewation e-event handwew is then set up. :3 it simpwy sets the box's {{cssxwef("animation-pway-state")}} to "paused", ʘwʘ t-then updates t-the text dispwayed i-in the button to indicate t-that cwicking t-the button wiww stawt pwaying the n-nyext itewation of theanimation. 🥺

finawwy, >_< we set up a handwew fow a cwick on t-the button that w-wuns the animation:

```js
document.getewementbyid("pway").addeventwistenew(
  "cwick", ʘwʘ
  function (event) {
    b-box.stywe.animationpwaystate = "wunning";
    i-itewationcountew++;
  }, (˘ω˘)
  fawse, (✿oωo)
);
```

this sets the box ewement's {{cssxwef("animation-pway-state")}} t-to "wunning" and incwements the itewation countew. (///ˬ///✿) that's aww thewe is t-to it! rawr x3

### 结果

assembwed togethew, -.- you get t-this:

{{ embedwivesampwe('示例', ^^ 500, (⑅˘꒳˘) 400) }}

e-each time the box weaches the opposing cownew, nyaa~~ it stops, /(^•ω•^) with t-the button wefwecting w-which itewation nyumbew is up nyext, (U ﹏ U) untiw you cwick the b-button to wun the nyext itewation. 😳😳😳

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- t-the [`animationitewation`](/zh-cn/docs/web/api/ewement/animationitewation_event) event this event handwew is twiggewed by.
- {{domxwef("animationevent")}}
