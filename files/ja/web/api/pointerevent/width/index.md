---
title: PointerEvent.width
slug: Web/API/PointerEvent/width
tags:
  - API
  - DOM
  - Interface
  - PointerEvent
  - Property
  - Reference
translation_of: Web/API/PointerEvent/width
---
<div>{{ APIRef("Pointer Events") }}</div>

<p><span class="seoSummary">{{domxref("PointerEvent")}} インターフェイスの <strong><code>width</code></strong> 読み取り専用プロパティは、CSS ピクセルで測定された、x 軸に沿ったポインタの接触ジオメトリの幅を表します。</span> ポインタデバイスのソース（指など）に応じて、特定のポインタに対して、各イベントは異なる値を生成することがあります。</p>

<p>入力ハードウェアが接触ジオメトリをブラウザーに報告できない場合、幅のデフォルトは <code>1</code> です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>contactWidth</em> = <em>pointerEvent</em>.width;
</pre>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<dl>
 <dt><code>contactWidth</code></dt>
 <dd>イベントの接触面積の幅（CSS ピクセル単位）。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>この例では、{{domxref("PointerEvent")}} インターフェイスの {{domxref("PointerEvent.width","width")}} プロパティと {{domxref("PointerEvent.height","height")}} プロパティを使用して接触面積を計算する方法を示します。</p>

<pre class="brush: js">target.addEventListener("pointerdown", function(ev) {
   // 接触面積を計算する
   var area = ev.width * ev.height;
 }, false);
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events 2','#widl-PointerEvent-width', 'width')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td>不安定版</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#widl-PointerEvent-width', 'width')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PointerEvent.width")}}</p>
