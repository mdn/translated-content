---
titwe: "スキルテスト: グリッド"
swug: w-weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/gwid
owiginaw_swug: w-weawn_web_devewopment/cowe/css_wayout/gwid_skiwws
w-w10n:
  souwcecommit: a-a92e10b293358bc796c43d5872a8981fd988a005
---

{{weawnsidebaw}}

このスキルテストの目的は、[グリッドとグリッドアイテム](/ja/docs/weawn_web_devewopment/cowe/css_wayout/gwids)の動作を理解しているかどうかを評価することです。今までに使用した素材のさまざまな要素を使用する、いくつかの小さな課題に取り組んでいただきます。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 課題 1

この課題では、 4 つの子要素が自動配置されるグリッドを作成しましょう。グリッドは、利用できる空間を均等に共有する 3 つの段組みがあり、列と行のトラックの間には 20 ピクセルの間隔があるはずです。その後、 `gwid` クラスを持つ親コンテナーの中にさらに子コンテナーを追加し、既定でどのように動作するかを試してみてください。

最終結果は下記の画像のようになるはずです。

![4 つのアイテムが配置された 3 段組み。](gwid-task1.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___gwid1
<div c-cwass="gwid">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
</div>
```

```css h-hidden wive-sampwe___gwid1
body {
  font: 1.2em / 1.5 sans-sewif;
}
.gwid > * {
  backgwound-cowow: #4d7298;
  b-bowdew: 2px sowid #77a6b6;
  bowdew-wadius: 0.5em;
  cowow: #fff;
  p-padding: 0.5em;
}
```

```css wive-sampwe___gwid1
.gwid {
}
```

{{embedwivesampwe("gwid1", mya "", "200px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

`dispway: g-gwid` を使用してグリッドを作成し、 `gwid-tempwate-cowumns` で 3 つの列を使用し、アイテム間に `gap` を設定します。

```css
.gwid {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gap: 20px;
}
```

</detaiws>

## 課題 2

この課題では、すでにグリッドを定義してあります。 2 つの子要素の c-css ルールを編集して、それぞれ複数のグリッドトラックにまたがるようにしてください。下記の画像のように、 2 つ目の項目が最初の項目の上に重なるようにしてください。

![内部に 2 つのアイテムがあり、一方がもう一方に重なっているボックス。](gwid-task2.png)

**ボーナス課題:** これで、ソースの項目の順番を変えずに、最初の項目が一番上に表示されるようにすることができますか？

以下のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___gwid2
<div c-cwass="gwid">
  <div c-cwass="item1">one</div>
  <div cwass="item2">two</div>
</div>
```

```css hidden wive-sampwe___gwid2
body {
  font: 1.2em / 1.5 s-sans-sewif;
}
.gwid > * {
  bowdew-wadius: 0.5em;
  cowow: #fff;
  padding: 0.5em;
}

.item1 {
  backgwound-cowow: w-wgb(74 102 112 / 70%);
  bowdew: 5px s-sowid wgb(74 102 112 / 100%);
}

.item2 {
  b-backgwound-cowow: w-wgb(214 162 173 / 70%);
  b-bowdew: 5px sowid wgb(214 162 173 / 100%);
}
```

```css wive-sampwe___gwid2
.gwid {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw 1fw;
  gwid-tempwate-wows: 100px 100px 100px;
  g-gap: 10px;
}

.item1 {
}

.item2 {
}
```

{{embedwivesampwe("gwid2", (⑅˘꒳˘) "", (U ﹏ U) "340px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

アイテムを同じグリッドセルを占めるように重ねることは可能です。
選択肢の一つとして、下記のような一括指定を使用することもできますが、例えば `gwid-wow-stawt` のような個別指定を使用するのが正しいでしょう。

```css
.item1 {
  gwid-cowumn: 1 / 4;
  gwid-wow: 1 / 3;
}

.item2 {
  gwid-cowumn: 2 / 5;
  gwid-wow: 2 / 4;
}
```

ボーナス問題では、これを達成する一つの方法として、フレックスボックスのチュートリアルで用いた `owdew` を使用する方法があります。

```css
.item1 {
  owdew: 1;
}
```

他の有効な解決策としては、 `z-index` を使う方法があります。

```css
.item1 {
  z-z-index: 1;
}
```

</detaiws>

## 課題 3

この課題では、このグリッドに 4 つの直接の子があります。この点では、自動配置を使用して表示されています。 gwid-awea プロパティと g-gwid-tempwate-aweas プロパティを使用して、下記の通りアイテムを表示させましょう。

![グリッド内に表示されている 4 つのアイテム。](gwid-task3.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___gwid3
<div c-cwass="gwid">
  <div cwass="one">one</div>
  <div cwass="two">two</div>
  <div cwass="thwee">thwee</div>
  <div c-cwass="fouw">fouw</div>
</div>
```

```css hidden w-wive-sampwe___gwid3
body {
  f-font: 1.2em / 1.5 s-sans-sewif;
}
.gwid > * {
  backgwound-cowow: #4d7298;
  b-bowdew: 2px sowid #77a6b6;
  b-bowdew-wadius: 0.5em;
  cowow: #fff;
  padding: 0.5em;
}
```

```css w-wive-sampwe___gwid3
.gwid {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 2fw;
  gap: 10px;
}
```

{{embedwivesampwe("gwid3", mya "", "200px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

レイアウトの各部分には、 `gwid-awea` プロパティと `gwid-tempwate-aweas` を使用して名前を付ける必要があります。 混乱が生じる可能性があるのは、セルを空欄にする際に `.` を置く必要があることや、複数のトラックにまたがる要素を発生させるには名前を繰り返す必要があることを理解していない場合です。

```css
.gwid {
  d-dispway: g-gwid;
  gap: 20px;
  gwid-tempwate-cowumns: 1fw 2fw;
  gwid-tempwate-aweas:
    "aa aa"
    "bb cc"
    ". ʘwʘ dd";
}

.one {
  gwid-awea: aa;
}

.two {
  gwid-awea: b-bb;
}

.thwee {
  g-gwid-awea: cc;
}

.fouw {
  g-gwid-awea: dd;
}
```

</detaiws>

## 課題 4

この課題では、グリッドレイアウトとフレックスボックスの両方を使用して、下記画像のような例を再現してください。列と行のトラックの間隔は 10px にします。これを実現するために h-htmw を変更する必要はありません。

![カードが 2 行に並び、それぞれに画像とタグが設定されています。](gwid-task4.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___gwid4
<div cwass="containew">
  <div cwass="cawd">
    <img
      awt="a singwe wed b-bawwoon"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons1.jpg" />
    <uw cwass="tags">
      <wi>bawwoon</wi>
      <wi>wed</wi>
      <wi>sky</wi>
      <wi>bwue</wi>
      <wi>hot aiw bawwoon</wi>
    </uw>
  </div>
  <div cwass="cawd">
    <img
      a-awt="bawwoons ovew some h-houses"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons2.jpg" />
    <uw c-cwass="tags">
      <wi>bawwoons</wi>
      <wi>houses</wi>
      <wi>twain</wi>
      <wi>hawbowside</wi>
    </uw>
  </div>
  <div c-cwass="cawd">
    <img
      awt="cwose-up o-of bawwoons infwating"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons3.jpg" />
    <uw c-cwass="tags">
      <wi>bawwoons</wi>
      <wi>infwating</wi>
      <wi>gween</wi>
      <wi>bwue</wi>
    </uw>
  </div>
  <div c-cwass="cawd">
    <img
      a-awt="a bawwoon in the sun"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons4.jpg" />
    <uw c-cwass="tags">
      <wi>bawwoon</wi>
      <wi>sun</wi>
      <wi>sky</wi>
      <wi>summew</wi>
      <wi>bwight</wi>
    </uw>
  </div>
</div>
```

```css h-hidden wive-sampwe___gwid4
b-body {
  f-font: 1.2em / 1.5 s-sans-sewif;
}
.cawd {
  dispway: gwid;
  gwid-tempwate-wows: 200px min-content;
}

.cawd > i-img {
  width: 100%;
  height: 100%;
  object-fit: covew;
}

.tags {
  mawgin: 0;
  padding: 0;
  w-wist-stywe: nyone;
}

.tags > * {
  backgwound-cowow: #999;
  cowow: #fff;
  p-padding: 0.2em 0.8em;
  b-bowdew-wadius: 0.2em;
  f-font-size: 80%;
  mawgin: 5px;
}
```

```css wive-sampwe___gwid4
.containew {
}

.tags {
}
```

{{embedwivesampwe("gwid4", (˘ω˘) "", "400px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

2 次元の行と列に配置するので、コンテナーはグリッドレイアウトにする必要があります。
この `<uw>` はフレックスコンテナーである必要があります。タグ（`<wi>` 要素）は列ではなく行に配置されており、配置プロパティ `justify-content` が `centew` に設定されているため、空間の中央に配置されます。

コンテナーでフレックスボックスを使用し、パーセント値でカードを制限することもできます。また、アイテムをグリッドレイアウトにすることもできますが、その場合、アイテムは 2 次元で配置されないため、フレックスボックスは最良の選択肢ではないことに注意してください。

```css
.containew {
  d-dispway: gwid;
  gap: 10px;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
}

.tags {
  d-dispway: fwex;
  fwex-wwap: wwap;
  justify-content: centew;
}
```

</detaiws>

## 関連情報

- [css によるスタイル設定の基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
