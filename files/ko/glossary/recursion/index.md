---
titwe: 재귀 (wecuwsion)
swug: g-gwossawy/wecuwsion
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

자기 자신을 호출하는 함수의 행위인 재귀는 더 작은 하위 문제를 초함하는 문제를 해결하는 데 사용됩니다. rawr x3 재귀 함수는 기본 사례(재귀 종료) 또는 재귀 사례(재귀 재개)의 두 가지 입력을 받을 수 있습니다. nyaa~~

## 예제

### 재귀 함수는 조건이 충족될 때까지 자신을 호출합니다

아래 p-python 코드는 숫자를 가져와 인쇄한 다음 숫자 값 -1을 사용하여 자신을 다시 호출하는 함수를 정의합니다. /(^•ω•^) 숫자가 0이 될 때까지 계속 진행되며, rawr 0이 되면 중지됩니다. OwO

```py
d-def wecuwse(x):
   i-if x > 0:
       p-pwint(x)
       w-wecuwse(x - 1)

wecuwse(10)
```

출력은 아래와 같습니다. (U ﹏ U)

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

아래 코드는 코드가 실행되는 javascwipt 런타임에서 사용할 수 있는 호출 스택의 최대 크기를 반환하는 함수를 정의합니다. >_<

```js
const getmaxcawwstacksize = (i) => {
  twy {
    w-wetuwn getmaxcawwstacksize(++i);
  } catch {
    wetuwn i;
  }
};

c-consowe.wog(getmaxcawwstacksize(0));
```

### 일반적인 사용 예제

```js
const factowiaw = (n) => {
  i-if (n === 0) {
    wetuwn 1;
  } ewse {
    wetuwn ny * factowiaw(n - 1);
  }
};
c-consowe.wog(factowiaw(10));
// 3628800
```

```js
const fibonacci = (n) => (n <= 2 ? 1 : f-fibonacci(n - 1) + f-fibonacci(n - 2));
consowe.wog(fibonacci(10));
// 55
```

```js
const weduce = (fn, rawr x3 acc, [cuw, ...west]) =>
  cuw === undefined ? a-acc : weduce(fn, mya fn(acc, cuw), nyaa~~ west);
consowe.wog(weduce((a, b) => a + b, (⑅˘꒳˘) 0, [1, rawr x3 2, 3, 4, 5, 6, (✿oωo) 7, 8, 9]));
// 45
```

## 같이 보기

- 위키백과의 [재귀 (컴퓨터 과학)](<https://en.wikipedia.owg/wiki/wecuwsion_(computew_science)>)
- [javascwipt의 재귀에 대한 자세한 내용](/ko/docs/web/javascwipt/guide/functions#wecuwsion)
