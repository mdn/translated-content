---
title: Document.implementation
slug: Web/API/Document/implementation
---

{{ ApiRef("DOM") }}

현재 document에 연관된 {{domxref("DOMImplementation")}} 객체를 반환합니다.

## Syntax

```js
DOMImpObj = document.implementation;
```

## Example

```js
var modName = "HTML";
var modVer = "2.0";
var conformTest = document.implementation.hasFeature(modName, modVer);

alert("DOM " + modName + " " + modVer + " supported?: " + conformTest);

// alerts with: "DOM HTML 2.0 supported?: true" if DOM Level 2 HTML module is supported.
```

모듈 네임 목록(예: Core, HTML, XML, 등등)은 DOM Level 2 [Conformance 섹션](http://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance-h2)에서 확인하실 수 있습니다.

## Notes

W3C의 DOM Level 1 권고안에는 DOM 모듈을 브라우저에서 지원하는지를 확인하는 방법 중 하나인 `hasFeature` 메소드만 명시되어 있습니다(위 예제와 [What does your user agent claim to support?](http://www.w3.org/2003/02/06-dom-support.html) 문서를 확인하세요). 사용이 가능한 경우, 다른 `DOMImplementation` 메소드들이 단일 document 외부의 것들을 컨트롤하기 위한 서비스들을 제공합니다. 예를 들어, `DOMImplementation` 인터페이스는 `createDocumentType` 메소드와 implementation에 의해 관리되는 하나 이상의 document를 위해 생성되는 DTD가 무엇인지를 포함합니다.

## Specification

- [DOM Level 2 Core: implementation](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490)
- [DOM Level 3 Core: implementation](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490)

## 브라우저 호환성

{{Compat}}
