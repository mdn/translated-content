---
title: ":read-only"
slug: Web/CSS/:read-only
---

{{ CSSRef() }}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:read-only` находит элементы, недоступные для редактирования пользователем.

## Пример

```css
input:-moz-read-only {
  background: #eee;
}
input:read-only {
  background: #eee;
}
```

## Спецификации

| Спецификация                                                       | Статус                        | Комментарий                                         |
| ------------------------------------------------------------------ | ----------------------------- | --------------------------------------------------- |
| {{ SpecName('HTML WHATWG', '#selector-read-only', ':read-only') }} | {{ Spec2('HTML WHATWG') }}    | Без изменений.                                      |
| {{ SpecName('HTML5 W3C', '#selector-read-only', ':read-only') }}   | {{ Spec2('HTML5 W3C') }}      | Определяет семантику в HTML и ограничения проверки. |
| {{ SpecName('CSS4 Selectors', '#rw-pseudos', ':read-only') }}      | {{ Spec2('CSS4 Selectors') }} | Без изменений.                                      |
| {{ SpecName('CSS3 Basic UI', '#pseudo-ro-rw', ':read-only') }}     | {{ Spec2('CSS3 Basic UI') }}  | Определяет псевдокласс, но не семантику.            |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [`:read-write`](/ru/docs/Web/CSS/:read-write)
- HTML атрибут [`contenteditable`](/ru/docs/HTML/Content_Editable)
