---
title: <noscript> - элемент для браузеров с отключенным JS
slug: Web/HTML/Element/noscript
translation_of: Web/HTML/Element/noscript
---

{{HTMLSidebar}}

## Резюме

Элемент HTML **`<noscript>`** определяет секцию HTML кода, которая будет вставлена, если в браузере пользователя нет либо отключена поддержка JavaScript.

- _[Категории контента](/ru/docs/HTML/Content_categories)_ [Содержание метаданных](/ru/docs/HTML/Content_categories#Metadata_content), [Содержание потока](/ru/docs/HTML/Content_categories#Flow_content), [Формулировка содержания](/ru/docs/HTML/Content_categories#Phrasing_content).
- _Разрешенный контент_ Когда скриптинг отключен и когда он является потомком элемента {{HTMLElement("head")}}: в любом порядке, ноль или более элементов {{HTMLElement("link")}}, ноль или более элементов {{HTMLElement("style")}} и ноль или более элементов {{HTMLElement("meta")}}.
Когда скриптинг отключен и когда он не является потомком элемента {{HTMLElement("head")}}: любое прозрачное содержимое, но среди его потомков не должно быть элемента `<noscript>`.
  В противном случае: потоковое содержимое или формулировка содержимого.
- _Пропуск тега_ {{no_tag_omission}}
- _Разрешенные родительские элементы_ Любой элемент, который принимает [формулировку содержимого](/ru/docs/HTML/Content_categories#Phrasing_content), если нет элемента-предка `<noscript>` или в элементе {{HTMLElement("head")}} (но только для HTML-документа), здесь снова, если нет элемента-предка `<noscript>`.
- _DOM интерфейс_ {{domxref("HTMLElement")}}

## Атрибуты

Этот элемент включает в себя только [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

## Пример

```html
<noscript>
  <!-- привязка к внешнему файлу -->
  <a href="http://www.mozilla.com/">Внешняя ссылка</a>
</noscript>
<p>Камни!</p>
```

### Пример с включённым JavaScript

Rocks!

### Результат с выключенным JavaScript

[External Link](http://www.mozilla.com/)

Rocks!

## Спецификации

| Specification                                                                                                        | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'scripting-1.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'scripting-1.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', 'interact/scripts.html#h-18.3.1', '&lt;noscript&gt;')}}             | {{Spec2('HTML4.01')}}     |         |

## Совместимость с браузером

{{Compat}}
