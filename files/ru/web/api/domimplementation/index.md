---
title: DOMImplementation
slug: Web/API/DOMImplementation
---

{{ ApiRef("DOM") }}

Интерфейс **`DOMImplementation`** представляет собой объект, предоставляющий методы, которые не зависят от какого-либо конкретного документа. Такой объект возвращается свойством {{domxref("Document.implementation")}}.

## Свойства

_Этот интерфейс не имеет определённого свойства и не наследует его._

## Методы

_Нет унаследованного метода._

- {{domxref("DOMImplementation.createDocument()")}}
  - : Создаёт и возвращает {{domxref("XMLDocument")}}.
- {{domxref("DOMImplementation.createDocumentType()")}}
  - : Создаёт и возвращает {{domxref("DocumentType")}}.
- {{domxref("DOMImplementation.createHTMLDocument()")}}
  - : Создаёт и возвращает HTML {{domxref("Document")}}.
- {{domxref("DOMImplementation.hasFeature()")}}
  - : Возвращает {{domxref("Boolean")}}, указывающий, поддерживается ли данная функция или нет. Эта функция ненадёжна и сохраняется только для целей совместимости: за исключением запросов, связанных с SVG, она всегда возвращает true. Старые браузеры очень непоследовательны в своём поведении.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [The DOM interfaces index.](/ru/docs/DOM/DOM_Reference)
