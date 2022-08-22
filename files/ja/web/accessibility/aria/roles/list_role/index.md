---
title: 'ARIA: list ロール'
slug: Web/Accessibility/ARIA/Roles/List_role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/List_role
---
<p><span class="seoSummary">ARIA のリスト (<code>list</code>) ロールは、項目のリストを識別するために使用できます。 これは通常、リスト内に含まれるリスト項目を識別するために使用するリスト項目 (<code>listitem</code>) ロールと組み合わせて使用します。</span></p>

<pre class="brush: html">&lt;section role="list"&gt;
  &lt;div role="listitem"&gt;リスト項目 1&lt;/div&gt;
  &lt;div role="listitem"&gt;リスト項目 2&lt;/div&gt;
  &lt;div role="listitem"&gt;リスト項目 3&lt;/div&gt;
&lt;/section&gt;
</pre>

<h2 id="Description" name="Description">説明</h2>

<p>外側のコンテナーとその内側の要素のリストで構成されるコンテンツは、それぞれリスト (<code>list</code>) とリスト項目 (<code>listitem</code>) のコンテナーを使用して支援技術で識別できます。 リスト (<code>list</code>) は、1つ以上のリスト項目 (<code>listitem</code>) の子を持つか、代わりに1つ以上のグループ (<code>group</code>) が子として存在し、各グループ (<code>group</code>) が1つ以上のリスト項目 (<code>listitem</code>) を子として持つ必要があります。</p>

<p>リストとリスト項目をマークアップするためにどの要素を使用するべきかについて、鉄則はありませんが、リスト項目がリストのコンテキストで意味をなすようにするべきです (例えば、買い物リスト、料理の手順、運転の指示) 。</p>

<div class="notecard warning">
<h4>警告</h4>
<p>可能な限り、適切な意味論の HTML 要素を使用して、リストとそのリスト項目 ({{htmlelement("ul")}} や {{htmlelement("ol")}} と {{htmlelement("li")}}) をマークアップするべきです。 詳しい例は、<a href="#best_practices">ベストプラクティス</a>を参照してください。</p>
</div>

<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties" name="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Listitem_role">listitem</a></dt>
 <dd>
 <p>リストやディレクトリー内の単一項目。 リスト項目ロールを持つ要素は、リスト (<code>list</code>) ロールやグループ (<code>group</code>) ロールを持つ要素内にのみ存在します。</p>
 </dd>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role">group</a></dt>
 <dd>
 <p>ページの目次に掲載されるほど重要ではなく、リスト内にネストされている場合はリスト項目に限定される、関連するオブジェクトのコレクションです。</p>
 </dd>
</dl>

<h3 id="Keyboard_Interactions" name="Keyboard_Interactions">キーボードインタラクション</h3>

<p>無し</p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<p>無し</p>

<h2 id="Examples" name="Examples">例</h2>

<p> <a href="https://www.scottohara.me/blog/2018/05/26/aria-lists.html">ARIA Lists</a> — Scott O'Hara によるいくつかの有用な例と考え (英語)</p>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<p><code>role="list"</code> と <code>role="listitem"</code> は必要な場合のみ使用してください。 例えば、HTML を制御できなくても、JavaScript で事後に動的にアクセシビリティを向上させることができる場合です。</p>

<p>HTML の {{htmlelement("ol")}} と {{htmlelement("ul")}} とは異なり、ARIA のリスト (<code>list</code>) ロールは順序付きリストと順序無しリストを区別しません。 可能な場合は、リスト ({{htmlelement("ol")}} と {{htmlelement("ul")}}) とリスト項目 ({{htmlelement("li")}}) をマークアップするのに適切な意味論の HTML 要素を使用するべきです。 例えば、上記の例は次のように書き直すべきです。</p>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;リスト項目 1&lt;/li&gt;
  &lt;li&gt;リスト項目 2&lt;/li&gt;
  &lt;li&gt;リスト項目 3&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>また、リスト項目の順序が重要な場合は、順序付きリストを使用します。</p>

<pre class="brush: html">&lt;ol&gt;
  &lt;li&gt;リスト項目 1&lt;/li&gt;
  &lt;li&gt;リスト項目 2&lt;/li&gt;
  &lt;li&gt;リスト項目 3&lt;/li&gt;
&lt;/ol&gt;</pre>

<div class="note">
<p><strong>注</strong>: ARIA のリストロールとリスト項目ロールでは、順序付きリストと順序無しリストを区別しません。</p>
</div>

<p>余談ですが、意味論的な HTML 要素である <code>ol</code> または <code>ul</code> を使用してプレゼンテーション (<code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role">presentation</a></code>) ロールを適用する場合、ARIA ではリスト項目 (<code>listitem</code>) 要素に親のリスト (<code>list</code>) 要素が必須であるため、各子 <code>li</code> 要素はプレゼンテーション (<code>presentation</code>) ロールを継承することに注意してください。 そのため、<code>li</code> 要素は支援技術には公開されませんが、ネストされたリストを含め、これらの <code>li</code> 要素の内部に含まれる要素は、支援技術からは見えることになります。</p>

<div class="note">
<p><strong>注</strong>: タブ付きインターフェイスとして機能する項目のリストをマークアップする場合は、代わりにタブ (<code>tab</code>)、タブパネル (<code>tabpanel</code>)、タブリスト (<code>tablist</code>) のロールを使用するべきです。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#list","list")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Screen_reader_support" name="Screen_reader_support">スクリーンリーダーのサポート</h2>

<p>TBD</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://wicg.github.io/aom/spec/">Accessibility Object Model</a></li>
 <li><a href="https://w3c.github.io/html-aria/">ARIA in HTML</a></li>
 <li><span class="ILfuVd yZ8quc">{{htmlelement("ul")}}</span></li>
 <li><span class="ILfuVd yZ8quc">{{htmlelement("ol")}}</span></li>
 <li><span class="ILfuVd yZ8quc">{{htmlelement("li")}}</span></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Listitem_role">ARIA: listitem ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role">ARIA: group ロール</a></li>
</ul>

<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
