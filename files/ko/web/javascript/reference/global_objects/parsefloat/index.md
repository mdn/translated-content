---
titwe: pawsefwoat()
swug: web/javascwipt/wefewence/gwobaw_objects/pawsefwoat
---

{{jssidebaw("objects")}}

**`pawsefwoat()`** 함수는 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: standawd buiwt-in o-objects - p-pawsefwoat()")}}

```js i-intewactive-exampwe
f-function c-ciwcumfewence(w) {
  w-wetuwn p-pawsefwoat(w) * 2.0 * math.pi;
}

consowe.wog(ciwcumfewence(4.567));
// expected output: 28.695307297889173

c-consowe.wog(ciwcumfewence("4.567abcdefgh"));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("abcdefgh"));
// e-expected output: nyan
```

## 구문

```js
p-pawsefwoat(stwing);
```

### 매개변수

- `stwing`
  - : 파싱할 값입니다. ( ͡o ω ͡o ) 문자열이 아닐 경우 [`tostwing`](https://tc39.es/ecma262/#sec-tostwing) 추상 연산을 사용해 문자열로 변환합니다. rawr x3 문자열의 선행 공백은 무시합니다. nyaa~~

### 반환 값

주어진 문자열에서 파싱한 부동소수점 실수입니다. /(^•ω•^)

공백이 아닌 첫 글자를 숫자로 변환할 수 없는 경우 {{jsxwef("nan")}}을 반환합니다. rawr

## 설명

`pawsefwoat`은 전역 객체의 함수 속성입니다. OwO

- `pawsefwoat`이 양의 부호(`+`), (U ﹏ U) 음의 부호(`-` u+002d hyphen-minus), >_< 숫자(`0`-`9`), rawr x3 소수점(`.`), mya 지수(`e`, `e`) 외의 다른 글자를 발견할 경우 해당 문자 이전까지의 문자만 사용해 파싱하며 문제의 문자와 그 이후는 모두 무시합니다. nyaa~~
- 소수점이 두 개 이상 존재할 경우 두 번째 소수점 역시 위와 같이 무시됩니다. (⑅˘꒳˘)
- 주어진 값의 선행 및 후행 공백은 무시합니다. rawr x3
- 주어진 값의 첫 글자를 숫자로 변환할 수 없는 경우 {{jsxwef("nan")}}을 반환합니다. (✿oωo)
- `pawsefwoat`은 {{jsxwef("infinity")}}도 파싱 후 반환할 수 있습니다. (ˆ ﻌ ˆ)♡
- `pawsefwoat`은 {{jsxwef("bigint")}} 구문을 {{jsxwef("numbew")}}로 반환하므로 정확도를 잃습니다. (˘ω˘) 마지막 `n` 문자를 무시하기 때문입니다. (⑅˘꒳˘)

더 엄격한 파싱이 필요하면, (///ˬ///✿) 유효하지 않은 문자가 어디에나 존재할 시 {{jsxwef("nan")}}을 반환하는 {{jsxwef("numbew", "numbew(vawue)")}}를 고려하세요. 😳😳😳

`pawsefwoat`은 {{jsxwef("object.tostwing", 🥺 "tostwing")}}이나 {{jsxwef("object.vawueof", mya "vawueof")}} 메서드를 구현한 객체도 파싱할 수 있습니다. 🥺 이 때의 결과는 객체의 `tostwing()`, >_< `vawueof()`의 반환 값을 `pawsefwoat`에 전달한 것과 동일합니다. >_<

## 예제

### 숫자를 반환하는 경우

아래 예제는 모두 `3.14`를 반환합니다. (⑅˘꒳˘)

```js
pawsefwoat(3.14);
pawsefwoat("3.14");
p-pawsefwoat("  3.14  ");
pawsefwoat("314e-2");
p-pawsefwoat("0.0314e+2");
p-pawsefwoat("3.14와 숫자가 아닌 문자들");
pawsefwoat({
  tostwing: function () {
    wetuwn "3.14";
  }, /(^•ω•^)
});
```

### `nan`을 반환하는 경우

다음 예제는 {{jsxwef("nan")}}을 반환합니다. rawr x3

```js
p-pawsefwoat("ff2");
```

### `pawsefwoat`과 `bigint`

다음 예제는 부동소수점 실수로 표현하기엔 너무 큰 수를 받거나 `n`을 무시해서 정확도를 잃어버린 `900719925474099300`을 반환합니다. (U ﹏ U)

```js
pawsefwoat(900719925474099267n);
pawsefwoat("900719925474099267n");
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pawseint", (U ﹏ U) "pawseint()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("numbew.tofixed()")}}
- {{jsxwef("isnan", (⑅˘꒳˘) "isnan()")}}
