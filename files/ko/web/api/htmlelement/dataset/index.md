---
title: "HTMLElement: dataset 속성"
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{APIRef("HTML DOM")}}

{{DOMxRef("HTMLElement")}} 인터페이스의 **`dataset`** 읽기 전용 속성은
요소의 [사용자 데이터 특성](/ko/docs/Web/HTML/Reference/Global_attributes/data-*)
(`data-*`)에 대한 읽기/쓰기 접근을 제공합니다. 이 속성은 각 `data-*` 특성에 대해 문자열 맵
({{domxref("DOMStringMap")}})을 노출합니다.

> [!NOTE] > `dataset` 속성 자체는 접근할 수 있지만 직접 수정할 수 없습니다.
> 대신, 모든 수정은 개별 속성 `dataset` 내에서 이뤄져야 합니다.
> 이는 데이터 특성을 나타냅니다.

HTML `data-*` 특성과 이에 대응하는 DOM
`dataset.property`는 접근되거나 작성되는 방식에 따라
공유된 특성명이 변경됩니다.

- HTML에서
  - : 특성명은 `data-`로 시작됩니다. 오직 문자,
    숫자, 붙임표 `-`, 온점 `.`, 쌍점 `:`,
    밑줄 `_` 만이 포함될 수 있습니다. {{Glossary("ASCII")}} 대문자(`A`-
    `Z`)는 소문자로 변환됩니다.
- JavaScript에서
  - : 사용자 정의 데이터 특성의 속성명은 HTML 특성명에서
    `data-` 접두사가 제거된 향태와 동일합니다. 단일 붙임표(`-`)는 삭제되고, 붙임표 뒤에 오는 ASCII
    문자는 카멜 케이스 규칙에 따라 대문자로 변환됩니다.

HTML과 JavaScript 형식 간 변환의 세부사항과 예제는 다음 섹션에서 더 자세하게 다루고 있습니다.

하단 정보에와 더불어, HTML 데이터 특성을 사용하는 방법에 대한
[데이터 특성 사용하기](/ko/docs/Web/HTML/How_to/Use_data_attributes) 안내서를 확인할 수 있습니다.

### 이름 변환

- `dash-style`에서 `camelCase`로 변환
  - : 사용자 정의 데이터 특성명은 다음과 과정을 따라
    {{domxref("DOMStringMap") }} 키로 전환됩니다.
    1. 모든 ASCII 대문자 (`A`-
       `Z`)를 소문자로 변환합니다;
    2. `data-` 접두사를 제거하며, 붙임표도 삭제합니다;
    3. 붙임표(`U+002D`) 뒤에 ASCII 소문자
       (`a`-`z`)가 있을 경우, 붙임표는 제거하고 해당 문자를 대문자로 변환합니다;
    4. 붙임표를 포함해서 그외 문자는 변경하지 않고 그대로 유지합니다.

- `camelCase`에서 `dash-style`로 변환
  - : 키를 속성명으로 변환하는 반대 과정은
    다음과 같은 과정을 따릅니다.
    1. **제한:** 변환 전에, 붙임표는
       바로 뒤에 ASCII 소문자(`a`-
       `z`)가 올 수 없습니다;
    2. `data-` 접두사를 추가합니다;
    3. ASCII 대문자(`A`-`Z`) 앞에 붙임표를 추가한 후,
       해당 문자를 소문자로 변환합니다;
    4. 다른 문자는 변경하지 않고 그대로 유지합니다.

예를 들어, `data-abc-def` 특성은
`dataset.abcDef`로 변환됩니다.

### 값에 접근하기

- 특성은 다음과 같이 카멜케이스 이름 또는 키를 사용하여 dataset 객체의 속성으로
  설정하거나 접근할 수 있습니다. `element.dataset.keyname`
- 특성은 대괄호 문법을 사용하여 설정하거나 접근할 수 있습니다.
  `element.dataset['keyname']`
- [`in` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/in)를 사용하여 주어진
  특성이 존재하는지 확인할 수 있습니다.
  `'keyname' in element.dataset` 이는 `dataset`의 [프로토타입 체인](/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)을 탐색함으로, 외부코드가 프로토타입 체인을 오염시키는 경우 위험할 수 있습니다. 대안으로는, {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}} 또는 `element.dataset.keyname !== undefined`와 같은 방법이 있습니다.

### 값 설정하기

- 특성을 설정할 때, 값은 항상 문자열로 변환됩니다.
  예를 들어, `element.dataset.example = null`은
  `data-example="null"`로 변환됩니다.

- 특성을 제거하려면, [`delete` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/delete)를 사용할 수 있습니다. `delete element.dataset.keyname`.

## 값

A {{domxref("DOMStringMap")}}.

## 예제

```html
<div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
  Carina Anand
</div>
```

```js
const el = document.querySelector("#user");

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'carinaanand'
// el.dataset.dateOfBirth === ''

// set a data attribute
el.dataset.dateOfBirth = "1960-10-03";
// JS 결과: el.dataset.dateOfBirth === '1960-10-03'
// HTML 결과: <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth="1960-10-03">Carina Anand</div>

delete el.dataset.dateOfBirth;
// JS 결과: el.dataset.dateOfBirth === undefined
// HTML 결과: <div id="user" data-id="1234567890" data-user="carinaanand">Carina Anand</div>

if (el.dataset.someDataAttr === undefined) {
  el.dataset.someDataAttr = "mydata";
  // JS 결과: 'someDataAttr' in el.dataset === true
  // HTML 결과: <div id="user" data-id="1234567890" data-user="carinaanand" data-some-data-attr="mydata">Carina Anand</div>
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- HTML [`data-*`](/ko/docs/Web/HTML/Reference/Global_attributes/data-*) 클래스
  전역 특성
- [데이터 특성 사용하기](/ko/docs/Web/HTML/How_to/Use_data_attributes)
- {{DOMxRef("Element.getAttribute()")}} and {{DOMxRef("Element.setAttribute()")}}
