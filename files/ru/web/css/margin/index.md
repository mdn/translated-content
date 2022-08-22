---
title: margin
slug: Web/CSS/margin
tags:
  - CSS
  - CSS Property
  - Reference
  - справочник
translation_of: Web/CSS/margin
translation_of_original: Web/CSS/margin-new
---
{{CSSRef}}

Свойство **`margin`** [CSS](/ru/CSS "CSS") определяет [внешний отступ](/ru/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) на всех четырёх сторонах элемента. Это сокращение, которое устанавливает все отдельные поля одновременно: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} и {{cssxref("margin-left")}}.

```css
/* Применяется ко всем четырём сторонам */
margin: 1em;

/* по вертикали | по горизонтали */
margin: 5% auto;

/* сверху | горизонтально | снизу */
margin: 1em auto 2em;

/* сверху | справа | снизу | слева */
margin: 2px 1em 0 auto;

/* Глобальные значения */
margin: inherit;
margin: initial;
margin: unset;
```

```html hidden
<div class="grid">
  <div class="col">
    <div class="cell">
      <div class="m m0">margin: 0</div>
    </div>
    <div class="cell">
      <div class="m m1">margin: 1em</div>
    </div>
    <div class="cell">
      <div class="m m2">margin: 5% auto</div>
    </div>
    <div class="cell">
      <div class="m m3">margin: 1em auto 2em</div>
    </div>
    <div class="cell">
      <div class="m m4">margin: 5px 1em 0 auto</div>
    </div>
    <div class="note">Все вышеприведённые блоки имеют одинаковую ширину 50%</div>
  </div>
</div>
```

```css hidden
html,body {
  height: 100%;
  box-sizing: border-box;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #EEE;
  font: 1em monospace;
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
  text-align: center;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: .5em;
  font: .8em sans-serif;
  text-align: center;
  flex: none;
}

.m {
  display: block;
  width: 50%;
  text-align: left;
  background: #E4F0F5;
  padding: .5em;
  border: 1px solid;
}

.m0 { margin: 0; }
.m1 { margin: 1em; }
.m2 { margin: 5% auto; }
.m3 { margin: 1em auto 2em; }
.m4 { margin: 5px 1em 0 auto; }
```

{{EmbedLiveSample("margin", "100%", 400, "", "", "example-outcome-frame")}}

{{cssinfo}}

## Синтаксис

Свойство `margin` может быть задано с использованием одного, двух, трёх или четырёх значений. Каждое значение имеет тип [`<length>`](#<length>), [`<percentage>`](#<percentage>) или является ключевым словом [`auto`](#auto). Каждое значение может быть положительным, отрицательным или равным нулю.

- Когда определено **одно** значение, такое значение определено для **всех четырёх сторон**.
- Когда определены **два** значения, то первое значение определяет внешний отступ для **верхней и нижней** стороны, а второе значение определяет отступ для **левой и правой стороны**.
- Когда определены **три** значение, то первое значение определяет внешний отступ для **верхней** стороны, второе значение определяет внешний отступ для **левой и правой стороны**, а третье значение определяет отступ для **нижней** стороны.
- Когда определены **четыре** значения, они определяют внешние отступы для **верхней** стороны, **справа**, **снизу** и **слева** в рассмотренном порядке (по часовой стрелке).

### Значения

- **{{cssxref("length")}}**
  - : Размер отступа как фиксированное значение.
- {{cssxref("percentage")}}
  - : Размер отступа в процентах относительно ширины родительского блока.
- `auto`
  - : Браузер выбирает подходящее значение для использования. Например, в некоторых случаях это значение может быть использовано для центрирования элемента.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Простой пример

#### HTML

```html
<div class="center">Этот элемент отцентрирован.</div>

<div class="outside">Этот элемент расположен за пределами своего контейнера.</div>
```

#### CSS

```css
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{ EmbedLiveSample('Простой_пример','100%',120) }}

### Больше примеров

```css
margin: 5%;                 /* все стороны:  отступ 5% */

margin: 10px;               /* все стороны:  отступ 10px */

margin: 1.6em 20px;         /* верх и низ:   отступ 1.6em */
                            /* право и лево: отступ 20px */

margin: 10px 3% 1em;        /* верх:         отступ 10px */
                            /* право и лево: отступ 3% */
                            /* низ:          отступ 1em */

margin: 10px 3px 30px 5px;  /* верх:   отступ 10px */
                            /* право:  отступ 3px */
                            /* низ:    отступ 30px */
                            /* лево:   отступ 5px */

margin: 2em auto;           /* верх и низ: отступ 2em */
                            /* блок отцентрирован горизонтально */

margin: auto;               /* верх и низ: отступ 0 */
                            /* блок отцентрирован горизонтально */
```

## Примечание

### Горизонтальное выравнивание

Чтобы центрировать что-то горизонтально в современных браузерах, вы можете использовать `display: flex; justify-content: center;` .

Однако в старых браузерах, таких как IE8-9, которые не поддерживают технологию Flexible Box, они недоступны. Чтобы центрировать элемент внутри своего родителя, используйте `margin: 0 auto;` .

### Схлопывание отступов

Иногда внешние отступы (margins) для верхней и нижней сторон схлопываются в один отступ, который равен наибольшему из двух отступов. Смотри [Схлопывание внешних отступов](/ru/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) для получения большей информации.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [CSS Box Model](/ru/docs/Web/CSS/box_model "en/CSS/box model")
- [Схлопывание отступов](/ru/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing "en/CSS/margin collapsing")
