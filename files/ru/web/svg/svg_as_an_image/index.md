---
title: SVG как изображение
slug: Web/SVG/SVG_as_an_Image
---

Изображения SVG могут использоваться как формат изображения в ряде контекстов. Многие браузеры поддерживают изображения SVG:

- Элементы HTML {{HTMLElement("img")}} или {{SVGElement("svg")}}
- CSS {{cssxref("background-image")}}

## Гекко-специфические контексты

Кроме того, Gecko 2.0 представил поддержку использования [SVG](/ru/docs/SVG) в следующих контекстах:

- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- Элементы SVG {{SVGElement("image")}}
- Элементы SVG {{SVGElement("feImage")}}
- Функция Canvas [`drawImage`](/ru/docs/HTML/Canvas/Tutorial/Using_images#drawImage)

### Ограничения

В целях безопасности, Gecko накладывает некоторые ограничения на контент SVG, когда он используется в качестве изображения:

- [JavaScript](/ru/docs/JavaScript) отключён.
- Внешние ресурсы (например, изображения, таблицы стилей) не могут быть загружены, хотя их можно использовать, если они встроены в данные: URI.
- {{cssxref(":visited")}}-стили ссылок не отображаются.
- Стилизация виджитов на платформе (основанная на теме ОС) отключена.

Обратите внимание, что вышеуказанные ограничения являются специфическими для контекстов изображения; они не применяются, когда содержимое SVG просматривается напрямую или когда оно внедрено в виде документа с помощью встраивания элементов {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, или {{HTMLElement("embed")}}.

## Спецификации

| Specification                                                                                                  | Status                        | Comment                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName("HTML5 W3C", "semantics-embedded-content.html#the-img-element", "SVG within &lt;img&gt; element")}} | {{Spec2("HTML5 W3C")}}        | Defines the usage of SVG within {{HTMLElement("img")}} elements.              |
| {{SpecName("CSS3 Backgrounds", "#the-background-image", "SVG within 'background-image' CSS property")}}        | {{Spec2("CSS3 Backgrounds")}} | Defines the usage of SVG within the {{cssxref("background-image")}} property. |

## Смотрите также

- [SVG в HTML. Введение](/ru/docs/SVG_In_HTML_Introduction)
