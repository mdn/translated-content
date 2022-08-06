---
title: XRSystem
slug: Web/API/XRSystem
tags:
  - API
  - AR
  - Augmented Reality
  - Experimental
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRSystem
translation_of: Web/API/XRSystem
---
<p>{{APIRef("WebXR Device API")}}{{SecureContext_Header}}</p>

<p class="summary"><span class="seoSummary"><a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a> の <strong><code>XRSystem</code></strong> インターフェイスは、WebXR セッションを表す {{domxref("XRSession")}} オブジェクトにアクセスできるようにするメソッドを提供します。 その <code>XRSession</code> が手元にあれば、それを使用して拡張現実（AR）または仮想現実（VR）デバイスと対話できます。</span></p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>XRSystem</code> はプロパティを直接提供しませんが、親インターフェイスである {{domxref("EventTarget")}} からプロパティを継承します。</em></p>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>XRSystem</code> インターフェイスには、親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承することに加えて、次のメソッドが含まれています。</em></p>

<dl>
 <dt>{{DOMxRef("XRSystem.isSessionSupported", "isSessionSupported()")}} {{Experimental_Inline}}</dt>
 <dd>ブラウザーが指定された {{domxref("XRSessionMode")}} をサポートしている場合、<code>true</code> に解決される promise を返します。 指定されたモードをサポートしていない場合、<code>false</code> に解決されます。</dd>
 <dt>{{DOMxRef("XRSystem.requestSession", "requestSession()")}} {{Experimental_Inline}}</dt>
 <dd>指定された {{DOMxRef("XRSessionMode")}} を持つ新しい {{DOMxRef("XRSession")}} に解決される promise を返します。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt>{{domxref("XRSystem.devicechange_event", "devicechange")}} {{experimental_inline}}</dt>
 <dd>使用可能な XR デバイスのセットが変更されたときに送信されます。<br>
 {{domxref("XRSystem.ondevicechange", "ondevicechange")}} イベントハンドラーを使用することもできます。</dd>
</dl>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>このインターフェイスは、以前のバージョンの仕様では単に <code>XR</code> と呼ばれていました。 コードや文書に <code>XR</code> への参照がある場合は、それを <code>XRSystem</code> に置き換えてください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例は、{{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} と {{domxref("XRSystem.requestSession", "requestSession()")}} の両方を使用する方法を示しています。</p>

<pre class="brush: js; notranslate">if (navigator.xr) {
  immersiveButton.addEventListener("click", onButtonClicked);
  navigator.xr.isSessionSupported('immersive-vr')
  .then((isSupported) =&gt; {
    if (isSupported) {
      immersiveButton.disabled = false;
    } else {
      immersiveButton.disabled = true;
    }
  });
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession('immersive-vr')
    .then((session) =&gt; {
      // onSessionStarted() not shown for reasons of brevity and clarity.
      onSessionStarted(session);
    });
  } else {
    // Shut down the already running XRSession
    xrSession.end()
    .then(() =&gt; {
      // Since there are cases where the end event is not sent, call the handler here as well.
      onSessionEnded();
    });
  }
}</pre>

<p>このコードは、{{domxref("navigator.xr")}} プロパティを探して、WebXR が使用可能かどうかを確認することから始まります。 見つかった場合は、WebXR が存在することがわかっているので、ユーザーがクリックして没入型 VR モードのオンとオフを切り替えることができるボタンのハンドラーを確立します。</p>

<p>ただし、目的の没入型モードが利用可能かどうかはまだわかりません。 これを決定するために、ボタン <code>immersiveButton</code> を有効にする前に、必要なセッションオプションを渡して <code>isSessionSupported()</code> を呼び出します。 これにより、ユーザーは、没入型 VR モードが使用可能な場合にのみ没入型モードに切り替えることができます。 没入型 VR が利用できない場合、ボタンを使用できないように無効しています。</p>

<p><code>onButtonClicked()</code> 関数は、実行中のセッションがすでに存在するかどうかを確認します。 存在しない場合は、<code>requestSession()</code> を使用して開始し、返された promise が解決したら、関数 <code>onSessionStarted()</code> を呼び出して、レンダリングなどのためにセッションを設定します。</p>

<p>一方、進行中の XR セッションがすでに存在する場合は、代わりに {{domxref("XRSession.end", "end()")}} を呼び出して現在のセッションを終了します。 現在のセッションが終了すると、{{domxref("XRSession.end_event", "end")}} イベントが送信されるので、そのハンドラーで <code>xrSession</code> を <code>null</code> に設定して、進行中のセッションがなくなったことを記録します。 そうすれば、ユーザーがボタンをもう一度クリックすることで、新しいセッションが開始されます。</p>

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
   <td>{{SpecName("WebXR", "#xrsystem-interface", "XRSystem")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<div>{{Compat("api.XRSystem")}}</div>
