---
title: Смежные селекторы
slug: Web/CSS/Adjacent_sibling_combinator
---

{{CSSRef("Selectors")}}

Указывает на смежный или следующий селектор. Обеспечивает выбор только элемента расположенного непосредственно за определённым в первой части элементом.

## Синтаксис

```
former_element + target_element { style properties }
```

## Пример

```css
li:first-of-type + li {
  color: red;
}
```

```html
<ul>
  <li>Один</li>
  <li>Два</li>
  <li>Три</li>
</ul>
```

{{EmbedLiveSample('Example_1', 200, 100)}}

Так же может использоваться для задания стиля определённого класса "caption span" следующих {{HTMLElement("img")}} вложенных элементов:

```css
img + span.caption {
  font-style: italic;
}
```

сработает только на тех тегах span, для которых задан класс caption:

```html
<img src="photo1.jpg" /><span class="caption">Первая фотка</span>
<img src="photo2.jpg" /><span class="caption">Вторая</span>
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Селекторы следующего элемента](/ru/docs/Web/CSS/General_sibling_selectors)
