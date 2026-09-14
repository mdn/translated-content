---
title: scroll-target-group
slug: Web/CSS/Reference/Properties/scroll-target-group
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

**`scroll-target-group`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がスクロールマーカーグループコンテナーであるかどうかを指定します。

## 構文

```css
/* キーワード値 */
scroll-target-group: none;
scroll-target-group: auto;

/* グローバル値 */
scroll-target-group: inherit;
scroll-target-group: initial;
scroll-target-group: revert;
scroll-target-group: revert-layer;
scroll-target-group: unset;
```

`scroll-target-group` プロパティは、以下のキーワード値のいずれかで指定します。

### 値

- `none`
  - : この要素はスクロールマーカーグループコンテナーではありません。
- `auto`
  - : この要素はスクロールマーカーグループコンテナーです。

## 解説

要素に `scroll-target-group: auto` を設定すると、その要素は**スクロールマーカーグループコンテナー**として指定されます。これにより、ページ上の要素間（カルーセルアイテムや記事セクションなど）を移動できる一連のナビゲーション項目がグループ化され、現在表示されている要素が強調表示されます。

コンテナー内のフラグメント識別子を持つ {{htmlelement("a")}} 要素は、自動的にスクロールマーカーとして設定されます。現在表示されているスクロールターゲットを持つアンカー要素は、{{cssxref(":target-current")}} 擬似クラスを介してスタイル設定が可能です。

### `scroll-target-group` と `scroll-marker-group` の違い

`scroll-target-group` を使用して作成されたスクロールマーカーグループコンテナーは、{{cssxref("scroll-marker-group")}} プロパティを使用して作成されたものとよく似ている動作をしますが、いくつかの違いがあります。

- `scroll-target-group` では、独自のマークアップを作成してスクロールマーカーグループコンテナーとスクロールマーカーを表す必要があるのに対し、`scroll-marker-group` はコンテナー ({{cssxref("::scroll-marker-group")}}) とマーカー（{{cssxref("::scroll-marker")}} の 1 つ以上のインスタンス）を表現する一連の擬似要素を自動的に作成します。
  これらは自動的に、期待されるナビゲーションを生成された{{glossary("scroll container", "スクロールコンテナー")}}に関連付けます。`scroll-marker-group` を使用すると、自分自身でマークアップを作成する必要がないため、より迅速に設定できます。ただし、独自のマークアップを作成し、`scroll-target-group` を介してスクロールマーカーグループのコンテナーとして設定することで、より高度な制御と柔軟性が得られます。
- `scroll-target-group` で指定されたスクロールマーカーは特別なナビゲーション動作を持ちませんが、`scroll-marker-group` で生成されたマーカーには自動的に [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の意味づけが適用されます。これは、タブ順序において単一のアイテムと同様に振る舞い、ユーザーが矢印キーでスクロールマーカー間を移動することが可能であることを意味します。繰り返しになりますが、`scroll-marker-group` は有用なデフォルト動作を提供しますが、`scroll-target-group` で指定されたマーカーに対しては、代替の意味や動作を柔軟に提供することが可能です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `scroll-target-group` の使用

この例は、さまざまなセクションにリンクする目次を含むページを表示させています。

#### HTML

このマークアップは、コンテンツを含む一連の {{htmlelement("section")}} 要素と、これを順序付きリスト ({{htmlelement("ol")}}/{{htmlelement("li")}}) および {{htmlelement("a")}} 要素を用いて作成する目次を設定しています。

```html
<nav id="toc">
  <ol>
    <li><a href="#intro">まえがき</a></li>
    <li><a href="#ch1">第 1 章</a></li>
    <li><a href="#ch2">第 2 章</a></li>
    <li><a href="#ch3">第 3 章</a></li>
    <li><a href="#ch4">第 4 章</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>Prose of the century</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>第 1 章</h2>

  <!-- ... -->
</section>
<section id="ch2" class="chapter">
  <h2>第 2 章</h2>

  <!-- ... -->
</section>

<!-- ... -->
```

```html hidden live-sample___basic-usage
<nav id="toc">
  <ol>
    <li><a href="#intro">まえがき</a></li>
    <li><a href="#ch1">第 1 章</a></li>
    <li><a href="#ch2">第 2 章</a></li>
    <li><a href="#ch3">第 3 章</a></li>
    <li><a href="#ch4">第 4 章</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>My story</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>第 1 章</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</section>
<section id="ch2" class="chapter">
  <h2>第 2 章</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch3" class="chapter">
  <h2>第 3 章</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch4" class="chapter">
  <h2>第 4 章</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
```

#### CSS

簡潔さを重視し、スタイル設定の大部分は省略しています。この例で最も重要なのは、`scroll-target-group: auto` を `<ol>` に設定し、スクロールマーカーグループコンテナーとして機能させ、ブラウザーのアルゴリズムを起動している点です。これにより、どの `<a>` 要素が `:target-current`（つまり、指定されたリンクのターゲット）であるかを随時計算します。次に、`:target-current` 擬似クラスを `red` の {{cssxref("color")}} でスタイル設定して、明確に目立つようにしています。

```css hidden live-sample___basic-usage
body {
  font: 1.2em / 1.5 system-ui;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

section {
  padding-top: 60px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

ol {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
  background: white;
}
```

```css live-sample___basic-usage
ol {
  scroll-target-group: auto;
}

:target-current {
  color: red;
}
```

#### 例

リンクをアクティブにしたりスクロールしたりして操作してみてください。それぞれの場合、赤いハイライトがリンク間を移動され、現在示されている節と一致する様子が確認できます。

{{EmbedLiveSample("basic-usage", "100%", 500)}}

### `scroll-target-group` のスクロールマーカーのある CSS カルーセル

この例では、`scroll-target-group` を使用して [CSS カルーセル](/ja/docs/Web/CSS/Guides/Overflow/Carousels)のスクロールマーカーを作成する方法を示してします。この例のコードは、[単一ページのカルーセル](/ja/docs/Web/CSS/Guides/Overflow/Carousels#単一ページのカルーセル)の例と似ています。下記では、その違いについて説明します。

#### HTML

このマークアップでは、それぞれのページを定義するリストアイテムにIDが設定されており、順序付きリストが追加されています。このリストを CSS を使用してスクロールマーカーグループコンテナーに変換します。

```html live-sample___carousel
<h1>単一ページ表示のカルーセル</h1>
<ul>
  <li id="page1">
    <h2>ページ 1</h2>
  </li>
  <li id="page2">
    <h2>ページ 2</h2>
  </li>
  <li id="page3">
    <h2>ページ 3</h2>
  </li>
  <li id="page4">
    <h2>ページ 4</h2>
  </li>
</ul>
<ol>
  <li><a href="#page1">1</a></li>
  <li><a href="#page2">2</a></li>
  <li><a href="#page3">3</a></li>
  <li><a href="#page4">4</a></li>
</ol>
```

#### CSS

スクロールマーカーグループコンテナーとスクロールマーカーは、`scroll-target-group` を `<ol>` 要素に設定することで作成します。これらのスタイル設定に関する残りのコードは、{{cssxref("::scroll-marker-group")}} および {{cssxref("::scroll-marker")}} 擬似要素ではなく、自身の選択要素（`<ol>` や `<a>`）を対象としている点を除き、よく似ている。

`:target-current`、`a:hover`、`a:focus` の各状態にスタイルを設定し、現在示されているページやホバー/フォーカスされているリンクを示すとコードは完成です。

```css hidden live-sample___carousel
/* 全般的なスタイル */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  text-align: center;
}

button {
  background-color: white;
}

/* スクロールするカルーセルとしてのリストの全般的なスタイル */

ul {
  width: 100%;
  height: 400px;
  padding: 20px;
  gap: 4%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

ul li {
  list-style-type: none;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;

  scroll-snap-align: center;
}

/* CSS スクロールボタン */

/* スクロールボタンのスタイル */

ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: rgb(0 0 0 / 0.7);
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  color: black;
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  color: rgb(0 0 0 / 0.2);
}

ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}

/* スクロールボタンの配置 */

ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}

ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  top: calc(anchor(bottom) - 80px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  top: calc(anchor(bottom) - 80px);
}
```

```css live-sample___carousel
ol {
  position: absolute;
  position-anchor: --my-carousel;
  top: calc(anchor(bottom) - 90px);
  justify-self: anchor-center;
  display: flex;
  justify-content: center;
  gap: 20px;

  list-style-type: none;
  padding: 0;
  scroll-target-group: auto;
}

ol a {
  width: 28px;
  height: 28px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding-top: 4px;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
}

ol a:hover,
ol a:focus,
:target-current {
  background-color: black;
  color: white;
}
```

#### 結果

3 つの方法でナビゲーションを試してみてください。スクロールマーカーリンクの起動、水平スクロール、両側のスクロールボタンを押すことです。いずれの場合も、ハイライトがリンク間を移動し、現在示されているセクションと一致するかどうかを確認できるでしょう。

{{EmbedLiveSample("carousel", "100%", 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker-group")}} と {{cssxref("::scroll-marker")}} 擬似要素
- {{cssxref(":target-current")}}, {{cssxref(":target-before")}}, {{cssxref(":target-after")}} 擬似クラス
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
