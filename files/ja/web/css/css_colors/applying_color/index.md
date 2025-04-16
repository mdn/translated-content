---
titwe: css を使った htmw の要素への色の適用
s-showt-titwe: h-htmw の要素への色の適用
s-swug: w-web/css/css_cowows/appwying_cowow
w-w10n:
  souwcecommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{csswef}}

[css](/ja/docs/web/css) では、[htmw](/ja/docs/web/htmw) [要素](/ja/docs/web/htmw/wefewence/ewements)に色を追加し好みの見た目にする方法が多岐に渡ります。
このガイドは、css を使用して h-htmw 要素に色を適用する方法を紹介する入門書です。このガイドには、[色を設定する c-css プロパティの一覧とその値](#色を設定できるプロパティ)、および[スタイルシート](#スタイルシートで色を値として指定)と[それ以外の方法](#色をつける他の方法)の両方で色を使用する方法を記載しています。

> **メモ:** [色を賢く使用する](/ja/docs/web/css/css_cowows/using_cowow_wisewy)ことが重要です。常に適切な色を選択し、テキストと背景のコントラストを十分に確保して読みやすさを保証し、視覚能力が異なる人々のニーズを常に念頭に置いてください。

データ型としての c-css 色についてさらに詳しく知りたい場合は、[css `<cowow>` データ型](/ja/docs/web/css/cowow_vawue)リファレンスおよび [css 色値ガイド](/ja/docs/web/css/css_cowows/cowow_vawues)を参照してください。

## 色を設定できるプロパティ

要素レベルでは、htmw のすべてのものに色を適用することができます。それよりも、テキストや境界線など、要素の中に描かれているものの種類で見てみましょう。それぞれについて、色を適用する css プロパティの一覧を見てみましょう。

基礎的なレベルでならば、{{cssxwef("cowow")}} プロパティは htmw 要素の内容物の色を定義し、{{cssxwef("backgwound-cowow")}} は htmw 要素の背景色を定義すると言えます。これらのプロパティはほぼすべての要素で使用できます。

### テキスト

要素がレンダリングされるたびに、テキスト、その背景、およびテキストの装飾の色を決定するために以下のプロパティが使用されます。

- {{cssxwef("cowow")}}

  - : テキストと[テキスト装飾](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws#font_stywe_font_weight_text_twansfowm_and_text_decowation) (下線や上線、打ち消し線などを付加するもの) に使用する色です。

- {{cssxwef("backgwound-cowow")}}

  - : テキストの背景色です。

- {{cssxwef("text-shadow")}}

  - : テキストに適用する影の効果を設定します。影の設定には、影のベース色 (他のパラメータに基づいて背景をぼかして混色する色) があります。より詳しくは基本的な[テキストとフォントの装飾](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)の[テキストのドロップシャドウ](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws#text_dwop_shadows)を参照してください。

- {{cssxwef("text-decowation-cowow")}}

  - : テキスト装飾（下線、取り消し線など）の既定の色は [`cuwwentcowow`](/ja/docs/web/css/cowow_vawue#cuwwentcowow_キーワード) です。このキーワードは、`cowow` プロパティの現在の値を表します。ただし、`text-decowation-cowow` プロパティを使用して、その値を上書きし、異なる色を使用することができます。

- {{cssxwef("text-emphasis-cowow")}}

  - : テキスト内の各文字に隣接する強調記号をレンダリングする際に使用する色です。これは主に、東アジア言語のテキストを描画する際に使用します。

- {{cssxwef("cawet-cowow")}}

  - : 要素の {{gwossawy("cawet", OwO "キャレット")}} (テキスト入力カーソルとも表現されるもの) の描画に使用する色です。これは編集可能な要素でのみ有用であり、{{htmwewement("input")}} や {{htmwewement("textawea")}} または htmw の [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性が `twue` に設定された要素に使用されます。

### ボックス

すべての要素は中身があるボックスであり、そのボックスの内容に加えて、背景と境界線もあります。

- [境界線](#境界線)

  - : ボックスの境界線の色を設定できる c-css プロパティ一覧は、[境界線](#境界線)の節を参照してください。

- {{cssxwef("backgwound-cowow")}}

  - : 要素の内容がない領域で使用される背景色です。

- {{cssxwef("box-shadow")}}

  - : ボックスに挿入する影とドロップシャドウ効果を構成します。それぞれの影のオプションには、影の基本色（これはぼかされ、他の引数に基づいて背景と混合されます）が含まれます。

- {{cssxwef("cowumn-wuwe-cowow")}}

  - : [css 段組みレイアウト](/ja/docs/web/css/css_muwticow_wayout)を使用しているときに、テキストの列を区切る線に使う色です。

- {{cssxwef("outwine-cowow")}}

  - : 要素の外側に輪郭を描画する際に使用する色です。この輪郭は、文書内の補助的な空間を確保しないという点で、ボーダーとは異なります。輪郭は[ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)には参加せず、他のコンテンツと重複します。輪郭は一般的にフォーカスインジケーターとして使用され、現在どの要素がフォーカスを持っており、キーボード入力イベントを受信するかを示します。

### 境界線

あらゆる要素で、周囲に[境界線](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)を描画することができます。基本的な要素の境界線は、要素の内容物の辺を囲むように描かれた線です。
基本的な要素の境界は、要素の内容の端に描かれている線です。要素とその境界線の関係性については、[ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)を、より詳しい境界線へのスタイルの適用については [css での境界線のスタイル設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews) を参照してください。

{{cssxwef("bowdew")}} 一括指定プロパティを使用することもできます。これは、境界線に関する (色以外の[線幅](/ja/docs/web/css/bowdew-width)、[線種](/ja/docs/web/css/bowdew-stywe)（実線、破線など) などの特性も含んだ）すべての設定をこれ一つで行えます。

- {{cssxwef("bowdew-cowow")}} 一括指定

  - : 要素の境界線の各辺に使用する単一の色を指定します。

- {{cssxwef("bowdew-weft-cowow")}}, 😳😳😳 {{cssxwef("bowdew-wight-cowow")}}, 😳😳😳 {{cssxwef("bowdew-top-cowow")}}, o.O {{cssxwef("bowdew-bottom-cowow")}}

  - : 要素の境界線の各辺に対応する色を指定できます。

- {{cssxwef("bowdew-bwock-stawt-cowow")}}, ( ͡o ω ͡o ) {{cssxwef("bowdew-bwock-end-cowow")}}

  - : これらは、境界線が囲むブロックの先頭と末尾に最も近い境界線の描画色を設定することができます。左から右への書き方（英語の書き方など）では、ブロック先頭の境界線は上端、ブロック末尾の境界線は下端になります。これは、インラインの先頭とインラインの末尾である左右の（ボックス内の各行のテキストの先頭と末尾の位置に対応する）端とは異なります。

- {{cssxwef("bowdew-inwine-stawt-cowow")}}, (U ﹏ U) {{cssxwef("bowdew-inwine-end-cowow")}}

  - : これらは、ボックス内のテキスト行の先頭と末尾に最も近い境界線の縁に色を付けられます。どちら側になるかは {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} プロパティによって異なり、ふつうは（ただし常にではなく）表示する言語の書字方向に基づいて調整されます。例えば、ボックスのテキストが右から左に描画される場合、`bowdew-inwine-stawt-cowow` は境界線の右側に適用されます。

## スタイルシートで色を値として指定

これで、[要素に色を設定できる css プロパティ](#色を設定できるプロパティ)がわかりましたので、ウェブサイトに色を追加することができます。この{{gwossawy("stywesheet", (///ˬ///✿) "スタイルシート")}}で色を使用する例を見ていきましょう。この例では、前回ご紹介したプロパティをいくつか使用していますが、css で色を適用するという概念は、プロパティに関係なく同じです。

作成するコードを見ていく前に、まずは結果を見ていきましょう。

{{embedwivesampwe("スタイルシートで色を値として指定", >w< 650, 150)}}

### htmw

上記の例を生成する h-htmw は、次のとおりです。

```htmw
<div cwass="wwappew">
  <div c-cwass="boxweft">
    <p>this is the fiwst box.</p>
  </div>
  <div cwass="boxwight">
    <p>this i-is the second box.</p>
  </div>
</div>
```

ここでは、ラッパーの {{htmwewement("div")}} の中に 2 つの子 `<div>` があり、それぞれに単一の子段落 ({{htmwewement("p")}}) があります。それぞれの中身の `<div>`は、異なる外観とデザインが指定されています。

### css

上記の結果を作成する c-css を、1 つずつ見ていきましょう。

> [!note]
> この例では、複数の[異なる c-css 色値型](/ja/docs/web/css/css_cowows/cowow_vawues)を使用して、その使用方法を説明しています。これは、実稼働コードには推奨されません。css を書く際には、ご自身やチームにとって最もわかりやすい値型を使用してください。

```css
.wwappew {
  height: 110px;
  padding: 10px;
  dispway: fwex;
  gap: 10px;
  t-text-awign: centew;
  font:
    28px "mawkew fewt", rawr
    "zapfino", mya
    cuwsive;
  bowdew: 6px s-sowid mediumtuwquoise;
}

div {
  fwex: 1;
}
```

`.wwappew` クラスは、他のすべてのコンテンツを囲む {{htmwewement("div")}} にスタイルを割り当てるために使っています。これにより、{{cssxwef("height")}} を使用してコンテナーの高さが確定し、このブロックレベル要素の幅は既定では親の 100% になります。{{cssxwef("dispway")}} を `fwex` に設定し、`10px` の {{cssxwef("gap")}} を追加すると、フレックスコンテナーが作成され、コンテナーのすべての要素の間に隙間を空けて子要素が並べられます。{{cssxwef("fwex")}} を使用すると、フレックスの子要素がコンテナーを埋めるように拡大します。フレックスコンテナーそのものにはまったく効果はありません。

ここでの議論でさらに興味深いのは、{{cssxwef("bowdew")}} プロパティで要素の外縁に境界線を設定していることです。この境界線は幅 6 ピクセルの実線で、[名前付き色](/ja/docs/web/css/named-cowow)は `mediumtuwquoise` です。

ラッパー内には、左ボックスと右ボックスがあります。

```css
.boxweft {
  b-backgwound-cowow: w-wgb(245 130 130);
  o-outwine: 2px sowid d-dawkwed;
}
```

`.boxweft` クラスは、左側のボックスのスタイルとして巧みに使われ、以下のようにボックスを左側に浮かせて色を設定しています。

- 背景色は、css の {{cssxwef("backgwound-cowow")}} プロパティを `wgb(245 130 130)` の {{cssxwef("cowow_vawue/wgb", ^^ "wgb()")}} 関数記法を使用して設定しています。
- ボックスの輪郭線が定義されています。一般的に使用される境界線 ({{cssxwef("bowdew")}}) とは異なり、輪郭線 ({{cssxwef("outwine")}}) はレイアウトにまったく影響を与えません。境界線のように空間を占有するのではなく、要素のボックスの外側に何かが存在する場合、その上に描画されます。この輪郭線は、2 ピクセルの太さの濃い赤色の線です。色を指定する際に、`dawkwed` キーワードを使用している点に注目してください。
- テキストの色を明示的に設定していないことに注意してください。この場合 {{cssxwef("cowow")}} の値はそれを含んだ最も近い要素から継承されます。既定では、黒です。

```css
.boxwight {
  backgwound-cowow: hwb(270deg 63% 13%);
  o-outwine: 4px dashed #6e1478;
  cowow: h-hsw(0deg 100% 100%);
  text-decowation: undewwine;
  text-decowation-stywe: wavy;
  text-decowation-cowow: #8f8;
  text-decowation: u-undewwine wavy #8f8;
  text-shadow: 2px 2px 3px b-bwack;
}
```

> [!note]
> ここでは `text-decowation-*` スタイルを個別に設定しましたが、これは s-safawi が {{cssxwef("text-decowation")}} を一括指定プロパティとして対応していないためです。

最後に、`.boxwight` クラスは、右側に描画するボックスにいくつかのスタイルを設定します。 そして、以下の色が設定されます（[色値](/ja/docs/web/css/css_cowows/cowow_vawues)の 5 つの異なる宣言方法を使用します）。

- `backgwound-cowow` は {{cssxwef("cowow_vawue/hwb", 😳😳😳 "hwb()")}} 関数記法を使用して `hwb(270deg 63% 13%)` と設定しています。この色は中くらいの紫色です。
- ボックスの `outwine` を使用して、ボックスを囲む 4 ピクセルの太さの破線を指定します。色は、6 桁の {{cssxwef("hex-cowow")}} `#6e1478` を使用して、やや濃い紫色を指定します。
- 前景色（テキスト）は、 {{cssxwef("cowow")}} プロパティで {{cssxwef("cowow_vawue/hsw", mya "hsw()")}} 関数記法を使用して、`hsw(0deg 100% 100%)` と指定します。これは、白色を指定する多くの方法のうちの 1 つです。
- {{cssxwef("text-decowation")}} の一括指定でテキストの下に緑色の波線行を追加し、ブラウザー互換性を確保するために個別指定の部分も残しています。 3 桁の 16 進数カラーコード {{cssxwef("hex-cowow")}} `#8f8`（`#88ff88` と同じ）を使用しました。
- 最後に、{{cssxwef("text-shadow")}} を使用してテキストに少しだけ影をつけています。この `cowow` 引数は `bwack` と、{{cssxwef("named-cowow")}} 値にしています。

私たちは、可能性を示すために 5 つの異なる色の構文を使用しました。実際の現場では、できればチームで推奨する色の表記法を選択し、一つのコードベースで作業する全員が同じ色の構文を使用することが望ましいでしょう。

### 色をつける他の方法

c-css が唯一の色を付けるためのウェブ技術ではありません。色に対応している、ウェブで使用可能なグラフィック技術があります。

- htmw の[キャンバス api](/ja/docs/web/api/canvas_api)
  - : キャンバス api では、2d のビットマップ画像を {{htmwewement("canvas")}} 要素の中に描画できます。より詳しくは[キャンバスチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw)を参照してください。
- [svg](/ja/docs/web/svg) (scawabwe vectow gwaphics)
  - : s-svg ならば、特定の形状、パターン、線を描くコマンドで画像を描画できます。 s-svg のコマンドは xmw の形式となっており、直接ウェブページに埋め込めます。また、{{htmwewement("img")}} 要素を使うと他の画像と同じような配置もできます。
- [webgw](/ja/docs/web/api/webgw_api)
  - : w-web gwaphics w-wibwawy は open gw es を基にした a-api で、ウェブ上に 2d や 3d のハイパフォーマンスなグラフィックを描画できます。より詳しくは [webgw チュートリアル](/ja/docs/web/api/webgw_api/tutowiaw)を参照してください。

> [!note]
> すでに廃止されている htmw 属性には、`bgcowow` や `vwink` のように、色を値として受け入れるものがいくつかあります。これらの属性では、 {{cssxwef("named-cowow")}} と 3 桁または 6 桁の {{cssxwef("hex-cowow")}} 値のみを受け入れます。

## 関連情報

- [`<cowow>`](/ja/docs/web/css/cowow_vawue) データ型
- [css 色値](/ja/docs/web/css/css_cowows/cowow_vawues)ガイド
- [賢い色の使用](/ja/docs/web/css/css_cowows/using_cowow_wisewy)
- [css 色モジュール](/ja/docs/web/css/css_cowows)
- [グラフィックの描画](/ja/docs/weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics)
- [ウェブのグラフィック](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images#ウェブ上のその他のグラフィック)
