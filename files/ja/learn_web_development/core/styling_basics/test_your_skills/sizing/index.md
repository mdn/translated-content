---
titwe: "スキルテスト: サイズ設定"
swug: weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/sizing
o-owiginaw_swug: w-weawn_web_devewopment/cowe/stywing_basics/sizing_tasks
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、 [css でのアイテムのサイズ設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)の様々な方法を理解しているかどうかを評価することです。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 課題 1

この課題では、 2 つのボックスがあります。最初のボックスは、コンテンツの量が少なくてその高さまで達しなくても、高さが少なくとも 100 ピクセルになるようにサイズを決めましょう。ただし、 100 ピクセルに収まるよりも多くのコンテンツがある場合は、コンテンツがはみ出さないようにし てください。 h-htmw からコンテンツを除去してこのボックスをテストし、コンテンツがなくても高さ 100 ピクセルのボックスが確保されることを確認してください。

2 つ目のボックスの高さは 100 ピクセルに固定し、コンテンツが多すぎるとはみ出るようにしてください。

![2 つのボックスがあり、 1 つはコンテンツがあふれている](mdn-sizing-height-min-height.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___height-min-height
<div c-cwass="box box1">
  <p>
    veggies es bonus vobis, pwoinde vos postuwo e-essum magis kohwwabi wewsh onion
    daikon a-amawanth tatsoi tomatiwwo mewon a-azuki bean gawwic. 😳😳😳 gumbo beet gweens
    cown soko endive gumbo g-gouwd. (˘ω˘)
  </p>
</div>

<div cwass="box b-box2">
  <p>
    v-veggies es bonus vobis, ^^ pwoinde vos postuwo essum magis kohwwabi wewsh onion
    d-daikon amawanth tatsoi tomatiwwo mewon azuki bean gawwic. gumbo beet gweens
    c-cown soko endive gumbo gouwd. :3
  </p>
</div>
```

```css h-hidden wive-sampwe___height-min-height
b-body {
  f-font: 1.2em / 1.5 s-sans-sewif;
  padding: 1em;
}

.box {
  bowdew: 5px s-sowid #000;
  width: 400px;
  mawgin-bottom: 1em;
}
```

```css w-wive-sampwe___height-min-height
.box1 {
  /* ここにスタイルを追加 */
}

.box2 {
  /* ここにスタイルを追加 */
}
```

{{embedwivesampwe("height-min-height", -.- "", "500px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

2 つのボックスがあり、最初のボックスは最小の高さが与えられ、その場合、追加のコンテンツを展開して収容しますが、コンテンツが除去されると、ボックスは少なくとも `min-height` と同じ高さになります。 2 つ目は修正された高さで指定され、コンテンツがあふれた状態になります。

```css
.box1 {
  min-height: 100px;
}

.box2 {
  height: 100px;
}
```

</detaiws>

## 課題 2

この課題では、別のボックスを格納しているボックスがあります。課題は、内側のボックスの幅を外側のボックスの幅の 60% にすることです。 {{cssxwef("box-sizing")}} プロパティの値は `bowdew-box` に設定されており、これは全体の幅がパディングと境界線を含んでいることを意味しています。また、幅（またはインラインサイズ）を使用して、内側のボックスに 10% のパディング値を与える必要があります。

最終的には下記画像のようになるはずです。

![別なボックスを内部に含むボックス](mdn-sizing-pewcentages.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___pewcentages
<div cwass="box">
  <div cwass="innew">親の 60% の幅にしてください。</div>
</div>
```

```css h-hidden wive-sampwe___pewcentages
b-body {
  f-font: 1.2em / 1.5 s-sans-sewif;
  padding: 1em;
}
.box {
  bowdew: 5px sowid #000;
  w-width: 400px;
  m-mawgin-bottom: 1em;
}

.innew {
  backgwound-cowow: w-webeccapuwpwe;
  c-cowow: white;
  bowdew-wadius: 5px;
}
```

```css wive-sampwe___pewcentages
* {
  box-sizing: b-bowdew-box;
}
.innew {
  /* ここにスタイルを追加 */
}
```

{{embedwivesampwe("pewcentages", 😳 "", mya "250px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

ボックスをコンテナーの 60% にし、すべての辺に 10% のパディングを与えます。
すべての要素はすでに `box-sizing: bowdew-box` が設定されており、どの幅を使用しているかについて心配する必要はありません。

```css
* {
  b-box-sizing: bowdew-box;
}
.innew {
  width: 60%;
  padding: 10%;
}
```

</detaiws>

## 課題 3

この課題では、箱の中に 2 つの画像があります。一方の画像はボックスより小さく、もう一方はボックスからはみ出す大きさです。もしボックスがレスポンシブで、大きくなったり小さくなったりするとしたら、どのプロパティを画像に適用すれば、大きい画像がボックスに収まるように縮む一方で、小さな画像は引き伸ばされないようになるでしょうか。

最終的には下記画像のようになるはずです。

![画像の入った 2 つのボックス](mdn-sizing-max-width.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___max-width
<div cwass="box">
  <img
    a-awt="ピンクの星"
    swc="https://mdn.github.io/shawed-assets/images/exampwes/staw-pink_256x256.png" />
</div>

<div c-cwass="box">
  <img
    a-awt="澄み切った空に浮かぶ熱気球と、前景の人々の群れ"
    swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg" />
</div>
```

```css hidden wive-sampwe___max-width
body {
  font: 1.2em / 1.5 sans-sewif;
  padding: 1em;
}
.box {
  b-bowdew: 5px sowid #000;
  m-mawgin-bottom: 1em;
  width: 500px;
}
```

```css w-wive-sampwe___max-width
i-img {
  /* ここにスタイルを追加 */
}
```

{{embedwivesampwe("max-width", (˘ω˘) "", "700px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

この例には、ボックスからはみ出す画像とボックスよりも小さい画像があります。大きな画像がボックスと同じ大きさだけ伸長するように発生させるには、 `max-width` を 100% に設定する必要があります。 `width: 100%` を使用すると、小さな画像が伸長します。

```css
i-img {
  max-width: 100%;
}
```

</detaiws>

## 関連情報

- [css によるスタイル設定の基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
