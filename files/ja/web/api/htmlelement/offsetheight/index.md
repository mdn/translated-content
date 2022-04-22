---
title: HTMLElement.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
tags:
  - API
  - CSSOM View
  - Property
  - Reference
translation_of: Web/API/HTMLElement/offsetHeight
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><span class="seoSummary"><strong><code>HTMLElement.offsetHeight</code></strong> 読み取り専用プロパティは、垂直パディングや境界線を含む要素の高さを整数として返します。</span></p>

<p>通常、<code>offsetHeight</code> は、境界線、パディング、および水平スクロールバー（レンダリングされている場合）を含む、要素の CSS height のピクセル単位の測定値です。 <code>::before</code> や <code>::after</code> などの擬似要素の高さは含まれません。 ドキュメントの body オブジェクトの場合、測定値には、要素の CSS height ではなく、線形コンテンツの高さの合計が含まれます。 他の線形コンテンツの下に広がる浮動要素は無視されます。</p>

<p>（例えば、要素またはその祖先のいずれかで <code>style.display</code> を <code>"none"</code> に設定することにより）要素が非表示の場合、<code>0</code> が返されます。</p>

<div class="note">
<p>このプロパティは、値を整数に丸めます。 小数値が必要な場合は、{{ domxref("element.getBoundingClientRect()") }} を使用します。</p>
</div>

<h2 id="Syntax_and_values" name="Syntax_and_values">構文</h2>

<pre class="syntaxbox">var <em>intElemOffsetHeight</em> = <em>element</em>.offsetHeight;</pre>

<p><code><em>intElemOffsetHeight</em></code> は、要素の <code>offsetHeight</code> ピクセル値に対応する整数を格納する変数です。 <code>offsetHeight</code> プロパティは読み取り専用です。</p>

<h2 id="Example" name="Example">例</h2>

<p>             <img alt="Image:Dimensions-offset.png" class="internal" src="/@api/deki/files/186/=Dimensions-offset.png"></p>

<p>上のサンプル画像は、スクロールバーにより、ウィンドウに収まる場合の <code>offsetHeight</code> を示しています。 ただし、スクロールできない要素には、目に見えるコンテンツよりもはるかに大きい大きな <code>offsetHeight</code> 値が含まれる場合があります。 これらの要素は通常、スクロール可能な要素内に含まれています。 その結果、これらの非スクロール要素は、スクロール可能なコンテナの <code>scrollTop</code> の設定に応じて、完全にまたは部分的に非表示になる場合があります。</p>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSSOM View', '#dom-htmlelement-offsetheight', 'offsetHeight')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h3 id="Notes" name="Notes">ノート</h3>

<p><code>offsetHeight</code> は、MSIE によって最初に導入された <abbr title="Dynamic HyperText Markup Language">DHTML</abbr> オブジェクトモデルのプロパティです。 要素の物理的/グラフィカルな寸法、または要素の境界ボックスの高さ（border-box height）と呼ばれることもあります。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.offsetHeight")}}</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>{{domxref("Element.clientHeight")}}</li>
 <li>{{domxref("Element.scrollHeight")}}</li>
 <li>{{domxref("HTMLElement.offsetWidth")}}</li>
 <li><a href="/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements" title="/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements">要素の寸法の決定</a></li>
 <li><a href="https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)">MSDN 要素の寸法と位置の測定</a>（英語）</li>
</ul>
