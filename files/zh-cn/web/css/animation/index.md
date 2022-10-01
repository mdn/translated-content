---
title: animation
slug: Web/CSS/animation
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **animation** 属性是 {{cssxref("animation-name")}}，{{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}，{{cssxref("animation-delay")}}，{{cssxref("animation-iteration-count")}}，{{cssxref("animation-direction")}}，{{cssxref("animation-fill-mode")}} 和 {{cssxref("animation-play-state")}} 属性的一个简写属性形式。

{{EmbedInteractiveExample("pages/css/animation.html")}}

```css
/* @keyframes duration | timing-function | delay |
   iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s slidein;

/* @keyframes duration | name */
animation: 3s slidein;
```

```html hidden
<div class="grid">
  <div class="col">
    <div class="note">
      Given the following animation:
      <pre>@keyframes slidein {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}</pre>
    </div>
    <div class="row">
      <div class="cell">
        <button class="play" title="PLAY"></button>
      </div>
      <div class="cell flx">
        <div class="overlay">animation: 3s ease-in 1s 2 reverse both paused slidein;</div>
        <div class="animation a1"></div>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <button class="pause" title="PAUSE"></button>
      </div>
      <div class="cell flx">
        <div class="overlay">animation: 3s linear 1s slidein;</div>
        <div class="animation a2"></div>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <button class="pause" title="PAUSE"></button>
      </div>
      <div class="cell flx">
        <div class="overlay">animation: 3s slidein;</div>
        <div class="animation a3"></div>
      </div>
    </div>
  </div>
</div>
```

```css hidden
html,body {
  height: 100%;
  box-sizing: border-box;
}

pre { margin-bottom: 0; }
svg { width: 1.5em; height: 1.5em; }

button {
  width: 27px;
  height: 27px;
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;
  cursor: pointer;
}

button.play {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#play');
}

button.pause {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#pause');
}

button.restart {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cstyle%3Epath%20%7Bdisplay%3Anone%7D%20path%3Atarget%7Bdisplay%3Ablock%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22play%22%20d%3D%22M3%2C3%20L3%2C13%20L13%2C8%20Z%22%20%2F%3E%3Cpath%20id%3D%22pause%22%20d%3D%22M5%2C4%20L7%2C4%20L7%2C13%20L5%2C13%20Z%20M9%2C4%20L11%2C4%20L11%2C13%20L9%2C13%20Z%22%20%2F%3E%3Cpath%20id%3D%22restart%22%20d%3D%22M13%2C9%20A5%2C5%2C1%2C1%2C1%2C8%2C4%20L8%2C2%20L12%2C5%20L8%2C8%20L8%2C6%20A3%2C3%2C1%2C1%2C0%2C11%2C9%20A1%2C1%2C1%2C1%2C1%2C13%2C9%20z%22%20%2F%3E%3C%2Fsvg%3E#restart');
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #EEE;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  box-sizing: border-box;
  margin: .5em;
  padding: 0;
  background-color: #FFF;
  overflow: hidden;
  text-align: left;
}

.flx {
  flex: 1 0;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: .5em;
  font: .8em sans-serif;
  text-align: left;
  flex: none;
}

.overlay { padding: .5em; }

@keyframes slidein {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.a1 { animation: 3s ease-in 1s 2 reverse both paused slidein; }
.a2 { animation: 3s linear 1s slidein; }
.a3 { animation: 3s slidein; }

.animation {
  background: #3F87A6;
  width: 100%;
  height: calc(100% - 1.5em);
  transform-origin: left center;
}
```

```js hidden
window.addEventListener('load', function () {
  var ANIMATION = Array.from(document.querySelectorAll('.animation'));
  var BUTTON    = Array.from(document.querySelectorAll('button'));

  function toggleButton (btn, type) {
    btn.classList.remove('play', 'pause', 'restart');
    btn.classList.add(type);
    btn.title = type.toUpperCase(type);
  }

  function playPause (i) {
    var btn  = BUTTON[i];
    var anim = ANIMATION[i];

    if (btn.classList.contains('play')) {
      anim.style.animationPlayState = 'running';
      toggleButton(btn, 'pause');
    } else if (btn.classList.contains('pause')) {
      anim.style.animationPlayState = 'paused';
      toggleButton(btn, 'play');
    } else {
      anim.classList.remove('a' + (i + 1));
      setTimeout(function () {
        toggleButton(btn, i === 0 ? 'play' : 'pause');
        anim.style.animationPlayState = '';
        anim.classList.add('a' + (i + 1));
      }, 100)
    }
  }

  ANIMATION.forEach(function (node, index) {
    node.addEventListener('animationstart', function () { toggleButton(BUTTON[index], 'pause');   });
    node.addEventListener('animationend',   function () { toggleButton(BUTTON[index], 'restart'); });
  });

  BUTTON.forEach(function (btn, index) {
    btn.addEventListener('click', function () { playPause(index); });
  });
})
```

{{EmbedLiveSample("animation", "100%", 260, "", "", "example-outcome-frame")}}

[哪些属性是可动画的？](/zh-CN/docs/Web/Guide/CSS/Using_CSS_transitions#Which_CSS_properties_are_animatable)值得注意的是，此描述也适用于[CSS 变换](/zh-CN/docs/CSS/CSS_transitions)。

{{cssinfo}}

## 语法

`animation` 属性用来指定一组或多组动画，每组之间用逗号相隔。

每组动画规定的属性如下：

- 以下属性出现 0 次或 1 次：

  - {{cssxref("&lt;single-transition-timing-function&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#&lt;single-animation-iteration-count&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#&lt;single-animation-direction&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#&lt;single-animation-fill-mode&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#&lt;single-animation-play-state&gt;")}}

- animation 的 name 值可能是：none，{{cssxref("&lt;custom-ident&gt;")}}， {{cssxref("&lt;string&gt;")}}
- {{cssxref("&lt;time&gt;")}} 可能会出现 0、1 或 2 次

每个动画定义中的属性值的顺序很重要：可以被解析为 {{cssxref("&lt;time&gt;")}} 的第一个值被分配给{{cssxref("animation-duration")}}，第二个分配给 {{cssxref("animation-delay")}}。

每个动画定义中的值的顺序，对于区分 {{cssxref("animation-name")}} 值与其他关键字也很重要。解析时，对于除 {{cssxref("animation-name")}} 之外的有效的关键字，必须被前面的简写中没有找到值的属性所接受。此外，在序列化时，{{cssxref("animation-name")}} 与以及其他属性值做区分等情况下，必须输出其他属性的默认值。

### Values

- `<single-animation-iteration-count>`
  - : 动画播放的次数。该值必须是{{cssxref("animation-iteration-count")}}可用的值之一。
- `<single-animation-direction>`
  - : 动画播放的方向。该值必须是{{cssxref("animation-direction")}}可用的值之一。
- `<single-animation-fill-mode>`
  - : 确定动画在执行之前和之后这两个阶段应用的样式。该值必须是{{cssxref("animation-fill-mode")}}可用的值之一。
- `<single-animation-play-state>`
  - : 确定动画是否正在播放。该值必须是{{cssxref("animation-play-state")}}中可用的值之一。

### 语法

{{csssyntax("animation")}}

## 范例

### **赛隆人之眼 (赛隆人**是一个虚构的生化人种族，出自科幻电视系列剧星际大争霸系列**)**

```html
<div class="view_port">
  <div class="polling_message">
    Listening for dispatches
  </div>
  <div class="cylon_eye"></div>
</div>
```

```css
.polling_message {
  color: white;
  float: left;
  margin-right: 2%;
}

.view_port {
  background-color: black;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.cylon_eye {
  background-color: red;
  background-image: linear-gradient(to right,
      rgba(0, 0, 0, .9) 25%,
      rgba(0, 0, 0, .1) 50%,
      rgba(0, 0, 0, .9) 75%);
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
          animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
        @keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
```

{{EmbedLiveSample('Cylon_Eye')}}

更多示例请参阅[使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Examples)。

## 潜在的问题

眨眼和闪烁的动画对于有认知问题的人来说是有问题的，比如注意力缺陷多动障碍 (ADHD)。此外，某些动画效果可以触发前庭神经紊乱、癫痫、偏头痛和暗点敏感性。

考虑提供一种暂停或禁用动画的机制，以及使用 [Reduced Motion Media Query](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)（简约运动媒体查询），为那些表示不喜欢动画的用户创建一个良好的体验。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Quantum CSS notes

- Gecko 有一个 bug，当你在屏幕上对屏幕外的元素使用带有指定延时的动画时，Gecko 不会在某些平台上重绘，例如 Windows {{bug(1383239)}}。这个问题已经在 Firefox 新的并行 CSS 引擎 (也称为[Quantum CSS](https://wiki.mozilla.org/Quantum) 或者 [Stylo](https://wiki.mozilla.org/Quantum/Stylo)，计划在 Firefox 57 中发布) 中得到了解决。
- 另外一个 Gecko bug，当我们激活\<details>元素的动画效果时，即使通过 open 属性也不能将其展示 ({{bug(1382124)}})。Quantum CSS 会将其修复了。
- 另一个 bug 是，由于动画使用的是 em 单位，所以即使我们改变父元素的 font-size 属性也不会影响该动画元素 ({{bug(1254424)}})，而它们原本应该受到影响。Quantum CSS 会将其修复了。

## 更多

- [Using CSS animations](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
