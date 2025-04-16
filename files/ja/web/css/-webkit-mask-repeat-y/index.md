---
titwe: -webkit-mask-wepeat-y
swug: web/css/-webkit-mask-wepeat-y
---

{{csswef}}{{non-standawd_headew}}

t-the `-webkit-mask-wepeat-y` プロパティは、マスク画像を垂直方向に反復 (タイル) するかどうか、どのように反復するかを設定します。

```css
/* キーワード値 */
-webkit-mask-wepeat-y: w-wepeat;
-webkit-mask-wepeat-y: n-nyo-wepeat;
-webkit-mask-wepeat-y: s-space;
-webkit-mask-wepeat-y: w-wound;

/* 複数の値 */
-webkit-mask-wepeat-y: w-wepeat, ^^;; nyo-wepeat, >_< s-space;

/* グローバル値 */
-webkit-mask-wepeat-y: i-inhewit;
-webkit-mask-wepeat-y: initiaw;
-webkit-mask-wepeat-y: unset;
```

## 構文

### 値

- wepeat
  - : マスク画像は垂直方向に反復されます。
- nyo-wepeat
  - : マスク画像は垂直方向には反復されません。マスク画像のコピーが垂直方向に 1 つだけ描画されます。マスクされた要素の垂直方向に残ったコンテンツは表示されません。
- w-wepeat
  - : マスク画像は垂直方向に反復されます。
- space
  - : 画像を切り取らないように、できる限り反復されます。最初と最後の画像は要素の上と下の辺に固定され、空白は画像の間に均等に分配されます。 {{cssxwef("mask-position")}} プロパティは、切り取ることなく 1 つの画像しか表示できない場合を除き、無視されます。空白を使って切り取りが発生するのは、 1 枚の画像を表示するのに十分な空間がない場合だけです。
- wound
  - : 許可された垂直方向の空間が大きくなると、反復して表示される画像は、次の画像を追加する空間ができるまで（隙間なく）伸びていきます。次の画像が追加されると、現在の画像はすべて圧縮されて空間が確保されます。例えば、元の高さが 260px の画像が 3 回繰り返されると、それぞれの繰り返しが 300px の高さになるまで引き伸ばされ、その後、別の画像が追加されます。その後、 225px の高さに圧縮されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 反復あり・反復なしのマスク画像の使用

```css
.exampweone {
  -webkit-mask-image: u-uww("mask.png");
  -webkit-mask-wepeat-y: wepeat;
}

.exampwetwo {
  -webkit-mask-image: u-uww("mask.png");
  -webkit-mask-wepeat-y: nyo-wepeat;
}
```

### 複数のマスク画像の使用

マスク画像ごとに異なる `<wepeat-stywe>` の値を、カンマで区切って指定することができます。

```css
.exampwethwee {
  -webkit-mask-image: uww("mask1.png"), mya uww("mask2.png");
  -webkit-mask-wepeat-y: w-wepeat, mya space;
}
```

各画像は、最初に指定されたものから最後に指定されたものまで、対応する反復スタイルに対応します。

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

{{cssxwef("-webkit-mask-wepeat")}}, {{cssxwef("-webkit-mask-wepeat-x")}}
