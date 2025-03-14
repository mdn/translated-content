---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
l10n:
  sourceCommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{JSRef}}

**`JSON`** 名前空間オブジェクトは、 [JavaScript Object Notation](https://json.org/) ({{Glossary("JSON")}}) を解釈したり、値を JSON に変換したりする静的メソッドを持ちます。

## 解説

多くのグローバルオブジェクトとは異なり、 `JSON` はコンストラクターではありません。また、 [`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)と共に使用したり、関数として `JSON` オブジェクトを呼び出したりすることはできません。 `JSON` のプロパティとメソッドはすべて静的です（{{jsxref("Math")}} オブジェクトと同じです）。

### JavaScript と JSON の違い

JSON は、オブジェクト、配列、数値、文字列、論理値、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) をシリアライズする構文です。これは JavaScript の構文に基づいていますが、区別されるものです。 JavaScript ならば JSON であるというわけでは*ありません*。

- オブジェクトと配列
  - : プロパティ名は二重引用符で括った文字列にしなければなりません。[末尾のカンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)を置いてはいけません。
- 数値
  - : 先頭にゼロを置くことは禁止されています。また、小数点は 1 桁以上の数字の後ろに置かなければなりません。 `NaN` と `Infinity` には対応していません。

あらゆる JSON のテキストは有効な JavaScript の式です。ただし、これは [JSON superset](https://github.com/tc39/proposal-json-superset) 以降での話です。このリビジョンより前では、 U+2028 LINE SEPARATOR と U+2029 PARAGRAPH SEPARATOR は JSON の文字列リテラルとプロパティのキーでは許されますが、これらの機能を JavaScript 文字列リテラルの中で使用すると {{jsxref("SyntaxError")}} になります。

他の違いとしては、二重引用符で囲まれた文字列のみを許可していることや、 {{jsxref("undefined")}} やコメントの規定がないことなどが挙げられます。 JSON に基づいたより人間に優しい設定フォーマットを使いたい場合、 Babel コンパイラーによって使われている [JSON5](https://json5.org/) や、より一般的に使われる [YAML](https://ja.wikipedia.org/wiki/YAML) があります。

JavaScript のオブジェクトリテラルと JSON との間で、同じテキストが異なる値を表すことがあります。詳しくは、[オブジェクトリテラル構文と JSON](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#オブジェクトリテラル表記法_vs_json) を参照してください。

### JSON の完全な構文

有効な JSON の構文は、[ABNF](https://ja.wikipedia.org/wiki/ABNF) で表現された以下の文法で公式に定義されています。これは [IETF の JSON 標準 (RFC)](https://datatracker.ietf.org/doc/html/rfc8259) からコピーしたものです。

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

重要でない{{Glossary("whitespace", "ホワイトスペース")}}は、基本的に任意の場所に置くことができますが、 `JSONNumber` （数値に空白を含んではいけません）や `JSONString` （対応する文字であると解釈されるか、エラーが発生します）の内部では置くことができません。ホワイトスペースとして有効な文字はタブ文字 (U+0009)、キャリッジリターン (U+000D)、ラインフィード (U+000A)、空白 (U+0020) のみです。

## 静的プロパティ

- `JSON[Symbol.toStringTag]`
  - : プロパティ [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) の初期値は文字列 `"JSON"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用します。

## 静的メソッド

- {{jsxref("JSON.isRawJSON()")}}
  - : 返値が {{jsxref("JSON.rawJSON()")}} によって返されたオブジェクトであるかどうかをテストします。
- {{jsxref("JSON.parse()")}}
  - : 文字列 `text` を JSON として解析し、オプションで生成された値とそのプロパティを変換し、値を返します。
- {{jsxref("JSON.rawJSON()")}}
  - : JSON テキストを格納した「生の JSON」オブジェクトを作成します。 JSON にシリアライズされるとき、生の JSON オブジェクトは、すでに JSON の一部であるかのように扱われます。このテキストは、有効な JSON であることが要求されます。
- {{jsxref("JSON.stringify()")}}
  - : 指定した値に対応する JSON 文字列を返します。オプションで、特定のプロパティのみを含むか、ユーザー定義の方法でプロパティ値を置き換えることもできます。

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

{{jsxref("JSON.parse()")}} メソッドを使用することで、上記の JSON 文字列を JavaScript オブジェクトに変換することができます。

```js
const jsonText = `{
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
}`;

console.log(JSON.parse(jsonText));
```

### 損失のない数値のシリアライズ

JSON は任意の精度の数値リテラルを格納することができます。しかし、 JavaScript では固定された精度を持つ浮動小数点数を使用しているため、 JavaScript ですべての JSON の数値を正確に表すことはできません。例えば、 `12345678901234567890 === 12345678901234567000` は JavaScript で同じ浮動小数点表現だからです。つまり、 `12345678901234567890` という JSON の数値に正確に対応する JavaScript の数値はないという意味です。

ある数の正確な表現（{{jsxref("BigInt")}} またはカスタムライブラリー）を使用していると想定しましょう。

```js
const data = {
  // ここでは正確な値を格納するために BigInt を使用することができますが、
  // 数値が整数でない可能性がある場合は、カスタム高精度数値ライブラリーを
  // 使用することもできます。
  gross_gdp: 12345678901234567890n,
};
```

それをシリアライズして、同じ正確な数に解釈したいのです。いくつかの困難があります。

- シリアライズ側では、 JSON で数値を取得するために、 `JSON.stringify` に数値を渡す必要があります。 `replacer` 関数を使用するか、 `toJSON` メソッドを使用します。しかし、どちらの場合でも、数値の変換時にすでに精度が失われています。文字列を `JSON.stringify` に渡すと、数値ではなく文字列としてシリアライズされます。
- 解釈する側では、すべての数字を正確に表せるわけではありません。例えば、 `JSON.parse("12345678901234567890")` は `12345678901234568000` を返しますが、これは表現可能な最も近い数に丸められるからです。リバイバー関数を使用したとしても、リバイバー関数が呼び出される前にすでに丸められます。

一般的に、数値が JSON に損失なく変換され、解釈されて戻ってくることを保証する方法は 2 つあります。 1 つは JSON 数値を含む方法、もう 1 つは JSON 文字列を含む方法です。 JSON は「通信フォーマット」であるため、 JSON を使用する場合、別のシステム（HTTP リクエスト、データベースに格納するためなど）と通信している可能性があります。選ぶべき最適な解決策、受信側のシステムによって異なります。

#### JSON 文字列の使用

受信側のシステムが JavaScript と同じ JSON 処理機能を持たず、高精度な数値に対応していない場合、数値を文字列としてシリアライズし、受信側で文字列として処理することができます。これは古い JavaScript で唯一の選択肢でもあります。

（`BigInt` を含む）独自のデータ型を JSON にシリアライズする方法を指定するには、データ型に `toJSON` メソッドを追加するか、 {{jsxref("JSON.stringify()")}} のリプレイサー関数を使用します。

```js
// toJSON() メソッドを使用
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const str1 = JSON.stringify(data);

// JSON.stringify() をリプレイサー付きで使用
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return value.toString();
  }
  return value;
});
```

どちらの場合でも、 JSON テキストは `{"gross_gdp":"12345678901234567890"}` のようになり、値は数字ではなく文字列です。そして、受信者側で JSON を解釈して文字列を処理します。

#### JSON 数値の使用

このメッセージの受信者がネイティブで高精度な数値（Python の整数など）に対応している場合、数値を JSON 数値として渡す方が明らかに優れています。なぜなら、 JSON から文字列を解釈し、その文字列から数値を解釈するのではなく、高精度な型に直接解釈することができるからです。 JavaScript では、 {{jsxref("JSON.rawJSON()")}} を使用して、 JSON ソーステキストがどうあるべきかを正確に指定することで、最初に数値を生成することなく（結果として精度が失われる）、任意のデータ型を JSON 数値にシリアライズすることができます。

```js
// toJSON() メソッドの使用
BigInt.prototype.toJSON = function () {
  return JSON.rawJSON(this.toString());
};
const str1 = JSON.stringify(data);

// JSON.stringify() をリプレイサー付きで使用
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return JSON.rawJSON(value.toString());
  }
  return value;
});
```

`JSON.rawJSON` に渡すテキストは、すでに JSON の一部であるかのように扱われるため、文字列として再度シリアライズされることはありません。したがって、 JSON テキストは `{"gross_gdp":12345678901234567890}` のようになり、値は数字になります。この JSON は、受信側のシステムが JavaScript と同じ精度制限を持っていない限り、余計な処理をすることなく受信側で解釈することができます。

JavaScript で高精度の数値を格納した JSON を解釈する場合、 `JSON.parse()` がリバイバー関数を呼び出すと、受け取る値がすでに解釈されている（精度が落ちている）ので、特に注意してください。 {{jsxref("JSON.parse()")}} のリバイバー関数の `context.source` 引数を使用することで、自分で数値を解釈し直すことができます。

```js
const parsedData = JSON.parse(str, (key, value, context) => {
  if (key === "gross_gdp") {
    // あるいは、独自の高精度数値ライブラリーのコンストラクターを使用
    return BigInt(context.source);
  }
  return value;
});
// { gross_gdp: 12345678901234567890n }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toJSON()")}}
- [JSON Diff](https://json-diff.com/)
- [JSON Beautifier/editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
