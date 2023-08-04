---
title: Текст
slug: Web/API/Text
---

{{ApiRef("DOM")}}

Интерфейс **`Text`** представляет собой текстовое содержание (элемента) {{domxref("Element")}} или {{domxref("Attr")}}. Если элемент не имеет разметки внутри собственного содержимого, то он интерпретируется как a single child (implementing) `Text` ,который содержит текст элемента. Однако, если элемент содержит разметку, он разбивается на information items и `Text` nodes ,которые образуют его дочерние элементы.

Новые документы имеют единственный(одиночный) `Text` node для каждого блока текста. Со временем, могут быть созданы новые `Text` nodes, по мере того, как изменяется содержимое документа. Метод {{domxref("Node.normalize()")}} производит слияние смежных объектов `Text` обратно в a single node для каждого блока текста.

{{InheritanceDiagram}}

## Конструктор

- {{domxref("Text.Text", "Text()")}} {{experimental_inline}}
  - : Возвращает `Text` node с параметром, который представляет собой его текстовое содержимое.

## Свойства

_Inherits properties from its parent, {{domxref("CharacterData")}}._

- {{domxref("Text.isElementContentWhitespace")}} {{readonlyInline}}
  - : Возвращает флаг {{domxref("Boolean")}}, сигнализирующий, содержит ли (или нет) text node только пробел(ы).
- {{domxref("Text.wholeText")}} {{readonlyInline}}
  - : Возвращает {{domxref("DOMString")}}, который содержит все `Text` nodes логически примыкающие к этому {{domxref("Node")}}, соединённые как в документе.
- {{domxref("Text.assignedSlot")}} {{readonlyinline}}
  - : Возвращает объект {{domxref("HTMLSlotElement")}}, связанный с этим элементом.

### Свойства (included) от Slotable

_Интерфейс `Text` включает следующее свойство, определяемое при смешивании {{domxref("Slotable")}}._

- {{domxref("Slotable.assignedSlot")}} {{readonlyInline}}
  - : Возвращает {{domxref("HTMLSlotElement")}}, представляющий {{htmlelement("slot")}}, в который вставлен данный узел.

## Методы

_Наследует родительские методы, {{domxref("CharacterData")}}._

<!---->

- {{domxref("Text.replaceWholeText")}}
  - : Заменяет текст текущего узла и всех логически прилегающих узлов указанным текстом(with the specified text).

<!---->

- {{domxref("Text.splitText")}}
  - : Разбивает узел на два узла с заданным отступом.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотри(те) также

- [The DOM interfaces index](/ru/docs/DOM/DOM_Reference).
