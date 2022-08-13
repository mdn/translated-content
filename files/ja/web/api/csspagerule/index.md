---
title: CSSPageRule
slug: Web/API/CSSPageRule
tags:
  - API
  - CSSOM
  - Interface
  - Reference
translation_of: Web/API/CSSPageRule
---
<div>{{APIRef("CSSOM")}}</div>

<p><strong><code>CSSPageRule</code></strong> は、1 個の CSS {{cssxref("@page")}} 規則を表すインターフェイスです。これは、型定数の値が <code>6</code> (<code>CSSRule.PAGE_RULE</code>) の {{domxref("CSSRule")}} インターフェイスを実装します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>構文は、<a class="external" href="http://dev.w3.org/2006/webapi/WebIDL/">WebIDL</a> 形式で記述されます。</p>

<pre class="syntaxbox">interface CSSPageRule : CSSRule {
  attribute DOMString selectorText;
  readonly attribute CSSStyleDeclaration style;
};
</pre>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p>{{domxref("CSSRule")}} として、<code>CSSPageRule</code> は、このインターフェイスのプロパティも実装します。これは、次の固有のプロパティを持ちます:</p>

<dl>
 <dt>{{domxref("CSSPageRule.selectorText")}}</dt>
 <dd>@-規則に関連付けられたページセレクターのテキストを表す。</dd>
 <dt>{{domxref("CSSPageRule.style")}} {{readonlyinline}}</dt>
 <dd>@-規則に関連付けられた宣言ブロックを返す。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p>{{domxref("CSSRule")}} として、<code>CSSPageRule</code> は、このインターフェイスのメソッドも実装します。固有のメソッドはありません。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSSOM', '#the-csspagerule-interface', 'CSSPageRule')}}</td>
   <td>{{Spec2('CSSOM')}}</td>
   <td>{{SpecName('DOM2 Style')}} からの変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Style', 'css.html#CSS-CSSPageRule', 'CSSPageRule')}}</td>
   <td>{{Spec2('DOM2 Style')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<p>{{Compat("api.CSSPageRule")}}</p>
