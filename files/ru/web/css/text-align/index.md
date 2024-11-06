---
title: text-align
slug: Web/CSS/text-align
---

{{CSSRef}}

## Резюме

`text-align` CSS-свойство описывает, как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента. `text-align` не контролирует выравнивание элементов самого блока, но только их линейное содержимое.

{{cssinfo}}

## Синтаксис

[Формальный синтаксис](/ru/docs/CSS/Value_definition_syntax): {{csssyntax("text-align")}}

```css
text-align: left
text-align: right
text-align: center
text-align: justify
text-align: start
text-align: end
text-align: match-parent
text-align: start end
text-align: "."
text-align: start "."
text-align: "." end

text-align: inherit
```

### Значения

- `start` {{experimental_inline}}
  - : Подобно `left` если направление слева направо, и `right` если наоборот.
- `end` {{experimental_inline}}
  - : Подобно `right` если направление слева направо, и `left` если наоборот.
- `left`
  - : Линейное содержимое выравнивается по левому краю линейного блока.
- `right`
  - : Линейное содержимое выравнивается по правому краю линейного блока.
- `center`
  - : Линейное содержимое центрируется в линейном блоке.
- `<string>` {{experimental_inline}}
  - : Первое появление односимвольной строки - это элемент используемый для выравнивания. Ключевое слово, следует или предшествует, и определяет, как это выравнивается. Это позволяет выравнять численные значения с десятичной точкой, к примеру.
- `justify`
  - : Текст выравнивается. Тексту следует выстраивать свои левые и правые границы по левым и правым границам содержимого параграфа.
- `match-parent` {{experimental_inline}}
  - : Наподобие `inherit` с различием, что значение `start` и `end` вычисляются в соответствии {{cssxref("direction")}} и заменяются соответствующим `left` или `right` значением.

## Примеры

[Посмотреть живые примеры](/samples/cssref/text-align.html)

### Живые примеры

div { **text-align: center**; border:solid; }

p { background:gold; width:22em; }

несколько текста...div { **text-align: center**; border:solid; }

p { background:gold; width:22em; **margin: 1em auto**; }

несколько текста...div { **text-align:-moz-center**; text-align:-webkit-center; border:solid; }

p { background:gold; width:22em; }

несколько текста...

### Примечание

Стандартный совместимый способ центрировать сам блок без выравнивания его содержимого, это установка его left и right margin в auto, пример:
`margin:auto;` или `margin:0 auto;` или `margin-left:auto; margin-right:auto;`

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("margin","margin:auto")}}, {{Cssxref("margin-left","margin-left:auto")}}, {{Cssxref("vertical-align")}}
