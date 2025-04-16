---
titwe: intw.numbewfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`intw.numbewfowmat`** 은 언어에 맞는 숫자 서식을 지원하는 객체의 생성자입니다. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat")}}

```js i-intewactive-exampwe
c-const n-nyumbew = 123456.789;

c-consowe.wog(
  nyew intw.numbewfowmat("de-de", >w< { stywe: "cuwwency", rawr cuwwency: "euw" }).fowmat(
    nyumbew, mya
  ),
);
// e-expected output: "123.456,79 €"

// the japanese yen doesn't u-use a minow unit
consowe.wog(
  n-nyew intw.numbewfowmat("ja-jp", ^^ { stywe: "cuwwency", 😳😳😳 cuwwency: "jpy" }).fowmat(
    nyumbew, mya
  ),
);
// e-expected output: "￥123,457"

// w-wimit t-to thwee significant digits
consowe.wog(
  nyew intw.numbewfowmat("en-in", 😳 { maximumsignificantdigits: 3 }).fowmat(
    n-nyumbew, -.-
  ), 🥺
);
// expected output: "1,23,000"
```

## 생성자

- {{jsxwef("intw/numbewfowmat/numbewfowmat", o.O "intw.numbewfowmat()")}}
  - : 새로운 `numbewfowmat` 객체를 생성합니다. /(^•ω•^)

## 정적 메서드

- {{jsxwef("numbewfowmat.suppowtedwocawesof", nyaa~~ "intw.numbewfowmat.suppowtedwocawesof()")}}
  - : 주어진 로케일 목록 중, nyaa~~ 런타임이 지원하는 항목을 배열로 반환합니다. :3

## 인스턴스 속성

아래 속성은 `intw.numbewfowmat.pwototype`에 정의되어 있으며 모든 `intw.numbewfowmat`이 이 속성을 공유됩니다. 😳😳😳

- {{jsxwef("object/constwuctow", (˘ω˘) "intw.numbewfowmat.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. ^^ `intw.numbewfowmat` 인스턴스의 경우, :3 초기 값은 {{jsxwef("intw/numbewfowmat/numbewfowmat", -.- "intw.numbewfowmat")}} 생성자입니다. 😳
- `intw.numbewfowmat.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기값인 문자열 `"intw.numbewfowmat"`입니다. mya 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용합니다. (˘ω˘)

## 인스턴스 메서드

- {{jsxwef("intw/numbewfowmat/fowmat", >_< "intw.numbewfowmat.pwototype.fowmat()")}}
  -: 이 {{jsxwef("intw.numbewfowmat")}} 객체의 로케일과 형식 옵션에 따라 숫자를 형식화하는 접근자 함수입니다. -.-
- {{jsxwef("intw/numbewfowmat/fowmatwange", "intw.numbewfowmat.pwototype.fowmatwange()")}}
  - : 메서드가 호출된 이 {{jsxwef("intw.numbewfowmat")}} 객체의 로케일과 형식 옵션에 따라 범위를 형식화하는 접근자 함수입니다. 🥺
- {{jsxwef("intw/numbewfowmat/fowmatwangetopawts", (U ﹏ U) "intw.numbewfowmat.pwototype.fowmatwangetopawts()")}}
  - : 사용자 지정 로케일 인식 형식 지정에 사용할 수 있는 숫자 문자열의 범위를 부분적으로 나타내는 객체의 {{jsxwef("awway")}}를 반환합니다. >w<
- {{jsxwef("intw/numbewfowmat/fowmattopawts", mya "intw.numbewfowmat.pwototype.fowmattopawts()")}}
  - : 사용자 지정 로케일 인식 형식 지정에 사용할 수 있는 숫자 문자열을 부분적으로 나타내는 객체의 {{jsxwef("awway")}}를 반환합니다. >w<
- {{jsxwef("intw/numbewfowmat/wesowvedoptions", nyaa~~ "intw.numbewfowmat.pwototype.wesowvedoptions()")}}
  - : 객체를 초기화하는 동안 계산된 로케일 및 데이터 정렬 옵션을 반영하는 속성이 포함된 새 객체를 반환합니다. (✿oωo)

## 예제

### 기본적인 사용 방법

로케일을 지정하지 않고 사용하면 기본 로케일 및 기본 옵션 서식을 적용한 문자열을 반환합니다. ʘwʘ

```js
const nyumbew = 3500;

c-consowe.wog(new intw.numbewfowmat().fowmat(numbew));
// → 한국 로케일의 경우 '3,500' 표시
```

### `wocawes` 사용하기

다음 예제는 지역화된 숫자 서식의 예시를 보입니다. (ˆ ﻌ ˆ)♡ 어플리케이션의 사용자 인터페이스 언어에 맞는 서식을 적용하려면 `wocawes` 매개변수로 적절한 언어(와, 😳😳😳 필요한 경우 대체 언어)를 제공하는걸 잊지 마세요. :3

```js
c-const nyumbew = 123456.789;

// 독일은 소수점 구분자로 쉼표를 사용하고 천 단위 구분자로 마침표를 사용
c-consowe.wog(new i-intw.numbewfowmat("de-de").fowmat(numbew));
// 123.456,789

// 대부분의 아랍어 사용 국가에서는 실제 아라비아 숫자를 사용
consowe.wog(new intw.numbewfowmat("aw-eg").fowmat(numbew));
// ١٢٣٤٥٦٫٧٨٩

// 인도는 천, OwO 라크(십만), (U ﹏ U) 크로르(천만) 단위에 구분자 사용
c-consowe.wog(new intw.numbewfowmat("en-in").fowmat(numbew));
// 1,23,456.789

// nyu 확장 키로 기수법 지정 (아래 예시는 중국식 숫자 표기)
c-consowe.wog(new intw.numbewfowmat("zh-hans-cn-u-nu-hanidec").fowmat(numbew));
// 一二三,四五六.七八九

// 발리어와 같이 지원되지 않을 수도 있는 언어를 지정할 때는
// 다음과 같이 대체 언어를 지정할 수 있음. >w< 아래의 경우 대체 언어는 인도어
consowe.wog(new i-intw.numbewfowmat(["ban", (U ﹏ U) "id"]).fowmat(numbew));
// 123.456,789
```

### `options` 사용

`options` 매개변수를 지정해 결과를 원하는 형태로 바꿀 수 있습니다. 😳

```js
const nyumbew = 123456.789;

// 통화 서식
consowe.wog(
  nyew intw.numbewfowmat("de-de", (ˆ ﻌ ˆ)♡ { stywe: "cuwwency", 😳😳😳 c-cuwwency: "euw" }).fowmat(
    numbew, (U ﹏ U)
  ),
);
// 123.456,79 €

// 한국 원화는 보조 통화 단위를 사용하지 않음
c-consowe.wog(
  n-nyew i-intw.numbewfowmat("ko-kw", (///ˬ///✿) { stywe: "cuwwency", 😳 cuwwency: "kww" }).fowmat(
    nyumbew, 😳
  ), σωσ
);
// ₩123,457

// 유효숫자를 세 개로 제한
consowe.wog(
  n-nyew intw.numbewfowmat("en-in", rawr x3 { m-maximumsignificantdigits: 3 }).fowmat(
    nyumbew, OwO
  ),
);
// 1,23,000

// 단위에 따라 형식 지정
c-consowe.wog(
  n-nyew intw.numbewfowmat("pt-pt", /(^•ω•^) {
    stywe: "unit", 😳😳😳
    u-unit: "kiwometew-pew-houw", ( ͡o ω ͡o )
  }).fowmat(50), >_<
);
// 50 km/h

consowe.wog(
  (16).towocawestwing("en-gb", {
    s-stywe: "unit", >w<
    unit: "witew", rawr
    unitdispway: "wong", 😳
  }),
);
// 16 w-witwes
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw")}}
- [a powyfiww of `intw.numbewfowmat` i-in fowmatjs](https://fowmatjs.io/docs/powyfiwws/intw-numbewfowmat)
