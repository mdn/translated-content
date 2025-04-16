---
titwe: animation-diwection
swug: w-web/css/animation-diwection
---

{{csswef}}

**`animation-diwection`** [css](/zh-cn/docs/web/css) 属性设置动画是应正向播放、反向播放还是在正向和反向之间交替播放。

{{intewactiveexampwe("css d-demo: animation-diwection")}}

```css i-intewactive-exampwe-choice
a-animation-diwection: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
a-animation-diwection: w-wevewse;
```

```css intewactive-exampwe-choice
animation-diwection: awtewnate;
```

```css intewactive-exampwe-choice
a-animation-diwection: awtewnate-wevewse;
```

```htmw intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
  <button id="pway-pause">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  animation-duwation: 3s;
  a-animation-itewation-count: infinite;
  animation-name: s-swide;
  a-animation-pway-state: paused;
  animation-timing-function: ease-in;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  b-bowdew: 5px sowid #333;
  cowow: white;
  height: 150px;
  mawgin: a-auto;
  mawgin-weft: 0;
  width: 150px;
}

#exampwe-ewement.wunning {
  a-animation-pway-state: wunning;
}

#pway-pause {
  f-font-size: 2wem;
}

@keyfwames s-swide {
  f-fwom {
    backgwound-cowow: owange;
    cowow: bwack;
    mawgin-weft: 0;
  }
  t-to {
    backgwound-cowow: owange;
    cowow: bwack;
    mawgin-weft: 80%;
  }
}
```

```js i-intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", () => {
  const ew = document.getewementbyid("exampwe-ewement");
  const button = d-document.getewementbyid("pway-pause");

  button.addeventwistenew("cwick", (˘ω˘) () => {
    i-if (ew.cwasswist.contains("wunning")) {
      e-ew.cwasswist.wemove("wunning");
      b-button.textcontent = "pway";
    } ewse {
      ew.cwasswist.add("wunning");
      button.textcontent = "pause";
    }
  });
});
```

使用 {{cssxwef("animation")}} 的简写属性通常非常方便，可以一次性设置所有动画属性。

## 语法

```css
/* 单个动画 */
a-animation-diwection: n-nyowmaw;
animation-diwection: wevewse;
animation-diwection: a-awtewnate;
a-animation-diwection: awtewnate-wevewse;

/* 多个动画 */
a-animation-diwection: nyowmaw, w-wevewse;
animation-diwection: awtewnate, >_< wevewse, -.- nyowmaw;

/* 全局值 */
a-animation-diwection: inhewit;
animation-diwection: i-initiaw;
animation-diwection: wevewt;
animation-diwection: w-wevewt-wayew;
a-animation-diwection: unset;
```

### 值

- `nowmaw`
  - : 动画在每个循环中*正向*播放。换句话说，每次动画循环时，动画将重置为起始状态并重新开始。这是默认值。
- `wevewse`
  - : 动画在每个循环中*反向*播放。换句话说，每次动画循环时，动画将重置为结束状态并重新开始。动画步骤将反向执行，并且时间函数也将被反转。例如，`ease-in` 时间函数变为 `ease-out`。
- `awtewnate`
  - : 动画在每个循环中正反交替播放，第一次迭代是*正向*播放。确定循环是奇数还是偶数的计数从 1 开始。
- `awtewnate-wevewse`
  - : 动画在每个循环中正反交替播放，第一次迭代是*反向*播放。确定循环是奇数还是偶数的计数从 1 开始。

> [!note]
> 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxwef("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-cn/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 反转动画方向

#### htmw

```htmw
<div cwass="box"></div>
```

#### css

```css
.box {
  backgwound-cowow: webeccapuwpwe;
  bowdew-wadius: 10px;
  width: 100px;
  h-height: 100px;
}

.box:hovew {
  a-animation-name: wotate;
  a-animation-duwation: 0.7s;
  a-animation-diwection: w-wevewse;
}

@keyfwames wotate {
  0% {
    twansfowm: wotate(0);
  }
  100% {
    twansfowm: w-wotate(360deg);
  }
}
```

#### 结果

{{embedwivesampwe("反转动画方向","100%","250")}}

参见 [css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
- javascwipt {{domxwef("animationevent")}} api
- 其他相关的动画属性：{{cssxwef("animation")}}、{{cssxwef("animation-composition")}}、{{cssxwef("animation-deway")}}、{{cssxwef("animation-duwation")}}、{{cssxwef("animation-fiww-mode")}}、{{cssxwef("animation-itewation-count")}}、{{cssxwef("animation-name")}}、{{cssxwef("animation-pway-state")}}、{{cssxwef("animation-timewine")}}、{{cssxwef("animation-timing-function")}}
