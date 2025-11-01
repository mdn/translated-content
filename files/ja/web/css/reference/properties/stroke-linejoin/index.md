---
title: stroke-linejoin
slug: Web/CSS/Reference/Properties/stroke-linejoin
original_slug: Web/CSS/stroke-linejoin
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`stroke-linejoin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[SVG](/ja/docs/Web/SVG) 要素のストローク付きパスの角で使用される形状を定義します。指定された場合、要素の {{SVGAttr("stroke-linejoin")}} 属性を上書きします。

このプロパティは、SVG の角を生成する図形やテキストコンテンツ要素（完全な一覧は {{SVGAttr("stroke-linejoin")}} を参照）に適用されますが、継承プロパティであるため、{{SVGElement("g")}} などの要素に適用された場合、子孫要素のストロークにも意図した効果が及びます。

## 構文

```css
/* キーワード値 */
stroke-linejoin: bevel;
stroke-linejoin: miter;
stroke-linejoin: round;

/* グローバル値 */
stroke-linejoin: inherit;
stroke-linejoin: initial;
stroke-linejoin: revert;
stroke-linejoin: revert-layer;
stroke-linejoin: unset;
```

### 値

- `bevel`
  - : パス区間を接合する際に、面取りされた角を使用することを示します。この面取りは、接合点で交わるサブパスの角度差を二等分する線に対して垂直な線で角を切り詰めることで形成されます。

- `miter`
  - : パス区間を接合する際に、鋭角の角を適用することを示します。この角は、パス区間の接線上でストロークの外縁を、それらが交差するまで延長することで形成されます。これがデフォルト値です。

- `round`
  - : パス区間を接合する際に、丸みを帯びた角を使用することを示します。これは、 `bevel` と同様に接合部を切り取り、角を丸めるために塗りつぶされた円弧の接線を追加することで実現されます。

次の値は定義されていますが、どのブラウザーでも対応していません。

- `arcs`
  - : （未対応）パス区間を接合するためにアークコーナーが使用されていることを示します。アークの形状は、接合点におけるストロークの外縁を、接合点における外縁と同じ曲率を付けて延長することで形成されます。

- `crop`
  - : （未対応） 角が凸角を形成するために必要な最小量だけ接合点を越えて延長されるべきであることを示します。これは、 {{CSSxref('stroke-miterlimit')}} の値が `1` の `miter`（以上参照）と機能的に同等です。

- `fallback`
  - : （未対応、リスクあり） {{CSSxref('stroke-miterlimit')}} の値を超えた場合に `crop bevel` と同様に動作します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 線の接合スタイル

この例は、`stroke-linejoin` で現在対応している 3 つのキーワード値を示しています。

#### HTML

4 つの同一のパスを設定しました。いずれも黒の幅 1 のストロークで、塗りつぶしはありません。

```html
<svg viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
  <g stroke="black" stroke-width="1" fill="none">
    <path d="M2,5  a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M8,5  a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M2,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
    <path d="M8,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" />
  </g>
</svg>
```

#### CSS

4 つのパスそれぞれに、対応している線の結合値が適用されます。最初のパスは面取り、2 番目は丸め、3 番目は斜め切り、4 番目も斜め切りですが、 {{CSSxref('stroke-miterlimit')}} が `2` に設定されているため、角は斜め切りではなく面取りされます。

```css
path:nth-child(1) {
  stroke-linejoin: bevel;
}
path:nth-child(2) {
  stroke-linejoin: round;
}
path:nth-child(3) {
  stroke-linejoin: miter;
}
path:nth-child(4) {
  stroke-linejoin: miter;
  stroke-miterlimit: 2;
}
```

#### 結果

{{EmbedLiveSample("Line-joining styles", "500", "600")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG の {{SVGAttr("stroke-linejoin")}} 属性
