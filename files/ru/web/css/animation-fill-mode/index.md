---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
---

{{CSSRef}}{{SeeCompatTable}}

## Описание

[CSS](/en/CSS) свойство **`animation-fill-mode`** определяет, как нужно применять стили к объекту анимации до и после её выполнения.

{{cssinfo}}

## Синтаксис

```css
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Несколько значений могут быть заданы через запятую. */
/* Каждое значение соответствует для анимации в animation-name. */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```

### Значения

- `none`
  - : Стили анимации не будут применены к элементу до и после её выполнения.
- `forwards`
  - | : По окончании анимации элемент сохранит стили последнего ключевого кадра, который определяется значениями {{cssxref("animation-direction")}} и {{cssxref("animation-iteration-count")}}: | `animation-direction` | `animation-iteration-count` | последний ключевой кадр |
    | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------- | ----------------------- |
    | `normal`                                                                                                                                                                                  | любое                 | `100%` или `to`             |
    | `reverse`                                                                                                                                                                                 | любое                 | `0%` или `from`             |
    | `alternate`                                                                                                                                                                               | чётное                | `0%` или `from`             |
    | `alternate`                                                                                                                                                                               | нечётное              | `100%` или `to`             |
    | `alternate-reverse`                                                                                                                                                                       | чётное                | `100%` или `to`             |
    | `alternate-reverse`                                                                                                                                                                       | нечётное              | `0%` или `from`             |
- `backwards`
  - | : Элемент сохранит стиль первого [ключевого кадра](/ru/docs/CSS/@keyframes) на протяжении периода {{cssxref("animation-delay")}}. Первый ключевой кадр определяется значением {{cssxref("animation-direction")}}: | `animation-direction` | первый ключевой кадр |
    | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | -------------------- |
    | `normal` или `alternate`                                                                                                                                                                                          | `0%` или `from`       |
    | `reverse` или `alternate-reverse`                                                                                                                                                                                 | `100%` или `to`       |
- `both`
  - : Анимация будет вести себя так, как будто значения forwards и backwards заданы одновременно.

### Формальный синтаксис

{{csssyntax}}

## Пример

Вы можете посмотреть эффект animation-fill-mode в следующем примере. По умолчанию, по окончании анимации стиль элемента возвращается к исходному. Значение forwards сохранит для элемента стиль последнего ключевого кадра.

### HTML

```html
<p>Наведите курсор мыши на серый блок</p>
<div class="demo">
  <div class="grows">Этот просто растёт</div>
  <div class="growsandstays">Этот растёт и остаётся большим</div>
</div>
```

### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
  font-family: sans-serif;
}
@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}
@-webkit-keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}
.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
  -webkit-animation-name: grow;
  -webkit-animation-duration: 3s;
}
.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  -webkit-animation-name: grow;
  -webkit-animation-duration: 3s;
  -webkit-animation-fill-mode: forwards;
}
```

{{EmbedLiveSample('Example',700,300)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование CSS-анимации](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
