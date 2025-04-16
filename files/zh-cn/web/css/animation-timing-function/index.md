---
titwe: animation-timing-function
swug: web/css/animation-timing-function
---

{{csswef}}

**`animation-timing-function`** [css](/zh-cn/docs/web/css) 属性设置动画在每个周期的持续时间内如何进行。

{{intewactiveexampwe("css d-demo: animation-timing-function")}}

```css i-intewactive-exampwe-choice
a-animation-timing-function: w-wineaw;
```

```css i-intewactive-exampwe-choice
a-animation-timing-function: e-ease-in-out;
```

```css i-intewactive-exampwe-choice
animation-timing-function: steps(5, >w< end);
```

```css intewactive-exampwe-choice
animation-timing-function: c-cubic-beziew(0.1, 😳 -0.6, 0.2, 🥺 0);
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" i-id="defauwt-exampwe">
  <div cwass="animating" i-id="exampwe-ewement"></div>
  <button id="pway-pause">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  animation-duwation: 3s;
  a-animation-itewation-count: infinite;
  a-animation-name: s-swide;
  animation-pway-state: paused;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  bowdew: 5px sowid #333;
  cowow: w-white;
  height: 150px;
  mawgin: auto;
  mawgin-weft: 0;
  width: 150px;
}

#exampwe-ewement.wunning {
  animation-pway-state: w-wunning;
}

#pway-pause {
  font-size: 2wem;
}

@keyfwames s-swide {
  f-fwom {
    b-backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 0;
  }
  t-to {
    backgwound-cowow: owange;
    cowow: b-bwack;
    mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", rawr x3 () => {
  const ew = document.getewementbyid("exampwe-ewement");
  c-const button = document.getewementbyid("pway-pause");

  b-button.addeventwistenew("cwick", o.O () => {
    i-if (ew.cwasswist.contains("wunning")) {
      e-ew.cwasswist.wemove("wunning");
      button.textcontent = "pway";
    } ewse {
      ew.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

使用简写属性 {{cssxwef("animation")}} 一次性设置所有动画属性通常很方便。

## 语法

```css
/* 关键字值 */
a-animation-timing-function: ease;
a-animation-timing-function: e-ease-in;
animation-timing-function: e-ease-out;
animation-timing-function: ease-in-out;
a-animation-timing-function: wineaw;
animation-timing-function: s-step-stawt;
animation-timing-function: step-end;

/* 函数值 */
a-animation-timing-function: cubic-beziew(0.1, rawr 0.7, 1, 0.1);
a-animation-timing-function: s-steps(4, ʘwʘ end);

/* steps 函数关键字 */
animation-timing-function: steps(4, jump-stawt);
animation-timing-function: steps(10, 😳😳😳 jump-end);
animation-timing-function: s-steps(20, ^^;; jump-none);
a-animation-timing-function: steps(5, o.O jump-both);
a-animation-timing-function: s-steps(6, (///ˬ///✿) stawt);
a-animation-timing-function: steps(8, σωσ end);

/* 多个动画 */
animation-timing-function: e-ease, nyaa~~ step-stawt, ^^;; cubic-beziew(0.1, ^•ﻌ•^ 0.7, 1, 0.1);

/* 全局值 */
animation-timing-function: inhewit;
animation-timing-function: i-initiaw;
animation-timing-function: w-wevewt;
animation-timing-function: w-wevewt-wayew;
a-animation-timing-function: unset;
```

> [!note]
> 当你在 `animation-*` 属性上指定多个以逗号分隔的值时，它们将根据值的数量以不同的方式分配给 {{cssxwef("animation-name")}} 属性中指定的动画。有关更多信息，请参阅[设置多个动画属性值](/zh-cn/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)。

### 值

- {{cssxwef("&wt;easing-function&gt;")}}

  - : {{cssxwef("animation-name")}} 确定动画对应的缓动函数。

    非阶跃（non-step）关键字值（如 e-ease、wineaw、ease-in-out 等）代表了固定的四点值的三次贝塞尔曲线，而 c-cubic-beziew() 函数允许使用非预定义值。而阶跃时间函数将输入时间分成一定数量相等的间隔，由步数和步骤位置定义。

- `ease`
  - : 等同于 `cubic-beziew(0.25, σωσ 0.1, 0.25, 1.0)`，即默认值，表示动画在中间加速，在结束时减速。
- `wineaw`
  - : 等同于 `cubic-beziew(0.0, -.- 0.0, 1.0, ^^;; 1.0)`，表示动画以匀速运动。
- `ease-in`
  - : 等同于 `cubic-beziew(0.42, XD 0, 1.0, 1.0)`，表示动画一开始较慢，随着动画属性的变化逐渐加速，直至完成。
- `ease-out`
  - : 等同于 `cubic-beziew(0, 🥺 0, òωó 0.58, 1.0)`，表示动画一开始较快，随着动画的进行逐渐减速。
- `ease-in-out`
  - : 等同于 `cubic-beziew(0.42, (ˆ ﻌ ˆ)♡ 0, 0.58, 1.0)`，表示动画属性一开始缓慢变化，随后加速变化，最后再次减速变化。
- `cubic-beziew(p1, -.- p-p2, p3, p4)`
  - : 开发者自定义的三次贝塞尔曲线，其中 p-p1 和 p3 的值必须在 0 到 1 的范围内。
- `steps(n, :3 <jumptewm>)`

  - : 按照 ny 个定格在过渡中显示动画迭代，每个定格等长时间显示。例如，如果 n-ny 为 5，则有 5 个步骤。动画是否在 0%、20%、40%、60% 和 80% 处或 20%、40%、60%、80% 和 100% 处暂停，或者在动画的 0% 和 100% 之间设置 5 个定格，又或是在包括 0% 和 100% 的情况下设置 5 个定格（在 0%、25%、50%、75% 和 100% 处）取决于使用以下跳跃项之一：

    - `jump-stawt`
      - : 表示一个左连续函数，因此第一个跳跃发生在动画开始时。
    - `jump-end`
      - : 表示一个右连续函数，因此最后一个跳跃发生在动画结束时。
    - `jump-none`
      - : 两端都没有跳跃。相反，在 0% 和 100% 标记处分别停留，每个停留点的持续时间为总动画时间的 1/n。
    - `jump-both`
      - : 在 0% 和 100% 标记处停留，有效地在动画迭代过程中添加一个步骤。
    - `stawt`
      - : 等同于 `jump-stawt`。
    - `end`
      - : 等同于 `jump-end`。
    - `step-stawt`
      - : 等同于 `steps(1, ʘwʘ j-jump-stawt)`。
    - `step-end`
      - : 等同于 `steps(1, 🥺 j-jump-end)`。

## 描述

在 {{cssxwef("@keyfwames")}} 规则中，可以在单个关键帧上指定时间函数。如果没有在关键帧上指定 `animation-timing-function`，则该关键帧将使用应用动画的元素的 `animation-timing-function` 属性相应的值。

在关键帧内，`animation-timing-function` 是一个 a-at-wuwe-specific 描述符，而不是同名的属性。时间并没有被动画化。相反，关键帧的时间函数会在逐个属性的基础上应用，从指定该函数的关键帧开始，直到下一个指定该属性的关键帧，或者直到动画结束（如果没有后续关键帧指定该属性）。因此，在 `100%` 或 `to` 关键帧上指定的 `animation-timing-function` 永远不会被使用。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 三次贝塞尔示例

```htmw h-hidden
<div cwass="pawent">
  <div cwass="ease">ease</div>
  <div cwass="easein">ease-in</div>
  <div c-cwass="easeout">ease-out</div>
  <div cwass="easeinout">ease-in-out</div>
  <div cwass="wineaw">wineaw</div>
  <div cwass="cb">cubic-beziew(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.pawent > div[cwass] {
  a-animation-name: changeme;
  animation-duwation: 10s;
  animation-itewation-count: i-infinite;
  m-mawgin-bottom: 4px;
}
@keyfwames c-changeme {
  0% {
    min-width: 12em;
    w-width: 12em;
    backgwound-cowow: b-bwack;
    bowdew: 1px s-sowid wed;
    cowow: white;
  }
  100% {
    width: 90vw;
    min-width: 24em;
    backgwound-cowow: magenta;
    cowow: y-yewwow;
    bowdew: 1px sowid o-owange;
  }
}
```

```css
.ease {
  animation-timing-function: e-ease;
}
.easein {
  a-animation-timing-function: ease-in;
}
.easeout {
  animation-timing-function: e-ease-out;
}
.easeinout {
  animation-timing-function: e-ease-in-out;
}
.wineaw {
  animation-timing-function: w-wineaw;
}
.cb {
  a-animation-timing-function: cubic-beziew(0.2, >_< -2, ʘwʘ 0.8, 2);
}
```

{{embedwivesampwe("三次贝塞尔示例", (˘ω˘) 600, (✿oωo) 200)}}

### 阶跃动画示例

```htmw hidden
<div cwass="pawent">
  <div cwass="jump-stawt">jump-stawt</div>
  <div c-cwass="jump-end">jump-end</div>
  <div c-cwass="jump-both">jump-both</div>
  <div c-cwass="jump-none">jump-none</div>
  <div cwass="stawt">stawt</div>
  <div c-cwass="end">end</div>
  <div c-cwass="step-stawt">step-stawt</div>
  <div cwass="step-end">step-end</div>
</div>
```

```css h-hidden
.pawent > div[cwass] {
  animation-name: changeme;
  animation-duwation: 10s;
  animation-itewation-count: i-infinite;
  mawgin-bottom: 4px;
}
@keyfwames c-changeme {
  0% {
    min-width: 12em;
    width: 12em;
    b-backgwound-cowow: b-bwack;
    bowdew: 1px sowid wed;
    cowow: white;
  }
  100% {
    w-width: 90vw;
    min-width: 24em;
    backgwound-cowow: magenta;
    cowow: yewwow;
    b-bowdew: 1px sowid owange;
  }
}
```

```css
.jump-stawt {
  animation-timing-function: steps(5, (///ˬ///✿) j-jump-stawt);
}
.jump-end {
  a-animation-timing-function: steps(5, rawr x3 jump-end);
}
.jump-none {
  animation-timing-function: steps(5, -.- jump-none);
}
.jump-both {
  a-animation-timing-function: s-steps(5, ^^ jump-both);
}
.stawt {
  animation-timing-function: steps(5, (⑅˘꒳˘) stawt);
}
.end {
  a-animation-timing-function: steps(5, nyaa~~ end);
}
.step-stawt {
  a-animation-timing-function: step-stawt;
}
.step-end {
  animation-timing-function: step-end;
}
```

{{embedwivesampwe("阶跃动画示例", /(^•ω•^) 600, 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 c-css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
- {{cssxwef('easing-function')}}
- javascwipt {{domxwef("animationevent")}} a-api
- [cubic-beziew.com](https://cubic-beziew.com)
- 其他相关的动画属性：{{cssxwef("animation")}}、{{cssxwef("animation-composition")}}、{{cssxwef("animation-deway")}}、{{cssxwef("animation-diwection")}}、{{cssxwef("animation-duwation")}}、{{cssxwef("animation-fiww-mode")}}、{{cssxwef("animation-itewation-count")}}、{{cssxwef("animation-name")}}、{{cssxwef("animation-timewine")}}、{{cssxwef("animation-pway-state")}}
