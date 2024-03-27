---
title: box-align
slug: Web/CSS/box-align
l10n:
  sourceCommit: 88866ee128116bd07235f5d3531152d5686a1e6d
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> **警告:** このプロパティは、当初の CSS Flexible Box Layout Module の草案段階のものでしたが、より新しい標準で置き換えられました。

**`box-align`** は [CSS](/ja/docs/Web/CSS) のプロパティで、交差軸方向に子要素をどう整列させるかを定義します。ボックス内に余分な空間がある場合にかぎり、その効果を確認することができます。

現在の標準仕様に関する情報については、[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)を確認してください。

```css
/* キーワード値 */
box-align: start;
box-align: center;
box-align: end;
box-align: baseline;
box-align: stretch;

/* グローバル値 */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

配置する方向は、その要素の向き (水平か垂直か) に依存します。

## 構文

`box-align` プロパティは、 以下に記載する値で定義されます。

### 値

- `start`
  - : ボックス内のコンテンツを先頭に寄せて、末尾に余分な空間を残します。
- `center`
  - : ボックス内のコンテンツを中央に寄せて、余分な空間を等分に分割し先頭と末尾に残します。
- `end`
  - : ボックス内のコンテンツを末尾に寄せて、先頭に余分な空間を残します。
- `baseline`
  - : ボックス内のコンテンツが持つテキストのベースラインに整列させます。これはボックス内のコンテンツの向きが水平である場合にのみ適用されます。
- `stretch`
  - : ボックス内に余分な空間がなくなるようコンテンツを引き伸ばします。

## メモ

整列のために _start_ と指定されたボックスの辺は、ボックスの方向によって異なります。

- 水平方向の要素の場合、 _start_ は上端になります。
- 垂直方向の要素の場合、 _start_ は左端になります。

start の反対側の端は _end_ となります。

要素の `align` 属性で配置が設定されている場合、このスタイルは無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

```plain
box-align =
  start | center | end | baseline | stretch
```

## 例

### ボックス配置の設定

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>CSS box-align example</title>
    <style>
      div.example {
        display: box; /* 仕様書通り */
        display: -moz-box; /* Mozilla */
        display: -webkit-box; /* WebKit */

        /* ボックスの高さを子要素より高くし、
      box-pack のためのスペースを確保する */
        height: 400px;

        /* ボックスの幅を子要素より広くし、
      box-align のためのスペースを確保する */
        width: 300px;

        /* 子要素の向きは垂直方向にする */
        box-orient: vertical; /* 仕様書通り */
        -moz-box-orient: vertical; /* Mozilla */
        -webkit-box-orient: vertical; /* WebKit */

        /* 子要素をボックス内の水平方向に対して中央に整列させる */
        box-align: center; /* 仕様書通り */
        -moz-box-align: center; /* Mozilla */
        -webkit-box-align: center; /* WebKit */

        /* 子要素をボックス内の末尾に寄せる */
        box-pack: end; /* 仕様書通り */
        -moz-box-pack: end; /* Mozilla */
        -webkit-box-pack: end; /* WebKit */
      }

      div.example > p {
        /* 子要素を親要素の幅より狭くし、
      box-align のためのスペースを確保する */
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div class="example">
      <p>
        I will be second from the bottom of div.example, centered horizontally.
      </p>
      <p>I will be on the bottom of div.example, centered horizontally.</p>
    </div>
  </body>
</html>
```

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("align-items")}}, {{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-pack")}}
