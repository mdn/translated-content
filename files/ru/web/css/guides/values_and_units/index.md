---
title: Значения и единицы измерения CSS
short-title: Значения и единицы измерения
slug: Web/CSS/Guides/Values_and_units
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-values-3/
  - https://drafts.csswg.org/css-values-4/
  - https://drafts.csswg.org/css-values-5/
sidebar: cssref
l10n:
  sourceCommit: c8522f47d8123fe529f39851b13b9fc01345ffbf
---

Каждое объявление CSS состоит из пары «свойство/значение». Значение может принимать различные формы в зависимости от свойства: например, отдельное целое число, ключевое слово, функцию или комбинацию разных элементов; у одних значений есть единицы измерения, у других — нет. Кроме того, каждое свойство принимает общие для всего CSS значения (CSS-wide values). Модуль значений и единиц измерения CSS определяет типы данных — значения и единицы измерения, — которые принимают свойства CSS. Этот модуль также определяет синтаксис описания значений CSS, или формальную грамматику, используемую для задания набора допустимых значений каждого свойства и функции CSS.

> [!NOTE]
> На этой странице представлен один из модулей CSS. Полный список всех значений, типов и функций, определённых спецификациями CSS, приведён на справочной странице [значения](/ru/docs/Web/CSS/Reference/Values).

## Справка

### Свойства

- {{cssxref("interpolate-size")}}

### Функции

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("progress()")}}
- {{cssxref("random()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

Модуль значений и единиц измерения CSS также вводит функции `calc-mix()`, `first-valid()`, `integrity()`, `random-item()`, `src()`, `type()` и `toggle()`. В настоящее время ни один браузер не поддерживает эти возможности.

### Типы данных

- {{cssxref("angle-percentage")}}
- {{cssxref("angle")}}
- [`<attr-name>`](/ru/docs/Web/CSS/Reference/Values/attr#attr-name)
- [`<attr-type>`](/ru/docs/Web/CSS/Reference/Values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/ru/docs/Web/CSS/Reference/Values/calc-size#calc-size-basis)
- {{cssxref("calc-sum")}}
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-ident")}}
- {{cssxref("dimension")}}
- {{cssxref("easing-function")}}
- {{cssxref("ident")}}
- {{cssxref("integer")}}
- {{cssxref("length-percentage")}}
- {{cssxref("length")}}
- {{cssxref("number")}}
- {{cssxref("percentage")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("ratio")}}
- {{cssxref("resolution")}}
- [`<rounding-strategy>`](/ru/docs/Web/CSS/Reference/Values/round#rounding-strategy) (`down`, `up`, `to-zero`)
- {{cssxref("string")}}
- [`<syntax>`](/ru/docs/Web/CSS/Guides/Syntax/Introduction)
- {{cssxref("time-percentage")}}
- {{cssxref("time")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- [`<url-modifier>`](/ru/docs/Web/CSS/Reference/Values/url_function#url-modifier)

Модуль значений и единиц измерения CSS также вводит типы данных {{cssxref("frequency")}} и {{cssxref("frequency-percentage")}}. В настоящее время ни один браузер не поддерживает эти возможности.

#### Единицы измерения

- [`%` (проценты)](/ru/docs/Web/CSS/Reference/Values/percentage)
- [`cap`](/ru/docs/Web/CSS/Reference/Values/length#cap)
- [`ch`](/ru/docs/Web/CSS/Reference/Values/length#ch)
- [`cm`](/ru/docs/Web/CSS/Reference/Values/length#cm)
- [`deg`](/ru/docs/Web/CSS/Reference/Values/angle#deg)
- [`dpcm`](/ru/docs/Web/CSS/Reference/Values/resolution#dpcm)
- [`dpi`](/ru/docs/Web/CSS/Reference/Values/resolution#dpi)
- [`dppx`](/ru/docs/Web/CSS/Reference/Values/resolution#dppx)
- [`dvb`](/ru/docs/Web/CSS/Reference/Values/length#vb)
- [`dvh`](/ru/docs/Web/CSS/Reference/Values/length#vh)
- [`dvi`](/ru/docs/Web/CSS/Reference/Values/length#vi)
- [`dvmax`](/ru/docs/Web/CSS/Reference/Values/length#vmax)
- [`dvmin`](/ru/docs/Web/CSS/Reference/Values/length#vmin)
- [`dvw`](/ru/docs/Web/CSS/Reference/Values/length#vw)
- [`em`](/ru/docs/Web/CSS/Reference/Values/length#em)
- [`ex`](/ru/docs/Web/CSS/Reference/Values/length#ex)
- [`grad`](/ru/docs/Web/CSS/Reference/Values/angle#grad)
- [`Hz`](/ru/docs/Web/CSS/Reference/Values/frequency#hz)
- [`ic`](/ru/docs/Web/CSS/Reference/Values/length#ic)
- [`in`](/ru/docs/Web/CSS/Reference/Values/length#in)
- [`kHz`](/ru/docs/Web/CSS/Reference/Values/frequency#khz)
- [`lh`](/ru/docs/Web/CSS/Reference/Values/length#lh)
- [`lvb`](/ru/docs/Web/CSS/Reference/Values/length#vb)
- [`lvh`](/ru/docs/Web/CSS/Reference/Values/length#vh)
- [`lvi`](/ru/docs/Web/CSS/Reference/Values/length#vi)
- [`lvmax`](/ru/docs/Web/CSS/Reference/Values/length#vmax)
- [`lvmin`](/ru/docs/Web/CSS/Reference/Values/length#vmin)
- [`lvw`](/ru/docs/Web/CSS/Reference/Values/length#vw)
- [`mm`](/ru/docs/Web/CSS/Reference/Values/length#mm)
- [`ms`](/ru/docs/Web/CSS/Reference/Values/time#ms)
- [`pc`](/ru/docs/Web/CSS/Reference/Values/length#pc)
- [`pt`](/ru/docs/Web/CSS/Reference/Values/length#pt)
- [`px`](/ru/docs/Web/CSS/Reference/Values/length#px)
- [`Q`](/ru/docs/Web/CSS/Reference/Values/length#q)
- [`rad`](/ru/docs/Web/CSS/Reference/Values/angle#rad)
- [`rcap`](/ru/docs/Web/CSS/Reference/Values/length#rcap)
- [`rch`](/ru/docs/Web/CSS/Reference/Values/length#rch)
- [`rem`](/ru/docs/Web/CSS/Reference/Values/length#rem)
- [`rex`](/ru/docs/Web/CSS/Reference/Values/length#rex)
- [`ric`](/ru/docs/Web/CSS/Reference/Values/length#ric)
- [`rlh`](/ru/docs/Web/CSS/Reference/Values/length#rlh)
- [`s`](/ru/docs/Web/CSS/Reference/Values/time#s)
- [`svb`](/ru/docs/Web/CSS/Reference/Values/length#vb)
- [`svh`](/ru/docs/Web/CSS/Reference/Values/length#vh)
- [`svi`](/ru/docs/Web/CSS/Reference/Values/length#vi)
- [`svmax`](/ru/docs/Web/CSS/Reference/Values/length#vmax)
- [`svmin`](/ru/docs/Web/CSS/Reference/Values/length#vmin)
- [`svw`](/ru/docs/Web/CSS/Reference/Values/length#vw)
- [`turn`](/ru/docs/Web/CSS/Reference/Values/angle#turn)
- [`vb`](/ru/docs/Web/CSS/Reference/Values/length#vb)
- [`vh`](/ru/docs/Web/CSS/Reference/Values/length#vh)
- [`vi`](/ru/docs/Web/CSS/Reference/Values/length#vi)
- [`vmax`](/ru/docs/Web/CSS/Reference/Values/length#vmax)
- [`vmin`](/ru/docs/Web/CSS/Reference/Values/length#vmin)
- [`vw`](/ru/docs/Web/CSS/Reference/Values/length#vw)
- [`x`](/ru/docs/Web/CSS/Reference/Values/resolution#x)

[Гибкие единицы (flex)](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#flex_units) (`fr`) и [контейнерные единицы](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) определены в модулях [сеточной раскладки CSS](/ru/docs/Web/CSS/Guides/Grid_layout) и [условных правил CSS](/ru/docs/Web/CSS/Guides/Conditional_rules) соответственно.

#### Категории единиц измерения

- [Абсолютные единицы длины](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Единицы измерения угла](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Единицы вьюпорта по умолчанию](/ru/docs/Web/CSS/Reference/Values/length#default_viewport_units) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Динамические единицы вьюпорта](/ru/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Единицы измерения частоты](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Единицы большого вьюпорта (в процентах)](/ru/docs/Web/CSS/Reference/Values/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Локальные шрифтозависимые единицы длины](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Физические единицы](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Относительные единицы длины](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Единицы разрешения](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#resolution_units) (`dpcm`, `dpi` , `dppx`, `x`)
- [Шрифтозависимые единицы длины относительно корня](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Единицы малого вьюпорта (в процентах)](/ru/docs/Web/CSS/Reference/Values/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Единицы измерения времени](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#time_units) (`ms`, `s`)
- [Единицы вьюпорта](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Единица зрительного угла](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`)

### Ключевые понятия

- {{glossary("Advance measure")}}
- [Нотация диапазона в квадратных скобках](/ru/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#bracketed_range_notation_minmax)
- [Комбинаторы значений компонентов](/ru/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#component_value_combinators)
- [Общие для всего CSS ключевые слова](/ru/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords)
- {{glossary("Device pixel")}}
- [Функциональная нотация](/ru/docs/Web/CSS/Reference/Values/Functions)
- {{glossary("Identifier")}}
- {{glossary("Interpolation")}}
- {{glossary("Keyword")}}
- [Математическая функция](/ru/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
- [Числовые типы данных](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- {{glossary("Origin")}}
- {{glossary("Pixel")}}
- [Текстовые типы данных](/ru/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [Синтаксис описания значений](/ru/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Руководства

- [Типы данных CSS](/ru/docs/Web/CSS/Reference/Values/Data_types)
  - : Введение в типы данных CSS, которые задают типичные значения, принимаемые свойствами и функциями CSS.

- [Числовые типы данных](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
  - : Обзор числовых типов данных: целые числа, числа, проценты и размерности, а также относительные и абсолютные величины, углы и единицы измерения времени.

- [Текстовые типы данных](/ru/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
  - : Обзор текстовых типов данных: предопределённые значения — ключевые слова, глобальные ключевые слова CSS и URL.

- [Функции значений CSS](/ru/docs/Web/CSS/Reference/Values/Functions)
  - : Обзор конструкций CSS, которые запускают специальную обработку данных или вычисления, чтобы вернуть значение CSS для свойства.

- [Использование математических функций CSS](/ru/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
  - : Математические функции CSS, позволяющие записывать значение свойства в виде математического выражения.

- [Синтаксис описания значений](/ru/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : Формальная грамматика, используемая для задания набора допустимых значений свойств и функций CSS.

- [Использование типизированной арифметики CSS](/ru/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
  - : Объяснение работы типизированной арифметики CSS и вариантов её применения.

- [Обучение: значения и единицы измерения](/ru/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Знакомство с некоторыми из наиболее часто используемых типов значений: что это такое и как они работают.

- [Сериализация значений CSS](/ru/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - : Как [API CSSOM](/ru/docs/Web/API/CSS_Object_Model) сериализуют цвет и другие значения в стандартизованные строковые представления.

## Связанные понятия

- Модуль [Каскадирование и наследование CSS](/ru/docs/Web/CSS/Guides/Cascade)
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- Модуль [Сеточная раскладка CSS](/ru/docs/Web/CSS/Guides/Grid_layout)
  - {{cssxref("&lt;flex&gt;")}}
  - [Гибкие единицы (flex)](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#flex_units) (`fr`)

- Модуль [Условные правила CSS](/ru/docs/Web/CSS/Guides/Conditional_rules)
  - [Контейнерные единицы](/ru/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- Модуль [Цвета CSS](/ru/docs/Web/CSS/Guides/Colors)
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/ru/docs/Web/CSS/Reference/Values/color_value/color-mix)

- Модуль [Изображения CSS](/ru/docs/Web/CSS/Guides/Images)
  - {{cssxref("image")}}
  - {{cssxref("gradient")}}

## Спецификации

{{Specifications}}

## Смотрите также

- Модуль [Синтаксис CSS](/ru/docs/Web/CSS/Guides/Syntax)
- Модуль [Селекторы CSS](/ru/docs/Web/CSS/Guides/Selectors)
