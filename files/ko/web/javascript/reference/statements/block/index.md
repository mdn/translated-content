---
title: block
slug: Web/JavaScript/Reference/Statements/block
---

{{jsSidebar("Statements")}}

**블록문**(또는 다른 언어에서는 복합문)은 0개 이상의 구문을 묶을 때 사용합니다.
블록은 한 쌍의 중괄호로 구성하며 선택적으로 {{jsxref("Statements/label", "레이블",
  "", 1)}}을 붙일 수 있습니다.

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## 문법

### 블록문

```js
{
  StatementList;
}
```

### 레이블된 블록문

```js
LabelIdentifier: {
  StatementList;
}
```

- `StatementList`
  - : 블록문 내의 구문.
- `LabelIdentifier`
  - : 시각적인 구분, 또는 {{jsxref("Statements/break", "break")}}문의 대상으로 쓸 {{jsxref("Statements/label", "label", "", 1)}}.

## 설명

다른 언어에서 블록문은 **복합문**이라고 부르기도 합니다. 블록문을 쓰면 JavaScript가 하나의 문을 기대하는 곳에서 다수의 문을 실행할 수
있습니다. JavaScript에서 이렇게 문을 묶는건 흔히 쓰이는 기법입니다. 반대 개념으로는 [공백문](/ko/docs/Web/JavaScript/Reference/Statements/Empty)이 있으며, 이는 하나의 구문을 기대하는 곳에 아무것도 제공하지 않는 것입니다.

블록문은 흔히 {{jsxref("Statements/if...else", "if...else")}}과 {{jsxref("Statements/for", "for")}}문 관련해서 사용됩니다.

## 예제

### 엄격하지 않은 모드에서 변수 또는 함수 선언의 블록 범위 규칙

#### `var` 사용 시

{{jsxref("Statements/var", "var")}}로 선언한 변수는 블록 범위를 **가지지 않습니다**.
블록 내에서 선언한 변수의 범위는 함수나 스크립트가 되어, 값 할당의 영향이 블록 바깥까지 미칩니다.
다른 말로는 블록문이 범위를 만들지 않습니다.
"독립" 블록문도 유효한 구문이긴 하지만, C와 Java의 블록에 기대하는걸 JavaScript에서도 기대하면 안됩니다.
예를 들어보겠습니다.

엄격하지 않은 모드에서 `var`로 선언한 변수 혹은 [함수 선언](/ko/docs/Web/JavaScript/Reference/Statements/function)에 의해 생성된 변수는 블록 범위를 **가지지 않습니다**.
블록 내에서 선언한 변수는 이 변수를 포함한 함수나 스크립트까지 범위가 지정되며, 변수의 설정 효과는 블록을 넘어서도 지속됩니다. 즉, 블록문에 범위가 도입되지 않습니다. 예:

```js example-bad
var x = 1;
{
  var x = 2;
}
console.log(x); // 콘솔에 2를 출력합니다
```

콘솔 출력 결과는 2입니다. 블록 안의 `var x`과 블록 앞의 `var x` 문과 동일한 범위에 있기 때문입니다.

엄격하지 않은 코드에서는, 블록 내부의 함수 선언이 이상하게 동작합니다. 사용하지 마십시오.

#### 엄격 모드에서 let, const 혹은 함수 선언의 범위 규칙

반면 {{jsxref("Statements/let", "let")}}과 {{jsxref("Statements/const", "const")}}로 선언한 식별자는 블록 범위를 **가집니다**.

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1이 콘솔에 찍힙니다.
```

`x = 2`는 선언한 블록으로 범위가 제한됩니다.

`const`도 마찬가지입니다.

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1이 콘솔에 찍히며, SyntaxError 예외가 발생하지 않습니다.
```

블록 내의 `const c = 2`가 `SyntaxError: Identifier 'c' has already been declared`를 던지지 않는 점에 주목하세요. 블록
범위 안이라 별개의 식별자이기 때문입니다.

ES2015의 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)부터, 블록 내의 함수는 해당 블록으로 범위가 제한됩니다. ES2015 이전의
엄격 모드에서는 블록 레벨 함수를 사용할 수 없었습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
