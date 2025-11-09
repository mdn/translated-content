---
title: counter-reset
slug: Web/CSS/Reference/Properties/counter-reset
original_slug: Web/CSS/counter-reset
l10n:
  sourceCommit: cdc0015b727804fa293bb33e5abcefce688729ab
---

**`counter-reset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 [CSS カウンター](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters)を指定された値で初期化します。要素の数値から 1 までカウントアップするカウンター、および要素の数値から 1 までカウントダウンするカウンターを作成することができます。

{{InteractiveExample("CSS デモ: counter-reset")}}

```css interactive-example-choice
counter-reset: none;
```

```css interactive-example-choice
counter-reset: chapter-count 0;
```

```css interactive-example-choice
counter-reset: chapter-count;
```

```css interactive-example-choice
counter-reset: chapter-count 5;
```

```css interactive-example-choice
counter-reset: chapter-count -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="chapters">
    <h1>Alice's Adventures in Wonderland</h1>
    <h2>Down the Rabbit-Hole</h2>
    <h2 id="example-element">The Pool of Tears</h2>
    <h2>A Caucus-Race and a Long Tale</h2>
    <h2>The Rabbit Sends in a Little Bill</h2>
  </div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-reset: chapter-count;
}

#example-element {
  background-color: lightblue;
  color: black;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapter " counters(chapter-count, ".") ": ";
}
```

## 構文

```css
/* カウンターを既定値の 0 で作成 */
counter-reset: my-counter;

/* カウンターを "-3" で初期化 */
counter-reset: my-counter -3;

/* 逆光カウンターを、既定の初期値で作成 */
counter-reset: reversed(my-counter);

/* 逆光カウンターを作成し、 "-1" で初期化  */
counter-reset: reversed(my-counter) -1;

/* 逆光カウンターと通常のカウンターを同時に作成 */
counter-reset: reversed(pages) 10 items 1 reversed(sections) 4;

/* より詳細度が低い規則による値の初期化をキャンセル */
counter-reset: none;

/* グローバル値 */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### 値

`counter-reset`プロパティは、 1 つ以上の空白で区切られたカウンター名、またはキーワード `none` を受け付けます。カウンター名については、通常のカウンターは `<counter-name>` という形式を使用し、逆行カウンターは `reversed(<counter-name>)` を使用します。ここで、`<counter-name>` は、{{cssxref("custom-ident", "&lt;custom-ident&gt;")}} または組み込みの {{HTMLElement("ol")}} カウンター用の `list-item` です。
オプションとして、各カウンター名に `<integer>` を続けることで、初期値を設定することができます。

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} 形式を使用して、カウンター名を作成し初期化します。 `reversed()` 関数記法を使用すると、逆光カウンターを使用します。
- {{cssxref("&lt;integer&gt;")}}
  - : 要素が出現するごとに、カウンターを初期化するための値です。与えられない場合、初期値の `0` なります。
- `none`
  - : カウンターの初期化は行われません。これはより詳細度の低い規則によって定義された `counter-reset` を上書きするために使用することができます。

## 解説

`counter-reset` プロパティは、通常のカウンターと、対応しているブラウザーでは逆行カウンターの両方を生成することができます。通常のカウンターと逆行カウンターを、空白で区切って複数作成することができます。カウンターは、単独の名前、または空白で区切られた名前と値の組み合わせとすることができます。

> [!WARNING]
> [`counter-reset` と `counter-set` プロパティには違い](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters#difference_between_counter-set_and_counter-reset)があります。 `counter-reset` を使用してカウンターを作成した後、 {{cssxref("counter-set")}} プロパティを使用してその値を調整することができます。 `counter-reset` プロパティは名前とは裏腹にカウンターの作成と初期化に使用され、一方、 `counter-set` プロパティは既存のカウンターの値をリセットするために使用されるため、これは直感に反しています。

より高い詳細度を持つセレクターで `counter-increment: none` を設定すると、より低い詳細度を持つセレクターで設定された名前付きカウンターの作成が上書きされます。

### 既定の初期値

通常および逆行カウンターの既定の初期値により、最も一般的な 2 つの番号付けパターン、すなわち 1 から要素数までのカウントアップと、要素数から 1 までのカウントダウンは簡単に実装できます。名前付きカウンターにカウンター値を指定することで、カウンターをある整数値から始めて、カウントアップやカウントダウンをするようにすることができます。

通常のカウンターは、リセット値が提供されていない場合、 `0` になっています。既定では、通常のカウンターは 1 つずつ増加しますが、 {{cssxref("counter-increment")}} で調整することができます。

```css
h1 {
  /* "chapter" および "page" というカウンターを作成し、既定の初期値を設定する。
     カウンター "section" を作成し、 "4" に設定する。 */
  counter-reset: chapter section 4 page;
}
```

### 逆行カウンター

値なしで逆行カウンターを作成すると、設定した要素の個数と同じ数値でカウンターが開始し、設定した要素の最後の要素が `1` になるまでカウントダウンします。 既定では、逆順カウンターは 1 ずつ減っていきますが、`counter-increment` プロパティで変更することもできます。

```css
h1 {
  /* 逆行カウンター "chapter" および "section" を作成する。
      "chapter" を要素数に設定し、 "section" を "10" に設定する。
      カウンター "pages" には既定の初期値を設定する。 */
  counter-reset: reversed(chapter) reversed(section) 10 pages;
}
```

### 組み込みの `list-item` カウンター

順序付きリスト ({{HTMLElement("ol")}}) には、番号付けを制御できる組み込みの `list-item` カウンターが付いています。こうしたカウンターは、リストアイテムごとに自動的に 1 つずつ増減します。 `counter-reset` プロパティを使用して、 `list-item` カウンターをリセットすることができます。他のカウンターと同様に、 {{cssxref("counter-increment")}} プロパティを使用して、 `list-item`カウンターの既定の増分値を上書きすることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### `list-item` カウンターの上書き

この例では、 `counter-reset` プロパティを使用して、暗黙的な `list-item` カウンターの開始値を設定します。

#### HTML

```html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
  <li>Fifth</li>
</ol>
```

#### CSS

`counter-reset` を使用して、暗黙的な `list-item` カウンターを既定の `1` 以外の値から開始するように設定します。

```css
ol {
  counter-reset: list-item 3;
}
```

#### 結果

{{EmbedLiveSample("Overriding the list-item counter", 140, 300)}}

`counter-reset` を使用して、暗黙的な `list-item` カウンターをすべての `ol` で `3` から数え始めるように設定します。そうすると、最初のアイテムは 4、2 つ目は 5 というように番号が振られます。これは、 HTML で [`<ol start="4">`](/ja/docs/Web/HTML/Reference/Elements/ol#start) と書くのと同じような効果です。

### 逆行カウンターの使用

以下の例では、 'priority' という逆行カウンターを定義し、カウンターは 5 つのタスクに番号を振るために使用されています。

```html
<ul class="stack">
  <li>Task A</li>
  <li>Task B</li>
  <li>Task C</li>
  <li>Task D</li>
  <li>Task E</li>
</ul>
```

```css hidden
@supports not (counter-reset: reversed(priority)) {
  .stack {
    display: none;
  }
  body::after {
    content: "このブラウザーは、まだ逆行カウンターに対応していません。";
  }
}
```

```css
li::before {
  content: counter(priority) ". ";
  counter-increment: priority -1;
}

.stack {
  counter-reset: reversed(priority);
  list-style: none;
}
```

{{EmbedLiveSample("Using a reverse counter", 140, 150)}}

出力では、アイテムには 5 から 1 の逆順の番号が振られています。コードでは、カウンターの初期値を指定していません。ブラウザーは、レイアウト時にカウンターの増減する数値を使用して、初期値を自動的に計算します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-set")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} および {{cssxref("counters", "counters()")}} 関数
- {{cssxref("content")}} プロパティ
- {{cssxref("::marker")}} 擬似クラス
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
