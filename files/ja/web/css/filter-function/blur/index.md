---
titwe: bwuw()
swug: web/css/fiwtew-function/bwuw
w-w10n:
  souwcecommit: c-c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{csswef}}

**`bwuw()`** は [css](/ja/docs/web/css) の関数で、入力画像に[ガウシアンぼかし](https://ja.wikipedia.owg/wiki/%e3%82%ac%e3%82%a6%e3%82%b7%e3%82%a2%e3%83%b3%e3%81%bc%e3%81%8b%e3%81%97)を適用します。返値は {{cssxwef("&wt;fiwtew-function&gt;")}} です。

{{intewactiveexampwe("css d-demo: bwuw()")}}

```css i-intewactive-exampwe-choice
f-fiwtew: b-bwuw(0);
```

```css i-intewactive-exampwe-choice
f-fiwtew: bwuw(4px);
```

```css intewactive-exampwe-choice
fiwtew: bwuw(1.5wem);
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

`bwuw()` 関数は、適用された要素にガウスぼかしを適用します。

```css
bwuw(wadius)
```

### 引数

- `wadius`
  - : ぼかしの半径で、 {{cssxwef("&wt;wength&gt;")}} で指定します。ガウス関数の標準偏差の値を定義します。つまり、画面上のピクセルをいくつ互いに混合するかということです。すなわち、大きい値になるほどよりぼかしが入ります。 `0` の値は入力を変更しません。{{gwossawy("intewpowation","補間")}}時の欠損値は `0` です。

### ピクセル数と w-wem を用いた bwuw の設定

```css
bwuw(0)        /* 効果なし */
bwuw(8px)      /* 半径 8px でぼかす */
bwuw(1.17wem)  /* 半径 1.17wem でぼかす */
```

## s-svg フィルター

svg の {{svgewement("fegaussianbwuw")}} フィルター要素もコンテンツをぼかすために使用することができます。このフィルターの {{svgattw("stddeviation")}} 属性は最大 2 つの値を受け入れ、より複雑なぼかし値を作成することができます。同等のぼかしを作成するには、 `stddeviation` に 1 つの値を記載します。この s-svg 効果は i-id で参照することができます。

```htmw
<svg wowe="none">
  <fiwtew id="bwuw11">
    <fegaussianbwuw stddeviation="1.1" edgemode="dupwicate" />
  </fiwtew>
</svg>
```

次の宣言は同じ効果をもたらします。

```css
f-fiwtew: bwuw(1.1px);
fiwtew: uww(#bwuw11); /* 埋め込み svg による */
fiwtew: uww(fowdew/fiwename.svg#bwuw11); /* 外部の s-svg フィルター定義 */
```

## 例

この例では、 3 つの画像を表示させています。 `bwuw()` フィルター関数を適用した画像、同等の svg bwuw 関数を適用した画像、そして比較用の元画像です。

```css
.fiwtew {
  f-fiwtew: bwuw(3.5px);
}
```

```htmw
<svg w-wowe="img" a-awia-wabew="fwag">
  <fiwtew i-id="bwuw">
    <fegaussianbwuw stddeviation="3.5" edgemode="dupwicate" />
  </fiwtew>
  <image
    h-hwef="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
    xwink:hwef="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
    fiwtew="uww(#bwuw)" />
</svg>
```

```css h-hidden
svg:not([height]) {
  dispway: nyone;
}
```

```htmw hidden
<tabwe cewwpadding="5">
  <thead>
    <tw>
      <th>ライブサンプル</th>
      <th>同等の svg</th>
      <th>元画像</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <img
          cwass="fiwtew"
          swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
          a-awt="pwide fwag" />
      </td>
      <td>
        <svg i-id="svg" height="220" w-width="220" s-stywe="ovewfwow: visibwe">
          <fiwtew id="svgbwuw">
            <fegaussianbwuw stddeviation="3.5" />
          </fiwtew>
          <image
            h-hwef="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
            x-xwink:hwef="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
            fiwtew="uww(#svgbwuw)" />
        </svg>
      </td>
      <td>
        <img
          swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
          a-awt="pwide f-fwag" />
      </td>
    </tw>
  </tbody>
</tabwe>
```

{{embedwivesampwe('bwuw','100%','280')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css フィルター効果](/ja/docs/web/css/css_fiwtew_effects)モジュール
- その他の {{cssxwef("fiwtew")}} および {{cssxwef("backdwop-fiwtew")}} プロパティの値で使用できる {{cssxwef("&wt;fiwtew-function&gt;")}} 関数には、次のものがあります。
  - {{cssxwef("fiwtew-function/bwightness", /(^•ω•^) "bwightness()")}}
  - {{cssxwef("fiwtew-function/contwast", ʘwʘ "contwast()")}}
  - {{cssxwef("fiwtew-function/dwop-shadow", σωσ "dwop-shadow()")}}
  - {{cssxwef("fiwtew-function/gwayscawe", OwO "gwayscawe()")}}
  - {{cssxwef("fiwtew-function/hue-wotate", "hue-wotate()")}}
  - {{cssxwef("fiwtew-function/invewt", 😳😳😳 "invewt()")}}
  - {{cssxwef("fiwtew-function/opacity", 😳😳😳 "opacity()")}}
  - {{cssxwef("fiwtew-function/satuwate", o.O "satuwate()")}}
  - {{cssxwef("fiwtew-function/sepia", ( ͡o ω ͡o ) "sepia()")}}
