---
title: HTMLCollection
slug: Web/API/HTMLCollection
tags:
  - API
  - DOM
  - Element Lists
  - HTMLCollection
  - Interface
  - Reference
translation_of: Web/API/HTMLCollection
---
<p>{{APIRef("DOM")}}</p>

<p><strong><code>HTMLCollection</code></strong> インターフェイスは、 (文書内の順序における) 要素の一般的なコレクション ({{jsxref("Functions/arguments", "arguments")}} のような配列風のオブジェクト) を表し、リストから選択するためのメソッドとプロパティを提供します。</p>

<div class="note"><strong>注:</strong> このインターフェイスは歴史的な理由で <code>HTMLCollection</code> と呼ばれています (現代の DOM より前は、このインターフェイスを実装するコレクションが、アイテムとして HTML 要素しか持てませんでした)。</div>

<p>HTML DOM 内の <code>HTMLCollection</code> は生きて (live) います。それらは元になった document が変更された時点で自動的に更新されます。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("HTMLCollection.length")}} {{readonlyInline}}</dt>
 <dd>collection 内のアイテム数を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("HTMLCollection.item()")}}</dt>
 <dd>リスト内の指定された <code>index</code> (先頭はゼロ) 位置にある特定のノードを返します。<code>index</code> が範囲外なら <code>null</code> を返します。</dd>
 <dd>これは <code>collection[<var>i</var>]</code> のアクセスの代替手段です (こちらは <code><var>i</var></code> が範囲外の場合は <code>undefined</code> を返します)。これは主に、 JavaScript 以外の DOM 実装で有用です。</dd>
 <dt>{{domxref("HTMLCollection.namedItem()")}}</dt>
 <dd><code>name</code> で指定した文字列に ID、または代替として name が一致するノードを返します。name とのマッチングは HTML 限定で、参照した要素が <code>name</code> 属性をサポートする場合に限って、最終手段として行われます。指定した名前のノードがない場合は <code>null</code> を返します。</dd>
 <dd>これは <code>collection[<var>name</var>]</code> のアクセスの代替手段です (こちらは <code><var>name</var></code> が存在しない場合、 <code>undefined</code> を返します)。これは主に、 JavaScript 以外の DOM 実装で有用です。</dd>
</dl>

<h2 id="Usage_in_JavaScript" name="Usage_in_JavaScript">JavaScript での使用法</h2>

<p><code>HTMLCollection</code> は名前やインデックスでも、自身のメンバーをプロパティとして直接公開します。HTML の ID は <code>:</code> や <code>.</code> を有効な文字として含むことができ、これらはプロパティとしてアクセスするために角括弧構文を使用しなければなりません。現在の <code>HTMLCollections</code> は純粋な数値の ID を認識しません。このような ID は配列へのアクセスと競合しますが、HTML5 では許容しています。</p>

<p>例えば、文書内に 1 つの <code>&lt;form&gt;</code> 要素があるものと仮定してください。その <code>id</code> は <code>myForm</code> です。</p>

<pre class="brush:js notranslate">var elem1, elem2;

// document.forms は HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // 表示: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // 表示: "true"

elem1 = document.forms["named.item.with.periods"];</pre>

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
   <td>{{SpecName('DOM WHATWG', '#htmlcollection', 'HTMLCollection')}}</td>
   <td>{{ Spec2('DOM WHATWG') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLCollection")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{domxref("NodeList")}}</li>
 <li>{{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}</li>
</ul>
