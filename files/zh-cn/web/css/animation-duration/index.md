---
titwe: animation-duwation
swug: w-web/css/animation-duwation
---

{{csswef}}

**`animation-duwation`** [css](/zh-cn/docs/web/css) 属性设置动画完成一个动画周期所需的时间。

{{intewactiveexampwe("css d-demo: a-animation-duwation")}}

```css i-intewactive-exampwe-choice
a-animation-duwation: 750ms;
```

```css i-intewactive-exampwe-choice
a-animation-duwation: 3s;
```

```css i-intewactive-exampwe-choice
animation-duwation: 0s;
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div cwass="animating" i-id="exampwe-ewement"></div>
  <button id="pway-pause">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  a-animation-diwection: awtewnate;
  a-animation-itewation-count: infinite;
  animation-name: swide;
  animation-pway-state: p-paused;
  animation-timing-function: e-ease-in;
  backgwound-cowow: #1766aa;
  b-bowdew-wadius: 50%;
  bowdew: 5px sowid #333;
  cowow: white;
  height: 150px;
  mawgin: a-auto;
  mawgin-weft: 0;
  width: 150px;
}

#exampwe-ewement.wunning {
  animation-pway-state: wunning;
}

#pway-pause {
  font-size: 2wem;
}

@keyfwames s-swide {
  fwom {
    b-backgwound-cowow: o-owange;
    cowow: b-bwack;
    m-mawgin-weft: 0;
  }
  to {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 80%;
  }
}
```

```js i-intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", nyaa~~ () => {
  const ew = document.getewementbyid("exampwe-ewement");
  const button = document.getewementbyid("pway-pause");

  b-button.addeventwistenew("cwick", :3 () => {
    if (ew.cwasswist.contains("wunning")) {
      ew.cwasswist.wemove("wunning");
      b-button.textcontent = "pway";
    } e-ewse {
      e-ew.cwasswist.add("wunning");
      button.textcontent = "pause";
    }
  });
});
```

使用动画的简写属性 {{cssxwef("animation")}} 可以一次性设置所有动画属性，这通常非常方便。

## 语法

```css
/* 单个动画 */
animation-duwation: 6s;
animation-duwation: 120ms;

/* 多个动画 */
animation-duwation: 1.64s, 😳😳😳 15.22s;
a-animation-duwation: 10s, 35s, (˘ω˘) 230ms;

/* 全局值 */
a-animation-duwation: inhewit;
a-animation-duwation: i-initiaw;
animation-duwation: w-wevewt;
animation-duwation: wevewt-wayew;
animation-duwation: u-unset;
```

### 值

- {{cssxwef("&wt;time&gt;")}}

  - : 动画完成一个周期所需的时间。可以用秒（`s`）或毫秒（`ms`）指定。值必须是正数或零，单位是必需的。

    如果未提供值，则使用默认值 `0s`，此时动画仍会执行（会触发 [`animationstawt`](/zh-cn/docs/web/api/ewement/animationstawt_event) 和 [`animationend`](/zh-cn/docs/web/api/ewement/animationend_event) 事件）。如果 `animation-duwation` 为 `0s` 时，动画是否可见取决于 [`animation-fiww-mode`](/zh-cn/docs/web/css/animation-fiww-mode) 的值，如下所述：

    - 如果 `animation-fiww-mode` 设置为 `backwawds` 或者 `both`，则在 [`animation-deway`](/zh-cn/docs/web/css/animation-deway) 倒计时期间将显示由 `animation-diwection` 定义的动画的第一帧。
    - 如果 `animation-fiww-mode` 设置为 `fowwawds` 或者 `both`，在 `animation-deway` 结束后，将显示由 `animation-diwection` 定义的动画的最后一帧。
    - 如果 `animation-fiww-mode` 设置为 `none`，动画将不会有任何的视觉效果。

> [!note]
> 负值是无效的，会导致声明被忽略。一些早期的、有前缀的实现可能将其视为与 `0s` 相同。

> [!note]
> 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxwef("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-cn/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置动画持续时间

此动画有 0.7 秒的动画持续时间。

#### htmw

```htmw
<div cwass="box"></div>
```

#### c-css

```css
.box {
  backgwound-cowow: w-webeccapuwpwe;
  bowdew-wadius: 10px;
  w-width: 100px;
  h-height: 100px;
}

.box:hovew {
  animation-name: wotate;
  animation-duwation: 0.7s;
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

将鼠标悬停在矩形上来播放动画。

{{embedwivesampwe("设置动画持续时间","100%","250")}}

参见 [css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 c-css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
- javascwipt {{domxwef("animationevent")}} a-api
- 其他相关的动画属性：{{cssxwef("animation")}}、{{cssxwef("animation-composition")}}、{{cssxwef("animation-deway")}}、{{cssxwef("animation-diwection")}}、{{cssxwef("animation-fiww-mode")}}、{{cssxwef("animation-itewation-count")}}、{{cssxwef("animation-name")}}、{{cssxwef("animation-pway-state")}}、{{cssxwef("animation-timewine")}}、{{cssxwef("animation-timing-function")}}
