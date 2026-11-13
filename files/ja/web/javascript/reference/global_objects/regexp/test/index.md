---
title: RegExp.prototype.test()
short-title: test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`test()`** は {{jsxref("RegExp")}} インスタンスのメソッドで、正規表現と指定された文字列を照合するための検索を実行します。一致があった場合は `true` を、それ以外の場合は `false` を返します。

JavaScript の {{jsxref("RegExp")}} オブジェクトは {{jsxref("RegExp/global", "global")}} または {{jsxref("RegExp/sticky", "sticky")}} フラグ（`/foo/g` や `/foo/y` など）を設定すると**ステートフル**になります。これらは前回一致したときの {{jsxref("RegExp/lastIndex", "lastIndex")}} を格納します。これを内部的に使用することで、 `test()` を使用して文字列の複数の照合を反復処理することができます（キャプチャグループを使用）。

{{InteractiveExample("JavaScript デモ: RegExp.prototype.test", "taller")}}

```js interactive-example
const str = "table football";

const regex = new RegExp("foo*");
const globalRegex = new RegExp("foo*", "g");

console.log(regex.test(str));
// 予想される結果: true

console.log(globalRegex.lastIndex);
// 予想される結果: 0

console.log(globalRegex.test(str));
// 予想される結果: true

console.log(globalRegex.lastIndex);
// 予想される結果: 9

console.log(globalRegex.test(str));
// 予想される結果: false
```

## 構文

```js-nolint
test(str)
```

### 引数

- `str`
  - : 正規表現と照合する文字列。すべての値は[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、これを省略したり `undefined` を渡したりすると `test()` は文字列 `"undefined"` を検索するようになります。

### 返値

正規表現と指定した文字列 `str` の間に一致するものがあった場合は、`true`。そうでない場合は、`false`。

## 解説

あるパターンがある文字列内で見つかるかどうか調べたいときは、 `test()` を使用してください。 `test()` は論理値を返します。これは (一致した場所のインデックス番号、または見つからない場合は `-1` を返す) {{jsxref("String.prototype.search()")}} メソッドとは異なります。

より多くの情報を得るためには (実行が遅くなりますが)、 {{jsxref("RegExp/exec", "exec()")}} メソッドを使用してください ({{jsxref("String.prototype.match()")}} メソッドと同様)。

`exec()` と同様に (またはその組み合わせで)、 `test()` は同じグローバル正規表現インスタンスで複数回呼び出されると、前回の一致の先に進むことになります。

## 例

### test() の使用

`"hello"` が文字列の先頭近くに含まれているかを論理値で確認する簡単な例です。

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

次の例では、テストの成否によってメッセージを表示します。

```js
function testInput(re, str) {
  const midString = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midString} ${re.source}`);
}
```

### グローバルフラグを持つ正規表現の test() の使用

正規表現に[グローバルフラグ](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)が設定されている場合、 `test()` は正規表現が所有する {{jsxref("RegExp.lastIndex", "lastIndex")}} の値を加算します。（{{jsxref("RegExp.prototype.exec()")}} も同様に `lastIndex` プロパティの値を加算します。）

その後にさらに `test(str)` を呼び出すと、 `str` を `lastIndex` から検索します。 `lastIndex` プロパティは `test()` が `true` を返すたびに増え続けます。

> [!NOTE]
> `test()` が `true` を返す限り、 `lastIndex` は別な文字列をテストした場合であっても、リセット*されません*。

`test()` が `false` を返した場合、正規表現の `lastIndex` プロパティを呼び出すと `0` にリセットされます。

次の例はその挙動を示しています。

```js
const regex = /foo/g; // "global" フラグを設定

// regex.lastIndex は 0 です。
regex.test("foo"); // true

// regex.lastIndex は 3 です。
regex.test("foo"); // false

// regex.lastIndex は 0 です。
regex.test("barfoo"); // true

// regex.lastIndex は 6 です。
regex.test("foobar"); //false

// regex.lastIndex は 0 です。
regex.test("foobarfoo"); // true

// regex.lastIndex は 3 です。
regex.test("foobarfoo"); // true

// regex.lastIndex は 9 です。
regex.test("foobarfoo"); // false

// regex.lastIndex は 0 です。
// (...以下略)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)ガイド
- {{jsxref("RegExp")}}
