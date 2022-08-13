---
title: 'ARIA: form ロール'
slug: Web/Accessibility/ARIA/Roles/Form_Role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Form_Role
---
<p>フォーム (<code>form</code>) <a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles">ランドマークロール</a>は、HTML のフォームと同等の機能を提供するページ上の要素のグループを識別するために使用できます。</p>

<pre class="brush: html">&lt;div role="form" id="contact-info" aria-label="連絡先"&gt;
  &lt;!-- フォームのコンテンツ --&gt;
&lt;/div&gt;
</pre>

<p>これは、ユーザーの連絡先を収集して保存するフォームです。</p>

<div class="warning">
<p><strong>重要</strong>: 十分に正当な理由がない限り、ARIA の フォーム (<code>form</code>) ロールではなく、HTML の {{htmlelement("form")}} 要素を使用してフォームコントロールを格納してください。 HTML の <code>&lt;form&gt;</code> 要素は、支援技術にフォームがあることを伝えるのに十分です。</p>
</div>

<h2 id="Description" name="Description">説明</h2>

<p>フォーム (<code>form</code>) ランドマーク (<a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles">landmark</a>) は、(メイン (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Main_role">main</a></code>) や検索 (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Search_role">search</a></code>) など) 他の名前付きランドマークが適切でない場合に、全体として結合してフォームを作成する、項目とオブジェクトのコレクションを含むコンテンツのリージョンを識別します。</p>

<div class="note">
<p>{{htmlelement("form")}} 要素を使用すると、アクセス可能な名前が提供されている場合、コンテンツのセクションがフォーム (<code>form</code>) ランドマークとして自動的に伝えられます。 開発者は、ARIA を使用するよりも正しい意味論の HTML 要素を使用することを常に好むべきです。</p>
</div>

<p>可能であれば、HTML の {{htmlelement("form")}} 要素を使用してください。 <code>&lt;form&gt;</code> 要素は、アクセス可能な名前 (<code>aria-labelledby</code>、<code>aria-label</code>、<code>title</code> など) がある場合にフォーム (<code>form</code>) ランドマークを定義します。 ユーザーがフォームの目的を理解できるように、文書内の各フォームに一意のラベルを付けるようにしてください。 このラベルは、支援技術のユーザーだけでなく、全てのユーザーに表示するべきです。 フォームを検索機能に使用する場合は、フォーム (<code>form</code>) ランドマークの代わりに検索 (<code>search</code>) ランドマークを使用してください。</p>

<p><code>role="form"</code> は、ページのリージョンを識別するために使用し、フォームフィールドそれぞれを識別するために使用しないでください。 <code>&lt;form&gt;</code> の代わりにフォーム (<code>form</code>) ランドマークを使用している場合でも、<code>&lt;button&gt;</code>、<code>&lt;input&gt;</code>、<code>&lt;select&gt;</code>、<code>&lt;textarea&gt;</code> などのネイティブな HTML フォームコントロールを使用することをお勧めします。</p>

<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties" name="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<p>ロールに固有のステートやプロパティはありません。</p>

<h3 id="Keyboard_Interactions" name="Keyboard_Interactions">キーボードインタラクション</h3>

<p>ロールに固有のキーボードインタラクションはありません。</p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<dl>
 <dt><code>onsubmit</code></dt>
 <dd>onSubmit イベントハンドラーは、フォームの送信時に発生するイベントを処理します。 <code>&lt;form&gt;</code> でないものは送信できないため、JavaScript を使用して、{{domxref("XMLHTTPRequest")}} などの代替データ送信メカニズムを構築する必要があります。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">&lt;div role="form" id="send-comment" aria-label="コメントを追加"&gt;
  &lt;label for="username"&gt;ユーザー名&lt;/label&gt;
  &lt;input id="username" name="username" autocomplete="nickname" autocorrect="off" type="text"&gt;

  &lt;label for="email"&gt;電子メール&lt;/label&gt;
  &lt;input id="email" name="email" autocomplete="email" autocapitalize="off" autocorrect="off" spellcheck="false" type="text"&gt;

  &lt;label for="comment"&gt;コメント&lt;/label&gt;
  &lt;textarea id="comment" name="comment"&gt;&lt;/textarea&gt;

  &lt;input value="コメント" type="submit"&gt;
&lt;/div&gt;
</pre>

<p>代わりに <code>&lt;form&gt;</code> を使用することをお勧めします。</p>

<pre class="brush: html">&lt;form id="send-comment" aria-label="コメントを追加"&gt;
  ....
&lt;/form&gt;
</pre>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティに関する懸念</h2>

<h3 id="Use_sparingly" name="Use_sparingly">控えめに使用する</h3>

<p><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles">ランドマークロール</a>は、文書のより大きな全体的なセクションを識別することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。</p>

<h3 id="Inputs_are_not_forms" name="Inputs_are_not_forms">入力はフォームではない</h3>

<p><a href="/ja/docs/Web/HTML/Element#forms">フォーム要素</a>（入力、テキスト領域、選択など）それぞれで <code>role="form"</code> を宣言する必要はありません。 それは、フォーム要素を包む HTML 要素で宣言するべきです。 理想的には、包む要素として {{htmlelement("form")}} 要素を使用し、<code>role="form"</code> を宣言しないでください。</p>

<h3 id="Search" name="Search">検索</h3>

<p>フォームを検索に使用する場合は、より専門化した <code>role="search"</code> 値を使用するべきです。</p>

<h3 id="Labeling_landmarks" name="Labeling_landmarks">ランドマークのラベル付け</h3>

<p>ランドマークとして公開する必要がある、それぞれの {{htmlelement("form")}} 要素とフォームロール (form <code>role</code>) には、アクセス可能な名前を付ける必要があります。 この名前により、支援技術のユーザーはフォームランドマークの目的をすばやく理解できるようになります。</p>

<p><code>role="form"</code> を与えたのと同じ要素で、<code>aria-labelledby</code>、<code>aria-label</code>、または <code>title</code> を使用して、アクセス可能な名前を付けます。</p>

<h4 id="Using_roleform" name="Using_roleform"><code>role="form"</code> の使用</h4>

<pre class="brush: html">&lt;div role="form" id="gift-cards" aria-label="ギフトカードの購入"&gt;
  &lt;!-- フォームのコンテンツ --&gt;
&lt;/div&gt;</pre>

<h4 id="Redundant_descriptions" name="Redundant_descriptions">冗長な説明</h4>

<p>スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、<code>role="form"</code> の宣言に <code>aria-label="お問い合わせフォーム"</code> を使用した場合、「お問い合わせフォームフォーム」として重複してアナウンスすることがあります。</p>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<h3 id="Prefer_HTML" name="Prefer_HTML">好ましい HTML</h3>

<p>{{htmlelement("form")}} 要素を使用すると、セクションがフォーム (<code>form</code>) ロールを持つことを自動的に伝えます。 可能であれば、<code>&lt;form&gt;</code> を代わりに使用することをお勧めします。</p>

<h3 id="Added_benefits" name="Added_benefits">追加された利点</h3>

<p>ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、スクリーンリーダーを使用していないユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。</p>

<ul>
 <li><a href="https://matatk.agrip.org.uk/landmarks/">ランドマークブラウザー拡張</a>（英語）</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#form","ARIA Form Role")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
  <tr>
   <td>{{SpecName("ARIA Authoring Practices","#aria_lh_form","Role Form")}}</td>
   <td>{{Spec2('ARIA Authoring Practices')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Screen_reader_support" name="Screen_reader_support">スクリーンリーダーのサポート</h2>

<p>TBD</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{htmlelement("form")}}: フォーム要素</li>
 <li>{{htmlelement("legend")}}: 凡例要素</li>
 <li><a href="https://www.w3.org/TR/wai-aria/#form">form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1</a></li>
 <li><a href="/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines">HTML のセクションとアウトラインの使用</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles">ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ</a></li>
 <li><a href="https://www.scottohara.me/blog/2018/03/03/landmarks.html">Accessible Landmarks | scottohara.me</a></li>
 <li><a href="https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/">Using WAI-ARIA Landmarks – 2013 | The Paciello Group</a></li>
</ul>

<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
