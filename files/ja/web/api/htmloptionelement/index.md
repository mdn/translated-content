---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
translation_of: Web/API/HTMLOptionElement
---
<div>{{APIRef("HTML DOM")}}</div>

<p><strong><code>HTMLOptionElement</code></strong> インターフェイスは {{HTMLElement("option")}} 要素を表し、 {{domxref("HTMLElement")}} インターフェイスのすべてのクラスとメソッドを継承しています。</p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties">プロパティ</h2>

<p><em>親である {{domxref("HTMLElement")}} からプロパティを継承しています。</em></p>

<dl>
 <dt>{{domxref("HTMLOptionElement.defaultSelected")}}</dt>
 <dd><code>true</code> または <code>false</code> の値を取り、選択肢が既定で選択されているかどうかを示す HTML の {{htmlattrxref("selected", "option")}} 属性の初期値を表します。</dd>

 <dt>{{domxref("HTMLOptionElement.disabled")}}</dt>
 <dd><code>true</code> または <code>false</code> の値を取り、その選択肢が選択できないことを示す HTML の {{htmlattrxref("disabled", "option")}} 属性の値を表します。選択肢は無効状態の {{HTMLElement("optgroup")}} 要素の子である場合も無効になります。</dd>

 <dt>{{domxref("HTMLOptionElement.form")}} {{readonlyInline}}</dt>
 <dd>{{domxref("HTMLFormElement")}} で、この選択肢が {{HTMLElement("select")}} 要素の子孫であった場合は、対応する {{HTMLElement("select")}} 要素の <code>form</code> と同じ値を表します。見つからない場合は null になります。</dd>

 <dt>{{domxref("HTMLOptionElement.index")}} {{readonlyInline}}</dt>
 <dd><code>long</code> 値で、所属する選択肢のリスト内におけるツリー順の位置を表します。その選択肢がリストに含まれていない場合、例えば {{HTMLElement("datalist")}} 要素の一部である場合などは、値は <code>0</code> になります。</dd>

 <dt>{{domxref("HTMLOptionElement.label")}} {{readonlyInline}}</dt>
 <dd>{{domxref("DOMString")}} で、この選択肢のラベルを提供する HTML の {{htmlattrxref("label", "option")}} 属性の値を反映します。この属性が特に設定されていない場合は、この値を読み取ると要素のテキストコンテンツが返されます。</dd>

 <dt>{{domxref("HTMLOptionElement.selected")}}</dt>
 <dd><code>true</code> または <code>false</code> の値を取り、この選択肢が現在選択されているかどうかを示します。</dd>
 <dt>{{domxref("HTMLOptionElement.text")}}</dt>
 <dd>{{domxref("DOMString")}} で、この要素のテキストコンテンツが入ります。</dd>
 <dt>{{domxref("HTMLOptionElement.value")}}</dt>
 <dd>{{domxref("DOMString")}} で、 HTML の {{htmlattrxref("value", "option")}} 属性が存在する場合は、その値を反映します。存在しない場合は {{domxref("Node.textContent")}} プロパティの値を反映します。</dd>
</dl>

<h2 id="Methods">メソッド</h2>

<p><em>親である {{domxref("HTMLElement")}} からメソッドを継承しています。</em></p>

<dl>
 <dt>Option()</dt>
 <dd><code>HTMLOptionElement</code> オブジェクトを生成するコンストラクターです。 4 つの値、表示するテキストである <code>text</code>、関連付ける値である <code>value</code>、 <code>defaultSelected</code> の値、 <code>selected</code> の値を取ります。後三者は省略可能です。</dd>
</dl>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#htmloptionelement", "HTMLOptionElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "forms.html#the-option-element", "HTMLOptionElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>コンストラクターである <code>Option()</code> を追加した。<br>
    <code>form</code> プロパティが <code>null</code> 値を取れるようになった。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-70901257', 'HTMLOptionElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td><code>selected</code> プロパティの意味を変更した。その選択肢が現在選択されているかどうかを示すようになり、最初に選択されているかどうかではなくなった。<br>
    <code>defaultSelected</code> プロパティが読み取り専用ではなくなった。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-70901257', 'HTMLOptionElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLOptionElement")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>このインターフェイスを実装している HTML 要素: {{HTMLElement("option")}}.</li>
</ul>
