---
title: background-origin
slug: Web/CSS/background-origin
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`background-origin`** устанавливает _область расположения фона_. Другими словами, оно устанавливает исходную позицию изображения, установленную с помощью свойства {{cssxref("background-image")}}.

{{EmbedInteractiveExample("pages/css/background-origin.html")}}

Обратите внимание, что `background-origin` игнорируется, когда {{cssxref("background-attachment")}} является `fixed`.

> **Примечание:** Сокращение {{cssxref("background")}} сбрасывает значения этого свойства к его начальному значению, если оно не указано.

## Синтаксис

```css
/* Ключевые значения */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* Глобальные значения */
background-origin: inherit;
background-origin: initial;
background-origin: unset;
```

Свойство `background-origin` указывается в качестве одного из значений ключевых слов, перечисленных ниже.

### Значения

- `border-box`
  - : Фон располагается относительно рамки.
- `padding-box`
  - : Фон расположен относительно поля отступа.
- `content-box`
  - : Фон располагается относительно поля содержимого.

### Официальный синтаксис

{{csssyntax}}

## Примеры

```css
.example {
  border: 10px double;
  padding: 10px;
  background: url("image.jpg");
  background-position: center left;
  background-origin: content-box;
}
```

```css
#example2 {
  border: 4px solid black;
  padding: 10px;
  background: url("image.gif");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

```css
div {
  background-image: url("logo.jpg"), url("mainback.png"); /* Applies two images to the background */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{cssxref("background-clip")}}
