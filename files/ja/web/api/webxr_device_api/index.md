---
title: WebXR Device API
slug: Web/API/WebXR_Device_API
tags:
  - API
  - AR
  - Augmented Reality
  - Graphics
  - Overview
  - VR
  - Virtual Reality
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
translation_of: Web/API/WebXR_Device_API
---
<p>{{DefaultAPISidebar("WebXR Device API")}}</p>

<p><span class="seoSummary"><strong>WebXR</strong> は、仮想世界を提示するため（<strong>仮想現実</strong>、virtual reality、または <strong>VR</strong>）に、またはグラフィック画像を現実世界に追加するため（<strong>拡張現実</strong>、augmented reality、または <strong>AR</strong>）に設計されたハードウェアへの 3D シーンのレンダリングをサポートするために一緒に使用される標準のグループです。</span> <strong>WebXR デバイス API</strong> は WebXR 機能セットのコアを実装し、出力デバイスの選択を管理し、適切なフレームレートで選択したデバイスに 3D シーンをレンダリングし、入力コントローラーを使用して作成されたモーションベクトルを管理します。</p>

<p>WebXR 互換デバイスには、モーションと方向の追跡が可能な完全没入型 3D ヘッドセット、フレームを通した現実世界のシーンの上にグラフィックをオーバーレイする眼鏡、カメラで世界を捉えることで現実を拡張し、コンピューターで生成された画像でそのシーンを増強する携帯電話が含まれます。</p>

<p>これらを実現するために、WebXR デバイス API は次の主要な機能を提供します。</p>

<ul>
 <li>互換性のある VR または AR 出力デバイスを見つける。</li>
 <li>3D シーンを適切なフレームレートでデバイスにレンダリングする。</li>
 <li>（オプション）出力を 2D ディスプレイにミラーリングする。</li>
 <li>入力コントロールの動きを表すベクトルを作成する。</li>
</ul>

<p>最も基本的なレベルでは、それぞれの目の位置を計算し、その位置からシーンをレンダリングすることにより、ユーザーのそれぞれの目の視点からレンダリングするためにシーンに適用するパースペクティブを計算することにより、ユーザーが現在向いている方向を見ているシーンが 3D で提示されます。 これらの2つの画像はそれぞれ単一のフレームバッファーにレンダリングされ、左目のレンダリングされた画像は左側に、右目の視点はバッファーの右半分にレンダリングされます。 シーンに対する両目の視点がレンダリングされると、結果のフレームバッファーが WebXR デバイスに配信され、ヘッドセットまたは他の適切なディスプレイデバイスを通じてユーザーに提示されます。</p>

<h2 id="WebXR_Device_API_concepts_and_usage" name="WebXR_Device_API_concepts_and_usage">WebXR デバイス API の概念と使用方法</h2>

<figure style="background: #eee; padding: 0.5em; border: 1px solid #aaa; border-radius: 1em; max-width: 20em; margin-bottom: 1em; margin-right: 2em; float: left;">
<figcaption><strong>WebXR ハードウェア設定の例</strong></figcaption>
<img alt="「ヘッドマウントディスプレイ（Head mounted display）」というラベルの付いたゴーグルを、「位置センサー（Position sensor）」というラベルの付いたウェブカメラを備えたモニターに向けた状態で椅子に座っている人のスケッチ" src="https://mdn.mozillademos.org/files/11035/hw-setup.png"></figure>

<p>古い <a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> は仮想現実（VR）をサポートするためだけに設計されましたが、WebXR はウェブ上の VR と拡張現実（AR）の両方をサポートします。 AR 機能のサポートは、WebXR 拡張現実モジュールによって追加されます。</p>

<p>典型的な XR デバイスは 3 または 6 自由度を持つことができ、外部位置センサーがある場合とない場合があります。</p>

<p>機器はまた、ユーザーが空間を移動したり、頭を回転したりすることなどを感知するために使用する加速度計、気圧計、または他のセンサーを含んでいるかもしれません。</p>

<h2 id="Accessing_the_WebXR_API" name="Accessing_the_WebXR_API">WebXR API へのアクセス</h2>

<p>特定のウィンドウのコンテキスト内で WebXR API にアクセスするには、{{domxref("navigator.xr")}} プロパティを使用します。 これは、WebXR デバイス API 全体を公開する {{domxref("XRSystem")}} オブジェクトを返します。</p>

<dl>
 <dt>{{domxref("navigator.xr")}} {{ReadOnlyInline}}</dt>
 <dd>{{domxref("Navigator")}} インターフェイスに追加されたこのプロパティは、WebXR API を公開する {{domxref("XRSystem")}} オブジェクトを返します。 このプロパティがない場合、WebXR は使用できません。</dd>
</dl>

<h2 id="WebXR_interfaces" name="WebXR_interfaces">WebXR インターフェイス</h2>

<dl>
 <dt>{{DOMxRef("XRSystem")}}</dt>
 <dd>{{domxref("Navigator.xr", "navigator.xr")}} プロパティは、{{domxref("XRSystem")}} のウィンドウのインスタンスを返します。 これは、コードが WebXR API にアクセスするメカニズムです。 <code>XRSystem</code> インターフェイスを使用して、{{domxref("XRSession")}} を作成し、実際の AR または VR セッション、あるいはその両方を表すことができます。</dd>
 <dt>{{DOMxRef("XRFrame")}}</dt>
 <dd>XR セッションを提示している間、セッションを構成するすべての追跡対象オブジェクトの状態は <code>XRFrame</code> によって表されます。 <code>XRFrame</code> を取得するには、セッションの {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを呼び出し、コールバックを提供します。 コールバックは、<code>XRFrame</code> が利用可能になると呼び出されます。 追跡状態を通信するイベントも <code>XRFrame</code> を使用してその情報を含みます。</dd>
 <dt>{{DOMxRef("XRRenderState")}}</dt>
 <dd><code>XRSession</code> による画像出力の合成方法を変更する構成可能なプロパティのセットを提供します。</dd>
 <dt>{{DOMxRef("XRSession")}}</dt>
 <dd>XR ハードウェアと対話するためのインターフェイスを提供します。 {{domxref("XRSystem.requestSession", "navigator.xr.requestSession()")}} から <code>XRSession</code> が取得されると、セッションを使用して、ビューアーの位置と方向を確認し、デバイスに環境情報を照会し、仮想世界や拡張世界をユーザーに提示できます。</dd>
 <dt>{{DOMxRef("XRSpace")}}</dt>
 <dd><code>XRSpace</code> は、すべての仮想座標系インターフェイスが基にする不透明な基本クラスです。 WebXR での位置は、特定の {{domxref("XRFrame")}}  が発生する時点で、常に特定の <code>XRSpace</code> に関連して表現されます。 空間の座標系は、指定された物理的な位置を原点とします。</dd>
 <dt>{{DOMxRef("XRReferenceSpace")}}</dt>
 <dd>{{domxref("XRSpace")}} のサブクラスであり、ユーザーの物理的環境との関係で空間関係を識別するために使用されます。 <code>XRReferenceSpace</code> 座標系は、{{domxref("XRSession")}} の存続期間を通じて変更されないままであると予想されます。 世界には境界がなく、あらゆる方向に無限に広がります。</dd>
 <dt>{{DOMxRef("XRBoundedReferenceSpace")}}</dt>
 <dd><code>XRBoundedReferenceSpace</code> は、{{domxref("XRReferenceSpace")}} 座標系を拡張して、境界が設定された有限世界のサポートをさらに組み込みます。 <code>XRReferenceSpace</code> とは異なり、原点は床にある必要があります（つまり、床では y = 0）。 原点の x 成分と z 成分は、通常、部屋または表面の中心またはその付近にあると推定されます。</dd>
 <dt>{{DOMxRef("XRView")}}</dt>
 <dd>特定のフレームの XR シーンへの単一のビューを表します。 各 <code>XRView</code> は、シーンをユーザーに提示するために使用されるビデオ表示面に対応しています。 例えば、特定の XR デバイスには、左目用と右目用の2つのビューがあります。 各ビューには、立体画像効果を作成できるようにするために、カメラに対するビューの位置をシフトするために使用されるオフセットがあります。</dd>
 <dt>{{DOMxRef("XRViewport")}}</dt>
 <dd>ビューポートについて説明します。 ビューポートは、グラフィック面の長方形の部分です。 WebXR では、ビューポートは、特定の {{domxref("XRView")}} に対応する描画面の領域を表します。 例えば、2つの目の視点の1つをシーンにレンダリングするために使用される WebGL フレームバッファーの部分などです。</dd>
 <dt>{{DOMxRef("XRRigidTransform")}}</dt>
 <dd>{{domxref("XRSpace")}} で記述されている、仮想空間の座標系での位置と方向を使用して定義された変換。</dd>
 <dt>{{DOMxRef("XRPose")}}</dt>
 <dd>{{domxref("XRSpace")}} を基準にした空間内の位置と方向を記述します。</dd>
 <dt>{{DOMxRef("XRViewerPose")}}</dt>
 <dd>{{domxref("XRPose")}} に基づいて、<code>XRViewerPose</code> は、XR デバイスによって示される WebXR シーンのビューアーの状態を指定します。 {{domxref("XRView")}} オブジェクトの配列が含まれ、それぞれがシーンの1つの視点を表します。 例えば、人間の視覚で知覚される立体視ビューを作成するには、2つのビューが必要です。 1つは左目用、もう1つは右目用です。 1つのビューはビューアーの位置から少し左にオフセットされ、もう1つのビューは同じ距離だけ右にオフセットされます。 ビューリストは、マルチユーザー環境で、シーンの各観客の視点を表すためにも使用できます。</dd>
 <dt>{{DOMxRef("XRInputSource")}}</dt>
 <dd>ユーザーがビューアーと同じ仮想空間内でターゲットアクションを実行するために使用できる任意の入力デバイスを表します。 入力ソースには、ハンドコントローラー、光学追跡システム、および XR デバイスに明示的に関連付けられている他のデバイスなどのデバイスが含まれます。 キーボード、マウス、ゲームパッドなどの他の入力デバイスは、<code>XRInputSource</code> インスタンスとして提示されません。</dd>
 <dt>{{DOMxRef("XRWebGLLayer")}}</dt>
 <dd>シーンのビューがレンダリングされる <a href="/ja/docs/Web/API/WebGL_API">WebGL</a> フレームバッファーとして機能するレイヤー。 WebGL を使用してシーンをレンダリングすると、グラフィックアクセラレーションによりパフォーマンスが大幅に向上します。</dd>
</dl>

<h3 id="Event_interfaces" name="Event_interfaces">イベントインターフェイス</h3>

<p>以下のインターフェイスは、WebXR API によって使用されるイベントを表すために使用されます。</p>

<dl>
 <dt>{{domxref("XRInputSourceEvent")}}</dt>
 <dd>{{domxref("XRInputSource")}} の状態が変化すると送信されます。 これは、例えば、デバイスの位置や方向が変わったとき、またはボタンが押されたり離されたときに発生する可能性があります。</dd>
 <dt>{{domxref("XRInputSourcesChangeEvent")}}</dt>
 <dd>{{domxref("XRSession")}} の使用可能な入力ソースのセットが変更されたことを示すために送信されます。</dd>
 <dt>{{domxref("XRReferenceSpaceEvent")}}</dt>
 <dd>{{domxref("XRReferenceSpace")}} の状態が変化すると送信されます。</dd>
 <dt>{{domxref("XRSessionEvent")}}</dt>
 <dd>{{domxref("XRSession")}} の状態が変化したことを示すために送信されます。 例えば、位置や向きがです。</dd>
</dl>

<h2 id="Extensions_to_the_WebGL_API" name="Extensions_to_the_WebGL_API">WebGL API の拡張機能</h2>

<p>WebGL API は、WebXR 仕様によって拡張され、WebGL コンテキストを拡張して、WebXR デバイスで表示するビューのレンダリングに使用できるようにします。</p>

<dl>
 <dt>{{domxref("WebGLRenderingContextBase.makeXRCompatibile","WebGLRenderingContextBase.makeXRCompatibile()")}}</dt>
 <dd>WebGL コンテキストを WebXR と互換性があるように構成します。 {{domxref("WebGLContextAttributes.xrCompatible", "xrCompatible")}} プロパティを <code>true</code> に設定してコンテキストを最初に作成しなかった場合は、WebXR レンダリングに WebGL コンテキストを使用する前に <code>makeXRCompatible()</code> を呼び出す必要があります。 コンテキストが準備されると解決する {{jsxref("Promise")}} を返します。 WebXR で使用するようにコンテキストを構成できない場合は拒否されます。</dd>
</dl>

<h2 id="Guides_and_tutorials" name="Guides_and_tutorials">ガイドとチュートリアル</h2>

<p>次のガイドとチュートリアルは、WebXR とその基礎となる 3D および VR/AR のグラフィックスの概念を理解する方法を学ぶための優れたリソースです。</p>

<h3 id="Foundations_and_basics" name="Foundations_and_basics">基盤と基礎</h3>

<dl>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Fundamentals">WebXR の基本</a></dt>
 <dd>WebXR を使用してコンテンツを作成する方法の詳細に入る前に、このテクノロジーの概要を読んでおくと役立つかもしれません。 これには、使い慣れていない用語や、新しい方法で使用されている可能性のある用語の紹介が含まれています。</dd>
 <dt><a href="/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web">ウェブの行列計算</a></dt>
 <dd>CSS transform と WebGL の両方の目的、および WebXR コンテキストでのオブジェクトの配置と方向の処理を含む、ウェブでの行列の使用方法をカバーするガイド。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Lifecycle">WebXR アプリケーションのライフサイクル</a></dt>
 <dd>起動から停止までの WebXR アプリケーションの全体的なライフサイクルの概要。 この記事は、コードに詳しく触れずに WebXR エクスペリエンスを作成するための基本的な方法の紹介です。 これは、次のステップに備えるための良い方法です。</dd>
</dl>

<h3 id="Creating_a_mixed_reality_experience" name="Creating_a_mixed_reality_experience">複合現実エクスペリエンスの作成</h3>

<dl>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Startup_and_shutdown">WebXR セッションの起動と停止</a></dt>
 <dd>ヘッドセットやゴーグルなどの XR デバイスを使用して実際にシーンを提示する前に、3D 効果をユーザーに提示できるように、XR デバイスの各ディスプレイに表示するシーンを描画するレンダリングレイヤーにバインドされた WebXR セッションを作成する必要があります。 このガイドでは、WebXR セッションを作成および停止する方法について説明します。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Geometry">WebXR の幾何学と参照空間</a></dt>
 <dd>このガイドでは、3D 幾何学の必要な概念について簡単に説明し、その幾何学が WebXR でどのように表現されるかの基本を詳しく説明します。 参照空間を使用してオブジェクト（およびビューアー）を配置する方法と、使用可能な参照空間のタイプの違い、およびそれらの使用例について説明します。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Spatial_tracking">WebXR での空間追跡</a></dt>
 <dd>このガイドでは、オブジェクト（ユーザーの体やそのパーツを含む）が空間に配置される方法と、互いの動きと向きが時間とともに監視および管理される方法について説明します。 この記事では、空間（space）、ポーズ（pose、姿勢）、ビューアー（viewer）、ビュー（view）の関係について説明します。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Rendering">レンダリングと WebXR フレームアニメーションコールバック</a></dt>
 <dd>このガイドでは、フレームのレンダリングをスケジュールする方法から始めて、ビュー内のオブジェクトの配置を決定する方法と、シーンの2つの目のビューのそれぞれに使用される WebGL バッファーにオブジェクトをレンダリングする方法について説明します。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Cameras">視点とビューアー: WebXR でのカメラのシミュレーション</a></dt>
 <dd>WebGL（および WebXR）には、実際にはカメラの概念がありません。 これは、3D グラフィックで視点を表すために使用される従来の概念です。 この記事では、カメラをシミュレートする方法と、ビューアーが実際には動かない世界をビューアーが動くように錯覚させる方法を説明します。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Lighting">WebXR 設定の照明</a></dt>
 <dd>WebXR レンダリングは WebGL に基づいているため、3D アプリケーションで使用されているのと同じ照明技術が WebXR シーンに適用されます。 ただし、照明のコードを記述するときに考慮する必要がある拡張現実および仮想現実の設定の作成に固有の問題があります。 この記事では、これらの問題について説明します。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces">制限付き参照空間の使用</a></dt>
 <dd>この記事では、<code>bounded-floor</code> 参照空間を使用して、XR ハードウェアによって追跡された領域を離れたり、物理的な障害物との衝突なしに、ビューアーが安全に動き回れる境界を定義する方法を検討します。 それをサポートするデバイスでは、<code>bounded-floor</code> はあなたのレパートリーの便利なツールになります。</dd>
</dl>

<h3 id="Making_it_interactive" name="Making_it_interactive">インタラクティブにする</h3>

<dl>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion">移動、向き、モーション: WebXR の例</a></dt>
 <dd>この例とチュートリアルでは、WebXR ドキュメント全体で学習した情報を使用して、ユーザーが VR ヘッドセットとキーボードとマウスの両方を使用して動き回れる回転立方体を含むシーンを作成します。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Inputs">入力と入力ソース</a></dt>
 <dd>入力ソースと、WebXR セッションの制御に使用されている入力デバイスを効率的に管理する方法、およびそれらのデバイスからユーザー入力を受信して​​処理する方法のガイド。</dd>
 <dt><a href="/ja/docs/Web/API/Web_Audio_API/Targeting">ターゲティングとヒット検出</a></dt>
 <dd>入力ソースのターゲッティングレイモードとターゲッティングレイ空間を使用してターゲッティングレイを表示し、ターゲットとする面またはオブジェクトを識別し、関連タスクを実行する方法。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Input_profiles">WebXR 入力プロファイルの使用</a></dt>
 <dd>WebXR 入力プロファイル登録所（<a href="https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry">WebXR Input Profiles Registry</a>）によって提供される {{Glossary("JSON")}} データを解釈するためのガイド。 これは、ユーザーの使用可能な入力デバイスで使用可能なオプションとコントロールを決定するために使用できます。</dd>
 <dt><a href="/ja/docs/Web/WebXR_Device_API/Gamepads">WebXR アプリケーションでの高度なコントローラーとゲームパッドのサポート</a></dt>
 <dd>WebXR は {{domxref("Gamepad")}} オブジェクトを使用して、複雑な入力デバイス（複数のボタンや軸を持つハンドコントローラーなど）やゲ​​ームパッドのようなデバイスで利用可能なコントロールを記述します。 このガイドでは、これらのデバイスのコントロールを使用する方法を学びます。</dd>
</dl>

<h3 id="Performance_and_security" name="Performance_and_security">パフォーマンスとセキュリティ</h3>

<dl>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Performance">WebXR パフォーマンスガイド</a></dt>
 <dd>WebXR アプリケーションのパフォーマンスを最適化するのに役立つ推奨事項とヒント。</dd>
 <dt><a href="/ja/docs/Web/API/WebXR_Device_API/Permissions_and_security">WebXR の権限とセキュリティ</a></dt>
 <dd>WebXR デバイス API には、機能ポリシーの確立から、ユーザーが複合現実プレゼンテーションをアクティブ化する前に使用する意図を確認することまで、いくつかのセキュリティ領域があります。</dd>
</dl>

<h3 id="Including_other_media" name="Including_other_media">他のメディアを含む</h3>

<dl>
 <dt><a href="/ja/docs/Web/Media/3D_audio">3D 環境でのポジショナルオーディオ</a></dt>
 <dd>画面にレンダリングされた 3D シーン、またはヘッドセットを使用して体験した複合現実感のいずれかである 3D 環境では、ソースの方向から来ているように聞こえるようにオーディオを実行することが重要です。 このガイドでは、これを行う方法について説明します。</dd>
 <dt><a href="/ja/docs/Web/Media/3D_video">3D 環境でのビデオの再生</a></dt>
 <dd>このガイドでは、ビデオを 3D シーンに再生する方法について説明します。 この手法は、平らなコンピューター画面に表示される標準の <a href="/ja/docs/Web/API/WebGL_API">WebGL</a> アプリケーション、または <a href="/ja/docs/Web/API/WebXR_Device_API">WebXR</a> で生成された仮想現実環境や拡張現実環境の両方で使用できます。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("WebXR")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.xr")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/Graphics">ウェブのグラフィック</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics">グラフィックの描画</a></li>
 <li><a href="/ja/docs/Web/API/WebGL_API">WebGL API</a>: ウェブ上の 2D および 3D グラフィックスの高速化</li>
 <li><a href="/ja/docs/Web/API/Canvas_API">Canvas API</a>: ウェブのための 2D 描画</li>
 <li><a href="/ja/docs/Web/API/Canvas_API/Tutorial">Canvas チュートリアル</a></li>
</ul>
