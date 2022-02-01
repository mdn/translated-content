---
title: Intl.DateTimeFormat() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
tags:
  - Constructor
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.DateTimeFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
---
{{JSRef}}

**`Intl.DateTimeFormat`** 생성자는 언어에 맞는 날짜 및 시간 서식을 적용하기 위한 {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} 객체를 생성합니다.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

## 구문

```js
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)
```

### 매개변수

- `locales` {{optional_inline}}

  - : [BCP 47](https://ko.wikipedia.org/wiki/IETF_%EC%96%B8%EC%96%B4_%ED%83%9C%EA%B7%B8) 언어 태그를 포함하는 문자열이나 문자열의 배열입니다. 브라우저 기본 로케일을 사용하려면 빈 배열을 지정하세요. `en-US-u-ca-buddhist`처럼 유니코드 확장 형태도 지원합니다. 로케일 매개변수의 일반적인 형식 및 해석은 {{jsxref("Intl", "Intl", "#Locale_identification_and_negotiation", 1)}} 문서를 참고하세요. 다음의 유니코드 확장 키를 사용할 수 있습니다.

    - `nu`
      - : 사용할 기수법. "`arab`",
        "`arabext`", "`bali`", "`beng`",
        "`deva`", "`fullwide`", "`gujr`",
        "`guru`", "`hanidec`", "`khmr`",
        "`knda`", "`laoo`", "`latn`",
        "`limb`", "`mlym`", "`mong`",
        "`mymr`", "`orya`", "`tamldec`",
        "`telu`", "`thai`", "`tibt`" 등을 사용할 수 있습니다.
    - `ca`
      - : 역법. "`buddhist`",
        "`chinese`", "`coptic`", "`ethiopia`",
        "`ethiopic`", "`gregory`", "`hebrew`",
        "`indian`", "`islamic`", "`iso8601`",
        "`japanese`", "`persian`", "`roc`" 등을 사용할 수 있습니다.
    - `hc`
      - : 시간제. "`h11`",
        "`h12`", "`h23`", "`h24`" 등을 사용할 수 있습니다.

- `options` {{optional_inline}}

  - : 다음 속성 일부 또는 전부를 포함하는 객체입니다.

    - `dateStyle`
      - : `format()`을 호출했을 때 사용할 날짜 서식입니다. 가능한 값은 다음을 포함합니다.
        - "`full`"
        - "`long`"
        - "`medium`"
        - "`short`"

        > **참고:** `dateStyle`은 `timeStyle`과 함께 사용할 수 있지만, 다른 옵션인 `weekday`, `hour`, `month` 등과는 함께 사용할 수 없습니다.

    - `timeStyle`
      - : `format()`을 호출했을 때 사용할 시간 서식입니다. 가능한 값은 다음을 포함합니다.
        - "`full`"
        - "`long`"
        - "`medium`"
        - "`short`"

        > **참고:** `timeStyle`은 `dateStyle`과 함께 사용할 수 있지만, 다른 옵션인 `weekday`, `hour`, `month` 등과는 함께 사용할 수 없습니다.

    - `calendar`
      - : 역법입니다. "`buddhist`",
        "`chinese`", " `coptic`", "`ethiopia`",
        "`ethiopic`", "`gregory`", " `hebrew`",
        "`indian`", "`islamic`", "`iso8601`", "
        `japanese`", "`persian`", "`roc`" 등을 사용할 수 있습니다.

    - `dayPeriod`
      - : (영어의 경우) "in the morning", "am", "noon", "n"처럼 시간의 위치를 나타낼 때 사용할 시간 서식입니다. "`narrow`", "`short`", " `long`" 등을 사용할 수 있습니다.

      > **참고:**
      >
      > - 12시간제 형식을 사용할 때만 결과의 차이가 있습니다.
      > - 한국어를 포함해, 많은 로케일에서는 지정한 너비에 상관하지 않고 같은 문자열을 반환합니다. ("새벽", "밤" 등)

    - `numberingSystem`
      - : 기수법입니다. "`arab`",
        "`arabext`", " `bali`", "`beng`",
        "`deva`", "`fullwide`", " `gujr`",
        "`guru`", "`hanidec`", "`khmr`", "
        `knda`", "`laoo`", "`latn`",
        "`limb`", "`mlym`", " `mong`",
        "`mymr`", "`orya`", "`tamldec`", "
        `telu`", "`thai`", "`tibt`" 등을 사용할 수 있습니다.

    - `localeMatcher`
      - : 로케일 매칭 알고리즘입니다. 가능한 값은 "`lookup`", "`best fit`"이며 기본 값은 "`best fit`"입니다. 자세한 정보는 {{jsxref("Intl", "Intl", "#로케일_조정", 1)}} 문서를 참고하세요.

    - `timeZone`
      - : 시간대입니다. 구현체가 반드시 인식해야 하는 유일한 값은 "`UTC`"입니다. 기본 값은 런타임의 기본 시간대입니다. 구현체에 따라 "`Asia/Seoul`", "`Asia/Kolkata`",
        "`America/New_York`"처럼 [IANA 시간대 데이터베이스](https://www.iana.org/time-zones)의 시간대 이름을 인식할 수도 있습니다.

    - `hour12`
      - : 24시간제 대신 12시간제를 사용할지에 대한 여부입니다. 가능한 값은 `true` 또는 `false`입니다. 기본 값은 로케일에 따라 다릅니다. 이 값은 언어 태그의 `hc`, 옵션 중 `hourCycle`보다 우선합니다.

    - `hourCycle`
      - : 시간제입니다. "`h11`",
        "`h12`", "`h23`", "`h24`" 등을 사용할 수 있습니다. 이 값은 언어 태그의 `hc`보다 우선하며, `hour12`가 이 값보다 우선합니다.

    - `formatMatcher`
      - : 서식 매칭 알고리즘입니다. 가능한 값은 "`basic`", "`best fit`"이며 기본 값은 "`best fit`"입니다. 자세한 설명은 아래 내용을 참고하세요.

    이하 속성은 서식 출력 결과가 사용할 날짜 및 시간 구성요소를 나타냅니다. 구현체는 적어도 아래의 구성요소 조합을 지원해야 합니다.

    - `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
    - `weekday`, `year`, `month`, `day`
    - `year`, `month`, `day`
    - `year`, `month`
    - `month`, `day`
    - `hour`, `minute`, `second`
    - `hour`, `minute`

    구현체에 따라 다른 구성요소 조합을 지원할 수도 있습니다. 시간 서식을 요청하면, 현재 구현체가 지원하는 모든 구성요소 조합 중 최적 조합을 탐색해 사용합니다. 탐색 알고리즘은 `formatMatcher` 옵션 속성을 사용해 지정할 수 있고, [명세에 완벽히 정의된 "`basic`" 알고리즘](https://402.ecma-international.org/1.0/#BasicFormatMatcher)과 구현체에 따라 다른 "`best-fit`" 알고리즘의 두 종류가 있습니다.

    - `weekday`

      - : 요일. 가능한 값은 다음과 같습니다.

        - "`long`" (`금요일`, `Thursday` 등)
        - "`short`" (`(금)`, `Thu` 등)
        - "`narrow`" (`(금)`, `T` 등). 일부 로케일에서는 두 개의 요일이 같은 값을 스타일을 가질 수 있습니다. (예: `Thursday`와 `Tuesday` 둘 다 `T`)

    - `era`

      - : 시대. 가능한 값은 다음과 같습니다.

        - "`long`" (`서기`, `Anno Domini` 등)
        - "`short`" (`AD` 등)
        - "`narrow`" (`A`, `AD` 등)

    - `year`

      - : 연도. 가능한 값은 다음과 같습니다.

        - "`numeric`" (`2019년`, `2019` 등)
        - "`2-digit`" (`19년`, `19` 등)

    - `month`

      - : 월. 가능한 값은 다음과 같습니다.

        - "`numeric`" (`3` 등)
        - "`2-digit`" (`03` 등)
        - "`long`" (`3월`, `March` 등)
        - "`short`" (`Mar` 등)
        - "`narrow`" (`M` 등). 일부 로케일에서는 두 개의 요일이 같은 값을 스타일을 가질 수 있습니다. (예: `March`와 `May` 둘 다 `M`)

    - `day`

      - : 일. 가능한 값은 다음과 같습니다.

        - "`numeric`" (`1` 등)
        - "`2-digit`" (`01` 등)

    - `hour`
      - : 시. 가능한 값은 `"numeric"`, `"2-digit"`입니다.
    - `minute`
      - : 분. 가능한 값은 `"numeric"`, `"2-digit"`입니다.
    - `second`
      - : 초. 가능한 값은 `"numeric"`, `"2-digit"`입니다.
    - `fractionalSecondDigits`
    
      - : 밀리초를 나타낼 소숫점 이하 자릿수. 가능한 값은 다음과 같습니다.

        - `0` (밀리초를 표시하지 않음.)
        - `1` (밀리초를 한 자리까지 표시함. 예를 들어, 0.736초는 7까지 보입니다.)
        - `2` (밀리초를 두 자리까지 표시함. 예를 들어, 0.736초는 73로 보입니다.)
        - `3` (밀리초를 세 자리까지 표시함. 예를 들어, 0.736초는 736으로 보입니다.)

    - `timeZoneName`

      - : 시간대 이름. 가능한 값은 다음과 같습니다.

        - "`long`" 지역화된 긴 시간대 이름 (`한국 표준시`, `British Summer Time`)
        - "`short`" 지역화된 짧은 시간대 이름 (`PST`, `GMT+9`)
        - "`shortOffset`" 지역화된 GMT 형식 (`GMT-8`, `GMT+9`)
        - "`longOffset`" 지역화된 긴 GMT 형식 (`GMT+0900`)
        - "`shortGeneric`" 지역을 특정하지 않는 일반적인 형식 (`PT`)
        - "`longGeneric`" 지역을 특정하지 않는 긴 일반적인 형식 (`Pacific Time`)

        > **참고:** 요구한 형식을 사용할 수 없을 경우 시간대 서식이 다른 형태로 대체될 수 있습니다. 예를 들어 지역을 특정하지 않는 서식의 경우 특정 국가나 도시 이름을 포함하지 않아야 하지만, "Los Angeles Time"처럼 필요할 경우 이름을 포함할 수 있습니다.

    각 구성요소 속성의 기본값은 {{jsxref("undefined")}}입니다. 그러나 모든 속성이 `undefined`일 경우, `year`, `month`, `day`는 "`numeric`"으로 취급합니다.

## 예제

### DateTimeFormat 사용하기

로케일을 지정하지 않고 사용하면 기본 로케일 및 기본 옵션 서식을 적용한 문자열을 반환합니다.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 매개변수 없이 toLocaleString() 호출한 결과는
// 구현체, 기본 로케일, 기본 시간대에 다라 달라짐
console.log(new Intl.DateTimeFormat().format(date));
// → ko-KR 로케일(언어)와 Asia/Seoul 시간대(UTC+0900)에서 "2012. 12. 20."
```

### timeStyle과 dateStyle 사용하기

다음 예제는 지역화된 숫자 서식의 예시를 보입니다. 어플리케이션의 사용자 인터페이스 언어에 맞는 서식을 적용하려면 `locales` 매개변수로 적절한 언어(와, 필요한 경우 대체 언어)를 제공하는걸 잊지 마세요.

```js
let o = new Intl.DateTimeFormat("en" , {
  timeStyle: "short"
});
console.log(o.format(Date.now())); // "13:31 AM"

let o = new Intl.DateTimeFormat("en" , {
  dateStyle: "short"
});
console.log(o.format(Date.now())); // "07/07/20"

let o = new Intl.DateTimeFormat("en" , {
  timeStyle: "medium",
  dateStyle: "short"
});
console.log(o.format(Date.now())); // "07/07/20, 13:31:55 AM"
```

### timeZoneName 사용하기

`timeZoneName`을 사용하면 시간대도 결과에 포함할 수 있습니다.

```js
var date = Date.UTC(2021, 11, 17, 3, 0, 42);
const timezoneNames = ['short', 'long', 'shortOffset', 'longOffset', 'shortGeneric', 'longGeneric']
	
for (const zoneName of timezoneNames) {
  var formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    timeZoneName: zoneName,
  });
  console.log(zoneName + ": " + formatter.format(date) );
}
	
// 예상 출력 결과:
// > "short: 12/16/2021, PST"
// > "long: 12/16/2021, Pacific Standard Time"
// > "shortOffset: 12/16/2021, GMT-8"
// > "longOffset: 12/16/2021, GMT-08:00"
// > "shortGeneric: 12/16/2021, PT"
// > "longGeneric: 12/16/2021, Pacific Time"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
