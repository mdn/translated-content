---
title: font-variant-position
slug: Web/CSS/font-variant-position
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.font-variant-position
translation_of: Web/CSS/font-variant-position
---
{{CSSRef}}

**`font-variant-position`** は CSS のプロパティで、上付き文字または下付き文字として配置された小さな代替文字の使用を制御します。

文字は変更されないまま、フォントのベースラインから相対的に配置されます。これらの文字はふつう、 {{HTMLElement("sub")}} と {{HTMLElement("sup")}} 要素で使用されます。

```css
/* キーワード値 */
font-variant-position: normal;
font-variant-position: sub;
font-variant-position: super;

/* グローバル値 */
font-variant-position: inherit;
font-variant-position: initial;
font-variant-position: revert;
font-variant-position: unset;
```

これらの代替文字の使用が有効の場合、一連の中のある文字がそのような字体 - 強調字体を持っていない場合、一連の文字のセット全体が代替方法を使用して、合成によって描画されます。

これらの代替字体は、フォントの他の部分と同じ em ボックスと同じベースラインを共有します。それらは単にグラフィカルに強化されており、行の高さや他のボックスの特性には影響しません。

## 構文

`font-variant-position` プロパティは、以下に列挙されたキーワード値のうちの一つで指定します。

### 値

- `normal`
  - : 上付き文字および下付き文字の字体の代替を無効にします。
- `sub`
  - : 下付き文字の代替グリフを有効にします。特定の文字列で、そのような文字の1つが使用できない場合、文字列内のすべての文字が合成を使用して描画されます。
- `super`
  - : 上付き文字の代替グリフを有効にします。特定の文字列で、そのような文字の1つが使用できない場合、文字列内のすべての文字が合成を使用して描画されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_superscript_and_subscript_forms">上付きおよび下付き形の設定</h3>

#### HTML

```html
<p class="normal">Normal!</p>
<p class="super">Super!</p>
<p class="sub">Sub!</p>
```

#### CSS

```css
p {
  display: inline;
}

.normal {
  font-variant-position: normal;
}

.super {
  font-variant-position: super;
}

.sub {
  font-variant-position: sub;
}
```

#### 結果

{{ EmbedLiveSample('Setting_superscript_and_subscript_forms') }}

## 仕様書

{{Specifications}}

### ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
