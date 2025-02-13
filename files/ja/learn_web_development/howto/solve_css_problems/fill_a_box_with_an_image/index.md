---
title: 画像を歪ませずにボックスを埋めるには
slug: Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このガイドでは、HTML 画像をボックスを完全に埋めるように表示させるテクニックを学ぶことができます。

## object-fit の使用

HTML の {{htmlelement("img")}} 要素を使ってページに画像を追加すると、画像は画像ファイルや HTML の [`width`](/ja/docs/Web/HTML/Element/img#width)、[`height`](/ja/docs/Web/HTML/Element/img#height) 属性から得たサイズとアスペクト比が使われます。時には、画像を配置した枠を完全に埋めるようにしたい場合があります。このような場合、まず、画像のアスペクト比がコンテナーと合わない場合にどうするかを決める必要があります。

1. 画像は、アスペクト比を保ったまま完全に枠内に収まるようにし、大きすぎて収まらない辺はトリミングする。
2. 画像はボックス内に収まるようにし、小さすぎる辺は背景が棒状に透けて見えるようにする。
3. 画像はボックスいっぱいに表示され、引き伸ばされる。これは、間違ったアスペクト比で表示される場合がある。

{{cssxref("object-fit")}} プロパティは、これらの手法のそれぞれを使用することが可能です。下記の例では、同じ画像を使用する場合、`object-fit` の値が異なるとどのように動作するのかを見ることができます。デザインに最も適した手法を選択してください。

```html live-sample___object-fit
<div class="wrapper">
  <div class="box box1">
    <img
      alt="晴れた空に浮かぶ色とりどりの熱気球"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="box box2">
    <img
      alt="晴れた空に浮かぶ色とりどりの熱気球"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="box box3">
    <img
      alt="晴れた空に浮かぶ色とりどりの熱気球"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
</div>
```

```css live-sample___object-fit
.wrapper {
  height: 200px;
  display: flex;
  gap: 20px;
}

.box {
  border: 5px solid #000;
}

.box img {
  width: 100%;
  height: 100%;
}

.box1 img {
  object-fit: cover;
}

.box2 img {
  object-fit: contain;
}

.box3 img {
  object-fit: fill;
}
```

{{EmbedLiveSample("object-fit", "", "220px")}}
