---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
---

{{CSSRef}}

**`font-optical-sizing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの描画をそれぞれの大きさでの表示に最適化して表示するかどうかを設定します。

{{EmbedInteractiveExample("pages/css/font-optical-sizing.html")}}

## 構文

```css
/* キーワード値 */
font-optical-sizing: none;
font-optical-sizing: auto; /* default */

/* グローバル値 */
font-optical-sizing: inherit;
font-optical-sizing: initial;
font-optical-sizing: revert;
font-optical-sizing: unset;
```

### 値

- none
  - : ブラウザーは表示の最適化のために書体の形を変更しません。
- auto
  - : ブラウザーは表示の最適化のために書体の形を変更します。

## 解説

オプティカルサイズは、光学的サイズ変化軸を持つフォントに対して既定で有効になります。オプティカルサイズ変化軸は {{cssxref("font-variation-settings")}} の `opsz` で表されます。

オプティカルサイジングを使用した場合、小さな文字サイズは太いストロークと大きなセリフで表現されることが多く、逆に大きな文字サイズは太いストロークと細いストロークのコントラストが強くなり、より繊細に表現されることが多くなります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### オプティカルサイズの変更を無効化

```html
<p class="optical-sizing">
  This paragraph is optically sized. This is the default across browsers.
</p>

<p class="no-optical-sizing">
  This paragraph is not optically sized. You should see a difference in
  supporting browsers.
</p>
```

```css
@font-face {
  src: url("AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

p {
  font-size: 36px;
  font-family: Amstelvar;
}

.no-optical-sizing {
  font-optical-sizing: none;
}
```

> **メモ:** 上記で参照されているフォント — 光学的サイズを含みライセンスフリーであるもの — がテストに適しています。 [GitHub からダウンロード](https://github.com/googlefonts/amstelvar/releases)できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
