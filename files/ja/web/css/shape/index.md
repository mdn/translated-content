---
title: <shape>
slug: Web/CSS/shape
tags:
  - CSS
  - CSS データ型
  - CSS 関数
  - データ型
  - 非推奨
  - レイアウト
  - リファレンス
  - ウェブ
browser-compat: css.types.shape
translation_of: Web/CSS/shape
---
{{CSSRef}}{{deprecated_header}}

**`<shape>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、ある領域の具体的な形状を表します。この領域は、{{cssxref("clip")}} プロパティが適用される要素の一部を表します。

> **Note:** `<shape>` と `rect()` は {{cssxref("clip")}} と連携して動作しますが、これは {{cssxref("clip-path")}} に置き換えらえて非推奨となりました。可能であれば、代わりに `clip-path` と {{cssxref("&lt;basic-shape&gt;")}} データ型を使用してください。

## 構文

`<shape>` データ型は `rect()` 関数を使って指定し、長方形の形で領域を生成します。

`rect()`

```css
rect(top, right, bottom, left)
```

### 値

![](rect.png)

- _top_
  - : {{cssxref("&lt;length&gt;")}} で、この要素のボックスの上の境界から、矩形の上端までのオフセットを表します。
- _right_
  - : {{cssxref("&lt;length&gt;")}} で、この要素のボックスの左の境界から、矩形の右端までのオフセットを表します。
- _bottom_
  - : {{cssxref("&lt;length&gt;")}} で、この要素のボックスの上の境界から、矩形の下端までのオフセットを表します。
- _left_
  - : {{cssxref("&lt;length&gt;")}} で、この要素のボックスの左の境界から、矩形の左端までのオフセットを表します。

## 補間

アニメーションの際には、`<shape>` データ型の値は、`top`、`right`、`bottom`、`left` の各要素に補間され、それぞれが実数の浮動小数点数として扱われます。補間の速度は、アニメーションに関連する[タイミング関数](/ja/docs/Web/CSS/easing-function)によって決定されます。

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

- 関連する CSS プロパティ: {{Cssxref("clip")}}
- [`-moz-image-rect()`](/ja/docs/Web/CSS/-moz-image-rect) 関数は `rect()` と同様の座標を使います
