---
title: HTMLElement.dataset
slug: Web/API/HTMLElement/dataset
tags:
  - API
  - HTML DOM
  - HTMLElement
  - HTMLElement
  - Property
  - Read-only
  - Reference
  - SVG
  - SVG Custom Attributes
  - SVG2
  - SVGElement
  - dataset
  - プロパティ
  - 読取専用
translation_of: Web/API/HTMLElement/dataset
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>dataset</code></strong> は {{DOMxRef("HTMLElement")}} インターフェイスのプロパティで、要素に設定されたすべての<a href="/ja/docs/Web/HTML/Global_attributes#attr-data-*">カスタムデータ属性</a> (<code>data-*</code>) への読み取り/書き込みアクセスを提供します。</span> このアクセスは、 HTML と DOM の両方の中で利用できます。これは {{domxref("DOMString")}} のマップ ({{domxref("DOMStringMap")}}) で、1つのカスタムデータ属性が1つのエントリに対応します。なお、 <code>dataset</code> プロパティ自体は読み取ることができますが、直接書き込むことはできません。代わりに、すべての書き込みは <code>dataset</code> 内の個々のプロパティに対して行われる必要があり、それはデータ属性を表します。また、 HTML の <strong><code>data-</code></strong><em>属性</em>とそれに対応する DOM <code>dataset.</code><em>プロパティ</em>　は同じ名前を共有しませんが、次のように常に近いものになります。</p>

<ul>
 <li>HTML のカスタムデータ属性の名前は、 <code>data-</code> で始まります。 文字、数字、およびダッシュ (<code>-</code>)、ドット (<code>.</code>)、コロン (<code>:</code>)、アンダースコア (<code>_</code>) のみを含める必要がありますが、 ASCII 大文字の <code>A</code> から <code>Z</code> は使用できません。</li>
 <li>JavaScript のカスタムデータ属性の名前は、同じ HTML 属性の名前ですが、キャメルケース (camelCase) であり、ダッシュ、ドットなどは含みません。</li>
</ul>

<p>以下の情報に加えて、<a href="/ja/docs/Learn/HTML/Howto/Use_data_attributes">データ属性の使用</a>の記事に、HTML データ属性の使用方法に関するガイドがあります。</p>

<h3 id="Name_conversion" name="Name_conversion">名前変換</h3>

<p><strong>ダッシュスタイルからキャメルケースへ:</strong> カスタムデータ属性名は、次のルールに従って {{ domxref("DOMStringMap") }} エントリのキーに変換されます。</p>

<ul>
 <li>プレフィックスの <code>data-</code> が (ダッシュを含め) 削除されます。</li>
 <li>ダッシュ (<code>U+002D</code>) に ASCII 小文字の <code>a</code> から <code>z</code> が続く場合、ダッシュは削除され、文字は対応する大文字に変換されます。</li>
 <li>他の文字 (他のダッシュを含む) は変更されません。</li>
</ul>

<p><strong>キャメルケースからダッシュスタイルへ:</strong> キーを属性名にマッピングする逆の変換では、次のルールが使用されます。</p>

<ul>
 <li>制約事項: ダッシュの直後に ASCII 小文字 <code>a</code> から <code>z</code> を続けてはなりません (変換前)。</li>
 <li>接頭辞として <code>data-</code> が追加されます。</li>
 <li>ASCII 大文字の <code>A</code> から <code>Z</code> は、ダッシュと、その後に対応する小文字が続くものに変換されます。</li>
 <li>他の文字は変更されません。</li>
</ul>

<p>上記の規則の制約事項により、2つの変換が互いに逆変換になります。</p>

<p>例えば、<code>data-abc-def</code> という名前の属性は、キー <code>abcDef</code> に対応します。</p>

<ul>
</ul>

<h3 id="Accessing_values" name="Accessing_values">値へのアクセス</h3>

<ul>
 <li>属性は dataset のオブジェクトプロパティのようにキャメルケース名 (キー) を使用して、 <code><em>element.</em>dataset.<em>keyname</em></code> のように設定したり読み取ったりすることができます。</li>
 <li>属性はブラケット構文を使用して、 <code><em>element.</em>dataset[<em>keyname</em>]</code> のように設定したり読み取ったりすることもできます。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> 演算子</a>を使用して、特定の属性が存在するかどうかを確認できます。</li>
</ul>

<h3 id="Setting_values" name="Setting_values">値の設定</h3>

<ul>
 <li>属性が設定されると、その値は常に文字列に変換されます。 例えば、<code>null</code> は文字列 "null" に変換されます。</li>
 <li>属性を削除する場合は、<a href="/ja/docs/Web/JavaScript/Reference/Operators/delete"><code>delete</code> 演算子</a>を使用できます。</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">const <em>dataAttrMap</em> = <em>element</em>.dataset
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("DOMStringMap")}} です。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">&lt;div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth&gt;John Doe&lt;/div&gt;</pre>

<pre class="brush: js">const el = document.querySelector('#user');

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

// データ属性の設定
el.dataset.dateOfBirth = '1960-10-03';
// 結果: el.dataset.dateOfBirth === 1960-10-03

delete el.dataset.dateOfBirth;
// 結果: el.dataset.dateOfBirth === undefined

// 'someDataAttr' in el.dataset === false
el.dataset.someDataAttr = 'mydata';
// 結果: 'someDataAttr' in el.dataset === true
</pre>

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
   <td>{{SpecName('HTML WHATWG', "dom.html#dom-dataset", "HTMLElement.dataset")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "dom.html#dom-dataset", "HTMLElement.dataset")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>{{SpecName('HTML WHATWG')}} のスナップショット、 {{SpecName('HTML5 W3C')}} からの変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "dom.html#dom-dataset", "HTMLElement.dataset")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>{{SpecName('HTML WHATWG')}} のスナップショット、初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLElement.dataset")}}</p>

<div class="hidden">Please change the compat macro's paramter to <code>api.HTMLElement.dataset</code> after BCD is updated.</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTML の <code><a href="/ja/docs/Web/HTML/Global_attributes/data-*"><strong>data-*</strong></a></code> クラスのグローバル属性</li>
 <li><a href="/ja/docs/Learn/HTML/Howto/Use_data_attributes">データ属性の使用</a></li>
 <li>{{domxref("Element.getAttribute()")}} および {{domxref("Element.setAttribute()")}}</li>
</ul>
