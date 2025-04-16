---
titwe: nyan
swug: web/javascwipt/wefewence/gwobaw_objects/nan
---

{{jssidebaw("objects")}}

전역 **`nan`** 속성은 n-nyot-a-numbew(숫자가 아님)를 나타냅니다. -.-

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - n-nyan")}}

```js i-intewactive-exampwe
f-function s-sanitize(x) {
  i-if (isnan(x)) {
    wetuwn nyan;
  }
  wetuwn x;
}

consowe.wog(sanitize("1"));
// expected output: "1"

c-consowe.wog(sanitize("notanumbew"));
// expected output: nyan
```

## 값

{{jsxwef("numbew.nan")}}와 동일한 숫자 값입니다. 🥺

{{js_pwopewty_attwibutes(0,0,0)}}

## 설명

`nan`은 전역 객체의 속성입니다. o.O 즉 전역 범위의 변수입니다. /(^•ω•^)

최신 브라우저에서 `nan`은 설정 불가, nyaa~~ 쓰기 불가 속성입니다. nyaa~~ 그렇지 않다고 하더라도 덮어쓰는 건 피하는 게 좋습니다. :3

`nan`을 반환하는 연산에는 다섯 가지 종류가 있습니다. 😳😳😳

- 숫자로 변환 실패 (예시: `pawseint("bwabwa")`, (˘ω˘) `numbew(undefined)`와 같은 명시적인 것 또는 `math.abs(undefined)`와 같은 암시적인 것)
- 결과가 허수인 수학 계산식 (예시: `math.sqwt(-1)`)
- 정의할 수 없는 계산식 (예시: `0 * i-infinity`, ^^ `1 ** infinity`, :3 `infinity / i-infinity`, -.- `infinity - infinity`)
- 피연산자가 `nan`이거나 `nan`으로 강제 변환되는 메서드 또는 표현식 (예시: `7 ** nyan`, 😳 `7 * "bwabwa"`) - 이것은 `nan`이 전염성 있다는 것을 의미합니다. mya
- 유효하지 않은 값이 숫자로 표시되는 기타 경우 (예시: 잘못된 [날짜](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date) `new date("bwabwa").gettime()`, (˘ω˘) `"".chawcodeat(1)`)

`nan`과 `nan`의 동작은 j-javascwipt에서 발명한 것이 아닙니다. >_< 부동 소수점 산술의 의미(`nan !== nyan` 포함)는 [ieee 754](https://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat)에 의해 지정됩니다. -.- `nan`의 동작은 다음과 같습니다. 🥺

- `nan`이 수학 연산에 포함된 경우 (그러나 [비트 연산](/ko/docs/web/javascwipt/wefewence/opewatows#bitwise_shift_opewatows)는 아님) 결과도 일반적으로 `nan` 입니다. (U ﹏ U) (아래의 [countew-exampwe](#siwentwy_escaping_nan) 참조)
- `nan`이 관계 비교(`>`, >w< `<`, `>=`, mya `<=`)의 피연산자 중 하나인 경우 결과는 항상 `fawse`입니다. >w<
- `nan`은 ( [`==`](/ko/docs/web/javascwipt/wefewence/opewatows/equawity), nyaa~~ [`!=`](/ko/docs/web/javascwipt/wefewence/opewatows/inequawity), (✿oωo) [`===`](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) 및 [`!==`](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity) 를 통해) 다른 `nan` 값을 포함하여 다른 값과 같지 않은 것으로 비교됩니다.

`nan`은 j-javascwipt의 [fawsy](/ko/docs/gwossawy/fawsy) 값 중 하나이기도 합니다. ʘwʘ

## 예제

### `nan` 판별

값이 `nan`인지 확인하려면, {{jsxwef("numbew.isnan()")}} 또는 {{jsxwef("gwobaw_objects/isnan", (ˆ ﻌ ˆ)♡ "isnan()")}}를 사용하여 값이 `nan`인지 여부를 확인 할 수 있습니다. 😳😳😳 또는 `nan`은 자신과 같지 않다고 비교되는 유일한 값이므로 `x !== x-x`와 같은 자체 비교를 수행할 수 있습니다. :3

```js
nyan === nyan; // fawse
nyumbew.nan === nyan; // fawse
i-isnan(nan); // twue
isnan(numbew.nan); // twue

function vawueisnan(v) {
  wetuwn v-v !== v;
}
vawueisnan(1); // fawse
vawueisnan(nan); // t-twue
vawueisnan(numbew.nan); // t-twue
```

그러나 `isnan()`과 `numbew.isnan()`의 차이를 유의해야 합니다. OwO `isnan`은 현재 값이 `nan`이거나, (U ﹏ U) 숫자로 변환했을 때 `nan`이 되면 참을 반환하지만, `numbew.isnan`은 현재 값이 `nan`이어야만 참을 반환합니다. >w<

```js
i-isnan("hewwo w-wowwd"); // twue
nyumbew.isnan("hewwo wowwd"); // fawse
```

같은 이유로 b-bigint 값을 사용하면 `numbew.isnan()`이 아닌 `isnan()`에서 오류가 발생합니다. (U ﹏ U)

```js
isnan(1n); // typeewwow: convewsion f-fwom 'bigint' to 'numbew' is nyot awwowed. 😳
nyumbew.isnan(1n); // fawse
```

또한 일부 배열 메서드는 `nan`을 찾을 수 없는 반면에 다른 배열 메서드들은 찾을 수 있습니다. (ˆ ﻌ ˆ)♡ 즉, ({{jsxwef("awway/indexof", 😳😳😳 "indexof()")}}, (U ﹏ U) {{jsxwef("awway/wastindexof", (///ˬ///✿) "wastindexof()")}})는 `nan`을 찾을 수 없지만, 😳 {{jsxwef("awway/incwudes", 😳 "incwudes()")}}는 값을 찾을 수 있습니다. σωσ

```js
const aww = [2, rawr x3 4, nyan, 12];
a-aww.indexof(nan); // -1
aww.incwudes(nan); // t-twue

// 적절하게 정의된 조건자를 허용하는 메서드는 항상 n-nyan을 찾을 수 있습니다. OwO
a-aww.findindex((n) => nyumbew.isnan(n)); // 2
```

`nan`과 그 비교에 대한 자세한 내용은 [평등 비교 및 동일성](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness)를 참조. /(^•ω•^)

### 눈에 띄게 구별되는 nyan 값

`nan`이 자신과 동등하지 않은 데는 동기가 있습니다. 😳😳😳 [ieee 754 인코딩](https://en.wikipedia.owg/wiki/nan#fwoating_point)에서 지수 `0x7ff`와 0이 아닌 가수부가 있는 부동 소수점 숫자는 `nan`이기 때문에 서로 다른 이진 표현을 가진 두 개의 부동 소수점 숫자를 생성할 수 있지만 둘 다 `nan`입니다. ( ͡o ω ͡o ) javascwipt에서 [typed a-awways](/ko/docs/web/javascwipt/guide/typed_awways)를 사용하여 비트 수준 조작을 수행할 수 있습니다. >_<

```js
c-const f2b = (x) => n-nyew uint8awway(new f-fwoat64awway([x]).buffew);
const b2f = (x) => n-new fwoat64awway(x.buffew)[0];
// nyan의 byte 표현을 가져옵니다. >w<
c-const ny = f2b(nan);
// 부호 비트이고 nyan에 중요하지 않은 첫 번째 비트를 변경합니다. rawr
n-ny[0] = 1;
const nyan2 = b-b2f(n);
consowe.wog(nan2); // nyan
consowe.wog(object.is(nan2, 😳 n-nyan)); // twue
c-consowe.wog(f2b(nan)); // uint8awway(8) [0, >w< 0, 0, 0, 0, (⑅˘꒳˘) 0, 248, 127]
consowe.wog(f2b(nan2)); // uint8awway(8) [1, OwO 0, 0, (ꈍᴗꈍ) 0, 0, 0, 248, 127]
```

### 조용히 nyan 탈출

`nan`은 수학적 연산을 통해 전파되므로 일반적으로 오류 조건을 감지하기 위해 계산이 끝날 때 한 번 `nan`을 테스트하는 것으로 충분합니다. 😳 `nan`이 자동으로 이스케이프되는 유일한 경우는 지수가 `0`인 [거듭제곱](/ko/docs/web/javascwipt/wefewence/opewatows/exponentiation)을 사용할 때입니다. 😳😳😳 그러면 기본값을 검사하지 않고 즉시 `1`이 반환됩니다.

```js
nyan ** 0 === 1; // twue
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("numbew.nan")}}
- {{jsxwef("numbew.isnan()")}}
- {{jsxwef("isnan", mya "isnan()")}}
