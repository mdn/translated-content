---
title: VRLayerInit.rightBounds
slug: Web/API/VRLayerInit/rightBounds
tags:
  - API
  - Experimental
  - Property
  - Refe
  - VR
  - VRLayerInit
  - Virtual Reality
  - WebVR
  - rightBounds
translation_of: Web/API/VRLayerInit/rightBounds
original_slug: Web/API/VRLayer/rightBounds
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRLayerInit")}} インターフェイス (辞書) の <code><strong>rightBounds</strong></code> プロパティは、 {{domxref("VRDisplay")}} によってコンテンツが表示されるキャンバスの右のテクスチャ境界を定義します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js notranslate">var myVRLayerInit = { };
myVRLayerInit.rightBounds = <code>[0.5, 0.0, 0.5, 1.0]</code>;</pre>

<h3 id="値">値</h3>

<p>4つの浮動小数点値の配列で 0.0–1.0 の値を取ることができます:</p>

<ol>
 <li>境界の左オフセット。</li>
 <li>境界の上オフセット。</li>
 <li>境界の幅。</li>
 <li>境界の高さ。</li>
</ol>

<p>辞書で <code>leftBounds</code> が指定されていない場合、使用されるデフォルト値は <code>[0.5, 0.0, 0.5, 1.0]</code> です。</p>

<h2 id="例">例</h2>

<p>{{page("/Web/API/VRLayerInit", "Examples")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR 1.1', '#dom-vrlayerinit-rightbounds', 'rightBounds')}}</td>
   <td>{{Spec2('WebVR 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<p>{{Compat("api.VRLayerInit.rightBounds")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a></li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — demos, downloads, and other resources from the Mozilla VR team.</li>
</ul>
