---
title: ウェブ上の 3D ゲームの概要
slug: Games/Techniques/3D_on_the_web
---

ウェブでのリッチなゲーム体験を実現するためには、HTML の {{htmlelement("canvas")}} 上にレンダリングされる WebGL が武器となります。 WebGL は基本的にウェブ用の OpenGL ES 2.0 であり、リッチでインタラクティブなアニメーションや、もちろんゲームを構築するためのツールを提供する JavaScript API です。ハードウェアアクセラレーションによる JavaScript で、動的な 3D グラフィックを生成し、レンダリングすることができます。

## ドキュメントとブラウザーの対応

[WebGL](/ja/docs/Web/API/WebGL_API) プロジェクトのドキュメントと仕様書は、 [Khronos Group](https://www.khronos.org/) が管理しており、ほとんどの Web API のように W3C が管理しているわけではありません。最近のブラウザーでの対応は、モバイルでも非常に優れているので、あまり気にする必要はありません。主要なブラウザーはすべて WebGL に対応しており、使用する端末でのパフォーマンスを最適化することに集中すればよいのです。

近い将来、 WebGL 2.0（OpenGL ES 3.0 に基づく）のリリースに向けた継続的な取り組みがあります。これにより、多くの改善がもたらされ、開発者は現在の強力なハードウェアを使用して最新のウェブ用のゲームを構築することができるようになります。

## 基本的な 3D 理論の説明

3D 理論の基本は、3D 空間で表される形状を中心としており、座標系を使用してそれらの位置を計算します。必要なすべての情報については、[基本的な 3D 理論の説明](/ja/docs/Games/Techniques/3D_on_the_web/Basic_theory)の記事を参照してください。

## 高度な概念

WebGL を使用すると、さらに多くのことができます。シェーダー、衝突検出、または最新のホットトピックであるウェブ上の仮想現実など、詳細に掘り下げて学ぶ必要のある高度な概念がいくつかあります。

### シェーダー

それ自体は別の話であるシェーダーについて言及する価値があります。 シェーダーは、グラフィックパイプラインによって直接実行される C と同様の構文を持つ特別な OpenGL シェーディング言語である GLSL を使用します。 これらは、頂点シェーダーとフラグメントシェーダー（またはピクセルシェーダー）に分割できます。 前者は形状の位置を実際の 3D 描画座標に変換し、後者はレンダリングする色やその他の属性を計算します。 それらの詳細については、[GLSL シェーダー](/ja/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders)の記事を必ず確認してください。

### 衝突検出

衝突検出のないゲームを想像するのは難しいです — 何かが何かにぶつかっているときには、常にそれを解決する必要があります。 以下に学ぶことができる情報があります。

- [2D の衝突検出](/ja/docs/Games/Techniques/2D_collision_detection)
- [3D の衝突検出](/ja/docs/Games/Techniques/3D_collision_detection)

### WebVR

仮想現実の概念は新しいものではありませんが、[Oculus Rift](https://www.oculus.com/ja/rift/) などのハードウェアの進歩と VR ハードウェアから情報をキャプチャして JavaScript アプリケーションで使用できるようにするための (現在実験的な) [WebVR API](/ja/docs/Web/API/WebVR_API) のおかげで、ウェブに押し寄せています。 詳細については、[WebVR — ウェブによる仮想現実](/ja/docs/Games/Techniques/3D_on_the_web/WebXR)をご覧ください。

また、[A-Frame を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)の記事では、 [A-Frame](https://aframe.io/) フレームワークを使用して仮想現実の 3D 環境を構築することがいかに簡単であるかを示しています。

## ライブラリーとフレームワークの台頭

生の WebGL のコーディングはかなり複雑ですが、プロジェクトがより高度になるにつれて、長期的にはそれを理解する必要があります（始めるには、[WebGL ドキュメント](/ja/docs/Web/API/WebGL_API)を参照してください）。 実際のプロジェクトでは、開発をスピードアップし、作業中のプロジェクトを管理するのに役立つフレームワークをたぶん使うことになるでしょう。 3D ゲームのフレームワークを使用すると、使用するツールによって多くの処理が行われるため、パフォーマンスを最適化するのにも役立ちます。 これにより、ゲーム自体の構築に集中できます。

最も人気のある JavaScript の 3D ライブラリーは [Three.js](https://threejs.org/) で、一般的な 3D 技術をより簡単に実装できる多目的ツールです。 他にもチェックする価値のある人気のあるゲーム開発ライブラリーやフレームワークとして、 [A-Frame](https://aframe.io)、[PlayCanvas](https://playcanvas.com/)、[Babylon.js](https://www.babylonjs.com/) などは、豊富なドキュメント、オンラインエディター、活発なコミュニティを備えた、最もよく知られたものです。

### A-Frame を使った基本的なデモの構築

A-Frame は、3D および VR エクスペリエンスを構築するためのウェブフレームワークです。 内部的には、宣言型のエンティティコンポーネントパターンを備えた Three.js フレームワークなので、 HTML だけでシーンを構築できます。 デモを作成するステップバイステップのプロセスについては、[A-Frame を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)のサブページを参照してください。

### Babylon.js を使った基本的なデモの構築

Babylon.js は、開発者が使用する最も人気のある 3D ゲームエンジンの 1 つです。 他の 3D ライブラリーと同様に、一般的な 3D 機能をより迅速に実装するのに役立つ組み込み関数を提供します。 開発環境のセットアップ、必要な HTML の構造化、JavaScript コードの記述など、Babylon.jsの 基本的な使い方については、[Babylon.js を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)のサブページを参照してください。

### PlayCanvas を使った基本的なデモの構築

PlayCanvas は、GitHub でオープンソース化された人気の 3D WebGL ゲームエンジンであり、オンラインで利用可能なエディターと優れたドキュメントを備えています。 より高度な詳細については、[PlayCanvas を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)のサブページを参照してください。 また、PlayCanvas ライブラリーとオンラインエディターを使ったデモの作成方法については、さらに詳しい記事を参照してください。

### Three.js を使った基本的なデモの構築

Three.js は、他のライブラリーと同様に、巨大なアドバンテージを提供します。 何百行もの WebGL コードを記述して興味深いものを構築する代わりに、組み込みのヘルパー関数を使用して、はるかに簡単かつ迅速に構築できます。 デモを作成するステップバイステップのプロセスについては、[Three.js を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)のサブページを参照してください。

### その他のツール

[Unity](https://unity.com/) と [Unreal](https://www.unrealengine.com/) はどちらも [asm.js](/ja/docs/Games/Tools/asm.js) を使用してゲームを [WebGL](/ja/docs/Web/API/WebGL_API) にエクスポートできるため、それらのツールとテクニックを自由に使用して、ウェブにエクスポートするゲームを構築できます。

![](shapes.png)

## 次に行くべきところ

この記事では、現在利用可能な技術で可能なことの表面に触れただけです。WebGL とその上に構築されたライブラリーやフレームワークを使用すれば、ウェブ上で没入感のある、美しく、高速な 3D ゲームを構築することができます。

### ソースコード

このシリーズのデモのすべてのソースコードは [GitHub](https://end3r.github.io/MDN-Games-3D/) にあります。

### API

- [Canvas API](/ja/docs/Web/API/Canvas_API)
- [WebGL API](/ja/docs/Web/API/WebGL_API)
- [WebVR API](/ja/docs/Web/API/WebVR_API)

### フレームワーク

- [Three.js](https://threejs.org/)
- [PlayCanvas](https://playcanvas.com/)
- [Babylon.js](https://www.babylonjs.com/)
- [A-Frame](https://aframe.io/)

### チュートリアル

- [Three.js を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [PlayCanvas を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Babylon.js を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [A-Frame を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
