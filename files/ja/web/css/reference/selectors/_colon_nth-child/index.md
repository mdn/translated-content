---
title: :nth-child()
slug: Web/CSS/Reference/Selectors/:nth-child
original_slug: Web/CSS/:nth-child
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:nth-child()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、兄弟要素のグループの中での位置に基づいて選択します。つまり `:nth-child()` セレクターは、親要素内のすべての兄弟要素同士の位置に従って子要素を選択します。

{{InteractiveExample("CSS デモ: :nth-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:nth-child(-n + 3) {
  border: 2px solid orange;
  margin-bottom: 1px;
}

li:nth-child(even) {
  background-color: lightyellow;
}
```

```html interactive-example
<p>陸上競技のチャンピオン:</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

> [!NOTE]
> `element:nth-child()` の構文では、子要素のカウントにはあらゆる要素タイプの兄弟子要素が含まれます。しかし、その位置の子要素について、要素がセレクターの他の部分と一致する場合のみ、一致するとみなされます。

## 構文

```css-nolint
:nth-child([ <An+B> | even | odd ] [of <complex-selector-list>]?) {
  /* ... */
}
```

### 引数

`:nth-child()` は単一の引数をとり、兄弟要素のリスト内における要素のインデックスと照合するためのパターンを記述します。要素のインデックスは 1 から始まります。

#### キーワード値

- `odd`
  - : 一連の兄弟要素の中で奇数番目の要素（1, 3, 5, など）を表します。
- `even`
  - : 一連の兄弟要素の中で偶数番目の要素（2, 4, 6, など）を表します。

#### 関数記法

- `<An+B>`
  - : 兄弟要素の並びにおける、数値で指定した位置がパターン `An+B` と一致する要素を表します。`n` の値が正の整数またはゼロの場合、次のようになります。
    - `A` は整数の刻み値です。
    - `B` は整数の加算値です。
    - `n` はすべての正の整数で、 0 から始まります。

    リスト中の `An+B` 番目の要素として読むことができます。`A` と `B` はどちらも {{cssxref("&lt;integer&gt;")}} の値が示されている必要があります。

#### `of <selector>` 構文

セレクター引数を渡すことで、そのセレクターに一致する **n 番目**の要素を選択することができます。例えば、次のセレクターは `class="important"` を持つ最初の 3 つのリストアイテムに一致します。

```css
:nth-child(-n + 3 of li.important) {
}
```

これは、セレクターを関数の外に移動させた場合とは異なります。例えば、

```css
li.important:nth-child(-n + 3) {
}
```

このセレクターは、リストアイテムが最初の 3 つの子要素の中にあり、セレクター `li.important` と一致する場合に、そのリストアイテムを選択します。

## 例

### セレクターの例

- `tr:nth-child(odd)` または `tr:nth-child(2n+1)`
  - : HTML テーブルの奇数行（1、3、5、など）を表します。
- `tr:nth-child(even)` または `tr:nth-child(2n)`
  - : HTML テーブルの偶数行（2、4、6、など）を表します。
- `:nth-child(7)`
  - : 7 番目の要素を表します。
- `:nth-child(5n)`
  - : **5** 番目 \[=5×1]、**10** 番目 \[=5×2]、**15** 番目 \[=5×3]、**等**の要素を表します。最初のものは **0** 番目 \[=5x0] が式の結果として返りますが、 `n` が 0 から始まるのに対して添字は 1 から始まるので、一致するものはないという結果になります。これは最初は奇妙に見えるかもしれませんが、次の例のように `B` の部分が `>0` となる場合にもっとよく分かるでしょう。
- `:nth-child(n+7)`
  - : 7 番目とそれ以降のすべての要素を表します。 **7** 番目 \[=0+7]、**8** 番目 \[=1+7]、**9** 番目 \[=2+7]、**等**です。
- `:nth-child(3n+4)`
  - : **4** 番目 \[=(3×0)+4]、**7** 番目 \[=(3×1)+4]、**10** 番目 \[=(3×2)+4]、**13** 番目 \[=(3×3)+4]、**等**の要素を表します。
- `:nth-child(-n+3)`
  - : 兄弟要素のグループの中で最初の 3 つの要素を表します。 \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : 兄弟要素のグループの中ですべての `<p>` 要素を表します。これは単純な `p` セレクターと同じ要素を選択します (但し、詳細度はより高くなります)。
- `p:nth-child(1)` または `p:nth-child(0n+1)`
  - : 兄弟要素のグループの中で最初の `<p>` 要素すべてを表します。これは {{cssxref(":first-child")}} セレクターと同じです (詳細度も同じです)。

- `p:nth-child(n+8):nth-child(-n+15)`
  - : 兄弟要素のグループの中で 8 ～ 15 番目の `<p>` 要素を表します。

### 詳細な例

#### HTML

```html-nolint
<h3>
  <code>span:nth-child(2n+1)</code> で、子要素の間に <code>&lt;em&gt;</code> がない場合
</h3>
<p>子要素 1, 3, 5, 7 が選択されます。</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code> で、子要素の間に <code>&lt;em&gt;</code> がある場合
</h3>
<p>
  子要素 1, 5, 7 が選択されます。<br />
  3 は子要素などでカウントに入りますが、
  <code>&lt;span&gt;</code> ではないので選択されません。
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>これは `em`</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code> で、子要素の間に <code>&lt;em&gt;</code> がある場合
</h3>
<p>
  子要素 1, 4, 6, 8 が選択されます。<br />
  3 は <code>&lt;em&gt;</code> であり、
  <code>&lt;span&gt;</code> ではないのでカウントに入りません。
  <code>nth-of-type</code> はこの型の子のみを選択します。
  <code>&lt;em&gt;</code> は完全に飛ばされ、無視されます。
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>これは `em`</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid tomato;
  display: inline-block;
  margin-bottom: 3px;
}
```

```css
.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: tomato;
}
```

#### 結果

{{EmbedLiveSample('Detailed_example', 550, 550)}}

### 'of &lt;selector&gt;' の使用

この例では、名前付きの順序なしリストがあり、そのうちのいくつかは **noted** として `class="noted"` を使用してマークされています。これらは太い下線で強調表示されています。

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

次の CSS では、 `class="noted"` が指定された**偶数番目**のリストアイテムを対象としています。

```css
li:nth-child(even of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### 結果

`class="noted"` があるアイテムは太い下線があり、3、10、17 のアイテムは、`class="noted"` がある偶数のリストアイテムであるため、背景が指定されています。

{{EmbedLiveSample('of_selector_syntax_example', 550, 120)}}

### of セレクター構文とセレクター nth-child

この例では、名前付きの順序なしリストが 2 つあります。1 つ目のリストは `li:nth-child(-n + 3 of .noted)` の効果を示し、2 つ目のリストは `li.noted:nth-child(-n + 3)` の効果を示します。

#### HTML

```html
<ul class="one">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
<ul class="two">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

```css
ul.one > li:nth-child(-n + 3 of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}

ul.two > li.noted:nth-child(-n + 3) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### 結果

1 つ目のケースでは、リストの最初の 3 つのアイテムであるかどうかに関わらず、最初の 3 つのリストアイテムに `class="noted"` というスタイルが適用されます。

2 つ目のケースでは、リストの最初の 3 つのアイテム内にあるアイテムに `class="noted"` というスタイルが適用されます。

{{EmbedLiveSample('of_selector_syntax_vs_selector_nth-child', 550, 150)}}

### of セレクターを使用して表の縞模様を修正

表でよく使用される方法として、行の背景色を明るい色と暗い色で交互に変える「縞模様」があります。これにより、表が読みやすくなり、アクセシビリティも向上します。行が非表示になっている場合、縞模様は統合されて表示され、意図した効果が得られなくなります。この例では、行が非表示 (`hidden`) になっている表が 2 つ表示されています。 2 つ目の表では、 `of:not([hidden])` を使用して非表示の行を処理しています。

#### HTML

```html-nolint
<table class="broken">
  <thead>
    <tr><th>名前</th><th>年齢</th><th>国籍</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexico</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Morocco</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finland</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brazil</td></tr>
  </tbody>
</table>
<table class="fixed">
  <thead>
    <tr><th>名前</th><th>年齢</th><th>国籍</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexico</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Morocco</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finland</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brazil</td></tr>
  </tbody>
</table>
```

#### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
td {
  padding: 0.125rem 0.5rem;
}
```

```css
.broken > tbody > tr:nth-child(even) {
  background-color: silver;
}
```

```css
.fixed > tbody > tr:nth-child(even of :not([hidden])) {
  background-color: silver;
}
```

#### 結果

最初の表では、これは単に `:nth-child(even)` を使用しているだけです。3 行目は `hidden` 属性を保有しています。この例では、3 行目は表示されず、2 行目と 4 行目は偶数としてカウントされます。これは技術的には正しいですが、視覚的には正しくありません。

2 つ目の表では、`:nth-child(even of :not([hidden]))` で of 構文を使用して、非表示になって**いない** `tr` のみを対象としています。

{{EmbedLiveSample('Using_of_selector_to_fix_striped_tables', 550, 180)}}

### 表の列のスタイル設定

表の列にスタイル設定を行う場合、{{HTMLElement("col")}} 要素にスタイルを設定することはできません。表のセルは、この要素の子ではないためです（行要素である {{HTMLElement("tr")}} では可能です）。列のセルを選択するには、`:nth-child()` のような擬似クラスが便利です。

この例では、列ごとに異なるスタイルを設定しています。

#### HTML

```html-nolint
<table>
<caption>学生名簿</caption>
<colgroup>
  <col/>
  <col/>
  <col/>
</colgroup>
  <thead>
    <tr><th>名前</th><th>年齢</th><th>国籍</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
  </tbody>
</table>

```

#### CSS

```css
td {
  padding: 0.125rem 0.5rem;
  height: 3rem;
  border: 1px solid black;
}

tr :nth-child(1) {
  text-align: left;
  vertical-align: bottom;
  background-color: silver;
}

tbody tr :nth-child(2) {
  text-align: center;
  vertical-align: middle;
}

tbody tr :nth-child(3) {
  text-align: right;
  vertical-align: top;
  background-color: tomato;
}
```

#### 結果

{{EmbedLiveSample('Styling_a_table_column', 100, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":has", ":has()") }}: 親要素を選択する擬似クラス
- [ツリー構造擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#ツリー構造擬似クラス)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
