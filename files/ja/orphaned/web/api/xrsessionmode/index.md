---
title: XRSessionMode
slug: orphaned/Web/API/XRSessionMode
tags:
  - API
  - AR
  - Enum
  - Graphics
  - Reference
  - Session
  - Type
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - XRSessionMode
translation_of: Web/API/XRSessionMode
original_slug: Web/API/XRSessionMode
---
<div>{{APIRef("WebXR Device API")}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a> の <strong><code>XRSessionMode</code></strong> 列挙型は、使用できるセッションモードの可能な種類を識別するために使用される文字列値を定義します。</span></p>

<h2 id="Values" name="Values">値</h2>

<dl>
 <dt><a id="immersive-ar" name="immersive-ar"><code>immersive-ar</code></a> {{experimental_inline}}</dt>
 <dd>
 <p>セッションの出力には、没入型デバイスへの排他的アクセスが許可されますが、レンダリングされたコンテンツは実世界の環境とブレンドされます。 セッションの {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} は、コンテンツをブレンドするために使用する方法を示します。</p>

 <div class="blockIndicator warning">
 <p>重要: <code>immersive-ar</code> モードは、WebXR 拡張現実モジュールによって定義されていますが、まだ安定しておらず、テストと実験以外には使用しないでください。</p>
 </div>
 </dd>
 <dt><a id="immersive-vr" name="immersive-vr"><code>immersive-vr</code></a></dt>
 <dd>レンダリングされたセッションが VR モードの没入型 XR デバイスを使用して表示されることを示します。 これは、周囲の環境にオーバーレイしたり、統合したりすることを意図したものではありません。 {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} は、可能であれば <code>opaque</code> であると予想されますが、ハードウェアが必要とする場合は <code>additiv</code> になる可能性があります。</dd>
 <dt><a id="inline" name="inline"><code>inline</code></a></dt>
 <dd>出力は、視覚的な空間全体を占めるのではなく、標準の HTML 文書の要素のコンテキスト内でインラインで表示されます。 インラインセッションは、モノラルモードまたはステレオモードのいずれかで表示でき、ビューアー追跡を利用できる場合とできない場合があります。 インラインセッションは特別なハードウェアを必要とせず、WebXR API のサポートを提供するすべての{{Glossary("user agent","ユーザーエージェント")}}で利用可能である必要があります。</dd>
</dl>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p><code>XRSessionMode</code> 型は、{{domxref("XRSystem.isSessionSupported()")}} を呼び出して、指定されたセッションタイプがサポートされ、使用できるかどうかを判断するとき、および {{domxref("XRSystem.requestSession", "requestSession()")}} によって新しい WebXR セッションを開こうとするときに指定できる値を示します。</p>

<p>どちらも没入型セッションであるため、<code>immersive-ar</code> モードは、<code>immersive-vr</code> と同じ機能と参照空間をすべてサポートします。 ブラウザーはこれらのモードのいずれかまたは両方をサポートできますが、WebXR が使用可能な場合は、<code>inline</code> モードが<em>常に</em>サポートされます。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("WebXR","#xrsessionmode-enum","XRSessionMode")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
  <tr>
   <td>{{SpecName("WebXR AR Module", "#dom-xrsessionmode-immersive-ar", "XRSessionMode: immersive-ar")}}</td>
   <td>{{Spec2("WebXR AR Module")}}</td>
   <td><code>immersive-ar</code> 値を追加</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.XRSessionMode")}}</div>
