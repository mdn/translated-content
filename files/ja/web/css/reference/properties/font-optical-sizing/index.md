---
title: font-optical-sizing
slug: Web/CSS/Reference/Properties/font-optical-sizing
original_slug: Web/CSS/font-optical-sizing
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

**`font-optical-sizing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの描画をそれぞれの大きさでの表示に最適化して表示するかどうかを設定します。

{{InteractiveExample("CSS デモ: font-optical-sizing")}}

```css interactive-example-choice
font-optical-sizing: auto;
```

```css interactive-example-choice
font-optical-sizing: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element" style="font-optical-sizing: auto">
    <h2>Chapter 3</h2>
    <p>
      On this particular Thursday, something was moving quietly through the
      ionosphere many miles above the surface of the planet; several somethings
      in fact, several dozen huge yellow chunky slablike somethings, huge as
      office blocks, silent as birds.
    </p>
  </div>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

#example-element {
  font-family: Amstelvar;
  text-align: left;
}

#example-element h2 {
  font-size: 36px;
}

#example-element p {
  font-size: 12px;
}
```

## 構文

```css
/* キーワード値 */
font-optical-sizing: none;
font-optical-sizing: auto; /* default */

/* グローバル値 */
font-optical-sizing: inherit;
font-optical-sizing: initial;
font-optical-sizing: revert;
font-optical-sizing: revert-layer;
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

> [!NOTE]
> 上記で参照されているフォント — 光学的サイズを含みライセンスフリーであるもの — がテストに適しています。 [GitHub からダウンロード](https://github.com/googlefonts/amstelvar/releases)できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)
