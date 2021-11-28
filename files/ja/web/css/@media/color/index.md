---
title: color
slug: Web/CSS/@media/color
tags:
  - '@media'
  - CSS
  - リファレンス
  - メディアクエリー
  - メディア特性
browser-compat: css.at-rules.media.color
translation_of: Web/CSS/@media/color
---
{{CSSRef}}

**`color`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、出力機器の色成分 (赤, 緑, 青) 当たりのビット数を調べるために使用します。

## 構文

`color` 特性は {{cssxref("&lt;integer&gt;")}} 値で指定し、出力機器の色成分 (赤, 緑, 青) 当たりのビット数を表します。機器がカラー機器でなければ、ゼロを返します。これは範囲の特性であり、つまり接頭辞の付いた **`min-color`** および **`max-color`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

> **Note:** それぞれの色成分が異なるビット数で表現される場合は、最も小さい値が使用されます。例えば、ディスプレイが青と赤に 5 ビット、緑に 6 ビット使用する場合は、機器は色成分当たり 5 ビットを使用していると見なされます。機器がインデックス色を使用している場合は、色テーブル内の色成分当たりのビット数の最小値が使用されます。

CSS を使用して HTML に色を適用することについて、詳しくは [CSS を使用した HTML 要素への色の適用](/ja/docs/Web/HTML/Applying_color)をご覧ください。

## 例

### HTML

```html
<p>このテキストは白黒機器では黒で、色数が少ない機器では赤で、色数が多い機器では緑っぽく表示されます。</p>
```

### CSS

```css
p {
  color: black;
}

/* すべてのカラー機器 */
@media (color) {
  p {
    color: red;
  }
}

/* 色成分当たり 8 ビット以上の色を持つ機器 */
@media (min-color: 8) {
  p {
    color: #24ba13;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
- CSS {{cssxref("color")}} プロパティ
- CSS {{cssxref("&lt;color&gt;")}} データ型
