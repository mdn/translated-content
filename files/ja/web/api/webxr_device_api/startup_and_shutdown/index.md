---
title: WebXR セッションの起動と停止
slug: Web/API/WebXR_Device_API/Startup_and_shutdown
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_header}}

すでに 3D グラフィックス全般、特に WebGL に精通していると想定すると、次の大胆なステップで複合現実を実現できます。 現実の世界に加えて、またはその代わりに人工の風景やオブジェクトを表示するという考え方は、それほど複雑ではありません。 拡張現実または仮想現実のシナリオのレンダリングを開始する前に、WebXR セッションを作成してセットアップする必要があります。 また、適切に停止する方法も知っておく必要があります。 この記事では、これらのことを行う方法を学びます。

## WebXR API へのアクセス

アプリによる WebXR API へのアクセスは、{{domxref("XRSystem")}} オブジェクトから始まります。 このオブジェクトは、ユーザーの機器で利用可能なハードウェアとドライバーを通じて利用可能な WebXR デバイススイート全体を表します。 {{domxref("Navigator")}} のプロパティ {{domxref("Navigator.xr", "xr")}} を介してドキュメントで使用できるグローバルな `XRSystem` オブジェクトがあります。 これは、使用可能なハードウェアとドキュメントの環境を考慮して、適切な XR ハードウェアが使用できる場合に `XRSystem` オブジェクトを返すプロパティです。

したがって、`XRSystem` オブジェクトをフェッチする最も単純なコードは次のとおりです。

```js
const xr = navigator.xr;
```

WebXR が利用できない場合、`xr` の値は `null` または `undefined` になります。

### WebXR の可用性

新しい、まだ開発中の API として、WebXR のサポートは特定のデバイスとブラウザーに限定されています。 そして、それらでさえ、デフォルトで有効にならないかもしれません。 ただし、互換性のあるシステムがない場合でも、WebXR を試すことができる選択肢がある場合があります。

#### WebXR ポリフィル

WebXR 仕様を設計しているチームは、WebXR API をサポートしていないブラウザーで WebXR をシミュレートするために使用できる [WebXR ポリフィル](https://github.com/immersive-web/webxr-polyfill)を公開しています。 ブラウザーが古い [WebVR API](/ja/docs/Web/API/WebVR_API) をサポートしている場合は、それが使用されます。 それ以外の場合、ポリフィルは、Google の Cardboard VR API を使用する実装にフォールバックします。

ポリフィルは仕様とともに維持され、仕様に合わせて最新に保たれます。 さらに、WebXR および WebXR に関連するその他のテクノロジーのサポートと、ポリフィルの変更の実装の経時的なサポートとして、ブラウザーとの互換性を維持するために更新されます。

必ず readme を注意深く読んでください。 ポリフィルには、ターゲットブラウザーに含まれる新しい JavaScript 機能との互換性の程度に応じて、いくつかのバージョンがあります。

#### WebXR API エミュレーター拡張機能

Mozilla WebXR チームは、WebXR API をエミュレートし、HTC Vive、Oculus Go、Oculus Quest、Samsung Gear、Google Cardboard などの互換性のあるさまざまなデバイスをシミュレートする、Firefox と Chrome の両方と互換性のある [WebXR API Emulator](https://blog.mozvr.com/webxr-emulator-extension/) ブラウザー拡張機能を作成しました。 拡張機能を配置すると、ヘッドセットと任意のハンドコントローラーの位置と向き、およびコントローラーのボタンを制御できる開発者ツールパネルを開くことができます。

##### エミュレーターの使用

実際のヘッドセットを使用するのに比べて少し厄介ですが、これにより、WebXR が通常利用できないデスクトップコンピューターで WebXR のコードを試して開発することができます。 また、コードを実際のデバイスに取り込む前に、いくつかの基本的なテストを実行できます。 ただし、エミュレーターはまだすべての WebXR API を完全にエミュレートしていないため、予期しない問題が発生する可能性があることに注意してください。 ここでも、readme ファイルを注意深く読み、開始する前に制限事項を確認してください。

**重要**: 製品をリリースまたは出荷する前に、常に実際の AR や VR のハードウェアでコードをテストする必要があります。 エミュレート、シミュレーション、またはポリフィルされた環境は、物理デバイスでの実際のテストに代わる適切なものではありません。

##### 拡張機能の取得

以下のサポートされているブラウザー用の WebXR API エミュレーターをダウンロードしてください。

- [Google Chrome](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje)
- [Mozilla Firefox](https://addons.mozilla.org/ja/firefox/addon/webxr-api-emulator/)

[拡張機能のソースコード](https://github.com/MozillaReality/WebXR-emulator-extension)は、GitHub で入手できます。

##### エミュレーターの問題とメモ

これは拡張機能に関する完全な記事の場所ではありませんが、言及する価値のある特定の事項がいくつかあります。

拡張機能のバージョン 0.4.0 は 2020 年 3 月 26 日に発表されました。 安定状態に近づいている [WebXR AR モジュール](https://www.w3.org/TR/webxr-ar-module-1/)による拡張現実（AR）のサポートが導入されました。 AR のドキュメントは、近日中に MDN で公開されます。

その他の改善には、エミュレーターを更新して `XR` インターフェイスの名前を {{domxref("XRSystem")}} に変更し、スクイーズ（グリップ）入力ソースのサポートを導入し、{{domxref("XRInputSource")}} のプロパティ {{domxref("XRInputSource.profiles", "profiles")}} のサポートを追加します。

### コンテキスト要件

WebXR 互換環境は、安全にロードされたドキュメントから始まります。 ドキュメントは、ローカルドライブ（`http://localhost/...` などの URL を使用するなど）からロードするか、ページのロード時に {{Glossary("HTTPS")}} を使用する必要があります。 同様に、JavaScript コードは安全にロードされている必要があります。

ドキュメントが安全にロードされなかった場合は、それほど遠くまで到達できません。 {{domxref("navigator.xr")}} プロパティは、ドキュメントが安全にロードされていない場合には存在しません。 これは、互換性のある XR ハードウェアが利用できない場合にも当てはまります。 どちらの場合でも、`xr` プロパティの欠如に備える必要があり、エラーを適切に処理するか、何らかの形式のフォールバックを提供する必要があります。

### WebXR ポリフィルにフォールバック

フォールバックの選択肢の 1 つは、WebXR 標準化プロセスを担当する [Immersive Web ワーキンググループ](https://www.w3.org/immersive-web/)によって提供される [WebXR ポリフィル](https://github.com/immersive-web/webxr-polyfill/)です。 {{Glossary("polyfill","ポリフィル")}}は、WebXR をネイティブでサポートしていないブラウザーに WebXR のサポートを提供し、サポートしているブラウザーの実装間の不整合を解消するため、WebXR がネイティブで利用できる場合でも役立つ場合があります。

ここでは、前の {{HTMLElement("script")}} タグを使用してポリフィルが含まれている、またはロードされていると想定して、オプションでポリフィルをインストールした後に {{domxref("XRSystem")}} オブジェクトを返す `getXR()` 関数を定義します。

```js
let webxrPolyfill = null;

function getXR(usePolyfill) {
  let tempXR;

  switch (usePolyfill) {
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

const xr = getXR("no"); // ネイティブの XRSystem オブジェクトを取得
const xr = getXR("yes"); // 常にポリフィルから XRSystem を返す
const xr = getXR("if-needed"); // navigator.xr がない場合にのみポリフィルを使用
```

返された `XRSystem` オブジェクトは、MDN で提供されているドキュメントに従って使用できます。 グローバル変数 `webxrPolyfill` は、ポリフィルへの参照を保持するためにのみ使用され、不要になるまでポリフィルを使用できるようにします。 これを `null` に設定すると、依存しているオブジェクトがそれを使用しなくなったときに、ポリフィルをガベージコレクションできることを示します。

もちろん、必要に応じてこれを簡略化できます。 アプリはおそらくポリフィルを使用するかどうかについてあまり行き来しないので、これを必要な特定のケースに単純化できます。

### 権限とセキュリティ

WebXR を中心に展開する多くのセキュリティ対策があります。 まず、ユーザーの世界観を完全に置き換える `immersive-vr` モードを使用するには、`xr-spatial-tracking` [機能ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)を設定する必要があります。 それに加えて、ドキュメントは安全で現在フォーカスされている必要があります。 最後に、{{domxref("Element.click_event", "click")}} イベントのハンドラーなどのユーザーイベントハンドラーから {{domxref("XRSystem.requestSession", "requestSession()")}} を呼び出す必要があります。

安全な WebXR の活動と使用方法の詳細については、[WebXR の権限とセキュリティ](/ja/docs/Web/API/WebXR_Device_API/Permissions_and_security)の記事を参照してください。

### 必要なセッションタイプが利用可能であることの確認

新しい WebXR セッションを作成する前に、ユーザーのハードウェアとソフトウェアが使用したいプレゼンテーションモードをサポートしているかどうかを最初に確認するのがしばしば賢明です。 これは、たとえば、没入型プレゼンテーションとインラインプレゼンテーションのどちらを使用するかを決定するためにも使用できます。

特定のモードがサポートされているかどうかを確認するには、{{domxref("XRSystem")}} のメソッド {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} を呼び出します。 これは、指定されたタイプのセッションが使用できる場合は `true`、そうでない場合は `false` に解決される promise を返します。

```js
const immersiveOK = await navigator.xr.isSessionSupported("immersive-vr");
if (immersiveOK) {
  // 没入型 VR セッションを作成して使用する
} else {
  // 代わりにインラインセッションを作成するか、
  // インラインが必要な場合は非互換性についてユーザーに伝えます
}
```

## セッションの作成と開始

WebXR セッションは {{domxref("XRSession")}} オブジェクトによって表されます。 `XRSession` を取得するには、{{domxref("XRSystem")}} の {{domxref("XRSystem.requestSession", "requestSession()")}} メソッドを呼び出します。 このメソッドは、`XRSession` を正常に確立できる場合に `XRSession` で解決する promise を返します。 基本的には、次のようになります。

```js
xr.requestSession("immersive-vr").then((session) => {
  xrSession = session;
  /* セッションのセットアップを続行します */
});
```

このコードスニペットの `requestSession()` に渡されるパラメーター `immersive-vr` に注意してください。 この文字列は、確立する WebXR セッションのタイプを指定します。 この場合は、完全に没入型の仮想現実体験です。 次の 3 つの選択肢があります。

- `immersive-vr`
  - : ヘッドセットまたは同様のデバイスを使用した、完全に没入型の仮想現実セッション。 ユーザーの周りの世界をあなたが提示する画像で完全に置き換えます。
- `immersive-ar`
  - : ヘッドセットまたは類似の装置を使用して画像が現実世界に追加される拡張現実セッション。 _AR 仕様は流動的であるため、このオプションはまだ広くサポートされていません。_
- `inline`
  - : ドキュメントウィンドウのコンテキスト内での XR 画像の画面表示。

機能ポリシーがその使用を禁止したり、ユーザーがヘッドセットの使用許可を拒否したりするなど、何らかの理由でセッションを作成できなかった場合、promise は拒否されます。 したがって、起動して WebXR セッションを返すより完全な関数は次のようになります。

```js
async function createImmersiveSession(xr) {
  try {
    session = await xr.requestSession("immersive-vr");
    return session;
  } catch (error) {
    throw error;
  }
}
```

この関数は、新しい {{domxref("XRSession")}} を返すか、セッションの作成中にエラーが発生した場合に例外をスローします。

### セッションのカスタマイズ

表示モードに加えて、{{domxref("XRSystem.requestSession", "requestSession()")}} メソッドは、セッションをカスタマイズするための初期化パラメーターを持つオプションのオブジェクトを取ります。 現在、セッションの構成可能な唯一の側面は、世界の座標系を表すためにどの参照空間を使用する必要があるかです。 必要な参照空間または使用したい参照空間と互換性のあるセッションを取得するために、必須またはオプションの参照空間を指定できます。

たとえば、無制限（`unbounded`）の参照空間が必要な場合は、取得するセッションで無制限の空間を使用できるようにするために、それを必須機能として指定できます。

```js
async function createImmersiveSession(xr) {
  try {
    session = await xr.requestSession("immersive-vr", {
      requiredFeatures: ["unbounded"],
    });
    return session;
  } catch (error) {
    throw error;
  }
}
```

一方、*インライン*セッションが必要で、ローカル（`local`）参照空間を使用する場合は、次のようにします。

```js
async function createInlineSession(xr) {
  try {
    session = await xr.requestSession("inline", {
      optionalFeatures: ["local"],
    });
    return session;
  } catch (error) {
    throw error;
  }
}
```

この `createInlineSession()` 関数は、ローカル参照空間と互換性のあるインラインセッションを作成しようとします。 参照空間を作成する準備ができたら、ローカル空間を試すことができます。 それが失敗した場合は、すべてのデバイスがサポートする必要があるビューアー（`viewer`）参照空間にフォールバックします。

### 新しいセッションを使用するための準備

{{domxref("XRSystem.requestSession", "requestSession()")}} メソッドが返した promise が正常に解決されると、使用可能な WebXR セッションが手中にあることがわかります。 次に、セッションを使用できるように準備し、アニメーションを開始できます。

セッションの構成を完了するために必要な（または必要になる可能性のある）主なことは、次のとおりです。

- 監視する必要があるイベントのハンドラーを追加します。 ほとんどの場合、これには {{domxref("XRSession.end_event", "end")}} が含まれるため、セッションの終了を検出できます。
- XR 入力コントローラーを使用する場合は、{{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} イベントを監視して、XR 入力コントローラーの追加または削除、およびさまざまな[選択およびスクイーズのアクションイベント](/ja/docs/Web/API/WebXR_Device_API/Inputs#Actions)を検出します。
- {{domxref("XRSystem")}} のイベント {{domxref("XRSystem.devicechange_event", "devicechange")}} を監視して、利用可能な没入型デバイスのセットが変更されたときに通知を受けることができます。
- ターゲットコンテキストで {{domxref("HTMLCanvasElement")}} のメソッド {{domxref("HTMLCanvasElement.getContext", "getContext()")}} を呼び出して、フレームをレンダリングする予定のキャンバスの WebGL コンテキストを取得します。
- WebGL データとモデルを設定し、シーンをレンダリングする準備をします。
- {{domxref("XRWebGLLayer")}} を作成し、セッションの {{domxref("XRRenderState", "renderState")}} のプロパティ {{domxref("XRRenderState.baseLayer", "baseLayer")}} に値を渡して、XR システムのソースとして WebGL コンテキストを設定します。
- 必要に応じて、オブジェクトの初期位置と拡大縮小の計算を実行します。
- [フレームレンダリングサイクル](/ja/docs/Web/API/WebXR_Device_API/Rendering)を開始します。

基本的な形式では、この最終的なセットアップを行うコードは次のようになります。

```js
async function runSession(session) {
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
    baseLayer: new XRWebGLLayer(worldData.session, gl),
  });

  // シーンのレンダリングを開始します

  referenceSpace = await worldData.session.requestReferenceSpace("unbounded");
  worldData.referenceSpace = referenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(
      worldData.playerSpawnPosition,
      worldData.playerSpawnOrientation,
    ),
  );
  worldData.animationFrameRequestID =
    worldData.session.requestAnimationFrame(onDrawFrame);

  return worldData;
}
```

この例では、`worldData` という名前のオブジェクトを作成して、その世界とレンダリング環境に関するデータをカプセル化します。 これには、{{domxref("XRSession")}} 自体、WebGL でシーンをレンダリングするために使用されるすべてのデータ、その世界の参照空間、および {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} によって返される ID が含まれます。

最初に、{{domxref("XRSession.end_event", "end")}} イベントのハンドラーが設定されます。 次に、レンダリングするキャンバスを取得し、その WebGL コンテキストへの参照を取得して、{{domxref("HTMLCanvasElement.getContext", "getContext()")}} を呼び出すときに `xrCompatible` オプションを指定します。

次に、WebGL レンダラーに必要なデータとセットアップが実行されてから、WebGL が独自のフレームバッファーとして WebGL コンテキストのフレームバッファーを使用するように構成されます。 これは、{{domxref("XRSession")}} のメソッド {{domxref("XRSession.updateRenderState", "updateRenderState()")}} を使用して行われ、レンダリング状態の {{domxref("XRRenderState.baseLayer", "baseLayer")}} を、WebGL コンテキストをカプセル化する新しく作成された {{domxref("XRWebGLLayer")}} に設定します。

### シーンをレンダリングする準備

この時点で、`XRSession` 自体が完全に構成されているため、レンダリングを開始できます。 まず、その世界の座標が記述される参照空間が必要です。 `XRSession` の {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} メソッドを呼び出すことにより、セッションの初期参照空間を取得できます。 `requestReferenceSpace()` を呼び出すときに、必要な参照空間のタイプの名前を指定します。 この場合、`unbounded` です。 ニーズに応じて、`local` または `viewer` を簡単に指定できます。

> [!NOTE]
> ニーズに合った適切な参照空間を選択する方法を理解するには、[WebXR の幾何学と参照空間](/ja/docs/Web/API/WebXR_Device_API/Geometry)の[参照空間タイプの選択](/ja/docs/Web/API/WebXR_Device_API/Geometry#selecting_the_reference_space_type)を参照してください。

`requestReferenceSpace()` によって返される参照空間は、原点 (0, 0, 0) を空間の中心に配置します。 これは素晴らしいことです — プレイヤーの視点が世界の正確な中心から始まる場合は。 しかし、ほとんどの場合、そうではありません。 その場合は、最初の参照空間で {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} を呼び出して、(0, 0, 0) がビューアーの位置に配置されるように[座標系をオフセット](/ja/docs/Web/API/WebXR_Device_API/Geometry#establishing_the_reference_space)し、同様に顔を望ましい方向にシフトする*新しい*参照空間を作成します。 `getOffsetReferenceSpace()` への入力値は、デフォルトの世界座標で指定されたプレーヤーの位置と方向をカプセル化する {{domxref("XRRigidTransform")}} です。

新しい参照空間が手中にあり、保管するために `worldData` オブジェクトに格納された状態で、セッションの {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを呼び出して、WebXR セッションのアニメーションの次のフレームをレンダリングするときにコールバックが実行されるようにスケジュールします。 戻り値は、必要に応じて後でリクエストをキャンセルするために使用できる ID であるため、`worldData` にも保存します。

最後に、`worldData` オブジェクトが呼び出し元に返され、メインコードが後で必要なデータを参照できるようになります。 この時点で、セットアッププロセスが完了し、アプリケーションのレンダリング段階に入りました。 レンダリングの詳細については、[レンダリングと WebXR フレームアニメーションコールバック](/ja/docs/Web/API/WebXR_Device_API/Rendering)を参照してください。

### 運用の詳細について

明らかに、これはほんの一例です。 すべてを保存するために `worldData` オブジェクトは必要ありません。 あなたが好きな方法で維持するために必要な情報を保存できます。 別の情報が必要になったり、別の特定の要件が発生したりして、それはあなたが別の方法で、または別の順序で物事を行う原因となります。

同様に、モデルやその他の情報を読み込んだり、WebGL データ（テクスチャ、頂点バッファー、シェーダーなど）を設定したりするために使用する特定の方法は、ニーズや使用しているフレームワークの状況などによって大きく異なります。

## 重要なセッション維持イベント

WebXR セッションの過程で、セッションの状態の変化を示す、またはセッションを適切に動作させ続けるために必要なことを通知するいくつかのイベントのいずれかを受け取る場合があります。

### セッションの可視状態の変化の検出

`XRSession` の可視性の状態が変化すると（セッションが非表示または表示されたとき、またはユーザーが別のコンテキストにフォーカスしたときなど）、セッションは {{domxref("XRSession.visibilitychange_event", "visibilitychange")}} イベントを受け取ります。

```js
session.onvisibilitychange = (event) => {
  switch (event.session.visibilityState) {
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
};
```

この例では、可視性の状態に応じて変数 `myFrameRate` を変更します。 おそらく、レンダラーはこの値を使用して、アニメーションループの進行に応じて新しいフレームをレンダリングする頻度を計算します。 したがって、シーンの「ぼかし（blurred）」が多くなるほどレンダリングの頻度は低くなります。

### 参照空間のリセットの検出

時折、ユーザーの世界での位置を追跡しているときに、[ネイティブの原点](/ja/docs/Web/API/WebXR_Device_API/Geometry#on_the_origins_of_spaces)に不連続またはジャンプが発生することがあります。 これが発生する最も一般的なシナリオは、ユーザーが XR デバイスの再キャリブレーションを要求したとき、または XR ハードウェアから受信した追跡データの流れに一時的な障害が発生したときです。 これらの状況により、ネイティブの原点は、ネイティブの原点をユーザーの位置と向きに合わせるために必要な距離と方向の角度で突然ジャンプします。

これが発生すると、{{domxref("XRReferenceSpace.reset_event", "reset")}} イベントがセッションの {{domxref("XRReferenceSpace")}} に送信されます。 イベントの {{domxref("XRReferenceSpaceEvent.transform", "transform")}} プロパティは、ネイティブの原点を再調整するために必要な変換を詳述する {{domxref("XRRigidTransform")}} です。

> [!NOTE]
> `reset` イベントは {{domxref("XRSession")}} ではなく {{domxref("XRReferenceSpace")}} で発生することに注意してください。

`reset` イベントのもう 1 つの一般的な原因は、制限付き参照空間（{{domxref("XRReferenceSpaceType")}} が `bounded-floor` である参照空間）が、{{domxref("XRBoundedReferenceSpace")}} のプロパティ {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} の変更によって指定されたジオメトリを持っている場合です。

参照空間のリセットのより一般的な原因と、詳細およびサンプルコードについては、{{domxref("XRReferenceSpace.reset_event", "reset")}} イベントのドキュメントを参照してください。

### WebXR 入力コントロールの使用可能なセットが変更されたときの検出

WebXR は、WebXR システムに固有の入力コントロールのリストを保持しています。 これらのデバイスには、ハンドヘルドコントローラー、モーションセンサーカメラ、モーションセンシティブグローブ、その他のフィードバックデバイスなどが含まれます。 ユーザーが WebXR コントローラーデバイスを接続または切断すると、{{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} イベントが `XRSession` にディスパッチされます。 これは、デバイスの可用性をユーザーに通知する機会であり、デバイスの入力を監視し始め、構成オプションを提供するか、またはそれを使用するために必要なものを提供します。

## WebXR セッションの終了

ユーザーの VR または AR セッションが終了に近づくと、セッションは終了します。 {{domxref("XRSession")}} の停止は、ユーザーがボタンをクリックしてセッションを終了したために停止する時であるとセッション自体が判断した場合（ユーザーが XR デバイスをオフにした場合など）、またはアプリケーションが然るべきその他の状況に応じて発生します。

ここでは、WebXR セッションの停止を要求する方法と、要求によるかどうかにかかわらず、セッションが終了したことを検出する方法の両方について説明します。

### セッションの停止

終了時に WebXR セッションを完全に停止するには、セッションの {{domxref("XRSession.end", "end()")}} メソッドを呼び出す必要があります。 これは、停止がいつ完了するかを知るために使用できる [promise](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

```js
async function shutdownXR(session) {
  if (session) {
    await session.end();

    /* この時点で、WebXR は完全に停止しています */
  }
}
```

`shutdownXR()` が呼び出し元に戻ると、WebXR セッションは完全かつ安全に停止しています。

リソースの解放など、セッションの終了時に実行する必要がある作業がある場合は、メインコード本体ではなく、{{domxref("XRSession.end_event", "end")}} イベントハンドラーでその作業を実行する必要があります。 このようにして、停止が自動的にトリガーされたか手動でトリガーされたかに関係なく、クリーンアップを処理します。

### セッションが終了したときの検出

以前に確立したように、{{domxref("XRSession.end", "end()")}} メソッドを呼び出したか、ユーザーがヘッドセットをオフにしたか、XR システムで何らかの解決できないエラーが発生したかなど、{{domxref("XRSession")}} に送信される {{domxref("XRSession.end_event", "end")}} イベントを監視することで、WebXR セッションが終了したことを検出できます。

```js
session.onend = (event) => {
  /* セッションが停止しました */

  freeResources();
};
```

ここでは、セッションが終了し、`end` イベントが受信されると、`freeResources()` 関数が呼び出され、XR の提示を処理するために以前に割り当てたりロードしたりしたリソースが解放されます。 `end` イベントハンドラーで `freeResources()` を呼び出すことにより、ユーザーが停止をトリガーするボタンをクリックしたとき（上記の `shutdownXR()` 関数を呼び出すことなど）と、エラーまたは何らかの理由でセッションが自動的に終了したときの両方で `freeResources()` を呼び出します。

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- [WebXR の基本](/ja/docs/Web/API/WebXR_Device_API/Fundamentals)
- [WebXR での空間追跡](/ja/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [視点とビューアー: WebXR でのカメラのシミュレーション](/ja/docs/Web/API/WebXR_Device_API/Cameras)
- [制限付き参照空間の使用](/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
