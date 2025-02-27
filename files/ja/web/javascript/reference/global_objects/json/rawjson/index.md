---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 0e8730e1a9bdfaa1710530c47135f79cedc3e94b
---

{{JSRef}}

**`JSON.rawJSON()`** 静的メソッドは、 JSON テキストの一部を含む「生の JSON」オブジェクトを生成します。 JSON にシリアライズされた場合、生の JSON オブジェクトは既に JSON の一部であるかのように扱われます。このテキストは有効な JSON であることが求められます。

## 構文

```js-nolint
JSON.rawJSON(string)
```

### 引数

- `string`
  - : JSON テキストです。**プリミティブ値を表す**有効な JSON でなければなりません。

### 返値

指定された文字列と全く同じ内容を持つ JSON テキストを作成するために使用することができるオブジェクトで、文字列自体を囲む引用符はありません。このオブジェクトの[プロトタイプは `null`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)であり、プロトタイプを保有し、[凍結されています](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)（そのため、何らかのプリミティブ変換によって誤って通常のオブジェクトとしてシリアライズされることはありません）。

- `rawJSON`
  - : 提供された元の JSON の `string` です。

さらに、[プライベートプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)を持ち、それ自身を生の JSON オブジェクトとしてマークします。これにより、 {{jsxref("JSON.stringify()")}} と {{jsxref("JSON.isRawJSON()")}} で識別できるようになります。

### 例外

- {{jsxref("SyntaxError")}}
  - : 文字列 `string` が有効な JSON でない場合、またはオブジェクトや配列を表していない場合に発生します。

## 解説

生の JSON オブジェクトは、あらゆる種類の[プリミティブ](/ja/docs/Web/JavaScript/Data_structures#primitive_values)のような、不変で原子的なデータ構造と見なすことができます。これは通常のオブジェクトではなく、生の JSON テキスト以外のデータは持ちません。様々な理由で `JSON.stringify` 自身が生成できない形式にデータを「事前シリアライズ」するために使用します。最も典型的な使用する用途は、浮動小数点数の精度損失の問題です。例えば、次のような場合です。

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

この値は元の数値と正確には等しくありません！これは JavaScript がすべての数値に浮動小数点数を使用しているため、すべての整数を正確に表すことができないからです。数値リテラル `12345678901234567890` 自体は、 JavaScript によって解釈されるときに、最も近い表現可能な数値に丸められます。

`JSON.rawJSON` がなければ、対応する JavaScript の数値が存在しないため、 `JSON.stringify` に `12345678901234567890` という数値リテラルを生成するように指示する方法はありません。生の JSON では、具体的な値を文字列化するように `JSON.stringify()` に直接指示することができます。

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

この例については、[損失のない数値のシリアライズ](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON#json_数値の使用)を参照してください。

`JSON.rawJSON()` に文字列を渡しましたが、最終的な JSON では数値になることに注意してください。これは、文字列が JSON のテキストをそのまま表しているからです。文字列をシリアライズしたい場合は、 `JSON.rawJSON()` に引用符で囲まれた文字列値を使用してください。

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` は任意の JSON テキストを挿入することができますが、不正な JSON を作成することはできません。 JSON 構文で許可されていない何らかのものは、 `JSON.rawJSON()` でも許可されません。

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // 改行は JSON 文字列で許可されていないので Syntax error
```

さらに、 JSON オブジェクトや配列を作成するのに `JSON.rawJSON()` を使用することはできません。

## 例

### JSON.rawJSON() を使用して様々な型の JSON 表現を作成

```js
const numJSON = JSON.rawJSON("123");
const strJSON = JSON.rawJSON('"Hello world"');
const boolJSON = JSON.rawJSON("true");
const nullJSON = JSON.rawJSON("null");

console.log(
  JSON.stringify({
    age: numJSON,
    message: strJSON,
    isActive: boolJSON,
    nothing: nullJSON,
  }),
);

// {"age":123,"message":"Hello world","isActive":true,"nothing":null}
```

ただし、 `JSON.rawJSON()` を使用して JSON オブジェクトや配列を作成することはできません。

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### JSON.rawJSON() を使用してエスケープされた文字列リテラルを作成

数値の他に、 JavaScript の値と JSON のテキストが一対一に対応しない型は、文字列しかありません。文字列が JSON にシリアライズされるとき、 JSON 文字列リテラル内で合法でないもの（改行など）以外のすべてのコードポイントは、文字通りに出力されます。

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

これは確実ではないかもしれません。この文字列の受信側では異なる形で Unicode を処理する可能性があるためです。相互運用性を向上させるために、エスケープシーケンスでシリアライズする文字列を明示的に指定することができます。

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(objStr); // {"value":"\ud83d\ude04"}
console.log(JSON.parse(objStr).value); // 😄
```

`rawJSON` の二重バックスラッシュは、実際には単一のバックスラッシュ文字を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`JSON.rawJSON` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
