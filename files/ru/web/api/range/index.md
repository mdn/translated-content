---
title: Range
slug: Web/API/Range
---

{{ APIRef("DOM") }}

**`Range(диапазон)`** интерфейс предоставляет фрагмент документа который может содержать узлы и части текстовых узлов данного документа.

Range может быть создан с помощью метода {{ domxref("Document.createRange", "createRange") }}, у объекта {{ domxref("Document") }}. Или объект Range можно получить с помощью метода {{ domxref("Selection/getRangeAt", "getRangeAt") }}, у объекта {{ domxref("Selection") }}. А также с помощью конструктора {{domxref("Range.Range()", "Range()")}}.

## Свойства

Нет унаследованных свойств.

**{{domxref("Range.collapsed")}} {{readonlyInline}}**
Возвращает {{domxref("Boolean")}} указывающий, находятся ли начало и конец диапазона
на одной и той же позиции.

- {{domxref("Range.startContainer")}} {{readonlyInline}}
  - : Возвращает {{ domxref("Node") }} внутри которого `Range` начинается.
- {{domxref("Range.endContainer")}} {{readonlyInline}}
  - : Возвращает {{ domxref("Node") }} внутри которого `Range` заканчивается .
- {{domxref("Range.commonAncestorContainer")}} {{readonlyInline}}
  - : Возвращает самый глубокий {{ domxref("Node") }} который содержит узлы `startContainer` и `endContainer`.
- {{domxref("Range.endOffset")}} {{readonlyInline}}
  - : Возвращает число равное расположению `endContainer` в `Range` .
- {{domxref("Range.startOffset")}} {{readonlyInline}}

  - : Returns a number representing where in the `startContainer` the `Range` starts.

## Конструктор

- {{ domxref("Range.Range()", "Range()") }} {{experimental_inline}}
  - : Возвращают объект `Range` с глобальным {{domxref("Document")}} как начало и конец.

## Методы

_Не имеют унаследованных свойств._

- {{ domxref("Range.setStart()")}}
  - : Назначают начальную позицию `Range`.
- {{ domxref("Range.setEnd()")}}
  - : Назначает конечную позицию `Range`.
- {{ domxref("Range.setStartBefore()")}}
  - : Устанавливает начальную позицию `Range` относительно другого {{ domxref("Node") }} пред ним.
- {{ domxref("Range.setStartAfter()")}}
  - : Устанавливает начальную позицию `Range` относительно другого {{ domxref("Node") }} после него.
- {{ domxref("Range.setEndBefore()")}}
  - : Устанавливает конечную позицию `Range` относительно другого {{ domxref("Node") }} перед ним.
- {{ domxref("Range.setEndAfter()")}}
  - : Устанавливает конечную позицию `Range` относительно другого {{ domxref("Node") }} после него.
- {{ domxref("Range.selectNode()")}}
  - : Выбирает `Range` to содержащий {{ domxref("Node") }} и его контент.
- {{ domxref("Range.selectNodeContents()")}}
  - : Выбирает `Range` содержащий контент {{ domxref("Node") }}.
- {{ domxref("Range.collapse()")}}
  - : Схлопывает `Range` до одной из граничных точек.
- {{ domxref("Range.cloneContents()")}}
  - : Возвращает {{ domxref("DocumentFragment") }} содержащийся в узле `Range`.
- {{ domxref("Range.deleteContents()")}}
  - : Удаляет содержимое `Range` из{{ domxref("Document") }}.
- {{ domxref("Range.extractContents()")}}
  - : Переносит содержимое `Range` из дерева документа в {{ domxref("DocumentFragment") }}.
- {{ domxref("Range.insertNode()")}}
  - : Вставляет a {{ domxref("Node") }} в начало `Range`.
- {{ domxref("Range.surroundContents()")}}
  - : Переносит содержимое `Range` в новый {{ domxref("Node") }}.
- {{ domxref("Range.compareBoundaryPoints()")}}
  - : Сравнивает граничные точки `Range` с другим `Range`.
- {{ domxref("Range.cloneRange()")}}
  - : Возвращает объект из `Range` с граничными точками идентичными клонированному `Range`.
- {{ domxref("Range.detach()")}}
  - : `Освобождает Range` от использования для улучшения производительности .
- {{ domxref("Range.toString()")}}
  - : Возвращает текст в `Range`.
- {{ domxref("Range.compareNode()")}} {{non-standard_inline}}
  - : Возвращает константу, представляющую, находится ли {{domxref("Node")}} до, после, внутри или вокруг range.
- {{ domxref("Range.comparePoint()")}} {{experimental_inline}}
  - : Возвращает -1, 0, или 1 в зависимости от того, находиться ли referenceNode перед, внутри, или после `Range`.
- {{ domxref("Range.createContextualFragment()")}}{{experimental_inline}}
  - : Возвращает {{ domxref("DocumentFragment") }} созданный из полученной строки с кодом.
- {{ domxref("Range.getBoundingClientRect()") }} {{experimental_inline}}
  - : Возвращает объект {{ domxref("ClientRect") }} object which bounds the entire contents of the `Range`; this would be the union of all the rectangles returned by {{ domxref("range.getClientRects()") }}.
- {{ domxref("Range.getClientRects()") }} {{experimental_inline}}
  - : Returns a list of {{ domxref("ClientRect") }} objects that aggregates the results of {{ domxref("Element.getClientRects()") }} for all the elements in the `Range`.
- {{ domxref("Range.intersectsNode()")}} {{experimental_inline}}
  - : Возвращает `boolean` указывающий, пересекает ли данный узел `Range`.
- {{ domxref("Range.isPointInRange()")}} {{experimental_inline}}
  - : Returns a `boolean` indicating whether the given point is in the `Range`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/ru/docs/DOM/DOM_Reference)
