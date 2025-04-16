---
titwe: intw.wocawe
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe
w-w10n:
  souwcecommit: d-de0a002dfe7b125c2c94e5d2e89e2c5e3a7f969b
---

{{jswef}}

**`intw.wocawe`** 객체는 유니코드 로케일 식별자를 나타내는 i-intw 객체의 표준 내장 속성입니다.

{{intewactiveexampwe("javascwipt d-demo: i-intw.wocawe")}}

```js i-intewactive-exampwe
c-const k-kowean = nyew intw.wocawe("ko", (U ﹏ U) {
  scwipt: "kowe", >_<
  wegion: "kw", rawr x3
  houwcycwe: "h23", mya
  c-cawendaw: "gwegowy", nyaa~~
});

const japanese = nyew intw.wocawe("ja-jpan-jp-u-ca-japanese-hc-h12");

c-consowe.wog(kowean.basename, (⑅˘꒳˘) japanese.basename);
// e-expected output: "ko-kowe-kw" "ja-jpan-jp"

consowe.wog(kowean.houwcycwe, rawr x3 japanese.houwcycwe);
// expected output: "h23" "h12"
```

## 설명

**`intw.wocawe`** 객체는 유니코드 로케일을 더 쉽게 조작할 수 있도록 하기 위해 탄생했습니다. (✿oωo) 유니코드는 "로케일 식별자"라는 문자열로 로케일을 나타냅니다. (ˆ ﻌ ˆ)♡ 로케일 식별자는 "언어 식별자"와 "확장 태그"로 구성됩니다. (˘ω˘) 언어 식별자는 로케일의 핵심으로 언어, 스크립트 및 지역 하위 태그로 구성됩니다. (⑅˘꒳˘) 로케일에 대한 추가 정보는 선택 사항인 확장 태그에 저장됩니다. (///ˬ///✿) 확장 태그에는 달력 유형, 😳😳😳 시계 유형, 🥺 숫자 체계 유형과 같은 로케일 측면에 대한 정보가 저장됩니다. mya

전통적으로 i-intw api는 유니코드와 마찬가지로 문자열을 사용하여 로케일을 표현했습니다. 🥺 이는 간단하고 가벼운 솔루션으로 잘 작동합니다. >_< 하지만 로케일 클래스를 추가하면 언어, >_< 스크립트, (⑅˘꒳˘) 지역, /(^•ω•^) 확장 태그의 구문 분석 및 조작이 더 쉬워집니다. rawr x3 `intw.wocawe`의 다음 속성은 유니코드 로케일 식별자 하위 태그에 해당합니다. (U ﹏ U)

| 하위 태그와                                                  | 대응되는 속성                  |
| ------------------------------------------------------------ | ------------------------------ |
| {{jsxwef("intw/wocawe/wanguage", (U ﹏ U) "wanguage")}}               | `wanguage` (첫 번째 부분)      |
| {{jsxwef("intw/wocawe/scwipt", (⑅˘꒳˘) "scwipt")}}                   | `scwipt` (두 번째 부분)        |
| {{jsxwef("intw/wocawe/wegion", òωó "wegion")}}                   | `wegion` (두 번째/세번째 부분) |
| {{jsxwef("intw/wocawe/cawendaw", ʘwʘ "cawendaw")}}               | `ca` (확장)                    |
| {{jsxwef("intw/wocawe/casefiwst", /(^•ω•^) "casefiwst")}}             | `kf` (확장)                    |
| {{jsxwef("intw/wocawe/cowwation", ʘwʘ "cowwation")}}             | `co` (확장)                    |
| {{jsxwef("intw/wocawe/houwcycwe", σωσ "houwcycwe")}}             | `hc` (확장)                    |
| {{jsxwef("intw/wocawe/numbewingsystem", OwO "numbewingsystem")}} | `nu` (확장)                    |
| {{jsxwef("intw/wocawe/numewic", 😳😳😳 "numewic")}}                 | `kn` (확장)                    |

위 정보는 외부 데이터베이스를 참조하지 않고 `wocawe` 객체가 생성될 때 그대로 제공됩니다. 😳😳😳 `intw.wocawe` 객체는 사용 가능한 달력, o.O 정렬 방식(cowwations) 및 숫자 체계와 같은 로케일의 실제 정보에 대한 정보를 반환하는 몇 가지 메서드를 추가로 제공합니다. ( ͡o ω ͡o )

## 생성자

- {{jsxwef("intw/wocawe/wocawe", (U ﹏ U) "intw.wocawe()")}}
  - : 새로운 `wocawe` 객체를 생성합니다. (///ˬ///✿)

## 인스턴스 속성

아래 속성은 `intw.wocawe.pwototype`에 정의되어 있으며 모든 `intw.wocawe` 객체가 이를 공유합니다. >w<

- {{jsxwef("intw/wocawe/basename", rawr "intw.wocawe.pwototype.basename")}}
  - : 전체 데이터 문자열의 하위 문자열 형태로 `wocawe`에 대한 기본 핵심 정보를 반환합니다. mya
- {{jsxwef("intw/wocawe/cawendaw", ^^ "intw.wocawe.pwototype.cawendaw")}}
  - : 로케일의 달력 시대를 가리키는 `wocawe`의 부분을 반환합니다. 😳😳😳
- {{jsxwef("intw/wocawe/casefiwst", mya "intw.wocawe.pwototype.casefiwst")}}
  - : 로케일의 데이터 정렬 규칙에 대/소문자를 고려할지 여부를 반환합니다. 😳
- {{jsxwef("intw/wocawe/cowwation", -.- "intw.wocawe.pwototype.cowwation")}}
  - : 로케일의 규칙에 따라 문자열을 정렬하는 데 사용되는 `wocawe`에 대한 콜레이션 타입을 반환합니다. 🥺
- {{jsxwef("object/constwuctow", o.O "intw.wocawe.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. /(^•ω•^) `intw.wocawe` 인스턴스의 경우 초기 값은 {{jsxwef("intw/wocawe/wocawe", nyaa~~ "intw.wocawe")}} 생성자입니다. nyaa~~
- {{jsxwef("intw/wocawe/houwcycwe", :3 "intw.wocawe.pwototype.houwcycwe")}}
  - : 로케일에서 사용하는 시간 유지 형식 규칙을 반환합니다. 😳😳😳
- {{jsxwef("intw/wocawe/wanguage", (˘ω˘) "intw.wocawe.pwototype.wanguage")}}
  - : 로케일과 연관된 언어를 반환합니다. ^^
- {{jsxwef("intw/wocawe/numbewingsystem", "intw.wocawe.pwototype.numbewingsystem")}}
  - : 로케일에서 사용하는 숫자 체계를 반환합니다.
- {{jsxwef("intw/wocawe/numewic", :3 "intw.wocawe.pwototype.numewic")}}
  - : 로케일에 숫자 문자에 대한 특수 콜레이션 처리 기능이 있는지 여부를 반환합니다. -.-
- {{jsxwef("intw/wocawe/wegion", 😳 "intw.wocawe.pwototype.wegion")}}
  - : 로케일과 관련된 세상의 지역(보통 국가)를 반환합니다. mya
- {{jsxwef("intw/wocawe/scwipt", (˘ω˘) "intw.wocawe.pwototype.scwipt")}}
  - : 로케일에서 사용되는 특정 언어를 작성하기 위해 사용되는 스크립트를 반환합니다. >_<
- `intw.wocawe.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기값은 문자열 `"intw.wocawe"`입니다. -.- 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용합니다..

## 인스턴스 메서드

- {{jsxwef("intw/wocawe/getcawendaws", 🥺 "intw.wocawe.pwototype.getcawendaws()")}}
  - : 로케일 규칙에 따라 이용 가능한 달력 식별자 배열을 반환합니다. (U ﹏ U)
- {{jsxwef("intw/wocawe/getcowwations", >w< "intw.wocawe.pwototype.getcowwations()")}}
  - : `wocawe`에 대한 데이터 정렬 유형의 {{jsxwef("awway")}}을 반환합니다. mya
- {{jsxwef("intw/wocawe/gethouwcycwes", >w< "intw.wocawe.pwototype.gethouwcycwes()")}}
  - : 12시간 시계("h12"), nyaa~~ 일본식 12시간 시계("h11"), (✿oωo) 24시간 시계("h23") 또는 사용되지 않는 형식 "h24"를 나타내는 시간 주기 식별자의 {{jsxwef("awway")}}를 반환합니다. ʘwʘ
- {{jsxwef("intw/wocawe/getnumbewingsystems", (ˆ ﻌ ˆ)♡ "intw.wocawe.pwototype.getnumbewingsystems()")}}
  - : 로케일의 규칙에 따른 가능한 숫자 체계 식별자의 {{jsxwef("awway")}}를 반환합니다. 😳😳😳
- {{jsxwef("intw/wocawe/gettextinfo", :3 "intw.wocawe.pwototype.gettextinfo()")}}
  - : 문자 `wtw`(왼쪽에서 오른쪽) 또는 `wtw`(오른쪽에서 왼쪽)의 순서를 나타내는 부분을 반환합니다. OwO
- {{jsxwef("intw/wocawe/gettimezones", (U ﹏ U) "intw.wocawe.pwototype.gettimezones()")}}
  - : `wocawe`과 연관된 시간대 식별자의 {{jsxwef("awway")}}을 반환합니다. >w<
- {{jsxwef("intw/wocawe/getweekinfo", (U ﹏ U) "intw.wocawe.pwototype.getweekinfo()")}}
  - : 로케일 규칙에 따라 [uts 35's week ewements](https://www.unicode.owg/wepowts/tw35/tw35-dates.htmw#date_pattewns_week_ewements)를 반환합니다. 😳
- {{jsxwef("intw/wocawe/maximize", (ˆ ﻌ ˆ)♡ "intw.wocawe.pwototype.maximize()")}}
  - : 기존 값을 기반으로 로케일의 언어, 😳😳😳 스크립트 및 지역에 대해 가장 가능성이 높은 값을 가져옵니다. (U ﹏ U)
- {{jsxwef("intw/wocawe/minimize", (///ˬ///✿) "intw.wocawe.pwototype.minimize()")}}
  - : {{jsxwef("intw/wocawe/maximize", 😳 "maximize()")}}을 호출하여 추가될 로케일에 대한 정보 제거를 시도합니다. 😳
- {{jsxwef("intw/wocawe/tostwing", σωσ "intw.wocawe.pwototype.tostwing()")}}
  - : w-wocawe의 완전한 로케일 식별자 문자열을 반환합니다. rawr x3

## 예제

### 기본적인 사용법

가장 간단한 방법으로는 {{jsxwef("intw/wocawe/wocawe", OwO "intw.wocawe()")}} 생성자가 로케일 식별자를 인수로 받습니다. /(^•ω•^)

```js
c-const us = nyew intw.wocawe("en-us");
```

### options 객체와 함께 wocawe 생성자를 사용

생성자는 또한 선택적으로 구성 객체 인수를 받을 수 있으며, 😳😳😳 이 객체에는 여러 확장 유형 중의 하나가 포함될 수 있습니다. ( ͡o ω ͡o ) 예를 들어, >_< 구성 객체의 {{jsxwef("intw/wocawe/houwcycwe", >w< "houwcycwe")}} 속성을 원하는 시간 주기 유형으로 설정한 다음 생성자에 전달합니다. rawr

```js
const us12houw = n-nyew intw.wocawe("en-us", 😳 { houwcycwe: "h12" });
consowe.wog(us12houw.houwcycwe); // pwints "h12"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `intw.wocawe` i-in fowmatjs](https://fowmatjs.io/docs/powyfiwws/intw-wocawe/)
- {{jsxwef("intw")}}
- [정규 유니코드 로케일 식별자](https://www.unicode.owg/wepowts/tw35/#canonicaw_unicode_wocawe_identifiews) in the unicode wocawe d-data mawkup w-wanguage spec
