---
title: 논리적 NOT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: 93d2d79c1c68af93f2730d27cdea9d527eee0d7a
---

{{jsSidebar("Operators")}}

**논리적 NOT (`!`)** (논리적 보수, 부정) 연산자는 참을 거짓으로 만들고, 반대로 거짓을 참으로 만듭니다. 일반적으로 불리언 (논리적) 값과 함께 사용됩니다. 불리언이 아닌 값들과 함께 사용된다면, 단일 피연산자가 `true`로 변환될 수 있으면 `false`를 반환하고, 그렇지 않으면 `true`를 반환합니다.

{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}

## 구문

```js-nolint
!x
```

## 설명

단일 피연산자가 `true`로 변환될 수 있으면 `false`를 반환합니다.
그렇지 않으면, `true`를 반환합니다.

만약 어떤 값이 `true`로 변환 가능하다면, 그 값은 소위 {{Glossary("truthy", "참 같은 값")}}입니다. 만약 어떤 값이 `false`로 변환 가능하다면, 그 값은 소위 {{Glossary("falsy", "거짓 같은 값")}} 이라고 합니다.

거짓으로 변환될 수 있는 표현식의 예시는 다음과 같습니다.

- `null`;
- `NaN`;
- `0`;
- 빈 문자열 (`""` or `''` or ` `` `);
- `undefined`.

`!` 연산자는 불리언 값이 아닌 피연산자와 함께 사용할 수 있지만, 반환값이 항상 [원시형 불리언](/ko/docs/Web/JavaScript/Data_structures#boolean_타입)으로 변환될 수 있기 때문에 여전히 불리언 연산자로 간주할 수 있습니다. 명시적으로 반환값을 (또는 일반적으로 어떤 표현식을) 대응하는 불리언 값으로 변환하기 위해서는 이중 NOT 연산자 (`!!`) 또는 {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 생성자를 사용하시기 바랍니다.

## 예제

### NOT 사용하기

다음 코드는 `!`(논리적 NOT) 연산자의 예제를 보여줍니다.

```js
!true; // !t 는 false를 반환합니다
!false; // !f 는 true를 반환합니다
!""; // !f 는 true를 반환합니다
!"Cat"; // !t 는 false를 반환합니다
```

### 이중 NOT (`!!`)

NOT 연산자를 연속으로 2개 사용해서 명시적으로 어떤 값을 그에 대응하는 [원시형 불리언](/ko/docs/Web/JavaScript/Data_structures#boolean_타입)으로 변환하도록 강제할 수 있습니다.
변환은 값의 "참 같음" 또는 "거짓 같음"에 기반합니다({{Glossary("truthy", "참 같은 값")}}과 {{Glossary("falsy", "거짓 같은 값")}}을 참고하세요).

{{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 함수를 통해서도 똑같은 변환을 수행할 수 있습니다.

```js
!!true; // !!truthy는 true를 반환합니다.
!!{}; // !!truthy는 true를 반환합니다. 임의의 object는 참 같은 객체입니다.
!!new Boolean(false); // .valueOf()에서 false값을 가지는 불리언 객체도요!
!!false; // !!falsy는 false를 반환합니다.
!!""; // !!falsy는 false를 반환합니다.
!!Boolean(false); // !!falsy는 false를 반환합니다.
```

### NOT 사이에서의 변환

**불리언**울 포함하는 다음 연산

```js-nolint
!!bCondition
```

는 항상 아래와 같습니다.

```js-nolint
bCondition
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
