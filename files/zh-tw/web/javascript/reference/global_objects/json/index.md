---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
---

{{JSRef}}

**`JSON`** 物件包含了解析、或是轉換為 [JavaScript Object Notation](http://json.org/)（{{glossary("JSON")}}）格式的方法。這物件不能被呼叫或建構；而除了它的兩個方法屬性以外，本身也沒有特別的功能。

## 描述

### JavaScript Object Notation

JSON 是序列物件、陣列、數字、字串、布林值、還有 {{jsxref("null")}} 的語法。它建基、但不同於 JavaScript：有些 JavaScript 不是 JSON、而有些 JSON 不是 JavaScript。請參見 [JSON: The JavaScript subset that isn't](http://timelessrepo.com/json-isnt-a-javascript-subset)。

| JavaScript 型別 | 與 JSON 的差別                                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| 物件與陣列      | 屬性名稱必須是包含在雙引號中的字串；禁止[尾後逗號](/zh-TW/docs/Web/JavaScript/Reference/Trailing_commas)。 |
| 數字            | 數字不可以 0 作為開頭；小數點前面必須至少有一位數字；不支援 `NaN` 和 `Infinity`。                          |

### JSON 的完整語法

```plain
JSON-text = object / array
begin-array     = ws %x5B ws  ; [ left square bracket
begin-object    = ws %x7B ws  ; { left curly bracket
end-array       = ws %x5D ws  ; ] right square bracket
end-object      = ws %x7D ws  ; } right curly bracket
name-separator  = ws %x3A ws  ; : colon
value-separator = ws %x2C ws  ; , comma
ws = *(
     %x20 /              ; Space
     %x09 /              ; Horizontal tab
     %x0A /              ; Line feed or New line
     %x0D                ; Carriage return
     )
value = false / null / true / object / array / number / string
false = %x66.61.6c.73.65   ; false
null  = %x6e.75.6c.6c      ; null
true  = %x74.72.75.65      ; true
object = begin-object [ member *( value-separator member ) ]
         end-object
member = string name-separator value
array = begin-array [ value *( value-separator value ) ] end-array
number = [ minus ] int [ frac ] [ exp ]
decimal-point = %x2E       ; .
digit1-9 = %x31-39         ; 1-9
e = %x65 / %x45            ; e E
exp = e [ minus / plus ] 1*DIGIT
frac = decimal-point 1*DIGIT
int = zero / ( digit1-9 *DIGIT )
minus = %x2D               ; -
plus = %x2B                ; +
zero = %x30                ; 0
string = quotation-mark *char quotation-mark
char = unescaped /
    escape (
        %x22 /          ; "    quotation mark  U+0022
        %x5C /          ; \    reverse solidus U+005C
        %x2F /          ; /    solidus         U+002F
        %x62 /          ; b    backspace       U+0008
        %x66 /          ; f    form feed       U+000C
        %x6E /          ; n    line feed       U+000A
        %x72 /          ; r    carriage return U+000D
        %x74 /          ; t    tab             U+0009
        %x75 4HEXDIG )  ; uXXXX                U+XXXX
escape = %x5C              ; \
quotation-mark = %x22      ; "
unescaped = %x20-21 / %x23-5B / %x5D-10FFFF
HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F, or a-f
       ; HEXDIG equivalent to HEXDIG rule in [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT equivalent to DIGIT rule in [RFC5234]
```

Insignificant whitespace may be present anywhere except within a `JSONNumber` (numbers must contain no whitespace) or `JSONString` (where it is interpreted as the corresponding character in the string, or would cause an error). The tab character ([U+0009](https://symbl.cc/cn/0009/)), carriage return ([U+000D](https://symbl.cc/cn/000D/)), line feed ([U+000A](https://symbl.cc/cn/000A/)), and space ([U+0020](https://symbl.cc/cn/0020/)) characters are the only valid whitespace characters.

## 方法

- {{jsxref("JSON.parse()")}}
  - : 解析 JSON 字串，能改變給定值和屬性、接著回傳解析值。
- {{jsxref("JSON.stringify()")}}
  - : 回傳給定的 JSON 對應字串，可自行決定只想包括哪些特定屬性、或替換的屬性值。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.toJSON()")}}
