---
title: Псевдоклассы
slug: Web/CSS/Pseudo-classes
---

{{CSSRef}}

**Псевдокласс** в CSS — _это ключевое слово, добавленное к селектору,_ которое определяет его особое состояние. Например, {{ Cssxref(":hover") }} может быть использован для изменения цвета кнопки при наведении курсора на неё.

```css
div:hover {
  background-color: #f89b4d;
}
```

Псевдоклассы дают возможность стилизовать элемент на основе не только отношений в DOM-дереве, но и основываясь на внешних факторах, таких как история посещений (например, {{ cssxref(":visited") }}), состояние содержимого (вроде {{ cssxref(":checked") }} у некоторых элементов формы) или позиции курсора мыши (например, {{ cssxref(":hover") }} определяет, находится ли курсор мыши над элементом).

> [!NOTE]
> В отличие от псевдоклассов, [псевдоэлементы](/ru/docs/Web/CSS/Pseudo-elements) могут быть использованы для стилизации _определённой части_ элемента.

## Синтаксис

```
selector:pseudo-class {
  property: value;
}
```

Как и с обычными классами, можно совмещать вместе в одном селекторе любое число псевдоклассов.

## Список стандартных псевдоклассов

- {{ Cssxref(":active") }}
- {{ cssxref(':any')}}
- {{ cssxref(':any-link')}}
- {{ Cssxref(":checked") }}
- {{ Cssxref(":default") }}
- {{ Cssxref(":defined") }}
- {{ Cssxref(":dir", ":dir()")}}
- {{ Cssxref(":disabled") }}
- {{ Cssxref(":empty") }}
- {{ Cssxref(":enabled") }}
- {{ Cssxref(":first") }}
- {{ Cssxref(":first-child") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":fullscreen") }}
- {{ Cssxref(":focus") }}
- {{ Cssxref(":hover") }}
- {{ Cssxref(":indeterminate") }}
- {{ Cssxref(":in-range") }}
- {{ Cssxref(":invalid") }}
- {{ Cssxref(":lang", ":lang()") }}
- {{ Cssxref(":last-child") }}
- {{ Cssxref(":last-of-type") }}
- {{ Cssxref(":left") }}
- {{ Cssxref(":link") }}
- {{ Cssxref(":not", ":not()") }}
- {{ Cssxref(":nth-child", ":nth-child()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}
- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":only-child") }}
- {{ Cssxref(":only-of-type") }}
- {{ Cssxref(":optional") }}
- {{ Cssxref(":out-of-range") }}
- {{ Cssxref(":read-only") }}
- {{ Cssxref(":read-write") }}
- {{ Cssxref(":required") }}
- {{ Cssxref(":right") }}
- {{ Cssxref(":root") }}
- {{ Cssxref(":scope") }}
- {{ Cssxref(":target") }}
- {{ Cssxref(":valid") }}
- {{ Cssxref(":visited") }}

## Спецификации

{{Specifications}}

## Смотрите также

- [Псевдоэлементы](/ru/docs/Web/CSS/Pseudo-elements)
