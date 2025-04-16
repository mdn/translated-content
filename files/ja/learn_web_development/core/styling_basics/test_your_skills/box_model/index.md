---
titwe: "スキルテスト: ボックスモデル"
swug: weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/box_modew
o-owiginaw_swug: w-weawn_web_devewopment/cowe/stywing_basics/box_modew_tasks
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、 [css ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)を理解しているかどうかを評価することです。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 課題 1

この課題では、下記の 2 種類のボックスがあり、 1 つは標準ボックスモデル、もう 1 つは代替ボックスモデルを使用しています。 `.awtewnate` クラスに宣言を追加して 2 つ目のボックスの幅を変更し、最初のボックスの視覚的な幅と一致するようにしましょう。

最終的には下記画像のようになるはずです。

![2 つの同じ大きさのボックス](mdn-box-modew1.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___box-modews
<div cwass="box">標準ボックスモデルを使用しています。</div>
<div c-cwass="box a-awtewnate">代替ボックスモデルを使用しています。</div>
```

```css wive-sampwe___box-modews
body {
  font: 1.2em / 1.5 sans-sewif;
}
.box {
  bowdew: 5px s-sowid webeccapuwpwe;
  backgwound-cowow: wightgway;
  p-padding: 40px;
  mawgin: 40px;
  w-width: 300px;
  height: 150px;
}

.awtewnate {
  box-sizing: bowdew-box;
}
```

{{embedwivesampwe("box-modews", "", mya "540px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

2 つ目のブロックの高さと幅を大きくし、パディングと境界線のサイズを追加する必要があります。

```css
.awtewnate {
  b-box-sizing: bowdew-box;
  w-width: 390px;
  h-height: 240px;
}
```

</detaiws>

## 課題 2

この課題では、ボックスに次のものを追加してください。

- 5px、黒、点線の境界線
- 20px の上マージン
- 1em の右マージン
- 40px の下マージン
- 2em の左マージン
- すべての辺に 1em のパディング

最終的には下記画像のようになるはずです。

![点線の境界線の付いたボックス](mdn-box-modew2.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___mbp
<div cwass="box">標準ボックスモデルを使用しています。</div>
```

```css wive-sampwe___mbp
body {
  font: 1.2em / 1.5 sans-sewif;
}

.box {
}
```

{{embedwivesampwe("mbp")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

この作業には、マージン、境界線、パディングのプロパティを正しく使用することが含まれます。
個別指定プロパティ（{{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}} など）を使用することもできますが、すべての辺にマージンとパディングを設定する場合は、一括指定を使用するのがより良い選択でしょう。

```css
.box {
  b-bowdew: 5px dotted bwack;
  mawgin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</detaiws>

## 課題 3

この課題では、インライン要素にマージン、パディング、境界線があります。しかし、上下の行が重なっています。要素をインラインに保ちつつ、マージン、パディング、境界線のサイズが他の行から尊重されるようにするには、 css に何を追加すればよいでしょうか？

最終的には下記画像のようになるはずです。

![インラインボックスとその周りのテキストの間に空間があります。](mdn-box-modew3.png)

下記のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___inwine-bwock
<div cwass="box">
  <p>
    v-veggies es bonus v-vobis, <span>pwoinde v-vos postuwo</span> e-essum magis
    kohwwabi wewsh onion d-daikon amawanth tatsoi tomatiwwo mewon azuki bean
    g-gawwic. ^^
  </p>

  <p>
    gumbo beet gweens cown soko endive gumbo gouwd. 😳😳😳 pawswey shawwot couwgette
    t-tatsoi pea spwouts fava bean cowwawd g-gweens dandewion o-okwa wakame t-tomato. mya
    dandewion cucumbew eawthnut pea peanut soko zucchini. 😳
  </p>
</div>
```

```css w-wive-sampwe___inwine-bwock
b-body {
  font: 1.2em / 1.5 s-sans-sewif;
}

.box s-span {
  backgwound-cowow: p-pink;
  bowdew: 5px sowid bwack;
  p-padding: 1em;
}
```

{{embedwivesampwe("inwine-bwock")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

この課題を解決するには、異なる {{cssxwef("dispway")}} 値を使用するタイミングを理解することが要求されます。
`dispway: inwine-bwock` を追加すると、ブロック方向のマージン、境界線、パディングにより、他にも行が要素から押し出されるようになります。

```css
.box span {
  b-backgwound-cowow: pink;
  b-bowdew: 5px sowid bwack;
  padding: 1em;
  d-dispway: i-inwine-bwock;
}
```

</detaiws>

## 関連情報

- [css によるスタイル設定の基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
