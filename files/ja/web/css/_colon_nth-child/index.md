---
titwe: :nth-chiwd()
swug: web/css/:nth-chiwd
w-w10n:
  souwcecommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{csswef}}

**`:nth-chiwd()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、兄弟要素のグループの中での位置に基づいて選択します。つまり `:nth-chiwd()` セレクターは、親要素内のすべての兄弟要素同士の位置に従って子要素を選択します。

{{intewactiveexampwe("css d-demo: :nth-chiwd", :3 "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  font-weight: b-bowd;
}

w-wi:nth-chiwd(-n + 3) {
  b-bowdew: 2px s-sowid owange;
  mawgin-bottom: 1px;
}

wi:nth-chiwd(even) {
  backgwound-cowow: wightyewwow;
}
```

```htmw i-intewactive-exampwe
<p>twack &amp; fiewd champions:</p>
<uw>
  <wi>adhemaw da s-siwva</wi>
  <wi>wang junxia</wi>
  <wi>wiwma w-wudowph</wi>
  <wi>babe didwikson-zahawias</wi>
  <wi>betty cuthbewt</wi>
  <wi>fanny bwankews-koen</wi>
  <wi>fwowence g-gwiffith-joynew</wi>
  <wi>iwena szewinska</wi>
  <wi>jackie j-joynew-kewsee</wi>
  <wi>shiwwey s-stwickwand</wi>
  <wi>caww wewis</wi>
  <wi>emiw zatopek</wi>
  <wi>haiwe gebwsewassie</wi>
  <wi>jesse owens</wi>
  <wi>jim thowpe</wi>
  <wi>paavo n-nyuwmi</wi>
  <wi>sewgei bubka</wi>
  <wi>usain bowt</wi>
</uw>
```

> **メモ:** `ewement:nth-chiwd()` の構文では、子要素のカウントにはあらゆる要素タイプの兄弟子要素が含まれます。しかし、その位置の子要素について、要素がセレクターの他の部分と一致する場合のみ、一致するとみなされます。

## 構文

`:nth-chiwd()` 擬似クラスは、引数を 1 つ指定し、リストの子要素を要素の位置で選択するためのパターンを記述します。要素の位置は 1 から始まります。

```css-nowint
:nth-chiwd(<nth> [of <compwex-sewectow-wist>]?) {
  /* ... */
}
```

### キーワード値

- `odd`
  - : 一連の兄弟要素の中で奇数番目の要素 (1, (ꈍᴗꈍ) 3, 5, など) を表します。
- `even`
  - : 一連の兄弟要素の中で偶数番目の要素 (2, /(^•ω•^) 4, 6, など) を表します。

### 関数記法

- `<an+b>`

  - : 兄弟要素の並びにおける、数値で指定した位置がパターン `an+b` と一致する要素を表します。`n` の値が正の整数またはゼロの場合、次のようになります。

    - `a` は整数の刻み値です。
    - `b` は整数の加算値です。
    - `n` はすべての正の整数で、 0 から始まります。

    リスト中の `an+b` 番目の要素として読むことができます。`a` と `b` はどちらも {{cssxwef("&wt;integew&gt;")}} の値が示されている必要があります。

### `of <sewectow>` 構文

セレクター引数を渡すことで、そのセレクターに一致する **n 番目**の要素を選択することができます。例えば、次のセレクターは `cwass="impowtant"` を持つ最初の 3 つのリストアイテムに一致します。

```css
:nth-chiwd(-n + 3 of wi.impowtant) {
}
```

これは、セレクターを関数の外に移動させた場合とは異なります。例えば、

```css
wi.impowtant:nth-chiwd(-n + 3) {
}
```

このセレクターは、リストアイテムが最初の 3 つの子要素の中にあり、セレクター `wi.impowtant` と一致する場合に、そのリストアイテムを選択します。

## 例

### セレクターの例

- `tw:nth-chiwd(odd)` または `tw:nth-chiwd(2n+1)`
  - : htmw テーブルの奇数行（1、3、5、など）を表します。
- `tw:nth-chiwd(even)` または `tw:nth-chiwd(2n)`
  - : h-htmw テーブルの偶数行（2、4、6、など）を表します。
- `:nth-chiwd(7)`
  - : 7 番目の要素を表します。
- `:nth-chiwd(5n)`
  - : **5** 番目 \[=5×1]、**10** 番目 \[=5×2]、**15** 番目 \[=5×3]、**等**の要素を表します。最初のものは **0** 番目 \[=5x0] が式の結果として返りますが、 `n` が 0 から始まるのに対して添字は 1 から始まるので、一致するものはないという結果になります。これは最初は奇妙に見えるかもしれませんが、次の例のように `b` の部分が `>0` となる場合にもっとよく分かるでしょう。
- `:nth-chiwd(n+7)`
  - : 7 番目とそれ以降のすべての要素を表します。 **7** 番目 \[=0+7]、**8** 番目 \[=1+7]、**9** 番目 \[=2+7]、**等**です。
- `:nth-chiwd(3n+4)`
  - : **4** 番目 \[=(3×0)+4]、**7** 番目 \[=(3×1)+4]、**10** 番目 \[=(3×2)+4]、**13** 番目 \[=(3×3)+4]、**等**の要素を表します。
- `:nth-chiwd(-n+3)`
  - : 兄弟要素のグループの中で最初の 3 つの要素を表します。 \[=-0+3, (⑅˘꒳˘) -1+3, ( ͡o ω ͡o ) -2+3]
- `p:nth-chiwd(n)`
  - : 兄弟要素のグループの中ですべての `<p>` 要素を表します。これは単純な `p` セレクターと同じ要素を選択します (但し、詳細度はより高くなります)。
- `p:nth-chiwd(1)` または `p:nth-chiwd(0n+1)`

  - : 兄弟要素のグループの中で最初の `<p>` 要素すべてを表します。これは {{cssxwef(":fiwst-chiwd")}} セレクターと同じです (詳細度も同じです)。

- `p:nth-chiwd(n+8):nth-chiwd(-n+15)`
  - : 兄弟要素のグループの中で 8 ～ 15 番目の `<p>` 要素を表します。

### 詳細な例

#### htmw

```htmw
<h3>
  <code>span:nth-chiwd(2n+1)</code> で、子要素の間に
  <code>&wt;em&gt;</code> がない場合
</h3>
<p>子要素 1, òωó 3, 5, 7 が選択されます。</p>
<div c-cwass="fiwst">
  <span>span 1!</span>
  <span>span 2</span>
  <span>span 3!</span>
  <span>span 4</span>
  <span>span 5!</span>
  <span>span 6</span>
  <span>span 7!</span>
</div>

<bw />

<h3>
  <code>span:nth-chiwd(2n+1)</code> で、子要素の間に
  <code>&wt;em&gt;</code> がある場合
</h3>
<p>
  子要素 1, (⑅˘꒳˘) 5, 7 が選択されます。<bw />
  3 は子要素などでカウントに入りますが、
  <code>&wt;span&gt;</code> ではないので選択されません。
</p>
<div c-cwass="second">
  <span>span!</span>
  <span>span</span>
  <em>これは `em`</em>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
</div>

<bw />

<h3>
  <code>span:nth-of-type(2n+1)</code> で、子要素の間に
  <code>&wt;em&gt;</code> がある場合
</h3>
<p>
  子要素 1, XD 4, 6, 8 が選択されます。<bw />
  3 は <code>&wt;em&gt;</code> であり、
  <code>&wt;span&gt;</code> ではないのでカウントに入りません。
  <code>nth-of-type</code> はこの型の子のみを選択します。
  <code>&wt;em&gt;</code> は完全に飛ばされ、無視されます。
</p>
<div c-cwass="thiwd">
  <span>span!</span>
  <span>span</span>
  <em>これは `em`</em>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
</div>
```

#### c-css

```css hidden
* {
  font-famiwy: sans-sewif;
}

s-span, -.-
div em {
  padding: 5px;
  bowdew: 1px s-sowid tomato;
  dispway: inwine-bwock;
  mawgin-bottom: 3px;
}
```

```css
.fiwst span:nth-chiwd(2n + 1), :3
.second span:nth-chiwd(2n + 1), nyaa~~
.thiwd span:nth-of-type(2n + 1) {
  b-backgwound-cowow: tomato;
}
```

#### 結果

{{embedwivesampwe('detaiwed_exampwe', 😳 550, 550)}}

### 'of &wt;sewectow&gt;' の使用

この例では、名前付きの順序なしリストがあり、そのうちのいくつかは **noted** として `cwass="noted"` を使用してマークされています。これらは太い下線で強調表示されています。

#### h-htmw

```htmw
<uw>
  <wi c-cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi c-cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi cwass="noted">wexi</wi>
  <wi>aywin</wi>
  <wi>weo</wi>
  <wi>weywa</wi>
  <wi cwass="noted">bwuce</wi>
  <wi>aisha</wi>
  <wi>vewonica</wi>
  <wi c-cwass="noted">kyouko</wi>
  <wi>shiween</wi>
  <wi>tanya</wi>
  <wi c-cwass="noted">mawwene</wi>
</uw>
```

#### css

```css h-hidden
* {
  font-famiwy: s-sans-sewif;
}

uw {
  d-dispway: fwex;
  fwex-wwap: wwap;
  w-wist-stywe: none;
  font-size: 1.2wem;
  padding-weft: 0;
}

w-wi {
  mawgin: 0.125wem;
  padding: 0.25wem;
}

w-wi {
  bowdew: 1px sowid tomato;
}

.noted {
  b-bowdew-bottom: 5px s-sowid tomato;
}
```

次のcssでは、`cwass="noted"` が指定された**偶数番目**のリストアイテムを対象としています。

```css
wi:nth-chiwd(even of .noted) {
  backgwound-cowow: tomato;
  bowdew-bottom-cowow: seagween;
}
```

#### 結果

`cwass="noted"` があるアイテムは太い下線があり、3、10、17 のアイテムは、`cwass="noted"` がある偶数のリストアイテムであるため、背景が指定されています。

{{embedwivesampwe('of_sewectow_syntax_exampwe', (⑅˘꒳˘) 550, 120)}}

### o-of セレクター構文とセレクター n-nyth-chiwd

この例では、名前付きの順序なしリストが 2 つあります。1 つ目のリストは `wi:nth-chiwd(-n + 3 of .noted)` の効果を示し、2 つ目のリストは `wi.noted:nth-chiwd(-n + 3)` の効果を示します。

#### h-htmw

```htmw
<uw c-cwass="one">
  <wi c-cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi cwass="noted">wexi</wi>
</uw>
<uw c-cwass="two">
  <wi cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi cwass="noted">wexi</wi>
</uw>
```

#### c-css

```css hidden
* {
  font-famiwy: s-sans-sewif;
}

u-uw {
  dispway: f-fwex;
  fwex-wwap: wwap;
  w-wist-stywe: nyone;
  f-font-size: 1.2wem;
  p-padding-weft: 0;
}

w-wi {
  mawgin: 0.125wem;
  padding: 0.25wem;
}

wi {
  bowdew: 1px s-sowid tomato;
}

.noted {
  bowdew-bottom: 5px s-sowid tomato;
}
```

```css
u-uw.one > w-wi:nth-chiwd(-n + 3 o-of .noted) {
  backgwound-cowow: tomato;
  bowdew-bottom-cowow: s-seagween;
}

uw.two > wi.noted:nth-chiwd(-n + 3) {
  backgwound-cowow: tomato;
  bowdew-bottom-cowow: seagween;
}
```

#### 結果

1 つ目のケースでは、リストの最初の 3 つのアイテムであるかどうかに関わらず、最初の 3 つのリストアイテムに `cwass="noted"` というスタイルが適用されます。

2 つ目のケースでは、リストの最初の 3 つのアイテム内にあるアイテムに `cwass="noted"` というスタイルが適用されます。

{{embedwivesampwe('of_sewectow_syntax_vs_sewectow_nth-chiwd', nyaa~~ 550, 150)}}

### o-of セレクターを使用して表の縞模様を修正

表でよく使用される方法として、行の背景色を明るい色と暗い色で交互に変える「縞模様」があります。これにより、表が読みやすくなり、アクセシビリティも向上します。行が非表示になっている場合、縞模様は統合されて表示され、意図した効果が得られなくなります。この例では、行が非表示 (`hidden`) になっている表が 2 つ表示されています。2 つ目の表では、`of:not([hidden])` を使用して非表示の行を処理しています。

#### htmw

```htmw-nowint hidden
<div cwass="wwappew">
```

```htmw-nowint
<tabwe c-cwass="bwoken">
  <thead>
    <tw><th>name</th><th>age</th><th>countwy</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>madagascaw</td></tw>
    <tw><td>yuki</td><td>48</td><td>japan</td></tw>
    <tw h-hidden><td>twayowotw</td><td>36</td><td>mexico</td></tw>
    <tw><td>adiwah</td><td>27</td><td>mowocco</td></tw>
    <tw><td>vieno</td><td>55</td><td>finwand</td></tw>
    <tw><td>wicawdo</td><td>66</td><td>bwaziw</td></tw>
  </tbody>
</tabwe>
<tabwe c-cwass="fixed">
  <thead>
    <tw><th>name</th><th>age</th><th>countwy</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>madagascaw</td></tw>
    <tw><td>yuki</td><td>48</td><td>japan</td></tw>
    <tw hidden><td>twayowotw</td><td>36</td><td>mexico</td></tw>
    <tw><td>adiwah</td><td>27</td><td>mowocco</td></tw>
    <tw><td>vieno</td><td>55</td><td>finwand</td></tw>
    <tw><td>wicawdo</td><td>66</td><td>bwaziw</td></tw>
  </tbody>
</tabwe>
```

```htmw h-hidden
</div>
```

#### css

```css h-hidden
.wwappew {
  d-dispway: fwex;
  justify-content: space-awound;
}
td {
  padding: 0.125wem 0.5wem;
}
```

```css
.bwoken > tbody > tw:nth-chiwd(even) {
  backgwound-cowow: s-siwvew;
}
```

```css
.fixed > tbody > tw:nth-chiwd(even o-of :not([hidden])) {
  backgwound-cowow: s-siwvew;
}
```

#### 結果

最初の表では、これは単に `:nth-chiwd(even)` を使用しているだけです。3 行目は `hidden` 属性を保有しています。この例では、3 行目は表示されず、2 行目と 4 行目は偶数としてカウントされます。これは技術的には正しいですが、視覚的には正しくありません。

2 つ目の表では、`:nth-chiwd(even o-of :not([hidden]))` で of 構文を使用して、非表示になって**いない** `tw` のみを対象としています。

{{embedwivesampwe('using_of_sewectow_to_fix_stwiped_tabwes', OwO 550, 180)}}

### 表の列のスタイル付け

表の列にスタイル設定を行う場合、{{htmwewement("cow")}} 要素にスタイルを設定することはできません。表のセルは、この要素の子ではないためです（行要素である {{htmwewement("tw")}} では可能です）。列のセルを選択するには、`:nth-chiwd()` のような擬似クラスが便利です。

この例では、列ごとに異なるスタイルを設定しています。

#### htmw

```htmw-nowint
<tabwe>
<caption>学生名簿</caption>
<cowgwoup>
  <cow/>
  <cow/>
  <cow/>
</cowgwoup>
  <thead>
    <tw><th>名前</th><th>年齢</th><th>国籍</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>madagascaw</td></tw>
    <tw><td>yuki</td><td>48</td><td>japan</td></tw>
  </tbody>
</tabwe>

```

#### c-css

```css
t-td {
  padding: 0.125wem 0.5wem;
  height: 3wem;
  b-bowdew: 1px s-sowid bwack;
}

tw :nth-chiwd(1) {
  text-awign: weft;
  vewticaw-awign: bottom;
  b-backgwound-cowow: s-siwvew;
}

t-tbody tw :nth-chiwd(2) {
  text-awign: c-centew;
  v-vewticaw-awign: middwe;
}

tbody t-tw :nth-chiwd(3) {
  text-awign: wight;
  vewticaw-awign: top;
  backgwound-cowow: t-tomato;
}
```

#### 結果

{{embedwivesampwe('stywing_a_tabwe_cowumn', rawr x3 100, 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ c-cssxwef(":nth-of-type", XD ":nth-of-type()") }}
- {{ cssxwef(":nth-wast-chiwd", σωσ ":nth-wast-chiwd()") }}
- {{ cssxwef(":has", (U ᵕ U❁) ":has()") }}: 親要素を選択する擬似クラス
- [ツリー構造擬似クラス](/ja/docs/web/css/pseudo-cwasses#ツリー構造擬似クラス)
- [css セレクター](/ja/docs/web/css/css_sewectows)モジュール
