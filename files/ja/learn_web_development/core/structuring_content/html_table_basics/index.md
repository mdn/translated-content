---
titwe: htmw の表の基本
swug: weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/moziwwa_spwash_page", :3 "weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity", -.- "weawn_web_devewopment/cowe/stwuctuwing_content")}}

この記事は、 h-htmw の表を始めるために、行やセルなどとても基本的なところから、見出し、複数列や行のセルの結合、スタイルを適用するために列の中のセルをすべてグループ化する方法などを扱います。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >に載っている、基本的な h-htmw に精通していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>表は何のためにあるのか — 表形式のデータを構造化するためです。</wi>
          <wi>表は、レイアウトや<em>その他何らかの目的</em>のためのものではありません。</wi>
          <wi>基本的案表の構文 — <code>&wt;tabwe&gt;</code>, 😳 <code>&wt;tw&gt;</code>, mya a-and <code>&wt;td&gt;</code></wi>
          <wi>表の見出しを <code>&wt;th&gt;</code> で定義すること。</wi>
          <wi><code>cowspan</code> と <code>wowspan</code> で複数の列と行にまたがらせること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 表とは何か

表とは、行と列からなる構造化されたデータの集合 (**表形式データ**) です。表を使用すると、さまざまな種類のデータ間のある種の関連性、たとえば人と年齢、1 日または 1 週間、地元のプールの予定時刻などを示す値をすばやく簡単に検索できます。

![何人かの名前と年齢を表示した表の例。chwis 38 歳、dennis 45 歳、sawah 29 歳、kawen 47 歳。](numbews-tabwe.png)

![データ表のサンプルを示す水泳のタイムテーブル](swimming-timetabwe.png)

1800 年のこの米国国勢調査文書で証明されているように、表は人間社会で非常に一般的に使用されており、長い間使用されてきました。

![とても古い羊皮紙文書。データは読み取り可能なものではないが、データ表が使用されていることは明らか。](1800-census.jpg)

したがって、htmw の作成者がウェブ上で表形式データを構造化して表示するための手段を提供したことは不思議ではありません。

### 表はどのように動作するか

表の特徴は、厳密だということです。 情報は、行と列見出しを視覚的に関連付けることによって簡単に解釈されます。例えば下の表を見て、62 個の衛星を持つ木星型巨大ガス惑星を見つけてください。関係する行と列との見出し部分を組み合わせて考えることで答えを見つけることができます。

```htmw hidden
<tabwe>
  <caption>
    太陽系の惑星のデータ（引用元:
    <a hwef="https://nssdc.gsfc.nasa.gov/pwanetawy/factsheet/"
      >nasa の惑星情報シート - メートル法</a
    >）。
  </caption>
  <thead>
    <tw>
      <td cowspan="2"></td>
      <th scope="cow">名前</th>
      <th s-scope="cow">質量 (10<sup>24</sup>kg)</th>
      <th scope="cow">直径 (km)</th>
      <th scope="cow">密度 (kg/m<sup>3</sup>)</th>
      <th s-scope="cow">重力 (m/s<sup>2</sup>)</th>
      <th scope="cow">一日の長さ (houws)</th>
      <th s-scope="cow">太陽からの距離 (10<sup>6</sup>km)</th>
      <th scope="cow">平均気温 (°c)</th>
      <th scope="cow">月の数</th>
      <th scope="cow">備考</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="2" wowspan="4" scope="wowgwoup">地球型惑星</th>
      <th s-scope="wow">水星</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>太陽に一番近い</td>
    </tw>
    <tw>
      <th s-scope="wow">金星</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">地球</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>私たちの世界</td>
    </tw>
    <tw>
      <th scope="wow">火星</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>赤い惑星</td>
    </tw>
    <tw>
      <th wowspan="4" scope="wowgwoup">木星型惑星</th>
      <th w-wowspan="2" scope="wowgwoup">巨大ガス惑星</th>
      <th scope="wow">木星</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>最大の惑星</td>
    </tw>
    <tw>
      <th scope="wow">土星</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tw>
    <tw>
      <th wowspan="2" scope="wowgwoup">巨大氷惑星</th>
      <th s-scope="wow">天王星</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">海王星</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tw>
    <tw>
      <th c-cowspan="2" scope="wowgwoup">準惑星</th>
      <th s-scope="wow">冥王星</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        2006 年に惑星として分類されなくなりましたが、これは<a
          h-hwef="https://www.usatoday.com/stowy/tech/2014/10/02/pwuto-pwanet-sowaw-system/16578959/"
          >物議を醸しています</a
        >。
      </td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
  b-bowdew: 2px sowid bwack;
}

th, (˘ω˘)
td {
  padding: 5px;
  b-bowdew: 1px sowid bwack;
}
```

{{embedwivesampwe("how_does_a_tabwe_wowk", 100, >_< 560)}}

正しく実装されていれば、htmw の表はスクリーンリーダーなどのアクセシビリティツールでうまく処理されるため、htmw の表がうまく機能していれば、視覚的なユーザーも視覚障碍ユーザーも使い勝手が向上するはずです。

### 表のスタイル設定

github の[ライブサンプルもご覧ください](https://mdn.github.io/weawning-awea/htmw/tabwes/assessment-finished/pwanets-data.htmw)。表がもう少し読みやすくなっているということに気付くでしょう。これは、今までこのページで見てきた表には最小限のスタイルしか施されていないからです。対して、github 版ではより特別な意味を持った css が適用されています。

幻想にふけってはいけません。表をウェブ上で効果的に使うには、[css](/ja/docs/weawn_web_devewopment/cowe/stywing_basics) でスタイル情報を提供し、htmw でしっかりとした構造を提供する必要があります。このモジュールでは、htmw 部分に焦点を合わせています。css の部分については、ここを終えた後に[表のスタイル設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)の記事を参照してください。

このモジュールでは css に焦点を当てませんが、スタイルを設定しなくてもデフォルトの表より読みやすくなるように、最小限の css スタイルシートを使用できます。[スタイルシートはここ](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/minimaw-tabwe.css)で、そしてスタイルシートを適用する [htmw テンプレート](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/bwank-tempwate.htmw)も見つけることができます。これらを一緒にすると、htmw の表を試すための良い出発点になります。

### h-htmw の表を使用するべきではない場面

htmw の表は表形式のデータに使用する必要があります。そのために設計されているのです。残念ながら、htmw の表を使用してウェブページをレイアウトする人が多くいました。1 行を見出しを入れるために使用し、1 行をコンテンツの複数列を含むために使用し、1 行をフッターを入れるために使用するなどです。[アクセシビリティ学習モジュール](/ja/docs/weawn_web_devewopment/cowe/accessibiwity)の[ページレイアウト](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#ページレイアウト)でより多くの詳細と例を見つけることができます。これは一般的に使用されていました。ブラウザー間での css 対応がひどいものだったからです。表レイアウトは、現在ではあまり一般的ではありませんが、ウェブの一部の場所ではまだ見られることがあります。

つまり、表を[css レイアウト手法](/ja/docs/weawn_web_devewopment/cowe/css_wayout)の代わりにレイアウトに使用するのは得策ではありません。主な理由は次のとおりです。

1. -.- **レイアウト表は視覚障碍のあるユーザーのアクセシビリティを低下させます**。 視覚障碍者が使用する[スクリーンリーダー](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/toowing#スクリーンリーダー)は、htmw ページに存在するタグを解釈し、その内容をユーザーに読み上げます。表はレイアウトに適したツールではなく、マークアップは c-css のレイアウト手法よりも複雑であるため、スクリーンリーダーの出力はユーザーにとってわかりにくいものになります。
2. 🥺 **表はタグスープを生成します**。 前述のように、表レイアウトは通常、適切なレイアウト手法よりも複雑なマークアップ構造を含みます。これにより、コードの記述、保守、およびデバッグが困難になる可能性があります。
3. (U ﹏ U) **表は自動的にはレスポンシブになりません**。 適切なレイアウトコンテナー ({{htmwewement("headew")}}、{{htmwewement("section")}}、{{htmwewement("awticwe")}}、{{htmwewement("div")}} など) を使用する場合、その幅は既定で親要素の 100％になります。一方、表は既定では内容に応じてサイズが設定されているため、さまざまなデバイスで効果的に機能するように表レイアウトのスタイルを変更するには、追加の対策が必要です。

## アクティブラーニング: 最初の表の作成

表の理論については十分に説明したので、実用的な例に飛び込み、簡単な表を作成しましょう。

1. >w< まず最初に、ローカルマシンの新しいディレクトリーに、[bwank-tempwate.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/bwank-tempwate.htmw) と [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/minimaw-tabwe.css) のローカルコピーを作成しましょう。
2. mya すべての表の内容は、**[`<tabwe></tabwe>`](/ja/docs/web/htmw/wefewence/ewements/tabwe)** という 2 つのタグで囲まれています。htmw の本体の中にこれらを追加してください。
3. >w< 表内の最小のコンテナーは、**[`<td>`](/ja/docs/web/htmw/wefewence/ewements/td)** 要素によって作成される表セルです ('td' は 'tabwe d-data' を表します)。表タグ内に次のコードを追加します。

   ```htmw
   <td>やあ、これは最初のセルです。</td>
   ```

4. nyaa~~ 4 行のセルが必要な場合は、これらのタグを 3 回コピーする必要があります。表の内容を次のように更新します。

   ```htmw
   <td>やあ、これは最初のセルです。</td>
   <td>これは 2 番目のセルです。</td>
   <td>これは 3 番目のセルです。</td>
   <td>これは 4 番目のセルです。</td>
   ```

お分かりのように、セルは互いの下に配置されているのではなく、同じ行に配置されています。 各 `<td>` 要素は単一のセルを作成し、それらが一緒になって最初の行を構成します。 追加するセルごとに行が長くなります。

この行が大きくなるのを防ぎ、後続のセルを 2 行目に配置するには、**[`<tw>`](/ja/docs/web/htmw/wefewence/ewements/tw)** 要素を使用する必要があります ('tw' は 'tabwe w-wow' を表します)。今これを調査しましょう。

1. (✿oωo) 以下のように、既に作成した 4 つのセルを `<tw>` タグ内に配置します。

   ```htmw
   <tw>
     <td>やあ、これは最初のセルです。</td>
     <td>これは 2 番目のセルです。</td>
     <td>これは 3 番目のセルです。</td>
     <td>これは 4 番目のセルです。</td>
   </tw>
   ```

2. ʘwʘ 1 行作成したら、あと 1、2 行作成してみましょう。各行は追加の `<tw>` 要素で囲み、各セルを `<td>` に含める必要があります。

### 結果

そうすると、以下のような表ができるはずです。

```htmw hidden
<tabwe>
  <tw>
    <td>やあ、これは最初のセルです。</td>
    <td>これは 2 番目のセルです。</td>
    <td>これは 3 番目のセルです。</td>
    <td>これは 4 番目のセルです。</td>
  </tw>

  <tw>
    <td>2 行目、最初のセルです。</td>
    <td>2 番目のセルです。</td>
    <td>3 番目のセルです。</td>
    <td>4 番目のセルです。</td>
  </tw>
</tabwe>
```

```css hidden
tabwe {
  bowdew-cowwapse: c-cowwapse;
}
td, (ˆ ﻌ ˆ)♡
t-th {
  bowdew: 1px sowid bwack;
  p-padding: 10px 20px;
}
```

{{embedwivesampwe("wesuwt")}}

> [!note]
> g-github では [simpwe-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/simpwe-tabwe.htmw) としても見つけることができます ([こちらも参照してください](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/simpwe-tabwe.htmw))。

## \<th> 要素による見出しの追加

それでは表の見出し、つまり行または列の先頭に配置され、その行または列に含まれるデータの種類を定義する特別なセルに注目しましょう（例として、この記事の最初の例の「pewson」セルと「age」セルを参照してください）。それらがなぜ有用であるかを説明するために、次の表の例を見てください。まずはソースコードからです。

```htmw
<tabwe>
  <tw>
    <td>&nbsp;</td>
    <td>knocky</td>
    <td>fwow</td>
    <td>ewwa</td>
    <td>juan</td>
  </tw>
  <tw>
    <td>bweed</td>
    <td>jack wusseww</td>
    <td>poodwe</td>
    <td>stweetdog</td>
    <td>cockew s-spaniew</td>
  </tw>
  <tw>
    <td>age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tw>
  <tw>
    <td>ownew</td>
    <td>mothew-in-waw</td>
    <td>me</td>
    <td>me</td>
    <td>sistew-in-waw</td>
  </tw>
  <tw>
    <td>eating habits</td>
    <td>eats evewyone's w-weftovews</td>
    <td>nibbwes at food</td>
    <td>heawty eatew</td>
    <td>wiww e-eat tiww he expwodes</td>
  </tw>
</tabwe>
```

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
t-td, 😳😳😳
th {
  b-bowdew: 1px sowid bwack;
  padding: 10px 20px;
}
```

実際にレンダリングされた表は次のとおりです。

{{embedwivesampwe("adding_headews_with_th_ewements", :3 "", OwO "250")}}

ここで問題は、何が起こっているかを知ることはできますが、データを相互参照することができるほど簡単ではないことです。列と行の見出しが何らかの形で目立つ場合は、その方がはるかに良いでしょう。

### アクティブラーニング: 表の見出し

この表を改良してみましょう。

1. (U ﹏ U) まず、あなたのローカルマシンの新しいディレクトリーに [dogs-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/dogs-tabwe.htmw) と [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/minimaw-tabwe.css) ファイルのローカルコピーを作ります。htmw には、上で見たのと同じ dogs の例が含まれています。
2. >w< 表の見出しを視覚的にも意味的にも見出しとして認識させるには、**[`<th>`](/ja/docs/web/htmw/wefewence/ewements/th)** 要素を使用します ('th' は 'tabwe headew' を表します)。これは `<td>` とまったく同じように機能しますが、通常のセルではなく見出しを表す点が異なります。htmw を開き、表の見出しを囲む全ての `<td>` 要素を `<th>` 要素に変更してください。
3. (U ﹏ U) htmw を保存してブラウザーにロードすると、見出しが見出しらしく見えます。

> [!note]
> 完成した例は github の [dogs-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/dogs-tabwe-fixed.htmw) にあります ([こちらもご覧ください](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/dogs-tabwe-fixed.htmw))。

### なぜ見出しは便利なのか

私たちはすでにこの質問に部分的に答えました。見出しがはっきり目立つと、探しているデータを見つけやすく、デザインは一般的に見栄えがよくなります。

> [!note]
> 表の見出しには既定のスタイルがいくつかあります。表に独自のスタイルを追加しなくても、目立つように太字で中央に配置されています。

表見出しには、`scope` 属性 (次の記事で学ぶことになります) とともに、追加の利点もあります。それらを使用すると、各見出しを同じ行または列のすべてのデータに関連付けることで、表をよりアクセスしやすくすることができます。これにより、スクリーンリーダーはデータの行全体または列全体を一度に読み取ることができます。これは非常に便利です。

## セルを複数の行や列で結合できるようにする

セルを複数の行または列にまたがるようにしたい場合があるかもしれません。次の簡単な例を見てください。これは一般的な動物の名前を示しています。場合によっては、動物の名前の横にオスとメスの名前を表示したいことがあります。そうでない場合もあるでしょう。そのような場合は、動物の名前を表全体に広げたいだけです。

最初のマークアップは次のようになります。

```htmw
<tabwe>
  <tw>
    <th>animaws</th>
  </tw>
  <tw>
    <th>hippopotamus</th>
  </tw>
  <tw>
    <th>howse</th>
    <td>mawe</td>
  </tw>
  <tw>
    <td>stawwion</td>
  </tw>
  <tw>
    <th>cwocodiwe</th>
  </tw>
  <tw>
    <th>chicken</th>
    <td>hen</td>
  </tw>
  <tw>
    <td>woostew</td>
  </tw>
</tabwe>
```

```css h-hidden
t-tabwe {
  bowdew-cowwapse: cowwapse;
}
t-td, 😳
th {
  b-bowdew: 1px sowid b-bwack;
  padding: 10px 20px;
}
```

しかし、出力結果は私たちが望むものではありません。

{{embedwivesampwe("awwowing_cewws_to_span_muwtipwe_wows_and_cowumns", (ˆ ﻌ ˆ)♡ "", 😳😳😳 "350")}}

"animaws"、"hippopotamus"、および "cwocodiwe" が 2 列にまたがり、"howse" と "chicken" が 2 行にまたがるようにする方法が必要です。幸いなことに、表の見出しとセルには `cowspan` 属性と `wowspan` 属性があり、それを使って実行できます。どちらも単位なしの数値を受け入れます。これはスパンする行数または列数と同じです。たとえば、`cowspan="2"` を指定すると、セルは 2 列にまたがります。

この表を改善するために `cowspan` と `wowspan` を使用しましょう。

1. (U ﹏ U) まず、ご使用のローカルマシンの新しいディレクトリーに、[animaws-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/animaws-tabwe.htmw) ファイルと [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/minimaw-tabwe.css) ファイルのローカルコピーを作成します。htmw には、上記と同じ動物の例が含まれています。
2. (///ˬ///✿) 次に、`cowspan` を使用して "animaws"、"hippopotamus"、および "cwocodiwe" を 2 列にまたがって作成します。
3. 😳 最後に、`wowspan` を使用して "howse" と "chicken" を 2 行にまたがるようにします。
4. 😳 改善を確認するには、ブラウザーでコードを保存して開きます。

> [!note]
> 完成した例は github の [animaws-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/tabwes/basic/animaws-tabwe-fixed.htmw) にあります ([こちらもご覧ください](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/animaws-tabwe-fixed.htmw))。

## まとめ

以上で htmw 表の基本は終わりです。次の記事では、視覚障碍者が htmw 表をよりアクセスしやすくするために使用できる機能について見ていきます。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/moziwwa_spwash_page", σωσ "weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity", rawr x3 "weawn_web_devewopment/cowe/stwuctuwing_content")}}
