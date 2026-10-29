---
title: Значения атрибутов MathML
short-title: Значения
slug: Web/MathML/Reference/Values
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

## Типы данных MathML

Помимо [типов данных CSS](/ru/docs/Web/CSS/Reference/Values/Data_types), некоторые атрибуты MathML принимают следующие типы:

- `<unsigned-integer>`: [`<integer>`](/ru/docs/Web/CSS/Reference/Values/integer), первым символом которого не является U+002D HYPHEN-MINUS (-) или U+002B PLUS SIGN (+); например, `1234`.
- `<boolean>`: строка `true` или `false`, представляющая логическое значение.

## Устаревшие единицы длины MathML

> [!WARNING]
> Эти единицы длины устарели. Использовать их больше не рекомендуется.

Раньше вместо {{cssxref("length-percentage")}} в MathML определялся собственный [тип для описания длин](https://www.w3.org/TR/MathML3/chapter2.html#type.length). Допустимые значения включали ненулевые числа без единиц (например, `5`, означающее `500%`), числа с точкой после целой части (например, `34.px`) и именованные интервалы (например, `thinmathspace`). Для совместимости рекомендуется заменять ненулевые числа без единиц на эквивалентные значения {{cssxref("percentage")}}, удалять лишние точки в числах, а именованные длины заменять следующими значениями:

```plain
veryverythinmathspace  => 0.05555555555555555em
verythinmathspace      => 0.1111111111111111em
thinmathspace          => 0.16666666666666666em
mediummathspace        => 0.2222222222222222em
thickmathspace         => 0.2777777777777778em
verythickmathspace     => 0.3333333333333333em
veryverythickmathspace => 0.3888888888888889em
```

### Единицы измерения

| Единица | Описание                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| `em`    | Единица, {{cssxref("font-size", "зависящая от размера шрифта")}}                                            |
| `ex`    | Единица, {{cssxref("font-size", "зависящая от размера шрифта")}}. Высота строчной буквы `x` (`1ex ≈ 0.5em` во многих шрифтах) |
| `px`    | Пиксели                                                                                                       |
| `in`    | Дюймы (1 дюйм = 2,54 сантиметра)                                                                              |
| `cm`    | Сантиметры                                                                                                    |
| `mm`    | Миллиметры                                                                                                    |
| `pt`    | Пункты (1 пункт = 1/72 дюйма)                                                                                 |
| `pc`    | Пики (1 пика = 12 пунктов)                                                                                    |
| `%`     | Процент от значения по умолчанию                                                                             |

### Константы

| Константа                         | Значение   |
| --------------------------------- | ---------- |
| `veryverythinmathspace`           | 1/18 `em`  |
| `verythinmathspace`               | 2/18 `em`  |
| `thinmathspace`                   | 3/18 `em`  |
| `mediummathspace`                 | 4/18 `em`  |
| `thickmathspace`                  | 5/18 `em`  |
| `verythickmathspace`              | 6/18 `em`  |
| `veryverythickmathspace`          | 7/18 `em`  |
| `negativeveryverythinmathspace`   | -1/18 `em` |
| `negativeverythinmathspace`       | -2/18 `em` |
| `negativethinmathspace`           | -3/18 `em` |
| `negativemediummathspace`         | -4/18 `em` |
| `negativethickmathspace`          | -5/18 `em` |
| `negativeverythickmathspace`      | -6/18 `em` |
| `negativeveryverythickmathspace`  | -7/18 `em` |

## Совместимость с браузерами

{{Compat}}
