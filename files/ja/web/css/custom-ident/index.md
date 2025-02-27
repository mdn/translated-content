---
title: <custom-ident>
slug: Web/CSS/custom-ident
l10n:
  sourceCommit: a42dcee9b9cd82d26f1d8de321e2f42975aea07d
---

{{CSSRef}}

**`<custom-ident>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、{{glossary("identifier", "識別子")}}として使われるユーザー定義の任意の文字列を意味します。これは大文字と小文字を区別し、曖昧さを避けるため、いくつかの値は様々なコンテキストで禁止されています。

## 構文

`<custom-ident>` の構文は CSS の識別子 (プロパティ名など) に似ていますが、[大文字と小文字を区別](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%BC%E3%82%B9%E3%83%BB%E3%82%BB%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3%E3%83%96)する点が異なります。これは 1 文字以上の下記の文字のから成ります。

- 任意のアルファベット (`A`-`Z`, `a`-`z`)
- 任意の数字 (`0`-`9`)
- ハイフン (`-`)
- アンダースコア (`_`)
- [エスケープ文字] (バックスラッシュ `\` に続く)
- [Unicode](http://ja.wikipedia.org/wiki/Unicode) 文字 (バックスラッシュ `\` と、それに続く 1 - 6 桁の 16 進数の形式で Unicode コードポイントを表す)

なお、 `id1`、`Id1`、`iD1`、`ID1` は[大文字と小文字を区別](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%BC%E3%82%B9%E3%83%BB%E3%82%BB%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3%E3%83%96)するため、すべて異なった識別子として扱われます。

### エスケープ文字

あらゆる Unicode コードポイントを `<custom-ident>` や引用 {{cssxref("string")}} の一部として、エスケープすることで含めることができます。

CSS では、文字をエスケープする方法がいくつかあります。エスケープシーケンスはバックスラッシュ (`\`) で始まり、以下のものが続きます。

- 1～6 桁の 16 進数 (`ABCDEF0123456789`)。 16 進数にはオプションで空白が続くこともあります。 16 進のエスケープシーケンスは、この数字で指定された値の Unicode コードポイントに置き換わります。空白は、シーケンスの後に実際の 16 進数を（置き換えることなく）続けることを可能にします。
- 16 進数でも改行文字でもない Unicode コードポイント。

例:

- "&B" は `\26 B` または `\000026B` と書くことができます。
- "hi.there" は `hi\.there` または `hi\002Ethere` と書くことができます。
- "toto?" は `toto\?`, `toto\3F`, `toto\00003F` のように書くことができます。

エスケープシーケンスの後に実際のホワイトスペースを含める場合は、エスケープシーケンスに 2 つのホワイトスペースを入れてください。

### 禁止されている値

`<custom-ident>` を引用符または二重引用符の間に置いてはいけません。こうすると、 {{CSSxRef("&lt;string&gt;")}} として識別されてしまいます。さらに、先頭の文字は、数字や、ハイフン (`-`) に数字が続いたものであってはなりません。

曖昧さを避けるため、 `<custom-ident>` を使用する各プロパティでは、特定の値の使用が禁止されています。

- {{CSSxRef("animation-name")}}
  - : グローバル CSS 値 (`unset`, `initial`, `inherit`) を禁止し、 `none` も禁止しています。
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : グローバル CSS 値 (`unset`, `initial`, `inherit`) を禁止し、 `none` も禁止しています。
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}

  - : グローバル CSS 値 (`unset`, `initial`, `inherit`) と、次の値を禁止しています。

    - `none`
    - `inline`
    - `outside`

    また、さまざまなブラウザーで、いくつかの定義済みの値が実装されています。

    - `disc`
    - `circle`
    - `square`
    - `decimal`
    - `cjk-decimal`
    - `decimal-leading-zero`
    - `lower-roman`
    - `upper-roman`
    - `lower-greek`
    - `lower-alpha`
    - `lower-latin`
    - `upper-alpha`
    - `upper-latin`
    - `arabic-indic`
    - `armenian`
    - `bengali`
    - `cambodian`
    - `cjk-earthly-branch`
    - `cjk-heavenly-stem`
    - `cjk-ideographic`
    - `devanagari`
    - `ethiopic-numeric`
    - `georgian`
    - `gujarati`
    - `gurmukhi`
    - `hebrew`
    - `hiragana`
    - `hiragana-iroha`
    - `japanese-formal`
    - `japanese-informal`
    - `kannada`
    - `katakana`
    - `katakana-iroha`
    - `khmer`
    - `korean-hangul-formal`
    - `korean-hanja-formal`
    - `korean-hanja-informal`
    - `lao`
    - `lower-armenian`
    - `malayalam`
    - `mongolian`
    - `myanmar`
    - `oriya`
    - `persian`
    - `simp-chinese-formal`
    - `simp-chinese-informal`
    - `tamil`
    - `telugu`
    - `thai`
    - `tibetan`
    - `trad-chinese-formal`
    - `trad-chinese-informal`
    - `upper-armenian`
    - `disclosure-open`
    - `disclosure-close`

- {{CSSxRef("grid-row-start")}}, {{CSSxRef("grid-row-end")}}, {{CSSxRef("grid-column-start")}}, {{CSSxRef("grid-column-end")}}
  - : `span` 値を禁止しています。
- {{CSSxRef("view-transition-name")}}
  - : グローバル CSS 値 (`unset`, `initial`, `inherit`) および `none` の値を禁止しています。
- {{CSSxRef("will-change")}}
  - : グローバル CSS 値 (`unset`, `initial`, `inherit`) および `will-change`, `auto`, `scroll-position`, `contents` の値を禁止しています。

## 例

### 有効な識別子

```plain example-good
nono79            アルファベットと数字の組み合わせ
ground-level      アルファベットとダッシュの組み合わせ
-test             ダッシュとそれに続くアルファベット
_internal         アンダースコアとそれに続くアルファベット
\22 toto          Unicode 文字とそれに続くアルファベット
bili\.bob         ピリオドが正しくエスケープされている
```

### 無効な識別子

```plain example-bad
34rem             数字で始まってはいけない
-12rad            ダッシュで始まって数字が続いてはいけない
bili.bob          アルファベットと数字以外でエスケープせずに使えるのは _ と - だけ
'bilibob'         <string> になります
"bilibob"         <string> になります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

_このデータ型は実際の型ではありませんが、許可された値をシンプルに記述するのに役立つ便利な型です。ブラウザーの互換性についての情報はありません。_

## 関連情報

- [&lt;ident&gt;](/ja/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/ja/docs/Web/CSS/dashed-ident)
