---
title: 'WebGL: ウェブの 2D および 3D グラフィック'
slug: Web/API/WebGL_API
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{WebGLSidebar}}

WebGL (Web Graphics Library) は、互換性があるウェブブラウザーでプラグインを使用せずにインタラクティブな 3D グラフィックや 2D グラフィックをレンダリングするための JavaScript API です。HTML の {{HTMLElement("canvas")}} 要素へ OpenGL ES 2.0 に密接に従った API を導入することにより、WebGL を実現します。これにより、ユーザーの端末が提供するハードウェアのグラフィックアクセラレーションを API で利用することが可能になります。

WebGL は [Firefox](/ja/docs/Mozilla/Firefox) 4 以降、[Google Chrome](https://www.google.com/chrome/) 9 以降、[Opera](https://www.opera.com/) 12 以降、[Safari](https://www.apple.com/safari/) 5.1 以降、[Internet Explorer](https://support.microsoft.com/en-us/windows/internet-explorer-help-23360e49-9cd3-4dda-ba52-705336cc0de2) 11 以降、[Microsoft Edge](https://www.microsoft.com/ja-jp/edge) build 10240 以降でサポートしていますが、ユーザーの端末がこの機能をサポートするハードウェアであることも必要です。

WebGL 2](#webgl_2) API は OpenGL ES 3.0 の機能セットの大部分に対応しています。このインターフェイスは {{domxref("WebGL2RenderingContext")}} インターフェイスを通して提供されています。

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
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("EXT_texture_norm16")}}
- {{domxref("KHR_parallel_shader_compile")}}
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
- {{domxref("WEBGL_multi_draw")}}

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
- [Sampler オブジェクト](/ja/docs/Web/API/WebGLSampler)、
- [Uniform Buffer オブジェクト](/ja/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects)、
- [Sync オブジェクト](/ja/docs/Web/API/WebGLSync)、
- [Query オブジェクト](/ja/docs/Web/API/WebGLQuery)、
- [Transform Feedback オブジェクト](/ja/docs/Web/API/WebGLTransformFeedback)、
- WebGL 2 のコア機能に昇格した拡張: [Vertex Array オブジェクト](/ja/docs/Web/API/WebGLVertexArrayObject)、[instancing](/ja/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)、[Multiple Render Targets](/ja/docs/Web/API/WebGL2RenderingContext/drawBuffers)、[fragment depth](/ja/docs/Web/API/EXT_frag_depth)。

["WebGL 2 lands in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) のブログ記事や、[webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) のデモもご覧ください。

## ガイドとチュートリアル

下記に、WebGL の概念を学習するのに役立つガイド一式とステップ毎のレッスンや例のあるチュートリアルがあります。

### ガイド

- [WebGL でのデータ](/ja/docs/Web/API/WebGL_API/Data)
  - : 変数、バッファ、その他の WebGL コードを書く時に使うデータタイプのガイド
- [WebGL のベストプラクティス](/ja/docs/Web/API/WebGL_API/WebGL_best_practices)
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
  - : 3D 変換行列がどのように働くか、およびウェブ (WebGL の演算や、CSS 座標変換) でどのように使用できるかのガイドです

## リソース

- [Khronos WebGL サイト](https://www.khronos.org/webgl/): Khronos Group の WebGL についてのメインサイト
- [WebGL Fundamentals](https://web.dev/webgl-fundamentals/): WebGL の基礎と、基本的なチュートリアルがあります。
- [Raw WebGL: An introduction to WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) Nick Desaulniers による、 WebGL の基本的な部分を紹介する講演です。
- [WebGL playground](http://webglplayground.net): WebGL プロジェクトの作成と共有ができるオンラインツール。迅速なプロトタイピングや実験に最適です。
- [WebGL Academy](http://www.webglacademy.com): WebGL プログラミングの基礎を学ぶチュートリアルがある、 HTML/JavaScript エディターです。
- [WebGL Stats](http://webglstats.com/): さまざまなプラットフォームのブラウザーについて、WebGL の機能性の状況を示すサイトです。

### ライブラリー

- [three.js](https://threejs.org/) はオープンソースでフル機能の 3D WebGL ライブラリーです。
- [Babylon.js](https://www.babylonjs.com) は、パワフルで単純、かつオープンなゲームおよび 3D レンダリングエンジンで、分かりやすい JavaScript フレームワークにまとめられています。
- [Pixi.js](https://pixijs.com/) は、高速でオープンソースの 2D WebGL レンダラーです。
- [Phaser](https://phaser.io/) は、キャンバスや WebGL を使ったブラウザーゲームのための、高速で、無料で、楽しいオープンソースのフレームワークです。
- [PlayCanvas](https://playcanvas.com/) は、オープンソースのゲームエンジンです。
- [glMatrix](https://github.com/toji/gl-matrix) は、高性能な WebGL アプリケーションのための JavaScript の行列およびベクトルライブラリーです。
- [twgl](https://twgljs.org) は、webgl の冗長性を減らすためのライブラリーです。
- [RedGL](https://github.com/redcamel/RedGL2) は、オープンソースの 3D WebGL ライブラリです。
- [vtk.js](https://kitware.github.io/vtk-js/) は、ブラウザー上で科学的な可視化を行うための JavaScript ライブラリーです。
- [webgl-lint](https://greggman.github.io/webgl-lint/) は、 WebGLコードのエラーを探し、有益な情報を提供するのに役立ちます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 互換性に関する注記

ブラウザだけでなく、GPU も機能をサポートしていなければなりません。よって、例えば S3 Texture Compression (S3TC) は Tegra ベースのタブレットでしか使用できません。ほとんどのブラウザーでは WebGL コンテキストを、コンテキスト名 `webgl` で作成しますが、古いブラウザーでは `experimental-webgl` も必要です。さらに将来の [WebGL 2](/ja/docs/Web/API/WebGL2RenderingContext) では完全な下位互換性があり、コンテキスト名 `webgl2` を持ちます。

### Gecko に関するメモ

#### WebGL のデバッグおよびテスト

Firefox では、テストなどの目的で WebGL の機能を制限する 2 つの設定項目があります。

- `webgl.min_capability_mode`
  - : この論理属性に `true` を指定すると、最小互換性モードが有効となります。このモードでは、必要最低限の機能セットと WebGL の仕様で指定された機能のみが使用可能です。このモードで動作確認を行うことにより、より多くの閲覧環境での動作を保証することができます。初期値は `false` です。
- `webgl.disable_extensions`
  - : この論理属性に `true` を指定すると、すべての WebGL 拡張が無効になります。初期値は `false` です。

## 関連情報

- [Canvas](/ja/docs/Web/API/Canvas_API)
- [WebGL 拡張の互換性情報](/ja/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#Browser_compatibility)
