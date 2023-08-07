---
title: <text>
slug: Web/SVG/Element/text
---

{{SVGRef}}

SVG элемент **`<text>`** определяет графический элемент, содержащий текст. Как и к любому другому графическому элементу SVG, к элементу `<text>` можно применить градиент, шаблон, окантовку, маску или фильтр.

Текст не будет отображаться, если он не находится внутри SVG элемента `<text>`. Это отличается от сокрытия по умолчанию, поскольку установка [свойства display](/ru/docs/Web/SVG/Attribute/display) не отображает текст.

## Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
  <style>
    .small {
      font: italic 13px sans-serif;
    }
    .heavy {
      font: bold 30px sans-serif;
    }

    /* Обратите внимание, что цвет текста задаётся с помощью        *
     * fill свойства, а свойство color используется только для HTML */
    .Rrrrr {
      font: italic 40px serif;
      fill: red;
    }
  </style>

  <text x="20" y="35" class="small">Мой</text>
  <text x="60" y="35" class="heavy">кот</text>
  <text x="60" y="55" class="small">очень</text>
  <text x="100" y="55" class="Rrrrr">Сердит!</text>
</svg>
```

{{EmbedLiveSample('Пример', 150, '100%')}}

## Атрибуты

### Глобальные атрибуты

- [Условные атрибуты обработки](/ru/docs/Web/SVG/Attribute#Conditional_processing_attributes)
- [Основные атрибуты](/ru/docs/Web/SVG/Attribute#Core_attributes)
- [Графические атрибуты событий](/ru/docs/Web/SVG/Attribute#Graphical_event_attributes)
- [Атрибуты представления](/ru/docs/Web/SVG/Attribute#Presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}
- {{SVGAttr("externalResourcesRequired")}}

### Специфические атрибуты

- {{SVGAttr("х")}}
- {{SVGAttr("у")}}
- {{SVGAttr("dx")}}
- {{SVGAttr("dy")}}
- {{SVGAttr("rotate")}}
- {{SVGAttr("textLength")}}
- {{SVGAttr("text-anchor")}}
- {{SVGAttr("lengthAdjust")}}

## Интерфейс DOM

Этот элемент реализует интерфейс {{domxref("SVGTextElement")}}.

## Примеры

### Основы использования элемента \<text>

#### SVG

```html
<svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
  <style>
    .mal {
      font: italic 16px sans-serif;
    }
    .hey {
      font: bold 26px sans-serif;
      fill: #6de;
    }
  </style>
  <text x="0" y="68" class="mal">- Привет,</text>
  <text x="110" y="40" class="hey">Сахалин!</text>
</svg>
```

#### Результат

{{EmbedLiveSample('SVG', 150, '100%')}}

### Изменение направления написания текста

Направление написания SVG-текста можно сменить на обратное, применив трансформацию.

#### SVG

```html
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <style>
    .mal {
      font: italic 16px sans-serif;
      transform: rotate(180, 50, 50);
    }
    .hey {
      font: bold 26px sans-serif;
      fill: #6de;
    }
  </style>
  <text x="-40" y="68" class="mal" transform="rotate(180, 50, 50)">
    Пример ротации
  </text>
  <text x="180" y="40" class="hey">SVG-текста.</text>
</svg>
```

#### Результат

{{EmbedLiveSample('Реверс', 200, '100%')}}

### Цвет текста

Цвет текста в SVG-элементе \<text> может быть изменён посредством свойства **fill**="\[color]" внутри элемента \<text>.

#### SVG

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <style>
    .gri {
      font: italic 16px sans-serif;
      fill: #6dd;
    }
    .red {
      font: bold 26px sans-serif;
      fill: #d66;
    }
  </style>
  <text class="gri" x="10" y="30">Цвет текста</text>
  <text class="red" x="120" y="30">SVG.</text>
</svg>
```

#### Результат

{{EmbedLiveSample('SVG_3', 200, '100%')}}

### Применение CSS-стилей к содержимому элемента \<text>

Содержимое SVG элемента **\<text>** может быть стилизовано как обычный текст в HTML.

#### SVG

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <style>
    .stil {
      font: italic 16px sans-serif;
    }
    .list {
      font: bold 26px sans-serif;
    }
  </style>
  <text class="stil" x="10" y="30">Стиль текста</text>
  <text class="list" x="140" y="30">SVG.</text>
</svg>
```

#### Результат

{{EmbedLiveSample('SVG_4', 200, '100%')}}

## Спецификация

{{Specifications}}

Таблица составлена по информации из [этого источника](/ru/docs/Web/SVG/Compatibility_sources).

## Совместимость с браузером

{{Compat}}

## Контекст использования

{{Svginfo}}

## Связь

- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}
- {{SVGElement("altGlyph")}}
