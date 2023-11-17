---
title: 텍스트 서식
slug: Web/JavaScript/Guide/Text_formatting
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}

이 장에서는 JavaScript에서 문자열과 텍스트로 작업하는 방법을 소개합니다.

## 문자열

JavaScript의 {{Glossary("문자열")}} 유형은 원문의 데이터를 나타내는데 사용됩니다. 이는 16비트 부호 없는 정수 값(UTF-16 code units)의 "요소" 집합입니다. String의 각 요소(문자)는 String에서 하나의 위치를 차지합니다. 첫 번째 요소는 인덱스 0 다음은 인덱스 1 등등... 문자열의 길이는 요소의 수와 같습니다. 문자열 리터럴 또는 문자열 객체를 사용하여 문자열을 만들 수 있습니다.

주의 : 이페이지를 수정한다면 MDN bug 857438이 해결될 때 까지 U+FFFF이상의 문자를 포함하지 마세요. ( <https://bugzilla.mozilla.org/show_bug.cgi?id=857438> ).

### 문자열 리터럴

작은따옴표나 큰따옴표를 사용하여 간단한 문자열을 만들 수 있습니다:

```js-nolint
'foo';
"bar";
```

보다 많은 문자열을 이스케이프 시퀀스를 사용하여 만들 수 있습니다

#### 16진수 이스케이프 시퀀스

\x 뒤에 수는 [16진수](https://en.wikipedia.org/wiki/Hexadecimal)로 해석(interpreted)됩니다.

```js
"\xA9"; // "©"
```

#### 유니코드 이스케이프 시퀀스

유니코드 이스케이프 시퀀스는 \u 다음에 적어도 네 개의 16진수 숫자(digit)를 필요로 합니다.

```js
"\u00A9"; // "©"
```

#### 유니코드 코드 포인트 이스케이프

ECMAScript 6의 새로운 기능. 유니 코드 포인트 이스케이프를 사용하면 16 진수를 사용하여 모든 문자를 이스케이프 처리 할 수 있으므로 최대 `0x10FFFF`의 유니 코드 코드 포인트를 사용할 수 있습니다. 간단한 유니 코드 이스케이프를 사용하면 동일한 결과를 얻기 위해서 서로 게이트를 별도로 작성해야하는 경우가 있습니다.

{{jsxref("String.fromCodePoint()")}} 나 {{jsxref("String.prototype.codePointAt()")}}를 참고하세요.

```js
"\u{2F804}";

// the same with simple Unicode escapes
"\uD87E\uDC04";
```

### 문자열 개체

{{jsxref("문자열")}} 개체는 문자열 기본 데이터 형식의 래퍼입니다.

```js
var s = new String("foo"); // Creates a String object
console.log(s); // Displays: { '0': 'f', '1': 'o', '2': 'o'}
typeof s; // Returns 'object'
```

여러분은 문자열 리터럴 값에 문자열 개체의 방법 중 하나를 호출 할 수 있습니다.—JavaScript가 자동으로 문자열 리터럴을 임시 문자열 개체로 변환하고, 메서드를 호출하고, 그리고나서 임시 문자열 개체를 삭제합니다. 또한, `String.length` 속성을 문자열 리터럴과 함께 사용할 수 있습니다.

특별히 `String` 개체를 사용할 필요가 없지 않는 한, `String` 개체는 직관에 반하는 행동을 할 수 있기 때문에 여러분은 string 리터럴을 사용해야합니다. 예를들어:

```js
var s1 = "2 + 2"; // Creates a string literal value
var s2 = new String("2 + 2"); // Creates a String object
eval(s1); // Returns the number 4
eval(s2); // Returns the string "2 + 2"
```

문자열 개체는 문자열의 문자 수를 나타내는 하나의 속성, 길이를 갖습니다. 예를 들어, "Hello, World!"가 13자 이므로 다음 코드는 x를 값 13으로 할당합니다. `String` 객체는 문자열에있는 UTF-16 코드 단위의 수를 나타내는 길이가 하나의 속성을 가집니다. 예를 들어, 다음 코드에서는 "Hello, World!"가 UTF-16 코드 단위로 표현되는 13개의 문자를 가지고 있기 때문에 x 값이 13이 됩니다. 배열 브래킷 스타일을 사용하여 각 코드 단위에 액세스 할 수 있습니다. 문자열은 변경 불가능한 배열과 같은 객체이기 때문에 개별 문자를 변경할 수 없습니다.

```js
var mystring = "Hello, World!";
var x = mystring.length;
mystring[0] = "L"; // This has no effect, because strings are immutable
mystring[0]; // This returns "H"
```

유니 코드 스칼라 값이 U + FFFF (희귀 한 중국어 / 일본어 / 한국어 / 베트남어 문자 및 일부 이모티콘)보다 큰 문자는 각각 서로 다른 두 개의 코드 단위로 UTF-16에 저장됩니다. 예를 들어, 단일 문자 U + 1F600 "Emoji grinning face"를 포함하는 문자열은 길이가 2입니다. 대괄호를 사용하여 이러한 문자열의 개별 코드 단위에 액세스하면 일치하지 않는 대리 코드 단위가있는 문자열이 만들어지는 등의 바람직하지 않은 결과가 발생할 수 있습니다. 유니 코드 표준 위반 MDN 버그 857438이 수정 된 후에 예제가 이 페이지에 추가되어야합니다. {{jsxref ( "String.fromCodePoint ()")}} 또는 {{jsxref ( "String.prototype.codePointAt ()")}}도 참조하십시오.

`String` 객체는 다양한 메서드가 있습니다: 문자열 자체의 변경된 결과를 반환하는 `substring`과 `toUpperCase`가 그것!

다음 표는 {{jsxref("문자열")}} 개체의 메서드를 요약한 것입니다.

<table class="standard-table">
  <caption>
    <h4 id="문자열_메서드">문자열 메서드</h4>
  </caption>
  <thead>
    <tr>
      <th scope="col">Method</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("String.charAt", "charAt")}},
        {{jsxref("String.charCodeAt", "charCodeAt")}},
        {{jsxref("String.codePointAt", "codePointAt")}}
      </td>
      <td>
        <p>문자열에서 지정된 위치에 있는 문자나 문자 코드를 반환합니다.</p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String.indexOf", "indexOf")}},
        {{jsxref("String.lastIndexOf", "lastIndexOf")}}
      </td>
      <td>
        <p>
          문자열에서 지정된 부분 문자열의 위치나 지정된 부분 문자열의 마지막
          위치를 각각 반환합니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String.startsWith", "startsWith")}},
        {{jsxref("String.endsWith", "endsWith")}},
        {{jsxref("String.includes", "includes")}}
      </td>
      <td>
        <p>
          문자열 시작하고, 끝나고, 지정된 문자열을 포함하는지의 여부를
          반환합니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String.concat", "concat")}}</td>
      <td><p>두 문자열의 텍스트를 결합하고 새로운 문자열을 반환합니다.</p></td>
    </tr>
    <tr>
      <td>
        {{jsxref("String.fromCharCode", "fromCharCode")}},
        {{jsxref("String.fromCodePoint", "fromCodePoint")}}
      </td>
      <td>
        <p>
          유니코드 값의 지정된 시퀀스로부터 문자열을 구축합니다. 문자열
          인스턴스가 아닌 문자열 클래스의 메서드입니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String.split", "split")}}</td>
      <td>
        <p>
          부분 문자열로 문자열을 분리하여 문자열 배열로 문자열 개체를
          분할합니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String.slice", "slice")}}</td>
      <td><p>문자열의 한 부분을 추출하고 새 문자열을 반환합니다.</p></td>
    </tr>
    <tr>
      <td>
        {{jsxref("String.substring", "substring")}},
        {{jsxref("String.substr", "substr")}}
      </td>
      <td>
        <p>
          어느 시작 및 종료 인덱스 또는 시작 인덱스 및 길이를 지정하여, 문자열의
          지정된 일부를 반환합니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String.match", "match")}},
        {{jsxref("String.replace", "replace")}},
        {{jsxref("String.search", "search")}}
      </td>
      <td><p>정규 표현식으로 작업합니다.</p></td>
    </tr>
    <tr>
      <td>
        {{jsxref("String.toLowerCase", "toLowerCase")}},<br />{{jsxref("String.toUpperCase", "toUpperCase")}}
      </td>
      <td><p>.모든 소문자 또는 대문자에서 각각 문자열을 반환합니다.</p></td>
    </tr>
    <tr>
      <td>{{jsxref("String.normalize", "normalize")}}</td>
      <td>호출 문자열 값의 유니 코드 표준화 양식을 반환합니다.</td>
    </tr>
    <tr>
      <td>{{jsxref("String.repeat", "repeat")}}</td>
      <td>
        <p>주어진 회를 반복하는 개체 요소로 이루어진 문자열을 반환합니다.</p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String.trim", "trim")}}</td>
      <td>문자열의 시작과 끝에서 공백을 자릅니다.</td>
    </tr>
  </tbody>
</table>

### 다중 선 템플릿 문자열

[템플릿 문자열](/ko/docs/Web/JavaScript/Reference/template_strings)은 포함 식을 용납하는 문자열 리터럴입니다. 여러분은 그것들과 함께 다중 선 문자열 및 문자열 보간 기능을 사용할 수 있습니다.

템플릿 문자열은 작은따옴표나 큰따옴표 대신에 back-tick (\` \`) ([grave accent](https://en.wikipedia.org/wiki/Grave_accent))문자로 묶습니다. 템플릿 문자열은 자리 표시자를 포함 할 수 있습니다. 이들은 달러 기호와 중괄호로 표시됩니다. (`${expression}`)

#### 다중 선

소스에 삽입하는 새로운 선 문자는 템플릿 문자열의 일부입니다. 정상적인 문자열을 사용하면, 여러분은 다중 선 문자열을 얻기 위해 다음과 같은 구문을 사용해야합니다:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

다중 선 문자열과 같은 효과를 얻기 위해, 여러분은 이제 쓸 수 있습니다:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### 포함식

일반 문자열 내에서 표현식을 포함하기 위해, 다음과 같은 구문을 사용합니다:

```js
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

이제, 템플릿 문자열을 가지고, 여러분은 읽기와 같이 대체를 만드는 syntactic sugar의 사용을 할 수 있습니다:

```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

자세한 내용은 [JavaScript 참조](/ko/docs/Web/JavaScript/Reference)에서 [템플릿 문자열](/ko/docs/Web/JavaScript/Reference/template_strings)에 대해 읽어보세요.

## 국제화

{{jsxref("Intl")}} 개체는 ECMA스크립트 국제 API에 언어와 문자열과 숫자서식과 날짜와 시간서식을 제공하는 명칭공간입니다. {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, 와 {{jsxref("DateTimeFormat")}} 개체들을 위한 생성자들은 `Intl` 개체의 특성들입니다.

### 날짜와 시간서식

{{jsxref("DateTimeFormat")}} 개체는 날짜와 시간을 서식하기에 유용합니다. 다음 코드는 미국에서 쓰이는 영어로 날짜를 서식합니다. (결과는 다른 시간대와 다릅니다)

```js
var msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

var options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
```

### 숫자 서식

{{jsxref("NumberFormat")}}개체는 통화를 위해 숫자를 서식하는것에 대해 유용하다.

```js
var gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

### 조합

{{jsxref("Collator")}}개체는 문자열을 비교하고 구분하는 것에 대해 유용합니다.

예를 들어, 실제로 독일에선 phonebook과 dictionary라는 2개의 다른 종류의 명령어들이 있습니다. 전화기록부류는 소리를 강조합니다. 그리고 구분에 앞서 다른것들은 "ä", "ö"인것처럼 "ae", "oe"로 확장됐습니다.

```js
var names = ["Hochberg", "Hönigswald", "Holzman"];

var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Hönigswald, Holzman"
```

어떤 독일말들은 여분의 변모음과 함께 활용한다. 그래서 사전안에서 이것은 변모음을 무시하라고 명령하기에 실용적이다.

```js
var germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// logs "Hochberg, Holzman, Hönigswald"
```

{{jsxref("Intl")}}API에 대한 자세한 내용은 [Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/)를 참조하세요.

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}
