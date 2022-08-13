---
title: StyleSheetList
slug: Web/API/StyleSheetList
tags:
  - API
  - CSSOM
  - NeedsContent
  - NeedsUpdate
translation_of: Web/API/StyleSheetList
---
<div>{{APIRef("CSSOM")}}</div>

<p><code>StyleSheetList</code> インターフェイスは {{domxref("StyleSheet")}} のリストを表します。</p>

<p>これは配列風のオブジェクトですが、 {{jsxref("Array")}} のメソッドを適用しての反復処理はできません。しかし標準の {{jsxref("Statements/for", "for")}} ループと添字による反復処理、もしくは {{jsxref("Array")}} への変換ができます。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Get_document_styleSheet_objects_with_for_loop" name="Get_document_styleSheet_objects_with_for_loop">for ループを使用して document の <a href="/ja/docs/Web/API/CSSStyleSheet">styleSheet</a> オブジェクトを取得</h3>

<pre class="brush: js">for (let i = 0; i &lt; document.styleSheets.length; i++) {
  let styleSheet = document.styleSheets[i];
}</pre>

<h3 id="Get_all_CSS_rules_for_the_document_using_Array_methods" name="Get_all_CSS_rules_for_the_document_using_Array_methods">Array のメソッドを適用してすべての CSS ルールを取得</h3>

<pre>const allCSS = [...document.styleSheets]
  .map(styleSheet =&gt; {
    try {
      return [...styleSheet.cssRules]
        .map(rule =&gt; rule.cssText)
        .join('');
    } catch (e) {
      console.log('Access to stylesheet %s is denied. Ignoring...', styleSheet.href);
    }
  })
  .filter(Boolean)
  .join('\n');</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>仕様書</th>
   <th>状態</th>
   <th>備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSSOM", "#the-stylesheetlist-interface", 'CSSStyleSheetList')}}</td>
   <td>{{Spec2("CSSOM")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.StyleSheetList")}}</p>
