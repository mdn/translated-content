---
title: ":read-write"
slug: Web/CSS/:read-write
---

{{ CSSRef() }}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:read-write` находит элементы, доступные для редактирования пользователем, такие как текстовые поля.

## Пример

```css
input:-moz-read-write {
  background: #eee;
}
input:read-write {
  background: #eee;
}
```

## Спецификации

| Спецификации                                                         | Статус                        | Комментарий                                         |
| -------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------- |
| {{ SpecName('HTML WHATWG', '#selector-read-write', ':read-write') }} | {{ Spec2('HTML WHATWG') }}    | Без изменений.                                      |
| {{ SpecName('HTML5 W3C', '#selector-read-write', ':read-write') }}   | {{ Spec2('HTML5 W3C') }}      | Определяет семантику в HTML и ограничения проверки. |
| {{ SpecName('CSS4 Selectors', '#rw-pseudos', ':read-write') }}       | {{ Spec2('CSS4 Selectors') }} | Без изменений.                                      |
| {{ SpecName('CSS3 Basic UI', '#pseudo-ro-rw', ':read-write') }}      | {{ Spec2('CSS3 Basic UI') }}  | Определяет псевдокласс, но не семантику.            |

## Поддержка браузерами

{{Compat}}

## See also

- [`:read-only`](/ru/docs/Web/CSS/:read-only)
- HTML атрибут [`contenteditable`](/ru/docs/HTML/Content_Editable)
