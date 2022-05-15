---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
tags:
  - API
  - CSSOM
  - Interface
  - Reference
translation_of: Web/API/CSSMediaRule
---
<p>{{ APIRef("CSSOM") }}</p>

<p><strong><code>CSSMediaRule</code></strong> は、1 個の CSS {{cssxref("@media")}} 規則を表すインターフェイスです。これは、{{domxref("CSSConditionRule")}} インターフェイス、さらに {{domxref("CSSGroupingRule")}} インターフェイスと {{domxref("CSSRule")}} インターフェイスのうち型定数の値が <code>4</code> (<code>CSSRule.MEDIA_RULE</code>) のものを実装します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>構文は、<a class="external" href="http://dev.w3.org/2006/webapi/WebIDL/">WebIDL</a> 形式で記述されます。</p>

<pre class="syntaxbox notranslate">interface CSSMediaRule : CSSConditionRule {
    readonly attribute MediaList media;
}
</pre>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p>{{domxref("CSSConditionRule")}}、さらに {{domxref("CSSGroupingRule")}} と {{domxref("CSSRule")}} の両方のインターフェイスを持つため、<code>CSSMediaRule</code> は、これらのインターフェイスのプロパティも実装します。これは、次の固有のプロパティを持ちます:</p>

<dl>
 <dt>{{domxref("CSSMediaRule.media")}} {{readonlyinline()}}</dt>
 <dd>スタイル情報のための、意図された対象の媒体を表す {{domxref("MediaList")}} を指定します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p>{{domxref("CSSConditionRule")}}、さらに {{domxref("CSSGroupingRule")}} と {{domxref("CSSRule")}} の両方のインターフェイスを持つため、<code>CSSMediaRule</code> は、これらのインターフェイスのメソッドも実装します。固有のメソッドはありません。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{ SpecName('CSS3 Conditional', '#the-cssmediarule-interface', 'CSSMediaRule') }}</td>
   <td>{{ Spec2('CSS3 Conditional')}}</td>
   <td>{{domxref("CSSConditionRule")}} から派生。</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSSOM', '#the-cssmediarule-interface', 'CSSMediaRule') }}</td>
   <td>{{ Spec2('CSSOM') }}</td>
   <td>{{SpecName('DOM2 Style')}} からの変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Style', 'css.html#CSS-CSSMediaRule', 'CSSMediaRule') }}</td>
   <td>{{ Spec2('DOM2 Style') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.CSSMediaRule")}}</p>
