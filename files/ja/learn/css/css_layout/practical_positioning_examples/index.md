---
title: 実用的な位置指定の例
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
---

{{LearnSidebar}}

この記事では、位置指定でどのようなことができるかを説明するために、実際に使用されるいくつかの例を作成する方法を示します。

| 前提知識: | HTML の基礎（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、および CSS の機能の考え方（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)を学ぶ）。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | 位置指定の実用性を理解すること。                                                                                                                                    |

## タブ付き情報ボックス

最初の例は、古典的なタブ付きの情報ボックスです — これは、たくさんの情報を小さな領域にまとめたいときによく使われる機能です。 これには、戦略/戦争ゲームのような情報量の多いアプリ、画面が狭くスペースが限られているモバイル版のウェブサイト、および UI 全体を埋め尽くさずに多くの情報を利用できるようにしたいコンパクトな情報ボックスが含まれます。 これらを単純化した例は、完成すると次のようになります。

![](tabbed-info-box.png)

> **メモ:** 完成した例は、[info-box.html](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) でライブで確認できます（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

「別々のタブを別々のウェブページとして作成し、タブをクリックして別々のページに移動させて同様の効果を生み出すだけでよいのではないでしょうか？」と考えるかもしれません。 このコードならもっと簡単なものになりますが、実際には個々の「ページ」ビューは実際には新しくロードされたウェブページになるため、ビュー間で情報を保存し、この機能をより大きな UI デザインに統合するのは難しくなります。 さらに、いわゆる「シングルページアプリ」は、特にモバイルウェブ UI の場合、非常に人気が高まっています。 なぜなら、すべてのコンテンツを表示するために必要な HTTP リクエストの数が減り、パフォーマンスが向上するからです。

> **メモ:** ウェブ開発者の中には、一度に 1 ページの情報だけをロードし、[XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest) などの JavaScript 機能を使用して表示される情報を動的に変更することで、さらに問題を解決するものもあります。 しかし、学習の現時点では、物事をできるだけシンプルに保ちたいと思います。 後で JavaScript がいくつかありますが、ほんの少しだけです。

まず始めに、出発点の HTML ファイル [info-box-start.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box-start.html) のローカルコピーを作成してください。 これをローカルコンピュータの適当な場所に保存して、テキストエディタで開きます。 `body` に含まれる HTML を見てみましょう。

```html
<section class="info-box">
  <ul>
    <li><a href="#" class="active">Tab 1</a></li>
    <li><a href="#">Tab 2</a></li>
    <li><a href="#">Tab 3</a></li>
  </ul>
  <div class="panels">
    <article class="active-panel">
      <h2>The first tab</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum
        et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius
        libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt
        metus. Donec ultrices, urna maximus consequat aliquet, dui neque
        eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor
        urna. Nulla facilisi.
      </p>
    </article>
    <article>
      <h2>The second tab</h2>

      <p>
        This tab hasn't got any Lorem Ipsum in it. But the content isn't very
        exciting all the same.
      </p>
    </article>
    <article>
      <h2>The third tab</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. And now an
        ordered list: how exciting!
      </p>

      <ol>
        <li>dui neque eleifend lorem, a auctor libero turpis at sem.</li>
        <li>Aliquam ut porttitor urna.</li>
        <li>Nulla facilisi</li>
      </ol>
    </article>
  </div>
</section>
```

それで、ここに {{htmlelement("ul")}} と {{htmlelement("div")}} を含む `info-box` のクラス（`class`）を持つ {{htmlelement("section")}} 要素があります。 番号なしリストには 3 つのリスト項目があり、その中にリンクがあります。 これは、コンテンツパネルを表示するためにクリックする実際のタブになります。 `<div>` には、各タブに対応するコンテンツパネルを構成する 3 つの {{htmlelement("article")}} 要素が含まれています。 各パネルにはいくつかのサンプルのコンテンツが含まれています。

ここでの考え方は、標準の水平ナビゲーションメニューのようにタブをスタイルし、絶対位置指定を使用して互いの上に重なるようにパネルをスタイルするということです。 また、タブが押されたときに対応するパネルを表示し、タブ自体をスタイルするためにページに含める JavaScript も少し用意します。 現段階では JavaScript 自体を理解する必要はありませんが、基本的な [JavaScript](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics) をできるだけ早く学習することを検討するべきです — UI 機能が複雑になるほど、欲しい機能を実装するために JavaScript が必要になるでしょう。

### 一般的な設定

まず、{{htmlelement("style")}} の開始タグと終了タグの間に次を追加します。

```css
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

これは、ページに サンセリフ（`sans-serif`）フォントを設定し、`border-box` の {{cssxref("box-sizing")}} モデルを使い、{{htmlelement("body")}} からデフォルトのマージンを取り除くための一般的な設定です。

次に、前の CSS のすぐ下に次を追加します。

```css
.info-box {
  width: 450px;
  height: 400px;
  margin: 0 auto;
}
```

これはコンテンツに特定の幅と高さを設定し、古い `margin: 0 auto` トリックを使用して画面の中央に配置します。 以前のコースでは、可能であればコンテンツのコンテナに固定の高さを設定しないことをお勧めしました。 タブのコンテンツは固定されているので、この状況では問題ありません。 また、異なる高さで異なるタブを表示するのも少々不快です。

### タブのスタイリング

今度はタブをタブのようにスタイルします — 基本的にこれらは水平ナビゲーションメニューですが、コースで以前見たようにクリックされたときに異なるウェブページをロードする代わりに異なるパネルを同じページに表示します。 まず、CSS の一番下に次の規則を追加して、番号なしリストからデフォルトの {{cssxref("padding-left")}} と {{cssxref("margin-top")}} を削除します。

```css
.info-box ul {
  padding-left: 0;
  margin-top: 0;
}
```

> **メモ:** この例では、チェーンの先頭に `.info-box` を持つ子孫セレクタを使用しています。 これは、他のコンテンツがすでに含まれているページに、ページの他の部分に適用されているスタイルを妨げることなく、この機能を挿入できるようにするためです。

次に、水平方向のタブのスタイルを設定します。 リスト項目は、一列に並ぶようにすべて左にフロートさせ、行頭記号（bullet）を取り除くために {{cssxref("list-style-type")}} を `none` に設定し、{{cssxref("width")}} を `150px` に設定しているので、それらは情報ボックス全体にうまく収まります。 {{htmlelement("a")}} 要素は {{cssxref("display")}}`: inline-block` に設定されているので、一列に並んでいてもスタイル可能で、他のさまざまなプロパティを使用して、タブボタンに適したスタイルになっています。

次の CSS を追加してください。

```css
.info-box li {
  float: left;
  list-style-type: none;
  width: 150px;
}

.info-box li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  line-height: 3;
  background-color: red;
  color: black;
  text-align: center;
}
```

最後に、このセクションでは、リンク状態にいくつかのスタイルを設定します。 最初に、フォーカス時やホバー時にタブの状態が異なるように {{cssxref(":focus")}} と {{cssxref(":hover")}} の状態を設定し、ユーザーに視覚的なフィードバックを提供します。 次に、タブの 1 つに `active` のクラスが存在する場合、それに同じスタイルを設定する規則を設定します。 これをタブがクリックされたときに JavaScript を使用して設定します。 次の CSS を他のスタイルの下に配置します。

```css
.info-box li a:focus,
.info-box li a:hover {
  background-color: #a60000;
  color: white;
}

.info-box li a.active {
  background-color: #a60000;
  color: white;
}
```

### パネルのスタイリング

次の仕事はパネルをスタイルすることです。 さあ行きましょう！

まず最初に、`.panels` の {{htmlelement("div")}} コンテナをスタイルするために次の規則を追加します。 ここでは、パネルが情報ボックスの内側にぴったり収まるように固定の {{cssxref("height")}} を設定し、{{htmlelement("html")}} ではなくそれに対して相対的に位置指定子要素を配置できるように {{cssxref("position")}}`: relative` で {{htmlelement("div")}} を位置指定コンテキストとして設定します。 最後にレイアウトに影響を与えないように、最後に上記 CSS で設定したフロートを {{cssxref("clear")}} します。

```css
.info-box .panels {
  height: 352px;
  position: relative;
  clear: both;
}
```

このセクションの最後に、パネルを構成する個々の {{htmlelement("article")}} 要素をスタイルします。 最初に追加する規則は、パネルを絶対位置指定して、それらがすべて {{htmlelement("div")}} コンテナの {{cssxref("top")}} と {{cssxref("left")}} にぴったり合うように配置することです — これは、パネルを互いの上に重ねて配置するという、このレイアウト機能全体にとって絶対に重要な部分です。 この規則はまた、パネルにコンテナと同じ設定の高さを与え、コンテンツにいくつかの {{cssxref("padding")}}、テキストの {{cssxref("color")}}、および {{cssxref("background-color")}} を与えます。

ここで追加する 2 番目の規則は、`active-panel` のクラスが設定されているパネルに 1 の `{{cssxref("z-index")}}` が適用されるようにすることです。 これにより、他のパネルの上に重ねて置かれます（位置指定要素はデフォルトで 0 の `z-index` を持ち、これは他のパネルを下に置きます）。 繰り返しますが、適切なタイミングで JavaScript を使用してこのクラスを追加します。

```css
.info-box article {
  position: absolute;
  top: 0;
  left: 0;
  height: 352px;
  padding: 10px;
  color: white;
  background-color: #a60000;
}

.info-box .active-panel {
  z-index: 1;
}
```

### JavaScript を追加する

この機能を動作させるための最後のステップは、JavaScript を追加することです。 {{htmlelement("script")}} の開始タグと終了タグの間に記述されているとおりに、次のコードブロックを挿入します（これらは HTML コンテンツの下方にあります）。

```
var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');

for(i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}
```

このコードは次のことを行います。

- 最初に、すべてのタブとすべてのパネルへの参照を `tabs` と `panels` と呼ばれる 2 つの変数に保存するので、後で簡単に使うことができます。
- 次に、`for` ループを使用してすべてのタブを巡回し、それぞれに対して `setTabHandler()` という関数を実行します。 これにより、各タブをクリックしたときに発生するべき機能が設定されます。 実行されると、関数はそれが実行されている特定のタブへの参照と、`tabs` 配列内のタブの位置を識別するインデックス番号 `i` が渡されます。
- `setTabHandler()` 関数では、タブに `onclick` イベントハンドラを設定していて、タブをクリックすると次のことが起こります。

  - `for` ループで、すべてのタブを巡回し、それらに存在するクラスをすべて削除します。
  - クリックされたタブに `active` のクラスが設定されます。 このクラスには、パネルのスタイル設定と同じ {{cssxref("color")}} と {{cssxref("background-color")}} をタブに設定する CSS の規則が関連付けられていることを以前にも説明しました。
  - `for` ループは、すべてのパネルを巡回し、それらに存在するクラスをすべて削除します。
  - クリックされたタブに対応するパネルに `active-panel` のクラスが設定されます。 このクラスには、{{cssxref("z-index")}} を 1 に設定して他のパネルの上に表示させる CSS の規則が関連付けられていることを以前にも説明しました。

最初の例はこれで終わりです。 2 番目の例で追加しますので、コードを開いたままにしてください。

## 固定位置のタブ付き情報ボックス

2 番目の例では、最初の例（情報ボックス）を取り上げて、それをフルウェブページのコンテキストに追加します。 それだけではありません — ブラウザーウィンドウ内で同じ位置に留まるように固定位置を指定します。 メインコンテンツがスクロールしても、情報ボックスは画面上の同じ位置に留まります。 完成した例は次のようになります。

![](fixed-info-box.png)

> **メモ:** 完成した例は、[fixed-info-box.html](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) でライブで確認できます（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/fixed-info-box.html)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

出発点として、記事の最初のセクションで完成させた例を使用するか、Github リポジトリから [info-box.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html) のローカルコピーを作成することができます。

### HTML の追加

まず第一に、ウェブサイトのメインコンテンツを表すために追加の HTML が必要です。 既存のセクションの直前で、開始 {{htmlelement("body")}} タグのすぐ下に次の {{htmlelement("section")}} を追加します。

```html
<section class="fake-content">
  <h1>Fake content</h1>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
</section>
```

> **メモ:** お好みにより、本物のコンテンツで偽のコンテンツを自由に変更してもかまいません。

### 既存の CSS への変更

次に、情報ボックスを配置して位置指定するために、既存の CSS に若干の変更を加える必要があります。 `.info-box` の規則を変更して、`margin: 0 auto;` を取り除き（情報ボックスを中央に配置する必要はもうありません）、{{cssxref("position")}}`: fixed;` を追加して、ブラウザーのビューポートの {{cssxref("top")}} に貼り付けます。

これは今、次のようになるはずです。

```css
.info-box {
  width: 450px;
  height: 400px;
  position: fixed;
  top: 0;
}
```

### メインコンテンツのスタイリング

この例に残された唯一のことは、メインコンテンツに何らかのスタイルを提供することです。 CSS の残りの部分の下に次の規則を追加します。

```css
.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}
```

まず、情報ボックスパネルと同じ {{cssxref("background-color")}}、{{cssxref("color")}}、および {{cssxref("padding")}} をコンテンツに与えます。 それから、それを右に動かすために大きな {{cssxref("margin-left")}} を与えて、情報ボックスが収まるスペースを作り、他に何も重ならないようにします。

これで 2 番目の例は終わりです。 3 つ目も同じように面白いと思います。

## スライド式隠しパネル

ここで紹介する最後の例は、アイコンを押すだけで画面にスライドして現れたり消えたりするパネルです。 これは、前述のように、モバイルレイアウトのような、有用なコンテンツの代わりにメニューや情報パネルを表示して、画面の大部分を使い果たしたくない、使用可能な画面スペースが小さい状況では一般的です。

完成した例は次のようになります。

![](hidden-sliding-panel.png)

> **メモ:** 完成した例は、[hidden-info-panel.html](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) でライブで確認できます（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel.html)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

まず始めに、Github リポジトリから [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) のローカルコピーを作成します。 これは前の例から続いていないので、新鮮な出発点ファイルが必要です。 ファイル内の HTML を見てみましょう。

```css
<label for="toggle">❔</label>
<input type="checkbox" id="toggle">
<aside>

  ...

</aside>
```

{{htmlelement("label")}} 要素と {{htmlelement("input")}} 要素から始めましょう — `<label>` 要素は通常、アクセシビリティの目的でテキストラベルをフォーム要素に関連付けるために使用します（スクリーンリーダーのユーザーが、どの説明がどのフォーム要素に対応しているかを確認できるようにします）。 ここでは、`for` 属性と `id` 属性を使用して `<input>` チェックボックスに関連付けられています。

> **メモ:** 情報アイコンとして機能するために、HTML に特別な疑問符文字を入れました。 これは、パネルを表示/非表示にするために押されるボタンを表します。

ここでは、これらの要素を少し異なる目的で使用します — `<label>` 要素のもう 1 つの便利な副作用は、チェックボックス自体だけでなく、チェックボックスのラベルをクリックしてチェックボックスをチェックできることです。 これはよく知られた[チェックボックスハック](https://css-tricks.com/the-checkbox-hack/)（英語）をもたらしました。 それはボタンを切り替えることによって要素を制御する JavaScript フリーの方法を提供します。 制御する要素は、他の 2 つに続く {{htmlelement("aside")}} 要素です（簡潔にするために、上記のコードリストからそのコンテンツを省略しました）。

以下のセクションでは、これがどのように機能するのかを説明します。

### フォーム要素のスタイリング

まずフォーム要素を扱いましょう — {{htmlelement("style")}} タグの間に次の CSS を追加します。

```css
label[for="toggle"] {
  font-size: 3rem;
  position: absolute;
  top: 4px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

最初の規則は `<label>` をスタイルします。 ここでは、次のことをしています。

- アイコンを見やすく大きくするには、大きい {{cssxref("font-size")}} を設定します。
- それに {{cssxref("position")}}`: absolute` を設定し、それを右上隅にうまく配置するために {{cssxref("top")}} と {{cssxref("right")}} を使用しました。
- それに 1 の {{cssxref("z-index")}} を設定します — これは、情報パネルがスタイル設定されて表示されるときに、アイコンが隠れないようにし、アイコンがその上に表示されるので、もう一度押すと情報パネルを非表示にできます。
- アイコンが何か面白いことをしていることをユーザーに視覚的に知らせるために、{{cssxref("cursor")}} のプロパティを使用して、マウスポインタをアイコン上に移動したときにマウスポインタをハンドポインタに変更します（リンク上にあるときに表示されるもののように）。

2 番目の規則は、実際のチェックボックスの `<input>` 要素に {{cssxref("position")}}`: absolute` を設定し、それを画面上部の範囲外に離すことで隠します。 実際の UI でこれを見たくありません。

### パネルのスタイリング

今度は実際のスライド式パネル自体をスタイルする時が来ました。 CSS の最後に次の規則を追加してください。

```css
aside {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s all;
}
```

ここではたくさんのことが起こっています — 少しずつ説明しましょう。

- まず、情報ボックスに簡単な {{cssxref("background-color")}} と {{cssxref("color")}} を設定します。
- 次に、パネルに固定の {{cssxref("width")}} を設定し、その {{cssxref("height")}} をブラウザーのビューポート全体の高さにします。
- 少し間隔を空けるために水平方向の {{cssxref("padding")}} も含まれています。
- 次に、パネルに {{cssxref("position")}}`: fixed;` を設定して、ページにスクロールするコンテンツがある場合でも、パネル上では常に同じ場所に表示されるようにします。 それをビューポートの {{cssxref("top")}} に接着し、デフォルトで {{cssxref("right")}} が画面外になるように設定します。
- 最後に、要素に {{cssxref("transition")}} を設定します。 遷移は、単に突然「オン」、「オフ」になるのではなく、状態間の変化を滑らかに行わせることを可能にする興味深い機能です。 この場合、チェックボックスがオンになったときにパネルを画面上で滑らかにスライドさせることを目的としています。 （言い換えれば、疑問符のアイコンをクリックすると — `<label>` をクリックすると、関連するチェックボックスがオンになることを忘れないでください！ これは、ハックです。） あなたはもっと多くを学ぶでしょう...

### チェック状態を設定する

追加する CSS の最後の部分がもう 1 つあります。 CSS の下部に次のコードを追加してください。

```css
input[type="checkbox"]:checked + aside {
  right: 0px;
}
```

セレクタはここではかなり複雑です — 私たちは `<input>` 要素に隣接する `<aside>` 要素を選択していますが、それがチェックされているときだけです（これを達成するための {{cssxref(":checked")}} 擬似クラスの使用に注意してください）。 この場合、`<aside>` の {{cssxref("right")}} プロパティを `0px` に設定しています。 これにより、パネルが再び画面に表示されるようになります（遷移により滑らかに）。 ラベルをもう一度クリックすると、チェックボックスがオフになり、パネルを再び隠します。

切り替えボタン効果を作成するためのかなり賢い JavaScript フリーの方法は、これで終りです。 これは、IE9 以降で機能します（滑らかな遷移は、IE10 以降で機能します）。 この効果には、いくつかの懸念があります — フォーム要素はこの目的のために意図されていないので、少し乱用です。 さらに、その効果はアクセシビリティの観点からはあまり良くありません。 ラベルはデフォルトではフォーカスできず、フォーム要素を意味論的でない方法で使用するとスクリーンリーダーに問題が生じる可能性があります。 JavaScript とリンクまたはボタンのほうが適切かもしれませんが、それを試してみるのも楽しいでしょう。

## まとめ

それでは、位置指定の見方を締めくくります — これまでのところ、基本的な仕組みがどのように機能するのか、またこれらを適用して興味深い UI 機能を構築する方法を理解しているはずです。 これをすぐに理解できなくても心配しないでください — 位置指定はかなり高度なトピックであり、理解を助けるために記事をいつでも再び参照することができます。 次の話題はフレックスボックスです。
