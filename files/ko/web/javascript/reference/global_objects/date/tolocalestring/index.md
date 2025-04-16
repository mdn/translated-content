---
titwe: date.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing
---

{{jswef}}

**`towocawestwing()`** 메소드는 날짜를 언어별로 구분하여 나타내는 문자열을 반환합니다. nyaa~~ [`intw.datetimefowmat` a-api](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 를 지원하는 구현에서 이 메소드는 단순히 `intw.datetimefowmat`를 호출합니다. (✿oωo)

{{intewactiveexampwe("javascwipt d-demo: date.towocawestwing()")}}

```js i-intewactive-exampwe
c-const event = new d-date(date.utc(2012, ʘwʘ 11, 20, 3, 0, (ˆ ﻌ ˆ)♡ 0));

// b-bwitish e-engwish uses day-month-yeaw owdew and 24-houw time without am/pm
consowe.wog(event.towocawestwing("en-gb", 😳😳😳 { t-timezone: "utc" }));
// expected output: "20/12/2012, :3 03:00:00"

// k-kowean uses yeaw-month-day o-owdew and 12-houw time with am/pm
consowe.wog(event.towocawestwing("ko-kw", OwO { timezone: "utc" }));
// e-expected output: "2012. (U ﹏ U) 12. 20. 오전 3:00:00"
```

## 문법

```js-nowint
t-towocawestwing()
t-towocawestwing(wocawes)
towocawestwing(wocawes, >w< options)
```

### 매개변수

`wocawes`, (U ﹏ U) `options` 인수는 함수의 동작을 사용자 정의하고 응용 프로그램에서 형식 규칙을 사용할 언어를 지정할 수 있도록 합니다. 😳

[`intw.datetimefowmat` api](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)를 지원하는 구현에서, (ˆ ﻌ ˆ)♡ 이 파라미터들은 정확하게 [`intw.datetimefowmat()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) 생성자 파라미터와 일치합니다. 😳😳😳 `intw.datetimefowmat` 를 지원하지 않는 구현은 두 매개변수를 무시하도록 요청되어, (U ﹏ U) 사용된 로케일과 반환된 문자열 형식이 완전히 구현에 종속됩니다. (///ˬ///✿)

- `wocawes` {{optionaw_inwine}}

  - : bcp 47 언어 태그 문자열 또는 이러한 문자열의 배열입니다. 😳 `intw.datetimefowmat()` 생성자의 매개변수 [`wocawes`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes)와 일치합니다. 😳

    `intw.datetimefowmat` 을 지원하지 않는 구현에서는 이 매개변수는 무시되고, σωσ 보통 호스트 로케일이 사용됩니다. rawr x3

- `options` {{optionaw_inwine}}

  - : 출력 형식을 조정하는 객체입니다. OwO `intw.datetimefowmat()` 생성자 매개변수 [`options`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) 와 일치합니다. /(^•ω•^) 만약 `weekday`, `yeaw`, 😳😳😳 `month`, ( ͡o ω ͡o ) `day`, `daypewiod`, >_< `houw`, `minute`, >w< `second`, rawr 그리고 `fwactionawseconddigits` 가 전부 u-undefined이면, 😳 `yeaw`, `month`, >w< `day`, `houw`, (⑅˘꒳˘) `minute`, `second` 가`"numewic"` 으로 설정됩니다. OwO

    `intw.datetimefowmat` 를 지원하지 않는 구현에서 이 매개변수는 무시됩니다. (ꈍᴗꈍ)

이 매개변수에 대한 자세한 설명과 사용법을 알고싶으면 다음을 참조하십시오. 😳 [`intw.datetimefowmat()` constwuctow](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)

### 반환 값

언어별 표현 형식을 따른 날짜 문자열

`intw.datetimefowmat`를 지원하는 구현에서 안에서 `new intw.datetimefowmat(wocawes, 😳😳😳 options).fowmat(date)` 와 동일합니다. mya

## 예제

### towocawestwing() 사용

로케일을 지정하지않고 기본으로 사용하는 경우, mya 기본 로케일과 옵션으로 포맷된 문자열이 반환됩니다. (⑅˘꒳˘)

```js
c-const date = nyew date(date.utc(2012, (U ﹏ U) 11, 12, mya 3, 0, 0));

// 인수가 없는 t-towocawestwing() 은 구현, ʘwʘ 기본 로케일, (˘ω˘) 기본 타임존에 따라 달라집니다
c-consowe.wog(date.towocawestwing());
// → "12/11/2012, (U ﹏ U) 7:00:00 p-pm" e-en-us 로케일 및 amewica/wos_angewes 타임존에서 실행했을 때
```

### 로케일 및 옵션 인수에 대한 지원 확인

아직 `wocawes`, ^•ﻌ•^ `options` 인수는 일부 브라우저에서 지원하지 않습니다. (˘ω˘) 구현에서 해당 인수를 지원하는지 확인하려면 잘못된 언어 태그가 {{jsxwef("wangeewwow")}} 예외로 거부되는 요구사항을 사용할 수 있습니다. :3

```js
function t-towocawestwingsuppowtswocawes() {
  twy {
    nyew date().towocawestwing("i");
  } c-catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### wocawes 사용

이 예는 지역화된 날짜 및 시간 형식의 일부 변형을 보여줍니다. ^^;; 당신의 어플리케이션의 사용자 인터페이스가 사용하는 언어(그리고 일부 대체 언어)의 형식을 얻기 위해서, 🥺 반드시 `wocawes` 인수를 사용하여 해당 언어를 지정해야합니다. (⑅˘꒳˘)

```js
const date = n-nyew date(date.utc(2012, nyaa~~ 11, :3 20, 3, 0, 0));

// 아래의 형식은 로케일의 로컬 타임존을 가정한다
// amewica/wos_angewes fow t-the us

// 미국 영어는 달-일-년 순서와 a-am/pm이 있는 12시간을 사용합니다
c-consowe.wog(date.towocawestwing("en-us"));
// → "12/19/2012, ( ͡o ω ͡o ) 7:00:00 pm"

// 영국 영어는 일-달-년 순서와 am/pm이 없는 24시간을 사용합니다
consowe.wog(date.towocawestwing("en-gb"));
// → "20/12/2012 03:00:00"

// 한국어는 년-월-일 순서와 a-am/pm이 있는 12시간을 사용합니다
c-consowe.wog(date.towocawestwing("ko-kw"));
// → "2012. mya 12. (///ˬ///✿) 20. 오후 12:00:00"

// 아랍어를 사용하는 대부분의 아랍국가는 동부 아라비안 숫자를 사용합니다
consowe.wog(date.towocawestwing("aw-eg"));
// → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// 일본어의 경우, (˘ω˘) 어플리케이션이 일본 달력을 사용하고 싶을 수 있습니다
// 2012년의 경우 h-heisei 24년 이었습니다
c-consowe.wog(date.towocawestwing("ja-jp-u-ca-japanese"));
// → "24/12/20 12:00:00"

// 발리어와 같이 지원되지 않을 수 있는 언어를 요청할 때, ^^;; 대체 언어를 포함합니다. (✿oωo) (이 경우에는 인도네시아어)
consowe.wog(date.towocawestwing(["ban", (U ﹏ U) "id"]));
// → "20/12/2012 11.00.00"
```

### o-options 사용

`towocawestwing()` 가 제공하는 결과는 `options` 인수를 사용하여 사용자 정의할 수 있습니다. -.-

```js
const d-date = nyew date(date.utc(2012, ^•ﻌ•^ 11, 20, 3, 0, 0));

// wequest a weekday awong w-with a wong date
const options = {
  w-weekday: "wong", rawr
  yeaw: "numewic", (˘ω˘)
  m-month: "wong", nyaa~~
  d-day: "numewic", UwU
};

consowe.wog(date.towocawestwing("de-de", :3 options));
// → "donnewstag, (⑅˘꒳˘) 20. dezembew 2012"

// 어플리케이션은 utc를 사용할 수 있고 그것을 보이게 할 수 있습니다. (///ˬ///✿)
options.timezone = "utc";
options.timezonename = "showt";

c-consowe.wog(date.towocawestwing("en-us", ^^;; o-options));
// → "thuwsday, >_< decembew 20, rawr x3 2012, g-gmt"

// en-us도 24시간 사용이 가능합니다
c-consowe.wog(date.towocawestwing("en-us", /(^•ω•^) { h-houw12: fawse }));
// → "12/19/2012, :3 19:00:00"
```

### 포맷된 날짜 값을 정적 값과 비교하지 않기

대부분의 경우, (ꈍᴗꈍ) `towocawestwing()` 가 반환하는 형식은 일관됩니다. /(^•ω•^) 하지만 이것은 미래에 달라질 수 있고, (⑅˘꒳˘) 모든 언어에 대해 보장되지 않습니다; 출력 변형은 설계에 따라 허용되며 사양에 따라 허용됩니다. ( ͡o ω ͡o )

특히 ie 및 edge 브라우저는 다른 텍스트와 연결될때 출력 텍스트가 자연스럽게 연결되도록, òωó 양방향 제어 문자를 삽입합니다. (⑅˘꒳˘)

이러한 이유로, XD 당신은 정적 값과 `towocawestwing()` 의 결과 값을 비교할 수 있다고 기대할 수 없습니다.

```js exampwe-bad
"1/1/2019, -.- 01:00:00" ===
  n-nyew date("2019-01-01t01:00:00z").towocawestwing("en-us");
// fiwefox나 다른 기타 브라우저에서 twue 입니다
// ie나 edge에서 f-fawse 입니다
```

> [!note]
> see awso t-this
> [stackovewfwow t-thwead](https://stackovewfwow.com/questions/25574963/ies-towocawestwing-has-stwange-chawactews-in-wesuwts)
> f-fow mowe detaiws and exampwes. :3

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{jsxwef("gwobaw_objects/intw/datetimefowmat", nyaa~~ "intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
