---
title: <dimension>
slug: Web/CSS/dimension
tags:
  - CSS
  - CSS データ型
  - データ型
  - リファレンス
  - dimension
  - 単位
  - 値
browser-compat: css.types.dimension
translation_of: Web/CSS/dimension
---
{{CSSRef}}

**`<dimension>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 {{CSSxRef("&lt;number&gt;")}} とそれに添付された単位を表します (`10px` など)。

CSS は `<dimension>` を使用して、長さ ({{CSSxRef("&lt;length&gt;")}})、時間 ({{CSSxRef("&lt;time&gt;")}})、周期 ({{CSSxRef("&lt;frequency&gt;")}})、解像度 ({{CSSxRef("&lt;resolution&gt;")}})、その他の量を指定します。

## 構文

`<dimension>` の構文は、 {{CSSxRef("&lt;number&gt;")}} とすぐ後に識別子である単位を続けます。単位の識別子は、大文字小文字の区別がありません。

## 例

### 有効な dimension

```css example-good
12px      12 ピクセル
1rem      1rem
1.2pt     1.2 ポイント
2200ms    2200 ミリ秒
5s        5 秒
200hz     200 ヘルツ
200Hz     200 ヘルツ (値は大文字小文字の区別なし)
```

### 無効な dimension

```css example-bad
12 px       単位は数値の直後に来る必要がある。
12"px"      単位は識別子であり、引用符で囲まない。
3sec        秒の単位は "s" であり "sec" ではない。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS データ型](/ja/docs/Web/CSS/CSS_Types)
- [CSS を使用した HTML のスタイル付けの学習](/ja/docs/Learn/CSS)
- CSS の長さ ({{CSSxRef("&lt;length&gt;")}}), 時間 ({{CSSxRef("&lt;time&gt;")}}), 周期 ({{CSSxRef("&lt;frequency&gt;")}}), 解像度 ({{CSSxRef("&lt;resolution&gt;")}})
