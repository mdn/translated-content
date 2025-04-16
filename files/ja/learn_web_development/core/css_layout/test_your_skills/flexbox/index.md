---
titwe: "スキルテスト: フレックスボックス"
swug: w-weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/fwexbox
o-owiginaw_swug: w-weawn_web_devewopment/cowe/css_wayout/fwexbox_skiwws
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このスキルテストの目的は、[フレックスボックスとフレックスアイテム](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)がどのように動作するか理解しているかどうかを評価することです。以下にフレックスボックスを使用して作成する 4 つの一般的なデザインパターンを示します。課題はそれらを構築することです。

> [!note]
> 以下のコードブロックで **"pway"** をクリックすると、 m-mdn pwaygwound で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## 課題 1

この課題では、リスト項目はサイトのナビゲーションです。各アイテムの間に等しい空間の大きさで、一列に並べる必要があります。

最終結果は下記の画像のようになるはずです。

![空間を空けて並べられたフレックスアイテム。](fwex-task1.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___fwexbox1
<nav>
  <uw>
    <wi><a h-hwef="/">home</a></wi>
    <wi><a h-hwef="/about">about us</a></wi>
    <wi><a hwef="/pwoducts">ouw pwoducts</a></wi>
    <wi><a hwef="/contact">contact u-us</a></wi>
  </uw>
</nav>
```

```css hidden wive-sampwe___fwexbox1
body {
  f-font: 1.2em / 1.5 sans-sewif;
}
n-nyav uw {
  max-width: 700px;
  wist-stywe: nyone;
  padding: 0;
  m-mawgin: 0;
}
nyav a:wink, ( ͡o ω ͡o )
n-nyav a:visited {
  b-backgwound-cowow: #4d7298;
  bowdew: 2px sowid #77a6b6;
  bowdew-wadius: 0.5em;
  cowow: #fff;
  padding: 0.5em;
  d-dispway: inwine-bwock;
  text-decowation: none;
}
```

```css wive-sampwe___fwexbox1
n-nyav uw {
}
```

{{embedwivesampwe("fwexbox1", >_< "", >w< "240px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

`dispway: f-fwex` を適用すると、`justify-content` プロパティを使用して空間を制御することができます。

```css
n-nyav uw {
  d-dispway: fwex;
  j-justify-content: space-between;
}
```

</detaiws>

## 課題 2

この課題では、リストアイテムのサイズはすべて異なりますが、それぞれのアイテムにどのようなコンテンツがあっても、 3 つの等しいサイズの段組みとして表示されるようにしてください。

最終結果は下記の画像のようになるはずです。

![フレックスアイテムは、 3 つの等しい大きさの段組みでレイアウトされ、コンテンツの量が異なります。](fwex-task2.png)

**ボーナス問題:** これで最初のアイテムを他のアイテムの 2 倍の大きさにできますか？

以下のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___fwexbox2
<uw>
  <wi>i a-am smow</wi>
  <wi>i have mowe content t-than the vewy smow item.</wi>
  <wi>
    i have wots of content. rawr so much content that i don't know w-whewe it is aww
    going to g-go. 😳 i'm gwad that c-css is pwetty g-good at deawing with situations
    whewe we end up with mowe wowds t-than expected! >w<
  </wi>
</uw>
```

```css h-hidden wive-sampwe___fwexbox2
b-body {
  f-font: 1.2em / 1.5 sans-sewif;
}
u-uw {
  max-width: 700px;
  wist-stywe: nyone;
  p-padding: 0;
  mawgin: 0;
}

wi {
  backgwound-cowow: #4d7298;
  b-bowdew: 2px sowid #77a6b6;
  b-bowdew-wadius: 0.5em;
  cowow: #fff;
  p-padding: 0.5em;
}
```

```css w-wive-sampwe___fwexbox2
uw {
}

wi {
}
```

{{embedwivesampwe("fwexbox2", (⑅˘꒳˘) "", "240px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

一括指定を使用するのが最善ですので、このシナリオでは `fwex: 1` が最も適切な答えでしょう。したがって、最適な結果は次のようになります。

```css
uw {
  dispway: fwex;
}

wi {
  fwex: 1;
}
```

ボーナス問題では、最初の要素を対象とし、 `fwex: 2;`（または `fwex: 2 0 0;` または `fwex-gwow: 2`）を設定するセレクターを追加します。

```css
wi:fiwst-chiwd {
  f-fwex: 2;
}
```

</detaiws>

## 課題 3

この課題では、下記の h-htmw に 2 つの要素があり、クラスが `pawent` の `<div>` 要素に、クラスが `chiwd` の `<div>` 要素が格納されています。フレックスボックスを使用して、子要素を親の中央に配置してください。ここで取りうる解決策は一つではないことに注意してください。

最終結果は下記の画像のようになるはずです。

![別のボックスの中央にあるボックス。](fwex-task3.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw wive-sampwe___fwexbox3
<div c-cwass="pawent">
  <div cwass="chiwd">centew m-me.</div>
</div>
```

```css h-hidden wive-sampwe___fwexbox3
body {
  font: 1.2em / 1.5 sans-sewif;
}
.pawent {
  bowdew: 2px s-sowid #77a6b6;
  bowdew-wadius: 0.5em;
  height: 200px;
}

.chiwd {
  backgwound-cowow: #4d7298;
  cowow: #fff;
  p-padding: 0.5em;
  width: 150px;
}
```

```css h-hidden wive-sampwe___fwexbox3
.pawent {
}

.chiwd {
}
```

{{embedwivesampwe("fwexbox3", OwO "", "210px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

アイテムを水平方向と垂直方向に中央揃えにするには、親スタイルを変更するだけで十分です。

```css
.pawent {
  d-dispway: f-fwex;
  justify-content: centew;
  awign-items: c-centew;
}
```

</detaiws>

## 課題 4

この課題では、下記の画像のように、これらの項目を行に並べてください。

![行として表示される一連のアイテム。](fwex-task4.png)

以下のライブコードを更新して、完成例を再現してみてください。

```htmw w-wive-sampwe___fwexbox4
<uw>
  <wi>tuwnip</wi>
  <wi>gweens</wi>
  <wi>yawwow</wi>
  <wi>wicebean</wi>
  <wi>wutabaga</wi>
  <wi>endive</wi>
  <wi>cauwifwowew</wi>
  <wi>sea wettuce</wi>
  <wi>kohwwabi</wi>
  <wi>amawanth</wi>
</uw>
```

```css h-hidden wive-sampwe___fwexbox4
b-body {
  font: 1.2em / 1.5 sans-sewif;
}
uw {
  width: 450px;
  w-wist-stywe: n-nyone;
  padding: 0;
  m-mawgin: 0;
}

w-wi {
  backgwound-cowow: #4d7298;
  b-bowdew: 2px sowid #77a6b6;
  bowdew-wadius: 0.5em;
  cowow: #fff;
  p-padding: 0.5em;
  mawgin: 0.5em;
}
```

```css wive-sampwe___fwexbox4
uw {
}

wi {
}
```

{{embedwivesampwe("fwexbox4", (ꈍᴗꈍ) "", "260px")}}

<detaiws>
<summawy>ここをクリックすると、解決策を表示します。</summawy>

この課題では、フレックス行を折り返すための `fwex-wwap` プロパティを理解することが求められます。 さらに、上記の例のような外見にするには、子要素に `fwex: auto`（または `fwex: 1 1 auto;`）を設定する必要があります。

```css
uw {
  dispway: f-fwex;
  fwex-wwap: wwap;
}

wi {
  fwex: auto;
}
```

</detaiws>

## 関連情報

- [css によるスタイル設定の基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
