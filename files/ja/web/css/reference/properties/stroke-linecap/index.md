---
title: stroke-linecap
slug: Web/CSS/Reference/Properties/stroke-linecap
original_slug: Web/CSS/stroke-linecap
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

**`stroke-linecap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[SVG](/ja/docs/Web/SVG) 要素の閉じていないストロークの開いたサブパスの終端に使用される形状を定義します。指定された場合、要素の {{SVGAttr("stroke-linecap")}} 属性を上書きします。

このプロパティは、閉じていないストロークやテキストコンテンツ要素を持つ可能性のあるあらゆる SVG 図形（完全な一覧は {{SVGAttr("stroke-linecap")}} を参照）に適用されますが、継承プロパティであるため、{{SVGElement("g")}} などの要素に適用された場合、子孫要素のストロークにも意図した効果が及びます。

## 構文

```css
/* キーワード値 */
stroke-linecap: butt;
stroke-linecap: round;
stroke-linecap: square;

/* グローバル値 */
stroke-linecap: inherit;
stroke-linecap: initial;
stroke-linecap: revert;
stroke-linecap: revert-layer;
stroke-linecap: unset;
```

### 値

- `butt`
  - : 各サブパスのストロークがその両端の点を越えて延長されないことを示します。長さがゼロのサブパスでは、パスはまったく描画されません。これがデフォルト値です。

- `round`
  - : 各サブパスの終点において、ストロークが半径がストローク幅に等しい半円分延長されることを示します。長さゼロのサブパスでは、ストロークはサブパスの終点を中心とする完全な円となります。

- `square`
  - : 各サブパスの終点において、ストロークは幅がストローク幅の半分、高さがストローク幅に等しい矩形で延長されることを示します。長さゼロのサブパスでは、ストロークは幅がストローク幅に等しい正方形で構成され、サブパスの点を中心とします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 線端形状

この例は、プロパティの 3 つのキーワード値を示しています。

#### HTML

まず薄い灰色の矩形を配置します。次に、グループ内で 3 つのパスを定義します。これらはすべて矩形の幅とまったく同じ長さで、矩形の左端から始まります。すべて `dodgerblue` のストローク（幅 7）に設定されています。

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#dddddd" />
  <g stroke="dodgerblue" stroke-width="7">
    <path d="M 10,10 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

#### CSS

次に、CSS を介して各パスに異なる線端形状スタイルを適用します。

```css
path:nth-of-type(1) {
  stroke-linecap: butt;
}
path:nth-of-type(2) {
  stroke-linecap: square;
}
path:nth-of-type(3) {
  stroke-linecap: round;
}
```

#### 結果

{{EmbedLiveSample("Linecaps", "500", "250")}}

最初のパスは `butt` の線端形状を採用しています。これは基本的に、ストロークがパスの端点（始点と終点の両方）に正確に到達し、それ以上は伸びないことを意味します。 2 番目のパスは `square` の線端形状です。そのため可視パスはパスの端点を超えて延長され、パスの全長が 87 単位に見えるようになります。これはパス長が 80 単位で、2 つの角形端形状がそれぞれ 3.5 単位の幅を持つためです。3 番目のパスは `circle` の線端形状です。同様に全長が 87 単位に見えるものの、2 つの線端形状は角形ではなく半円形です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG の {{SVGAttr("stroke-linecap")}} 属性
