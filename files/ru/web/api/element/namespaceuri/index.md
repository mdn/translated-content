---
title: Node.namespaceURI
slug: Web/API/Element/namespaceURI
---

{{APIRef("DOM")}}

Свойство **`Node.namespaceURI`** только для чтения, возвращает пространство имён URI узла или `null,` если узел не находится в пространстве имён (только для чтения). Хотя узел документа, возвращает пространство имён XML для текущего документа.

## Синтаксис

```
namespace = node.namespaceURI
```

## Пример

В этом сниппете, узел рассматривается для его [localName](/ru/docs/DOM/Node.localName) и его `namespaceURI`. Если `namespaceURI` возвращает XUL пространство имён и `localName` возвращая "browser", затем узел XUL согласует `<browser/>`.

```js
if (
  node.localName == "browser" &&
  node.namespaceURI ==
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // this is a XUL browser
}
```

## Примечание

Это не вычисленное значение, которое является результатом поиска имён на основе проверки декларации в области пространства имён. Пространство имён URI узла заморожена в момент создания узла.

В Firefox 3.5 и выше, пространство имён URI для HTML-элементов в HTML документах это `null`. В более поздних версиях, в соответствии с HTML5, это [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) как в XHTML.

Для узлов любого [nodeType](/ru/docs/DOM/Node.nodeType) кроме `ELEMENT_NODE` и `ATTRIBUTE_NODE` значение `namespaceURI` всегда `null`.

Вы можете создать элемент с конкретным `namespaceURI` используйте метод DOM Level 2 [document.createElementNS](/ru/docs/DOM/document.createElementNS).

Через [пространство имён в XML](http://www.w3.org/TR/xml-names11/) спецификации, атрибуты не наследуют пространство имён для элемента к которому он прикреплён. Если у атрибута не задано явно пространство имён, он не имеет пространства имён.

DOM не обрабатывает или не вынуждает проверять пространство имён как таковое. Приложения выше DOM, делают необходимые проверки. Отметим также, что префикс пространства имён, когда он связан с конкретным узлом, не может быть изменён.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
