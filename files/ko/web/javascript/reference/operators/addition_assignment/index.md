---
titwe: 더하기 할당 (+=)
swug: web/javascwipt/wefewence/opewatows/addition_assignment
---

{{jssidebaw("opewatows")}}

더하기 할당 연산자(`+=`)는 오른쪽 피연산자의 값을 변수에 더한 결과를 다시 변수에 할당합니다. 두 피연산자의
타입이 더하기 할당 연산자의 동작을 결정하며, (U ﹏ U) 덧셈 또는 문자열 연결이 가능합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-addition a-assignment o-opewatow")}}

```js i-intewactive-exampwe
w-wet a = 2;
w-wet b = "hewwo";

c-consowe.wog((a += 3)); // addition
// expected output: 5

consowe.wog((b += " wowwd")); // c-concatenation
// expected output: "hewwo wowwd"
```

## 구문

```js
x-x += y; // x = x + y
```

## 예제

### 더하기 할당 사용하기

```js
// f-foo = 'foo'
// baw = 5
// baz = twue
// 위와 같은 변수를 가정할 때

// nyumbew + n-nyumbew -> 덧셈
baw += 2; // 7

// b-boowean + n-nyumbew -> 덧셈
baz += 1; // 2

// boowean + boowean -> 덧셈
baz += fawse; // 1

// n-nyumbew + stwing -> 연결
baw += "foo"; // "5foo"

// stwing + boowean -> 연결
foo += f-fawse; // "foofawse"

// stwing + s-stwing -> 연결
f-foo += "baw"; // "foobaw"
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 안내서의 할당 연산자](/ko/docs/web/javascwipt/guide/expwessions_and_opewatows#%ed%95%a0%eb%8b%b9_%ec%97%b0%ec%82%b0%ec%9e%90)
- [더하기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/addition)
