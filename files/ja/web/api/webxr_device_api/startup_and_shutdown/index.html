---
title: WebXR セッションの起動と停止
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
tags:
  - 3D
  - API
  - AR
  - Beginner
  - Guide
  - Initialization
  - Mixed
  - Preparation
  - Reality
  - Setup
  - Shutdown
  - Startup
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - augmented
translation_of: Web/API/WebXR_Device_API/Startup_and_shutdown
---
<p>{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}</p>

<p>すでに 3D グラフィックス全般、特に WebGL に精通していると想定すると、次の大胆なステップで複合現実を実現できます。 現実の世界に加えて、またはその代わりに人工の風景やオブジェクトを表示するという考え方は、それほど複雑ではありません。 <span class="seoSummary">拡張現実または仮想現実のシナリオのレンダリングを開始する前に、WebXR セッションを作成してセットアップする必要があります。 また、適切に停止する方法も知っておく必要があります。 この記事では、これらのことを行う方法を学びます。</span></p>

<h2 id="Accessing_the_WebXR_API" name="Accessing_the_WebXR_API">WebXR API へのアクセス</h2>

<p>アプリによる WebXR API へのアクセスは、{{domxref("XRSystem")}} オブジェクトから始まります。 このオブジェクトは、ユーザーの機器で利用可能なハードウェアとドライバーを通じて利用可能な WebXR デバイススイート全体を表します。 {{domxref("Navigator")}} のプロパティ {{domxref("Navigator.xr", "xr")}} を介してドキュメントで使用できるグローバルな <code>XRSystem</code> オブジェクトがあります。 これは、使用可能なハードウェアとドキュメントの環境を考慮して、適切な XR ハードウェアが使用できる場合に <code>XRSystem</code> オブジェクトを返すプロパティです。</p>

<p>したがって、<code>XRSystem</code> オブジェクトをフェッチする最も単純なコードは次のとおりです。</p>

<pre class="brush: js notranslate">const xr = navigator.xr;</pre>

<p>WebXR が利用できない場合、<code>xr</code> の値は <code>null</code> または <code>undefined</code> になります。</p>

<h3 id="WebXR_availability" name="WebXR_availability">WebXR の可用性</h3>

<p>新しい、まだ開発中の API として、WebXR のサポートは特定のデバイスとブラウザーに限定されています。 そして、それらでさえ、デフォルトで有効にならないかもしれません。 ただし、互換性のあるシステムがない場合でも、WebXR を試すことができる選択肢がある場合があります。</p>

<h4 id="WebXR_polyfill" name="WebXR_polyfill">WebXR ポリフィル</h4>

<p>WebXR 仕様を設計しているチームは、WebXR API をサポートしていないブラウザーで WebXR をシミュレートするために使用できる <a href="https://github.com/immersive-web/webxr-polyfill">WebXR ポリフィル</a>を公開しています。 ブラウザーが古い <a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> をサポートしている場合は、それが使用されます。 それ以外の場合、ポリフィルは、Google の Cardboard VR API を使用する実装にフォールバックします。</p>

<p>ポリフィルは仕様とともに維持され、仕様に合わせて最新に保たれます。 さらに、WebXR および WebXR に関連するその他のテクノロジーのサポートと、ポリフィルの変更の実装の経時的なサポートとして、ブラウザーとの互換性を維持するために更新されます。</p>

<p>必ず readme を注意深く読んでください。 ポリフィルには、ターゲットブラウザーに含まれる新しい JavaScript 機能との互換性の程度に応じて、いくつかのバージョンがあります。</p>

<h4 id="WebXR_API_Emulator_extension" name="WebXR_API_Emulator_extension">WebXR API エミュレーター拡張機能</h4>

<p><a href="https://mixedreality.mozilla.org/">Mozilla WebXR チーム</a>は、WebXR API をエミュレートし、HTC Vive、Oculus Go、Oculus Quest、Samsung Gear、Google Cardboard などの互換性のあるさまざまなデバイスをシミュレートする、Firefox と Chrome の両方と互換性のある <a href="https://blog.mozvr.com/webxr-emulator-extension/">WebXR API Emulator</a> ブラウザー拡張機能を作成しました。 拡張機能を配置すると、ヘッドセットと任意のハンドコントローラーの位置と向き、およびコントローラーのボタンを制御できる開発者ツールパネルを開くことができます。</p>

<h5 id="Emulator_usage" name="Emulator_usage">エミュレーターの使用</h5>

<p>実際のヘッドセットを使用するのに比べて少し厄介ですが、これにより、WebXR が通常利用できないデスクトップコンピューターで WebXR のコードを試して開発することができます。 また、コードを実際のデバイスに取り込む前に、いくつかの基本的なテストを実行できます。 ただし、エミュレーターはまだすべての WebXR API を完全にエミュレートしていないため、予期しない問題が発生する可能性があることに注意してください。 ここでも、readme ファイルを注意深く読み、開始する前に制限事項を確認してください。</p>

<p><strong>重要</strong>: 製品をリリースまたは出荷する前に、常に実際の AR や VR のハードウェアでコードをテストする必要があります。 エミュレート、シミュレーション、またはポリフィルされた環境は、物理デバイスでの実際のテストに代わる適切なものではありません。</p>

<h5 id="Getting_the_extension" name="Getting_the_extension">拡張機能の取得</h5>

<p>以下のサポートされているブラウザー用の WebXR API エミュレーターをダウンロードしてください。</p>

<ul>
 <li><a href="https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje">Google Chrome</a></li>
 <li><a href="https://addons.mozilla.org/ja/firefox/addon/webxr-api-emulator/">Mozilla Firefox</a></li>
</ul>

<p><a href="https://github.com/MozillaReality/WebXR-emulator-extension">拡張機能のソースコード</a>は、GitHub で入手できます。</p>

<h5 id="Emulator_issues_and_notes" name="Emulator_issues_and_notes">エミュレーターの問題とメモ</h5>

<p>これは拡張機能に関する完全な記事の場所ではありませんが、言及する価値のある特定の事項がいくつかあります。</p>

<p>拡張機能のバージョン 0.4.0 は2020年3月26日に発表されました。 安定状態に近づいている <a href="https://www.w3.org/TR/webxr-ar-module-1/">WebXR AR モジュール</a>による拡張現実（AR）のサポートが導入されました。 AR のドキュメントは、近日中に MDN で公開されます。</p>

<p>その他の改善には、エミュレーターを更新して <code>XR</code> インターフェイスの名前を {{domxref("XRSystem")}} に変更し、スクイーズ（グリップ）入力ソースのサポートを導入し、{{domxref("XRInputSource")}} のプロパティ {{domxref("XRInputSource.profiles", "profiles")}} のサポートを追加します。</p>

<h3 id="Context_requirements" name="Context_requirements">コンテキスト要件</h3>

<p>WebXR 互換環境は、安全にロードされたドキュメントから始まります。 ドキュメントは、ローカルドライブ（<code>http://localhost/...</code> などの URL を使用するなど）からロードするか、ページのロード時に {{Glossary("HTTPS")}} を使用する必要があります。 同様に、JavaScript コードは安全にロードされている必要があります。</p>

<p>ドキュメントが安全にロードされなかった場合は、それほど遠くまで到達できません。 {{domxref("navigator.xr")}} プロパティは、ドキュメントが安全にロードされていない場合には存在しません。 これは、互換性のある XR ハードウェアが利用できない場合にも当てはまります。 どちらの場合でも、<code>xr</code> プロパティの欠如に備える必要があり、エラーを適切に処理するか、何らかの形式のフォールバックを提供する必要があります。</p>

<h3 id="Falling_back_to_the_WebXR_polyfill" name="Falling_back_to_the_WebXR_polyfill">WebXR ポリフィルにフォールバック</h3>

<p>フォールバックの選択肢の1つは、WebXR 標準化プロセスを担当する <a href="https://www.w3.org/immersive-web/">Immersive Web ワーキンググループ</a>によって提供される <a href="https://github.com/immersive-web/webxr-polyfill/">WebXR ポリフィル</a>です。 {{Glossary("polyfill","ポリフィル")}}は、WebXR をネイティブでサポートしていないブラウザーに WebXR のサポートを提供し、サポートしているブラウザーの実装間の不整合を解消するため、WebXR がネイティブで利用できる場合でも役立つ場合があります。</p>

<p>ここでは、前の {{HTMLElement("script")}} タグを使用してポリフィルが含まれている、またはロードされていると想定して、オプションでポリフィルをインストールした後に {{domxref("XRSystem")}} オブジェクトを返す <code>getXR()</code> 関数を定義します。</p>

<pre class="brush: js notranslate">let webxrPolyfill = null;

function getXR(usePolyfill) {
  let tempXR;

  switch(usePolyfill) {
    case "if-needed":
      tempXR = navigator.xr;
      if (!tempXR) {
        webxrPolyfill = new WebXRPolyfill();
        tempXR = webxrPolyfill;
      }
      break;
    case "yes":
      webxrPolyfill = new WebXRPolyfill();
      tempXR = webxrPolyfill;
      break;
    case "no":
    default:
      tempXR = navigator.xr;
      break;
  }

  return tempXR;
}

const xr = getXR("no");  // ネイティブの XRSystem オブジェクトを取得
const xr = getXR("yes"); // 常にポリフィルから XRSystem を返す
const xr = getXR("if-needed"); // navigator.xr がない場合にのみポリフィルを使用
</pre>

<p>返された <code>XRSystem</code> オブジェクトは、MDN で提供されているドキュメントに従って使用できます。 グローバル変数 <code>webxrPolyfill</code> は、ポリフィルへの参照を保持するためにのみ使用され、不要になるまでポリフィルを使用できるようにします。 これを <code>null</code> に設定すると、依存しているオブジェクトがそれを使用しなくなったときに、ポリフィルをガベージコレクションできることを示します。</p>

<p>もちろん、必要に応じてこれを簡略化できます。 アプリはおそらくポリフィルを使用するかどうかについてあまり行き来しないので、これを必要な特定のケースに単純化できます。</p>

<h3 id="Permissions_and_security" name="Permissions_and_security">権限とセキュリティ</h3>

<p>WebXR を中心に展開する多くのセキュリティ対策があります。 まず、ユーザーの世界観を完全に置き換える <code>immersive-vr</code> モードを使用するには、<code>xr-spatial-tracking</code> <a href="/ja/docs/Web/HTTP/Feature_Policy">機能ポリシー</a>を設定する必要があります。 それに加えて、ドキュメントは安全で現在フォーカスされている必要があります。 最後に、{{domxref("Element.click_event", "click")}} イベントのハンドラーなどのユーザーイベントハンドラーから {{domxref("XRSystem.requestSession", "requestSession()")}} を呼び出す必要があります。</p>

<p>安全な WebXR の活動と使用方法の詳細については、<a href="/ja/docs/Web/API/WebXR_Device_API/Permissions_and_security">WebXR の権限とセキュリティ</a>の記事を参照してください。</p>

<h3 id="Confirming_the_session_type_you_need_is_available" name="Confirming_the_session_type_you_need_is_available">必要なセッションタイプが利用可能であることの確認</h3>

<p>新しい WebXR セッションを作成する前に、ユーザーのハードウェアとソフトウェアが使用したいプレゼンテーションモードをサポートしているかどうかを最初に確認するのがしばしば賢明です。 これは、たとえば、没入型プレゼンテーションとインラインプレゼンテーションのどちらを使用するかを決定するためにも使用できます。</p>

<p>特定のモードがサポートされているかどうかを確認するには、{{domxref("XRSystem")}} のメソッド {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} を呼び出します。 これは、指定されたタイプのセッションが使用できる場合は <code>true</code>、そうでない場合は <code>false</code> に解決される promise を返します。</p>

<pre class="brush: js notranslate">const immersiveOK = await navigator.xr.isSessionSupported("immersive-vr");
if (immersiveOK) {
  // 没入型 VR セッションを作成して使用する
} else {
  // 代わりにインラインセッションを作成するか、
  // インラインが必要な場合は非互換性についてユーザーに伝えます
}
</pre>

<h2 id="Creating_and_starting_the_session" name="Creating_and_starting_the_session">セッションの作成と開始</h2>

<p>WebXR セッションは {{domxref("XRSession")}} オブジェクトによって表されます。 <code>XRSession</code> を取得するには、{{domxref("XRSystem")}} の {{domxref("XRSystem.requestSession", "requestSession()")}} メソッドを呼び出します。 このメソッドは、<code>XRSession</code> を正常に確立できる場合に <code>XRSession</code> で解決する promise を返します。 基本的には、次のようになります。</p>

<pre class="brush: js notranslate">xr.requestSession("immersive-vr").then((session) =&gt; {
  xrSession = session;
  /* セッションのセットアップを続行します */
});
</pre>

<p>このコードスニペットの <code>requestSession()</code> に渡されるパラメーター <code>immersive-vr</code> に注意してください。 この文字列は、確立する WebXR セッションのタイプを指定します。 この場合は、完全に没入型の仮想現実体験です。 次の3つの選択肢があります。</p>

<dl>
 <dt><code>immersive-vr</code></dt>
 <dd>ヘッドセットまたは同様のデバイスを使用した、完全に没入型の仮想現実セッション。 ユーザーの周りの世界をあなたが提示する画像で完全に置き換えます。</dd>
 <dt><code>immersive-ar</code></dt>
 <dd>ヘッドセットまたは類似の装置を使用して画像が現実世界に追加される拡張現実セッション。 <em>AR 仕様は流動的であるため、このオプションはまだ広くサポートされていません。</em></dd>
 <dt><code>inline</code></dt>
 <dd>ドキュメントウィンドウのコンテキスト内での XR 画像の画面表示。</dd>
</dl>

<p>機能ポリシーがその使用を禁止したり、ユーザーがヘッドセットの使用許可を拒否したりするなど、何らかの理由でセッションを作成できなかった場合、promise は拒否されます。 したがって、起動して WebXR セッションを返すより完全な関数は次のようになります。</p>

<pre class="brush: js notranslate">async function createImmersiveSession(xr) {
  try {
    session = await xr.requestSession("immersive-vr");
    return session;
  } catch(error) {
    throw error;
  }
}
</pre>

<p>この関数は、新しい {{domxref("XRSession")}} を返すか、セッションの作成中にエラーが発生した場合に例外をスローします。</p>

<h3 id="Customizing_the_session" name="Customizing_the_session">セッションのカスタマイズ</h3>

<p>表示モードに加えて、{{domxref("XRSystem.requestSession", "requestSession()")}} メソッドは、セッションをカスタマイズするための初期化パラメーターを持つオプションのオブジェクトを取ります。 現在、セッションの構成可能な唯一の側面は、世界の座標系を表すためにどの参照空間を使用する必要があるかです。 必要な参照空間または<span class="tlid-translation translation" lang="ja"><span title="">使用したい</span></span>参照空間と互換性のあるセッションを取得するために、必須またはオプションの参照空間を指定できます。</p>

<p>たとえば、無制限（<code>unbounded</code>）の参照空間が必要な場合は、取得するセッションで無制限の空間を使用できるようにするために、それを必須機能として指定できます。</p>

<pre class="brush: js notranslate">async function createImmersiveSession(xr) {
  try {
    session = await xr.requestSession("immersive-vr", {
      requiredFeatures: [ "unbounded" ]
    });
    return session;
  } catch(error) {
    throw error;
  }
}
</pre>

<p>一方、<em>インライン</em>セッションが必要で、ローカル（<code>local</code>）参照空間を使用する場合は、次のようにします。</p>

<pre class="brush: js notranslate">async function createInlineSession(xr) {
  try {
    session = await xr.requestSession("inline", {
      optionalFeatures: [ "local" ]
    });
    return session;
  } catch(error) {
    throw error;
  }
}
</pre>

<p>この <code>createInlineSession()</code> 関数は、ローカル参照空間と互換性のあるインラインセッションを作成しようとします。 参照空間を作成する準備ができたら、ローカル空間を試すことができます。 それが失敗した場合は、すべてのデバイスがサポートする必要があるビューアー（<code>viewer</code>）参照空間にフォールバックします。</p>

<h3 id="Preparing_the_new_session_for_use" name="Preparing_the_new_session_for_use">新しいセッションを使用するための準備</h3>

<p>{{domxref("XRSystem.requestSession", "requestSession()")}} メソッドが返した promise が正常に解決されると、使用可能な WebXR セッションが手中にあることがわかります。 次に、セッションを使用できるように準備し、アニメーションを開始できます。</p>

<p>セッションの構成を完了するために必要な（または必要になる可能性のある）主なことは、次のとおりです。</p>

<ul>
 <li>監視する必要があるイベントのハンドラーを追加します。 ほとんどの場合、これには {{domxref("XRSession.end_event", "end")}} が含まれるため、セッションの終了を検出できます。</li>
 <li>XR 入力コントローラーを使用する場合は、{{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} イベントを監視して、XR 入力コントローラーの追加または削除、およびさまざまな<a href="/ja/docs/Web/API/WebXR_Device_API/Inputs#Actions">選択およびスクイーズのアクションイベント</a>を検出します。</li>
 <li>{{domxref("XRSystem")}} のイベント {{domxref("XRSystem.devicechange_event", "devicechange")}} を監視して、利用可能な没入型デバイスのセットが変更されたときに通知を受けることができます。</li>
 <li>ターゲットコンテキストで {{domxref("HTMLCanvasElement")}} のメソッド {{domxref("HTMLCanvasElement.getContext", "getContext()")}} を呼び出して、フレームをレンダリングする予定のキャンバスの WebGL コンテキストを取得します。</li>
 <li>WebGL データとモデルを設定し、シーンをレンダリングする準備をします。</li>
 <li>{{domxref("XRWebGLLayer")}} を作成し、セッションの {{domxref("XRRenderState", "renderState")}} のプロパティ {{domxref("XRRenderState.baseLayer", "baseLayer")}} に値を渡して、XR システムのソースとして WebGL コンテキストを設定します。</li>
 <li>必要に応じて、オブジェクトの初期位置と拡大縮小の計算を実行します。</li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Rendering">フレームレンダリングサイクル</a>を開始します。</li>
</ul>

<p>基本的な形式では、この最終的なセットアップを行うコードは次のようになります。</p>

<pre class="brush: js notranslate">async function runSession(session) {
  let worldData;

  session.addEventListener("end", onSessionEnd);

  let canvas = document.querySelector("canvas");
  gl = canvas.getContext("webgl", { xrCompatible: true });

  // WebGL データなどを設定する

  worldData = loadGLPrograms(session, "worlddata.xml");
  if (!worldData) {
    return NULL;
  }

  // WebGL の構成を完了する

  worldData.session.updateRenderState({
    baseLayer: new XRWebGLLayer(worldData.session, gl)
  });

  // シーンのレンダリングを開始します

  referenceSpace = await worldData.session.requestReferenceSpace("unbounded");
  worldData.referenceSpace = referenceSpace.getOffsetReferenceSpace(
        new XRRigidTransform(worldData.playerSpawnPosition, worldData.playerSpawnOrientation));
  worldData.animationFrameRequestID = worldData.session.requestAnimationFrame(onDrawFrame);

  return worldData;
}
</pre>

<p>この例では、<code>worldData</code> という名前のオブジェクトを作成して、その世界とレンダリング環境に関するデータをカプセル化します。 これには、{{domxref("XRSession")}} 自体、WebGL でシーンをレンダリングするために使用されるすべてのデータ、その世界の参照空間、および {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} によって返される ID が含まれます。</p>

<p>最初に、{{domxref("XRSession.end_event", "end")}} イベントのハンドラーが設定されます。 次に、レンダリングするキャンバスを取得し、その WebGL コンテキストへの参照を取得して、{{domxref("HTMLCanvasElement.getContext", "getContext()")}} を呼び出すときに <code>xrCompatible</code> オプションを指定します。</p>

<p>次に、WebGL レンダラーに必要なデータとセットアップが実行されてから、WebGL が独自のフレームバッファーとして WebGL コンテキストのフレームバッファーを使用するように構成されます。 これは、{{domxref("XRSession")}} のメソッド {{domxref("XRSession.updateRenderState", "updateRenderState()")}} を使用して行われ、レンダリング状態の {{domxref("XRRenderState.baseLayer", "baseLayer")}} を、WebGL コンテキストをカプセル化する新しく作成された {{domxref("XRWebGLLayer")}} に設定します。</p>

<h3 id="Preparing_to_render_the_scene" name="Preparing_to_render_the_scene">シーンをレンダリングする準備</h3>

<p>この時点で、<code>XRSession</code> 自体が完全に構成されているため、レンダリングを開始できます。 まず、その世界の座標が記述される参照空間が必要です。 <code>XRSession</code> の {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} メソッドを呼び出すことにより、セッションの初期参照空間を取得できます。 <code>requestReferenceSpace()</code> を呼び出すときに、必要な参照空間のタイプの名前を指定します。 この場合、<code>unbounded</code> です。 ニーズに応じて、<code>local</code> または <code>viewer</code> を簡単に指定できます。</p>

<div class="blockIndicator note">
<p>ニーズに合った適切な参照空間を選択する方法を理解するには、<a href="/ja/docs/Web/API/WebXR_Device_API/Geometry">WebXR の幾何学と参照空間</a>の<a href="/ja/docs/Web/API/WebXR_Device_API/Geometry#Selecting_the_reference_space_type">参照空間タイプの選択</a>を参照してください。</p>
</div>

<p><code>requestReferenceSpace()</code> によって返される参照空間は、原点 (0, 0, 0) を空間の中心に配置します。 これは素晴らしいことです — プレイヤーの視点が世界の正確な中心から始まる場合は。 しかし、ほとんどの場合、そうではありません。 その場合は、最初の参照空間で {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} を呼び出して、(0, 0, 0) がビューアーの位置に配置されるように<a href="/ja/docs/Web/API/WebXR_Device_API/Geometry#Establishing_the_reference_space">座標系をオフセット</a>し、同様に顔を望ましい方向にシフトする<em>新しい</em>参照空間を作成します。 <code>getOffsetReferenceSpace()</code> への入力値は、デフォルトの世界座標で指定されたプレーヤーの位置と方向をカプセル化する {{domxref("XRRigidTransform")}} です。</p>

<p>新しい参照空間が手中にあり、保管するために <code>worldData</code> オブジェクトに格納された状態で、セッションの {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを呼び出して、WebXR セッションのアニメーションの次のフレームをレンダリングするときにコールバックが実行されるようにスケジュールします。 戻り値は、必要に応じて後でリクエストをキャンセルするために使用できる ID であるため、<code>worldData</code> にも保存します。</p>

<p>最後に、<code>worldData</code> オブジェクトが呼び出し元に返され、メインコードが後で必要なデータを参照できるようになります。 この時点で、セットアッププロセスが完了し、アプリケーションのレンダリング段階に入りました。 レンダリングの詳細については、<a href="/ja/docs/Web/API/WebXR_Device_API/Rendering">レンダリングと WebXR フレームアニメーションコールバック</a>を参照してください。</p>

<h3 id="On_operational_details" name="On_operational_details">運用の詳細について</h3>

<p>明らかに、これはほんの一例です。 すべてを保存するために <code>worldData</code> オブジェクトは必要ありません。 あなたが好きな方法で維持するために必要な情報を保存できます。 別の情報が必要になったり、別の特定の要件が発生したりして、それはあなたが別の方法で、または別の順序で物事を行う原因となります。</p>

<p>同様に、モデルやその他の情報を読み込んだり、WebGL データ（テクスチャ、頂点バッファー、シェーダーなど）を設定したりするために使用する特定の方法は、ニーズや使用しているフレームワークの状況などによって大きく異なります。</p>

<h2 id="Important_session_maintenance_events" name="Important_session_maintenance_events">重要なセッション維持イベント</h2>

<p>WebXR セッションの過程で、セッションの状態の変化を示す、またはセッションを適切に動作させ続けるために必要なことを通知するいくつかのイベントのいずれかを受け取る場合があります。</p>

<h3 id="Detecting_changes_to_sessions_visibility_state" name="Detecting_changes_to_sessions_visibility_state">セッションの可視状態の変化の検出</h3>

<p><code>XRSession</code> の可視性の状態が変化すると（セッションが非表示または表示されたとき、またはユーザーが別のコンテキストにフォーカスしたときなど）、セッションは {{domxref("XRSession.visibilitychange_event", "visibilitychange")}} イベントを受け取ります。</p>

<pre class="brush: js notranslate">session.onvisibilitychange = (event) =&gt; {
  switch(event.session.visibilityState) {
    case "hidden":
      myFrameRate = 10;
      break;
    case "blurred-visible":
      myFrameRate = 30;
      break;
    case "visible":
    default:
      myFrameRate = 60;
      break;
  }
};</pre>

<p>この例では、可視性の状態に応じて変数 <code>myFrameRate</code> を変更します。 おそらく、レンダラーはこの値を使用して、アニメーションループの進行に応じて新しいフレームをレンダリングする頻度を計算します。 したがって、シーンの「ぼかし（blurred）」が多くなるほどレンダリングの頻度は低くなります。</p>

<h3 id="Detecting_reference_space_resets" name="Detecting_reference_space_resets">参照空間のリセットの検出</h3>

<p>時折、ユーザーの世界での位置を追跡しているときに、<a href="/ja/docs/Web/API/WebXR_Device_API/Geometry#On_the_origins_of_spaces">ネイティブの原点</a>に不連続またはジャンプが発生することがあります。 これが発生する最も一般的なシナリオは、ユーザーが XR デバイスの再キャリブレーションを要求したとき、または XR ハードウェアから受信した追跡データの流れに一時的な障害が発生したときです。 これらの状況により、ネイティブの原点は、ネイティブの原点をユーザーの位置と向きに合わせるために必要な距離と方向の角度で突然ジャンプします。</p>

<p>これが発生すると、{{domxref("XRReferenceSpace.reset_event", "reset")}} イベントがセッションの {{domxref("XRReferenceSpace")}} に送信されます。 イベントの {{domxref("XRReferenceSpaceEvent.transform", "transform")}} プロパティは、ネイティブの原点を再調整するために必要な変換を詳述する {{domxref("XRRigidTransform")}} です。</p>

<div class="blockIndicator note">
<p><code>reset</code> イベントは {{domxref("XRSession")}} ではなく {{domxref("XRReferenceSpace")}} で発生することに注意してください。</p>
</div>

<p><code>reset</code> イベントのもう1つの一般的な原因は、制限付き参照空間（{{domxref("XRReferenceSpaceType")}} が <code>bounded-floor</code> である参照空間）が、{{domxref("XRBoundedReferenceSpace")}} のプロパティ {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} の変更によって指定されたジオメトリを持っている場合です。</p>

<p>参照空間のリセットのより一般的な原因と、詳細およびサンプルコードについては、{{domxref("XRReferenceSpace.reset_event", "reset")}} イベントのドキュメントを参照してください。</p>

<h3 id="Detecting_when_the_available_set_of_WebXR_input_controls_changes" name="Detecting_when_the_available_set_of_WebXR_input_controls_changes">WebXR 入力コントロールの使用可能なセットが変更されたときの検出</h3>

<p>WebXR は、WebXR システムに固有の入力コントロールのリストを保持しています。 これらのデバイスには、ハンドヘルドコントローラー、モーションセンサーカメラ、モーションセンシティブグローブ、その他のフィードバックデバイスなどが含まれます。 ユーザーが WebXR コントローラーデバイスを接続または切断すると、{{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} イベントが <code>XRSession</code> にディスパッチされます。 これは、デバイスの可用性をユーザーに通知する機会であり、デバイスの入力を監視し始め、構成オプションを提供するか、またはそれを使用するために必要なものを提供します。</p>

<h2 id="Ending_the_WebXR_session" name="Ending_the_WebXR_session">WebXR セッションの終了</h2>

<p>ユーザーの VR または AR セッションが終了に近づくと、セッションは終了します。 {{domxref("XRSession")}} の停止は、ユーザーがボタンをクリックしてセッションを終了したために停止する時であるとセッション自体が判断した場合（ユーザーが XR デバイスをオフにした場合など）、またはアプリケーションが然るべきその他の状況に応じて発生します。</p>

<p>ここでは、WebXR セッションの停止を要求する方法と、要求によるかどうかにかかわらず、セッションが終了したことを検出する方法の両方について説明します。</p>

<h3 id="Shutting_down_the_session" name="Shutting_down_the_session">セッションの停止</h3>

<p>終了時に WebXR セッションを完全に停止するには、セッションの {{domxref("XRSession.end", "end()")}} メソッドを呼び出す必要があります。 これは、停止がいつ完了するかを知るために使用できる <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">promise</a> を返します。</p>

<pre class="brush: js notranslate">async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* この時点で、WebXR は完全に停止しています */
  }
}
</pre>

<p><code>shutdownXR()</code> が呼び出し元に戻ると、WebXR セッションは完全かつ安全に停止しています。</p>

<p>リソースの解放など、セッションの終了時に実行する必要がある作業がある場合は、メインコード本体ではなく、{{domxref("XRSession.end_event", "end")}} イベントハンドラーでその作業を実行する必要があります。 このようにして、停止が自動的にトリガーされたか手動でトリガーされたかに関係なく、クリーンアップを処理します。</p>

<h3 id="Detecting_when_the_session_has_ended" name="Detecting_when_the_session_has_ended">セッションが終了したときの検出</h3>

<p>以前に確立したように、{{domxref("XRSession.end", "end()")}} メソッドを呼び出したか、ユーザーがヘッドセットをオフにしたか、XR システムで何らかの解決できないエラーが発生したかなど、{{domxref("XRSession")}} に送信される {{domxref("XRSession.end_event", "end")}} イベントを監視することで、WebXR セッションが終了したことを検出できます。</p>

<pre class="brush: js notranslate">session.onend = (event) =&gt; {
  /* セッションが停止しました */

  freeResources();
};</pre>

<p>ここでは、セッションが終了し、<code>end</code> イベントが受信されると、<code>freeResources()</code> 関数が呼び出され、XR の提示を処理するために以前に割り当てたりロードしたりしたリソースが解放されます。 <code>end</code> イベントハンドラーで <code>freeResources()</code> を呼び出すことにより、ユーザーが停止をトリガーするボタンをクリックしたとき（上記の <code>shutdownXR()</code> 関数を呼び出すことなど）と、エラーまたは何らかの理由でセッションが自動的に終了したときの両方で <code>freeResources()</code> を呼び出します。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API </a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Fundamentals">WebXR の基本</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Spatial_tracking">WebXR での空間追跡</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Cameras">視点とビューアー: WebXR でのカメラのシミュレーション</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces">制限付き参照空間の使用</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Inputs">入力と入力ソース</a></li>
</ul>
