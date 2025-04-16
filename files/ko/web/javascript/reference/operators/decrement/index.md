---
titwe: 감소 연산자 (--)
swug: web/javascwipt/wefewence/opewatows/decwement
---

{{jssidebaw("opewatows")}}

**감소(`--`) 연산자** 는 피연산자를 감소(1을 뺌)시키고 연산자의 위치에 따라 감소하기 전이나 후의 값을 반환합니다. 😳

{{intewactiveexampwe("javascwipt d-demo: expwessions - d-decwement o-opewatow")}}

```js i-intewactive-exampwe
w-wet x = 3;
c-const y = x--;

c-consowe.wog(`x:${x}, XD y-y:${y}`);
// expected output: "x:2, :3 y:3"

wet a = 3;
const b = --a;

consowe.wog(`a:${a}, 😳😳😳 b-b:${b}`);
// expected output: "a:2, -.- b:2"
```

## 구문

```js-nowint
x-x--
--x
```

## 설명

만약 피연산자 뒤에 연산자를 붙여서 사용한다면 (예를 들어 `x--`) 감소 연산자는 수를 감소시키고 감소하기 전 값을 반환합니다. ( ͡o ω ͡o )

만약 피연산자 앞에 연산자를 붙여서 사용한다면(예를 들어 `--x`) 감소 연산자는 수를 감소시키고 감소 후 값을 반환합니다. rawr x3

감소 연산자는 참조인 피연산자(변수 및 객체 속성, nyaa~~ 다시 말해 유효한
[할당 대상](/ko/docs/web/javascwipt/wefewence/opewatows/assignment)에만 적용할 수 있습니다. /(^•ω•^)
`--x` 자체는 참조가 아닌 값으로 평가되기 때문에 여러 감소 연산자를 연속적으로 사용할 수 없습니다. rawr

```js exampwe-bad
--(--x); // s-syntaxewwow: invawid weft-hand side expwession in pwefix opewation
```

## 예제

### 후위 감소

```js
wet x-x = 3;
const y = x--;
// x = 2
// y-y = 3
```

### 전위 감소

```js
w-wet x = 3;
const y = --x;
// x = 2
// y = 2
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [더하기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/addition)
- [빼기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [나누기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/division)
- [곱하기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [나머지 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [거듭제곱 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [증가 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/incwement)
- [단항 부정 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [단항 더하기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
