---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: c3951963f6d3397d21624cfc94a72203acad6412
---

{{JSRef}}

**`JSON.parse()`** 静的メソッドは、文字列を JSON として解析し、文字列によって記述されている JavaScript の値やオブジェクトを構築します。オプションの**リバイバー**関数で、生成されたオブジェクトが返される前に変換を実行することができます。

{{InteractiveExample("JavaScript デモ: JSON.parse()")}}

```js interactive-example
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
```

## 構文

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### 引数

- `text`
  - : JSON として解析する文字列。JSON の構文の説明は {{jsxref("JSON")}} オブジェクトを参照してください。
- `reviver` {{optional_inline}}
  - : もし関数である場合、解析により作り出された元の値を、オブジェクトを返す前に変換する方法を指示します。この関数は以下の引数で呼び出されます。
    - `key`
      - : この値に関連付けられたキー。
    - `value`
      - : 解釈で生成された値。
    - `context` {{optional_inline}}
      - : 現在の式に関連する状態を保持するコンテキストオブジェクト。リバイバー関数を呼び出すたびに新しいオブジェクトが生成されます。このオブジェクトはプリミティブ値を復活させる場合のみ渡され、 `value` がオブジェクトや配列の場合は渡されません。以下のプロパティがあります。
        - `source`
          - : この値を表す元の JSON 文字列。

### 返値

{{jsxref("Object")}}, {{jsxref("Array")}}, 文字列, 数値, 論理値, `null` 値のいずれかで、指定された JSON の `text` に対応する値です。

### 例外

- {{jsxref("SyntaxError")}}
  - : 解析する文字列が有効な JSON でない場合に発生します。

## 解説

`JSON.parse()` は、 [JSON の文法](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar)に従って JSON 文字列を構文解析し、 JavaScript 式であるかのように文字列を評価します。 JSON テキストの一部が、同じ JavaScript 式と異なる値を表す唯一の例は、 `"__proto__"` キーを扱う場合です。[オブジェクトリテラル構文 vs. JSON](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#オブジェクトリテラル表記法_vs_json) を参照してください。

### reviver 引数

`reviver` を指定すると、構文解析で計算された値を変換してから返します。具体的には、計算された値とそのすべてのプロパティ（最も奥になったプロパティから、元の値自身へと[深さ優先](https://en.wikipedia.org/wiki/Depth-first_search)で）が個別にリバイバーに実行されます。

`reviver` は、処理対象のプロパティを含むオブジェクトを `this` として（アロー関数として `reviver` を定義しない限り、別個の `this` バインディングはありません）、 `key` と `value` の 2 つの引数を指定して呼び出されます。これらはそれぞれ、文字列としてのプロパティ名（配列の場合も同様）とプロパティ値を表します。プリミティブ値の場合は、さらに `context` 引数が渡され、この引数にはこの値のソーステキストが格納されます。 `reviver` 関数が {{jsxref("undefined")}} を返した場合（または返値がない場合、例えば、関数の終わりで実行が止まってしまった場合など）、プロパティはオブジェクトから削除されます。それ以外の場合、プロパティは返値を返すように再定義されます。もし `reviver` がある値だけを変換し、他の値を変換しない場合は、変換されない値をすべてそのまま返すようにしてください。

{{jsxref("JSON.stringify()")}} の `replacer` 引数と同様に、配列やオブジェクトの場合、 `reviver` は空文字列を `key` とし、ルートオブジェクトを `value` として、ルート値に対して最後に呼び出されます。他にも有効な JSON 値がある場合、 `reviver` は同様に動作し、空文字列を `key` とし、値そのものを `value` として一度だけ呼び出されます。

`reviver` から別の値を返すと、元々解釈できた値はその値によって完全に置き換えます。これはルート値にも適用されます。例えば、このようになります。

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) => {
  return typeof value === "object" ? undefined : value;
});

console.log(transformedObj1); // undefined
```

一般的にこれを回避する方法はありません。JSON オブジェクトには空文字列のキーも格納することができるため、キーが空文字列の場合を特別に処理することはできません。リバイバーを実装する際には、それぞれのキーに対してどのような変換が必要かをとても正確に知る必要があります。

`reviver` は値が解釈された後に実行されることに注意してください。そのため、例えば JSON テキストでの数値は既に JavaScript の数値に変換されており、その過程で精度を失うことがあります。精度を失うことなく大きな数値を変換する 1 つの方法は、文字列としてシリアライズし、[長整数型](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)や、他にも適切な任意の精度形式に復活させることです。

下記の通り、 `context.source` プロパティを使用して、値を表す元の JSON ソーステキストにアクセスすることもできます。

```js
const bigJSON = '{"gross_gdp": 12345678901234567890}';
const bigObj = JSON.parse(bigJSON, (key, value, context) => {
  if (key === "gross_gdp") {
    // 値がすでに精度を失っているため無視。
    return BigInt(context.source);
  }
  return value;
});
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

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // 数値ならば値の 2 倍を返す
      : value, // それ以外ならば変更しない
);
// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### JSON.stringify() のリプレイサーと対になるリバイバーの使用

値を正しく丸める（つまり、同じ元のオブジェクトへシリアライズ解除する）ためには、シリアライズ処理で型情報を保持する必要があります。例えば、このために {{jsxref("JSON.stringify()")}} の `replacer` 引数を使用することができます。

```js
// 通常は、 Map はプロパティを持たないオブジェクトとしてシリアライズされます。
// リプレイサーを使用して、シリアライズする項目を指定することができます。
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const jsonText = JSON.stringify(map, (key, value) =>
  value instanceof Map ? Array.from(value.entries()) : value,
);

console.log(jsonText);
// [[1,"one"],[2,"two"],[3,"three"]]

const map2 = JSON.parse(jsonText, (key, value) =>
  Array.isArray(value) ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "one", 2 => "two", 3 => "three" }
```

JSON には型メタデータを記すための構文空間がないため、プレーンなオブジェクトではない値を復活させるには、以下のいずれかを考慮する必要があります：

- オブジェクト全体を文字列にシリアライズし、接頭辞に型タグを付ける方法。
- データの構造に基づいて「推測」する（例えば、 2 つのメンバーからなる配列）。
- 本体の形が定型である場合、プロパティ名から推測する（例えば、`registry` と呼ばれるプロパティはすべて `Map` オブジェクトを保持しているなど）。

### 不正な JSON

`JSON.parse` が JSON の文法に適合しない文字列を受け取った場合、 `SyntaxError` が発生します。

JSON において、配列とオブジェクトには[末尾のカンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)を置くことができません。

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON の文字列は（単一引用符でなく）二重引用符で区切らなければなりません。

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

JavaScript の文字列リテラル内で JSON を書く場合は、 JavaScript の文字列リテラルを区切るのに単一引用符を使用するか、 JSON 文字列を区切る二重引用符をエスケープする必要があります。

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [現行の `JSON.parse` の動作（reviver の `context` 引数）のポリフィル (`core-js`)](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
