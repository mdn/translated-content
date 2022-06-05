---
title: DocumentType
slug: Web/API/DocumentType
tags:
  - API
  - DOM
  - DocumentType
  - Interface
translation_of: Web/API/DocumentType
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>DocumentType</code></strong> インターフェイスは、doctype を包含する {{domxref("Node")}} を表します。</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親インターフェイスである {{domxref("Node")}} からプロパティを継承します。また、{{domxref("ChildNode")}} インターフェイスのプロパティを実装します。</em></p>

<dl>
 <dt>{{domxref("DocumentType.entities")}} {{readonlyInline}} {{obsolete_Inline}}</dt>
 <dd>DTD で宣言されたエンティティの {{domxref("NamedNodeMap")}} です。マップ内のすべてのノードは {{domxref("Entity")}} インターフェイスを実装しています。</dd>
 <dt>{{domxref("DocumentType.internalSubset")}} {{readonlyInline}} {{obsolete_Inline}}</dt>
 <dd>内部サブセットの {{domxref("DOMString")}}、またはサブセットが存在しない場合は <code>null</code> になります。例: <code>"&lt;!ELEMENT foo (bar)&gt;"</code>。</dd>
 <dt>{{domxref("DocumentType.name")}} {{readonlyInline}}</dt>
 <dd><code>&lt;!DOCTYPE HTML&gt;</code> に対して <code>"html"</code> といった {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("DocumentType.notations")}} {{readonlyInline}} {{obsolete_Inline}}</dt>
 <dd>DTD で宣言された notation の {{domxref("NamedNodeMap")}} です。マップ内のすべてのノードは {{domxref("Notation")}} インターフェイスを実装しています。</dd>
 <dt>{{domxref("DocumentType.publicId")}} {{readonlyInline}}</dt>
 <dd><code>"-//W3C//DTD HTML 4.01//EN"</code> のような {{domxref("DOMString")}} です。HTML5 では空文字列です。</dd>
 <dt>{{domxref("DocumentType.systemId")}} {{readonlyInline}}</dt>
 <dd><code>"http://www.w3.org/TR/html4/strict.dtd"</code> のような {{domxref("DOMString")}} です。HTML5 では空文字列です。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親インターフェイスである {{domxref("Node")}} からメソッドを継承します。また、{{domxref("ChildNode")}} インターフェイスのメソッドを実装します。</em></p>

<dl>
 <dt>{{domxref("ChildNode.remove()")}} {{experimental_inline}}</dt>
 <dd>親ノードの子のリストから、オブジェクトを削除します。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#documenttype', 'DocumentType')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>{{domxref("ChildNode")}} インターフェイスの実装を追加。<br>
    <code>internalSubset</code>、<code>entities</code>、<code>notation</code> プロパティを削除。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-412266927', 'DocumentType')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>{{SpecName('DOM2 Core')}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-412266927', 'DocumentType')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td><code>publicID</code>、<code>systemID</code>、<code>internalSubset</code> プロパティを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-412266927', 'DocumentType')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.DocumentType")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/DOM/DOM_Reference">DOM インターフェイスの索引</a></li>
 <li>{{domxref("Entity")}}</li>
 <li>{{domxref("Notation")}}</li>
</ul>
