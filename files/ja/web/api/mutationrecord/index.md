---
title: MutationRecord
slug: Web/API/MutationRecord
tags:
  - API
  - Advanced
  - DOM
  - DOM Reference
  - NeedsContent
  - Reference
translation_of: Web/API/MutationRecord
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>MutationRecord</code></strong> は、 DOM に生じた個々の変更を表します。これは {{domxref("MutationObserver")}} のコールバック関数に渡されるオブジェクトです。</p>

<h2 id="Properties">プロパティ</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">プロパティ</td>
   <td class="header">型</td>
   <td class="header">意味</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.type")}}</td>
   <td><code>String</code></td>
   <td>属性値の変更の場合は <code>"attributes"</code>、<code>CharacterData</code> ノードに対する変更の場合は <code>"characterData"</code>、ノードのツリーに対する変更の場合は <code>"childList"</code> を返します。</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.target")}}</td>
   <td>{{domxref("Node")}}</td>
   <td>変更の影響を受けたノードを、 {{domxref("MutationRecord.type")}} に応じて返します。<br>

    <code>attributes</code> の場合、属性が変更された要素となります。<br>
    <code>characterData</code> の場合、<code>CharacterData</code> ノードとなります。<br>
    <code>childList</code> の場合、子ノードが変更されたノードとなります。</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.addedNodes")}}</td>
   <td>{{domxref("NodeList")}}</td>
   <td>追加されたノードを返します。何もノードが追加されていなかった場合は、空の {{domxref("NodeList")}} を返します。</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.removedNodes")}}</td>
   <td>{{domxref("NodeList")}}</td>
   <td>削除されたノードを返します。何もノードが削除されていなかった場合は、空の {{domxref("NodeList")}} を返します。</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.previousSibling")}}</td>
   <td>{{domxref("Node")}}</td>
   <td>追加あるいは削除されたノードの直前にあるノード、もしくは <code>null</code> を返します。</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.nextSibling")}}</td>
   <td><code>{{domxref("Node")}}</code></td>
   <td>追加あるいは削除されたノードの直後にあるノード、もしくは <code>null</code> を返します。</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.attributeName")}}</td>
   <td><code>String</code></td>
   <td>変更された属性のローカル名、もしくは <code>null</code> を返します。</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.attributeNamespace")}}</td>
   <td><code>String</code></td>
   <td>変更された属性の名前空間、もしくは <code>null</code> を返します。</td>
  </tr>
  <tr>
   <td>{{domxref("MutationRecord.oldValue")}}</td>
   <td><code>String</code></td>
   <td>
    <p>返値は {{domxref("MutationRecord.type")}} に応じて以下のように変わります。<br>
     <code>attributes</code> の場合、変更された属性の変更前の属性値となります。<br>
     <code>characterData</code> の場合、変更されたノードの変更前のデータとなります。<br>
     <code>childList</code> の場合、<code>null</code> となります。</p>

    <div class="note">
    <p>なお、この機能が正常に動作するためには、 <code>MutationObserver</code> <a href="/ja/docs/Web/API/MutationObserver/observe">observe</a> メソッドの対応する <a href="/ja/docs/Web/API/MutationObserverInit">MutationObserverInit</a> 引数で、 <code>attributeOldValue</code> または <code>characterDataOldValue</code> が <code>true</code> に設定されている必要があります</p>
    </div>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName('DOM WHATWG', '#mutationrecord', 'MutationRecord')}}</td>
   <td>{{ Spec2('DOM WHATWG') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.MutationRecord")}}</p>
