---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: 165d921f6f96711117be2b6513944ce36c70703f
---

{{JSRef}}

**`Intl`** 네임스페이스 객체에는 여러 생성자와 국제화 생성자 및 기타 언어에 민감한 함수에 공통된 기능이 포함되어 있습니다. 이를 종합하여 언어에 민감한 문자열 비교, 숫자 서식, 날짜 및 시간 서식 등을 제공하는 ECMAScript 국제화 API를 구성합니다.

## 설명

대부분의 전역 객체와 달리 `Intl`은 생성자가 아닙니다. [`new` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 사용하거나 `Intl` 객체를 함수로 호출할 수 없습니다. {{jsxref("Math")}} 객체와 마찬가지로 `Intl`의 모든 프로퍼티와 메서드는 정적입니다.

국제화 생성자뿐만 아니라 다른 생성자의 여러 언어에 민감한 메서드([같이 보기](#같이_보기)에 나열되어 있습니다)는 로케일을 식별하고 실제로 사용할 로케일을 결정하는 데 공통 패턴을 사용합니다. 모두 `locales` 및 `options` 인수를 받아들이고 `options.localeMatcher` 속성에 지정된 알고리즘을 사용하여 지원되는 로케일에 대해 요청된 로케일을 협상하는 방식입니다.

### locales 인수

`locales` 인수는 주어진 연산에 사용되는 로케일을 정하는 데 사용됩니다. JavaScript 구현체는 `locales`을 검사하고 표현된 기본 설정을 충족하기 위해 가장 근접한 로케일을 계산합니다. 아래 항목이 `locales`이 될 수 있습니다.

- `undefined` (흑은 생략): 구현체의 기본 로케일을 사용합니다.
- 하나의 로케일: 하나의 로케일 식별자 혹은 로케일 식별자를 감싸는 [`Intl.Locale`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) 객체
- 로케일 리스트: 다른 값은 객체로 변환된 다음 로케일 배열로 처리됩니다.

후자의 두 경우에서 사용되는 실제 로케일은 [로케일 협상](#로케일_식별_및_협상)을 통해 결정된, 가장 잘 지원되는 로케일입니다. 로케일 식별자가 문자열이나 객체가 아닌 경우 {{jsxref("TypeError")}}가 발생합니다. 로케일 식별자가 구문상 유효하지 않은 문자열인 경우 {{jsxref("RangeError")}}가 발생합니다. 로케일 식별자가 제대로 형성되었지만 구현체가 이를 인식하지 못하면 무시되고 목록의 다음 로케일이 고려되어 결국 시스템의 로케일로 되돌아갑니다. 그러나 구현체가 향후 모든 로케일에 대한 데이터를 추가할 수 있으므로 특정 로케일 이름이 무시되는 것에 의존해서는 안 됩니다. 예를 들어 `new Intl.DateTimeFormat("default")`는 `"default"`가 구문상으로는 유효하지만 어떤 로케일로도 인식되지 않기 때문에 구현체의 기본 로케일만 사용하게 됩니다.

로케일 식별자는 다음으로 구성된 문자열입니다.

1. 2~3자 또는 5~8자로 구성된 언어 하위 태그
2. 4글자로 구성된 스크립트 하위 태그 {{optional_inline}}
3. 2글자 또는 3자리로 구성된 지역 하위 태그 {{optional_inline}}
4. 각각 5~8개의 영숫자 또는 숫자 한 자리 뒤에 영숫자 3개가 포함된 하나 이상의 변형 하위 태그(반드시 모두 고유해야 함) {{optional_inline}}
5. 하나 이상의 BCP 47 확장 시퀀스 {{optional_inline}}
6. 개인용 확장 시퀀스 {{optional_inline}}

각 하위 태그와 시퀀스는 하이픈으로 구분됩니다. 로케일 식별자는 대소문자를 구분하지 않는 {{Glossary("ASCII")}}입니다. 그러나 스크립트 하위 태그에는 제목 대문자(첫 글자는 대문자, 이어지는 글자는 소문자)를, 지역 하위 태그에는 대문자를, 그 외에는 모두 소문자를 사용하는 것이 일반적입니다. 예를 들어

- `"hi"`: 힌두어(언어)
- `"de-AT"`: 오스트리아(지역)에서 사용하는 독일어(언어)
- `"zh-Hans-CN"`: 중국(지역)에서 사용하는 간체(스크립트)로 쓰인 중국어(언어)
- `"en-emodeng"`: "초기 현대 영어" 방언(변형)의 영어(언어)

언어, 스크립트, 지역(국가 포함) 및 변형(드물게 사용)을 식별하는 하위 태그는 [IANA 언어 하위 태그 레지스트리](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)에 등록되어 있습니다. 이 레지스트리는 시간이 지남에 따라 주기적으로 업데이트되며 구현이 항상 최신 상태가 아닐 수도 있으므로 하위 태그가 널리 지원될 것이라는데 너무 의존하지 마시기 바랍니다.

BCP 47 확장 시퀀스는 한 자리 숫자 또는 문자(`"x"` 제외)와 하이픈으로 구분된 하나 이상의 2~8자리 숫자 또는 숫자 하위 태그로 구성됩니다. 각 숫자 또는 문자당 하나의 시퀀스만 허용됩니다 `"de-a-foo-a-foo"`는 유효하지 않습니다. BCP 47 확장자 하위태그는 [유니코드 CLDR 프로젝트](https://github.com/unicode-org/cldr/tree/main/common/bcp47)에 정의되어 있습니다. 현재 두 개의 확장자만 의미가 정의되어 있습니다.

- `"u"`(유니코드) 확장자는 `Intl` API 객체의 추가 사용자 지정을 요청하는 데 사용할 수 있습니다. 아래는 예시입니다.
  - `"de-DE-u-co-phonebk"`: 독일어 정렬 순서의 전화번호부 변형을 사용하여 다음과 같이 움라우트 모음을 해당 문자 쌍으로 해석합니다. ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: 숫자 형식에 태국 숫자(๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙)를 사용합니다.
  - `"ja-JP-u-ca-japanese"`: 날짜 및 시간 서식에서 일본 달력을 사용하여 2013년을 헤이세이 시대 25년, 즉 平成 25로 표시합니다.
  - `"en-GB-u-ca-islamic"`: 영국식 영어와 이슬람(회교) 달력을 사용하며, 2017년 10월 14일 그레고리력은 1439년 무하람 24일 회교력입니다.

- `"t"`(변환됨) 확장자는 변환된 콘텐츠(예: 다른 로케일에서 번역된 텍스트)를 나타냅니다. 현재 `Intl` 기능은 `"t"` 확장자를 고려하지 않습니다. 그러나 이 확장자는 때때로 확장자가 없는 중첩 로케일을 포함합니다. 예를 들어 `"de-t-en"`의 변환된 확장자는 영어에 대한 로케일 식별자를 포함합니다. 중첩 로케일이 있는 경우 유효한 로케일 식별자이어야 합니다. 예를 들어 `"en-emodeng-emodeng"`은 중복된 `emodeng` 변형 하위 태그가 포함되어 있으므로 유효하지 않으므로 `"de-t-en-emodeng-emodeng"`도 유효하지 않습니다.

마지막으로 문자 `"x"`를 사용하는 비공개 확장자 시퀀스 뒤에 하이픈으로 구분된 하나 이상의 1~8자 또는 숫자 하위 태그가 나타날 수 있습니다. 이를 통해 애플리케이션은 자체적으로 비공개로 사용할 정보를 인코딩할 수 있으며, 모든 `Intl` 연산에서 무시됩니다.

### options 인수

`options` 인수는 생성자와 함수마다 다른 속성을 가진 객체여야 합니다. `options` 인수가 제공되지 않거나 정의되지 않은 경우 모든 속성에 기본값이 사용됩니다.

`localeMatcher` 속성은 모든 언어에 민감한 생성자 및 함수에서 지원됩니다. 이 속성의 값은 문자열 `"lookup"` 또는 `"best fit"`이어야 하며 아래에 설명된 로케일 일치 알고리즘 중 하나를 선택해야 합니다.

### 로케일 식별 및 협상

`locales` 인수로 지정된 로케일 목록은 유니코드 확장이 제거된 후 애플리케이션에서 우선순위가 지정된 요청으로 해석됩니다. 런타임은 이를 사용 가능한 로케일과 비교하여 사용 가능한 최상의 로케일을 선택합니다. 여기엔 두 가지 매칭 알고리즘이 존재합니다. `"lookup"` 매칭은 [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4)에 명시된 Lookup 알고리즘을 따르고, `"best fit"` 매칭은 런타임이 Lookup 알고리즘의 결과보다 최소한 요청에 더 적합한 로케일을 제공할 수 있도록 합니다. 만약 애플리케이션에서 `locales` 인수를 제공하지 않거나 런타임에 요청과 일치하는 로케일이 없는 경우 런타임의 기본 로케일이 사용됩니다. 일치 여부 검사기는 `options` 인수의 속성을 사용하여 선택할 수 있습니다(아래를 참조하시기 바랍니다).

선택한 로케일 식별자에 유니코드 확장 순서가 있는 경우 이제 해당 확장을 사용하여 생성된 객체 또는 함수의 동작을 사용자 맞춤 사용할 수 있습니다. 각 생성자 또는 함수는 유니코드 확장에 대해 정의된 키의 하위 집합만 지원하며, 지원되는 값은 로케일 식별자에 따라 달라지는 경우가 많습니다. 예를 들어 `"co"` 키(콜레이션)는 {{jsxref("Intl.Collator")}}에서만 지원되며, `"phonebk"` 값은 독일어에서만 지원됩니다.

## 정적 속성

- {{jsxref("Intl.Collator")}}
  - : 언어별 문자열 비교를 가능하게 하는 객체인 콜레이터의 생성자입니다.
- {{jsxref("Intl.DateTimeFormat")}}
  - : 언어별 날짜와 시간 형식을 정할 수 있는 객체의 생성자입니다.
- {{jsxref("Intl.DisplayNames")}}
  - : 언어, 지역 및 스크립트 표시 이름을 일관되게 번역할 수 있는 객체의 생성자입니다.
- {{jsxref("Intl.DurationFormat")}} {{experimental_inline}}
  - : 로케일별로 기간 형식을 지정할 수 있는 객체의 생성자입니다.
- {{jsxref("Intl.ListFormat")}}
  - : 언어별 리스트 형식을 정할 수 있는 객체의 생성자입니다.
- {{jsxref("Intl.Locale")}}
  - : 유니코드 식별자를 표현할 수 있는 객체의 생성자입니다.
- {{jsxref("Intl.NumberFormat")}}
  - : 언어별 숫자 형식을 정할 수 있는 객체의 생성자입니다.
- {{jsxref("Intl.PluralRules")}}
  - : 복수형을 구분하는 형식과 언어별 규칙을 활성화하는 객체의 생성자입니다.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : 상대 시간 형식을 정할 수 있는 객체의 생성자입니다.
- {{jsxref("Intl.Segmenter")}}
  - : 로케일에 따른 텍스트 세그먼트를 정할 수 있는 객체의 생성자입니다.
- `Intl[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)속성의 초기값은 문자열 `"Intl"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다.

## 정적 메서드

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : 표준 로케일 이름을 반환합니다.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : 구현체에서 지원하는 지원되는 고유한 달력, 콜레이션, 통화, 숫자 체계 또는 단위 값이 포함된, 정렬된 배열을 반환합니다.

## 예제

### 날짜와 숫자 서식 지정

`Intl`를 사용하여 특정 언어 및 지역의 일반적인 형식으로 날짜 및 숫자 형식을 지정할 수 있습니다.

```js
const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(
      locale,
    ).format(count)}`,
  );
}

log("en-US"); // 5/24/2012 26,254.39

log("de-DE"); // 24.5.2012 26.254,39
```

### 브라우저의 선호 언어 사용하기

`Intl` 메서드에 하드코딩된 로케일 이름을 전달하는 대신 {{domxref("navigator.language")}}에서 제공하는 사용자가 선호하는 언어를 사용할 수 있습니다.

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

또는 {{domxref("navigator.languages")}} 속성은 사용자가 선호하는 언어의 정렬된 목록을 제공합니다. 이 목록을 `Intl` 생성자에 직접 전달하여 기본 설정 기반 로케일 대체 선택을 구현할 수 있습니다. [로케일 협상](#로케일_식별_및_협상) 프로세스는 사용 가능한 가장 적합한 로케일을 선택하는 데 사용됩니다.

```js
const count = 26254.39;

const formattedCount = new Intl.NumberFormat(navigator.languages).format(count);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{domxref("Keyboard.getLayoutMap()")}}
- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- [The ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) by Norbert Lindenberg (2012)
