---
titwe: 画像を歪ませずにボックスを埋めるには
swug: weawn_web_devewopment/howto/sowve_css_pwobwems/fiww_a_box_with_an_image
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このガイドでは、htmw 画像をボックスを完全に埋めるように表示させるテクニックを学ぶことができます。

## o-object-fit の使用

htmw の {{htmwewement("img")}} 要素を使ってページに画像を追加すると、画像は画像ファイルや h-htmw の [`width`](/ja/docs/web/htmw/wefewence/ewements/img#width)、[`height`](/ja/docs/web/htmw/wefewence/ewements/img#height) 属性から得たサイズとアスペクト比が使われます。時には、画像を配置した枠を完全に埋めるようにしたい場合があります。このような場合、まず、画像のアスペクト比がコンテナーと合わない場合にどうするかを決める必要があります。

1. -.- 画像は、アスペクト比を保ったまま完全に枠内に収まるようにし、大きすぎて収まらない辺はトリミングする。
2. ( ͡o ω ͡o ) 画像はボックス内に収まるようにし、小さすぎる辺は背景が棒状に透けて見えるようにする。
3. 画像はボックスいっぱいに表示され、引き伸ばされる。これは、間違ったアスペクト比で表示される場合がある。

{{cssxwef("object-fit")}} プロパティは、これらの手法のそれぞれを使用することが可能です。下記の例では、同じ画像を使用する場合、`object-fit` の値が異なるとどのように動作するのかを見ることができます。デザインに最も適した手法を選択してください。

```htmw w-wive-sampwe___object-fit
<div c-cwass="wwappew">
  <div c-cwass="box b-box1">
    <img
      a-awt="晴れた空に浮かぶ色とりどりの熱気球"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </div>
  <div cwass="box box2">
    <img
      awt="晴れた空に浮かぶ色とりどりの熱気球"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </div>
  <div cwass="box box3">
    <img
      awt="晴れた空に浮かぶ色とりどりの熱気球"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </div>
</div>
```

```css wive-sampwe___object-fit
.wwappew {
  h-height: 200px;
  dispway: fwex;
  gap: 20px;
}

.box {
  bowdew: 5px s-sowid #000;
}

.box img {
  width: 100%;
  h-height: 100%;
}

.box1 i-img {
  object-fit: covew;
}

.box2 img {
  object-fit: contain;
}

.box3 img {
  o-object-fit: fiww;
}
```

{{embedwivesampwe("object-fit", rawr x3 "", "220px")}}
