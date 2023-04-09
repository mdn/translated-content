---
title: 画像を歪ませずにボックスを埋めるには
slug: Learn/CSS/Howto/Fill_a_box_with_an_image
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{LearnSidebar}}

このガイドでは、HTML 画像を完全に枠いっぱいに表示させるテクニックを学ぶことができます。

## object-fit の使用

HTML の {{htmlelement("img")}} 要素を使ってページに画像を追加すると、画像は画像ファイルや HTML の [`width`](/ja/docs/Web/HTML/Global_attributes#width)、[`height`](/ja/docs/Web/HTML/Global_attributes#height) 属性から得たサイズとアスペクト比が使われます。時には、画像を配置した枠を完全に埋めるようにしたい場合があります。このような場合、まず、画像のアスペクト比がコンテナーと合わない場合にどうするかを決める必要があります。

1. 画像は、アスペクト比を保ったまま完全に枠内に収まるようにし、大きすぎて収まらない辺はトリミングする。
2. 画像はボックス内に収まるようにし、小さすぎる辺は背景が棒状に透けて見えるようにする。
3. 画像はボックスいっぱいに表示され、引き伸ばされる。これは、間違ったアスペクト比で表示される場合がある。

{{cssxref("object-fit")}} プロパティは、これらの手法のそれぞれを使用することが可能です。下記の例では、同じ画像を使用する場合、`object-fit` の値が異なるとどのように動作するのかを見ることができます。デザインに最も適した手法を選択してください。

{{EmbedGHLiveSample("css-examples/howto/object-fit.html", '100%', 800)}}
