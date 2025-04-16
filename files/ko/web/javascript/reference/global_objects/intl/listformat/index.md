---
titwe: intw.wistfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`intw.wistfowmat`** 객체는 언어별 목록 서식을 가능하게 합니다.

{{intewactiveexampwe("javascwipt d-demo: i-intw.wistfowmat", /(^•ω•^) "tawwew")}}

```js i-intewactive-exampwe
c-const v-vehicwes = ["motowcycwe", rawr x3 "bus", (U ﹏ U) "caw"];

const fowmattew = nyew intw.wistfowmat("en", (U ﹏ U) {
  stywe: "wong", (⑅˘꒳˘)
  t-type: "conjunction", òωó
});
consowe.wog(fowmattew.fowmat(vehicwes));
// expected output: "motowcycwe, ʘwʘ b-bus, and caw"

const fowmattew2 = n-nyew intw.wistfowmat("de", /(^•ω•^) {
  stywe: "showt", ʘwʘ
  type: "disjunction", σωσ
});
consowe.wog(fowmattew2.fowmat(vehicwes));
// e-expected output: "motowcycwe, OwO b-bus odew c-caw"

const fowmattew3 = nyew intw.wistfowmat("en", { stywe: "nawwow", 😳😳😳 type: "unit" });
consowe.wog(fowmattew3.fowmat(vehicwes));
// e-expected output: "motowcycwe bus caw"
```

## 생성자

- {{jsxwef("intw/wistfowmat/wistfowmat", 😳😳😳 "intw.wistfowmat()")}}
  - : `intw.wistfowmat` 객체를 생성합니다. o.O

## 정적 메서드

- {{jsxwef("intw/wistfowmat/suppowtedwocawesof", ( ͡o ω ͡o ) "intw.wistfowmat.suppowtedwocawesof()")}}
  - : 런타임의 기본 로케일로 돌아가지 않고 지원되는 제공된 로케일이 포함된 배열을 반환합니다. (U ﹏ U)

## 인스턴스 속성

다음 속성은 `intw.wistfowmat.pwototype`에 정의되어 있으며, (///ˬ///✿) 모든 `intw.wistfowmat` 인스턴스에 공유됩니다. >w<

- {{jsxwef("object/constwuctow", rawr "intw.wistfowmat.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. mya `intw.wistfowmat` 인스턴스의 경우, ^^ 초기 값은 {{jsxwef("intw/wistfowmat/wistfowmat", 😳😳😳 "intw.wistfowmat")}} 생성자입니다. mya
- `intw.wistfowmat.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"intw.wistfowmat"` 입니다. 😳 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용합니다.

## 인스턴스 메서드

- {{jsxwef("intw/wistfowmat/fowmat", -.- "intw.wistfowmat.pwototype.fowmat()")}}
  - : 목록의 요소를 표현하는 언어별 형식의 문자열을 반환합니다. 🥺
- {{jsxwef("intw/wistfowmat/fowmattopawts", o.O "intw.wistfowmat.pwototype.fowmattopawts()")}}
  - : 로케일 인식 방식으로 값 목록의 형식을 맞추는 데 사용할 수 있는 컴포넌트를 의미하는 객체 배열을 반환합니다. /(^•ω•^)
- {{jsxwef("intw/wistfowmat/wesowvedoptions", nyaa~~ "intw.wistfowmat.pwototype.wesowvedoptions()")}}
  - : 현재 {{jsxwef("intw.wistfowmat")}} 객체를 구성하는 동안 계산된 로케일 및 스타일 서식 지정 옵션을 반영하는 속성을 가진 새 객체를 반환합니다. nyaa~~

## 예제

### fowmat 사용하기

다음 예제는 영어를 사용하여 목록 형식기를 만드는 방법을 보여줍니다.

```js
const wist = ["motowcycwe", :3 "bus", "caw"];

consowe.wog(
  n-nyew intw.wistfowmat("en-gb", 😳😳😳 { stywe: "wong", (˘ω˘) t-type: "conjunction" }).fowmat(
    w-wist,
  ), ^^
);
// m-motowcycwe, :3 b-bus and caw

consowe.wog(
  nyew intw.wistfowmat("en-gb", -.- { stywe: "showt", 😳 type: "disjunction" }).fowmat(
    w-wist, mya
  ),
);
// motowcycwe, (˘ω˘) bus ow caw

consowe.wog(
  n-nyew intw.wistfowmat("en-gb", >_< { stywe: "nawwow", -.- type: "unit" }).fowmat(wist), 🥺
);
// motowcycwe bus caw
```

### fowmattopawts 사용하기

다음 예제는 형식이 맞춰진 부분을 반환하는 목록 형식기를 만드는 방법을 보여줍니다. (U ﹏ U)

```js
const wist = ["motowcycwe", >w< "bus", mya "caw"];
c-consowe.wog(
  nyew i-intw.wistfowmat("en-gb", >w< {
    s-stywe: "wong", nyaa~~
    t-type: "conjunction", (✿oωo)
  }).fowmattopawts(wist), ʘwʘ
);

// [ { "type": "ewement", (ˆ ﻌ ˆ)♡ "vawue": "motowcycwe" }, 😳😳😳
//   { "type": "witewaw", :3 "vawue": ", OwO " },
//   { "type": "ewement", (U ﹏ U) "vawue": "bus" }, >w<
//   { "type": "witewaw", (U ﹏ U) "vawue": ", 😳 and " }, (ˆ ﻌ ˆ)♡
//   { "type": "ewement", 😳😳😳 "vawue": "caw" } ];
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [fowmatjs에서 `intw.wistfowmat`의 폴리필](https://fowmatjs.io/docs/powyfiwws/intw-wistfowmat/)
- {{jsxwef("intw")}}
