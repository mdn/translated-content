---
title: <cite>
slug: Web/HTML/Element/cite
---

## Описание

**HTML-элемент \<cite>** (_от англ. Citation_) представляет из себя ссылку на источник цитаты. Он должен включать в себя название произведения или URL, который может быть в сокращённом виде в соответствии с правилами, используемых для добавления метаданных цитирования.

> **Примечание:**
>
> - Творческая работа может включать в себя книгу, статью, очерк, стихотворение, суждение, песню, сценарий, фильм, ТВ-шоу, игру, скульптуру, живопись, театральную постановку, пьесу, оперу, мюзикл, выставку, юридический отчёт, компьютерную программу, веб-сайт, веб-страницу, сообщение или комментарий в блоге или на форуме, tweet, письменное или устное заявление и так далее.
> - Спецификация W3C утверждает, что ссылка на творческую работу может содержать имя автора, в то время, как WHATWG заявляет, что она не может включать имя человека ни в коем случае.
> - Используйте атрибут [`cite`](/ru/docs/Web/HTML/Element/blockquote#cite) элемента {{HTMLElement("blockquote")}} или элемента {{HTMLElement("q")}} для ссылки на интернет-ресурс источника.

| [Content categories](/ru/docs/HTML/Content_categories) | [Flow content](/ru/docs/HTML/Content_categories#Flow_content), [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content), palpable content. |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                      | [Phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).                                                                                  |
| Tag omission                                           | {{no_tag_omission}}                                                                                                                                     |
| Permitted parent elements                              | Any element that accepts [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).                                                         |
| DOM interface                                          | {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the {{domxref("HTMLSpanElement")}} interface for this element.   |

## Атрибуты

Для данного элемента доступны только [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

## Пример

```html
More information can be found in <cite>[ISO-0000]</cite>
```

{{EmbedLiveSample('Пример')}}

## Примечание

To avoid the default italic style from being used for the \<cite> element use the [CSS](/ru/docs/CSS) {{cssxref("font-style")}} property.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Элемент {{HTMLElement("blockquote")}} для длинных цитат.
- Элемент {{HTMLElement("q")}} для встраиваемых цитат.

{{HTMLSidebar}}
