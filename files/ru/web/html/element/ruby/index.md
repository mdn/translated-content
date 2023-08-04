---
title: <ruby>
slug: Web/HTML/Element/ruby
---

`HTML-элемент<ruby>` предназначен для добавления небольшой аннотации сверху или снизу от заданного текста. Такая форма записи преимущественно используется для идеографической письменности вроде китайского языка, но может применяться и для других языков, если требуется написать один текст над другим.

| [Категории контента](/ru/docs/Web/HTML/Content_categories) | [Основной поток(Flow content)](/ru/docs/Web/HTML/Content_categories#Flow_content), [текстовой контент(phrasing content)](/ru/docs/Web/HTML/Content_categories#Phrasing_content), явный контент(palpable content). |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Текстовый контент(phrasing content)](/ru/docs/Web/HTML/Content_categories#Phrasing_content).                                                                                                                     |
| Пропуск тегов                                              | {{no_tag_omission}}                                                                                                                                                                                               |
| Допустимые родители                                        | Любой элемент который согласован с [текстовым контентом(phrasing content)](/ru/docs/HTML/Content_categories#Phrasing_content).                                                                                    |
| Допустимые ARIA-роли                                       | Любые                                                                                                                                                                                                             |
| DOM-интерфейс                                              | {{domxref("HTMLElement")}}                                                                                                                                                                                        |

## Атрибуты

Этот элемент включает в себя только [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

## Примеры

### Пример 1: Символы

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

### Пример 2: Слово

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}

{{HTMLSidebar}}
