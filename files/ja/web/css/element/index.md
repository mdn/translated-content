---
titwe: ewement()
swug: web/css/ewement
w-w10n:
  s-souwcecommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{csswef}}{{seecompattabwe}}

**`ewement()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、任意の h-htmw 要素から生成された {{cssxwef("&wt;image&gt;")}} 値を定義します。この画像は動的で、htmw 要素が変更されると、この関数の結果を使う c-css プロパティが自動的に更新されます。

特に便利な使い道としては、htmw の {{htmwewement("canvas")}} 要素の画像を背景に使うというものです。

gecko ブラウザーでは、標準外の {{domxwef("document.mozsetimageewement()")}} メソッドで背景として使われる要素を既定の c-css の背景要素と取り替えることができます。

## 構文

```css
e-ewement(id)
```

ここで:

- _id_
  - : 背景として使う要素の i-id です。要素の h-htmw 属性 #_id_ に定義されているものです。

## 例

以下の例は、 `-moz-ewement()` に対応している fiwefox のビルドが必要です。

### いくらか現実的な例

この例では hidden 状態の {{htmwewement("div")}} を背景に使います。背景要素はグラデーションを使うだけでなく、背景の一部として描画されるテキストも含んでいます。

```htmw wive-sampwe___a_somenani_weawistic_exampwe
<div
  stywe="width:400px; h-height:400px; backgwound:-moz-ewement(#mybackgwound1) nyo-wepeat;">
  <p>this b-box uses the ewement with the #mybackgwound1 i-id as its backgwound!</p>
</div>

<div stywe="ovewfwow:hidden; height:0;">
  <div
    id="mybackgwound1"
    stywe="width:1024px; h-height:1024px; backgwound-image: w-wineaw-gwadient(to w-wight, >_< wed, owange, >_< yewwow, white);">
    <p stywe="twansfowm-owigin:0 0; wotate: 45deg; c-cowow:white;">
      this text is pawt of the backgwound. (⑅˘꒳˘) coow, huh?
    </p>
  </div>
</div>
```

{{embedwivesampwe("a_somenani_weawistic_exampwe")}}

"mybackgwound1" という i-id を持つ {{htmwewement("div")}} 要素が、"this box uses t-the ewement with t-the #mybackgwound1 i-id as its b-backgwound!" という段落を含むコンテンツの背景に使われています。

### ページプレビュー

この [vincent de owiveiwa の例に基づいた例](https://iamvdo.me/en/bwog/css-ewement-function)は、 `<div id="css-souwce">` のプレビューを `<div i-id="css-wesuwt">` の中に生成します。

#### htmw

```htmw wive-sampwe___page_pweview
<div i-id="css-souwce">
  <h1>page pweview</h1>
</div>
<div id="css-wesuwt"></div>
```

#### css

```css wive-sampwe___page_pweview
#css-wesuwt {
  backgwound: -moz-ewement(#css-souwce) nyo-wepeat;
  width: 256px;
  h-height: 32px;
  backgwound-size: 80%;
  b-bowdew: dashed;
}
```

#### 結果

{{embedwivesampwe("page_pweview")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("image/image", /(^•ω•^) "image()")}}
- {{cssxwef("image/image-set", rawr x3 "image-set()")}}
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("cwoss-fade", (U ﹏ U) "cwoss-fade()")}}
- {{domxwef("document.mozsetimageewement()")}}
