---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
---

{{JSRef}}

**`test()`** メソッドは、正規表現と指定された文字列の一致を調べるための検索を実行します。 `true` または `false` を返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## 構文

```
regexObj.test(str)
```

### 引数

- `str`
  - : 正規表現にマッチさせる文字列。

### 返値

正規表現と指定した文字列 `str` の間に一致するものがあった場合は、`true`。そうでない場合は、`false`。

## 解説

あるパターンがある文字列内で見つかるかどうか調べたいときは、 `test()` を使用してください。 `test()` は論理値を返します。これは (一致した場所のインデックス番号、または見つからない場合は `-1` を返す) {{jsxref("String.prototype.search()")}} メソッドとは異なります。

より多くの情報を得るためには (実行が遅くなりますが)、 {{jsxref("RegExp.prototype.exec()", "exec()")}} メソッドを使用してください ({{jsxref("String.prototype.match()")}} メソッドと同様)。

`exec()` と同様に (またはその組み合わせで)、 `test()` は同じグローバル正規表現インスタンスで複数回呼び出されると、前回の一致の先に進むことになります。

## 例

### test() の使用

"`hello`" が文字列の先頭近くに含まれているかを真偽値で確認する簡単な例です。

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

次の例では、テストの成否によってメッセージを表示します。

```js
function testInput(re, str) {
  let midstring;
  if (re.test(str)) {
    midstring = "contains";
  } else {
    midstring = "does not contain";
  }
  console.log(`${str} ${midstring} ${re.source}`);
}
```

### グローバルフラグを持つ正規表現の test() の使用

正規表現に[グローバルフラグ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2)が設定されている場合、 `test()` は正規表現が所有する {{jsxref("RegExp.lastIndex", "lastIndex")}} の値を加算します。 ({{jsxref("RegExp.prototype.exec()", "exec()")}} も同様に `lastIndex` プロパティの値を加算します。)

その後にさらに `test(str)` を呼び出すと、 `str` を `lastIndex` から検索します。 `lastIndex` プロパティは `test()` が `true` を返すたびに増え続けます。

> **メモ:** `test()` が `true` を返す限り、 `lastIndex` は別な文字列をテストした場合であっても、リセット*されません*。

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
// (...以下略)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.test")}}

## 関連情報

- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)の[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype")}}
