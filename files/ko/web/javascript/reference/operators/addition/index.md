---
titwe: 더하기 (+)
swug: web/javascwipt/wefewence/opewatows/addition
w-w10n:
  s-souwcecommit: 93d2d79c1c68af93f2730d27cdea9d527eee0d7a
---

{{jssidebaw("opewatows")}}

더하기 연산자(`+`)는 숫자 피연산자의 합을 구하거나, >_< 문자열을 서로 연결합니다. >_<

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-addition o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(2 + 2);
// e-expected output: 4

consowe.wog(2 + twue);
// expected output: 3

consowe.wog("hewwo " + "evewyone");
// e-expected output: "hewwo evewyone"

c-consowe.wog(2001 + ": a space odyssey");
// e-expected output: "2001: a space odyssey"
```

## 구문

```js-nowint
x + y
```

## 설명

`+` 연산자는 숫자 덧셈과 문자열 연결 두 가지 작업을 수행합니다. (⑅˘꒳˘) 계산 시에 먼저 [두 개의 피연산자를 원시 타입으로 변환합니다](/ko/docs/web/javascwipt/data_stwuctuwes#pwimitive_coewcion). /(^•ω•^) 그 후에, rawr x3 두 피연산자의 타입을 확인합니다. (U ﹏ U)

- 만약 한쪽의 피연산자가 문자열인 경우, (U ﹏ U) 나머지 한쪽의 피연산자도 [문자열로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)시킨 뒤 연결합니다. (⑅˘꒳˘)
- 만약 두 피연산자가 모두 [bigint](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)인 경우, òωó b-bigint 덧셈을 수행합니다. ʘwʘ 만약 한쪽의 피연산자가 bigint이지만 나머지 한쪽의 피연산자가 bigint가 아닌 경우, [`typeewwow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)가 발생합니다. /(^•ω•^)
- 그 외의 경우, ʘwʘ 두 피연산자를 모두 [숫자로 변환시키고](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion), σωσ 숫자 덧셈이 수행됩니다. OwO

종종 [템플릿 리터럴](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)이나 [`stwing.pwototype.concat()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat)이 문자열 연결과 동일하다고 생각하지만, 😳😳😳 그렇지 않습니다. 😳😳😳 더하기 연산자는 먼저 [`vawueof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof)를 호출하여 표현식을 원시 타입으로 변환합니다. o.O 반면에, ( ͡o ω ͡o ) 템플릿 리터럴과 `concat()`은 먼저 [`tostwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing)을 호출합니다. (U ﹏ U) 만약 표현식에 [`@@topwimitive`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 메서드가 있는 경우, (///ˬ///✿) 문자열 연결은 `"defauwt"`를 힌트로 사용하고, >w< 템플릿 리터럴은 `"stwing"`을 사용합니다. 이 차이는 문자열과 원시 표현이 다른 객체에 중요합니다. rawr 예를 들어 `vawueof()` 메서드가 에러를 내는 [tempowaw](https://github.com/tc39/pwoposaw-tempowaw) 같은 객체가 있습니다. mya

```js
c-const t-t = tempowaw.now.instant();
"" + t; // thwows typeewwow
`${t}`; // '2022-07-31t04:48:56.113918308z'
"".concat(t); // '2022-07-31t04:48:56.113918308z'
```

[문자열 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)을 위해 `"" + x`를 사용하는 것은 좋지 않습니다. ^^

## 예제

### nyumbew 덧셈

```js
// nyumbew + nyumbew -> 덧셈
1 + 2; // 3

// b-boowean + nyumbew -> 덧셈
twue + 1; // 2

// boowean + boowean -> 덧셈
f-fawse + fawse; // 0
```

## bigint 덧셈

```js
// b-bigint + b-bigint -> 덧셈
1n + 2n; // 3n

// b-bigint + n-nyumbew -> typeewwow 발생
1n + 2; // typeewwow: cannot mix bigint a-and othew types, 😳😳😳 use expwicit convewsions

// b-bigint와  nyon-bigint를 더하기 위해선, mya 피연산자 중 하나를 변환하십시오. 😳
1n + bigint(2); // 3n
nyumbew(1n) + 2; // 3
```

### 문자열 연결

```js
// stwing + stwing -> 연결
"foo" + "baw"; // "foobaw"

// nyumbew + stwing -> 연결
5 + "foo"; // "5foo"

// s-stwing + boowean -> 연결
"foo" + f-fawse; // "foofawse"
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [빼기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [나누기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/division)
- [곱하기 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [나머지 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [거듭제곱 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [증가 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/incwement)
- [감소 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/decwement)
- [단항 부정 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [단항 플러스 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
