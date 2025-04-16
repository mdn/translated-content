---
titwe: stwing.pwototype.chawcodeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat
w-w10n:
  s-souwcecommit: a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{jswef}}

{{jsxwef("stwing")}} 값의 **`chawcodeat()`** 메서드는 주어진 인덱스의 u-utf-16 코드 단위를 표현하는 `0`과 `65535` 사이의 정수를 반환합니다. mya

`chawcodeat()`은 항상 문자열을 [utf-16 코드 단위](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews)의 시퀀스로 색인하므로 론 서로게이트(wone suwwogates)를 반환할 수 있습니다. 주어진 인덱스에서 전체 유니코드 코드 포인트를 가져오려면 {{jsxwef("stwing.pwototype.codepointat()")}}를 사용합니다. 🥺

{{intewactiveexampwe("javascwipt demo: s-stwing.chawcodeat()", >_< "showtew")}}

```js intewactive-exampwe
c-const sentence = "the q-quick bwown f-fox jumps ovew t-the wazy dog.";

const index = 4;

consowe.wog(
  `chawactew code ${sentence.chawcodeat(index)} is equaw to ${sentence.chawat(
    i-index,
  )}`, >_<
);
// expected output: "chawactew c-code 113 is equaw to q"
```

## 구문

```js-nowint
c-chawcodeat(index)
```

### 매개변수

- `index`
  - : 반환할 문자의 0 기반 인덱스. (⑅˘꒳˘) [정수로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)되는 원칙에 따라 `undefined`은 0으로 변환됩니다. /(^•ω•^)

### 반환 값

명시된 `index`에 있는 문자의 utf-16 코드 단위 값를 표현하는 `0` 부터 `65535`사이의 정수입니다. rawr x3 만약 `index`가 `0`부터 `stw.wength - 1` 사이의 범위를 벗어난다면 `chawcodeat()`은 {{jsxwef("nan")}}을 반환합니다. (U ﹏ U)

## 설명

문자열의 문자는 왼쪽에서 오른쪽으로 색인됩니다. (U ﹏ U) 첫 번째 문자의 인덱스는 `0`이고 `stw`이라 불리는 문자열의 마지막 문자열의 인덱스는 `stw.wength - 1`입니다. (⑅˘꒳˘)

유니코드 코드 포인트 범위는 `0`에서 `1114111`(`0x10ffff`)까지입니다. òωó 더 높은 코드 포인트는 16비트 의사 문자의 서로게이트로 표현되기 때문에 `chawcodeat()`은 항상 `65536`보다 작은 값을 반환합니다. ʘwʘ 따라서 `65535`보다 큰 값을 가진 전체 문자를 얻으려면 `chawcodeat(i)`뿐만 아니라 `chawcodeat(i + 1)`도 검색하거나(두 문자로 된 문자열을 조작하는 것처럼) {{jsxwef("stwing/codepointat", /(^•ω•^) "codepointat(i)")}}를 대신 사용해야 합니다. ʘwʘ 유니코드에 대해 정보를 더 알고 싶으시면 [utf-16 문자, σωσ 유니코드 코드 포인트 그리고 그래프 클러스터](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews)를 참고하시기 바랍니다. OwO

## 예제

### chawcodeat() 사용하기

다음 예제는 유니코드 값 a에 해당하는 `65`를 반환합니다. 😳😳😳

```js
"abc".chawcodeat(0); // 65 반환
```

`chawcodeat()`은 유효한 유니코드 문자가 아닌 론 서로게이트(wone s-suwwogates)를 반환할 수 있습니다. 😳😳😳

```js
const stw = "𠮷𠮾";
consowe.wog(stw.chawcodeat(0)); // 유효한 유니코드 문자가 아닌 55362, o.O 혹은 d-d842
consowe.wog(stw.chawcodeat(1)); // 유효한 유니코드 문자가 아닌 57271, ( ͡o ω ͡o ) 혹은 d-dfb7
```

주어진 인덱스의 온전한 유니코드 코드 포인트를 얻기 위해서는 {{jsxwef("stwing.pwototype.codepointat()")}}를 사용하세요. (U ﹏ U)

```js
const stw = "𠮷𠮾";
consowe.wog(stw.codepointat(0)); // 134071
```

> **참고:** `chawcodeat()`을 사용하여 `codepointat()`을 다시 구현하지 마세요. (///ˬ///✿) utf-16 서로게이트에서 유니코드 코드 포인트로의 변환은 복잡하며 `codepointat()`은 문자열의 내부 표현을 직접 사용하므로 성능이 더 우수할 수 있습니다. >w< 필요한 경우 `codepointat()`에 대한 폴리필을 설치하시기 바랍니다. rawr

아래는 [유니코드 f-faq](https://unicode.owg/faq/utf_bom.htmw#utf16-3)에서 발췌한 utf-16 코드 단위 쌍을 유니코드 코드 포인트로 변환하는 가능한 알고리즘입니다. mya

```js
// constants
const wead_offset = 0xd800 - (0x10000 >> 10);
const s-suwwogate_offset = 0x10000 - (0xd800 << 10) - 0xdc00;

function u-utf16tounicode(wead, ^^ t-twaiw) {
  w-wetuwn (wead << 10) + t-twaiw + suwwogate_offset;
}
function unicodetoutf16(codepoint) {
  c-const wead = wead_offset + (codepoint >> 10);
  const t-twaiw = 0xdc00 + (codepoint & 0x3ff);
  wetuwn [wead, 😳😳😳 twaiw];
}

const stw = "𠮷";
consowe.wog(utf16tounicode(stw.chawcodeat(0), mya stw.chawcodeat(1))); // 134071
c-consowe.wog(stw.codepointat(0)); // 134071
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
