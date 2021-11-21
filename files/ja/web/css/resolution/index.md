---
title: <resolution>
slug: Web/CSS/resolution
tags:
  - CSS
  - CSS データ型
  - データ型
  - リファレンス
  - ウェブ
  - レイアウト
browser-compat: css.types.resolution
translation_of: Web/CSS/resolution
---
{{CSSRef}}

**`<resolution>`** は [CSS](/ja/docs/Web/CSS) の [データ型](/ja/docs/Web/CSS/CSS_Types) で、[メディアクエリ](/ja/docs/Web/CSS/Media_Queries)の [resolution](/ja/docs/Web/CSS/@media/resolution) で使われ、出力端末のピクセル密度である、解像度を表します。

画面では、長さは物理的な値ではなく、 <em>CSS</em> のインチ、センチメートル、またはピクセルと関連づけられます。

## 構文

`<resolution>` データ型は、厳密に正の {{cssxref("&lt;number&gt;")}} のすぐ後ろに解像度の単位を続けます。他の CSS の寸法と同じく、単位のリテラルと数字の間に空白はありません。

### 単位

- `dpi`
  - : [1 インチあたりのドット数](https://en.wikipedia.org/wiki/Dots_per_inch) を表します。画面でよく使われるのは 72 または 96 dpi です。印刷物の dpi は通常、これより大きくなります。1 インチは 2.54 cm なので、`1dpi ≈ 0.39dpcm` です。
- `dpcm`
  - : [センチメートルあたりのドット数](https://en.wikipedia.org/wiki/Dots_per_inch) を表します。1 インチは 2.54 cm なので、`1dpcm ≈ 2.54dpi` です。
- `dppx`
  - : ピクセル (`[px](/ja/docs/Web/CSS/length#px)`) あたりのドット数を表します。CSS の `in` と CSS の `px` の比率は 1:96 で固定なので、`1dppx` は `96dpi` と同じです。これは {{cssxref("image-resolution")}} で定義される、CSS の画像の既定の解像度に一致します。
- `x`
  - : `dppx` の別名です。

> **Note:** 仮に値 `0` に対しすべての単位が同じ解像度を表すとしても、単位を省略してはいけません。言い換えると `0` は無効で、`0dpi`、`0dpcm`、`0dppx` のどれも表しません。

## 例

### メディアクエリーで使用する

```css
@media print and (min-resolution: 300dpi) { ... }
```

### 有効な解像度

    96dpi
    50.82dpcm
    3dppx

### 無効な解像度

```plain example-bad
72 dpi     数値と単位の間に空白は許可されていません。
ten dpi    数値は10進数しか使えません。
0          単位は必須です。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [resolution](/ja/docs/Web/CSS/@media/resolution) メディア特性
- {{cssxref("image-resolution")}} プロパティ
- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
