---
title: CharacterData
slug: Web/API/CharacterData
---

{{APIRef("DOM")}}

Абстрактный интерфейс **`CharacterData`** представляет собой объект {{domxref("Node")}}, который содержит символы. "Абстрактность" интерфейса означает то, что не существует объектов типа `CharacterData`: интерфейс **`CharacterData`** реализуется посредством других интерфейсов, таких как {{domxref("Text")}}, {{domxref("Comment")}}, или {{domxref("ProcessingInstruction")}}, которые не являются абстрактными.

{{InheritanceDiagram}}

## Свойства

_Наследует свойства родителя, {{domxref("Node")}}, реализуется с помощью {{domxref("ChildNode")}} и {{domxref("NonDocumentTypeChildNode")}}интерфейсов._

- {{domxref("CharacterData.data")}}
  - : - это {{domxref("DOMString")}}, представляющая(ий) текстовые данные, которые содержит этот объект (DOMString).
- {{domxref("CharacterData.length")}} {{readonlyInline}}
  - : Возвращает an `unsigned long` и отображает размер строки, содержащейся в `CharacterData.data`.
- {{domxref("NonDocumentTypeChildNode.nextElementSibling")}} {{readonlyInline}}
  - : Возвращает {{domxref("Element")}} следующий сразу после указанного {{domxref("Element")}} элемента в дочернем списке своего родителя, или `null` если указанный элемент - последний в списке.
- {{domxref("NonDocumentTypeChildNode.previousElementSibling")}} {{readonlyInline}}
  - : Возвращает {{domxref("Element")}} непосредственно до указанного элемента в дочернем списке своего родительского элемента, или `null` если указанный элемент - первый в списке.

## Методы

*Наследует методы родителя, {{domxref("Node")}}, и реализует(ся) (через) ({{domxref("ChildNode")}} *и {{domxref("NonDocumentTypeChildNode")}}интерфейсы*.*

- {{domxref("CharacterData.appendData()")}}
  - : Добавляет указанную {{domxref("DOMString")}} к строке `CharacterData.data`; после выполненияданные содержат объединённый(элемент) {{domxref("DOMString")}}.
- {{domxref("CharacterData.deleteData()")}}
  - : Удаляет указанное количество символов, начиная с указанного отступа, из строки `CharacterData.data`; после выполнения метода, данные(`data)` содержат урезанный {{domxref("DOMString")}}.
- {{domxref("CharacterData.insertData()")}}
  - : Inserts the specified characters, at the specified offset, in the `CharacterData.data` string; when this method returns, `data` contains the modified {{domxref("DOMString")}}.
- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : Удаляет объект из its parent children списка.
- {{domxref("CharacterData.replaceData()")}}
  - : Заменяет указанное количество символов, начиная с указанного отступа, с указанным {{domxref("DOMString")}}; после выполнения метода, данные(`data)` содержат изменений {{domxref("DOMString")}}.
- {{domxref("CharacterData.substringData()")}}
  - : Возвращает {{domxref("DOMString")}}, содержащую(ий) часть `CharacterData.data` указанной длины и начиная с указанного отступа.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотри(те) также

- [The DOM interfaces index](/ru/docs/DOM/DOM_Reference).
