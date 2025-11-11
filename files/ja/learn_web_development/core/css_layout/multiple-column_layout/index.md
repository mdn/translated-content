---
title: 段組みレイアウト
slug: Learn_web_development/Core/CSS_layout/Multiple-column_Layout
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

段組みレイアウトの仕様では、新聞に見られるような、コンテンツを段にレイアウトする方法が提供されています。 この記事では、この機能の使い方について説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（<a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML によるコンテンツの構造化</a
        >で学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>で学ぶ）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>ウェブページ上で、新聞に見られるような、段組みレイアウトを作成する方法を学ぶこと。</td>
    </tr>
  </tbody>
</table>

## 基本的な例

ここでは、段組みレイアウト（_multicol_ とも呼ばれる）の使用方法を探ります。[段組みの出発点ファイルをダウンロード](https://github.com/mdn/learning-area/blob/main/css/css-layout/multicol/0-starting-point.html)して、適切な場所に CSS を追加していくと、追いかけることができます。この章の一番下には、最終的なコードがどのようになるのかの例があります。

### 3 段組みレイアウト

出発点のファイルには、いくつかの非常に単純な HTML を含んでいます。 `container` のクラスを持つラッパーに、見出しといくつかの段落が入っています。

`container` のクラスを持つ {{htmlelement("div")}} を、段組みコンテナーとします。 2 つのプロパティ {{cssxref("column-count")}} または {{cssxref("column-width")}} のいずれかを使用して、段組みをオンにします。 `column-count` プロパティは与えた値と同じ数の段 (column) を作成するので、スタイルシートに次の CSS を加えて、ページを再読み込みすれば、 3 段組みが実現できるでしょう。

```css live-sample___a_three-column_layout
.container {
  column-count: 3;
}
```

作成した各段の幅は柔軟に設定できます。ブラウザーは各段に割り当てる空間をどれだけ確保するかを計算します。

```css hidden live-sample___a_three-column_layout
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden live-sample___a_three-column_layout
<div class="container">
  <h1>シンプルな段組みの例</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
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
</div>
```

{{ EmbedLiveSample('A_three-column_layout', '100%', 400) }}

### column-width の設定

次のように CSS を変更して `column-width` を使用します。

```css live-sample___setting_column-width
.container {
  column-width: 200px;
}
```

これでブラウザーは、できるだけ多くの、指定したサイズの段組みができるようになります。残りの空間は、既存の段の間で共有されます。つまり、コンテナーがその幅で正確に分割できない限り、指定した幅を正確に取得することはできません。

```css hidden live-sample___setting_column-width
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden live-sample___setting_column-width
<div class="container">
  <h1>シンプルな段組みの例</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
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
</div>
```

{{ EmbedLiveSample('Setting_column-width', '100%', 400) }}

## 段のスタイル設定

段組みによって作成された段を個別にスタイル設定することはできません。 1 つの段を他の段より大きくしたり、単一の段の背景色やテキストの色を変更したりする方法はありません。 段の表示方法を変更する機会は次の 2 つがあります。

- {{cssxref("column-gap")}} を使用して段間のサイズを変更します。
- {{cssxref("column-rule")}} を使用して段間に線を追加します。

上の例を用いて、 `column-gap` プロパティを追加してギャップの大きさを変更してみましょう。このプロパティはどのような長さの単位も受け入れます。

今度は `column-rule` で、段の間に線（rule、罫線）を追加します。 前のレッスンで遭遇した {{cssxref("border")}} プロパティと同様に、`column-rule` は {{cssxref("column-rule-color")}}、{{cssxref("column-rule-style")}}、{{cssxref("column-rule-width")}} の一括指定で、`border` と同じ値を受け入れます。

```css live-sample___styling_the_columns
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
```

さまざまなスタイルや色の線を追加してみてください。

```css hidden live-sample___styling_the_columns
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden live-sample___styling_the_columns
<div class="container">
  <h1>シンプルな段組みの例</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
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
</div>
```

{{ EmbedLiveSample('Styling_the_columns', '100%', 400) }}

注意すべきことは、線がそれ自体の幅を占めることはないということです。 `column-gap` で作った間隔の中に取られます。 線の両側に空間を増やすには、`column-gap` のサイズを増やす必要があります。

## 段をまたがる

要素をすべての段にまたがるようにすることができます。この場合、コンテンツはまたがる要素が登場したところで途切れ、その要素の下で続き、新しい段組みが作成されます。要素をすべての段組みにまたがるようにするには、 `all` を {{cssxref("column-span")}} プロパティに指定します。

> [!NOTE]
> 要素を一部の列にのみまたがるようにすることはできません。プロパティは `none`（これが既定値です）か `all` の値しか示すことができません。

```css hidden live-sample___spanning_columns
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
h2 {
  column-span: all;
  background-color: rgb(79 185 227);
  color: white;
  padding: 0.5em;
}
```

```html hidden live-sample___spanning_columns
<div class="container">
  <h1>シンプルな段組みの例</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.

  <h2>またがる副見出し</h2>
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

{{ EmbedLiveSample('Spanning_columns', '100%', 550) }}

## 段と断片化

段組みのレイアウトのコンテンツは断片化されます。それは基本的に、ウェブページを出力するときなど、ページメディアにおけるコンテンツの振る舞いと同じです。コンテンツを段組みコンテナーにすると、コンテンツは段に分割されます。コンテンツがこのようになるためには、分割する必要があります。

### 断片化されたボックス

時には、このような分割が配置されることで、読みやすさが損なわれることがあります。下記の例では、一連のボックスをレイアウトするために段組みを使用しており、それぞれのボックスには見出しとテキストがあります。見出しと本文の間で段が分割されると、見出しと本文が分離してしまいます。

```css hidden live-sample___fragmented_boxes
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html live-sample___fragmented_boxes
<div class="container">
  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
</div>
```

```css live-sample___fragmented_boxes
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

{{ EmbedLiveSample('Fragmented_boxes', '100%', 1000) }}

### break-inside の設定

このふるまいを制御するために、[CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)の仕様のプロパティを使用できます。 この仕様は、段組みとページ付きメディアでのコンテンツの分割を制御するためのプロパティを提供します。 例えば、 {{cssxref("break-inside")}} を `avoid` の値で `.card` のルールに追加することができます。これは見出しとテキストの断片化したくないコンテナーとなります。

```css live-sample___setting_break-inside
.card {
  break-inside: avoid;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

このプロパティを追加することで、ボックスは 1 つにまとまるようになり、これで段をまたがって分割されることはなくなります。

```css hidden live-sample___setting_break-inside
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden live-sample___setting_break-inside
<div class="container">
  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>これは見出し</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
</div>
```

```css hidden live-sample___setting_break-inside
.container {
  column-width: 250px;
  column-gap: 20px;
}
```

{{ EmbedLiveSample('Setting_break-inside', '100%', 1100) }}

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 段組み](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) を参照してください。

## まとめ

これで、構築中のデザインのレイアウト方法を選択するときに、意のままにできるもう一つのツールである段組みレイアウトの基本機能の使用方法がわかりました。

## 関連情報

- [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)
- [段組みレイアウトの使用](/ja/docs/Web/CSS/Guides/Multicol_layout/Using)
