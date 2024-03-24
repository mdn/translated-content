---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{JSRef}}

**`sticky`** は {{jsxref("RegExp")}} インスタンスのアクセサープロパティで、この正規表現に `y` フラグが使用されているかどうかを返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}

## 解説

`RegExp.prototype.sticky` の値が `true` ならば `y` フラグが使われており（粘着的正規表現）、そうでなければ `false` になります。`y` フラグはこの正規表現が対象の文字列を {{jsxref("RegExp/lastIndex", "lastIndex")}} プロパティで示されたインデックスからのみ照合を試みることを示します（そしてグローバル正規表現とは異なり、それ以降のインデックスからの照合は試みません）。

`sticky` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

粘着的正規表現と[グローバル](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)正規表現の両方の場合は、次のようになります。

- `lastIndex` で照合を開始します。
- 照合が成功したら、`lastIndex` は一致部分の末尾まで進みます。
- `lastIndex` が現在照合している文字列の範囲を超えたら、`lastIndex` は 0 をリセットします。

ただし、[`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) メソッドについては、照合に失敗したときの動作が異なります。

- [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) メソッドが粘着的な正規表現で呼び出された場合、その正規表現が `lastIndex` での照合に失敗した場合は、正規表現は直ちに `null` を返し `lastIndex` を 0 にリセットします。
- [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) メソッドがグローバル正規表現で呼び出された場合、その正規表現が `lastIndex` での照合に失敗した場合は、次の文字から照合しようとし、一致するものが見つかるか文字列の末尾に達するまで進みます。

[`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) メソッドでは、粘着的かつグローバルな正規表現は、粘着的かつグローバルでない正規表現と同じ動作をします。[`test()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) は `exec()` の単純なラッパーなので、`test()` はグローバルフラグを無視して同様に粘着的な照合を行います。しかし、他にもグローバル正規表現の挙動を特殊化するメソッドがたくさんあるため、 一般的にはグローバルフラグは粘着フラグと直交します。

- [`String.prototype.matchAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)（[`RegExp.prototype[@@matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll) を呼び出す）では `y`, `g`, `gy` はすべて異なります。
  - `y` の正規表現については、`matchAll()` では例外が発生します。`[@@matchAll]()` は `exec()` の結果を 1 つだけ生成しますが、その正規表現の `lastIndex` を更新します。
  - `g` または `gy` の正規表現については、`exec()` の結果を生成するイテレーターを返します。
- [`String.prototype.match()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match)（[`RegExp.prototype[@@match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match) を呼び出す）では `y`, `g`, `gy` はすべて異なります。
  - `y` の正規表現については、`exec()` の結果を返し、その正規表現の `lastIndex` を更新します。
  - `g` または `gy` の正規表現については、すべての `exec()` の結果を配列で返します。
- [`String.prototype.search()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/search) （[`RegExp.prototype[@@search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search) を呼び出す）では `g` フラグは常に無視されます。
  - `y` または `gy` の正規表現については、常に `0`（文字列の一致箇所の最も先頭）または `-1` （先頭に一致しなかった場合）を返し、存在した場合でも `lastIndex` を更新しません。
  - `g` の正規表現については、文字列中で最初に一致した箇所のインデックスを返します。一致するものが見つからなかった場合は `-1` を返します。
- [`String.prototype.split()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) （[`RegExp.prototype[@@split]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split) を呼び出す）では `y`, `g`,`gy` はすべて同じ動作をします。
- [`String.prototype.replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace)（[`RegExp.prototype[@@replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) を呼び出す）では、`y`, `g`, `gy` はすべて異なります。
  - `y` の正規表現については、現在の `lastIndex` の位置で置換を一度実行し、`lastIndex` を更新します。
  - `g` および `gy` の正規表現については、`exec()` に一致したすべての箇所を置換します。
- [`String.prototype.replaceAll()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)（[`RegExp.prototype[@@replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) を呼び出す）では `y`, `g`, `gy` はすべて異なります。
  - `y` の正規表現については、`replaceAll()` は例外が発生します。
  - `g` および `gy` の正規表現については、`exec()` に一致したすべての箇所を置換します。

## 例

### sticky フラグのついた正規表現の使用

```js
const str = "#foo#";
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false （lastIndex は粘着フラグで考慮されます）
regex.lastIndex; // 0 （照合に失敗した後でリセット）
```

### アンカーになる sticky フラグ

Firefox の SpiderMonkey エンジンの一部のバージョンでは `^` 指定に関する[バグ](https://bugzil.la/773687)があり、 `^` アサーションで始まり、 sticky フラグを使うことで一致しない式を許可していました。このバグは Firefox 3.6 以降で発生し（それ以前は sticky が実装されていてもバグはありませんでした）、2015 年に修正されました。このバグのためか、仕様書では[特に注意を促している](https://tc39.es/ecma262/multipage/text-processing.html#sec-compileassertion)という事実があります。

> パターンとともに `y` フラグが使用された場合、 `^` は常に入力の始まりにのみ一致するか、（_rer_.[[Multiline]] が `true` の場合）行の先頭に一致するかです。

以下は正しい挙動の例です。

```js
const regex = /^foo/y;
regex.lastIndex = 2;
regex.test("..foo"); // false - インデックス 2 は文字列の先頭ではない

const regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test("..foo"); // false - インデックス 2 は文字列または行の先頭ではない
regex2.lastIndex = 2;
regex2.test(".\nfoo"); // true - インデックス 2 は行の先頭
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`sticky` フラグのポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.unicode")}}
