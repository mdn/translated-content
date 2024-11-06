---
title: empty
slug: Web/JavaScript/Reference/Statements/Empty
---

{{jsSidebar("Statements")}}

**empty** 문은 JavaScript 아무것도 동작하지 않습니다.

{{EmbedInteractiveExample("pages/js/statement-empty.html")}}

## 구문

```js-nolint
;
```

## 설명

empty statement은 JavaScript구문에 하나가 필요할 때 어떤 문도 실행되지 않을 것이라는 것을 나타내는 세미 콜론(;)입니다. 여러개의 문장을 원하지만 JavaScript는 [block statement](/ko/docs/Web/JavaScript/Reference/Statements/block)을 사용하여 하나만 허용하며 여러개의 문장을 하나로 결합합니다.

## 예제

빈 문은 루프 문과 함께 사용되기도합니다. 빈 루프 본문이있는 다음 예제를 참조하십시오.

```js
var arr = [1, 2, 3];

// Assign all array values to 0
for (i = 0; i < arr.length; arr[i++] = 0 /* empty statement */);

console.log(arr);
// [0, 0, 0]
```

**참고:** 정상적인 세미 콜론을 구분하는 것이 그리 쉽지 않기 때문에, empty statement를 사용할 때는 의도적으로 주석을 달아주는것이 좋습니다. 다음 예 에서는 의도한대로 코드가 동작하지 않을것입니다. 아마도 killTheUniverse()를 if문 안에서 실행하고자 했던것 같습니다.

```js-nolint example-bad
if (condition);       // Caution, this "if" does nothing!
   killTheUniverse()  // So this always gets executed!!!
```

다른 예 : 중괄호 ({})가없는 [`if...else`](/ko/docs/Web/JavaScript/Reference/Statements/if...else) 문에서 `three`가 `true`이면 아무 일도 일어나지 않고 `four`를 건너 뛰고 else case의 launchRocket() 함수도 실행되지 않습니다.

```js-nolint
if (one) doOne();
else if (two) doTwo();
else if (three); // nothing here
else if (four)
  doFour();
else launchRocket();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Statements/block", "Block statement")}}
