---
title: clear
slug: Web/CSS/clear
---

{{CSSRef}}

Свойство **`clear`** CSS указывает, может ли элемент быть рядом с плавающими [floating](/ru/docs/CSS/float) элементами, которые предшествуют ему или должны быть перемещены вниз (очищены) под ними. Свойство `clear` применяется как к плавающим, так и к неплавающим элементам.

{{EmbedInteractiveExample("pages/css/clear.html")}}

При применении к неплавающим блокам он перемещает границу края [border edge](/ru/docs/CSS/box_model) элемента до тех пор, пока не окажется ниже края [margin edge](/ru/docs/CSS/box_model) поля всех соответствующих поплавков. Вертикальный край неплавающего блока сжимается.

Вертикальные поля между двумя плавающими элементами, с другой стороны, не будут разрушаться. При применении к плавающим элементам - [margin edge](/ru/docs/CSS/box_model) нижнего элемента перемещается ниже [margin edge](/ru/docs/CSS/box_model) всех соответствующих поплавков. Это влияет на положение более поздних поплавков, поскольку более поздние поплавки не могут быть расположены выше предыдущих.

Поплавки, которые имеют отношение к очистке, - это более ранние поплавки в одном и том же [контексте форматирования блоков](/ru/docs/CSS/block_formatting_context).

> **Примечание:** Если элемент содержит только плавающие элементы, его высота сворачивается в ничто. Если вы хотите, чтобы он всегда мог изменять размер, чтобы он содержал в себе плавающие элементы, вам нужно самоочистить своих детей. Это называется **clearfix,** и один из способов сделать это - это заменит `clear` заменённый {{cssxref("::after")}} [псевдоэлемент](/ru/docs/Web/CSS/Pseudo-elements) на нем.```css
> #container::after {
> content: "";
> display: block;
> clear: both;
> }
>
> ```
>
> ```

## Синтаксис

```css
/* Значения ключевых слов */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Global values */
clear: inherit;
clear: initial;
clear: unset;
```

### Значения

- `none`
  - : Является ключевым словом, указывающим, что элемент не перемещается вниз, чтобы очистить предыдущие плавающие элементы.
- `left`
  - : Является ключевым словом, указывающим, что элемент перемещается вниз, чтобы очистить _левые_ поплавки.
- `right`
  - : Является ключевым словом, указывающим, что элемент перемещается вниз, чтобы удалить прошлые _правые_ поплавки.
- `both`
  - : Это ключевое слово, указывающее, что элемент перемещается вниз, чтобы очистить как левые, так и правые поплавки.
- `inline-start`
  - : Является ключевым словом, указывающим, что элемент перемещается вниз для очистки поплавков _в начале содержащего его блока_, то есть _левые_ поплавки на скриптах **ltr** и _правые_ поплавки на скриптах **rtl**.
- `inline-end`
  - : Является ключевым словом, указывающим, что элемент перемещается вниз для очистки поплавков _в конце содержащего его блока_, то есть _правые_ поплавки на скриптах **ltr** и _левые_ поплавки на скриптах **rtl**.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Давай лучше "бёзди хэппи" затянем, нежели Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Phasellus sit amet diam. Duis mattis varius
    dui. Suspendisse eget dolor.
  </p>
  <p class="red">
    Пусть бегут неуклюже пешеходы по лужам, Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit.
  </p>
  <p class="left">Этот абзац очищается слева.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{EmbedLiveSample('clear_left','100%','250')}}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Лучше нести бред и околесицу, но более осмысленную, чем Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit.
  </p>
  <p class="red">
    - Так я ж намедни намекал, что Lorem ipsum dolor sit amet, consectetuer
    adipiscing elit.
  </p>
  <p class="right">Этот абзац очищается справа.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{EmbedLiveSample('clear_right','100%','250')}}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Лучше нести осмысленную белиберду, чем "Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Phasellus sit amet diam. Duis mattis varius
    dui. Suspendisse eget dolor.
  </p>
  <p class="red">
    Вот я и говорю, что "Lorem ipsum dolor sit amet, consectetuer adipiscing
    elit. Phasellus sit amet diam. Duis mattis varius dui. Suspendisse eget
    dolor".
  </p>
  <p class="both">Этот абзац очищает оба.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{EmbedLiveSample('clear_both','100%','300')}}

## Характеристики

| Спецификация                                                              | Статус                              | Коммент                                                 |
| ------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#float-clear', 'float and clear')}} | {{Spec2('CSS Logical Properties')}} | Добавляет значения `inline-start` и `inline-end`.       |
| {{SpecName('CSS2.1', 'visuren.html#flow-control', 'clear')}}              | {{Spec2('CSS2.1')}}                 | Никаких существенных изменений, хотя детали уточняются. |
| {{SpecName('CSS1', '#clear', 'clear')}}                                   | {{Spec2('CSS1')}}                   | Начальное определение                                   |

{{cssinfo}}

## Совместимость с браузером

{{Compat}}

## Смотрите также

- [Box model](/ru/docs/CSS/box_model)
