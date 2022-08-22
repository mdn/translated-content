---
title: <use>
slug: Web/SVG/Element/use
tags:
  - Element
  - Reference
  - SVG
  - SVG Graphics
translation_of: Web/SVG/Element/use
---
<div>{{SVGRef}}</div>

<p><strong><code>&lt;use&gt;</code></strong> 要素は SVG 文書の中からノード取り出して、別の場所に複製します。</p>

<div id="Example">
<div class="hidden">
<pre class="brush: css">html,body,svg { height:100% }</pre>
</div>

<pre class="brush: html">&lt;svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;circle id="myCircle" cx="5" cy="5" r="4" stroke="blue"/&gt;
  &lt;use href="#myCircle" x="10" fill="blue"/&gt;
  &lt;use href="#myCircle" x="20" fill="white" stroke="red"/&gt;
  &lt;!--
stroke="red" will be ignored here, as stroke was already set on myCircle.
Most attributes (except for x, y, width, height and (xlink:)href)
do not override those set in the ancestor.
That's why the circles have different x positions, but the same stroke value.
  --&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('Example', 100, 100)}}</p>
</div>

<p>効果は、あたかもそのノードが非公開の DOM に配下を含めて複製され、 HTML5 の <a href="/ja/docs/Web/HTML/Element/template">template 要素</a>のように、 <code>use</code> 要素がある場所に貼り付けられたかのように同じになります。</p>

<p><code>use</code> のほとんどの属性は、 <code>use</code> から<em>参照</em>される要素に既にある属性を上書き<strong>しません</strong>。 (これは CSS のスタイル属性がカスケードで「以前」に設定されたものを上書きする方法とは異なります)。 <code>use</code> 要素にある{{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("href")}} の各属性<strong>のみ</strong>が参照される要素に設定されているものを上書きします。ただし、参照される要素に設定されていない<em>他のすべての属性</em>は、 <code>use</code> 要素に適用<strong>され得ます</strong>。</p>

<p>クローンされたノードは公開されないので、 <a href="/ja/docs/Web/CSS">CSS</a> を使って <code>use</code> 要素とその隠れた子孫要素にスタイル付けをする場合は注意が必要です。<a href="/ja/docs/Web/CSS/inheritance">CSS の継承</a>を使用して明示的に要求しない限り、CSS 属性は隠された複製の DOM によって継承されることが保証されません。</p>

<p>セキュリティ上の理由で、ブラウザーは<a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンポリシー</a>を <code>use</code> 要素に適用して、 {{SVGAttr("href")}} 属性にあるオリジンをまたがる URL を読み込むことを拒否することがあります。現在のところ、 <code>use</code> 要素の同一オリジンポリシーを設定する方法は定義されていません。</p>

<div class="warning">
<p>SVG 2 で {{SVGAttr("xlink:href")}} 属性が非推奨になり、 {{SVGAttr("href")}} に置き換えられました。詳しくは {{SVGAttr("xlink:href")}} のページを参照してください。ただし、 {{SVGAttr("xlink:href")}} はブラウザー間の互換性のために今でも実装する必要があります (下記の<a href="#browser_compatibility">互換性一覧表</a>を参照)。</p>
</div>

<h2 id="Attributes">属性</h2>

<dl>
 <dt id="attr-cx">{{SVGAttr("href")}}</dt>
 <dd>複製する必要がある要素やフラグメントへの URL です。<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#url"><strong>&lt;URL&gt;</strong></a> ; <em>既定値</em>: none; <em>Animatable</em>: <strong>yes</strong></small></dd>
 <dt id="attr-cx">{{SVGAttr("xlink:href")}}</dt>
 <dd>{{Deprecated_Header("SVG2")}}複製する必要がある要素やフラグメントの <a href="/ja/docs/Web/SVG/Content_type#iri">&lt;IRI&gt;</a> 参照です。<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#iri"><strong>&lt;IRI&gt;</strong></a> ; <em>既定値</em>: none; <em>Animatable</em>: <strong>yes</strong></small></dd>
 <dt>{{SVGAttr("x")}}</dt>
 <dd>この use 要素の X 座標です。<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#coordinate"><strong>&lt;coordinate&gt;</strong></a> ; <em>既定値</em>: <code>0</code>; <em>Animatable</em>: <strong>yes</strong></small></dd>
 <dt id="attr-cy">{{SVGAttr("y")}}</dt>
 <dd>この use 要素の Y 座標です。<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#coordinate"><strong>&lt;coordinate&gt;</strong></a> ; <em>既定値</em>: <code>0</code>; <em>Animatable</em>: <strong>yes</strong></small></dd>
 <dt id="attr-r">{{SVGAttr("width")}}</dt>
 <dd>The width of the use element.<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#length"><strong>&lt;length&gt;</strong></a> ; <em>既定値</em>: <code>0</code>; <em>Animatable</em>: <strong>yes</strong></small></dd>
 <dt>{{SVGAttr("height")}}</dt>
 <dd>The height of the use element.<br>
 <small><em>値の型</em>: <a href="/ja/docs/Web/SVG/Content_type#length"><strong>&lt;length&gt;</strong></a> ; <em>既定値</em>: <code>0</code>; <em>Animatable</em>: <strong>yes</strong></small></dd>
</dl>

<div class="note">
<p><strong>注:</strong> <code>width</code> および <code>height</code> は <code>use</code> 要素では効果がありません。ただし、参照される要素に <a href="/ja/docs/Web/SVG/Attribute/viewBox">viewbox</a> がある場合を除きます。 すなわち、 <code>use</code> が <code>svg</code> または <code>symbol</code> 要素を参照していた時だけ効果があります。</p>
</div>

<div class="note">
<p><strong>注:</strong> SVG2 から、 <code>x</code>, <code>y</code>, <code>width</code>, <code>height</code> は<em>位置プロパティ</em>となり、すなわちこれらの属性がその要素への CSS プロパティとしても使用することができるようになりました。</p>
</div>

<h3 id="Global_attributes">グローバル属性</h3>

<dl>
 <dt><a href="/ja/docs/Web/SVG/Attribute/Core">コア属性</a></dt>
 <dd><small>特に: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}</small></dd>
 <dt><a href="/ja/docs/Web/SVG/Attribute/Styling">スタイル属性</a></dt>
 <dd><small>{{SVGAttr('class')}}, {{SVGAttr('style')}}</small></dd>
 <dt><a href="/ja/docs/Web/SVG/Attribute/Conditional_Processing">条件処理属性</a></dt>
 <dd><small>特に: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}</small></dd>
 <dt>イベント属性</dt>
 <dd><small><a href="/ja/docs/Web/SVG/Attribute/Events#global_Event_Attributes">グローバルイベント属性</a>, <a href="/ja/docs/Web/SVG/Attribute/Events#graphical_Event_Attributes">グラフィックイベント属性</a></small></dd>
 <dt><a href="/ja/docs/Web/SVG/Attribute/Presentation">プレゼンテーション属性</a></dt>
 <dd><small>特に: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}</small></dd>
 <dt>ARIA 属性</dt>
 <dd><small><code>aria-activedescendant</code>, <code>aria-atomic</code>, <code>aria-autocomplete</code>, <code>aria-busy</code>, <code>aria-checked</code>, <code>aria-colcount</code>, <code>aria-colindex</code>, <code>aria-colspan</code>, <code>aria-controls</code>, <code>aria-current</code>, <code>aria-describedby</code>, <code>aria-details</code>, <code>aria-disabled</code>, <code>aria-dropeffect</code>, <code>aria-errormessage</code>, <code>aria-expanded</code>, <code>aria-flowto</code>, <code>aria-grabbed</code>, <code>aria-haspopup</code>, <code>aria-hidden</code>, <code>aria-invalid</code>, <code>aria-keyshortcuts</code>, <code>aria-label</code>, <code>aria-labelledby</code>, <code>aria-level</code>, <code>aria-live</code>, <code>aria-modal</code>, <code>aria-multiline</code>, <code>aria-multiselectable</code>, <code>aria-orientation</code>, <code>aria-owns</code>, <code>aria-placeholder</code>, <code>aria-posinset</code>, <code>aria-pressed</code>, <code>aria-readonly</code>, <code>aria-relevant</code>, <code>aria-required</code>, <code>aria-roledescription</code>, <code>aria-rowcount</code>, <code>aria-rowindex</code>, <code>aria-rowspan</code>, <code>aria-selected</code>, <code>aria-setsize</code>, <code>aria-sort</code>, <code>aria-valuemax</code>, <code>aria-valuemin</code>, <code>aria-valuenow</code>, <code>aria-valuetext</code>, <code>role</code></small></dd>
 <dt>XLink 属性</dt>
 <dd><small>{{SVGAttr("xlink:href")}}, {{SVGAttr("xlink:title")}}</small></dd>
</dl>

<h2 id="Usage_notes">使用上の注意</h2>

<p>{{svginfo}}</p>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName('SVG2', 'struct.html#UseElement', '&lt;use&gt;')}}</td>
   <td>{{Spec2('SVG2')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'struct.html#UseElement', '&lt;use&gt;')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("svg.elements.use")}}</p>
