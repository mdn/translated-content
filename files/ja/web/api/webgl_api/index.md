---
title: 'WebGL: ウェブの 2D および 3D グラフィック'
slug: Web/API/WebGL_API
---

{{WebGLSidebar}}

WebGL (Web Graphics Library) は、互換性があるウェブブラウザーでプラグインを使用せずにインタラクティブな 3D グラフィックスや 2D グラフィックスをレンダリングするための JavaScript API です。HTML5 {{HTMLElement("canvas")}} 要素へ OpenGL ES 2.0 に密接に従った API を導入することにより、WebGL を実現します。これにより、ユーザーの端末が提供するハードウェアのグラフィックアクセラレーションを API で利用することが可能になります。

WebGL は [Firefox](/ja/Firefox) 4 以降、[Google Chrome](https://www.google.com/chrome/) 9 以降、[Opera](https://www.opera.com/) 12 以降、[Safari](https://www.apple.com/jp/safari/) 5.1 以降、[Internet Explorer](http://windows.microsoft.com/ja-jp/internet-explorer/browser-ie) 11 以降、[Microsoft Edge](https://www.microsoft.com/ja-jp/edge) build 10240 以降でサポートしていますが、ユーザーの端末がこの機能をサポートするハードウェアであることも必要です。

{{HTMLElement("canvas")}} 要素は、ウェブページで 2D グラフィックスを表示する [Canvas 2D](/ja/docs/Web/API/Canvas_API) でも使用します。

ウェブページ上の 2D グラフィックを実現するには、 {{HTMLElement("canvas")}} 要素で [Canvas API](/ja/docs/Web/API/Canvas_API) を使用する方法もあります。

## リファレンス

### 標準インターフェイス

- {{domxref("WebGLRenderingContext")}}
- {{domxref("WebGL2RenderingContext")}}
- {{domxref("WebGLActiveInfo")}}
- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLQuery")}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLSampler")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLSync")}}
- {{domxref("WebGLTexture")}}
- {{domxref("WebGLTransformFeedback")}}
- {{domxref("WebGLUniformLocation")}}
- {{domxref("WebGLVertexArrayObject")}}

### 拡張機能

- {{domxref("ANGLE_instanced_arrays")}}
- {{domxref("EXT_blend_minmax")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("EXT_disjoint_timer_query")}}
- {{domxref("EXT_float_blend")}} {{experimental_inline}}
- {{domxref("EXT_frag_depth")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("OES_fbo_render_mipmap")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
- {{domxref("OES_vertex_array_object")}}
- {{domxref("OVR_multiview2")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("WEBGL_compressed_texture_atc")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_debug_renderer_info")}}
- {{domxref("WEBGL_debug_shaders")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WEBGL_lose_context")}}

### イベント

- {{domxref("HTMLCanvasElement/webglcontextlost_event", "webglcontextlost")}}
- {{domxref("HTMLCanvasElement/webglcontextrestored_event", "webglcontextrestored")}}
- {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}}

### 定数と型

- [WebGL の定数](/ja/docs/Web/API/WebGL_API/Constants)
- [WebGL の型](/ja/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2 は {{domxref("WebGL2RenderingContext")}} インターフェイスによって提供される、WebGL の大規模なアップデートです。これは OpenGL ES 3.0 に基づいており、以下の新機能を含みます:

- [3D テクスチャ](/ja/docs/Web/API/WebGL2RenderingContext/texImage3D)、
- [Sampler object](/ja/docs/Web/API/WebGLSampler)、
- [Uniform Buffer object](/ja/docs/Web/API/WebGL2RenderingContext#Uniform_buffer_objects)、
- [Sync object](/ja/docs/Web/API/WebGLSync)、
- [Query object](/ja/docs/Web/API/WebGLQuery)、
- [Transform Feedback object](/ja/docs/Web/API/WebGLTransformFeedback)、
- WebGL 2 のコア機能に昇格した拡張: [Vertex Array object](/ja/docs/Web/API/WebGLVertexArrayObject)、[instancing](/ja/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)、[Multiple Render Targets](/ja/docs/Web/API/WebGL2RenderingContext/drawBuffers)、[fragment depth](/ja/docs/Web/API/EXT_frag_depth)。

["WebGL 2 lands in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) のブログ記事や、[webglsamples.org/WebGL2Samples](http://webglsamples.org/WebGL2Samples/) のデモもご覧ください。

## ガイドとチュートリアル

下記に、WebGL の概念を学習するのに役立つガイド一式とステップ毎のレッスンや例のあるチュートリアルがあります。

### ガイド

- [WebGL でのデータ](/ja/docs/Web/API/WebGL_API/Data)
  - : 変数、バッファ、その他の WebGL コードを書く時に使うデータタイプのガイド
- [WebGL ベストプラクティス](/ja/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : WebGL のコンテンツの品質、パフォーマンス、信頼性を改善するためのヒントと提案です
- [拡張機能](/ja/docs/Web/API/WebGL_API/Using_Extensions)
  - : WebGL で利用可能な拡張機能の使用方法です

### チュートリアル

- [WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial)
  - : WebGL のコアコンセプトに関する、ビギナー向けのガイドです。WebGL の経験がない場合におすすめするガイドです

### 例

- [基本的な 2D WebGL アニメーションの例](/ja/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : この例では、単一色の形状のシンプルなアニメーションをデモします。検査するトピックはアスペクト比の違いや、複数のシェーダーの集合からシェーダープログラムを生成する機能や、WebGL での描画の基本を扱います
- [WebGL by example](/ja/docs/Web/API/WebGL_API/By_example)
  - : WebGL のコンセプトと機能を紹介する短い解説付きのライブサンプルのシリーズです。サンプルはトピックと難易度に応じて分類されており、WebGL レンダリングコンテキスト、シェーダプログラミング、テクスチャ、ジオメトリ、ユーザー操作などをカバーしています。

### 高度なチュートリアル

- [WebGL model view projection](/ja/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : 3D オブジェクトビューを表現するためによく使用する 3 つの主要な行列 (モデル行列、ビュー行列、プロジェクション行列) について、詳しく説明します
- [Matrix math for the web](/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : 3D 変換行列がどのように働くか、および Web (WebGL の演算や、CSS3 Transform) でどのように使用できるかのガイドです

## リソース

- [Raw WebGL: An introduction to WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage): WebGL の基礎を Nick Desaulniers が紹介します。低レベルのグラフィックスプログラミングを行ったことがない方におすすめします。
- [Khronos WebGL サイト](http://www.khronos.org/webgl/): Khronos Group の WebGL についてのメインサイト
- [WebGL Fundamentals](http://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/): WebGL の基礎と、基本的なチュートリアルがあります。
- [WebGL playground](http://webglplayground.net): WebGL プロジェクトの作成と共有ができるオンラインツール。迅速なプロトタイピングや実験に最適です。
- [WebGL Academy](http://www.webglacademy.com): WebGL プログラミングの基礎を学ぶチュートリアルがある、 HTML/JavaScript エディターです。
- [WebGL Stats](http://webglstats.com/): さまざまなプラットフォームのブラウザーについて、WebGL の機能性の状況を示すサイトです。

### ライブラリー

- [glMatrix](https://github.com/toji/gl-matrix): 高性能 WebGL アプリ製作のための、行列とベクトルの JavaScript ライブラリー
- [PhiloGL](http://senchalabs.github.com/philogl/) is a WebGL framework for data visualization, creative coding, and game development.
- [Pixi.js](http://www.pixijs.com/) is a fast, open-source 2D WebGL renderer.
- [PlayCanvas](https://playcanvas.com/) is an open-source game engine.
- [Sylvester](http://sylvester.jcoglan.com/): ベクトルや行列を操作するためのオープンソースライブラリー。WebGL 用として最適化されたものではありませんが、非常に堅牢です。
- [three.js](https://threejs.org/) is an open-source, fully featured 3D WebGL library.
- [Phaser](https://phaser.io/) is a fast, free and fun open source framework for Canvas and WebGL powered browser games.
- [RedGL](https://github.com/redcamel/RedGL2) is an open-source 3D WebGL library.
- [vtk.js](https://kitware.github.io/vtk-js/) is a JavaScript library for scientific visualization in your browser.

## 仕様書

| 仕様書                                   | 状態                                 | 備考                                         |
| ---------------------------------------- | ------------------------------------ | -------------------------------------------- |
| {{SpecName('OpenGL ES 3.0')}} | {{Spec2('OpenGL ES 3.0')}} |                                              |
| {{SpecName('OpenGL ES 2.0')}} | {{Spec2('OpenGL ES 2.0')}} |                                              |
| {{SpecName('WebGL2')}}             | {{Spec2('WebGL2')}}             | WebGL 1 の上に構築。OpenGL ES 3.0 に基づく。 |
| {{SpecName('WebGL')}}             | {{Spec2('WebGL')}}             | 初回定義。OpenGL ES 2.0 に基づく。           |

## ブラウザーの互換性

### WebGL 1

{{Compat("api.WebGLRenderingContext", 0)}}

### WebGL 2

{{Compat("api.WebGL2RenderingContext", 0)}}

### 互換性に関する注記

ブラウザだけでなく、GPU も機能をサポートしていなければなりません。よって、例えば S3 Texture Compression (S3TC) は Tegra ベースのタブレットでしか使用できません。ほとんどのブラウザーでは WebGL コンテキストを、コンテキスト名 `webgl` で作成しますが、古いブラウザーでは `experimental-webgl` も必要です。さらに将来の [WebGL 2](/ja/docs/Web/API/WebGL2RenderingContext) では完全な下位互換性があり、コンテキスト名 `webgl2` を持ちます。

### Gecko に関する注記

#### WebGL のデバッグおよびテスト

Gecko 10.0 {{geckoRelease("10.0")}} 以降には、テストなどの目的で WebGL の機能を制限する 2 つの設定項目があります。

- `webgl.min_capability_mode`
  - : この論理属性に `true` を指定すると、最小互換性モードが有効となります。このモードでは、必要最低限の機能セットと WebGL の仕様で指定された機能のみが使用可能です。このモードで動作確認を行うことにより、より多くの閲覧環境での動作を保証することができます。初期値は `false` です。
- `webgl.disable_extensions`
  - : この論理属性に `true` を指定すると、すべての WebGL 拡張が無効になります。初期値は `false` です。

## 関連情報

- [Canvas](/ja/docs/Web/API/Canvas_API)
- [WebGL 拡張の互換性情報](/ja/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#Browser_compatibility)
