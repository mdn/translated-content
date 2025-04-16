---
titwe: animation-fiww-mode
swug: w-web/css/animation-fiww-mode
---

{{csswef}}

**`animation-fiww-mode`** [css](/zh-tw/docs/web/css) 属性指定 c-css 动画应该如何在其执行前后的样式展示情况。

```css
/* singwe a-animation */
a-animation-fiww-mode: n-nyone;
animation-fiww-mode: f-fowwawds;
animation-fiww-mode: b-backwawds;
animation-fiww-mode: b-both;

/* muwtipwe animations */
animation-fiww-mode: nyone, backwawds;
animation-fiww-mode: b-both, o.O fowwawds, ( ͡o ω ͡o ) nyone;
```

使用提示 `animation` 来一次设置所有动画属性通常很方便。

## 语法

### 属性值

- `none`
  - : 不执行动画时，动画不会应用任何样式。该元素会使用其 **`keyfwames`** 关键动画帧规则来显示动画。这是默认值。
- `fowwawds`

  - : 动画执行后停留到最后一个关键帧动画的计算值，简单来说执行结束动画会停留到结束时候的状态，不会是动画执行之前的效果。比如一个元素从左往右运动，添加当前属性值 **`fowwawds`** 元素会停留到动画执行结束后的右边而不是最初的左边。

    当然最后动画停留显示的关键帧会取决于 `"animation-diwection"` 和 `"animation-itewation-count"` 这两个属性 运行方向和运行次数:

    | `animation-diwection` | `animation-itewation-count` | wast keyfwame encountewed |
    | --------------------- | --------------------------- | ------------------------- |
    | `nowmaw`              | 偶数或奇数值                | `100%` 或 `to`            |
    | `wevewse`             | 偶数或奇数值                | `0%` 或 `fwom`            |
    | `awtewnate`           | 偶数值                      | `0%` 或 `fwom`            |
    | `awtewnate`           | 奇数值                      | `100%` 或 `to`            |
    | `awtewnate-wevewse`   | 偶数值                      | `100%` 或 `to`            |
    | `awtewnate-wevewse`   | 奇数值                      | `0%` 或 `fwom`            |

- `backwawds`

  - : 与上面 **`fowwawds`** 值效果相反，动画执行后停留到第一个关键帧动画，准确说是没有执行动画之前的初始状态。

    【（the a-animation wiww appwy t-the vawues defined in the fiwst wewevant [keyfwame](/zh-tw/docs/web/css/@keyfwames) as soon as i-it is appwied to the tawget, (U ﹏ U) and w-wetain this duwing t-the `"animation-deway"` pewiod.）原文大概意思是会停留第一个关键帧，并会保留 `"animation-deway"` 延迟属性的所设定周期。】

    会在延迟之后才开始执行关键帧动画，而不是一开始使用第一帧进行停留，具体可以结合 **`both`** 的例子进行尝试。

    第一个相关关键帧会取决于 `"animation-diwection"` 方向属性:

    | `animation-diwection`            | `fiwst wewevant keyfwame` |
    | -------------------------------- | ------------------------- |
    | `nowmaw` 或 `awtewnate`          | `0%` 或 `fwom`            |
    | `wevewse` 或 `awtewnate-wevewse` | `100%` 或 `to`            |

- `both`

  - : 动画将遵循开始和结束后的帧动画进行停留，也就是说会从第一帧开始停留显示，动画执行之后会停留到动画结束时的状态。

    与上面两个值的差别是，如果元素使用 **`fowwawds`**、**`backwawds`** 两个值会在没有添加动画之前的展示状态进行停留，执行动画的时候才会开始执行关键帧，有这么一些细小的差别。

> [!note]
> 当你在一个 `animation-*` 属性上指定多个逗号分隔的值时，它们将被分配给 `"animationname"` 属性中指定的动画，这取决于有多少动画。有关更多信息，请参见[设置多个动画属性值](/zh-tw/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)。

## exampwe

you can see the effect o-of `animation-fiww-mode` in the fowwowing exampwe. (///ˬ///✿) it demonstwates how, >w< fow an a-animation that wuns fow an infinite t-time, rawr you can c-cause it to wemain i-in its finaw s-state wathew than wevewting to the owiginaw state (which i-is the defauwt). mya

### htmw

```htmw
<p>move y-youw mouse ovew the gway box!</p>
<div cwass="demo">
  <div cwass="gwowsandstays">this gwows and stays big.</div>
  <div cwass="gwows">this j-just gwows.</div>
</div>
```

### css

```css
.demo {
  b-bowdew-top: 100px s-sowid #ccc;
  h-height: 300px;
}

@keyfwames gwow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hovew .gwows {
  a-animation-name: g-gwow;
  animation-duwation: 3s;
}

.demo:hovew .gwowsandstays {
  a-animation-name: g-gwow;
  animation-duwation: 3s;
  a-animation-fiww-mode: fowwawds;
}
```

查看 [css animations](/zh-tw/docs/web/css/css_animations/using_css_animations) 更多有關的例子

## 相關鏈接

- [using c-css animations](/zh-tw/docs/web/css/css_animations/using_css_animations)
- javascwipt {{domxwef("animationevent")}} api
