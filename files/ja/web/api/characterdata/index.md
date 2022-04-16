---
title: CharacterData
slug: Web/API/CharacterData
tags:
  - API
  - DOM
translation_of: Web/API/CharacterData
---
<p>{{APIRef("DOM")}}</p>

<p><code><strong>CharacterData</strong></code> 抽象インターフェイスは、文字を包含する {{domxref("Node")}} オブジェクトを表します。これは抽象インターフェイスであり、<code>CharacterData</code> 型のオブジェクトは存在しません。抽象化されていない {{domxref("Text")}}、{{domxref("Comment")}}、{{domxref("ProcessingInstruction")}} といったインターフェイスによって実装されています。</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親インターフェイスである {{domxref("Node")}} からプロパティを継承します。また、{{domxref("ChildNode")}} および {{domxref("NonDocumentTypeChildNode")}} インターフェイスを実装します。</em></p>

<dl>
 <dt>{{domxref("CharacterData.data")}}</dt>
 <dd>当該オブジェクトが包含するテキストデータを表す {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("CharacterData.length")}} {{readonlyInline}}</dt>
 <dd><code>CharacterData.data</code> が持つ文字列のサイズを表す <code>unsigned long</code> を返します。</dd>
 <dt>{{domxref("NonDocumentTypeChildNode.nextElementSibling")}} {{readonlyInline}}</dt>
 <dd>親要素の子のリストで、指定した要素の直後にある {{domxref("Element")}} を返します。または、指定した要素がリストの末尾にある場合は <code>null</code> を返します。</dd>
 <dt>{{domxref("NonDocumentTypeChildNode.previousElementSibling")}} {{readonlyInline}}</dt>
 <dd>親要素の子のリストで、指定した要素の直前にある {{domxref("Element")}} を返します。または、指定した要素がリストの先頭にある場合は <code>null</code> を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親インターフェイスである {{domxref("Node")}} からメソッドを継承します。また、{{domxref("ChildNode")}} および {{domxref("NonDocumentTypeChildNode")}} インターフェイスを実装します。</em></p>

<dl>
 <dt>{{domxref("CharacterData.appendData()")}}</dt>
 <dd>指定した {{domxref("DOMString")}} を <code>CharacterData.data</code> の文字列に追加します。メソッドの戻り値で <code>data</code> は、結合した {{domxref("DOMString")}} を持ちます。</dd>
 <dt>{{domxref("CharacterData.deleteData()")}}</dt>
 <dd><code>CharacterData.data</code> の文字列の指定したオフセット位置から、指定した量の文字を削除します。メソッドの戻り値で <code>data</code> は、削除後の {{domxref("DOMString")}} を持ちます。</dd>
 <dt>{{domxref("CharacterData.insertData()")}}</dt>
 <dd><code>CharacterData.data</code> の文字列の指定したオフセット位置に、指定した文字を挿入します。メソッドの戻り値で <code>data</code> は、変更後の {{domxref("DOMString")}} を持ちます。</dd>
 <dt>{{domxref("ChildNode.remove()")}} {{experimental_inline}}</dt>
 <dd>親要素の子のリストから、オブジェクトを削除します。</dd>
 <dt>{{domxref("CharacterData.replaceData()")}}</dt>
 <dd>指定したオフセット位置から指定した量の文字列を、指定した {{domxref("DOMString")}} に置き換えます。メソッドの戻り値で <code>data</code> は、変更後の {{domxref("DOMString")}} を持ちます。</dd>
 <dt>{{domxref("CharacterData.substringData()")}}</dt>
 <dd><code>CharacterData.data</code> の指定したオフセット位置から、指定した長さの部分を持つ {{domxref("DOMString")}} を返します。</dd>
</dl>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#characterdata', 'CharacterData')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>{{domxref("ChildNode")}} および {{domxref("NonDocumentTypeChildNode")}} インターフェイスの実装を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-FF21A306', 'CharacterData')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>{{SpecName('DOM2 Core')}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-FF21A306', 'CharacterData')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>{{SpecName('DOM1')}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-FF21A306', 'CharacterData')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("api.CharacterData")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/DOM/DOM_Reference" title="DOM/DOM_Reference">DOM インターフェイスの索引</a></li>
</ul>
