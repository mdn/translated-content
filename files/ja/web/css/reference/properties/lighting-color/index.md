---
title: lighting-color
slug: Web/CSS/Reference/Properties/lighting-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`lighting-color`** [CSS](/ja/docs/Web/CSS) プロパティは、SVG の {{SVGElement("filter")}} 内の SVG 照明フィルタープリミティブである {{SVGElement("feDiffuseLighting")}} および {{SVGElement("feSpecularLighting")}} の光源の色を定義します。指定された場合、要素の {{SVGAttr("lighting-color")}} 属性を上書きします。

> [!NOTE]
> `lighting-color` プロパティは {{SVGElement("svg")}} 内にある {{SVGElement("feDiffuseLighting")}} と {{SVGElement("feSpecularLighting")}} 要素にのみ適用されます。その他の SVG、HTML、擬似要素には適用されません。

## 構文

```css
/* <color> 値 */
lighting-color: red;
lighting-color: hsl(120deg 75% 25% / 60%);
lighting-color: currentColor;

/* グローバル値 */
lighting-color: inherit;
lighting-color: initial;
lighting-color: revert;
lighting-color: revert-layer;
lighting-color: unset;
```

### 値

- {{cssxref("color_value", "&lt;color>")}}
  - : 照明の色です。これは任意の有効な CSS の {{cssxref("color_value", "&lt;color>")}} 値を取ります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### フィルターの照明の色の定義

この例は、`lighting-color` の基本的な使用例と、CSS の `lighting-color` プロパティが `lighting-color` 属性よりも優先される仕組みを示しています。

#### HTML

SVG には 2 つの {{SVGElement("filter")}} 要素があり、1 つは `<feDiffuseLighting>` を、もう1つは `<feSpecularLighting>` の子要素を含みます。それぞれに SVG の `lighting-color` 属性が含まれており、照明色を `red` と定義しています。これらの子要素の両方には、光源を設定する必須の子要素である {{SVGElement("fePointLight")}} が含まれています。フィルター属性を設定した 2 つの {{SVGElement("rect")}} 要素を含めており、ここにフィルターが表示されます。

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feDiffuseLighting lighting-color="red">
      <fePointLight x="75" y="30" z="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="flood2">
    <feSpecularLighting specularExponent="5" lighting-color="red">
      <fePointLight x="225" y="75" z="5" />
    </feSpecularLighting>
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

`<rect>` のサイズと位置は、CSS の {{cssxref("height")}}、{{cssxref("width")}}、{{cssxref("x")}}、{{cssxref("y")}} プロパティで定義します。また、SVG に背景画像を追加して、色のアルファ透過が分かりやすくなるようにします。

```css
svg {
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 9px,
    #cccccc 0px 10px
  );
}

rect {
  width: 100px;
  height: 100px;
  x: 10px;
  y: 10px;
}

#r2 {
  x: 150px;
}
```

次に、CSS の `lighting-color` プロパティを使用して、フィルターの子要素に異なる照明色値を適用します。名前付きカラーと 3 桁の 16 進カラーを使用していますが、有効な CSS カラー構文であれば何でも使用できます。

```css
feDiffuseLighting {
  lighting-color: blue;
}

feSpecularLighting {
  lighting-color: #ff0099;
}
```

#### 結果

{{EmbedLiveSample("Defining the color of filter lighting", "300", "220")}}

両方の照明フィルターの色は属性で `red` と定義されていましたが、これらの値は CSS の `lighting-color` 値によって上書きされました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("color")}}
- {{cssxref("fill")}}
- {{cssxref("flood-color")}}
- {{cssxref("stop-color")}}
- {{cssxref("stroke")}}
- {{cssxref("flood-opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("filter-function")}}
- SVG の {{SVGAttr("lighting-color")}} 属性
