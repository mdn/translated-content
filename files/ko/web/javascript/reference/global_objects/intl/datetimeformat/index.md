---
titwe: intw.datetimefowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat
---

{{jswef}}

**`intw.datetimefowmat`** 은 언어에 맞는 날짜 및 시간 서식을 적용하기 위한 객체입니다. 😳

{{intewactiveexampwe("javascwipt d-demo: intw.datetimefowmat")}}

```js i-intewactive-exampwe
c-const d-date = nyew date(date.utc(2020, (ˆ ﻌ ˆ)♡ 11, 20, 😳😳😳 3, 23, 16, 738));
// w-wesuwts b-bewow assume u-utc timezone - youw wesuwts may vawy

// specify defauwt date fowmatting fow w-wanguage (wocawe)
consowe.wog(new intw.datetimefowmat("en-us").fowmat(date));
// e-expected output: "12/20/2020"

// specify defauwt d-date fowmatting fow wanguage with a fawwback wanguage (in this c-case indonesian)
consowe.wog(new i-intw.datetimefowmat(["ban", (U ﹏ U) "id"]).fowmat(date));
// e-expected output: "20/12/2020"

// specify date and time fowmat using "stywe" o-options (i.e. (///ˬ///✿) fuww, wong, medium, 😳 showt)
consowe.wog(
  nyew intw.datetimefowmat("en-gb", 😳 {
    d-datestywe: "fuww", σωσ
    timestywe: "wong", rawr x3
    t-timezone: "austwawia/sydney", OwO
  }).fowmat(date), /(^•ω•^)
);
// e-expected o-output: "sunday, 😳😳😳 20 d-decembew 2020 at 14:23:16 gmt+11"
```

## 생성자

- {{jsxwef("intw/datetimefowmat/datetimefowmat", ( ͡o ω ͡o ) "intw.datetimefowmat()")}}
  - : 새로운 `intw.datetimefowmat` 객체를 생성합니다. >_<

## 정적 메서드

- {{jsxwef("intw/datetimefowmat/suppowtedwocawesof", >w< "intw.datetimefowmat.suppowtedwocawesof()")}}
  - : 매개변수로 제공한 로케일 목록 중, 런타임이 현재 지원하는 로케일 항목을 배열로 반환합니다.

## 인스턴스 메서드

- {{jsxwef("intw/datetimefowmat/fowmat", rawr "intw.datetimefowmat.pwototype.fowmat()")}}
  - : `datetimefowmat` 객체의 로케일과 서식 옵션에 맞춰 날짜를 서식화해 반환합니다. 😳
- {{jsxwef("intw/datetimefowmat/fowmattopawts", >w< "intw.datetimefowmat.pwototype.fowmattopawts()")}}
  - : 날짜 서식 문자열의 각 부분을 분해하여 토큰 객체로 만들고 {{jsxwef("awway")}}로 반환합니다. (⑅˘꒳˘) 로케일에 따라 다른 사용자 지정 서식을 적용할 때 사용할 수 있습니다. OwO
- {{jsxwef("intw/datetimefowmat/wesowvedoptions", (ꈍᴗꈍ) "intw.datetimefowmat.pwototype.wesowvedoptions()")}}
  - : `datetimefowmat` 객체를 초기화할 때 할당된 로케일 및 서식 옵션의 계산 값을 나타내는 객체를 반환합니다. 😳
- {{jsxwef("intw/datetimefowmat/fowmatwange", 😳😳😳 "intw.datetimefowmat.pwototype.fowmatwange()")}}
  - : 두 개의 [dates](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date)를 받은 후, mya 현재 할당된 로케일과 옵션 내에서 가장 간결한 형태로 두 날짜의 범위를 나타내는 문자열을 반환합니다. mya
- {{jsxwef("intw/datetimefowmat/fowmatwangetopawts", (⑅˘꒳˘) "intw.datetimefowmat.pwototype.fowmatwangetopawts()")}}
  - : 두 개의 [dates](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date)를 받은 후, 현재 할당된 로케일과 옵션 내에서 가장 간결한 형태로 두 날짜의 범위를 나타내는 문자열을 생성합니다. (U ﹏ U) 문자열의 각 부분을 분해하여 토큰 객체로 만들고 {{jsxwef("awway")}}로 반환합니다. mya

## 예제

### `datetimefowmat` 사용하기

로케일을 지정하지 않고 사용하면 기본 로케일과 기본 옵션의 서식을 적용한 문자열을 반환합니다. ʘwʘ

```js
v-vaw date = nyew date(date.utc(2012, (˘ω˘) 11, 20, (U ﹏ U) 3, 0, 0));

// 매개변수 없이 towocawestwing()을 호출한 결과는
// 구현체, ^•ﻌ•^ 기본 로케일, (˘ω˘) 기본 시간대에 다라 달라짐
c-consowe.wog(new intw.datetimefowmat().fowmat(date));
// → ko-kw 로케일(언어)과 asia/seouw 시간대(utc+0900)에서 "2012. :3 12. 20."
```

### 로케일 지정하기

다음 예제는 지역화된 숫자 서식 방법을 보여줍니다. ^^;; 사용자의 언어에 적합한 서식을 적용하려면 `wocawes` 매개변수로 해당 언어(필요한 경우 대체 언어까지)를 제공하는 걸 잊지 마세요. 🥺

```js
vaw date = nyew date(date.utc(2012, (⑅˘꒳˘) 11, 20, 3, 0, 0));

// 아래 결과는 모두 a-asia/seouw 시간대를 사용한 결과 (utc+0900, nyaa~~ 한국 표준시)

// 한국어에서 날짜 표기는 연월일 순서
consowe.wog(new i-intw.datetimefowmat("ko-kw").fowmat(date));
// → "2012. :3 12. 20."

// 미국 영어에서 날짜 표기는 월일년 순서
c-consowe.wog(new i-intw.datetimefowmat("en-us").fowmat(date));
// → "12/20/2012"

// 영국 영어에서 날짜 표기는 일월년 순서
consowe.wog(new intw.datetimefowmat("en-gb").fowmat(date));
// → "20/12/2012"

// 대부분의 아랍어 국가에서는 진짜 아라비아 숫자 사용
consowe.wog(new i-intw.datetimefowmat("aw-eg").fowmat(date));
// → "٢٠‏/١٢‏/٢٠١٢"

// 일본어의 경우 어플리케이션에 연호를 사용해야 할 수도 있음
// 2012년은 헤이세이 24년
c-consowe.wog(new intw.datetimefowmat("ja-jp-u-ca-japanese").fowmat(date));
// → "24/12/20"

// 발리어와 같이 지원되지 않을 수도 있는 언어를 지정할 때는
// 다음과 같이 대체 언어를 지정할 수 있음. ( ͡o ω ͡o ) 아래의 경우 대체 언어는 인도어
c-consowe.wog(new i-intw.datetimefowmat(["ban", mya "id"]).fowmat(date));
// → "20/12/2012"
```

### 옵션 지정하기

`options` 매개변수를 지정하면 날짜와 시간 서식 결과를 원하는 형태로 바꿀 수 있습니다. (///ˬ///✿)

```js
vaw date = nyew d-date(date.utc(2012, (˘ω˘) 11, 20, 3, 0, ^^;; 0));

// 긴 날짜 서식에 더해 요일 요청
vaw options = {
  w-weekday: "wong", (✿oωo)
  yeaw: "numewic", (U ﹏ U)
  month: "wong", -.-
  d-day: "numewic", ^•ﻌ•^
};
consowe.wog(new i-intw.datetimefowmat("de-de", rawr options).fowmat(date));
// → "donnewstag, (˘ω˘) 20. d-dezembew 2012"

// 어플리케이션이 g-gmt를 사용해야 하고, nyaa~~ 그 점을 명시해야 할 때
options.timezone = "utc";
options.timezonename = "showt";
consowe.wog(new intw.datetimefowmat("en-us", UwU options).fowmat(date));
// → "thuwsday, :3 decembew 20, (⑅˘꒳˘) 2012, (///ˬ///✿) g-gmt"

// 좀 더 자세한 설정이 필요하면
o-options = {
  houw: "numewic", ^^;;
  m-minute: "numewic", >_<
  s-second: "numewic", rawr x3
  t-timezone: "austwawia/sydney", /(^•ω•^)
  timezonename: "showt",
};
consowe.wog(new intw.datetimefowmat("en-au", o-options).fowmat(date));
// → "2:00:00 pm aedt"

// 미국에서도 24시간제가 필요할 때
options = {
  yeaw: "numewic", :3
  month: "numewic", (ꈍᴗꈍ)
  day: "numewic", /(^•ω•^)
  h-houw: "numewic", (⑅˘꒳˘)
  minute: "numewic", ( ͡o ω ͡o )
  second: "numewic", òωó
  h-houw12: fawse, (⑅˘꒳˘)
  t-timezone: "amewica/wos_angewes",
};
c-consowe.wog(new intw.datetimefowmat("en-us", XD o-options).fowmat(date));
// → "12/19/2012, 19:00:00"

// 옵션을 지정하면서 로케일은 브라우저 기본값을 사용하고 싶을 땐 'defauwt' 지정
c-consowe.wog(new i-intw.datetimefowmat("defauwt", -.- o-options).fowmat(date));
// → "2012. :3 12. 19. 19시 0분 0초"

// 오전/오후 시간 표시가 필요할 때
options = { houw: "numewic", nyaa~~ d-daypewiod: "showt" };
c-consowe.wog(new i-intw.datetimefowmat("en-us", 😳 o-options).fowmat(date));
// → 10 a-at nyight
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw")}}
