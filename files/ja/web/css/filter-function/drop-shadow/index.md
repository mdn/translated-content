---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow
tags:
  - CSS
  - CSS 関数
  - フィルター効果
  - 関数
  - リファレンス
translation_of: Web/CSS/filter-function/drop-shadow()
original_slug: Web/CSS/filter-function/drop-shadow()
browser-compat: css.types.filter-function.drop-shadow
---
{{CSSRef}}

**`drop-shadow()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、入力画像にドロップシャドウ効果を適用します。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}

ドロップシャドウは効果的にぼけ、入力画像のアルファマスクのバージョンからずれ、特定の色で描かれて画像の下に混合されます。

> **Note:** この関数はいくらか {{Cssxref("box-shadow")}} プロパティと似ています。 `box-shadow` プロパティは要素の*ボックス全体*の背後に長方形の影を作成しますが、 `drop-shadow()` フィルター関数は*画像自体*の形 (アルファチャネル) に合った影を作成します。

## 構文

```css
drop-shadow(offset-x offset-y blur-radius color)
```

`drop-shadow()` 関数は `<shadow>` 型の引数 ({{cssxref("box-shadow")}} プロパティで定義) を受け付けますが、 `inset` キーワードと `spread` 引数が許可されないという例外があります。

### 引数

- `offset-x` `offset-y` (必須)
  - : 影のオフセットを指定する 2 つの {{cssxref("&lt;length&gt;")}} 値です。 `offset-x` は水平方向の距離を表し、負の数で影を要素の左方に配置します。 `offset-y` は垂直方向の距離を表し、負の数で影を要素の上方に配置します。どちらの値も `0` であれば、影は要素の真後ろに配置されます。
- `blur-radius` (任意)
  - : 影をぼかす半径で、 {{cssxref("&lt;length&gt;")}} で指定します。値が大きくなるほど、影は広く薄くなります。指定されていない場合は、既定値の `0` になり、辺がはっきりとしてぼけなくなります。負の数は許可されていません。
- `color` (任意)
  - : 影の色で、 {{cssxref("&lt;color&gt;")}} で指定します。指定されなかった場合は、 {{cssxref("color")}} プロパティの値が使用されます。

## 例

### ピクセル単位のオフセットとぼかし半径を用いたドロップシャドウの設定

```css
/* 10px のぼかしで広がりのない黒い影 */
drop-shadow(16px 16px 10px black)
```

### rem 単位ののオフセットとぼかし半径を用いたドロップシャドウの設定

```css
/* 1rem のぼかしで 3rem の広がりの赤っぽい影 */
drop-shadow(.5rem .5rem 1rem #e23)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;filter-function&gt;")}}
- CSS の {{cssxref("box-shadow")}} プロパティ
- {{cssxref("filter-function/blur()", "blur()")}}
- {{cssxref("filter-function/brightness()", "brightness()")}}
- {{cssxref("filter-function/contrast()", "contrast()")}}
- {{cssxref("filter-function/grayscale()", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}}
- {{cssxref("filter-function/invert()", "invert()")}}
- {{cssxref("filter-function/opacity()", "opacity()")}}
- {{cssxref("filter-function/saturate()", "saturate()")}}
- {{cssxref("filter-function/sepia()", "sepia()")}}
