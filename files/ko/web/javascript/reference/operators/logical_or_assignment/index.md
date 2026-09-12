---
title: 논리적 OR 할당 (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: db5bf98e2d53a1b8c7be9487c1e920202a1fcbbb
---

{{jsSidebar("Operators")}}

**논리적 OR 할당(`||=`)** 연산자는 왼쪽 피연산자가 {{Glossary("falsy")}}인 경우에만 오른쪽 피연산자를 평가하고 할당합니다.

{{InteractiveExample("JavaScript Demo: Logical OR assignment (||=) operator")}}

```js interactive-example
const a = { duration: 50, title: "" };

a.duration ||= 10;
console.log(a.duration);
// 예상 출력: 50

a.title ||= "제목이 비어있습니다.";
console.log(a.title);
// 예상 출력: "제목이 비어있습니다."
```

## 구문

```js-nolint
x ||= y
```

## 설명

논리적 OR 할당은 [_단축 평가_](/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting)를 수행합니다. 즉, `x ||= y`는 `x || (x = y)`와 동일하지만, 표현식 `x`는 한 번만 평가된다는 차이가 있습니다.

[논리적 OR](/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR) 연산자의 단축 평가로 인해 왼쪽 피연산자가 falsy가 아닌 경우에는 할당이 수행되지 않습니다. 예를 들어, `x`가 `const`임에도 불구하고 다음 코드는 오류를 발생시키지 않습니다:

```js
const x = 1;
x ||= 2;
```

다음과 같이 setter도 호출되지 않습니다:

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Setter가 호출됨");
  },
};

x.value ||= 2;
```

실제로 `x`가 falsy가 아닌 경우, `y`는 전혀 평가되지 않습니다.

```js
const x = 1;
x ||= console.log("y가 평가됨");
// 아무것도 출력되지 않음
```

## 예제

### 기본 내용 설정하기

"lyrics" 요소가 비어있는 경우 기본값을 표시합니다:

```js
document.getElementById("lyrics").textContent ||= "가사가 없습니다.";
```

여기서 단축 평가는 특히 유용한데, 요소가 불필요하게 업데이트되지 않아 추가적인 구문 분석이나 렌더링 작업, 포커스 손실 등의 원치 않는 부작용을 방지할 수 있기 때문입니다.

참고: 확인하려는 API가 반환하는 값에 주의를 기울이세요. 빈 문자열({{Glossary("falsy")}} 값)이 반환되는 경우 `||=`를 사용해야 하며, 이 경우 빈 공간 대신 "가사가 없습니다."가 표시됩니다. 하지만 API가 빈 내용일 때 [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null) 또는 {{jsxref("undefined")}}를 반환하는 경우에는 [`??=`](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)를 대신 사용해야 합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [논리적 OR (`||`)](/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [널 병합 연산자 (`??`)](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [비트 OR 할당 (`|=`)](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
