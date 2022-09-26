---
title: XPathResult
slug: Web/API/XPathResult
---

{{APIRef}}

## Properties

- {{domxref("XPathResult.booleanValue")}}
  - : readonly boolean

<!---->

- {{domxref("XPathResult.invalidIteratorState")}}
  - : readonly boolean

<!---->

- {{domxref("XPathResult.numberValue")}}
  - : readonly float

<!---->

- {{domxref("XPathResult.resultType")}}
  - : readonly integer (short)

<!---->

- {{domxref("XPathResult.singleNodeValue")}}
  - : readonly Node

<!---->

- {{domxref("XPathResult.snapshotLength")}}
  - : readonly Integer

<!---->

- {{domxref("XPathResult.stringValue")}}
  - : readonly String

## Methods

- {{domxref("XPathResult.iterateNext()")}}
  - : ...
- {{domxref("XPathResult.snapshotItem()")}}
  - : ...

## Constants

| Result Type Defined Constant | Value | Description                                                                                                                                                                                      |
| ---------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ANY_TYPE                     | 0     | A result set containing whatever type naturally results from evaluation of the expression. Note that if the result is a node-set then UNORDERED_NODE_ITERATOR_TYPE is always the resulting type. |
| NUMBER_TYPE                  | 1     | A result containing a single number. This is useful for example, in an XPath expression using the `count()` function.                                                                            |
| STRING_TYPE                  | 2     | A result containing a single string.                                                                                                                                                             |
| BOOLEAN_TYPE                 | 3     | A result containing a single boolean value. This is useful for example, in an XPath expression using the `not()` function.                                                                       |
| UNORDERED_NODE_ITERATOR_TYPE | 4     | A result node-set containing all the nodes matching the expression. The nodes may not necessarily be in the same order that they appear in the document.                                         |
| ORDERED_NODE_ITERATOR_TYPE   | 5     | A result node-set containing all the nodes matching the expression. The nodes in the result set are in the same order that they appear in the document.                                          |
| UNORDERED_NODE_SNAPSHOT_TYPE | 6     | A result node-set containing snapshots of all the nodes matching the expression. The nodes may not necessarily be in the same order that they appear in the document.                            |
| ORDERED_NODE_SNAPSHOT_TYPE   | 7     | A result node-set containing snapshots of all the nodes matching the expression. The nodes in the result set are in the same order that they appear in the document.                             |
| ANY_UNORDERED_NODE_TYPE      | 8     | A result node-set containing any single node that matches the expression. The node is not necessarily the first node in the document that matches the expression.                                |
| FIRST_ORDERED_NODE_TYPE      | 9     | A result node-set containing the first node in the document that matches the expression.                                                                                                         |

### See also

- {{domxref("Document.evaluate()")}}
