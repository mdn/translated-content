---
title: CSS `text-size-adjust` プロパティ
short-title: text-size-adjust
slug: Web/CSS/Reference/Properties/text-size-adjust
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

**`text-size-adjust`** は [CSS](/ja/docs/Web/API/CSS) のプロパティで、一部のモバイル端末で使われる、テキストの自動拡大アルゴリズムを制御します。他のブラウザーはこのプロパティを無視します。

モバイル端末のことを考慮していないウェブページは今でも多いため、モバイル端末のブラウザーはデスクトップブラウザーとは異なる表示をすることがあります。例えば端末の画面幅ではなく、{{glossary("viewport", "ビューポート")}}を 800px や 1000px などのはるかに広い幅としてレイアウトを行います。この広いレイアウトを元の機器の大きさに対応させるため、ブラウザーはその一部を表示するか、縮小して表示することになります。

こうして小さい画面に合わせて縮小したテキストはとても小さくなるため、モバイル端末のブラウザーの多くはテキストを拡大して読みやすくします。テキストを含む要素が画面幅の全体を占めている時、レイアウトを変更することなく、読みやすい大きさまで文字サイズが拡大されます。`text-size-adjust` プロパティを使用すると、ウェブ制作者はこの動作を無効にしたり変更したりすることができます。これは、小さな画面を想定して設計されたウェブページでは、この動作が必要ないためです。

## 構文

```css
/* キーワード値 */
text-size-adjust: none;
text-size-adjust: auto;

/* <percentage> 値 */
text-size-adjust: 80%;

/* グローバル値 */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: revert;
text-size-adjust: revert-layer;
text-size-adjust: unset;
```

`text-size-adjust` プロパティは `none`, `auto`, `<percentage>` のいずれかで指定します。

### 値

- `none`
  - : ブラウザーのテキスト自動拡大アルゴリズムを無効化します。
- `auto`
  - : ブラウザーのテキスト自動拡大アルゴリズムを有効化します。この値は CSS で設定した `none` 値を取り消すのに使います。
- `<percentage>`
  - : ブラウザーのテキスト自動拡大アルゴリズムを有効化し、パーセント値で文字サイズの拡大率を指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な無効化の使用方法

上記に示すとおり、適切に設計されたレスポンシブサイトでは、`text-size-adjust` の動作は必要ありませんので、開発者は none の値を指定してこれをオフにすることができます。

```css
p {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Apple のドキュメント](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16)<sup>（英語）</sup> (2016)
- [Google Chrome の動作の説明](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit)<sup>（英語）</sup> (2014)
- [Gecko の動作の説明](https://dbaron.org/log/20111126-font-inflation)<sup>（英語）</sup> - L. David Baron (2011)
