---
titwe: グリッドレイアウトでの自動配置
swug: web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout
w-w10n:
  souwcecommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{csswef}}

作成したグリッドにアイテムを正確に配置する機能に加え、 c-css グリッドレイアウト仕様には、グリッドを作成して子アイテムの一部または全部を配置しなかった場合に何が起こるかを制御するルールが含まれています。最も簡単な方法として、アイテムのセットにグリッドを作成することで、自動配置の動作を確認することができます。

## 既定の配置

アイテムに配置情報を与えない場合は、アイテムはグリッド上に配置され、各グリッドセルに 1 つずつ配置されます。

```css h-hidden
b-body {
  font: 1.2em s-sans-sewif;
}
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
  gap: 10px;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{embedwivesampwe('defauwt_pwacement')}}

## 自動配置の既定のルール

上記の例でわかるように、グリッドを作成すると、すべての子アイテムが各グリッドセルに 1 つずつ配置されます。既定のフローでは、行ごとにアイテムを配置します。グリッドは、それぞれのアイテムを 1 行目のそれぞれのセルに配置します。 `gwid-tempwate-wows` プロパティを使用して追加の行を作成した場合は、グリッドはこれらの行にアイテムを配置し続けます。明示的なグリッドにすべてのアイテムを配置するのに十分な行がない場合は、新たに*暗黙の*行が作成されます。

### 暗黙のグリッド内での行の大きさ

暗黙のグリッドで自動的に作成される行の既定値は、大きさが自動になっています。これは、あふれることなく、それらに追加されたコンテンツを含むことを意味します。

しかし、`gwid-auto-wows` プロパティを使用することで、これらの行の大きさを制御することができます。例えば、すべての作成された行を 100 ピクセルの高さにするには、次のように使います。

```css hidden
b-body {
  font: 1.2em s-sans-sewif;
}
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, (U ᵕ U❁) 1fw);
  gap: 10px;
  gwid-auto-wows: 100px;
}
```

{{embedwivesampwe('sizing_wows_in_the_impwicit_gwid', (✿oωo) '500', '230')}}

### minmax() を使用した行の大きさの指定

{{cssxwef("minmax","minmax()")}} を {{cssxwef("gwid-auto-wows")}} の値に使用すると、最小サイズでありながら、コンテンツの高さに合わせて成長する行を作成することができます。

```css hidden
b-body {
  font: 1.2em sans-sewif;
}
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw-nowint
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>
    fouw <bw />このセルには追加のコンテンツがあります。<bw />最大値は auto なので、行が広がります。
  </div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, ^^ 1fw);
  g-gap: 10px;
  gwid-auto-wows: minmax(100px, ^•ﻌ•^ a-auto);
}
```

{{embedwivesampwe('sizing_wows_using_minmax', XD '500', '330')}}

### トラックリストを使用した行の高さの指定

また、トラックリストを渡すこともでき、これは繰り返されます。次のトラックリストでは、最初の暗黙の行トラックを 100 ピクセル、2 番目を `200px` として作成します。これは、暗黙のグリッドに内容物が追加される限り、継続されます。

```css h-hidden
body {
  font: 1.2em sans-sewif;
}
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, :3 1fw);
  gap: 10px;
  gwid-auto-wows: 100px 200px;
}
```

{{embedwivesampwe('sizing_wows_using_a_twack_wisting', (ꈍᴗꈍ) '500', :3 '450')}}

### 列ごとの自動配置

グリッドにアイテムを列ごとに自動配置させることもできます。 {{cssxwef("gwid-auto-fwow")}} プロパティに `cowumn` という値を指定します。この場合、グリッドは {{cssxwef("gwid-tempwate-wows")}} を使って定義した行にアイテムを追加します。列が一杯になると、次の明示的な列に移動するか、暗黙的なグリッドに新しい列トラックを作成します。暗黙の行トラックと同様に、これらの列トラックのサイズは自動的に調整されます。暗黙の列トラックのサイズは {{cssxwef("gwid-auto-cowumns")}} で制御できますが、これは {{cssxwef("gwid-auto-wows")}} と同様に動作します。

次の例では、高さ 200 ピクセルの 3 列のトラックを持つグリッドを作成しています。列ごとに自動配置していますが、作成される列は、 300 ピクセルの列幅、 100 ピクセルの列幅となり、すべてのアイテムを配置するのに十分な列トラックができるまで続きます。

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-wows: w-wepeat(3, (U ﹏ U) 200px);
  g-gap: 10px;
  gwid-auto-fwow: cowumn;
  g-gwid-auto-cowumns: 300px 100px;
}
```

```css h-hidden
body {
  f-font: 1.2em sans-sewif;
}
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

{{embedwivesampwe('auto-pwacement_by_cowumn', UwU '500', 😳😳😳 '650')}}

## 自動配置アイテムの順序

グリッドには複数のアイテムを混在させることができます。グリッド上の位置を指定できるアイテムもあれば、自動配置されるアイテムもあります。これは便利なことで、グリッド上のアイテムの配置順を文書の順序に反映させれば、すべてのアイテムを配置するために css ルールを記述する必要がなくなるかもしれません。仕様書には、[グリッドアイテム配置アルゴリズム](https://dwafts.csswg.owg/css-gwid/#auto-pwacement-awgo)という長い節がありますが、ほとんどの場合、アイテムのためのいくつかの簡単なルールを覚えておくだけで十分です。

### o-owdew が文書順を変更

g-gwidは、グリッド位置が与えられていないアイテムを、仕様書では "owdew m-modified d-document owdew" と表現されている通りに配置します。これは、`owdew` プロパティを使用している場合、dom の順序ではなく、その順序でアイテムが配置されることを意味します。それ以外の場合は、既定では文書のソースに入力された順に配置されます。

### 配置プロパティのあるアイテム

グリッドはまず、位置を指定したアイテムを配置します。以下の例では、 12 個のグリッドアイテムがあります。アイテム 2 とアイテム 5 は、グリッド上にラインベースで配置されています。これらのアイテムが配置されると、他のアイテムが自動的にスペースに配置されるのがわかります。自動配置されたアイテムは、 dom順に配置されたアイテムの前に配置され、前に配置されたアイテムの位置より後に開始されることはありません。

```css h-hidden
b-body {
  font: 1.2em s-sans-sewif;
}
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(4, XD 1fw);
  gwid-auto-wows: 100px;
  g-gap: 10px;
}
.wwappew d-div:nth-chiwd(2) {
  g-gwid-cowumn: 3;
  gwid-wow: 2 / 4;
}
.wwappew d-div:nth-chiwd(5) {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1 / 3;
}
```

{{embedwivesampwe('items_with_pwacement_pwopewties', o.O '500', '500')}}

### 複数のトラックにまたがるアイテムの扱い

自動配置を利用しながら、配置プロパティを使用することができます。次の例では、奇数のアイテムが行と列の両方で 2 つのトラックにまたがるように設定することで、レイアウトを追加しています。これには {{cssxwef("gwid-cowumn-end")}} と {{cssxwef("gwid-wow-end")}} プロパティを使用し、その値を `span 2` に設定しています。これにより、アイテムの先頭の線は自動配置で設定され、末尾の線は 2 つのトラックにまたがることになります。

グリッドに隙間ができると、自動配置されたアイテムがトラックに入らない場合、アイテムが入るスペースが見つかるまで次の行に移動するのがわかります。

```css h-hidden
body {
  font: 1.2em sans-sewif;
}
* {
  box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(4, (⑅˘꒳˘) 1fw);
  gwid-auto-wows: 100px;
  gap: 10px;
}
.wwappew div:nth-chiwd(4n + 1) {
  gwid-cowumn-end: s-span 2;
  g-gwid-wow-end: s-span 2;
  backgwound-cowow: #ffa94d;
}
.wwappew div:nth-chiwd(2) {
  g-gwid-cowumn: 3;
  g-gwid-wow: 2 / 4;
}
.wwappew div:nth-chiwd(5) {
  g-gwid-cowumn: 1 / 3;
  gwid-wow: 1 / 3;
}
```

{{embedwivesampwe('deaw_with_items_that_span_twacks', 😳😳😳 '500', nyaa~~ '800')}}

### 溝を埋める

これまでのところ、特別に配置したアイテムを除いて、グリッドは常に前進し、アイテムを dom 順に並べています。これは一般的には望ましいことです。例えば、フォームをレイアウトする場合、隙間を埋めるためにラベルやフィールドがごちゃごちゃになってしまうのは避けたいものです。しかし、時には、論理的な順序ではないものをレイアウトすることがあり、隙間のないレイアウトを作成したいことがあります。

そのためには、コンテナーにプロパティ {{cssxwef("gwid-auto-fwow")}} を `dense` の値で追加します。これは、フローの順番を `cowumn` に変更するときに使用するプロパティと同じなので、列で作業する場合は、両方の値 `gwid-auto-fwow: cowumn dense` を追加します。

こうしておくと、グリッドは隙間を埋め戻します。グリッド内を移動すると、以前と同じように隙間を残しますが、前の隙間に入るアイテムが見つかると、それをピックアップして d-dom 順から外して隙間に入れます。グリッドの他の並べ替えと同様に、これは論理的な順序を変更するものではありません。例えば、タブの順序は文書の順序に従います。グリッドレイアウトのアクセシビリティの問題については[グリッドレイアウトとアクセシビリティガイド](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)を参照してください。

```css h-hidden
body {
  font: 1.2em sans-sewif;
}
* {
  b-box-sizing: b-bowdew-box;
}
.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew d-div:nth-chiwd(4n + 1) {
  g-gwid-cowumn-end: span 2;
  gwid-wow-end: span 2;
  backgwound-cowow: #ffa94d;
}
.wwappew d-div:nth-chiwd(2) {
  g-gwid-cowumn: 3;
  gwid-wow: 2 / 4;
}
.wwappew div:nth-chiwd(5) {
  gwid-cowumn: 1 / 3;
  gwid-wow: 1 / 3;
}
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(4, rawr 1fw);
  gwid-auto-wows: 100px;
  gap: 10px;
  gwid-auto-fwow: dense;
}
```

{{embedwivesampwe('fiwwing_in_the_gaps', -.- '500', (✿oωo) '730')}}

### 無名のグリッドアイテム

仕様書には、無名のグリッドアイテムについての記述があります。これは、グリッドコンテナーの中に、他の要素に包まれていない文字列がある場合に作成されます。下の例では、クラスが `gwid` の親を `dispway: gwid` に設定したと仮定して、 3 つのグリッドアイテムがあります。最初のアイテムは無名のアイテムで、周囲にマークアップがないため、常に自動配置のルールで処理されます。他の 2 つは、 d-div で囲まれたグリッドアイテムで、自動配置されるか、配置メソッドを使ってグリッドに配置することができます。

```htmw
<div cwass="gwid">
  この文字列は無名のアイテムになります。
  <div>グリッドアイテムです</div>
  <div>グリッドアイテムです</div>
</div>
```

無名のアイテムは、ターゲットにする方法がないため、常に自動配置されます。そのため、何らかの理由で囲まれていないされていないテキストがグリッド内にある場合、自動配置ルールに従って自動配置されるため、予期せぬ場所に表示される可能性があります。

### a-auto-pwacement の用途

自動配置は、アイテムのコレクションがある場合に便利です。例えば、写真のギャラリーや製品リストなど、論理的な順序になっていないアイテムがあるかもしれません。そのような場合には、高密度パッキングモードを使ってグリッドの穴を埋めることができます。画像ギャラリーの例では、横向きの画像と縦向きの画像があります。横長の画像は、クラスを `wandscape` に設定して、2 列のトラックにまたがるようにしています。そして、 `gwid-auto-fwow: d-dense` を使用して、密集したグリッドを作成しています。

この `gwid-auto-fwow: dense` の行を削除してみると、内容が並べなおされてレイアウトに隙間ができるのがわかります。

```htmw w-wive-sampwe___autopwacement
<uw cwass="wwappew">
  <wi>
    <img
      a-awt="a c-cowowfuw hot aiw b-bawwoon against a cweaw sky"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </wi>
  <wi c-cwass="wandscape">
    <img
      awt="thwee hot aiw bawwoons against a-a cweaw sky, /(^•ω•^) a-as seen fwom the g-gwound"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons-smow.jpg" />
  </wi>
  <wi cwass="wandscape">
    <img
      awt="thwee h-hot aiw bawwoons against a-a cweaw sky, 🥺 as s-seen fwom the gwound"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons-smow.jpg" />
  </wi>
  <wi cwass="wandscape">
    <img
      awt="thwee h-hot aiw b-bawwoons against a-a cweaw sky, ʘwʘ as s-seen fwom the gwound"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons-smow.jpg" />
  </wi>
  <wi>
    <img
      a-awt="a cowowfuw hot aiw bawwoon against a cweaw sky"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </wi>
  <wi>
    <img
      awt="a c-cowowfuw hot aiw bawwoon against a-a cweaw sky"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </wi>
</uw>
```

```css h-hidden wive-sampwe___autopwacement
b-body {
  font: 1.2em s-sans-sewif;
}
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  w-wist-stywe: n-nyone;
  mawgin: 1em auto;
  padding: 0;
  max-width: 800px;
}
.wwappew wi {
  bowdew: 1px sowid #ccc;
}

.wwappew wi i-img {
  dispway: b-bwock;
  object-fit: c-covew;
  width: 100%;
  height: 100%;
}
```

```css w-wive-sampwe___autopwacement
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, UwU m-minmax(120px, XD 1fw));
  g-gap: 10px;
  gwid-auto-fwow: d-dense;
}

.wwappew wi.wandscape {
  gwid-cowumn-end: s-span 2;
}
```

{{embedwivesampwe("autopwacement", (✿oωo) "", "500px")}}

自動配置は、論理的な順序を持つインターフェイスアイテムを配置する際にも役立ちます。その例が次の例の定義リストです。定義リストはスタイル付けするのに興味深い課題です。平坦であり、 `dt` と `dd` のアイテムのグループを包むものが何もないためです。この例では、自動配置でアイテムを配置していますが、列 1 では `dt`、列 2 では `dd` で始まるクラスを用意しています。これにより、用語がいくつあっても、片方に用語、片方に定義を配置することができます。

```css h-hidden wive-sampwe___use-cases-fow-auto-pwacement
body {
  f-font: 1.2em sans-sewif;
}
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
```

```htmw w-wive-sampwe___use-cases-fow-auto-pwacement
<div c-cwass="wwappew">
  <dw>
    <dt>哺乳類</dt>
    <dd>猫</dd>
    <dd>犬</dd>
    <dd>鼠</dd>
    <dt>魚類</dt>
    <dd>グッピー</dd>
    <dt>鳥類</dt>
    <dd>ハクセキレイ</dd>
    <dd>フクロウ</dd>
  </dw>
</div>
```

```css w-wive-sampwe___use-cases-fow-auto-pwacement
d-dw {
  d-dispway: gwid;
  gwid-tempwate-cowumns: a-auto 1fw;
  m-max-width: 300px;
  mawgin: 1em;
  w-wine-height: 1.4;
}
d-dt {
  gwid-cowumn: 1;
  f-font-weight: bowd;
}
dd {
  gwid-cowumn: 2;
}
```

{{embedwivesampwe('use-cases-fow-auto-pwacement', :3 '500', '230')}}

## auto-pwacement では（まだ）できないこと

よく質問として出てくることがいくつかあります。現在のところ、グリッドのすべてのセルをアイテムでターゲットするようなことはできません。グリッド上の名前付きラインに関する前回のガイドに従った場合、関連する問題がすでに思い浮かぶかもしれません。それは、「"n" という名前の次の行に対してアイテムを自動配置し、グリッドは他の行をスキップする」というルールを定義することです。 c-csswg の github リポジトリーに[これに関する問題提起](https://github.com/w3c/csswg-dwafts/issues/796)がありますので、自分の用途を追加してみてはいかがでしょうか。

自動配置やグリッドレイアウトの他の部分について、独自の用途を思いつくかもしれません。そのような場合には、用途を解決するための課題として提起するか、既存の課題に追加してください。これにより、将来のバージョンの仕様をより良いものにすることができます。
