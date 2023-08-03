---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
---

{{APIRef("SVG")}}

Интерфейс **`SVGTextContentElement`** реализуется элементами, которые поддерживают рендеринг дочернего текстового содержимого. Он наследуется различными текстовыми интерфейсами, такими как {{domxref("SVGTextElement")}}, {{domxref("SVGTSpanElement")}}, {{domxref("SVGTRefElement")}}, {{domxref("SVGAltGlyphElement")}} и {{domxref("SVGTextPathElement")}}.

{{InheritanceDiagram(600, 120)}}

## Константы

| Константа                     | Значение | Описание                       |
| ----------------------------- | -------- | ------------------------------ |
| LENGTHADJUST_UNKNOWN          | 0        | Иная ценность.                 |
| LENGTHADJUST_SPACING          | 1        | `spacing` дескриптор.          |
| LENGTHADJUST_SPACINGANDGLYPHS | 2        | `spacingAndGlyphs` дескриптор. |

## Свойства

_Этот интерфейс также наследует свойства от его родителя,
{{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGTextContentElement.textLength")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedLength")}}, отражает атрибут {{SVGAttr("textLength")}} данного элемента.
- {{domxref("SVGTextContentElement.lengthAdjust")}} {{ReadOnlyInline}}
  - : {{domxref("SVGAnimatedEnumeration")}}, отражает атрибут {{SVGAttr("lengthAdjust")}} данного элемента. Значения числового типа представляют одно из значений константы выше.

## Методы

_Этот интерфейс также наследует методы от его родителя, {{domxref("SVGGraphicsElement")}}_

- {{domxref("SVGTextContentElement.getNumberOfChars()")}}
  - : Возвращает длину, представляющую общее количество адресуемых символов, доступных для рендеринга в текущем элементе, независимо от того, будут ли они отображаться.
- {{domxref("SVGTextContentElement.getComputedTextLength()")}}
  - : Возвращает float, представляющий вычисленную длину для текста внутри элемента.
- {{domxref("SVGTextContentElement.getSubStringLength()")}}
  - : Возвращает float, представляющий вычисленную длину форматированного расстояния продвижения текста для подстроки текста внутри элемента. Обратите внимание, что этот метод учитывает только ширину глифов в подстроке и любые дополнительные интервалы, вставленные свойствами CSS «letter-spacing» и «word-spacing». Настройки визуального интервала, сделанные атрибутом «x», игнорируются.
- {{domxref("SVGTextContentElement.getStartPositionOfChar()")}}

  - : Возвращает {{domxref("DOMPoint")}}, представляющий позицию типографического символа после выполнения макета текста.

    > **Примечание:** В SVG 1.1 этот метод вернул {{domxref("SVGPoint")}}.

- {{domxref("SVGTextContentElement.getEndPositionOfChar()")}}

  - : Возвращает {{domxref("DOMPoint")}}, представляющий конечную позицию типографического символа после выполнения макета текста.

    > **Примечание:** В SVG 1.1 этот метод вернул {{domxref("SVGPoint")}}.

- {{domxref("SVGTextContentElement.getExtentOfChar()")}}
  - : Возвращает {{domxref("DOMRect")}}, представляющий вычисляемые габариты ячейки глифа, соответствующие заданному типографическому символу.
- {{domxref("SVGTextContentElement.getRotationOfChar()")}}
  - : Возвращает поплавок `float`, представляющий поворот типографического символа.
- {{domxref("SVGTextContentElement.getCharNumAtPosition()")}}
  - : Возвращает длину символа, заставляющего текстовый глиф отображаться в заданной позиции в системе координат. Поскольку связь между символами и глифами не является взаимно однозначной, возвращается только первый символ соответствующего типографического символа.
- {{domxref("SVGTextContentElement.selectSubString()")}} {{deprecated_inline}}
  - : Выбирает текст внутри элемента.

## Характеристики

{{Specifications}}

## Совместимость с браузером

{{Compat}}
