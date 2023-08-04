---
title: FormData
slug: Web/API/FormData
---

{{APIRef("XMLHttpRequest")}}

**`FormData`** 인터페이스는 form 필드와 그 값을 나타내는 일련의 key/value 쌍을 쉽게 생성할 수 있는 방법을 제공합니다. 또한 {{domxref("XMLHttpRequest.send()")}} 메서드를 사용하여 쉽게 전송할 수 있습니다. 인코딩 타입이 `"multipart/form-data"`로 설정된 경우, form에서 사용하는 것과 동일한 포맷을 사용해야 합니다.

간단한 `GET` 전송을 사용하는 경우에는 {{HTMLElement("form")}} 이 수행하는 방식으로 쿼리 매개 변수를 생성할 수 있습니다. 이 경우 {{domxref("URLSearchParams")}} 생성자에 직접 전달할 수 있습니다.

`FormData` 를 구현하는 객체는 {{domxref('FormData.entries()', 'entries()')}} 대신 {{jsxref("Statements/for...of", "for...of")}} 구조를 직접 사용할 수 있습니다. `for (var p of myFormData)` 는 `for (var p of myFormData.entries())` 와 같습니다.

> **참고:** 이 기능은 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## 생성자

- {{domxref("FormData.FormData","FormData()")}}
  - : 새로운 `FormData` 객체를 생성합니다.

## 메소드

- {{domxref("FormData.append()")}}
  - : FormData 객체안에 이미 키가 존재하면 그 키에 새로운 값을 추가하고, 키가 없으면 추가합니다.
- {{domxref("FormData.delete()")}}
  - : FormData 객체로부터 키/밸류 쌍을 삭제합니다.
- {{domxref("FormData.entries()")}}
  - : 이 객체에 담긴 모든 키/밸류 쌍을 순회할 수 있는 {{jsxref("Iteration_protocols","iterator")}}를 반환합니다.
- {{domxref("FormData.get()")}}
  - : `FormData` 객체 내의 값들 중 주어진 키와 연관된 첫번째 값을 반환합니다.
- {{domxref("FormData.getAll()")}}
  - : `FormData` 객체 내의 값들 중 주어진 키와 연관된 모든 값이 담긴 배열을 반환합니다.
- {{domxref("FormData.has()")}}
  - : `FormData` 객체에 특정 키가 포함되어 있는지 여부를 나타내는 boolean 을 반환합니다.
- {{domxref("FormData.keys()")}}
  - : 이 객체에 담긴 모든 키/벨류 쌍들의 모든 키들을 순회 할 수 있는 {{jsxref("Iteration_protocols", "iterator")}}를 반환합니다.
- {{domxref("FormData.set()")}}
  - : `FormData` 객체 내에 있는 기존 키에 새 값을 설정하거나, 존재하지 않을 경우 키/밸류 쌍을 추가합니다.
- {{domxref("FormData.values()")}}
  - : 이 객체에 포함된 모든 밸류를 통과하는 {{jsxref("Iteration_protocols", "iterator")}}를 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ko/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
