---
title: animation
slug: Web/CSS/animation
---
{{CSSRef}}

**`animation`** [CSS](/ko/docs/Web/CSS) 속성은 다수의 스타일을 전환하는 애니메이션을 적용합니다. {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}}의 [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)입니다.

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

[애니메이션 가능한 속성](/ko/docs/Web/CSS/CSS_animated_properties)을 확인해보세요. [CSS 트랜지션](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)에도 적용된다는 점을 참고하세요.

{{cssinfo}}

## 구문

The `animation` property is specified as one or more single animations, separated by commas.

Each individual animation is specified as:

- zero or one occurrences of the following values:

  - {{cssxref("&lt;single-transition-timing-function&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#&lt;single-animation-iteration-count&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#&lt;single-animation-direction&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#&lt;single-animation-fill-mode&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#&lt;single-animation-play-state&gt;")}}

- an optional name for the animation, which may be `none`, a {{cssxref("&lt;custom-ident&gt;")}}, or a {{cssxref("&lt;string&gt;")}}
- zero, one, or two {{cssxref("&lt;time&gt;")}} values

The order of values within each animation definition is important: the first value that can be parsed as a {{cssxref("&lt;time&gt;")}} is assigned to the {{cssxref("animation-duration")}}, and the second one is assigned to {{cssxref("animation-delay")}}.

The order within each animation definition is also important for distinguishing {{cssxref("animation-name")}} values from other keywords. When parsed, keywords that are valid for properties other than {{cssxref("animation-name")}}, and whose values were not found earlier in the shorthand, must be accepted for those properties rather than for {{cssxref("animation-name")}}. Furthermore, when serialized, default values of other properties must be output in at least the cases necessary to distinguish an {{cssxref("animation-name")}} that could be a value of another property, and may be output in additional cases.

### 값

- `<single-animation-iteration-count>`
  - : The number of times the animation is played. The value must be one of those available in {{cssxref("animation-iteration-count")}}.
- `<single-animation-direction>`
  - : The direction in which the animation is played. The value must be one of those available in {{cssxref("animation-direction")}}.
- `<single-animation-fill-mode>`
  - : Determines how styles should be applied to the animation's target before and after its execution. The value must be one of those available in {{cssxref("animation-fill-mode")}}.
- `<single-animation-play-state>`
  - : Determines whether the animation is playing or not. The value must be one of those available in {{cssxref("animation-play-state")}}.

### 형식 구문

{{csssyntax}}

## 예제

### Cylon Eye

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

See [Using CSS animations](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Examples) for additional examples.

## 접근성 고려사항

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine and Scotopic sensitivity.

Consider providing a mechanism for pausing or disabling animation, as well as using the [Reduced Motion Media Query](/ko/docs/Web/CSS/@media/prefers-reduced-motion) to create a complimentary experience for users who have expressed a preference for no animated experiences.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

### Quantum CSS notes

- Gecko has a bug whereby when you animate an offscreen element onscreen but specify a delay, Gecko does not repaint on some platforms, e.g. Windows ([Firefox bug 1383239](https://bugzil.la/1383239)). This has been fixed in Firefox's new parallel CSS engine (also known as [Quantum CSS](https://wiki.mozilla.org/Quantum) or [Stylo](https://wiki.mozilla.org/Quantum/Stylo), planned for release in Firefox 57).
- Another Gecko bug means that {{htmlelement("details")}} elements can't be made open by default using the `open` attribute if they have an animation active on them ([Firefox bug 1382124](https://bugzil.la/1382124)). Quantum CSS fixes this.
- A further bug means that animations using em units are not affected by changes to the {{cssxref("font-size")}} on the animated element's parent, whereas they should be ([Firefox bug 1254424](https://bugzil.la/1254424)). Quantum CSS fixes this.

## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
