---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
---

{{jsSidebar("Statements")}}

**`if` 문**은 지정한 조건이 {{glossary("truthy", "참")}}인 경우 명령문(statement)을 실행합니다. 조건이 {{glossary("falsy", "거짓")}}인 경우 또 다른 명령문이 실행 될 수 있습니다.

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## 구문

```js
    if (condition)
       statement1
    [else
       statement2]
```

- `condition`
  - : 참 또는 거짓으로 평가되는 [표현식](/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#표현식)입니다.
- `statement1`
  - : 조건이 참으로 평가될 경우 실행되는 문입니다.
    중첩된 if구문을 포함하여 어떤 구문이든 쓸 수 있습니다. 다중구문을 사용할 경우 ({ ... })[블럭](/ko/docs/Web/JavaScript/Reference/Statements/block) 구문 으로 그룹화 하고 실행하지 않으려면 [빈](/ko/docs/Web/JavaScript/Reference/Statements/Empty) 구문을 사용합니다.
- `statement2`
  - : 이 구문은 조건이 거짓일경우 다른 조항이 있을 때 실행되는 구문입니다. 블록 문과 if문의 중첩을 호함한 모든문이 될 수 있습니다.

## 설명

다중의 if...else 문은 else if 절을 만들기 위해 중첩될 수 있다.
자바스크립트에서는 elseif (하나의 단어) 키워드가 존재하지 않는다.

```js
    if (조건1)
       명령문1
    else if (조건2)
       명령문2
    else if (조건3)
       명령문3
    ...
    else
       명령문N
```

아래 작업한 것을 보면, if문을 중첩 사용하면 들여쓰기된 것이 제대로 보여집니다.

```js
    if (조건1)
       명령문1
    else
       if (조건2)
          명령문2
       else
          if (조건3)
    ...
```

하나의 절에서 여러개의 명령문들을 실행하려면, 그 명령문들을 그룹화하는 블록 명령문 ({ ... }) 블럭구문을 사용한다.
일반적으로, 블럭구문을 항상 사용하는 것은 좋은 연습입니다. 특히 중첩된 if 문과 관련되어
있는 코드안에서 사용하면 더욱 좋습니다.

```js
if (조건) {
  명령문들1;
} else {
  명령문들2;
}
```

원시 불리언 값인 true (참) 과 false (거짓) 을 불리언 객체의 truthiness (참으로 보이는 것) 과 falsiness (거짓으로 보이는 것)으로 혼동하면 안된다. false, undefined, null, 0, NaN, 또는 빈 스트링 ("") 이 아닌 모든 값, 그리고 false 값인 불리언 객체를 포함하는 모든 객체는 조건으로 사용될 때 [truthy](/ko/docs/Glossary/Truthy) 로 간주된다. 예:

```js
var b = new Boolean(false);
if (b) // 이 조건은 참으로 보이는 것 (truthy) 이다.
```

## 예시

### `if...else` 사용하기

```js
if (cipher_char === from_char) {
  result = result + to_char;
  x++;
} else {
  result = result + clear_char;
}
```

### `else if` 사용하기

자바스크립트에는 elseif 구문이 없다. 그러나, else if 를 사용할 수 있다.

```js
if (x > 5) {
} else if (x > 50) {
} else {
}
```

### 조건식의 값을 지정하기

조건식을 단순하게 지정하는 것은 좋지 않습니다.
왜냐하면, 코드를 흘깃 보면 값을 지정한것을 평등한것으로 혼동할 수 있기 때문입니다. 예를들어, 다음코드를 사용하지 마세요:

```js-nolint example-bad
if (x = y) {
  /* do the right thing */
}
```

당신이 조건식에 값의 지정을 해야할 경우, 일반적인 관행은 그 할당된 것 주위에 추가 괄호를 넣어야 합니다. 예를들면:

```js example-good
if ((x = y)) {
  /* do the right thing */
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- [삼항 조건 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
