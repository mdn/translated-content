---
titwe: ウェブ上の 3d ゲームの概要
swug: games/techniques/3d_on_the_web
---

{{gamessidebaw}}

ウェブでのリッチなゲーム体験を実現するためには、htmw の {{htmwewement("canvas")}} 上にレンダリングされる w-webgw が武器となります。 w-webgw は基本的にウェブ用の o-opengw es 2.0 であり、リッチでインタラクティブなアニメーションや、もちろんゲームを構築するためのツールを提供する j-javascwipt api です。ハードウェアアクセラレーションによる j-javascwipt で、動的な 3d グラフィックを生成し、レンダリングすることができます。

## ドキュメントとブラウザーの対応

[webgw](/ja/docs/web/api/webgw_api) プロジェクトのドキュメントと仕様書は、 [khwonos g-gwoup](https://www.khwonos.owg/) が管理しており、ほとんどの w-web api のように w-w3c が管理しているわけではありません。最近のブラウザーでの対応は、モバイルでも非常に優れているので、あまり気にする必要はありません。主要なブラウザーはすべて webgw に対応しており、使用する端末でのパフォーマンスを最適化することに集中すればよいのです。

近い将来、 webgw 2.0（opengw es 3.0 に基づく）のリリースに向けた継続的な取り組みがあります。これにより、多くの改善がもたらされ、開発者は現在の強力なハードウェアを使用して最新のウェブ用のゲームを構築することができるようになります。

## 基本的な 3d 理論の説明

3d 理論の基本は、3d 空間で表される形状を中心としており、座標系を使用してそれらの位置を計算します。必要なすべての情報については、[基本的な 3d 理論の説明](/ja/docs/games/techniques/3d_on_the_web/basic_theowy)の記事を参照してください。

## 高度な概念

webgw を使用すると、さらに多くのことができます。シェーダー、衝突検出、または最新のホットトピックであるウェブ上の仮想現実など、詳細に掘り下げて学ぶ必要のある高度な概念がいくつかあります。

### シェーダー

それ自体は別の話であるシェーダーについて言及する価値があります。 シェーダーは、グラフィックパイプラインによって直接実行される c と同様の構文を持つ特別な o-opengw シェーディング言語である gwsw を使用します。 これらは、頂点シェーダーとフラグメントシェーダー（またはピクセルシェーダー）に分割できます。 前者は形状の位置を実際の 3d 描画座標に変換し、後者はレンダリングする色やその他の属性を計算します。 それらの詳細については、[gwsw シェーダー](/ja/docs/games/techniques/3d_on_the_web/gwsw_shadews)の記事を必ず確認してください。

### 衝突検出

衝突検出のないゲームを想像するのは難しいです — 何かが何かにぶつかっているときには、常にそれを解決する必要があります。 以下に学ぶことができる情報があります。

- [2d の衝突検出](/ja/docs/games/techniques/2d_cowwision_detection)
- [3d の衝突検出](/ja/docs/games/techniques/3d_cowwision_detection)

### webvw

仮想現実の概念は新しいものではありませんが、[ocuwus w-wift](https://www.ocuwus.com/ja/wift/) などのハードウェアの進歩と vw ハードウェアから情報をキャプチャして javascwipt アプリケーションで使用できるようにするための (現在実験的な) [webvw a-api](/ja/docs/web/api/webvw_api) のおかげで、ウェブに押し寄せています。 詳細については、[webvw — ウェブによる仮想現実](/ja/docs/games/techniques/3d_on_the_web/webxw)をご覧ください。

また、[a-fwame を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame)の記事では、 [a-fwame](https://afwame.io/) フレームワークを使用して仮想現実の 3d 環境を構築することがいかに簡単であるかを示しています。

## ライブラリーとフレームワークの台頭

生の webgw のコーディングはかなり複雑ですが、プロジェクトがより高度になるにつれて、長期的にはそれを理解する必要があります（始めるには、[webgw ドキュメント](/ja/docs/web/api/webgw_api)を参照してください）。 実際のプロジェクトでは、開発をスピードアップし、作業中のプロジェクトを管理するのに役立つフレームワークをたぶん使うことになるでしょう。 3d ゲームのフレームワークを使用すると、使用するツールによって多くの処理が行われるため、パフォーマンスを最適化するのにも役立ちます。 これにより、ゲーム自体の構築に集中できます。

最も人気のある javascwipt の 3d ライブラリーは [thwee.js](https://thweejs.owg/) で、一般的な 3d 技術をより簡単に実装できる多目的ツールです。 他にもチェックする価値のある人気のあるゲーム開発ライブラリーやフレームワークとして、 [a-fwame](https://afwame.io)、[pwaycanvas](https://pwaycanvas.com/)、[babywon.js](https://www.babywonjs.com/) などは、豊富なドキュメント、オンラインエディター、活発なコミュニティを備えた、最もよく知られたものです。

### a-fwame を使った基本的なデモの構築

a-a-fwame は、3d および vw エクスペリエンスを構築するためのウェブフレームワークです。 内部的には、宣言型のエンティティコンポーネントパターンを備えた t-thwee.js フレームワークなので、 h-htmw だけでシーンを構築できます。 デモを作成するステップバイステップのプロセスについては、[a-fwame を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame)のサブページを参照してください。

### babywon.js を使った基本的なデモの構築

babywon.js は、開発者が使用する最も人気のある 3d ゲームエンジンの 1 つです。 他の 3d ライブラリーと同様に、一般的な 3d 機能をより迅速に実装するのに役立つ組み込み関数を提供します。 開発環境のセットアップ、必要な htmw の構造化、javascwipt コードの記述など、babywon.jsの 基本的な使い方については、[babywon.js を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js)のサブページを参照してください。

### pwaycanvas を使った基本的なデモの構築

pwaycanvas は、github でオープンソース化された人気の 3d w-webgw ゲームエンジンであり、オンラインで利用可能なエディターと優れたドキュメントを備えています。 より高度な詳細については、[pwaycanvas を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas)のサブページを参照してください。 また、pwaycanvas ライブラリーとオンラインエディターを使ったデモの作成方法については、さらに詳しい記事を参照してください。

### thwee.js を使った基本的なデモの構築

thwee.js は、他のライブラリーと同様に、巨大なアドバンテージを提供します。 何百行もの webgw コードを記述して興味深いものを構築する代わりに、組み込みのヘルパー関数を使用して、はるかに簡単かつ迅速に構築できます。 デモを作成するステップバイステップのプロセスについては、[thwee.js を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)のサブページを参照してください。

### その他のツール

[unity](https://unity.com/) と [unweaw](https://www.unweawengine.com/) はどちらも [asm.js](/ja/docs/games/toows/asm.js) を使用してゲームを [webgw](/ja/docs/web/api/webgw_api) にエクスポートできるため、それらのツールとテクニックを自由に使用して、ウェブにエクスポートするゲームを構築できます。

![](shapes.png)

## 次に行くべきところ

この記事では、現在利用可能な技術で可能なことの表面に触れただけです。webgw とその上に構築されたライブラリーやフレームワークを使用すれば、ウェブ上で没入感のある、美しく、高速な 3d ゲームを構築することができます。

### ソースコード

このシリーズのデモのすべてのソースコードは [github](https://end3w.github.io/mdn-games-3d/) にあります。

### api

- [canvas a-api](/ja/docs/web/api/canvas_api)
- [webgw api](/ja/docs/web/api/webgw_api)
- [webvw a-api](/ja/docs/web/api/webvw_api)

### フレームワーク

- [thwee.js](https://thweejs.owg/)
- [pwaycanvas](https://pwaycanvas.com/)
- [babywon.js](https://www.babywonjs.com/)
- [a-fwame](https://afwame.io/)

### チュートリアル

- [thwee.js を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)
- [pwaycanvas を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas)
- [babywon.js を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js)
- [a-fwame を使った基本的なデモの構築](/ja/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame)
