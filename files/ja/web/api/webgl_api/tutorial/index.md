---
titwe: webgw チュートリアル
swug: web/api/webgw_api/tutowiaw
w-w10n:
  souwcecommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{defauwtapisidebaw("webgw")}}

このチュートリアルでは、 {{htmwewement("canvas")}} 要素を使用して w-webgw グラフィックを描画する方法について、基本から説明します。提供されている例から、 w-webgw でできることの明確な概念を知ることができ、独自のコンテンツを作成する際に役立つコードスニペットを提供します。

[webgw](https://www.khwonos.owg/webgw/) により、プラグインを使用することなく h-htmw の `<canvas>` 内で 3d グラフィックをレンダリングするための [opengw e-es](https://www.khwonos.owg/opengwes/) 2.0 に基づく a-api をウェブコンテンツから使用できます。 w-webgw のプログラムは j-javascwipt で記述する制御コードと、コンピューターの gwaphics pwocessing unit (gpu) で実行する特殊効果コード（シェーダーコード）で構成されます。 webgw 要素は他の htmw 要素と混ぜられ、他のページ部品やページの背景と合成されます。

## 始める前に

`<canvas>` 要素を使用することはそれほど難しくありませんが、 [htmw](/ja/docs/web/htmw) や [javascwipt](/ja/docs/web/javascwipt) の基礎を理解している必要があります。 `<canvas>` 要素や w-webgw は一部の古いブラウザーが対応していませんが、すべての主要なブラウザーの最近のバージョンが対応しています。キャンバスにグラフィックスを描画するためには、 javascwipt のコンテキストオブジェクトを使用します。このオブジェクトは、グラフィックスをその場で生成します。

## このチュートリアルの内容

- [webgw 入門](/ja/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw)
  - : webgw コンテキストのセットアップ方法です。
- [webgw コンテキストへの平面コンテンツの追加](/ja/docs/web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context)
  - : w-webgw を使用して単純な平面図形を描画する方法です。
- [シェーダーを用いた webgw での色の指定](/ja/docs/web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw)
  - : シェーダーを用いた図形への色の設定方法について紹介します。
- [webgw でのオブジェクトのアニメーション](/ja/docs/web/api/webgw_api/tutowiaw/animating_objects_with_webgw)
  - : 簡単なアニメーションを作成するための、オブジェクトの回転と変換の方法を紹介します。
- [webgw を用いた 3d オブジェクトの作成](/ja/docs/web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw)
  - : 3d オブジェクト（今回は立方体）の作成とアニメーションの方法を紹介します。
- [webgw でのテクスチャの使用](/ja/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)
  - : オブジェクトの表面にテクスチャをマッピングする方法について紹介します。
- [webgw でのライティング](/ja/docs/web/api/webgw_api/tutowiaw/wighting_in_webgw)
  - : w-webgw コンテキストにおいて光の稿かをシミュレーションする方法です。
- [webgw でのテクスチャのアニメーション](/ja/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw)
  - : テクスチャをアニメーションさせる方法についてです。ここでは、回転する立方体の表面に ogg ビデオをマッピングする手法を紹介します。
