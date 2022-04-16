---
title: Text
slug: Web/API/Text
tags:
  - API
  - DOM
translation_of: Web/API/Text
---
<p>{{ApiRef("DOM")}}</p>

<p><strong><code>Text</code></strong> インターフェイスは、{{domxref("Element")}} または {{domxref("Attr")}} のテキストコンテンツを表します。要素の内部にマークアップが含まれていない場合、その要素は要素内のテキストを包含する <code>Text</code> を実装する子を 1 つ持ちます。一方要素がマークアップを含む場合は情報アイテムと、要素の子を構成する <code>Text</code> ノードに解析されます。</p>

<p>新しいドキュメントは、テキストのブロックごとに 1 つの <code>Text</code> ノードを持ちます。ドキュメントの内容の変化に応じて、さらに多くの <code>Text</code> ノードが生成されます。{{domxref("Node.normalize()")}} メソッドは、テキストのブロックごとに 1 つのノードに戻るよう、隣接する <code>Text</code> オブジェクトを結合します。</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Methods" name="Methods">コンストラクター</h2>

<dl>
 <dt>{{domxref("Text.Text", "Text()")}} {{experimental_inline}}</dt>
 <dd>引数をテキストコンテンツとして持つ、<code>Text</code> ノードを返します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親である {{domxref("CharacterData")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("Text.isElementContentWhitespace")}} {{readonlyInline}} {{obsolete_inline}}</dt>
 <dd>text ノードがホワイトスペースしか包含していないかを示す、{{domxref("Boolean")}} フラグを返します。</dd>
 <dt>{{domxref("Text.wholeText")}} {{readonlyInline}}</dt>
 <dd>当該 {{domxref("Node")}} に論理的に隣接しているすべての <code>Text</code> ノードのテキストを、ドキュメント内で現れる順に結合した {{domxref("DOMString")}} を返します。</dd>
 <dt>{{domxref("Text.assignedSlot")}} {{readonlyinline}}</dt>
 <dd>要素に関連付けられた {{domxref("HTMLSlotElement")}} オブジェクトを返します。</dd>
</dl>

<h3 id="Properties_included_from_Slotable" name="Properties_included_from_Slotable">Slotable に含まれるプロパティ</h3>

<p><em><code>Text</code> インターフェイスは、{{domxref("Slotable")}} ミックスインで定義された以下のプロパティを含んでいます。</em></p>

<dl>
 <dt>{{domxref("Slotable.assignedSlot")}} {{readonlyInline}}</dt>
 <dd>ノードが挿入されている {{htmlelement("slot")}} を表す {{domxref("HTMLSlotElement")}} を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親である {{domxref("CharacterData")}} からメソッドを継承します。</em></p>

<dl>
 <dt>{{domxref("Text.replaceWholeText")}} {{obsolete_inline}}</dt>
 <dd>カレントノードおよび論理的に隣接するノードのテキストを、指定したテキストに置き換えます。</dd>
</dl>

<dl>
 <dt><span>{{domxref("Text.splitText")}}</span></dt>
 <dd>指定したオフセット位置で、ノードを 2 つに分割します。</dd>
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
   <td>{{SpecName('DOM WHATWG', '#text', 'Text')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td><code>isElementContentWhitespace</code> プロパティを削除。<br>
    <code>replaceWholeText()</code> メソッドを削除。<br>
    <code>Text()</code> コンストラクターを追加。<br>
    <code>assignedSlot</code> プロパティを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-1312295772', 'Text')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td><code>isElementContentWhitespace</code> および <code>wholeText</code> プロパティを追加。<br>
    <code>replaceWholeText()</code> メソッドを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-1312295772', 'Text')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>{{SpecName('DOM1')}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-1312295772', 'Text')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.Text")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/DOM/DOM_Reference" title="DOM/DOM_Reference">DOM インターフェイスの索引</a></li>
</ul>
