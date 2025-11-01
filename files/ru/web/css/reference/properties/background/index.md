---
title: background
slug: Web/CSS/Reference/Properties/background
original_slug: Web/CSS/background
---

{{CSSRef}}

Сокращённое [CSS](/ru/docs/Web/CSS) свойство **`background`** устанавливает сразу все свойства стиля фона, такие как цвет, изображение, источник и размер, или метод повтора.

{{InteractiveExample("CSS Demo: background")}}

```css interactive-example-choice
background: green;
```

```css interactive-example-choice
background: content-box radial-gradient(crimson, skyblue);
```

```css interactive-example-choice
background: no-repeat url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background: left 5% / 15% 60% repeat-x
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background:
  center / contain no-repeat
    url("/shared-assets/images/examples/firefox-logo.svg"),
  #eee 35% url("/shared-assets/images/examples/lizard.png");
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

Свойство является [сокращением,](/ru/docs/Web/CSS/CSS_cascade/Shorthand_properties) которое устанавливает следующие свойства в одном объявлении: {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}, и {{cssxref("background-attachment")}}.

Как и во всех сокращённых свойствах, любые пропущенные вложенные значения будут установлены в свои [изначальные значения](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing).

## Синтаксис

```css
/* Использование свойства <background-color> */
background: green;

/* Использование свойств <bg-image> и <repeat-style> */
background: url("test.jpg") repeat-y;

/* Использование <box> и <background-color> */
background: border-box red;

/* Одно изображение, центрированное и масштабированное */
background: no-repeat center/80% url("../img/image.png");
```

> [!NOTE]
> {{cssxref("background-color")}} можно определить только на последнем фоне, поскольку для всего элемента существует только один цвет фона.

### Значения

Свойству можно указывать одно или более значений из данного списка в любом порядке:

- `<attachment>`
  - : Смотри {{cssxref("background-attachment")}}
- `<box>`
  - : Смотри {{cssxref("background-clip")}}
- `<background-color>`
  - : Смотри {{cssxref("background-color")}}
- `<bg-image>`
  - : Смотри {{Cssxref("background-image")}}
- `<position>`
  - : Смотри {{cssxref("background-position")}}
- `<repeat-style>`
  - : Смотри {{cssxref("background-repeat")}}
- `<bg-size>`
  - : Смотри {{cssxref("background-size")}}. Это свойство должно быть указано после **\<position>**, разделённого символом '/'.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### HTML

```html
<p class="topbanner">
  Starry sky<br />
  Twinkle twinkle<br />
  Starry sky
</p>
<p class="warning">Here is a paragraph</p>
<p></p>
```

### CSS

```css
.warning {
  background: red;
}

.topbanner {
  background: url("star-solid.gif") #00d repeat-y fixed;
}
```

### Результат

{{EmbedLiveSample("Примеры")}}

## Спецификации

{{Specifications}}

{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("-moz-background-inline-policy")}}
- [Использование градиентов](/ru/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Несколько backgrounds](/ru/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
