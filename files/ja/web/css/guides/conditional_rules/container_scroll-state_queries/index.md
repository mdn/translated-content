---
title: コンテナースクロール状態クエリーの使用
slug: Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries
original_slug: Web/CSS/CSS_conditional_rules/Container_scroll-state_queries
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**コンテナースクロール状態クエリー**は、[コンテナークエリー](/ja/docs/Web/CSS/Reference/At-rules/@container)の一種です。コンテナーのサイズに基づいて子孫要素にスタイルを選択的に適用する代わりに、スクロール状態クエリーを使用すると、コンテナーのスクロール状態に基づいて子孫要素にスタイルを選択的に適用することができます。これには、コンテナーが部分的にスクロールされているかどうか、[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#スクロールスナップコンテナー)の祖先にスナップされているかどうか、 [`position: sticky`](/ja/docs/Web/CSS/Reference/Properties/position) によって配置され、{{glossary("scroll container", "スクロールコンテナー")}}の祖先の境界に固定されているかどうかを含めることができます。

この記事では、コンテナーのスクロール状態クエリーの使用方法について、それぞれの種類の例を交えて説明します。コンテナークエリーに関する基礎知識がある方を対象としています。コンテナークエリーについてよく分からない方は、[CSS コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)を一読してから続けてください。

## コンテナーのスクロール状態クエリーの種類

`scroll-state()` クエリーで使用できる `@container` の記述子は 3 つあります。

- `scrollable`: コンテナーが、ユーザーによるスクロール（例えば、スクロールバーをドラッグしたり、トラックパッドのジェスチャーを使用したり）によって、指定された方向にスクロールできるかどうかを問い合わせます。つまり、指定された方向にスクロールできるコンテンツが溢れているか、ということです。これは、スクロールコンテナーのスクロール位置に関連するスタイルを適用する場合に便利です。例えば、スクロールバーが上部に表示されているときに、ユーザーにスクロールしてコンテンツをさらに表示するよう促すヒントを表示し、ユーザーが実際にスクロールを開始したらそのヒントを非表示にすることができます。
- `snapped`: コンテナーが、指定された軸に沿って[スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)コンテナーの祖先にスナップされているか、またはスナップされるかどうかを照会します。これは、要素がスクロールスナップコンテナーにスナップされている場合にスタイルを適用するのに役立ちます。例えば、スナップされた要素を何らかの方法で強調表示したり、前回は非表示だったコンテンツの一部を表示したりする場合などです。
- `stuck`: {{cssxref("position")}} 値が `sticky` のコンテナーが、そのスクロールコンテナーの祖先の端に固定されているかどうかを照会します。これは、固定されたときに `position: sticky` 要素のスタイルを別々に指定する場合に便利です。たとえば、異なる配色やレイアウトを指定することができます。

## 構文概要

コンテナー要素をスクロール状態クエリーのコンテナーとして設定するには、その要素の {{cssxref("container-type")}} プロパティに `scroll-state` の値を設定します。オプションで、特定のコンテナークエリーでターゲット指定できるように、 {{cssxref("container-name")}} も指定することができます。

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

次に、 {{cssxref("@container")}} ブロックを作成して、クエリー、テストが渡された場合にコンテナーの子に適用されるルール、およびオプションで、クエリーするコンテナーのコンテナー名を指定します。コンテナー名を指定しない場合、コンテナークエリーはページ内のすべてのスクロール状態クエリーコンテナーに適用されます。

ここでは、 `my-container` という名前付きコンテナーのみクエリーして、コンテナーをその上端までスクロールできるかどうかを判断しています。

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS ルールをここに置く */
}
```

> [!NOTE]
> スクロール状態クエリーを他のコンテナークエリーから分離するために、スクロール状態記述子と値は、 `scroll-state` を前に付けて括弧で囲みます (`scroll-state( ... )`)。これらの構文は関数のように見えますが、関数ではありません。

## `scrollable` クエリーの使用

スクロール状態の [`scrollable`](/ja/docs/Web/CSS/Reference/At-rules/@container#scrollable) クエリーは、 `scroll-state(scrollable: value)` と記述され、コンテナーのスクロール可能な親要素が、ユーザーによるスクロールで指定された方向にスクロールできるかどうかを検査します。できない場合、クエリーは false を返します。

`value` は、スクロールの可否を検査する方向を示します。例えば、

- `top`: コンテナーの上端に向かってスクロールできるかどうかを検査します。
- `inline-end`: コンテナーをインライン方向の末尾に向かってスクロールできるかどうかを検査します。
- `y`: コンテナーが Y 軸に沿ってどちらかの方向、あるいは両方向にスクロールできるかどうかを検査します。

検査に合格すると、`@container` ブロック内のルールが、一致するスクロールコンテナーの子孫に適用されます。

コンテンツでいっぱいのスクロール可能なコンテナーと、必要に応じて先頭に戻れる便利な小さなリンクがある例を見てみましょう。 `scrollable` クエリーを使用して、ユーザーがコンテンツをスクロールし始めたときにのみリンクを表示します。

### HTML

HTML には、文書をスクロールさせるのに十分なコンテンツを含む {{htmlelement("article")}} 要素があり、その前に[先頭へ戻るリンク](/ja/docs/Web/HTML/Reference/Elements/a#result_8)が置かれています。

```html
<a class="back-to-top" href="#" aria-label="Top of page">↑</a>
<article>
  <h1>コンテナークエリーで制御する「先頭へ戻る」リンクのついたリーダー</h1>
  <section>
    <header>
      <h2>この最初の節は興味深い</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  ...
</article>
```

簡潔にするため、HTML の大部分を非表示にしています。

```html hidden live-sample___scrollable
<a class="back-to-top" href="#" aria-label="Scroll back to top">↑</a>
<article>
  <h1>コンテナークエリーで制御する「先頭へ戻る」リンクのついたリーダー</h1>
  <section>
    <header>
      <h2>この最初の節は興味深い</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Mauris non malesuada est, sed vestibulum nibh. Duis vestibulum iaculis
      lectus, eu sagittis dolor dignissim iaculis. Nunc et orci sed sapien
      eleifend placerat. Curabitur dapibus risus eget odio sollicitudin, sit
      amet luctus justo pellentesque.
    </p>

    <p>
      <strong>Morbi non pharetra quam.</strong> Fusce vestibulum sem diam, ac
      consequat augue consectetur ut. Donec at augue viverra, tempus urna sit
      amet, porta augue.
      <em>Phasellus fringilla tincidunt sem ullamcorper varius.</em> Aenean
      gravida feugiat sem nec ultricies.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Sed pellentesque placerat mi sed maximus. Sed vitae dui vitae mi pulvinar
      gravida sed et libero.
      <a href="#">Duis nec venenatis dolor, sed tristique felis.</a>
      Integer dapibus facilisis leo elementum vulputate. Curabitur a urna quis
      nulla vulputate tincidunt quis ac enim.
    </p>

    <p>
      Cras non elit vel leo dignissim convallis. Duis eros urna, varius sit amet
      lorem vel, feugiat euismod est.
      <strong>Aliquam ornare eu elit ut iaculis.</strong>
      Suspendisse vulputate tempor leo, non rhoncus risus aliquam vel.
    </p>
  </section>
  <section>
    <header>
      <h2>これはそれほどではありません</h2>

      <p>Suspendisse varius est ac turpis mollis cursus.</p>
    </header>

    <p>
      <strong
        >Curabitur faucibus condimentum eros, ut auctor felis lacinia
        sed.</strong
      >
      Praesent vitae scelerisque eros.
    </p>

    <p>
      <em>Ut vitae suscipit augue.</em> Cras et orci condimentum ante dignissim
      iaculis. Sed consectetur quis est sed dignissim. Nulla egestas orci erat,
      et commodo arcu feugiat ut.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Sed non tempor massa, at accumsan ante. Pellentesque habitant morbi
      <a href="#">tristique senectus</a> et netus et malesuada fames ac turpis
      egestas.
    </p>

    <p>
      Pellentesque placerat luctus tempor. Nunc congue dapibus eros, at
      vulputate nulla. Sed rutrum eleifend magna vel porta. Integer cursus orci
      faucibus turpis scelerisque, nec pharetra arcu molestie.
    </p>
  </section>
  <section>
    <header>
      <h2>この節で、多少なりとも不明点が解消されたでしょうか？</h2>

      <p>Curabitur facilisis ornare lorem et eleifend.</p>
    </header>

    <p>
      <strong>Aenean mollis non neque sed finibus.</strong> Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Suspendisse sagittis viverra urna.
      In hac habitasse platea dictumst. Vestibulum neque orci, mollis sagittis
      augue et, pharetra vehicula diam.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      <a href="#">Pellentesque sollicitudin</a> nunc quis nisl condimentum, ac
      iaculis libero feugiat.
      <strong>Nullam ultrices purus a nulla dignissim hendrerit.</strong> In
      molestie consectetur est quis pulvinar.
    </p>

    <p>
      Vivamus ac erat eu est lobortis commodo. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. In nulla turpis,
      <strong>mollis et est tempor</strong>, dignissim aliquam metus. Proin eu
      arcu quis erat mollis pulvinar. Vivamus at facilisis neque.
    </p>

    <p>
      Integer bibendum laoreet erat, quis vulputate mauris bibendum nec. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Nam ut est in arcu interdum hendrerit.
    </p>
  </section>
  <section>
    <header>
      <h2>これらのまとめ</h2>

      <p>Nunc facilisis augue quis ex porta aliquam.</p>
    </header>

    <img src="#" alt="Placeholder" />

    <p>
      <strong
        >Fusce nisi enim, venenatis a est vel, varius placerat lacus.</strong
      >
      Nunc tempus rutrum nisl bibendum aliquet. Pellentesque vitae nunc sed nisl
      tincidunt elementum a sit amet nisi. Morbi pretium at dolor in pulvinar.
      Curabitur dapibus eleifend accumsan.
    </p>

    <p>
      Donec rhoncus, leo vitae mollis maximus, tellus lorem interdum arcu, eu
      <em>tempor lectus libero in risus</em>. Ut sit amet magna vitae mauris
      tempor bibendum. <a href="#">Integer id mauris ut ex mattis finibus.</a>
    </p>

    <p>
      Curabitur dui felis, elementum et tellus id, blandit facilisis lorem.
      Aliquam sed posuere ligula, at auctor ipsum. Morbi dignissim accumsan
      tellus pretium iaculis.
    </p>
  </section>
</article>
```

### CSS

`.back-to-top` リンクには、 {{cssxref("position")}} に `fixed` の値が指定され、ビューポートの右下隅に配置され、 {{cssxref("translate")}} に `80px 0` の値を使用してビューポート外に移動されています。 {{cssxref("transition")}} の値は、 `translate` および{{cssxref("background-color")}} のいずれかの値が変更されたときに、アニメーションします。

```css hidden live-sample___scrollable
/* 全般的なスタイル設定 */

* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 100%;
  max-width: 540px;
  padding: 20px;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___scrollable
.back-to-top {
  width: 64px;
  height: 64px;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  translate: 80px 0;
  transition:
    0.4s translate,
    0.2s background-color;
}
```

```css hidden live-sample___scrollable
.back-to-top {
  text-decoration: none;
  border-radius: 50%;
  border: 1px solid #0007;
  background-color: #0007;
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 2px black;
  padding-bottom: 10px;
}

.back-to-top:hover,
.back-to-top:focus {
  background: #0009;
}
```

この例での{{glossary("scroll container", "スクロールコンテナー")}}は、 `<html>` 要素自体であり、 {{cssxref("container-type")}} の値が `scroll-state` のスクロール状態クエリーコンテナーとして表されます。コンテナー名は厳密には必要ではありませんが、異なるクエリーをターゲットとする複数のスクロール状態クエリーコンテナーがコードベースに追加されている場合に便利です。

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

次に、このクエリーの対象となるコンテナー名を設定する {{cssxref("@container")}} ブロックと、クエリー自体 (`scrollable: top`) を定義します。このクエリーは、 `<html>` 要素が上端に向かってスクロールできる場合、つまりコンテナーが以前に下方向にスクロールされている場合にのみ、ブロック内に含まれるルールを適用します。その場合は、`.back-to-top` リンクに `translate: 0 0` が適用され、リンクが画面上に戻ります。

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

簡潔にするため、CSS の残りの部分は省略しています。

### 結果

{{EmbedLiveSample("scrollable", "100%", "400px")}}

文書を下にスクロールして、「トップへ戻る」リンクがどのように表示されるかをメモしてください。`transition` により、ビューポートの右側からスムーズにアニメーションして表示されます。リンクをクリックするか、手動でスクロールしてトップに戻ると、「トップへ戻る」リンクは画面の外側に移動します。

## `snapped` クエリーの使用

[スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)が実装されている場合にのみ関連しますが、スクロール状態の [`snapped`](/ja/docs/Web/CSS/Reference/At-rules/@container#snapped) クエリー（`scroll-state(snapped: value)` と記述）は、コンテナーが、指定された軸に沿って[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#スクロールスナップコンテナー)の祖先にスナップされているか、またはスナップされるかどうかを検査します。そうでない場合、クエリーは false を返します。

この場合の `value` は、要素のスナップする方向を示すものです。例えば、

- `x`: コンテナーが、そのスクロールスナップコンテナーの親コンテナーに対して水平方向にスナップしているかどうかを検査します。
- `inline`: コンテナーが、インライン方向にスクロールスナップコンテナーの祖先にスナップしているかどうかを検査します。
- `y`: コンテナーが、スクロールスナップコンテナーの親要素に対して両方向にスナップしているかどうかを検査します。

`none` 以外の `snapped` であるスクロール状態のクエリーでコンテナーを評価するには、そのコンテナーはスクロールスナップコンテナーの祖先を持つコンテナー、つまり、祖先が `none` 以外の {{cssxref("scroll-snap-type")}} 値を持つコンテナーでなければなりません。コンテナークエリーの `scroll-state(snapped: none)` は、スクロールコンテナーの祖先を持たないスクロール状態コンテナーと一致します。0

評価は、スクロールスナップコンテナーで [`scrollsnapchanging`](/ja/docs/Web/API/Element/scrollsnapchanging_event) イベントが発生すると行われます。

条件を満たすと、`@container` ブロック内のルールが、一致するスクロールスナップターゲットコンテナーの子孫に適用されます。

この例では、子要素が垂直方向にスナップするスクロールスナップコンテナーを見て、`snapped` クエリーを使用して、子要素がスナップされているか、スナップしようとしている場合にのみ、その子要素のスタイルを設定します。

### HTML

HTML は、スクロールスナップコンテナーとなる {{htmlelement("main")}} 要素で構成されています。その中には、スナップターゲットとなる複数の {{htmlelement("section")}} 要素があります。それぞれの `<section>` には、ラッパーの {{htmlelement("div")}} と `<h2>` [見出し](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)が含まれています。コンテナークエリーでは、コンテナーそのものではなく、コンテナーの子孫にスタイルを設定できるよう、スタイルターゲットを作成するためにラッパーが含まれています。

```html
<main>
  <section>
    <div class="wrapper">
      <h2>Section 1</h2>
    </div>
  </section>

  ...
</main>
```

簡潔にするため、HTML のほとんどは省略しています。

```html hidden live-sample___snapped
<main>
  <section>
    <div class="wrapper">
      <h2>Section 1</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 2</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 3</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 4</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 5</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 6</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 7</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 8</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 9</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 10</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 11</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 12</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 13</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 14</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 15</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 16</h2>
    </div>
  </section>
</main>
```

### CSS

```css hidden live-sample___snapped
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

/* body and main sizing */

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

main {
  gap: 50px;
}
```

{{cssxref("overflow")}} 値を `scroll` に設定し、 `<main>` 要素に固定値の {{cssxref("height")}} を設定して、垂直スクロールコンテナーにします。また、 {{cssxref("scroll-snap-type")}} 値を `y mandatory` に設定して、 `<main>` を、スナップターゲットが Y 軸に沿ってスナップするスクロールスナップコンテナーにします。 `mandatory` は、スナップターゲットが常にスナップされることを意味します。

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

`<section>` 要素は、 `none` 以外の {{cssxref("scroll-snap-align")}} 値を設定することで、スナップターゲットとして指定されます。 `center` の値は、要素がコンテナーの中心点にスナップすることを意味します。

```css live-sample___snapped
section {
  font-family: Arial, Helvetica, sans-serif;
  width: 150px;
  height: 150px;
  margin: 50px auto;

  scroll-snap-align: center;
}
```

```css hidden live-sample___snapped
.wrapper {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    0.6s background,
    0.6s color;
}

h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}
```

`<section>` 要素をクエリーできるようにしたいと思います。具体的には、 `<section>` 要素がコンテナーにスナップしているかどうかを検査したいので、 {{cssxref("container-type")}} 値を `scroll-state` に設定して、それらをスクロール状態クエリーコンテナーとして指定します。また、 {{cssxref("container-name")}} も指定していますが、これは厳密には必要ではありませんが、後でコードが複雑になり、様々なクエリー－でターゲットとする複数のスクロール状態クエリーコンテナーがある場合に役立つちます。

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

次に、 {{cssxref("@container")}} ブロックを定義し、このクエリーをターゲットとするコンテナーの名前と、クエリー自体（`snapped: y`）を定義します。このクエリーは、 `<section>` 要素がコンテナーに垂直方向にスナップされている場合にのみ、ブロック内に含まれるルールを適用します。その場合は、新しい {{cssxref("background")}} と {{cssxref("color")}} を `<section>` 要素の子である `.wrapper` の `<div>` に適用して、それを強調表示します。

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### 結果

レンダリング結果は次のとおりです。コンテナーを上下にスクロールして、コンテナーにスナップすると `<section>` のスタイルがどのように変化するかを確認してください。

{{EmbedLiveSample("snapped", "100%", "500px")}}

## `stuck` クエリーの使用

スクロール状態の [`stuck`](/ja/docs/Web/CSS/Reference/At-rules/@container#scrollable) クエリーは、 `scroll-state(stuck: value)` と記述され、 {{cssxref("position")}} 値が `sticky` であるコンテナーが、そのスクロールコンテナーの祖先の端に固定されているかどうかを検査します。そうでない場合、クエリーは false を返します。

この場合、`value` は検査するスクロールコンテナーの端を示します。例えば、

- `top`: コンテナーが、そのスクロールコンテナーの祖先の最上端に貼り付いていないかを検査します。
- `block-end`: コンテナーが、そのスクロールコンテナーの祖先のブロック方向の端に貼り付いていないかを検査します。
- `none`: コンテナーが、そのスクロールコンテナーの祖先の端に貼り付いていないかどうかを確認します。 `none` クエリーは、コンテナーに `position: sticky` が設定されていなくても一致することに注意してください。

クエリーが true を返す場合、 `@container` ブロック内のルールは、一致する `position: sticky` コンテナーの子孫に適用されます。

コンテンツがオーバーフローするスクロール可能なコンテナーがあり、その見出しが `position: sticky` に設定されており、その位置までスクロールするとコンテナーの上端に固定される例を見てみましょう。 `stuck` スクロール状態クエリーを使用して、見出しが上端に固定されたときに、そのスタイルを変更します。

### HTML

HTML には、文書をスクロールさせるのに十分なコンテンツを含む {{htmlelement("article")}} 要素があります。これは、複数の {{htmlelement("section")}} 要素を使用して構成されており、各要素には、ネストされたコンテンツを含む {{htmlelement("header")}} が含まれています。

```html
<article>
  <h1>スクロール状態コンテナークエリーのある張り付くリーダー</h1>
  <section>
    <header>
      <h2>この最初の節は興味深い</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  <section>
    <header>
      <h2>これはそれほどではありません</h2>

      <p>Confecta res esset.</p>
    </header>

    ...
  </section>

  ...
</article>
```

簡潔にするため、HTML のほとんどを省略しています。

```html hidden live-sample___stuck
<article>
  <h1>スクロール状態コンテナークエリーのある張り付くリーダー</h1>
  <section>
    <header>
      <h2>この最初の節は興味深い</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Id deserunt exercitation in incididunt in dolor ipsum enim occaecat quis
      officia et. In dolore Lorem anim enim. Dolor nulla deserunt laboris irure
      incididunt labore tempor amet consectetur. Commodo eu tempor qui laboris
      duis ipsum adipisicing sunt. Do anim laboris commodo aliquip consequat ut
      eiusmod mollit sint nostrud sunt exercitation do.
    </p>

    <p>
      <strong>Est proident voluptate dolore.</strong> Aute irure ea culpa mollit
      <em>anim aute proident consectetur.</em> Duis deserunt consequat elit non.
      Cupidatat et amet anim labore est. Incididunt aute incididunt ex amet
      sint.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Ullamco duis qui amet sunt eu nulla deserunt dolore officia irure nulla.
      <a href="#">Qui enim dolore est virtus;</a>
      Erat enim consectetur.
    </p>

    <p>
      Dolor aliquip officia id esse Lorem ullamco ea veniam.
      <strong>Voluptate cillum commodo anim veniam;</strong>
      Ad nulla amet anim eu incididunt reprehenderit proident in aliqua sit
      commodo magna.
    </p>
  </section>
  <section>
    <header>
      <h2>これはそれほどではありません</h2>

      <p>Confecta res esset.</p>
    </header>

    <p>
      <strong>Nam quid possums facere delius?</strong> Tu quidem reddes; Omnis
      peccant para dicts.
    </p>

    <p>
      <em>Pariatur ex cupidatat exercitation</em> reprehenderit quis culpa est
      proident pariatur ut.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Non nulla pariatur cillum pariatur.
      <a href="#">Ipsum magna proident fugiat qui duis et.</a>
      Reprehenderit sit ipsum ut adipisicing aliqua eiusmod nulla consectetur
      deserunt dolor dolor.
    </p>

    <p>
      Cupidatat deserunt adipisicing adipisicing occaecat voluptate duis laboris
      excepteur labore et in aliquip aute. Quis aliquip reprehenderit dolor
      nostrud cupidatat nostrud nisi occaecat elit. Magna dolor ullamco eiusmod
      deserunt elit cillum qui amet. Dolor ad consequat anim commodo eu sunt do
      tempor eu velit est.
    </p>
  </section>
  <section>
    <header>
      <h2>この節で、多少なりとも不明点が解消されたでしょうか？</h2>

      <p>Dolor consectetur esse aute eiusmod ex reprehenderit cupidatat.</p>
    </header>

    <p>
      <strong>Ipsum quis sint incididunt aliquip</strong>. Duis tempor sunt enim
      Lorem ut officia cillum magna.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      <a href="#">Sint modo partes vitae beatae.</a>
      Ipsum esse nostrud incididunt ipsum ipsum esse aliquip Lorem enim.
      <strong>Sed hoc sane concedays.</strong> Voluptate qui consequat dolor
      dolor dolore ex. Enim dolor enim sit proident. Ad laborum incididunt
      dolore aliquip exercitation exercitation. Sunt cupidatat esse enim duis
      proident.
    </p>

    <p>
      Labore dolor cupidatat ut velit in minim cupidatat enim nisi proident
      eiusmod.
      <strong
        >Non nostrud consectetur est occaecat ut esse esse tempor eiusmod
        non.</strong
      >
      Cupidatat aliqua dolore est sit ad exercitation nostrud nostrud eu. Qui
      consequat et aliquip ea labore.
    </p>

    <p>
      Pariatur quis quis nostrud exercitation pariatur magna veniam Lorem
      commodo cupidatat irure reprehenderit. Nostrud pariatur est pariatur elit
      sit ea voluptate minim mollit. Aliqua pariatur cupidatat et cillum. Velit
      exercitation adipisicing laboris ullamco. Incididunt id eiusmod id cillum
      qui anim. Aliquip minim nostrud excepteur dolore deserunt pariatur eu
      eiusmod reprehenderit ullamco magna.
    </p>
  </section>
  <section>
    <header>
      <h2>これらのまとめ</h2>

      <p>Irure adipisicing occaecat dolore in ex voluptate.</p>
    </header>

    <img src="#" alt="Placeholder" />

    <p>
      <strong>An quidem modi?</strong>
      <strong
        >Excepteur non Lorem ex aliqua est reprehenderit incididunt sunt in
        ullamco in et;</strong
      >
      Aliqua veniam nulla magna anim labore amet proident nisi mollit non.
      Consequat incididunt exercitation nisi consequat culpa officia aliqua
      veniam. Anim aliqua consectetur pariatur mollit proident incididunt id.
    </p>

    <p>
      Non labore, inquit, de nomin. <em>Fall igniter possimus.</em>
      <a href="#">Preterits, inquit, gaud.</a>
      Est commodo adipisicing qui duis excepteur sit ea irure amet voluptate
      deserunt anim deserunt.
    </p>

    <p>
      Ad mollit laboris reprehenderit magna tempor. Consequat pariatur esse
      ipsum duis laboris.
    </p>
  </section>
</article>
```

### CSS

それぞれの `<header>` には、 {{cssxref("position")}} 値が `sticky`、{{cssxref("top")}} 値が `0` が設定されており、スクロールコンテナーの上端に固定されています。 `<header>` 要素がコンテナーの上端に固定されているかどうかをテストするために、これらの要素は、 {{cssxref("container-type")}} 値が `scroll-state` のスクロール状態クエリーコンテナーとして指定されています。 {{cssxref("container-name")}} は必須ではありませんが、異なるクエリーをターゲットとする複数のスクロール状態クエリーコンテナーがコードベースに追加されている場合に便利です。

```css hidden live-sample___stuck
/* 全般的なスタイル */

* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 100%;
  max-width: 540px;
  padding: 20px;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___stuck
header {
  background: white;
  position: sticky;
  top: 0;
  container-type: scroll-state;
  container-name: sticky-heading;
}
```

また、 `<header>` 要素内の `<h2>` および `<p>` 要素に基本的なスタイル設定を行い、 {{cssxref("transition")}} 値を指定して {{cssxref("background")}} 値が変更されたときにスムーズにアニメーションするようにします。

```css live-sample___stuck
h2,
header p {
  margin: 0;
  transition: 0.4s background;
}

h2 {
  padding: 20px 5px;
  margin-bottom: 10px;
}

header p {
  font-style: italic;
  padding: 10px 5px;
}
```

次に、 {{cssxref("@container")}} ブロックを定義し、このクエリーの対象となるコンテナーの名前と、クエリー自体（`stuck: top`）を設定します。このクエリーは、`<header>` 要素がスクロールコンテナーの上端に固定されている場合にのみ、ブロック内に含まれるルールを適用します。その場合は、別の背景と {{cssxref("box-shadow")}} が、中の `<h2>` および `<p>` に適用されます。

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #ccc;
    box-shadow: 0 5px 2px #0007;
  }
}
```

簡潔にするため、残りの CSS は省略しています。

### 結果

文書を下にスクロールしてから上にスクロールして、`<h2>` および `<p>` 要素がコンテナーの上端に固定されると、新しい配色に切り替わることを確認してください。

{{EmbedLiveSample("stuck", "100%", "400px")}}

## 関連情報

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [CSS 条件付きクエリー](/ja/docs/Web/CSS/Guides/Conditional_rules)モジュール
- [CSS 位置指定](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
