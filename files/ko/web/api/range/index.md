---
title: range
slug: Web/API/Range
---

{{ APIRef("DOM") }}

**`Range`** 객체는 주어진 document 내의 텍스트 노드들의 부분들(parts)과 document의 단편화에 포함된 노드들을 나타내고 있다.

Range 오브젝트는 [`Document`](/ko/DOM/document) 객체에 포함되어 있는 [`createRange`](/ko/DOM/document.createRange) 메소드를 사용하여 생성할 수 있다. 또한 [`selection`](/ko/DOM/Selection) 객체에 포함되어 있는 [`getRangeAt`](/ko/DOM/Selection/getRangeAt) 메소드를 사용하여 추출할 수 있다.

{{domxref("Range.Range()", "Range()")}} 생성자 또한 사용 가능하다.

## 속성

- [collapsed](/ko/DOM/range.collapsed)
  - : Range의 시작점과 끝점이 같인 위치인지를 알 수 있는 boolean 값을 반환한다.
- [commonAncestorContainer](/ko/DOM/range.commonAncestorContainer)
  - : startContainer와 endContainer 노드들을 포함한 최상위 노드를 반환한다.
- [endContainer](/ko/DOM/range.endContainer)
  - : Range의 끝 위치를 포함하는 Node를 반환한다.
- [endOffset](/ko/DOM/range.endOffset)
  - : endContainer 안에 있는 Range 끝을 나타내는 숫자(offset)를 반환한다.
- [startContainer](/ko/DOM/range.startContainer)
  - : Range의 시작 위치를 포함하는 Node를 반환한다.
- [startOffset](/ko/DOM/range.startOffset)
  - : startContainer 안에 있는 Range 시작을 나타내는 숫자(offset)를 반환한다.

## 생성자

- {{ domxref("Range.Range()", "Range()") }} {{experimental_inline}}
  - : `Range` 객체의 시작과 끝에 따라 전역 {{domxref("Document")}} 와 함께 `Range` 객체를 반환한다.

## 메서드

_상속한 메서드는 없다._

- {{ domxref("Range.setStart()")}}
  - : `Range 의 시작 위치를 설정한다`.
- {{ domxref("Range.setEnd()")}}
  - : `Range 의 끝 위치를 설정한다`.
- {{ domxref("Range.setStartBefore()")}}
  - : 다른 {{ domxref("Node") }} 와 관계가 있는 `Range 의 시작 위치를 설정한다`.
- {{ domxref("Range.setStartAfter()")}}
  - : 다른 {{ domxref("Node") }} 와 관계가 있는 `Range 의 시작 위치를 설정한다`.
- {{ domxref("Range.setEndBefore()")}}
  - : 다른 {{ domxref("Node") }} 와 관계가 있는 `Range 의 끝 위치를 설정한다`.
- {{ domxref("Range.setEndAfter()")}}
  - : 다른 {{ domxref("Node") }} 와 관계가 있는 `Range 의 끝 위치를 설정한다`.
- {{ domxref("Range.selectNode()")}}
  - : `Range` 에 {{ domxref("Node") }} 와 그것의 내용물을 포함 시킨`다`.
- {{ domxref("Range.selectNodeContents()")}}
  - : `Range` 에 {{ domxref("Node") }} 의 내용물을 포함 시킨`다`.
- {{ domxref("Range.collapse()")}}
  - : `Range` 의 경계 지점 중 하나로 영역을 붕괴 시킨다.
- {{ domxref("Range.cloneContents()")}}
  - : `Range` 의 노드들을 복사하여 {{ domxref("DocumentFragment") }} 를 반환한다.
- {{ domxref("Range.deleteContents()")}}
  - : {{ domxref("Document") }} 로 부터 `Range` 의 컨텐츠들을 삭제한다.
- {{ domxref("Range.extractContents()")}}
  - : {{ domxref("Document") }} 트리로 부터 `Range` 의 컨텐츠들을 domxref("DocumentFragment") }} 로 이동시킨다.
- {{ domxref("Range.insertNode()")}}
  - : `Range` 의 맨 앞에 {{ domxref("Node") }}를 삽입한다.
- {{ domxref("Range.surroundContents()")}}
  - : Moves content of a `Range` into a new {{ domxref("Node") }}.
- {{ domxref("Range.compareBoundaryPoints()")}}
  - : Compares the boundary points of the `Range` with another `Range`.
- {{ domxref("Range.cloneRange()")}}
  - : Returns a `Range` object with boundary points identical to the cloned `Range`.
- {{ domxref("Range.detach()")}}
  - : Releases the `Range` from use to improve performance.
- {{ domxref("Range.toString()")}}
  - : Returns the text of the `Range`.
- {{ domxref("Range.compareNode()")}} {{deprecated_inline }}{{non-standard_inline}}
  - : Returns a constant representing whether the {{domxref("Node")}} is before, after, inside, or surrounding the range.
- {{ domxref("Range.comparePoint()")}} {{experimental_inline}}
  - : Returns -1, 0, or 1 indicating whether the point occurs before, inside, or after the `Range`.
- {{ domxref("Range.createContextualFragment()")}}{{experimental_inline}}
  - : Returns a {{ domxref("DocumentFragment") }} created from a given string of code.
- {{ domxref("Range.getBoundingClientRect()") }} {{experimental_inline}}
  - : Returns a {{ domxref("ClientRect") }} object which bounds the entire contents of the `Range`; this would be the union of all the rectangles returned by {{ domxref("range.getClientRects()") }}.
- {{ domxref("Range.getClientRects()") }} {{experimental_inline}}
  - : Returns a list of {{ domxref("ClientRect") }} objects that aggregates the results of {{ domxref("Element.getClientRects()") }} for all the elements in the `Range`.
- {{ domxref("Range.intersectsNode()")}} {{experimental_inline}}
  - : Returns a `boolean` indicating whether the given node intersects the `Range`.
- {{ domxref("Range.isPointInRange()")}} {{experimental_inline}}
  - : Returns a `boolean` indicating whether the given point is in the `Range`.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [The DOM interfaces index](/ko/docs/DOM/DOM_Reference)
