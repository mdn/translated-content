---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
tags:
  - Attribute
  - Editing
  - Forms
  - Global attributes
  - HTML
  - Input
  - Reference
  - Text
  - Web
  - contenteditable
  - global
  - inputmode
  - text input
translation_of: Web/HTML/Global_attributes/inputmode
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p><span class="seoSummary"><strong><code>inputmode</code></strong> は<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>で、ユーザーが要素やその内容を編集する際に入力されるデータの型のヒントとなる列挙型属性です。</span>下記の値が存在します。</p>

<dl>
 <dt><code>none</code></dt>
 <dd>仮想キーボードなし。ページが独自のキーボード入力を実装している場合のためのものです。</dd>
 <dt><code>text</code> (既定値)</dt>
 <dd>ユーザーの現在のロケールにおける標準的な入力キーボードです。</dd>
 <dt><code>decimal</code></dt>
 <dd>実数を入力するキーボードで、数字とユーザーのロケール上で適切な区切り文字 (ふつうは <kbd>.</kbd> または <kbd>,</kbd>) を含みます。負号キー (<kbd>-</kbd>) を表示するかどうかは端末によります。</dd>
 <dt><code>numeric</code></dt>
 <dd>数字を入力するキーボードですが、数字の 0 から 9 までのみを必要とするものです。負号キーを表示するかどうかは端末によります。</dd>
 <dt><code>tel</code></dt>
 <dd>電話番号を入力するテンキーで、 0 から 9 までの数字と、アスタリスク (<kbd>*</kbd>)、シャープ (<kbd>#</kbd>) キーがあります。電話番号を<em>要求する</em>入力欄は、ふつうは代わりに <code>{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}</code> を使用してください。</dd>
 <dt><code>search</code></dt>
 <dd>検索入力に最適化された仮想キーボードです。例えば、 <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute">return/submit</a> キーのラベルが「検索」になっていたり、他の最適化が行われている可能性もあります。検索クエリを<em>要求する</em>入力欄は、ふつうは代わりに <code>{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}</code> を使用してください。</dd>
 <dt><code>email</code></dt>
 <dd>電子メールアドレスの入力に最適化された仮想キーボードです。ふつう <kbd>@</kbd> の文字を含むなどの他の最適化が行われます。メールアドレスの入力を<em>要求する</em>入力欄は、ふつうは代わりに <code>{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}</code> を使用してください。</dd>
 <dt><code>url</code></dt>
 <dd>URL の入力に最適化された仮想キーボードです。例えば <kbd>/</kbd> キーが目立つ場所に配置されているなどです。履歴へのアクセス機能などの拡張機能が含まれている場合もあります。 URL の入力を<em>要求する</em>入力欄は、ふつうは代わりに <code>{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}</code> を使用してください。</dd>
</dl>

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
   <td>{{SpecName("HTML WHATWG", "interaction.html#input-modalities:-the-inputmode-attribute", "inputmode")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.global_attributes.inputmode")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>一覧</li>
</ul>
