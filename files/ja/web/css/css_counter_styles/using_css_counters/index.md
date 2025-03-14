---
title: CSS カウンターの使用
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{CSSRef}}

**CSS カウンター**では、文書内の位置に基づいてコンテンツの表示方法を調整することができます。
例えば、ウェブページ内の見出し番号を自動的に振ったり、順序付きリストの番号を変更したりするのに使用することができます。

カウンターは本質的に、 CSS が管理する変数であり、 CSS のルールによって増加・減少し、何回使用されたかを追跡するものです。
名前付きカウンターを定義したり、あらゆる順序付きリストで既定で生成される `list-item` のカウンターを操作したりすることもできます。

1. カウンターは親要素から[継承](#カウンターの継承と伝播)継承したり、前の兄弟から受け取ったりします。
2. 新しいカウンターは {{cssxref("counter-reset")}} プロパティを用いて作成します。
3. カウンターは {{cssxref("counter-increment")}} プロパティで進めます。
4. カウンターは {{cssxref("counter-set")}} プロパティで値を直接設定することができます。

独自の名前付きカウンターを定義することもできますし、すべての順序付きリストに対して既定で作成される `list-item` カウンターを操作することもできます。

## カウンターの使用

カウンターを使用するには、最初に必ず {{cssxref("counter-reset")}} プロパティで値を初期化する必要があります。
カウンター値は、 {{cssxref("counter-increment")}} プロパティを使用して増減させることができ、 {{cssxref("counter-set")}} プロパティを使用して特定の値に直接設定することができます。
カウンターの現在の値は、 {{cssxref("counter", "counter()")}} または {{cssxref("counters", "counters()")}} 関数を使用して表示することができ、通常は[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の {{CSSxRef("content")}} プロパティ内に表示されます。

カウンターは、ボックスを生成する要素でのみ、設定したり、リセットしたり、進めたりすることができます。
例えば、要素が `display: none` に設定されている場合、その要素に対するカウンター操作は無視されます。

カウンターのプロパティは、スタイルの包含を使用して特定の要素に限定することができます。スタイルの包含については、 `contain` プロパティで詳しく説明されています。

### カウンター値の操作

CSS カウンターを使用するには、まず {{cssxref("counter-reset")}} プロパティである値に初期化する必要があります。
このプロパティは、カウンター値を任意の特定の値に変更するために使用することもできます。

下記の例では、 `section` という名前のカウンターを既定値 (0) に初期化しています。

```css
counter-reset: section;
```

複数のカウンターを初期化することもできます。任意でそれぞれに初期値を指定することができます。
下記の例では、 `section` と `topic` のカウンターを既定値で、 `page` のカウンターを 3 で初期化しています。

```css
counter-reset: section page 3 topic;
```

初期化されると、カウンター値は {{cssxref("counter-increment")}} で増加させたり減少させたりすることができます。
例えば、以下の宣言では `section` のカウンターを `h3` タグごとに 1 つずつ増加させます。

```css
h3::before {
  counter-increment: section; /* section の値を 1 つずつ増加させる */
}
```

カウンター名の後に、増加量や減少量を指定することができます。これは正の数や負の数を指定する事ができますが、整数が指定されなかった場合は既定値の `1` となります。

増加または減少させる以外に、 {{cssxref("counter-set")}} プロパティを使用して明示的に値を設定することができます。

```css
.done::before {
  counter-set: section 20;
}
```

カウンターの名前を `none`, `inherit`, `initial` にすることはできません。そうすると宣言が無視されます。

### カウンターの表示

カウンター値は、 {{cssxref("counter", "counter()")}} または {{cssxref("counters", "counters()")}} 関数を {{cssxref("content")}} の中で使用して表示することができます。

例えば、以下の宣言は `counter()` をそれぞれの `h3` 見出しの前に `Section <数値>:` というテキストを付けるために使用しています。ここで `<数値>` は、 10 進数（既定の表示スタイル）でのカウントの値です。

```css
h3::before {
  counter-increment: section; /* カウンター section の値を 1 つずつ増加 */
  content: "Section " counter(section) ": "; /* カウンター値を既定のスタイル（10 進数）で表示 */
}
```

{{cssxref("counter()")}} 関数は、内側レベルの番号付けに親レベルのコンテキストが含まれない時に使用します。
例えば、それぞれの内側のレベルは 1 からやり直します。

```plain
1 One
  1 Nested one
  2 Nested two
2 Two
  1 Nested one
  2 Nested two
  3 Nested three
3 Three
```

{{cssxref("counters", "counters()")}} 関数は、内側のレベルのカウントに親レベルのカウントが含まれる場合に使用されます。
例えば、これを使用すると次のように節をレイアウトすることができます。

```plain
1 One
  1.1 Nested one
  1.2 Nested two
2 Two
  2.1 Nested one
  2.2 Nested two
  2.3 Nested three
3 Three
```

{{cssxref("counter", "counter()")}} 関数には `counter(<カウンター名>)` と `counter(<カウンター名>, <カウンタースタイル>)` の 2 つの形があります。
生成される文字列は、その擬似要素のスコープにある指定された名前の最も内側にあるカウンター値です。

{{cssxref("counter", "counter()")}} 関数にも、 `counters(<カウンター名>, <セパレーター>)` と `counters(<カウンター名>, <セパレーター>, <カウンタースタイル>)` の 2 つの形があります。生成される文字列は、その擬似要素のスコープにある指定された名前のすべてのカウンター値が、外側から内側に向けて、指定された文字列 (`<セパレーター>`) で区切られたものになります。

どちらのメソッドでも、カウンターは指定された `<カウンタースタイル>` で表示されます（既定では `decimal` です）。
{{cssxref("list-style-type")}} の値のいずれか、または[カスタムスタイル](/ja/docs/Web/CSS/CSS_counter_styles)を使用することができます。

`counter()` と `counter()` の使用方法を示す例は、それぞれ下記の[基本的な例](#基本的な例)と[入れ子になったカウンターの例](#入れ子になったカウンターの例)です。

### 逆行カウンター

逆行カウンターは、カウントアップ（インクリメント）ではなく、カウントダウン（デクリメント）を目的としたものです。
逆行カウンターは `reversed()` という関数記法を使って {{cssxref("counter-reset")}} でカウンターの名前を指定する際に作成します。

逆行カウンターは、初期値が要素数と等しくなります（初期値が 0 である通常のカウンターとは異なります）。
このため、要素数から 1 までカウントするカウンターを簡単に実装することができます。

例えば、 `section` という名前の逆行カウンターを初期値で作成するには、次のような構文を使用します。

```css
counter-reset: reversed(section);
```

もちろん、初期値は自由に指定することができます。

{{cssxref("counter-increment")}} に負の値を指定すると、カウンター値が減少します。

> [!NOTE]
> 逆行ではないカウンターを減少させるには、 {{cssxref("counter-increment")}} を使うこともできます。
> 逆行カウンターを使用する主な利点は、既定の初期値と、 `list-item` カウンターが自動的に逆行カウンターを減少させてくれることです。

### カウンターの継承と伝播

各要素または擬似要素には、その要素の範囲内で設定されたカウンターのセットが存在します。 セット内の初期カウンターは、要素の親要素と直前の兄弟要素から取得されます。カウンター値は、前回の子孫要素、最後の兄弟要素、または親要素から取得されます。

要素がカウンターを宣言すると、親から受け取った同じ名前のカウンターが入れ子になります。親に同じ名前のカウンターがない場合、カウンターはそのまま要素のカウンターのセットに追加されます。前回の子要素から受け取った同じ名前のカウンターは、カウンターのセットから除去されます。

{{cssxref("counter", "counter()")}} 関数は、指定された名前の最も内側のカウンターを取得します。そして、 {{cssxref("counters", "counters()")}} 関数は、指定された名前のカウンター全体を受け取ります。

次の例では、`primary` という名前の継承されたカウンターと、 `secondary` という名前の兄弟カウンターをデモします。すべての `<div>` 要素で、`counters()` 関数を使用してそれぞれのカウンターを表示します。すべてのカウンターは `counter-reset` プロパティを使用して作成されており、カウンターはどれも増加していないことに注意してください。

```html
<section>
  counter-reset: primary 3
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div class="same-primary-name">D</div>
  <span> counter-reset: primary 6</span>
  <div>E</div>
  <div class="new-secondary-name">F</div>
  <span> counter-reset: secondary 5</span>
  <div>G</div>
  <div>H</div>
  <div class="same-secondary-name">I&nbsp;</div>
  <span> counter-reset: secondary 10</span>
  <div>J&nbsp;</div>
  <div>K</div>
  <section></section>
</section>
```

```css hidden
.same-primary-name,
.new-secondary-name,
.same-secondary-name {
  display: inline-block;
}

@counter-style style {
  system: numeric;
  symbols: "" "1" "2" "3" "4" "5" "6" "7" "8" "9" "10";
}
```

```css
/* div の親に 'primary' カウンターを作成 */
section {
  counter-reset: primary 3;
}

div::after {
  content: " ('primary' カウンター: " counters(primary, "-", style)
    ", 'secondary' カウンター: " counters(secondary, "-", style) ")";
  color: blue;
}

/* 新しい 'primary' カウンターを作成 */
.same-primary-name {
  counter-reset: primary 6;
}

/* 'secondary' カウンターを div 'F' に置く */
.new-secondary-name {
  counter-reset: secondary 5;
}

/* 兄弟の 'secondary' カウンターを上書き */
.same-secondary-name {
  counter-reset: secondary 10;
}
```

{{EmbedLiveSample("Counter inheritance and propagation", "100%", 250)}}

この section 要素は、 `primary` というカウンターを `3` の値で初期化し、この `<div>` はすべて継承された `primary` カウンターを受け取ります。要素 'D' は、親から受け取多カウンターの中に含まれる新しい `primary` カウンター（値は `6`）を作成しており、この要素は `primary` というカウンターが 2 つの値 `3` および `6` を持つことになります。

要素 'F' はまず `secondary` カウンター（値は `5`）を作成し、このカウンターを次の兄弟である 'G' へと渡します。要素 'G' はこのカウンターをさらに次の要素 'H' へと渡します。次に、要素 'I' は新しいカウンターを同じ名前 `secondary` （値は `10`）で作成しますが、前の兄弟である 'H' から受け取った `secondary` カウンター（値は `5`）を取り消し、自分自身のカウンターを 'J' へと渡します。

### counter-set と counter-reset の違い

{{cssxref("counter-set")}} プロパティは、既存のカウンターを更新し、その名前のカウンターがなかった場合は、新しいカウンターを作成します。 {{cssxref("counter-reset")}} プロパティは、常に新しいカウンターを作成します。

次の例では、親リストの中に 2 つの子リストがあります。それぞれのリストアイテムは、 'item' という名前のカウンターを使用して番号が振られています。最初の子リストは {{cssxref("counter-set")}} プロパティを使用しており、 2 つ目の子リストは {{cssxref("counter-reset")}} プロパティを使用して、 'item' カウンターを変更しています。

```html
<ul class="parent">
  <li>A</li>
  <li>B</li>
  <li>
    C （`counter-set` でカウンターを更新）
    <ul class="sub-list-one">
      <li>sub-A</li>
      <li>sub-B</li>
    </ul>
  </li>
  <li>D</li>
  <li>
    E （`counter-reset` でカウンターを更新）
    <ul class="sub-list-two">
      <li>sub-A</li>
      <li>sub-B</li>
      <li>sub-C</li>
    </ul>
  </li>
  <li>F</li>
  <li>G</li>
</ul>
```

```css hidden
ul {
  list-style: none;
}
```

```css
/* 最初に新しいカウンターを作成 */
.parent {
  counter-reset: item 0;
}

/* それぞれのリストアイテムでカウンターを進める */
li {
  counter-increment: item;
}

/* リストアイテムに番号を表示 */
li::before {
  content: counter(item) " ";
}

/* 既存のカウンター値を変更 */
.sub-list-one {
  counter-set: item 10;
}

/* カウンター値を変更 */
.sub-list-two {
  counter-reset: item 0;
}
```

{{EmbedLiveSample("Difference between counter-set and counter-reset", "100%", 300)}}

最初の子リストのアイテムが `11` から始まる番号を受け取り、親リスト内に続いて番号が継続していることに注意してください。これは、 `counter-set` プロパティが `.parent` 要素で宣言された同じ 'item' カウンターを更新するからです。それから、 2 つ目の子リストがどのように '1' から始まる新しい番号を受け取り、親リストアイテムには番号が引き継がれないことに注意してください。これは、 `counter-reset` プロパティが新しいカウンターを同じ名前で作成し、親リストアイテムは古いカウンターを維持します。

### リストアイテムのカウンター

{{HTMLElement("ol")}} 要素で作成される順序付きリストは、暗黙のうちに `list-item` という名前のカウンターを持っています。

他のカウンターと同様に、これは既定の初期値として、順方向のカウンターでは 0、逆行カウンターでは「アイテム数」を持っています。
作者が作成したカウンターとは異なり、 `list-item` はカウンタが逆行しているかどうかによって、リスト要素ごとに自動的に 1 つずつ増加または減少します。

`list-item` カウンターは、 CSS を使用して、順序付きリストの既定の動作を操作するために使用することができます。
例えば、既定の初期値を変更したり、 {{cssxref("counter-increment")}} を使用してリストアイテムの増加または減少の方法を変更したりすることができます。

## 例

### 基本的な例

この例ではそれぞれの見出しの先頭に "第 \[カウンター値] 章:" を追加します。

#### CSS

```css
body {
  counter-reset: section; /* 'section' という名前のカウンターを設定し、 0 で初期化する */
}

h3::before {
  counter-increment: section; /* section カウンター値に 1 を加算 */
  content: "第 " counter(section) " 章: "; /* '第 ' という語、 section カウンター値、
                                                ' 章' という語、コロンをそれぞれの
                                                h3 の内容の前に表示 */
}
```

#### HTML

```html
<h3>導入</h3>
<h3>本文</h3>
<h3>結論</h3>
```

#### 結果

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### 基本的な例: 逆行カウンター

この例は逆行カウンターを使用していることを除けば、上記のものと同じです。
ブラウザーが `reversed()` 関数記法に対応している場合は、結果は次のようになります。

![逆行カウンター](reversed_headings_basic.png)

#### CSS

```css
body {
  counter-reset: reversed(
    section
  ); /* 'section' という名前のカウンターを設定し、初期値を 0 とする */
}

h3::before {
  counter-increment: section -1; /* section カウンター値から 1 を減算 */
  content: "第 " counter(section) " 章: "; /* '第 ' という語、 section カウンター値、
                                                   ' 章' という語、コロンをそれぞれの
                                                   h3 の内容の前に表示 */
}
```

#### HTML

```html
<h3>導入</h3>
<h3>本文</h3>
<h3>結論</h3>
```

#### 結果

{{EmbedLiveSample("Basic example: reversed counter", "100%", 150)}}

### より洗練された例

カウンターは、必ずしも進めるたびに表示する必要はありません。
この例はすべてのリンクをカウントし、リンクにテキストがないときだけ便利な代用品としてカウンターを表示します。

#### CSS

```css
:root {
  counter-reset: link;
}

a[href] {
  counter-increment: link;
}

a[href]:empty::after {
  content: "[" counter(link) "]";
}
```

#### HTML

```html
<p><a href="https://www.mozilla.org/"></a> を参照</p>
<p><a href="contact-me.html">メッセージを残す</a>方法を忘れないでください。</p>
<p><a href="https://developer.mozilla.org/"></a> も参照</p>
```

#### 結果

{{EmbedLiveSample("A_more_sophisticated_example", "100%", 150)}}

### 入れ子になったカウンターの例

CSS カウンターはアウトラインのリストを作成するのには特に便利で、子要素でカウンターの新しいインスタンスが自動的に生成されます。
{{cssxref("counter", "counter()")}} 関数を使用して、入れ子になったカウンターの階層間に区切り文字列を挿入することができます。

#### CSS

```css
ol {
  counter-reset: section; /* それぞれの ol 要素に、 section
                             カウンターの新しいインスタンスを
                             生成 */
  list-style-type: none;
}

li::before {
  counter-increment: section; /* section カウンターのこのインスタンス
                                            のみを加算 */
  content: counters(section, ".") " "; /* section カウンターのすべての
                                            インスタンスの値を、ピリオドで区切って
                                            結合 */
}
```

#### HTML

```html-nolint
<ol>
  <li>アイテム</li>          <!-- 1     -->
  <li>アイテム               <!-- 2     -->
    <ol>
      <li>アイテム</li>      <!-- 2.1   -->
      <li>アイテム</li>      <!-- 2.2   -->
      <li>アイテム           <!-- 2.3   -->
        <ol>
          <li>アイテム</li>  <!-- 2.3.1 -->
          <li>アイテム</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>アイテム</li>  <!-- 2.3.1 -->
          <li>アイテム</li>  <!-- 2.3.2 -->
          <li>アイテム</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>アイテム</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>アイテム</li>          <!-- 3     -->
  <li>アイテム</li>          <!-- 4     -->
</ol>
<ol>
  <li>アイテム</li>          <!-- 1     -->
  <li>アイテム</li>          <!-- 2     -->
</ol>
```

#### 結果

{{EmbedLiveSample("Example_of_a_nested_counter", "100%", 350)}}

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("contain")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- [CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール
