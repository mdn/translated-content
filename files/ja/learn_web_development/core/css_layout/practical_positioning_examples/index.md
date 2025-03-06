---
title: 実践的な位置指定の例
slug: Learn_web_development/Core/CSS_layout/Practical_positioning_examples
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

この記事では、位置指定でどのようなことができるかを説明するために、実際に使用されるいくつかの例を作成する方法を示します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（<a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML 入門</a
        >で学習）、 CSS の動作の考え方（<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>で学習）
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>位置指定の実用性を理解すること。</td>
    </tr>
  </tbody>
</table>

## タブ付き情報ボックス

最初の例は、古典的なタブ付きの情報ボックスです。これは、たくさんの情報を小さな領域にまとめたいときによく使われる機能です。 これには、戦略/戦争ゲームのような情報量の多いアプリ、画面が狭くスペースが限られているモバイル版のウェブサイト、および UI 全体を埋め尽くさずに多くの情報を利用できるようにしたいコンパクトな情報ボックスが含まれます。 これらを単純化した例は、完成すると次のようになります。

![Tab 1 が選択されています。 'Tab 2' と 'Tab 3' は他の 2 種類のタブです。選択されたタブのコンテンツだけが表示されます。タブが選択されると、タブの文字色が黒から白に、背景色がオレンジレッドからサドルブラウンに変わります。](tabbed-info-box.png)

> [!NOTE]
> 完成した例は、[info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) でライブで確認できます（[ソースコード](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

「別々のタブを別々のウェブページとして作成し、タブをクリックして別々のページに移動させて同様の効果を生み出すだけでよいのではないでしょうか？」と考えるかもしれません。 このコードならもっと簡単なものになりますが、実際には個々の「ページ」ビューは実際には新しくロードされたウェブページになるため、ビュー間で情報を保存し、この機能をより大きな UI デザインに統合するのは難しくなります。

まず始めに、出発点のファイル、 [info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box-start.html) および [tabs-manual.js](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabs-manual.js) のローカルコピーを作成してください。 これをローカルコンピューターの適当な場所に保存して、 `tabbed-info-box-start.html` をテキストエディターで開きます。 `body` に含まれる HTML を見てみましょう。

```html
<section class="info-box">
  <div role="tablist" class="manual">
    <button
      id="tab-1"
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="tabpanel-1">
      <span>Tab 1</span>
    </button>

    <button
      id="tab-2"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="tabpanel-2">
      <span>Tab 2</span>
    </button>
    <button
      id="tab-3"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="tabpanel-3">
      <span>Tab 3</span>
    </button>
  </div>

  <div class="panels">
    <article id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
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

    <article id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2">
      <h2>The second tab</h2>
      <p>
        This tab hasn't got any Lorem Ipsum in it. But the content isn't very
        exciting all the same.
      </p>
    </article>

    <article id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3">
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

それでは、ここに {{htmlelement("section")}} 要素のクラス (`class`) が `info-box` であるものがあり、中に 2 つの {{htmlelement("div")}} が入っています。最初の div には 3 つのボタンがあり、その中にリンクがあります。 これは、コンテンツパネルを表示するためにクリックする実際のタブになります。 2 つ目の `div` には、各タブに対応するコンテンツパネルを構成する 3 つの {{htmlelement("article")}} 要素が含まれています。 各パネルにはいくつかのサンプルのコンテンツが含まれています。

ここでの考え方は、標準の水平ナビゲーションメニューのようにタブをスタイルし、絶対位置指定を使用して互いの上に重なるようにパネルをスタイル設定するということです。 また、タブが押されたときに対応するパネルを表示し、タブ自体をスタイルするためにページに含める JavaScript も少し用意します。 現段階では JavaScript 自体を理解する必要はありませんが、基本的な [JavaScript](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) をできるだけ早く学習することを検討するべきです — UI 機能が複雑になるほど、欲しい機能を実装するために JavaScript が必要になるでしょう。

### 全般的な設定

まず、{{HTMLElement("style")}} の開始タグと終了タグの間に次を追加します。

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

これは、ページに サンセリフ (`sans-serif`) フォントを設定し、`border-box` の {{cssxref("box-sizing")}} モデルを使い、{{htmlelement("body")}} から既定のマージンを取り除くための一般的な設定です。

次に、前の CSS のすぐ下に次を追加します。

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 1.25rem auto 0;
}
```

これはコンテンツに特定の幅と高さを設定し、古い `margin: 1.25rem auto 0` トリックを使用して画面の中央に配置します。このコースでは以前、できるだけコンテンツのコンテナーに固定の高さを設定しないことをお勧めしました。 タブのコンテンツは固定されているので、この状況では問題ありません。

### タブのスタイル設定

今度はタブをタブのようにスタイル設定します。基本的にこれらは水平ナビゲーションメニューですが、コースで以前見たようにクリックされたときに異なるウェブページを読み込む代わりに、異なるパネルを同じページに表示します。 まず、CSS の一番下に次のルールを追加して、 `tablist` を {{cssxref("flex")}} コンテナーとし、幅を 100% にします。

```css
.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}
```

> [!NOTE]
> この例では、チェーンの先頭に `.info-box` を持つ子孫セレクターを使用しています。 これは、他のコンテンツがすでに含まれているページに、ページの他の部分に適用されているスタイルを妨げることなく、この機能を挿入できるようにするためです。

次に、ボタンをタブのように見えるようにスタイル設定していきます。以下の CSS を追加します。

```css
.info-box [role="tab"] {
  padding: 0 1rem 0 1rem;
  line-height: 3rem;
  background: white;
  color: #b60000;
  font-weight: bold;
  border: none;
  outline: none;
}
```

次に、タブの `:focus` および `:hover` の状態を設定して、フォーカス/ホバー時の見た目を変え、ユーザーに視覚的なフィードバックを提供します。

```css
.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}
```

次に、 [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-selected) プロパティが `true` に設定されているタブを強調表示するルールを適用します。これは、タブがクリックされた際に JavaScript で設定します。以下の CSS を、他のスタイルのすぐ下に配置します。

```css
.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}
```

### パネルのスタイル設定

次の仕事はパネルをスタイル設定することです。 さあ行きましょう！

まず最初に、`.panels` の {{htmlelement("div")}} コンテナーをスタイルするために次のルールを追加します。 ここでは、パネルが情報ボックスの内側にぴったり収まるように、 {{cssxref("position")}} を `relative` に設定して {{htmlelement("div")}} を位置指定コンテキストとすることで、位置指定された子要素を、初期ビューポートではなくその要素からの相対とし、最後に上記 CSS で設定した浮動を解除 ({{cssxref("clear")}}) することで、レイアウトに影響を与えないようにします。

```css
.info-box .panels {
  height: 352px;
  clear: both;
  position: relative;
}
```

この節の最後に、パネルを構成する個々の {{htmlelement("article")}} 要素をスタイル設定します。 {{cssxref("position")}} を指定してパネルを絶対位置指定し、 {{cssxref("top")}} と {{cssxref("left")}} を指定することで、 {{htmlelement("div")}} コンテナーの左上に寄せて配置することです。 — これは、パネルを互いの上に重ねて配置するという、このレイアウト機能全体にとって絶対に重要な部分です。 このルールはまた、パネルの高さをコンテナーと同じにし、コンテンツにいくらかのパディング、テキストの {{cssxref("color")}}、および {{cssxref("background-color")}} を与えます。

```css
.info-box [role="tabpanel"] {
  background-color: #b60000;
  color: white;
  position: absolute;
  padding: 0.8rem 1.2rem;
  height: 352px;
  top: 0;
  left: 0;
}
```

ここで追加する2つ目のルールは、クラスが `is-hidden` に設定されたパネルが非表示になるようにします。 ここでも、適切なタイミングで JavaScript を使用してこのクラスを追加/除去します。 タブが選択されると、対応するパネルの `is-hidden` クラスが除去され、他にもパネルすべてに `is-hidden` クラスが設定されるため、一度に 1 つのパネルのみが表示されるようになります。

```css
.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

### JavaScript

この機能を動作させるための最後のステップは、JavaScript を追加することです。 `tabs-manual.js` ファイルを、 [`<script>`](/ja/docs/Web/HTML/Element/script) タグを使用して含めます。

```html
<script src="tabs-manual.js"></script>
```

このコードは次のことを行います。

- [window の load イベント](/ja/docs/Web/API/Window/load_event)時に、 `TabsManual` [クラス](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)を `tablist` 要素すべてに対して初期化します。
- `TabsManual` オブジェクトを作成すると、コンストラクターでタブとパネルへの参照すべてが `tabs` と `tabpanels` 変数に収集されるため、後でそれらに対して簡単にさまざまな処理を行うことができます。
- コンストラクターは、すべてのタブに対して [`click`](/ja/docs/Web/API/Element/click_event) および [`keydown`](/ja/docs/Web/API/Element/keydown_event) イベントハンドラーも登録します。イベントハンドラーには、クリックまたはキー操作を使用してタブが選択された際に現れるべき内容についてのロジックが含まれます。
- `setSelectedTab(currentTab)` 関数の中で、以下のことが行われます。。

  - `for` ループを使用して、すべてのタブを巡回し、 `aria-selected` プロパティを `false` に設定し、対応するパネルに `is-hidden` クラスを設定することで、それらを選択解除します。
  - 選択されたタブ (`currentTab`) では、 `aria-selected` を `true` に設定し、対応するパネルから `is-hidden` クラスを除去します。

- また、このコードは、`←キー`、`→キー`、`Home`、`End` キーを使用するキーボード操作に対応します。

## 固定位置のタブ付き情報ボックス

2 番目の例では、最初の例（情報ボックス）を取り上げて、それをフルウェブページのコンテキストに追加します。 それだけではありません — ブラウザーウィンドウ内で同じ位置に留まるように固定位置を指定します。 メインコンテンツがスクロールしても、情報ボックスは画面上の同じ位置に留まります。 完成した例は次のようになります。

![Info-box は 3 つのタブを持つコンテナーで、最初のタブが選択され、最初のタブのコンテンツのみが表示されます。固定位置が指定されました。インフォボックスはウィンドウの左上隅に位置指定され、幅は 452 ピクセルです。ウィンドウの残りの右半分は、偽コンテンツのコンテナーが占めています。偽コンテンツのコンテナーはウィンドウよりも高く、スクロール可能です。ページがスクロールされると、情報ボックスは画面の同じ位置に固定されたまま、右側のコンテナーは移動します。](fixed-info-box.png)

> [!NOTE]
> 完成した例は、[fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) でライブで確認できます（[ソースコード](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

出発点として、記事の最初のセクションで完成させた例を使用するか、Github リポジトリーから [info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html) のローカルコピーを作成することができます。

### HTML の追加

まず第一に、ウェブサイトのメインコンテンツを表すために追加の HTML が必要です。 既存のセクションの直前で、開始 {{htmlelement("body")}} タグのすぐ下に次の {{htmlelement("section")}} を追加します。

```html
<section class="fake-content">
  <h1>擬似コンテンツ</h1>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
  <p>
    これは擬似コンテンツです。メインウェブページのコンテンツは、おそらくここに来ます。
  </p>
</section>
```

> [!NOTE]
> お好みにより、擬似コンテンツを本物のコンテンツに変更してもかまいません。

### 既存の CSS への変更

次に、情報ボックスを配置して位置指定するために、既存の CSS に若干の変更を加える必要があります。 `.info-box` のルールを変更して、`margin: 0 auto;` を取り除き（情報ボックスを中央に配置する必要はもうありません）、 {{cssxref("position", "position: fixed;")}} を追加して、ブラウザーのビューポートの {{cssxref("top")}} に貼り付けます。

これは今、次のようになるはずです。

```css
.info-box {
  width: 452px;
  height: 400px;
  margin: 0 auto;
  position: fixed;
  top: 0;
}
```

### メインコンテンツのスタイル設定

この例に残された唯一のことは、メインコンテンツに何らかのスタイルを提供することです。 CSS の残りの部分の下に次の規則を追加します。

```css
.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}

.fake-content p {
  margin-bottom: 200px;
}
```

まず、情報ボックスパネルと同じ {{cssxref("background-color")}}、{{cssxref("color")}}、および {{cssxref("padding")}} をコンテンツに与えます。 それから、それを右に動かすために大きな {{cssxref("margin-left")}} を与えて、情報ボックスが収まるスペースを作り、他に何も重ならないようにします。

これで 2 番目の例は終わりです。 3 つ目も同じように面白いと思います。

## スライド式隠しパネル

ここで紹介する最後の例は、アイコンを押すだけで画面にスライドして現れたり消えたりするパネルです。 これは、前述のように、モバイルレイアウトのような、有用なコンテンツの代わりにメニューや情報パネルを表示して、画面の大部分を使い果たしたくない、使用可能な画面スペースが小さい状況では一般的です。

完成した例は次のようになります。

![画面の左 60% に空白の画面、右 40% 幅のパネルに情報が表示されます。右上には「疑問符」のアイコン。この「疑問符」アイコンを押すと、パネルが画面にスライドして表示されます。](hidden-sliding-panel.png)

> [!NOTE]
> 完成した例は、[hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) でライブで確認できます（[ソースコード](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。

まず始めに、Github リポジトリーから [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) のローカルコピーを作成します。 これは前の例から続いていないので、新鮮な出発点ファイルが必要です。 ファイル内の HTML を見てみましょう。

```html-nolint
<button
  type="button"
  id="menu-button"
  aria-haspopup="true"
  aria-controls="info-panel"
  aria-expanded="false">
      ❔
</button>

<aside id="info-panel" aria-labelledby="menu-button">
…
</aside>
```

まず、ここではボタンテキストとして特別な疑問符文字を持つ {{htmlelement("button")}} 要素があります。 ボタンが押されると、 [`aside`](/ja/docs/Web/HTML/Element/aside) 情報パネルが表示または非表示になります。 下記では、これがどのように動作するのかを説明します。

### ボタンのスタイル設定

まずボタンを扱いましょう — {{htmlelement("style")}} タグの間に次の CSS を追加します。

```css
#menu-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;

  font-size: 3rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
```

最初のルールは `<button>` にスタイル設定します。ここでは、次のことをしています。

- 大きな {{cssxref("font-size")}} を設定して、アイコンを見やすく大きくします。
- 境界線を除去し、背景を透明にして、ボタンの代わりに `?` アイコンのみを表示させます。
- その {{cssxref("position")}} を `absolute` に設定し、それを右上隅にうまく配置するために {{cssxref("top")}} と {{cssxref("right")}} を使用します。
- それに 1 の {{cssxref("z-index")}} を設定します。これは、情報パネルがスタイル設定されて表示されるときに、アイコンが隠れないようにし、アイコンがその上に表示されるので、もう一度押すと情報パネルを非表示にできます。
- アイコンが何か面白いことをしていることをユーザーに視覚的に知らせるために、{{cssxref("cursor")}} のプロパティを使用して、マウスポインターをアイコン上に移動したときにマウスポインターを指ポインターに変更します（リンク上にあるときに表示されるもののように）。

### パネルのスタイル設定

実際のスライド式パネル自体をスタイルする時が来ました。 CSS の最後に次のルールを追加してください。

```css
#info-panel {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s right ease-out;
}
```

ここではたくさんのことが起こっています。少しずつ説明しましょう。

- まず、情報ボックスに簡単な {{cssxref("background-color")}} と {{cssxref("color")}} を設定します。
- 次に、パネルに固定の {{cssxref("width")}} を設定し、その {{cssxref("height")}} をブラウザーのビューポート全体の高さにします。
- 少し間隔を空けるために水平方向の {{cssxref("padding")}} も指定します。
- 次に、パネルに {{cssxref("position", "position: fixed;")}} を設定して、ページにスクロールするコンテンツがある場合でも、パネル上では常に同じ場所に表示されるようにします。 それをビューポートの {{cssxref("top")}} に接着し、既定で {{cssxref("right")}} が画面外になるように設定します。
- 最後に、要素に {{cssxref("transition")}} を設定します。トランジションは、単に突然「オン」、「オフ」になるのではなく、状態間の変化を滑らかに行わせることを可能にする興味深い機能です。 この場合、チェックボックスがオンになったとき（言い換えれば、疑問符のアイコンをクリックしたとき）にパネルを画面上で滑らかにスライドさせることを目的としています。

### チェック状態を設定する

追加する CSS の最後の部分がもう 1 つあります。 CSS の下部に次のコードを追加してください。

```css
#info-panel.open {
  right: 0px;
}
```

この一連のルールでは、情報パネルに `.open` クラスが設定されている場合、 `<aside>` の {{cssxref("right")}} プロパティを `0px` に設定し、パネルが再び画面上に（トランジションによりスムーズに）表示されるようにします。 `.open` クラスが除去されると、パネルは再び非表示になります。

ボタンをクリックすると、情報パネルに `.open` クラスが追加または除去されるようにするには、 JavaScript を使用する必要があります。次のコードを {{htmlelement("script")}} タグの間に追加します。

```js
const button = document.querySelector("#menu-button");
const panel = document.querySelector("#info-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", panel.classList.contains("open"));
});
```

このコードは、ボタンにクリックイベントハンドラーを追加します。クリックハンドラーは、 `open` クラスを情報ボックスパネル上で切り替えます。これにより、パネルがビューにスライドインまたはスライドアウトします。
イベントハンドラーは、アクセシビリティを向上させるために、 [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) プロパティをボタンに設定します。

以上です。トグル式の情報パネル効果を作成する最も簡単な方法です。

## まとめ

それでは、位置指定の見方を締めくくります。これまでのところ、基本的な仕組みがどのように機能するのか、またこれらを適用して興味深い UI 機能を構築する方法を理解しているはずです。 これをすぐに理解できなくても心配しないでください。位置指定はかなり高度なトピックであり、理解を助けるために記事をいつでも再び参照することができます。
