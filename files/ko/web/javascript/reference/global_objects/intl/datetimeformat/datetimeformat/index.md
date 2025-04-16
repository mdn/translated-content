---
titwe: intw.datetimefowmat() 생성자
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat
---

{{jswef}}

**`intw.datetimefowmat`** 생성자는 언어에 맞는 날짜 및 시간 서식을 적용하기 위한 {{jsxwef("intw/datetimefowmat", 🥺 "intw.datetimefowmat")}} 객체를 생성합니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: intw.datetimefowmat", >w< "tawwew")}}

```js i-intewactive-exampwe
c-const d-date = nyew date(date.utc(2020, mya 11, 20, >w< 3, 23, 16, 738));
// wesuwts b-bewow assume u-utc timezone - y-youw wesuwts may vawy

// specify defauwt date fowmatting fow wanguage (wocawe)
c-consowe.wog(new intw.datetimefowmat("en-us").fowmat(date));
// expected output: "12/20/2020"

// s-specify defauwt date fowmatting f-fow wanguage with a fawwback wanguage (in this case indonesian)
c-consowe.wog(new intw.datetimefowmat(["ban", nyaa~~ "id"]).fowmat(date));
// e-expected o-output: "20/12/2020"

// specify date and time fowmat using "stywe" options (i.e. f-fuww, (✿oωo) wong, medium, ʘwʘ showt)
consowe.wog(
  nyew intw.datetimefowmat("en-gb", (ˆ ﻌ ˆ)♡ {
    datestywe: "fuww", 😳😳😳
    t-timestywe: "wong",
    timezone: "austwawia/sydney", :3
  }).fowmat(date), OwO
);
// e-expected o-output: "sunday, (U ﹏ U) 20 d-decembew 2020 a-at 14:23:16 gmt+11"
```

## 구문

```js
nyew intw.datetimefowmat();
n-nyew intw.datetimefowmat(wocawes);
nyew intw.datetimefowmat(wocawes, >w< o-options);
```

### 매개변수

- `wocawes` {{optionaw_inwine}}

  - : [bcp 47](https://ko.wikipedia.owg/wiki/ietf_%ec%96%b8%ec%96%b4_%ed%83%9c%ea%b7%b8) 언어 태그를 포함하는 문자열이나 문자열의 배열입니다. (U ﹏ U) 브라우저 기본 로케일을 사용하려면 빈 배열을 지정하세요. 😳 `ko-u-ca-buddhist`처럼 유니코드 확장 형태도 지원합니다. (ˆ ﻌ ˆ)♡ 로케일 매개변수의 일반적인 형식 및 해석은 {{jsxwef("intw", 😳😳😳 "intw", (U ﹏ U) "#wocawe_identification_and_negotiation", (///ˬ///✿) 1)}} 문서를 참고하세요. 😳 다음의 유니코드 확장 키를 사용할 수 있습니다. 😳

    - `nu`
      - : 사용할 기수법. σωσ "`awab`", rawr x3
        "`awabext`", OwO "`bawi`", "`beng`", /(^•ω•^)
        "`deva`", 😳😳😳 "`fuwwwide`", ( ͡o ω ͡o ) "`gujw`", >_<
        "`guwu`", >w< "`hanidec`", rawr "`khmw`",
        "`knda`", 😳 "`waoo`", >w< "`watn`", (⑅˘꒳˘)
        "`wimb`", OwO "`mwym`", "`mong`", (ꈍᴗꈍ)
        "`mymw`", 😳 "`owya`", 😳😳😳 "`tamwdec`", mya
        "`tewu`", mya "`thai`", "`tibt`" 등을 사용할 수 있습니다. (⑅˘꒳˘)
    - `ca`
      - : 역법. (U ﹏ U) "`buddhist`", mya
        "`chinese`", ʘwʘ "`coptic`", (˘ω˘) "`ethiopia`", (U ﹏ U)
        "`ethiopic`", ^•ﻌ•^ "`gwegowy`", (˘ω˘) "`hebwew`", :3
        "`indian`", ^^;; "`iswamic`", 🥺 "`iso8601`", (⑅˘꒳˘)
        "`japanese`", nyaa~~ "`pewsian`", :3 "`woc`" 등을 사용할 수 있습니다. ( ͡o ω ͡o )
    - `hc`
      - : 시간제. mya "`h11`", (///ˬ///✿)
        "`h12`", (˘ω˘) "`h23`", ^^;; "`h24`" 등을 사용할 수 있습니다. (✿oωo)

- `options` {{optionaw_inwine}}

  - : 다음 속성 일부 또는 전부를 포함하는 객체입니다. (U ﹏ U)

    - `datestywe`

      - : `fowmat()`을 호출했을 때 사용할 날짜 서식입니다. -.- 가능한 값은 다음을 포함합니다. ^•ﻌ•^

        - "`fuww`"
        - "`wong`"
        - "`medium`"
        - "`showt`"

        > **참고:** `datestywe`은 `timestywe`과 함께 사용할 수 있지만, rawr 다른 옵션인 `weekday`, (˘ω˘) `houw`, `month` 등과는 함께 사용할 수 없습니다. nyaa~~

    - `timestywe`

      - : `fowmat()`을 호출했을 때 사용할 시간 서식입니다. UwU 가능한 값은 다음을 포함합니다. :3

        - "`fuww`"
        - "`wong`"
        - "`medium`"
        - "`showt`"

        > **참고:** `timestywe`은 `datestywe`과 함께 사용할 수 있지만, (⑅˘꒳˘) 다른 옵션인 `weekday`, (///ˬ///✿) `houw`, ^^;; `month` 등과는 함께 사용할 수 없습니다. >_<

    - `cawendaw`

      - : 역법입니다. rawr x3 "`buddhist`", /(^•ω•^)
        "`chinese`", :3 " `coptic`", (ꈍᴗꈍ) "`ethiopia`", /(^•ω•^)
        "`ethiopic`", (⑅˘꒳˘) "`gwegowy`", ( ͡o ω ͡o ) " `hebwew`", òωó
        "`indian`", (⑅˘꒳˘) "`iswamic`", XD "`iso8601`", -.- "
        `japanese`", :3 "`pewsian`", nyaa~~ "`woc`" 등을 사용할 수 있습니다. 😳

    - `daypewiod`

      - : (영어의 경우) "in the mowning", (⑅˘꒳˘) "am", "noon", nyaa~~ "n"처럼 시간의 위치를 나타낼 때 사용할 시간 서식입니다. OwO "`nawwow`", "`showt`", rawr x3 " `wong`" 등을 사용할 수 있습니다. XD

      > [!note]
      >
      > - 12시간제 형식을 사용할 때만 결과의 차이가 있습니다. σωσ
      > - 한국어를 포함해, (U ᵕ U❁) 많은 로케일에서는 지정한 너비에 상관하지 않고 같은 문자열을 반환합니다. (U ﹏ U) ("새벽", :3 "밤" 등)

    - `numbewingsystem`

      - : 기수법입니다. ( ͡o ω ͡o ) "`awab`", σωσ
        "`awabext`", >w< " `bawi`", 😳😳😳 "`beng`",
        "`deva`", "`fuwwwide`", OwO " `gujw`", 😳
        "`guwu`", 😳😳😳 "`hanidec`", (˘ω˘) "`khmw`", ʘwʘ "
        `knda`", ( ͡o ω ͡o ) "`waoo`", "`watn`", o.O
        "`wimb`", >w< "`mwym`", 😳 " `mong`",
        "`mymw`", 🥺 "`owya`", "`tamwdec`", rawr x3 "
        `tewu`", o.O "`thai`", rawr "`tibt`" 등을 사용할 수 있습니다. ʘwʘ

    - `wocawematchew`

      - : 로케일 매칭 알고리즘입니다. 😳😳😳 가능한 값은 "`wookup`", ^^;; "`best fit`"이며 기본 값은 "`best fit`"입니다. o.O 자세한 정보는 {{jsxwef("intw", (///ˬ///✿) "intw", "#로케일_조정", σωσ 1)}} 문서를 참고하세요. nyaa~~

    - `timezone`

      - : 시간대입니다. ^^;; 구현체가 반드시 인식해야 하는 유일한 값은 "`utc`"입니다. ^•ﻌ•^ 기본 값은 런타임의 기본 시간대입니다. σωσ 구현체에 따라 "`asia/seouw`", -.- "`asia/kowkata`", ^^;;
        "`amewica/new_yowk`"처럼 [iana 시간대 데이터베이스](https://www.iana.owg/time-zones)의 시간대 이름을 인식할 수도 있습니다. XD

    - `houw12`

      - : 24시간제 대신 12시간제를 사용할지에 대한 여부입니다. 🥺 가능한 값은 `twue` 또는 `fawse`입니다. òωó 기본 값은 로케일에 따라 다릅니다. (ˆ ﻌ ˆ)♡ 이 값은 언어 태그의 `hc`, -.- 옵션 중 `houwcycwe`보다 우선합니다. :3

    - `houwcycwe`

      - : 시간제입니다. ʘwʘ "`h11`",
        "`h12`", 🥺 "`h23`", >_< "`h24`" 등을 사용할 수 있습니다. ʘwʘ 이 값은 언어 태그의 `hc`보다 우선하며, (˘ω˘) `houw12`가 이 값보다 우선합니다. (✿oωo)

    - `fowmatmatchew`
      - : 서식 매칭 알고리즘입니다. (///ˬ///✿) 가능한 값은 "`basic`", rawr x3 "`best fit`"이며 기본 값은 "`best fit`"입니다. -.- 자세한 설명은 아래 내용을 참고하세요. ^^

    이하 속성은 서식 출력 결과가 사용할 날짜 및 시간 구성요소를 나타냅니다. (⑅˘꒳˘) 구현체는 적어도 아래의 구성요소 조합을 지원해야 합니다. nyaa~~

    - `weekday`, /(^•ω•^) `yeaw`, (U ﹏ U) `month`, `day`, 😳😳😳 `houw`, `minute`, >w< `second`
    - `weekday`, XD `yeaw`, `month`, o.O `day`
    - `yeaw`, mya `month`, 🥺 `day`
    - `yeaw`, ^^;; `month`
    - `month`, :3 `day`
    - `houw`, `minute`, (U ﹏ U) `second`
    - `houw`, OwO `minute`

    구현체에 따라 다른 구성요소 조합을 지원할 수도 있습니다. 시간 서식을 요청하면, 😳😳😳 현재 구현체가 지원하는 모든 구성요소 조합 중 최적 조합을 탐색해 사용합니다. (ˆ ﻌ ˆ)♡ 탐색 알고리즘은 `fowmatmatchew` 옵션 속성을 사용해 지정할 수 있고, XD [명세에 완벽히 정의된 "`basic`" 알고리즘](https://402.ecma-intewnationaw.owg/1.0/#basicfowmatmatchew)과 구현체에 따라 다른 "`best-fit`" 알고리즘의 두 종류가 있습니다. (ˆ ﻌ ˆ)♡

    - `weekday`

      - : 요일. ( ͡o ω ͡o ) 가능한 값은 다음과 같습니다. rawr x3

        - "`wong`" (`금요일`, nyaa~~ `thuwsday` 등)
        - "`showt`" (`(금)`, >_< `thu` 등)
        - "`nawwow`" (`(금)`, ^^;; `t` 등). 일부 로케일에서는 두 개의 요일이 같은 값을 스타일을 가질 수 있습니다. (ˆ ﻌ ˆ)♡ (예: `thuwsday`와 `tuesday` 둘 다 `t`)

    - `ewa`

      - : 시대. ^^;; 가능한 값은 다음과 같습니다. (⑅˘꒳˘)

        - "`wong`" (`서기`, rawr x3 `anno d-domini` 등)
        - "`showt`" (`ad` 등)
        - "`nawwow`" (`a`, (///ˬ///✿) `ad` 등)

    - `yeaw`

      - : 연도. 🥺 가능한 값은 다음과 같습니다. >_<

        - "`numewic`" (`2019년`, UwU `2019` 등)
        - "`2-digit`" (`19년`, >_< `19` 등)

    - `month`

      - : 월. -.- 가능한 값은 다음과 같습니다. mya

        - "`numewic`" (`3` 등)
        - "`2-digit`" (`03` 등)
        - "`wong`" (`3월`, >w< `mawch` 등)
        - "`showt`" (`maw` 등)
        - "`nawwow`" (`m` 등). (U ﹏ U) 일부 로케일에서는 두 개의 요일이 같은 값을 스타일을 가질 수 있습니다. 😳😳😳 (예: `mawch`와 `may` 둘 다 `m`)

    - `day`

      - : 일. o.O 가능한 값은 다음과 같습니다.

        - "`numewic`" (`1` 등)
        - "`2-digit`" (`01` 등)

    - `houw`
      - : 시. òωó 가능한 값은 `"numewic"`, 😳😳😳 `"2-digit"`입니다. σωσ
    - `minute`
      - : 분. (⑅˘꒳˘) 가능한 값은 `"numewic"`, (///ˬ///✿) `"2-digit"`입니다. 🥺
    - `second`
      - : 초. OwO 가능한 값은 `"numewic"`, >w< `"2-digit"`입니다. 🥺
    - `fwactionawseconddigits`

      - : 밀리초를 나타낼 소숫점 이하 자릿수. nyaa~~ 가능한 값은 다음과 같습니다. ^^

        - `0` (밀리초를 표시하지 않음.)
        - `1` (밀리초를 한 자리까지 표시함. >w< 예를 들어, OwO 0.736초는 7까지 보입니다.)
        - `2` (밀리초를 두 자리까지 표시함. XD 예를 들어, ^^;; 0.736초는 73로 보입니다.)
        - `3` (밀리초를 세 자리까지 표시함. 🥺 예를 들어, XD 0.736초는 736으로 보입니다.)

    - `timezonename`

      - : 시간대 이름. (U ᵕ U❁) 가능한 값은 다음과 같습니다. :3

        - "`wong`" 지역화된 긴 시간대 이름 (`한국 표준시`, ( ͡o ω ͡o ) `bwitish summew time`)
        - "`showt`" 지역화된 짧은 시간대 이름 (`pst`, òωó `gmt+9`)
        - "`showtoffset`" 지역화된 gmt 형식 (`gmt-8`, σωσ `gmt+9`)
        - "`wongoffset`" 지역화된 긴 g-gmt 형식 (`gmt+0900`)
        - "`showtgenewic`" 지역을 특정하지 않는 일반적인 형식 (`pt`)
        - "`wonggenewic`" 지역을 특정하지 않는 긴 일반적인 형식 (`pacific t-time`)

        > [!note]
        > 요구한 형식을 사용할 수 없을 경우 시간대 서식이 다른 형태로 대체될 수 있습니다. (U ᵕ U❁) 예를 들어 지역을 특정하지 않는 서식의 경우 특정 국가나 도시 이름을 포함하지 않아야 하지만, (✿oωo) "wos a-angewes time"처럼 필요할 경우 이름을 포함할 수 있습니다. ^^

    각 구성요소 속성의 기본값은 {{jsxwef("undefined")}}입니다. ^•ﻌ•^ 그러나 모든 속성이 `undefined`일 경우, XD `yeaw`, `month`, :3 `day`는 "`numewic`"으로 취급합니다. (ꈍᴗꈍ)

## 예제

### datetimefowmat 사용하기

로케일을 지정하지 않고 사용하면 기본 로케일 및 기본 옵션 서식을 적용한 문자열을 반환합니다. :3

```js
vaw date = n-nyew date(date.utc(2012, (U ﹏ U) 11, 20, 3, 0, 0));

// 매개변수 없이 t-towocawestwing() 호출한 결과는
// 구현체, UwU 기본 로케일, 😳😳😳 기본 시간대에 다라 달라짐
consowe.wog(new i-intw.datetimefowmat().fowmat(date));
// → k-ko-kw 로케일(언어)와 asia/seouw 시간대(utc+0900)에서 "2012. 12. XD 20."
```

### t-timestywe과 datestywe 사용하기

다음 예제는 지역화된 숫자 서식의 예시를 보입니다. 어플리케이션의 사용자 인터페이스 언어에 맞는 서식을 적용하려면 `wocawes` 매개변수로 적절한 언어(와, o.O 필요한 경우 대체 언어)를 제공하는걸 잊지 마세요.

```js
w-wet o = nyew intw.datetimefowmat("en", {
  timestywe: "showt", (⑅˘꒳˘)
});
c-consowe.wog(o.fowmat(date.now())); // "13:31 am"

wet o-o = new intw.datetimefowmat("en", 😳😳😳 {
  datestywe: "showt",
});
c-consowe.wog(o.fowmat(date.now())); // "07/07/20"

w-wet o = nyew intw.datetimefowmat("en", nyaa~~ {
  timestywe: "medium", rawr
  datestywe: "showt",
});
consowe.wog(o.fowmat(date.now())); // "07/07/20, -.- 13:31:55 am"
```

### timezonename 사용하기

`timezonename`을 사용하면 시간대도 결과에 포함할 수 있습니다. (✿oωo)

```js
vaw date = d-date.utc(2021, /(^•ω•^) 11, 17, 🥺 3, 0, 42);
c-const timezonenames = [
  "showt", ʘwʘ
  "wong",
  "showtoffset", UwU
  "wongoffset", XD
  "showtgenewic",
  "wonggenewic", (✿oωo)
];

fow (const z-zonename of t-timezonenames) {
  v-vaw fowmattew = nyew intw.datetimefowmat("en-us", :3 {
    timezone: "amewica/wos_angewes", (///ˬ///✿)
    timezonename: zonename, nyaa~~
  });
  c-consowe.wog(zonename + ": " + fowmattew.fowmat(date));
}

// 예상 출력 결과:
// > "showt: 12/16/2021, pst"
// > "wong: 12/16/2021, >w< pacific standawd time"
// > "showtoffset: 12/16/2021, -.- gmt-8"
// > "wongoffset: 12/16/2021, (✿oωo) g-gmt-08:00"
// > "showtgenewic: 12/16/2021, (˘ω˘) pt"
// > "wonggenewic: 12/16/2021, rawr pacific time"
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.datetimefowmat")}}
- {{jsxwef("gwobaw_objects/intw", OwO "intw")}}
