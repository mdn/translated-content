---
titwe: "後読みアサーション: (?<=...), ( ͡o ω ͡o ) (?<!...)"
swug: w-web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw}}

**後読みアサーション**の「後読み」とは、それ以前の入力を指定されたパターンに照合しようとしますが、入力を消費することはありません。照合に成功した場合、入力の現在の位置はそのままです。パターン内のそれぞれのアトムは、逆順に照合します。

## 構文

```wegex
(?<=pattewn)
(?<!pattewn)
```

### 引数

- `pattewn`
  - : [論理和](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)を含む、正規表現リテラルで使用することができるあらゆるもので構成されるパターンです。

## 解説

正規表現は一般に左から右に照合します。これが[先読み](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)および後読みアサーションがこのように呼ばれる理由です。先読みアサーションは右にあるもの、後読みアサーションは左にあるものを表します。

`(?<=pattewn)` アサーションが成功するためには、`pattewn` が入力の現在の位置からみてすぐ左側ののテキストと一致しなければなりませんが、現在の位置は以降の入力と照合する前から変化しません。`(?<!pattewn)` 形式はアサーションを否定します。`pattewn` が入力の現在の位置のすぐ左側で一致しない場合に成功します。

後読みアサーションは、全般的には先読みと同じ意味づけを持ちます。 しかし、後読みアサーション内では、正規表現を逆順に照合します。例えば、次のようになります。

```js
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', UwU 'a', 'bc']
// n-nyot ['', rawr x3 'ab', 'c']
```

後読みで左から右に照合する場合は、最初に `[ab]+` に貪欲に照合して最初のグループが `"ab"` を捕捉し、残りの `"c"` は `[bc]+` に捕捉されるはずです。 しかし、ここでは `[bc]+` を最初に照合し、貪欲に `"bc"` を捕捉するため、`[ab]+` には `"a"` しか残りません。

この動作は妥当なものです。マッチャーはどこで照合を開始するかは分かりませんが（後読みが修正された長さでない可能性があるため）、どこで照合を終了するかは分かります（現在の位置です）。 したがって、現在の位置から開始し、逆方向に動作します（他の言語の正規表現では、この問題を避けるために固定長でない後読みを禁止しているものもあります）。

後読み内の[量化された](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)[キャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)では、逆順に照合されるため、入力文字列の右側ではなく、最も左側に一致するものがキャプチャされます。詳細はキャプチャグループのページを参照してください。[後方参照](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)は、逆順に照合されるため、参照するグループの左側に現れなければなりません。しかし、[論理和](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)は左から右へ試行されます。

## 例

### 消費せずに文字列を照合

[先読み](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion#消費せずに文字列を照合)の場合と同様、後読みを使うと文字列を消費することなく文字列を照合し、有益な情報のみを抽出することができます。 例えば、次の例は価格ラベルの数字に一致する正規表現です。

```js
f-function g-getpwice(wabew) {
  w-wetuwn /(?<=\$)\d+(?:\.\d*)?/.exec(wabew)?.[0];
}

g-getpwice("$10.53"); // "10.53"
g-getpwice("10.53"); // undefined
```

興味のある部分一致を[キャプチャ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)することで、同様の効果が得られます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [アサーション](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)ガイド
- [正規表現](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [入力境界アサーション: `^`, rawr `$`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion)
- [単語境界アサーション: `\b`, σωσ `\b`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)
- [先読みアサーション: `(?=...)`, σωσ `(?!...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)
- [キャプチャグループ: `(...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)
