---
title: レンダリングと WebXR フレームアニメーションコールバック
slug: Web/API/WebXR_Device_API/Rendering
tags:
  - API
  - AR
  - Animation
  - Drawing
  - Frames
  - Games
  - Guide
  - Intermediate
  - Reality
  - Scene
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - augmented
  - display
  - rendering
  - requestAnimationFrame
translation_of: Web/API/WebXR_Device_API/Rendering
---
<p>{{DefaultAPISidebar("WebXR Device API")}}</p>

<p>WebXR 環境をセットアップし、進行中の XR 環境セッションを表す {{domxref("XRSession")}} を作成したら、レンダリングのためにシーンのフレームを XR デバイスに提供する必要があります。 <span class="seoSummary">この記事では、{{domxref("XRSession")}} を使用して各フレームを表す {{domxref("XRFrame")}} オブジェクトを取得し、それを使用して、XR デバイスに配信するためのフレームバッファーを準備し、レンダリングループで XR シーンのフレームをデバイスに駆動するプロセスについて説明します。</span></p>

<p>仮想環境をレンダリングする前に、<code><a href="/ja/docs/Web/API/XRSystem/requestSession">navigator.xr.requestSession()</a></code> メソッドを使用して {{domxref("XRSession")}} を作成することにより、WebXR セッションを確立する必要があります。 また、セッションをフレームバッファーに関連付けて、他のセットアップタスクを実行する必要もあります。 これらのセットアップタスクについては、<a href="/ja/docs/Web/API/WebXR_Device_API/Startup_and_shutdown">WebXR セッションの起動と停止</a>の記事で説明されています。</p>

<h2 id="Preparing_the_renderer" name="Preparing_the_renderer">レンダラーの準備</h2>

<p>XR セッションをセットアップし、WebGL フレームバッファーを接続し、WebGL をシーンをレンダリングするために必要なデータで準備したら、レンダラーをセットアップして実行を開始できます。 これは、描画する参照空間を取得することから始まります。 その原点と方向は、ビューアーの開始位置と視線方向に設定します。 それが手に入ったら、次にシーンをレンダリングするためにフレームバッファーが必要になったときにブラウザーがあなたのレンダリング関数を呼び出すように要求します。 これは、{{domxref("XRSession")}} メソッドの {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} を呼び出すことによって行います。</p>

<p>したがって、レンダラーの手はじめは次のようになります。</p>

<pre class="brush: js notranslate">let worldRefSpace;

async function runXR(xrSession) {
  worldRefSpace = await xrSession.requestReferenceSpace("immersive-vr");

  if (worldRefSpace) {
    viewerRefSpace = worldRefSpace.getOffsetReferenceSpace(
        new XRRigidTransform(viewerStartPosition, viewerStartOrientation));
    animationFrameRequestID = xrSession.requestAnimationFrame(myDrawFrame);
  }
}
</pre>

<p>没入型世界の参照空間を取得した後、これは、その位置と方向を表す {{domxref("XRRigidTransform")}} を作成し、{{domxref("XRReferenceSpace")}} のメソッド {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} を呼び出すことにより、ビューアーの位置と方向を表すオフセット参照空間を作成します。</p>

<p>次に、{{domxref("XRSession")}} のメソッド {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} を呼び出して最初のアニメーションフレームをスケジュールし、フレームをレンダリングするためのコールバック関数 <code>myDrawFrame()</code> を提供します。</p>

<p>このコードにはループがないことに注意してください！ 代わりに、フレームレンダリングコード（この場合は <code>myDrawFrame()</code> という関数）が、もう一度 <code>requestAnimationFrame()</code> を呼び出して別のフレームを描画する時刻をスケジュールします。</p>

<h2 id="Refresh_rate_and_frame_rate" name="Refresh_rate_and_frame_rate">リフレッシュレートとフレームレート</h2>

<p>画面が最後にリフレッシュされてから {{domxref("XRSession")}} のメソッド {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} を呼び出したとすると、ブラウザーは、アプリまたはサイトウィンドウを再描画する準備ができるたびにフレームレンダリングコールバックを呼び出します。 このコンテキストでは、「再描画」とは、画面に表示されるコンテンツが、DOM およびその中の要素が現時点で提示しようとしているものと一致することを保証するプロセスを意味します。</p>

<h3 id="Hardware_vertical_refresh_rate" name="Hardware_vertical_refresh_rate">ハードウェア垂直リフレッシュレート</h3>

<p>ブラウザーは、WebXR コンテンツが表示されている {{HTMLElement("canvas")}} をリフレッシュする準備ができると、フレームレンダリングコールバックを呼び出します。 このコールバックは、指定されたタイムスタンプと、モデルやテクスチャーなどの他の関連データ、およびアプリケーションの状態を使用して、指定された時刻に表示されるように、シーンを WebGL バックバッファーにレンダリングします。 コールバックが戻ると、ブラウザーは最後に画面がリフレッシュされてから変更されたものと共に、そのバックバッファーをディスプレイまたは XR デバイスに転送します。</p>

<p>歴史的に、ディスプレイは毎秒 60 回リフレッシュされています。 これは、タイミングを合わせるために、米国では 1 秒あたり 60 回（ヨーロッパでは 50 回）循環する AC 配電網の電流フロー波形を使用した初期のディスプレイによるものです。 次のように、このことはいくつかの異なる名前で示されていますが、それらはすべて同等またはほぼ同じです。</p>

<ul>
 <li>リフレッシュレート（Refresh rate）</li>
 <li>垂直リフレッシュレート（Vertical refresh rate）</li>
 <li>垂直帰線消去レート（Vertical blanking rate、VBL）</li>
 <li>垂直同期レート（Vertical sync rate）</li>
</ul>

<p>他にも同様の用語が使用されていますが、それが何と呼ばれるかに関係なく、適用される測定単位はヘルツ（Hz）です。 1 秒あたり 60 回リフレッシュするディスプレイには、60 Hz のリフレッシュレートがあります。 つまり、1 秒間に表示できるフレームの最大数は 60 です。 それを超える 1 秒あたりのフレーム数に関係なく、1 秒の間に 60 フレームしか画面に表示されません。</p>

<p>ただし、すべてのディスプレイが 60 Hz で動作するわけではありません。 最近では、より高性能のディスプレイがはるかに高いリフレッシュレートを使用し始めています。 例えば、120 Hz、つまり 120 フレーム/秒のディスプレイは、ますます一般的になっています。 ブラウザーは常にディスプレイと同じレートでリフレッシュを試みます。 つまり、一部のコンピューターでは、コールバックは 1 秒あたり最大 60 回実行されますが、他のコンピューターでは、フレームレートによって異なり 1 秒あたり 90 または 120 回、あるいはそれ以上呼び出される場合があります。</p>

<h3 id="Time_available_to_render_each_frame" name="Time_available_to_render_each_frame">各フレームのレンダリングに利用できる時間</h3>

<p>これにより、フレーム間で利用可能なほとんどの時間を使用することが重要になります。 ユーザーのデバイスが 60 Hz のディスプレイを使用している場合、コールバックは 1 秒あたり最大 60 回呼び出され、それよりも頻繁に呼び出されることはないので、確実にできることをすることが目標です。 これを実現するには、メインスレッド外で可能な限り実行し、フレームレンダリングのコールバックをできるだけ効率的にします。 以下の図は、時間の 60 Hz ブロックへの分割を示しています。 各ブロックは、少なくとも部分的にシーンのレンダリングに使用されています。</p>

<div style="width: 42em; text-align: center;"><img alt="フレーム期間あたりのレンダラー実行時間" src="https://mdn.mozillademos.org/files/17116/frames-and-refresh-rate.svg" style="height: 179px; padding-bottom: 1em; width: 881px;"></div>

<p>コンピュータのビジー状態が増すにつれて、コールバックをフレームごとに正確に呼び出すことができなくなり、フレームをスキップしなければならない場合があるため、これは重要です。 これを<strong>コマ落ち</strong>（dropping frames）と呼びます。 これは、レンダリングが遅延したため、またはレンダリング自体に使用可能な時間よりも長い時間がかかったために、フレームのレンダリングにかかる時間がフレーム間で使用可能な時間を超えると発生します。</p>

<div style="width: 42em; text-align: center;"><img alt="フレーム期間あたりのレンダラー実行時間" src="https://mdn.mozillademos.org/files/17117/dropped-frames-timing.svg" style="height: 198px; padding-bottom: 1em; width: 881px;"></div>

<p>上の図では、フレーム 3 がペイントされる予定になるまでフレーム 2 がレンダリングを完了しなかったため、フレーム 3 はコマ落ちしています。 次に描画されるフレームはフレーム 4 になります。 これは、レンダリングコールバックに渡されるタイムスタンプが役立つもう1つの理由です。 フレーム番号ではなく時間に基づいてシーンを構成することにより、レンダリングされたフレームが遅れることなく、期待したものと一致することを保証できます。</p>

<p>フレームがコマ落ちすると、影響を受ける表示領域のコンテンツは、フレームループを通過しても変更されません。 そのため、ときどきフレームがコマ落ちすることは通常あまり目立ちませんが、頻繁に発生し始めた場合（特に、非常に短い時間に複数のフレームがコマ落ちした場合）は、不快になり、ディスプレイが使用できなくなる可能性があります。</p>

<p>幸い、フレーム間で使用できる時間を <code>1/refreshRate</code> 秒として簡単に計算できます。 つまり、1 をディスプレイのリフレッシュレートで除算します。 結果の値は、フレームがコマ落ちしないようにするために、各フレームをレンダリングするのに使用できる時間です。 例えば、60 Hz のディスプレイでは、1 フレームのレンダリングに 1/60 秒、つまり 0.0166667 秒が使用されます。 また、デバイスのリフレッシュレートが 120 Hz の場合、コマ落ちを避けたい場合、各フレームをレンダリングするのに必要な時間は 0.00883333 秒しかありません。</p>

<p>ただし、ハードウェアが実際には 120 Hz である場合でも、毎秒 60 回リフレッシュするだけで十分であり、通常はそれをターゲットとすることをお勧めします。 60 FPS はすでに、ほとんどの人がアニメーションが単なる高速の一連の静止画像ではないことを簡単に検出できるポイントを超えています。 つまり、判別がつかないときは、ディスプレイが 60 Hz でリフレッシュされていると想定できます。 コードが適切に記述されている限り、すべてが問題なく動作します。</p>

<h3 id="Renderer_performance_concerns" name="Renderer_performance_concerns">レンダラーのパフォーマンスの問題</h3>

<p>明らかに、フレームごとにシーンをレンダリングする時間はほとんどありません。 それだけでなく、レンダラー自体がその時間よりも長く実行されると、フレームがコマ落ちするだけでなく、その時間が完全に無駄になり、他のコードがそのフレームに対してまったく実行されなくなる可能性があります。</p>

<p>それだけでなく、レンダリングが垂直リフレッシュ境界をまたぐ場合、<strong>ティアリング</strong>効果（tearing effect）が発生する可能性があります。 ティアリングは、前のフレームがまだ画面に描画されている間にディスプレイハードウェアが次のリフレッシュサイクルを開始すると発生します。 その結果、画面の上部に新しいフレームが表示されますが、フレームの下部には、前のフレームと場合によってはその前のフレームの組み合わせが表示される視覚効果となります。</p>

<p>したがって、あなたの使命は、利用可能な時間を超過したり、コマ落ちやメインスレッドの過度の悪用を引き起こしたりしないように、コードを十分にタイトかつ軽量に保つことです。</p>

<p>これらの理由により、レンダラーがかなり小さくて軽量で、ほとんど何もすることがないのでない限り、ブラウザーが他の処理を行う間に次のフレームを計算できるように、できる限りすべてをワーカーにオフロードすることを検討する必要があります。 フレームが実際に呼び出される前に計算とデータを準備するだけで、サイトまたはアプリをより効率的にレンダリングし、メインスレッドのパフォーマンスを向上させ、一般的にユーザーエクスペリエンスを向上させることができます。</p>

<p>幸い、レンダリングのニーズが特に重い場合は、影響をさらに減らし、パフォーマンスを最適化するために使用できるいくつかのトリックがあります。 <a href="/ja/docs/Web/API/WebXR_Device_API/Performance">WebXR パフォーマンスガイド</a>を参照して、パフォーマンスをできる限り向上させるための推奨事項とヒントを確認してください。</p>

<h2 id="WebXR_frames" name="WebXR_frames">WebXR フレーム</h2>

<p>フレームレンダリングコールバック関数は、2つのパラメーターを入力として受け取ります。 フレームが対応する時刻と、その時刻のシーンの状態を記述する {{domxref("XRFrame")}} オブジェクトです。</p>

<h3 id="The_optics_of_3D" name="The_optics_of_3D">3D の光学</h3>

<p>私たちが2つの目を持つには理由があります。 2つの目を持つことで、それぞれが本質的にわずかに異なる角度から世界を見ることができます。 それらは既知の固定距離だけ離れているため、私たちの脳は基本的な幾何学と三角法を実行し、その情報から 3D の実在の本質を理解できます。 また、遠近法（perspective）、大きさの違い、さらには通常、3番目の次元の詳細を理解するために物事がどのように見えるかについての理解も利用します。 これらの要因は、とりわけ、私たちの奥行き知覚（<a href="https://en.wikipedia.org/wiki/Depth_perception">depth perception</a>）の源です。</p>

<p>グラフィックスをレンダリングするときに3次元の幻想を作成するには、これらの要因をできるだけ多くシミュレートする必要があります。 これらをシミュレートするほど、そして正確に行うほど、人間の脳をだまして 3D で画像を知覚させることができます。 XR の利点は、古典的な単眼テクニックを使用して 3D グラフィックス（遠近法、大きさ、シミュレートされた視差）をシミュレートできるだけでなく、アニメーションのフレームごとに、各目につき1回ずつシーンを2回レンダリングすることで、両眼視（つまり、2つの目を使用した視覚）をシミュレートできることです。</p>

<p>典型的な人間の瞳孔間距離（<a href="https://en.wikipedia.org/wiki/Pupillary_distance">pupillary distance</a>、瞳孔の中心間の距離）は、54 〜 74 ミリメートル（0.054 〜 0.074 メートル）です。 したがって、ビューアーの頭の中心が <code>[0.0, 2.0, 0.0]</code>（水平方向の空間の中心で地上レベルの約 2 メートル）にある場合、まず <code>[-0.032, 2.0, 0.0]</code>（中心から左に 32 mm）からシーンをレンダリングし、次に <code>[0.032, 2.0, 0.0]</code>（中心から右に 32 mm）で再びレンダリングする必要があります。 このようにして、ビューアーの目の位置を人間の平均瞳孔距離 64 mm に配置します。</p>

<p>その距離（または XR システムが使用するように構成されている瞳孔間距離）は、網膜歪覚（各網膜の見え方の違い）と視差効果によって脳がオブジェクトまでの距離とオブジェクトの奥行きを計算できるようにするために、私たちの心に十分な違いを見せるのに十分です。 これにより、網膜が 2D 表面にすぎないにもかかわらず、3次元を知覚できるようになります。</p>

<p>これは下の図に示されています。 下の図では、それぞれの目がビューアーの真正面にあるさいころをどのように認識するかを示しています。 この図では、説明のために一部の点で効果を誇張していますが、概念は同じです。 各目は、境界が目の前の円弧を形成する領域を見ます。 それぞれの目は頭の中心線の片側または反対側にオフセットされ、それぞれの目はほぼ同じ視野を見るので、その結果、それぞれの目は、その前にある世界のわずかに異なる部分を別の角度から見ることができます。</p>

<p><img alt="両眼視のしくみを示す図" src="https://mdn.mozillademos.org/files/17125/binocular-vision.svg" style="height: 720px; width: 550px;"></p>

<p>左目はさいころを中央から少し左に見、右目はさいころを中央から少し右に見ます。 その結果、左目はオブジェクトの左側が少しだけ見え、右側が少し見えません。 逆も同様です。 これらの2つの画像は網膜に焦点が合わせられ、結果の信号は視神経を介して後頭葉の後部にある脳の視覚皮質に送信されます。</p>

<p>脳はこれらの信号を左目と右目から受け取り、ビューアーの脳内に世界の単一の統一された 3D 画像を構成し、その画像を見ます。 また、左目と右目で見られるものの違いにより、脳はオブジェクトの奥行きや大きさなどに関する多くの情報を推測できます。 推測された奥行き情報を、遠近法、影、これらの関係の意味の記憶などの他の手がかりと組み合わせることで、私たちの周りの世界について多くを理解することができます。</p>

<h3 id="Frames_poses_views_and_framebuffers" name="Frames_poses_views_and_framebuffers">フレーム、ポーズ、ビュー、フレームバッファー</h3>

<p>シーンのある瞬間の状態を表す <code>XRFrame</code> を取得したら、ビューアーを基準にしてシーン内のオブジェクトの位置を決定し、レンダリングできるようにする必要があります。 参照空間に対するビューアーの位置と方向は、{{domxref("XRFrame")}} のメソッド {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} を呼び出して取得した {{domxref("XRViewerPose")}} で表されます。</p>

<p><code>XRFrame</code> は、あなたの世界内のオブジェクトの位置または方向を直接追跡しません。 代わりに、位置と方向をシーンの座標系に変換する方法を提供し、ビューアーの位置と方向のデータを XR ハードウェアから収集し、あなたが構成した参照空間に変換して、フレームレンダリングコードにタイムスタンプ付きで配信します。 そのタイムスタンプとあなた独自のデータを使用して、シーンのレンダリング方法を決定します。</p>

<p>シーンを2回レンダリングした後（フレームバッファーの左半分に1回、フレームバッファーの右半分に1回）、フレームバッファーは XR ハードウェアに送信され、フレームバッファーの各半分が対応する目に表示されます。 これは、多くの場合（常にではありません）、画像を1つの画面に描画し、レンズを使用してその画像の正しい半分を各目に転送します。</p>

<p>3D が WebXR によってどのように表現されるかについて詳しくは、<a href="/ja/docs/Web/API/WebXR_Device_API/Cameras">視点とビューアー: WebXR でのカメラのシミュレーション</a>の <a href="/ja/docs/Web/API/WebXR_Device_API/Cameras#Representing_3D_with_WebXR">WebXR による 3D の表現</a>をご覧ください。</p>

<h2 id="Drawing_the_scene" name="Drawing_the_scene">シーンを描く</h2>

<p>ブラウザーがシーンの次のフレームをペイントできるようにフレームバッファーを準備するときが来たら、<code>requestAnimationFrame()</code> に指定した関数が呼び出されます。 それは、描画するフレームの時刻と、レンダリングする必要のあるフレームのシーンの状態に関する詳細を提供する {{domxref("XRFrame")}} オブジェクトを入力として受け取ります。</p>

<p>理想的には、このコードを 60 FPS のフレームレートに十分か可能な限りそれに近い速さを維持することが必要です。 この1つの関数にはあなたのコードだけではないことを思い出してください。 メインスレッドがフレーム自体の持続時間よりもフレームあたりの時間を長く実行する必要がないことを確認する必要があります。</p>

<h3 id="A_basic_renderer" name="A_basic_renderer">基本的なレンダラー</h3>

<p>このバージョンの WebXR レンダリングコールバックでは、比較的単純なプロジェクトに最適な非常に単純なアプローチを使用しています。 この疑似コードは、そのプロセスの概要を示しています。</p>

<pre class="brush: js notranslate">for each view in the pose's views list:
  get the WebXR GL layer's viewport
  set the WebGL viewport to match
  for each object in the scene
    bindProgram()
    bindVertices()
    bindMatrices()
    bindUniforms()
    bindBuffers()
    bindTextures()
    drawMyObject()
</pre>

<p>簡単に言えば、この形式のレンダラーは<strong>ビュー優先順</strong>（view-first order）を使用しています。 すべてのオブジェクトを1つのビューに描画してから、同じオブジェクトのセットを他のビューにレンダリングして、XR デバイスのディスプレイを構成する2つのビューのそれぞれを続けてレンダリングします。 その結果、オブジェクトを描画するために必要なデータの多くは、フレームごとに2回 GPU に送信されるため、多くの複製された作業があります。 ただし、これは既存の WebGL コードの移植を簡略化し、多くの場合、この作業を行うのに十分なほど優れているため、最初にこの方法を見ていきます。</p>

<p>そのフレームのシーンを構成する次のオブジェクトに進む前に、各オブジェクトを各目に対して1回ずつ、2回続けてレンダリングする（つまり、<strong>オブジェクト優先順</strong>（object-first order）でレンダリングする）代替アプローチについては、<a href="/ja/docs/Web/API/WebXR_Device_API/Rendering#Optimizing_by_rendering_in_object-first_order">オブジェクト優先順でレンダリングすることによる最適化</a>を参照してください。</p>

<h4 id="Sample_rendering_callback" name="Sample_rendering_callback">レンダリングコールバックのサンプル</h4>

<p>この基本的なパターンに従う実際のコードを見てみましょう。 上記の例では、この関数に <code>myDrawFrame()</code> という名前を付けたので、ここでは引き続きこれを使用します。</p>

<pre class="brush: js notranslate">let lastFrameTime = 0;

function myDrawFrame(currentFrameTime, frame) {
  let session = frame.session;
  let viewerPose;

  // 時間が来たらペイントされる次のフレームをスケジュールします。

  animationFrameRequestID = session.requestAnimationFrame(myDrawFrame);

  // ビューアーの位置と方向を表す XRViewerPose を取得します。
  // 成功した場合、フレームをレンダリングします。

  viewerPose = frame.getViewerPose(viewerRefSpace);
  if (viewerPose) {
    let glLayer = session.renderState.baseLayer;
    gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

    // まず、色と奥行きのフレームバッファーを消去します。

    gl.clearColor(0, 0, 0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 最後のフレームがレンダリングされてからの経過時間を計算します。
    // この値を使用して、アニメーションが意図したとおりの速度で実行されるようにします。

    const deltaTime = currentFrameTime - lastFrameTime;
    lastFrameTime = currentFrameTime;

    // 次に、セッションのビューごとにシーンレンダリングコードを1回呼び出します。

    for (let view of viewerPose.views) {
      let viewport = glLayer.getViewport(view);
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
      myDrawSceneIntoView(view, deltaTime);
    }
  }
}
</pre>

<p><code>myDrawFrame()</code> 関数は、<code>frame</code> パラメーターで指定された {{domxref("XRFrame")}} オブジェクトから {{domxref("XRSession")}} を取得し、セッションの {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを呼び出して、次のフレームのレンダリングをすぐにスケジュールします。 これにより、すぐにキューに入ることが保証され、<code>myDrawFrame()</code> 関数のこの反復で費やされた残りの時間は、次のフレームを描画するタイミングにカウントされます。</p>

<p>次に、フレームの {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} メソッドを使用して、ビューアーのポーズ（その位置と方向）を表す {{domxref("XRViewerPose")}} オブジェクトを取得し、<a href="/ja/docs/Web/API/WebXR_Device_API/Rendering#Preparing_the_renderer">WebXR セッションのセットアップ中</a>に以前に取得した <code>viewerRefSpace</code> からビューアーの参照空間を渡します。</p>

<p>ビューアーのポーズを手にすると、フレームのレンダリングを開始できます。 最初のステップは、WebXR デバイスがフレームを描画したいフレームバッファーへのアクセスを取得することです。 これは、セッションの {{domxref("XRSession.renderState", "renderState")}} オブジェクトの {{domxref("XRRenderState.baseLayer", "baseLayer")}} プロパティからターゲット WebGL レイヤーを取得してから、その {{domxref("XRWebGLLayer")}} オブジェクトから {{domxref("XRWebGLLayer.framebuffer", "framebuffer")}} を取得することによって行われます。 次に、<code><a href="/ja/docs/Web/API/WebGLRenderingContext/bindFramebuffer">gl.bindFrameBuffer()</a></code> を呼び出して、今後のすべての描画コマンドのターゲットとしてそのフレームバッファーをバインドします。</p>

<p>次のステップは、フレームバッファーを消去することです。 <em>レンダリングコードがフレームバッファー内のすべてのピクセルを書き込むことが保証されている場合に限り</em>、理論上はこのステップをスキップできますが、パフォーマンスの全てを最後まで出し切る必要がない限り、とにかくすべてのピクセルに触れていることを確実にするために、描画を開始する前にそれをクリアして、描画を開始するのが一般的に最も安全です。 背景色は、<a href="/ja/docs/Web/API/WebGLRenderingContext/clearColor"><code>gl.clearColor()</code></a> を使用して完全に不透明な黒に設定します。 奥行きのクリアは、<code><a href="/ja/docs/Web/API/WebGLRenderingContext/clearDepth">gl.cleardepth()</a></code> を呼び出して 1.0 に設定します。 これにより、ピクセルが属するオブジェクトがどれだけ離れているかに関係なく、すべてのピクセルがクリアされます。 最後に、フレームのピクセルバッファーと奥行きバッファーは、<code>COLOR_BUFFER_BIT</code> と <code>DEPTH_BUFFER_BIT</code> の両方を設定したビットマスクを渡して <code><a href="/ja/docs/Web/API/WebGLRenderingContext/clear">gl.clear()</a></code> を呼び出して両方とも消去します。</p>

<p>WebXR はすべてのビューに単一のフレームバッファーを使用し、ビュー上のビューポートはフレームバッファー内の各目の視点を分離するために使用されるため、各目（または他の視点）を個別にクリアするのではなく、単一のフレームバッファーをクリアするだけで済みます。</p>

<p>次に、前のフレームがレンダリングされてからの経過時間は、<code>currentFrameTime</code> パラメーターで指定された現在の時刻から、最後のフレームがレンダリングされた保存時刻 <code>lastFrameTime</code> を差し引いて計算されます。 結果は、最後のフレームがレンダリングされてから経過したミリ秒数を示す {{domxref("DOMHighResTimeStamp")}} 値です。 シーンの描画中にこの値を使用して、コールバックが一貫したフレームレートで起動されると想定するのではなく、実際の経過時間を考慮して適切な距離ですべてを移動できるようにします。 この経過時間は変数 <code>deltaTime</code> に保存され、<code>lastFrameTime</code> の値はこのフレームの時刻に置き換えられ、次のフレームの差分を計算する準備が整います。</p>

<p>それでは、実際にそれぞれの目に対してシーンをレンダリングする時が来ました。 ビューアーのポーズの {{domxref("XRViewerPose.views", "views")}} 配列内のビューを反復処理します。 シーンに対する目のパースペクティブ（perspective）を表すこれらの {{domxref("XRView")}} オブジェクトのそれぞれについて、描画を現在の目の可視画像を表すフレームバッファーの領域に制限することから始める必要があります。</p>

<p>{{domxref("XRWebGLLayer")}} のメソッド {{domxref("XRWebGLLayer.getViewport", "getViewport()")}} を呼び出して、現在の目の画像用に予約されているフレームバッファー内の領域に描画を制限するビューポートを取得することにより、目のコンテンツをレンダリングする WebGL を準備することから始めます。 次に、ビューポートの X 原点と Y 原点を、幅と高さとともに <code><a href="/ja/docs/Web/API/WebGLRenderingContext/viewport">gl.viewport()</a></code> に渡して、WebGL ビューポートを一致するように設定します。</p>

<p>最後に、メソッド <code>myDrawSceneIntoView()</code> を呼び出して、実際に WebGL を使用してシーンをレンダリングします。 これには、描画する目を表す {{domxref("XRView")}}（透視マッピング（perspective mapping）などを実行するため）と <code>deltaTime</code> を渡します。 これにより、シーン描画コードは、時間とともに移動するオブジェクトの位置を決定するときに経過時間を正確に表すことができます。</p>

<p>ビューを反復するループが終了すると、ビューアーにシーンを提示するために必要なすべての画像がレンダリングされ、戻ると、フレームバッファーは GPU を経由して、最終的には XR デバイスのディスプレイに到達します。 関数の上部で {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} を呼び出してあるので、シーンのアニメーションの次のフレームをレンダリングするときに、コールバックがもう一度呼び出されます。</p>

<h4 id="Drawbacks_to_this_approach" name="Drawbacks_to_this_approach">このアプローチの欠点</h4>

<p>この関数に費やす時間をできるだけ最小限に抑えることが重要であるため、状態変化の処理に費やす時間が長いほど、実際に描画する時間が短くなります。 このテクニックは少数のオブジェクトに対して非常にうまく機能しますが、各オブジェクトのすべてのデータを2回（左目に対して1回、右目に対して1回）再バインドする必要があるため、状態の調整、バッファーとテクスチャーのアップロードなどに、多くの時間を費やしています。 次のセクションでは、これらの状態の変化を大幅に減らし、特にオブジェクト数が増えるにつれて、はるかに高速なレンダリングアプローチを提供する、変更されたアプローチについて説明します。</p>

<h3 id="Optimizing_by_rendering_in_object-first_order" name="Optimizing_by_rendering_in_object-first_order">オブジェクト優先でレンダリングすることによる最適化</h3>

<p>単一の WebGL フレームバッファーを使用して、左目と右目の両方のビューを単一のフレームバッファーに含めるという WebXR のアプローチの利点は、処理の順序を再配置することにより、レンダリングパフォーマンスを大幅に向上できることです。 特定のビュー（左目など）のビューポートを設定し、左目で見えるすべてのオブジェクトを1つずつレンダリングし、各オブジェクトに行ったらバッファーを再構成する代わりに、各オブジェクトをそれぞれの目に1回ずつ、2回続けてレンダリングします。 したがって、両方の目に対してバッファー、ユニフォームなどを1回セットアップするだけで済みます。</p>

<p>結果の疑似コードは次のようになります。</p>

<pre class="brush: js notranslate">for each object in the scene
  bindProgram()
  bindUniforms()
  bindBuffers()
  bindTextures()
  for each view in the pose's views list
    get the XRWebGLLayer's viewport
    set the WebGL viewport to match
    bindVertices()
    bindMatrices()
    drawMyObject()
</pre>

<p>このように変更することにより、プログラム、ユニフォーム、バッファー、テクスチャー、その他の可能性のあるものだけを、シーン内の各オブジェクトに対して2回ではなく、フレームごとに1回だけバインドします。 これにより、潜在的に非常に大きなマージンでオーバーヘッドが削減されます。</p>

<h3 id="Limiting_the_frame_rate" name="Limiting_the_frame_rate">フレームレートの制限</h3>

<p>他のコードを実行するためにより多くの時間を確保しながら、維持しようとするベースラインのフレームレートを確立するために、意図的にフレームレートを制限する必要がある場合は、フレームを意図的に定期的にスキップすることができます。</p>

<p>例えば、フレームレートを 50% 下げるには、1 フレームおきにスキップします。</p>

<pre class="brush: js notranslate">let tick = 0;

function drawFrame(time, frame) {
  animationFrameRequestID = frame.session.requestAnimationFrame(drawFrame);

  if (!(tick % 2)) {
    /* シーンを描く */
  }
  tick++;
}</pre>

<p>このバージョンのレンダリングコールバックは、<code>tick</code> カウンターを維持します。 <code>tick</code> が偶数の値である場合にのみ、フレームがレンダリングされます。 このようにして、ひとつおきのフレームのみをレンダリングします。</p>

<p>同様に、<code>!(tick % 4)</code> を使用して、4 フレームごとにレンダリングする等々ができます。</p>

<h3 id="Matching_your_animation_to_the_elapsed_time" name="Matching_your_animation_to_the_elapsed_time">アニメーションを経過時間に合わせる</h3>

<p>レンダリングコールバックは、正当な理由で <code>time</code> パラメータを受け取ります。 この {{domxref("DOMHighResTimeStamp")}} 値は、フレームのレンダリングがスケジュールされた時刻を示す浮動小数点値です。 コールバックの実行は正確に 1/60 秒間隔で発生しないため — そして実際、ユーザーのディスプレイのフレームレートが異なる場合、他のレートで発生する可能性があるため — コードが実行されているという単純な事実に頼って、最後のフレームから 1/60 秒であると想定することはできません。</p>

<p>そのため、アニメーションが目的の速度で正確にレンダリングされるように、提供されているタイムスタンプを使用する必要があります。 これを行うには、最初に行う必要があるのは、最後のフレームがレンダリングされてから経過した時間を計算することです。</p>

<pre class="brush: js notranslate">let lastFrameTime = 0;

function drawFrame(time, frame) {
  /* ... 次のフレームのスケジュール、バッファーの準備など ... */

  const deltaTime = (time - lastFrameTime) * 0.001;
  lastFrameTime = time;

  for (let view of pose.views) {
    /* 各ビューのレンダリング */
  }
}
</pre>

<p>これは、前のフレームのレンダリング時間を含む <code>lastFrameTime</code> と呼ばれるグローバル（またはオブジェクトプロパティ）を維持します。 この場合、時間の値はミリ秒単位で格納されるため、0.001 を掛けて時間を秒に変換します。 場合によっては、これにより後で時間を節約できます。 他の状況では、ミリ秒単位の時間が必要なため、何も変更する必要はありません。</p>

<p>経過時間を手に入れれば、レンダリングコードは、すべての移動オブジェクトが経過時間内にどれだけ移動したかを計算する手段を持ちます。 例えば、オブジェクトが回転している場合、次のように回転を適用できます。</p>

<pre class="brush: js notranslate">const xDeltaRotation = (xRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;
const yDeltaRotation = (yRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;
const zDeltaRotation = (zRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;
</pre>

<p>これは、フレームが最後に描画されてからオブジェクトが3つの軸のそれぞれを中心に回転した量を計算します。 これがないと、経過時間に関係なく、シェイプはフレームごとに指定された量だけ回転します。 これにより、多くの場合、かなりのつっかえが発生します。</p>

<p>単に回転するのではなく、移動するオブジェクトに適用される同様の概念では、次のようになります。</p>

<pre class="brush: js notranslate">const xDistanceMoved = xSpeedPerSecond * deltaTime;
const yDistanceMoved = ySpeedPerSecond * deltaTime;
const ZDistanceMoved = zSpeedPerSecond * deltaTime;
</pre>

<p><code>xSpeedPerSecond</code>、<code>ySpeedPerSecond</code>、<code>zSpeedPerSecond</code> は、それぞれのオブジェクトの速度の軸の成分を含みます。 つまり、<code>[xDistanceMoved, yDistanceMoved, zDistanceMoved]</code> は、オブジェクトの速度を表すベクトルです。</p>

<h2 id="Additional_tasks_related_to_animating_the_scene" name="Additional_tasks_related_to_animating_the_scene">シーンのアニメーションに関連する追加のタスク</h2>

<p>もちろん、レンダラーを通過するたびに発生する可能性のある他のこともあります。 最も一般的な2つは、<a href="/ja/docs/Web/API/WebXR_Device_API/Inputs">ユーザー入力の処理</a>と、シーン内のオブジェクトのユーザー制御状態やアニメーションパスなどの既知の要因に基づいて、オブジェクト（またはビューアー）の位置を更新することです。</p>

<h3 id="Handling_user_control_inputs" name="Handling_user_control_inputs">ユーザー制御入力の処理</h3>

<p>WebXR アプリケーションの使用中にユーザーが入力を提供する方法は3つあります。 まず、WebXR は、XR ハードウェア自体に統合されているコントローラーからの入力の直接処理をサポートしています。 これらの入力ソースには、ハンドコントローラー、光学追跡システム、加速度計と磁力計などのデバイス、およびそのような他のデバイスが含まれます。</p>

<p>2番目のタイプの入力は、XR システムを介して接続されたゲームパッドです。 これは、<a href="/ja/docs/Web/API/Gamepad_API">Gamepad API</a> から継承されたインターフェイスを使用しますが、WebXR を介してそれらを操作します。</p>

<p>3番目の最後のタイプの入力は、キーボード、マウス、トラックパッド、タッチスクリーン、非 XR ゲームパッドおよびジョイスティックなどの従来の非 XR 入力デバイスです。</p>

<p>XR ハードウェアから直接収集できる方向と位置の情報は、自動的に適用されます。 したがって、自分で処理する必要があるのは他の種類の入力です。</p>

<ul>
 <li>ポインティングデバイスのターゲットとボタンの押下</li>
 <li>ゲームパッドの入力</li>
 <li>非 XR 入力デバイスの入力</li>
</ul>

<p>WebXR を使用してシーンを表示する際にユーザー入力を処理する方法の詳細については、<a href="/ja/docs/Web/API/WebXR_Device_API/Inputs">入力と入力ソース</a>の記事を参照してください。</p>

<h3 id="Updating_object_positions" name="Updating_object_positions">オブジェクトの位置の更新</h3>

<p>ほとんどの（すべてではありませんが）シーンには、何らかの形のアニメーションが含まれています。 アニメーションでは、物事が適切に動き、互いに反応します。</p>

<p>例えば、仮想現実や拡張現実のゲームでは、敵の非プレイヤーキャラクター（NPC）がコンピューターに制御され、シーン内を移動する場合があります。 時間の経過とともに世界での位置が変化するだけでなく、各 NPC には相互に関連して移動するボディパーツまたはコンポーネントがある可能性があります。 クリーチャーが歩くと腕と足が揺れ、頭が素早く上下したり回転し、髪が跳ねたり揺れたりし、キャラクターが呼吸すると胴体は拡張収縮します。</p>

<p>さらに、動いている物体や構造物があるかもしれません。 スポーツゲームでは、空中で弧を描くボールがあり、その動きをシミュレートする必要があります。 レーシングゲームでは、車やその他の乗り物があり、車輪を含めてアニメーションする可動部品があります。 シーンに水がある場合、波紋または波がリアルに見えるようにする必要があります。 （一部のタイプのゲームの場合）ドア、壁、床など、構造の一部が動いている場合があります。</p>

<p>モーションのもう1つの一般的なソースは、プレイヤー自身です。 コントロールからの入力を解釈した後（XR 所属とそれ以外の両方）、ユーザーの動きをシミュレートするために、それらの変更をシーンに適用する必要があります。 詳細とこれがどのように機能するかの完全な例については、<a href="/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion">移動、向き、モーション</a>の記事を参照してください。</p>

<h2 id="Next_steps" name="Next_steps">次のステップ</h2>

<p>レンダラーを作成したら — または、完成していなくても機能するものがあれば — カメラとそのシーン全体の動きを処理することができます。 これについては、WebXR の<a href="/ja/docs/Web/API/WebXR_Device_API/Cameras">視点とビューアー</a>に関する記事で説明しています。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Geometry">WebXR の幾何学と参照空間</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Spatial_tracking">WebXR での空間追跡</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Cameras">視点とビューアー: WebXR でのカメラのシミュレーション</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion">移動、向き、モーション: WebXR の例</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Performance">WebXR パフォーマンスガイド</a></li>
</ul>
