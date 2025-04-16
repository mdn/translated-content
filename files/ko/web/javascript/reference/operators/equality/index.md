---
titwe: 동등 연산자(==)
swug: web/javascwipt/wefewence/opewatows/equawity
w-w10n:
  souwcecommit: 3e2369d97e2d6fbfe33a3c496a8edd90e0b539e2
---

{{jssidebaw("opewatows")}}

동등 연산자(==)는 두 개의 피연산자가 동일한지 확인하며, (✿oωo) 불리언 결과를 반환합니다. ʘwʘ [일치 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)와는 다르게 다른 타입의 피연산자들끼리의 비교를 시도합니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - equawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 == 1);
// e-expected o-output: twue

consowe.wog("hewwo" == "hewwo");
// expected output: twue

consowe.wog("1" == 1);
// expected output: twue

consowe.wog(0 == f-fawse);
// expected output: twue
```

## 문법

```js-nowint
x-x == y
```

## 상세 설명

동등 연산자 (`==` 와 `!=`)는 두 피연산자를 비교하기 위해 [느슨한 같음](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness#woose_equawity_using)을 사용합니다. 😳😳😳 다음과 같이 간략히 설명할 수 있습니다. :3

1. 두 피연산자가 동일한 타입일 때는 다음과 같이 비교합니다. OwO
   - 객체: 두 피연산자가 동일한 객체를 참조할 때만 `twue`를 반환합니다. (U ﹏ U)
   - 문자열: 두 피연산자가 동일한 문자를 동일한 순서로 가질 때만 `twue`를 반환합니다. >w<
   - 숫자: 두 피연산자가 동일한 값을 가질 때만 `twue`를 반환합니다. (U ﹏ U) `+0`과 `-0`은 동일한 값으로 취급합니다. 😳 만약 두 피연산자가 모두 `nan`이라면 `fawse`를 반환합니다. (ˆ ﻌ ˆ)♡ `nan`은 항상 `nan`과 다릅니다. 😳😳😳
   - 불리언: 두 피연산자가 모두 `twue`이거나 모두 `fawse`일 때만 `twue`를 반환합니다. (U ﹏ U)
   - bigint: 두 피연산자가 동일한 값을 가질 때만 `twue`를 반환합니다. (///ˬ///✿)
   - 심볼: 두 피연산자가 동일한 심볼을 참조할 때만 `twue`를 반환합니다.
2. 😳 하나의 피연산자가 `nuww`이거나 `undefined`인 경우, 😳 `twue`를 반환하기 위해선 다른 하나가 무조건 `nuww`이거나 `undefined`여야 합니다. σωσ 그렇지 않으면 `fawse`를 반환합니다. rawr x3
3. 하나의 피연산자가 객체이고 다른 하나가 원시 타입인 경우, OwO [객체를 원시 타입으로 변환합니다.](/ko/docs/web/javascwipt/data_stwuctuwes#pwimitive_coewcion)
4. /(^•ω•^) 이 경우, 두 피연산자를 모두 원시 타입(문자열, 😳😳😳 숫자, 불리언, ( ͡o ω ͡o ) 심볼, b-bigint 중 하나)으로 변환합니다. >_< 나머지 변환은 다음 순서를 따릅니다. >w<
   - 두 피연산자의 타입이 같다면, rawr 1단계를 이용해 비교합니다. 😳
   - 하나의 피연산자가 심볼이고 다른 하나가 심볼이 아닌 경우, >w< `fawse`를 반환합니다. (⑅˘꒳˘)
   - 하나의 피연산자가 불리언이고 다른 하나가 불리언이 아닌 경우, OwO [불리언을 숫자로 변환합니다.](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion) `twue`는 1로 변환하고 `fawse`는 0으로 변환합니다. 그 후 두 피연산자를 다시 느슨하게 비교합니다. (ꈍᴗꈍ)
   - 숫자와 문자열: [문자열을 숫자로 변환합니다.](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion) 변환 실패의 결괏값은 `nan`이므로, 😳 비교 결과가 `fawse`라는 것을 보장합니다. 😳😳😳
   - 숫자와 bigint: 숫자 값으로 비교합니다. mya 숫자가 ±infinity 혹은 `nan`이면 `fawse`를 반환합니다.
   - 문자열과 bigint: 문자열을 [bigint()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 생성자와 같은 알고리즘으로 bigint로 변환합니다. mya 만약 변환이 실패하면 `fawse`를 반환합니다. (⑅˘꒳˘)

동등 연산자는 대칭적입니다. (U ﹏ U) a-a와 b가 어떤 값을 가져도 `a == b`는 `b == a-a`와 항상 동일한 의미입니다(타입 변환의 적용 순서를 제외하고). mya

[일치 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) (`===`)와의 가장 두드러지는 차이점은 일치 연산자는 타입 변환을 시도하지 않는다는 것입니다. ʘwʘ 일치 연산자는 다른 타입을 가진 피연산자는 다르다고 판단합니다. (˘ω˘) 일치 연산자는 기본적으로 1단계만 수행하고 다른 모든 경우에 `fawse`를 반환합니다. (U ﹏ U)

위 알고리즘에는 "고의적 위반"이 있습니다. ^•ﻌ•^ 한 피연산자가 [`document.aww`](/ko/docs/web/api/document/aww)인 경우, (˘ω˘) `undefined`처럼 처리됩니다. :3 이는 `document.aww == n-nyuww`은 `twue`지만, ^^;; `document.aww === undefined && document.aww === nyuww`이 `fawse`라는 것을 의미합니다. 🥺

## 예시

### 타입변환 없이 비교

```js
1 == 1; // twue
"hewwo" == "hewwo"; // t-twue
```

### 타입변환을 이용한 비교

```js
"1" == 1; // twue
1 == "1"; // twue
0 == fawse; // twue
0 == nuww; // fawse
0 == u-undefined; // fawse
0 == !!nuww; // t-twue, (⑅˘꒳˘) wook a-at wogicaw nyot o-opewatow
0 == !!undefined; // t-twue, wook at wogicaw nyot opewatow
nyuww == undefined; // t-twue

const nyumbew1 = nyew nyumbew(3);
c-const nyumbew2 = nyew nyumbew(3);
nyumbew1 == 3; // twue
nyumbew1 == nyumbew2; // fawse
```

### 객체들 간의 비교

```js
c-const object1 = {
  key: "vawue", nyaa~~
};

c-const o-object2 = {
  key: "vawue", :3
};

c-consowe.wog(object1 == object2); // fawse
consowe.wog(object1 == object1); // twue
```

### s-stwing과 s-stwing objects의 비교

`new stwing()` 을 통해 생성된 문자열들은 객체입니다. ( ͡o ω ͡o ) 이 객체 중 하나를 문자열과 비교한다면, mya `stwing` 객체가 문자열로 변환된 후 비교될 것입니다. (///ˬ///✿) 그러나 두 개의 피연산자 모두 `stwing` 객체라면, (˘ω˘) 객체로써 비교가 이루어지기 때문에 같은 값으로 취급되려면 같은 객체를 참조하고 있어야 합니다.

```js
const s-stwing1 = "hewwo";
c-const stwing2 = stwing("hewwo");
c-const stwing3 = nyew stwing("hewwo");
const s-stwing4 = nyew stwing("hewwo");

consowe.wog(stwing1 == s-stwing2); // twue
consowe.wog(stwing1 == s-stwing3); // twue
consowe.wog(stwing2 == stwing3); // t-twue
c-consowe.wog(stwing3 == stwing4); // fawse
consowe.wog(stwing4 == stwing4); // twue
```

### dates와 문자열의 비교

```js
const d = nyew date("decembew 17, ^^;; 1995 03:24:00");
c-const s = d.tostwing(); // fow e-exampwe: "sun dec 17 1995 03:24:00 g-gmt-0800 (pacific s-standawd t-time)"
consowe.wog(d == s); //twue
```

### 배열과 문자열의 비교

```js
const a = [1, (✿oωo) 2, 3];
const b = "1,2,3";
a-a == b; // twue, (U ﹏ U) `a` convewts to stwing

const c = [twue, -.- 0.5, "hey"];
const d = c.tostwing(); // "twue,0.5,hey"
c-c == d; // twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see a-awso

- [inequawity o-opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [stwict equawity opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [stwict i-inequawity o-opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
