---
title: background-origin
slug: Web/CSS/Reference/Properties/background-origin
original_slug: Web/CSS/background-origin
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`background-origin`** устанавливает _область расположения фона_. Другими словами, оно устанавливает исходную позицию изображения, установленную с помощью свойства {{cssxref("background-image")}}.

{{InteractiveExample("CSS Demo: background-origin")}}

```css interactive-example-choice
background-origin: border-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: padding-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: content-box;
background-repeat: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is the content of the element.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: #d73611;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333;
  font-size: 2em;
  font-weight: bold;
}
```

Обратите внимание, что `background-origin` игнорируется, когда {{cssxref("background-attachment")}} является `fixed`.

> [!NOTE]
> Сокращение {{cssxref("background")}} сбрасывает значения этого свойства к его начальному значению, если оно не указано.

## Синтаксис

```css
/* Ключевые слова */
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
  background-image:
    url("logo.jpg"), url("mainback.png"); /* Applies two images to the background */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("background-clip")}}
