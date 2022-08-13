---
title: 'ARIA: figure ロール'
slug: Web/Accessibility/ARIA/Roles/Figure_Role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Figure_Role
---
<p>ARIA の図表 (<code>figure</code>) ロールは、適切な意味論がまだ存在しないページコンテンツ内の図表を識別するために使用できます。 図表は一般的に、正規のテキストの流れとは異なる方法で情報を伝える、1つ以上の画像、コードスニペット、またはその他のコンテンツと見なされます。</p>

<pre class="brush: html">&lt;div role="figure" aria-labelledby="caption"&gt;
  &lt;img src="image.png"
      alt="画像の完全な代替説明"&gt;
  &lt;p id="caption"&gt;図表 1: キャプション&lt;/p&gt;
&lt;/div&gt;
</pre>

<p>上記の例では、画像とキャプションという2つの別々のコンテンツ項目で構成される図表があります。 これは、<code>role="figure"</code> を使用してコンテンツを図表として識別する {{htmlelement("div")}} 要素で囲まれています。</p>

<p>図表の作成に ARIA を使用する代わりに、ネイティブで意味論的な HTML {{htmlelement("figure")}} 要素を {{htmlelement("figcaption")}} 要素と共に使用することを検討してください。 以下の<a href="#best_practices">ベストプラクティス</a>をご覧ください。</p>

<h2 id="Description" name="Description">説明</h2>

<p>(画像、動画、音声、コードスニペット、または他のコンテンツを含む可能性がある) 図表としてまとめて消費されるべきコンテンツは、 <code>role="figure"</code> を使用して図表として識別できます。</p>

<p>図表のコンテンツをどのように書くべきかについての鉄則はありません。 他のコンテンツと同様にアクセスできることを確認するべきです。 例えば、支援技術のユーザーによって知覚できることや、キーボードやマウスでナビゲートできることなどを確認します。</p>

<p>さまざまな方法で、図表にキャプションやラベルを追加できます。 次のように、図表を説明するコンテンツを含む要素に ID を追加し、その ID を図表の適切な属性内で参照して、図表をラベルに関連付けることができます。</p>

<pre class="brush: html">&lt;div role="figure" aria-labelledby="figure-1"&gt;
  ...
  &lt;p id="figure-1"&gt;図表を説明するテキスト。&lt;/p&gt;
&lt;/div&gt;</pre>

<ul>
 <li>テキストが簡潔なラベルである場合は、<code>aria-labelledby</code> を使用してください。</li>
 <li>テキストがより長い説明である場合は、<code>aria-describedby</code> を使用してください。</li>
</ul>

<p>ここでも、ARIA 無しで、HTML の {{htmlelement("figure")}} 要素と {{htmlelement("figcaption")}} 要素を使用して、意味論的に行うことができます。</p>

<pre class="brush: html">&lt;figure&gt;
  ...
  &lt;figcaption&gt;図表を説明するテキスト。&lt;/figcaption&gt;
&lt;/figure&gt;</pre>

<p>ラベルを画面に表示したくないが、支援技術のユーザーにわかりやすいラベルを提供したい場合は、図表コンテナーに <code>aria-label</code> 属性を使用できます。</p>

<pre class="brush: html">&lt;div role="figure" aria-label="図表を説明するテキスト。"&gt;
  ...
&lt;/div&gt;</pre>

<p><code>aria-label</code> は <code>&lt;figure&gt;</code> と一緒に使うことができます。</p>

<pre class="brush: html">&lt;figure aria-label="図表を説明するテキスト。"&gt;
  ...
&lt;/figure&gt;</pre>

<p>一般的には、本文から図表を参照するべきですが、図表は参照元の要素と同じ場所に表示する必要はありません。</p>

<div class="note">
<p><strong>注</strong>: 可能な限り、適切な意味論の HTML 要素を使用して図表とそのキャプション ({{htmlelement("figure")}} と {{htmlelement("figcaption")}}) をマークアップするべきです。 詳しくは、<a href="#best_practices">ベストプラクティス</a>を参照してください。</p>
</div>


<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties" name="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt>aria-describedby</dt>
 <dd>キャプションとしての参照テキストを含む要素の id。</dd>
 <dt>aria-labelledby</dt>
 <dd>ラベルとしてのテキストを含む要素の id。</dd>
 <dt>aria-label</dt>
 <dd>ラベルになるようなテキストを含む要素がない場合は、図表 (<code>figure</code>) ロールを持つ要素や <code>&lt;figure&gt;</code> 要素の <code>aria-label</code> の値として直接ラベルを追加できます。</dd>
</dl>

<h3 id="Keyboard_Interactions" name="Keyboard_Interactions">キーボードインタラクション</h3>

<p>ロールに固有のキーボードインタラクションはありません。</p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<p>ロールに固有の JavaScript 要件はありません。 HTML の意味論を制御できない場合は、JavaScript でこれらのロールとプロパティを追加することで、HTML のアクセシビリティを向上させることができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>次のように、ページの最初の例を拡張して、<code>aria-labelledby</code> でその ID を参照することにより、図表の説明的なラベルを提供する段落を特定することもできます。</p>

<pre>&lt;div role="figure" aria-labelledby="figure-1"&gt;
  &lt;img src="diagram.png"
       alt="素晴らしい4つの層と相対的な優先順位を示すダイヤグラム —
            音楽、猫、自然、そしてアイスクリーム"&gt;
  &lt;pre&gt;&lt;code&gt;
    let awesome = ['音楽', '猫', '自然', 'アイスクリーム'];
  &lt;/code&gt;&lt;/pre&gt;
  &lt;p id="figure-1"&gt;図表 1: 素晴らしい4つの層。&lt;/p&gt;
&lt;/div&gt;</pre>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<p>必要な場合にのみ <code>role="figure"</code> を使用してください。 例えば、HTML を制御できないが、JavaScript を使用して事後に動的にアクセシビリティを向上させることができる場合などです。</p>

<p>可能であれば、適切な意味論の HTML 要素を使用して、図表とそのキャプション ({{htmlelement("figure")}} と {{htmlelement("figcaption")}}) をマークアップするべきです。 例えば、上記の例は次のように書き直すべきです。</p>

<pre class="brush: html">&lt;figure&gt;
  &lt;img src="diagram.png"
       alt="素晴らしい4つの層と相対的な優先順位を示すダイヤグラム —
       音楽、猫、自然、そしてアイスクリーム"&gt;
  &lt;pre&gt;&lt;code&gt;
    let awesome = ['音楽', '猫', '自然', 'アイスクリーム'];
  &lt;/code&gt;&lt;/pre&gt;
  &lt;figcaption&gt;図表 1: 素晴らしい4つの層。&lt;/figcaption&gt;
&lt;/figure&gt;</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#figure","figure")}}</td>
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
 <li><a href="/ja/docs/Web/HTML/Element/figure">HTML &lt;figure&gt; 要素</a></li>
 <li><a href="/ja/docs/Web/HTML/Element/figcaption">HTML &lt;figcaption&gt; 要素</a></li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
