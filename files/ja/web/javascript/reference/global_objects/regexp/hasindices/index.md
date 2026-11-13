---
title: RegExp.prototype.hasIndices
short-title: hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`hasIndices`** は {{jsxref("RegExp")}} インスタンスのプロパティで、その正規表現で `d` フラグが使用されたかどうかを示します。

{{InteractiveExample("JavaScript デモ: RegExp.prototype.hasIndices")}}

```js interactive-example
const regex1 = /foo/d;

console.log(regex1.hasIndices);
// 予想される結果: true

const regex2 = /bar/;

console.log(regex2.hasIndices);
// 予想される結果: false
```

## 解説

`RegExp.prototype.hasIndices` の値は `d` フラグが使用されている場合に `true` となり、そうでない場合は `false` となります。`d` フラグは、正規表現の照合結果に各キャプチャグループの部分文字列の開始と終了のインデックスを含めることを示します。これは正規表現の解釈や照合の動作を変更するものではなく、照合結果に追加情報を与えるだけです。

このフラグは、主に [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) の返値に影響します。`d` フラグが存在する場合、`exec()` によって返される配列は、`exec()` メソッドの[返値](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#返値)に記述されているように、追加の `indices` プロパティを持ちます。他のすべての正規表現関連のメソッド（{{jsxref("String.prototype.match()")}} など）は、内部的に `exec()` を呼び出すので、正規表現に `d` フラグがある場合、インデックスも返します。

`hasIndices` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

[グループと後方参照 > グループと一致結果の添字の使用](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#グループと一致結果の添字の使用)に詳しい使用例があります。

### hasIndices の使用

```js
const str1 = "foo bar foo";

const regex1 = /foo/dg;

console.log(regex1.hasIndices); // true

console.log(regex1.exec(str1).indices[0]); // [0, 3]
console.log(regex1.exec(str1).indices[0]); // [8, 11]

const str2 = "foo bar foo";

const regex2 = /foo/;

console.log(regex2.hasIndices); // false

console.log(regex2.exec(str2).indices); // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
