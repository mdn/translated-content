---
title: RegExp() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JSRef}}

**`RegExp()`** コンストラクターは {{jsxref("RegExp")}} オブジェクトを生成します。

正規表現について詳しく知りたい方は [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide) の [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions) を参照してください。

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## 構文

```js-nolint
new RegExp(pattern)
new RegExp(pattern, flags)
RegExp(pattern)
RegExp(pattern, flags)
```

> **メモ:** `RegExp()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出すことができますが、効果が異なることがあります。[返値](#返値)を参照してください。

### 引数

- `pattern`

  - : 正規表現のテキストです。他の `RegExp` オブジェクトであっても構いません。

- `flags` {{optional_inline}}

  - : 指定された場合、 `flags` は追加するフラグを含む文字列です。または、`RegExp` オブジェクトが `pattern` に提供された場合は、`flags` の文字列はそのオブジェクトのフラグをすべて置き換えます（そして `lastIndex` は 0 にリセットされます）。

    `flags` は以下の値を任意の組み合わせを含んだ文字列を指定することができます。

    - [`d` (indices)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : 部分文字列の一致にインデックスを生成します。
    - [`g` (global)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : 最初に一致した後で停止せずに、一致するものをすべて探します。
    - [`i` (ignore case)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : 照合時に、大文字小文字の違いを無視します。
    - [`m` (multiline)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : 先頭および末尾を示す文字（`^` と `$`）が、複数の行にまたがって機能します。すなわち、入力文字列全体の先頭および末尾だけでなく、それぞれの（`\n` や `\r` で区切られた）行の先頭および末尾に一致します。
    - [`s` (dotAll)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : `.` が改行文字に一致できるようにします。
    - [`u` (unicode)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : `pattern` を Unicode コードポイントの並びとして扱います。
    - [`v` (unicodeSets)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : 文字列のプロパティだけでなく、文字クラスでも集合表記を可能にする `u` フラグのアップグレード版です。
    - [`y` (sticky)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : 対象文字列中の正規表現の `lastIndex` プロパティによって示された位置からのみ照合するようになります。それより後の位置からの照合は試みません。

### 返値

`RegExp(pattern)` は以下のすべてに該当すると、`pattern` を直接返します。

- `RegExp()` が [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) なしで呼び出された
- [`pattern` が正規表現である](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)
- `pattern.constructor === RegExp` （ふつうはサブクラスではないという意味）
- `flags` が `undefined` である

その他のすべての場合においては、`RegExp()` を呼び出す際に `new` を使用しても使用しなくても、新しい `RegExp` オブジェクトが作成されます。`pattern` が正規表現の場合、新しいオブジェクトの[ソース](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)は `pattern.source` になります。それ以外の場合は、`pattern` は[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)。`flags` 引数が `undefined` でない場合、新しいオブジェクトの [`flags`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) は引数の値となり、そうでない場合、その `flags` は `pattern.flags` になります（`pattern` が正規表現の場合）。

### 例外

- {{jsxref("SyntaxError")}}
  - : 以下のいずれかが成立すると発生します。
    - `pattern` が有効な正規表現として解釈できない場合
    - `flags` に繰り返して使われた文字や、許可されている文字以外が含まれていた場合。

## 例

### リテラル記法とコンストラクター

`RegExp` オブジェクトを生成するのに*リテラル記法*と*コンストラクター*の 2 つの方法があります。

- **リテラル記法**はパターンを 2 本のスラッシュの間に取り、2 番目のスラッシュの後にオプションのフラグが続くものです。
- **コンストラクター関数**は文字列または `RegExp` オブジェクトを最初の引数として取り、2 番目の引数としてオプションのフラグの文字列を取ります。

以下の 3 つの式は、同じ正規表現を生成するものです。

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // リテラル表記
new RegExp("ab+c", "i"); // コンストラクター
```

正規表現は、使用する前にコンパイルする必要があります。この処理により、より効率的に照合を行うことができます。コンパイルして `RegExp` オブジェクトを取得するには 2 つの方法があります。

リテラル記法を使用すると、式が評価されるときに正規表現のコンパイルが行われた毛化kになります。一方、`RegExp` オブジェクトのコンストラクターである `new RegExp('ab+c')` は、正規表現を実行時にコンパイルする結果になります。

[動的な入力から正規表現を構築](#動的な入力から正規表現を構築)したい場合は、文字列を最初の引数として `RegExp()` コンストラクターを使用してください。

### 動的な入力から正規表現を構築

```js
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// Returns ['bacon', 'eggs']
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [多くの現代的な `RegExp` 機能（`dotAll`、`sticky` フラグ、名前付きキャプチャグループなど）のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)内の[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)の章
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
