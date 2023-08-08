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

> **Примечание:** В отличие от псевдоклассов, [псевдоэлементы](/ru/docs/Web/CSS/pseudo-elements) могут быть использованы для стилизации _определённой части_ элемента.

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

| Спецификация                    | Статус                       | Комментарий                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('Fullscreen') }}    | {{ Spec2('Fullscreen') }}    | Определён `:fullscreen`.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| {{ SpecName('HTML WHATWG') }}   | {{ Spec2('HTML WHATWG') }}   | Нет изменений от {{ SpecName('HTML5 W3C') }}.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| {{SpecName('CSS4 Selectors')}}  | {{Spec2('CSS4 Selectors')}}  | Определены `:any-link`, `:local-link`, `:scope`, `:active-drop-target`, `:valid-drop-target`, `:invalid-drop-target`, `:current`, `:past`, `:future`, `:placeholder-shown`, `:user-error`, `:blank`, `:nth-match()`, `:nth-last-match()`, `:nth-column()`, `:nth-last-column()` и `:matches()`. Нет существенных изменений для псевдоклассов, определённых в {{SpecName('CSS3 Selectors')}} и {{SpecName('HTML5 W3C')}} (не рассматривая семантическое значение). |
| {{ SpecName('HTML5 W3C') }}     | {{ Spec2('HTML5 W3C') }}     | Определено семантическое значение в HTML контексте для `:link`, `:visited`, `:active`, `:enabled`, `:disabled`, `:checked` и `:indeterminate`. Определены `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only`, `:read-write` и `:dir()`.                                                                                                                                                                       |
| {{ SpecName('CSS3 Basic UI') }} | {{ Spec2('CSS3 Basic UI') }} | Определены `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only` и `:read-write`, но без связанного семантического значения.                                                                                                                                                                                                                                                                                     |
| {{SpecName('CSS3 Selectors')}}  | {{Spec2('CSS3 Selectors')}}  | Определены `:target`, `:root`, `:nth-child()`, `:nth-last-of-child()`, `:nth-of-type()`, `:nth-last-of-type()`, `:last-child`, `:first-of-type`, `:last-of-type`, `:only-child`, `:only-of-type`, `:empty` и `:not()`. Определён синтаксис для `:enabled`, `:disabled`, `:checked` и `:indeterminate`, но без связанного семантического значения. Нет значительных изменений для псевдоклассов, определённых в {{SpecName('CSS2.1')}}.                            |
| {{SpecName('CSS2.1')}}          | {{Spec2('CSS2.1')}}          | Определены `:lang()`, `:first-child`, `:hover` и `:focus`. Нет значительных изменений для псевдоклассов, определённых в {{SpecName('CSS1')}}.                                                                                                                                                                                                                                                                                                                     |
| {{SpecName('CSS1')}}            | {{Spec2('CSS1')}}            | Определены `:link`, `:visited` и `:active`, но без связанного семантического значения.                                                                                                                                                                                                                                                                                                                                                                            |

## Смотрите также

- [Псевдоэлементы](/ru/docs/Web/CSS/Pseudo-elements)
