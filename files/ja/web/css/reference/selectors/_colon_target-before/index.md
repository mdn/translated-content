---
title: :target-before
slug: Web/CSS/Reference/Selectors/:target-before
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

**`:target-before`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、スクロールマーカーグループ内で、（現在 {{cssxref(":target-current")}} に一致する）アクティブなスクロールマーカーの前にあるスクロールマーカーを選択します。このセレクターを使用すると、スクロールマーカーグループ内で現在のナビゲーション位置の前に位置するナビゲーションアイテムをスタイル設定できます。

> [!NOTE]
> `:target-before` 擬似クラスは、{{cssxref("::scroll-marker")}} 擬似要素および {{cssxref("scroll-target-group")}} プロパティによってスクロールマーカーとして指定された要素でのみ有効です。

## 構文

```css-nolint
:target-before {
  /* ... */
}
```

## 例

### アクティブなスクロールマーカーの前後のナビゲーションアイテムをスタイル設定

この例では、`:target-before` および {{cssxref(":target-after")}} 擬似クラスを使用して、アクティブなスクロールマーカーの前後を強調表示します。これにより、ユーザーが既に持っている閲覧したアイテムと、まだ表示されていないアイテムを示します。

#### HTML

このマークアップには、順序付きリスト ({{htmlelement("ol")}}/{{htmlelement("li")}}) と {{htmlelement("a")}} 要素を使用して生成される目次が含まれています。その次の（すなわち続く）一連の {{htmlelement("section")}} 要素にはコンテンツが含まれています。

```html
<nav id="toc">
  <ol>
    <li><a href="#intro">はじめに</a></li>
    <li><a href="#ch1">第 1 章</a></li>
    <li><a href="#ch2">第 2 章</a></li>
    <li><a href="#ch3">第 3 章</a></li>
    <li><a href="#ch4">第 4 章</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>世紀の散文</h1>
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

```html hidden live-sample___targeting-before-and-after
<nav id="toc">
  <ol>
    <li><a href="#intro">はじめに</a></li>
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

`<ol>` に `scroll-target-group: auto` を設定し、スクロールマーカーグループコンテナーとして機能させます。これにより、ブラウザーがどの `<a>` 要素がアクティブなスクロールマーカーであるかを指定された時点（つまり、どのリンクのターゲットが現在表示されているかを判断します）。次に、`:target-current` 擬似クラスを `red` {{cssxref("color")}} でスタイル設定して、明確に目立つようにしています。

```css hidden live-sample___targeting-before-and-after
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

@supports not selector(:target-before) {
  body::before {
    content: "このブラウザーは :target-before および :target-after 擬似クラスに対応していません。";
    color: black;
    background-color: #ffcd33;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
```

```css live-sample___targeting-before-and-after
ol {
  scroll-target-group: auto;
}

:target-current {
  color: red;
}
```

最後に、`:target-before` 擬似クラスを使用して、アクティブなスクロールマーカーより前のすべての `<a>` 要素を灰色で打ち消し線付きにスタイル設定し、完了済み/終了済みとして見ていきます。また、`:target-after` 擬似クラスを使用して、アクティブなスクロールマーカーより後のすべての `<a>` 要素を明るい下線でスタイル設定します。

```css live-sample___targeting-before-and-after
a:target-before {
  color: gray;
  text-decoration: line-through;
}

a:target-after {
  text-decoration: underline orange 2px;
}
```

#### 結果

リンクをクリックするかスクロールして移動してみてください。どちらの場合でも、赤いテキストの色がリンク間を移動され、現在表示されているセクションに一致するようになります。現在の赤いリンクの前後のリンクも更新され、`a:target-before` および `a:target-after` ルールで定義されたスタイルが使用するようになります。

{{EmbedLiveSample("targeting-before-and-after", "100%", 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("scroll-marker-group")}}
- {{cssxref("scroll-target-group")}}
- {{cssxref(":target-current")}}, {{cssxref(":target-after")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- [CSS によるカルーセルの作成](/ja/docs/Web/CSS/Guides/Overflow/Carousels)
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS Carousel Gallery](https://chrome.dev/carousel/) (chrome.dev, 2025)
