---
title: "-webkit-mask-repeat-y"
slug: Web/CSS/-webkit-mask-repeat-y
---

{{CSSRef}}{{Non-standard_header}}

The `-webkit-mask-repeat-y` プロパティは、マスク画像を垂直方向に反復 (タイル) するかどうか、どのように反復するかを設定します。

```css
/* キーワード値 */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* 複数の値 */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* グローバル値 */
-webkit-mask-repeat-y: inherit;
-webkit-mask-repeat-y: initial;
-webkit-mask-repeat-y: unset;
```

## 構文

### 値

- repeat
  - : マスク画像は垂直方向に反復されます。
- no-repeat
  - : マスク画像は垂直方向には反復されません。マスク画像のコピーが垂直方向に 1 つだけ描画されます。マスクされた要素の垂直方向に残ったコンテンツは表示されません。
- repeat
  - : マスク画像は垂直方向に反復されます。
- space
  - : 画像を切り取らないように、できる限り反復されます。最初と最後の画像は要素の上と下の辺に固定され、空白は画像の間に均等に分配されます。 {{cssxref("mask-position")}} プロパティは、切り取ることなく 1 つの画像しか表示できない場合を除き、無視されます。空白を使って切り取りが発生するのは、 1 枚の画像を表示するのに十分な空間がない場合だけです。
- round
  - : 許可された垂直方向の空間が大きくなると、反復して表示される画像は、次の画像を追加する空間ができるまで（隙間なく）伸びていきます。次の画像が追加されると、現在の画像はすべて圧縮されて空間が確保されます。例えば、元の高さが 260px の画像が 3 回繰り返されると、それぞれの繰り返しが 300px の高さになるまで引き伸ばされ、その後、別の画像が追加されます。その後、 225px の高さに圧縮されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 反復あり・反復なしのマスク画像の使用

```css
.exampleone {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-y: repeat;
}

.exampletwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-y: no-repeat;
}
```

### 複数のマスク画像の使用

マスク画像ごとに異なる `<repeat-style>` の値を、カンマで区切って指定することができます。

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-y: repeat, space;
}
```

各画像は、最初に指定されたものから最後に指定されたものまで、対応する反復スタイルに対応します。

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
