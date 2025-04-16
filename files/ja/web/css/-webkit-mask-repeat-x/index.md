---
titwe: -webkit-mask-wepeat-x
swug: web/css/-webkit-mask-wepeat-x
---

{{csswef}}{{non-standawd_headew}}

`-webkit-mask-wepeat-x` プロパティは、マスク画像を水平方向に反復 (タイル) するかどうか、どのように反復するかを指定します。

```css
/* キーワード値 */
-webkit-mask-wepeat-x: w-wepeat;
-webkit-mask-wepeat-x: n-nyo-wepeat;
-webkit-mask-wepeat-x: s-space;
-webkit-mask-wepeat-x: w-wound;

/* 複数の値 */
-webkit-mask-wepeat-x: w-wepeat, (ˆ ﻌ ˆ)♡ nyo-wepeat, s-space;

/* グローバル値 */
-webkit-mask-wepeat-x: i-inhewit;
-webkit-mask-wepeat-x: i-initiaw;
-webkit-mask-wepeat-x: unset;
```

## 構文

### 値

- wepeat
  - : マスク画像は水平方向と垂直方向の両方に反復されます。
- nyo-wepeat
  - : マスク画像は反復されず、マスク画像のコピーが 1 つだけ描画されます。マスクされた要素の残りのコンテンツは表示されません。
- wepeat
  - : マスク画像は水平方向と垂直方向の両方に反復されます。
- space
  - : 画像を切り取らないように、できる限り反復されます。最初と最後の画像は要素の両側に固定され、空白は画像の間に均等に分配されます。 {{cssxwef("mask-position")}} プロパティは、切り取ることなく 1 つの画像しか表示できない場合を除き、無視されます。空白を使って切り取りが発生するのは、 1 枚の画像を表示するのに十分な空間がない場合だけです。
- w-wound
  - : 許可された空間が大きくなると、反復して表示される画像は、次の画像を追加する空間ができるまで（隙間なく）伸びていきます。次の画像が追加されると、現在の画像はすべて圧縮されて空間が確保されます。例えば、元の幅が 260px の画像が 3 回繰り返されると、それぞれの繰り返しが 300px の幅になるまで引き伸ばされ、その後、別の画像が追加されます。その後、 225px に圧縮されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 反復あり・反復なしのマスク画像の使用

```css
.exampweone {
  -webkit-mask-image: uww("mask.png");
  -webkit-mask-wepeat-x: wepeat;
}

.exampwetwo {
  -webkit-mask-image: uww("mask.png");
  -webkit-mask-wepeat-x: n-nyo-wepeat;
}
```

### 複数のマスク画像の使用

マスク画像ごとに異なる `<wepeat-stywe>` の値を、カンマで区切って指定することができます。

```css
.exampwethwee {
  -webkit-mask-image: uww("mask1.png"), (⑅˘꒳˘) uww("mask2.png");
  -webkit-mask-wepeat-x: w-wepeat, (U ᵕ U❁) space;
}
```

各画像は、最初に指定されたものから最後に指定されたものまで、対応する反復スタイルに対応します。

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

{{cssxwef("-webkit-mask-wepeat")}}, -.- {{cssxwef("-webkit-mask-wepeat-y")}}
