---
title: list-style-image
slug: Web/CSS/list-style-image
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`list-style-image`** устанавливает изображение, используемое в качестве маркера списка.

Чаще, удобнее использовать общее свойство {{ cssxref("list-style") }}.

{{EmbedInteractiveExample("pages/css/list-style-image.html")}}

> **Примечание:** Это свойство применяется к элементам списка, т.е. к элементам с `{{cssxref("display")}}: list-item;` [по умолчанию](https://www.w3.org/TR/html5/rendering.html#lists) оно включает элементы {{HTMLElement("li")}}. Т.к. это свойство наследуется, его можно задать для родительского элемента (обычно {{HTMLElement("ol")}} или {{HTMLElement("ul")}}), что позволит применить его ко всем элементам списка.

## Синтаксис

```css
/* Значение ключевым словом */
list-style-image: none;

/* <url> значения */
list-style-image: url("starsolid.gif");

/* Глобальные значения */
list-style-image: inherit;
list-style-image: initial;
list-style-image: unset;
```

### Значения

- {{cssxref("&lt;url&gt;")}}
  - : Расположение элемента для использования в качестве маркера.
- `none`
  - : Указывает, что изображение не используется в качестве маркера списка. Если установлено это значение, вместо него будет использоваться маркер, определённый в {{ Cssxref("list-style-type") }}.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### CSS

```css
ul {
  list-style-image: url("starsolid.gif");
}
```

### Результат

{{ EmbedLiveSample('Пример') }}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-position")}}
