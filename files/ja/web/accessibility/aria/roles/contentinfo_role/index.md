---
title: 'ARIA: contentinfo ロール'
slug: Web/Accessibility/ARIA/Roles/Contentinfo_role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Contentinfo_role
---
<p>コンテンツ情報 (<code>contentinfo</code>) <a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles">ランドマークロール</a>は、著作権情報、ナビゲーションリンク、プライバシーステートメントなど、ウェブサイトの各ページの最後に繰り返される情報を識別するために使用します。 このセクションは一般的にフッターと呼ばれます。</p>

<pre class="brush: html">&lt;div role="contentinfo"&gt;
  &lt;h2&gt;フッター&lt;/h2&gt;
  &lt;!-- フッターのコンテンツ --&gt;
&lt;/div&gt;
</pre>

<p>これはウェブサイトのフッターです。 代わりに {{htmlelement("footer")}} 要素を使用することをお勧めします。</p>

<pre class="brush: html">&lt;footer&gt;
  &lt;h2&gt;フッター&lt;/h2&gt;
  &lt;!-- フッターのコンテンツ --&gt;
&lt;/footer&gt;
</pre>

<h2 id="Description" name="Description">説明</h2>

<p>コンテンツ情報 (<code>contentinfo</code>) ロールは、ページフッターを識別するための<a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles">ランドマーク</a>です。 ランドマークは、支援技術によって使用され、文書の大きなセクションを迅速に識別してナビゲートすることができます。 ページには、1ページあたり1つのトップレベルのコンテンツ情報 (<code>contentinfo</code>) ランドマークロールのみが含まれているべきです。</p>

<p>各ページには、{{htmlelement("footer")}} 要素を使用するか、または <code>role="contentinfo"</code> を宣言することによって作成されたコンテンツ情報 (<code>contentinfo</code>) ランドマークが1つだけ含まれているべきです。 {{htmlelement("iframe")}} 要素を介して埋め込まれたコンテンツに存在するコンテンツ情報 (<code>contentinfo</code>) ランドマークは、この制限に含まれません。</p>

<div class="note">
<p>{{htmlelement("footer")}} 要素を使用すると、自動的にセクションがコンテンツ情報 (<code>contentinfo</code>) ロールを持つことを伝えます。 開発者は、ARIA を使用するよりも正しい意味論の HTML 要素を常に使用するべきで、念のため VoiceOver の<a href="/ja/docs/Web/HTML/Element/footer#accessibility_concerns">既知の問題をテスト</a>してください。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">&lt;body&gt;

  &lt;!-- 他のページのコンテンツ --&gt;

  &lt;div role="contentinfo"&gt;
    &lt;h2&gt;MDN Web Docs&lt;/h2&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#"&gt;ウェブ技術&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;ウェブ開発について学ぶ&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;MDN について&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;フィードバック&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p&gt;© 2005-2018 Mozilla および各貢献者 コンテンツは &lt;a href="#"&gt;これらのライセンス&lt;/a&gt; の下で公開されています。&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
</pre>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティに関する懸念</h2>

<h3 id="Use_sparingly" name="Use_sparingly">控えめに使用する</h3>

<p><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles">ランドマークロール</a>は、文書のより大きな全体的なセクションを識別することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。</p>

<h3 id="One_contentinfo_landmark_per_page" name="One_contentinfo_landmark_per_page">ページあたり1つの <code>contentinfo</code> ランドマーク</h3>

<h4 id="The_&lt;body&gt;_element" name="The_&lt;body&gt;_element"><code>&lt;body&gt;</code> 要素</h4>

<p>{{htmlelement("body")}} 要素の直接の子孫として使用し、文書ごとに1つだけコンテンツ情報 (<code>contentinfo</code>) ランドマークが存在するべきです。</p>

<h4 id="Mega-footers" name="Mega-footers">巨大フッター</h4>

<p>文書のフッターの中に追加の {{htmlelement("footer")}} 要素やコンテンツ情報 (<code>contentinfo</code>) ランドマークをネストしないでください。 代わりに、他の<a href="/ja/docs/Web/HTML/Element#content_sectioning">コンテンツセクショニング要素</a>を使用してください。</p>

<h3 id="Labeling_landmarks" name="Labeling_landmarks">ランドマークのラベル付け</h3>

<h4 id="Multiple_landmarks" name="Multiple_landmarks">複数のランドマーク</h4>

<p>文書に複数のコンテンツ情報 (<code>contentinfo</code>) ランドマークロールや {{htmlelement("footer")}} 要素がある場合は、各ランドマークの <code>aria-label</code> 属性でラベルを指定します。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすばやく理解することができます。</p>

<pre class="brush: html">&lt;body&gt;

  ...

  &lt;article&gt;
    &lt;h2&gt;毎日パッタイ&lt;/h2&gt;
    &lt;!-- 記事のコンテンツ --&gt;
    &lt;footer aria-label="毎日パッタイのメタデータ"&gt;
      &lt;p&gt;&lt;a href="#"&gt;リサ&lt;/a&gt;によって&lt;time datetime="2018-09-23 12:17"&gt;5月16日&lt;/time&gt;に投稿されました。&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/article&gt;

  ...

  &lt;footer aria-label="フッター"&gt;
    &lt;!-- フッターのコンテンツ --&gt;
  &lt;/footer&gt;
&lt;/body&gt;</pre>

<h4 id="Redundant_descriptions" name="Redundant_descriptions">冗長な説明</h4>

<p>スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、<code>aria-label="フッター"</code> の <code>role="contentinfo"</code> の宣言は、"contentinfo フッター" として重複してアナウンスされることがあります。</p>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<h3 id="Prefer_HTML" name="Prefer_HTML">好ましい HTML</h3>

<p>{{htmlelement("body")}} 要素の直接の子孫である場合、{{htmlelement("footer")}} 要素を使用すると、自動的にセクションがコンテンツ情報 (<code>contentinfo</code>) ロールを持つことを伝えます (VoiceOver の<a href="/ja/docs/Web/HTML/Element/footer#accessibility_concerns">既知の問題</a>は別として)。 可能であれば、代わりに <code>&lt;footer&gt;</code> を使用することをお勧めします。 <code>&lt;article&gt;</code>、<code>&lt;aside&gt;</code>、<code>&lt;main&gt;</code>、<code>&lt;nav&gt;</code>、<code>&lt;section&gt;</code> 内にネストされた <code>&lt;footer&gt;</code> 要素は、コンテンツ情報 (<code>contentinfo</code>) とはみなされないことに注意してください。</p>

<h3 id="Added_benefits" name="Added_benefits">追加された利点</h3>

<p>ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、非スクリーンリーダーユーザーは文書の大きなセクションを素早く識別してナビゲートできます。</p>

<ul>
 <li><a href="https://matatk.agrip.org.uk/landmarks/">ランドマークブラウザー拡張</a> (英語)</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#contentinfo","contentinfo landmark role")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
  <tr>
   <td>{{SpecName("ARIA Authoring Practices","#aria_lh_contentinfo","contentinfo landmark role")}}</td>
   <td>{{Spec2('ARIA Authoring Practices')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Screen_reader_support" name="Screen_reader_support">スクリーンリーダーのサポート</h2>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{htmlelement("footer")}}: フッター要素</li>
 <li><a href="https://www.w3.org/TR/wai-aria/#contentinfo">contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1</a></li>
 <li><a href="/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines">HTML のセクションとアウトラインの使用</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles">ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ</a></li>
 <li><a href="https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/">Using WAI-ARIA Landmarks – 2013 | The Paciello Group</a></li>
 <li><a href="https://www.scottohara.me/blog/2018/03/03/landmarks.html">Accessible Landmarks | scottohara.me</a></li>
 <li><a href="http://html5doctor.com/the-footer-element-update/">The Footer Element Update | HTML5 Doctor</a></li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
