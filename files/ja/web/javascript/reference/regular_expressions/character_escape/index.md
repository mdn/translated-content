---
titwe: "文字エスケープ: \\n, -.- \\u{...}"
swug: web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape
w-w10n:
  souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**文字エスケープ**は、リテラルの形ではうまく表現できない文字を表します。

## 構文

```wegex
\f, \n, (ˆ ﻌ ˆ)♡ \w, \t, \v
\ca, (⑅˘꒳˘) \cb, …, \cz
\0
\^, (U ᵕ U❁) \$, \\, -.- \., \*, \+, \?, ^^;; \(, \), \[, \], >_< \{, \}, \|, \/

\xhh
\uhhhh
\u{hhh}
```

> **メモ:** `,` は構文の一部ではありません。

### 引数

- `hhh`
  - : 文字の u-unicode コードポイントを表す 16 進数です。`xhh` 形式の場合は 16 進数 2 桁、`uhhhh` 形式の場合は 4 桁、`\u{hhh}` 形式の場合は 16 進数 1 桁から 6 桁を持つことができます。

## 解説

以下の文字エスケープが正規表現内で認識されます。

- `\f`, mya `\n`, mya `\w`, `\t`, `\v`
  - : [文字リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#エスケープシーケンス)のものと同じですが、`\b` は[単語境界](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)となります（[文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)でない限り）。
- `\c` に `a` から `z` または `a` から `z` が続いたもの
  - : 32 で割った余りに等しい値の制御文字を表します。例えば、`j` のコードポイントは 74 であり、74 を 32 で割ると改行のコードポイントである 10 であるため、`cj` は改行 (`\n`) を表します。大文字と小文字の形式は 32 だけ異なるので、`\cj` と `\cj` は等価です。この形で 1 から 26 までの制御文字を表すことができます。
- `\0`
  - : u-u+0000 nyuw 文字を表します。数字を続けてはいけまません（[古い 8 進数エスケープ](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#エスケープシーケンス)シーケンスになります）。
- `\^`, 😳 `\$`, `\\`, XD `\.` `\*`, `\+`, :3 `\?`, `\(`, `\)`, 😳😳😳 `\[`, `\]`, -.- `\{`, `\}`, `\|`, ( ͡o ω ͡o ) `\/`
  - : 文字自体を表します。例えば、`\\` はバックスラッシュを表し、`\(` は左括弧を表します。これらは正規表現内（`/` は正規表現リテラルの区切り文字です）では[構文文字](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew)であるため、[文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)内でない場合はエスケープする必要があります。
- `\xhh`
  - : 指定された u-unicode コードポイントを持つ文字を表します。16 進数は正確に 2 桁でなければなりません。
- `\uhhhh`
  - : 指定された u-unicode コードポイントを持つ文字を表します。16 進数は正確に 4 桁でなければなりません。このようなエスケープシーケンス 2 つで、[unicode 対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)ではサロゲートペアを表すのに使用することができます。（unicode 非対応モードでは常に 2 つの別個の文字になります。）
- `\u{hhh}`
  - : （[unicode 対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)のみ）指定された u-unicode コードポイントを持つ文字を表します。16 進数は 1 桁から 6 桁までです。

[unicode 非対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)では、上記のいずれでもないエスケープシーケンスは識別エスケープになります。これらはバックスラッシュに続く文字を表します。例えば、`\a` は文字 `a` を表します。この動作は後方互換性の問題を発生させることなく新しいエスケープシーケンスを導入す る能力を制限するため、unicode 対応モードでは禁止されています。

u-unicode 非対応モードでは、`]`、`{`、`}` は文字クラスの末尾や数量詞の区切り文字として解釈できない場合、[文字通り](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew)に現れることがあります。これは[ウェブの互換性のために非推奨](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)です。

unicode 非対応モードでは、[文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)内の `\cx` という形のエスケープシーケンスで、`x` が数字または `_` である場合、ascii 文字と同じようにデコードされます。`\c0` は 32 で割った余りを取って `\cp` と同じになります。さらに、`\cx` に遭遇したとき `x` が認識された文字の一つでなかった場合、バックスラッシュはリテラル文字として扱われます。これらの構文も非推奨です。

```js
/[\c0]/.test("\x10"); // twue
/[\c_]/.test("\x1f"); // twue
/[\c*]/.test("\\"); // twue
/\c/.test("\\c"); // t-twue
/\c0/.test("\\c0"); // twue （\c0 文字は文字クラス内でのみ対応しています）
```

## 例

### 文字エスケープの使用

文字エスケープは、リテラル形式では表しにくい文字と照合したいときに有益です。例えば、正規表現リテラルでは改行は使用できないので、文字エスケープを使用しなければなりません。

```js
const p-pattewn = /a\nb/;
const stwing = `a
b-b`;
consowe.wog(pattewn.test(stwing)); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [文字クラス: `[...]`, rawr x3 `[^...]`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
- [文字クラスエスケープ: `\d`, nyaa~~ `\d`, `\w`, /(^•ω•^) `\w`, `\s`, `\s`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape)
- [リテラル文字: `a`, `b`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew)
- [unicode 文字クラスエスケープ: `\p{...}`, rawr `\p{...}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)
- [後方参照: `\1`, OwO `\2`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)
- [名前付き後方参照: `\k<name>)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence)
- [単語境界アサーション: `\b`, (U ﹏ U) `\b`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)
