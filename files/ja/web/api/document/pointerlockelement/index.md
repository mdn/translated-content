---
title: DocumentOrShadowRoot.pointerLockElement
slug: Web/API/Document/pointerLockElement
tags:
  - API
  - DOM
  - Document
  - Property
  - Reference
  - ShadowRoot
  - mouse lock
  - プロパティ
  - マウスロック
translation_of: Web/API/DocumentOrShadowRoot/pointerLockElement
original_slug: Web/API/DocumentOrShadowRoot/pointerLockElement
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"><strong><code>pointerLockElement</code></strong> は {{domxref("Document")}} および {{domxref("ShadowRoot")}} インターフェイスのプロパティで、要素をポインターがロックされている間のマウスイベントの対象として設定します。ロック待ち状態の場合、ポインターがロックされていない場合、対象が他の文書にある場合は <code>null</code> になります。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>element</var> = <var>document</var>.pointerLockElement;
</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{domxref("Element")}} または <code>null</code>。</p>

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
   <td>{{SpecName('Pointer Lock','#extensions-to-the-documentorshadowroot-mixin','pointerLockElement')}}</td>
   <td>{{Spec2('Pointer Lock')}}</td>
   <td><code>Document</code> インターフェイスを拡張</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DocumentOrShadowRoot.pointerLockElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ domxref("Document.exitPointerLock()") }}</li>
 <li>{{ domxref("Element.requestPointerLock()") }}</li>
 <li><a href="/ja/docs/WebAPI/Pointer_Lock">Pointer Lock</a></li>
</ul>
