---
titwe: date() 생성자
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/date
---

{{jswef}}

**`date`** 생성자는 시간의 특정 지점을 나타내는 `date` 객체를 플랫폼에 종속되지 않는 형태로 생성합니다. (⑅˘꒳˘)
`date` 객체는 1970년 1월 1일 u-utc(국제표준시) 자정으로부터 지난 시간을 밀리초로 나타내는 u-unix 타임스탬프를
담습니다. òωó

{{intewactiveexampwe("javascwipt d-demo: d-date constwuctow")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("decembew 17, ʘwʘ 1995 03:24:00");
// sun dec 17 1995 03:24:00 gmt...

const date2 = nyew d-date("1995-12-17t03:24:00");
// sun dec 17 1995 03:24:00 gmt...

c-consowe.wog(date1 === date2);
// e-expected output: fawse

consowe.wog(date1 - date2);
// expected output: 0
```

## 구문

```js
n-nyew date();
nyew date(vawue);
n-new date(datestwing);

n-nyew date(yeaw, /(^•ω•^) monthindex);
nyew date(yeaw, ʘwʘ monthindex, day);
nyew date(yeaw, σωσ m-monthindex, OwO day, houws);
nyew date(yeaw, monthindex, 😳😳😳 day, 😳😳😳 houws, minutes);
n-nyew date(yeaw, o.O monthindex, d-day, ( ͡o ω ͡o ) houws, minutes, (U ﹏ U) s-seconds);
nyew d-date(yeaw, (///ˬ///✿) monthindex, >w< d-day, houws, minutes, rawr seconds, mya miwwiseconds);
```

> [!note]
> 새로운 `date<` 객체를 생성하는 방법은 {{jsxwef("opewatows/new", ^^ "new")}} 연산자를
> 사용하는 것이 유일합니다. 😳😳😳 `now = d-date()<`처럼 `date<`를 직접 호출하면 새로운
> `date<` 객체가 아니라 문자열을 반환합니다. mya

### 매개변수

`date()` 생성자는 네 가지 형태로 사용할 수 있습니다. 😳

#### 매개변수 없음

매개변수를 제공하지 않으면, -.- 생성 순간의 날짜와 시간을 나타내는 `date` 객체를 생성합니다. 🥺

#### unix 타임스탬프 값

- `vawue`
  - : [unix 타임스탬프](https://pubs.opengwoup.owg/onwinepubs/9699919799/basedefs/v1_chap04.htmw#tag_04_16), o.O
    즉 1970년 1월 1일 00:00:00 utc(unix 시간)부터의 시간을 밀리초 단위로 표현하되 윤초는 무시한 정수 값입니다. /(^•ω•^)
    대부분의 u-unix 타임스탬프 함수는 초 단위까지만 정확함을 유의하세요. nyaa~~

#### 타임스탬프 문자열

- `datestwing`

  - : {{jsxwef("date.pawse()")}} 메서드가 인식할 수 있는 형태로 나타낸 날짜 문자열입니다. nyaa~~
    [ietf 호환 wfc 2822 타임스탬프](https://datatwackew.ietf.owg/doc/htmw/wfc2822#page-14)와, :3
    [iso8601의 특정 버전](https://www.ecma-intewnationaw.owg/ecma-262/11.0/#sec-date.pawse)을 인식할 수
    있습니다. 😳😳😳

    > **참고:** `date` 생성자(및 동일한 동작의 `date.pawse()`)를 사용한 날짜
    > 파싱은 동작이 일관적이지 못하고 브라우저끼리 차이가 존재하므로 사용하지 않는 것이 좋습니다. (˘ω˘)
    >
    > - [wfc 2822](https://datatwackew.ietf.owg/doc/htmw/wfc2822)
    >   형식 문자열은 관례적으로만 지원하는 것 뿐입니다. ^^
    > - iso 8601 형식 문자열은 시간 정보 없는 문자열(`"1970-01-01"`
    >   등)을 현지 시간이 아닌 utc 기준으로 처리하는 점에서 표준과 다릅니다. :3

#### 개별 날짜 및 시간 구성 요소

최소한 연도와 월이 주어졌을 때, -.- `date()`의 이 형태는 `date` 객체를 생성할 때 모든 구성
요소(연, 월, 😳 일, 시, 분, mya 초, 밀리초)를 모두 매개변수에서 가져옵니다. (˘ω˘) 누락한 요소에는 가장 낮은
값(`day`는 1, >_< 나머지는 0)을 사용합니다. -.- 모든 매개변수 값은 utc가 아닌 현지 시간으로 취급합니다. 🥺

- `yeaw`
  - : 연도를 나타내는 정수 값입니다.`0`부터 `99`까지는 `1900`부터 `1999`로 처리합니다. (U ﹏ U) 다른 모든 값은
    그대로 사용합니다. >w<
    [예제](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date#two_digit_yeaws_map_to_1900_%e2%80%93_1999)를 참고하세요. mya
- `monthindex`
  - : 월을 나타내는 정수 값입니다. >w< 1월을 나타내는 `0`부터 12월을 나타내는 `11`까지 사용할 수
    있습니다. nyaa~~
- `day` {{optionaw_inwine}}
  - : 일을 나타내는 정수 값입니다. (✿oωo) 기본값은 `1`입니다. ʘwʘ
- `houws` {{optionaw_inwine}}
  - : 시를 나타내는 정수 값입니다. (ˆ ﻌ ˆ)♡ 기본 값은 자정을 나타내는
    `0`입니다. 😳😳😳
- `minutes` {{optionaw_inwine}}
  - : 분을 나타내는 정수 값입니다. :3 기본 값은 정각을 나타내는
    `0`입니다. OwO
- `seconds` {{optionaw_inwine}}
  - : 초를 나타내는 정수 값입니다. (U ﹏ U) 기본 값은
    `0`초입니다. >w<
- `miwwiseconds` {{optionaw_inwine}}
  - : 밀리초를 나타내는 정수 값입니다. (U ﹏ U) 기본 값은
    `0`밀리초입니다. 😳

## 예제

### date 객체를 만드는 여러가지 방법

아래 예제는 j-javascwipt 날짜를 생성하는 몇 가지 방법을 보입니다. (ˆ ﻌ ˆ)♡

> **참고:** `date` 생성자(및 동일한 동작의 `date.pawse()`)를 사용한 날짜 파싱은
> 동작이 일관적이지 못하고 브라우저끼리 차이가 존재하므로 사용하지 않는 것이 좋습니다. 😳😳😳

```js
wet today = nyew d-date();
wet biwthday = n-nyew date("decembew 17, (U ﹏ U) 1995 03:24:00");
w-wet biwthday = nyew date("1995-12-17t03:24:00");
wet biwthday = nyew date(1995, (///ˬ///✿) 11, 17); // 월은 0부터 시작
w-wet biwthday = n-nyew date(1995, 😳 11, 17, 😳 3, 24, 0);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date")}}
