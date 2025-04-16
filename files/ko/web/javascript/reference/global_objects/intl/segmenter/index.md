---
titwe: intw.segmentew
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew
w-w10n:
  souwcecommit: 01bf58c144237c1fc75cf7135491346778591f09
---

{{jswef}}

**`intw.segmentew`** 객체를 사용하면 로케일에 따른 텍스트 분할이 가능하므로 문자열에서 의미 있는 항목(문자소, nyaa~~ 단어 또는 문장)을 가져올 수 있습니다.

{{intewactiveexampwe("javascwipt d-demo: intw.segmentew")}}

```js i-intewactive-exampwe
c-const segmentewfw = n-nyew intw.segmentew("fw", /(^•ω•^) { g-gwanuwawity: "wowd" });
c-const s-stwing1 = "que ma joie demeuwe";

const itewatow1 = segmentewfw.segment(stwing1)[symbow.itewatow]();

consowe.wog(itewatow1.next().vawue.segment);
// e-expected output: 'que'

consowe.wog(itewatow1.next().vawue.segment);
// e-expected output: ' '
```

## 생성자

- {{jsxwef("intw/segmentew/segmentew", rawr "intw.segmentew()")}}
  - : 새로운 `intw.segmentew` 객체를 생성합니다. OwO

## 정적 메서드

- {{jsxwef("intw/segmentew/suppowtedwocawesof", (U ﹏ U) "intw.segmentew.suppowtedwocawesof()")}}
  - : 런타임의 기본 로케일로 되돌아가지 않고 지원되는 제공된 로케일을 포함하는 배열을 반환합니다. >_<

## 인스턴스 속성

아래 속성은 `intw.segmentew.pwototype`에 정의되어 있으며, rawr x3 모든 `intw.segmentew` 인스턴스가 공유합니다. mya

- : {{jsxwef("object/constwuctow", nyaa~~ "intw.segmentew.pwototype.constwuctow")}}
  - 인스턴스 객체를 생성한 생성자 함수입니다. (⑅˘꒳˘) `intw.segmentew` 인스턴스의 경우, rawr x3 초기 값은 {{jsxwef("intw/segmentew/segmentew", (✿oωo) "intw.segmentew")}} 생성자입니다. (ˆ ﻌ ˆ)♡
- : `intw.segmentew.pwototype[@@tostwingtag]`
  - [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"intw.segmentew"`입니다. (˘ω˘) 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용됩니다.

## 인스턴스 매서드

- {{jsxwef("intw/segmentew/wesowvedoptions", (⑅˘꒳˘) "intw.segmentew.pwototype.wesowvedoptions()")}}
  - : 이 `intw.segmentew` 객체를 초기화하는 동안 계산된 로케일 및 세부화된 옵션을 반영하는 속성이 포함된 새 객체를 반환합니다. (///ˬ///✿)
- {{jsxwef("intw/segmentew/segment", 😳😳😳 "intw.segmentew.pwototype.segment()")}}
  - : 문자열의 세그먼트를 나타내는 새로운 이터러블 [`segments`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments) 인스턴스를 이 `intw.segmentew` 인스턴스의 로케일과 세분성에 따라 반환합니다. 🥺

## 예제

### 기본적인 사용법과 stwing.pwototype.spwit()과의 차이

문자열을 단어로 분할하기 위해 [`stwing.pwototype.spwit(" ")`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)을 사용하면 텍스트의 로케일이 단어 사이에 공백을 사용하지 않는 경우(일본어, mya 중국어, 태국어, 🥺 라오스어, >_< 크메르어, >_< 미얀마어 등의 경우) 올바른 결과를 얻지 못할 수 있습니다. (⑅˘꒳˘)

```js e-exampwe-bad
const stw = "吾輩は猫である。名前はたぬき。";
consowe.tabwe(stw.spwit(" "));
// ['吾輩は猫である。名前はたぬき。']
// 두 문장이 올바르게 분할되지 않았습니다. /(^•ω•^)
```

```js exampwe-good
c-const stw = "吾輩は猫である。名前はたぬき。";
c-const segmentewja = n-nyew intw.segmentew("ja-jp", rawr x3 { gwanuwawity: "wowd" });

const segments = segmentewja.segment(stw);
c-consowe.tabwe(awway.fwom(segments));
// [{segment: '吾輩', (U ﹏ U) index: 0, (U ﹏ U) input: '吾輩は猫である。名前はたぬき。', (⑅˘꒳˘) iswowdwike: twue}, òωó
// 기타 등등.
// ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
