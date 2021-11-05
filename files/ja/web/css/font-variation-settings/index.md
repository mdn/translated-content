---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.font-variation-settings
translation_of: Web/CSS/font-variation-settings
---
{{CSSRef}}

**`font-variation-settings`** は CSS のプロパティで、変更したい特性の 4 文字の軸名と特性の値を指定することにより、[可変フォント](/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)に対する低水準の制御を提供します。

{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}

## 構文

```css
/* 既定の設定を使用 */
font-variation-settings: normal;

/* 可変フォントの軸名の値を設定 */
font-variation-settings: "XHGT" 0.7;

/* グローバル値 */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: revert;
font-variation-settings: unset;
```

### 値

このプロパティは 1 つまたは 2 つの形を取ることができます。

- `normal`
  - : テキストは既定の設定を使用してレイアウトされます。
- `<string> <number>`
  - : テキストを描画する際、フォントの特性を有効または無効にするために可変フォントの軸名のリストがテキストレイアウトエンジンへ渡されます。それぞれの設定は常に、一つ以上の4文字の ASCII 文字の {{cssxref("&lt;string&gt;")}} と、続いて設定する軸の値を示す {{cssxref("number")}} の組み合わせから成ります。`<string>` の文字が多すぎたり少なすぎたり、文字が U+20 - U+7E のコードポイントの範囲を超えていたりした場合は、プロパティ全体が無効になります。フォントデザイナーによって定義された利用可能な値の範囲次第では、`<number>` は小数や負の数を取ることもできます。

## 解説

このプロパティは、その特性を有効にしたりアクセスしたりするための他の方法がない場合に、可変フォント特性を設定するために設計された低水準の仕組みです。これらの特性 (例えば {{cssxref("font-weight")}} や {{cssxref("font-style")}}) を設定するための基本プロパティがない場合にのみ使用してください。

`font-variation-settings` を使用して設定されたフォント特性は、常に `font-weight` などの基本フォントプロパティに関する設定を上書きし、言うまでもなくカスケードに現れます。ブラウザーによっては、 `@font-face` 宣言が `font-weight` の範囲を含んでいる場合のみこれが成り立ちます。

### 登録済みの軸とカスタム軸

可変フォントの軸には、**登録済み**の軸と**カスタム**軸があります。

登録済みの軸は、もっとも頻繁に遭遇するもので、仕様書の著者が標準化する価値があると感じるほど一般的なものです。なお、これは作者がフォントにすべてを入れる必要があることを意味するものではありません。

こちらは関連する CSS プロパティに対応する登録済みの軸です。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">軸のタグ</th>
      <th scope="col">CSS プロパティ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"wght"</td>
      <td>{{cssxref("font-weight")}}</td>
    </tr>
    <tr>
      <td>"wdth"</td>
      <td>{{cssxref("font-stretch")}}</td>
    </tr>
    <tr>
      <td>"slnt" (slant)</td>
      <td>{{cssxref("font-style")}}: `oblique + angle`</td>
    </tr>
    <tr>
      <td>"ital"</td>
      <td>{{cssxref("font-style")}}: `italic`</td>
    </tr>
    <tr>
      <td>"opsz"</td>
      <td><p>{{cssxref("font-optical-sizing")}}</p></td>
    </tr>
  </tbody>
</table>

カスタム軸はフォントデザイナーがフォントに変化を付けるためのもの全てがあり得ます。例えばアセンダーまたはデセンダーの高さ、セリフの大きさ、その他想像できるすべてのものです。どの軸も 4 文字の固有の軸名を与えれば使用することができます。一部はもっと有名になっており、そのうち登録されるものもあるかもしれません。

> **Note:** 登録済みの軸のタグは小文字のタグを使用するのに対し、カスタム軸は大文字のタグを使用します。なお、フォントデザイナーはこの慣習に従うことを強制されているわけではなく、従っていないものもあります。ここで重要なことは、軸のタグは大文字と小文字を区別することです。

オペレーティングシステムで可変フォントを使用するためには、最新版であることを確認する必要があります。例えば、 Linux ベースの OS では最新版の Linux Freetype が必要であり、 macOS 10.13 より前では可変フォントに対応していません。オペレーティングシステムが最新版でない場合、ウェブページや Firefox 開発者ツールで可変フォントを使用することができません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

他にも多数の可変フォントの例が、 [可変フォントガイド](/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide), [v-fonts.com](https://v-fonts.com/), [axis-praxis.org](https://www.axis-praxis.org/) などにあります。

### 太さ (wght)

以下のデモの CSS は、フォントの太さの値を編集することができます。

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### 傾き (slnt)

以下のデモの CSS は、フォントの傾きの値を編集することができます。

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [可変フォントガイド](/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
- [OpenType Font Variations Overview](https://docs.microsoft.com/typography/opentype/spec/otvaroverview)
- [OpenType Design-Variation Axis Tag Registry](https://docs.microsoft.com/typography/opentype/spec/dvaraxisreg)
