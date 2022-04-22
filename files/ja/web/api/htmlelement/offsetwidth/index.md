---
title: HTMLElement.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
tags:
  - API
  - CSSOM View
  - Property
  - Read-only
  - Reference
translation_of: Web/API/HTMLElement/offsetWidth
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><span class="seoSummary"><code><strong>HTMLElement.offsetWidth</strong></code> 読み取り専用プロパティは、要素のレイアウト幅を整数として返します。</span></p>

<p>通常、<code>offsetWidth</code> は、境界線、パディング、および垂直スクロールバー（レンダリングされている場合）を含む、要素の CSS width のピクセル単位の測定値です。 <code>::before</code> や <code>::after</code> などの擬似要素の幅は含まれません。</p>

<p>（例えば、要素またはその祖先のいずれかで <code>style.display</code> を <code>"none"</code> に設定することにより）要素が非表示の場合、<code>0</code> が返されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>intElemOffsetWidth</em> = <em>element</em>.offsetWidth;
</pre>

<p><code>intElemOffsetWidth</code> は、要素の <code>offsetWidth</code> ピクセル値に対応する整数を格納する変数です。 <code>offsetWidth</code> プロパティは読み取り専用です。</p>

<div class="note">
<p>このプロパティは、値を整数に丸めます。 小数値が必要な場合は、{{ domxref("element.getBoundingClientRect()") }} を使用します。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<p><img alt="Image:Dimensions-offset.png" class="internal" src="/@api/deki/files/186/=Dimensions-offset.png"></p>

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
   <td>{{SpecName('CSSOM View', '#dom-htmlelement-offsetwidth', 'offsetWidth')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h3 id="Notes" name="Notes">ノート</h3>

<p><code>offsetWidth</code> は、MSIE によって最初に導入された <abbr title="Dynamic HyperText Markup Language">DHTML</abbr> オブジェクトモデルのプロパティです。 要素の物理的/グラフィカルな寸法、または要素の境界ボックスの幅（border-box width）と呼ばれることもあります。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.offsetWidth")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element.clientWidth")}}</li>
 <li>{{domxref("Element.scrollWidth")}}</li>
 <li><a href="/ja/docs/Determining_the_dimensions_of_elements">要素の寸法の決定</a></li>
</ul>
