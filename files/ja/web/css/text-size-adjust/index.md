---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
tags:
  - CSS
  - CSS Mobile Text Size Adjustment
  - CSS プロパティ
  - Experimental
  - NeedsExample
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-size-adjust
translation_of: Web/CSS/text-size-adjust
---
{{CSSRef}}{{SeeCompatTable}}

**`text-size-adjust`** は [CSS](/ja/docs/Web/API/CSS) のプロパティで、一部のモバイル端末で使われる、テキストの自動拡大アルゴリズムを制御します。他のブラウザーはこのプロパティを無視します。

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
text-size-adjust: unset;
```

モバイル端末のことを考慮していないウェブページは今でも多いため、モバイル端末のブラウザーはデスクトップブラウザーとは異なる表示をすることがあります。例えば端末の画面幅ではなく、800px や 1000px などのより広い幅の{{glossary("viewport", "ビューポート")}}でレイアウトを行います。この広いレイアウトを元の機器の大きさに対応させるため、ブラウザーはその一部を表示するか、縮小して表示することになります。

こうして小さい画面に合わせて縮小したテキストはとても小さくなるため、モバイル端末のブラウザーの多くはテキストを拡大して読みやすくします。テキストを含む要素が画面幅の全体を占めている時、レイアウトを変更することなく、読みやすい大きさまで文字サイズが拡大されます。 `text-size-adjust` プロパティを使うことで、この挙動が不要なページで無効化したり、挙動を変更したりすることができます。

## 構文

`text-size-adjust` プロパティは `none`, `auto`, `<percentage>` の何れかで指定します。

### 値

- `none`
  - : ブラウザーのテキスト自動拡大アルゴリズムを無効化します。
- `auto`
  - : ブラウザーのテキスト自動拡大アルゴリズムを有効化します。この値は CSS で設定した `none` 値を取り消すのに使います。</dd>
- `<percentage>`
  - : ブラウザーのテキスト自動拡大アルゴリズムを有効化し、パーセント値で文字サイズの倍率を指定します。</dd>

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

- [Apple のドキュメント](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16)
- [Gecko's behavior description](https://dbaron.org/log/20111126-font-inflation), by L. David Baron
- [Microsoft のドキュメント](<https://msdn.microsoft.com/library/windows/apps/ff462082(v=vs.105).aspx#BKMK_AdjustingTextSizewithCustomCSS>)
