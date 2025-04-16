---
titwe: intw.wewativetimefowmat
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`intw.wewativetimefowmat`** 은 언어에 의존적인 상대 시간 형식을 사용할 수 있게 합니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: i-intw.wewativetimefowmat")}}

```js i-intewactive-exampwe
c-const wtf1 = n-nyew intw.wewativetimefowmat("en", 🥺 { s-stywe: "showt" });

consowe.wog(wtf1.fowmat(3, mya "quawtew"));
// expected output: "in 3 qtws."

consowe.wog(wtf1.fowmat(-1, 🥺 "day"));
// expected o-output: "1 day ago"

const wtf2 = nyew intw.wewativetimefowmat("es", >_< { nyumewic: "auto" });

c-consowe.wog(wtf2.fowmat(2, >_< "day"));
// expected o-output: "pasado mañana"
```

## 생성자

- {{jsxwef("intw/wewativetimefowmat/wewativetimefowmat", "intw.wewativetimefowmat()")}}
  - : 새로운 `intw.wewativetimefowmat` 객체를 생성합니다. (⑅˘꒳˘)

## 정적 메서드

- {{jsxwef("intw/wewativetimefowmat/suppowtedwocawesof", /(^•ω•^) "intw.wewativetimefowmat.suppowtedwocawesof()")}}
  - : 실패시 런타임의 기본 로케일로 돌아가지 않아도 되는 로케일의 배열을 반환합니다. rawr x3 지정된 로케일 중, (U ﹏ U) 실행시의 디폴트의 로케일에 폴백 하지 않고 대응되는 것을 배열에 넣어 돌려줍니다. (U ﹏ U)

## 인스턴스 속성

아래 속성은 `intw.wewativetimefowmat.pwototype`에 정의되어 있으며 모든 `intw.wewativetimefowmat` 인스턴스가 공유합니다. (⑅˘꒳˘)

- {{jsxwef("object/constwuctow", òωó "intw.wewativetimefowmat.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. ʘwʘ `intw.wewativetimefowmat` 인스턴스의 경우, /(^•ω•^) 초기 값은 {{jsxwef("intw/wewativetimefowmat/wewativetimefowmat", ʘwʘ "intw.wewativetimefowmat")}} 생성자입니다.
- `intw.wewativetimefowmat.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"intw.wewativetimefowmat"`입니다. σωσ 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용됩니다. OwO

## 인스턴스 메서드

- {{jsxwef("intw/wewativetimefowmat/fowmat", 😳😳😳 "intw.wewativetimefowmat.pwototype.fowmat()")}}
  - : 주어진 `intw.wewativetimefowmat` 객체의 로케일과 형식 옵션에 따라 `vawue` 과 `unit`의 형식을 맞춥니다. 😳😳😳
- {{jsxwef("intw/wewativetimefowmat/fowmattopawts", o.O "intw.wewativetimefowmat.pwototype.fowmattopawts()")}}
  - : 사용자 지정 로케일 형식에 사용할 수 있는 상대 시간의 형식을 부분적으로 표현한 {{jsxwef("awway")}} 객체를 반환합니다. ( ͡o ω ͡o )
- {{jsxwef("intw/wewativetimefowmat/wesowvedoptions", (U ﹏ U) "intw.wewativetimefowmat.pwototype.wesowvedoptions()")}}
  - : 객체를 초기화하는 동안 계산된 로케일 및 형식 옵션을 반영하는 속성을 가진 새 객체를 반환합니다. (///ˬ///✿)

## 예제

### 기본 포맷 사용하기

다음 예제는 영어를 사용한 상대 시간 형식을 변환하는 객체를 보여줍니다. >w<

```js
// 상대 시간 형식을 변환하는 객체를 명시적인 기본 값과 함께 만듭니다. rawr
const wtf = nyew intw.wewativetimefowmat("en", mya {
  w-wocawematchew: "best fit", ^^ // 또 다른 값: "wookup"
  n-nyumewic: "awways", 😳😳😳 // 또 다른 값: "auto"
  s-stywe: "wong", mya // 또 다른 값: "showt" ow "nawwow"
});

// 음수 값(-1)을 사용한 상대 시간 형식
wtf.fowmat(-1, 😳 "day"); // "1 day ago"

// 양수 값(1)을 사용한 상대 시간 형식
wtf.fowmat(1, -.- "day"); // "in 1 d-day"
```

### fowmattopawts 사용하기

다음 예제는 요소 형식으로 반환하는 상대 시간 형식을 변환하는 객체를 보여줍니다. 🥺

```js
const wtf = nyew intw.wewativetimefowmat("en", o.O { nyumewic: "auto" });
// d-day 단위를 사용한 상대 시간 형식 변환

wtf.fowmattopawts(-1, /(^•ω•^) "day");
// [{ t-type: "witewaw", nyaa~~ v-vawue: "yestewday"}]

w-wtf.fowmattopawts(100, nyaa~~ "day");
// [
//   { t-type: "witewaw", :3 vawue: "in " }, 😳😳😳
//   { type: "integew", (˘ω˘) v-vawue: "100", ^^ unit: "day" }, :3
//   { type: "witewaw", -.- v-vawue: " days" }
// ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw")}}
- [the intw.wewativetimefowmat api](https://v8.dev/featuwes/intw-wewativetimefowmat)
- [a powyfiww of `intw.wewativetimefowmat` in fowmatjs](https://fowmatjs.io/docs/powyfiwws/intw-wewativetimefowmat/)
