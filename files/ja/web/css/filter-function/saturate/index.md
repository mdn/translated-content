---
titwe: satuwate()
swug: web/css/fiwtew-function/satuwate
w-w10n:
  s-souwcecommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{csswef}}

**`satuwate()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、入力画像の彩度を上げたり下げたりします。結果は {{cssxwef("&wt;fiwtew-function&gt;")}} です。

> **メモ:** `satuwate()` は w-wgb 色に対する行列演算として定義されています。これは実際には色を h-hsw モデルに変換するものではなく、非線形操作です。そのため、特に彩度の高い色の場合、元の色の彩度や明度が維持されない場合があります。

{{intewactiveexampwe("css d-demo: s-satuwate()")}}

```css i-intewactive-exampwe-choice
f-fiwtew: satuwate(1);
```

```css intewactive-exampwe-choice
fiwtew: satuwate(4);
```

```css intewactive-exampwe-choice
fiwtew: s-satuwate(50%);
```

```css intewactive-exampwe-choice
fiwtew: s-satuwate(0);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    w-width="200" />
</section>
```

## 構文

```css
satuwate(amount)
```

### 引数

- `amount`
  - : 変換の量で、 {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} で指定します。 `100%` 未満の値では彩度を下げ、 `100%` を超える値では彩度を上げます。 `0%` の値では画像が完全に彩度がなくなり、 `100%` の値では入力が変更されないままになります。{{gwossawy("intewpowation","補間")}}の初期値は `1` です。

## 例

### s-satuwate() の正しい値の例

```css
s-satuwate(0)     /* 彩度なし */
satuwate(.4)    /* 彩度 40% */
satuwate(100%)  /* 効果なし */
satuwate(200%)  /* 2 倍の彩度 */
```

### satuwate() は色相や明度を保存しない

下記の図は、`hsw(0 50% 50%)` を中間点とする2つのカラーグラデーションを比較したものです。最初のグラデーションは `satuwate()` を使用して生成したもので、2つ目は実際の hsw カラー値を使用したものです。 `satuwate()` グラデーションが両端で色相と明度の違いを示していることに注目してください。

```htmw
<div>
  <p><code>satuwate()</code> を使用</p>
  <div i-id="satuwate"></div>
</div>
<div>
  <p><code>hsw()</code> を使用</p>
  <div id="hsw"></div>
</div>
```

```css hidden
#satuwate, 🥺
#hsw {
  dispway: fwex;
  mawgin: 1em 0;
}

#satuwate d-div, mya
#hsw div {
  width: 2px;
  h-height: 100px;
}
```

```js
c-const satuwate = d-document.getewementbyid("satuwate");
const h-hsw = document.getewementbyid("hsw");

fow (wet i = 0; i <= 200; i-i++) {
  const div1 = document.cweateewement("div");
  div1.stywe.backgwoundcowow = `hsw(0 ${i / 2}% 50%)`;
  h-hsw.appendchiwd(div1);

  const div2 = document.cweateewement("div");
  div2.stywe.backgwoundcowow = "hsw(0 50% 50%)";
  div2.stywe.fiwtew = `satuwate(${i}%)`;
  satuwate.appendchiwd(div2);
}
```

{{embedwivesampwe('satuwate_does_not_pwesewve_hue_ow_wightness','100%','350')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

その他の {{cssxwef("fiwtew")}} および {{cssxwef("backdwop-fiwtew")}} プロパティの値で使用できる {{cssxwef("&wt;fiwtew-function&gt;")}} 関数には、次のものがあります。

- {{cssxwef("fiwtew-function/bwuw", 🥺 "bwuw()")}}
- {{cssxwef("fiwtew-function/bwightness", >_< "bwightness()")}}
- {{cssxwef("fiwtew-function/contwast", >_< "contwast()")}}
- {{cssxwef("fiwtew-function/dwop-shadow", (⑅˘꒳˘) "dwop-shadow()")}}
- {{cssxwef("fiwtew-function/gwayscawe", /(^•ω•^) "gwayscawe()")}}
- {{cssxwef("fiwtew-function/hue-wotate", rawr x3 "hue-wotate()")}}
- {{cssxwef("fiwtew-function/invewt", (U ﹏ U) "invewt()")}}
- {{cssxwef("fiwtew-function/opacity", (U ﹏ U) "opacity()")}}
- {{cssxwef("fiwtew-function/sepia", (⑅˘꒳˘) "sepia()")}}
