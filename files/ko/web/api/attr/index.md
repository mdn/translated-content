---
title: Attr
slug: Web/API/Attr
---

{{APIRef("DOM")}}

**`Attr`** 인터페이스는 요소의 속성 중 하나를 객체로 나타냅니다. 대부분의 경우 속성 값을 문자열로 직접 검색하지만(예: {{domxref("Element.getAttribute()")}}), 특정 함수(예: {{domxref("Element.getAttributeNode()")}})나 반복을 통해서는 `Attr` 인스턴스를 반환합니다.

{{InheritanceDiagram}}

`Attr` 객체의 핵심 개념은 '이름'과 '값'의 연관성입니다. 또한 속성은 '네임스페이스'의 일부인 경우가 있는데 이때는 네임스페이스를 식별하는 URI와 네임스페이스의 약어인 접두사를 가집니다.

이름은 네임스페이스 접두사를 무시하면 로컬로, 네임스페이스 내의 속성을 포함하면(콜론(`:`)으로 로컬 이름과 구분된 경우도) 한정(_qualified_)된 것으로 간주됩니다. 네임스페이스 외부의 속성, 접두사가 정의되지 않은 네임스페이스 내부의 속성, 접두사가 있는 네임스페이스 내부의 속성과 같은 다음 세 가지 경우로 나눌 수 있습니다.

| 속성     | 네임스페이스 이름 | 네임스페이스 접두사 | 속성 로컬 이름 | 한정된 속성 이름 |
| -------- | ----------------- | ------------------- | -------------- | ---------------- |
| `myAttr` | _none_            | _none_              | `myAttr`       | `myAttr`         |
| `myAttr` | `mynamespace`     | _none_              | `myAttr`       | `myAttr`         |
| `myAttr` | `mynamespace`     | `myns`              | `myAttr`       | `myns:myAttr`    |

> **참고:** 이 인터페이스는 SVG, HTML 그리고 MathML 요소의 트리 표현에 존재하는 속성만 나타냅니다.
>
> {{HTMLElement("table")}} 요소에 대한 {{domxref("HTMLTableElement")}} 인터페이스의 속성을 나타내지 않습니다. (속성에 대한 자세한 내용은 {{Glossary("Attribute", "이 문서")}}를 참고하세요.)

## 인스턴스 속성

이 인터페이스는 상위 인터페이스인 {{domxref("Node")}}와 {{domxref("EventTarget")}}의 속성도 상속합니다.

- {{domxref("Attr.localName", "localName")}} {{ReadOnlyInline}}
  - : 속성의 한정된 이름의 로컬 부분을 나타내는 문자열입니다.
- {{domxref("Attr.name", "name")}} {{ReadOnlyInline}}
  - : 속성의 한정된 이름을 나타내는 문자열입니다. 속성이 네임스페이스에 속하지 않은 경우 {{domxref("attr.localName", "localName")}} 속성과 동일합니다.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{ReadOnlyInline}}
  - : 속성의 네임스페이스 URI를 나타내는 문자열입니다. 네임스페이스가 없는 경우 `null`입니다.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{ReadOnlyInline}}
  - : 속성이 속한 {{domxref("Element")}}입니다.
- {{domxref("Attr.prefix", "prefix")}} {{ReadOnlyInline}}
  - : 속성의 네임스페이스 접두사를 나타내는 문자열입니다. 접두사가 없거나 네임스페이스가 없는 경우 `null`입니다.
- {{domxref("Attr.specified", "specified")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 이 속성은 항상 `true`를 반환합니다.
- {{domxref("Attr.value", "value")}}
  - : 이 속성을 사용하여 설정하고 가져올 수 있는 문자열인 속성의 값입니다.

## 인스턴스 메서드

이 인터페이스는 특정 메서드를 가지지 않지만, 상위 인터페이스인 {{domxref("Node")}}와 {{domxref("EventTarget")}}의 메서드를 상속합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 노드는 {{domxref("CDATASection")}}, {{domxref("CharacterData")}}, {{domxref("Comment")}}, {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("ProcessingInstruction")}}, 그리고 {{domxref("Text")}}가 있습니다.
