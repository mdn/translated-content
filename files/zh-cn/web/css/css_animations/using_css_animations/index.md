---
title: 使用 CSS 动画
slug: Web/CSS/CSS_animations/Using_CSS_animations
---

{{SeeCompatTable}}{{CSSRef}}

**CSS animations** 使得可以将从一个 CSS 样式配置转换到另一个 CSS 样式配置。动画包括两个部分：描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧。

相较于传统的脚本实现动画技术，使用 CSS 动画有三个主要优点：

1. 能够非常容易地创建简单动画，你甚至不需要了解 JavaScript 就能创建动画。
2. 动画运行效果良好，甚至在低性能的系统上。渲染引擎会使用跳帧或者其他技术以保证动画表现尽可能的流畅。而使用 JavaScript 实现的动画通常表现不佳（除非经过很好的设计）。
3. 让浏览器控制动画序列，允许浏览器优化性能和效果，如降低位于隐藏选项卡中的动画更新频率。

## 配置动画

创建动画序列，需要使用 {{cssxref("animation")}} 属性或其子属性，该属性允许配置动画时间、时长以及其他动画细节，但该属性不能配置动画的实际表现，动画的实际表现是由 {{cssxref("@keyframes")}} 规则实现，具体情况参见[使用 keyframes 定义动画序列](#使用_keyframes_定义动画序列)小节部分。

{{cssxref("animation")}} 的子属性有：

- **{{ cssxref("animation-delay") }}**
  - : 设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。
- **{{ cssxref("animation-direction") }}**
  - : 设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。
- **{{ cssxref("animation-duration") }}**
  - : 设置动画一个周期的时长。
- **{{ cssxref("animation-iteration-count") }}**
  - : 设置动画重复次数，可以指定 infinite 无限次重复动画
- **{{ cssxref("animation-name") }}**
  - : 指定由{{ cssxref("@keyframes") }}描述的关键帧名称。
- **{{ cssxref("animation-play-state") }}**
  - : 允许暂停和恢复动画。
- **{{ cssxref("animation-timing-function") }}**
  - : 设置动画速度，即通过建立加速度曲线，设置动画在关键帧之间是如何变化。
- **{{ cssxref("animation-fill-mode") }}**
  - : 指定动画执行前后如何为目标元素应用样式。

## 使用 keyframes 定义动画序列

一旦完成动画的时间设置，接下来就需要定义动画的表现。通过使用{{ cssxref("@keyframes") }}建立两个或两个以上关键帧来实现。每一个关键帧都描述了动画元素在给定的时间点上应该如何渲染。

因为动画的时间设置是通过 CSS 样式定义的，关键帧使用 {{cssxref("percentage")}} 来指定动画发生的时间点。`0%` 表示动画的第一时刻，`100%` 表示动画的最终时刻。因为这两个时间点十分重要，所以还有特殊的别名：`from` 和 `to`。这两个都是可选的，若 `from/0%` 或 `to/100%` 未指定，则浏览器使用计算值开始或结束动画。

也可包含额外可选的关键帧，描述动画开始和结束之间的状态。

## 示例

> **备注：** 这里的示例没有在 CSS 动画属性上使用任何前缀，Webkit 内核浏览器或者早期版本浏览器可能需要前缀，下面的实例包含了`-webkit-`前缀。

### 文本滑过浏览器窗口

该例中{{ HTMLElement("p") }} 元素由浏览器窗口右边滑至左边

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

{{cssxref("animation-duration")}} 属性指定 {{HTMLElement("p")}} 上的动画从开始到结束耗费 3 秒，{{cssxref("@keyframes")}} 指定使用名字为“slidein”的关键帧。

如果希望在不支持 CSS 动画的浏览器中使用自定义样式，应该将其写在这里；然而，在该例中，我们不需要除动画效果以外的任何自定义样式。

关键帧是用 {{cssxref("@keyframes")}} 定义的。该例中，我们只使用了两个关键帧。第一个出现在 0%（此例中使用了别名 `from`）处，此处元素的左边距为 100%（即位于容器的右边界），宽为 300%（即容器宽度的 3 倍），使得在动画的第一帧中标题位于浏览器窗口右边界之外。

第二帧出现在 100%（此例中使用了别名 `to`）。元素的左边距设为 0%，宽设为 100%，使得动画结束时元素与窗口左边界对齐。

```html
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("文本滑过浏览器窗口","100%","250")}}

### 增加关键帧

让我们给上面的示例中添加一个关键帧，比如标题的字号先变大然后恢复正常，添加这个关键帧十分简单：

```css
75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
```

```css hidden
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

在动画序列执行到 75% 的时候，标题元素的左边距为 25%，宽度为 150%。

{{EmbedLiveSample("增加关键帧","100%","250")}}

### 重复动画

{{ cssxref("animation-iteration-count") }}用以指定动画重复的次数，仅仅使用该属性就能使动画重复播放。在该例中，设该属性为`infinite`以使动画无限重复

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("重复动画","100%","250")}}

### 来回运动

上面实现了动画的重复播放，但是每次动画开始时总跳回开始位置显得很怪异。我们真正想要的是标题来回滑动，这时只需要设置{{ cssxref("animation-direction") }}属性为`alternate`。

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("来回运动","100%","250")}}

### 使用动画事件

利用动画事件可以更好的控制动画和信息。这些事件由 {{ domxref("event/AnimationEvent", "AnimationEvent") }}对象表示，可探测动画何时开始结束和开始新的循环。每个事件包括动画发生的时间和触发事件的动画名称。我们将修改滑动文本示例，输出每个动画事件出现时的信息。

```css
.slidein {
  -moz-animation-duration: 3s;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -moz-animation-name: slidein;
  -webkit-animation-name: slidein;
  animation-name: slidein;
  -moz-animation-iteration-count: 3;
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3;
  -moz-animation-direction: alternate;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-moz-keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@-webkit-keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

#### 添加动画事件监听器

我们使用 JavaScript 代码监听所有三种可能的动画事件，`setup()` 方法设置事件监听器，当文档第一次加载完成时执行该方法。

```js
var e = document.getElementById("watchme");
e.addEventListener("animationstart", listener, false);
e.addEventListener("animationend", listener, false);
e.addEventListener("animationiteration", listener, false);

e.className = "slidein";
```

以上是非常标准的代码写法，setup() 最后设置动画元素的 `class` 为 slidein，启动动画。为什么这样做？因为`animationstart`事件在动画一开始时就被触发，在我们的示例中，该事件在我们的代码执行前就被触发，所以我们自己通过设置元素的的`class`来启动动画。

#### 接收事件

事件传递给`listener()`函数，代码如下所示

```js
function listener(e) {
  var l = document.createElement("li");
  switch (e.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

这段代码同样非常简单，简单地通过{{ domxref("event.type") }}来判断发生的是何种事件，然后添加对应的注解到{{ HTMLElement("ul") }}中。

输出结果如下所示：

- Started: elapsed time is 0
- New loop started at time 3.01200008392334
- New loop started at time 6.00600004196167
- Ended: elapsed time is 9.234000205993652

注意以上时间非常接近预期时间，但不是完全相等。也要注意在最后一个周期完成后，不会触发`animationiteration`事件，而触发`animationend`事件。

#### HTML 代码

下面是示例中的用到的 HTML 代码：

```html
<body>
  <h1 id="watchme">Watch me move</h1>
  <p>
    This example shows how to use CSS animations to make
    <code>h1</code> elements move across the page.
  </p>
  <p>
    In addition, we output some text each time an animation event fires, so you
    can see them in action.
  </p>
  <ul id="output"></ul>
</body>
```

{{EmbedLiveSample('使用动画事件', '600', '300')}}

## See also

- {{ domxref("AnimationEvent", "AnimationEvent") }}
- [Detecting CSS animation support](/zh-CN/docs/CSS/CSS_animations/Detecting_CSS_animation_support)
- [Using CSS transitions](/zh-CN/docs/Web/Guide/CSS/Using_CSS_transitions)
