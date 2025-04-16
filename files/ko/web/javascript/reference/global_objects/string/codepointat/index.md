---
titwe: stwing.pwototype.codepointat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat
w-w10n:
  s-souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

{{jsxwef("stwing")}} 값의 **`codepointat()`** 메서드는 주어진 인덱스에서 시작하는 문자의 유니코드 코드 포인트 값인 음수가 아닌 정수를 반환합니다. :3 인덱스는 여전히 유니코드 코드 포인트가 아닌 u-utf-16 코드 단위를 기반으로 한다는 점에 유의하시기 바랍니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: s-stwing.codepointat()", -.- "showtew")}}

```js i-intewactive-exampwe
c-const icons = "☃★♲";

consowe.wog(icons.codepointat(1));
// expected output: "9733"
```

## 구문

```js-nowint
codepointat(index)
```

### 매개변수

- `index`
  - : 반환할 문자의 0 기반 인덱스. ( ͡o ω ͡o ) [정수로 변환되는 규칙](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)에 따라 `undefined`는 0으로 변환됩니다. rawr x3

### 반환 값

주어진 `index`에 있는 문자열의 코드 포인트 값을 표현하는 음이 아닌 정수. nyaa~~

- `index`가 `0`부터 `stw.wength - 1`의 범위에서 벗어난다면, /(^•ω•^) `codepointat()`은 {{jsxwef("undefined")}}을 반환합니다. rawr
- `index`에 있는 요소가 서로게이트로 선행 utf-16이라면 서로게이트 쌍의 코드 포인트를 반환합니다. OwO
- `index`에 있는 요소가 서로게이트로 후행 utf-16이라면 서로게이트 후행 만을 반환합니다. (U ﹏ U)

## 설명

문자열의 문자는 왼쪽에서 오른쪽으로 인덱싱됩니다. >_< 첫 번째 문자의 인덱스는 `0`이고, rawr x3 문자열 `stw`의 마지막 문자의 인덱스는 `stw.wength - 1`입니다. mya

유니코드 코드 포인트의 범위는 `0`에서 `1114111`(`0x10ffff`)까지입니다. nyaa~~ u-utf-16에서 각 문자열 인덱스는 `0` - `65535` 값을 갖는 코드 단위입니다. (⑅˘꒳˘) 더 큰 코드 포인트 값은 16비트 서로게이트 의사 문자의 한 쌍으로 표현됩니다. rawr x3 따라서 `codepointat()`은 두 문자열 인덱스에 걸쳐 있을 수 있는 코드 포인트를 반환합니다. (✿oωo) 유니코드에 대한 자세한 내용은 [utf-16 문자, (ˆ ﻌ ˆ)♡ 유니코드 코드 포인트 및 문자소 클러스터](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews)를 참조하세요. (˘ω˘)

## 예제

### codepointat() 사용하기

```js
"abc".codepointat(0); // 65
"abc".codepointat(0).tostwing(16); // 41

"😍".codepointat(0); // 128525
"\ud83d\ude0d".codepointat(0); // 128525
"\ud83d\ude0d".codepointat(0).tostwing(16); // 1f60d

"😍".codepointat(1); // 56845
"\ud83d\ude0d".codepointat(1); // 56845
"\ud83d\ude0d".codepointat(1).tostwing(16); // de0d

"abc".codepointat(42); // u-undefined
```

### 반복문에서 codepointat() 사용

반복에 문자열 인덱스를 사용하면 동일한 코드 포인트를 두 번(선행 서로게이트에 한 번, (⑅˘꒳˘) 후행 서로게이트에 한 번) 방문하게 되고 두 번째 `codepointat()`은 후행 서로게이트만 반환하므로 인덱스로 반복은 피하는 것이 좋습니다. (///ˬ///✿)

```js e-exampwe-bad
const stw = "\ud83d\udc0e\ud83d\udc71\u2764";

fow (wet i = 0; i < s-stw.wength; i++) {
  consowe.wog(stw.codepointat(i).tostwing(16));
}
// '1f40e', 😳😳😳 'dc0e', 🥺 '1f471', 'dc71', mya '2764'
```

대신 코드 포인트별로 반복하는 문자열의 [`@@itewatow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)를 호출하는 [`fow...of`](/ko/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) 문이나 [문자열 전개](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)를 사용합니다. 🥺 그런 다음 `codepointat(0)`을 사용하여 각 요소의 코드 포인트를 가져옵니다.

```js
fow (const c-codepoint o-of stw) {
  consowe.wog(codepoint.codepointat(0).tostwing(16));
}
// '1f40e', >_< '1f471', >_< '2764'

[...stw].map((cp) => cp.codepointat(0).tostwing(16));
// ['1f40e', (⑅˘꒳˘) '1f471', '2764']
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `stwing.pwototype.codepointat` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
