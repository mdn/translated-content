---
title: <blockquote> - элемент цитаты
slug: Web/HTML/Element/blockquote
---

## Описание

**HTML-элемент `<blockquote>`** (от англ. _Block Quotation_) указывает на то, что заключённый в нем текст является развёрнутой цитатой. Обычно он (текст) визуально выделяется наклонным (смотри [Примечание](/ru/docs/HTML/Element/blockquote#Notes), где говорится о том, как это изменить). URI на источник цитаты можно указать в атрибуте **cite**, тогда как текстовое представление источника может быть задано элементом {{HTMLElement("cite")}}.

{{EmbedInteractiveExample("pages/tabbed/blockquote.html","tabbed-standard")}}

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Основной контент](/ru/docs/Web/Guide/HTML/Content_categories#Основной_контент), секционный корень, явный контент. |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое                                            | [Основной контент](/ru/docs/Web/Guide/HTML/Content_categories#Основной_контент).                                   |
| Пропуск тегов                                                    | {{no_tag_omission}}                                                                                                |
| Допустимые родители                                              | Любой элемент, который принимает [основной контент](/ru/docs/Web/Guide/HTML/Content_categories#Основной_контент).  |
| Допустимые ARIA-роли                                             | Любые                                                                                                              |
| DOM-интерфейс                                                    | {{domxref("HTMLQuoteElement")}}                                                                                    |

## Атрибуты

Для данного элемента доступны [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

- {{htmlattrdef("cite")}}
  - : URL, указывающий на исходный документ или сообщение, откуда была взята цитата. Этот атрибут предназначен для того, чтобы сослаться на информацию, объясняющую контекст, или ссылки, из которых была взята цитата.

## Пример

```html
<blockquote cite="http://developer.mozilla.org">
  <p>This is a quotation taken from the Mozilla Developer Center.</p>
</blockquote>
```

Результат:

{{EmbedLiveSample("")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Примечание

Чтобы изменить отступ элемента `<blockquote>`, используйте [CSS](/ru/docs/CSS) - свойство {{cssxref("margin")}}.

Для коротких цитат используйте `элемент` {{HTMLElement("q")}}.

## Смотрите также

- Элемент {{HTMLElement("q")}} для встроенных (строковых) цитат.
- Элемент {{HTMLElement("cite")}} для указания источника.

{{HTMLSidebar}}
