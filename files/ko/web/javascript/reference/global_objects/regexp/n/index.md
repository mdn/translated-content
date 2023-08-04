---
title: RegExp.$1-$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
---

{{JSRef}} {{non-standard_header}}

비표준 **$1, $2, $3, $4, $5, $6, $7, $8, $9** 속성들은 정적이며, 괄호로 묶인 하위 문자열 match들을 포함하는 정규 표현식의 읽기 전용 속성들입니다.

## Syntax

```js
RegExp.$1
RegExp.$2
RegExp.$3
RegExp.$4
RegExp.$5
RegExp.$6
RegExp.$7
RegExp.$8
RegExp.$9
```

## Description

$1, ..., $9 properties are static, they are not a property of an individual regular expression object. Instead, you always use them as `RegExp.$1`, ..., `RegExp.$9`.

The values of these properties are read-only and modified whenever successful matches are made.

The number of possible parenthesized substrings is unlimited, but the `RegExp` object can only hold the first nine. You can access all parenthesized substrings through the returned array's indexes.

These properties can be used in the replacement text for the {{jsxref("String.replace")}} method. When used this way, do not prepend them with `RegExp`. The example below illustrates this. When parentheses are not included in the regular expression, the script interprets `$n`'s literally (where `n` is a positive integer).

## Examples

### Using `$n` with `String.replace`

아래의 script는 first last 포맷의 이름과 매치하기 위해 {{jsxref("String")}} 인스턴스의 {{jsxref("String.prototype.replace()", "replace()")}} 메소드를 사용하고 그것을 last, first 포맷으로 출력한다. 대체 텍스트에서, 이 script는 정규 표현식 패턴에서 매칭되는 괄호들에 해당하는 결과들을 나타내는 `$1` 과 `$2` 를 사용한다.

```js
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
```

## Specifications

Non-standard. Not part of any current specification.

## 브라우저 호환성

{{Compat}}

## See also

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
