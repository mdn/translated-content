---
title: background-repeat
slug: Web/CSS/background-repeat
---

{{CSSRef}}

Свойство **`background-repeat`** устанавливает, как фоновые изображения будет повторяться. Они могут повторяться по горизонтальной и вертикальной оси или не повторяться вовсе.

{{InteractiveExample("CSS Demo: background-repeat")}}

```css interactive-example-choice
background-repeat: repeat-x;
```

```css interactive-example-choice
background-repeat: repeat;
```

```css interactive-example-choice
background-repeat: space;
```

```css interactive-example-choice
background-repeat: round;
```

```css interactive-example-choice
background-repeat: no-repeat;
```

```css interactive-example-choice
background-repeat: space repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #ccc url("/shared-assets/images/examples/moon.jpg") center / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

По умолчанию, изображения обрезаются по размеру элемента, но их можно масштабировать (используя `round`) или равномерно растянуть от конца к концу (используя `space`).

## Синтаксис

```css
/* Ключевые слова */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/*Два значения: горизонтальное | вертикальное*/
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Глобальные значения */
background-repeat: inherit;
background-repeat: initial;
background-repeat: unset;
```

### Значения

- `<repeat-style>`
  - : Следующие однозначные имеют двухзначные эквиваленты:

    | `repeat-x`  | тоже самое, что и `repeat no-repeat`    |
    | ----------- | --------------------------------------- |
    | `repeat-y`  | тоже самое, что и `no-repeat repeat`    |
    | `repeat`    | тоже самое, что и `repeat repeat`       |
    | `space`     | тоже самое, что и `space space`         |
    | `round`     | тоже самое, что и `round round`         |
    | `no-repeat` | тоже самое, что и `no-repeat no-repeat` |

    В двухзначном синтаксисе первое означает горизонтальные повторения, а второе вертикальные.

    | `repeat`    | Изображения повторяются столько, сколько необходимо, чтобы полностью покрыть область элемента, последнее обрезается, если не хватает места.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `space`     | Изображение повторяется в заданном направлении столько раз, сколько необходимо, чтобы покрыть большую часть области рисования фонового изображения, не обрезая изображение. Оставшееся незакрытое пространство равномерно распределено между изображениями. Первое и последнее изображения касаются края элемента. Значение CSS-свойства {{cssxref("background-position")}} игнорируется для рассматриваемого направления, за исключением случаев, когда отдельное изображение больше области рисования фонового изображения, что является единственным случаем, когда изображение может быть обрезано, когда используется значение `space`. |
    | `round`     | Изображение повторяется в заданном направлении столько раз, сколько необходимо, чтобы покрыть большую часть области рисования фонового изображения, не обрезая изображение. Если оно не покрывает точно область, плитки изменяются в этом направлении, чтобы соответствовать ей.                                                                                                                                                                                                                                                                                                                                                             |
    | `no-repeat` | Изображение не повторяется (и, следовательно, область рисования фонового изображения не обязательно будет полностью покрыта). Расположение неповторяющегося фонового изображения определяется CSS-свойством {{cssxref("background-position")}}.                                                                                                                                                                                                                                                                                                                                                                                              |

## Примеры

### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="one">&nbsp;</div>
  </li>
  <li>
    repeat
    <div class="two">&nbsp;</div>
  </li>
  <li>
    repeat-x
    <div class="three">&nbsp;</div>
  </li>
  <li>
    repeat-y
    <div class="four">&nbsp;</div>
  </li>
  <li>
    repeat-x, repeat-y (multiple images)
    <div class="five">&nbsp;</div>
  </li>
</ol>
```

### CSS

```css
/* Совместно для всех DIVS в примере */
li {
  margin-bottom: 12px;
}
div {
  background-image: url(star-solid.gif);
  width: 144px;
  height: 84px;
}

/* повторение фона CSS */
.one {
  background-repeat: no-repeat;
}
.two {
  background-repeat: repeat;
}
.three {
  background-repeat: repeat-x;
}
.four {
  background-repeat: repeat-y;
}

/* Несколько изображений */
.five {
  background-image:
    url(star-solid.gif), url(/shared-assets/images/examples/favicon32.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

### Результат

В этом примере каждому элементу списка соответствует другое значение `background-repeat`.

{{EmbedLiveSample('Примеры', 240, 360)}}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование нескольких CSS фонов](/ru/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
