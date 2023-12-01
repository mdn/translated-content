---
title: 문 및 선언
slug: Web/JavaScript/Reference/Statements
---

{{jsSidebar("Statements")}}

JavaScript 응용 프로그램은 적절한 구문을 갖는 문으로 구성됩니다. 한 문이 여러 줄에 걸칠 수 있습니다. 여러 문은 각 문이 세미콜론으로 구분된 경우 한 줄에 나올 수 있습니다. 이는 키워드 하나가 아니라, 키워드 그룹입니다.

## 항목별 문 및 선언

알파벳순 목록은 왼쪽 사이드바를 보세요.

### 흐름 제어

- {{jsxref("Statements/block", "Block")}}
  - : 블록문은 0개 이상의 문을 묶을 때 쓰입니다. 블록은 중괄호 한 쌍으로 구분됩니다.
- {{jsxref("Statements/break", "break")}}
  - : 현재 루프, `switch` 또는 `label` 문을 종료하고 프로그램 제어를 종료된 문의 다음 문으로 넘겨줍니다.
- {{jsxref("Statements/continue", "continue")}}
  - : 현재 또는 레이블 달린 루프의 현재 반복 중인 문의 실행을 종료하고 루프의 실행은 다음 반복으로 이어집니다.
- {{jsxref("Statements/Empty", "empty")}}
  - : empty 문은 내용이 없는 빈 문을 제공하기 위해 사용됩니다, 비록 JavaScript 구문이 문을 기대할 것이지만.
- {{jsxref("Statements/if...else", "if...else")}}
  - : 지정된 조건이 true면 문을 실행. 조건이 false인 경우, 다른 문이 실행될 수 있습니다.
- {{jsxref("Statements/switch", "switch")}}
  - : 식의 값이 case 절과 일치하는지 식을 평가하고 case 절과 관련된 문을 실행합니다.
- {{jsxref("Statements/throw", "throw")}}
  - : 사용자 정의 예외가 발생합니다.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : 시도(try)할 문 블록을 표시하고 예외가 발생되어야 하는 응답을 지정합니다.

### 선언

- {{jsxref("Statements/var", "var")}}
  - : 변수를 선언합니다, 변수를 값으로 초기화할 수 있습니다.
- {{jsxref("Statements/let", "let")}}
  - : 블록 범위 지역 변수를 선언합니다, 변수를 값으로 초기화할 수 있습니다.
- {{jsxref("Statements/const", "const")}}
  - : 읽기 전용 유명(named) 상수를 선언합니다.

### 함수 및 클래스

- {{jsxref("Statements/function", "function")}}
  - : 지정된 매개변수를 갖는 함수를 선언합니다.
- {{jsxref("Statements/function*", "function*")}}
  - : [반복기](/ko/docs/Web/JavaScript/Guide/The_Iterator_protocol)를 더 쉽게 작성할 수 있게 하는 생성기 함수.
- {{jsxref("Statements/return", "return")}}
  - : 함수에 의해 반환되는 값을 지정합니다.
- {{jsxref("Statements/class", "class")}}
  - : 클래스를 선언합니다.

### 반복

- {{jsxref("Statements/do...while", "do...while")}}
  - : 테스트 조건이 거짓으로 평가될 때까지 지정된 문을 실행하는 루프를 만듭니다. 조건은 문을 실행한 후 평가됩니다, 그 결과 지정된 문은 적어도 한 번 실행됩니다.
- {{jsxref("Statements/for", "for")}}
  - : 괄호로 묶이고 세미콜론으로 구분된 선택사항 식 셋으로 구성된 루프를 만듭니다, 루프에서 실행되는 문이 뒤따릅니다.
- {{jsxref("Statements/for_each...in", "for each...in")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 객체의 모든 속성값에 대해 지정된 변수를 반복합니다. 각 개별 속성에 대해, 지정된 문이 실행됩니다.
- {{jsxref("Statements/for...in", "for...in")}}
  - : 임의의 순서로 객체의 열거 속성을 반복합니다. 각 개별 속성에 대해, 문은 실행될 수 있습니다.
- {{jsxref("Statements/for...of", "for...of")}}
  - : 반복 가능한 객체 ({{jsxref("Global_Objects/Array","배열","","true")}}, 배열 같은 객체, [반복기 및 생성기](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators) 포함) 를 반복합니다, 각 개별 속성값에 대해 실행되는 문을 가진 사용자 정의 반복 후크를 호출하는.
- {{jsxref("Statements/while", "while")}}
  - : 테스트 조건이 true로 평가되는 한 지정된 문을 실행하는 루프를 만듭니다. 조건은 문을 실행하기 전에 평가됩니다.

### 기타

- {{jsxref("Statements/debugger", "debugger")}}
  - : 이용 가능한 디버깅 기능을 호출합니다. 이용 가능한 기능이 없는 경우, 이 문은 아무 효과가 없습니다.
- {{jsxref("Statements/export", "export")}}
  - : 외부 모듈, 다른 스크립트에 가져올(import) 수 있도록 함수를 내보내(export)는데 사용됩니다.
- {{jsxref("Statements/import", "import")}}
  - : 외부 모듈, 다른 스크립트에서 내보낸 함수를 가져오는데 사용됩니다.
- {{jsxref("Statements/label", "label")}}

  - : `break` 또는 `continue` 문을 사용하여 참조할 수 있는 식별자 있는 문을 제공합니다.

- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : 문의 스코프 체인을 확장합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [연산자](/ko/docs/Web/JavaScript/Reference/Operators)
