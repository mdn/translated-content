---
title: "Node: метод compareDocumentPosition()"
slug: Web/API/Node/compareDocumentPosition
l10n:
  sourceCommit: c4753644fdc82247914dbde91906c1804e22f305
---

{{APIRef("DOM")}}

Метод **`compareDocumentPosition()`** интерфейса {{domxref("Node")}} сообщает позицию переданного ему в качестве аргумента узла относительно узла, на котором он был вызван.

## Синтаксис

```js-nolint
compareDocumentPosition(otherNode)
```

## Параметры

- `otherNode`
  - : {{domxref("Node")}}, позиция которого должна быть найдена, относительно текущего узла.

### Возвращаемое значение

Числовое значение, представляющее позицию `otherNode` относительно `node` в виде [битовой маски](https://ru.wikipedia.org/wiki/Битовая_маска), в которой объединены следующие константы {{domxref("Node")}}:

- `Node.DOCUMENT_POSITION_DISCONNECTED` (`1`)
  - : Оба узла находятся в разных документах или в разных деревьях одного документа.
- `Node.DOCUMENT_POSITION_PRECEDING` (`2`)
  - : `otherNode` предшествует узлу во время [прямого обхода при поиске в глубину](<https://ru.wikipedia.org/wiki/Обход_дерева#Прямой_обход_(NLR)>).
- `Node.DOCUMENT_POSITION_FOLLOWING` (`4`)
  - : `otherNode` следует после узла во время [прямого обхода при поиске в глубину](<https://ru.wikipedia.org/wiki/Обход_дерева#Прямой_обход_(NLR)>).
- `Node.DOCUMENT_POSITION_CONTAINS` (`8`)
  - : `otherNode` является предком узла.
- `Node.DOCUMENT_POSITION_CONTAINED_BY` (`16`)
  - : `otherNode` является потомком узла.
- `Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (`32`)
  - : Результат зависит от произвольного и/или специфичного для реализации поведения, и его переносимость не гарантируется.

Могут быть установлены ноль или более битов. Например, если `otherNode` находится в документе ранее **_и_** содержит узел, на котором был вызван метод `compareDocumentPosition()`, то будут установлены биты `DOCUMENT_POSITION_CONTAINS` и `DOCUMENT_POSITION_PRECEDING`, и полученное значение будет равно `10` (`0x0A`).

## Пример

```js
const head = document.head;
const body = document.body;

if (head.compareDocumentPosition(body) & Node.DOCUMENT_POSITION_FOLLOWING) {
  console.log("Правильно составленный документ");
} else {
  console.error("<head> не найден перед <body>");
}
```

> [!NOTE]
> Поскольку результат, возвращаемый `compareDocumentPosition()`, является битовой маской, [побитовый оператор И](/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) должен использоваться для осмысленных значений.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{DOMxRef("Node.contains()")}}
