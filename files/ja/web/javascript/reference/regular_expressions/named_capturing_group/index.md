---
title: "名前付きキャプチャグループ: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{JsSidebar}}

**名前付きキャプチャグループ**は特定の種類の[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)で、グループに名前を付けることができます。グループの照合結果は、パターン内のインデックスではなく、この名前で後で識別することができます。

## 構文

```regex
(?<name>pattern)
```

### 引数

- `pattern`
  - : 正規表現リテラルで使用することができるあらゆるものから成るパターンで、[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)を含みます。
- `name`
  - : グループの名前です。有効な[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)である必要があります。

## 解説

名前付きキャプチャグループは、キャプチャグループと同様に使用することができます 。結果の配列の一致インデックスも持っており、`\1`、`\2` などによって参照することができます。唯一の違いは、名前によって「追加的に」参照することができるということです。 キャプチャグループの一致する情報には、以下のようにしてアクセスすることができます。

- {{jsxref("RegExp.prototype.exec()")}}、{{jsxref("String.prototype.match()")}}、{{jsxref("String.prototype.matchAll()")}} の返値の `groups` プロパティ
- {{jsxref("String.prototype.replace()")}} および {{jsxref("String.prototype.replaceAll()")}} メソッドの `replacement` コールバック関数の `groups` 引数
- 同じパターン内の[名前付き後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)

同じパターン内は、すべての名前が一意でなければなりません。同じ名前を持つ複数の名前付きキャプチャグループは構文エラーとなります。

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

重複する名前付きキャプチャグループが同じ[論理和の選択肢](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)にない場合、この制限は緩和されますので、どのような文字列入力に対しても、実際に一致できる名前付きキャプチャグループは 1 つだけです。これはかなり新しい機能なので、使う前に[ブラウザーの互換性](#ブラウザーの互換性)をチェックしてください。

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// 動作します。"year" をハイフンの前にも後にも置くことができます
```

結果の中に、名前付きキャプチャグループはすべて存在します。名前付きキャプチャグループが一致していない場合（例えば、[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)で一致しない選択肢に属している場合）、`groups` オブジェクトの対応するプロパティは `undefined` の値になります。

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

[`d`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) フラグを使用することで、入力文字列中のそれぞれの名前付きキャプチャグループの開始と終わりのインデックスを取得することができます。`exec()` が返す配列の `indices` プロパティで取得することに加えて、`indices.groups` の名前でも取得することができます。

無名キャプチャグループに比べ、名前付きキャプチャグループには以下のような利点があります。

- 個々の部分一致の結果に説明的な名前を提供することができます。
- これにより、パターンに現れる順番を覚えておくことなく、部分一致の結果にアクセスすることができます。
- コードをリファクタリングするとき、他の参照を壊す心配をすることなく、キャプチャグループの順序を変更することができます。

## 例

### 名前付きキャプチャグループの使用

次の例は、Git のログ項目（`git log --format=%ct,%an -- filename` の出力）からタイムスタンプと作者名を解析します。

```js
function parseLog(entry) {
  const { author, timestamp } = /^(?<timestamp>\d+),(?<author>.+)$/.exec(
    entry,
  ).groups;
  return `${author} committed on ${new Date(
    parseInt(timestamp) * 1000,
  ).toLocaleString()}`;
}

parseLog("1560979912,Caroline"); // "Caroline committed on 6/19/2019, 5:31:52 PM"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [名前付きキャプチャグループのポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [非キャプチャグループ: `(?:...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [名前付き後方参照: `\k<name>`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint rule: `prefer-named-capture-group`](https://eslint.org/docs/rules/prefer-named-capture-group)
