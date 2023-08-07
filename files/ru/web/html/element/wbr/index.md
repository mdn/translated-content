---
title: <wbr>
slug: Web/HTML/Element/wbr
---

{{HTMLSidebar}}

**Элемент HTML `<wbr>`** предоставляет возможность переноса слова – позицию в тексте, где браузер может по желанию разбить строку, в противном случае его правила разрыва строки не будут создавать разрыв в этом месте.

**{{EmbedInteractiveExample("pages/tabbed/wbr.html", "tabbed-shorter")}}**

| Категории контента    | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Flow_content), [фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content). |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое | Отсутствует                                                                                                                                                 |
| Пропуск тегов         | It is an {{Glossary("empty element")}}; it must have a start tag, but must not have an end tag.                                                             |
| Допустимые родители   | Любой элемент принимающий [фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content).                                                  |
| Допустимые ARIA-роли  | Любые                                                                                                                                                       |
| DOM-интерфейс         | {{domxref("HTMLElement")}}                                                                                                                                  |

## Атрибуты

**Элемент может содержать только [глобальные атрибуты](/ru/docs/HTML/Global_attributes).**

## Примечания

На страницах в кодировке UTF-8, элемент `<wbr>` ведёт себя как кодовое значение `U+200B ZERO-WIDTH SPACE` (пробел нулевой ширины). В частности, он ведёт себя как кодовое значение Unicode Bidi BN, то есть он не влияет на порядок {{Glossary("bidi")}}-направления (двунаправленного потока) `<div dir=rtl>123,<wbr>456</div>`: отображается, если выражение не разбито на две строки, `123 456` и не `456,123`.

По той же причине, элемент `<wbr>` не вводит дефис в точке разрыва строки. Чтобы дефис отображался только в конце строки, используйте вместо него символ «мягкого дефиса» (`&shy;`).

Этот элемент был впервые реализован в Internet Explorer 5.5 и был официально определён в HTML5.

## Пример

[Руководство по стилю Yahoo](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/) рекомендует [разбивать URL перед пунктуацией](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses), чтобы не оставлять знаки препинания в конце строки, которые читатель может ошибочно принять за конец URL.

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

**{{EmbedLiveSample("Пример")}}**

## Спецификация

| Спецификация                                                                              | **Статус**                   | Комментарии |
| ----------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| **{{SpecName('HTML WHATWG', 'semantics.html#the-wbr-element', '&lt;wbr&gt;')}}**          | **{{Spec2('HTML WHATWG')}}** |             |
| **{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-wbr-element', '&lt;wbr&gt;')}}** | **{{Spec2('HTML5 W3C')}}**   |             |

## Поддержка браузерами

**{{Compat}}**

## Смотрите также

- **{{cssxref("overflow-wrap")}}**
- **{{cssxref("word-break")}}**
- **{{cssxref("hyphens")}}**
