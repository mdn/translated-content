---
title: list-style-image
slug: Web/CSS/Reference/Properties/list-style-image
original_slug: Web/CSS/list-style-image
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`list-style-image`** устанавливает изображение, используемое в качестве маркера списка.

Чаще, удобнее использовать общее свойство {{ cssxref("list-style") }}.

{{InteractiveExample("CSS Demo: list-style-image")}}

```css interactive-example-choice
list-style-image: url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style-image: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all unhighlighted" id="example-element">
      <li>Apollo</li>
      <li>Hubble</li>
      <li>Chandra</li>
      <li>Cassini-Huygens</li>
      <li>Spitzer</li>
    </ul>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

> [!NOTE]
> Это свойство применяется к элементам списка, т.е. к элементам с `{{cssxref("display")}}: list-item;` [по умолчанию](https://www.w3.org/TR/html5/rendering.html#lists) оно включает элементы {{HTMLElement("li")}}. Т.к. это свойство наследуется, его можно задать для родительского элемента (обычно {{HTMLElement("ol")}} или {{HTMLElement("ul")}}), что позволит применить его ко всем элементам списка.

## Синтаксис

```css
/* Ключевые слова */
list-style-image: none;

/* <url> значения */
list-style-image: url("star-solid.gif");

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
  list-style-image: url("star-solid.gif");
}
```

### Результат

{{ EmbedLiveSample('Пример') }}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-position")}}
