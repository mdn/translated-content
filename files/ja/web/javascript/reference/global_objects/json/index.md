---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
tags:
  - JSON
  - JavaScript
  - 名前空間
  - オブジェクト
  - リファレンス
browser-compat: javascript.builtins.JSON
translation_of: Web/JavaScript/Reference/Global_Objects/JSON
---
{{JSRef}}

**`JSON`** オブジェクトは、 [JavaScript Object
Notation](https://json.org/) ({{glossary("JSON")}}) を解釈するメソッドや、値を JSON に変換するメソッドを持ちます。これは呼び出しや構築をすることができず、また 2 つのメソッドプロパティを除いて、これ自身に興味深い機能性はありません。

## 解説

### JavaScript と JSON の違い

JSON は、オブジェクト、配列、数値、文字列、論理値、そして {{jsxref("null")}} をシリアライズする構文です。これは JavaScript の構文に基づいていますが、区別されるものです。JavaScript ならば JSON であるというわけでは*ありません*。

- **オブジェクトと配列**
  - : プロパティ名は二重引用符で括った文字列にしなければなりません。[末尾のカンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)を置いてはいけません。
- **数値**
  - : 先頭にゼロを置くことは禁止されています。また、小数点は 1 桁以上の数字の後ろに置かなければなりません。 `NaN` と `Infinity` には対応していません。
- **あらゆる JSON のテキストは有効な JavaScript の式です...**
  - : ...ただし、[proposal to make all JSON text valid ECMA-262](https://github.com/tc39/proposal-json-superset) を実装した JavaScript エンジンのみでの話です。この提案を実装していないエンジンでは、 U+2028 LINE SEPARATOR と U+2029 PARAGRAPH SEPARATOR は JSON の文字列リテラルとプロパティのキーでは許されますが、これらの機能を JavaScript 文字列リテラルの中で使用すると {{jsxref("SyntaxError")}} になります。

{{jsxref("JSON.parse()")}} が文字列を JSON として解釈し、{{jsxref("Global_Objects/eval", "eval")}} が文字列を JavaScript として実行するこの例を考えてみてください。

```js
let code = '"\u2028\u2029"'
JSON.parse(code)  // どのエンジンでも "\u2028\u2029" と評価される
eval(code)        // 古いエンジンでは SyntaxError が発生する
```

他の違いとしては、二重引用符で囲まれた文字列のみを許可していることや、 {{jsxref("undefined")}} やコメントの規定がないことなどが挙げられます。 JSON に基づいたより人間に優しい設定フォーマットを使いたい場合、 Babel コンパイラーによって使われる [JSON5](https://json5.org/) と、より一般的に使われる [YAML](https://ja.wikipedia.org/wiki/YAML) があります。

### JSON の完全な構文

有効な JSON の構文は、[ABNF](https://ja.wikipedia.org/wiki/ABNF) で表現された以下の文法で公式に定義されています。これは [IETF の JSON 標準 (RFC)](https://datatracker.ietf.org/doc/html/rfc8259) からコピーしたものです。

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

重要でない{{glossary("whitespace", "ホワイトスペース")}}は、基本的に任意の場所に置くことができますが、 `JSONNumber` (数値に空白を含んではいけません) や `JSONString` (対応する文字であると解釈されるか、エラーが発生します) の内部を除きます。ホワイトスペースとして有効な文字はタブ文字 ([U+0009](https://unicode-table.com/en/0009/))、キャリッジリターン ([U+000D](https://unicode-table.com/en/000D/))、ラインフィード ([U+000A](https://unicode-table.com/en/000A/))、空白 ([U+0020](https://unicode-table.com/en/0020/)) のみです。

## 静的メソッド

- {{jsxref("JSON.parse()", "JSON.parse(<var>text</var>[, <var>reviver</var>])")}}
  - : 文字列 `text` を JSON として解析し、オプションで生成された値とそのプロパティを変換し、値を返します。 JavaScript と JSON の違いに関連するものを含め、 JSON の構文に違反すると {{jsxref("SyntaxError")}} が発生します。`reviver` オプションは、`replacer` が他のデータ型の代用として使用したものを解釈することができます。
- {{jsxref("JSON.stringify()", "JSON.stringify(<var>value</var>[, <var>replacer</var>[, <var>space</var>]])")}}
  - : 指定した値に対応する JSON 文字列を返します。オプションで、特定のプロパティのみを含むか、ユーザー定義の方法でプロパティ値を置き換えることもできます。既定では、すべての {{jsxref("undefined")}} のインスタンスは {{jsxref("null")}} に置き換えられ、その他の対応していないネイティブデータ型は打ち切られます。 `replacer` オプションでは、他の動作を指定することができます。

## 例

### JSON の例

```json
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toJSON()")}}
- [JSON Diff](https://json-diff.com/) checker
- [JSON Beautifier/editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
