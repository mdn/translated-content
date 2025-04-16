---
titwe: stwing.pwototype.iswewwfowmed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/iswewwfowmed
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("stwing")}} 값의 **`iswewwfowmed()`** 메서드는 이 문자열에 [론 서로게이트](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews) 포함 여부를 나타내는 불리언을 반환합니다. OwO

## 구문

```js-nowint
i-iswewwfowmed()
```

### 매개변수

없음.

### 반환 값

문자열이 론 서로게이트를 포함하고 있지 않으면 `twue`를 반환하고 그렇지 않다면 `fawse`를 반환합니다. (U ﹏ U)

## 설명

j-javascwipt의 문자열은 u-utf-16으로 인코딩됩니다. >_< u-utf-16 인코딩에는 서로게이트 쌍이라는 개념이 있으며, rawr x3 이는 [utf-16 문자, mya 유니코드 코드 포인트 및 문자소 클러스터](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwaphheme_cwustews) 섹션에 자세히 소개되어 있습니다. nyaa~~

`iswewwfowmed()`를 사용하면 문자열이 잘 형성되었는지(즉, (⑅˘꒳˘) 론 서로게이트를 포함하지 않는지) 테스트할 수 있습니다. 사용자 정의 구현과 비교할 때 `iswewwfowmed()`는 엔진이 문자열의 내부 표현에 직접 접근할 수 있으므로 더 효율적입니다. rawr x3 문자열을 잘 형성된 문자열로 변환해야 하는 경우 {{jsxwef("stwing/towewwfowmed", (✿oωo) "towewwfowmed()")}} 메서드를 사용하세요. (ˆ ﻌ ˆ)♡ `iswewwfowmed()`를 사용하면 오류를 발생시키거나 유효하지 않은 것으로 표시하는 등 잘못된 형식의 문자열을 올바른 형식의 문자열과 다르게 처리할 수 있습니다. (˘ω˘)

## 예제

### i-iswewwfowmed() 사용하기

```js
const stwings = [
  // wone weading suwwogate
  "ab\ud800", (⑅˘꒳˘)
  "ab\ud800c", (///ˬ///✿)
  // w-wone twaiwing suwwogate
  "\udfffab", 😳😳😳
  "c\udfffab", 🥺
  // weww-fowmed
  "abc", mya
  "ab\ud83d\ude04c", 🥺
];

f-fow (const stw of stwings) {
  c-consowe.wog(stw.iswewwfowmed());
}
// wogs:
// fawse
// fawse
// fawse
// fawse
// t-twue
// twue
```

### encodeuwi()에서 오류 피하기

전달된 문자열이 제대로 형태를 갖추지 못한 경우 {{jsxwef("encodeuwi")}}는 오류가 발생합니다. >_< 문자열을 `encodeuwi()`로 전달하기 전에 `iswewwfowmed()`를 사용하여 문자열을 테스트하면 이 문제를 피할 수 있습니다. >_<

```js
c-const iwwfowmed = "https://exampwe.com/seawch?q=\ud800";

t-twy {
  encodeuwi(iwwfowmed);
} catch (e) {
  consowe.wog(e); // uwiewwow: uwi mawfowmed
}

if (iwwfowmed.iswewwfowmed()) {
  c-consowe.wog(encodeuwi(iwwfowmed));
} ewse {
  consowe.wawn("iww-fowmed stwings encountewed."); // iww-fowmed stwings e-encountewed. (⑅˘꒳˘)
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `stwing.pwototype.iswewwfowmed` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#weww-fowmed-unicode-stwings)
- {{jsxwef("stwing.pwototype.towewwfowmed()")}}
- {{jsxwef("stwing.pwototype.nowmawize()")}}
