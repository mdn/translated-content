---
title: element.id
slug: Web/API/Element/id
tags:
  - DOM
  - Gecko
translation_of: Web/API/Element/id
---
<div>{{ApiRef}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>要素の 識別子 (identifier) を取得 / 設定します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>idStr</var> =<em>element</em>.id; // 取得
<em>element</em>.id = <var>idStr</var>; // 設定
</pre>

<h2 id="Notes" name="Notes">注意</h2>

<p>ID は文書内でユニークでなくてはならず、{{domxref("document.getElementById")}} を使って要素を取り出すために使われることがあります。仮に文法を無視して同一 <code>id</code> の要素が文書内に複数存在する場合、このメソッドは最初の要素を取得します。</p>

<p>document によっては(特に <a href="/ja/docs/Web/HTML">HTML</a> 、 <a href="/ja/docs/XUL">XUL</a> 、<a href="/ja/docs/SVG">SVG</a>)、要素の <code>id</code> は次のような要素の属性として指定することができます: <code>&lt;div id="part_3"&gt;</code>.</p>

<p>但しカスタム XML 文書に於いては、<code>id</code> 属性の型を DOCTYPE で定められたとおりに正しく指定しなければなりません。詳細については『<a href="http://blog.bitflux.ch/wiki/GetElementById_Pitfalls">getElementById Pitfalls (getElementById の落とし穴)</a>』をご覧下さい。</p>

<p><code>id</code> 属性は、<a href="/ja/docs/CSS">スタイルシート</a>でスタイルを適用するために要素を参照する要素でも用いられます。スタイルシート内から特定の要素を参照するには、HTML に指定した <code>id</code> 属性値の先頭に <code>#</code> を付けます。</p>

<pre class="brush:css">#thisID {
  background: darkblue;
  color; ghostwhite;
}</pre>

<p><code>id</code> 属性はケースセンシティブ……即ち、大文字と小文字を区別するという点に注意して下さい。つまり、 "<code>thisID</code>" と "<code>ThisID</code>" は別の <code>id</code> として扱われ、それぞれ別の要素を指し示す識別子となります (参照 : <a href="/ja/docs/Case_Sensitivity_in_class_and_id_Names">class 属性 / id 属性 / name 属性はケースセンシティブである</a>)</p>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-63534901', 'id')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<p> </p>
