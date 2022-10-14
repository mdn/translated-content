---
title: WebXR Device API
slug: Web/API/WebXR_Device_API
---

{{DefaultAPISidebar("WebXR Device API")}}

**WebXR** は、仮想世界を提示するため（**仮想現実**、virtual reality、または **VR**）に、またはグラフィック画像を現実世界に追加するため（**拡張現実**、augmented reality、または **AR**）に設計されたハードウェアへの 3D シーンのレンダリングをサポートするために一緒に使用される標準のグループです。 **WebXR デバイス API** は WebXR 機能セットのコアを実装し、出力デバイスの選択を管理し、適切なフレームレートで選択したデバイスに 3D シーンをレンダリングし、入力コントローラーを使用して作成されたモーションベクトルを管理します。

WebXR 互換デバイスには、モーションと方向の追跡が可能な完全没入型 3D ヘッドセット、フレームを通した現実世界のシーンの上にグラフィックをオーバーレイする眼鏡、カメラで世界を捉えることで現実を拡張し、コンピューターで生成された画像でそのシーンを増強する携帯電話が含まれます。

これらを実現するために、WebXR デバイス API は次の主要な機能を提供します。

- 互換性のある VR または AR 出力デバイスを見つける。
- 3D シーンを適切なフレームレートでデバイスにレンダリングする。
- （オプション）出力を 2D ディスプレイにミラーリングする。
- 入力コントロールの動きを表すベクトルを作成する。

最も基本的なレベルでは、それぞれの目の位置を計算し、その位置からシーンをレンダリングすることにより、ユーザーのそれぞれの目の視点からレンダリングするためにシーンに適用するパースペクティブを計算することにより、ユーザーが現在向いている方向を見ているシーンが 3D で提示されます。 これらの 2 つの画像はそれぞれ単一のフレームバッファーにレンダリングされ、左目のレンダリングされた画像は左側に、右目の視点はバッファーの右半分にレンダリングされます。 シーンに対する両目の視点がレンダリングされると、結果のフレームバッファーが WebXR デバイスに配信され、ヘッドセットまたは他の適切なディスプレイデバイスを通じてユーザーに提示されます。

## WebXR デバイス API の概念と使用方法

古い [WebVR API](/ja/docs/Web/API/WebVR_API) は仮想現実（VR）をサポートするためだけに設計されましたが、WebXR はウェブ上の VR と拡張現実（AR）の両方をサポートします。 AR 機能のサポートは、WebXR 拡張現実モジュールによって追加されます。

典型的な XR デバイスは 3 または 6 自由度を持つことができ、外部位置センサーがある場合とない場合があります。

機器はまた、ユーザーが空間を移動したり、頭を回転したりすることなどを感知するために使用する加速度計、気圧計、または他のセンサーを含んでいるかもしれません。

## WebXR API へのアクセス

特定のウィンドウのコンテキスト内で WebXR API にアクセスするには、{{domxref("navigator.xr")}} プロパティを使用します。 これは、WebXR デバイス API 全体を公開する {{domxref("XRSystem")}} オブジェクトを返します。

- {{domxref("navigator.xr")}} {{ReadOnlyInline}}
  - : {{domxref("Navigator")}} インターフェイスに追加されたこのプロパティは、WebXR API を公開する {{domxref("XRSystem")}} オブジェクトを返します。 このプロパティがない場合、WebXR は使用できません。

## WebXR インターフェイス

- {{DOMxRef("XRSystem")}}
  - : {{domxref("Navigator.xr", "navigator.xr")}} プロパティは、{{domxref("XRSystem")}} のウィンドウのインスタンスを返します。 これは、コードが WebXR API にアクセスするメカニズムです。 `XRSystem` インターフェイスを使用して、{{domxref("XRSession")}} を作成し、実際の AR または VR セッション、あるいはその両方を表すことができます。
- {{DOMxRef("XRFrame")}}
  - : XR セッションを提示している間、セッションを構成するすべての追跡対象オブジェクトの状態は `XRFrame` によって表されます。 `XRFrame` を取得するには、セッションの {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを呼び出し、コールバックを提供します。 コールバックは、`XRFrame` が利用可能になると呼び出されます。 追跡状態を通信するイベントも `XRFrame` を使用してその情報を含みます。
- {{DOMxRef("XRRenderState")}}
  - : `XRSession` による画像出力の合成方法を変更する構成可能なプロパティのセットを提供します。
- {{DOMxRef("XRSession")}}
  - : XR ハードウェアと対話するためのインターフェイスを提供します。 {{domxref("XRSystem.requestSession", "navigator.xr.requestSession()")}} から `XRSession` が取得されると、セッションを使用して、ビューアーの位置と方向を確認し、デバイスに環境情報を照会し、仮想世界や拡張世界をユーザーに提示できます。
- {{DOMxRef("XRSpace")}}
  - : `XRSpace` は、すべての仮想座標系インターフェイスが基にする不透明な基本クラスです。 WebXR での位置は、特定の {{domxref("XRFrame")}} が発生する時点で、常に特定の `XRSpace` に関連して表現されます。 空間の座標系は、指定された物理的な位置を原点とします。
- {{DOMxRef("XRReferenceSpace")}}
  - : {{domxref("XRSpace")}} のサブクラスであり、ユーザーの物理的環境との関係で空間関係を識別するために使用されます。 `XRReferenceSpace` 座標系は、{{domxref("XRSession")}} の存続期間を通じて変更されないままであると予想されます。 世界には境界がなく、あらゆる方向に無限に広がります。
- {{DOMxRef("XRBoundedReferenceSpace")}}
  - : `XRBoundedReferenceSpace` は、{{domxref("XRReferenceSpace")}} 座標系を拡張して、境界が設定された有限世界のサポートをさらに組み込みます。 `XRReferenceSpace` とは異なり、原点は床にある必要があります（つまり、床では y = 0）。 原点の x 成分と z 成分は、通常、部屋または表面の中心またはその付近にあると推定されます。
- {{DOMxRef("XRView")}}
  - : 特定のフレームの XR シーンへの単一のビューを表します。 各 `XRView` は、シーンをユーザーに提示するために使用されるビデオ表示面に対応しています。 例えば、特定の XR デバイスには、左目用と右目用の 2 つのビューがあります。 各ビューには、立体画像効果を作成できるようにするために、カメラに対するビューの位置をシフトするために使用されるオフセットがあります。
- {{DOMxRef("XRViewport")}}
  - : ビューポートについて説明します。 ビューポートは、グラフィック面の長方形の部分です。 WebXR では、ビューポートは、特定の {{domxref("XRView")}} に対応する描画面の領域を表します。 例えば、2 つの目の視点の 1 つをシーンにレンダリングするために使用される WebGL フレームバッファーの部分などです。
- {{DOMxRef("XRRigidTransform")}}
  - : {{domxref("XRSpace")}} で記述されている、仮想空間の座標系での位置と方向を使用して定義された変換。
- {{DOMxRef("XRPose")}}
  - : {{domxref("XRSpace")}} を基準にした空間内の位置と方向を記述します。
- {{DOMxRef("XRViewerPose")}}
  - : {{domxref("XRPose")}} に基づいて、`XRViewerPose` は、XR デバイスによって示される WebXR シーンのビューアーの状態を指定します。 {{domxref("XRView")}} オブジェクトの配列が含まれ、それぞれがシーンの 1 つの視点を表します。 例えば、人間の視覚で知覚される立体視ビューを作成するには、2 つのビューが必要です。 1 つは左目用、もう 1 つは右目用です。 1 つのビューはビューアーの位置から少し左にオフセットされ、もう 1 つのビューは同じ距離だけ右にオフセットされます。 ビューリストは、マルチユーザー環境で、シーンの各観客の視点を表すためにも使用できます。
- {{DOMxRef("XRInputSource")}}
  - : ユーザーがビューアーと同じ仮想空間内でターゲットアクションを実行するために使用できる任意の入力デバイスを表します。 入力ソースには、ハンドコントローラー、光学追跡システム、および XR デバイスに明示的に関連付けられている他のデバイスなどのデバイスが含まれます。 キーボード、マウス、ゲームパッドなどの他の入力デバイスは、`XRInputSource` インスタンスとして提示されません。
- {{DOMxRef("XRWebGLLayer")}}
  - : シーンのビューがレンダリングされる [WebGL](/ja/docs/Web/API/WebGL_API) フレームバッファーとして機能するレイヤー。 WebGL を使用してシーンをレンダリングすると、グラフィックアクセラレーションによりパフォーマンスが大幅に向上します。

### イベントインターフェイス

以下のインターフェイスは、WebXR API によって使用されるイベントを表すために使用されます。

- {{domxref("XRInputSourceEvent")}}
  - : {{domxref("XRInputSource")}} の状態が変化すると送信されます。 これは、例えば、デバイスの位置や方向が変わったとき、またはボタンが押されたり離されたときに発生する可能性があります。
- {{domxref("XRInputSourcesChangeEvent")}}
  - : {{domxref("XRSession")}} の使用可能な入力ソースのセットが変更されたことを示すために送信されます。
- {{domxref("XRReferenceSpaceEvent")}}
  - : {{domxref("XRReferenceSpace")}} の状態が変化すると送信されます。
- {{domxref("XRSessionEvent")}}
  - : {{domxref("XRSession")}} の状態が変化したことを示すために送信されます。 例えば、位置や向きがです。

## WebGL API の拡張機能

WebGL API は、WebXR 仕様によって拡張され、WebGL コンテキストを拡張して、WebXR デバイスで表示するビューのレンダリングに使用できるようにします。

- {{domxref("WebGLRenderingContextBase.makeXRCompatibile","WebGLRenderingContextBase.makeXRCompatibile()")}}
  - : WebGL コンテキストを WebXR と互換性があるように構成します。 {{domxref("WebGLContextAttributes.xrCompatible", "xrCompatible")}} プロパティを `true` に設定してコンテキストを最初に作成しなかった場合は、WebXR レンダリングに WebGL コンテキストを使用する前に `makeXRCompatible()` を呼び出す必要があります。 コンテキストが準備されると解決する {{jsxref("Promise")}} を返します。 WebXR で使用するようにコンテキストを構成できない場合は拒否されます。

## ガイドとチュートリアル

次のガイドとチュートリアルは、WebXR とその基礎となる 3D および VR/AR のグラフィックスの概念を理解する方法を学ぶための優れたリソースです。

### 基盤と基礎

- [WebXR の基本](/ja/docs/Web/API/WebXR_Device_API/Fundamentals)
  - : WebXR を使用してコンテンツを作成する方法の詳細に入る前に、このテクノロジーの概要を読んでおくと役立つかもしれません。 これには、使い慣れていない用語や、新しい方法で使用されている可能性のある用語の紹介が含まれています。
- [ウェブの行列計算](/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : CSS transform と WebGL の両方の目的、および WebXR コンテキストでのオブジェクトの配置と方向の処理を含む、ウェブでの行列の使用方法をカバーするガイド。
- [WebXR アプリケーションのライフサイクル](/ja/docs/Web/API/WebXR_Device_API/Lifecycle)
  - : 起動から停止までの WebXR アプリケーションの全体的なライフサイクルの概要。 この記事は、コードに詳しく触れずに WebXR エクスペリエンスを作成するための基本的な方法の紹介です。 これは、次のステップに備えるための良い方法です。

### 複合現実エクスペリエンスの作成

- [WebXR セッションの起動と停止](/ja/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
  - : ヘッドセットやゴーグルなどの XR デバイスを使用して実際にシーンを提示する前に、3D 効果をユーザーに提示できるように、XR デバイスの各ディスプレイに表示するシーンを描画するレンダリングレイヤーにバインドされた WebXR セッションを作成する必要があります。 このガイドでは、WebXR セッションを作成および停止する方法について説明します。
- [WebXR の幾何学と参照空間](/ja/docs/Web/API/WebXR_Device_API/Geometry)
  - : このガイドでは、3D 幾何学の必要な概念について簡単に説明し、その幾何学が WebXR でどのように表現されるかの基本を詳しく説明します。 参照空間を使用してオブジェクト（およびビューアー）を配置する方法と、使用可能な参照空間のタイプの違い、およびそれらの使用例について説明します。
- [WebXR での空間追跡](/ja/docs/Web/API/WebXR_Device_API/Spatial_tracking)
  - : このガイドでは、オブジェクト（ユーザーの体やそのパーツを含む）が空間に配置される方法と、互いの動きと向きが時間とともに監視および管理される方法について説明します。 この記事では、空間（space）、ポーズ（pose、姿勢）、ビューアー（viewer）、ビュー（view）の関係について説明します。
- [レンダリングと WebXR フレームアニメーションコールバック](/ja/docs/Web/API/WebXR_Device_API/Rendering)
  - : このガイドでは、フレームのレンダリングをスケジュールする方法から始めて、ビュー内のオブジェクトの配置を決定する方法と、シーンの 2 つの目のビューのそれぞれに使用される WebGL バッファーにオブジェクトをレンダリングする方法について説明します。
- [視点とビューアー: WebXR でのカメラのシミュレーション](/ja/docs/Web/API/WebXR_Device_API/Cameras)
  - : WebGL（および WebXR）には、実際にはカメラの概念がありません。 これは、3D グラフィックで視点を表すために使用される従来の概念です。 この記事では、カメラをシミュレートする方法と、ビューアーが実際には動かない世界をビューアーが動くように錯覚させる方法を説明します。
- [WebXR 設定の照明](/ja/docs/Web/API/WebXR_Device_API/Lighting)
  - : WebXR レンダリングは WebGL に基づいているため、3D アプリケーションで使用されているのと同じ照明技術が WebXR シーンに適用されます。 ただし、照明のコードを記述するときに考慮する必要がある拡張現実および仮想現実の設定の作成に固有の問題があります。 この記事では、これらの問題について説明します。
- [制限付き参照空間の使用](/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
  - : この記事では、`bounded-floor` 参照空間を使用して、XR ハードウェアによって追跡された領域を離れたり、物理的な障害物との衝突なしに、ビューアーが安全に動き回れる境界を定義する方法を検討します。 それをサポートするデバイスでは、`bounded-floor` はあなたのレパートリーの便利なツールになります。

### インタラクティブにする

- [移動、向き、モーション: WebXR の例](/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion)
  - : この例とチュートリアルでは、WebXR ドキュメント全体で学習した情報を使用して、ユーザーが VR ヘッドセットとキーボードとマウスの両方を使用して動き回れる回転立方体を含むシーンを作成します。
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
  - : 入力ソースと、WebXR セッションの制御に使用されている入力デバイスを効率的に管理する方法、およびそれらのデバイスからユーザー入力を受信して ​​ 処理する方法のガイド。
- [ターゲティングとヒット検出](/ja/docs/Web/API/Web_Audio_API/Targeting)
  - : 入力ソースのターゲッティングレイモードとターゲッティングレイ空間を使用してターゲッティングレイを表示し、ターゲットとする面またはオブジェクトを識別し、関連タスクを実行する方法。
- [WebXR 入力プロファイルの使用](/ja/docs/Web/API/WebXR_Device_API/Input_profiles)
  - : WebXR 入力プロファイル登録所（[WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry)）によって提供される {{Glossary("JSON")}} データを解釈するためのガイド。 これは、ユーザーの使用可能な入力デバイスで使用可能なオプションとコントロールを決定するために使用できます。
- [WebXR アプリケーションでの高度なコントローラーとゲームパッドのサポート](/ja/docs/Web/WebXR_Device_API/Gamepads)
  - : WebXR は {{domxref("Gamepad")}} オブジェクトを使用して、複雑な入力デバイス（複数のボタンや軸を持つハンドコントローラーなど）やゲ ​​ ームパッドのようなデバイスで利用可能なコントロールを記述します。 このガイドでは、これらのデバイスのコントロールを使用する方法を学びます。

### パフォーマンスとセキュリティ

- [WebXR パフォーマンスガイド](/ja/docs/Web/API/WebXR_Device_API/Performance)
  - : WebXR アプリケーションのパフォーマンスを最適化するのに役立つ推奨事項とヒント。
- [WebXR の権限とセキュリティ](/ja/docs/Web/API/WebXR_Device_API/Permissions_and_security)
  - : WebXR デバイス API には、機能ポリシーの確立から、ユーザーが複合現実プレゼンテーションをアクティブ化する前に使用する意図を確認することまで、いくつかのセキュリティ領域があります。

### 他のメディアを含む

- [3D 環境でのポジショナルオーディオ](/ja/docs/Web/Media/3D_audio)
  - : 画面にレンダリングされた 3D シーン、またはヘッドセットを使用して体験した複合現実感のいずれかである 3D 環境では、ソースの方向から来ているように聞こえるようにオーディオを実行することが重要です。 このガイドでは、これを行う方法について説明します。
- [3D 環境でのビデオの再生](/ja/docs/Web/Media/3D_video)
  - : このガイドでは、ビデオを 3D シーンに再生する方法について説明します。 この手法は、平らなコンピューター画面に表示される標準の [WebGL](/ja/docs/Web/API/WebGL_API) アプリケーション、または [WebXR](/ja/docs/Web/API/WebXR_Device_API) で生成された仮想現実環境や拡張現実環境の両方で使用できます。

## 仕様

| 仕様                         | 状態                     | コメント |
| ---------------------------- | ------------------------ | -------- |
| {{SpecName("WebXR")}} | {{Spec2("WebXR")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.xr")}}

## 関連情報

- [ウェブのグラフィック](/ja/docs/Web/Guide/Graphics)
- [グラフィックの描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [WebGL API](/ja/docs/Web/API/WebGL_API): ウェブ上の 2D および 3D グラフィックスの高速化
- [Canvas API](/ja/docs/Web/API/Canvas_API): ウェブのための 2D 描画
- [Canvas チュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)
