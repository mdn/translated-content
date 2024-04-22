---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
---

{{JSRef}}

**`localeCompare()`** 메서드는 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환합니다.

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

새로운 `locales` 인수와 `options` 인수를 사용하면 정렬에 사용될 언어를 지정하고 함수의 동작을 사용자 정의할 수 있습니다.
`locales`와 `options`의 인수를 무시하는 오래된 구현에서는 사용되는 locale과 정렬 순서는 완전히 구현에 의존합니다.

## 구문

```js
localeCompare(compareString);
localeCompare(compareString, locales);
localeCompare(compareString, locales, options);
```

### 매개변수

- `compareString`
  - `referenceStr`가 비교되는 문자열.
- `locales`와 `options`

  - 이러한 인수는 함수의 동작을 사용자 정의하여 응용 프로그램에서 포맷 규칙을 사용할 언어를 지정합니다.
    `"locales"`와 `"options"`의 인자를 무시하는 구현에서는 사용되는 로케일과 반환되는 문자열의 형식은
    완전히 구현에 의존합니다.

    매개변수의 상세 및 사용 방법은 [`Intl.Collator()`
    constructor](/ko/docs/Web/JavaScript/Reference/Global_Objects/Collator/Collator)를 참조하세요.

### 반환 값

`compareString` 전에 `referenceStr`가 위치하는 경우 **음수**, `compareString` 후에 `referenceStr`가 위치하는 경우 **양수**, 동등할 경우 `0`이 됩니다.

## 설명

`referenceStr`가 `compareString` 전 혹은 뒤에 오는지 또는 동등한지를 나타내는 정수를 반환합니다.

- `compareString` 전에 `referenceStr`이 오면 음수
- `compareString` 뒤에 `referenceStr`이 오면 양수
- 동등한 경우 `0` 을 반환합니다.

> **주의:** `-1` 또는 `1`의 정확한 반환 값에 의존하지 마세요.
>
> 음의 정수와 양의 정수의 결과는 브라우저마다(브라우저 버전에 따라서도) 다릅니다.이는 W3C 사양에서는 음의 값과 양의 값만 필요하기 때문입니다.
> 브라우저에 따라서는, `-2`나 `2`를 반환하거나, 그 외의 음의 값이나 양의 값을 반환할 수도 있습니다.

## 성능

큰 배열의 정렬과 같이 대량의 문자열을 비교하는 경우, {{jsxref("Global_Objects/Collator", "Intl.Collator")}} 객체를 작성하고
해당 {{jsxref("Collator.prototype.compare", "compare")}} 프로퍼티가 제공하는 함수를 사용하는 것이 좋습니다.

## 예시

### `localeCompare()` 사용

```js
// "a"는 "c" 전에 위치하므로 음수 값을 반환
"a".localeCompare("c"); // -2 혹은 -1 (또는 다른 음수 값)

// 알파벳 순으로 단어 "check"는 "against"보다 뒤에 위치하므로 양수 값을 반환
"check".localeCompare("against"); // 2 혹은 1 (또는 다른 양수 값)

// "a"와 "a"는 서로 동등하므로 중립 값 0을 반환
"a".localeCompare("a"); // 0
```

### 배열 정렬

`localeCompare()`을 사용해 대소문자를 구분하지 않는 배열 정렬을 할 수 있습니다.

```js
let items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### 확장인수 브라우저 지원 확인

`locales`와 `options` 인자는 일부 브라우저에서 아직 지원되지 않습니다.

구현이 지원되는지 확인하려면 `"i"` 인수(잘못된 언어(illegal language) 태그가 제외되는 요건)을 사용해 {{jsxref("RangeError")}} 예외를 찾습니다.

```js
function localeCompareSupportsLocales() {
  try {
    "foo".localeCompare("bar", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### `locales` 사용

`localeCompare()` 결과는 언어에 따라 달라집니다.
응용 프로그램의 사용자 인터페이스에서 사용되는 언어의 정렬 순서를 얻으려면 반드시 `locales` 인자를 사용하여 해당 언어(및 폴백 언어의 일부)를 지정하세요.

```js
console.log("ä".localeCompare("z", "de")); // 음수: 독일어는 ä가 z 전에 위치
console.log("ä".localeCompare("z", "sv")); // 양수: 스웨덴어는 ä가 z 뒤에 위치
```

### `options` 사용

`localeCompare()`이 제공하는 결과는 `options` 인자를 사용해 사용자 정의할 수 있습니다.

```js
// 독일어에선 ä는 a를 기본 문자(base letter)로 가집니다.
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// 스웨덴어에선 ä와 a는 별도의 기본 문자입니다.
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // 양수
```

### 숫자 정렬

```js
// 기본적으로 "2" > "10"
console.log("2".localeCompare("10")); // 1

// numeric 옵션 사용
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// locales tag 사용
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
