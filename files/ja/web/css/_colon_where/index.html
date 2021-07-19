---
title: ':where()'
slug: 'Web/CSS/:where'
tags:
  - ':where'
  - CSS
  - Experimental
  - NeedsBrowserCompatibility
  - NeedsContent
  - NeedsExample
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
  - Web
  - セレクター
  - 擬似クラス
translation_of: 'Web/CSS/:where'
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p><strong><code>:where()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>関数で、選択肢列挙を引数として取り、列挙されたセレクターのうちの何れかに当てはまるすべての要素を選択します。</p>

<p><code>:where()</code> と {{CSSxRef(":is", ":is()")}} の違いは、 <code>:where()</code> は<a href="/ja/docs/Web/CSS/Specificity">詳細度</a>が常に 0 であるのに対して、 <code>:is()</code> は引数内で最も詳細度の高いセレクターの詳細度を取ります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Comparing_where_and_is" name="Comparing_where_and_is">:where() と :is() の比較</h3>

<p>この例では <code>:where()</code> がどのように作用するのかを示し、 <code>:where()</code> と <code>:is()</code> の違いも説明しています。</p>

<p>以下のような HTML を想定してください。</p>

<pre class="brush: html notranslate">&lt;article&gt;
  &lt;h2&gt;:is()-styled links&lt;/h2&gt;
  &lt;section class="is-styling"&gt;
    &lt;p&gt;Here is my main content. This &lt;a href="https://mozilla.org"&gt;contains a link&lt;/a&gt;.
  &lt;/section&gt;

  &lt;aside class="is-styling"&gt;
    &lt;p&gt;Here is my aside content. This &lt;a href="https://developer.mozilla.org"&gt;also contains a link&lt;/a&gt;.
  &lt;/aside&gt;

  &lt;footer class="is-styling"&gt;
    &lt;p&gt;This is my footer, also containing &lt;a href="https://github.com/mdn"&gt;a link&lt;/a&gt;.
  &lt;/footer&gt;
&lt;/article&gt;

&lt;article&gt;
  &lt;h2&gt;:where()-styled links&lt;/h2&gt;
  &lt;section class="where-styling"&gt;
    &lt;p&gt;Here is my main content. This &lt;a href="https://mozilla.org"&gt;contains a link&lt;/a&gt;.
  &lt;/section&gt;

  &lt;aside class="where-styling"&gt;
    &lt;p&gt;Here is my aside content. This &lt;a href="https://developer.mozilla.org"&gt;also contains a link&lt;/a&gt;.
  &lt;/aside&gt;

  &lt;footer class="where-styling"&gt;
    &lt;p&gt;This is my footer, also containing &lt;a href="https://github.com/mdn"&gt;a link&lt;/a&gt;.
  &lt;/footer&gt;
&lt;/article&gt;</pre>

<p>このやや矛盾した例では、2つの記事があり、それぞれがセクション、脇、フッターを含んでいます。これらの記事は、子要素をマークするために使われるクラスによって異なります。</p>

<p>中のリンクの選択をより簡単にして、しかし区別できるようにするために、次のように <code>:is()</code> や <code>:where()</code> を使うことが<em>できます</em>。</p>

<pre class="brush: css notranslate">html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}</pre>

<p>しかし、後からシンプルなセレクターを使ってフッターのリンクの色を上書きしたい場合はどうすればいいのでしょうか？</p>

<pre class="brush: css notranslate">footer a {
  color: blue;
}</pre>

<p>これは赤いリンクに作用しません。 <code>:is()</code> の中のセレクターは全体のセレクターの詳細度で算出され、クラスセレクターは要素セレクターよりも高い詳細度を持っているからです。</p>

<p>しかし、 <code>:where()</code> 内のセレクターは詳細度が 0 なので、オレンジ色のフッターリンクは単純セレクターによって上書きされてしまいます。

</p><p>結果は以下で見ることができます (ただし、現在のところ <code>:is()</code> と <code>:where()</code> は既定では Firefox Nightly のバージョン 77 以降では有効になっているだけで、他のバージョンの Firefox では <code>layout.css.is-where-selectors.enabled</code> の設定で隠されています)。</p>

<p><strong>注</strong>: この例は GitHub からも見ることができます。 <a href="https://mdn.github.io/css-examples/is-where/">is-where</a> を参照してください。</p>

<p>{{EmbedLiveSample('Examples', '100%', 600)}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

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
   <td>{{SpecName("CSS4 Selectors", "#zero-matches", ":where()")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.selectors.where")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef(":is", ":is()")}} {{Experimental_Inline}}</li>
 <li><a href="/ja/docs/Web/CSS/Selector_list">選択子列挙</a></li>
 <li><a href="/ja/docs/Web/Web_Components">ウェブコンポーネント</a></li>
</ul>
