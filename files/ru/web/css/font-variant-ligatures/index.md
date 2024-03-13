---
title: font-variant-ligatures
slug: Web/CSS/font-variant-ligatures
---

{{CSSRef}}

## Сводка

**Свойство CSS** **`Font-variant-ligatures`** **контролирует, какие лигатуры и контекстные формы используются в текстовом содержимом элемента, к которому применяется. Это повышает гармоничность форм получаемого в результате текста.**

{{cssinfo}}

## Синтаксис

```css
font-variant-ligatures: normal;
font-variant-ligatures: none;
font-variant-ligatures: common-ligatures; /* <common-lig-values> */
font-variant-ligatures: no-common-ligatures; /* <common-lig-values> */
font-variant-ligatures: discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: no-discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: no-historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: contextual; /* <contextual-alt-values> */
font-variant-ligatures: no-contextual; /* <contextual-alt-values> */
font-variant-ligatures: contextual; /* <no-historical-ligatures> <common-ligatures> */

/* Глобальные значения */
font-variant-ligatures: inherit;
font-variant-ligatures: initial;
font-variant-ligatures: unset;
```

### Значения

- `normal`
  - : Это ключевое слово ведёт к активации обычных лигатур и контекстных форм, необходимых для корректного рендеринга. Активируемые лигатуры и формы зависят от шрифта, языка и типа письма. Это значение по умолчанию.
- `none`
  - : Это ключевое слово устанавливает, что все лигатуры и контекстные формы отключены, даже распространённые.
- <_common-lig-values>_
  - : Эти значения контролируют наиболее распространённые лигатуры, такие как лигатуры для сочетаний `fi`, `ffi`, `th` или подобных. Они относятся к значениям `liga` и `clig` в OpenType. Допустимы два значения:
    - `common-ligatures` активирует эти лигатуры. Обратите внимание, что ключевое слово `normal` активирует лигатуры.
    - `no-common-ligatures` отключает эти лигатуры.
- <_discretionary-lig-values_>
  - : Эти значения управляют определёнными лигатурами, специфичными для шрифта и определяемыми дизайнером шрифта. Они соответствуют значениям OpenType `hlig`. Доступны два значения:
    - `discretionary-ligatures` активирует данные лигатуры.
    - `no-discretionary-ligatures` деактивирует лигатуры. Обратите внимание, обычно, ключевое слово `normal` также деактивирует лигатуры.
- _\<historical-lig-values>_
  - : (ß) Эти значения контролируют лигатуры, которые исторически использовались в старых книгах, например, немецкий _tz_ ("tz диаграф", прим. перев.). Они соответствуют значениям OpenType `hlig`. Доступны два значения:
    - `historical-ligatures` активирует данные лигатуры.
    - `no-historical-ligatures` деактивирует лигатуры. Обратите внимание, обычно, ключевое слово `normal` также деактивирует лигатуры.
- _\<contextual-alt-values>_
  - : Эти значения определяют, адаптируются ли буквы к своему контексту, то есть адаптируются ли они к окружающим их буквам. Эти значения соответствуют вычисленным значениям OpenType. Возможны два значения:
    - `contextual` указывает, что должны использоваться контекстные альтернативы. Обратите внимание, что ключевое слово `normal` обычно также активирует лигатуры.
    - `no-contextual` предотвращает их использование.

### Соответствующий правилам синтаксис

{{csssyntax}}

## Примеры

```css
p {
  font-variant-ligatures: none;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
