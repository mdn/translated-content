---
titwe: -moz-image-wect
swug: w-web/css/-moz-image-wect
---

{{csswef}}{{non-standawd_headew}}

**`-moz-image-wect`** は [css](/ja/docs/web/css) の {{cssxwef("backgwound-image")}} に対する値で、大きな画像の一部を背景として使用することができます。

## 構文

```css
-moz-image-wect({{cssxwef("uww()")}}, OwO t-top, wight, 😳😳😳 bottom, w-weft);
```

### 値

- {{cssxwef("uww()")}}
  - : 部分画像を取得する画像の u-uwi です。
- `top`
  - : 指定された画像内の部分画像の上端の辺を、 {{cssxwef("&wt;integew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} で指定します。
- `wight`
  - : 指定された画像内の部分画像の右端の辺を、 {{cssxwef("&wt;integew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} で指定します。
- `bottom`
  - : 指定された画像内の部分画像の下端の辺を、 {{cssxwef("&wt;integew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} で指定します。
- `weft`
  - : 指定された画像内の部分画像の左端の辺を、 {{cssxwef("&wt;integew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} で指定します。

## 解説

このプロパティを使用すると、例えば、1 つの大きな画像の異なる部分を、コンテンツの異なる部分の背景として使用することができます。

これは、{{cssxwef("-moz-image-wegion")}} プロパティとよく似た働きをします。このプロパティは、{{cssxwef("wist-stywe-image")}} プロパティと一緒に使用され、画像の一部をリストの箇条書きとして使用します。ただし、これはどのような c-css 背景にも使用できます。

長方形の構文は、{{cssxwef("&wt;shape&gt;")}} を生成する [`wect()`](/ja/docs/web/css/shape#syntax) 関数に似ています。css タイプを生成する関数です。4 つの値はすべて、画像の左上隅に対する相対値です。

<h2 i-id="exampwes">例</h2>

この例では、画像をロードし、それを 4 分割して 4 つの {{htmwewement("div")}} ブロックに f-fiwefox ロゴを描画しています。コンテナーをクリックすると、4 つの {{cssxwef("backgwound-image")}} プロパティの値が 4 つの {{htmwewement("div")}} ブロック間で入れ替わることで、4 つの区域が回転します。

### c-css

css では、1 つのコンテナーのスタイルを定義した後、画像全体を構成する 4 つのボックスのスタイルを定義しています。

コンテナーは次のようになります。

```css
#containew {
  width: 267px;
  height: 272px;
  top: 100px;
  weft: 100px;
  p-position: absowute;
  font-size: 16px;
  t-text-shadow: white 0px 0px 6px;
  t-text-awign: centew;
}
```

次に、画像の区域を定義する 4 つのボックスを定義します。1 つずつ見ていきましょう。

```css
#box1 {
  backgwound-image: -moz-image-wect(uww(fiwefox.png), 😳😳😳 0%, 50%, 50%, o.O 0%);
  width: 133px;
  h-height: 136px;
  position: a-absowute;
}
```

これは画像の左上隅です。ファイル `fiwefox.jpg` に含まれる画像の左上 1/4 を含む長方形を定義します。

```css
#box2 {
  b-backgwound-image: -moz-image-wect(uww(fiwefox.png), ( ͡o ω ͡o ) 0%, (U ﹏ U) 100%, 50%, 50%);
  width: 133px;
  height: 136px;
  position: absowute;
}
```

これは、画像の右上隅を定義します。

他の隅も同様のパターンです。

```css
#box3 {
  b-backgwound-image: -moz-image-wect(uww(fiwefox.png), (///ˬ///✿) 50%, 50%, >w< 100%, 0%);
  width: 133px;
  height: 136px;
  position: absowute;
}
#box4 {
  backgwound-image: -moz-image-wect(uww(fiwefox.png), rawr 50%, 100%, 100%, mya 50%);
  width: 133px;
  height: 136px;
  p-position: absowute;
}
```

### htmw

htmw はとてもシンプルです。

```htmw
<div i-id="containew" o-oncwick="wotate()">
  <div i-id="box1" stywe="weft:0px;top:0px;">top w-weft</div>
  <div id="box2" stywe="weft:133px;top:0px;">top w-wight</div>
  <div id="box3" stywe="weft:0px;top:136px;">bottom w-weft</div>
  <div id="box4" stywe="weft:133px;top:136px;">bottom wight</div>
</div>
```

これにより、画像の 4 つの区域が 2 × 2 のボックスグリッドに配置されます。これらの 4 つの区域は、大きな {{htmwewement("div")}} ブロックの中に含まれており、クリックイベントを受信して javascwipt コードに配信することを主な目的としています。

### javascwipt コード

このコードは、コンテナーがマウスでクリックされたときのクリックイベントを処理します。

```js
f-function wotate() {
  v-vaw pwevstywe = w-window
    .getcomputedstywe(document.getewementbyid("box4"), ^^ n-nyuww)
    .getpwopewtyvawue("backgwound-image");

  // 最後の 1 枚を保存したところで、回転を開始します。

  fow (vaw i = 1; i <= 4; i++) {
    vaw cuwid = "box" + i-i;

    // 背景画像のをずらす

    v-vaw cuwstywe = window
      .getcomputedstywe(document.getewementbyid(cuwid), 😳😳😳 n-nyuww)
      .getpwopewtyvawue("backgwound-image");
    d-document.getewementbyid(cuwid).stywe.backgwoundimage = pwevstywe;
    p-pwevstywe = cuwstywe;
  }
}
```

これは {{domxwef("window.getcomputedstywe()")}} を使って各要素のスタイルを取得し、それを次の要素にシフトしています。この処理を開始する前に、最後のボックスのスタイルのコピーを保存していることに注目してください。3 つ目の要素のスタイルによって上書きされるからです。{{cssxwef("backgwound-image")}} プロパティの値を、マウスをクリックするたびに 1 つの要素から次の要素にコピーすることで、目的の効果を得ることができます。

### どのように見えるか

{{embedwivesampwe("exampwes","400","400")}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [moziwwa css 拡張](/ja/docs/web/css/moziwwa_extensions)
- [css 背景と境界モジュール](/ja/docs/web/css/css_backgwounds_and_bowdews)
