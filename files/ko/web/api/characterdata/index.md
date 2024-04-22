---
title: CharacterData
slug: Web/API/CharacterData
---

{{APIRef("DOM")}}

**`CharacterData`** 추상 인터페이스는 문자를 포함하는 {{domxref("Node")}} 객체를 나타냅니다. 이는 추상 인터페이스로 `CharacterData` 타입의 객체로는 존재하지 않음을 의미합니다. {{domxref("Text")}}, {{domxref("Comment")}}, {{domxref("ProcessingInstruction")}} 와 같은 추상 인터페이스가 아닌 다른 인터페이스에의해 구현되었습니다.

{{InheritanceDiagram}}

## 프로퍼티

_부모 {{domxref("Node")}} 로부터 프로퍼티를 상속받고 {{domxref("ChildNode")}} 와 {{domxref("NonDocumentTypeChildNode")}} 인터페이스를 구현합니다._

- {{domxref("CharacterData.data")}}
  - : 이 객체를 포함하는 문자형 데이터를 나타내는 {{domxref("DOMString")}} 입니다.
- {{domxref("CharacterData.length")}} {{readonlyInline}}
  - : `CharacterData.data` 에 포함된 문자열의 크기를 나타내는 `unsigned long` 을 반환합니다.
- {{domxref("NonDocumentTypeChildNode.nextElementSibling")}} {{readonlyInline}}
  - : 부모의 자식 리스트 중 특정 {{domxref("Element")}} 의 바로 다음 {{domxref("Element")}} 를 반환합니다. 특정 엘리먼트가 리스트의 마지막 것일 경우 `null` 을 반환합니다.
- {{domxref("NonDocumentTypeChildNode.previousElementSibling")}} {{readonlyInline}}
  - : 부모의 자식 리스트 중 특정 {{domxref("Element")}} 의 바로 이전 {{domxref("Element")}} 를 반환합니다. 특정 엘리먼트가 리스트의 처음 것일 경우 `null` 을 반환합니다.

## 메소드

_부모 {{domxref("Node")}} 로부터 메소드를 상속받고 {{domxref("ChildNode")}} 와 _{{domxref("NonDocumentTypeChildNode")}}_ 인터페이스를 구현합니다._

- {{domxref("CharacterData.appendData()")}}
  - : 주어진 {{domxref("DOMString")}} 을 `CharacterData.data` 문자열에 붙입니다. 이 메소드가 반환할 때 `data` 는 이어 붙여진 {{domxref("DOMString")}} 을 갖게됩니다.
- {{domxref("CharacterData.deleteData()")}}
  - : `CharacterData.data` 문자열의 특정 오프셋으로부터 지정한 양만큼의 문자열을 제거합니다. 이 메소드가 반환할 때 `data` 는 짧아진 {{domxref("DOMString")}} 을 갖게됩니다.
- {{domxref("CharacterData.insertData()")}}
  - : `CharacterData.data` 문자열의 특정 오프셋에 특정 문자열을 삽입합니다. 이 메소드가 반환할 때 `data` 는 수정된 {{domxref("DOMString")}} 을 갖게됩니다.
- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : 부모의 자식 리스트로부터 객체를 제거합니다.
- {{domxref("CharacterData.replaceData()")}}
  - : 특정 오프셋으로부터 지정한 양만큼의 문자열을 지정된 {{domxref("DOMString")}} 으로 대체합니다. 이 메소드가 반환할 때 `data` 는 수정된 {{domxref("DOMString")}} 을 갖게됩니다.
- {{domxref("CharacterData.substringData()")}}
  - : `CharacterData.data` 의 특정 오프셋으로부터 지정된 길이만큼의 {{domxref("DOMString")}} 을 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- [DOM 인터페이스 목차](/ko/docs/DOM/DOM_Reference).
