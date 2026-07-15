---
title: <feComposite>
slug: Web/SVG/Reference/Element/feComposite
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feComposite>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、Porter-Duff 合成演算（`over`、`in`、`atop`、`out`、`xor`、`lighter`、`arithmetic`）のいずれかを使用して、画像空間において 2 つの入力画像をピクセル単位で合成します。

他のフィルタープリミティブと同様に、デフォルトで `linearRGB` {{glossary("color space", "色空間")}}の色成分を処理します。{{svgattr("color-interpolation-filters")}} を使用することで、代わりに `sRGB` を使用することもできます。

下記の表では、MDN のロゴに赤い円をつけて合成した画像を用いて、それぞれの演算を示しています。

<table class="no-markdown">
  <tbody>
    <tr>
      <th>演算</th>
      <th>説明</th>
    </tr>
    <tr>
      <td>
        <p>over <img src="operation_over.png" alt="over 演算" /></p>
      </td>
      <td>
        {{SVGAttr("in")}} 属性で定義された元のグラフィック（MDN のロゴ）が、{{SVGAttr("in2")}} 属性で定義された宛先グラフィック（円）の上に配置されます。
        <p>
          これは <em>デフォルトの演算</em>であり、演算が指定されていない場合や、対応していない演算が指定された場合に使用されます。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>in <img src="operation_in.png" alt="in 演算" /></p>
      </td>
      <td>
        <code>in</code> 属性で定義された元のグラフィックの部分のうち、<code>in2</code>属性で定義された宛先グラフィックと重なる部分は、その宛先グラフィックを置き換えます。
      </td>
    </tr>
    <tr>
      <td>
        <p>out <img src="operation_out.png" alt="out 演算" /></p>
      </td>
      <td>
        <code>in</code> 属性で定義された元のグラフィックの部分のうち、<code>in2</code> 属性で定義された宛先グラフィックからはみ出している部分を表示させます。
      </td>
    </tr>
    <tr>
      <td>
        <p>atop <img src="operation_atop.png" alt="atop 演算" /></p>
      </td>
      <td>
        <code>in</code> 属性で定義された元のグラフィックのうち、<code>in2</code> 属性で定義された宛先グラフィックと重なる部分は、宛先グラフィックに置き換えます。元のグラフィックと重ならない宛先グラフィックの部分は、変更されません。
      </td>
    </tr>
    <tr>
      <td>
        <p>xor <img src="operation_xor.png" alt="xor 演算" /></p>
      </td>
      <td>
        <code>in</code> 属性で定義された元のグラフィックと、<code>in2</code> 属性で定義された宛先グラフィックとの間で、重なり合わない領域が結合されます。
      </td>
    </tr>
    <tr>
      <td>
        <p>
          lighter <img src="operation_lighter.png" alt="lighter 演算" />
        </p>
      </td>
      <td>
        <code>in</code> 属性で定義されたソースグラフィックと、<code>in2</code> 属性で定義された出力先グラフィックの合計が表示されます。
      </td>
    </tr>
    <tr>
      <td>
        <p>
          arithmetic
          <img src="operation_arithmetic.png" alt="arithmetic 演算" />
        </p>
      </td>
      <td>
        <p>
          <code>arithmetic</code> 操作は、{{SVGElement("feDiffuseLighting")}} および {{SVGElement("feSpecularLighting")}} フィルターからの出力をテクスチャデータと組み合わせる際に有益です。<code>arithmetic</code> 操作が選択された場合、それぞれの結果ピクセルは次の式を用いて計算されます。
        </p>
        <pre class="brush: plain">result = k1*i1*i2 + k2*i1 + k3*i2 + k4</pre>
        <p>ここで、</p>
        <ul>
          <li>
            <code>i1</code> および <code>i2</code> は、入力画像の対応するピクセルチャネル値を示しており、それぞれ {{SVGAttr("in")}} および {{SVGAttr("in2")}} に対応します。
          </li>
          <li>
            {{SVGAttr("k1")}}、{{SVGAttr("k2")}}、{{SVGAttr("k3")}}、{{SVGAttr("k4")}} は、それぞれ同名の属性の値を示しています。
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}: 指定されたフィルタープリミティブに対する 1 つ目の入力。
- {{SVGAttr("in2")}}: 指定されたフィルタープリミティブに対する 2 つ目の入力（`in` 属性と同様に動作します）。
- {{SVGAttr("operator")}}: `over` | `in` | `out` | `atop` | `xor` | `lighter` | `arithmetic`
- {{SVGAttr("k1")}}, {{SVGAttr("k2")}}, {{SVGAttr("k3")}}, {{SVGAttr("k4")}}: `arithmetic` {{SVGAttr("operator")}} フィルタープリミティブにおいて、結果のピクセルを計算するために使用される値。
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFECompositeElement")}} インターフェイスを実装しています。

## 例

この例では、対応する演算（`over`、`atop`、`lighter` など）ごとにフィルターを定義し、入力となる `SourceGraphic` と MDN ロゴの画像を合成しています。それぞれのフィルターは円要素に適用され、その円要素が `SourceGraphic` として使用されます。

> [!NOTE]
> 現行ブラウザーでは `BackgroundImage` を合成ソースとして使用できないため、フィルターの直下にたまたまあるピクセルをソースの一つとして合成を行うフィルターを定義することはできません。ここで採用されている手法は、`BackgroundImage` を使用できないことに対する[回避策](/ja/docs/Web/SVG/Reference/Attribute/in#backgroundimage_の回避策)です。

### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="imageOver">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="over" />
    </filter>
    <filter id="imageIn">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="in" />
    </filter>
    <filter id="imageOut">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="out" />
    </filter>
    <filter id="imageAtop">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="atop" />
    </filter>
    <filter id="imageXor">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="xor" />
    </filter>
    <filter id="imageArithmetic">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite
        in2="SourceGraphic"
        operator="arithmetic"
        k1="0.1"
        k2="0.2"
        k3="0.3"
        k4="0.4" />
    </filter>
    <filter id="imageLighter">
      <feImage href="mdn_logo_only_color.png" x="10px" y="10px" width="160px" />
      <feComposite in2="SourceGraphic" operator="lighter" />
    </filter>
  </defs>
  <g transform="translate(0,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageOver)" />
    <text x="80" y="-5">over</text>
  </g>
  <g transform="translate(200,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageIn)" />
    <text x="80" y="-5">in</text>
  </g>
  <g transform="translate(400,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageOut)" />
    <text x="80" y="-5">out</text>
  </g>
  <g transform="translate(600,25)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageAtop)" />
    <text x="80" y="-5">atop</text>
  </g>
  <g transform="translate(0,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageXor)" />
    <text x="80" y="-5">xor</text>
  </g>
  <g transform="translate(200,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageArithmetic)" />
    <text x="70" y="-5">arithmetic</text>
  </g>
  <g transform="translate(400,240)">
    <circle
      cx="90px"
      cy="80px"
      r="70px"
      fill="#cc0000"
      filter="url(#imageLighter)" />
    <text x="80" y="-5">lighter</text>
  </g>
</svg>
```

```css hidden
svg {
  width: 800px;
  height: 400px;
  display: inline;
}
```

### 結果

{{EmbedLiveSample("Example", 100, 450)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
