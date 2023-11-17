---
title: Attr
slug: Web/API/Attr
---

{{APIRef("DOM")}}

Этот тип представляет атрибут элемента DOM в виде объекта. В большинстве методов DOM вы, вероятно, непосредственно извлекаете атрибут в виде строки (например, {{domxref ("Element.getAttribute ()")}}, но некоторые функции (например, {{domxref ("Element.getAttributeNode ()" )}}) или средства итерации, отдают тип `Attr`.

{{InheritanceDiagram}}

> **Предупреждение:** Начиная с Gecko 7.0, устаревшие свойства и методы при обращении выведут предупреждающие сообщения на консоль. Поэтому вы должны проверить свой код. Смотрите полный список [устаревших свойств и методов](#Deprecated_properties_and_methods).

## Свойства

- {{domxref("Attr.name", "name")}} {{readOnlyInline}}
  - : Имя атрибута.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} представление URI пространства имён атрибута, или NULL если нет никакого пространства имён.
- {{domxref("Attr.localName", "localName")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} представление локальной части полного имени атрибута.
- {{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}
  - : {{domxref("DOMString")}} представление префикс пространства имён атрибута, или NULL, если префикс не указан.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}

  - : Элемент, содержащий атрибут.

    > **Примечание:** DOM уровень 4 удалил это свойство.Предполагалось, что, поскольку вы получаете объект Attr от {{domxref("Element")}}, вы заранее должны знать связанный элемент. Поскольку это не верно в случаях, подобных объектам Attr, возвращаемым {{domxref("Document.evaluate")}}, DOM уровень жизни вновь ввёл это свойство.
    >
    > Gecko выводит предупреждение об использовании, начиная с Gecko 7.0. Это предупреждение было удалено в Gecko 49.0.

- {{domxref("Attr.specified", "specified")}} {{readOnlyInline}}
  - : Это свойство всегда возвращает true. Первоначально, оно возвращало true, если атрибут был явно определён в исходном коде или сценарием и false, если её значение прибыло из значения по умолчанию определённом в DTD документе.
- {{domxref("Attr.value", "value")}}
  - : Значение атрибута

> **Примечание:** уровень DOM 3 определил `namespaceURI`, `localName` и `prefix` в {{domxref("Node")}} интерфейсе. В DOM4 они были перемещены в `Attr`.
>
> Это изменение реализовано в Chrome с версии 46.0 и Firefox с версии 48.

## Устаревшие свойства и методы

Эти свойства устарели. Там где это допустимо представлена соответствующая замена.

- `attributes`
  - : Это свойство всегда возвращает значение `NULL`.
- `childNodes`
  - : Это свойство всегда возвращает пустой {{domxref("NodeList")}}.
- `firstChild`
  - : Это свойство всегда возвращает значение `NULL`.
- `isId` {{readOnlyInline}}
  - : Указывает, является ли атрибут "ID attribute". "ID attribute" - это атрибут, значение которого должно быть уникальным в документе DOM. В HTML DOM "id" является единственным атрибутом ID, но XML-документы могут определять иные. Уникальность атрибута часто определяется {{Glossary("DTD")}} или другим описанием схемы.
- `lastChild`
  - : Это свойство всегда возвращает значение `NULL`.
- `nextSibling`
  - : Это свойство всегда возвращает значение `NULL`.
- `nodeName`
  - : Используйте {{domxref("Attr.name")}} взамен.
- `nodeType`
  - : Это свойство теперь всегда возвращает 2 (`ATTRIBUTE_NODE`).
- `nodeValue`
  - : Используйте {{domxref("Attr.value")}} взамен.
- `ownerDocument`
  - : Вы не должны были использовать это свойство в первую очередь, поэтому вам, вероятно, всё равно, что это свойство больше не используется.
- `parentNode`
  - : Это свойство всегда возвращает значение `NULL`.
- `previousSibling`
  - : Это свойство всегда возвращает значение `NULL`.
- `schemaTypeInfo` {{readOnlyInline}}
  - : Сведения о типе, связанные с этим атрибутом. В то время как информация о типе, содержащаяся в этом атрибуте, гарантированно будет правильной после загрузки документа или вызова {{domxref("Document.normalizeDocument")}}, это свойство может быть ненадёжным, если узел был перемещён.
- `specified`

  - : Это свойство всегда возвращает значение `true`.

- `textContent`
  - : Используйте {{domxref("Attr.value")}} взамен.

The following methods have been deprecated:

- `appendChild()`
  - : Измените значение {{domxref("Attr.value")}} взамен.
- `cloneNode()`
  - : Вы не должны были использовать это в первую очередь, поэтому вам, вероятно, всё равно, что это больше не используется.
- `createAttribute()`
  - : Используйте {{domxref("Element.setAttribute()")}} взамен.
- `createAttributeNS()`
  - : Используйте {{domxref("Element.setAttributeNS()")}} взамен.
- `getAttributeNode()`
  - : Используйте {{domxref("Element.getAttribute()")}} взамен.
- `getAttributeNodeNS()`
  - : Используйте {{domxref("Element.getAttributeNS()")}} взамен.
- `hasAttributes()`
  - : Этот метод всегда возвращает значение false.
- `hasChildNodes()`
  - : Этот метод всегда возвращает значение false.
- `insertBefore()`
  - : Измените значение {{domxref("Attr.value")}} взамен.
- `isSupported()`
  - : Вы не должны были использовать это в первую очередь, поэтому вам, вероятно, всё равно, что это больше не используется.
- `isEqualNode()`
  - : Вы не должны были использовать это в первую очередь, поэтому вам, вероятно, всё равно, что это больше не используется.
- `normalize()`
  - : Вы не должны были использовать это в первую очередь, поэтому вам, вероятно, всё равно, что это больше не используется.
- `removeAttributeNode()`
  - : Используйте {{domxref("Element.removeAttribute()")}} взамен.
- `removeChild()`
  - : Измените значение {{domxref("Attr.value")}} взамен..
- `replaceChild()`
  - : Modify the value of {{domxref("Attr.value")}} взамен.
- `setAttributeNode()`
  - : Используйте {{domxref("Element.setAttribute()")}} взамен.
- `setAttributeNodeNS()`
  - : Используйте {{domxref("Element.setAttributeNS()")}} взамен.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
