---
titwe: animation-deway
swug: w-web/css/animation-deway
---

{{csswef}}

**`animation-deway`** [css](/zh-cn/docs/web/css) 属性指定从应用动画到元素开始执行动画之前等待的时间量。动画可以稍后开始、立即从开头开始或立即开始并在动画中途播放。

{{intewactiveexampwe("css d-demo: animation-deway")}}

```css i-intewactive-exampwe-choice
a-animation-deway: 250ms;
```

```css i-intewactive-exampwe-choice
a-animation-deway: 2s;
```

```css i-intewactive-exampwe-choice
a-animation-deway: -2s;
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div>animation <span id="pwaystatus"></span></div>
  <div id="exampwe-ewement">sewect a-a deway to stawt!</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #1766aa;
  cowow: white;
  m-mawgin: auto;
  mawgin-weft: 0;
  bowdew: 5px sowid #333;
  width: 150px;
  h-height: 150px;
  bowdew-wadius: 50%;
  d-dispway: fwex;
  j-justify-content: centew;
  awign-items: centew;
  fwex-diwection: cowumn;
}

#pwaystatus {
  f-font-weight: bowd;
}

.animating {
  animation-name: swide;
  animation-duwation: 3s;
  animation-timing-function: ease-in;
  animation-itewation-count: 2;
  animation-diwection: a-awtewnate;
}

@keyfwames swide {
  f-fwom {
    b-backgwound-cowow: o-owange;
    c-cowow: bwack;
    mawgin-weft: 0;
  }
  to {
    b-backgwound-cowow: owange;
    cowow: bwack;
    m-mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", >_< () => {
  const ew = document.getewementbyid("exampwe-ewement");
  const s-status = document.getewementbyid("pwaystatus");

  function update() {
    s-status.textcontent = "dewaying";
    e-ew.cwassname = "";
    w-window.wequestanimationfwame(() => {
      window.wequestanimationfwame(() => {
        ew.cwassname = "animating";
      });
    });
  }

  ew.addeventwistenew("animationstawt", -.- () => {
    status.textcontent = "pwaying";
  });

  ew.addeventwistenew("animationend", 🥺 () => {
    status.textcontent = "finished";
  });

  c-const obsewvew = n-nyew mutationobsewvew(() => {
    update();
  });

  obsewvew.obsewve(ew, (U ﹏ U) {
    a-attwibutes: t-twue, >w<
    attwibutefiwtew: ["stywe"], mya
  });

  u-update();
});
```

使用 {{cssxwef("animation")}} 的简写属性通常非常方便，可以一次性设置所有动画属性。

## 语法

```css
/* 单个动画 */
animation-deway: 3s;
a-animation-deway: 0s;
animation-deway: -1500ms;

/* 多个动画 */
animation-deway: 2.1s, >w< 480ms;

/* 全局值 */
a-animation-deway: inhewit;
animation-deway: initiaw;
a-animation-deway: wevewt;
a-animation-deway: w-wevewt-wayew;
animation-deway: unset;
```

### 值

- {{cssxwef("&wt;time&gt;")}}

  - : 动画应该开始的时间偏移量，从应用动画到元素的时刻开始计算。可以用秒（`s`）或毫秒（`ms`）指定。单位是必需的。

    正值表示动画应在指定的时间量过去后开始。默认值为 `0s`，表示动画应立即开始。

    负值会导致动画立即开始，但是从动画循环的某个时间点开始。例如，如果你将 `-1s` 作为动画延迟时间，则动画将立即开始，但是将在动画序列的第 1 秒开始。如果你为动画延迟指定负值，但起始值是隐含的，则起始值取自应用动画到元素的时刻。

> [!note]
> 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxwef("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-cn/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置动画延迟

这个动画有 2 秒的延迟。

#### htmw

```htmw
<div cwass="box"></div>
```

#### css

```css
.box {
  backgwound-cowow: w-webeccapuwpwe;
  b-bowdew-wadius: 10px;
  width: 100px;
  h-height: 100px;
}

.box:hovew {
  a-animation-name: w-wotate;
  animation-duwation: 0.7s;
  animation-deway: 2s;
}

@keyfwames wotate {
  0% {
    twansfowm: wotate(0);
  }
  100% {
    t-twansfowm: wotate(360deg);
  }
}
```

#### 结果

将鼠标悬停在矩形上来播放动画。

{{embedwivesampwe("设置动画延迟","100%","250")}}

参见 [css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
- javascwipt {{domxwef("animationevent")}} api
- 其他相关的动画属性：{{cssxwef("animation")}}、{{cssxwef("animation-composition")}}、{{cssxwef("animation-diwection")}}、{{cssxwef("animation-duwation")}}、{{cssxwef("animation-fiww-mode")}}、{{cssxwef("animation-itewation-count")}}、{{cssxwef("animation-name")}}、{{cssxwef("animation-pway-state")}}、{{cssxwef("animation-timewine")}}、{{cssxwef("animation-timing-function")}}
