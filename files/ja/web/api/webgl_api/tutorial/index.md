---
title: WebGL チュートリアル
slug: Web/API/WebGL_API/Tutorial
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

このチュートリアルでは、 {{HTMLElement("canvas")}} 要素を使用して WebGL グラフィックを描画する方法について、基本から説明します。提供されている例から、 WebGL でできることの明確な概念を知ることができ、独自のコンテンツを作成する際に役立つコードスニペットを提供します。

[WebGL](https://www.khronos.org/webgl/) により、プラグインを使用することなく HTML の `<canvas>` 内で 3D グラフィックをレンダリングするための [OpenGL ES](https://www.khronos.org/opengles/) 2.0 に基づく API をウェブコンテンツから使用できます。 WebGL のプログラムは JavaScript で記述する制御コードと、コンピューターの Graphics Processing Unit (GPU) で実行する特殊効果コード（シェーダーコード）で構成されます。 WebGL 要素は他の HTML 要素と混ぜられ、他のページ部品やページの背景と合成されます。

## 始める前に

`<canvas>` 要素を使用することはそれほど難しくありませんが、 [HTML](/ja/docs/Web/HTML) や [JavaScript](/ja/docs/Web/JavaScript) の基礎を理解している必要があります。 `<canvas>` 要素や WebGL は一部の古いブラウザーが対応していませんが、すべての主要なブラウザーの最近のバージョンが対応しています。キャンバスにグラフィックスを描画するためには、 JavaScript のコンテキストオブジェクトを使用します。このオブジェクトは、グラフィックスをその場で生成します。

## このチュートリアルの内容

- [WebGL 入門](/ja/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : WebGL コンテキストのセットアップ方法です。
- [WebGL コンテキストへの平面コンテンツの追加](/ja/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : WebGL を使用して単純な平面図形を描画する方法です。
- [シェーダーを用いた WebGL での色の指定](/ja/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : シェーダーを用いた図形への色の設定方法について紹介します。
- [WebGL でのオブジェクトのアニメーション](/ja/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : 簡単なアニメーションを作成するための、オブジェクトの回転と変換の方法を紹介します。
- [WebGL を用いた 3D オブジェクトの作成](/ja/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : 3D オブジェクト（今回は立方体）の作成とアニメーションの方法を紹介します。
- [WebGL でのテクスチャの使用](/ja/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : オブジェクトの表面にテクスチャをマッピングする方法について紹介します。
- [WebGL でのライティング](/ja/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : WebGL コンテキストにおいて光の稿かをシミュレーションする方法です。
- [WebGL でのテクスチャのアニメーション](/ja/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : テクスチャをアニメーションさせる方法についてです。ここでは、回転する立方体の表面に Ogg ビデオをマッピングする手法を紹介します。
