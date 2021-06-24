---
title: XRReferenceSpace
slug: Web/API/XRReferenceSpace
tags:
  - API
  - AR
  - Augmented Reality
  - Distances
  - Interface
  - Mixed Reality
  - Offsets
  - Reference
  - Spaces
  - VR
  - Virtual Reality
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRReferenceSpace
  - matrix
  - transform
translation_of: Web/API/XRReferenceSpace
---
<p>{{APIRef("WebXR Device API")}}{{secureContext_header}}</p>

<p><span class="seoSummary">WebXR Device API の <strong><code>XRReferenceSpace</code></strong> インターフェイスは、指定された追跡の振る舞いを使用して、仮想世界内の特定の追跡対象のエンティティまたはオブジェクトの座標系を記述します。</span> 追跡の振る舞いは、選択した<a href="/ja/docs/Web/API/XRReferenceSpace#Reference_space_types">参照空間タイプ</a>によって定義されます。 いくつかの異なる追跡の振る舞いのサポートを追加し、追跡対象オブジェクトと世界の別の場所との間のオフセット変換を記述する新しい参照空間を要求することにより、基本クラス {{domxref("XRSpace")}} を拡張します。</p>

<p>すべての参照空間（制限付き参照空間を除く）は、<code>XRReferenceSpace</code> タイプを使用して記述されます。 制限付き空間は、{{domxref("XRBoundedReferenceSpace")}} オブジェクトとして実装されます。 これは、ビューアーが移動するのに「安全」な境界を確立できる特別な空間です。 実世界のカメラで移動を追跡するシステムなど、ユーザーが物理的に動き回ることができる XR システムの場合、この境界は、物理的な障害によるものか、XR ハードウェアの制限によるものかにかかわらず、ユーザーが動き回ることができる領域の縁を確立します。 ユーザーが物理的および仮想的な障害物と衝突しないようにするための境界の使用の詳細については、<a href="/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces">制限付き参照空間を使用したビューアーの保護</a>の記事を参照してください。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>{{domxref("XRSpace")}} から継承されたプロパティ（現時点では、ない）に加えて、<code>XRReferenceSpace</code> は {{domxref("EventTarget")}} のプロパティも継承します。 <code>XRReferenceSpace</code> は、追加のプロパティを定義しません。</em></p>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親インターフェイスである {{domxref("XRSpace")}} から継承されたメソッド（現時点では、ない）に加えて、<code>XRReferenceSpace</code> は {{domxref("EventTarget")}} からメソッドを継承します。 <code>XRReferenceSpace</code> は、次のメソッドも提供します。</em></p>

<dl>
 <dt>{{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}}<span class="hidden"> </span></dt>
 <dd>メソッドを呼び出したものと同じ型（つまり、<code>XRReferenceSpace</code> または {{domxref("XRBoundedReferenceSpace")}}）の新しい参照空間オブジェクトを作成して返します。 新しい参照空間を使用して、メソッドが呼び出されたオブジェクトの参照空間から別の座標空間に座標を変換できます。 これは、レンダリング中にオブジェクトを配置したり、3D 空間でビューアーの位置や向きを変更するときに必要な変換を実行したりするのに役立ちます。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<p><em>{{domxref("XRSpace")}} または {{domxref("EventTarget")}} オブジェクトに送信される可能性のある他のイベントに加えて、以下も <code>XRReferenceSpace</code> オブジェクトに適用されます。</em></p>

<dl>
 <dt>{{domxref("XRReferenceSpace.reset_event", "reset")}}</dt>
 <dd>
 <p><code>reset</code> イベントは、ユーザーの環境または場所を基準にして追跡対象オブジェクトの原点で不連続性が発生したことをブラウザーが検出すると、{{domxref("XRReferenceSpace")}} オブジェクトに送信されます。 これは、例えば、ユーザーが XR デバイスを再調整した後や、追跡を失って回復した後にデバイスが原点を自動的に調整した場合に発生する可能性があります。</p>

 <p>{{domxref("EventTarget.addEventListener", "addEventListener()")}} の使用に加えて、{{domxref("XRReferenceSpace.onreset", "onreset")}} イベントハンドラープロパティを設定することにより、<code>reset</code> イベントハンドラーを確立できます。</p>
 </dd>
</dl>

<h2 id="Reference_space_types" name="Reference_space_types">参照空間タイプ</h2>

<p>{{page("/ja/docs/Web/API/XRReferenceSpaceType", "Values")}}</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<h3 id="Creating_an_XRReferenceSpace" name="Creating_an_XRReferenceSpace">XRReferenceSpace の作成</h3>

<p><code>XRReferenceSpace</code> を取得する必要がある状況は2つあります。 1つ目は、シーンを設定し、{{domxref("XRSession")}} の期間中、世界に対するユーザーの視点を表す参照空間を取得する必要がある場合です。 これを行うには、{{domxref("XRSession")}} のメソッド {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} を呼び出して、取得する<a href="/ja/docs/Web/API/XRReferenceSpaceType">参照空間タイプ</a>を指定します。</p>

<pre class="notranslate">xrSession.requestReferenceSpace("local").then((refSpace) =&gt; {
  xrReferenceSpace = refSpace;
  /* ... */
});</pre>

<p>新しい参照空間を取得する必要があるもう1つの状況は、原点を新しい位置に移動する必要がある場合です。 これは通常、例えば、あなたのプロジェクトで、ユーザーが XR デバイスを介して接続されていないキーボード、マウス、タッチパッド、ゲームコントローラーなどの入力デバイスを使用して環境内を移動できる場合に行われます。 原点は通常、空間内のユーザーの位置であるため、原点を変更して、ユーザーの移動と方向の変更を反映する必要があります。</p>

<p>ユーザーの世界のビューを移動または回転するには、その視点を表すために使用される <code>XRReferenceSpace</code> を変更する必要があります。 ただし、<code>XRReferenceSpace</code> は不変であるため、代わりに、変更された視点を表す新しい参照空間を作成する必要があります。 これは、{{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} メソッドを使用して簡単に実行できます。</p>

<pre class="notranslate">let offsetTransform = new XRRigidTransform({x: 2, y: 0, z: 1},
                                           {x: 0, y: 1, z: 0, w: 1});
xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(offsetTransform);</pre>

<p>これにより、<code>XRReferenceSpace</code> を新しいものに置き換えます。 その原点と向きは、新しい原点を現在の原点に対して (2, 0, 1) に配置するように調整し、前の世界の向きに対してビューアーを真上に向けるように空間を向ける単位{{Glossary("quaternion","クォータニオン")}}を指定して回転します。</p>

<h3 id="Geometry" name="Geometry">ジオメトリー</h3>

<p><code>XRReferenceSpace</code> のネイティブ原点は、+X が右側、+Y が上向き、+Z が「後方」またはユーザーに向かっていると見なされるように常に構成されています。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebXR','#xrreferencespace-interface','XRReferenceSpace')}}</td>
   <td>{{Spec2('WebXR')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XRReferenceSpace")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Fundamentals">WebXR の基本</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Geometry">WebXR の幾何学と参照空間</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Cameras">視点とビューアー: WebXR でのカメラのシミュレーション</a></li>
 <li><a href="/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web">ウェブの行列計算</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion">移動、向き、モーション</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces">制限付き参照空間を使用したユーザーの保護</a></li>
</ul>
