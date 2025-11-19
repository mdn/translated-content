---
title: margin
slug: Web/CSS/Reference/Properties/margin
original_slug: Web/CSS/margin
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`margin`** определяет [внешний отступ](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) на всех четырёх сторонах элемента. Это сокращение, которое устанавливает все отдельные поля одновременно: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} и {{cssxref("margin-left")}}.

{{InteractiveExample("CSS Demo: margin")}}

```css interactive-example-choice
margin: 1em;
```

```css interactive-example-choice
margin: 5% 0;
```

```css interactive-example-choice
margin: 10px 50px 20px;
```

```css interactive-example-choice
margin: 10px 50px 20px 0;
```

```css interactive-example-choice
margin: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row"></div>
    <div class="row transition-all" id="example-element"></div>
    <div class="row"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## Составные свойства

Данное свойство является сокращением для следующих CSS свойств:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

## Синтаксис

```css
/* Применяется ко всем четырём сторонам */
margin: 1em;
margin: -3px;

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

Свойство `margin` может быть задано с использованием одного, двух, трёх или четырёх значений. Каждое значение имеет тип [`<length>`](#length), [`<percentage>`](#percentage) или является ключевым словом [`auto`](#auto). Каждое значение может быть положительным, отрицательным или равным нулю.

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

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Простой пример

#### HTML

```html
<div class="center">Этот элемент отцентрирован.</div>

<div class="outside">
  Этот элемент расположен за пределами своего контейнера.
</div>
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
margin: 5%;
/* все стороны:  отступ 5% */

margin: 10px;
/* все стороны:  отступ 10px */

margin: 1.6em 20px;
/* верх и низ:   отступ 1.6em */
/* право и лево: отступ 20px */

margin: 10px 3% 1em;
/* верх:         отступ 10px */
/* право и лево: отступ 3% */
/* низ:          отступ 1em */

margin: 10px 3px 30px 5px;
/* верх:   отступ 10px */
/* право:  отступ 3px */
/* низ:    отступ 30px */
/* лево:   отступ 5px */

margin: 2em auto;
/* верх и низ: отступ 2em */
/* блок отцентрирован горизонтально */

margin: auto;
/* верх и низ: отступ 0 */
/* блок отцентрирован горизонтально */
```

## Примечание

### Горизонтальное выравнивание

Чтобы центрировать что-то горизонтально в современных браузерах, вы можете использовать `display: flex; justify-content: center;` .

Однако в старых браузерах, таких как IE8-9, которые не поддерживают технологию Flexible Box, они недоступны. Чтобы центрировать элемент внутри своего родителя, используйте `margin: 0 auto;` .

### Схлопывание отступов

Иногда внешние отступы для верхней и нижней сторон схлопываются в один отступ, который равен наибольшему из двух отступов. Смотрите [Схлопывание внешних отступов](/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) для получения большей информации.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Введение в базовую блочную модель CSS](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Схлопывание отступов](/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} и {{cssxref("margin-left")}}
- Логические свойства: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} и {{cssxref("margin-inline-end")}}. А так же сокращенные варианты: {{cssxref("margin-block")}} и {{cssxref("margin-inline")}}
