---
title: SVGRect
slug: Web/API/SVGRect
tags:
  - API
  - Reference
  - SVG
  - SVG DOM
translation_of: Web/API/SVGRect
---
<div>{{APIRef("SVG")}}</div>

<p id="sect1"><strong><code>SVGRect</code></strong> は矩形を表します。矩形は、最小の x の値と最小の y の値を特定する x と y の座標の対と、幅と、高さから構成されており、これらは、非負であるものと考えられます。</p>

<p><strong><code>SVGRect</code></strong> オブジェクトは、読み取り専用だと指定することができます。そのことは、そのオブジェクトをいじろうとする試みによって、例外が投げられるという結果になるだろう、ということを意味します。</p>

<p>{{InheritanceDiagram(600, 140)}}</p>

<h2 id="属性">属性</h2>

<dl>
 <dt>{{domxref("SVGRect.x")}}</dt>
 <dd>この座標の厳密な結果は、各要素に依存します。もしこの属性が指定済みでなければ、結果は、あたかも <code>0</code> という値が指定されているかのようになります。</dd>
 <dt>{{domxref("SVGRect.y")}}</dt>
 <dd>この座標の厳密な結果は、各要素に依存します。もしこの属性が指定済みでなければ、結果は、あたかも <code>0</code> という値が指定されているかのようになります。</dd>
 <dt>{{domxref("SVGRect.width")}}</dt>
 <dd>これは矩形の幅を表します。負の値はエラーを招きます。0 という値は要素の描画を無効にします。</dd>
 <dt>{{SVGAttr("SVGRect.height")}}</dt>
 <dd>これは矩形の高さを表します。負の値はエラーを招きます。0 という値は要素の描画を無効にします。</dd>
</dl>

<h2 id="メソッド">メソッド</h2>

<p><em>このインタフェースは、親から、すなわち </em><em>{{domxref("SVGGeometryElement")}} から、メソッドを継承しています。</em></p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("Geometry Interfaces", "#DOMRect", "DOMRect")}}</td>
   <td>{{Spec2("Geometry Interfaces")}}</td>
   <td>SVGRect を DOMRect の古い別名として変更。</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "shapes.html#InterfaceSVGRectElement", "SVGRectElement")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("api.SVGRect")}}</p>
