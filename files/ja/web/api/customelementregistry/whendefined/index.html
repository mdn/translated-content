---
title: CustomElementRegistry.whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
tags:
  - API
  - CustomElementRegistry
  - Method
  - Reference
  - Web Components
  - custom elements
  - whenDefined
translation_of: Web/API/CustomElementRegistry/whenDefined
---
<p>{{APIRef("CustomElementRegistry")}}</p>

<p><span class="seoSummary">{{domxref("CustomElementRegistry")}} インターフェイスの <code><strong>whenDefined()</strong></code> メソッドは、指定した名前のエレメントが定義されたときに解決される {{jsxref("Promise")}} を返します。</span></p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">Promise&lt;&gt; customElements.whenDefined(<em>name</em>);</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt>name</dt>
 <dd>カスタムエレメントの名前。</dd>
</dl>

<h3 id="返り値">返り値</h3>

<p>カスタムエレメントが定義されたとき、{{jsxref("Promise")}} は {{jsxref("undefined")}} に解決します。カスタムエレメントがすでに定義済みであった場合、promise は即座に解決されます。</p>

<dl>
</dl>

<h3 id="例外">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>SyntaxError</code></td>
   <td>与えられた名前が<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name">有効なカスタムエレメントの名前</a>出ない場合、promise は <code>SyntaxError</code> で reject します。</td>
  </tr>
 </tbody>
</table>

<h2 id="例">例</h2>

<p>以下の例では、<code>whenDefined()</code> を用いてメニューを生成するカスタムエレメントが定義されたタイミングを検出しています。実際にメニューコンテンツの表示準備が完了するまでは、メニューはプレースホルダーのコンテンツを表示します。</p>

<pre class="brush: html">&lt;nav id="menu-container"&gt;
  &lt;div class="menu-placeholder"&gt;読み込み中...&lt;/div&gt;
  &lt;nav-menu&gt;
    &lt;menu-item&gt;Item 1&lt;/menu-item&gt;
    &lt;menu-item&gt;Item 2&lt;/menu-item&gt;
     ...
    &lt;menu-item&gt;Item N&lt;/menu-item&gt;
  &lt;/nav-menu&gt;
&lt;/nav&gt;
</pre>

<pre class="brush: js">const container = document.getElementById('menu-container');
const placeholder = container.querySelector('.menu-placeholder');
// まだ定義されていないメニューの子供を取得する
const undefinedElements = container.querySelectorAll(':not(:defined)');

const promises = [...undefinedElements].map(
  button =&gt; customElements.whenDefined(button.localName)
);

// すべての子供が更新されるまで待ち、
// プレースホルダーを削除する。
await Promise.all(promises);
container.removeChild(placeholder);
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "#dom-customelementregistry-whendefined", "customElements.whenDefined()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<div>
<div>


<p>{{Compat("api.CustomElementRegistry.whenDefined")}}</p>
</div>
</div>
