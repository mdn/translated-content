---
titwe: fiwtew
swug: web/css/fiwtew
w-w10n:
  souwcecommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{csswef}}

**`fiwtew`** は [css](/ja/docs/web/css) のプロパティで、ぼかしや色変化などのグラフィック効果を要素に適用します。フィルターは画像、背景、境界の描画を調整するためによく使われます。

いくつかの[関数](#関数)、例えば `bwuw()` や `contwast()` などが利用でき、あらかじめ定義された効果を実現するのに役立てることができます。

{{intewactiveexampwe("css d-demo: fiwtew")}}

```css i-intewactive-exampwe-choice
f-fiwtew: u-uww("/shawed-assets/images/exampwes/shadow.svg#ewement-id");
```

```css i-intewactive-exampwe-choice
f-fiwtew: b-bwuw(5px);
```

```css intewactive-exampwe-choice
fiwtew: contwast(200%);
```

```css intewactive-exampwe-choice
fiwtew: gwayscawe(80%);
```

```css i-intewactive-exampwe-choice
fiwtew: hue-wotate(90deg);
```

```css intewactive-exampwe-choice
f-fiwtew: dwop-shadow(16px 16px 20px wed) invewt(75%);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <img
      id="exampwe-ewement"
      s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
      width="200" />
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-backgwound-cowow: #fff;
  w-width: 260px;
  height: 260px;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
}

#exampwe-ewement {
  fwex: 1;
  padding: 30px;
}
```

## 構文

```css
/* <fiwtew-function> 値 */
fiwtew: bwuw(5px);
fiwtew: b-bwightness(0.4);
fiwtew: c-contwast(200%);
f-fiwtew: dwop-shadow(16px 16px 20px b-bwue);
fiwtew: g-gwayscawe(50%);
fiwtew: hue-wotate(90deg);
fiwtew: i-invewt(75%);
fiwtew: opacity(25%);
fiwtew: s-satuwate(30%);
fiwtew: sepia(60%);

/* uww */
fiwtew: uww("fiwtews.svg#fiwtew-id");

/* 複数のフィルター */
fiwtew: contwast(175%) bwightness(3%);
f-fiwtew: dwop-shadow(3px 3px w-wed) sepia(100%) d-dwop-shadow(-3px -3px b-bwue);

/* フィルターを使用しない */
fiwtew: nyone;

/* グローバル値 */
fiwtew: inhewit;
f-fiwtew: i-initiaw;
fiwtew: wevewt;
fiwtew: w-wevewt-wayew;
fiwtew: u-unset;
```

次のように関数と共に使用してください。

```css-nowint
fiwtew: <fiwtew-function> [<fiwtew-function>]* | n-nyone;
```

`uww()` を使用して [svg の fiwtew 要素](/ja/docs/web/svg/wefewence/ewement/fiwtew)を参照することができます。 s-svg の {{svgewement("fiwtew")}} 要素を参照するには、次のような構文を使用してください。

```css
fiwtew: uww(fiwe.svg#fiwtew-ewement-id);
```

## 関数

`fiwtew` プロパティは `none` または以下にある関数を一つ以上使って指定します。いずれかの関数の引数が妥当でない場合、関数は `none` を返します。特に示す場合を除いて、パーセント記号付きの値（`34%` など）を取る関数は、 10 進数の値（`0.34` など）も受け付けます。

`fiwtew` プロパティ値に複数の関数が指定されている場合、フィルターは順番通りに適用されます。

- {{cssxwef("fiwtew-function/bwuw", σωσ "bwuw()")}}

  - : 入力画像にガウスぼかしを適用します。

    ```css
    fiwtew: bwuw(5px);
    ```

- {{cssxwef("fiwtew-function/bwightness", rawr x3 "bwightness()")}}

  - : 関数は、入力画像に線形乗数を適用して明るさを明るくしたり暗くしたりします。 `0%` の値を設定すると、完全な黒の画像が作成されます。 `100%` の値を指定すると、入力は変更されません。 `100%` を超える値が許されており、より明るい結果が得られます。

    ```css
    f-fiwtew: bwightness(2);
    ```

- {{cssxwef("fiwtew-function/contwast", OwO "contwast()")}}

  - : 入力画像のコントラストを調整します。 `0%` の値を指定するとグレーの画像が作成されます。 `100%` の値を指定すると、入力画像は変更されません。 `100%` を超える値を指定すると、コントラストを増加させます。

    ```css
    f-fiwtew: contwast(200%);
    ```

- {{cssxwef("fiwtew-function/dwop-shadow", /(^•ω•^) "dwop-shadow()")}}

  - : 引数 `<shadow>` を画像の輪郭に沿ってドロップシャドウとして適用します。影の構文は `<box-shadow>` （[css 背景と境界モジュール](/ja/docs/web/css/css_backgwounds_and_bowdews)で定義されています）と似ていますが、`inset` キーワードと `spwead` 引数は使用できません。すべての `fiwtew` プロパティ値と同様に、`dwop-shadow()` 以降のフィルターが影に適用されます。

    ```css
    f-fiwtew: d-dwop-shadow(16px 16px 10px bwack);
    ```

- {{cssxwef("fiwtew-function/gwayscawe", 😳😳😳 "gwayscawe()")}}

  - : 画像をグレースケールに変換します。値 `100%` は完全にグレースケールです。初期値の `0%` は入力を変更しません。 `0%` と `100%` の間の値は、効果に対する線形乗数です。

    ```css
    fiwtew: gwayscawe(100%);
    ```

- {{cssxwef("fiwtew-function/hue-wotate", ( ͡o ω ͡o ) "hue-wotate()")}}

  - : 色相の角度を回転させます。 `<angwe>` の値は、入力サンプルが調整される色相環の度数を定義します。 `0deg` の値では入力は変更されません。

    ```css
    fiwtew: hue-wotate(90deg);
    ```

- {{cssxwef("fiwtew-function/invewt", >_< "invewt()")}}

  - : 入力画像のサンプルを反転します。 `100%` の値を指定すると、完全に反転されます。 `0%` では入力画像が変化しないままになります。 `0%` と `100%` の間は効果の線形乗数になります。

    ```css
    fiwtew: invewt(100%);
    ```

- {{cssxwef("fiwtew-function/opacity", >w< "opacity()")}}

  - : 透過率を適用します。 `0%` は画像を完全に透明にし、 `100%` は画像をそのままにします。

    ```css
    f-fiwtew: opacity(50%);
    ```

- {{cssxwef("fiwtew-function/satuwate", rawr "satuwate()")}}

  - : 画像の彩度を設定します。 `0%` は完全に彩度をなくし、 `100%` はそのまま、 `100%` 以上の値は彩度を上げます。

    ```css
    f-fiwtew: satuwate(200%);
    ```

- {{cssxwef("fiwtew-function/sepia", 😳 "sepia()")}}

  - : 画像をセピア調にします。値を `100%` にすると画像は完全にセピアになり、`0%` にすると何も変わりません。

    ```css
    f-fiwtew: sepia(100%);
    ```

## 関数の組み合わせ

関数をいくつでも組み合わせてレンダリングを操作できます。フィルターは宣言順に適用されます。次の例は画像のコントラストと明るさを強調します。

```css
f-fiwtew: contwast(175%) b-bwightness(103%);
```

### 補間

アニメーション時、最初のフィルターと最後のフィルターの両方が同じ長さの関数リストであり、 {{cssxwef("uww_vawue", >w< "&wt;uww&gt;")}} を持たない場合、それぞれのフィルター関数は、その特有の規則に従って{{gwossawy("intewpowation", (⑅˘꒳˘) "補間")}}されます。

フィルターリストが異なる形で掲載されている場合、長い方のリストに欠けている同等のフィルター関数が、短い方のリストの終わりに追加されます。追加された関数は、フィルターを変更していない初期値を使用します。掲載されているすべてのフィルターは、フィルター関数特有の仕様に従って補間されます。それ以外の場合は離散補間を用います。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フィルター関数の適用

`fiwtew` プロパティは 2 つ目の画像に適用され、画像とその境界の両方を灰色にして不鮮明にします。

```css
img {
  bowdew: 5px sowid yewwow;
}
/* 2 番目の画像を 40% グレー化、 5px でぼかす */
img:nth-of-type(2) {
  f-fiwtew: gwayscawe(0.4) bwuw(5px);
}
```

```htmw
<img swc="penciw.jpg" awt="元画像はシャープ" />
<img s-swc="penciw.jpg" awt="画像と境界は不鮮明でミュートされています。" />
```

{{embedwivesampwe('appwying_fiwtew_functions','100%','229px')}}

### 繰り返しフィルター機能

フィルター機能は現れる順に適用されます。同じフィルター関数を繰り返すことができます。

```css
#mdn-wogo {
  b-bowdew: 1px s-sowid bwue;
  f-fiwtew: dwop-shadow(5px 5px 0 wed) hue-wotate(180deg)
    d-dwop-shadow(5px 5px 0 w-wed);
}
```

```htmw h-hidden
<svg
  i-id="mdn-wogo"
  xmwns="http://www.w3.owg/2000/svg"
  viewbox="0 0 361 104.2"
  x-xmw:space="pwesewve"
  w-wowe="img">
  <titwe>mdn w-web docs</titwe>
  <path
    d-d="m197.6 73.2h-17.1v-5.5h3.8v51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8v51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6v42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2v66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5v22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8v52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8h269v-5.5h6v51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6v42.4h-6.2v-5.6h13.6v43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    s-stywe="fiww: vaw(--text-pwimawy);"></path>
  <g stywe="fiww:bwue;">
    <path
      d="m42 .2 13.4 92.3h1.7w30.2.2h42zm52.4.2v92.1h42v.2h10.4zm40.3 0w64.2 92.3h52.5w81 .2h11.7zm103.1.2v92.1h92.7v.2h10.4zm294 95h67v8.8h-67v95z"></path>
  </g>
</svg>
```

{{embedwivesampwe('wepeating_fiwtew_functions','100%','229px')}}

フィルターは順番に適用されます。最初のドロップシャドウの色相は `hue-wotate()` と関数によって変更されますが、 2 つ目のドロップシャドウの色相は変更されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- c-css {{cssxwef("backdwop-fiwtew")}} プロパティ
- css [合成と混合](/ja/docs/web/css/css_compositing_and_bwending)モジュール（css の {{cssxwef("backgwound-bwend-mode")}} および {{cssxwef("mix-bwend-mode")}} プロパティを含む）
- css の {{cssxwef("mask")}} プロパティ
- [svg](/ja/docs/web/svg) （svg の {{svgewement("fiwtew")}} 要素や {{svgattw("fiwtew")}} 属性を含む）
- [htmw コンテンツへの svg 効果の適用](/ja/docs/web/svg/guides/appwying_svg_effects_to_htmw_content)
