---
title: 実例による WebGL
slug: Web/API/WebGL_API/By_example
---

{{learnsidebar}}

{{Next("Learn/WebGL/By_example/Detect_WebGL")}}

実例による WebGL は、WebGL の概念と機能を短く説明する一連の実例サンプルです。実例はトピックと難易度順に従って並んでおり、WebGL レンダリングコンテキスト、シェダープログラミング、テクスチャ、ジオメトリ、ユーザーインタラクションなどを網羅しています。

## トピック別の実例

実例は難易度の低い順に並んでいます。単なる長い一覧ではなく、トピックごとにさらに分割された内容になっています。最初に基本レベル、後に中級や上級レベルで話し合う必要がある時など、トピックを何度か見直す事があります。

シェーダー、ジオメトリ、{{Glossary("GPU")}}メモリーを使って処理する代わりに、最初のプログラムでは実例で WebGL を少しずつ理解を深めていきます。私たちはそれがより効果的な学習体験に繋がり、最終的には概念の深い理解に繋がると信じています。

実例に関する説明は本文とコード内のコメントの両方にあります。より高度な実例では、以前に説明したコードのコメントは繰り返さないため、すべてのコメントを読んでコードを理解しておく必要があります。

### レンダリングコンテキストを知る

- [WebGL を検出する](/ja/docs/Web/API/WebGL_API/By_example/Detect_WebGL)
  - : この例では{{Glossary("WebGL")}}レンダリングコンテキストを検出して、結果をユーザーに描画します
- [カラーのクリア](/ja/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)
  - : 単色でレンダリングコンテキストをクリアします
- [クリックしてクリア](/ja/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking)
  - : ユーザー操作とグラフィック操作を組み合わせる方法です。ユーザーがクリックした時にレンダリングコンテキストをランダムなカラーでクリアします
- [単純なカラーアニメーション](/ja/docs/Web/API/WebGL_API/By_example/Simple_color_animation)
  - : 基本的なカラーアニメーションで、毎秒ごとに異なったランダムなカラーで{{Glossary("WebGL")}}描画バッファをクリアする事によって行われます
- [カラーマスキング](/ja/docs/Web/API/WebGL_API/By_example/Color_masking)
  - : カラーマスキングを適用して、表示色の範囲を特定の色合いに制限する事によってランダムな色を修正します
- [基本的な切り取り](/ja/docs/Web/API/WebGL_API/By_example/Basic_scissoring)
  - : 切り取り操作で単純な長方形や正方形を描きます
- [キャンバスサイズと WebGL](/ja/docs/Web/API/WebGL_API/By_example/Canvas_size_and_WebGL)
  - : この例ではブラウザーウィンドウに描画されるように、キャンバスサイズを{{Glossary("CSS")}}ピクセル単位の要素サイズに設定する（または設定しない）影響について理解を深めていきます
- [定型文 1](/ja/docs/Web/API/WebGL_API/By_example/Boilerplate_1)
  - : WebGL の初期化をより簡単に行う JavaScript ユーティリティ関数の定義について説明します。このコードは繰り返しになるためこれから表示しなくなります
- [切り取りアニメーション](/ja/docs/Web/API/WebGL_API/By_example/Scissor_animation)
  - : 切り取りやクリア操作の楽しいアニメーション
- [雨のように長方形を降らせる](/ja/docs/Web/API/WebGL_API/By_example/Raining_rectangles)
  - : 単色のクリア、切り取り、アニメーション、ユーザーインタラクションをデモする単純なゲーム

### シェーダープログラミングの基本

- [Hello GLSL](/ja/docs/Web/API/WebGL_API/By_example/Hello_GLSL)
  - : 単色の正方形を描画する基本的なシェーダープログラミング
- [Hello vertex attributes](/ja/docs/Web/API/WebGL_API/By_example/Hello_vertex_attributes)
  - : 頂点属性によるシェーダプログラミングとユーザーインタラクションの結合
- [Textures from code](/ja/docs/Web/API/WebGL_API/By_example/Textures_from_code)
  - : フラグメントシェーダを使用した手続き型テクスチャリングの簡単なデモ

### その他、高度な実例

- [Video textures](/ja/docs/Web/API/WebGL_API/By_example/Video_textures)
  - : この例ではビデオファイルをテクスチャとして使用します

{{Next("Learn/WebGL/By_example/Detect_WebGL")}}
