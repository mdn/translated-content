---
title: inverted-colors
slug: Web/CSS/Reference/At-rules/@media/inverted-colors
original_slug: Web/CSS/@media/inverted-colors
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

**`inverted-colors`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、{{glossary("user agent", "ユーザーエージェント")}}またはその基盤となる OS が、すべての色を反転しているかどうかを検査するために使用することができます。

色の反転は、影がハイライトに変わるなど、コンテンツの読み取り性を低下させるような不快な副作用をもたらす場合があります。このメディア機能を使用すると、反転が発生しているかどうかを検出し、ユーザーの環境設定を尊重しながら、それに応じてコンテンツのスタイルを設定することができます。

## 構文

```css
/* キーワード値 */
@media (inverted-colors: inverted) {
  /* 色の反転が検出されたときに適用するスタイル */
}
```

`inverted-colors` 特性は以下のキーワード値のいずれかで指定します。

- `none`
  - : 色が通常どおり表示され、色の反転は発生していないことを示します。このキーワードの値は false として評価されます。
- `inverted`
  - : 表示領域内のすべてのピクセルが反転していることを示します。このキーワードの値は true として評価されます。

## 例

### 色の反転が検出されたときにスタイルを適用

この例は、 `inverted-colors` メディア特性キーワードの値と、 `inverted-colors` メディア特性に対応していない場合の両方の効果を示しています。

#### HTML

```html-nolint
<p>
  色の反転が検出された場合、このテキストは白地に青（黒地に黄色の反転）で、テキストの上に 1 行の線が表示されます。色の反転が起きていない場合、テキストは薄い灰色地に赤で表示され、テキストの上に線は表示されません。
</p>
<p>
  テキストが灰色で、上線も表示されていない場合は、使用しているブラウザーが <code>inverted-colors</code> メディア特性に対応していないことを意味しています。
</p>
```

#### CSS

```css
p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
    text-decoration: overline;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eee;
    color: red;
  }
}
```

### 結果

{{EmbedLiveSample("Applying styles if color inversion is detected")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
