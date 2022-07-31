---
title: Web上の 3D ゲームの概要
slug: Games/Techniques/3D_on_the_web
tags:
  - Games
  - Graphics
  - NeedsContent
  - NeedsExample
  - TopicStub
  - WebGL
  - WebVR
  - three.js
translation_of: Games/Techniques/3D_on_the_web
---
<div>{{GamesSidebar}}</div>

<p class="summary">Web でのリッチなゲーム体験の場合、選択する武器は WebGL であり、HTML {{htmlelement("canvas")}} にレンダリングされます。 WebGL は、基本的に Web 用の OpenGL ES 2.0 であり、リッチなインタラクティブアニメーション、そしてもちろんゲームを構築するためのツールを提供する JavaScript API です。 ハードウェアアクセラレーションされた JavaScript を使用して、動的な 3D グラフィックスを生成およびレンダリングできます。</p>

<h2 id="Documentation_and_browser_support" name="Documentation_and_browser_support">ドキュメントとブラウザーのサポート</h2>

<p><a href="/ja/docs/Web/API/WebGL_API">WebGL</a> プロジェクトのドキュメントと仕様は、ほとんどの Web API のように W3C ではなく、<a href="https://www.khronos.org/">Khronos Group</a> によって維持されています。 最新のブラウザーでのサポートは、モバイルでも非常に良いので、それほど心配する必要はありません。 主なブラウザーはすべて WebGL をサポートしており、使用するデバイスのパフォーマンスを最適化するだけに集中する必要があります。</p>

<p>近い将来、WebGL 2.0（OpenGL ES 3.0 に基づく）のリリースに向けた継続的な取り組みがあります。 これにより、多くの改善がもたらされ、開発者は現在の強力なハードウェアを使用して最新の Web 用のゲームを構築できます。</p>

<h2 id="Explaining_the_basic_3D_theory" name="Explaining_the_basic_3D_theory">基本的な 3D 理論の説明</h2>

<p>3D 理論の基本は、3D 空間で表される形状を中心としており、座標系を使用してそれらの位置を計算します。 必要なすべての情報については、<a href="/ja/docs/Games/Techniques/3D_on_the_web/Basic_theory">基本的な 3D 理論の説明</a>の記事を参照してください。</p>

<h2 id="Advanced_concepts" name="Advanced_concepts">高度な概念</h2>

<p>WebGL を使用すると、さらに多くのことができます。 シェーダー、衝突検出、または最新のホットトピックである Web 上の仮想現実など、詳細に掘り下げて学ぶ必要のある高度な概念がいくつかあります。</p>

<h3 id="Shaders" name="Shaders">シェーダー</h3>

<p>それ自体は別の話であるシェーダーについて言及する価値があります。 シェーダーは、グラフィックスパイプラインによって直接実行される C と同様の構文を持つ特別な OpenGL シェーディング言語である GLSL を使用します。 これらは、頂点シェーダーとフラグメントシェーダー（またはピクセルシェーダー）に分割できます。 前者は形状の位置を実際の 3D 描画座標に変換し、後者はレンダリングする色やその他の属性を計算します。 それらの詳細については、<a href="/ja/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders">GLSL シェーダー</a>の記事を必ず確認してください。</p>

<h3 id="Collision_detection" name="Collision_detection">衝突検出</h3>

<p>衝突検出のないゲームを想像するのは難しいです — 何かが何かにぶつかっているときには、常にそれを解決する必要があります。 以下に学ぶことができる情報があります。</p>

<ul>
 <li><a href="/ja/docs/Games/Techniques/2D_collision_detection">2D 衝突検出</a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_collision_detection">3D 衝突検出</a></li>
</ul>

<h3 id="WebVR" name="WebVR">WebVR</h3>

<p>仮想現実の概念は新しいものではありませんが、<a href="https://www.oculus.com/ja/rift/">Oculus Rift</a> などのハードウェアの進歩と VR ハードウェアから情報をキャプチャーして JavaScript アプリケーションで使用できるようにするための (現在実験的な) <a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> のおかげで、Web に押し寄せています。 詳細については、<a href="/ja/docs/Games/Techniques/3D_on_the_web/WebVR">WebVR — Webによる仮想現実</a>をご覧ください。</p>

<p>また、<a href="http://aframe.io/">A-Frame</a> フレームワークを使用して仮想現実の 3D 環境を構築することがいかに簡単であるかを示す、<a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame">A-Frame を使った基本的なデモの構築</a>に関する記事もあります。</p>

<h2 id="The_rise_of_libraries_and_frameworks" name="The_rise_of_libraries_and_frameworks">ライブラリーとフレームワークの台頭</h2>

<p>生の WebGL のコーディングはかなり複雑ですが、プロジェクトがより高度になるにつれて、長期的にはそれを理解する必要があります (開始するには、<a href="/ja/docs/Web/API/WebGL_API">WebGL ドキュメント</a>を参照してください)。 実際のプロジェクトでは、開発をスピードアップし、作業中のプロジェクトを管理するのに役立つフレームワークをたぶん使うことになるでしょう。 3D ゲームのフレームワークを使用すると、使用するツールによって多くの処理が行われるため、パフォーマンスを最適化するのにも役立ちます。 これにより、ゲーム自体の構築に集中できます。</p>

<p>最も人気のある JavaScript 3D ライブラリーは <a href="http://threejs.org/">Three.js</a> で、一般的な 3D 技術をより簡単に実装できる多目的ツールです。 他にもチェックする価値のある人気のあるゲーム開発ライブラリーとフレームワークがあります。 <a href="https://aframe.io">A-Frame</a>、<a href="https://playcanvas.com/">PlayCanvas</a>、<a href="http://www.babylonjs.com/">Babylon.js</a> などは、豊富なドキュメント、オンラインエディター、活発なコミュニティを備えた、最もよく知られたものです。</p>

<h3 id="Building_up_a_basic_demo_with_A-Frame" name="Building_up_a_basic_demo_with_A-Frame">A-Frame を使った基本的なデモの構築</h3>

<p>A-Frame は、3D および VR エクスペリエンスを構築するための Web フレームワークです。 内部的には、宣言型のエンティティコンポーネントパターンを備えた Three.js フレームワークなので、HTML だけでシーンを構築できます。 デモを作成するステップバイステップのプロセスについては、<a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame">A-Frame を使った基本的なデモの構築</a>のサブページを参照してください。</p>

<h3 id="Building_up_a_basic_demo_with_Babylon.js" name="Building_up_a_basic_demo_with_Babylon.js">Babylon.js を使った基本的なデモの構築</h3>

<p>Babylon.js は、開発者が使用する最も人気のある 3D ゲームエンジンの1つです。 他の 3D ライブラリーと同様に、一般的な 3D 機能をより迅速に実装するのに役立つ組み込み関数を提供します。 開発環境のセットアップ、必要な HTML の構造化、JavaScript コードの記述など、Babylon.jsの 基本的な使い方については、<a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js">Babylon.js を使った基本的なデモの構築</a>のサブページを参照してください。</p>

<h3 id="Building_up_a_basic_demo_with_PlayCanvas" name="Building_up_a_basic_demo_with_PlayCanvas">PlayCanvas を使った基本的なデモの構築</h3>

<p>PlayCanvas は、GitHub でオープンソース化された人気の 3D WebGL ゲームエンジンであり、オンラインで利用可能なエディターと優れたドキュメントを備えています。 より高度な詳細については、<a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas">PlayCanvas を使った基本的なデモの構築</a>のサブページを参照してください。 また、PlayCanvas ライブラリーとオンラインエディターを使ったデモの作成方法については、さらに詳しい記事を参照してください。</p>

<h3 id="Building_up_a_basic_demo_with_Three.js" name="Building_up_a_basic_demo_with_Three.js">Three.js を使った基本的なデモの構築</h3>

<p>Three.js は、他のライブラリーと同様に、巨大なアドバンテージを提供します。 何百行もの WebGL コードを記述して興味深いものを構築する代わりに、組み込みのヘルパー関数を使用して、はるかに簡単かつ迅速に構築できます。 デモを作成するステップバイステップのプロセスについては、<a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js">Three.js を使った基本的なデモの構築</a>のサブページを参照してください。</p>

<h3 id="Other_tools" name="Other_tools">その他のツール</h3>

<p><a href="http://unity3d.com/">Unity</a> と <a href="https://www.unrealengine.com/">Unreal</a> はどちらも <a href="/ja/docs/Games/Tools/asm.js">asm.js</a> を使用してゲームを <a href="/ja/docs/Web/API/WebGL_API">WebGL</a> にエクスポートできるため、それらのツールとテクニックを自由に使用して、Web にエクスポートされるゲームを構築できます。</p>

<p><img alt="" src="http://end3r.github.io/MDN-Games-3D/A-Frame/img/shapes.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<h2 id="Where_to_go_next" name="Where_to_go_next">次はどこへ</h2>

<p>この記事では、現在利用可能なテクノロジーで可能なことのほんの一部を紹介しました。 WebGL と、その上に構築されたライブラリーやフレームワークを使用して、Web 上で没入型の美しく高速な 3D ゲームを構築できます。</p>

<h3 id="Source_code" name="Source_code">ソースコード</h3>

<p>このシリーズのデモのすべてのソースコードは <a href="http://end3r.github.io/MDN-Games-3D/">GitHub</a> にあります。</p>

<h3 id="APIs" name="APIs">API</h3>

<ul>
 <li><a href="/ja/docs/Web/API/Canvas_API">Canvas API</a></li>
 <li><a href="/ja/docs/Web/API/WebGL_API">WebGL API</a></li>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API</a></li>
</ul>

<h3 id="Frameworks" name="Frameworks">フレームワーク</h3>

<ul>
 <li><a href="http://threejs.org/">Three.js</a></li>
 <li><a href="https://github.com/WhitestormJS/whs.js">Whitestorm.js</a> (Three.js に基づく)</li>
 <li><a href="https://playcanvas.com/">PlayCanvas</a></li>
 <li><a href="http://www.babylonjs.com/">Babylon.js</a></li>
 <li><a href="http://aframe.io/">A-Frame</a></li>
</ul>

<h3 id="Tutorials" name="Tutorials">チュートリアル</h3>

<ul>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js">Three.js を使った基本的なデモの構築</a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Whitestorm.js">Whitestorm.js を使った基本的なデモの構築</a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas">PlayCanvas を使った基本的なデモの構築</a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js">Babylon.js を使った基本的なデモの構築</a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame">A-Frame を使った基本的なデモの構築</a></li>
</ul>
