---
title: "@font-palette-values"
slug: Web/CSS/@font-palette-values
l10n:
  sourceCommit: 81cab7a9c34e7bb3867f5d6d7e70fc73d0308087
---

{{CSSRef}}

**`@font-palette-values`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、フォントメーカーが作成した [font-palette](/ja/docs/Web/CSS/font-palette) の既定値をカスタマイズすることができます。

## 構文

```css
@font-palette-values --identifier {
  font-family: Bixa;
}
.my-class {
  font-palette: --identifier;
}
```

[&lt;dashed-ident&gt;](/ja/docs/Web/CSS/dashed-ident) はユーザー定義された識別子で、 [CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)のように見えますが、別の方法で動作し、 [CSS var() 関数](/ja/docs/Web/CSS/var)で囲まれていません。

### 記述子

- [font-family](/ja/docs/Web/CSS/@font-palette-values/font-family)
  - : このパレットを適用できるフォントファミリーの名前を指定します。
- [base-palette](/ja/docs/Web/CSS/@font-palette-values/base-palette)
  - : フォントメーカーが作成した、使用するベースパレットの名前またはインデックスを指定します。
- [override-colors](/ja/docs/Web/CSS/@font-palette-values/override-colors)
  - : 上書きするベースパレットの色を指定します。

## 形式文法

{{csssyntax}}

## 例

### 既存のパレットの色のオーバーライド

この例は、カラーフォントの色の一部またはすべてを変更する方法を示しています。

#### HTML

```html
<p>default colors</p>
<p class="alternate">alternate colors</p>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);
p {
  font-family: "Bungee Spice";
  font-size: 2rem;
}
@font-palette-values --Alternate {
  font-family: "Bungee Spice";
  override-colors:
    0 #00ffbb,
    1 #007744;
}
.alternate {
  font-palette: --Alternate;
}
```

#### 結果

インデックス 0 の通常パレットまたはベースパレットの色を上書きする場合、使用するベースパレットを宣言する必要はありません。これは異なるベースパレットを上書きする場合にのみ行う必要があります。すべての色を上書きする場合は、使用するベースパレットを指定する必要はありません。

{{EmbedLiveSample("Overriding colors in an existing palette")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-palette", "font-palette")}} プロパティ
- {{cssxref("@font-palette-values/font-family", "font-family")}} 記述子
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} 記述子
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} 記述子
- {{domxref("CSSFontPaletteValuesRule")}}
