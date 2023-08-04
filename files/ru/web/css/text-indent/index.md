---
title: text-indent
slug: Web/CSS/text-indent
---

{{CSSRef}}

Свойство `text-indent` определяет размер отступа (пустого места) перед строкой в текстовом блоке. По умолчанию это свойство управляет отступом только первой строкой блока, однако ключевые слова `hanging` и `each-line` могут изменить данное поведение.

Строка смещается по горизонтали к левому или к правому (при размещении текста справа налево) краю блока, в котором содержится элемент.

{{cssinfo}}

## Синтаксис

```css
/* значение <length> */
text-indent: 3mm;
text-indent: 40px;

/* значение <percentage> зависит от ширины блока*/
text-indent: 15%;

/* значения ключевых слов */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* международные значения */
text-indent: inherit;
text-indent: initial;
text-indent: unset;
```

### Значения

- `<length>`
  - : Отступ определяется как абсолютная длина ({{cssxref("&lt;length&gt;")}}). Возможны также отрицательные значения. Статья про значение длины ({{cssxref("&lt;length&gt;")}}) расскажет больше про возможные единицы измерения.
- `<percentage>`
  - : В процентном ({{cssxref("&lt;percentage&gt;")}}) соотношении отступ зависит от ширины всего блока, внутри которого находится строка.
- `each-line` {{experimental_inline}} (экспериментальное значение)
  - : Отступ добавляется к первой строке блочного контейнера, а также к каждой строке после принудительного разрыва строки (Enter и br), но не влияет на строки после мягкого переноса.
- `hanging` {{experimental_inline}} (экспериментальное значение)
  - : Отступ добавляется ко всем строкам, _кроме_ первой.

### Формальный синтаксис

{{csssyntax}}

## Простые примеры отступов

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

### CSS

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

{{ EmbedLiveSample('Simple_indent','100%','100%') }}

## Пример со значением \<percentage>

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

### CSS

```css
p {
  text-indent: 30%;
  background: plum;
}
```

{{ EmbedLiveSample('Percentage_indent_example','100%','100%') }}

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
