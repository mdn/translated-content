---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

**`exec()`** は {{jsxref("RegExp")}} インスタンスのメソッドで、指定された文字列の中でこの正規表現と一致するものを検索し、その結果の配列、または [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## 構文

```js-nolint
exec(str)
```

### 引数

- `str`
  - : 正規表現の照合を実施する文字列。すべての値は[文字列に強制されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、省略したり `undefined` を渡したりすると `exec()` は文字列 `"undefined"` を検索するようになりますが、これは望むところではないでしょう。

### 返値

照合に失敗した場合は、 `exec()` メソッドは [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を返し、 [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) を `0` に設定します。

照合に成功した場合、 `exec()` メソッドは配列を返し、正規表現オブジェクトの [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) プロパティを更新します。返された配列は、一致したテキストを最初の項目として持ち、その後、一致したテキストの括弧によるキャプチャグループに対して 1 つずつの項目を持ちます。

- `index`
  - : 文字列中で一致した位置の 0 から始まるインデックスです。
- `input`
  - : 照合対象であった元の文字列です。
- `groups`
  - : 名前付きキャプチャグループを示す [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)で、そのキーが名前となり、値がキャプチャグループ、またはキャプチャグループが定義されていなければ {{jsxref("undefined")}} です。詳しくは[キャプチャグループ](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)を参照してください。
- `indices` {{optional_inline}}

  - : このプロパティは [`d`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) フラグが設定されている場合にのみ存在します。これは配列で、それぞれの要素は部分文字列の一致した境界を表します。この配列のそれぞれの要素のインデックスは `exec()` が返す配列の中の一致する部分文字列のインデックスに対応します。言い換えれば、最初の `indices` 項目は照合する文字列全体を表し、2 つ目の `indices` 項目は最初のキャプチャグループなどを表します。各項目自身は 2 要素の配列で、最初の数字は一致の開始インデックスを表し、2 つ目の数字はその終了インデックスを表します。

    配列 `indices` にはさらに `groups` プロパティがあり、すべての名前付きキャプチャグループの [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)を保持します。キーはキャプチャグループの名前であり、それぞれの値は 2 つ要素の配列で、最初の数字はキャプチャグループの始めるインデックス、 2 つ目の数字は終わりのインデックスです。正規表現に名前付きキャプチャグループが含まれていない場合、 `groups` は `undefined` となります。

## 解説

JavaScript の {{jsxref("RegExp")}} オブジェクトは、 [global](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) または [sticky](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) フラグが設定されている場合（例えば `/foo/g` や `/foo/y`）は**ステートフル**になります。これは前回の一致位置を [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) に格納します。これを内部的に使用することで、 `exec()` はテキストの文字列内で（キャプチャグループのある）複数の一致を反復処理することができます。これは単なる文字列の一致を取得する {{jsxref("String.prototype.match()")}} とは対照的です。

`exec()` を使用する場合、グローバルフラグは sticky フラグが設定されているときには影響しません。照合は常に粘着的に行われます。

`exec()` は正規表現のプリミティブメソッドです。他の多くの正規表現メソッドは、内部的に `exec()` を呼び出します。これは [`@@replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) のような文字列のメソッドからも呼び出されます。`exec()` 自体は強力ですが（そして最も効率的です）、多くの場合、最も明確に意図を伝えるものではありません。

- 正規表現が文字列に一致するかどうかだけが必要で、実際に何が一致するかを見る必要がない場合は、代わりに {{jsxref("RegExp.prototype.test()")}} を使用してください。
- グローバル正規表現のすべての出現を探す場合で、キャプチャグループのような情報が不要な場合は、代わりに {{jsxref("String.prototype.match()")}} を使用してください。さらに、 {{jsxref("String.prototype.matchAll()")}} は、一致した文字列を反復処理することで、（キャプチャグループを持つ）文字列の複数の部分の照合を簡略化するのに役立ちます。
- 文字列内の位置のインデックスを知るため照合する場合は、代わりに{{jsxref("String.prototype.search()")}}メソッドを使用してください。

## 例

### exec() の使用

次の例を想像してみてください。

```js
// "quick brown" の後に "jumps" が来るものを、その間の文字を無視して一致させます。
// "brown" と "jumps" を取得します。
// 大文字と小文字は区別しません。
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

このスクリプト実行後の `result` の状態は次のようになります。

| プロパティ  | 値                                                              |
| --------- | ------------------------------------------------------------------ |
| `[0]`     | `"Quick Brown Fox Jumps"`                                          |
| `[1]`     | `"Brown"`                                                          |
| `[2]`     | `"Jumps"`                                                          |
| `index`   | `4`                                                                |
| `indices` | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`   | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`  | `{ color: "brown" }`                                               |

それに加えて、この正規表現がグローバルであるため、 `re.lastIndex` は `25` に設定されます。

### 連続した一致の検索

正規表現で [`g`](/ja/docs/Web/JavaScript/Guide/Regular_expressions#フラグを用いた高度な検索) フラグを使用する場合、同じ文字列で成功する一致を見つけるために `exec()` メソッドを複数回使うことができます。その際、検索は正規表現オブジェクトの {{jsxref("RegExp/lastIndex", "lastIndex")}} プロパティで指定された位置の `str` の部分文字列から始まります（{jsxref("RegExp.prototype.test()", "test()")}} も {{jsxref("RegExp/lastIndex", "lastIndex")}} プロパティの位置から始めます）。なお、別な文字列を検索する場合でも {{jsxref("RegExp/lastIndex", "lastIndex")}} プロパティはリセットされず、既存の {{jsxref("RegExp/lastIndex", "lastIndex")}} から検索を始めます。

例えば、次のスクリプトを考えてみてください。

```js
const myRe = /ab*/g;
const str = "abbcdefabh";
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = `${myArray[0]} を見つけました。`;
  msg += `次の照合は ${myRe.lastIndex} からです。`;
  console.log(msg);
}
```

このスクリプトは以下のテキストを表示します。

```plain
abb を見つけました。次の照合は 3 からです。
ab を見つけました。次の照合は 9 からです。
```

> **警告:** 無限ループに陥る落とし穴がたくさんあります。
>
> - 正規表現リテラル（または {{jsxref("RegExp")}} コンストラクター）を `while` 条件内に配置しないでください。反復処理するたびに正規表現が再作成され、 {{jsxref("RegExp/lastIndex", "lastIndex")}} がリセットされます。
> [グローバルフラグ (`g`)](/ja/docs/Web/JavaScript/Guide/Regular_expressions#フラグを用いた高度な検索) が設定されているかを確認してください。さもないと `lastIndex` が進行しなくなります。
> - 正規表現が長さゼロの文字（例えば `/^/gm`）に一致する可能性がある場合、同じ位置に留まるのを避けるために、 {{jsxref("RegExp/lastIndex", "lastIndex")}} を毎回手動で増やしてください。

通常、このようなコードを {{jsxref("String.prototype.matchAll()")}} で置き換えることで、エラーの可能性を下げることができます。

### RegExp リテラルでの exec() の使用

{{jsxref("RegExp")}} オブジェクトを作成せずに `exec()` を使用することもできます。

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

これで 'hello world!' を含んだメッセージをログ出力します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)の[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)の章
- {{jsxref("RegExp")}}
