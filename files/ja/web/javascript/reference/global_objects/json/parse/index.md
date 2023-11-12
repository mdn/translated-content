---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
---

{{JSRef}}

**`JSON.parse()`** メソッドは文字列を JSON として解析し、文字列によって記述されている JavaScript の値やオブジェクトを構築します。任意の **reviver** 関数で、生成されたオブジェクトが返される前に変換を実行することができます。

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## 構文

```js
JSON.parse(text);
JSON.parse(text, reviver);
```

### 引数

- `text`
  - : JSON として解析する文字列。JSON の構文の説明は {{jsxref("JSON")}} オブジェクトを参照してください。
- `reviver` {{optional_inline}}
  - : もし関数である場合、解析により作り出された元の値を、オブジェクトを返す前に変換する方法を指示します。

### 返値

{{jsxref("Object")}}, {{jsxref("Array")}}, 文字列, 数値, 論理値, null 値のいずれかで、指定された JSON の `text` に対応する値です。

### 例外

解析する文字列が有効な JSON でない場合、{{jsxref("SyntaxError")}} 例外が発生します。

## ポリフィル

```js
// From https://github.com/douglascrockford/JSON-js/blob/master/json2.js
if (typeof JSON.parse !== "function") {
  var rx_one = /^[\],:{}\s]*$/;
  var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rx_three =
    /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
  var rx_dangerous =
    /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  JSON.parse = function (text, reviver) {
    // The parse method takes a text and an optional reviver function, and returns
    // a JavaScript value if the text is a valid JSON text.

    var j;

    function walk(holder, key) {
      // The walk method is used to recursively walk the resulting structure so
      // that modifications can be made.

      var k;
      var v;
      var value = holder[key];
      if (value && typeof value === "object") {
        for (k in value) {
          if (Object.prototype.hasOwnProperty.call(value, k)) {
            v = walk(value, k);
            if (v !== undefined) {
              value[k] = v;
            } else {
              delete value[k];
            }
          }
        }
      }
      return reviver.call(holder, key, value);
    }

    // Parsing happens in four stages. In the first stage, we replace certain
    // Unicode characters with escape sequences. JavaScript handles many characters
    // incorrectly, either silently deleting them, or treating them as line endings.

    text = String(text);
    rx_dangerous.lastIndex = 0;
    if (rx_dangerous.test(text)) {
      text = text.replace(rx_dangerous, function (a) {
        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
      });
    }

    // In the second stage, we run the text against regular expressions that look
    // for non-JSON patterns. We are especially concerned with "()" and "new"
    // because they can cause invocation, and "=" because it can cause mutation.
    // But just to be safe, we want to reject all unexpected forms.

    // We split the second stage into 4 regexp operations in order to work around
    // crippling inefficiencies in IE's and Safari's regexp engines. First we
    // replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
    // replace all simple value tokens with "]" characters. Third, we delete all
    // open brackets that follow a colon or comma or that begin the text. Finally,
    // we look to see that the remaining characters are only whitespace or "]" or
    // "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

    if (
      rx_one.test(
        text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""),
      )
    ) {
      // In the third stage we use the eval function to compile the text into a
      // JavaScript structure. The "{" operator is subject to a syntactic ambiguity
      // in JavaScript: it can begin a block or an object literal. We wrap the text
      // in parens to eliminate the ambiguity.

      j = eval("(" + text + ")");

      // In the optional fourth stage, we recursively walk the new structure, passing
      // each name/value pair to a reviver function for possible transformation.

      return typeof reviver === "function"
        ? walk(
            {
              "": j,
            },
            "",
          )
        : j;
    }

    // If the text is not JSON parsable, then a SyntaxError is thrown.

    throw new SyntaxError("JSON.parse");
  };
}
```

## 例

### JSON.parse() の使用

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### reviver 引数の使用

`reviver` が指定された場合、解析によって計算された値は、返却される前に*変換*されます。具体的には、計算された値とそのすべてのプロパティ (最も深いプロパティから始まり、元の値自身に至るまで) は、個別に `reviver` を通して変換されます。そして、処理されるプロパティを含むオブジェクトを `this` とし、プロパティ名を文字列、プロパティ値を引数にして、これが呼び出されます。もし `reviver` 関数が {{jsxref("undefined")}} を返した場合 (または、値を返さなかった場合、例えば関数の途中で実行が中断された場合など)、そのプロパティはオブジェクトから削除されます。そうでなければそのプロパティは返値として再定義されます。

もし `reviver` が一部の値だけを変換して他を変換しないのであれば、必ずすべての変換されない値をそのまま返すようにしてください。そうしなければ、結果として得られるオブジェクトから削除されてしまいます。

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // 数値ならば値の2倍を返す
      : value, // それ以外ならば変更しない
);

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // 現在のプロパティ名を出力する。最後は ""。
  return value; // 変更されていないプロパティの値を返す。
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### JSON.parse() は末尾のカンマを許容しない

```js example-bad
// 両方とも SyntaxError が発生
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

### JSON.parse() は単一引用符を許容しない

```js example-bad example-bad
// SyntaxError が発生
JSON.parse("{'foo': 1}");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON.stringify()")}}
