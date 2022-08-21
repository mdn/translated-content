---
title: CanvasPattern
slug: Web/API/CanvasPattern
tags:
  - API
  - Canvas
  - Interface
  - Reference
translation_of: Web/API/CanvasPattern
---
<div>{{APIRef("Canvas API")}}</div>

<p><code><strong>CanvasPattern</strong></code> インターフェースは、{{domxref("CanvasRenderingContext2D.createPattern()")}} メソッドによって（画像、 canvas 要素、video 要素をもとに）生成される不透明なオブジェクトです。</p>

<h2 id="プロパティ">プロパティ</h2>

<p><em>不透明なオブジェクトを表し、公開されたプロパティはありません。</em></p>

<h2 id="メソッド">メソッド</h2>

<p><em>継承されたメソッドはありません。</em></p>

<dl>
 <dt>{{domxref("CanvasPattern.setTransform()")}} {{experimental_inline}}</dt>
 <dd>パターンに線形の変化を表す {{domxref("SVGMatrix")}} を適用する。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', "the-canvas-element.html#canvaspattern", "CanvasPattern")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>v5 で <code>setTransform()</code> メソッドを追加。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.CanvasPattern")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{domxref("CanvasRenderingContext2D.createPattern()")}}</li>
 <li>The {{HTMLElement("canvas")}} 要素と関連するインターフェースである {{domxref("HTMLCanvasElement")}}</li>
</ul>
