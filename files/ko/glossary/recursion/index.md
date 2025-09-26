---
title: 재귀 (Recursion)
slug: Glossary/Recursion
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

자기 자신을 호출하는 함수의 행위인 재귀는 더 작은 하위 문제를 초함하는 문제를 해결하는 데 사용됩니다. 재귀 함수는 기본 사례(재귀 종료) 또는 재귀 사례(재귀 재개)의 두 가지 입력을 받을 수 있습니다.

## 예제

### 재귀 함수는 조건이 충족될 때까지 자신을 호출합니다

아래 Python 코드는 숫자를 가져와 인쇄한 다음 숫자 값 -1을 사용하여 자신을 다시 호출하는 함수를 정의합니다. 숫자가 0이 될 때까지 계속 진행되며, 0이 되면 중지됩니다.

```py
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

출력은 아래와 같습니다.

10
9
8
7
6
5
4
3
2
1

### 재귀는 스택 크기에 따라 제한됩니다

아래 코드는 코드가 실행되는 JavaScript 런타임에서 사용할 수 있는 호출 스택의 최대 크기를 반환하는 함수를 정의합니다.

```js
const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch {
    return i;
  }
};

console.log(getMaxCallStackSize(0));
```

### 일반적인 사용 예제

```js
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(10));
// 3628800
```

```js
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
```

```js
const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45
```

## 같이 보기

- 위키백과의 [재귀 (컴퓨터 과학)](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>)
- [JavaScript의 재귀에 대한 자세한 내용](/ko/docs/Web/JavaScript/Guide/Functions#recursion)
