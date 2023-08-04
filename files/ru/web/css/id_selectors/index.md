---
title: Селекторы по ID
slug: Web/CSS/ID_selectors
---

{{ CSSRef() }}

## Краткое описание

В HTML-документах CSS-селекторы по ID производят выборку всех элементов по ID, полностью совпадающих с селектором.

## Синтаксис

```
#id_value { style properties }
```

То же самое — {{ Cssxref("Attribute_selectors", "селектор по атрибутам") }}:

```
[id=id_value] { style properties }
```

## Пример

```css
span#identified {
  background-color: DodgerBlue;
}
```

```html
<span id="identified">Тут span с каким-то текстом.</span>
<span>Здесь тоже span.</span>
```

{{ EmbedLiveSample('Example', 200, 50) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
