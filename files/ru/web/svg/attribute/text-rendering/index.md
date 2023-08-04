---
title: text-rendering
slug: Web/SVG/Attribute/text-rendering
---

« [SVG Attribute reference home](/en/SVG/Attribute)

При создание SVG есть возможность указать браузеру о том, как рекомендуется рендерить (отрисовывать) текст. `text-rendering` предоставляет возможность указывать данные рекомендации.

Помимо presentation attribute, настройки ренедеринга шрифтов можно задать через CSS стили. Для получения дополнительной информации смотри {{ cssxref("text-rendering","CSS text-rendering") }}.

## Usage context

| Категория          | Presentation attribute                                                                |
| ------------------ | ------------------------------------------------------------------------------------- |
| Значение           | **auto** \| optimizeSpeed \| optimizeLegibility \| geometricPrecision \| inherit      |
| Animatable         | Yes                                                                                   |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/painting.html#TextRenderingProperty) |

- auto
  - : Указывает на то, что браузер должен внести соответствующие компромиссы, чтобы сбалансировать скорость рендеринга, читаемость (разборчивость текста) и геометрическую точность, но читаемости уделять более пристальное внимание, чем скорости и геометрической точности.
- optimizeSpeed
  - : Указывает на то, что браузер должен акцентироваться на скорость рендеринга, в ущерб читаемости и геометрической точности. Эту опцию также можно указывать,, чтобы отключить сглаживание (anti-aliasing) текста.
- optimizeLegibility
  - : Указывает на то, что браузер должен попытаться акцентировать на читаемости текста, в ущерб скорости рендеринга и геометрической точности. Браузеры часто применяю к тексту сглаживание (anti-aliasing) или встроенные в шрифт хинтинг, или оба способа сразу, чтобы сделать наилучшую читаемость текста.
- geometricPrecision
  - : Указывает на то, что браузер должен акцентировать геометрическую точность в ущерб читаемости и скорости рендеринга. Эта опция обычно используется, чтобы отключить использование хинтинга таким образом, чтобы контуры символов рисовались согласно геометрической точности отрисовки заложенных данных.

## Пример

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
   version="1.1" width="660" height="40"
   text-rendering="optimizeLegibility">
  <link xmlns="http://www.w3.org/1999/xhtml" href='http://fonts.googleapis.com/css?family=Sofadi+One' rel='stylesheet' type='text/css' />
  <style>
      text {font: 30px 'Sofadi One', cursive;}
  </style>
  <g>
    <text y="30">The quick brown fox jumps over the lazy dog.</text>
  </g>
</svg>
```

**optimizeLegibility (первая) и geometricPrecision (вторая)**
![](http://download.g63.ru/svg/text-rendering-optimizeLegibility.svg)
![](http://download.g63.ru/svg/text-rendering-geometricPrecision.svg)

Аналогичным образом действует {{ cssxref("text-rendering","CSS text-rendering") }}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
   version="1.1" width="660" height="40">
  <link xmlns="http://www.w3.org/1999/xhtml" href='http://fonts.googleapis.com/css?family=Sofadi+One' rel='stylesheet' type='text/css' />
  <style>
      text {
            font: 30px 'Sofadi One', cursive;
            text-rendering:optimizeLegibility;
         }
  </style>
  <g>
    <text y="30">The quick brown fox jumps over the lazy dog.</text>
  </g>
</svg>
```

## Elements

The following elements can use the `text-rendering` attribute

- {{ SVGElement("text") }}

## See also

- {{ cssxref("text-rendering","CSS text-rendering") }}
