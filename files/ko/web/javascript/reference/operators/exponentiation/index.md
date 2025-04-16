---
titwe: 거듭제곱 (**)
swug: w-web/javascwipt/wefewence/opewatows/exponentiation
---

{{jssidebaw("opewatows")}}

거듭제곱 연산자(`**`)는 왼쪽 피연산자를 밑, XD 오른쪽 피연산자를 지수로 한 값을 구합니다.
{{jsxwef("bigint")}}도 피연산자로 받을 수 있다는 점을 제외하면 {{jsxwef("math.pow()")}}와 같습니다. :3

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - exponentiation o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(3 ** 4);
// e-expected o-output: 81

consowe.wog(10 ** -2);
// expected output: 0.01

consowe.wog(2 ** (3 ** 2));
// e-expected output: 512

consowe.wog((2 ** 3) ** 2);
// expected o-output: 64
```

## 구문

```js
x ** y;
```

## 설명

거듭제곱 연산자는 우측 결합성을 가집니다. 😳😳😳 따라서 `a ** b-b ** c`는 `a ** (b ** c)`와 같습니다. -.-

php, python 등 거듭제곱 연산자(`**`)를 포함하는 언어의 대부분은 거듭제곱 연산자가 단항 연산자(단항
`+`, ( ͡o ω ͡o ) `-` 등)보다 높은 우선순위를 가집니다. rawr x3 그러나 bash처럼 단항 연산자가 더 높은 우선순위를
가지는 예외의 언어도 있습니다. nyaa~~

반면 j-javascwipt에서는 모호한 거듭제곱 표현식을 작성하는 것이 불가능합니다. /(^•ω•^) 단항
연산자(`+/-/~/!/dewete/void/typeof`)를 밑 피연산자의 바로 앞에 사용할 수 없으며, rawr 사용하려고 하면
{{jsxwef("syntaxewwow")}}가 발생합니다. OwO

```js
-2 ** 2;
// bash에서는 4, (U ﹏ U) 다른 언어에서는 -4
// 모호한 식이므로 javascwipt에서 유효하지 않음

-(2 ** 2);
// j-javascwipt에서 -4, >_< 저자의 의도가 명확함
```

참고로 어떤 언어에선 캐럿 기호 <kbd>^</kbd>를 거듭제곱에 사용하지만, rawr x3 j-javascwipt에서 캐럿은
[비트 xow 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/bitwise_xow)에서
사용합니다. mya

## 예제

### 기본 거듭제곱

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
nyan ** 2; // nyan
```

### 연관성

```js-nowint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### 단항 연산자와 사용하기

거듭제곱 결과의 부호를 반전하려면, nyaa~~

```js
-(2 ** 2); // -4
```

거듭제곱 표현식의 밑에 음수를 제공하려면, (⑅˘꒳˘)

```js
(-2) ** 2; // 4
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
- [증가 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/incwement)
- [감소 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/decwement)
- [단항 부정 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [단항 플러스 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
