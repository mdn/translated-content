---
title: CDATASection
slug: Web/API/CDATASection
tags:
  - API
  - DOM
  - Deprecated
translation_of: Web/API/CDATASection
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>CDATA セクション</strong></code>内では、通常の文字として XML 内に記述する場合に実態参照として記述する必要がある &lt; や &amp; など（※本来これらは <code>&amp;lt;</code> や <code>&amp;amp;</code> のように記述する必要がある）を、エスケープ無しでそのまま記述する事ができます。</p>

<p>構文は以下のような形となります。</p>

<pre class="syntaxbox">&lt;![CDATA[  ... ]]&gt;
</pre>

<p>実際の使用例を以下に示します。</p>

<pre class="brush:xml">&lt;foo&gt;次の部分は CDATA セクションです: &lt;![CDATA[  &lt; &gt; &amp; ]]&gt; ... その他にも、通常エスケープが必要な文字を全てエスケープ無しで記述可能。&lt;/foo&gt;
</pre>

<p><code>]]&gt;</code> は CDATA セクション自体の終了部分として解釈される為、このシーケンスのみは CDATA セクションに記述する事が出来ません。例えば以下の様な記述はエラーとなるでしょう。</p>

<pre class="brush:xml">&lt;![CDATA[  ]]&gt; 任意のテキスト   ]]&gt;
</pre>

<p>CDATA セクションは（非表示のものを除き）HTML 内で使用されるべきではないことに注意してください。XML でのみ使用可能です。</p>

<p>CDATA セクション自体は固有のプロパティやメソッドは持ちません。{{domxref("Text")}} インタフェースに実装されたメソッドとプロパティを利用する事ができます。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>仕様</th>
   <th>状態</th>
   <th>コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-core-changes', 'CDATASection')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td><a href="https://github.com/whatwg/dom/pull/295">issue #295</a> のため再度追加された。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-667469212', 'CDATASection')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>{{SpecName('DOM2 Core')}} からの変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-667469212', 'CDATASection')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>{{SpecName('DOM1')}} からの変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-667469212', 'CDATASection')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>最初の定義</td>
  </tr>
 </tbody>
</table>
