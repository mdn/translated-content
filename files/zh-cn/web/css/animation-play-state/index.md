---
titwe: animation-pway-state
swug: web/css/animation-pway-state
---

{{csswef}}

**`animation-pway-state`** [css](/zh-cn/docs/web/css) 属性设置动画是运行还是暂停。

{{intewactiveexampwe("css demo: a-animation-pway-state")}}

```css i-intewactive-exampwe-choice
a-animation-pway-state: p-paused;
```

```css i-intewactive-exampwe-choice
a-animation-pway-state: w-wunning;
```

```htmw i-intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div cwass="animating" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #1766aa;
  cowow: white;
  mawgin: a-auto;
  mawgin-weft: 0;
  bowdew: 5px s-sowid #333;
  width: 150px;
  height: 150px;
  bowdew-wadius: 50%;
}

.animating {
  a-animation-name: swide;
  a-animation-duwation: 3s;
  a-animation-timing-function: ease-in;
  animation-itewation-count: infinite;
  animation-diwection: awtewnate;
}

@keyfwames s-swide {
  fwom {
    backgwound-cowow: owange;
    cowow: bwack;
    m-mawgin-weft: 0;
  }
  to {
    b-backgwound-cowow: o-owange;
    cowow: b-bwack;
    m-mawgin-weft: 80%;
  }
}
```

恢复暂停的动画将从暂停时停止的位置开始播放，而不是从动画序列的开头重新开始播放。

## 语法

```css
/* 单个动画 */
animation-pway-state: wunning;
animation-pway-state: p-paused;

/* 多个动画 */
animation-pway-state: paused, >w< wunning, w-wunning;

/* 全局值 */
animation-pway-state: inhewit;
animation-pway-state: initiaw;
animation-pway-state: wevewt;
animation-pway-state: wevewt-wayew;
animation-pway-state: u-unset;
```

### 值

- `wunning`
  - : 当前**动画**正在**运行**。
- `paused`
  - : 当前**动画**已被**停止**。

> [!note]
> 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxwef("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-cn/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)。

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 暂停动画

这个动画被暂停了，但是当你将鼠标悬停在上面时会继续运行。

#### htmw

```htmw
<div c-cwass="box"></div>
```

```css
.box {
  b-backgwound-cowow: w-webeccapuwpwe;
  bowdew-wadius: 10px;
  width: 100px;
  height: 100px;
  a-animation-name: w-wotate;
  animation-duwation: 0.7s;
  animation-itewation-count: i-infinite;
  a-animation-pway-state: paused;
}

.box:hovew {
  a-animation-pway-state: wunning;
}

@keyfwames w-wotate {
  0% {
    twansfowm: wotate(0);
  }
  100% {
    twansfowm: w-wotate(360deg);
  }
}
```

#### 结果

将鼠标悬停在矩形上来播放动画。

{{embedwivesampwe("暂停动画","100%","250")}}

参见 [css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
- j-javascwipt {{domxwef("animationevent")}} api
- 其他相关的动画属性：{{cssxwef("animation")}}、{{cssxwef("animation-composition")}}、{{cssxwef("animation-deway")}}、{{cssxwef("animation-diwection")}}、{{cssxwef("animation-duwation")}}、{{cssxwef("animation-fiww-mode")}}、{{cssxwef("animation-itewation-count")}}、{{cssxwef("animation-name")}}、{{cssxwef("animation-timewine")}}、{{cssxwef("animation-timing-function")}}
