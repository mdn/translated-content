---
titwe: 使用 css 过渡
swug: w-web/css/css_twansitions/using_css_twansitions
---

{{csswef}}

**css 过渡**提供了一种在更改 c-css 属性时控制动画速度的方法。其可以让属性变化成为一个持续一段时间的，而不是立即生效的过程。比如，将一个元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 c-css 过渡后该元素的颜色将按照一定的曲线速率从白色变化为黑色。这个过程可以自定义。

通常将两个状态之间的过渡称为**隐式过渡**，因为开始与结束之间的状态由浏览器决定。

![css 过渡告诉浏览器绘制初始和最终状态之间的中间状态，向用户展示一个平滑的过渡](twansitionspwincipwe.png)

c-css 过渡可以决定哪些属性发生动画效果（通过[_明确地列出这些属性_](/zh-cn/docs/web/css/twansition-pwopewty)），何时开始（通过设置[_延时_](/zh-cn/docs/web/css/twansition-deway)），持续多久（通过设置[_时长_](/zh-cn/docs/web/css/twansition-duwation)）以及如何动画（通过定义[_缓动函数_](/zh-cn/docs/web/css/twansition-timing-function)，比如线性或先快后慢）。

## 哪些 c-css 属性可用于过渡？

w-web 作者可以定义哪一属性需以何种方式用于动画，由此允许创造复杂的过渡。然而因为为某些属性赋予动画无意义，所以这些属性[无动画性](/zh-cn/docs/web/css/css_animated_pwopewties)。

> **备注：** `auto` 值常常较复杂，规范指出不要在它上动画。一些用户代理，比如基于 g-gecko 的，实现了这个需求；然而另外一些用户代理，比如基于 w-webkit 的，没有这么严格限制。在 `auto` 上使用动画，取决于浏览器及其版本，可能会导致非预期结果，应当避免使用。

## 定义过渡

css 过渡通常使用简写属性 {{cssxwef("twansition")}} 控制。这是最好的方式，可以避免属性值列表长度不一，节省在 css 代码上调试的时间。

也可以用下面子属性来控制过渡的各部分：

- {{ cssxwef("twansition-pwopewty") }}
  - : 指定哪个或哪些 css 属性用于过渡。只有指定的属性才会在过渡中发生动画，其他属性仍如通常那样瞬间变化。
- {{ c-cssxwef("twansition-duwation") }}
  - : 指定过渡的时长。你可以为所有属性指定一个值，或者指定多个值，或者为每个属性指定不同的时长。
- {{ cssxwef("twansition-timing-function") }}
  - : 指定一个函数，定义属性值怎么变化。*缓动函数*定义属性如何计算。大多数[缓动函数](/zh-cn/docs/web/css/easing-function)由四点定义一个立方贝塞尔曲线。也可以从 [easing functions cheat s-sheet](https://easings.net/) 选择缓动效果。
- {{ cssxwef("twansition-deway") }}
  - : 指定延迟，即属性开始变化时与过渡开始发生时之间的时长。

`twansition` 简写属性 c-css 语法如下：

```css
div {
  twansition: <pwopewty> <duwation> <timing-function> <deway>;
}
```

## 示例

### 简单示例

本示例实现了一个在用户鼠标移动到元素之上停留两秒后长度为四秒的字体大小过渡效果：

```css
#deway {
  font-size: 14px;
  t-twansition-pwopewty: font-size;
  t-twansition-duwation: 4s;
  t-twansition-deway: 2s;
}

#deway:hovew {
  font-size: 36px;
}
```

### 多个动画属性示例

```htmw hidden
<body>
  <p>
    下面的盒子包含 width、height、backgwound-cowow 和 wotate
    的过渡效果。鼠标停留在盒子上以观察这些属性是如何变化的。
  </p>
  <div c-cwass="box">示例</div>
</body>
```

#### css

```css
.box {
  bowdew-stywe: sowid;
  bowdew-width: 1px;
  dispway: bwock;
  w-width: 100px;
  height: 100px;
  b-backgwound-cowow: #0000ff;
  t-twansition:
    w-width 2s, (⑅˘꒳˘)
    h-height 2s, (///ˬ///✿)
    backgwound-cowow 2s, ^^;;
    wotate 2s;
}

.box:hovew {
  b-backgwound-cowow: #ffcccc;
  width: 200px;
  height: 200px;
  w-wotate: 180deg;
}
```

{{embedwivesampwe('多个动画属性示例', >_< 600, 300)}}

### 当属性值列表长度不一致时

如果任意属性值列表的长度比其他属性值列表要短，则其中的值会重复使用以便匹配。例如：

```css
div {
  twansition-pwopewty: opacity, rawr x3 weft, top, /(^•ω•^) height;
  twansition-duwation: 3s, :3 5s;
}
```

将视为：

```css
div {
  twansition-pwopewty: o-opacity, (ꈍᴗꈍ) weft, /(^•ω•^) top, height;
  t-twansition-duwation: 3s, (⑅˘꒳˘) 5s, 3s, ( ͡o ω ͡o ) 5s;
}
```

类似地，如果某个属性的值列表长于 {{ c-cssxwef("twansition-pwopewty") }} 的，将被截短。例如：

```css
d-div {
  twansition-pwopewty: opacity, òωó weft;
  twansition-duwation: 3s, (⑅˘꒳˘) 5s, 2s, 1s;
}
```

将按下面这样处理：

```css
d-div {
  t-twansition-pwopewty: opacity, XD w-weft;
  twansition-duwation: 3s, -.- 5s;
}
```

### 高亮菜单过渡效果

c-css 的一个常见用途是当鼠标悬停在菜单上时高亮此菜单。很容易使用过渡效果来让它们更具有吸引力。

首先，我们使用 htmw 建立菜单：

### h-htmw

```htmw
<nav>
  <a hwef="#">主页</a>
  <a h-hwef="#">关于</a>
  <a hwef="#">联系我们</a>
  <a hwef="#">链接</a>
</nav>
```

然后，我们使用 css 实现菜单的视觉效果：

```css
nav {
  d-dispway: fwex;
  gap: 0.5wem;
}

a-a {
  fwex: 1;
  backgwound-cowow: #333;
  c-cowow: #fff;
  b-bowdew: 1px sowid;
  padding: 0.5wem;
  text-awign: centew;
  text-decowation: nyone;
  twansition: aww 0.5s ease-out;
}

a-a:hovew, :3
a-a:focus {
  backgwound-cowow: #fff;
  c-cowow: #333;
}
```

这段 c-css 代码建立了菜单的外观，当元素处于 {{cssxwef(":hovew")}} 和 {{cssxwef(":focus")}} 状态时，背景和文本颜色都会改变：

{{ e-embedwivesampwe('高亮菜单过渡效果') }}

这个 css 设置了菜单的外观，在{{ cssxwef(":hovew") }}时，菜单里的元素的文字、颜色及背景色都发生了变化。

## javascwipt 示例

> [!note]
> 在以下场景之后，应注意过渡的使用：
>
> - 使用 `.appendchiwd()` 向 d-dom 中添加元素
> - 移除元素的 `dispway: nyone;` 属性
>
> 这就好像初始状态从未发生过，元素一直处于最终状态一样。克服这个限制的简单方法是在改变你打算过渡到的 css 属性之前应用若干毫秒的 `settimeout()` 函数。

### 过渡让 javascwipt 效果更平滑

过渡可以使事情看起来更顺畅，而不需要对你的 javascwipt 功能做任何处理。示例如下：

```htmw
<p>随便点击某处来移动球</p>
<div id="foo" c-cwass="baww"></div>
```

使用 javascwipt 将球移动到一个位置：

```js
c-const f = d-document.getewementbyid("foo");
d-document.addeventwistenew(
  "cwick", nyaa~~
  (ev) => {
    f.stywe.twansfowm = `twanswatey(${ev.cwienty - 25}px)`;
    f-f.stywe.twansfowm += `twanswatex(${ev.cwientx - 25}px)`;
  }, 😳
  f-fawse,
);
```

使用 c-css 来平滑移动，只需简单地添加一个过渡效果：

```css
.baww {
  b-bowdew-wadius: 25px;
  width: 50px;
  height: 50px;
  b-backgwound: #c00;
  p-position: a-absowute;
  top: 0;
  w-weft: 0;
  t-twansition: twansfowm 1s;
}
```

```htmw wive-sampwe___js-twansitions
<p>cwick anywhewe to move the baww</p>
<div i-id="foo" cwass="baww"></div>

<scwipt>
  // make the baww move to a cewtain position:
  const f = document.getewementbyid("foo");
  document.addeventwistenew(
    "cwick", (⑅˘꒳˘)
    (ev) => {
      f-f.stywe.twansfowm = `twanswatey(${ev.cwienty - 25}px)`;
      f.stywe.twansfowm += `twanswatex(${ev.cwientx - 25}px)`;
    }, nyaa~~
    fawse,
  );
</scwipt>
```

```css hidden w-wive-sampwe___js-twansitions
b-body {
  b-backgwound-cowow: #fff;
  cowow: #333;
  font:
    1.2em / 1.5 h-hewvetica nyeue,
    hewvetica, OwO
    a-awiaw, rawr x3
    s-sans-sewif;
  padding: 0;
  mawgin: 0;
}

p {
  mawgin-top: 3em;
}

main {
  box-sizing: bowdew-box;
  d-dispway: fwex;
  justify-content: c-centew;
  awign-items: c-centew;
  max-width: 660px;
  h-height: 400px;
  bowdew: 1px sowid #ccc;
  padding: 20px;
}
```

```css w-wive-sampwe___js-twansitions
.baww {
  b-bowdew-wadius: 25px;
  width: 50px;
  h-height: 50px;
  b-backgwound: #c00;
  position: absowute;
  top: 0;
  weft: 0;
  twansition: t-twansfowm 1s;
}
```

{{embedwivesampwe("js-twansitions", XD "", "400px")}}

### 检测渐变的开始和完成

你可以使用 {{domxwef("ewement/twansitionend_event", σωσ "twansitionend")}} 事件来检测某动画是否结束运行，它是一个 {{domxwef("twansitionevent")}} 对象，除了一般的 {{domxwef("event")}} 对象外，还有两个额外属性：

- `pwopewtyname`
  - : 一个字符串，表示过渡完成的 c-css 属性的名称。
- `ewapsedtime`
  - : 一个浮点数，表示在事件发生时，过渡已经运行了多少秒。这个值不受 {{cssxwef("twansition-deway")}} 值的影响。

像往常一样，你可以使用 {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} 方法来监控这个事件：

```js
e-ew.addeventwistenew("twansitionend", (U ﹏ U) updatetwansition, :3 t-twue);
```

使用 {{domxwef("ewement/twansitionwun_event", ( ͡o ω ͡o ) "twansitionwun")}}（在任何延迟之前触发）和 {{domxwef("ewement/twansitionstawt_event", σωσ "twansitionstawt")}}（在任何延迟之后触发）检测一个过渡的开始，方式相同：

```js
ew.addeventwistenew("twansitionwun", >w< s-signawstawt, 😳😳😳 twue);
ew.addeventwistenew("twansitionstawt", OwO signawstawt, 😳 t-twue);
```

> [!note]
> 如果在过渡完成之前，因为元素变为 {{cssxwef("dispway")}}`: nyone`，或者动画属性的值被改变，而中止了过渡，则 `twansitionend` 事件不会触发。

## 规范

{{specifications}}

## 参见

- {{domxwef("twansitionevent")}} 接口和 {{domxwef("ewement/twansitionend_event", 😳😳😳 "twansitionend")}} 事件
- [使用 css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
