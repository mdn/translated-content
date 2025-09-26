---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

{{jsxref("String")}} 값의 **`replace()`** 메서드는 `pattern`의 단일, 일부 혹은 모든 일치 항목이 `replacement`로 대치된 새로운 문자열을 반환합니다. `pattern`은 문자열 혹은 {{jsxref("RegExp")}}일 수 있습니다. `replacement`는 문자열이나 각 일치 항목마다 호출되는 함수일 수 있습니다. 만약 `pattern`이 문자열이라면, 오직 첫 번째 항목만 변경됩니다. 원본 문자열은 변하지 않습니다.

{{InteractiveExample("JavaScript Demo: String.replace()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
```

## 구문

```js-nolint
replace(pattern, replacement)
```

### 매개변수

- `pattern`
  - : 문자열이거나 [`Symbol.replace`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 메서드가 있는 객체일 수 있습니다. 일반적인 예를 들자면 [정규 표현식](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)이 있습니다. `Symbol.replace` 메서드가 없는 모든 값은 문자열로 강제 변환됩니다.
- `replacement`
  - : 문자열이나 함수가 될 수 있습니다.
    - 문자열일 경우, `pattern`과 일치하는 부분 문자열을 대체합니다. 여러 특수 대체 패턴을 지원합니다. 아래 [대체할 내용으로 문자열로 지정하기](#대체할_내용을_문자열로_지정하기)를 참고하세요
    - 함수일 경우 이 함수는 각 일치 항목마다 호출되며 반환 값은 대체 문자열에 사용됩니다. 이 함수에 제공되는 인수는 아래 [대체할 내용으로 함수 명시하기](#대체할_내용으로_함수_명시하기) 섹션에서 설명하고 있습니다.

### 반환 값

패턴의 단일, 일부 혹은 모든 일치 항목이 명시된 대체 문자열로 대치된 새로운 문자열을 반환합니다.

## 설명

이 메서드는 호출된 문자열 값을 변경하지 않습니다. 새 문자열을 반환합니다.

문자열 패턴은 한 번만 바뀝니다. 전역 검색 및 바꾸기를 수행하려면 `g` 플래그가 있는 정규 표현식을 사용하거나 [`replaceAll()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)을 대신 사용하세요.

`pattern`이 [`Symbol.replace`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 메서드가 있는 객체(`RegExp` 객체 포함)인 경우, 해당 메서드는 대상 문자열과 `replacement`를 인수로 사용하여 호출됩니다. 그 반환 값은 `replace()`의 반환 값이 됩니다. 이 경우 `replace()`의 동작은 전적으로 `[Symbol.replace]()` 메서드로 인코딩됩니다. 예를 들어, 아래 설명에서 "그룹 캡처"에 대한 언급은 실제로 [`RegExp.prototype[Symbol.replace]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)에서 제공하는 기능입니다.

`pattern`이 빈 문자열인 경우 문자열의 시작 부분에 대체 문자열이 추가됩니다.

```js
"xxx".replace("", "_"); // "_xxx"
```

플래그가 `g`인 정규식은 `replace()`가 두 번 이상 대체하는 유일한 경우입니다. 정규식 속성(특히 [sticky](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) 플래그)이 `replace()`와 상호작용하는 방법에 대한 자세한 내용은 [`RegExp.prototype[Symbol.replace]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)를 참고하세요.

### 대체할 내용을 문자열로 지정하기

대체 문자열에는 다음과 같은 특수 대체 패턴이 포함될 수 있습니다.

| 패턴      | 삽입 문자열                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------- |
| `$$`      | `"$"`를 삽입합니다.                                                                            |
| `$&`      | 일치된 부분 문자열을 삽입니다.                                                                 |
| `` $` ``  | 일치하는 부분 문자열 앞에 있는 문자열 부분을 삽입합니다.                                       |
| `$'`      | 일치하는 부분 문자열 뒤에 오는 문자열 부분을 삽입합니다.                                       |
| `$n`      | `n`번째(`1`로부터 시작하는) 캡처 그룹을 삽입합니다. 여기서 `n`은 100보다 작은 양의 정수입니다. |
| `$<Name>` | `Name`이 그룹 이름인 명명된 캡처 그룹을 삽입합니다.                                            |

`$n` 및 `$<Name>`은 `pattern` 인수가 {{jsxref("RegExp")}} 객체인 경우에만 사용할 수 있습니다. `pattern`이 문자열이거나 해당 캡처 그룹이 정규 표현식에 없는 경우 패턴은 리터럴로 대체됩니다. 그룹이 존재하지만 일치하지 않는 경우(이는 불일치의 일부이므로) 빈 문자열로 대체됩니다.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; 정규식은 두 번째 그룹을 가지지 않습니다.

"foo".replace("f", "$1");
// "$1oo"; 패턴이 문자열이며, 어떠한 그룹을 가지지 않습니다.

"foo".replace(/(f)|(g)/, "$2");
// "oo"; 두 번째 그룹이 존재하지만 일치하지 않습니다.
```

### 대체할 내용으로 함수 명시하기

함수를 두 번째 매개변수로 명시할 수 있습니다. 이 경우 함수는 각각의 문자열 일치가 발생할 때마다 호출됩니다. 이 함수의 결과(반환 값)는 대체 문자열로 사용됩니다.

> [!NOTE]
> 위에서 언급한 특수 대체 패턴은 대체자 함수에서 반환된 문자열에는 적용되지 않습니다.

함수 시그니처는 아래와 같습니다.

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

함수의 인수는 아래와 같습니다.

- `match`
  - : 일치한 부분 문자열. 위의 `$&`에 해당합니다.
- `p1, p2, …, pN`
  - : `replace()`의 첫 번째 인수로 제공된 캡처 그룹(명명된 캡처 그룹 포함)에서 찾은 `n`번째 문자열은 {{jsxref("RegExp")}} 객체입니다. (위의 `$1`, `$2` 등에 해당합니다.) 예를 들어 `pattern`이 `/(\a+)(\b+)/`이라면, `p1`은 `\a+`와 일치하지만 `p2`는 `\b+`와 일치합니다. 그룹이 불일치의 일부인 경우(예: `"abc".replace(/(a)|(b)/, replacer)`), 일치하지 않는 대체어는 `undefined`이 됩니다.
- `offset`
  - 검사 중인 전체 문자열 내에서 일치하는 부분 문자열의 오프셋입니다. 예를 들어 전체 문자열이 `'abcd'`이고 일치하는 부분 문자열이 `'bc'`인 경우 이 인수는 `1`이 됩니다.
- `string`
  - : 검사한 전체 문자열.
- `groups`
  - : 키가 사용된 그룹 이름이고 값이 일치하는 부분(일치하지 않으면 `undefined`)인 객체입니다. `pattern`에 명명된 캡처 그룹이 하나 이상 포함된 경우에만 존재합니다.

정확한 인수의 개수는 첫 번째 인수가 {{jsxref("RegExp")}} 객체인지, 그렇다면 얼마나 많은 캡처 그룹이 있는지에 따라 달라집니다.

아래 예제는 `newString`을 `'abc - 12345 - #$*%'`로 설정합니다.

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 은 숫자가 아니며 p2 는 숫자이며, p3 는 알파벳과 숫자가 아닙니다.
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

첫 번째 매개변수의 정규 표현식이 전역인 경우 이 함수는 대체할 문자열 전체 일치 각각의 항목에 대해 여러 번 호출됩니다.

## 예제

### replace()에서 정규 표현식 정의하기

다음 예제에서는 `replace()`에서 대/소문자 무시 플래그를 포함한 정규 표현식을 정의합니다.

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

이는 `'Twas the night before Christmas...'`를 출력합니다.

> **참고:** [정규 표현식 안내서](/ko/docs/Web/JavaScript/Guide/Regular_expressions)를 보시면 정규 표현식에 대해 더 많은 설명을 보실 수 있습니다.

### 전역 그리고 대소문자 구분 무시 플래그와 함께 replace() 사용하기

전역 문자열 대체는 정규 표현식으로만 가능합니다. 다음 예제는 정규 표현식이 [전역 그리고 대소문자 무시 플래그](/ko/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)이 포함되어 있어서 `replace()`가 문자열에서 `'apple'`이 나타날 때마다 `'orange'`로 문자열을 바꾸도록 허용합니다.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

이는 `'oranges are round, and oranges are juicy'`를 출력합니다.

### 문자열에서 단어 순서 바꾸기

다음 스크립트는 문자열의 단어의 순서를 바꿉니다. 대체 문자열의 경우, 스크립트는 [그룹 캡처](/ko/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)과 `$1` 및 `$2` 대체 패턴을 사용합니다.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

이는 `'Cruz, Maria'`를 출력합니다.

### 일치하는 문자를 수정하는 인라인 함수 사용

이 예에서는 문자열에 대문자가 포함된 모든 항목이 소문자로 변환되고 일치 위치 바로 앞에 하이픈이 삽입됩니다. 여기서 중요한 점은 일치하는 항목이 대체 문자열로 반환되기 전에 추가 작업이 필요하다는 것입니다.

대체 함수는 일치하는 스니펫을 매개변수로 받아 이를 사용하여 대소문자를 변환하고 하이픈을 연결한 후 반환합니다.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

`styleHyphenFormat('borderTop')`이 주어지면 `'border-top'`이 반환됩니다.

최종 치환이 이루어지기 전에 일치 항목의 결과를 더 변환하고 싶기 때문에 함수를 사용해야 합니다. 이렇게 하면 [`toLowerCase()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) 메서드 이전에 일치 항목을 강제로 평가하게 됩니다. 함수가 없는 일치를 사용하여 이 작업을 시도했다면 {{jsxref("String/toLowerCase", "toLowerCase()")}}는 아무런 효과가 없을 것입니다.

```js example-bad
// 작동하지 않습니다
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

이는 문자를 패턴으로 사용하기 전에 `'$&'.toLowerCase()`가 먼저 문자열 리터럴로 평가되기 때문입니다(결과적으로 동일한 `'$&'`가 됩니다).

### 화씨 온도를 상응하는 섭씨 온도로 치환하기

다음 예에서는 화씨 온도를 그에 상응하는 섭씨 온도를 대체합니다. 화씨도는 `"F"`로 끝나는 숫자여야 합니다. 이 함수는 `"C"`로 끝나는 섭씨 숫자를 반환합니다. 예를 들어 입력 숫자가 `"212F"`인 경우 함수는 `"100C"`를 반환합니다. 숫자가 `"0F"`이면 함수는 `"-17.777777777778C"`를 반환합니다.

정규식 `test`는 `F`로 끝나는 숫자가 있는지 확인합니다. 화씨 온도의 숫자는 두 번째 매개 변수인 `p1`을 통해 함수에 접근할 수 있습니다. 이 함수는 `f2c()` 함수에 문자열로 전달된 화씨 온도 숫자에 따라 섭씨 숫자를 설정합니다. 그런 다음 `f2c()`는 섭씨 숫자를 반환합니다. 이 함수는 Perl의 `s///e` 플래그에 가깝습니다.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return `${((p1 - 32) * 5) / 9}C`;
  }
  const s = String(x);
  const test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### 제네릭 대체자 만들기

일치하는 모든 문자열에 오프셋 데이터를 추가하는 대체자를 만들고 싶다고 가정해 보겠습니다. replacer 함수는 이미 `offset` 매개변수를 받기 때문에 정규식을 정적으로 알고 있다면 문제가 되지 않습니다.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

그러나 이 대체자는 모든 정규식 패턴에서 작동하도록 하려면 일반화하기 어렵습니다. 대체자는 가변적이며, 받는 인수의 수는 존재하는 캡처 그룹의 수에 따라 달라집니다. [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)를 사용할 수 있지만 `offset`, `string` 등을 배열로 수집할 수도 있습니다. 정규식의 ID에 따라 `groups`가 전달될 수도 있고 전달되지 않을 수도 있다는 사실 때문에 어떤 인수가 `offset`에 해당하는지 일반적으로 알기 어렵습니다.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

위의 `addOffset` 예제는 정규식에 명명된 그룹이 포함된 경우 작동하지 않습니다. 이 경우 `args.at(-2)`가 `offset` 대신 `string`이 되기 때문입니다.

대신 `groups`는 객체이고 `string`은 문자열이기 때문에 유형에 따라 마지막 몇 개의 인수를 추출해야 합니다.

```js
function addOffset(match, ...args) {
  const hasNamedGroups = typeof args.at(-1) === "object";
  const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (1) d"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`Symbol.replace` 지원과 같은 최신 동작의 수정 및 구현한 `core-js`의 `String.prototype.replace` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`Symbol.replace`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[Symbol.replace]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
