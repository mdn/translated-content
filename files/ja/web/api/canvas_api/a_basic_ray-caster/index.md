---
title: A basic ray-caster
slug: Web/API/Canvas_API/A_basic_ray-caster
tags:
  - Advanced
  - Canvas
  - Example
  - Graphics
  - HTML
  - Web
translation_of: Web/API/Canvas_API/A_basic_ray-caster
---
{{CanvasSidebar}}

この記事では実世界で ray-casting を使用した 3D 描画に役立つ{{HTMLElement("canvas")}}の要素の使用例を提供します。

{{EmbedGHLiveSample("canvas-raycaster/index.html", 900, 300)}}

**[Open in new window](http://mdn.github.io/canvas-raycaster/)**

## 動機付け

この気のきいた `<canvas>` 要素に[ついての記事](https://html.spec.whatwg.org/#dynamic)を読んでいたら Firefox でそろそろサポートされるだけでなく、最新の Safari でサポート**済み**なののを知ったので、簡単なサンプルを試す必要に駆られました。

MDN で見つけた canvas に関する[概要](/ja/docs/Web/API/Canvas_API)と[チュートリアル](/ja/docs/Web/Guide/HTML/Canvas_tutorial)はとても素晴らしです、しかし誰もアニメーションについては書いてくれませんでした。なので私がほんの前に動かした基本的な raycaster を移植した方が良いだろうと思うに至りました。ぜひ JavaScript 制御のピクセルバッファーの底力を確認してください。

## 基本動作

基本的なアイディアは {{domxref("window.setInterval","setInterval()")}} を使って任意の遅延時間で欲しいフレームレートに一致させるということです。毎フレームでの更新関数は現在のビューを canvas に再描画します。もちろん私はもっと簡単なサンプルをで始めることもできました。私はこの canvas [チュートリアルで出来る](/ja/docs/Web/Guide/HTML/Canvas_tutorial/Basic_animations)のは分かっていたので、この方法で可能だということを示したかったのです。

全てのフレームで raycaster はユーザーがキーを押したかどうか見ていて、ユーザーが操作しないときに無駄な計算が発生しない様にします。操作が発生した場合 canvas をクリアしたのちに空と地面が描画されカメラの向きや位置が更新され、ray が投射されます。ray が壁と交差するとき垂直の銀色の壁が描画されます。壁との距離が遠くなると色がだんだん暗くなっていきます。カメラと壁との距離に応じて銀色の高さも調節され、水平線の中央に描画されます。

私が書いたコードは _André LaMotheTricks of the Game Programming Gurus book (ISBN: 0672305070)_ の raycaster の項と オンラインで見つけた [Java の raycater](http://www.shinelife.co.uk/java-maze/) とを融合させ、意味のわかるようにリネームしたいという私の強い欲望を通過して、なお全て動作させる必要があった。

## 詳細

Safari 2.0.1 での動作はとても良いです。銀の 8 ピクセル幅のブロックネスでは Apple mini 上で 320 x 240 ピクセル 24fps で動作しました。FireFox 1.5 Beta 1 はそれよりも速く、320 x 240 ピクセル 24fps で 4 ピクセル幅で動作しました。確かに新しい ID ソフトウェアの仲間では無くとも、とても丁寧に実行をする様に考えられていてメモリー割り当てやビデオモードやアセンブラの内部ルーチンのコーディングを気にして書く必要がありませんでした。このコードは、事前計算した値の配列を見るなど、とても効率的に動く様に調整されていていますが、私は特に最適化の施しをしていません。このため、まだ速く動作するように書き直せるでしょう。

また、ゲームエンジンとして動作するにはいくつかするべき事を残しています。例えば 「壁のテクスチャーが無い」「スプライトが無い」「扉が無い」「別の階に移動するワープ」といった類です。十分な時間を私に頂けるなら全部実装できると思いますけどね。この canvas API は画像のピクセルコピーをサポートしていて、テクスチャーは容易だと思います。将来的に他の記事で、たぶん他の人が対応してくれる為にも残しておこうと思います。=)

## ray-caster について

とても良い人が手作業でファイルをコピーしてくれたので、[この場所](https://mdn.github.io/canvas-raycaster/)で試せるのでぜひ見てください。そして誰でもハックできる様にコードをそれぞれ小分けしておいてあります。（下部参照）

Safari 1.3+ か Firefox 1.5+ かその他の `<canvas>` 要素をサポートするブラウザーで動きます。楽しんで！

[input.js](https://github.com/mdn/canvas-raycaster/blob/master/input.js) | [Level.js](https://github.com/mdn/canvas-raycaster/blob/master/Level.js) | [Player.js](https://github.com/mdn/canvas-raycaster/blob/master/Player.js) | [RayCaster.html](https://github.com/mdn/canvas-raycaster/blob/master/index.html) | [RayCaster.js](https://github.com/mdn/canvas-raycaster/blob/master/RayCaster.js) | [trace.css](https://github.com/mdn/canvas-raycaster/blob/master/trace.css) | [trace.js](https://github.com/mdn/canvas-raycaster/blob/master/trace.js)

## 参考

- [Canvas tutorial](/ja/docs/Web/API/Canvas_API/Tutorial)
