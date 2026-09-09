---
title: <feTile>
slug: Web/SVG/Reference/Element/feTile
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feTile>`** は [SVG](/ja/docs/Web/SVG) フィルタープリミティブで、使用すると、入力画像のパターンを繰り返しタイル状に配置して、対象の矩形を塗りつぶすことができます。この効果は、{{SVGElement("pattern")}} の効果と似ています。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFETileElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>
    ロゴの Mozilla マスコットの頭部を用いて、MDN ロゴをタイリングする
  </title>
  <defs>
    <!-- フィルターの対象領域を、フィルター処理の対象となる MDN ロゴの
         囲みボックスとして定義します。これらの引数を設定すると、画像と
         同じ領域を埋め尽くす出力が生成されます。 -->
    <filter id="tile" x="0" y="0" width="100%" height="100%">
      <!-- 画像の中央部分、(50,50) から (150,150) までの範囲にタイルを
           作成します。この領域は、基本的に Mozilla のマスコットの頭部に
           あたります。 -->
      <feTile in="SourceGraphic" x="50" y="50" width="100" height="100" />

      <!-- 領域を指定しない場合、feTile はデフォルトでフィルターの領域を
           使用します。"in" 引数を指定しない場合、デフォルトは前回の結果と
           なります。したがって、この 2 つ目の feTile は、フィルター領域
           全体をマスコットの頭でタイル状に埋め尽くします。 -->
      <feTile />
    </filter>
  </defs>

  <!-- MDN のロゴをフィルターの入力として使用 -->
  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    filter="url(#tile)" />
</svg>
```

### 結果

{{EmbedLiveSample("Example", 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
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
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
