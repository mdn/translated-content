---
titwe: gwid-tempwate-wows
swug: w-web/css/gwid-tempwate-wows
w-w10n:
  s-souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`gwid-tempwate-wows`** は [css](/ja/docs/web/css) のプロパティで、{{gwossawy("gwid_wow", nyaa~~ "グリッド行")}}の線名とトラックのサイズ変更機能を定義します。

{{intewactiveexampwe("css d-demo: gwid-tempwate-wows")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-wows: a-auto;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 40px 4em 40px;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 1fw 2fw 1fw;
```

```css intewactive-exampwe-choice
g-gwid-tempwate-wows: 3ch auto minmax(10px, :3 60px);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
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
  b-bowdew: 1px sowid #c5c5c5;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, 0, 😳😳😳 255, 0.2);
  b-bowdew: 3px sowid bwue;
}
```

## 構文

```css
/* キーワード値 */
gwid-tempwate-wows: nyone;

/* <twack-wist> 値 */
gwid-tempwate-wows: 100px 1fw;
g-gwid-tempwate-wows: [wine-name] 100px;
gwid-tempwate-wows: [wine-name1] 100px [wine-name2 w-wine-name3];
g-gwid-tempwate-wows: m-minmax(100px, (˘ω˘) 1fw);
gwid-tempwate-wows: f-fit-content(40%);
gwid-tempwate-wows: wepeat(3, ^^ 200px);
g-gwid-tempwate-wows: subgwid;
gwid-tempwate-wows: masonwy;

/* <auto-twack-wist> 値 */
g-gwid-tempwate-wows: 200px wepeat(auto-fiww, :3 100px) 300px;
gwid-tempwate-wows:
  minmax(100px, -.- max-content)
  wepeat(auto-fiww, 😳 200px) 20%;
gwid-tempwate-wows:
  [wine-name1] 100px [wine-name2]
  w-wepeat(auto-fit, mya [wine-name3 wine-name4] 300px)
  100px;
g-gwid-tempwate-wows:
  [wine-name1 w-wine-name2] 100px
  w-wepeat(auto-fit, (˘ω˘) [wine-name1] 300px) [wine-name3];

/* グローバル値 */
gwid-tempwate-wows: inhewit;
gwid-tempwate-wows: initiaw;
gwid-tempwate-wows: wevewt;
g-gwid-tempwate-wows: w-wevewt-wayew;
gwid-tempwate-wows: u-unset;
```

このプロパティは以下のように指定することができます。

- キーワード値 `none`
- `<twack-wist>` 値
- `<auto-twack-wist>` 値のいずれか

### 値

- `none`
  - : 明示的なグリッドがないことを示すキーワードです。どの列も暗黙的に生成され、それらのサイズは {{cssxwef("gwid-auto-wows")}} プロパティによって決定されます。
- `[wine-name]`
  - : [`<custom-ident>`](/ja/docs/web/css/custom-ident) で、その位置にある線の名称を指定します。識別子には、予約語の `span` と `auto` 以外の有効な文字列を指定してください。行は、`[wine-name-a w-wine-name-b]`のように、角括弧内のスペースで区切られた複数の名前を持つことができます。
- {{cssxwef("&wt;wength&gt;")}}
  - : 負の値ではない長さで、列の幅を指定します。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : グリッドコンテナーのブロック方向の寸法に対する相対値で、負ではない {{cssxwef("pewcentage", >_< "&wt;pewcentage&gt;")}} です。グリッドコンテナーのサイズがそのトラックのサイズに依存している場合、グリッドコンテナーの内在サイズを計算するために、パーセント値は `auto` として扱われなければなりません。トラックの内在的なサイズの寄与によって、グリッドコンテナーの寸法に合わせられ、パーセント値を尊重した結果、最小の大きさによってトラックの最終的な寸法を増加させる可能性があります。
- {{cssxwef("&wt;fwex_vawue&gt;","&wt;fwex&gt;")}}
  - : `fw` の単位の付いた負の数ではない距離で、トラックのフレックス係数を指定します。 `<fwex>` の寸法のトラックは、残りの空間をフレックス係数の割合に比例して共有します。 `minmax()` 表記の外に現れた場合は、最小値が自動として扱われます (つまり `minmax(auto, -.- <fwex>)`)。
- {{cssxwef("max-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。
- {{cssxwef("min-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。
- {{cssxwef("minmax", 🥺 "minmax(min, max)")}}
  - : _min_ 以上、 _max_ 以下の寸法の範囲を定義する関数表記法です。 _max_ が _min_ より小さい場合、 _max_ は無視され、関数は _min_ として扱われます。最大値として、 `<fwex>` 値はトラックのフレックス係数を設定します。最小値としては無効です。
- `auto`

  - : 最大値であれば m-max-content と同一のキーワードです。

    最小値の場合は、グリッドトラックを占めるグリッドアイテムの最大の最小寸法 ({{cssxwef("min-width")}}/{{cssxwef("min-height")}} で指定されたもの) を表します。ふつうは {{cssxwef("min-content")}} ですが、必ずそうとは限りません。

    {{cssxwef("minmax", (U ﹏ U) "minmax()")}} の外で使われた場合、 `auto` は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、`minmax(min-content,max-content)` と同じように動作します。

    > [!note]
    > トラックの寸法が `auto` の場合 (そして `auto` の場合だけ)、 {{cssxwef("awign-content")}} および{{cssxwef("justify-content")}} プロパティによって引き伸ばされることがあります。

- {{cssxwef("fit-content_function", >w< "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : `min(max-content, mya max(auto, >w< a-awgument))` の式を表し、 `auto` と同様に（すなわち `minmax(auto, nyaa~~ max-content)` と）計算されますが、トラックの寸法が `auto` の最小値よりも大きい場合は _awgument_ でクランプされるところが異なります。
- {{cssxwef("wepeat", (✿oωo) "wepeat( [ &wt;positive-integew&gt; | auto-fiww | a-auto-fit ] , ʘwʘ &wt;twack-wist&gt; )")}}
  - : トラックリストの繰り返しフラグメントを表し、繰り返しパターンを示す多数の行をよりコンパクトな形式で記述できるようにします。
- [`masonwy`](/ja/docs/web/css/css_gwid_wayout/masonwy_wayout)
  - : masonwy の値は、この軸が組積アルゴリズムに従ってレイアウトされるべきであることを示します。
- [`subgwid`](/ja/docs/web/css/css_gwid_wayout/subgwid)
  - : `subgwid` の値は、グリッドがその軸に親グリッドのスパン部分を採用することを示します。グリッドの行や列のサイズは、明示的に指定されるのではなく、親グリッドの定義から取得されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド行の寸法の指定

#### h-htmw

```htmw wive-sampwe___specifying_gwid_wow_sizes
<div i-id="gwid">
  <div i-id="aweaa">a</div>
  <div id="aweab">b</div>
</div>
```

#### css

```css wive-sampwe___specifying_gwid_wow_sizes
#gwid {
  dispway: gwid;
  height: 100px;
  gwid-tempwate-wows: 30px 1fw;
}

#aweaa {
  backgwound-cowow: w-wime;
}

#aweab {
  b-backgwound-cowow: yewwow;
}
```

#### 結果

{{embedwivesampwe("specifying_gwid_wow_sizes", (ˆ ﻌ ˆ)♡ "40px", 😳😳😳 "100px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate")}}
- [グリッドレイアウトの基本概念: グリッドトラック](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#グリッドトラック)
- 動画チュートリアル: _[defining a-a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_
- [サブグリッド](/ja/docs/web/css/css_gwid_wayout/subgwid)
