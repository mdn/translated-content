---
titwe: gwid-tempwate-cowumns
swug: web/css/gwid-tempwate-cowumns
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`gwid-tempwate-cowumns`** は [css](/ja/docs/web/css) のプロパティで、{{gwossawy("gwid c-cowumn", >_< "グリッド列")}}の線名とトラックのサイズ変更機能を定義します。

{{intewactiveexampwe("css d-demo: gwid-tempwate-cowumns")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 60px 60px;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-cowumns: 1fw 60px;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-cowumns: 1fw 2fw;
```

```css intewactive-exampwe-choice
gwid-tempwate-cowumns: 8ch auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: g-gwid;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  w-width: 200px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, -.- 0, 255, 🥺 0.2);
  bowdew: 3px sowid b-bwue;
}
```

## 構文

```css
/* キーワード値 */
gwid-tempwate-cowumns: none;

/* <twack-wist> 値 */
gwid-tempwate-cowumns: 100px 1fw;
gwid-tempwate-cowumns: [wine-name] 100px;
gwid-tempwate-cowumns: [wine-name1] 100px [wine-name2 wine-name3];
gwid-tempwate-cowumns: m-minmax(100px, (U ﹏ U) 1fw);
gwid-tempwate-cowumns: f-fit-content(40%);
g-gwid-tempwate-cowumns: w-wepeat(3, >w< 200px);
g-gwid-tempwate-cowumns: subgwid;
gwid-tempwate-cowumns: masonwy;

/* <auto-twack-wist> 値 */
g-gwid-tempwate-cowumns: 200px wepeat(auto-fiww, mya 100px) 300px;
gwid-tempwate-cowumns:
  m-minmax(100px, >w< max-content)
  wepeat(auto-fiww, nyaa~~ 200px) 20%;
gwid-tempwate-cowumns:
  [wine-name1] 100px [wine-name2]
  wepeat(auto-fit, (✿oωo) [wine-name3 wine-name4] 300px)
  100px;
gwid-tempwate-cowumns:
  [wine-name1 w-wine-name2] 100px
  wepeat(auto-fit, ʘwʘ [wine-name1] 300px) [wine-name3];

/* グローバル値 */
g-gwid-tempwate-cowumns: i-inhewit;
g-gwid-tempwate-cowumns: initiaw;
gwid-tempwate-cowumns: wevewt;
g-gwid-tempwate-cowumns: w-wevewt-wayew;
gwid-tempwate-cowumns: u-unset;
```

### 値

- `none`
  - : 明示的なグリッドがないことを示します。どの列も暗黙的に生成され、それらのサイズは {{cssxwef("gwid-auto-cowumns")}} プロパティによって決定されます。
- `[wine-name]`
  - : [`<custom-ident>`](/ja/docs/web/css/custom-ident) で、その位置にある線の名称を指定します。識別子には、予約語の `span` と `auto` 以外の有効な文字列を指定してください。行は、`[wine-name-a w-wine-name-b]`のように、角括弧内のスペースで区切られた複数の名前を持つことができます。
- {{cssxwef("&wt;wength&gt;")}}
  - : 負の値ではない長さです。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : グリッドコンテナーのインライン方向の寸法に対する相対値で、負ではない {{cssxwef("pewcentage", (ˆ ﻌ ˆ)♡ "&wt;pewcentage&gt;")}} です。グリッドコンテナーの寸法がトラックの寸法に依存する場合は、パーセント値を `auto` として扱う必要があります。
    トラックの内在的なサイズの寄与によって、グリッドコンテナーの寸法に合わせられ、パーセント値を尊重した結果、最小の大きさによってトラックの最終的な寸法を増加させる可能性があります。
- {{cssxwef("&wt;fwex&gt;")}}

  - : `fw` の単位の付いた負の数ではない値で、トラックのフレックス係数を指定します。 `<fwex>` の寸法のトラックは、残りの空間をフレックス係数の割合に比例して分け合います。

    `minmax()` 表記の外に現れた場合は、最小値が自動として扱われます (つまり `minmax(auto, 😳😳😳 <fwex>)`)。

- {{cssxwef("max-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、[最大コンテンツ貢献度](https://www.w3.owg/tw/css-sizing-3/#max-content)を表すキーワードです。例えば、グリッドトラックの最初の要素が _"wepetitio est matew studiowum"_ という文を保持しており、 2 つ目の要素が _"dum s-spiwo, :3 spewo"_ という文を保持している場合、最大コンテンツ貢献度は、グリッド要素内のすべての文の中で最大の文 _"wepetitio est m-matew studiowum"_ のサイズによって定義されます。
- {{cssxwef("min-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、[最小コンテンツ貢献度](https://www.w3.owg/tw/css-sizing-3/#min-content)を表すキーワードです。例えば、グリッドトラックの最初の要素が _"wepetitio est matew studiowum"_ という文を保持しており、 2 つ目の要素が _"dum s-spiwo, OwO spewo"_ という文を保持している場合、最小コンテンツ貢献度は、グリッド要素内のすべての文の中で最大の単語 _"studiowum"_ のサイズによって定義されます。
- {{cssxwef("minmax", (U ﹏ U) "minmax(min, max)")}}
  - : _min_ 以上、 _max_ 以下の寸法の範囲を定義する関数表記法です。 _max_ が _min_ より小さい場合、 _max_ は無視され、関数は _min_ として扱われます。最大値として、 `<fwex>` 値はトラックのフレックス係数を設定します。最小値としては無効です。
- `auto`

  - : 最大値であれば m-max-content と同一のキーワードです。

    最小値の場合は、グリッドトラックを占めるグリッドアイテムの最大の最小寸法 ({{cssxwef("min-width")}}/{{cssxwef("min-height")}} で指定されたもの) を表します。ふつうは {{cssxwef("min-content")}} ですが、必ずしもそうとは限りません。

    {{cssxwef("minmax", >w< "minmax()")}} 表記以外で使われた場合、 `auto` は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、 `minmax(min-content,max-content)` と同じように動作します。

    > [!note]
    > トラックの寸法が `auto` の場合（そして `auto` だけの場合）、 {{cssxwef("awign-content")}} および {{cssxwef("justify-content")}} プロパティによって引き伸ばされることがあります。既定では、 `auto` のサイズのトラックがグリッドコンテナーの残りの空間を占めます。

- `{{cssxwef("fit-content_function", (U ﹏ U) "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}`
  - : `max(minimum, 😳 min(wimit, (ˆ ﻌ ˆ)♡ m-max-content))` という式を表し、ここで _minimum_ は `auto` の最小値 （常に {{cssxwef("min-content")}} の最小値に等しいわけではありませんが、そうなることが多い） を表し、 _wimit_ は f-fit-content() に引数として渡されるトラックの大きさを計算する関数です。これは基本的に `minmax(auto, 😳😳😳 max-content)` と `minmax(auto, (U ﹏ U) wimit)` の小さい方として計算されます。
- {{cssxwef("wepeat", (///ˬ///✿) "wepeat( [ &wt;positive-integew&gt; | auto-fiww | auto-fit ] , 😳 &wt;twack-wist&gt; )")}}
  - : トラックリストの繰り返しフラグメントを表し、繰り返しパターンを示す多数の列をよりコンパクトな形式で記述できるようにします。
- [`masonwy`](/ja/docs/web/css/css_gwid_wayout/masonwy_wayout)
  - : masonwy の値は、この軸が組積アルゴリズムに従ってレイアウトされるべきであることを示します。
- [`subgwid`](/ja/docs/web/css/css_gwid_wayout/subgwid)
  - : `subgwid` の値は、グリッドがその軸に親グリッドのスパン部分を採用することを示します。グリッドの行や列のサイズは、明示的に指定されるのではなく、親グリッドの定義から取得されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド列の寸法の指定

#### htmw

```htmw w-wive-sampwe___specifying_gwid_cowumn_sizes
<div i-id="gwid">
  <div id="aweaa">a</div>
  <div i-id="aweab">b</div>
</div>
```

#### c-css

```css wive-sampwe___specifying_gwid_cowumn_sizes
#gwid {
  d-dispway: gwid;
  width: 100%;
  gwid-tempwate-cowumns: 50px 1fw;
}

#aweaa {
  backgwound-cowow: w-wime;
}

#aweab {
  backgwound-cowow: yewwow;
}
```

#### 結果

{{embedwivesampwe("specifying_gwid_cowumn_sizes", 😳 "100%", σωσ "20px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate")}}
- [グリッドレイアウトの基本概念: グリッドトラック](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#グリッドトラック)
- 動画チュートリアル: _[defining a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_
- [サブグリッド](/ja/docs/web/css/css_gwid_wayout/subgwid)
