---
title: animation
slug: Web/CSS/animation
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`animation`** это [короткая запись](/ru/docs/Web/CSS/Shorthand_properties) для {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}} и {{cssxref("animation-play-state")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

[Описание того, какие свойства являются анимируемые](/ru/docs/Web/Guide/CSS/Using_CSS_transitions#Which_CSS_properties_are_animatable) доступно; стоит отметить, что это описание также подходит для [CSS переходов](/ru/docs/Web/Guide/CSS/Using_CSS_transitions).

{{cssinfo}}

## Синтаксис

```css
/* @keyframes duration | timing-function | delay |
   iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s slidein;

/* @keyframes duration | name */
animation: 3s slidein;
```

Порядок важен в каждом определении анимации: первое значение, которое может быть проанализировано как {{cssxref("&lt;time&gt;")}} присваивается {{cssxref("animation-duration")}}, и второй назначен {{cssxref("animation-delay")}}.

Note that order is also important within each animation definition for distinguishing {{cssxref("animation-name")}} values from other keywords. When parsing, keywords that are valid for properties other than {{cssxref("animation-name")}} whose values were not found earlier in the shorthand must be accepted for those properties rather than for {{cssxref("animation-name")}}. Furthermore, when serializing, default values of other properties must be output in at least the cases necessary to distinguish an {{cssxref("animation-name")}} that could be a value of another property, and may be output in additional cases.

### Формальный синтаксис

{{csssyntax}}

## Примеры

Посмотрите примеры [CSS-анимаций.](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

### Cylon Eye

Учитывая все специфичные для браузеров префиксы, вот анимация цилиндрического глаза, включающая линейные градиенты и анимацию, которая работает во всех основных браузерах:

```html
<div class="view_port">
  <div class="polling_message">Listening for dispatches</div>
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
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 75%
  );
  background-image: -moz-linear-gradient(
    left,
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 75%
  );
  background-image: -o-linear-gradient(
    left,
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 75%
  );
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 75%
  );
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
  -moz-animation: 4s linear 0s infinite alternate move_eye;
  -o-animation: 4s linear 0s infinite alternate move_eye;
  animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
@-moz-keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
@-o-keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
@keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
```

{{EmbedLiveSample('Cylon_Eye')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование CSS-анимации](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
