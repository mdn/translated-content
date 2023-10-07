---
title: box-flex
slug: Web/CSS/box-flex
---

{{CSSRef}}{{Non-standard_Header}}

> **警告:** このプロパティは XUL ボックスモデルの部品を制御するためのものです。古い CSS Flexible Box Layout Module の草稿の '`box-flex`' (このプロパティの元になったもの) または '`-webkit-box-flex`' (草稿の元になったもの) の動作のどちらとも一致しません。現在の標準についての情報は[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)を参照してください。

**`-moz-box-flex`** および **`-webkit-box-flex`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 `-moz-box` または `-webkit-box` が、これを内包するボックスを、包含ボックスのレイアウトの方向で埋めるまで拡張する方法を指定します。

```css
/* <number> 値 */
-moz-box-flex: 0;
-moz-box-flex: 2;
-moz-box-flex: 3.5;
-webkit-box-flex: 0;
-webkit-box-flex: 2;
-webkit-box-flex: 3.5;

/* Global values */
-moz-box-flex: inherit;
-moz-box-flex: initial;
-moz-box-flex: unset;
-webkit-box-flex: inherit;
-webkit-box-flex: initial;
-webkit-box-flex: unset;
```

## 構文

`box-flex` プロパティは {{CSSxRef("&lt;number&gt;")}} として指定されます。値が 0 の場合、ボックスは拡張されません。値が 0 より大きい場合は、ボックスは利用可能な空間の比率で拡張されます。

## メモ

包含ボックスは利用可能な空間を、中のそれぞれの要素におけるフレックス値の比率で拡張します。

フレックス値がゼロになっている中の要素は拡張されません。

フレックス値がゼロではない中の要素が一つしかない場合は、有効な空間を埋めるまで拡張されます。

同じフレックス値を持つ中の要素は、同じ絶対量だけ拡張されます。

フレックス値が要素の `flex` 属性を使用して設定された場合は、このスタイルは無視されます。

包含ボックス内で同じ寸法の XUL 要素を作成するには、包含ボックスの `equalsize` 属性を `always` の値に設定してください。この属性には対応する CSS プロパティはありません。

包含ボックス内のすべての中の要素を同じ寸法にするトリックとしては、すべてに対して固定の寸法 (例えば `height: 0`) と、同じゼロより大きい `box-flex` の値 (例えば `-moz-box-flex: 1`) を設定することです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### box-flex の設定

```html
<!doctype html>
<html>
  <head>
    <title>-moz-box-flex example</title>
    <style>
      div.example {
        display: -moz-box;
        display: -webkit-box;
        border: 1px solid black;
        width: 100%;
      }
      div.example > p:nth-child(1) {
        -moz-box-flex: 1; /* Mozilla */
        -webkit-box-flex: 1; /* WebKit */
        border: 1px solid black;
      }
      div.example > p:nth-child(2) {
        -moz-box-flex: 0; /* Mozilla */
        -webkit-box-flex: 0; /* WebKit */
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="example">
      <p>I will expand to fill extra space</p>
      <p>I will not expand</p>
    </div>
  </body>
</html>
```

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("flex")}}
