---
title: Template literals
slug: Web/JavaScript/Reference/Template_literals
---

{{JsSidebar("More")}}

템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다. 여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있습니다. 이전 버전의 ES2015사양 명세에서는 "template strings" (템플릿 문자열) 라고 불려 왔습니다.

## Syntax

```
    `string text`

    `string text line 1
     string text line 2`

    `string text ${expression} string text`

    tag `string text ${expression} string text`
```

## Description

템플릿 리터럴은 이중 따옴표 나 작은 따옴표 대신 백틱(\` \`) ([grave accent](http://en.wikipedia.org/wiki/Grave_accent)) 을 이용합니다. 템플릿 리터럴은 또한 플레이스 홀더를 이용하여 표현식을 넣을 수 있는데, 이는 $와 중괄호( `$ {expression}` ) 로 표기할 수 있습니다. 플레이스 홀더 안에서의 표현식과 그 사이의 텍스트는 함께 함수로 전달됩니다. 기본 함수는 단순히 해당 부분을 단일 문자열로 연결시켜 줍니다. 템플릿 리터럴 앞에 어떠한 표현식이 있다면(여기에서는 태그), 템플릿 리터럴은 "태그가 지정된 템플릿"이라고 불리게 됩니다. 이 때, 태그 표현식 (주로 함수)이 처리된 템플릿 리터럴과 함께 호출되면, 출력하기 전에 조작할 수 있습니다. 템플릿 리터럴 안에서 백틱 문자를 사용하려면 백틱 앞에 백슬러쉬(\\)를 넣으십시오.

```js
`\`` === "`"; // --> true
```

### Multi-line strings

source 내에 삽입되는 newline characters(\n)은 template literal의 일부가 됩니다.

일반 string 들을 사용하여, multi-line strings 들을 얻기 위해서는 아래와 같은 문법을 사용해야 할 것입니다.

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

같은 효과를 template literal을 통해 얻기 위해서는, 아래와 같이 적을 수 있습니다.

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Expression interpolation(표현식 삽입법)

표현식(expression)을 일반 문자열(normal strings)에 삽입하기 위해서, 당신은 다음의 문법을 사용할 수 있을 것입니다.

```js
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

template literals을 이용하면, 이를 더욱 읽기 쉽도록 다음과 같은 문법 설탕(syntactic sugar) 을 활용할 수 있습니다.

```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### Nesting templates

특정한 경우 템플릿을 중첩하는 것이 구성 가능한 문자열을 읽는 읽기 가장 쉬운 방법입니다. 백 스페이스 템플릿 내에서 템플릿 내의 자리 표시자`${}`에 내부 백틱을 사용하는 것이 쉽습니다. 예를 들어, 조건 a가 참이면:이 템플릿을 문자 그대로 반환합니다.

In ES5:

```js
var classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
  ? " icon-expander"
  : " icon-collapser";
```

ES2015에서 중첩(nesting)없이 템플릿 리터럴 사용한 경우:

```js
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

ES2015에서 중첩된(nested) 템플릿 리터럴을 사용한 경우:

```js
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Tagged templates

template literals 의 더욱 발전된 한 형태는 _tagged_ templates 입니다. 태그를 사용하면 템플릿 리터럴을 함수로 파싱 할 수 있습니다. 태그 함수의 첫 번째 인수는 문자열 값의 배열을 포함합니다. 나머지 인수는 표현식과 관련됩니다. 결국 함수는 조작 된 문자열을 반환 할 수 있습니다 (또는 다음 예제에서 설명하는 것과 완전히 다른 결과를 반환 할 수 있습니다). function 이름은 원하는 어떤 것이든 가능합니다.

```js
var person = "Mike";
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  // 사실 이 예제의 string에서 표현식이 두 개 삽입되었으므로
  // ${age} 뒤에는 ''인 string이 존재하여
  // 기술적으로 strings 배열의 크기는 3이 됩니다.
  // 하지만 빈 string이므로 무시하겠습니다.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // 심지어 이 함수내에서도 template literal을 반환할 수 있습니다.
  return str0 + personExp + str1 + ageStr;
}

var output = myTag`that ${person} is a ${age}`;

console.log(output);
// that Mike is a youngster
```

다음 예시에서 보여지듯이, Tag function 들은 string 을 반환할 필요는 없습니다.

```js
function template(strings, ...keys) {
  return function (...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function (key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure("Y", "A"); // "YAY!"
var t2Closure = template`${0} ${"foo"}!`;
t2Closure("Hello", { foo: "World" }); // "Hello World!"
```

### Raw strings

태그 지정된 템플릿의 첫 번째 함수 인수에서 사용할 수있는 특별한 `raw` property을 사용하면 [escape sequences](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings) 처리하지 않고 원시 문자열을 입력 한대로 액세스 할 수 있습니다.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

추가로, default template function 과 string 병합으로 생성될 것 같은 raw string 을 생성하기 위한 {{jsxref("String.raw()")}} method가 존재합니다.

```js
var str = String.raw`Hi\n${2 + 3}!`;
// "Hi\n5!"

str.length;
// 6

str.split("").join(",");
// "H,i,\,n,5,!"
```

### Tagged templates and escape sequences

#### ES2016 behavior

ECMAScript 2016에서 tagged templates은 다음 escape sequences의 규칙을 따릅니다.

- Unicode escapes started by "\u", for example `\u00A9`
- Unicode code point escapes indicated by "\u{}", for example `\u{2F804}`
- Hexadecimal escapes started by "\x", for example `\xA9`
- Octal literal escapes started by "\\" and (a) digit(s), for example `\251`

이는 다음과 같은 tagged template이 문제가 된다는 것을 의미하는데, ECMAScript문법에 따라, parser는 유효한 유니 코드 탈출 시퀀스가 있는지 확인하지만 형식이 잘못되었기 때문에 오류가 발생합니다.

```
    latex`\unicode`
    // Throws in older ECMAScript versions (ES2016 and earlier)
    // SyntaxError: malformed Unicode character escape sequence
```

#### ES2018 revision of illegal escape sequences

Tagged templates은 다른 escapes sequences가 일반적으로 사용되는 언어 (예 : [DSLs](https://en.wikipedia.org/wiki/Domain-specific_language) 또는 [LaTeX](https://en.wikipedia.org/wiki/LaTeX))의 임베딩을 허용해야합니다. ECMAScript proposal [Template Literal Revision](https://tc39.github.io/proposal-template-literal-revision/) (4 단계, ECMAScript 2018 표준에 통합됨)은 tagged templates에서 ECMAScript escape sequences의 구문 제한을 제거합니다.

그러나 illegal escape sequences는 여전히 "cooked"라고 표현되어야합니다. "cooked"배열의 {{jsxref ( "undefined")}} 요소로 나타납니다 :

```js
function latex(str) {
  return { cooked: str[0], raw: str.raw[0] };
}

latex`\unicode`;

// { cooked: undefined, raw: "\\unicode" }
```

escape sequence 제한은 _tagged_ templates에만 적용되며 _untagged_ template literals에는 적용되지 않습니다.

> **Warning:** let bad = `bad escape sequence: \unicode`;

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexical grammar](/ko/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
- ["ES6 in Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
