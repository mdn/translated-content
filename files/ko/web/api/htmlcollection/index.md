---
title: HTMLCollection
slug: Web/API/HTMLCollection
---

{{APIRef("HTML DOM")}}

**`HTMLCollection`** 인터페이스는 요소의 문서 내 순서대로 정렬된 일반 컬렉션({{jsxref("Functions/arguments", "arguments")}}처럼 배열과 유사한 객체)을 나타내며 리스트에서 선택할 때 필요한 메서드와 속성을 제공합니다.

> [!NOTE]
> `HTMLCollection`의 이름은 현대적 DOM의 이전, 구성요소로 HTML 요소만 지닐 수 있었던 시절에 정해졌습니다.

HTML DOM 내의 `HTMLCollection`은 문서가 바뀔 때 실시간으로 업데이트됩니다.

## 속성

- {{domxref("HTMLCollection.length")}} {{readonlyInline}}
  - : 컬렉션 항목의 갯수를 반환합니다.

## 메서드

- {{domxref("HTMLCollection.item()")}}
  - : 리스트에서 주어진 인덱스의 노드를 반환합니다. 인덱스가 범위 밖일 경우 {{jsxref("null")}}을 반환합니다.
- {{domxref("HTMLCollection.namedItem()")}}
  - : 리스트에서 ID 또는 이름 속성이 주어진 문자열과 일치하는 노드를 반환합니다. 이름 속성 판별은 HTML에서만 최후의 수단으로 쓰이며 참조하는 요소가 `name` 속성을 지원해야 합니다. 일치하는 요소가 없으면 {{jsxref("null")}}을 반환합니다.

## JavaScript에서 사용하기

`HTMLCollection`은 구성요소를 이름과 인덱스로 동시에 직접 노출합니다. HTML ID는 `:`와 `.`을 유효한 문자로 포함할 수 있으므로 속성 접근 시에는 [괄호 표기법](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors#%ea%b4%84%ed%98%b8_%ed%91%9c%ea%b8%b0%eb%b2%95)을 사용해야 합니다. `HTMLCollection`은 배열 스타일 구성요소 접근법과 충돌할 수 있는 순수 숫자 인덱스를 지원하지 않습니다.

```js
var elem1, elem2;

// document.forms은 HTMLCollection임

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // "true"

elem1 = document.forms["named.item.with.periods"];
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
