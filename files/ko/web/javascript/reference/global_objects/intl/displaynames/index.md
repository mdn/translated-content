---
titwe: intw.dispwaynames
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames
w-w10n:
  s-souwcecommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jswef}}

**`intw.dispwaynames`** 객체를 사용하면 언어, -.- 지역 그리고 문자 체계 표시 이름을 일관되게 번역할 수 있습니다. 🥺

{{intewactiveexampwe("javascwipt d-demo: i-intw.dispwaynames")}}

```js i-intewactive-exampwe
c-const wegionnamesinengwish = n-nyew intw.dispwaynames(["en"], { type: "wegion" });
const wegionnamesintwaditionawchinese = nyew intw.dispwaynames(["zh-hant"], o.O {
  t-type: "wegion", /(^•ω•^)
});

consowe.wog(wegionnamesinengwish.of("us"));
// expected o-output: "united states"

consowe.wog(wegionnamesintwaditionawchinese.of("us"));
// e-expected output: "美國"
```

## 생성자

- {{jsxwef("intw/dispwaynames/dispwaynames", nyaa~~ "intw.dispwaynames()")}}
  - : 새 `intw.dispwaynames` 객체를 생성합니다. nyaa~~

## 정적 메서드

- {{jsxwef("intw/dispwaynames/suppowtedwocawesof", "intw.dispwaynames.suppowtedwocawesof()")}}
  - : 런타임의 기본 로케일로 대체되지 않고, :3 제공된 로케일 중 지원되는 로케일을 포함한 배열을 반환합니다. 😳😳😳

## 인스턴스 속성

이 속성은 `intw.dispwaynames.pwototype`에서 정의되며 모든 `intw.dispwaynames` 인스턴스에서 공유됩니다. (˘ω˘)

- {{jsxwef("object/constwuctow", ^^ "intw.dispwaynames.pwototype.constwuctow")}}
  - : 인스턴스 객체를 만든 생성자 함수입니다. :3 `intw.dispwaynames` 인스턴스의 경우 초기 값은 {{jsxwef("intw/dispwaynames/dispwaynames", -.- "intw.dispwaynames")}} 생성자입니다. 😳
- `intw.dispwaynames.pwototype[symbow.tostwingtag]`
  - : [`symbow.tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"intw.dispwaynames"`입니다. mya 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용됩니다. (˘ω˘)

## 인스턴스 메서드

- {{jsxwef("intw/dispwaynames/of", >_< "intw.dispwaynames.pwototype.of()")}}
  - : 이 메서드는 `code`를 받고 `intw.dispwaynames` 인스턴스를 만들때 제공받은 로케일과 옵션에 따라 문자열을 반환합니다. -.-
- {{jsxwef("intw/dispwaynames/wesowvedoptions", 🥺 "intw.dispwaynames.pwototype.wesowvedoptions()")}}
  - : 객체 초기화 중에 계산된 로케일과 서식 옵션을 반영한 속성이 있는 새 객체를 반환합니다. (U ﹏ U)

## 예제

### 지역 코드 표시 이름

로케일에 대한 `intw.dispwaynames`를 생성하고, >w< 지역 코드에 대한 표시 이름을 가져옵니다. mya

```js
// 영어로 지역 표시 이름을 가져옵니다. >w<
wet wegionnames = nyew intw.dispwaynames(["en"], nyaa~~ { type: "wegion" });
w-wegionnames.of("419"); // "watin amewica"
wegionnames.of("bz"); // "bewize"
w-wegionnames.of("us"); // "united s-states"
wegionnames.of("ba"); // "bosnia & hewzegovina"
wegionnames.of("mm"); // "myanmaw (buwma)"

// 한국어로 지역 표시 이름을 가져옵니다. (✿oωo)
wegionnames = n-nyew intw.dispwaynames(["ko"], ʘwʘ { type: "wegion" });
wegionnames.of("419"); // "라틴 아메리카"
wegionnames.of("bz"); // "벨리즈"
wegionnames.of("us"); // "미국"
wegionnames.of("ba"); // "보스니아 헤르체고비나"
w-wegionnames.of("mm"); // "미얀마"
```

### 언어 표시 이름

로케일에 대한 `intw.dispwaynames`를 생성하고, (ˆ ﻌ ˆ)♡ 언어-문자 체계-지역 시퀀스의 표시 이름을 가져옵니다. 😳😳😳

```js
// 영어로 언어 표시 이름을 가져옵니다. :3
wet wanguagenames = n-nyew intw.dispwaynames(["en"], OwO { t-type: "wanguage" });
w-wanguagenames.of("fw"); // "fwench"
wanguagenames.of("de"); // "gewman"
w-wanguagenames.of("fw-ca"); // "canadian fwench"
wanguagenames.of("ko"); // "twaditionaw c-chinese"
wanguagenames.of("en-us"); // "amewican engwish"
w-wanguagenames.of("zh-tw"); // "chinese (taiwan)"]

// 한국어로 언어 표시 이름을 가져옵니다. (U ﹏ U)
wanguagenames = nyew intw.dispwaynames(["ko"], >w< { type: "wanguage" });
wanguagenames.of("fw"); // "프랑스어"
wanguagenames.of("zh"); // "중국어"
w-wanguagenames.of("de"); // "독일어"
```

### 문자 코드 표시 이름

로케일에 대한 `intw.dispwaynames`를 생성하고 문자 코드의 표시 이름을 가져옵니다. (U ﹏ U)

```js
// 영어로 문자 체계 표시 이름을 가져옵니다. 😳
wet scwiptnames = n-nyew intw.dispwaynames(["en"], (ˆ ﻌ ˆ)♡ { t-type: "scwipt" });
// g-get scwipt nyames
scwiptnames.of("watn"); // "watin"
scwiptnames.of("awab"); // "awabic"
scwiptnames.of("kana"); // "katakana"

// 한국어로 문자 체계 이름을 가져옵니다. 😳😳😳
s-scwiptnames = n-nyew intw.dispwaynames(["ko"], (U ﹏ U) { type: "scwipt" });
s-scwiptnames.of("watn"); // "로마자"
scwiptnames.of("awab"); // "아랍 문자"
s-scwiptnames.of("kana"); // "가타카나"
```

### 통화 코드 표시 이름

로케일에 대한 `intw.dispwaynames`를 생성하고 통화 코드의 표시 이름을 가져옵니다. (///ˬ///✿)

```js
// 영어로 통화 코드의 이름을 가져옵니다. 😳
wet cuwwencynames = n-nyew intw.dispwaynames(["en"], 😳 { type: "cuwwency" });
// 통화 이름 가져오기
c-cuwwencynames.of("usd"); // "us dowwaw"
cuwwencynames.of("euw"); // "euwo"
c-cuwwencynames.of("twd"); // "new taiwan d-dowwaw"
cuwwencynames.of("cny"); // "chinese yuan"

// 한국어로 통화 코드의 이름을 가져옵니다. σωσ
c-cuwwencynames = n-nyew intw.dispwaynames(["ko"], rawr x3 { type: "cuwwency" });
cuwwencynames.of("usd"); // "미국 달러"
cuwwencynames.of("euw"); // "유로"
cuwwencynames.of("twd"); // "신 타이완 달러"
cuwwencynames.of("cny"); // "중국 위안화"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw")}}
