---
title: Node
slug: Web/API/Node
---

{{APIRef("DOM")}}

**`Node`** это интерфейс, от которого наследуют несколько типов DOM, он так же позволяет различным типам быть обработанными(или протестированными).

Следующие интерфейсы полностью наследуют от `Node` его методы и свойства: {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("CharacterData")}} (which {{domxref("Text")}}, {{domxref("Comment")}}, и {{domxref("CDATASection")}} inherit), {{domxref("ProcessingInstruction")}}, {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Notation")}}, {{domxref("Entity")}}, {{domxref("EntityReference")}}

Эти интерфейсы могут возвращать null в особых случаях, когда методы и свойства не уместны. Они могут сбросить исключение - например, когда добавляются дети к типу узла, у которого не может их существовать.

## Свойства

_Наследует свойства от родителей {{domxref("EventTarget")}}_.\[1]

- {{domxref("Node.baseURI")}} {{readonlyInline}}
  - : Возвращает {{domxref("DOMString")}} показывающие основной URL. Понятие основного URL изменяется из одного языка в другой; В HTML, это соответствует протоколу , доменному имени и структуре каталогов, все до последнего `'/'`.
- {{domxref("Node.baseURIObject")}} {{Non-standard_inline()}}
  - : (Не доступно для веб-контента.) Только для чтения. Объект `nsIURI`, представляющий базовый URI элемента.
- {{domxref("Node.childNodes")}} {{readonlyInline}}
  - : Возвращает живой {{domxref("NodeList")}}, содержащий всех потомков данного узла. Живой {{domxref("NodeList")}} означает то, что если потомки `узла` изменяются, объект {{domxref("NodeList")}} автоматически обновляется.
- {{domxref("Node.firstChild")}} {{readonlyInline}}
  - : Возвращает {{domxref("Node")}}, представляющий первый прямой узел потомок узла или `null,` если узел не имеет потомков.
- {{domxref("Node.lastChild")}} {{readonlyInline}}
  - : Возвращает {{domxref("Node")}}, представляющий последний прямой узел потомок узла или `null`, если узел не имеет потомков.
- {{domxref("Node.localName")}}{{readonlyInline}}
  - : Возвращает {{domxref("DOMString")}} представляющий локальную часть условного имени элемента. В Firefox 3.5 и более ранних версиях, свойство локального имени в верхнем регистре для HTML-элементов (но не XHTML элементов). В более поздних версиях, такого не произошло, и свойство находится в нижнем регистре для HTML и XHTML. Хотя недавние спецификации требуют от `localName` быть определённым как интерфейс {{domxref("Element")}}, но браузеры основанные на Gecko все ещё реализуют его как интерфейс {{domxref("Node")}}.
- {{domxref("Node.namespaceURI")}}{{readonlyInline}}
  - : Пространство имён URI данного узла или `null,` если нет пространства имён. В Firefox 3.5 и более ранних версиях, HTML-элементы не имеют пространства имён. В более поздних версиях, HTML-элементы находятся в пространстве имён [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) для деревьев HTML и XML.
    Хотя недавние спецификации требуют `namespaceURI` быть определённым как интерфейс {{domxref("Element")}}, но браузеры основанные на Gecko все ещё реализуют его как интерфейс {{domxref("Node")}}.
- {{domxref("Node.nextSibling")}} {{readonlyInline}}
  - : Возвращает {{domxref("Node")}} представляющий следующий узел в древе или `null,` если не такого узла.
- {{domxref("Node.nodeName")}} {{readonlyInline}}
  - : Возвращает {{domxref("DOMString")}} содержащий имя `узла`. Структура имени будет отличаться от типа имени. Например, {{domxref("HTMLElement")}} будет содержать имя соответствующего тега: `'audio'` для {{domxref("HTMLAudioElement")}}, узел {{domxref("Text")}} будет строкой `'#text'` или узел {{domxref("Document")}} будет строкой `'#document'`.
- {{domxref("Node.nodePrincipal")}} {{Non-standard_inline()}}
  - : `nsIPrincipal` представляет основной узел.
- {{domxref("Node.nodeType")}}{{readonlyInline}}

  - : Возвращает беззнаковое короткое число `(unsigned short`) представляющее тип узла. Возможные значения:

    | Имя                                             | Значение |
    | ----------------------------------------------- | -------- |
    | `ELEMENT_NODE`                                  | `1`      |
    | `ATTRIBUTE_NODE` {{deprecated_inline()}}        | `2`      |
    | `TEXT_NODE`                                     | `3`      |
    | `CDATA_SECTION_NODE` {{deprecated_inline()}}    | `4`      |
    | `ENTITY_REFERENCE_NODE` {{deprecated_inline()}} | `5`      |
    | `ENTITY_NODE` {{deprecated_inline()}}           | `6`      |
    | `PROCESSING_INSTRUCTION_NODE`                   | `7`      |
    | `COMMENT_NODE`                                  | `8`      |
    | `DOCUMENT_NODE`                                 | `9`      |
    | `DOCUMENT_TYPE_NODE`                            | `10`     |
    | `DOCUMENT_FRAGMENT_NODE`                        | `11`     |
    | `NOTATION_NODE` {{deprecated_inline()}}         | `12`     |

- {{domxref("Node.nodeValue")}}
  - : Это {{domxref("DOMString")}}, представляющее значение объектов. Для большинства типов `Node`, возвращает `null` и любой набор операция игнорируется. Для узлов типа `TEXT_NODE` ({{domxref("Text")}} objects), `COMMENT_NODE` ({{domxref("Comment")}} objects), и `PROCESSING_INSTRUCTION_NODE` ({{domxref("ProcessingInstruction")}} objects), значение соответствует текстовым данным, содержащихся в объекте.
- {{domxref("Node.ownerDocument")}} {{readonlyInline}}
  - : Возвращает {{domxref("Document")}} к которому принадлежит этот узел. Если нет связанного с ним документа, возвращает `null`.
- {{domxref("Node.parentNode")}} {{readonlyInline}}
  - : Возвращает {{domxref("Node")}} который является родителем этого узла. Если нет такого узла, по причине того, что узел находится вверху древа или не относится к древу, данное свойство вернёт `null`.
- {{domxref("Node.parentElement")}} {{readonlyInline}}
  - : Возвращает {{domxref("Element")}} который является родителем данного узла. Если узел не имеет родителя или если родитель не {{domxref("Element")}}, это свойство вернёт `null`.
- {{domxref("Node.prefix")}}{{readonlyInline}}
  - : {{domxref("DOMString")}} представляющий префикс пространства имён узла или `null` если нет префикса точно определённого.
    Хотя недавние спецификации требуют того, чтобы `префикс` был определён как интерфейс {{domxref("Element")}}, браузеры основанные на Gecko ещё реализовывают его как интерфейс {{domxref("Node")}}.
- {{domxref("Node.previousSibling")}} {{readonlyInline}}
  - : Возвращают {{domxref("Node")}} представляющий предыдущий узел древа или `null`, если нет такого узла.
- {{domxref("Node.textContent")}}
  - : Это {{domxref("DOMString")}} представляющее текстовый контент элемента и всех его потомков.

## Методы

_Наследует методы от своих родителей {{domxref("EventTarget")}}_.\[1]

- {{domxref("Node.appendChild()")}}
  - : Вставляет {{domxref("Node")}} как последний дочерний узел данного элемента.
- {{domxref("Node.cloneNode()")}}
  - : Клонирует {{domxref("Node")}}, и опционально, все его компоненты. По умолчанию, оно клонирует содержимое узла.
- {{domxref("Node.compareDocumentPosition()")}}
  - : …
- {{domxref("Node.contains()")}}
  - : …
- {{domxref("Node.getFeature()")}}
  - : ...
- {{domxref("Node.getUserData()")}}
  - : Позволяет пользователю получить некоторый {{domxref("DOMUserData")}} от узла.
- {{domxref("Node.hasAttributes()")}}
  - : Возвращает {{domxref("Boolean")}} показывающий, есть ли у элемента какие-либо атрибуты или нет.
- {{domxref("Node.hasChildNodes()")}}
  - : Возвращает {{domxref("Boolean")}} показывающий, есть ли у элемента дочерние узлы или нет.
- {{domxref("Node.insertBefore()")}}
  - : Вставляет первым {{domxref("Node")}} данный в качестве параметра, непосредственно перед вторым, потомком данного элемента {{domxref("Node")}}.
- {{domxref("Node.isDefaultNamespace()")}}
  - : …
- {{domxref("Node.isEqualNode()")}}
  - : …
- {{domxref("Node.isSameNode()")}}
  - : …
- {{domxref("Node.isSupported()")}}
  - : Возвращает [`Boolean`](/ru/docs/Web/API/Boolean) флаг содержащий результаты теста, реализует ли реализация DOM конкретную особенность и поддерживается ли эта особенность конкретным узлом.
- {{domxref("Node.lookupPrefix()")}}
  - : …
- {{domxref("Node.lookupNamespaceURI()")}}
  - : …
- {{domxref("Node.normalize()")}}
  - : Очищает все текстовые узлы под этим элементом (поглотить смежный, удалить пустой).
- {{domxref("Node.removeChild()")}}
  - : Удаляет дочерний узел из текущего элемента, который должен быть потомком текущего узла.
- {{domxref("Node.replaceChild()")}}
  - : Заменяет одного потомка {{domxref("Node")}} из существующего на второй указанный в параметре.
- {{domxref("Node.setUserData()")}}
  - : Позволяет пользователю присоединить или удалить {{domxref("DOMUserData")}} к узлу.

## Примеры

### Просмотреть все дочерние узлы

Следующая функция рекурсивный цикл всех дочерних узлов узла и она исполняет вызов функции относительно их (и себя относительно родительского узла).

```js
function DOMComb(oParent, oCallback) {
  if (oParent.hasChildNodes()) {
    for (var oNode = oParent.firstChild; oNode; oNode = oNode.nextSibling) {
      DOMComb(oNode, oCallback);
    }
  }
  oCallback.call(oParent);
}
```

#### Синтаксис

```
DOMComb(parentNode, callbackFunction);
```

#### Описание

Рекурсивный цикл всех дочерних узлов `parentNode` и самого `parentNode`, выполняет `callbackFunction` относительно их как [`эти`](/ru/docs/JavaScript/Reference/Operators/this) объекты.

#### Параметры

- `parentNode`
  - : Родительский узел (`Node Object`).
- `callbackFunction`
  - : Колбэк-функции ([`Function`](/ru/docs/JavaScript/Reference/Global_Objects/Function)).

#### Пример использования

Следующий пример отправляет в `console.log` текстовое содержимое body:

```js
function printContent() {
  if (this.nodeValue) {
    console.log(this.nodeValue);
  }
}

onload = function () {
  DOMComb(document.body, printContent);
};
```

### Удалить все потомки, вложенные в узел

```js
Element.prototype.removeAll = function () {
  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }
  return this;
};
```

#### Пример использования

```js
/* ... как альтернатива document.body.innerHTML = "" ... */
document.body.removeAll();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
