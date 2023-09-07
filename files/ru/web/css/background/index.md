---
title: background
slug: Web/CSS/background
---

{{CSSRef("CSS Background")}}Сокращённое [CSS](/ru/docs/Web/CSS) свойство **`background`** устанавливает сразу все свойства стиля фона, такие как цвет, изображение, источник и размер, или метод повтора.{{EmbedInteractiveExample("pages/css/background.html")}}

Исходный код этого интерактивного примера хранится в репозитории GitHub. Если вы хотите внести свой вклад в проект интерактивных примеров, пожалуйста клонируйте <https://github.com/mdn/interactive-examples> и отправьте нам запрос на извлечение..

Свойство является [сокращением,](/ru/docs/Web/CSS/Shorthand_properties) которое устанавливает следующие свойства в одном объявлении: {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}, и {{cssxref("background-attachment")}}.

Как и во всех сокращённых свойствах, любые пропущенные вложенные значения будут установлены в свои [изначальные значения](/ru/docs/Web/CSS/initial_value).

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

> **Примечание:** {{cssxref("background-color")}} можно определить только на последнем фоне, поскольку для всего элемента существует только один цвет фона.

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
  background: url("starsolid.gif") #00d repeat-y fixed;
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
- [Использование градиентов](/ru/docs/CSS/Using_CSS_gradients)
- [Несколько backgrounds](/ru/docs/CSS/Multiple_backgrounds)
