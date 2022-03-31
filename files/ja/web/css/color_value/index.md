---
title: <color>
slug: Web/CSS/color_value
tags:
  - CSS
  - CSS データ型
  - データ型
  - レイアウト
  - リファレンス
  - ウェブ
  - 色
  - hsl
  - hsla
  - rgb
  - rgba
  - 単位
  - lch
  - lab
browser-compat: css.types.color
translation_of: Web/CSS/color_value
---
{{CSSRef}}

**`<color>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、一つの色を表します。
`<color>` は[アルファチャネル](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)*透過値*を含むことがあり、この色を背景とどれだけ<a class="external" href="https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending">合成</a>するかを示すこともできます。

`<color>` は以下の何れかの方法で定義することができます。

- キーワードを使用すること (`blue` や `transparent` など)。既存のキーワードはすべて、[sRGB 色空間](https://en.wikipedia.org/wiki/SRGB)内の色で定められています。
- [RGB 立方体座標方式](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation)の使用 (# + 16 進数値や、`rgb()` や `rgba()` の関数表記による)。
  これらは常に[sRGB 色空間](https://en.wikipedia.org/wiki/SRGB)内の色で定められます。
- [HSL 円筒座標系](https://ja.wikipedia.org/wiki/HSV%E8%89%B2%E7%A9%BA%E9%96%93) の使用 ({{cssxref("color_value/hsl()","hsl()")}} や {{cssxref("color_value/hsla()","hsla()")}} の関数表記による)
  これらは常に[sRGB 色空間](https://en.wikipedia.org/wiki/SRGB)内の色で定められます。
- [LCH 円筒座標系](https://ja.wikipedia.org/wiki/CIE_Luv%E8%89%B2%E7%A9%BA%E9%96%93#%E5%86%86%E7%AD%92%E5%BA%A7%E6%A8%99%E7%B3%BB%E3%81%AB%E3%82%88%E3%82%8B%E8%A1%A8%E7%8F%BE_(CIELCH))の使用 ({{cssxref("color_value/lch()","lch()")}} 関数表記による)
  これは任意の視覚可能な色を指定することができます。
- [Lab 座標系](https://ja.wikipedia.org/wiki/Lab%E8%89%B2%E7%A9%BA%E9%96%93) ({{cssxref("color_value/lab()","lab()")}} 関数表記による)
  これは任意の視覚可能な色を指定することができます。
- {{cssxref("color_value/color()","color()")}} 関数表記を使用して、様々な定義済みまたは独自の色空間で色を指定することができます。

> **Note:** この記事は `<color>` データ型の詳細を説明しています。 HTML での色の使い方について詳しくは、 [CSS を使用した HTML 要素への色の適用](/ja/docs/Web/HTML/Applying_color)を参照してください。

## 構文

`<color>` データ型は以下のいずれか 1 つの方法を使って指定されます。

> **Note:** `<color>` の色は詳細に定義されていますが、出力機器によって (時には著しく) 違って見えるかもしれません。出力機器の大半は色補正がされておらず、ブラウザーによっては出力機器の[色プロファイル](https://ja.wikipedia.org/wiki/ICC%E3%83%97%E3%83%AD%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB)に対応していないからです。

### 色キーワード

色キーワードは大文字と小文字の区別をしない識別子で、特定の色を表します。例えば `red`, `blue`, `black`, `lightseagreen` といったものです。色名は多少なりとそれぞれの色を説明していますが、ほとんどは基本的に人工的であり、名前の仕様について強い根拠はありません。

キーワードを使うとき、考慮すべき点がいくつかあります。

- [HTML](/ja/docs/Web/HTML) は CSS1 に見られる基本 16 色のみを解釈し、解釈できない値を (ふつう完全に違う色に) 変換する際は特定のアルゴリズムを使用します。その他の色キーワードは CSS および [SVG](/ja/docs/Web/SVG) のみで使用してください。
- HTML とは異なり、 CSS では未知のキーワードは完全に無視されます。
- CSS のキーワード定義された色はどれも透明度を持たず、完全に不透明な色です。
- 同じ色を表すキーワードがいくつかあります。

  - `aqua` / `cyan`
  - `fuchsia` / `magenta`
  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- キーワードは [X11](https://ja.wikipedia.org/wiki/X_Window_System) の色名からとられたものですが、メーカーが X11 の色を特定のハードウェアに合わせて変えていることがあるので、 RGB 値は X11 システムでの色とは異なる可能性があります。

> **Note:** 利用可能なキーワードの一覧は、様々な CSS の仕様書によって異なります。
>
> - CSS Level 1 では基本的な 16 色だけを受け付けていました。これは *VGA 色*と呼ばれ、[VGA](https://ja.wikipedia.org/wiki/Video_Graphics_Array) グラフィックカードで表示可能な色です。
> - CSS Level 2 では `orange` キーワードが追加されました。
> - 初期のブラウザーでは仕様にない様々な色 (主に X11 色リストからの転用) に対応していましたが、正式に定義されたのは SVG 1.0 と CSS Colors Level 3 からでした。これらはよく*拡張色キーワード*、*X11 色*、*SVG 色*と呼ばれます。
> - CSS Colors Level 4 では [ウェブのパイオニア、エリック・メイヤーに敬意を表して](https://codepen.io/trezy/post/honoring-a-great-man) `rebeccapurple` のキーワードを追加しました。

<table>
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">キーワード</th>
      <th scope="col">RGB 16 進表記</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr style="position: relative">
      <td rowspan="16">{{SpecName("CSS1")}}</td>
      <td style="text-align: center"><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
    <tr>
      <td rowspan="130">{{SpecName("CSS3 Colors")}}</td>
      <td style="text-align: center"><code>aliceblue</code></td>
      <td><code>#f0f8ff</code></td>
      <td style="background: aliceblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td style="background: antiquewhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>aquamarine</code></td>
      <td><code>#7fffd4</code></td>
      <td style="background: aquamarine"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>azure</code></td>
      <td><code>#f0ffff</code></td>
      <td style="background: azure"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td style="background: beige"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: bisque"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blanchedalmond</code></td>
      <td><code>#ffebcd</code></td>
      <td style="background: blanchedalmond"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>blueviolet</code></td>
      <td><code>#8a2be2</code></td>
      <td style="background: blueviolet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>brown</code></td>
      <td><code>#a52a2a</code></td>
      <td style="background: brown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>burlywood</code></td>
      <td><code>#deb887</code></td>
      <td style="background: burlywood"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cadetblue</code></td>
      <td><code>#5f9ea0</code></td>
      <td style="background: cadetblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>chartreuse</code></td>
      <td><code>#7fff00</code></td>
      <td style="background: chartreuse"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>chocolate</code></td>
      <td><code>#d2691e</code></td>
      <td style="background: chocolate"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>coral</code></td>
      <td><code>#ff7f50</code></td>
      <td style="background: coral"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cornflowerblue</code></td>
      <td><code>#6495ed</code></td>
      <td style="background: cornflowerblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>cornsilk</code></td>
      <td><code>#fff8dc</code></td>
      <td style="background: cornsilk"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>crimson</code></td>
      <td><code>#dc143c</code></td>
      <td style="background: crimson"></td>
    </tr>
    <tr>
      <td style="text-align: center">
        <code>cyan</code><br />(<code>aqua</code> の同義語)
      </td>
      <td><code>#00ffff</code></td>
      <td style="background: cyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkblue</code></td>
      <td><code>#00008b</code></td>
      <td style="background: darkblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td style="background: darkcyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgoldenrod</code></td>
      <td><code>#b8860b</code></td>
      <td style="background: darkgoldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgray</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgreen</code></td>
      <td><code>#006400</code></td>
      <td style="background: darkgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkgrey</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td style="background: darkkhaki"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td style="background: darkmagenta"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkolivegreen</code></td>
      <td><code>#556b2f</code></td>
      <td style="background: darkolivegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkorange</code></td>
      <td><code>#ff8c00</code></td>
      <td style="background: darkorange"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkorchid</code></td>
      <td><code>#9932cc</code></td>
      <td style="background: darkorchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkred</code></td>
      <td><code>#8b0000</code></td>
      <td style="background: darkred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darksalmon</code></td>
      <td><code>#e9967a</code></td>
      <td style="background: darksalmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkseagreen</code></td>
      <td><code>#8fbc8f</code></td>
      <td style="background: darkseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslateblue</code></td>
      <td><code>#483d8b</code></td>
      <td style="background: darkslateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslategray</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkslategrey</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkturquoise</code></td>
      <td><code>#00ced1</code></td>
      <td style="background: darkturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>darkviolet</code></td>
      <td><code>#9400d3</code></td>
      <td style="background: darkviolet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td style="background: deeppink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>deepskyblue</code></td>
      <td><code>#00bfff</code></td>
      <td style="background: deepskyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dimgray</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dimgrey</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>dodgerblue</code></td>
      <td><code>#1e90ff</code></td>
      <td style="background: dodgerblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>firebrick</code></td>
      <td><code>#b22222</code></td>
      <td style="background: firebrick"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>floralwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td style="background: floralwhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>forestgreen</code></td>
      <td><code>#228b22</code></td>
      <td style="background: forestgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gainsboro</code></td>
      <td><code>#dcdcdc</code></td>
      <td style="background: gainsboro"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td style="background: ghostwhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>gold</code></td>
      <td><code>#ffd700</code></td>
      <td style="background: gold"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>goldenrod</code></td>
      <td><code>#daa520</code></td>
      <td style="background: goldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>greenyellow</code></td>
      <td><code>#adff2f</code></td>
      <td style="background: greenyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>grey</code></td>
      <td><code>#808080</code></td>
      <td style="background: grey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td style="background: honeydew"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td style="background: hotpink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>indianred</code></td>
      <td><code>#cd5c5c</code></td>
      <td style="background: indianred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td style="background: indigo"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>ivory</code></td>
      <td><code>#fffff0</code></td>
      <td style="background: ivory"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td style="background: khaki"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lavender</code></td>
      <td><code>#e6e6fa</code></td>
      <td style="background: lavender"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lavenderblush</code></td>
      <td><code>#fff0f5</code></td>
      <td style="background: lavenderblush"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lawngreen</code></td>
      <td><code>#7cfc00</code></td>
      <td style="background: lawngreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td style="background: lemonchiffon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightblue</code></td>
      <td><code>#add8e6</code></td>
      <td style="background: lightblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightcoral</code></td>
      <td><code>#f08080</code></td>
      <td style="background: lightcoral"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td style="background: lightcyan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgoldenrodyellow</code></td>
      <td><code>#fafad2</code></td>
      <td style="background: lightgoldenrodyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgray</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgreen</code></td>
      <td><code>#90ee90</code></td>
      <td style="background: lightgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightgrey</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td style="background: lightpink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightsalmon</code></td>
      <td><code>#ffa07a</code></td>
      <td style="background: lightsalmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightseagreen</code></td>
      <td><code>#20b2aa</code></td>
      <td style="background: lightseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightskyblue</code></td>
      <td><code>#87cefa</code></td>
      <td style="background: lightskyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightslategray</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightslategrey</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightsteelblue</code></td>
      <td><code>#b0c4de</code></td>
      <td style="background: lightsteelblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>lightyellow</code></td>
      <td><code>#ffffe0</code></td>
      <td style="background: lightyellow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>limegreen</code></td>
      <td><code>#32cd32</code></td>
      <td style="background: limegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>linen</code></td>
      <td><code>#faf0e6</code></td>
      <td style="background: linen"></td>
    </tr>
    <tr>
      <td style="text-align: center">
        <code>magenta</code><br />(<code>fuchsia</code> の同義語)
      </td>
      <td><code>#ff00ff</code></td>
      <td style="background: magenta"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumaquamarine</code></td>
      <td><code>#66cdaa</code></td>
      <td style="background: mediumaquamarine"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumblue</code></td>
      <td><code>#0000cd</code></td>
      <td style="background: mediumblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumorchid</code></td>
      <td><code>#ba55d3</code></td>
      <td style="background: mediumorchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumpurple</code></td>
      <td><code>#9370db</code></td>
      <td style="background: mediumpurple"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumseagreen</code></td>
      <td><code>#3cb371</code></td>
      <td style="background: mediumseagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumslateblue</code></td>
      <td><code>#7b68ee</code></td>
      <td style="background: mediumslateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumspringgreen</code></td>
      <td><code>#00fa9a</code></td>
      <td style="background: mediumspringgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumturquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td style="background: mediumturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mediumvioletred</code></td>
      <td><code>#c71585</code></td>
      <td style="background: mediumvioletred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>midnightblue</code></td>
      <td><code>#191970</code></td>
      <td style="background: midnightblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mintcream</code></td>
      <td><code>#f5fffa</code></td>
      <td style="background: mintcream"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>mistyrose</code></td>
      <td><code>#ffe4e1</code></td>
      <td style="background: mistyrose"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td style="background: moccasin"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td style="background: navajowhite"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>oldlace</code></td>
      <td><code>#fdf5e6</code></td>
      <td style="background: oldlace"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>olivedrab</code></td>
      <td><code>#6b8e23</code></td>
      <td style="background: olivedrab"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>orangered</code></td>
      <td><code>#ff4500</code></td>
      <td style="background: orangered"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>orchid</code></td>
      <td><code>#da70d6</code></td>
      <td style="background: orchid"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palegoldenrod</code></td>
      <td><code>#eee8aa</code></td>
      <td style="background: palegoldenrod"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palegreen</code></td>
      <td><code>#98fb98</code></td>
      <td style="background: palegreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>paleturquoise</code></td>
      <td><code>#afeeee</code></td>
      <td style="background: paleturquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>palevioletred</code></td>
      <td><code>#db7093</code></td>
      <td style="background: palevioletred"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td style="background: papayawhip"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td style="background: peachpuff"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>peru</code></td>
      <td><code>#cd853f</code></td>
      <td style="background: peru"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td style="background: pink"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>plum</code></td>
      <td><code>#dda0dd</code></td>
      <td style="background: plum"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>powderblue</code></td>
      <td><code>#b0e0e6</code></td>
      <td style="background: powderblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>rosybrown</code></td>
      <td><code>#bc8f8f</code></td>
      <td style="background: rosybrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>royalblue</code></td>
      <td><code>#4169e1</code></td>
      <td style="background: royalblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>saddlebrown</code></td>
      <td><code>#8b4513</code></td>
      <td style="background: saddlebrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>salmon</code></td>
      <td><code>#fa8072</code></td>
      <td style="background: salmon"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>sandybrown</code></td>
      <td><code>#f4a460</code></td>
      <td style="background: sandybrown"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>seagreen</code></td>
      <td><code>#2e8b57</code></td>
      <td style="background: seagreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>seashell</code></td>
      <td><code>#fff5ee</code></td>
      <td style="background: seashell"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td style="background: sienna"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>skyblue</code></td>
      <td><code>#87ceeb</code></td>
      <td style="background: skyblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slateblue</code></td>
      <td><code>#6a5acd</code></td>
      <td style="background: slateblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slategray</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategray"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>slategrey</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategrey"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td style="background: snow"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>springgreen</code></td>
      <td><code>#00ff7f</code></td>
      <td style="background: springgreen"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>steelblue</code></td>
      <td><code>#4682b4</code></td>
      <td style="background: steelblue"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td style="background: tan"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>thistle</code></td>
      <td><code>#d8bfd8</code></td>
      <td style="background: thistle"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td style="background: tomato"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>turquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td style="background: turquoise"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>violet</code></td>
      <td><code>#ee82ee</code></td>
      <td style="background: violet"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td style="background: wheat"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td style="background: whitesmoke"></td>
    </tr>
    <tr>
      <td style="text-align: center"><code>yellowgreen</code></td>
      <td><code>#9acd32</code></td>
      <td style="background: yellowgreen"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td style="text-align: center">
        <a href="https://en.wikipedia.org/wiki/Eric_A._Meyer#Personal_life"
          ><code>rebeccapurple</code></a
        >
      </td>
      <td><code>#663399</code></td>
      <td style="background: rebeccapurple"></td>
    </tr>
  </tbody>
</table>

### `transparent` キーワード

`transparent` は完全な透明色を表すキーワードです。この色が付いた項目の背後の背景は完全に見えます。厳密には、`transparent` は `rgba(0,0,0,0)` のショートカットです。

> **Note:** {{cssxref("gradient","グラデーション")}}の場合の同様、予期しない動きを避けるために、現在の CSS の仕様書は `transparent` を[アルファ乗算色空間](https://www.w3.org/TR/2012/CR-css3-images-20120417/#color-stop-syntax)で計算するように定めています。しかし、古いブラウザーはアルファチャンネルが `0` の値である黒として扱うかもしれません。

> **Note:** `transparent` キーワードは CSS Level 2 (Revision 1) では色ではありませんでした。これは {{Cssxref("background")}} プロパティと {{Cssxref("border")}} プロパティの 2 つにおいて、通常の `<color>` の代わりに使用することができた特殊なキーワードでした。基本的に、継承された色を開発者が上書きすることができるように追加されたものです。 CSS Colors Level 3 でアルファチャンネルが出現し、 `transparent` は色として再定義されました。 `<color>` の値を使用することができる場所ならば、どこでも使用することができるようになりました。

### `currentColor` キーワード

`currentColor` キーワードは、要素の {{Cssxref("color")}} プロパティの値を表します。これで `color` の値をプロパティが既定で受け取らなくても利用することができます。

`currentColor` が `color` プロパティの値として使用された場合、 `color` プロパティが継承した値が使用されます。

<h4 id="currentColor_example">currentcolor の例</h4>

```html
<div style="color:blue; border: 1px dashed currentColor;">
  この文字列の色は青です。
  <div style="background:currentColor; height:9px;"></div>
  このブロックは青い境界線で囲まれています。
</div>
```

{{EmbedLiveSample('currentColor_example', 600, 80)}}

### RGB 色

RGB 色モデルは赤、緑、青の成分によって指定された[sRGB 色空間](https://en.wikipedia.org/wiki/SRGB)内の色を定義します。アルファ成分は任意で、色の透過性を表します。

#### 構文

RGB 色は 16 進表記 (`#` の接頭辞つき) と関数表記 (`rgb()`, `rgba()`) の両方で表現することができます。

> **Note:** CSS Colors Level 4 では、 `rgba()` は `rgb()` の別名です。 Level 4 標準を実装するブラウザーでは、同じ引数を受け取り同じ挙動をします。

- 16 進表記: `#RRGGBB[AA]`
  - : `R` (赤)、 `G` (緑)、 `B` (青) と `A` (アルファ) は 16 進数の文字 (0–9, A–F) です。 `A` は任意です。例えば、 `#ff0000` は `#ff0000ff` と同等です。
- 16 進表記: `#RGB[A]`
  - : `R` (赤)、 `G` (緑)、 `B` (青) と `A` (アルファ) は 16 進数の文字 (0–9, A–F) です。 `A` は任意です。3 桁表記 (`#RGB`) は 6 桁形式 (`#RRGGBB`) を短縮したものです。例えば、 `#f09` は `#ff0099` と同じ色です。同様に、4 桁の RGB 表記 (`#RGBA`) は8桁形式 (`#RRGGBBAA`) を短縮したものです。例えば、 `#0f38` は `#00ff3388` と同じ色です。
- 関数表記: `rgb[a](R, G, B[, A])`
  - : `R` (赤)、 `G` (緑)、 `B` (青) は {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} のどちらかで、`255` が `100%` に対応します。 `A` (アルファ) は `0` と `1` の間の {{cssxref("&lt;number&gt;")}} 、または {{cssxref("&lt;percentage&gt;")}} で、数値 `1` が `100%` (不透明) です。
- 関数表記: `rgb[a](R G B[ / A])`
  - : CSS Colors Level 4 では、関数表記で空白区切りの値の対応が追加されます。

### HSL 色

HSL 色モデルは色相 (H)、彩度 (S)、明度 (L) の各成分によって与えられた[sRGB 色空間](https://en.wikipedia.org/wiki/SRGB)内の色を定義します。アルファ成分は任意で、色の透過性を表します。

HSL は、色相、彩度、明度をそれぞれ独立して調整できるため、RGB よりも直感的であると感じるデザイナーが多いようです。また、HSL を使用することで、同じ色のセットを簡単に作成することができます (同じ色相で複数の影を作成する場合など)。
しかし、HSL を使用して色のバリエーションを作成すると、[知覚的に均一ではない](https://ja.wikipedia.org/wiki/%E8%89%B2%E5%B7%AE#%E8%A8%B1%E5%AE%B9%E5%80%A4)ため、驚くような結果になることがあります。たとえば、 `hsl(240 100% 50%)` と `hsl(60 100% 50%)` は、明度が同じであるにもかかわらず、前者が後者よりもはるかに暗くなります。

#### 構文

HSL 色は関数表記の `hsl()` および `hsla()` を通して表現されます。

> **Note:** CSS Colors Level 4 では、 `hsla()` は `hsl()` の別名です。 Level 4 標準を実装するブラウザーでは、同じ引数を受け取り同じ挙動をします。

- 関数表記: `hsl[a](H, S, L[, A])`

  - : `H` (色相) は色相環の{{cssxref("&lt;angle&gt;", "角度")}}を {{SpecName("CSS4 Colors","#the-hsl-notation")}} で定義されている `deg`、 `rad`、 `grad`、 `turn` の単位で与えます。単位のない{{cssxref("&lt;number&gt;", "数値")}}の場合は、 {{SpecName("CSS3 Colors", "#hsl-color")}} で定められている通り deg (度) として扱われます。定義では、赤=0deg=360deg であり、他の色は、緑=120deg、 青=240deg、 などのように色相環を回ります。 `<angle>` は暗黙的に周回するので、 -120deg=240deg、 480deg=120deg、 -1turn=1turn のようになります。

    `S` (彩度) と `L` (明度) はパーセント表記です。**彩度**`100%`は完全に鮮やかな色で、彩度`0%`は完全に薄い色 (灰色) です。**明度**`100%`は白で、明度`0%`は黒で、明度`50%`は「普通」です。

    `A` (アルファ)は`0`と`1`の間の{{cssxref("&lt;number&gt;")}}、または{{cssxref("&lt;percentage&gt;")}}で、数値`1`が`100%` (不透明) です。

- 関数表記: `hsl[a](H S L[ / A])`
  - : CSS Colors Level 4 では、関数表記で空白区切りの値の対応が追加されます。

### システム色

*色強制モード* ([forced-colors](/ja/docs/Web/CSS/@media/forced-colors) メディアクエリーで検出可能) では、多くの色がユーザーまたはブラウザーが定義したパレットに制約されます。これらのシステム色は以下のキーワードで公開されており、ページの残りの部分が制限されたパレットにうまく合わせられることを保証するために使用することができます。これらの値は他のコンテキストでも使用できますが、ブラウザーの対応は限定的です。

以下のリストにあるキーワードは、 CSS Color Module Level 4 仕様書で定義されています。

> **Note:** なお、これらのキーワードは*大文字小文字を区別しません*が、読みやすさのために大文字小文字を交ぜて表記しています。

- ActiveText
  - : アクティブなリンクのテキスト
- ButtonBorder
  - : コントロールのベースの境界色
- ButtonFace
  - : プッシュボタンの背景
- ButtonText
  - : プッシュボタンのテキスト
- Canvas
  - : アプリケーションのコンテンツや文書の背景
- CanvasText
  - : アプリケーションのコンテンツや文書のテキスト
- Field
  - : 入力フィールドの背景
- FieldText
  - : 入力フィールドのテキスト
- GrayText
  - : 無効なテキスト
- Highlight
  - : コントロールの中で選択されているアイテムの背景
- HighlightText
  - : コントロールの中で選択されているアイテムのテキスト
- LinkText
  - : アクティブではない、訪問していないリンクのテキスト
- Mark
  - : (HTML の `mark` 要素のように) 特別なマークが付けられたテキストの背景
- MarkText
  - : (HTML の `mark` 要素のように) 特別にマークされたテキスト
- VisitedText
  - : 訪問済みのリンクのテキスト

#### 非推奨のシステム色のキーワード

以下のキーワードは、 CSS Color モジュールの初期の版で定義されていました。これらは非推奨になりました。公開ウェブページでの使用は {{deprecated_inline}} です。

- ActiveBorder
  - : アクティブウィンドウの境界線。
- ActiveCaption
  - : アクティブウィンドウのキャプション。 `CaptionText` を前景色として使用してください。
- AppWorkspace
  - : 複数文書インターフェイス (MDI) の背景色。
- Background
  - : デスクトップの背景です。
- ButtonHighlight
  - : 周囲の境界線の層によって立体的に見える 3D 要素の、光源に面した境界線の色です。
- ButtonShadow
  - : 周囲の境界線の層によって立体的に見える 3D 要素の、光源から離れた境界線の色です。
- CaptionText
  - : キャプションの文字列、サイズ変更ボックス、スクロールバーの矢印ボックスの文字列です。 `ActiveCaption` を背景色として使用してください。
- InactiveBorder
  - : 非アクティブウィンドウの境界線です。
- InactiveCaption
  - : 非アクティブウィンドウのキャプションです。 `InactiveCaptionText` を前景色に使用してください。
- InactiveCaptionText
  - : 非アクティブなキャプションの文字列の色です。 `InactiveCaption` を背景色に使用してください。
- InfoBackground
  - : ツールチップコントロールの背景色です。 `InfoText` を前景色に使用してください。
- InfoText
  - : ツールチップコントロールの文字色です。 `InfoBackground` を背景色に使用してください。
- Menu
  - : メニューの背景。 `MenuText` または `-moz-MenuBarText` を前景色に使用してください。
- MenuText
  - : メニュー内の文字列。 `Menu` を背景色に使用してください。
- Scrollbar
  - : スクロールバーの背景色。
- ThreeDDarkShadow
  - : 連続した 2 つの境界線によって立体的に見える 3D 要素の、光源から離れた 2 つの境界線のうち、暗い方 (一般的には外側) の境界線の色。
- ThreeDFace
  - : 連続した 2 つの境界線によって立体的に見える 3D 要素の表面の色。前景色には `ButtonText` を使用してください。
- ThreeDHighlight
  - : 連続した 2 つの境界線によって立体的に見える 3D 要素の、光源に向いた 2 つの境界線のうち、明るい方 (一般的には外側) の色。
- ThreeDLightShadow
  - : 連続した 2 つの境界線によって立体的に見える 3D 要素の、光源に向いた 2 つの境界線のうち、暗い方 (一般的には内側) の色。
- ThreeDShadow
  - : 連続した 2 つの境界線によって立体的に見える 3D 要素の、光源から離れた 2 つの境界線のうち、明るい方 (一般的には内側) の色。
- Window
  - : ウィンドウの背景。 `WindowText` を前景色に使用してください。
- WindowFrame
  - : ウィンドウの枠。
- WindowText
  - : ウィンドウ内の文字列。 `Window` を背景色に使用してください。

### Mozilla システム色拡張

- \-moz-ButtonDefault
  - : ダイアログボックスの既定の動作を表すボタンの周りを囲む境界線の色です。
- \-moz-ButtonHoverFace
  - : マウスポインターが上にある時のボタンの背景色 (マウスポインターが上にない場合は `ThreeDFace` または `ButtonFace`)。 `-moz-ButtonHoverText` の前景色と一緒に使う必要があります。
- \-moz-ButtonHoverText
  - : マウスポインタが上にあるボタンのテキスト色 (マウスポインタが上にない場合は `ButtonText`)。 `-moz-ButtonHoverFace background` の背景色と一緒に使う必要があります。
- \-moz-CellHighlight
  - : ツリーウィジェットで選択された項目の背景色。 `-moz-CellHighlightText` の前景色と一緒に使用する必要があります。 `-moz-html-CellHighlight` も参照。
- \-moz-CellHighlightText
  - : ツリー内で選択された項目のテキスト色。 `-moz-CellHighlight background` の背景色と一緒に使う必要があります。 `-moz-html-CellHighlightText` も参照。
- \-moz-Combobox
  - : コンボボックスの背景色。 `-moz-ComboboxText` の前景色と一緒に使う必要があります。 1.9.2 以前のバージョンでは、代わりに `-moz-Field` を使用してください。
- \-moz-ComboboxText
  - : コンボボックスのテキスト色。 `-moz-Combobox` の背景色と一緒に使う必要があります。 1.9.2 以前のバージョンでは、代わりに `-moz-FieldText` を使用してください。
- \-moz-Dialog
  - : ダイアログボックスの背景色。moz-DialogTextの前景色と一緒に使う必要があります。
- \-moz-DialogText
  - : ダイアログボックスのテキスト色。 `-moz-DialogText` の背景色と一緒に使う必要があります。
- \-moz-dragtargetzone, -moz-EvenTreeRow
  - : ツリー内の偶数行の背景色。 `-moz-FieldText` の前景色と一緒に使う必要があります。 Gecko のバージョン 1.9 より前のバージョンでは、 `-moz-Field` を使用してください。 `-moz-OddTreeRow` も参照してください。
- \-moz-html-CellHighlight
  - : HTML の {{HTMLElement("select")}} における強調表示されたアイテムの背景色。前景色には `-moz-html-CellHighlightText` を使用します。 Gecko 1.9 以前では、 `-moz-CellHighlight` を使用してください。
- \-moz-html-CellHighlightText
  - : HTML の {{HTMLElement("select")}} における強調表示されたアイテムのテキストの色。背景色には `-moz-html-CellHighlight` を使用します。 Gecko 1.9 以前では、 `-moz-CellHighlightText` を使用してください。
- \-moz-mac-accentdarkestshadow, -moz-mac-accentdarkshadow, -moz-mac-accentface, -moz-mac-accentlightesthighlight, -moz-mac-accentlightshadow, -moz-mac-accentregularhighlight, -moz-mac-accentregularshadow
  - : アクセント色です。
- \-moz-mac-chrome-active, -moz-mac-chrome-inactive
  - : 非アクティブおよびアクティブなブラウザーのクロームの色です。
- \-moz-mac-focusring, -moz-mac-menuselect, -moz-mac-menushadow, -moz-mac-menutextselect, -moz-MenuHover
  - : ホバーされたメニュー項目の背景色。 `Highlight` によく似ています。 `-moz-MenuHoverText` や `-moz-MenuBarHoverText` の前景色と一緒に使う必要があります。
- \-moz-MenuHoverText
  - : ホバーされたメニュー項目のテキスト色。 `HighlightText` によく似ています。 `-moz-MenuHover` の背景色と一緒に使う必要があります。
- \-moz-MenuBarText
  - : メニューバーのテキスト色。 `MenuText` によく似ています。 `Menu` の背景の上に使用します。
- \-moz-MenuBarHoverText
  - : メニューバーのホバーされたテキストの色。多くの場合、 `-moz-MenuHoverText` に似ています。 `-moz-MenuHover` 背景の上に使用する必要があります。
- \-moz-nativehyperlinktext
  - : 既定のプラットフォームのハイパーリンク色です。
- \-moz-OddTreeRow
  - : ツリー内の奇数行の背景色。 `-moz-FieldText` の前景色と一緒に使う必要があります。 Gecko のバージョン 1.9 より前のバージョンでは、 `-moz-Field` を使用してください。 `-moz-EvenTreeRow` も参照してください。
- \-moz-win-communicationstext
  - : `{{cssxref("appearance", "-moz-appearance")}}: -moz-win-communications-toolbox;` を持つオブジェクトのテキストに使用する必要があります。
- \-moz-win-mediatext
  - : `{{cssxref("appearance", "-moz-appearance")}}: -moz-win-media-toolbox` を持つオブj稀有とのテキストに使用する必要があります。
- \-moz-win-accentcolor
  - : スタートメニューやタスクバー、タイトルバーなどに設定できる Windows 10 のカスタムアクセント色にアクセスするために使用します。
- \-moz-win-accentcolortext
  - : スタートメニュー、タスクバー、タイトルバーなどの Windows 10 のカスタムアクセント色の上に配置されたテキストの色にアクセスするために使用します。

### Mozilla 色設定拡張

- \-moz-activehyperlinktext
  - : アクティブ化されたリンクの文字色のユーザー設定です。既定の文書の背景色と共に使用されます。
- \-moz-default-background-color
  - : 文書の背景色のユーザー設定です。
- \-moz-default-color
  - : 文字色のユーザー設定です。
- \-moz-hyperlinktext
  - : 未訪問のリンクにおける文字色のユーザー設定です。既定の文書の背景色と共に使用されます。
- \-moz-visitedhyperlinktext
  - : 訪問済みのリンクにおける文字色のユーザー設定です。既定の文書の背景色と共に使用されます。

### Lab 色

CSS Color 4 で Lab 色が導入されました。
Lab 色は、{{cssxref("color_value/lab()","lab()")}} 関数表記で指定します。
Lab 色は、特定の色空間に限定されず、人間の視覚の全領域を表現することができます。

### LCH 色

CSS Color 4 で LCH 色が導入されました。
LCH 色は、{{cssxref("color_value/lch()","lch()")}} という関数記法で指定します。
特定の色空間に限定されず、人間の視覚の全領域を表現することができます。

実は、LCH は Lab の極致です。彩度と色相の構成要素が、混合ではなく、目的の色の質を指定する点で、Lab よりも人間に優しいものです。
この点では HSL と似ていますが、知覚的な均一性ははるかに高いと言えます。
HSL が `hsl(60 100% 50%)` と `hsl(240 100% 50%)` の両方を同じ明るさと表現するのに対し、LCH (および Lab) は、前者 (黄) の L は 97.6、後者 (青) の L は 29.6 と、それぞれ異なる明るさを正しく表現します。
そのため、LCH を使ってまったく異なる色のパレットを作成しても、予測可能な結果が得られます。
なお、LCH の色相は HSL の色相とは異なり、LCH の彩度は HSL の彩度とは異なりますが、概念的には類似していますのでご注意ください。

### color() 色

CSS Color 4 でこの表記が導入されました。
{{cssxref("color_value/color()","color()")}} 関数で指定された色は、定義済みの色空間のほか、[`@color-profile`](/ja/docs/Web/CSS/@color-profile) ルールで定義されたカスタム色空間でも色を指定できます。

## 補間

アニメーションや[グラデーション](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)において、 `<color>` の値は赤、緑、青の成分ごとに補間されます。それぞれの成分は浮動小数点の実数として補間されます。なお、予期しない灰色が現れるのを避けるため、色の補間は[アルファ乗算済み sRGBA 色空間](https://www.gimp.org/docs/plug-in/appendix-alpha.html)で行われます。アニメーションでは補間の速度はアニメーションと関連づけられた[タイミング関数](/ja/docs/Web/CSS/easing-function)によって決められます。

## アクセシビリティの考慮

色を見分けることが難しい人がいます。[WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) 勧告では、色を特定のメッセージ、動作、結果を伝える唯一の手段として使用することを避けるよう強く勧告しています。詳しくは[色と色のコントラスト](/ja/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast)をご覧ください。

## 例

<h3 id="Color_value_tester">色の値のテスター</h3>

この例では、`<div>` とテキスト入力を用意しています。入力欄に有効な色を入力すると、`<div>` にその色が採用され、色の値をテストすることができます。

#### HTML

```html
<div></div>
<hr>
<label for="color">有効な色の値を入力してください:</label>
<input type="text" id="color">
```

#### CSS

```css
div {
  width: 100%;
  height: 200px;
}
```

```js hidden
const inputElem = document.querySelector('input');
const divElem = document.querySelector('div');

function validTextColor(stringToTest) {
  if (stringToTest === "") { return false; }
  if (stringToTest === "inherit") { return false; }
  if (stringToTest === "transparent") { return false; }

  const image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = stringToTest;
  if (image.style.color !== "rgb(0, 0, 0)") { return true; }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = stringToTest;
  return image.style.color !== "rgb(255, 255, 255)";
}

inputElem.addEventListener('change', () => {
  if(validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = '';
  } else {
    divElem.style.backgroundColor = 'white';
    divElem.textContent = 'Invalid color value';
  }
});
```

#### 結果

{{EmbedLiveSample('Color_value_tester','100%', 300)}}

### 様々な RGB 構文

この例は、一つの色を RGB 色構文で生成することができる様々な方法を示しています。

    /* これらの様々な構文は、すべて同じ色、不透明な濃いピンク色を指定します。 */

    /* 16進表記 */
    #f09
    #F09
    #ff0099
    #FF0099

    /* 関数表記 */
    rgb(255,0,153)
    rgb(255, 0, 153)
    rgb(255, 0, 153.0)
    rgb(100%,0%,60%)
    rgb(100%, 0%, 60%)
    rgb(100%, 0, 60%) /* ERROR! 数値とパーセントを混ぜないでください */
    rgb(255 0 153)

    /* アルファ値付き16進表記 */
    #f09f
    #F09F
    #ff0099ff
    #FF0099FF

    /* アルファ値付き関数表記 */
    rgb(255, 0, 153, 1)
    rgb(255, 0, 153, 100%)

    /* 空白区切りの構文 */
    rgb(255 0 153 / 1)
    rgb(255 0 153 / 100%)

    /* 浮動小数点値による実数表記 */
    rgb(255, 0, 153.6, 1)
    rgb(1e2, .5e1, .5e0, +.25e2%)

### RGB の様々な透過性

    /* 16進表記 */
    #3a30                    /* 完全に透明な緑   */
    #3A3F                    /* 完全に不透明な緑 */
    #33aa3300                /* 完全に透明な緑   */
    #33AA3380                /* 50% 半透明な緑   */

    /* 関数表記 */
    rgba(51, 170, 51, .1)    /*  10% 半透明の緑 */
    rgba(51, 170, 51, .4)    /*  40% 半透明の緑 */
    rgba(51, 170, 51, .7)    /*  70% 半透明の緑 */
    rgba(51, 170, 51,  1)    /* 完全に不透明の緑 */

    /* ホワイトスペース区切りの構文 */
    rgba(51 170 51 / 0.4)    /*  40% 半透明の緑 */
    rgba(51 170 51 / 40%)    /*  40% 半透明の緑 */

    /* 実数値の関数構文 */
    rgba(51, 170, 51.6, 1)
    rgba(5.1e1, 1.7e2, 5.1e1, 1e2%)

### 様々な HSL の構文

    /* これらの例はすべて同じ色、ラベンダーを指定します。 */
    hsl(270,60%,70%)
    hsl(270, 60%, 70%)
    hsl(270 60% 70%)
    hsl(270deg, 60%, 70%)
    hsl(4.71239rad, 60%, 70%)
    hsl(.75turn, 60%, 70%)

    /* これらの例はすべて同じ色、15%半透明のラベンダーを指定します。 */
    hsl(270, 60%, 50%, .15)
    hsl(270, 60%, 50%, 15%)
    hsl(270 60% 50% / .15)
    hsl(270 60% 50% / 15%)

### 彩度 100% の色

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">表記</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(0, 100%, 50%)</code></td>
      <td>red</td>
      <td style="background: hsl(0, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(30, 100%, 50%)</code></td>
      <td>orange</td>
      <td style="background: hsl(30, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(60, 100%, 50%)</code></td>
      <td>yellow</td>
      <td style="background: hsl(60, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td>lime green</td>
      <td style="background: hsl(90, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>green</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(150, 100%, 50%)</code></td>
      <td>blue-green</td>
      <td style="background: hsl(150, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(180, 100%, 50%)</code></td>
      <td>cyan</td>
      <td style="background: hsl(180, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(210, 100%, 50%)</code></td>
      <td>sky blue</td>
      <td style="background: hsl(210, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(240, 100%, 50%)</code></td>
      <td>blue</td>
      <td style="background: hsl(240, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(270, 100%, 50%)</code></td>
      <td>purple</td>
      <td style="background: hsl(270, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(300, 100%, 50%)</code></td>
      <td>magenta</td>
      <td style="background: hsl(300, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(330, 100%, 50%)</code></td>
      <td>pink</td>
      <td style="background: hsl(330, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(360, 100%, 50%)</code></td>
      <td>red</td>
      <td style="background: hsl(360, 100%, 50%)"></td>
    </tr>
  </tbody>
</table>

### 様々な明度の緑

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">表記</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 0%)</code></td>
      <td>black</td>
      <td style="background: hsl(120, 100%, 0%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 20%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 20%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 40%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 40%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 60%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 60%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 80%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 80%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 100%)</code></td>
      <td>white</td>
      <td style="background: hsl(120, 100%, 100%)"></td>
    </tr>
  </tbody>
</table>

### 様々な彩度の緑

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">表記</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>green</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 80%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 80%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 60%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 60%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 40%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 40%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 20%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 20%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 0%, 50%)</code></td>
      <td>gray</td>
      <td style="background: hsl(120, 0%, 50%)"></td>
    </tr>
  </tbody>
</table>

### HSL の様々な透過性

    hsla(240, 100%, 50%, .05)     /*   5% 半透明の青 */
    hsla(240, 100%, 50%, .4)      /*  40% 半透明の青 */
    hsla(240, 100%, 50%, .7)      /*  70% 半透明の青 */
    hsla(240, 100%, 50%, 1)       /* 完全に不透明の青 */

    /* ホワイトスペース構文 */
    hsla(240 100% 50% / .05)      /*   5% 半透明の青 */

    /* アルファのパーセント表記 */
    hsla(240 100% 50% / 5%)       /*   5% 半透明の青 */

## 仕様書

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('CSS4 Colors', '#changes-from-3')}}</td>
      <td>{{Spec2('CSS4 Colors')}}</td>
      <td>
        LCH および Lab の色、<code>color()</code> 関数表記、<code>rebeccapurple</code>、4 桁 (<code>#RGBA</code>) および 8 桁 (<code>#RRGGBBAA</code>) の 16 進表記を追加し、<code>rgba()</code> および <code>hsla()</code> を <code>rgb()</code> および <code>hsl()</code> の別名とし (引数の構文を共通化)、関数の空白区切りの引数をカンマの代替とし、アルファ値にパーセント値を追加し、<code>hsl()</code> 色の色相の角度表記を追加。
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS3 Colors', '#colorunits', '&lt;color&gt;')}}
      </td>
      <td>{{Spec2('CSS3 Colors')}}</td>
      <td>
        システム色を非推奨化。 SVG 色を追加。<code>rgba()</code>,
        <code>hsl()</code>, <code>hsla()</code> 関数表記を追加。
      </td>
    </tr>
    <tr style="vertical-align: top">
      <td style="vertical-align: top">
        {{SpecName('CSS2.1', 'syndata.html#value-def-color', '&lt;color&gt;')}}
      </td>
      <td style="vertical-align: top">{{Spec2('CSS2.1')}}</td>
      <td style="vertical-align: top">
        <code>orange</code> キーワードとシステム色を追加。
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        {{SpecName('CSS1', '#color-units', '&lt;color&gt;')}}
      </td>
      <td style="vertical-align: top">{{Spec2('CSS1')}}</td>
      <td style="vertical-align: top">
        初回定義。基本 16 色のキーワードを含む。
      </td>
    </tr>
  </tbody>
</table>

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("opacity")}} プロパティは要素レベルで色の透明度を定義できます。
- このデータ型を使用するよく使われるプロパティ: {{Cssxref("color")}}, {{Cssxref("background-color")}}, {{Cssxref("border-color")}}, {{Cssxref("box-shadow")}}, {{Cssxref("outline-color")}}, {{Cssxref("text-shadow")}}
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
