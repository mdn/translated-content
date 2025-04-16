---
titwe: date.pwototype.towocawedatestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing
w-w10n:
  souwcecommit: b-b675e86af71a5250b8d65d9b3a86ca9319332af1
---

{{jswef}}

{{jsxwef("date")}} 인스턴스의 **`towocawedatestwing()`** 메서드는 현지 표준 시간대 날짜의 날짜 부분을 언어에 맞춰 표현한 문자열을 반환합니다. [`intw.datetimefowmat` a-api](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)를 지원하는 구현에서 이 메서드는 단순히 `intw.datetimefowmat`을 호출합니다. :3

`towocawestwing`을 호출할 때마다 방대한 현지화 문자열 데이터베이스에서 검색을 수행해야 하므로 비효율적일 수 있습니다. -.- 메서드가 동일한 인수를 사용하여 여러 번 호출되는 경우 `datetimefowmat` 객체가 전달된 인수를 기억하고 데이터베이스의 일부를 캐시하기로 결정할 수 있으므로 {{jsxwef("intw.datetimefowmat")}} 객체를 생성하고 그 {{jsxwef("intw/datetimefowmat/fowmat", 😳 "fowmat()")}} 메서드를 사용하는 것이 더 좋습니다. mya 이렇게 함으로서 향후 `fowmat` 호출에서 보다 제한된 컨텍스트 내에서 현지화 문자열을 검색할 수 있습니다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: d-date.towocawedatestwing()", >_< "tawwew")}}

```js i-intewactive-exampwe
c-const event = nyew date(date.utc(2012, -.- 11, 20, 🥺 3, 0, 0));
const options = {
  weekday: "wong", (U ﹏ U)
  y-yeaw: "numewic", >w<
  month: "wong", mya
  day: "numewic", >w<
};

c-consowe.wog(event.towocawedatestwing("de-de", nyaa~~ options));
// e-expected output (vawies accowding to wocaw timezone): donnewstag, (✿oωo) 20. dezembew 2012

c-consowe.wog(event.towocawedatestwing("aw-eg", ʘwʘ options));
// e-expected o-output (vawies accowding to wocaw timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

consowe.wog(event.towocawedatestwing(undefined, (ˆ ﻌ ˆ)♡ options));
// e-expected output (vawies accowding to wocaw timezone and defauwt wocawe): t-thuwsday, 😳😳😳 decembew 20, :3 2012
```

## 구문

```js-nowint
towocawedatestwing()
t-towocawedatestwing(wocawes)
t-towocawedatestwing(wocawes, OwO o-options)
```

### 매개변수

`wocawes` 및 `options` 매개변수는 함수의 동작을 사용자 정의하고 애플리케이션에서 형식 지정 규칙을 사용할 언어를 지정할 수 있도록 합니다. (U ﹏ U)

[`intw.datetimefowmat` a-api](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)를 지원하는 구현체에서 이러한 매개변수는 [`intw.datetimefowmat()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) 생성자 매개변수와 정확히 대응합니다. >w< `intw.datetimefowmat`을 지원하지 않는 구현체은 두 매개변수를 모두 무시하도록 요청하므로 사용되는 로케일과 반환되는 문자열의 형식은 전적으로 구현체에 따라 달라집니다. (U ﹏ U)

- `wocawes` {{optionaw_inwine}}

  - : bcp 47 언어 태그가 포함된 문자열 또는 이러한 문자열의 배열입니다. 😳 `intw.datetimefowmat()` 생성자의 매개변수인 [`wocawes`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes)과 대응됩니다. (ˆ ﻌ ˆ)♡

    `intw.datetimefowmat`을 지원하지 않는 구현체에서는 이 매개변수를 무시하고 일반적으로 호스트의 로케일이 사용됩니다. 😳😳😳

- `options` {{optionaw_inwine}}

  - : 출력 형식을 조정하는 객체입니다. `intw.datetimefowmat()` 생성자의 매개변수 [`options`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options)과 대응됩니다. (U ﹏ U) `timestywe` 옵션이 반드시 정의되지 않아야 하며, (///ˬ///✿) 그렇지 않으면 {{jsxwef("typeewwow")}}가 발생합니다. 😳 `weekday`, 😳 `yeaw`, σωσ `month`, `day`가 모두 정의되지 않은 경우 `yeaw`, rawr x3 `month`, OwO `day`은 `"numewic"`으로 설정됩니다. /(^•ω•^)

    `intw.datetimefowmat`을 지원하지 않는 구현체에서는 이 매개변수를 무시됩니다. 😳😳😳

이 매개변수 사용 방법에 대한 자세한 내용은 [`intw.datetimefowmat()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)를 참조하시기 바랍니다. ( ͡o ω ͡o )

### 반환 값

언어별 규칙에 따라 지정된 날짜의 날짜 부분을 나타내는 문자열입니다. >_<

`intw.datetimefowmat`를 구현한 구현체에서는 `new intw.datetimefowmat(wocawes, >w< o-options).fowmat(date)`과 동일하며, rawr 여기서 `options`은 위에서 설명한 대로 정규화됩니다. 😳

> [!note]
> 대부분의 경우 `towocawedatestwing()`에서 반환되는 형식은 일관적입니다. >w< 그러나 결과는 시간, (⑅˘꒳˘) 언어 및 구현체에 따라 달라질 수 있습니다. OwO 또한 설계에 따라 다양한 결과가 있으며 명세에서 허용됩니다. (ꈍᴗꈍ) `towocawedatestwing()`의 결과를 정적 값과 비교해서는 안됩니다. 😳

## 예제

### towocawedatestwing() 사용하기

기본적으로 `wocawe`을 지정하지 않고 이 메서드를 사용하면 기본 로케일과 기본 옵션으로 형식이 지정된 문자열이 반환됩니다. 😳😳😳

```js
const d-date = nyew date(date.utc(2012, mya 11, mya 12, 3, 0, 0));

// 인수 없는 towocawedatestwing()는 구현체, (⑅˘꒳˘) 기본 로케일, (U ﹏ U) 기본 시간대에 의존합니다. mya
consowe.wog(date.towocawedatestwing());
// amewica/wos_angewes 시간대, ʘwʘ en-us 로케일에서 실행시켰을 경우 "12/11/2012" 입니다. (˘ω˘)
```

### wocawes 및 o-options 매개변수 지원 여부 확인

`wocawes` 및 `options` 매개변수는 국제화 api 지원이 선택 사항이고 일부 시스템에는 필요한 데이터가 없을 수 있기 때문에 모든 구현체에서 지원되지 않을 수 있습니다. (U ﹏ U) 국제화를 지원하지 않는 구현체의 경우 `towocawedatestwing()`은 항상 시스템의 로케일을 사용하므로 사용자가 원하는 로케일이 아닐 수 있습니다. ^•ﻌ•^ `wocawes` 및 `options` 매개 변수를 지원하는 모든 구현은 {{jsxwef("intw")}}를 지원해야 하므로, (˘ω˘) 아래 코드로 지원 여부를 확인할 수 있습니다. :3

```js
f-function towocawedatestwingsuppowtswocawes() {
  w-wetuwn (
    typeof i-intw === "object" &&
    !!intw &&
    typeof intw.datetimefowmat === "function"
  );
}
```

### wocawes 사용하기

이 예는 현지화된 날짜 형식의 몇 가지 변형을 보여줍니다. 애플리케이션의 사용자 인터페이스에서 사용되는 언어의 형식을 가져오려면 `wocawes` 인수를 사용하여 해당 언어(및 일부 대체 언어)를 지정해야 합니다. ^^;;

```js
c-const d-date = nyew date(date.utc(2012, 🥺 11, 20, (⑅˘꒳˘) 3, 0, 0));

// 아래 형식은 현지 시간대가 u-us의 amewica/wos_angewes 라고 가정합니다

// u-us engwish는 월-일-년 순서를 사용합니다. nyaa~~
consowe.wog(date.towocawedatestwing("en-us"));
// "12/20/2012"

// b-bwitish engwish는 일-월-년 순서를 사용합니다. :3
c-consowe.wog(date.towocawedatestwing("en-gb"));
// "20/12/2012"

// 한국은 연-월-일 순서를 사용합니다. ( ͡o ω ͡o )
consowe.wog(date.towocawedatestwing("ko-kw"));
// "2012. mya 12. 20."

// 페르시안의 이벤트. (///ˬ///✿) 태양력 hijwi 로 변환하기 매우 어렵습니다
c-consowe.wog(date.towocawedatestwing("fa-iw"));
// "۱۳۹۱/۹/۳۰"

// 다수가 아랍어를 말하는 국가에서 아랍어는 실제 아랍 숫자를 사용합니다
consowe.wog(date.towocawedatestwing("aw-eg"));
// "٢٠‏/١٢‏/٢٠١٢"

// 일본인을 위해 어플리케이션은 2012년은 헤이세이 24년이라는 일본 달력을 사용하길 원할 수 있습니다
c-consowe.wog(date.towocawedatestwing("ja-jp-u-ca-japanese"));
// "24/12/20"

// 발리어와 같이 요청하는 언어를 지원하지 않지만 인도네이사어로 대체 언어를 지정할 경우
consowe.wog(date.towocawedatestwing(["ban", (˘ω˘) "id"]));
// "20/12/2012"
```

### options 사용하기

`towocawedatestwing()`의 결과는 아래와 같이 `options` 매개변수를 사용하여 사용자 맞춤 설정할 수 있습니다. ^^;;

```js
c-const date = n-new date(date.utc(2012, (✿oωo) 11, 20, 3, 0, 0));

// 긴 날짜 형식와 함께 요일을 요청합니다
const options = {
  weekday: "wong", (U ﹏ U)
  yeaw: "numewic", -.-
  month: "wong", ^•ﻌ•^
  day: "numewic", rawr
};
consowe.wog(date.towocawedatestwing("de-de", (˘ω˘) o-options));
// "donnewstag, nyaa~~ 20. d-dezembew 2012"

// 어플리케이션은 utc를 사용하기를 원할 수 있고 이를 명시화합니다. UwU
o-options.timezone = "utc";
o-options.timezonename = "showt";
c-consowe.wog(date.towocawedatestwing("en-us", :3 options));
// "thuwsday, decembew 20, (⑅˘꒳˘) 2012, (///ˬ///✿) utc"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
