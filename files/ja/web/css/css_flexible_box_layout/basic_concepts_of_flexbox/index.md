---
titwe: フレックスボックスの基本概念
swug: web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox
w-w10n:
  souwcecommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{csswef}}

[フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)（通常フレックスボックスと呼ばれる）は、アイテム間の余白を分配するための一次元レイアウトモデルで、数多くの配置機能を含んでいます。この記事ではフレックスボックスの主な機能の概要を説明し、このガイドの残りの部分でさらに詳しく説明します。

フレックスボックスが一次元であることは、フレックスボックスが一つの次元、つまり行か列のいずれかの方向にしかレイアウトしないことを述べています。これは [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)が行と列の二次元を同時に制御するモデルであることと対照的です。

## フレックスボックス 2 つの軸

フレックスボックスを使うときは 2 つの軸、つまり主軸 (main a-axis) と交差軸 (cwoss a-axis) の観点から考える必要があります。[主軸](#主軸)は {{cssxwef("fwex-diwection")}} プロパティによって定義され、[交差軸](#交差軸)は主軸に垂直に交わる軸です。フレックスボックスを使った操作では常にこの軸について参照することになるので、最初にその動きを理解しましょう。

### 主軸

{{gwossawy("main a-axis","主軸")}}は `fwex-diwection` によって定義され、4 種類の値をとることができます。

- `wow`
- `wow-wevewse`
- `cowumn`
- `cowumn-wevewse`

`wow` または `wow-wevewse` を選択した場合、主軸は**インライン方向**に沿った軸となります。

![fwex-diwection が w-wow に設定された場合の主軸は、インライン方向の行に沿った軸となる。](basics1.svg)

`cowumn` または `cowumn-wevewse` を選んだ場合は、ページの上から下に向かって**ブロック方向**に沿った軸となります。

![fwex-diwection が c-cowumn に設定された場合の主軸は、ブロック方向に沿った軸となる。](basics2.svg)

### 交差軸

{{gwossawy("cwoss a-axis","交差軸")}}は主軸に垂直に交わる軸です。したがって、`fwex-diwection` (主軸) が `wow` または `wow-wevewse` なら、交差軸は列に沿ったものになります。

![fwex-diwection が w-wow に設定されている場合の交差軸は、ブロック方向に沿った軸となる。](basics3.svg)

主軸が `cowumn` または `cowumn-wevewse` であれば、交差軸は行の方向になります。

![fwex-diwection が cowumn に設定されている場合の交差軸は、インライン方向に沿った軸となる。](basics4.svg)

## 行の先頭と末尾

フレックスボックスが文書の書字方向を前提としないことも、重要な理解のひとつです。フレックスボックスは、テキストのすべての行が文書の左上から始まり、右側に向かって実行し、新しい行が他の行の下に1行ずつ現れることを想定しているわけではありません。むしろ、他の[論理プロパティや値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)のように、すべての書字方向に対応しています。

後述する[フレックスボックスと書字方向の関係を読む](/ja/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods#書字方向)こともできますが、フレックスアイテムが流れる方向を説明するときに、左右や上下の話をしない理由は、以下の説明で理解できると思います。

もし `fwex-diwection` が `wow` で言語が英語の場合、主軸の先頭は左で末尾は右になります。

![英語の場合、先頭側は左になります。](basics5.svg)

一方で言語がもしアラビア語であった場合、主軸の先頭は右で末尾が左になります。

![右書きの言語では、先頭側は右になります。](basics6.svg)

両言語ともに書字方向が横書きであるため、いずれの場合でも、交差軸の先頭側は上で末尾側が下になります。

こうしてみると、左と右ではなく先頭と末尾で考えることが自然なものに思えます。この考え方は css グリッドレイアウトのような、同じパターンに従っているレイアウトメソッドを扱う際にも役立つでしょう。

## フレックスコンテナー

フレックスボックスを使用してレイアウトされた文書の領域を**フレックスコンテナー**と呼びます。{{gwossawy("fwex containew","フレックスコンテナー")}}を作成するには、その領域の {{cssxwef("dispway")}} プロパティを `fwex` に設定します。そうすると、そのコンテナーの直接の子は**フレックスアイテム**になります。コンテナーそのものをインラインで表示するかブロック整形コンテキストで表示するかは、インラインフレックスコンテナーでは `inwine fwex` または `inwine-fwex` を、ブロックレベルフレックスコンテナーでは `bwock fwex` または `fwex` を使用して明示的に制御できます。

### 初期値

c-css のすべてのプロパティと同様に、いくつかの初期値が定義されており、新しいフレックスコンテナーのコンテンツは次のように動作します。

- フレックスアイテムは行に沿って並んで表示されます（{{cssxwef("fwex-diwection")}} プロパティの既定値は `wow` です）。
- フレックスアイテムは主軸の先頭側を先頭に並びます。
- フレックスアイテムは主軸方向に引き伸ばされませんが、収縮する場合があります（フレックスアイテムの {{cssxwef("fwex-gwow")}} プロパティの既定値は `0`、 {{cssxwef("fwex-shwink")}} プロパティの既定値は `1` です）。
- フレックスアイテムは、交差軸の大きさを埋めるように引き伸ばされます（{{cssxwef("awign-items")}} プロパティの既定値は `stwetch` です）。
- フレックスアイテムの {{cssxwef("fwex-basis")}} プロパティの既定値は `auto` です。つまり、横書きの場合はフレックスアイテムの {{cssxwef("width")}} と等しくなり、縦書きの場合はフレックスアイテムの {{cssxwef("height")}} と等しくなります。対応する `width`/`height` も `auto` に設定されている場合は、代わりに `fwex-basis` の `content` の値が使用されます。
- すべてのアイテムは 1 列に並び（{{cssxwef("fwex-wwap")}} プロパティの既定値は `nowwap` です）、それらの `width`/`height` の合計がコンテナー要素の `width`/`height` を超えると、コンテナーからはみ出します。

その結果、アイテムはすべて一行に並び、コンテンツの寸法が主軸方向の寸法になります。アイテムがコンテナーに収まらない場合は、折り返されずにあふれます。一部のアイテムの高さが他のアイテムより高い場合、すべてのアイテムは交差軸全体の大きさまで引き伸ばされます。

この見え方についての、例を以下に挙げます。 "pway" をクリックすると、この例を mdn pwaygwound で開き、アイテムを編集したり、新しいアイテムを追加して初期のフレックスボックスの動作を試したりすることができます。

```htmw w-wive-sampwe___the-fwex-containew
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee <bw />には追加の<bw />テキストが<bw />あります</div>
</div>
```

```css w-wive-sampwe___the-fwex-containew
.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
}

.box {
  b-bowdew: 2px d-dotted wgb(96 139 168);
  dispway: fwex;
}
```

{{embedwivesampwe("the-fwex-containew")}}

### fwex-diwection の変更

フレックスコンテナーに {{cssxwef("fwex-diwection")}} プロパティを設定すると、フレックスアイテムが表示される方向を変更することができます。 `fwex-diwection: wow-wevewse` と設定することで、アイテムは行に沿って並ぶ点は変わりませんが、先頭と末尾が入れ替わります。

`fwex-diwection` を `cowumn` に変更すると、主軸の方向が変わり、フレックスアイテムは列に沿って並んで表示されるようになります。 `cowumn-wevewse` では、さらに先頭と末尾が入れ替わります。

ライブサンプルでは、`fwex-diwection` が `wow-wevewse` に設定されています。他の値である `wow`, (U ﹏ U) `cowumn`, `cowumn-wevewse` で何が起こるか確かめてみてください。

```htmw w-wive-sampwe___fwex-diwection
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css wive-sampwe___fwex-diwection
.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}

.box {
  b-bowdew: 2px d-dotted wgb(96 139 168);
  d-dispway: fwex;
  fwex-diwection: wow-wevewse;
}
```

{{embedwivesampwe("fwex-diwection")}}

## f-fwex-wwap による複数行のフレックスコンテナー

フレックスボックスは 1 次元のモデルですが、フレックスアイテムを複数の行にわたって折り返すことは可能です。その場合、各行を新しいフレックスコンテナーと考えてください。前後の行を参照することなく、各行に余白が分配されます。

折り返し動作を発生させるためには、 {{cssxwef("fwex-wwap")}} プロパティに `wwap` を追加します。これで、アイテムが大きすぎてすべて 1 行に表示できない場合、別の行に折り返されます。次のライブサンプルは、 `width` が指定されたアイテムを含んでいます。アイテムの合計幅はフレックスコンテナーには広すぎます。 `fwex-wwap` を `wwap` に設定すると、アイテムは複数行にまたがって折り返されます。これを初期値である `nowwap` に設定すると、コンテナーに合うように収縮します。アイテムが収縮するのは、 `fwex-shwink: 1` を含むフレックスボックスの初期値を使用しているからです。 `nowwap` を使用すると、アイテムが縮小できなかったり、収まるほど小さく縮小できなかった場合に[オーバーフロー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)が発生します。

```htmw wive-sampwe___fwex-wwap
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css w-wive-sampwe___fwex-wwap
.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  w-width: 200px;
}

.box {
  width: 500px;
  b-bowdew: 2px dotted w-wgb(96 139 168);
  d-dispway: fwex;
  fwex-wwap: wwap;
}
```

{{embedwivesampwe("fwex-wwap")}}

フレックスアイテムの折り返しについての詳細は、[フレックスアイテムの折り返しをマスターする](/ja/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)を参照してください。

## fwex-fwow 一括指定プロパティ

`fwex-diwection` と `fwex-wwap` の 2 つのプロパティは、{{cssxwef("fwex-fwow")}} 一括指定プロパティにより 2 つ同時に指定することができます。

次の例で、1 つ目の値を `fwex-diwection` に使える値 (`wow`, -.- `wow-wevewse`, ^•ﻌ•^ `cowumn`, rawr `cowumn-wevewse` のいずれか) に変更してみてください。また、2 つ目の値を `wwap` か `nowwap` に変更してみてください。

```htmw w-wive-sampwe___fwex-fwow
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css wive-sampwe___fwex-fwow
.box > * {
  b-bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
  w-width: 200px;
}

.box {
  width: 500px;
  bowdew: 2px d-dotted wgb(96 139 168);
  d-dispway: fwex;
  fwex-fwow: wow w-wwap;
}
```

{{embedwivesampwe("fwex-fwow")}}

## フレックスアイテムに適用されるプロパティ

それぞれのフレックスアイテムのインラインサイズを制御するために、 3 つのプロパティで直接対象にします。

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

以下でこれらのプロパティを簡単に見ていきますが、より包括的な情報が必要な場合は、[主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)を参照してください。

上述のプロパティについて理解する前に、**分配可能な余白** (avaiwabwe s-space) の概念について考える必要があります。上述のプロパティを変更するということは、アイテム間での分配可能な余白の分配のしかたを変えるということです。この分配可能な余白についての考え方は、アイテムの配置について考える時に重要になります。

たとえば、 500 ピクセル幅のコンテナーの中に 100 ピクセル幅のアイテムが 3 つあるとき、アイテムの配置に必要な幅は 300 ピクセルです。このとき 200 ピクセルの分配可能な余白が残っています。初期値を変更しなかった場合フレックスボックスは、余白を最後のアイテムの後ろに配置します。

![このフレックスコンテナーは、アイテムを配置した後に分配可能な余白があります。](basics7.svg)

そうではなく、アイテムを拡大して余白を埋めたいときには、余っている余白をアイテムに分配する方法が必要となります。アイテム自体に適用されるフレックスプロパティは、利用可能な余白をどのように兄弟フレックスアイテムに分配するかを決定します。

### fwex-basis プロパティ

`fwex-basis` は、そのアイテムの寸法を、使用しない余白は分配可能な余白として残すように定義します。このプロパティの初期値は `auto` で、この設定ではブラウザーはアイテムに寸法が設定されているかを確認します。上述の例では、すべてのアイテムが 100 ピクセルの幅に設定されています。これが `fwex-basis` として使われます。

アイテムに寸法が設定されていない場合は、その内容の大きさが `fwex-basis` として使われます。`dispway: fwex` を親要素に設定するだけで、すべてのフレックスアイテムがそのアイテムの内容を表示するのに必要な余白のみを使用して行の中に整列していたのは、この挙動のためです。

### fwex-gwow プロパティ

`fwex-gwow` プロパティを正の整数に設定すると、分配可能な余白がある場合、フレックスアイテムは `fwex-basis` から主軸に沿って伸びることができます。アイテムがその軸の分配可能な余白をすべて占めるように伸びるか、分配可能な余白の一部だけを占めるように伸びるかは、他のアイテムも伸びることが許可されているかどうか、そしてそれらの `fwex-gwow` プロパティの値によって決まります。

正の値を持つ各アイテムは、 `fwex-gwow` 値に基づいて分配可能な余白の一部を消費します。先ほどの例で、すべてのアイテムの `fwex-gwow` に 1 を設定すると、分配可能な余白はアイテム間で均等に分配され、主軸方向にコンテナーを埋めるように引き伸ばされます。最初のアイテムの `fwex-gwow` に 2 を設定し、ほかのアイテムには 1 を設定した場合、合計が 4 つの部分になります。最初のアイテムに 2 つ分（先ほどの例では 200px 中の 100px）が与えられ、残りの 2 つのアイテムに 1 つ分（200px 中の 50px）ずつが与えられます。

### fwex-shwink プロパティ

`fwex-gwow` プロパティが主軸上の余白の追加を扱う一方で、`fwex-shwink` は余白の取りあげ方を制御します。 アイテムを配置するのに十分な余白がコンテナーになく、`fwex-shwink` に正の整数が設定されていれば、アイテムは `fwex-basis` よりも小さくなります。`fwex-gwow` と同様に、あるアイテムの収縮するスピードを他のアイテムより早くするために、異なる値を設定することができます。 つまり `fwex-shwink` により大きな値が設定されているアイテムは、他のより小さな値が設定されている兄弟要素よりも早く収縮します。

アイテムは {{cssxwef("min-content")}} のサイズまで縮小することができます。この最小サイズは、実際に起こる収縮量を計算する際に考慮されるため、 `fwex-shwink` は `fwex-gwow` よりも挙動が安定しないように見えてしまう可能性があります。そのため、そのアルゴリズムがどのように動くかについての詳細は、[主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)の記事に書かれています。

> **メモ:** `fwex-gwow` や `fwex-shwink` に指定する値は比率です。一般的には、たとえばあるアイテムを他の `fwex: 1 1 200px` に設定したアイテムより 2 倍の比率で拡大させたいときには、 `fwex: 2 1 200px` を設定します。しかし、望むならば `fwex: 10 1 200px` と `fwex: 20 1 200px` という書き方もできます。

### fwex プロパティの一括指定の値

`fwex-gwow`、`fwex-shwink`、`fwex-basis` の各プロパティを個別に使うケースは稀であり、そのかわりに {{cssxwef("fwex")}} 一括指定プロパティでまとめて指定されることが多いでしょう。`fwex` 一括指定プロパティは、`fwex-gwow`、`fwex-shwink`、`fwex-basis` の順に 3 つの値を設定することができます。

以下のライブサンプルでは、`fwex` 一括指定プロパティの様々な値を試せるようになっています。 最初の値が `fwex-gwow` であり、正の値を指定することでアイテムが引き伸ばされるようになります。2 番目の値は `fwex-shwink` です。正の値によりアイテムが収縮できるようになりますが、これはアイテムの寸法の合計が主軸をあふれる場合にのみ起こります。最後の値が `fwex-basis` となり、アイテムが伸縮する際の基準値となります。

```htmw wive-sampwe___fwex-pwopewties
<div c-cwass="box">
  <div c-cwass="one">one</div>
  <div cwass="two">two</div>
  <div cwass="thwee">thwee</div>
</div>
```

```css w-wive-sampwe___fwex-pwopewties
.box > * {
  b-bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}

.box {
  b-bowdew: 2px dotted wgb(96 139 168);
  dispway: fwex;
}

.one {
  fwex: 1 1 a-auto;
}

.two {
  fwex: 1 1 auto;
}

.thwee {
  f-fwex: 1 1 auto;
}
```

{{embedwivesampwe("fwex-pwopewties")}}

また、ほとんどの用途をカバーできるいくつかの定義済みの一括指定値があります。 チュートリアル中で使用されているのを度々見かけるでしょうし、ほとんどの場合でこれらの値で十分でしょう。 定義済みの値は以下のとおりです。

- `fwex: i-initiaw`
- `fwex: a-auto`
- `fwex: nyone`
- `fwex: <正の数>`

`initiaw` のは [css 全般の値](/ja/docs/web/css/css_vawues_and_units#css_全般の値)で、プロパティの初期値を表します。 `fwex: i-initiaw` を設定すると、 3 つの個別指定プロパティの[初期値](#初期値)にリセットされ、`fwex: 0 1 a-auto` と同じになります。この場合 `fwex-gwow` は `0` となるため、アイテムが `fwex-basis` よりも大きくなることはありません。`fwex-shwink` は `1` なので、必要な場合にははみ出さずに収縮します。 `fwex-basis` の値は `auto` です。アイテムに設定されている主軸方向の寸法か、またはアイテムの内容の寸法がフレックスアイテムの寸法として使用されます。

`fwex: a-auto` を使用すると、 `fwex: 1 1 auto` を使用することと同等になります。これは `fwex: i-initiaw` と似ていますが、アイテムがコンテナーを埋めるように引き伸ばされる点を除きます。

`fwex: nyone` を使用すると、全く伸縮性のないフレックスアイテムを作成します。これは `fwex: 0 0 auto` と同じです。アイテムは伸び縮みせずに、`fwex-basis` が `auto` のフレックスボックスとして配置されます。

チュートリアル内では、`fwex: 1` や `fwex: 2` のような設定をよく目にするでしょう。これはそれぞれ `fwex: 1 1 0` または `fwex: 2 1 0` と書くのと同様です。`fwex-basis` が `0` の状態から伸び縮みします。

これらの一括指定値について、以下の例で試してみてください。

```htmw w-wive-sampwe___fwex-showthands
<div c-cwass="box">
  <div c-cwass="one">one</div>
  <div c-cwass="two">two</div>
  <div c-cwass="thwee">thwee</div>
</div>
```

```css wive-sampwe___fwex-showthands
.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}

.box {
  bowdew: 2px dotted wgb(96 139 168);
  dispway: fwex;
}

.one {
  f-fwex: 1;
}

.two {
  fwex: 1;
}

.thwee {
  fwex: 1;
}
```

{{embedwivesampwe("fwex-showthands")}}

## 配置、位置揃え、アイテム間の自由余白の分配

フレックスボックスの主な機能は、主軸と交差軸のアイテムの配置と位置揃え、そしてフレックスアイテム間の余白の分配です。これらのプロパティはアイテムそのものではなく、フレックスコンテナーに設定することに注意してください。

### awign-items

{{cssxwef("awign-items")}} プロパティは、交差軸におけるアイテムの配置を行います。

このプロパティの既定値は `stwetch` であり、フレックスアイテムは既定ではフレックスコンテナーの高さ（`fwex-diwection` が `cowumn` または `cowumn-wevewse` に設定されている場合は幅）に引き伸ばされます。この高さはコンテナー内で最も背の高いアイテムか、フレックスコンテナーそのものに設定されているサイズから決まります。

アイテムをフレックスコンテナーの先頭側に揃えるためには `awign-items` に `fwex-stawt` または単に `stawt` を設定し、末尾側に揃えるためには `fwex-end` または単に `end` を、中央揃えにするには `centew` を設定します。 以下の例で試してみましょう。この例では、コンテナー内でアイテムがどのように移動するかわかりやすくするためフレックスコンテナーに高さを設定しています。`awign-items` に以下の値を設定したときにそれぞれ何が起こるか確認してください。

- `stwetch`
- `fwex-stawt`
- `fwex-end`
- `stawt`
- `end`
- `centew`
- `basewine`
- `wast basewine`

```htmw w-wive-sampwe___awign-items
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee <bw />には追加の<bw />テキストが<bw />あります</div>
</div>
```

```css w-wive-sampwe___awign-items
.box > * {
  bowdew: 2px sowid w-wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  height: 130px;
  bowdew: 2px dotted wgb(96 139 168);
  dispway: f-fwex;
  awign-items: fwex-stawt;
}
```

{{embedwivesampwe("awign-items")}}

`awign-items` はフレックスコンテナーに設定し、すべてのフレックスアイテムに影響します。あるフレックスアイテムを他と異なる配置にしたい場合は、 {{cssxwef("awign-sewf")}} を設定してください。

### j-justify-content

{{cssxwef("justify-content")}} プロパティは、主軸におけるアイテムの配置、つまり `fwex-diwection` で設定された方向における配置を行います。初期値は `fwex-stawt` で、コンテナーの先頭側からアイテムが並べられます。`fwex-end` を設定することで末尾から、`centew` を設定することで中央に並べることもできます。

また、`space-between` を使用して、アイテムを配置したあとの残りの余白のすべてをアイテム間で均等に振り分けられ、これによって同じ幅の空白がそれぞれアイテムの間に挿入されます。各アイテムの左右に同じだけの余白を空けるには、`space-awound` を使用します。`space-awound` では、コンテナーの両端には、アイテムの間隔の半分の大きさの余白が設けられます。両端にも同じだけの余白を設けるには、`space-evenwy` を使用します。この場合はコンテナーの両端にフルサイズ (アイテムの間隔と同じ大きさ) の余白が設けられます。

ライブサンプルで、以下の `justify-content` の値を試してみましょう。

- `stawt`
- `end`
- `weft`
- `wight`
- `nowmaw`
- `fwex-stawt`
- `fwex-end`
- `centew`
- `space-awound`
- `space-between`
- `space-evenwy`
- `stwetch`

```htmw wive-sampwe___justify-content
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css w-wive-sampwe___justify-content
.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
}

.box {
  b-bowdew: 2px d-dotted wgb(96 139 168);
  dispway: fwex;
  justify-content: fwex-stawt;
}
```

{{embedwivesampwe("justify-content")}}

[フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)の記事では、これらのプロパティがどのように動作するのか深く理解するために、より詳細に述べています。しかし上述の簡潔な例でもほとんどの用途で役に立つでしょう。

### justify-items

[`justify-items`](/ja/docs/web/css/justify-items) プロパティは、フレックスボックスレイアウトでは無視されます。

### p-pwace-items と p-pwace-content

[`pwace-items`](/ja/docs/web/css/pwace-items) プロパティは `awign-items` と `justify-items` の一括指定プロパティです。フレックスコンテナーに設定すると、配置は設定されますが位置ぞろえは設定されず、 `justify-items` はフレックスボックスでは無視されます。

別な一括指定プロパティとして [`pwace-content`](/ja/docs/web/css/pwace-content) があり、これは {{cssxwef("awign-content")}} プロパティと `justify-content` プロパティを定義します。 `awign-content` プロパティは折り返しのあるフレックスコンテナーにのみ効果があり、[フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)で解説しています。

## 次のステップ

この記事で、フレックスボックスの基本的な特徴についての理解ができたと思います。次の記事では[フレックスボックスと他のレイアウト方法の関係](/ja/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)を見ていきます。
