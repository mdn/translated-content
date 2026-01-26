---
title: Boolean() コンストラクター
short-title: Boolean()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Boolean()`** コンストラクターは {{jsxref("Boolean")}} オブジェクトを生成します。関数として呼び出された場合、論理型のプリミティブ値を返します。

{{InteractiveExample("JavaScript デモ: Boolean() コンストラクター")}}

```js interactive-example
const flag = new Boolean();
console.log(typeof flag);
// 予想される結果: object
console.log(flag === false);
// 予想される結果: false

const flag2 = Boolean();
console.log(typeof flag2);
// 予想される結果: boolean
console.log(flag2 === false);
// 予想される結果: true
```

## 構文

```js-nolint
new Boolean(value)
Boolean(value)
```

> [!NOTE]
> `Boolean()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用したり使用してもしなくても呼び出すことができますが、その効果は異なります。詳細については[返値](#返値)を参照してください。

### 引数

- `value`
  - : この `Boolean` オブジェクトの初期値です。

### 返値

`Boolean()` が関数として（[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) なしで）呼び出された場合、 `value` を [論理型に変換された値](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)として返します。

`Boolean()` がコンストラクターとして（`new` をつけて）呼び出された場合、 `value` を論理値型のプリミティブに変換し、それをラップした {{jsxref("Boolean")}} オブジェクトを返します。このオブジェクトは**プリミティブ型ではありません**。

> [!WARNING]
> `Boolean` をコンストラクターとして使用する例は、ほとんど見つからないはずです。

## 解説

最初の引数として渡された値は[論理値に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)。値が省略されるか、`0`、`-0`、`0n`、[`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)、`false`、{{jsxref("NaN")}}、 {{jsxref("undefined")}}、または空文字列 (`""`) の場合、オブジェクトの初期値は `false` になります。それ以外にもすべての値（オブジェクト、空の配列 (`[]`)、文字列 `"false"` を含む）は、初期値が `true` のオブジェクトを生成します。

> [!NOTE]
> 標準外のプロパティ [`document.all`](/ja/docs/Web/API/Document/all) がこのコンストラクターの引数として使われた場合、結果は `false` の値を持った `Boolean` オブジェクトになります。このプロパティは古く標準外であるため、使用しないでください。

## 例

### Boolean オブジェクトを生成して初期値を false とする

```js
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);

typeof bfalse; // "object"
Boolean(bfalse); // true
```

`Boolean` オブジェクトを `Boolean()` でプリミティブに変換すると、オブジェクトが `false` の値を保持していても常に `true` を生成することに注意してください。したがって、`Boolean` ラッパー オブジェクトの構築は常に避けるようにお勧めします。

ラッパーオブジェクトからプリミティブ値を取得する必要がある場合、`Boolean()` 関数を使用するのではなく、そのオブジェクトの [`valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf) メソッドを使用してください。

```js
const bfalse = new Boolean(false);

bfalse.valueOf(); // false
```

### Boolean オブジェクトを生成して初期値を true とする

```js
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Boolean](/ja/docs/Glossary/Boolean)
