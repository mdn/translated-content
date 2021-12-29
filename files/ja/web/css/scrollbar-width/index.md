---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
tags:
  - CSS
  - CSS Property
  - CSS スクロールバー
  - CSS プロパティ
  - Reference
  - css scrollbars
  - 'recipe:css-property'
  - scrollbar-width
translation_of: Web/CSS/scrollbar-width
---
<div>{{CSSRef}}</div>

<p><strong><code>scrollbar-width</code></strong> プロパティは、要素のスクロールバーが表示される時の最大の太さを設定することができます。</p>

<div>{{EmbedInteractiveExample("pages/css/scrollbar-width.html")}}</div>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css notranslate">/* キーワード値 */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* グローバル値 */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><var>&lt;scrollbar-width&gt;</var></dt>
 <dd>スクロールバーの幅を、長さまたはキーワードのどちらかで定義します。キーワードが使用する場合は、以下の値のうちの一つでなければなりません。
 <table class="standard-table">
  <tbody>
   <tr>
    <td><code>auto</code></td>
    <td>プラットフォーム既定のスクロールバーの幅です。</td>
   </tr>
   <tr>
    <td><code>thin</code></td>
    <td>プラットフォームが提供している細いスクロールバー、またはプラットフォーム既定のスクロールバーの幅よりも細いスクロールバーです。</td>
   </tr>
   <tr>
    <td><code>none</code></td>
    <td>スクロールバーが表示されませんが、要素はスクロール可能です。</td>
   </tr>
  </tbody>
 </table>

 <div class="note">
 <p><strong>注</strong>: ユーザーエージェントは、ビューポートのルート要素に何らかの <code>scrollbar-width</code> の値を設定する必要があります。</p>
 </div>
 </dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css notranslate">.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: thin;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div class="scroller"&gt;Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.&lt;/div&gt;</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮事項</h2>

<p>このプロパティは注意して使用してください。 — <code>scrollbar-width</code> を <code>thin</code> または <code>none</code> に設定すると、作者が別なスクロールの仕組みを提供していない限り、スクロールすることが困難または不可能になります。そのようなコンテンツはスワイプのジェスチャーやマウスホイールでスクロールできるものの、端末によっては代替スクロール手段がないことがあります。</p>

<p>WCAG 基準 2.1.1 (キーボード) は、長らく基本的なキーボードのアクセシビリティを勧告してきており、これはコンテンツ領域のスクロールも含みます。また、 WCAG 2.1 で導入された基準 2.5.5 (対象の寸法) では、タッチ対象の幅と高さを 44px 以上にすることを推奨しています (ただし、この問題は高解像度の画面ではさらに複雑になるため、十分なテストが必要です)。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.1_%E2%80%94_Keyboard_Accessible_Make_all_functionality_available_from_a_keyboard">MDN WCAG の理解、ガイドライン 2.1 の説明</a></li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.5_Input_Modalities_Make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard.s/">MDN WCAG の理解、ガイドライン 2.5 の説明</a></li>
 <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard">Understanding Success Criterion 2.1.1 | W3C Understanding WCAG 2.1</a></li>
 <li><a class="external" href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html" rel="noopener">Understanding Success Criterion 2.5.5 | W3C Understanding WCAG 2.1</a></li>
</ul>

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
   <td>{{SpecName("CSS Scrollbars", "#scrollbar-width", "scrollbar-width")}}</td>
   <td>{{Spec2("CSS Scrollbars")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.scrollbar-width")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("-ms-overflow-style")}}</li>
 <li>{{CSSxRef("::-webkit-scrollbar")}}</li>
</ul>
