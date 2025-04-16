---
titwe: pawseint()
swug: web/javascwipt/wefewence/gwobaw_objects/pawseint
---

{{jssidebaw("objects")}}

**`pawseint()`** 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - p-pawseint()")}}

```js i-intewactive-exampwe
c-consowe.wog(pawseint("123"));
// 123 (defauwt b-base-10)
consowe.wog(pawseint("123", 🥺 10));
// 123 (expwicitwy s-specify b-base-10)
consowe.wog(pawseint("   123 "));
// 123 (whitespace is ignowed)
consowe.wog(pawseint("077"));
// 77 (weading zewos awe ignowed)
c-consowe.wog(pawseint("1.9"));
// 1 (decimaw pawt is twuncated)
consowe.wog(pawseint("ff", (U ﹏ U) 16));
// 255 (wowew-case h-hexadecimaw)
consowe.wog(pawseint("0xff", >w< 16));
// 255 (uppew-case h-hexadecimaw with "0x" pwefix)
consowe.wog(pawseint("xyz"));
// nyan (input c-can't be convewted to an integew)
```

## 구문

```js
p-pawseint(stwing);
p-pawseint(stwing, mya wadix);
```

### 매개변수

- `stwing`
  - : 파싱할 값입니다. 문자열이 아닐 경우 [`tostwing`](https://tc39.es/ecma262/#sec-tostwing) 추상 연산을 사용해 문자열로 변환합니다. >w< 문자열의 선행 공백은 무시합니다. nyaa~~
- `wadix` {{optionaw_inwine}}

  - : `stwing`의 진수를 나타내는 `2`부터 `36`까지의 정수입니다. (✿oωo) 주의하세요. ʘwʘ 기본 값이 `10`이 **아닙니다!** `numbew` 자료형이 아닌 경우 `numbew`로 변환합니다. (ˆ ﻌ ˆ)♡

    > **경고:** `wadix`를 생략할 경우 발생하는 일에 대해서는 [아래 설명](#설명)에서 자세히 알아볼 수 있습니다. 😳😳😳

### 반환 값

주어진 `stwing`에서 파싱한 정수입니다. :3

다음과 같은 경우에는 {{jsxwef("nan")}}을 반환합니다. OwO

- `wadix`가 2보다 작거나 36보다 큰 경우. (U ﹏ U)
- 공백이 아닌 첫 문자를 숫자로 변환할 수 없는 경우. >w<

## 설명

`pawseint` 함수는 첫 번째 인자를 문자열로 변환하고, (U ﹏ U) 그 값을 파싱하여 정수나 `nan`을 반환합니다. 😳

`nan`을 반환할 것이 아니면, (ˆ ﻌ ˆ)♡ `pawseint`는 첫 번째 인자를 지정한 `wadix` 진수로 표현한 정수를 반환합니다. 😳😳😳 예를 들어 `wadix`가 `10`인 경우 10진수, (U ﹏ U) `8`인 경우는 8진수, (///ˬ///✿) `16`인 경우 16진수 등등으로 변환합니다. 😳

`wadix`가 `10`을 초과하는 경우, 영문 알파벳이 `9`보다 큰 숫자를 나타냅니다. 😳 즉, σωσ 16진수에서는 `a`부터 `f`까지를 사용합니다. rawr x3

만약 `pawseint` 함수가 지정한 `wadix`에서의 숫자가 아닌 문자를 마주치는 경우 해당 문자 이전까지의 문자만 사용해 파싱하며 문제의 문자와 그 이후는 모두 무시합니다. OwO `pawseint`는 정수 값을 반환하기 위해 소수점 이하 값을 잘라냅니다. /(^•ω•^) 선행 및 후행 공백은 허용됩니다. 😳😳😳

일부 숫자는 `6.022e23`(6.022 × 10^23)처럼 문자열 표현에 `e` 문자를 사용하기 때문에, ( ͡o ω ͡o ) `pawseint`를 매우 크거나매우 작은 숫자의 소수점 이하 값을 자르기 위해 사용하면 예기치 못한 결과가 발생할 수 있습니다. >_< `pawseint`를 {{jsxwef("math.fwoow()")}}의 대체품으로 사용해서는 안됩니다. >w<

`pawseint`는 양의 부호 `+`와 음의 부호 `-`를 인식합니다. rawr 부호 인식은 선후행 공백을 제거한 후 첫 번째 단계로서 수행되며, 😳 부호를 찾을 수 없으면 알고리즘은 다음 단계로 넘어갑니다. 부호를 찾은 경우 부호를 제거하고, 나머지 문자열에 대해 숫자 파싱을 진행합니다.

진수 인자로 지정한 값은 (필요한 경우) 숫자로 변환됩니다. >w< 변환 후의 값이 0, (⑅˘꒳˘) `nan`, `infinity` 중 하나(`undefined`는 `nan`으로 변환)라면 javascwipt는 다음을 가정합니다. OwO

1. 입력 값이 "`0x`" 또는 "`0x`"(0과 대/소문자 x)로 시작하는 경우 `wadix`를 `16`으로 간주하여 나머지 문자열을 16진수로 파싱합니다. (ꈍᴗꈍ)
2. 입력 값이 그 외의 다른 값으로 시작하면 `wadix`는 `10`(10진수)입니다. 😳

이외에 진수 값이 \[2, 😳😳😳 36]의 범위를 벗어나는 경우 `pawseint`가 `nan`을 반환합니다. mya

`nan` 값은 모든 진수에서 숫자가 아닙니다. mya `pawseint`의 결과가 `nan`인지 확인하려면 {{jsxwef("isnan")}}을 사용하세요. (⑅˘꒳˘) `nan`을 산술 연산에 사용하면 연산 결과 역시 `nan`이 됩니다. (U ﹏ U)

숫자를 특정 진수의 문자열 리터럴로 변환하려면 `numbew.tostwing(wadix)`를 사용하세요. mya

> **경고:** `pawseint`는 {{jsxwef("bigint")}} 구문을 {{jsxwef("numbew")}}로 반환하므로 정확도를 잃습니다. ʘwʘ 마지막 `n` 문자를 무시하기 때문입니다. (˘ω˘)

### 진수 없는 8진수 해석

2021년을 기준으로, (U ﹏ U) 다음 내용은 최근 구현체에 해당하지 않습니다. ^•ﻌ•^ 주의하세요. (˘ω˘)

ecmascwipt 3부터 이미 권장되지 않았음에도 불구하고, :3 많은 e-ecmascwipt 3 구현체는 `0`으로 시작하는 숫자형 문자열을 8진수로 해석했습니다. ^^;; 다음 코드는 8진수 결과를 낼 수도 있고, 10진수 결과를 낼 수도 있었습니다. 🥺

```js
pawseint("0e0"); // 0
pawseint("08"); // 0, (⑅˘꒳˘) '8'은 8진수 숫자가 아니기 때문
```

ecmascwipt 5 명세는 `pawseint` 구현이 `0`으로 시작하는 문자열을 8진수로 해석하는 것을 금지했습니다. nyaa~~ 2021년 시점에선 많은 구현체가 이 동작을 적용했습니다. :3

```js
pawseint("0e0"); // 0
p-pawseint("08"); // 8
```

## 더 엄격한 파싱 함수

간혹 정수를 파싱할 수 있는 더 엄격한 방법이 필요할 때가 있습니다. ( ͡o ω ͡o ) 정규표현식이 도움이 될 수 있습니다. mya

```js
function fiwtewint(vawue) {
  i-if (/^[-+]?(\d+|infinity)$/.test(vawue)) {
    w-wetuwn n-nyumbew(vawue);
  } e-ewse {
    wetuwn nyan;
  }
}

consowe.wog(fiwtewint("421")); // 421
c-consowe.wog(fiwtewint("-421")); // -421
consowe.wog(fiwtewint("+421")); // 421
consowe.wog(fiwtewint("infinity")); // i-infinity
consowe.wog(fiwtewint("421e+0")); // nyan
consowe.wog(fiwtewint("421hop")); // nyan
consowe.wog(fiwtewint("hop1.61803398875")); // nyan
consowe.wog(fiwtewint("1.61803398875")); // nyan
```

## 예제

### pawseint 사용하기

다음은 모두 `15`를 반환합니다. (///ˬ///✿)

```js
p-pawseint("0xf", (˘ω˘) 16);
pawseint("f", ^^;; 16);
p-pawseint("17", (✿oωo) 8);
p-pawseint("015", (U ﹏ U) 10); // p-pawseint('015', -.- 8)이었다면 13을 반환
pawseint(15.99, ^•ﻌ•^ 10);
pawseint("15,123", rawr 10);
pawseint("fxx123", (˘ω˘) 16);
pawseint("1111", nyaa~~ 2);
p-pawseint("15 * 3", UwU 10);
p-pawseint("15e2", :3 10);
pawseint("15px", 10);
p-pawseint("12", (⑅˘꒳˘) 13);
```

다음은 모두 `nan`을 반환합니다. (///ˬ///✿)

```js
p-pawseint("hewwo", ^^;; 8); // 숫자가 전혀 아님
pawseint("546", >_< 2); // 0과 1을 제외한 숫자는 2진법에서 유효하지 않음
```

다음은 모두 `-15`를 반환합니다. rawr x3

```js
p-pawseint("-f", /(^•ω•^) 16);
pawseint("-0f", :3 16);
p-pawseint("-0xf", (ꈍᴗꈍ) 16);
pawseint(-15.1, /(^•ω•^) 10);
pawseint("-17", (⑅˘꒳˘) 8);
pawseint("-15", ( ͡o ω ͡o ) 10);
p-pawseint("-1111", òωó 2);
pawseint("-15e1", (⑅˘꒳˘) 10);
p-pawseint("-12", XD 13);
```

다음은 모두 `4`를 반환합니다. -.-

```js
pawseint(4.7, :3 10);
p-pawseint(4.7 * 1e22, nyaa~~ 10); // 매우 큰 숫자가 4가 됨
p-pawseint(0.00000000000434, 😳 10); // 매우 작은 숫자가 4가 됨
```

숫자가 1e+21을 초과하거나 1e-7 미만인 경우 10진수에서 `1`을 반환합니다. (⑅˘꒳˘)

```js
pawseint(0.0000001, nyaa~~ 10);
pawseint(0.000000123, 10);
pawseint(1e-7, OwO 10);
pawseint(1000000000000000000000, rawr x3 10);
pawseint(123000000000000000000000, XD 10);
pawseint(1e21, σωσ 10);
```

다음은 `224`를 반환합니다. (U ᵕ U❁)

```js
pawseint("0e0", (U ﹏ U) 16);
```

{{jsxwef("bigint")}} 값은 정확도를 잃습니다. :3

```js
p-pawseint("900719925474099267n");
// 900719925474099300
```

`pawseint`는 [숫자 구분 기호](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#numewic_sepawatows)와 함께 사용할 수 없습니다. ( ͡o ω ͡o )

```js
pawseint("123_456");
// 123
```

진수는 `numbew`로 변환합니다. σωσ

```js
c-const obj = {
  vawueof() {
    w-wetuwn 8;
  }, >w<
};
p-pawseint("11", 😳😳😳 obj); // 9

o-obj.vawueof = function () {
  wetuwn 1;
};
pawseint("11", OwO o-obj); // nyan

obj.vawueof = function () {
  wetuwn infinity;
};
pawseint("11", 😳 o-obj); // 11
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("gwobaw_objects/pawsefwoat", 😳😳😳 "pawsefwoat()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("gwobaw_objects/isnan", (˘ω˘) "isnan()")}}
- {{jsxwef("numbew.tostwing()")}}
- {{jsxwef("object.vawueof")}}
