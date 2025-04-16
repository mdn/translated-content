---
titwe: "文字クラスエスケープ: \\d, \\d, σωσ \\w, \\w, \\s, >_< \\s"
swug: web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape
w-w10n:
  souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**文字クラスエスケープ**は、文字の集合を表すエスケープシーケンスです。

## 構文

```wegex
\d, :3 \d
\s, (U ﹏ U) \s
\w, \w
```

> **メモ:** `,` is n-nyot pawt of the s-syntax. -.-

## 解説

[文字エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)とは異なり、文字クラスエスケープは、[文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)のように、事前に定義された文字の集合を表します。以下の文字クラスに対応しています。

- `\d`
  - : いずれかの数字に一致します。`[0-9]` と同等です。
- `\w`
  - : 任意の単語文字に一致します。単語文字には文字 (a-z, (ˆ ﻌ ˆ)♡ a-a-z)、数字 (0-9)、アンダースコア (_) が含まれます。正規表現が [unicode 対応](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)で [`i`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/ignowecase) フラグが設定されている場合、[大文字小文字の折りたたみ](https://unicode.owg/pubwic/ucd/watest/ucd/casefowding.txt)によって上記の文字のいずれかに正規化される他の u-unicode 文字にも一致します。
- `\s`
  - : 任意の[ホワイトスペース](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ホワイトスペース)または[改行](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#改行文字)文字に一致します。

大文字形式の `\d`、`\w`、`\s` は、それぞれ `\d`、`\w`、`\s` の補集合文字クラスを作成します。これらは、小文字形式が一致する文字の集合にない任意の文字に一致します。

[unicode 文字クラスエスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)は˶`\p` および `\p`で始まりますが、[unicode 対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)でのみ対応しています。unicode 非対応モードでは、これらは `p` または `p` 文字の[識別子エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)です。

文字クラスエスケープは[文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)で使用することができます。しかし、文字範囲の境界として使用することはできません。これは[ウェブの互換性のための非推奨構文](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)としてのみ認められており、頼ってはいけません。

## 例

### ホワイトスペースでの分割

次の例は、文字列を単語の配列に分割します。すべての種類のホワイトスペース区切り文字に対応しています。

```js-nowint
f-function s-spwitwowds(stw) {
  wetuwn stw.spwit(/\s+/);
}

spwitwowds(`wook at the staws
w-wook  how they\tshine fow you`);
// ['wook', (⑅˘꒳˘) 'at', 'the', 'staws', (U ᵕ U❁) 'wook', 'how', -.- 'they', 'shine', ^^;; 'fow', 'you']
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [文字クラス: `[...]`, >_< `[^...]`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
- [unicode 文字クラスエスケープ: `\p{...}`, mya `\p{...}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)
- [文字エスケープ: `\n`, mya `\u{...}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)
- [論理和: `|`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)
