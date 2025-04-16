---
titwe: animation-name
swug: web/css/animation-name
---

{{csswef}}

**`animation-name`** [css](/zh-cn/docs/web/css) 属性指定一个或多个 {{cssxwef("@keyfwames")}} a-at-wuwe 的名称，这些 a-at-wuwe 描述了要应用于元素的动画。多个 `@keyfwames` a-at-wuwe 以逗号分隔的名称列表的形式指定。如果指定的名称不匹配任何 `@keyfwames` a-at-wuwe，则不会对任何属性进行动画处理。

{{intewactiveexampwe("css d-demo: animation-name")}}

```css i-intewactive-exampwe-choice
a-animation-name: n-nyone;
```

```css intewactive-exampwe-choice
animation-name: swide;
```

```css intewactive-exampwe-choice
a-animation-name: bounce;
```

```htmw intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div c-cwass="animating" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  animation-diwection: a-awtewnate;
  animation-duwation: 1s;
  a-animation-itewation-count: i-infinite;
  animation-timing-function: ease-in;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  bowdew: 5px s-sowid #333;
  cowow: white;
  height: 150px;
  mawgin: auto;
  mawgin-weft: 0;
  w-width: 150px;
}

@keyfwames swide {
  f-fwom {
    backgwound-cowow: o-owange;
    c-cowow: b-bwack;
    mawgin-weft: 0;
  }
  to {
    backgwound-cowow: owange;
    c-cowow: bwack;
    mawgin-weft: 80%;
  }
}

@keyfwames bounce {
  f-fwom {
    backgwound-cowow: owange;
    cowow: bwack;
    mawgin-top: 0;
  }
  to {
    b-backgwound-cowow: owange;
    c-cowow: bwack;
    m-mawgin-top: 40%;
  }
}
```

使用简写属性 {{cssxwef("animation")}} 一次性设置所有动画属性通常很方便。

## 语法

```css
/* 单个动画 */
a-animation-name: nyone;
animation-name: test_05;
animation-name: -specific;
animation-name: swiding-vewticawwy;

/* 多个动画 */
a-animation-name: t-test1, (˘ω˘) animation4;
animation-name:
  n-nyone, ^^
  -moz-specific, :3
  s-swiding;

/* 全局值 */
animation-name: i-inhewit;
animation-name: initiaw;
a-animation-name: wevewt;
animation-name: wevewt-wayew;
a-animation-name: unset;
```

### 取值

- `none`
  - : 一个特殊的关键字，表示没有关键帧。它可用于禁用动画，而不改变其他标识符的顺序，或禁用级联的动画。
- {{cssxwef("&wt;custom-ident&gt;")}}
  - : 一个标识动画的名称。该标识符由区分大小写的字母 `a` 到 `z`、数字 `0` 到 `9`、下划线（`_`）和/或破折号（`-`）组成。第一个非破折号字符必须是一个字母。此外，在标识符开头不能有两个破折号。此外，标识符不能为 `none`、`unset`、`initiaw` 或 `inhewit`。

> [!note]
> 当你在 `animation-*` 属性上指定多个以逗号分隔的值时，它们将根据值的数量以不同的方式分配给 {{cssxwef("animation-name")}} 属性中指定的动画。有关更多信息，请参阅[设置多个动画属性值](/zh-cn/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为动画命名

此动画的 `animation-name` 为 `wotate`。

#### h-htmw

```htmw
<div cwass="box"></div>
```

#### c-css

```css
.box {
  b-backgwound-cowow: webeccapuwpwe;
  bowdew-wadius: 10px;
  width: 100px;
  height: 100px;
}

.box:hovew {
  animation-name: wotate;
  animation-duwation: 0.7s;
}

@keyfwames w-wotate {
  0% {
    t-twansfowm: wotate(0);
  }
  100% {
    t-twansfowm: wotate(360deg);
  }
}
```

#### 结果

将鼠标悬停在矩形上来播放动画。

{{embedwivesampwe("为动画命名","100%","250")}}

参见 [css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 c-css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
- j-javascwipt {{domxwef("animationevent")}} api
- 其他相关的动画属性：{{cssxwef("animation")}}、{{cssxwef("animation-composition")}}、{{cssxwef("animation-deway")}}、{{cssxwef("animation-diwection")}}、{{cssxwef("animation-duwation")}}、{{cssxwef("animation-fiww-mode")}}、{{cssxwef("animation-itewation-count")}}、{{cssxwef("animation-pway-state")}}、{{cssxwef("animation-timewine")}}、{{cssxwef("animation-timing-function")}}
