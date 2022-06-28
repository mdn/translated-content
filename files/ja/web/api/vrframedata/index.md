---
title: VRFrameData
slug: Web/API/VRFrameData
translation_of: Web/API/VRFrameData
---
<p>{{APIRef("WebVR API")}}{{SeeCompatTable}}</p>

<p><a href="/ja/docs/Web/API/WebVR_API">WebVR API</a>の<strong><code>VRFrameData</code></strong>インタフェースは、VRシーンの1つのフレームを描画するのに必要となる全ての情報を表現します。</p>

<h2 id="コンストラクタ">コンストラクタ</h2>

<dl>
 <dt>{{domxref("VRFrameData.VRFrameData()")}}</dt>
 <dd><code>VRFrameData</code> オブジェクトインスタンスを作成します。</dd>
</dl>

<h2 id="プロパティ">プロパティ</h2>

<dl>
 <dt>{{domxref("VRFrameData.leftProjectionMatrix")}} {{readonlyInline}}</dt>
 <dd>{{domxref("Float32Array")}}型の要素を持つ4行4列の行列であり、左目の描画に利用される射影を表します。</dd>
 <dt>{{domxref("VRFrameData.leftViewMatrix")}} {{readonlyInline}}</dt>
 <dd>{{domxref("Float32Array")}}型の要素を持つ4行4列の行列であり、左目の描画に利用されるビュー変換を表します。</dd>
 <dt>{{domxref("VRFrameData.pose")}} {{readonlyInline}}</dt>
 <dd>現在の{{domxref("VRFrameData.timestamp")}}の値が示す時刻での、{{domxref("VRDisplay")}}の{{domxref("VRPose")}}です。</dd>
 <dt>{{domxref("VRFrameData.rightProjectionMatrix")}} {{readonlyInline}}</dt>
 <dd>{{domxref("Float32Array")}}型の要素を持つ4行4列の行列であり、右目の描画に利用される射影を表します。</dd>
 <dt>{{domxref("VRFrameData.rightViewMatrix")}} {{readonlyInline}}</dt>
 <dd>{{domxref("Float32Array")}}型の要素を持つ4行4列の行列であり、右目の描画に利用されるビュー変換を表します。</dd>
 <dt>{{domxref("VRFrameData.timestamp")}} {{readonlyInline}}</dt>
 <dd>単調に増加するタイムスタンプ値であり、フレームが更新された時を表します。</dd>
</dl>

<h2 id="例">例</h2>

<p>{{page("/Web/API/VRDisplay/getFrameData", "Examples")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR 1.1', '#interface-vrdisplayevent', 'VRDisplayEvent')}}</td>
   <td>{{Spec2('WebVR 1.1')}}</td>
   <td>初版</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.VRFrameData")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage (英語)</a></li>
 <li><a href="http://mozvr.com/">MozVr.com (英語)</a> — デモ、ダウンロード、Mozilla VRチームからのその他のリソース</li>
</ul>
