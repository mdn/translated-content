---
title: 'ARIA: article ロール'
slug: Web/Accessibility/ARIA/Roles/Article_Role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Article_Role
---
<p class="summary"><span class="seoSummary">記事 (<code>article</code>) ロールは、ページ、文書、またはウェブサイト上で容易に自立することができるページのセクションを示します。 これは、通常、コメント、フォーラム投稿、新聞記事、または1ページにまとめられたその他項目などの関連コンテンツの項目に設定します。</span></p>

<pre class="brush: html">&lt;div role="article"&gt;
&lt;h2&gt;この断片の見出し&lt;/h2&gt;
&lt;p&gt;この断片の段落。&lt;/p&gt;
&lt;p&gt;別の段落。&lt;/p&gt;
... 記事とインタラクションしたり、共有したり等するためのコントロール ...
&lt;/div&gt;
&lt;div role="article"&gt; ... &lt;/div&gt;
</pre>

<p>この例では、同じように構成され、関連している2つの記事を1ページに並べて表示しています。</p>

<div class="note">
<p>記事 (<code>article</code>) ロールを持つ <code>&lt;div&gt;</code> ではなく、<code>&lt;article&gt;</code> 要素を使用します。 利用可能な場合は、いつでもネイティブの要素を使用します。</p>
</div>

<p><code>role="article"</code> を使用する代わりに、{{htmlelement("article")}} 要素を使用することができます。</p>

<pre class="brush: html">&lt;article&gt;
&lt;h2&gt;この断片の見出し&lt;/h2&gt;
&lt;p&gt;この断片の段落。&lt;/p&gt;
&lt;p&gt;別の段落。&lt;/p&gt;
... 記事とインタラクションしたり、共有したり等するためのコントロール ...
&lt;/article&gt;
&lt;article&gt; ... &lt;/article&gt;
</pre>

<h2 id="Description" name="Description">説明</h2>

<p>記事 (<code>article</code>) ロールは、文書、ページ、サイトのセクションを表し、それが自立している場合は、完全な文書、ページ、サイトとして見ることができます。 一連の記事セクションの目的は、互いの関係を示すことです。</p>

<p>記事は、ナビゲーションに関するランドマークとは見なされませんが、ランドマークをサポートする多くの支援技術は、記事間をナビゲートする手段をサポートします。 また、記事内のネスト関係の表示をサポートすることもあります。</p>

<p>記事をネストすることができ、ネストされた記事は、それをネストしているものと直接関係しますが、必ずしもネスト階層の外側にあるものに関連しているとは限りません。 具体的な使用事例については、例を参照してください。</p>

<p>記事がフィード (feed) の一部である場合、<code>aria-posinset</code> 属性および <code>aria-setsize</code> 属性を設定して、この特定の記事がフィード内のどの位置にあるかを示すことができます。</p>

<p>スクリーンリーダーやその他の支援技術がパススルーモードになるようなアプリケーション (<code>application</code>) やその他のウィジェット内では、記事を使用して、囲まれたコンテンツを再び通常のウェブコンテンツとして扱うように切り替えるべきであることを示すことができます。</p>

<p>意味論のない要素に記事 (<code>article</code>) ロールを含める代わりに、{{htmlelement("article")}} 要素を使用するべきです。 ユーザーエージェントは、これを記事 (<code>article</code>) ロールのような適切なアクセシビリティ情報に変換します。 <code>&lt;article&gt;</code> 要素を使用すると、検索エンジンがページの構造をより適切に見いだすのにも役立ちます。 <code>role="article"</code>、または好ましくは <code>&lt;article&gt;</code> の適切な使用例には、ブログ投稿、フォーラム投稿、フォーラムまたはブログ投稿へのコメント、フォーラムまたはブログ投稿へのコメントへのコメント、ソーシャルメディアフィード内の項目等が含まれます。</p>

<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties" name="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt>aria-posinset</dt>
 <dd>フィードのコンテキストでは、1から始まるカウントに基づいて、そのフィード内のこの特定の記事の位置を示します。</dd>
 <dt>aria-setsize</dt>
 <dd>フィードのコンテキストでは、そのフィード内にいくつの記事の項目があるかを示します。</dd>
</dl>

<h3 id="Keyboard_Interactions" name="Keyboard_Interactions">キーボードインタラクション</h3>

<p>このロールは、具体的なキーボードインタラクションをサポートしていません。</p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<dl>
 <dt>イベントハンドラ</dt>
 <dd>このロールでは、イベントハンドラは必要ありません。</dd>
 <dt>属性値の変更</dt>
 <dd>フィードを作成するときは、各記事 (<code>article</code>) ロールの <code>aria-posinset</code> 属性と <code>aria-setsize</code> 属性を適切な値に設定します。 <code>aria-posinset</code> は、1ベースであることに注意してください。</dd>
</dl>

<div class="note">
<p>常にネイティブの要素を使用してください。 記事 (<code>article</code>) ロールを持つ <code>&lt;div&gt;</code> ではなく、{{htmlelement("article")}} 要素を使用するべきです。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<ul>
 <li>WAI-ARIA Authoring Practices 1.1 の feed のデザインパターンから、<a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/feed/feedDisplay.html">お薦めのレストランのフィード表示</a>とそれと分けられた<a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/feed/feed.html">文書</a></li>
</ul>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#article","article")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
  <tr>
   <td>{{SpecName("ARIA Authoring Practices","#feed","feed")}}</td>
   <td>{{Spec2('ARIA Authoring Practices')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Precedence_order" name="Precedence_order">優先順位</h2>

<p>このロールは、HTML の {{htmlelement("article")}} 要素に対応し、可能な場合はその要素を代わりに使用するべきです。 このロールは、その子たちの間に具体的なロールが存在する必要はありません。 これは、フィード (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Feed_Role">feed</a></code>) ロールを持つ要素の直接の子として許可される唯一のロールです。</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Feed_Role">feed ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Section_Role">section ロール</a></li>
 <li>{{htmlelement("article")}} 要素</li>
 <li><a href="/ja/docs/Glossary/RSS">RSS</a></li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
