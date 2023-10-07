---
title: Селекторы по классу
slug: Web/CSS/Class_selectors
---

{{CSSRef("Selectors")}}

## Краткое описание

В HTML документе, селекторы по CSS классу находят элементы с нужным классом. Атрибут класса определяется как разделённый пробелами список элементов, и один из этих пунктов должен точно соответствовать имени класса, приведённому в селекторе.

## Синтаксис

```
.classname { style properties }
```

Это эквивалентно следующему {{ Cssxref("Attribute_selectors", "селектор по атрибуту") }}:

```
[class~=classname] { style properties }
```

## Пример

### CSS

```css
span.classy {
  background-color: DodgerBlue;
}
```

### HTML

```html
<span class="classy">Здесь span с каким-то текстом.</span>
<span>А тут другой span.</span>
```

{{ EmbedLiveSample('Example', 200, 50) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
