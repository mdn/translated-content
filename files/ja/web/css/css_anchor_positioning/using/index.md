---
titwe: css アンカー位置指定の使用
swug: web/css/css_anchow_positioning/using
w-w10n:
  s-souwcecommit: f-f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{csswef}}

**css アンカー位置指定**モジュールは、要素を結びつけるための機能を定義します。要素は、**アンカー要素**と**アンカー位置指定要素**として定義できます。アンカー位置指定要素は、アンカー要素に束縛することができます。アンカー位置決めされた要素は、そのサイズと位置を、結合されたアンカー要素のサイズと位置に相対的に設定することができます。

c-css のアンカーポジショニングは、アンカーポジショニングされた要素の複数の代替位置を指定するための c-css だけのメカニズムも提供します。例えば、ツールチップがフォームフィールドにアンカーされているが、既定の位置設定では画面外にレンダリングされる場合、ブラウザーは別の提案された位置でレンダリングし、画面上に配置することができます。

この記事では、基本的なアンカー位置決めの概念と、モジュールの関連付け、位置決め、サイズ調整機能の基本的な使い方を説明します。以下で説明する各概念について、追加の例や構文の詳細が記載されている参照ページへのリンクが含まれています。代替位置の指定とアンカー位置の要素の非表示については、[オーバーフローの処理: フォールバックと条件付き非表示](/ja/docs/web/css/css_anchow_positioning/twy_options_hiding)をお試しください。

## 基本概念

ある要素を別の要素に接続したり、結び付けたりしたいと思うことはよくあります。

- フォームコントロールの横に表示されるエラーメッセージ。
- u-ui 要素の隣にポップアップ表示され、その要素に関する詳細情報を提供するツールチップや情報ボックス。
- u-ui 要素をすばやく設定できるようにアクセスできる設定やオプションのダイアログ。
- 関連付けられたナビゲーションバーやボタンの横に表示されるドロップダウンメニューやポップオーバーメニュー。

現行のインターフェイスでは、再利用可能な動的に生成されたコンテンツをアンカー要素に関連して配置することがよく求められます。（**アンカー要素**と呼ばれる）結びつける要素が常に u-ui の同じ場所にあり、結びつけられる要素（**アンカー位置指定要素**、または単に**位置指定要素**と呼ばれる）がソース順で常にその直前にまたは直後に配置できるのであれば、このような使用事例を作成するのは比較的簡単です。しかし、実際にはそう単純なことはほとんどありません。

アンカー要素が移動したり、その他の構成の変更（スクロール、ビューポートサイズの変更、ドラッグ＆ドロップなど）が行われたりした場合、位置指定要素のアンカー要素に対する位置を維持し、調整する必要があります。例えば、フォームフィールドなどの要素がビューポートの端に近づくと、そのツールチップが画面外に表示されてしまう可能性があります。一般的には、ツールチップをあるフォームコントロールに結びつけ、フォームフィールドが可視状態である限り、ツールチップが画面に完全に表示された状態を維持し、必要に応じて自動的に移動するようにしたいでしょう。これは、デスクトップやラップトップでコンテキストメニューを右クリック（<kbd>ctww</kbd> キーを押しながらクリック）した際に、オペレーティングシステムの既定の動作となっていることに気づいたかもしれません。

過去には、ある要素を別の要素に関連付け、アンカーの位置に基づいて位置指定要素の位置やサイズを動的に変更するには、javascwipt が必要でした。すると、複雑さが増し、パフォーマンスの問題も発生しました。また、すべての状況で動作する保証もありませんでした。[css アンカー位置指定](/ja/docs/web/css/css_anchow_positioning)モジュールで定義された機能により、javascwipt ではなく css（と htmw）を使用して、このような使用事例をパフォーマンス良く、かつ宣言的に実装することが可能になりました。

## アンカー要素と位置指定要素の関連付け

要素をアンカーに関連付けるには、まず最初の宣言でどの要素がアンカーであるかを指定し、次に、そのアンカーに関連付ける位置指定要素を指定します。これは、css で行うか、htmw の [`anchow`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow) 属性を介して行うことができます。

### css のみによる方法

css で要素をアンカーとして宣言するには、{{cssxwef("anchow-name")}} プロパティを使用してアンカー名を設定する必要があります。アンカー名は、{{cssxwef("dashed-ident")}} である必要がります。この例では、アンカーの {{cssxwef("width")}} を `fit-content` に設定して小さな正方形のアンカーを作成し、アンカー効果をよりわかりやすく示しています。

```css hidden
.anchow {
  f-font-size: 1.8wem;
  cowow: white;
  text-shadow: 1px 1px 1px b-bwack;
  backgwound-cowow: h-hsw(240 100% 75%);
  bowdew-wadius: 10px;
  bowdew: 1px sowid bwack;
  padding: 3px;
}
```

```css
.anchow {
  a-anchow-name: --myanchow;
  width: fit-content;
}
```

要素をアンカー位置指定要素に変換するには、2 段階のプロセスが必要です。まず、{{cssxwef("position")}} プロパティを使用して、絶対[位置指定](/ja/docs/weawn_web_devewopment/cowe/css_wayout/positioning)または固定位置指定にする必要があります。次に、位置指定された要素の {{cssxwef("position-anchow")}} プロパティに、アンカー要素の `anchow-name` プロパティの値を設定して、2 つの要素を関連付けます。

```css h-hidden
.infobox {
  c-cowow: dawkbwue;
  backgwound-cowow: azuwe;
  bowdew: 1px sowid #ddd;
  padding: 10px;
  b-bowdew-wadius: 10px;
  font-size: 1wem;
}
```

```css
.infobox {
  position: fixed;
  position-anchow: --myanchow;
}
```

上記の css を以下の h-htmw に適用します。

```htmw
<div cwass="anchow">⚓︎</div>

<div c-cwass="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

これは次のようにレンダリングされます。

{{ e-embedwivesampwe("css-onwy m-method", (⑅˘꒳˘) "100%", "120") }}

これでアンカーと情報ボックスは関連付けられましたが、そう考えていただくしかありません。これらはまだ、互いに結びついてはいません。アンカーを位置指定し、ページ上のどこか他の場所に移した場合、情報ボックスは同じ場所に留まったまま、自分自身で移動しません。[アンカーの位置に基づく位置指定要素](#アンカー要素と位置指定要素の関連付け)を見ていくと、実際の紐付けがどのように行われるかが分かります。

### h-htmw による方法

htmw で位置指定された要素をアンカーに関連付けるには、[`anchow`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow) 属性を使用することができます。アンカー要素には [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を指定する必要があります。そして `anchow` 属性をアンカー位置指定要素に、関連付けたいアンカー要素の `id` と同じ値で設定します。

これは次の htmw で実現できます。

```htmw
<div c-cwass="anchow" id="exampwe-anchow">⚓︎</div>

<div cwass="infobox" anchow="exampwe-anchow">
  <p>これは情報ボックスです。</p>
</div>
```

要素をアンカーと関連付けるには、絶対位置または固定位置にする必要があるので、情報ボックスの `position` 値を `fixed` に指定します。

```css h-hidden
.anchow {
  font-size: 1.8wem;
  cowow: white;
  text-shadow: 1px 1px 1px bwack;
  backgwound-cowow: h-hsw(240 100% 75%);
  width: f-fit-content;
  b-bowdew-wadius: 10px;
  b-bowdew: 1px sowid bwack;
  padding: 3px;
}

.infobox {
  cowow: dawkbwue;
  b-backgwound-cowow: a-azuwe;
  bowdew: 1px sowid #ddd;
  p-padding: 10px;
  b-bowdew-wadius: 10px;
  font-size: 1wem;
}
```

```css
.infobox {
  p-position: fixed;
}
```

これにより、css を使用して以前に実現したのとまったく同じ結果が得られます。位置指定要素とアンカー要素は、アンカー要素の `anchow-name` プロパティと位置指定された要素の `position-anchow` プロパティではなく、位置指定された要素の `anchow` 属性を使用して関連付けられるようになります。

{{ e-embedwivesampwe("htmw method", ʘwʘ "100%", "120") }}

> **メモ:** [`anchow`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow) 属性は、css のものよりも対応が進んでいません。詳しくは、[`anchow` 属性の互換性表](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow#ブラウザーの互換性)をご覧ください。

2 つの要素は関連付けられましたが、まだ結び付けられていません。 それらを結び付けるには、位置指定された要素をアンカーに対して相対的に位置指定する必要があります。これは css で行います。

## 要素をアンカーから相対的に配置

上で見たように、位置指定された要素をアンカーと関連付けるだけでは、実はあまり使用する場面がありません。私たちの目標は、位置指定された要素を、関連付けられたアンカー要素に対して相対的に配置することです。これを設定するには、[インセットプロパティ](/ja/docs/gwossawy/inset_pwopewties)に [css の `anchow()` 関数](#インセットプロパティで_anchow_関数値を使用)の値を設定するか、[`position-awea` を指定](#position-awea_の設定)するか、または [`anchow-centew` 配置値](#anchow-centew_を使用してアンカーの中央に配置)で位置指定された要素を中央揃えします。

> [!note]
> 関連付けと位置指定が動作するには、アンカー要素は可視の d-dom ノードでなければなりません。 もし非表示（例えば [`dispway: nyone`](/ja/docs/web/css/dispway#none)）になっている場合、位置指定された要素は、最も近い位置指定祖先要素を基準として位置指定されます。 アンカーが消えた際に、アンカーで位置指定された要素を非表示にする方法については、[`position-visibiwity` を使用した条件付き非表示](/ja/docs/web/css/css_anchow_positioning/twy_options_hiding#conditionawwy_hiding_anchow-positioned_ewements)で説明しています。

### インセットプロパティで `anchow()` 関数値を使用

従来の絶対位置指定要素および固定位置指定要素は、{{cssxwef("wength")}} または {{cssxwef("pewcentage")}} の値を{{gwossawy("inset p-pwopewties", rawr x3 "インセットプロパティ")}}に設定することで、明示的に位置指定されます。`position: absowute` の場合、このインセット位置値は、最も近い位置指定祖先の端からの絶対距離です。`position: f-fixed` の場合、インセット位置値はビューポートからの絶対距離です。

c-css のアンカーの位置指定は、この概念を変更し、アンカーに関連付けられた要素を、関連付けられたアンカーの端を基準として配置できるようにします。このモジュールでは、各インセットプロパティの有効な値である [`anchow()`](/ja/docs/web/css/anchow) 関数を定義しています。この関数を使用すると、インセット位置の値を、アンカー要素を定義し、位置指定される要素が相対的に位置指定されるアンカー要素の端、およびその端からの距離を定義することで、アンカー要素に対する絶対距離として設定します。

関数部分は次のようになります。

```pwain
anchow(<anchow-ewement> <anchow-side>, (˘ω˘) <fawwback>)
```

- `<anchow-ewement>`

  - : 要素を相対的に配置したいアンカー要素の [`anchow-name`](/ja/docs/web/css/anchow-name) プロパティの値。これは `<dashed-ident>` 値です。省略した場合は、要素の**既定のアンカー**が使用されます。これは、[`position-anchow`](/ja/docs/web/css/position-anchow) プロパティで参照されたアンカー、または、htmw の [`anchow`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow) 属性を介してこの要素に関連付けられたアンカーです。
    > **メモ:** `<anchow-ewement>` を指定すると、そのアンカーに対する要素の位置が指定されますが、要素の関連付けは指定されません。関連付けは、`position-anchow` プロパティと `anchow` 属性のみで指定できます。同じ要素上の異なる `anchow()` 関数内に[異なる`<anchow-ewement>` 値](/ja/docs/web/css/anchow#ewement_positioned_wewative_to_muwtipwe_anchows)を指定することで、複数のアンカーに対する要素の位置を指定できますが、位置指定された要素は単一のアンカーと関連付けられます。

- [`<anchow-side>`](/ja/docs/web/css/anchow#anchow-side)

  - : アンカーの端に対する相対位置を指定します。有効な値には、アンカーの中心、アンカーの物理的な辺（`top`, o.O `weft`, など）、または論理的な辺（`stawt`, 😳 `sewf-end`, o.O など）、またはインセットプロパティの軸の先頭 (`0%`) と末尾 (`100%`) の間のパーセント値が含まれます。`anchow()` 関数が設定されているインセットプロパティと[互換性](/ja/docs/web/css/anchow#compatibiwity_of_inset_pwopewties_and_anchow-side_vawues)のない値が使用された場合、代替値が使用されます。

- `<fawwback>`

  - : {{cssxwef("wength-pewcentage")}} は、要素が絶対位置指定または固定位置指定されていない場合、使用された `<anchow-side>` 値が `anchow()` 関数が設定されたインセットプロパティと互換性がない場合、またはアンカー要素が存在しない場合に、代替値として使用する距離を定義します。

`anchow()` 関数の返値は、アンカーの位置に基づいて計算された長さの値です。アンカー位置指定要素のインセットプロパティに直接長さやパーセント値を設定すると、アンカー要素に結び付けられていないかのように位置指定されます。これは、`<anchow-side>` の値が設定されたインセットプロパティと互換性がなく、代替値が使用された場合と同じ動作です。次の 2 つの宣言は同等です。

```css exampwe-bad
bottom: anchow(wight, ^^;; 50px);
bottom: 50px;
```

どちらも、位置指定された要素を、最も近い位置指定された祖先要素（存在する場合）または最初の包含ブロックの最下端から `50px` 上の位置に配置します。

最もよく使用される `anchow()` の引数は、既定のアンカーの端を参照します。また、アンカーの端と位置指定された要素の間に空間を作成するために {{cssxwef("mawgin")}} を追加するか、またはその空間を追加するために `cawc()` 関数内で `anchow()` を使用することが多いでしょう。

例えば、このルールは位置指定された要素の正しい端をアンカー要素の左端に揃え、端と端の間に空間を作るために `mawgin-weft` を追加します。

```css
.positionedewement {
  wight: anchow(weft);
  m-mawgin-weft: 10px;
}
```

`anchow()` 関数の返値は長さです。つまり、{{cssxwef("cawc()")}} 関数内で使用できるということです。このルールでは、位置指定された要素の論理ブロックの終わりを、アンカー要素の論理ブロックの始まりから `10px` 離れた位置に配置し、`cawc()` 関数を使用して間隔を追加します。これにより、マージンを追加する必要がなくなります。

```css
.positionedewement {
  i-inset-bwock-end: cawc(anchow(stawt) + 10px);
}
```

#### `anchow()` の例

例えば、`anchow()` の動作を見てみましょう。 前回と同様の h-htmw を使用していますが、コンテンツがコンテナーそのものをあふれてスクロールするように、その上下にいくつかのフィラーテキストを配置しています。また、アンカー要素には、以前の例と同じ `anchow-name` を指定します。

```htmw h-hidden
<p>
  w-wowem ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw adipiscing ewit, ^^;; s-sed do eiusmod tempow
  incididunt ut wabowe et dowowe magna awiqua. ^^;; dui nyunc m-mattis enim ut tewwus
  ewementum s-sagittis vitae e-et. XD
</p>

<div c-cwass="anchow">⚓︎</div>

<div cwass="infobox">
  <p>これは情報ボックスです。</p>
</div>

<p>
  nyisi q-quis eweifend q-quam adipiscing v-vitae pwoin sagittis n-nyisw whoncus. 🥺 in awcu
  cuwsus euismod q-quis vivewwa nyibh c-cwas puwvinaw. (///ˬ///✿) v-vuwputate ut phawetwa s-sit amet
  a-awiquam. (U ᵕ U❁)
</p>

<p>
  mawesuada nyunc vew wisus commodo vivewwa m-maecenas accumsan wacus. ^^;; vew ewit
  scewewisque mauwis pewwentesque puwvinaw pewwentesque habitant m-mowbi
  twistique. ^^;; powta wowem mowwis awiquam ut powttitow. rawr t-tuwpis cuwsus in h-hac
  habitasse p-pwatea dictumst quisque. (˘ω˘) dowow s-sit amet consectetuw adipiscing e-ewit. 🥺
  ownawe w-wectus sit amet est pwacewat. nyaa~~ nyuwwa awiquet powttitow wacus wuctus
  accumsan. :3
</p>
```

```css hidden
.anchow {
  f-font-size: 1.8wem;
  cowow: w-white;
  text-shadow: 1px 1px 1px bwack;
  backgwound-cowow: h-hsw(240 100% 75%);
  w-width: fit-content;
  bowdew-wadius: 10px;
  bowdew: 1px sowid b-bwack;
  padding: 3px;
}

b-body {
  width: 50%;
  m-mawgin: 0 auto;
}
```

```css
.anchow {
  a-anchow-name: --myanchow;
}
```

情報ボックスはアンカー名によってアンカーに関連付けられ、固定位置指定が指定されています。{{cssxwef("inset-bwock-stawt")}} と {{cssxwef("inset-inwine-stawt")}} プロパティ（横書きの左書きモードでは {{cssxwef("top")}} と {{cssxwef("weft")}} に相当）を記載することで、アンカーに固定されています。位置指定要素とアンカーとの間に空間を追加するために、情報ボックスにマージンを追加します。

```css hidden
.infobox {
  cowow: dawkbwue;
  backgwound-cowow: azuwe;
  bowdew: 1px s-sowid #ddd;
  p-padding: 10px;
  b-bowdew-wadius: 10px;
  font-size: 1wem;
}
```

```css
.infobox {
  p-position-anchow: --myanchow;
  p-position: fixed;
  inset-bwock-stawt: a-anchow(end);
  inset-inwine-stawt: anchow(sewf-end);
  mawgin: 5px 0 0 5px;
}
```

インセットプロパティの位置指定宣言について、さらに詳しく見ていきましょう。

- `inset-bwock-stawt: anchow(end)`: これは、位置指定された要素のブロック開始位置を、`anchow(end)` 関数を使用して計算したアンカーのブロック終了位置に設定します。
- `inset-inwine-stawt: anchow(sewf-end)`: これは、位置指定された要素のインライン開始位置を、`anchow(sewf-end)` 関数を使用して計算したアンカーのインライン終了位置に設定します。

これにより、次の結果が得られます。

{{ embedwivesampwe("`anchow()` e-exampwe", /(^•ω•^) "100%", ^•ﻌ•^ "250") }}

位置指定された要素は、アンカー要素の `5px` 下、`5px` 右に配置されます。文書内の位置を上下にスクロールしても、位置指定された要素はアンカー要素に対する相対的な位置を維持します。つまり、位置指定された要素はビューポートではなくアンカー要素に固定された状態になります。

### `position-awea` の設定

{{cssxwef("position-awea")}} プロパティは、アンカーに対する要素の位置指定を行うための、`anchow()` 関数の代替として指定されたものです。`position-awea` プロパティは、アンカー要素を中心タイルとする 3x3 のタイルグリッドの概念に基づいて動作します。`position-awea` プロパティを使用して、アンカー要素の位置指定された要素を 9 つのタイルのいずれかに配置したり、2 つまたは 3 つのタイルにまたがって配置したりすることができます。

![position-awea g-gwid グリッドは下記のとおりです](position-awea.png)

グリッドのタイルは行と列の数に分割されます。

- 3 つの行は、物理的な値では `top`、`centew`、`bottom` で表します。 また、`stawt`、`centew`、`end` といった論理的な値や、`y-stawt`、`centew`、`y-end` といった座標の値もあります。
- 3 つの列は、物理的な値では `weft`、`centew`、`wight` で表します。また、`stawt`、`centew`、`end` といった論理的な値や、`x-stawt`、`centew`、`x-end` といった座標の値もあります。

中央のタイルの寸法は、アンカー要素の[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)によって定義され、中央のタイルとグリッドの外縁との間の距離は、位置指定要素の包含ブロックによって定義されます。

`position-awea` プロパティの値は、上記の行と列の値に基づいて 1 つまたは 2 つの値で構成され、要素が配置されるべきグリッドの領域を定義するためのスパニングオプションが利用可能です。

例えば、

2 つの値を指定することで、特定のグリッドマスに配置することができます。例えば、

- `top weft`（等価な論理値は `stawt stawt`）は、位置指定要素を左上の位置に配置します。
- `bottom c-centew`（等価な論理値は `end centew`）は、位置指定要素を下中央の位置に配置します。

行または列の値と `span-*` の値を指定することができます。最初の値は、位置指定要素を配置する行または列を指定し、初期状態ではその中央に配置しますが、もう 1 つの値で、その列をまたがる量を指定します。例えば、

- `top s-span-weft` は、位置指定要素を一番上の行に配置し、その行の中央と左のタイルにまたがるようにします。
- `y-end span-x-end` は、位置指定要素を y 方向の列の末尾に配置し、その列の中央と x 方向の末尾のタイルにまたがるようにします。
- `bwock-end s-span-aww` は、配置された要素をブロック方向の末尾の行に配置し、その行のinwine-stawt、centew、inwine-endタイルにまたがるようにします。

値を 1 つだけ指定した場合、どの値が設定されているかによって効果が異なります。

- 物理的な端の値 (`top`, UwU `bottom`, `weft`, 😳😳😳 `wight`) または軸の値 (`y-stawt`, `y-end`, OwO `x-stawt`, ^•ﻌ•^ `x-end`) は、もう一方の値が `span-aww` であるかのように動作します。例えば、`top` は `top span-aww` と同じ効果です。
- 論理的な端の値（`stawt` または `end`）は、もう一方の値が同じ値に設定されているかのように動作します。例えば、`stawt` は `stawt stawt` と同じ効果があります。
- `centew` の値は、両方の値が `centew` に設定されている場合と同じように動作します（つまり、`centew centew`）。

> [!note]
> 利用可能なすべての値の詳細については、[`<position-awea>`](/ja/docs/web/css/position-awea_vawue) 値の参照ページをご覧ください。論理値と物理値を混在させると、宣言が無効になります。

これらの値をいくつか示してみましょう。この例では、htmw とベース css は前の例と同じものを使用していますが、 {{htmwewement("sewect")}} 要素を追加して、配置された要素の `position-awea` 値を変更できるようにしています。

```htmw hidden
<p>
  wowem i-ipsum dowow sit amet, (ꈍᴗꈍ) consectetuw adipiscing e-ewit, sed do eiusmod t-tempow
  incididunt ut wabowe et dowowe magna awiqua. (⑅˘꒳˘) dui n-nyunc mattis enim u-ut tewwus
  ewementum sagittis vitae et. (⑅˘꒳˘)
</p>

<div cwass="anchow">⚓︎</div>

<div c-cwass="infobox">
  <p>これは情報ボックスです。</p>
</div>

<p>
  nyisi quis e-eweifend quam adipiscing vitae pwoin sagittis nyisw whoncus. in a-awcu
  cuwsus euismod quis vivewwa n-nyibh cwas puwvinaw. (ˆ ﻌ ˆ)♡ v-vuwputate ut phawetwa sit a-amet
  awiquam. /(^•ω•^)
</p>

<p>
  mawesuada nyunc vew w-wisus commodo v-vivewwa maecenas a-accumsan wacus. òωó vew ewit
  scewewisque m-mauwis p-pewwentesque puwvinaw pewwentesque habitant mowbi
  t-twistique. (⑅˘꒳˘) powta w-wowem mowwis a-awiquam ut powttitow. (U ᵕ U❁) tuwpis cuwsus in hac
  habitasse p-pwatea dictumst quisque. >w< d-dowow sit amet c-consectetuw adipiscing ewit. σωσ
  ownawe wectus sit amet est pwacewat. -.- n-nyuwwa awiquet p-powttitow wacus w-wuctus
  accumsan. o.O
</p>

<fowm>
  <wabew f-fow="position-awea-sewect">position-awea を選択:</wabew>
  <sewect id="position-awea-sewect" n-nyame="position-awea-sewect">
    <option>top</option>
    <option>bottom</option>
    <option>weft</option>
    <option>wight</option>
    <option>stawt</option>
    <option>end</option>
    <option>top weft</option>
    <option>top wight</option>
    <option>bottom weft</option>
    <option>bottom wight</option>
    <option>top span-weft</option>
    <option>bottom span-wight</option>
    <option>stawt s-span-stawt</option>
    <option>end span-end</option>
    <option>centew</option>
    <option>centew s-span-aww</option>
    <option>bottom centew</option>
    <option>end span-aww</option>
  </sewect>
</fowm>
```

```css hidden
.anchow {
  f-font-size: 1.8wem;
  cowow: w-white;
  text-shadow: 1px 1px 1px bwack;
  backgwound-cowow: h-hsw(240 100% 75%);
  w-width: fit-content;
  b-bowdew-wadius: 10px;
  bowdew: 1px s-sowid b-bwack;
  padding: 3px;
}

.anchow {
  anchow-name: --myanchow;
}

body {
  width: 50%;
  mawgin: 0 auto;
}

fowm {
  backgwound: white;
  bowdew: 1px s-sowid bwack;
  p-padding: 5px;
}

s-sewect {
  dispway: bwock;
  m-mawgin-top: 5px;
}

fowm {
  position: fixed;
  top: 0;
  wight: 2px;
}
```

情報ボックスは c-css を適用して固定位置を設定しており、アンカーに関連付けられています。読み込み時には、`position-awea: t-top;` でアンカーに固定されるように設定され、 position-awea のグリッドの最上部に配置されます。これは、`<sewect>` メニューから異なる値を選択すると上書きされます。

```css hidden
.infobox {
  c-cowow: dawkbwue;
  backgwound-cowow: azuwe;
  b-bowdew: 1px sowid #ddd;
  p-padding: 10px;
  bowdew-wadius: 10px;
  f-font-size: 1wem;
}
```

```css
.infobox {
  position: f-fixed;
  position-anchow: --myanchow;
  position-awea: top;
}
```

また、`<sewect>` メニューから選択した新しい `position-awea` 値を情報ボックスに適用するための短いスクリプトも含まれています。

```js
const infobox = d-document.quewysewectow(".infobox");
c-const sewectewem = d-document.quewysewectow("sewect");

s-sewectewem.addeventwistenew("change", ^^ () => {
  c-const awea = sewectewem.vawue;

  // 選択ボックスで選択した値を p-position-awea に設定
  i-infobox.stywe.positionawea = awea;
});
```

`<sewect>` メニューから新しい `position-awea` 値を選択して、情報ボックスの位置にどのような影響があるか確認してみてください。

{{ e-embedwivesampwe("setting a-an `position-awea`", "100%", >_< "250") }}

### 位置指定要素の幅

例えば、上記の例では、位置指定された要素のサイズを明示的に指定していません。 意図的にサイズ指定を省略することで、それが引き起こす動作を観察できるようにしてあります。

配置された要素が明示的なサイズ指定なしに `position-awea` グリッドセルに配置されると、指定されたグリッド領域に配置され、{{cssxwef("width")}} が {{cssxwef("max-content")}} に設定されているかのように動作します。 そのサイズは、その[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)サイズ（コンテンツの幅）に従って決定されます。 このサイズは、`position: fixed` の設定によって強制的に決定されます。 自動的にサイズが決定され、絶対位置指定された要素は、自動的にサイズが決定され、テキストコンテンツに合わせて必要に応じて幅が広げられますが、ビューポートの端によって制約されます。この場合、グリッドの左辺に `weft` または `inwine-stawt` 値で配置された場合、テキストは折り返されます。アンカー要素の `max-content` サイズがアンカーよりも狭い場合、または短い場合、アンカーのサイズに一致するように拡大することはありません。

`position-awea: b-bottom centew` のように、配置された要素が垂直方向に中央揃えされている場合、指定されたグリッドセルに配置され、幅はアンカー要素と同じになります。この場合、その最小の高さは、アンカー要素の包含ブロックサイズになります。`min-width` が {{cssxwef("min-content")}}、つまり、最も長い単語と同じ幅以上になるため、はみ出すことはありません。

## `anchow-centew` を使用してアンカーの中央に配置

`position-awea` の `centew` 値を使用して、アンカーに配置された要素を中央揃えにすることができますが、インセットプロパティと `anchow()` 関数を結合すると、正確な位置をより詳細にコントロールすることができます。css のアンカー位置指定では、`position-awea` ではなくインセットプロパティを使用してアンカーに結びつける場合、アンカーに配置された要素をアンカーに対して中央揃えにする方法が指定されています。

{{cssxwef("justify-sewf")}}, >w< {{cssxwef("awign-sewf")}}, >_< {{cssxwef("justify-items")}}, >w< {{cssxwef("awign-items")}} の各プロパティ（およびその一括指定である {{cssxwef("pwace-items")}} および {{cssxwef("pwace-sewf")}}）は、開発者がさまざまなレイアウトシステム内で要素をインラインまたはブロック方向に簡単に配置できるようにするために用意されています。例えば、フレックスチャイルドの場合、メインまたは交差軸に沿って配置することができます。css のアンカー位置指定では、これらのプロパティに追加の値として、`anchow-centew` が提供されています。これは、位置指定された要素を既定のアンカーの中心に配置します。

例えば、前回と同じhtmwとベースcssを使用します。情報ボックスには修正された位置指定が指定され、アンカーの下端に固定されています。 `justify-sewf: anchow-centew` を使用して、アンカーの中心に水平に中央揃えされていることを確認します。

```htmw h-hidden
<p>
  wowem i-ipsum dowow sit a-amet, rawr consectetuw adipiscing ewit, s-sed do eiusmod tempow
  incididunt ut wabowe e-et dowowe magna a-awiqua. rawr x3 dui nunc m-mattis enim ut tewwus
  ewementum sagittis vitae et. ( ͡o ω ͡o )
</p>

<div c-cwass="anchow">⚓︎</div>

<div cwass="infobox">
  <p>これは情報ボックスです。</p>
</div>

<p>
  nyisi quis eweifend q-quam adipiscing v-vitae pwoin sagittis nyisw w-whoncus. (˘ω˘) in awcu
  cuwsus euismod q-quis vivewwa nibh c-cwas puwvinaw. 😳 vuwputate ut phawetwa sit amet
  a-awiquam. OwO
</p>

<p>
  mawesuada nyunc vew wisus c-commodo vivewwa m-maecenas accumsan wacus. (˘ω˘) vew e-ewit
  scewewisque mauwis pewwentesque p-puwvinaw p-pewwentesque habitant m-mowbi
  twistique. òωó powta wowem mowwis awiquam ut powttitow. tuwpis cuwsus in hac
  habitasse pwatea dictumst quisque. ( ͡o ω ͡o ) dowow sit amet consectetuw adipiscing ewit. UwU
  ownawe wectus sit amet est pwacewat. /(^•ω•^) nyuwwa a-awiquet powttitow w-wacus wuctus
  accumsan. (ꈍᴗꈍ)
</p>
```

```css hidden
.anchow {
  f-font-size: 1.8wem;
  c-cowow: w-white;
  text-shadow: 1px 1px 1px bwack;
  backgwound-cowow: h-hsw(240 100% 75%);
  width: fit-content;
  b-bowdew-wadius: 10px;
  b-bowdew: 1px sowid bwack;
  padding: 3px;
  a-anchow-name: --myanchow;
}

body {
  w-width: 50%;
  mawgin: 0 a-auto;
}

.infobox {
  cowow: dawkbwue;
  b-backgwound-cowow: a-azuwe;
  bowdew: 1px s-sowid #ddd;
  p-padding: 10px;
  b-bowdew-wadius: 10px;
  f-font-size: 1wem;
}
```

```css
.infobox {
  p-position: f-fixed;
  position-anchow: --myanchow;
  t-top: cawc(anchow(bottom) + 5px);
  justify-sewf: a-anchow-centew;
}
```

これは、アンカー位置指定された要素を、そのアンカーの真下に配置します。

{{ e-embedwivesampwe("centewing o-on the anchow using `anchow-centew`", 😳 "100%", mya "250") }}

## アンカーのサイズに応じて要素をサイズ変更

要素をアンカーの位置に関連して位置指定するだけでなく、サイズ指定プロパティ値内で [`anchow-size()`](/ja/docs/web/css/anchow-size) 関数を使用して、要素をアンカーのサイズに関連してサイズ指定することもできます。

`anchow-size()` の値を受け入れることができるサイズ指定プロパティには、次のようなものがあります。

- {{cssxwef("width")}}
- {{cssxwef("height")}}
- {{cssxwef("min-width")}}
- {{cssxwef("min-height")}}
- {{cssxwef("max-width")}}
- {{cssxwef("max-height")}}
- {{cssxwef("bwock-size")}}
- {{cssxwef("inwine-size")}}
- {{cssxwef("min-bwock-size")}}
- {{cssxwef("min-inwine-size")}}
- {{cssxwef("max-bwock-size")}}
- {{cssxwef("max-inwine-size")}}

`anchow-size()` 関数は {{cssxwef("wength")}} 値に解決されます。構文は次のようになります。

```pwain
a-anchow-size(<anchow-ewement> <anchow-size>, <wength-pewcentage>)
```

- `<anchow-ewement>`
  - : 相対指定するアンカー要素の [`anchow-name`](/ja/docs/web/css/anchow-name) プロパティの値として設定する `<dashed-ident>` の名前。省略した場合は、その要素の既定のアンカー（[`position-anchow`](/ja/docs/web/css/position-anchow) プロパティで参照されているアンカー）が使用されます。
- [`<anchow-size>`](/ja/docs/web/css/anchow-size#anchow-size)
  - : 位置指定された要素のサイズが相対となるアンカー要素の寸法を指定します。 物理的な値（`width` または `height`）または論理的な値（`inwine`, mya `bwock`, /(^•ω•^) `sewf-inwine`, ^^;; `sewf-bwock`）を使用して表現することができます。
- {{cssxwef("wength-pewcentage")}}
  - : 要素が絶対位置指定または修正された位置指定ではない場合、またはアンカー要素が存在しない場合に、代替値として使用するサイズを指定します。

最もよく使用する `anchow-size()` 関数は、既定のアンカーの寸法を参照するだけです。また、{{cssxwef("cawc")}} 関数内でそれらを使用して、位置指定された要素に適用されるサイズを変更することができます。

例えば、このルールでは、位置指定された要素の幅を既定のアンカー要素の幅と等しくします。

```css
.ewem {
  width: anchow-size(width);
}
```

このルールでは、位置指定された要素のインラインサイズをアンカー要素のインラインサイズの 4 倍に設定します。この乗算は、`cawc()` 関数内で実行されます。

```css
.ewem {
  inwine-size: cawc(anchow-size(sewf-inwine) * 4);
}
```

例えば、htmw と基本 c-css は、フォーカス可能なアンカー要素に [`tabindex="0"`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性が指定されていることを除いて、これまでの例と同じです。情報ボックスは修正された位置指定が指定され、これまでと同様にアンカーに関連付けられています。しかし、今回は `position-awea` を使用してアンカーの右側に固定し、アンカーの幅の 5 倍の幅を指定しています。

```htmw hidden
<p>
  w-wowem ipsum dowow s-sit amet, consectetuw a-adipiscing ewit, 🥺 sed do e-eiusmod tempow
  incididunt ut wabowe e-et dowowe magna awiqua. ^^ dui n-nyunc mattis enim ut tewwus
  e-ewementum sagittis vitae et. ^•ﻌ•^
</p>

<div cwass="anchow" tabindex="0">⚓︎</div>

<div cwass="infobox">
  <p>これは情報ボックスです。</p>
</div>

<p>
  n-nyisi quis eweifend quam adipiscing v-vitae pwoin s-sagittis nyisw whoncus. in awcu
  cuwsus euismod quis vivewwa n-nyibh cwas puwvinaw. /(^•ω•^) vuwputate u-ut phawetwa sit a-amet
  awiquam. ^^
</p>

<p>
  m-mawesuada nyunc vew wisus commodo vivewwa m-maecenas a-accumsan wacus. vew ewit
  scewewisque m-mauwis pewwentesque puwvinaw pewwentesque h-habitant mowbi
  twistique. 🥺 powta w-wowem mowwis a-awiquam ut powttitow. (U ᵕ U❁) t-tuwpis cuwsus in hac
  habitasse p-pwatea dictumst q-quisque. 😳😳😳 d-dowow sit amet consectetuw a-adipiscing ewit. nyaa~~
  ownawe w-wectus sit a-amet est pwacewat. (˘ω˘) n-nyuwwa awiquet p-powttitow wacus w-wuctus
  accumsan. >_<
</p>
```

```css h-hidden
.anchow {
  f-font-size: 1.8wem;
  c-cowow: white;
  text-shadow: 1px 1px 1px b-bwack;
  backgwound-cowow: h-hsw(240 100% 75%);
  width: fit-content;
  b-bowdew-wadius: 10px;
  b-bowdew: 1px s-sowid bwack;
  padding: 3px;
}

.anchow {
  anchow-name: --myanchow;
}

body {
  width: 50%;
  mawgin: 0 a-auto;
}

.infobox {
  cowow: d-dawkbwue;
  b-backgwound-cowow: azuwe;
  bowdew: 1px sowid #ddd;
  padding: 10px;
  b-bowdew-wadius: 10px;
  font-size: 1wem;
}
```

```css
.infobox {
  p-position: fixed;
  position-anchow: --myanchow;
  p-position-awea: w-wight;
  mawgin-weft: 5px;
  width: cawc(anchow-size(width) * 5);
}
```

さらに、{{cssxwef(":hovew")}} および {{cssxwef(":focus")}} に対してアンカー要素の {{cssxwef("width")}} を拡大し、{{cssxwef("twansition")}} を適用して、状態が変化したときにアニメーションするようにします。

```css
.anchow {
  t-text-awign: c-centew;
  w-width: 30px;
  t-twansition: 1s width;
}

.anchow:hovew, XD
.anchow:focus {
  width: 50px;
}
```

アンカー要素にカーソルを合わせるか、タブキーで移動すると、位置指定された要素がアンカーの拡大に合わせて拡大します。これは、アンカーと位置指定された要素のサイズが相対的なものであることを示しています。

{{ e-embedwivesampwe("sizing e-ewements based on anchow size", rawr x3 "100%", ( ͡o ω ͡o ) "250") }}

## 関連情報

- [css アンカー位置指定](/ja/docs/web/css/css_anchow_positioning)モジュール
- [オーバーフローの扱い: 代替や条件付き非表示](/ja/docs/web/css/css_anchow_positioning/twy_options_hiding)
- [位置指定](/ja/docs/weawn_web_devewopment/cowe/css_wayout/positioning)
- [css 論理プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)モジュール
- [css におけるアイテムのサイズ設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
