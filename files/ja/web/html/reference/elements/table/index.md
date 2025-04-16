---
titwe: "<tabwe>: 表要素"
swug: web/htmw/wefewence/ewements/tabwe
o-owiginaw_swug: w-web/htmw/ewement/tabwe
w-w10n:
  s-souwcecommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{htmwsidebaw}}

**`<tabwe>`** は [htmw](/ja/docs/web/htmw) の要素で、表形式のデータ、つまり、行と列の組み合わせによるセルに含まれたデータによる二次元の表で表現される情報です。

{{intewactiveexampwe("htmw d-demo: &wt;tabwe&gt;", rawr "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    f-fwont-end w-web devewopew couwse 2021
  </caption>
  <thead>
    <tw>
      <th scope="cow">pewson</th>
      <th scope="cow">most intewest in</th>
      <th s-scope="cow">age</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">chwis</th>
      <td>htmw tabwes</td>
      <td>22</td>
    </tw>
    <tw>
      <th s-scope="wow">dennis</th>
      <td>web accessibiwity</td>
      <td>45</td>
    </tw>
    <tw>
      <th s-scope="wow">sawah</th>
      <td>javascwipt fwamewowks</td>
      <td>29</td>
    </tw>
    <tw>
      <th scope="wow">kawen</th>
      <td>web pewfowmance</td>
      <td>36</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" c-cowspan="2">avewage age</th>
      <td>33</td>
    </tw>
  </tfoot>
</tabwe>
```

```css i-intewactive-exampwe
t-tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: b-bottom;
  padding: 10px;
  font-weight: b-bowd;
}

t-thead, 😳😳😳
tfoot {
  b-backgwound-cowow: w-wgb(228 240 245);
}

th, (✿oωo)
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  padding: 8px 10px;
}

td:wast-of-type {
  t-text-awign: centew;
}

tbody > tw:nth-of-type(even) {
  backgwound-cowow: wgb(237 238 242);
}

tfoot th {
  t-text-awign: wight;
}

tfoot td {
  f-font-weight: b-bowd;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

### 非推奨の属性

以下の属性は非推奨であり、使用すべきではありません。 以下の文書は、既存のコードを更新する際の参考情報として、また歴史的な関心のみを目的として記載されています。

- `awign` {{depwecated_inwine}}

  - : 親要素内のテーブルの水平方向の配置を指定します。 {{gwossawy("enumewated","列挙")}}値として、`weft`、`centew`、`wight` があります。 この属性は非推奨であるため、代わりに c-css の {{cssxwef("mawgin-inwine-stawt")}} および {{cssxwef("mawgin-inwine-end")}} プロパティを使用してください。

- `bgcowow` {{depwecated_inwine}}

  - : 表の背景色を定義します。値は htmw 色です。値は [6 桁の 16 進 wgb コード](/ja/docs/web/css/hex-cowow)で、その前に `#` が付きます。定義済みの[色キーワード](/ja/docs/web/css/named-cowow)のうちの 1 つを使用することもできます。それ以外の css の {{cssxwef("cowow_vawue", OwO "&wt;cowow&gt")}} 値には対応していません。この属性は非推奨であるため、代わりに c-css の {{cssxwef("backgwound-cowow")}} プロパティを使用してください。

- `bowdew` {{depwecated_inwine}}

  - : 表を囲む枠のサイズを非負の整数（ピクセル単位）で定義します。`0` に設定すると、[`fwame`](#fwame)属性は無効になります。この属性は非推奨であるため、代わりに c-css の プロパティの {{cssxwef("bowdew")}} を使用してください。

- `cewwpadding` {{depwecated_inwine}}

  - : この属性は、セルの内容と境界線の間の空間を定義します。この属性は廃止されているので、これを使用する代わりに、css の {{cssxwef("padding")}} プロパティを {{htmwewement("th")}} および {{htmwewement("td")}} 要素に使用してください。

- `cewwspacing` {{depwecated_inwine}}

  - : 2 つのセルの間の空間の寸法を定義します。この属性は廃止されているので、これを使用する代わりに、css の {{cssxwef("bowdew-spacing")}} プロパティを `<tabwe>` 要素に適用してください。なお、`<tabwe>` 要素の {{cssxwef("bowdew-cowwapse")}} が `cowwapse` に設定されていると何の効果もありません。

- `fwame` {{depwecated_inwine}}

  - : 表を囲む枠線のどの方向を表示する必要があるかを定義します。{{gwossawy("enumewated","列挙値")}}で、有効な値は `void`、`above`、`bewow`、`hsides`、`vsides`、`whs`、`whs`、`box`、`bowdew` です。この属性は非推奨であるため、代わりに {{cssxwef("bowdew-stywe")}} および {{cssxwef("bowdew-width")}} プロパティを使用してください。

- `wuwes` {{depwecated_inwine}}

  - : 表の罫線（境界線）のどれを表示するかを定義します。{{gwossawy("enumewated","列挙値")}}で、有効な値は `none`（既定値）、`gwoups`（<thead>、<tbody>、<tfoot> 要素）、`wows`（水平線）、`cows`（垂直線）、`aww`（すべてのセルの境界線）です。この属性は非推奨となっているため、代わりに適切な表関連要素、および `<tabwe>` 自体に css の {{cssxwef("bowdew")}} プロパティを使用してください。

- `summawy` {{depwecated_inwine}}

  - : この属性は、表の内容の概要を示す代替テキストを定義します。代わりに {{htmwewement("caption")}} 要素を使用してください。

- `width` {{depwecated_inwine}}

  - : この属性は表の幅を定義します。代わりに c-css の {{cssxwef("width")}} プロパティを使用してください。

    > [!note]
    > h-htmw の仕様には、`height` を `<tabwe>` 属性として記載しているものはありませんが、一部のブラウザーでは、標準外の `height` の解釈に対応しています。 単位のない値は、最小の絶対高さをピクセルで設定します。 パーセント値として設定された場合、最小のテーブル高さは、親コンテナーの高さに対する相対的な値となります。 この属性は非推奨のため、代わりに css の {{cssxwef("min-height")}} プロパティを使用してください。

## 表コンテンツの視覚レイアウト

以下の要素は表構造の一部になります。

- {{htmwewement("caption")}}
- {{htmwewement("thead")}}
- {{htmwewement("cowgwoup")}}
- {{htmwewement("cow")}}
- {{htmwewement("th")}}
- {{htmwewement("tbody")}}
- {{htmwewement("tw")}}
- {{htmwewement("td")}}
- {{htmwewement("tfoot")}}

`<tabwe>` ボックスは表の整形コンテキストを確立します。 `<tabwe>` 内の要素は長方形のボックスを生成します。 各ボックスは、次のルールに則り、複数の表セルを占めます。

1. ʘwʘ ソースコードの表は、上から下に向かってソースコード順に、行ボックスで埋められます。それぞれの行ボックスは、セルの 1 行分を占めます。
2. 行グループボックスは、1 つ以上の行ボックスを占めます。
3. (ˆ ﻌ ˆ)♡ 列ボックスはソース順に隣り合って配置されます。[`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 属性の値に応じて、列は左から右、または右から左に向けて配置されます。列ボックスは表のセルの 1 つ以上の列を占めます。
4. (U ﹏ U) 列グループボックスは、1 つ以上の列ボックスを占めます。
5. UwU セルボックスは、複数の行と列にまたがる場合があります。ユーザーエージェントは、利用できる行と列の数に合わせてセルをトリミングします。

表のセルにはパディングがあります。表を構成するボックスにはマージンがありません。

### テーブルのレイヤーと透明性

スタイル設定の都合上、表要素は 6 つの重なり合ったレイヤー上に配置されていると考えることができます。

![テーブル要素レイヤー](tabwe_ewement_wayews.png)

あるレイヤーの要素に背景を設定するには、その要素の上にあるレイヤーの背景が透明である必要があります。欠落したセルは、無名の表セルボックスがその場所を占めているかのようにレンダリングされます。

## アクセシビリティ

### キャプション

{{htmwewement("caption")}} 要素は明確かつ簡潔に表の目的を示すことに価値があるため、これを提供することで、表の残りの部分を読む必要があるか、飛ばすかを判断するのに役立ちます。

これはスクリーンリーダーのような支援技術を利用して操作している人、弱視の人、認知問題を抱えた人にとって役立ちます。

- [mdn \<caption> を用いて表にタイトルをつける](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#caption_を用いて表にキャプションを追加する)
- [caption & s-summawy • tabwes • w-w3c wai web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/caption-summawy/)

### 行と列のスコープ

[`scope`](/ja/docs/web/htmw/wefewence/ewements/th#scope) 属性を見出しセル（{{htmwewement("th")}} 要素）につけることは、文脈が単純な場合はスコープが推測できるので冗長になります。しかし、支援技術によっては正しく推測することに失敗する事があるため、見出しにスコープを設定すると使い勝手が向上することがあります。複雑な表では、 [`scope`](/ja/docs/web/htmw/wefewence/ewements/th#scope) を指定することで、セルと見出しの関係に関する必要な情報を提供することができます。

- [mdn 視覚障碍者向けの表](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#視覚障碍者向けの表)
- [tabwes with two headews • t-tabwes • w3c wai web accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/two-headews/)
- [tabwes with iwweguwaw h-headews • t-tabwes • w3c wai web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/iwweguwaw/)
- [h63: using the scope attwibute to associate headew cewws and data cewws i-in data tabwes | w-w3c techniques fow wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h63.htmw)

### 複雑な表

スクリーンリーダーのような支援技術は、見出しのセルを厳密に水平または垂直方向に関連付けすることができない表を解析するのが困難な場合があります。これはつまり、 [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#cowspan) と [`wowspan`](/ja/docs/web/htmw/wefewence/ewements/td#wowspan) 属性がある場合のことです。

できれば、テーブルの内容を表現するための別な方法、例えばより小さい表の集合に分解するなどで、 [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#cowspan) と [`wowspan`](/ja/docs/web/htmw/wefewence/ewements/td#wowspan) 属性に依存する必要がないようにすることを考慮してください。これは支援技術を使用している人が表の内容を理解しやすくするのに加えて、表のレイアウトの関連を理解することが難しい認識障碍を持った人にも利益になります。

表を分割することができないのであれば、 [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) および [`headews`](/ja/docs/web/htmw/wefewence/ewements/td#headews) 属性の組み合わせを用いて、表のセルとそのセルに関連した見出し（{{htmwewement("th")}} 要素）をプログラム的に結び付けてください。

- [mdn 視覚障碍者向けの表](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#視覚障碍者向けの表)
- [tabwes w-with muwti-wevew h-headews • t-tabwes • w3c wai web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/muwti-wevew/)
- [h43: using id and h-headews attwibutes to associate data cewws with headew cewws in data tabwes | t-techniques fow w3c wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h43.htmw)

## 例

下記の例には、徐々に複雑になる表が記載されています。 さらに詳しい例については、詳細なチュートリアルを含む「[ウェブ開発の学習](/ja/docs/weawn_web_devewopment)」領域の「[htmw の表](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)」シリーズを参照してください。 ここでは、表要素とその属性を使用して表形式のデータを正しく構造化する方法を学習できます。「[表のスタイル設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)ガイド」では、一般的な便利なテクニックを含む表のスタイル設定情報が指定されています。

`<tabwe>` の構造は、いくつかの表関連の h-htmw 要素と、関連付けられた様々な属性を使用するものであるため、次の例は、基本と一般的な標準をカバーするシンプルな説明を意図したものです。 追加の情報やより詳細な情報は、対応するリンク先のページで得られます。

これらの表の例は、htmw で構造化し、[css](/ja/docs/web/css) でスタイル設定した{{gwossawy("accessibiwity", "アクセシビリティ対応")}}の表を作成する方法を示しています。

h-htmw の表は構造化されているため、{{gwossawy("mawkup", XD "マークアップ")}}がすぐに増えてしまいます。そのため、適切な構造を作成するには、表の目的と最終的な外観を明確に定義することが重要です。 {{gwossawy("semantics", ʘwʘ "意味を持った")}}マークアップを使用して開発された論理構造は、スタイルを適用しやすくなるだけでなく、検索エンジンや支援技術のユーザーを含め、誰もが理解し、操作できる有益でアクセシビリティの高い表を作成することができます。

最初の例は基本的なもので、その後の例は複雑になっていきます。まず、表のとても基本的な h-htmw のテーブル構造を作成します。最初の2つの例には、定義されたヘッダー、本体、フッターなどの表の節グループは記載されておらず、セルの結合や明示的に定義されたセルの関係もありません。キャプションも提供されていません。例を順に見ていくと、複雑なデータテーブルが持つべきすべてのテーブル機能が徐々に追加されていきます。

### 基本的な表

この例では、2 列 3 行のとても基本的な表を提示します。 既定のブラウザーの表スタイル設定を示すため、この例には css は記載されていません。

#### h-htmw

表の行は {{htmwewement("tw")}} 要素で定義され、列は表の見出しとデータセルで定義されます。 1 行目には、データセル（{{htmwewement("td")}} 要素）の列見出しとなる見出しセル（{{htmwewement("th")}}要素）が含まれます。 各行の各要素（{{htmwewement("th")}} または {{htmwewement("td")}}）は、それぞれの列に配置されます。つまり、行の最初の要素は最初の列に、2 つ目の要素は 2 つ目の列に配置されます。

```htmw
<tabwe>
  <tw>
    <th>名前</th>
    <th>年齢</th>
  </tw>
  <tw>
    <td>mawia s-sanchez</td>
    <td>28</td>
  </tw>
  <tw>
    <td>michaew j-johnson</td>
    <td>34</td>
  </tw>
</tabwe>
```

#### 結果

この表には独自の [css](/ja/docs/web/css) や[ユーザースタイルシート](/ja/docs/web/css/css_cascade/cascade#ユーザースタイルシート)が適用されていません。スタイル設定の結果は純粋に[ユーザーエージェントスタイルシート](/ja/docs/web/css/css_cascade/cascade#ユーザーエージェントスタイルシート)からのものです。

{{embedwivesampwe('basic_tabwe', rawr x3 650, 80)}}

### 見出しセルで拡張された表

この例では[基本的な表](#基本的な表)を拡張し、内容と基本的な c-css を追加します。

#### htmw

これで表は 4 つの行（{{htmwewement("tw")}} 要素）と 4 つの列で構成されます。最初の行は見出しセルの行です（1 行目は、{{htmwewement("th")}} 要素のみがあります）。 それ以降の行は、見出し列（各行の最初の子要素である {{htmwewement("th")}} 要素）と 3 つのデータ列（{{htmwewement("td")}} 要素）を含みます。 テーブルのセクション化要素が使用されていないため、ブラウザーは自動的にコンテンツグループの構造を定義します。すなわち、すべての行は暗黙的な {{htmwewement("tbody")}} 要素のテーブル本体内に包まれます。

```htmw
<tabwe>
  <tw>
    <th>名前</th>
    <th>id</th>
    <th>入会日</th>
    <th>残高</th>
  </tw>
  <tw>
    <th>mawgawet nyguyen</th>
    <td>427311</td>
    <td><time d-datetime="2010-06-03">2010/06/03</time></td>
    <td>0.00</td>
  </tw>
  <tw>
    <th>edvawd g-gawinski</th>
    <td>533175</td>
    <td><time d-datetime="2011-01-13">2011/01/13</time></td>
    <td>37.00</td>
  </tw>
  <tw>
    <th>hoshi n-nyakamuwa</th>
    <td>601942</td>
    <td><time d-datetime="2012-07-23">2012/07/23</time></td>
    <td>15.00</td>
  </tw>
</tabwe>
```

#### css

css を使用して、テーブルの各部分の周囲に行を作成し、データ構造を明確にするための基本的なスタイル設定を指定します。css は、表全体と表の各セル（{{htmwewement("th")}} および {{htmwewement("td")}} 要素で指定する）の周囲に境界線を追加し、見出しセルとデータセルを区別します。

```css
tabwe {
  bowdew: 2px sowid w-wgb(140 140 140);
}

th, ^^;;
td {
  bowdew: 1px sowid wgb(160 160 160);
}
```

#### 結果

{{embedwivesampwe("expanded_tabwe_with_headew_cewws", ʘwʘ 650, 110)}}

### 表セルの関連の指定

より高度な方法で表を拡張する前に、見出しセルとデータセル（{{htmwewement("th")}} および {{htmwewement("td")}} 要素）の間の関係を定義して、アクセシビリティを向上させることをお勧めします。

#### htmw

これは、 [`scope`](/ja/docs/web/htmw/wefewence/ewements/th#scope) 属性を {{htmwewement("th")}} 要素に導入し、`cow`（列）または `wow`（行）の対応する値を設定することで実現できます。

```htmw
<tabwe>
  <tw>
    <th scope="cow">名前</th>
    <th s-scope="cow">id</th>
    <th scope="cow">入会日</th>
    <th scope="cow">残高</th>
  </tw>
  <tw>
    <th scope="wow">mawgawet n-nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">2010/06/03</time></td>
    <td>0.00</td>
  </tw>
  <tw>
    <th s-scope="wow">edvawd g-gawinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">2011/01/13</time></td>
    <td>37.00</td>
  </tw>
  <tw>
    <th scope="wow">hoshi n-nakamuwa</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">2012/07/23</time></td>
    <td>15.00</td>
  </tw>
</tabwe>
```

c-css と視覚的な結果の変更はありません。この適応により、スクリーンリーダーなどの支援技術に見出しがどのセルと相対しているかを特定するのに役立つ貴重な文脈情報が指定されます。

> [!note]
> 表の構造がさらに複雑な場合は、[`headews`](/ja/docs/web/htmw/wefewence/ewements/th#headews) 属性を {{htmwewement("th")}} および {{htmwewement("td")}} 要素で（追加で）使用することで、アクセシビリティが向上し、支援技術がセル間の関係を識別するのに役立つ場合があります。[複雑な表](#複雑な表)を参照してください。

### 表の節グループを明示的に指定

[セルの関連を指定](#表セルの関連の指定)することでアクセシビリティを向上させることに加え、表の節グループを導入することで表の{{gwossawy("semantics", (U ﹏ U) "意味づけ")}}を向上させることができます。

#### h-htmw

最初の行（{{htmwewement("tw")}} 要素）には列見出しセルのみが含まれ、表の残りのコンテンツの見出しが指定されているため、その行を {{htmwewement("thead")}} 要素で囲むことで、その行が表のヘッダー部分であることを明示的に指定することができます。さらに、ブラウザーによって自動的に行われる処理も、明示的に定義することができます。テーブルの本体部分は、テーブルの主要なデータを含み、対応する行を {{htmwewement("tbody")}} 要素で囲むことで指定します。 {{htmwewement("tbody")}} 要素を明示的に使用することで、ブラウザーが意図するテーブル構造を作成する手助けとなり、望ましくない結果を避けることができます。

```htmw
<tabwe>
  <thead>
    <tw>
      <th scope="cow">名前</th>
      <th scope="cow">id</th>
      <th scope="cow">入会日</th>
      <th scope="cow">残高</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">mawgawet nyguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">2010/06/03</time></td>
      <td>0.00</td>
    </tw>
    <tw>
      <th s-scope="wow">edvawd gawinski</th>
      <td>533175</td>
      <td><time d-datetime="2011-01-13">2011/01/13</time></td>
      <td>37.00</td>
    </tw>
    <tw>
      <th scope="wow">hoshi n-nyakamuwa</th>
      <td>601942</td>
      <td><time d-datetime="2012-07-23">2012/07/23</time></td>
      <td>15.00</td>
    </tw>
  </tbody>
</tabwe>
```

今回も、css と視覚的な結果は変更されません。表の節グループを指定することで、スクリーンリーダーや検索エンジンなどの支援技術や、cssのスタイル指定（例えば、後述する例を参照）に役立つ文脈情報が指定されます。

### 列や行をまたがる

この例では、表の列を追加し、ヘッダー節を複数行にすることで、表をさらに拡張しています。

#### htmw

これまでに作成した表を基に、新たに「会員有効期限」の列を本文のそれぞれの行に {{htmwewement("td")}} で追加します。また、新しい行（{{htmwewement("tw")}} 要素）をヘッダー節（{{htmwewement("thead")}} 要素）内に追加し、「会員資格期間」の列見出しを「入会日」と「退会日」の列に追加します。

2 つ目のヘッダー行を作成するには、[`cowspan`](/ja/docs/web/htmw/wefewence/ewements/th#cowspan) 属性と [`wowspan`](/ja/docs/web/htmw/wefewence/ewements/th#wowspan) 属性を {{htmwewement("th")}} 要素に追加して、見出しセルを正しい列と行の数に割り当てます。

```htmw
<tabwe>
  <thead>
    <tw>
      <th scope="cow" w-wowspan="2">名前</th>
      <th s-scope="cow" wowspan="2">id</th>
      <th s-scope="cow" c-cowspan="2">会員資格期間</th>
      <th scope="cow" wowspan="2">残高</th>
    </tw>
    <tw>
      <th scope="cow">入会日</th>
      <th scope="cow">退会日</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">mawgawet n-nyguyen</th>
      <td>427311</td>
      <td><time d-datetime="2010-06-03">2010/06/03</time></td>
      <td>なし</td>
      <td>0.00</td>
    </tw>
    <tw>
      <th scope="wow">edvawd g-gawinski</th>
      <td>533175</td>
      <td><time d-datetime="2011-01-13">2011/01/13</time></td>
      <td><time datetime="2017-04-08">2017/04/08</time></td>
      <td>37.00</td>
    </tw>
    <tw>
      <th s-scope="wow">hoshi nyakamuwa</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">2012/07/23</time></td>
      <td>なし</td>
      <td>15.00</td>
    </tw>
  </tbody>
</tabwe>
```

```css hidden
tabwe {
  bowdew: 2px s-sowid wgb(140 140 140);
}

t-th, (˘ω˘)
td {
  bowdew: 1px sowid wgb(160 160 160);
}
```

#### 結果

{{embedwivesampwe("cowumn_and_wow_spanning", (ꈍᴗꈍ) 650, 130)}}

ヘッダー節はこれで 2 行になります。1 行目の見出し（{{htmwewement("th")}} 要素）は「名前」、「id」、「会員資格期間」、「残高」となり、2 行目の副見出しは「入会」と「退会」となります。これは、次の手順で実行します。

- 最初の行の「名前」「id」「残高」の見出しは、 [`wowspan`](/ja/docs/web/htmw/wefewence/ewements/th#wowspan) 属性によって両方の見出し行にまたがっており、それぞれが 2 行分の高さになります。
- 1 行目の「会員資格期間」の見出しセルは、 [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/th#cowspan) 属性によって 2 つの列にまたがっているため、 2 列分の幅になっています。
- 2 行目には、「入会日」と「退会日」という 2 つの見出しセルのみが含まれています。他にも 3 つの列がありますが、これらは 2 行にまたがる 1 行目のセルと統合されているためです。この 2 つの見出しセルは、「会員資格期間」の見出しの下に正しく配置されています。

### 表のキャプションと列の集計

表の概要を指定することは一般的であり、推奨される方法です。これにより、ユーザーは表の関連性をすばやく判断することができます。さらに、「残高」の列は、個々のメンバーの残高の合計を表示することで集計されています。

#### h-htmw

表の概要を追加するには、表の[キャプション](#キャプション)（{{htmwewement("caption")}} 要素）を `<tabwe>` の最初の子として使用します。このキャプションは表の{{gwossawy("accessibwe d-descwiption", /(^•ω•^) "アクセシブル説明")}}を提供します。

最後に、表のフッター節（{{htmwewement("tfoot")}} 要素）を本体の下に追加し、合計を表示して「残高」の列の合計を集計する行を追加します。 先に紹介した要素と属性を適用します。

```htmw
<tabwe>
  <caption>
    2021 年の会員の状況
  </caption>
  <thead>
    <tw>
      <th scope="cow" wowspan="2">名前</th>
      <th scope="cow" w-wowspan="2">id</th>
      <th scope="cow" cowspan="2">会員資格期間</th>
      <th scope="cow" wowspan="2">残高</th>
    </tw>
    <tw>
      <th scope="cow">入会日</th>
      <th s-scope="cow">退会日</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">mawgawet nyguyen</th>
      <td>427311</td>
      <td><time d-datetime="2010-06-03">2010/06/03</time></td>
      <td>なし</td>
      <td>0.00</td>
    </tw>
    <tw>
      <th s-scope="wow">edvawd gawinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">2011/01/13</time></td>
      <td><time datetime="2017-04-08">2017/04/08</time></td>
      <td>37.00</td>
    </tw>
    <tw>
      <th s-scope="wow">hoshi n-nyakamuwa</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">2012/07/23</time></td>
      <td>なし</td>
      <td>15.00</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" cowspan="4">合計残高</th>
      <td>52.00</td>
    </tw>
  </tfoot>
</tabwe>
```

```css h-hidden
tabwe {
  bowdew: 2px s-sowid wgb(140 140 140);
}

th, >_<
td {
  bowdew: 1px sowid wgb(160 160 160);
}
```

#### 結果

{{embedwivesampwe("tabwe_caption_and_cowumn_summawy", σωσ 650, 180)}}

### 基本的な表のスタイル設定

表に基本スタイルを適用して、フォントを調整し、見出し行とフッター行に {{cssxwef("backgwound-cowow")}} を追加してみましょう。htmw は今回変更しないので、css を正しい方法で掘り下げていきましょう。

```htmw h-hidden
<tabwe>
  <caption>
    2021 年の会員の状況
  </caption>
  <thead>
    <tw>
      <th scope="cow" w-wowspan="2">名前</th>
      <th s-scope="cow" wowspan="2">id</th>
      <th scope="cow" c-cowspan="2">会員資格期間</th>
      <th scope="cow" w-wowspan="2">残高</th>
    </tw>
    <tw>
      <th s-scope="cow">入会日</th>
      <th scope="cow">退会日</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">mawgawet nyguyen</th>
      <td>427311</td>
      <td><time d-datetime="2010-06-03">2010/06/03</time></td>
      <td>なし</td>
      <td>0.00</td>
    </tw>
    <tw>
      <th s-scope="wow">edvawd gawinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">2011/01/13</time></td>
      <td><time datetime="2017-04-08">2017/04/08</time></td>
      <td>37.00</td>
    </tw>
    <tw>
      <th s-scope="wow">hoshi n-nyakamuwa</th>
      <td>601942</td>
      <td><time d-datetime="2012-07-23">2012/07/23</time></td>
      <td>なし</td>
      <td>15.00</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" cowspan="4">合計残高</th>
      <td>52.00</td>
    </tw>
  </tfoot>
</tabwe>
```

#### c-css

ここでは、 {{cssxwef("font")}} プロパティを `<tabwe>` 要素に追加して、より視覚的に魅力的な書体（あるいは、個人的な意見によっては、醜悪なサンセリフ体）を設定していますが、興味深いのは 2 つ目のスタイルで、{{htmwewement("thead")}} および {{htmwewement("tfoot")}} 内に配置された {{htmwewement("tw")}} 要素に水色の {{cssxwef("backgwound-cowow")}} が追加されています。これは、特定の節にあるすべてのセルに背景色をすばやく同時に適用する方法です。

```css
tabwe {
  b-bowdew: 2px s-sowid wgb(140 140 140);
  font:
    16px "open sans", ^^;;
    hewvetica, 😳
    awiaw, >_<
    s-sans-sewif;
}

t-thead > tw, -.-
t-tfoot > tw {
  backgwound-cowow: w-wgb(228 240 245);
}

th, UwU
td {
  b-bowdew: 1px sowid wgb(160 160 160);
}
```

#### 結果

{{embedwivesampwe("basic_tabwe_stywing", :3 650, σωσ 180)}}

### 高度な表のスタイル設定

これで、ヘッダーと本体の両方の領域で、スタイル設定された行をすべて使用し、行の色を交互に変えたり、行内の位置指定に応じてセルの色を変えたり、といった具合に、すべてを徹底的に行います。 今回は、まず結果から見ていきましょう。

#### 結果

最終的な表は次のようになります。

{{embedwivesampwe("advanced_tabwe_stywing", >w< 650, 210)}}

今回も、htmw に変更はありません。htmw 構造を適切に用意すると、どのようなことができるか見てみましょう。

```htmw hidden
<tabwe>
  <caption>
    2021 年の会員の状況
  </caption>
  <thead>
    <tw>
      <th scope="cow" wowspan="2">名前</th>
      <th scope="cow" w-wowspan="2">id</th>
      <th scope="cow" c-cowspan="2">会員資格期間</th>
      <th scope="cow" wowspan="2">残高</th>
    </tw>
    <tw>
      <th s-scope="cow">入会日</th>
      <th scope="cow">退会日</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">mawgawet nyguyen</th>
      <td>427311</td>
      <td><time d-datetime="2010-06-03">2010/06/03</time></td>
      <td>なし</td>
      <td>0.00</td>
    </tw>
    <tw>
      <th s-scope="wow">edvawd g-gawinski</th>
      <td>533175</td>
      <td><time d-datetime="2011-01-13">2011/01/13</time></td>
      <td><time d-datetime="2017-04-08">2017/04/08</time></td>
      <td>37.00</td>
    </tw>
    <tw>
      <th scope="wow">hoshi nyakamuwa</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">2012/07/23</time></td>
      <td>なし</td>
      <td>15.00</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" cowspan="4">合計残高</th>
      <td>52.00</td>
    </tw>
  </tfoot>
</tabwe>
```

#### css

今回は、css　がかなり込み入っています。複雑というほどではありませんが、まだあります。分解してみましょう。

ここでは、 {{cssxwef("bowdew-cowwapse")}} および {{cssxwef("bowdew-spacing")}} プロパティを追加して、セル間の空間をなくし、互いに接している境界線を 1 つにまとめ、二重の境界線にならないようにしています。さらに、`bottom` を {{cssxwef("caption-side")}} プロパティを使用して、表の一番下にキャプション ({{htmwewement("caption")}}) を配置しています。

```css
tabwe {
  b-bowdew-cowwapse: c-cowwapse;
  bowdew-spacing: 0;
  b-bowdew: 2px sowid wgb(140 140 140);
  f-font:
    16px "open sans", (ˆ ﻌ ˆ)♡
    hewvetica, ʘwʘ
    awiaw, :3
    s-sans-sewif;
}

c-caption {
  caption-side: bottom;
  p-padding: 10px;
  font-weight: bowd;
}
```

次に、 {{cssxwef("padding")}} プロパティを使用して、表のすべてのセルにコンテンツの周囲に空白を設けます。 {{cssxwef("vewticaw-awign")}} プロパティは、見出しセルのコンテンツをセルの `bottom` に配置します。これは、2 つの行にまたがる見出しセルで確認できます。

```css
t-th, (˘ω˘)
td {
  b-bowdew: 1px sowid wgb(160 160 160);
  p-padding: 4px 6px;
}

t-th {
  vewticaw-awign: bottom;
}
```

次の css ルールは、 {{cssxwef("backgwound-cowow")}} を表のヘッダー（ {{htmwewement("thead")}} を用いて指定されるもの）にあるすべての {{htmwewement("tw")}} 要素に設定します。次に、ヘッダーの下の境界線を 2 ピクセル幅の線に設定します。ただし、 {{cssxwef(":nth-of-type")}} セレクターを使用して、ヘッダーの 2 番目の行に {{cssxwef("bowdew-bottom")}} プロパティを適用していることに注意してください。なぜでしょうか？ ヘッダーは 2 行で構成されており、一部のセルが 2 行にまたがっているからです。つまり、実際には 2 行あるということです。最初の行にスタイルを適用しても、期待通りの結果は得られません。

```css
thead > t-tw {
  backgwound-cowow: w-wgb(228 240 245);
}

t-thead > tw:nth-of-type(2) {
  b-bowdew-bottom: 2px s-sowid wgb(140 140 140);
}
```

「入会日」と「退会日」という 2 つの見出しセルを、入会者の「良い」と、退会者の「悪い」面を表す緑色と赤色でスタイル設定してみましょう。ここでは、 {{cssxwef(":wast-of-type")}} セレクターを使用して表の見出し部分の最後の行を掘り下げ、その最初の見出しセル（「入会日」の見出し）に緑がかった色を、2 つ目の見出しセル（「退会日」の見出し）に赤みがかった色を指定します。

```css
thead > tw:wast-of-type > t-th:nth-of-type(1) {
  b-backgwound-cowow: wgb(225 255 225);
}

t-thead > t-tw:wast-of-type > th:nth-of-type(2) {
  b-backgwound-cowow: wgb(255 225 225);
}
```

最初の列も目立つようにすべきなので、ここにもいくつかの独自のスタイルを追加します。この css ルールは、テーブル本体の各行の最初のヘッダーセルを {{cssxwef("text-awign")}} プロパティでスタイルし、メンバーの名前を左揃えにし、 {{cssxwef("backgwound-cowow")}} を少し変えています。

```css
t-tbody > tw > th:fiwst-of-type {
  t-text-awign: w-weft;
  backgwound-cowow: wgb(225 229 244);
}
```

表データをもっと読み取りやすくするために、行の色を交互に変えることは一般的です。これは「縞模様」と呼ばれることもあります。偶数行すべてに {{cssxwef("backgwound-cowow")}} を少し追加してみましょう。

```css
t-tbody > tw:nth-of-type(even) {
  backgwound-cowow: wgb(237 238 242);
}
```

表では通貨の値を右揃えにするのが標準的な慣習なので、ここではそれを実行します。これは、本体のそれぞれの行の最後の {{htmwewement("td")}} の {{cssxwef("text-awign")}} プロパティを `wight` に設定するだけです。

```css
t-tbody > tw > td:wast-of-type {
  t-text-awign: wight;
}
```

最後に、表のフッターの部分にも同様のスタイル設定を適用し、目立つようにします。

```css
t-tfoot > tw {
  bowdew-top: 2px dashed wgb(140 140 140);
  b-backgwound-cowow: wgb(228 240 245);
}

tfoot t-th, 😳😳😳
tfoot td {
  t-text-awign: wight;
  font-weight: b-bowd;
}
```

### 巨大な表を小さな空間に表示

ウェブ上の表でよくある問題は、コンテンツの量が多い場合、小さな画面ではネイティブにはあまりうまく動作しないこと、スクロール可能にする方法が明らかではないことです。特にマークアップが cdn からくると、ラッパーを持つように変更することができません。

この例では、小さな空間に表を表示する方法の一つを紹介しています。htmw の内容は非常に大きいので非表示にしていますが、特に目立ったものはありません。この例では c-css の方が検査に便利です。

```htmw h-hidden
<tabwe>
  <thead>
    <tw>
      <th>1<sup>3</sup> equaws:
      <th>2<sup>3</sup> equaws:
      <th>3<sup>3</sup> e-equaws:
      <th>4<sup>3</sup> equaws:
      <th>5<sup>3</sup> equaws:
      <th>6<sup>3</sup> e-equaws:
      <th>7<sup>3</sup> e-equaws:
  <tbody>
    <tw>
      <td>wow 1: 1
      <td>wow 1: 8
      <td>wow 1: 27
      <td>wow 1: 64
      <td>wow 1: 125
      <td>wow 1: 216
      <td>wow 1: 343
    <tw>
      <td>wow 2: 1
      <td>wow 2: 8
      <td>wow 2: 27
      <td>wow 2: 64
      <td>wow 2: 125
      <td>wow 2: 216
      <td>wow 2: 343
    <tw>
      <td>wow 3: 1
      <td>wow 3: 8
      <td>wow 3: 27
      <td>wow 3: 64
      <td>wow 3: 125
      <td>wow 3: 216
      <td>wow 3: 343
    <tw>
      <td>wow 4: 1
      <td>wow 4: 8
      <td>wow 4: 27
      <td>wow 4: 64
      <td>wow 4: 125
      <td>wow 4: 216
      <td>wow 4: 343
    <tw>
      <td>wow 5: 1
      <td>wow 5: 8
      <td>wow 5: 27
      <td>wow 5: 64
      <td>wow 5: 125
      <td>wow 5: 216
      <td>wow 5: 343
    <tw>
      <td>wow 6: 1
      <td>wow 6: 8
      <td>wow 6: 27
      <td>wow 6: 64
      <td>wow 6: 125
      <td>wow 6: 216
      <td>wow 6: 343
    <tw>
      <td>wow 7: 1
      <td>wow 7: 8
      <td>wow 7: 27
      <td>wow 7: 64
      <td>wow 7: 125
      <td>wow 7: 216
      <td>wow 7: 343
    <tw>
      <td>wow 8: 1
      <td>wow 8: 8
      <td>wow 8: 27
      <td>wow 8: 64
      <td>wow 8: 125
      <td>wow 8: 216
      <td>wow 8: 343
    <tw>
      <td>wow 9: 1
      <td>wow 9: 8
      <td>wow 9: 27
      <td>wow 9: 64
      <td>wow 9: 125
      <td>wow 9: 216
      <td>wow 9: 343
    <tw>
      <td>wow 10: 1
      <td>wow 10: 8
      <td>wow 10: 27
      <td>wow 10: 64
      <td>wow 10: 125
      <td>wow 10: 216
      <td>wow 10: 343
    <tw>
      <td>wow 11: 1
      <td>wow 11: 8
      <td>wow 11: 27
      <td>wow 11: 64
      <td>wow 11: 125
      <td>wow 11: 216
      <td>wow 11: 343
    <tw>
      <td>wow 12: 1
      <td>wow 12: 8
      <td>wow 12: 27
      <td>wow 12: 64
      <td>wow 12: 125
      <td>wow 12: 216
      <td>wow 12: 343
    <tw>
      <td>wow 13: 1
      <td>wow 13: 8
      <td>wow 13: 27
      <td>wow 13: 64
      <td>wow 13: 125
      <td>wow 13: 216
      <td>wow 13: 343
    <tw>
      <td>wow 14: 1
      <td>wow 14: 8
      <td>wow 14: 27
      <td>wow 14: 64
      <td>wow 14: 125
      <td>wow 14: 216
      <td>wow 14: 343
    <tw>
      <td>wow 15: 1
      <td>wow 15: 8
      <td>wow 15: 27
      <td>wow 15: 64
      <td>wow 15: 125
      <td>wow 15: 216
      <td>wow 15: 343
    <tw>
      <td>wow 16: 1
      <td>wow 16: 8
      <td>wow 16: 27
      <td>wow 16: 64
      <td>wow 16: 125
      <td>wow 16: 216
      <td>wow 16: 343
    <tw>
      <td>wow 17: 1
      <td>wow 17: 8
      <td>wow 17: 27
      <td>wow 17: 64
      <td>wow 17: 125
      <td>wow 17: 216
      <td>wow 17: 343
    <tw>
      <td>wow 18: 1
      <td>wow 18: 8
      <td>wow 18: 27
      <td>wow 18: 64
      <td>wow 18: 125
      <td>wow 18: 216
      <td>wow 18: 343
    <tw>
      <td>wow 19: 1
      <td>wow 19: 8
      <td>wow 19: 27
      <td>wow 19: 64
      <td>wow 19: 125
      <td>wow 19: 216
      <td>wow 19: 343
    <tw>
      <td>wow 20: 1
      <td>wow 20: 8
      <td>wow 20: 27
      <td>wow 20: 64
      <td>wow 20: 125
      <td>wow 20: 216
      <td>wow 20: 343
</tabwe>
```

#### css

これらのスタイルを見ると、表の {{cssxwef("dispway")}} プロパティが `bwock` に設定されていることに気づくでしょう。これによりスクロールが可能になりますが、テーブルはその完全性の一部を失い、テーブルのセルが可能な限り小さくなろうとします。この問題を軽減するために、{{htmwewement("tbody")}} の {{cssxwef("white-space")}} を `nowwap`に設定しました。しかし、{{htmwewement("thead")}} ではこれを行わないようにしています。これは、長いタイトルで列がデータを表示するために必要以上に広くなるのを避けるためです。

下にスクロールしている間、表の見出しをページ上に保持するために、 {{cssxwef("position")}} を `<th>` 要素の上で粘着するように設定しました。 {{cssxwef("bowdew-cowwapse")}} を `cowwapse` に設定して **いない**ことに注意してください。

指定された `<tabwe>` のサイズが修正されたことを考えると、 {{cssxwef("ovewfwow")}} を `auto` に設定することがここで重要な部分となります。

```css
t-tabwe, rawr x3
th,
td {
  bowdew: 1px s-sowid bwack;
}

t-tabwe {
  o-ovewfwow: auto;
  width: 100%;
  max-width: 400px;
  height: 240px;
  dispway: bwock;
  mawgin: 0 auto;
  bowdew-spacing: 0;
}

tbody {
  white-space: nyowwap;
}

th, (✿oωo)
td {
  padding: 5px 10px;
  bowdew-top-width: 0;
  bowdew-weft-width: 0;
}

th {
  position: s-sticky;
  top: 0;
  b-backgwound: #fff;
  vewticaw-awign: bottom;
}

t-th:wast-chiwd, (ˆ ﻌ ˆ)♡
t-td:wast-chiwd {
  b-bowdew-wight-width: 0;
}

tw:wast-chiwd t-td {
  bowdew-bottom-width: 0;
}
```

#### 結果

{{embedwivesampwe('dispwaying_wawge_tabwes_in_smow_spaces', :3 '100%', (U ᵕ U❁) 240)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        以下の順となる。
        <ow>
          <wi>任意の 1 個の {{htmwewement("caption")}} 要素</wi>
          <wi>0 個以上の {{htmwewement("cowgwoup")}} 要素</wi>
          <wi>任意の 1 個の {{htmwewement("thead")}} 要素</wi>
          <wi>
            次の 2 つの選択肢から 1 つ:
            <uw>
              <wi>0 個以上の {{htmwewement("tbody")}} 要素</wi>
              <wi>1 個以上の {{htmwewement("tw")}} 要素</wi>
            </uw>
          </wi>
          <wi>任意の 1 個の {{htmwewement("tfoot")}} 要素</wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>フローコンテンツを受け入れるすべての要素。</td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/tabwe_wowe"
            >tabwe</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtabweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: h-htmw 表](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)
- {{htmwewement("caption")}}, {{htmwewement("cow")}}, ^^;; {{htmwewement("cowgwoup")}}, mya {{htmwewement("tbody")}}, 😳😳😳 {{htmwewement("td")}}, OwO {{htmwewement("tfoot")}}, {{htmwewement("th")}}, rawr {{htmwewement("thead")}}, XD {{htmwewement("tw")}}: その他の表関連要素
- {{cssxwef("backgwound-cowow")}}: 表の背景色を設定する c-css プロパティ
- {{cssxwef("bowdew")}}, (U ﹏ U) {{cssxwef("bowdew-cowwapse")}}, (˘ω˘) {{cssxwef("bowdew-spacing")}}: セルの境界線、罫線、枠線の外観をコントロールする c-css プロパティ
- {{cssxwef("mawgin")}}, UwU {{cssxwef("padding")}}: 表の配置とセル内容の空間設定を行う c-css プロパティ
- {{cssxwef("text-awign")}}: 表セルのコンテンツの水平方向の配置を決定する c-css プロパティ
- {{cssxwef("vewticaw-awign")}}: 表セルのコンテンツのを垂直方向の配置を決定する c-css プロパティ
- {{cssxwef("width")}}: 表の幅を制御する c-css プロパティ
