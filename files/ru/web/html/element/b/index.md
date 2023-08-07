---
title: <b> - жирное выделение текста
slug: Web/HTML/Element/b
---

**HTML-элемент `<b>`** является частью текста стилистически отличающейся от нормального текста, не носящий какого-либо специального значения или важности, и как правило выделен жирным шрифтом.

| [Content categories](/ru/docs/HTML/Content_categories) | [Flow content](/ru/docs/HTML/Content_categories#Flow_content), [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content), palpable content.       |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённый контент                                    | [Phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).                                                                                        |
| Tag omission                                           | {{no_tag_omission}}                                                                                                                                           |
| Permitted parents                                      | Any element that accepts [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).                                                               |
| Permitted ARIA roles                                   | Any                                                                                                                                                           |
| DOM interface                                          | {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the [`HTMLSpanElement`](/ru/docs/DOM/span) interface for this element. |

## Атрибуты

Этот элемент содержит только [global attributes](/ru/docs/HTML/Global_attributes).

## Указания по применению

- Используйте `<b>` в таких случаях, как ключевые слова в кратком содержании, имена продуктов в отзыве, или других частях текста, которые обычно выделяют жирным.
- Не путать элемент `<b>` с {{HTMLElement("strong")}}, {{HTMLElement("em")}}, или {{HTMLElement("mark")}} элементами. Элемент {{HTMLElement("strong")}} представляет собой текст определённой _важности_, {{HTMLElement("em")}} делает некий акцент на тексте, и элемент {{HTMLElement("mark")}} представляет собой текст определённой _значимости_. Элемент `<b>` не содержит специальной семантической информации, используйте его только в том случае, если другие не подошли.
- Также не помечайте заглавия и заголовки элементом `<b>`. Для этих целей используйте элементы с {{HTMLElement("h1")}} до {{HTMLElement("h6")}} . К тому же CSS может изменять стандартный вид этих элементов, в результате чего они _не всегда_ будут выделены жирным текстом.
- Хорошей практикой является использование атрибута **class** на элементе `<b>` для того, чтобы передать дополнительную семантическую информацию (например, `<b class="lead">` для первого предложения в абзаце). Это упрощает разработку различных стилизаций веб-документа без надобности менять его HTML-код.
- Исторически, элемент `<b>` был задуман для выделения текста жирным шрифтом. Информация о стилизации устарела, начиная с HTML4, значение элемента `<b>` было изменено.
- Если нет семантической причины использовать элемент \<b>, использование css свойства [font-weight](/ru/docs/CSS/font-weight) со значением bold будет более грамотным выбором для изменения толщины текста.

## Пример

```css
.keywords {
  color: red;
}
```

```html
<p>
  В этой статье описывается элемент для форматирования
  <b class="keywords">текста</b>. Она объясняет его использование в документе
  <b class="keywords">HTML</b>.
</p>
```

{{EmbedLiveSample('Пример')}}

Ключевые слова с тегом `<b>`, отображаемые со стилем, выделены жирным шрифтом.

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- Другие элементы содержащие [text-level semantics](/ru/docs/HTML/Text_level_semantics_conveying_elements): {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Using \<b> and \<i> elements (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)

{{HTMLSidebar}}
