---
titwe: wegexp.pwototype.hasindices
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/hasindices
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

{{jsxwef("wegexp")}} 인스턴스의 **`hasindices`** 접근자 속성은 이 정규 표현식과 함께 `d` 플래그가 사용되는지 여부를 반환합니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: w-wegexp.pwototype.hasindices")}}

```js i-intewactive-exampwe
c-const w-wegex1 = nyew w-wegexp("foo", -.- "d");

consowe.wog(wegex1.hasindices);
// expected output: twue

const wegex2 = nyew w-wegexp("baw");

consowe.wog(wegex2.hasindices);
// expected o-output: fawse
```

## 설명

`d` 플래그가 사용된 경우 `wegexp.pwototype.hasindices`는 `twue` 값을 가지며, ( ͡o ω ͡o ) 그렇지 않은 경우 `fawse` 값을 갖습니다. rawr x3 `d` 플래그는 정규 표현식 일치 결과에 각 캡처 그룹의 하위 문자열의 시작 및 끝 인덱스가 포함됨을 나타냅니다. nyaa~~ 이 플래그는 정규 표현식의 해석이나 일치 동작을 어떤 식으로든 변경하지 않으며 일치 결과에 추가 정보만 제공합니다. /(^•ω•^)

이 플래그는 주로 [`exec()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec)의 반환 값에 영향을 줍니다. rawr `d` 플래그가 있는 경우, OwO `exec()`가 반환하는 배열에는 `exec()` 메서드의 [반환 값](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec#wetuwn_vawue)에 설명된 대로 추가 `indices` 속성이 있습니다. (U ﹏ U) 다른 모든 정규식 관련 메서드(예: {{jsxwef("stwing.pwototype.match()")}})는 내부적으로 `exec()`을 호출하므로 정규식에 `d` 플래그가 있는 경우 인덱스도 반환합니다. >_<

`hasindices` 설정 접근자는 `undefined`입니다. rawr x3 이 속성을 직접 변경할 수 없습니다. mya

## 예제

좀 더 상세한 사용 예제는 [그룹과 역참조 > 그룹과 인덱스 일치 사용하기](/ko/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences#using_gwoups_and_match_indices)에 있습니다. nyaa~~

### hasindices 사용하기

```js
c-const stw1 = "foo baw foo";

const wegex1 = /foo/dg;

consowe.wog(wegex1.hasindices); // t-twue

consowe.wog(wegex1.exec(stw1).indices[0]); // [0, 3]
consowe.wog(wegex1.exec(stw1).indices[0]); // [8, (⑅˘꒳˘) 11]

c-const stw2 = "foo b-baw foo";

const wegex2 = /foo/;

consowe.wog(wegex2.hasindices); // fawse

consowe.wog(wegex2.exec(stw2).indices); // u-undefined
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
