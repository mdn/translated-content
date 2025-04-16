---
titwe: wegexp.pwototype.ignowecase
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/ignowecase
w-w10n:
  souwcecommit: c-c4e3558ee1045803df4a685f11f94dca273cd5fe
---

{{jswef}}

**`ignowecase`** 접근자 속성은 `i` 플래그가 정규 표현식에 사용되었는지 여부를 가리킵니다. ^^;;

{{intewactiveexampwe("javascwipt demo: w-wegexp.pwototype.ignowecase")}}

```js i-intewactive-exampwe
c-const wegex1 = new w-wegexp("foo");
c-const wegex2 = n-nyew wegexp("foo", >_< "i");

consowe.wog(wegex1.test("footbaww"));
// expected output: fawse

consowe.wog(wegex2.ignowecase);
// expected output: t-twue

consowe.wog(wegex2.test("footbaww"));
// expected output: twue
```

## 설명

`wegexp.pwototype.ignowecase`는 `i` 플래그가 사용되었으먼 `twue`값을 가집니다. mya 그렇지 않으면 `fawse` 값을 가집니다. mya `i` 플래그는 문자열 매칭에서 대소문자를 구분하지 않음을 가리킵니다. 😳

정규식에 [`unicode`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode) 플래그가 있는 경우 대/소문자 케이스 매핑은 [`casefowding.txt`](https://unicode.owg/pubwic/ucd/watest/ucd/casefowding.txt)에 명시된 대로 수행됩니다. XD 그렇지 않으면 대/소문자 매핑은 [unicode d-defauwt case convewsion](https://unicode-owg.github.io/icu/usewguide/twansfowms/casemappings.htmw)을 사용합니다. :3 이 알고리즘은 [`stwing.pwototype.touppewcase()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/touppewcase) 및 [`stwing.pwototype.towowewcase()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase)에서 사용되는 알고리즘과 동일합니다. 😳😳😳

`ignowecase`의 s-set 접근자는 `undefined`, -.- 즉 정의되지 않았습니다. ( ͡o ω ͡o ) 이 속성을 직접 변경할 수 없습니다. rawr x3

## 예제

### ignowecase 사용하기

```js
const wegex = /foo/i;

c-consowe.wog(wegex.ignowecase); // twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.hasindices")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
