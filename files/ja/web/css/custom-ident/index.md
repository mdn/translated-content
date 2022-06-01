---
title: <custom-ident>
slug: Web/CSS/custom-ident
tags:
  - CSS
  - CSS データ型
  - データ型
  - レイアウト
  - リファレンス
  - ウェブ
translation_of: Web/CSS/custom-ident
---
{{CSSRef}}

**`<custom-ident>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、{{glossary("identifier", "識別子")}}として使われるユーザー定義の任意の文字列を意味します。これは大文字と小文字を区別し、曖昧さを避けるため、いくつかの値は様々なコンテキストで禁止されています。

## 構文

`<custom-ident>` の構文は CSS の識別子 (プロパティ名など) に似ていますが、[大文字と小文字を区別](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%BC%E3%82%B9%E3%83%BB%E3%82%BB%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3%E3%83%96)する点が異なります。これは 1 文字以上の下記の文字のから成ります。

- 任意のアルファベット (`A`-`Z`, `a`-`z`)
- 任意の数字 (`0`-`9`)
- ハイフン (`-`)
- アンダースコア (`_`)
- エスケープ文字 (バックスラッシュ `\` に続く)
- [Unicode](http://ja.wikipedia.org/wiki/Unicode) 文字 (バックスラッシュ `\` と、それに続く 1 - 6 桁の 16 進数の形式で Unicode コードポイントを表す)

なお、このデータ型では `id1`、`Id1`、`iD1`、`ID1` は[大文字と小文字を区別](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%BC%E3%82%B9%E3%83%BB%E3%82%BB%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3%E3%83%96)するため、すべて異なった識別子として扱われます。逆に、`toto\?` と `toto\3F` は文字をエスケープする方法が異なりますが、同じ識別子として扱われます。

### 禁止されている値

`<custom-ident>` を引用符または二重引用符の間に置いてはいけません。こうすると、 {{CSSxRef("&lt;string&gt;")}} として識別されてしまいます。さらに、先頭の文字は、数字やハイフン (`-`) および、それらの続くものであってはなりません。

曖昧さを避けるため、 `<custom-ident>` を使用する各プロパティでは、特定の値の使用が禁止されています。

- {{CSSxRef("animation-name")}}
  - : グローバル CSS 値 (`unset`, `initial`, `inherit`) を禁止し、 `none` も禁止しています。
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : グローバル CSS 値 (`unset`, `initial`, `inherit`) を禁止し、 `none` も禁止しています。
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}
  - : グローバル CSS 値 (`unset`, `initial`, `inherit`) および `none`, `inline`, `outside` の値を禁止しています。また、`disc`, `circle`, `square`, `decimal`, `cjk-decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, `lower-greek`, `lower-alpha`, `lower-latin`, `upper-alpha`, `upper-latin`, `arabic-indic`, `armenian`, `bengali`, `cambodian`, `cjk-earthly-branch`, `cjk-heavenly-stem`, `cjk-ideographic`, `devanagari`, `ethiopic-numeric`, `georgian`, `gujarati`, `gurmukhi`, `hebrew`, `hiragana`, `hiragana-iroha`, `japanese-formal`, `japanese-informal`, `kannada`, `katakana`, `katakana-iroha`, `khmer`, `korean-hangul-formal`, `korean-hanja-formal`, `korean-hanja-informal`, `lao`, `lower-armenian`, `malayalam`, `mongolian`, `myanmar`, `oriya`, `persian`, `simp-chinese-formal`, `simp-chinese-informal`, `tamil`, `telugu`, `thai`, `tibetan`, `trad-chinese-formal`, `trad-chinese-informal`, `upper-armenian`, `disclosure-open`, and `disclosure-close` といった定義済みの値が、様々なブラウザーで実装されています。
- {{CSSxRef("grid-row-start")}}, {{CSSxRef("grid-row-end")}}, {{CSSxRef("grid-column-start")}}, {{CSSxRef("grid-column-end")}}
  - : `span` 値を禁止しています。
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
--toto            2 つのダッシュで始まってはいけない
'bilibob'         <string> になります
"bilibob"         <string> になります
```

## 仕様書

| 仕様書                                                                                                                                                                        | 状態                                       | コメント                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Values', '#custom-idents', '<code>&lt;custom-ident&gt;</code>')}}                                                                         | {{Spec2('CSS4 Values')}}             |                                                                                                                                                                                          |
| {{SpecName('CSS Will Change', '#valdef-will-change-custom-ident', '<code>&lt;custom-ident&gt;</code> for <code>will-change</code>')}}     | {{Spec2('CSS Will Change')}}         | {{CSSxRef("will-change")}} で除外する値を定義。                                                                                                              |
| {{SpecName('CSS3 Counter Styles', '#typedef-counter-style-name', '<code>&lt;custom-ident&gt;</code> for <code>list-style-type</code>')}} | {{Spec2('CSS3 Counter Styles')}} | キーワードの有限リストの代わりに `<custom-ident>` を使用。 {{CSSxRef("list-style-type")}} と {{CSSxRef("@counter-style")}} で除外する値を定義。 |
| {{SpecName('CSS3 Lists', '#counter-properties', '<code>&lt;custom-ident&gt;</code> for <code>counter-*</code>')}}                             | {{Spec2('CSS3 Lists')}}             | `&lt;identifier&gt;` から `<custom-ident>` へ改名。使い方を新しい `counter-set` プロパティへ追加。                                                                                            |
| {{SpecName('CSS3 Animations', '#typedef-single-animation-name', '<code>&lt;custom-ident&gt;</code> for <code>animation-name</code>')}} | {{Spec2('CSS3 Animations')}}         | {{CSSxRef("animation-name")}} で除外する値を定義。                                                                                                          |
| {{SpecName('CSS3 Values', '#custom-idents', '<code>&lt;custom-ident&gt;</code>')}}                                                                         | {{Spec2('CSS3 Values')}}             | `&lt;identifier&gt;` から `<custom-ident>` へ改名。擬似型とし、除外値の使用を禁止した。                                                                               |
| {{SpecName('CSS2.1', 'syndata.html#value-def-identifier', '<code>&lt;identifier&gt;</code>')}}                                                         | {{Spec2('CSS2.1')}}                     | 初回定義                                                                                                                                                                      |

## ブラウザーの互換性

*このデータ型は実際の型ではありませんが、許可された値をシンプルに記述するのに役立つ便利な型です。ブラウザーの互換性についての情報はありません。*

## 関連情報

- {{CSSxRef("&lt;ident&gt;")}}
