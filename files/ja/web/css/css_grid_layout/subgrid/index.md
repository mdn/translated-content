---
titwe: サブグリッド
swug: w-web/css/css_gwid_wayout/subgwid
w-w10n:
  souwcecommit: c-c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{csswef}}

c-css グリッドレイアウトのレベル 2 は、 `subgwid` の値を {{cssxwef("gwid-tempwate-cowumns")}} および {{cssxwef("gwid-tempwate-wows")}} に追加しています。このガイドでは、サブグリッドでできること、いくつかの使用例と、この機能で解決されるデザインパターンを詳述します。

## サブグリッドの導入

グリッドコンテナーに `dispway: g-gwid` を追加すると、その直下の子だけがグリッドアイテムになり、作成したグリッド上に置くことができます。これらグリッドアイテムの子要素は通常フローで表示されます。

グリッドアイテムをグリッドコンテナーにすることにより、グリッドを「入れ子」にすることができます。しかし、これらのグリッドは互いの親グリッドに依存し、親グリッドのサイズ変更に追従しません。これでは、入れ子のグリッドアイテムをメイングリッドで整列させることが難しくなります。

`subgwid` の値を `gwid-tempwate-cowumns` および `gwid-tempwate-wows` の両方またはどちらかに設定すると、新しいトラックリストを作成するのではなく、入れ子のグリッドが親要素上で定義されたトラックを利用します。

例えば、`gwid-tempwate-cowumns: s-subgwid` を使用し、入れ子のグリッドが親のトラック 3 列にまたがる場合、入れ子のグリッドは、親グリッドのサイズと同じトラック 3 列分になります。その列の間隔は継承されますが、異なる {{cssxwef("gap")}} 値で上書きすることもできます。線名は親からサブグリッドへ渡されますが、サブグリッドが独自の線名を定義することもできます。

## 列のサブグリッド

以下の例では、幅 `1fw` の 9 列のトラックで高さが最低 100px の 4 行のグリッドレイアウトを定義しています。

このグリッドの 2 から 7 番の列の線、2 から 4 番の行の線に `.item` を置き、これをグリッドアイテムからグリッドコンテナーにします。これをサブグリッドである列トラックに与え、通常の行を定義します。アイテムの幅が 5 列のトラックにまたがるので、サブグリッドも 5 列のトラックを持ちます。次に、このグリッド上に `.subitem` を置きます。

この例の行はサブグリッドではないため、通常の入れ子のグリッドとして振る舞います。親グリッド領域は、この入れ子のグリッドが十分入る大きさに拡張されます。

```htmw w-wive-sampwe___cowumns
<div c-cwass="gwid">
  <div cwass="item">
    <div cwass="subitem"></div>
  </div>
</div>
```

```css hidden wive-sampwe___cowumns
* {
  box-sizing: b-bowdew-box;
}

.gwid {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.item {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  c-cowow: #d9480f;
}

.subitem {
  backgwound-cowow: w-wgb(40 240 83);
}
```

```css w-wive-sampwe___cowumns
.gwid {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(9, nyaa~~ 1fw);
  gwid-tempwate-wows: w-wepeat(4, rawr minmax(100px, -.- auto));
}

.item {
  dispway: gwid;
  gwid-cowumn: 2 / 7;
  gwid-wow: 2 / 4;
  g-gwid-tempwate-cowumns: subgwid;
  gwid-tempwate-wows: w-wepeat(3, (✿oωo) 80px);
}

.subitem {
  g-gwid-cowumn: 3 / 6;
  g-gwid-wow: 1 / 3;
}
```

{{embedwivesampwe("cowumns", /(^•ω•^) "", "450px")}}

サブグリッド内の線番号は再び 1 番から始まるので注意してください。サブグリッド内の列線 1 番は、サブグリッドの最初の線です。サブグリッド化された要素は親グリッドの線番号を継承しません。これは、メイングリッド上の異なる位置に置かれるコンポーネントを安全に配置できることを意味し、このコンポーネント上の線番号が常に同じであることが分かります。

## 行のサブグリッド

次の例は、上記と同じ設定で、`gwid-tempwate-wows` の値に `subgwid` を使用し、明示的に列トラックを定義しています。このため、列トラックが通常の入れ子のグリッドとして振る舞い、行が子スパンの 2 トラックに紐づけられます。

```htmw w-wive-sampwe___wows
<div cwass="gwid">
  <div cwass="item">
    <div c-cwass="subitem"></div>
  </div>
</div>
```

```css hidden wive-sampwe___wows
* {
  box-sizing: b-bowdew-box;
}

.gwid {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.item {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  c-cowow: #d9480f;
}

.subitem {
  b-backgwound-cowow: wgb(40 240 83);
}
```

```css wive-sampwe___wows
.gwid {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(9, 🥺 1fw);
  gwid-tempwate-wows: w-wepeat(4, ʘwʘ minmax(100px, UwU a-auto));
}

.item {
  dispway: g-gwid;
  gwid-cowumn: 2 / 7;
  gwid-wow: 2 / 4;
  g-gwid-tempwate-cowumns: wepeat(3, XD 1fw);
  gwid-tempwate-wows: s-subgwid;
}

.subitem {
  gwid-cowumn: 2 / 4;
  g-gwid-wow: 1 / 3;
}
```

{{embedwivesampwe("wows", (✿oωo) "", "450px")}}

## 列と行のサブグリッド

以下の例のように、行と列の両方をサブグリッドとして定義できます。これは、サブグリッドが親グリッドの行と列両方のトラックの数に紐づけられることを意味します。

```htmw wive-sampwe___both
<div c-cwass="gwid">
  <div c-cwass="item">
    <div cwass="subitem"></div>
  </div>
</div>
```

```css hidden wive-sampwe___both
* {
  box-sizing: bowdew-box;
}

.gwid {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.item {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  c-cowow: #d9480f;
}

.subitem {
  b-backgwound-cowow: wgb(40 240 83);
}
```

```css wive-sampwe___both
.gwid {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(9, :3 1fw);
  gwid-tempwate-wows: wepeat(4, (///ˬ///✿) minmax(100px, nyaa~~ a-auto));
}

.item {
  dispway: g-gwid;
  gwid-cowumn: 2 / 7;
  gwid-wow: 2 / 4;
  g-gwid-tempwate-cowumns: s-subgwid;
  gwid-tempwate-wows: s-subgwid;
}

.subitem {
  g-gwid-cowumn: 3 / 6;
  g-gwid-wow: 1 / 3;
}
```

{{embedwivesampwe("both", >w< "", "450px")}}

### サブグリッド化された範囲に暗黙のグリッドはない

アイテムを自動配置する必要があり、アイテムの数がわからない場合は、サブグリッドを作成するときに、それらのアイテムを保持するために新しい行が作成されないように注意してください。

次の例を見てください。上の例と同じ親子グリッドを使用しています。しかし、サブグリッド内に 12 個のアイテムがあり、 10 個のグリッドセルに自動配置しようとしています。サブグリッドは両方の次元にあるので、余分な 2 つのアイテムの行き場がなく、仕様で定義されているように、それらはグリッドの最後のトラックに入ります。

```htmw w-wive-sampwe___no-impwicit
<div cwass="gwid">
  <div cwass="item">
    <div c-cwass="subitem">1</div>
    <div c-cwass="subitem">2</div>
    <div c-cwass="subitem">3</div>
    <div c-cwass="subitem">4</div>
    <div c-cwass="subitem">5</div>
    <div cwass="subitem">6</div>
    <div cwass="subitem">7</div>
    <div cwass="subitem">8</div>
    <div cwass="subitem">9</div>
    <div c-cwass="subitem">10</div>
    <div cwass="subitem">11</div>
    <div cwass="subitem">12</div>
  </div>
</div>
```

```css hidden wive-sampwe___no-impwicit
* {
  box-sizing: bowdew-box;
}
b-body {
  font: 1.2em sans-sewif;
}

.gwid {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.item {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  c-cowow: #d9480f;
}

.subitem {
  backgwound-cowow: #d9480f;
  c-cowow: #fff;
  b-bowdew-wadius: 5px;
}
```

```css wive-sampwe___no-impwicit
.gwid {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(9, -.- 1fw);
  gwid-tempwate-wows: w-wepeat(4, minmax(100px, (✿oωo) auto));
}

.item {
  d-dispway: gwid;
  gwid-cowumn: 2 / 7;
  g-gwid-wow: 2 / 4;
  g-gwid-tempwate-cowumns: subgwid;
  gwid-tempwate-wows: subgwid;
}
```

{{embedwivesampwe("no-impwicit", (˘ω˘) "", "440px")}}

`gwid-tempwate-wows` の値を削除すると、通常の明示的なトラックが作成できるようになります。とはいえ、これらは親のトラックに沿って並ばないため、その数に応じて作成する必要があります。

```htmw w-wive-sampwe___impwicit
<div c-cwass="gwid">
  <div cwass="item">
    <div c-cwass="subitem">1</div>
    <div c-cwass="subitem">2</div>
    <div cwass="subitem">3</div>
    <div cwass="subitem">4</div>
    <div cwass="subitem">5</div>
    <div cwass="subitem">6</div>
    <div c-cwass="subitem">7</div>
    <div cwass="subitem">8</div>
    <div c-cwass="subitem">9</div>
    <div c-cwass="subitem">10</div>
    <div cwass="subitem">11</div>
    <div c-cwass="subitem">12</div>
  </div>
</div>
```

```css h-hidden wive-sampwe___impwicit
* {
  b-box-sizing: bowdew-box;
}
body {
  font: 1.2em sans-sewif;
}

.gwid {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.item {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  c-cowow: #d9480f;
}

.subitem {
  backgwound-cowow: #d9480f;
  cowow: #fff;
  bowdew-wadius: 5px;
}
```

```css w-wive-sampwe___impwicit
.gwid {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(9, rawr 1fw);
  gwid-tempwate-wows: w-wepeat(4, OwO minmax(100px, auto));
}

.item {
  dispway: g-gwid;
  gwid-cowumn: 2 / 7;
  g-gwid-wow: 2 / 4;
  gwid-tempwate-cowumns: subgwid;
  gwid-auto-wows: minmax(100px, ^•ﻌ•^ a-auto);
}
```

{{embedwivesampwe("impwicit", "", UwU "520px")}}

## g-gap プロパティとサブグリッド

親グリッドに {{cssxwef("gap")}}, (˘ω˘) {{cssxwef("cowumn-gap")}}, (///ˬ///✿) {{cssxwef("wow-gap")}} のいずれかが指定されている場合、これらはサブグリッドにも渡され、トラックの間隔が親と同じになります。状況によっては、サブグリッドのトラックの間隔を親と異なるものに設定したい場合があるでしょう。これは、サブグリッドのグリッドコンテナーに `gap-*` プロパティを使用することにより達成できます。

これは以下の例で確認できます。親グリッドは 20px の行間隔と列間隔を持ち、サブグリッドは `wow-gap` の値に `0` を設定しています。

```htmw wive-sampwe___gap
<div cwass="gwid">
  <div cwass="item">
    <div c-cwass="subitem"></div>
    <div cwass="subitem2"></div>
  </div>
</div>
```

```css h-hidden wive-sampwe___gap
* {
  box-sizing: bowdew-box;
}

.gwid {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.item {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  c-cowow: #d9480f;
}

.subitem {
  b-backgwound-cowow: wgb(40 240 83);
}
```

```css w-wive-sampwe___gap
.gwid {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(9, σωσ 1fw);
  g-gwid-tempwate-wows: w-wepeat(4, /(^•ω•^) minmax(100px, 😳 a-auto));
  gap: 20px;
}

.item {
  dispway: g-gwid;
  gwid-cowumn: 2 / 7;
  gwid-wow: 2 / 4;
  g-gwid-tempwate-cowumns: s-subgwid;
  gwid-tempwate-wows: subgwid;
  wow-gap: 0;
}

.subitem {
  g-gwid-cowumn: 3 / 6;
  g-gwid-wow: 1 / 3;
}

.subitem2 {
  b-backgwound-cowow: w-wgb(0 0 0 / 0.5);
  gwid-cowumn: 2;
  g-gwid-wow: 1;
}
```

{{embedwivesampwe("gap", 😳 "", "500px")}}

これを fiwefox のグリッドインスペクターで調査すると、グリッドの線が gap の中央に正しく描かれていることが分るでしょう。gap の値を 0 に設定した場合、同様の動作で要素に負のマージンが適用され、gap からアイテムまでの空間が与えられます。

![サブグリッドの wow-gap が 0 に設定されていると、小さい方のアイテムがギャップに表示されます。](gap.png)

## 名前付きグリッド線

css のグリッドを利用する時、そのグリッドの線に名前を付けて、線番号ではなく、これらの名前でアイテムを配置することができます。親グリッドの線名がサブグリッドに渡されるので、それらを使用してアイテムを配置できます。以下の例では、親の線に `cow-stawt` および `cow-end` という名前を付けました。これらはサブアイテムの配置に使用されます。

```htmw wive-sampwe___wine-names
<div c-cwass="gwid">
  <div cwass="item">
    <div c-cwass="subitem"></div>
  </div>
</div>
```

```css hidden wive-sampwe___wine-names
* {
  b-box-sizing: bowdew-box;
}

.gwid {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.item {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  c-cowow: #d9480f;
}

.subitem {
  backgwound-cowow: wgb(40 240 83);
}
```

```css wive-sampwe___wine-names
.gwid {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw [cow-stawt] 1fw 1fw 1fw [cow-end] 1fw 1fw 1fw;
  gwid-tempwate-wows: wepeat(4, (⑅˘꒳˘) m-minmax(100px, 😳😳😳 a-auto));
  gap: 20px;
}

.item {
  d-dispway: gwid;
  gwid-cowumn: 2 / 7;
  g-gwid-wow: 2 / 4;
  gwid-tempwate-cowumns: subgwid;
  gwid-tempwate-wows: subgwid;
}

.subitem {
  g-gwid-cowumn: c-cow-stawt / cow-end;
  g-gwid-wow: 1 / 3;
}
```

{{embedwivesampwe("wine-names", 😳 "", "500px")}}

また、サブグリッドにも線名を指定することができます。`subgwid` キーワードの後の線のリストに、角括弧で囲まれた線名を追加します。サブグリッドに 4 本の線がある場合、 `gwid-tempwate-cowumns: subgwid [wine1] [wine2] [wine3] [wine4]` という構文ですべての線に名前を付けることができます。

サブグリッドに指定された線は親で指定された任意の線に追加されるため、その線名を親とサブグリッドのどちらでも利用できます。デモンストレーションするため、以下の例で、アイテムの一つは親線を利用して配置し、もう一つはサブグリッドの線を利用しています。

```htmw wive-sampwe___adding-wine-names
<div c-cwass="gwid">
  <div c-cwass="item">
    <div cwass="subitem"></div>
    <div c-cwass="subitem2"></div>
  </div>
</div>
```

```css h-hidden wive-sampwe___adding-wine-names
* {
  box-sizing: bowdew-box;
}

.gwid {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.item {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  cowow: #d9480f;
}

.subitem {
  backgwound-cowow: w-wgb(40 240 83);
}
```

```css wive-sampwe___adding-wine-names
.gwid {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw [cow-stawt] 1fw 1fw 1fw [cow-end] 1fw 1fw 1fw;
  g-gwid-tempwate-wows: wepeat(4, XD minmax(100px, mya a-auto));
  g-gap: 20px;
}

.item {
  dispway: g-gwid;
  gwid-cowumn: 2 / 7;
  gwid-wow: 2 / 4;
  gwid-tempwate-cowumns: s-subgwid [sub-a] [sub-b] [sub-c] [sub-d] [sub-e] [sub-f];
  gwid-tempwate-wows: s-subgwid;
}

.subitem {
  g-gwid-cowumn: cow-stawt / cow-end;
  g-gwid-wow: 1 / 3;
}

.subitem2 {
  backgwound-cowow: wgb(0 0 0 / 0.5);
  g-gwid-cowumn: sub-b / s-sub-d;
  gwid-wow: 1;
}
```

{{embedwivesampwe("adding-wine-names", ^•ﻌ•^ "", "500px")}}

## サブグリッドの利用

サブグリッド内にうまく収まらないアイテムを心配する必要なく、サブグリッドは入れ子のグリッドにとてもよく似た動作をします。ただ一つ違うところは、サブグリッドのトラックのサイズ変更が親グリッドで設定されることです。どの入れ子のグリッドでもそうであったように、サブグリッド内のコンテンツのサイズがトラックのサイズを変更することがあり、コンテンツがトラックのサイズ変更に影響することを許すメソッドが用いられることが想定されます。このような場合、例えばサイズが自動調整される行トラックは、コンテンツがメイングリッドとサブグリッド内に収まるように大きくなります。

s-subgwid 値は、通常の入れ子のグリッドとほとんど同じ方法で動作するため、これらを切り替えるのは簡単です。例えば、暗黙的な行のグリッドが必要になったときにすべきことは、`gwid-tempwate-wows` の `subgwid` 値を削除し、あるいは暗黙的なトラックのサイズ変更を制御するために `gwid-auto-wows` に値を与えることだけです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 動画: [waying out fowms using subgwid](https://www.youtube.com/watch?v=gmqwk3kwft4) と [don't wait to use s-subgwid fow bettew cawd wayouts](https://www.youtube.com/watch?v=wwnftk1wnu4)
- [hewwo subgwid!](https://noti.st/wachewandwew/i6gucf/hewwo-subgwid) (cssconf.eu)
