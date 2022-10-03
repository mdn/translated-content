---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
---

{{JSRef}}

**`exec()`** メソッドは、指定された文字列内で一致するものの検索を実行します。結果の配列、または {{jsxref("null")}} を返します。

JavaScript の {{jsxref("RegExp")}} オブジェクトは、 {{jsxref("RegExp.global", "global")}} または {{jsxref("RegExp.sticky", "sticky")}} フラグが設定されている場合 (例えば `/foo/g` や `/foo/y`) は**ステートフル**になります。これは前回の一致位置を {{jsxref("RegExp.lastIndex", "lastIndex")}} に格納します。これを内部的に使用することで、 `exec()` はテキストの文字列内で (キャプチャグループのある) 複数の一致を反復処理することができます。これは単なる文字列の一致を取得する {{jsxref("String.prototype.match()")}} とは対照的です。

より新しい関数として、 (キャプチャグループによる) 複数の部分の文字列の一致を単純化する {{jsxref("String.prototype.matchAll()")}} が提案されています。

`true` か `false` かを知るために検索を実行するのであれば、 {{jsxref("RegExp.prototype.test()")}} メソッドを使用してください。

文字列中での位置を知るために検索を実行するのであれば、 {{jsxref("String.prototype.search()")}} メソッドを使用してください。

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## 構文

```js
exec(str)
```

### 引数

- `str`
  - : 正規表現の検索の対象となる文字列。

### 返値

検索に成功した場合、 `exec()` メソッドは配列を返し (追加のプロパティ `index` と `input` が付いており、 `d` フラグが設定されている場合は `indices` も、以下参照)、正規表現オブジェクトの {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティを更新します。返された配列は、一致したテキストを最初の項目として持ち、その後、一致したテキストの括弧によるキャプチャグループに対して 1 つずつの項目を持ちます。

一致に失敗した場合は、 `exec()` メソッドは {{jsxref("null")}} を返し、 {{jsxref("RegExp.lastIndex", "lastIndex")}} を `0` に設定します。

## 解説

次の例を想定してください。

```js
// "quick brown" の後に "jumps" が来るものを、その間の文字を無視して一致させます。
// "brown" と "jumps" を取得します。
// 大文字と小文字は区別しません。
let re = /quick\s(brown).+?(jumps)/ig;
let result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
```

以下の表は、このスクリプト実行後の `result` の状態を示しています。

| プロパティ/添字 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 例                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[0]`           | 文字が一致した部分の文字列全体                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `"Quick Brown Fox Jumps"`                                                                                                                                |
| `[1], ...[n]`   | もしあれば、括弧に囲まれた部分文字列が一致したものです。括弧に囲まれた部分文字列の数に制限はありません。                                                                                                                                                                                                                                                                                                                                                                                       | `result[1] === "Brown"` `result[2] === "Jumps"`                                                                                                         |
| `index`         | 0 から始める一致した文字列の位置。                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `4`                                                                                                                                                      |
| `indices`       | 各項目が部分文字列の一致を表す配列です。各部分文字列の一致自体は、最初の項目が開始位置、 2 番目の項目が終了位置を表す配列です。 indices 配列にはさらに、名前の付いたすべてのキャプチャリンググループのオブジェクトを保持する groups プロパティがあります。キーはキャプチャリンググループの名前で、各値は、最初の項目が開始項目、 2 番目の項目がキャプチャリンググループの終了位置となる配列です。正規表現にキャプチャリンググループが含まれていなかった場合は、 `groups` は `undefined` です。 | `indices[0] === Array [ 4, 25 ]` `indices[1] === Array [ 10, 15 ]` `indices[2] === Array [ 20, 25 ]` `indices.groups === undefined` `indices.length === 3` |
| `input`         | 検索対象となった元の文字列。                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `The Quick Brown Fox Jumps Over The Lazy Dog`                                                                                                            |

以下の表は、このスクリプト実行後の `re` の状態を示しています。

| プロパティ/添字 | 説明                                                                                                                        | 例                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `lastIndex`     | 次回の検索を始める位置です。`g` がない場合は `0` のままです。                                                               | `25`                       |
| `dotAll`        | `s` フラグが使用され、 `.` が改行文字に一致するようにしたかどうかを示します。                                               | `false`                    |
| `hasIndices`    | `d` フラグが使用され、返値に一致する部分文字列の開始位置と終了位置を持つ `indices` プロパティを生成したかどうかを示します。 | `true`                     |
| `ignoreCase`    | `i` フラグが使用され、大文字小文字を区別しなかったかどうか。                                                                | `true`                     |
| `global`        | `g` フラグが使用され、グローバル検索が行われたかどうか。                                                                    | `true`                     |
| `multiline`     | `m` フラグが使用され、複数行に渡って文字列が検索されたかどうか。                                                            | `false`                    |
| `source`        | パターンの文字列。                                                                                                          | `quick\s(brown).+?(jumps)` |
| `sticky`        | `y` フラグが使用され、比較が `lastIndex` プロパティで示された位置からのみ行われたかどうか。                                 | `false`                    |
| `unicode`       | `u` フラグが使用され、パターンが Unicode コードポイントの並びとして扱われたかどうか。                                       | `false`                    |

## 例

### 成功する一致の検索

正規表現で "`g`" フラグを使用する場合、同じ文字列で成功する一致を見つけるために `exec()` メソッドを複数回使うことができます。その際、検索は正規表現オブジェクトの {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティで指定された位置の `str` の部分文字列から始まります ({{jsxref("RegExp.prototype.test()", "test()")}} も {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティの位置から始めます)。なお、別な文字列を検索する場合でも {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティはリセットされず、既存の {{jsxref("RegExp.lastIndex", "lastIndex")}} から検索を始めます。

例えば、次のスクリプトを考えてみてください。

```js
let myRe = /ab*/g;
let str = 'abbcdefabh';
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = myArray[0] + ' を見つけました。';
  msg += '次の検索は ' + myRe.lastIndex + ' からです。';
  console.log(msg);
}
```

このスクリプトは以下のテキストを表示します。

```plain
abb を見つけました。次の検索は 3 からです。
ab を見つけました。次の検索は 9 からです。
```

> **警告:** **正規表現リテラル (または {{jsxref("RegExp")}} コンストラクター) を `while` の条件の中に配置しないでください。**
>
> {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティが繰り返し毎にリセットされるので、無限ループになります。
>
> また、グローバルフラグ ("`g`") が設定されていることを確認してください。これも無限ループを引き起こします。

### RegExp リテラルでの exec() の使用

{{jsxref("RegExp")}} オブジェクトを作成せずに `exec()` を使用することもできます。

```js
let matches = /(hello \S+)/.exec('This is a hello world!');
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
