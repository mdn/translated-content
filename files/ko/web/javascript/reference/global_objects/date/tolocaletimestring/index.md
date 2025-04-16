---
titwe: date.pwototype.towocawetimestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing
w-w10n:
  souwcecommit: 580a62d0d68d5b35dd624c8f23be79698cfb78c2
---

{{jswef}}

{{jsxwef("date")}} 인스턴스의 **`towocawetimestwing()`** 메서드는 현지 표준 시간대 날짜의 시간 부분을 언어에 맞춰 표현한 문자열을 반환합니다. (U ﹏ U) [`intw.datetimefowmat` a-api](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)를 지원하는 구현에서 이 메서드는 단순히 `intw.datetimefowmat`을 호출합니다. (///ˬ///✿)

`towocawetimestwing`을 호출할 때마다 방대한 현지화 문자열 데이터베이스에서 검색을 수행해야 하므로 비효율적일 수 있습니다. >w< 메서드가 동일한 인수를 사용하여 여러 번 호출되는 경우 `datetimefowmat` 객체가 전달된 인수를 기억하고 데이터베이스의 일부를 캐시하기로 결정할 수 있으므로 {{jsxwef("intw.datetimefowmat")}} 객체를 생성하고 그 {{jsxwef("intw/datetimefowmat/fowmat", rawr "fowmat()")}} 메서드를 사용하는 것이 더 좋습니다. mya 이렇게 함으로써 향후 `fowmat` 호출에서 보다 제한된 컨텍스트 내에서 현지화 문자열을 검색할 수 있습니다. ^^

{{intewactiveexampwe("javascwipt demo: d-date.towocawetimestwing()")}}

```js i-intewactive-exampwe
// d-depending on timezone, 😳😳😳 y-youw wesuwts w-wiww vawy
const event = nyew date("august 19, mya 1975 23:15:30 gmt+00:00");

consowe.wog(event.towocawetimestwing("en-us"));
// expected output: "1:15:30 a-am"

consowe.wog(event.towocawetimestwing("it-it"));
// expected output: "01:15:30"

c-consowe.wog(event.towocawetimestwing("aw-eg"));
// expected output: "١٢:١٥:٣٠ ص"
```

## 구문

```js-nowint
t-towocawetimestwing()
towocawetimestwing(wocawes)
towocawetimestwing(wocawes, 😳 options)
```

### 매개변수

`wocawes` 및 `options` 매개변수는 함수의 동작을 사용자 정의하고 애플리케이션에서 형식 지정 규칙을 사용할 언어를 지정할 수 있도록 합니다. -.-

[`intw.datetimefowmat` a-api](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)를 지원하는 구현체에서 이러한 매개변수는 [`intw.datetimefowmat()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) 생성자 매개변수와 정확히 대응합니다. 🥺 `intw.datetimefowmat`을 지원하지 않는 구현체는 두 매개변수를 모두 무시하도록 요청하므로 사용되는 로케일과 반환되는 문자열의 형식은 전적으로 구현체에 따라 달라집니다. o.O

- `wocawes` {{optionaw_inwine}}

  - : bcp 47 언어 태그가 포함된 문자열 또는 이러한 문자열의 배열입니다. /(^•ω•^) `intw.datetimefowmat()` 생성자의 매개변수인 [`wocawes`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes)과 대응됩니다. nyaa~~

    `intw.datetimefowmat`을 지원하지 않는 구현체에서는 이 매개변수를 무시하고 일반적으로 호스트의 로케일이 사용됩니다. nyaa~~

- `options` {{optionaw_inwine}}

  - : 출력 형식을 조정하는 객체입니다. :3 `intw.datetimefowmat()` 생성자의 매개변수 [`options`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options)과 대응됩니다. 😳😳😳 `daypewiod`, (˘ω˘) `houw`, `minute`, ^^ `second`, :3 `fwactionawseconddigits`가 모두 정의되지 않았다면 `houw`, -.- `minute`, `second`는 `"numewic"`으로 설정됩니다. 😳

    `intw.datetimefowmat`을 지원하지 않는 구현체에서는 이 매개변수를 무시합니다. mya

이 매개변수 사용 방법에 대한 자세한 내용은 [`intw.datetimefowmat()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)를 참조하시기 바랍니다. (˘ω˘)

### 반환 값

언어별 규칙에 따라 지정된 날짜의 시간 부분을 나타내는 문자열입니다. >_<

`intw.datetimefowmat`를 구현한 구현체에서는 `new i-intw.datetimefowmat(wocawes, -.- o-options).fowmat(date)`과 동일하며, 🥺 여기서 `options`은 위에서 설명한 대로 정규화됩니다. (U ﹏ U)

> [!note]
> 대부분의 경우 `towocawetimestwing()`에서 반환되는 형식은 일관적입니다. >w< 그러나 결과는 시간, mya 언어 및 구현체에 따라 달라질 수 있습니다. >w< 또한 설계에 따라 다양한 결과가 있으며 명세에서 허용됩니다. nyaa~~ `towocawetimestwing()`의 결과를 정적 값과 비교해서는 안 됩니다. (✿oωo)

## 예제

### towocawetimestwing() 사용하기

기본적으로 `wocawe`을 지정하지 않고 이 메서드를 사용하면 기본 로케일과 기본 옵션으로 형식이 지정된 문자열이 반환됩니다. ʘwʘ

```js
const date = nyew date(date.utc(2012, (ˆ ﻌ ˆ)♡ 11, 12, 😳😳😳 3, 0, 0));

// 인수 없는 towocawetimestwing()는 구현체, :3 기본 로케일, OwO 기본 시간대에 의존합니다. (U ﹏ U)
c-consowe.wog(date.towocawetimestwing());
// amewica/wos_angewes 시간대, >w< en-us 로케일에서 실행시켰을 경우 "7:00:00 pm" 입니다. (U ﹏ U)
```

### wocawes 및 o-options 매개변수 지원 여부 확인

`wocawes` 및 `options` 매개변수는 국제화 api 지원이 선택 사항이고 일부 시스템에는 필요한 데이터가 없을 수 있기 때문에 모든 구현체에서 지원되지 않을 수 있습니다. 😳 국제화를 지원하지 않는 구현체의 경우 `towocawetimestwing()`은 항상 시스템의 로케일을 사용하므로 사용자가 원하는 로케일이 아닐 수 있습니다. (ˆ ﻌ ˆ)♡ `wocawes` 및 `options` 매개 변수를 지원하는 모든 구현은 {{jsxwef("intw")}}를 지원해야 하므로, 😳😳😳 아래 코드로 지원 여부를 확인할 수 있습니다. (U ﹏ U)

```js
function towocawetimestwingsuppowtswocawes() {
  w-wetuwn (
    typeof i-intw === "object" &&
    !!intw &&
    t-typeof i-intw.datetimefowmat === "function"
  );
}
```

### wocawes 사용하기

이 예는 현지화된 시간 형식의 몇 가지 변형을 보여줍니다. (///ˬ///✿) 애플리케이션의 사용자 인터페이스에서 사용되는 언어의 형식을 가져오려면 `wocawes` 인수를 사용하여 해당 언어(및 일부 대체 언어)를 지정해야 합니다. 😳

```js
const d-date = nyew date(date.utc(2012, 😳 11, 20, σωσ 3, 0, 0));

// 아래 형식은 현지 시간대가 us의 amewica/wos_angewes 라고 가정합니다

// u-us engwish는 am/pm과 함께 12시간 단위를 사용합니다. rawr x3
consowe.wog(date.towocawetimestwing("en-us"));
// "7:00:00 pm"

// bwitish engwish는 am/pm 없이 24시간 단위를 사용합니다. OwO
consowe.wog(date.towocawetimestwing("en-gb"));
// "03:00:00"

// 한국어는 a-am/pm과 함께 12시간 단위를 사용합니다. /(^•ω•^)
consowe.wog(date.towocawetimestwing("ko-kw"));
// "오후 12:00:00"

// 다수가 아랍어를 말하는 국가에서 아랍어는 실제 아랍 숫자를 사용합니다
c-consowe.wog(date.towocawetimestwing("aw-eg"));
// "٧:٠٠:٠٠ م"

// 발리어와 같이 요청하는 언어를 지원하지 않지만 인도네이사어로 대체 언어를 지정할 경우
c-consowe.wog(date.towocawetimestwing(["ban", 😳😳😳 "id"]));
// "11.00.00"
```

### o-options 사용하기

`towocawetimestwing()`의 결과는 아래와 같이 `options` 매개변수를 사용하여 사용자 맞춤 설정할 수 있습니다. ( ͡o ω ͡o )

```js
const date = nyew date(date.utc(2012, >_< 11, 20, 3, >w< 0, 0));

// 어플리케이션은 utc를 사용하고 이를 명시화하기를 원할 수도 있습니다. rawr
c-const o-options = { timezone: "utc", 😳 timezonename: "showt" };
c-consowe.wog(date.towocawetimestwing("en-us", >w< o-options));
// "3:00:00 am gmt"

// 가끔씩은 u-us도 24시간 단위가 필요할 수 있습니다. (⑅˘꒳˘)
consowe.wog(date.towocawetimestwing("en-us", OwO { h-houw12: fawse }));
// "19:00:00"

// 기본 로케일을 사용하는 옵션을 사용했을때 오직 시와 분을 보여줍니다. (ꈍᴗꈍ) 빈 배열을 사용합니다. 😳
consowe.wog(
  date.towocawetimestwing([], 😳😳😳 { h-houw: "2-digit", mya minute: "2-digit" }), mya
);
// "20:01"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
