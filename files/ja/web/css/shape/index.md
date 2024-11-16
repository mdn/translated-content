---
title: <shape>
slug: Web/CSS/shape
l10n:
  sourceCommit: 69f92b8a249a9da025a5b12d98aafd84d417c8d9
---

{{CSSRef}}{{deprecated_header}}

**`<shape>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、ある領域の具体的な形状を表します。この領域は、{{cssxref("clip")}} プロパティが適用される要素の一部を表します。

> **メモ:** `<shape>` と `rect()` は {{cssxref("clip")}} と連携して動作しますが、これは {{cssxref("clip-path")}} に置き換えらえて非推奨となりました。可能であれば、代わりに `clip-path` と {{cssxref("&lt;basic-shape&gt;")}} データ型を使用してください。

## 構文

`<shape>` データ型は `rect()` 関数を使って指定し、長方形の形で領域を生成します。

`rect()`

```css
rect(top, right, bottom, left)
```

### 値

![下記に記述されているように、上、右、下、左を示すグラフ。これらは長方形の図形を定義します。左上の角は、上と左の値で定義します。右下隅は下と右の値で定義します。](rect.png)

- _top_
  - : {{cssxref("length")}} で、この要素のボックスの上の境界から、矩形の上端までのオフセットを表します。
- _right_
  - : {{cssxref("length")}} で、この要素のボックスの左の境界から、矩形の右端までのオフセットを表します。
- _bottom_
  - : {{cssxref("length")}} で、この要素のボックスの上の境界から、矩形の下端までのオフセットを表します。
- _left_
  - : {{cssxref("length")}} で、この要素のボックスの左の境界から、矩形の左端までのオフセットを表します。

## 補間

アニメーションの際には、`<shape>` データ型の値は、`top`、`right`、`bottom`、`left` の各要素に補間され、それぞれが実数の浮動小数点数として扱われます。補間の速度は、アニメーションに関連する[イージング関数](/ja/docs/Web/CSS/easing-function)によって決定されます。

## 例

### 正しい rect() 関数の使い方の例

```css
img.clip04 {
  clip: rect(10px, 20px, 20px, 10px);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{ cssxref("clip") }}
