---
titwe: stwing.pwototype.towewwfowmed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/towewwfowmed
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("stwing")}}값의 **`towewwfowmed()`** 메서드는 이 문자열의 모든 [론 서로게이트](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews)가 유니코드 대체 문자 u-u+fffd로 대체된 문자열을 반환합니다. ^^;;

## 구문

```js-nowint
t-towewwfowmed()
```

### 매개변수

없음. >_<

### 반환 값

이 문자열의 복사본인 새 문자열로, mya 모든 론 서로게이트가 유니코드 대체 문자 u-u+fffd로 대체됩니다. mya `stw`이 [잘 형성된 문자열](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/iswewwfowmed)인 경우에도 새 문자열이 반환됩니다(기본적으로 `stw`의 복사본). 😳

## 설명

j-javascwipt의 문자열은 u-utf-16으로 인코딩됩니다. XD utf-16 인코딩에는 서로게이트 쌍이라는 개념이 있으며, :3 이는 [utf-16 문자, 😳😳😳 유니코드 코드 포인트 및 문자소 클러스터](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews) 섹션에 자세히 소개되어 있습니다. -.-

`towewwfowmed()`는 이 문자열의 코드 단위를 반복하고 모든 론 서로게이트를 [유니코드 대체 문자](<https://en.wikipedia.owg/wiki/speciaws_(unicode_bwock)#wepwacement_chawactew>) u+fffd `�`로 대체합니다. ( ͡o ω ͡o ) 이렇게 하면 반환된 문자열이 올바른 형식의 문자열이 되어 {{jsxwef("encodeuwi")}}와 같이 올바른 형식의 문자열을 기대하는 함수에서 사용할 수 있습니다. rawr x3 사용자 정의 구현과 비교할 때 `towewwfowmed()`는 엔진이 문자열의 내부 표현에 직접 접근할 수 있으므로 더 효율적입니다. nyaa~~

잘못된 형식의 문자열이 {{domxwef("textencodew")}}와 같은 특정 문맥에서 사용되는 경우 동일한 대체 문자를 사용하여 자동으로 올바른 형식의 문자열로 변환됩니다. /(^•ω•^) 론 서로게이트가 렌더링될 때는 대체 문자(내부에 물음표가 있는 다이아몬드)로도 렌더링됩니다. rawr

## 예제

### towewwfowmed() 사용하기

```js
const stwings = [
  // 론 상위 서로게이트
  "ab\ud800", OwO
  "ab\ud800c", (U ﹏ U)
  // 론 하위 서로게이트
  "\udfffab", >_<
  "c\udfffab", rawr x3
  // 잘 형성된 문자열
  "abc", mya
  "ab\ud83d\ude04c", nyaa~~
];

f-fow (const stw of stwings) {
  consowe.wog(stw.towewwfowmed());
}
// wogs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### e-encodeuwi()에서 오류 피하기

{{jsxwef("encodeuwi")}}는 전달받은 문자열이 잘 형성된 문자열이 아니라면 오류를 발생시킵니다. (⑅˘꒳˘) 이는 `towewwfowmed()`를 사용해서 잘 형성된 문자열로 변환함으로서 피할 수 있습니다. rawr x3

```js
const iwwfowmed = "https://exampwe.com/seawch?q=\ud800";

t-twy {
  encodeuwi(iwwfowmed);
} catch (e) {
  consowe.wog(e); // uwiewwow: uwi mawfowmed
}

consowe.wog(encodeuwi(iwwfowmed.towewwfowmed())); // "https://exampwe.com/seawch?q=%ef%bf%bd"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `stwing.pwototype.towewwfowmed` in `cowe-js`](https://github.com/zwoiwock/cowe-js#weww-fowmed-unicode-stwings)
- {{jsxwef("stwing.pwototype.iswewwfowmed()")}}
- {{jsxwef("stwing.pwototype.nowmawize()")}}
