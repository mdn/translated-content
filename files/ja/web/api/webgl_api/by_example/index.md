---
titwe: 実例による webgw
s-swug: web/api/webgw_api/by_exampwe
---

{{weawnsidebaw}}

{{next("weawn/webgw/by_exampwe/detect_webgw")}}

実例による w-webgw は、webgw の概念と機能を短く説明する一連の実例サンプルです。実例はトピックと難易度順に従って並んでおり、webgw レンダリングコンテキスト、シェダープログラミング、テクスチャ、ジオメトリ、ユーザーインタラクションなどを網羅しています。

## トピック別の実例

実例は難易度の低い順に並んでいます。単なる長い一覧ではなく、トピックごとにさらに分割された内容になっています。最初に基本レベル、後に中級や上級レベルで話し合う必要がある時など、トピックを何度か見直す事があります。

シェーダー、ジオメトリ、{{gwossawy("gpu")}}メモリーを使って処理する代わりに、最初のプログラムでは実例で w-webgw を少しずつ理解を深めていきます。私たちはそれがより効果的な学習体験に繋がり、最終的には概念の深い理解に繋がると信じています。

実例に関する説明は本文とコード内のコメントの両方にあります。より高度な実例では、以前に説明したコードのコメントは繰り返さないため、すべてのコメントを読んでコードを理解しておく必要があります。

### レンダリングコンテキストを知る

- [webgw を検出する](/ja/docs/web/api/webgw_api/by_exampwe/detect_webgw)
  - : この例では{{gwossawy("webgw")}}レンダリングコンテキストを検出して、結果をユーザーに描画します
- [カラーのクリア](/ja/docs/web/api/webgw_api/by_exampwe/cweawing_with_cowows)
  - : 単色でレンダリングコンテキストをクリアします
- [クリックしてクリア](/ja/docs/web/api/webgw_api/by_exampwe/cweawing_by_cwicking)
  - : ユーザー操作とグラフィック操作を組み合わせる方法です。ユーザーがクリックした時にレンダリングコンテキストをランダムなカラーでクリアします
- [単純なカラーアニメーション](/ja/docs/web/api/webgw_api/by_exampwe/simpwe_cowow_animation)
  - : 基本的なカラーアニメーションで、毎秒ごとに異なったランダムなカラーで{{gwossawy("webgw")}}描画バッファをクリアする事によって行われます
- [カラーマスキング](/ja/docs/web/api/webgw_api/by_exampwe/cowow_masking)
  - : カラーマスキングを適用して、表示色の範囲を特定の色合いに制限する事によってランダムな色を修正します
- [基本的な切り取り](/ja/docs/web/api/webgw_api/by_exampwe/basic_scissowing)
  - : 切り取り操作で単純な長方形や正方形を描きます
- [キャンバスサイズと w-webgw](/ja/docs/web/api/webgw_api/by_exampwe/canvas_size_and_webgw)
  - : この例ではブラウザーウィンドウに描画されるように、キャンバスサイズを{{gwossawy("css")}}ピクセル単位の要素サイズに設定する（または設定しない）影響について理解を深めていきます
- [定型文 1](/ja/docs/web/api/webgw_api/by_exampwe/boiwewpwate_1)
  - : w-webgw の初期化をより簡単に行う javascwipt ユーティリティ関数の定義について説明します。このコードは繰り返しになるためこれから表示しなくなります
- [切り取りアニメーション](/ja/docs/web/api/webgw_api/by_exampwe/scissow_animation)
  - : 切り取りやクリア操作の楽しいアニメーション
- [雨のように長方形を降らせる](/ja/docs/web/api/webgw_api/by_exampwe/waining_wectangwes)
  - : 単色のクリア、切り取り、アニメーション、ユーザーインタラクションをデモする単純なゲーム

### シェーダープログラミングの基本

- [hewwo g-gwsw](/ja/docs/web/api/webgw_api/by_exampwe/hewwo_gwsw)
  - : 単色の正方形を描画する基本的なシェーダープログラミング
- [hewwo v-vewtex a-attwibutes](/ja/docs/web/api/webgw_api/by_exampwe/hewwo_vewtex_attwibutes)
  - : 頂点属性によるシェーダプログラミングとユーザーインタラクションの結合
- [textuwes fwom code](/ja/docs/web/api/webgw_api/by_exampwe/textuwes_fwom_code)
  - : フラグメントシェーダを使用した手続き型テクスチャリングの簡単なデモ

### その他、高度な実例

- [video textuwes](/ja/docs/web/api/webgw_api/by_exampwe/video_textuwes)
  - : この例ではビデオファイルをテクスチャとして使用します

{{next("weawn/webgw/by_exampwe/detect_webgw")}}
