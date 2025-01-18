---
title: 문서 객체 모델 (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{DefaultAPISidebar("DOM")}}

**문서 객체 모델**(**DOM**)은 웹 페이지를 스크립트 또는 프로그래밍 언어와 연결합니다. 이는 문서의 구조(예: 웹 페이지를 나타내는 HTML)를 메모리에 표현함으로써 이루어집니다. 일반적으로 JavaScript를 지칭하지만, HTML, SVG, 또는 XML 문서를 객체로 모델링하는 것은 핵심 JavaScript 언어의 일부가 아닙니다.

DOM은 문서를 논리적 트리로 표현합니다. 트리의 각 가지는 노드에서 끝나며, 각 노드는 객체를 포함합니다. DOM 메서드를 사용하면 프로그래밍 방식으로 트리에 접근할 수 있습니다. 이를 통해 문서의 구조, 스타일, 또는 내용을 변경할 수 있습니다.

노드에는 이벤트 핸들러도 첨부될 수 있습니다. 이벤트가 트리거되면 이벤트 핸들러가 실행됩니다.

DOM이 무엇이고 어떻게 문서를 표현하는지에 대해 더 자세히 알아보려면, [DOM 소개](/ko/docs/Web/API/Document_Object_Model/Introduction) 문서를 참조하세요.

## DOM 인터페이스

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

### 폐기된 DOM 인터페이스

문서 객체 모델은 크게 단순화되었습니다. 이를 위해 DOM 레벨 3 또는 이전 명세의 다음 인터페이스들이 제거되었습니다. 이들은 더 이상 웹 개발자들이 사용할 수 없습니다.

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

HTML을 포함하는 문서는 {{DOMxRef("Document")}} 인터페이스를 사용하여 설명되며, 이는 HTML 명세에 의해 확장되어 다양한 HTML 특정 기능을 포함합니다. 특히, {{domxref("Element")}} 인터페이스는 {{domxref("HTMLElement")}}로 확장되고 다양한 하위 클래스로 나뉘어, 각각 하나의 요소(또는 밀접하게 관련된 요소들의 집합)를 나타냅니다.

HTML DOM API는 탭과 창, CSS 스타일과 스타일시트, 브라우저 히스토리 등 다양한 브라우저 기능에 대한 접근을 제공합니다. 이러한 인터페이스들은 [HTML DOM API](/ko/docs/Web/API/HTML_DOM_API) 문서에서 더 자세히 다룹니다.

## SVG DOM

마찬가지로, SVG를 포함하는 문서도 {{DOMxRef("Document")}} 인터페이스를 사용하여 설명되며, 이는 SVG 명세에 의해 확장되어 다양한 SVG 특정 기능을 포함합니다. 특히, {{domxref("Element")}} 인터페이스는 {{domxref("SVGElement")}}로 확장되고 다양한 하위 클래스로 나뉘어, 각각 하나의 요소 또는 밀접하게 관련된 요소들의 집합을 나타냅니다. 이러한 인터페이스들은 [SVG API](/ko/docs/Web/API/SVG_API) 문서에서 더 자세히 다룹니다.

## 명세서

{{Specifications}}

## 같이 보기

- [DOM 예제](/ko/docs/Web/API/Document_Object_Model/Examples)
- [CSS 객체 모델 (CSSOM)](/ko/docs/Web/API/CSS_Object_Model)
