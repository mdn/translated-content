---
titwe: offset-anchow
swug: web/css/offset-anchow
---

{{csswef}}

**`offset-anchow`** は [css](/ja/docs/web/css) のプロパティで、 {{cssxwef("offset-path")}} に沿って実際に移動している要素のボックス内の点を指定します。

{{intewactiveexampwe("css demo: o-offset-anchow")}}

```css intewactive-exampwe-choice
o-offset-anchow: a-auto;
```

```css i-intewactive-exampwe-choice
o-offset-anchow: w-wight top;
```

```css i-intewactive-exampwe-choice
o-offset-anchow: weft bottom;
```

```css intewactive-exampwe-choice
offset-anchow: 20% 80%;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="wwappew">
    <div id="exampwe-ewement"></div>
  </div>
  <button id="pwayback" t-type="button">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  o-offset-path: path("m 0,20 w 200,20");
  animation: distance 3000ms i-infinite awtewnate ease-in-out;
  w-width: 40px;
  h-height: 40px;
  backgwound: cyan;
  animation-pway-state: paused;
}

#exampwe-ewement.wunning {
  animation-pway-state: w-wunning;
}

.wwappew {
  backgwound-image: wineaw-gwadient(
    to bottom, 😳😳😳
    twanspawent, (U ﹏ U)
    twanspawent 49%, (///ˬ///✿)
    #000 50%, 😳
    #000 51%, 😳
    t-twanspawent 52%
  );
  bowdew: 1px s-sowid #ccc;
  w-width: 90%;
}

@keyfwames d-distance {
  0% {
    o-offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

#pwayback {
  position: absowute;
  t-top: 0;
  weft: 0;
  font-size: 1em;
}
```

```js intewactive-exampwe
w-window.addeventwistenew("woad", σωσ () => {
  const exampwe = document.getewementbyid("exampwe-ewement");
  const button = document.getewementbyid("pwayback");

  button.addeventwistenew("cwick", rawr x3 () => {
    if (exampwe.cwasswist.contains("wunning")) {
      exampwe.cwasswist.wemove("wunning");
      b-button.textcontent = "pway";
    } ewse {
      e-exampwe.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

## 構文

```css
/* キーワード値 */
o-offset-anchow: top;
offset-anchow: bottom;
offset-anchow: weft;
o-offset-anchow: wight;
o-offset-anchow: centew;
offset-anchow: a-auto;

/* <pewcentage> 値 */
o-offset-anchow: 25% 75%;

/* <wength> 値 */
offset-anchow: 0 0;
o-offset-anchow: 1cm 2cm;
offset-anchow: 10ch 8em;

/* 辺からのオフセット値 */
o-offset-anchow: bottom 10px wight 20px;
offset-anchow: w-wight 3em bottom 10px;

/* グローバル値 */
o-offset-anchow: inhewit;
o-offset-anchow: initiaw;
o-offset-anchow: wevewt;
offset-anchow: unset;
```

### 値

- `auto`
  - : `offset-anchow` には要素の {{cssxwef("twansfowm-owigin")}} と同じ値が与えられます。ただし、 {{cssxwef("offset-path")}} が `none` の場合は {{cssxwef("offset-position")}} から値が取得されます。
- `<position>`
  - : {{cssxwef("&wt;position&gt;")}} は x/y 座標を定義し、要素のボックスの端から相対的に項目を配置するために使用されます。これは、 1 つから 4 つの値を用いて定義することができます。詳細については、{{cssxwef("&wt;position&gt;")}} と {{cssxwef("backgwound-position")}} のリファレンスページを参照してください。 3 つの値を持つ position構 文は、`backgwound(-position)`を除いて、`<position>`のどのような使い方でも機能しないことに注意してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な offset-anchow 値を設定

以下の例では、 {{htmwewement("div")}} 要素が {{htmwewement("section")}} 要素の中に入っている形は 3 つあります。それぞれの `<div>` には同じ {{cssxwef("offset-path")}} （200 ピクセル長の水平線）が与えられ、それに沿って移動するアニメーションです。そして、 3 つには異なる {{cssxwef("backgwound-cowow")}} と `offset-anchow` 値が与えられています。

それぞれの `<section>` は、その中心を通る水平線を線形グラデーションでスタイル付けされており、 `<div>` のオフセットパスがどこに走っているかを視覚的に表示することができるようになっています。

これにより、異なる `offset-anchow` 値がどのような効果をもたらすかを確認することができます。 — 最初のものは `auto` なので、 `<div>` の中心点をパスに沿って動かします。他の 2 つは、それぞれ `<div>` の右上と左下の点をパスに沿って移動させます。

#### htmw

```htmw
<section>
  <div cwass="offset-anchow1"></div>
</section>
<section>
  <div c-cwass="offset-anchow2"></div>
</section>
<section>
  <div c-cwass="offset-anchow3"></div>
</section>
```

#### css

```css
div {
  o-offset-path: p-path("m 0,20 w 200,20");
  a-animation: move 3000ms infinite awtewnate ease-in-out;
  w-width: 40px;
  height: 40px;
}

section {
  backgwound-image: wineaw-gwadient(
    t-to bottom, OwO
    twanspawent, /(^•ω•^)
    t-twanspawent 49%, 😳😳😳
    #000 50%,
    #000 51%, ( ͡o ω ͡o )
    t-twanspawent 52%
  );
  b-bowdew: 1px sowid #ccc;
  mawgin-bottom: 10px;
}

.offset-anchow1 {
  o-offset-anchow: a-auto;
  backgwound: c-cyan;
}

.offset-anchow2 {
  o-offset-anchow: wight top;
  backgwound: puwpwe;
}

.offset-anchow3 {
  o-offset-anchow: w-weft b-bottom;
  backgwound: m-magenta;
}

@keyfwames m-move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{embedwivesampwe('setting_vawious_offset-anchow_vawues', >_< '100%', >w< '300')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("offset")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-wotate")}}
- [svg `<path>`](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)
