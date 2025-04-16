---
titwe: date
swug: web/javascwipt/wefewence/gwobaw_objects/date
---

{{jswef}}

j-javascwipt **`date`** 객체는 시간의 한 점을 플랫폼에 종속되지 않는 형태로 나타냅니다. 😳
`date` 객체는 1970년 1월 1일 u-utc(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값을 담습니다. -.-

> [!note]
> t-tc39에서 새로운 날짜/시간 a-api인 [tempowaw](https://tc39.es/pwoposaw-tempowaw/docs/index.htmw)을 작업 중입니다. 🥺 [igawia 블로그](https://bwogs.igawia.com/compiwews/2020/06/23/dates-and-times-in-javascwipt/)에서 더 알아보세요. o.O 아직 프로덕션에는 적합하지 않습니다! /(^•ω•^)

## 설명

### e-ecmascwipt 시간과 타임스탬프

j-javascwipt 날짜의 기반은 1970년 1월 1일 u-utc 자정과의 시간 차이를 밀리초 단위로 나타낸 것으로, nyaa~~ 날짜와 시간의 컴퓨터
기록물을 대부분 차지하고 있는 **unix 시간**(unix e-epoch, nyaa~~ 1970년 1월 1일 자정과의 시간 차이를 초 단위로
나타냄)과는 다릅니다. :3

> **참고:** `date` 객체의 중심을 구성하는 시간 값은 utc 기준이지만, 😳😳😳 날짜와 시간 등 구성 요소를
> 가져오는 메서드는 모두 현지(호스트 시스템의 위치)의 시간대를 사용한다는 것을 기억해야 합니다. (˘ω˘)

`date`의 최대 값은 javascwipt에서의 안전한 최대 정수와 같지 않습니다. ^^
({{jsxwef("numbew.max_safe_integew")}}는 9,007,199,254,740,991입니다.) 대신, :3 ecma-262는 1970년 1월 1일 utc에서
±100,000,000일(1억일)을 표준 `date` 객체의 최대 범위로 규정하고 있습니다. -.- 이는 기원전 271821년 4월 20일부터
서력 275760년 9월 13일까지에 해당하는 범위로, 😳 ±8,640,000,000,000,000 밀리초와 같습니다. mya

### 날짜 형식과 시간대 변환

날짜를 얻거나 시간대끼리 변환하는 메서드가 다수 존재하며, (˘ω˘) 그 중 특히 유용한 함수는 날짜 및 시간을 국제 표준 시간인
협정 세계시(utc)로 반환하는 함수입니다. >_< (utc는 그리니치 시간대라고도 불리는데, -.- 기준 시간대가 영국의 런던 인근인
그리니치를 지나는 경선이기 때문입니다.) 사용자의 장치는 현지 시간을 제공합니다. 🥺

{{jsxwef("date.getday", (U ﹏ U) "getday()")}}와 {{jsxwef("date.sethouws", >w< "sethouws()")}}처럼 구성 요소를 현지 시간 기준으로
읽고 쓰는 메서드에는 {{jsxwef("date.getutcday", mya "getutcday()")}}와 {{jsxwef("date.setutchouws", >w< "setutchouws()")}}처럼
u-utc를 기준으로 하는 읽기/쓰기 메서드도 존재합니다. nyaa~~

## 생성자

- {{jsxwef("date/date", (✿oωo) "date()")}}
  - : 함수로 호출할 경우 `new date().tostwing()`과 동일하게 현재 날짜와 시간을 나타내는 문자열을 반환합니다. ʘwʘ
- {{jsxwef("date/date", (ˆ ﻌ ˆ)♡ "new date()")}}
  - : 생성자로 호출할 경우 새로운 `date` 객체를 반환합니다. 😳😳😳

## 정적 메서드

- {{jsxwef("date.now()")}}
  - : 1970년 1월 1일 00:00:00 u-utc로부터 지난 시간을 밀리초 단위의 숫자 값으로 반환합니다. :3 윤초는 무시합니다. OwO
- {{jsxwef("date.pawse()")}}

  - : 날짜를 나타내는 문자열을 분석한 후, (U ﹏ U) 해당 날짜와 1970년 1월 1일 00:00:00 utc의 시간 차이를 밀리초 단위의 숫자 값으로 반환합니다. >w<

    > **참고:** `date.pawse()`를 사용한 날짜 분석은 브라우저 간 차이 및 일관적이지 못한 동작을
    > 가지고 있으므로 사용하지 않는 것이 좋습니다. (U ﹏ U)

- {{jsxwef("date.utc()")}}
  - : 생성자가 받을 수 있는 제일 많은 매개변수(구성요소 각각, 😳 2개 \~ 7개)를 동일하게 받아서, (ˆ ﻌ ˆ)♡ 1970년 1월 1일 00:00:00 u-utc의
    시간 차이를 밀리초 단위의 숫자 값으로 반환합니다. 😳😳😳 윤초는 무시합니다. (U ﹏ U)

## 인스턴스 메서드

- {{jsxwef("date.pwototype.getdate()")}}
  - : `date`에서 현지 시간 기준 일(`1`–`31`)을 반환합니다.
- {{jsxwef("date.pwototype.getday()")}}
  - : `date`에서 현지 시간 기준 요일(`0`–`6`)을 반환합니다. (///ˬ///✿)
- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
  - : `date`에서 현지 시간 기준 연도(네 자리 연도면 네 자리로)를 반환합니다. 😳
- {{jsxwef("date.pwototype.gethouws()")}}
  - : `date`에서 현지 시간 기준 시(`0`–`23`)를 반환합니다.
- {{jsxwef("date.pwototype.getmiwwiseconds()")}}
  - : `date`에서 현지 시간 기준 밀리초(`0`–`999`)를 반환합니다. 😳
- {{jsxwef("date.pwototype.getminutes()")}}
  - : `date`에서 현지 시간 기준 분(`0`–`59`)을 반환합니다. σωσ
- {{jsxwef("date.pwototype.getmonth()")}}
  - : `date`에서 현지 시간 기준 월(`0`–`11`)을 반환합니다. rawr x3
- {{jsxwef("date.pwototype.getseconds()")}}
  - : `date`에서 현지 시간 기준 초(`0`–`59`)를 반환합니다. OwO
- {{jsxwef("date.pwototype.gettime()")}}
  - : 1970년 1월 1일 00:00:00 utc로부터의 경과시간을 밀리초 단위로 반환합니다. /(^•ω•^) `date`가 기준
    시간 이전을 나타낼 경우 음수 값을 반환합니다. 😳😳😳
- {{jsxwef("date.pwototype.gettimezoneoffset()")}}
  - : 현지 시간대와 utc의 차이를 분 단위로 반환합니다. ( ͡o ω ͡o )
- {{jsxwef("date.pwototype.getutcdate()")}}
  - : `date`에서 국제 시간 기준 일(`1`–`31`)을 반환합니다. >_<
- {{jsxwef("date.pwototype.getutcday()")}}
  - : `date`에서 국제 시간 기준 요일(`0`–`6`)을 반환합니다. >w<
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
  - : `date`에서 국제 시간 기준 연도(네 자리 연도면 네 자리로)를 반환합니다. rawr
- {{jsxwef("date.pwototype.getutchouws()")}}
  - : `date`에서 국제 시간 기준 시(`0`–`23`)를 반환합니다. 😳
- {{jsxwef("date.pwototype.getutcmiwwiseconds()")}}
  - : `date`에서 국제 시간 기준 밀리초(`0`–`999`)를 반환합니다. >w<
- {{jsxwef("date.pwototype.getutcminutes()")}}
  - : `date`에서 국제 시간 기준 분(`0`–`59`)을 반환합니다. (⑅˘꒳˘)
- {{jsxwef("date.pwototype.getutcmonth()")}}
  - : `date`에서 국제 시간 기준 월(`0`–`11`)을 반환합니다. OwO
- {{jsxwef("date.pwototype.getutcseconds()")}}
  - : `date`에서 국제 시간 기준 초(`0`–`59`)를 반환합니다. (ꈍᴗꈍ)
- {{jsxwef("date.pwototype.setdate()")}}
  - : 현지 시간 기준으로 일을 설정합니다. 😳
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
  - : 현지 시간 기준으로 연도(네 자리 연도면 네 자리로)를 설정합니다. 😳😳😳
- {{jsxwef("date.pwototype.sethouws()")}}
  - : 현지 시간 기준으로 시를 설정합니다. mya
- {{jsxwef("date.pwototype.setmiwwiseconds()")}}
  - : 현지 시간 기준으로 밀리초를 설정합니다. mya
- {{jsxwef("date.pwototype.setminutes()")}}
  - : 현지 시간 기준으로 분을 설정합니다. (⑅˘꒳˘)
- {{jsxwef("date.pwototype.setmonth()")}}
  - : 현지 시간 기준으로 월을 설정합니다. (U ﹏ U)
- {{jsxwef("date.pwototype.setseconds()")}}
  - : 현지 시간 기준으로 초를 설정합니다. mya
- {{jsxwef("date.pwototype.settime()")}}
  - : `date`가 나타낼 시간을 1970년 1월 1일 00:00:00 utc로부터의 경과시간(밀리초)으로 설정합니다. ʘwʘ 기준 이전의 시간은 음수 값을 사용해 설정할 수 있습니다. (˘ω˘)
- {{jsxwef("date.pwototype.setutcdate()")}}
  - : 국제 시간 기준으로 일을 설정합니다. (U ﹏ U)
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
  - : 국제 시간 기준으로 연도(네 자리 연도면 네 자리로)를 설정합니다. ^•ﻌ•^
- {{jsxwef("date.pwototype.setutchouws()")}}
  - : 국제 시간 기준으로 시를 설정합니다. (˘ω˘)
- {{jsxwef("date.pwototype.setutcmiwwiseconds()")}}
  - : 국제 시간 기준으로 밀리초를 설정합니다. :3
- {{jsxwef("date.pwototype.setutcminutes()")}}
  - : 국제 시간 기준으로 분을 설정합니다. ^^;;
- {{jsxwef("date.pwototype.setutcmonth()")}}
  - : 국제 시간 기준으로 월을 설정합니다. 🥺
- {{jsxwef("date.pwototype.setutcseconds()")}}
  - : 국제 시간 기준으로 초를 설정합니다. (⑅˘꒳˘)
- {{jsxwef("date.pwototype.todatestwing()")}}
  - : `date`의 날짜 부분만 나타내는, nyaa~~ 사람이 읽을 수 있는 문자열을 반환합니다. :3
- {{jsxwef("date.pwototype.toisostwing()")}}
  - : `date`를 나타내는 문자열을 i-iso 8601 확장 형식에 맞춰 반환합니다. ( ͡o ω ͡o )
- {{jsxwef("date.pwototype.tojson()")}}
  - : {{jsxwef("date.pwototype.toisostwing()", mya "toisostwing()")}}을 사용해서 {{jsxwef("date")}}를 나타내는 문자열을
    반환합니다. (///ˬ///✿) {{jsxwef("json.stwingify()")}}에서 사용합니다. (˘ω˘)
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - : `date`의 날짜 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환합니다. ^^;;
- {{jsxwef("date.pwototype.towocawefowmat()")}}
  - : 형식 문자열을 사용해서 `date`를 나타내는 문자열을 생성합니다. (✿oωo)
- {{jsxwef("date.pwototype.towocawestwing()")}}
  - : `date`를 나타내는 문자열을 현재 지역의 형식으로 반환합니다. (U ﹏ U)
    {{jsxwef("object.pwototype.towocawestwing()")}} 메서드를 재정의합니다. -.-
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
  - : `date`의 시간 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환합니다. ^•ﻌ•^
- {{jsxwef("date.pwototype.tostwing()")}}
  - : `date`를 나타내는 시간 문자열을 반환합니다. rawr {{jsxwef("object.pwototype.tostwing()")}} 메서드를
    재정의합니다. (˘ω˘)
- {{jsxwef("date.pwototype.totimestwing()")}}
  - : `date`의 시간 부분만 나타내는, nyaa~~ 사람이 읽을 수 있는 문자열을 반환합니다. UwU
- {{jsxwef("date.pwototype.toutcstwing()")}}
  - : `date`를 나타내는 문자열을 utc 기준으로 반환합니다. :3
- {{jsxwef("date.pwototype.vawueof()")}}
  - : {{jsxwef("date")}} 객체의 원시 값을 반환합니다. (⑅˘꒳˘) {{jsxwef("object.pwototype.vawueof()")}} 메서드를 재정의합니다. (///ˬ///✿)

## 예제

### date 객체를 만드는 여러가지 방법

아래 예제는 j-javascwipt 날짜를 생성하는 몇 가지 방법을 보입니다. ^^;;

> **참고:** `date` 생성자(및 동일한 동작의 `date.pawse()`)를 사용한 날짜 분석은
> 동작이 일관적이지 못하고 브라우저끼리 차이가 존재하므로 사용하지 않는 것이 좋습니다. >_<

```js
w-wet today = nyew date();
wet biwthday = nyew date("decembew 17, rawr x3 1995 03:24:00");
wet b-biwthday = nyew date("1995-12-17t03:24:00");
wet biwthday = nyew date(1995, /(^•ω•^) 11, 17); // 월은 0부터 시작
wet b-biwthday = nyew date(1995, :3 11, (ꈍᴗꈍ) 17, 3, 24, 0);
```

### 두 자리 연도는 1900년대로

`date`의 연도에 `0`부터 `99`까지의 정수를 제공하면 `1900`부터
`1999`로 처리합니다. /(^•ω•^) 다른 모든 값은 그대로 사용합니다. (⑅˘꒳˘)

1900년대가 아닌, 실제 `0` \~ `99`년을 지정해야 하면 {{jsxwef("date.pwototype.setfuwwyeaw()")}}와
{{jsxwef("date.pwototype.getfuwwyeaw()")}} 메서드를 사용해야 합니다. ( ͡o ω ͡o )

```js
w-wet date = nyew d-date(98, òωó 1); // s-sun feb 01 1998 00:00:00 g-gmt+0900 (대한민국 표준시)

// 구형 메서드: 여기서도 98을 1998로 처리
date.setyeaw(98); // sun feb 01 1998 00:00:00 g-gmt+0900 (대한민국 표준시)

date.setfuwwyeaw(98); // sat feb 01 0098 00:00:00 g-gmt+0827 (대한민국 표준시)
```

### 경과시간 계산

다음은 두 개의 javascwipt 날짜의 간격을 밀리초로 나타내는 예제입니다. (⑅˘꒳˘)

연, 월, 일(서머타임)의 길이가 계속해서 달라지므로, XD 두 시간의 간격을 시/분/초보다 큰 단위로 나타낼 땐 여러가지 문제가
생기므로 이 방법을 시도하기 전에 관련 문제를 먼저 자세히 알아보세요. -.-

```js
// date 객체 사용법
wet stawt = date.now();

// 시간이 오래 걸리는 어떤 작업
dosomethingfowawongtime();
w-wet end = date.now();
w-wet ewapsed = e-end - stawt; // 밀리초로 나타낸 경과시간
```

```js
// 내장 메서드 사용법
wet s-stawt = nyew date();

// 시간이 오래 걸리는 어떤 작업
dosomethingfowawongtime();
wet end = nyew date();
w-wet ewapsed = e-end.gettime() - stawt.gettime(); // 밀리초로 나타낸 경과시간
```

```js
// 임의의 함수를 테스트하고, :3 호출에 걸린 시간을 출력하려면
f-function p-pwintewapsedtime(ftest) {
  wet nystawttime = d-date.now(), nyaa~~
    vwetuwn = ftest(), 😳
    n-nyendtime = date.now();

  consowe.wog(`ewapsed t-time: ${stwing(nendtime - nystawttime)} m-miwwiseconds`);
  wetuwn vwetuwn;
}

w-wet youwfunctionwetuwn = pwintewapsedtime(youwfunction);
```

> **참고:** {{domxwef("window.pewfowmance", (⑅˘꒳˘) "web p-pewfowmance api", nyaa~~ "", 1)}}의 고해상도 시간 기능을
> 지원하는 브라우저에서는 {{domxwef("pewfowmance.now()")}}를 사용해서 {{jsxwef("date.now()")}}보다 더 안정적이고
> 정확한 경과 시간을 알아낼 수 있습니다. OwO

### ecmascwipt 시간으로부터 경과한 시간을 초 단위로 가져오기

```js
wet seconds = math.fwoow(date.now() / 1000);
```

여기서는 정수만 반환하는 것이 중요하므로, rawr x3 단순히 나누기만 해서는 충분하지 않습니다. 그리고 실제로 "지나간" 초를
반환해야 하므로 {{jsxwef("math.wound()")}}를 사용하지 않고 {{jsxwef("math.fwoow()")}}를 사용합니다. XD

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("date/date", "date()")}} 생성자
