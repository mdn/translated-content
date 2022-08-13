---
title: API property subpage template
slug: >-
  MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
tags:
  - API
  - Property
  - Template
  - property subpage
  - reference page
  - テンプレート
translation_of: MDN/Structures/Page_types/API_property_subpage_template
original_slug: MDN/Structures/Page_types/API_property_subpage_template
---
<p>{{MDNSidebar}}</p>

<div class="note">
<h2 id="Remove_before_publishing" name="Remove_before_publishing">公開前に削除してください</h2>

<h3 id="Title_and_slug" name="Title_and_slug">タイトルとスラッグ</h3>

<p>API プロパティサブページの<em>タイトル</em>は、<em>インターフェイス名</em> + "." + <em>プロパティ名</em>としてください。例えば、 <a href="/ja/docs/Web/API/VRDisplay">VRDisplay</a> インターフェイスの <a href="/ja/docs/Web/API/VRDisplay/capabilities">capabilities</a> プロパティの<em>タイトル</em> は <em>VRDisplay.capabilities</em> です。</p>

<p><em>スラッグ</em> (URL の最後の部分) は、<em>プロパティ名</em>を記述してください。ですから <code>capabilities</code> のスラッグは <em>capabilities</em> です。</p>

<h3 id="Top_macros" name="Top_macros">先頭で使用するマクロ</h3>

<p>既定では、テンプレートの先頭に4つのマクロ呼び出しがあります。以下のアドバイスに従って、更新や削除をしてください。</p>

<ul>
 <li>\{{APIRef("<em>グループデータ名</em>")}} — これは左端にあるサイドバーを生成し、現在のページに関連するクイックリファレンスのリンクを表示します。例えば、 <a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> の中の各ページは同じサイドバーを持ち、この API 内の他のページを指します。 API で正しいサイドバーを生成するには、 KumaScript の GitHub リポジトリにグループデータの項目を追加し、マクロ呼び出しの中で<em>グループデータ名</em>のところに項目名を入れる必要があります。これを行う方法についてのガイドは <a href="/ja/docs/MDN/Contribute/Structures/API_references/API_reference_sidebars">API リファレンスサイドバー</a>を参照してください。</li>
 <li>\{{SeeCompatTable}} — this generates a <strong>This is an experimental technology</strong> banner that indicates the technology is <a href="/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental">experimental</a>). If the technology you are documenting is not experimental, you can remove this. If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the <a href="/ja/docs/Mozilla/Firefox/Experimental_features">Experimental features in Firefox</a> page.</li>
 <li>\{{SecureContext_Header}} — this generates a <strong>Secure context</strong> banner that indicates the technology is only available in a <a href="/ja/docs/Web/Security/Secure_Contexts">secure context</a>. If it isn't, then you can remove the macro call. If it is, then you should also fill in an entry for it in the <a href="/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts">Features restricted to secure contexts</a> page.</li>
 <li>\{{Deprecated_Header}} — this generates a <strong>Deprecated</strong> banner that indicates the technology is <a href="/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete">deprecated</a>. If it isn't, then you can remove the macro call.</li>
</ul>

<h3 id="Tags" name="Tags">タグ</h3>

<p>In an API method subpage, you need to include the following tags (see the <em>Tags</em> section at the bottom of the editor UI): <strong>API</strong>, <strong>Reference</strong>, <strong>Property</strong>, <em>the name of the API</em> (e.g. <strong>WebVR</strong>), the name of the parent interface (e.g. <strong>VRDisplay</strong>), the name of the method (e.g. <strong>capabilities</strong>), <strong>Experimental</strong> (if the technology is <a href="/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental">experimental</a>), <strong>Secure context</strong> (if it is available in a secure context only), and <strong>Deprecated</strong> (if it is <a href="/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete">deprecated</a>).</p>

<p>Optionally, you can elect to include some other tags that effective represent terms people might search for when looking for information on that technology. For example on WebVR interface pages we include <strong>VR</strong> and <strong>Virtual reality</strong>.</p>

<h3 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h3>

<p>To fill in the browser compat data, you first need to fill in an entry for the API into our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> — see our <a href="/ja/docs/MDN/Contribute/Structures/Compatibility_tables#The_new_way_The_browser_compat_data_repo_and_dynamic_tables">guide on how to do this</a>.</p>

<p>Once that is done, you can show the compat data for the method with a \{{Compat()}} macro call.</p>
</div>

<p>{{APIRef("GroupDataName")}}{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}</p>

<p class="summary">The summary paragraph — start by naming the property, saying what interface it is part of, and saying what it does. This should ideally be 1 or 2 short sentences. You could copy most of this from the property's summary on the corresponding API reference page. Include whether it is read-only or not.</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Fill in a syntax box, according to the guidance in our <a href="/ja/docs/MDN/Contribute/Structures/Syntax_sections">syntax sections</a> article.</pre>

<h3 id="Value" name="Value">値</h3>

<p>Include a description of the property's value, including data type and what it represents.</p>

<h2 id="Examples" name="Examples">例</h2>

<p>Fill in a simple example that nicely shows a typical usage of the property, then perhaps some more complex examples (see our guide on how to add <a href="/ja/docs/MDN/Contribute/Structures/Code_examples">code examples</a> for more information).</p>

<pre class="brush: js; notranslate">my code block</pre>

<p>And/or include a list of links to useful code samples that live elsewhere:</p>

<ul>
 <li>x</li>
 <li>y</li>
 <li>z</li>
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
   <td>{{SpecName("NameOfSpecification", "#document-fragment-linking-directly-to-property-definition", "NameOfTheProperty")}}</td>
   <td>{{Spec2("NameOfSpecification")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility_2" name="Browser_compatibility_2">ブラウザーの互換性</h2>

<p>{{Compat("path.to.feature.NameOfTheProperty")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>Include list of</li>
 <li>other links related to</li>
 <li>this API that might</li>
 <li>be useful</li>
</ul>
