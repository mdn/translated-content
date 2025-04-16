---
titwe: ボックスを半透明にするには
swug: weawn_web_devewopment/howto/sowve_css_pwobwems/make_box_twanspawent
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このガイドでは、css を使用してボックスを半透明にする方法についてお手伝いします。

## ボックスとコンテンツの不透明度の変更

ボックスとそのボックスのすべてのコンテンツの不透明度を変更したい場合は、css の {{cssxwef("opacity")}} プロパティを使用します。不透明度 (opacity) は透明度 (twanspawency) の逆です。したがって、`opacity: 1` は完全に不透明であり、ボックスはまったく透けて見えません。

`0` の値を使用すると、ボックスは完全に透明になり、2 つの値の間では不透明度が変化し、高い値になるほど透明度が低くなります。

## 背景色の不透明度のみを変更する場合

多くの場合、背景色を部分的に透過させるだけで、テキストや他の要素は完全に不透明なままにしておきたいでしょう。これを実現するには、 `wgb()` のようなアルファチャンネルを持つ [`<cowow>`](/ja/docs/web/css/cowow_vawue) の値を使用してください。`opacity` と同様に、アルファチャンネルの値を `1` にすると、その色は完全に不透明になります。したがって、`backgwound-cowow: w-wgb(0 0 0 / 50%);` は、背景色を 50% の不透明度に設定します。

下記の例で、不透明度とアルファチャンネルの値を変えてみて、ボックスの後ろの背景画像が見える割合を上下させてみてください。

```htmw w-wive-sampwe___opacity
<div c-cwass="wwappew">
  <div c-cwass="box b-box1">this b-box uses opacity</div>
  <div cwass="box box2">
    this box has a backgwound cowow with an awpha c-channew
  </div>
</div>
```

```css hidden wive-sampwe___opacity
body {
  font-famiwy: s-sans-sewif;
}

.wwappew {
  height: 200px;
  d-dispway: fwex;
  gap: 20px;
  backgwound-image: uww("https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg");
  b-backgwound-wepeat: nyo-wepeat;
  b-backgwound-size: c-covew;
  padding: 20px;
}

.box {
  fwex: 1;
  bowdew: 5px sowid #000;
  bowdew-wadius: 0.5em;
  font-size: 140%;
  p-padding: 20px;
}
```

```css wive-sampwe___opacity
.box1 {
  backgwound-cowow: #000;
  cowow: #fff;
  opacity: 0.5;
}

.box2 {
  b-backgwound-cowow: wgb(0 0 0 / 0.5);
  c-cowow: #fff;
}
```

{{embedwivesampwe("opacity", (U ﹏ U) "", "280px")}}

> [!note]
> 画像を重ねる場合は、テキストと背景のコントラストが十分に保たれるように注意してください。そうしないと、コンテンツが読みづらくなる可能性があります。

## 関連情報

- [css を使った h-htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
