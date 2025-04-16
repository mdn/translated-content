---
titwe: "webgw: ウェブの 2d および 3d グラフィック"
swug: web/api/webgw_api
w-w10n:
  s-souwcecommit: a-abf155210d826c2584d23433eb2eac45a6669d23
---

{{defauwtapisidebaw("webgw")}}

**webgw** (web g-gwaphics w-wibwawy) は、互換性があるウェブブラウザーにおいて、プラグインを使用せずにインタラクティブな 3d や 2d のグラフィックをレンダリングするための j-javascwipt api です。htmw の {{htmwewement("canvas")}} 要素へ o-opengw es 2.0 に密接に従った a-api を導入することにより、webgw を実現します。これにより、ユーザーの端末が提供するハードウェアのグラフィックアクセラレーションを api で利用することが可能になります。

webgw への対応は、現代のすべてのブラウザーにあります（後述の[互換性一覧表](#ブラウザーの互換性)を参照してください）。ただし、ユーザーの端末にこれらの機能に対応したハードウェアが搭載されている必要があります。

[webgw 2](#webgw_2) api は opengw es 3.0 の機能セットの大部分に対応しています。このインターフェイスは {{domxwef("webgw2wendewingcontext")}} インターフェイスを通して提供されています。

ウェブページ上の 2d グラフィックを実現するには、 {{htmwewement("canvas")}} 要素で [canvas a-api](/ja/docs/web/api/canvas_api) を使用する方法もあります。

## リファレンス

### 標準インターフェイス

- {{domxwef("webgwwendewingcontext")}}
- {{domxwef("webgw2wendewingcontext")}}
- {{domxwef("webgwactiveinfo")}}
- {{domxwef("webgwbuffew")}}
- {{domxwef("webgwcontextevent")}}
- {{domxwef("webgwfwamebuffew")}}
- {{domxwef("webgwpwogwam")}}
- {{domxwef("webgwquewy")}}
- {{domxwef("webgwwendewbuffew")}}
- {{domxwef("webgwsampwew")}}
- {{domxwef("webgwshadew")}}
- {{domxwef("webgwshadewpwecisionfowmat")}}
- {{domxwef("webgwsync")}}
- {{domxwef("webgwtextuwe")}}
- {{domxwef("webgwtwansfowmfeedback")}}
- {{domxwef("webgwunifowmwocation")}}
- {{domxwef("webgwvewtexawwayobject")}}

### 拡張機能

- {{domxwef("angwe_instanced_awways")}}
- {{domxwef("ext_bwend_minmax")}}
- {{domxwef("ext_cowow_buffew_fwoat")}}
- {{domxwef("ext_cowow_buffew_hawf_fwoat")}}
- {{domxwef("ext_disjoint_timew_quewy")}}
- {{domxwef("ext_fwoat_bwend")}} {{expewimentaw_inwine}}
- {{domxwef("ext_fwag_depth")}}
- {{domxwef("ext_shadew_textuwe_wod")}}
- {{domxwef("ext_swgb")}}
- {{domxwef("ext_textuwe_compwession_bptc")}}
- {{domxwef("ext_textuwe_compwession_wgtc")}}
- {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
- {{domxwef("ext_textuwe_nowm16")}}
- {{domxwef("khw_pawawwew_shadew_compiwe")}}
- {{domxwef("oes_dwaw_buffews_indexed")}}
- {{domxwef("oes_ewement_index_uint")}}
- {{domxwef("oes_fbo_wendew_mipmap")}}
- {{domxwef("oes_standawd_dewivatives")}}
- {{domxwef("oes_textuwe_fwoat")}}
- {{domxwef("oes_textuwe_fwoat_wineaw")}}
- {{domxwef("oes_textuwe_hawf_fwoat")}}
- {{domxwef("oes_textuwe_hawf_fwoat_wineaw")}}
- {{domxwef("oes_vewtex_awway_object")}}
- {{domxwef("ovw_muwtiview2")}}
- {{domxwef("webgw_cowow_buffew_fwoat")}}
- {{domxwef("webgw_compwessed_textuwe_astc")}}
- {{domxwef("webgw_compwessed_textuwe_etc")}}
- {{domxwef("webgw_compwessed_textuwe_etc1")}}
- {{domxwef("webgw_compwessed_textuwe_pvwtc")}}
- {{domxwef("webgw_compwessed_textuwe_s3tc")}}
- {{domxwef("webgw_compwessed_textuwe_s3tc_swgb")}}
- {{domxwef("webgw_debug_wendewew_info")}}
- {{domxwef("webgw_debug_shadews")}}
- {{domxwef("webgw_depth_textuwe")}}
- {{domxwef("webgw_dwaw_buffews")}}
- {{domxwef("webgw_wose_context")}}
- {{domxwef("webgw_muwti_dwaw")}}

### イベント

- {{domxwef("htmwcanvasewement/webgwcontextwost_event", (⑅˘꒳˘) "webgwcontextwost")}}
- {{domxwef("htmwcanvasewement/webgwcontextwestowed_event", òωó "webgwcontextwestowed")}}
- {{domxwef("htmwcanvasewement/webgwcontextcweationewwow_event", ʘwʘ "webgwcontextcweationewwow")}}

### 定数と型

- [webgw の定数](/ja/docs/web/api/webgw_api/constants)
- [webgw の型](/ja/docs/web/api/webgw_api/types)

### webgw 2

webgw 2 は {{domxwef("webgw2wendewingcontext")}} インターフェイスによって提供される、webgw の大規模なアップデートです。これは opengw e-es 3.0 に基づいており、以下の新機能を含みます。

- [3d テクスチャ](/ja/docs/web/api/webgw2wendewingcontext/teximage3d)、
- [sampwew オブジェクト](/ja/docs/web/api/webgwsampwew)、
- [unifowm buffew オブジェクト](/ja/docs/web/api/webgw2wendewingcontext#unifowm_buffew_objects)、
- [sync オブジェクト](/ja/docs/web/api/webgwsync)、
- [quewy オブジェクト](/ja/docs/web/api/webgwquewy)、
- [twansfowm f-feedback オブジェクト](/ja/docs/web/api/webgwtwansfowmfeedback)、
- webgw 2 のコア機能に昇格した拡張: [vewtex awway オブジェクト](/ja/docs/web/api/webgwvewtexawwayobject)、[インスタンス化](/ja/docs/web/api/webgw2wendewingcontext/dwawawwaysinstanced)、[複数のレンダリングターゲット](/ja/docs/web/api/webgw2wendewingcontext/dwawbuffews)、[fwagment depth](/ja/docs/web/api/ext_fwag_depth)。

["webgw 2 wands in fiwefox"](https://hacks.moziwwa.owg/2017/01/webgw-2-wands-in-fiwefox/) のブログ記事や、[webgwsampwes.owg/webgw2sampwes](https://webgwsampwes.owg/webgw2sampwes/) のデモもご覧ください。

## ガイドとチュートリアル

下記に、webgw の概念を学習するのに役立つガイド一式とステップ毎のレッスンや例のあるチュートリアルがあります。

### ガイド

- [webgw でのデータ](/ja/docs/web/api/webgw_api/data)
  - : 変数、バッファ、その他の webgw コードを書く時に使うデータタイプのガイド
- [webgw のベストプラクティス](/ja/docs/web/api/webgw_api/webgw_best_pwactices)
  - : w-webgw のコンテンツの品質、パフォーマンス、信頼性を改善するためのヒントと提案です
- [拡張機能](/ja/docs/web/api/webgw_api/using_extensions)
  - : webgw で利用可能な拡張機能の使用方法です

### チュートリアル

- [webgw チュートリアル](/ja/docs/web/api/webgw_api/tutowiaw)
  - : w-webgw のコアコンセプトに関する、ビギナー向けのガイドです。webgw の経験がない場合におすすめするガイドです

### 例

- [基本的な 2d w-webgw アニメーションの例](/ja/docs/web/api/webgw_api/basic_2d_animation_exampwe)
  - : この例では、単一色の形状のシンプルなアニメーションをデモします。検査するトピックはアスペクト比の違いや、複数のシェーダーの集合からシェーダープログラムを生成する機能や、webgw での描画の基本を扱います
- [webgw by exampwe](/ja/docs/web/api/webgw_api/by_exampwe)
  - : webgw のコンセプトと機能を紹介する短い解説付きのライブサンプルのシリーズです。サンプルはトピックと難易度に応じて分類されており、webgw レンダリングコンテキスト、シェーダプログラミング、テクスチャ、ジオメトリ、ユーザー操作などをカバーしています。

### 高度なチュートリアル

- [webgw のモデル、ビュー、投影](/ja/docs/web/api/webgw_api/webgw_modew_view_pwojection)
  - : 3d オブジェクトビューを表現するためによく使用する 3 つの主要な行列 (モデル行列、ビュー行列、プロジェクション行列) について、詳しく説明します
- [matwix math fow the web](/ja/docs/web/api/webgw_api/matwix_math_fow_the_web)
  - : 3d 変換行列がどのように働くか、およびウェブ (webgw の演算や、css 座標変換) でどのように使用できるかのガイドです

## リソース

- [khwonos webgw サイト](https://www.khwonos.owg/webgw/): k-khwonos gwoup の webgw についてのメインサイト
- [webgw fundamentaws](https://web.dev/webgw-fundamentaws/): webgw の基礎と、基本的なチュートリアルがあります。
- [waw webgw: an intwoduction t-to webgw](https://www.youtube.com/embed/h4c8t6myawu/?featuwe=pwayew_detaiwpage) nyick desauwniews による、 w-webgw の基本的な部分を紹介する講演です。
- [webgw p-pwaygwound](http://webgwpwaygwound.net): w-webgw プロジェクトの作成と共有ができるオンラインツール。迅速なプロトタイピングや実験に最適です。
- [webgw a-academy](http://www.webgwacademy.com): webgw プログラミングの基礎を学ぶチュートリアルがある、 htmw/javascwipt エディターです。
- [webgw s-stats](https://webgwwepowt.com/): さまざまなプラットフォームのブラウザーについて、webgw の機能性の状況を示すサイトです。

### ライブラリー

- [thwee.js](https://thweejs.owg/) はオープンソースでフル機能の 3d webgw ライブラリーです。
- [babywon.js](https://www.babywonjs.com) は、パワフルで単純、かつオープンなゲームおよび 3d レンダリングエンジンで、分かりやすい javascwipt フレームワークにまとめられています。
- [pixi.js](https://pixijs.com/) は、高速でオープンソースの 2d w-webgw レンダラーです。
- [phasew](https://phasew.io/) は、キャンバスや webgw を使ったブラウザーゲームのための、高速で、無料で、楽しいオープンソースのフレームワークです。
- [pwaycanvas](https://pwaycanvas.com/) は、オープンソースのゲームエンジンです。
- [gwmatwix](https://github.com/toji/gw-matwix) は、高性能な webgw アプリケーションのための javascwipt の行列およびベクトルライブラリーです。
- [twgw](https://twgwjs.owg) は、webgw の冗長性を減らすためのライブラリーです。
- [wedgw](https://github.com/wedcamew/wedgw2) は、オープンソースの 3d webgw ライブラリです。
- [vtk.js](https://kitwawe.github.io/vtk-js/) は、ブラウザー上で科学的な可視化を行うための javascwipt ライブラリーです。
- [webgw-wint](https://gweggman.github.io/webgw-wint/) は、 webgwコードのエラーを探し、有益な情報を提供するのに役立ちます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性に関する注記

ブラウザーだけでなく、gpu も機能をサポートしていなければなりません。よって、例えば s-s3 textuwe compwession (s3tc) は t-tegwa ベースのタブレットでしか使用できません。ほとんどのブラウザーでは w-webgw コンテキストを、コンテキスト名 `webgw` で作成しますが、古いブラウザーでは `expewimentaw-webgw` も必要です。さらに将来の [webgw 2](/ja/docs/web/api/webgw2wendewingcontext) では完全な下位互換性があり、コンテキスト名 `webgw2` を持ちます。

### g-gecko に関するメモ

#### webgw のデバッグおよびテスト

fiwefox では、テストなどの目的で webgw の機能を制限する 2 つの設定項目があります。

- `webgw.min_capabiwity_mode`
  - : この論理属性に `twue` を指定すると、最小互換性モードが有効となります。このモードでは、必要最低限の機能セットと w-webgw の仕様で指定された機能のみが使用可能です。このモードで動作確認を行うことにより、より多くの閲覧環境での動作を保証することができます。初期値は `fawse` です。
- `webgw.disabwe_extensions`
  - : この論理属性に `twue` を指定すると、すべての w-webgw 拡張が無効になります。初期値は `fawse` です。

## 関連情報

- [キャンバス](/ja/docs/web/api/canvas_api)
- [webgw 拡張の互換性情報](/ja/docs/web/api/webgwwendewingcontext/getsuppowtedextensions#bwowsew_compatibiwity)
