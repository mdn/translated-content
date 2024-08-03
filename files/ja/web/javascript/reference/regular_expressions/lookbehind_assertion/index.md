---
title: "後読みアサーション: (?<=...), (?<!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

**後読みアサーション**の「後読み」とは、それ以前の入力を指定されたパターンに照合しようとしますが、入力を消費することはありません。照合に成功した場合、入力の現在の位置はそのままです。パターン内のそれぞれのアトムは、逆順に照合します。

## 構文

```regex
(?<=pattern)
(?<!pattern)
```

### 引数

- `pattern`
  - : [論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)を含む、正規表現リテラルで使用することができるあらゆるもので構成されるパターンです。

## 解説

正規表現は一般に左から右に照合します。これが[先読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)および後読みアサーションがこのように呼ばれる理由です。先読みアサーションは右にあるもの、後読みアサーションは左にあるものを表します。

`(?<=pattern)` アサーションが成功するためには、`pattern` が入力の現在の位置からみてすぐ左側ののテキストと一致しなければなりませんが、現在の位置は以降の入力と照合する前から変化しません。`(?<!pattern)` 形式はアサーションを否定します。`pattern` が入力の現在の位置のすぐ左側で一致しない場合に成功します。

後読みアサーションは、全般的には先読みと同じ意味づけを持ちます。 しかし、後読みアサーション内では、正規表現を逆順に照合します。例えば、次のようになります。

```js
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', 'a', 'bc']
// Not ['', 'ab', 'c']
```

後読みで左から右に照合する場合は、最初に `[ab]+` に貪欲に照合して最初のグループが `"ab"` を捕捉し、残りの `"c"` は `[bc]+` に捕捉されるはずです。 しかし、ここでは `[bc]+` を最初に照合し、貪欲に `"bc"` を捕捉するため、`[ab]+` には `"a"` しか残りません。

この動作は妥当なものです。マッチャーはどこで照合を開始するかは分かりませんが（後読みが修正された長さでない可能性があるため）、どこで照合を終了するかは分かります（現在の位置です）。 したがって、現在の位置から開始し、逆方向に動作します（他の言語の正規表現では、この問題を避けるために固定長でない後読みを禁止しているものもあります）。

後読み内の[量化された](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)では、逆順に照合されるため、入力文字列の右側ではなく、最も左側に一致するものがキャプチャされます。詳細はキャプチャグループのページを参照してください。[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)は、逆順に照合されるため、参照するグループの左側に現れなければなりません。しかし、[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)は左から右へ試行されます。

## 例

### 消費せずに文字列を照合

[先読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#消費せずに文字列を照合)の場合と同様、後読みを使うと文字列を消費することなく文字列を照合し、有益な情報のみを抽出することができます。 例えば、次の例は価格ラベルの数字に一致する正規表現です。

```js
function getPrice(label) {
  return /(?<=\$)\d+(?:\.\d*)?/.exec(label)?.[0];
}

getPrice("$10.53"); // "10.53"
getPrice("10.53"); // undefined
```

興味のある部分一致を[キャプチャ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)することで、同様の効果が得られます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)ガイド
- [正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [入力境界アサーション: `^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [単語境界アサーション: `\b`, `\B`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [先読みアサーション: `(?=...)`, `(?!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
