---
title: 'ARIA: banner ロール'
slug: Web/Accessibility/ARIA/Roles/Banner_role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Banner_role
---
<p class="summary"><span class="seoSummary">バナー (<code>banner</code>) ロールは、ページの先頭に頻繁に配置される一般的で有益なコンテンツを表します。 これには、通常、ロゴ、会社名、検索アイコン、ページに関連する写真、またはスローガンが含まれます。 </span></p>

<pre class="brush: html">&lt;div role="banner"&gt;
  &lt;img src="companylogo.svg" alt="会社名"/&gt;
  &lt;h1&gt;タイトル&lt;/h1&gt;
  &lt;p&gt;サブタイトル&lt;/p&gt;
&lt;/div&gt;</pre>

<p>HTML5 の {{htmlelement("header")}} 要素は、{{htmlelement("aside")}}、{{htmlelement("article")}}、{{htmlelement("main")}}、{{htmlelement("nav")}}、または {{htmlelement("section")}} の子孫でない限り、バナー (<code>banner</code>) ランドマークと同じ意味を持ちます。</p>

<ul>
</ul>

<h2 id="Description" name="Description">説明</h2>

<p>バナーランドマークロール (<code>banner</code> landmark role) は、それが適用されたコンテナー要素をヘッダーに変換します。 これは、一般的に全てのページの上部にあるサイト全体で共通のサイトヘッダーのコンテンツ用に予約されているべきです。</p>

<p>バナーには、通常ロゴやコーポレートアイデンティティ、おそらくサイト固有の検索ツールが含まれており、一般的にマーケティングチームがサイトのヘッダーやトップバナーと呼ぶものです。 {{htmlelement("header")}} 要素の手法がそのバナーで使用されていない場合は、支援技術に対してバナー (<code>banner</code>) ランドマークを定義するために、<code>role="banner"</code> の宣言を使用するべきです。</p>

<p>支援技術は、{{htmlelement("body")}} 要素の子孫であり、<code>&lt;article&gt;</code>、<code>&lt;aside&gt;</code>、<code>&lt;main&gt;</code>、<code>&lt;nav&gt;</code> または <code>&lt;section&gt;</code> サブセクション内にネストされていない場合、バナーとしてページのメイン <code>&lt;header&gt;</code> 要素を識別できます。</p>

<p>各ページにバナー (<code>banner</code>) ランドマークを持っていてもかまいませんが、各ページはバナー (<code>banner</code>) ロールを持つ <code>&lt;header&gt;</code> を1つだけに限定するべきです。 ネストされた文書 (<code>document</code>) ロールおよび/またはアプリケーション (<code>application</code>) ロールを含むページの場合、ネストされたそれぞれの文書 (<code>document</code>) ロールやアプリケーション (<code>application</code>) ロールも1つのバナー (<code>banner</code>) ランドマークを持つことができます。 ページに複数のバナー (<code>banner</code>) ランドマークが含まれている場合は、それぞれに固有のラベルを付けるべきです。</p>

<h3 id="Associated_ARIA_roles_states_and_properties" name="Associated_ARIA_roles_states_and_properties">関連する ARIA のロール、ステート、プロパティ</h3>

<p>無し</p>

<h3 id="Keyboard_interactions" name="Keyboard_interactions">キーボードインタラクション</h3>

<p>無し</p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<p>無し</p>

<h2 id="Examples" name="Examples">例</h2>

<p>ここでは、ナビゲーションへ飛ぶリンク、ロゴ、タイトル、サブタイトルを含む簡単なバナーがあります。 これがサイトのメインヘッダーであるため、バナー (<code>banner</code>) ランドマークロールをコンテナー要素に追加しています。</p>

<pre class="brush: html">&lt;div role="banner"&gt;
  &lt;a href="#nav" id="skipToMenu" class="skiptocontent"&gt;キーボードナビゲーションへ飛ぶ&lt;/a&gt;
  &lt;img src="images/w3c.png" alt="W3C ロゴ"&gt;
  &lt;h1&gt;ARIA ランドマーク&lt;/h1&gt;
  &lt;p&gt;容易なナビゲーションのためのページのサブセクションの特定&lt;/p&gt;
&lt;/div&gt;</pre>

<p>また、上記の HTML の <code>&lt;header&gt;</code> 要素で記述することもできます。</p>

<pre class="brush: html">&lt;header&gt;
  &lt;a href="#nav" id="skipToMenu" class="skiptocontent"&gt;キーボードナビゲーションへ飛ぶ&lt;/a&gt;
  &lt;img src="images/w3c.png" alt="W3C ロゴ"&gt;
  &lt;h1&gt;ARIA ランドマーク&lt;/h1&gt;
  &lt;p&gt;容易なナビゲーションのためのページのサブセクションの特定&lt;/p&gt;
&lt;/header&gt;</pre>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<p><code>&lt;header&gt;</code> 要素を使用して、ページの任意のサブセクションの子孫でないことを保証するのが最善ですが、場合によっては基になる HTML にアクセスできないことがあります。 この場合、JavaScript を使用してページのメインヘッダーにバナー (<code>banner</code>) ロールを追加できます。 この方法でページのバナーを特定すると、サイトのアクセシビリティが向上します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#banner","ARIA: banner role")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
  <tr>
   <td>{{SpecName("ARIA Authoring Practices","#aria_lh_banner","Banner landmark role")}}</td>
   <td>{{Spec2('ARIA Authoring Practices')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Screen_reader_support" name="Screen_reader_support">スクリーンリーダーのサポート</h2>

<p>TBD</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTML {{htmlelement("header")}} 要素</li>
 <li><a href="https://w3c.github.io/aria-practices/examples/landmarks/banner.html">WC3 Landmarks Example</a></li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
