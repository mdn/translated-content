---
title: monochrome
slug: Web/CSS/Reference/At-rules/@media/monochrome
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**`monochrome`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、出力機器のモノクロフレームバッファのピクセルあたりのビット数を調べるために使用することができます。

## 構文

`monochrome` 特性は {{cssxref("&lt;integer&gt;")}} 値で指定し、モノクロフレームバッファのピクセルあたりのビット数を表します。機器がモノクロ機器でなければ、ゼロを返します。これは範囲特性であり、接頭辞の付いた **`min-monochrome`** および **`max-monochrome`** の変化形を使用して、それぞれ最小値と最大値で問い合わせることができます。

## 例

### HTML

```html
<p class="mono">この機器はモノクロピクセルに対応しています。</p>
<p class="no-mono">この機器はモノクロピクセルに対応していません。</p>
```

### CSS

```css
p {
  display: none;
}

/* 任意のモノクロ機器 */
@media (monochrome) {
  p.mono {
    display: block;
    color: #333333;
  }
}

/* 任意のモノクロでない機器 */
@media (monochrome: 0) {
  p.no-mono {
    display: block;
    color: #ee3636;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
