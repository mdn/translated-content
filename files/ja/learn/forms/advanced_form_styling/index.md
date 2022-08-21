---
title: HTML フォームへの高度なスタイル設定
slug: Learn/Forms/Advanced_form_styling
tags:
  - Advanced
  - CSS
  - Forms
  - HTML
  - Web
  - ガイド
  - 例
translation_of: Learn/Forms/Advanced_form_styling
original_slug: Learn/Forms/Advanced_styling_for_HTML_forms
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

本記事では、スタイル設定が難しい一部の(不良なものと劣悪なもの)フォームコントロールで CSS を使用する方法を見ていきます。[前の記事](/ja/docs/HTML/Forms/Styling_HTML_forms "HTML/Forms/Styling_HTML_forms")で見たように、テキストフィールドやボタンでの CSS 使用はまったく問題がありません。ここからは、HTML フォームへのスタイル設定の闇の部分を見ていきます。

| 前提条件: | 基本的なコンピューターリテラシーと、[HTML](/ja/docs/Learn/HTML/Introduction_to_HTML) と [CSS](/ja/docs/Learn/CSS/First_steps) の基本的な理解。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | フォームのどの部分をスタイル設定するのが難しいのか、またなぜなのかを理解する。そこをカスタマイズするのに何ができるかを学ぶ。                   |

始める前に、2 種類の HTML フォームウィジェットについておさらいしましょう:

**不良**: スタイルの設定が難しく複雑なトリックが必要であり、時に CSS3 の高度な知識が必要である要素:

- チェックボックスとラジオボタン
- [`<input type="search">`](/ja/docs/Web/HTML/Element/input/search)

**劣悪**: いくつかの要素は CSS でスタイル設定できません。これらが含まれます:

- ドロップダウンウィジェットを作成する要素、{{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("datalist")}}を含む
- [`<input type="color">`](/ja/docs/Web/HTML/Element/input/color)
- [`<input type="datetime-local">`](/ja/docs/Web/HTML/Element/input/datetime-local)のような日付関連コントロール
- [`<input type="range">`](/ja/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/ja/docs/Web/HTML/Element/input/file)
- {{HTMLElement("progress")}} and {{HTMLElement("meter")}}

## 見た目: OS レベルのスタイル制御

前の記事では歴史的に、ウェブフォームのスタイル設定は OS で行われており、それがこのコントロールの見た目のカスタマイズの問題の一部となっていました。

{{cssxref("appearance")}} プロパティは OS やシステムレベルでウェブフォームのスタイル設定を制御する方法として作成されました。不運なことに、そのプロパティの元々の実装の動作はブラウザー間で大きく異なっており、そんなに便利ではありませんでした。最近の実装ではもっと動作が一貫してきており、十分興味深く、それは Chromium-ベースのブラウザー (Chrome, Opera, Edge), Safari, Firefox のいずれも `-webkit-` のプレフィックスつきバージョン (`-webkit-appearance`)をサポートしています。Firefox は、ウェブ開発者の大半が `-webkit-` プレフィックスバージョンをサポート使っていて互換性が良いため、このように決めました。

リファレンスページを見ると `-webkit-appearance` の多くの値がありますが、最も便利で、おそらく唯一使うのは `none` です。これはあらゆるコントロールがシステムレベルのスタイル設定するのをできるだけ防止して、CSS を用いた独自のスタイル設定をできるようにします。

例えば、次のコントロールを見てみます:

```html
<form>
  <p>
    <label for="search">search: </label>
    <input id="search" name="search" type="search">
  </p>
  <p>
    <label for="text">text: </label>
    <input id="text" name="text" type="text">
  </p>
  <p>
    <label for="date">date: </label>
    <input id="date" name="date" type="datetime-local">
  </p>
  <p>
    <label for="radio">radio: </label>
    <input id="radio" name="radio" type="radio">
  </p>
  <p>
    <label for="checkbox">checkbox: </label>
    <input id="checkbox" name="checkbox" type="checkbox">
  </p>
  <p><input type="submit" value="submit"></p>
  <p><input type="button" value="button"></p>
</form>
```

次の CSS を適用してシステムレベルのスタイル設定を削除します。

```css
input {
  -webkit-appearance: none;
  appearance: none;
}
```

> **Note:** プレフィックスつきのプロパティを使っているときでも、両方の定義を常に入れておくのが良いです — プレフィックス付きとなしと。プレフィックスつきのものは通常は"作業中"を意味するため、将来のブラウザーベンダーはプレフィックスを落とすよう合意することもあるでしょう。上記のコードではそのような結末となった将来でも耐用できます。

下記の例ではあなたのシステムでどのように見えるかを示します — デフォルトでは左で、上記の CSS が適用されると右です (その他のシステムでテストしたい場合は[ここも探してください](https://mdn.github.io/learning-area/html/forms/styling-examples/appearence-tester.html))。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearence-tester.html", '100%', 400)}}

たいていの場合、効果は枠線を除去し、CSS でのスタイル設定を少し簡単にしますが、それは本質できありません。いくつかの場合 — 検索やラジオボタン/チェックボックスでは、もっと便利です。これを見ていきましょう。

### 検索ボックスを変更する

[`<input type="search">`](/ja/docs/Web/HTML/Element/input/search) は基本的に単なるテキスト入力のため、なぜ `appearance: none;` が便利なのでしょうか? 答えは macOS での Chromium ベースのブラウザーでは、検索ボックスはスタイル設定の制限があります — 例えば `height` や `font-size` を自在に調整できません。この理由は macOS 以外の [Chrome ブラウザーはもう WebKit レンダリングエンジンを使っていません](https://www.wired.com/2013/04/blink/) 、これは既定では、いくつかのフォームコントロールで Aqua の見た目が有効です。Aqua が有効だと、いくつかのフォームコントロールは [scalable](https://webkit.org/blog/28/buttons/) となりません。

これは デフォルトの Aqua を無効にする `appearance: none;`で修正できます:

```css
input[type="search"] {
    -webkit-appearance: none;
    appearance: none;
}
```

下記の例では、2 つのスタイル設定された検索ボックスが見えます。右のものは `appearance: none;` が適用され、左はそうでありません。macOS Chrome で見ると左のものは正しいサイズでないように見えます。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearence.html", '100%', 200)}}

興味深いことに、検索フィールドで border/background をセットしてもこの問題を解決できます、なぜならそれも Aqua を[無効化](https://webkit.org/blog/28/buttons/)や "破壊する" からです。下記のスタイル設定された検索ボックスは `appearance: none;` が適用されていませんが、前の例と同じ macOS Chrome の問題に悩まされていません。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> **Note:** 検索フィールドでは、Edge と Chrome で入力がフォーカスされないときに "x" の削除アイコンが消えるが、Safari では残ることに気づくこともあるでしょう。CSS で消すには、`input[type="search"]::-webkit-search-cancel-button { display: none; }`を使用できますが、フォーカス時のアイコンも取り除き、見た目が元に戻らないようです。

### チェックボックスとラジオボタン

チェックボックスやラジオボタンのスタイリングは難しい場合があります。たとえば、チェックボックスやラジオボタンのサイズはデフォルトのデザインの変更が意図されておらず、ブラウザーで試してみると非常に異なる反応を示します。

例えば、シンプルなテストケースを考えてみます:

```html
<span><input type="checkbox"></span>
```

```css
span {
    display: inline-block;
    background: red;
}

input[type=checkbox] {
    width : 100px;
    height: 100px;
}
```

さまざまなブラウザーでの処理方法は以下のとおりです:

| ブラウザー                          | 描画結果                                                                   |
| ----------------------------------- | -------------------------------------------------------------------------- |
| Firefox 71 (macOS)                  | ![](firefox-mac-checkbox.png)     |
| Firefox 57 (Windows 10)             | ![](firefox-windows-checkbox.png) |
| Chrome 77 (macOS), Safari 13, Opera | ![](chrome-mac-checkbox.png)      |
| Chrome 63 (Windows 10)              | ![](chrome-windows-checkbox.png)  |
| Internet Explorer 11 (Windows 10)   | ![](ie11-checkbox.png)            |
| Edge 16 (Windows 10)                | ![](edge-checkbox.png)            |

#### ラジオボタン/チェックボックスで appearance: none を使う

これまで見てきたように、チェックボックスやラジオボタンのデフォルトの見た目を {{cssxref('appearance')}}`:none;` で削除できます。この HTML の例を見てみましょう：

```html
<form>
  <fieldset>
    <legend>Fruit preferences</legend>

    <p>
      <label>
        <input type="checkbox" name="fruit-1" value="cherry">
        I like cherry
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit-2" value="banana" disabled>
        I can't like banana
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit-3" value="strawberry">
        I like strawberry
      </label>
    </p>
  </fieldset>
</form>
```

さて、カスタムチェックボックスデザインでこれらのスタイルを設定しましょう。元のチェックボックスを解除することから始めましょう：

```css
input[type=checkbox] {
  -webkit-appearance: none;
  appearance: none;
}
```

{{cssxref(":checked")}} と {{cssxref(":disabled")}} 擬似クラスを使用して、状態の変化に合わせてカスタムチェックボックスの外観を変更します：

```css
input[type=checkbox] {
  position: relative;
  width: 1em;
  height: 1em;
  border: 1px solid gray;
  /* Adjusts the position of the checkboxes on the text baseline */
  vertical-align: -2px;
  /* Set here so that Windows' High-Contrast Mode can override */
  color: green;
}

input[type=checkbox]::before {
  content: "✔";
  position: absolute;
  font-size: 1.2em;
  right: 0;
  top: -0.3em;
  visibility: hidden;
}

input[type=checkbox]:checked::before {
  /* Use `visibility` instead of `display` to avoid recalculating layout */
  visibility: visible;
}

input[type=checkbox]:disabled {
  border-color: black;
  background: #ddd;
  color: gray;
}
```

こうした疑似クラスなどは、[次の記事](/ja/docs/Learn/Forms/UI_pseudo-classes)で見つけられますが、上記は次のことをしています:

- `:checked` — チェックボックス (やラジオボタン) がチェックされた状態にあります — ユーザーがクリック/有効化しています。
- `:disabled` — チェックボックス (やラジオボタン) が無効な状態にあります — 操作することができますせん.

実際の結果が表示されます。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

もっと理解できるよう別の例もあります:

- [Styled radio buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): カスタムラジオボタンスタイル設定。
- [Toggle switch example](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): トグルスイッチのようなチェックボックス。

{{cssxref("appearance")}} や をサポートしていないブラウザーでこれらのチェックボックスを表示できます。カスタムデザインは失われますが、チェックボックスのままに見えて使用できます。

> **Note:** Internet Explorer はどのバージョンの `appearance` もサポートしませんが、`input[type=checkbox]::-ms-check` にて IE のみチェックボックスをターゲットにできます。この手法は、`-ms-check` という名前にもかかわらず、ラジオボタンでも機能します。

## "劣悪な"要素に何ができるか?

今度は"劣悪な"コントロールに注目しましょう — これは完全にスタイル設定するのが本当に難しいものです。簡単にいうと、これはドロップダウンボックス、[`color`](/ja/docs/Web/HTML/Element/input/color) や [`datetime-local`](/ja/docs/Web/HTML/Element/input/datetime-local) のような複合コントロールタイプ、フィードバック — {{HTMLElement("progress")}} や {{HTMLElement("meter")}}のような指向性コントロールです。

問題は、要素はブラウザー同士でいろいろな既定の見た目があって、それにスタイル設定できても、内部のいくつかはスタイル設定できないことです。

ルック＆フィールの違いを受け入れる覚悟があれば、サイズ変更を一貫したものにするためのシンプルなスタイル設定や、background-colors のような単一スタイル設定、システムレベルのスタイル設定を除去できる appearance の使用などで逃げることもできます。

例を見てみましょう、たくさんの"劣悪な" フォーム機能をつぎつぎに表示しています:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

この例では下記の CSS を適用しています:

```css
body {
  font-family: 'Josefin Sans', sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

form > div {
  margin-bottom: 20px;
}

select {
  -webkit-appearance: none;
  appearance: none;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}

button, label, input, select, progress, meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type="text"], input[type="datetime-local"], input[type="color"], select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}

label {
  margin-bottom: 5px;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

> **Note:** 多数のブラウザーで同時にこの例をテストしたい場合、[live 版をここで見つけてください](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) ([ソースコードも見てください](https://github.com/mdn/learning-area/blob/master/html/forms/styling-examples/ugly-controls.html))。
>
> また JavaScript をページに追加してコントロール自身の下にあるファイルピッカー自身で選択されたファイルを一覧しているのを心に留めておいてください。これは [`<input type="file">`](/ja/docs/Web/HTML/Element/input/file#Examples) リファレンスページの例を簡単にしたバージョンです。

ご覧のとおり、これらをモダンブラウザー全体で均一に見せることはかなりうまくいっています。

すべてのコントロールとそのラベルに対してグローバルな CSS の正規化を適用し、サイズを同様にして、親のフォントを適用するなどを行っています。これは前の記事で述べたようなことです:

```css
button, label, input, select, progress, meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}
```

コントロールに統一した影と角丸も与えて、意味のあるようにします:

```css
input[type="text"], input[type="datetime-local"], input[type="color"], select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

範囲や、プログレスバーや、メーターはコントロールエリアの周りに美しくないボックスができるだけなので、意味はありません。

これらのコントロールタイプそれぞれの仕様と、ハイライトの難しさをこれからお話ししましょう。

### Select とデータリスト

モダンブラウザーでは、select とデータリストは一般的に、デフォルトからルック＆フィールを大きく変えたくないようにスタイル設定する場合、悪くないものです。

これまで、ボックスの基本的な見た目をかなり均一で一貫性のあるものにしてきました。とにかくデータリストコントロールは `<input type="text">` なので、問題にならないことがわかっています。

2 つのものが多少問題をはらんでいます。まず最初に、select がドロップダウンであることを示す "矢印" アイコンは、ブラウザーによって異なります。また select ボックスのサイズを増やしたり、変更したりすると、醜くなりがちです。これを修正するため、例では最初に旧友の `appearance: none` を使ってアイコンを除去しています:

```css
select {
  -webkit-appearance: none;
  appearance: none;
}
```

次に生成されたコンテンツを使って独自のアイコンを作成します。コントロールの周りに特別なラッパーを置いていて、その理由は[`::before`](/ja/docs/Web/CSS/::before)/[`::after`](/ja/docs/Web/CSS/::after) が `<select>` 要素では動作しなしためです (これは生成されたコンテンツが要素がフォーマットするボックスに対し相対的に配置されますが、フォーム入力は置換された要素 — 表示がブラウザーによって生成されて順番に配置されるもの — として動作するので、1 つもないためです):

```html
<div class="select-wrapper"><select id="select" name="select">
  <option>Banana</option>
  <option>Cherry</option>
  <option>Lemon</option>
</select></div>
```

次に生成されたコンテンツを使って小さな下向き矢印を作り、正しい場所にポジショニングします:

```css
.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
```

2 つ目のもう少し有名な問題は、`<select>` ボックスをクリックして開いたときに出てくる、オプションを含んだボックスを制御できないことです。オプションが親でセットされたフォントを継承していないのに気づくでしょう。また余白スペースや色のようなものも一貫してセットできません。例えば、Firefox では[`<option>`](/ja/docs/Web/HTML/Element/option) 要素に [`color`](/ja/docs/Web/CSS/color) と [`background-color`](/ja/docs/Web/CSS/background-color) を適用できますが、Chrome ではそうなりません。どちらも余白スペース (例 [`padding`](/ja/docs/Web/CSS/padding))を適用できません。同じことはデータリスト用に出てくるオートコンプリートのリストにも当てはまります。

本当にオプションをスタイル設定する必要がある場合、カスタムコントロールを生成するライブラリを使用するか、独自のカスタムコントロールを作成するかのどちらかが必要で、あるいは `multiple`属性を使う select の場合、これはページ上に出てくるすべてのオプションを作成し、この特殊な問題を避けることができます:

```html
<select id="select" name="select" multiple>
  ...
</select>
```

もちろんこれでも進めているデザインにはフィットしないこともありますが、注目に値します!

### 日付入力タイプ

日付/時間の入力タイプ ([`datetime-local`](/ja/docs/Web/HTML/Element/input/datetime-local), [`time`](/ja/docs/Web/HTML/Element/input/time), [`week`](/ja/docs/Web/HTML/Element/input/week), [`month`](/ja/docs/Web/HTML/Element/input/month)) にはすべて同じ重大な関連した問題があります。実際のボックスはテキスト入力と同じくスタイル設定が容易であり、デモ内で得たものの見た目は良いです。

しかし、コントロールの内部パーツ (例 日付をピックアップするのに使うポップアップカレンダー、値を増減するスピナー) はまったくスタイル設定できず、`appearance: none;`を使ってスタイルを除去できません。スタイル設定に完全なコントロールが必要な場合、カスタムコントロールを生成するライブラリを使うか、自分で作らねばなりません。

> **Note:** ここでも[`<input type="number">`](/ja/docs/Web/HTML/Element/input/number) は触れる価値があります — これにも値を増減するスピナーがあるので、同じ問題に悩まさされます。しかし、`number` タイプを使った場合にデータは簡単に集められて、単に `text` 入力を (あるいはモバイルブラウザーで数字キーパッドを表示するのに `tel` を) 代わりに使うのも簡単です

### Range 入力タイプ

[`<input type="range">`](/ja/docs/Web/HTML/Element/input/range) はスタイル設定が煩わしいです。下記のようなものを使ってデフォルトのスライダートラックを完全に削除してカスタムスタイル (ここでは、薄い赤のトラック)に置き換えます:

```css
input[type="range"] {
  appearance: none;
  -webkit-appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

しかし、range コントロールのドラッグハンドルをカスタマイズするのはとても難しいです — range のスタイル設定を完全完全にコントロールするには、その中に複数の非標準な、ブラウザー固有の疑似要素も含んだ、複雑な CSS コードが必要です。[Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) で必要なものを細かく書くための CSS トリックを確認します。

### Color 入力タイプ

color 入力タイプはそこまでひどくないです。サポートされたブラウザーでは、単に小さな枠のある単色のブロックを提供します。

枠を削除して、色のブロックだけにするには、次のようにします:

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

しかし、カスタムソリューションは大きく異るようにする唯一の方法です。

### ファイル入力タイプ

ファイル入力タイプは通常は OK です — 例で見てきたように、ページの残りの部分に問題なくフィットする何かを作るのはとても簡単です — コントロールの一部分でもある出力行は、入力にそう指示している場合は親のフォントを継承して、カスタムリストに名前やサイズをお好みでスタイル設定できます; 結局は作っています。

ファイルピッカーの唯一の問題は、ファイルピッカーを開くボタンは完全にスタイル設定できないことです— サイズや色設定は不可能で、別のフォントすら指定できません。

この回避法は、フォームコントロールに関連するラベルがある場合、ラベルをクリックするとコントロールがアクティブになるという事実を利用します。つまり実際のフォーム入力を次のように隠します:

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

次にボタンのように動作するラベルをスタイル設定し、そのラベルが押された時にファイルピッカーが期待通り開くようにします:

```css
label[for="file"] {
  box-shadow: 1px 1px 3px #ccc;
  background: linear-gradient(to bottom, #eee, #ccc);
  border: 1px solid rgb(169, 169, 169);
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, #fff, #ddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #ccc;
}
```

上記の CSS スタイル設定の結果は、下記のライブ実行の例で見ることができます ([styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) のライブと、[ソースコード](https://github.com/mdn/learning-area/blob/master/html/forms/styling-examples/styled-file-picker.html-US/docs/)も見てください)。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### メーターとプログレスバー

[`<meter>`](/ja/docs/Web/HTML/Element/meter) と [`<progress>`](/ja/docs/Web/HTML/Element/progress) は多くの中で最悪かもしれません。前の例で見たように、希望する幅にだいたい正確に設定できました。しかしそれを超えると、どんな方法でもスタイル設定が本当に難しいです。高さの設定をお互いに、ブラウザー間で一貫して処理できず、背景は色付けできるものの、前面のバーはできず、`appearance: none` を設定すると良くならず、より悪くなります。

スタイル設定を制御したい場合は、この機能のカスタムソリューションを作ったり、[progressbar.js](http://kimmobrunfeldt.github.io/progressbar.js/#examples) のようなサードパーティのソリューションを使うのは簡単です。

## よりよいフォームへの道: 役に立つライブラリとポリフィル

すでにいくつか見てきたように、"劣悪な"コントロールを完全にコントロールしたい場合は、JavaScript に頼るしかありません。[カスタムフォームウィジェットをビルドする方法](/ja/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)の記事では、独自のフォームウィジェットを作成する方法を見ていきますが、そこには役に立つ便利なライブラリがいくつかあります。

- [Uni-form](http://sprawsm.com/uni-form/) はフォームマークアップを標準化し、CSS でスタイリングするフレームワークです。jQuery で使用すると、いくつかの追加機能も提供されますが、これはオプションです
- [Formalize](http://formalize.me/) は、フォームの正規化とカスタマイズを支援する共通の JavaScript フレームワーク (jQuery、Dojo、YUI など) の拡張です
- [Niceforms](http://www.emblematiq.com/lab/niceforms/) はスタンドアロンの JavaScript メソッドで、ウェブフォームを完全にカスタマイズできます。あなたは、組み込みのテーマのいくつかを使用することも、独自のテーマを作成することもできます

次のライブラリはフォームだけではありませんが、HTML フォームを処理するための非常に興味深い機能を備えています：

- [jQuery UI](http://jqueryui.com/) には日付ピッカーなどのカスタマイズ可能なウィジェットが用意されています (アクセシビリティに特に注意してください)
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/base-css.html#forms) はフォームを正規化するのに役立ちます
- [WebShim](https://afarkas.github.io/webshim/demos/) は、ブラウザーの HTML5 サポートに対処するのに役立つ巨大なツールです。ウェブフォームの部分は本当に役に立ちます

CSS と JavaScript には副作用があることに注意してください。したがって、それらのライブラリのいずれかを使用することを選択した場合は、スクリプトが失敗した場合に備えて、堅牢なフォールバック HTML を用意する必要があります。スクリプトが失敗する理由はたくさんあります。特にモバイル環境では、これらのケースを可能な限り最善に処理するようにウェブサイトやアプリケーションを設計する必要があります。

## スキルをテストしましょう!

この記事の最後に到達しましたが、重要な情報を覚えていますか？次に進む前に、この情報を保持しているか検証するテストがあります — [Test your skills: Advanced styling](/ja/docs/Learn/Forms/Test_your_skills:_Advanced_styling) を見てください。心に留めておくこととして、この評価シリーズでの質問は、[次の記事](/ja/docs/Learn/Forms/UI_pseudo-classes)の知識も前提していてるので、試す前にその記事に取り組むとよいかもしれません。

## まとめ

HTML フォームで CSS を使用するのはまだ困難ですが、しばしばそれらを回避する方法があります。クリーンでユニバーサルな解決方法はありませんが、最新のブラウザーでは新しい可能性があります。今のところ、最良の解決策は、HTML フォームウィジェットに適用されたときに異なるブラウザーが CSS をサポートする方法の詳細を学ぶことです。

このガイドの次の記事では、モダンブラウザーでさまざまな状態のフォームをスタイル設定できるさまざまな [UI 疑似クラス](/ja/docs/Learn/Forms/UI_pseudo-classes)を見ていきます。

{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

## このモジュール

- [初めての HTML フォーム](/ja/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [HTML フォームの構築方法](/ja/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [ネイティブフォームウィジェット](/ja/docs/Learn/HTML/Forms/The_native_form_widgets)
- [フォームデータの送信](/ja/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
- [フォームデータの検証](/ja/docs/Learn/HTML/Forms/Data_form_validation)
- [カスタムフォームウィジェットの作成方法](/ja/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [JavaScript によるフォームの送信](/ja/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [古いブラウザーでの HTML フォーム](/ja/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [HTML フォームへのスタイル設定](/ja/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [HTML フォームへの高度なスタイル設定](/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [フォームウィジェット向けプロパティ実装状況一覧](/ja/docs/Property_compatibility_table_for_form_widgets)

### Advanced Topics

- [How to build custom form controls](/ja/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/ja/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Property compatibility table for form widgets](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_widgets)
