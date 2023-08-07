---
title: フォームへの高度なスタイル設定
slug: Learn/Forms/Advanced_form_styling
l10n:
  sourceCommit: 05324ee8658ea78ab284a736511581effbaf784b
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}

この記事では、スタイル設定がより難しい、「不良」「劣悪」に分類される種類のフォームコントロールにスタイル設定するために、 CSS で何ができるかを見ていきます。[前の記事](/ja/docs/Learn/Forms/Styling_web_forms)で見たように、テキストフィールドやボタンでの CSS 使用はまったく問題がありません。ここからは、ウェブフォームへのスタイル設定の闇の部分を見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシーと、
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML</a> および
        <a href="/ja/docs/Learn/CSS/First_steps">CSS</a> に対する基本的な理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        フォームのどの部分をスタイル設定するのが難しいのか、またなぜなのかを理解する。そこをカスタマイズするのに何ができるかを学ぶ。
      </td>
    </tr>
  </tbody>
</table>

始める前に、2 種類の HTML フォームウィジェットについておさらいしましょう。

**不良**: スタイルの設定が難しく複雑なトリックが必要であり、時に CSS の高度な知識が必要である要素です。

- チェックボックスやラジオボタン
- [`<input type="search">`](/ja/docs/Web/HTML/Element/input/search)

**劣悪**: 一部の要素は CSS でスタイル設定できません。含まれているのは以下のものです。

- ドロップダウンウィジェットを作成する要素、 {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("datalist")}} を含む
- [`<input type="color">`](/ja/docs/Web/HTML/Element/input/color)
- [`<input type="datetime-local">`](/ja/docs/Web/HTML/Element/input/datetime-local)のような日付関連コントロール
- [`<input type="range">`](/ja/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/ja/docs/Web/HTML/Element/input/file)
- {{HTMLElement("progress")}} および {{HTMLElement("meter")}}

最初に [`appearance`](/ja/docs/Web/CSS/appearance) プロパティについて説明します。これは上記のすべてをよりスタイル付けできるようにするためにかなり有用なプロパティです。

## 見た目: OS レベルのスタイル制御

前の記事では歴史的に、ウェブフォームのスタイル設定は OS で行われており、それがこのコントロールの見た目のカスタマイズの問題の一部となっていました。

{{cssxref("appearance")}} プロパティは OS やシステムレベルでウェブフォームのスタイル設定を制御する方法として作成されました。最も有用な値は、おそらく唯一使用することになるであろう `none` です。これは適用したコントロールがシステムレベルのスタイルを使用することを可能な限り止め、 CSS を使用して自分でスタイルを構築できるようにします。

例えば、次のコントロールを見てみましょう。

```html
<form>
  <p>
    <label for="search">search: </label>
    <input id="search" name="search" type="search" />
  </p>
  <p>
    <label for="text">text: </label>
    <input id="text" name="text" type="text" />
  </p>
  <p>
    <label for="date">date: </label>
    <input id="date" name="date" type="datetime-local" />
  </p>
  <p>
    <label for="radio">radio: </label>
    <input id="radio" name="radio" type="radio" />
  </p>
  <p>
    <label for="checkbox">checkbox: </label>
    <input id="checkbox" name="checkbox" type="checkbox" />
  </p>
  <p><input type="submit" value="submit" /></p>
  <p><input type="button" value="button" /></p>
</form>
```

次の CSS を適用してシステムレベルのスタイル設定を削除します。

```css
input {
  appearance: none;
}
```

下記の例ではお使いのシステムでどのように見えるかを示します。既定では左で、上記の CSS が適用されると右になります（その他のシステムでテストしたい場合は[ここも探してください](https://mdn.github.io/learning-area/html/forms/styling-examples/appearance-tester.html)）。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/appearance-tester.html", '100%', 400)}}

たいていの場合、効果は枠線を除去し、 CSS でのスタイル設定を少し簡単にしますが、それは本質できありません。いくつかの場合 — 検索やラジオボタン/チェックボックスでは、もっと便利です。これを見ていきましょう。

### 検索ボックスを変更する

[`<input type="search">`](/ja/docs/Web/HTML/Element/input/search) は基本的に単なるテキスト入力ですが、なぜ `appearance: none;` が便利なのでしょうか? 答えは Safari では、検索ボックスにスタイル設定の制限があるからです。例えば `height` や `font-size` を自在に調整できません。

これは、我々の友人である `appearance: none;` を使用して修正することができます。これは既定の外見を無効化するものです。

```css
input[type="search"] {
  appearance: none;
}
```

下記の例では、2 つのスタイル設定された検索ボックスが見えます。右のものは `appearance: none;` が適用され、左はそうでありません。macOS の Safari で見ると左のものは正しいサイズでないように見えます。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/search-appearance.html", '100%', 200)}}

興味深いことに、検索フィールドで border/background をセットしてもこの問題を解決できます。下記のスタイル設定された検索ボックスは `appearance: none;` が適用されていませんが、前の例と同じ Safari の問題に悩まされていません。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-search.html", '100%', 200)}}

> **メモ:** 検索フィールドでは、Edge と Chrome で入力がフォーカスされないときに "x" の削除アイコンが消えるが、Safari では残ることに気づくこともあるでしょう。CSS で消すには、`input[type="search"]::-webkit-search-cancel-button { display: none; }`を使用できますが、フォーカス時のアイコンも取り除き、見た目が元に戻らないようです。

### チェックボックスとラジオボタン

チェックボックスやラジオボタンのスタイル設定は、初期設定のままでは厄介です。チェックボックスやラジオボタンのサイズは初期設定のままでは変更できないようになっていますし、変更しようとするとブラウザーの反応もとても異なります。

例えば、シンプルなテストケースを考えてみます。

```html
<label
  ><span><input type="checkbox" name="q5" value="true" /></span> True</label
>
<label
  ><span><input type="checkbox" name="q5" value="false" /></span> False</label
>
```

```css
span {
  display: inline-block;
  background: red;
}

input[type="checkbox"] {
  width: 100px;
  height: 100px;
}
```

ブラウザーによってチェックボックスとスパンの扱いは異なっており多くは劣悪なものです。

| ブラウザー                          | 描画結果                          |
| ----------------------------------- | --------------------------------- |
| Firefox 71 (macOS)                  | ![](firefox-mac-checkbox.png)     |
| Firefox 57 (Windows 10)             | ![](firefox-windows-checkbox.png) |
| Chrome 77 (macOS), Safari 13, Opera | ![](chrome-mac-checkbox.png)      |
| Chrome 63 (Windows 10)              | ![](chrome-windows-checkbox.png)  |
| Internet Explorer 11 (Windows 10)   | ![](ie11-checkbox.png)            |
| Edge 16 (Windows 10)                | ![](edge-checkbox.png)            |

#### ラジオボタン/チェックボックスで appearance: none を使う

これまで見てきたように、チェックボックスやラジオボタンの既定の見た目を {{cssxref('appearance')}}`:none;` で削除できます。この HTML の例を見てみましょう。

```html
<form>
  <fieldset>
    <legend>Fruit preferences</legend>

    <p>
      <label>
        <input type="checkbox" name="fruit" value="cherry" />
        I like cherry
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit" value="banana" disabled />
        I can't like banana
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit" value="strawberry" />
        I like strawberry
      </label>
    </p>
  </fieldset>
</form>
```

さて、これらを独自のチェックボックスデザインでスタイル設定しましょう。元のチェックボックスのスタイルを解除することから始めましょう。

```css
input[type="checkbox"] {
  appearance: none;
}
```

{{cssxref(":checked")}} と {{cssxref(":disabled")}} 擬似クラスを使用して、状態の変化に合わせてカスタムチェックボックスの外観を変更します。

```css
input[type="checkbox"] {
  position: relative;
  width: 1em;
  height: 1em;
  border: 1px solid gray;
  /* Adjusts the position of the checkboxes on the text baseline */
  vertical-align: -2px;
  /* Set here so that Windows' High-Contrast Mode can override */
  color: green;
}

input[type="checkbox"]::before {
  content: "✔";
  position: absolute;
  font-size: 1.2em;
  right: -1px;
  top: -0.3em;
  visibility: hidden;
}

input[type="checkbox"]:checked::before {
  /* Use `visibility` instead of `display` to avoid recalculating layout */
  visibility: visible;
}

input[type="checkbox"]:disabled {
  border-color: black;
  background: #ddd;
  color: gray;
}
```

こうした擬似クラスなどは、[次の記事](/ja/docs/Learn/Forms/UI_pseudo-classes)で見つけられますが、上記は次のことをしています。

- `:checked` — チェックボックス (やラジオボタン) がチェックされた状態にあります — ユーザーがクリック/有効化しています。
- `:disabled` — チェックボックス (やラジオボタン) が無効な状態にあります — 操作することができますせん.

実際の結果が表示されます。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/checkboxes-styled.html", '100%', 200)}}

また、より多くのアイデアを提供するために、他の例もいくつか作成しています。

- [Styled radio buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): カスタムラジオボタンスタイル設定。
- [Toggle switch example](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): トグルスイッチのようなチェックボックス。

{{cssxref("appearance")}} に対応していないブラウザーで、これらのチェックボックスを表示できます。カスタムデザインは失われますが、チェックボックスのままに見えて使用できます。

> **メモ:** Internet Explorer はどのバージョンでも `appearance` に対応していませんが、`input[type=checkbox]::-ms-check` にて IE のみチェックボックスをターゲットにできます。この手法は、`-ms-check` という名前にもかかわらず、ラジオボタンでも機能します。

## 「劣悪」要素に何ができるか

今度は「劣悪」コントロールに注目しましょう。これは完全にスタイル設定するのが本当に難しいものです。簡単にいうと、これはドロップダウンボックス、 [`color`](/ja/docs/Web/HTML/Element/input/color) や [`datetime-local`](/ja/docs/Web/HTML/Element/input/datetime-local) のような複合コントロール型、 {{HTMLElement("progress")}} や {{HTMLElement("meter")}} のようなコントロール志向のフィードバックです。

問題は、要素はブラウザー同士でいろいろな既定の見た目があって、それにスタイル設定できても、内部のいくつかはスタイル設定できないことです。

ルック＆フィールの違いを受け入れる覚悟があれば、サイズ変更を一貫したものにするためのシンプルなスタイル設定や、 background-color のような単一スタイル設定、システムレベルのスタイル設定を除去できる appearance の使用などで逃げることもできます。

例を見てみましょう。たくさんの「劣悪」なフォーム機能をつぎつぎに表示しています。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/ugly-controls.html", '100%', 750)}}

この例では下記の CSS を適用しています。

```css
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

form > div {
  margin-bottom: 20px;
}

select {
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

button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
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

> **メモ:** 多数のブラウザーで同時にこの例をテストしたい場合、[ライブ版をここで見つけてください](https://mdn.github.io/learning-area/html/forms/styling-examples/ugly-controls.html) ([ソースコードも見てください](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/ugly-controls.html))。
>
> また JavaScript をページに追加してコントロール自身の下にあるファイルピッカー自身で選択されたファイルを一覧しているのを心に留めておいてください。これは [`<input type="file">`](/ja/docs/Web/HTML/Element/input/file#例) リファレンスページの例を簡単にしたバージョンです。

見ての通り、最近のブラウザーでは統一された外見を確保することができました。

前の記事で述べたように、すべてのコントロールとそのラベルにグローバルな正規化 CSS を適用して、同じサイズになるようにし、親フォントを採用するなどの工夫をしています。

```css
button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}
```

コントロールに統一した影と角丸も与えて、意味のあるようにします。

```css
input[type="text"],
input[type="datetime-local"],
input[type="color"],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

範囲や、プログレスバーや、メーターはコントロールエリアの周りに美しくないボックスができるだけなので、意味はありません。

これらのコントロールタイプそれぞれの仕様と、ハイライトの難しさをこれからお話ししましょう。

### select とデータリスト

現代のブラウザーでは、select とデータリストは一般的に、既定のものからルック＆フィールを大きく変えたくないようにスタイル設定する場合は、悪くないものです。

これまで、ボックスの基本的な見た目をかなり均一で一貫性のあるものにしてきました。とにかくデータリストコントロールは `<input type="text">` なので、問題にならないことがわかっています。

2 つのものが多少問題をはらんでいます。まず最初に、 select がドロップダウンであることを示す "矢印" アイコンは、ブラウザーによって異なります。また select ボックスのサイズを増やしたり、変更したりすると、醜くなりがちです。これを修正するため、例では最初に旧友の `appearance: none` を使ってアイコンを除去しています。

```css
select {
  appearance: none;
}
```

次に生成されたコンテンツを使って独自のアイコンを作成します。コントロールの周りに特別なラッパーを置きました。それは[`::before`](/ja/docs/Web/CSS/::before)/[`::after`](/ja/docs/Web/CSS/::after) が `<select>` 要素では動作しないためです（これは生成されたコンテンツが要素がフォーマットするボックスに対し相対的に配置されますが、フォーム入力は置換された要素 — 表示がブラウザーによって生成されて順番に配置されるもの — として動作するので、1 つもないためです）。

```html
<label for="select">Select a fruit</label>
<div class="select-wrapper">
  <select id="select" name="select">
    <option>Banana</option>
    <option>Cherry</option>
    <option>Lemon</option>
  </select>
</div>
```

次に生成されたコンテンツを使って小さな下向き矢印を作り、正しい場所に配置します。

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

2 つ目の、もう少し大きな問題は、 `<select>` ボックスをクリックして開いたときに現れる、選択肢の入ったボックスを操作することができないことです。選択肢は親に設定されたフォントを引き継がないことに気がつくでしょう。また、余白の設定や色なども一貫して設定することができません。例えば、 Firefox では [`color`](/ja/docs/Web/CSS/color) と [`background-color`](/ja/docs/Web/CSS/background-color) が [`<option>`](/ja/docs/Web/HTML/Element/option) 要素に適用できますが、 Chrome ではそうなりません。どちらも余白（例えば [`padding`](/ja/docs/Web/CSS/padding)）を適用できません。同じことはデータリスト用に出てくる自動補完リストにも当てはまります。

本当に選択肢をスタイル設定する必要がある場合、カスタムコントロールを生成するライブラリーを使用するか、独自のカスタムコントロールを作成するかのどちらかが必要で、あるいは `multiple` 属性を使う select の場合、これはページ上に出てくるすべての選択肢を作成し、この特殊な問題を避けることができます。

```html
<label for="select">Select fruits</label>
<select id="select" name="select" multiple>
  …
</select>
```

もちろんこれでも進めているデザインには合わない可能性もありますが、注目に値します。

### 日付入力型

日付/時間の入力型 ([`datetime-local`](/ja/docs/Web/HTML/Element/input/datetime-local), [`time`](/ja/docs/Web/HTML/Element/input/time), [`week`](/ja/docs/Web/HTML/Element/input/week), [`month`](/ja/docs/Web/HTML/Element/input/month)) にはすべて同じ重大な関連した問題があります。実際のボックスは、テキスト入力と同様に簡単にスタイルを設定することができ、このデモではうまく表示されています。

しかし、コントロールの内部部品（日付をピックアップするのに使うポップアップカレンダー、値を増減するスピナーなど）はまったくスタイル設定できず、 `appearance: none;` を使ってもスタイルを除去できません。スタイル設定を完全に制御する必要がある場合は、カスタムコントロールを生成するライブラリーを使うか、自分で作らなければなりません。

> **メモ:** ここでも[`<input type="number">`](/ja/docs/Web/HTML/Element/input/number) は触れる価値があります、これもまた、値を増加/減少させるために使用することができるスピナーがあるので、同じ問題に悩まされる可能性があります。しかし、 `number` 型の場合、収集するデータはより単純で、代わりに `tel` 入力型を使用するのも簡単です。これは `text` のような外観ですが、タッチキーボードを搭載した機器ではテンキーを表示することができます。

### Range 入力型

[`<input type="range">`](/ja/docs/Web/HTML/Element/input/range) はスタイル設定が困難です。以下のように使用することで、既定値のスライダートラックを完全に削除し、カスタムスタイル（この例では、細い赤のトラック）に置き換えることができます。

```css
input[type="range"] {
  appearance: none;
  background: red;
  height: 2px;
  padding: 0;
  outline: 1px solid transparent;
}
```

しかし、 range コントロールのドラッグハンドルのスタイルをカスタマイズすることはとても困難です。 range のスタイルを完全に操作するためには、複数の非標準的でブラウザー特有の擬似要素を含む、複雑な CSS コードを使用する必要があります。 [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) で必要なものを細かく書くための CSS トリックを確認します。

### color 入力型

color 型の入力コントロールは悪いものではありません。対応しているブラウザーでは、小さな境界線付きの無地のブロックが表示されるだけです。

境界線を削除して、色のブロックだけにするには、次のようにします。

```css
input[type="color"] {
  border: 0;
  padding: 0;
}
```

しかし、大きく変わったものを得るには、カスタムソリューションが唯一の方法です。

### ファイル入力型

ファイル入力型は通常は OK です。例で見てきたように、ページの残りの部分に問題なくフィットする何かを作るのはとても簡単です。コントロールの一部分でもある出力行は、入力にそう指示している場合は親のフォントを継承して、カスタムリストに名前やサイズをお好みでスタイル設定できます。結局は作ってみました。

ファイルピッカーの唯一の問題は、ファイルピッカーを開くために押すボタンが、サイズや色を変更できず、異なるフォントも受け入れられず、完全にスタイル設定が不可能であることです。

これを回避する一つの方法は、フォームコントロールに関連付けられたラベルがある場合、そのラベルをクリックするとコントロールが有効になることを利用することです。そこで、次のような方法で実際のフォーム入力を非表示にすることができます。

```css
input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}
```

次にボタンのように動作するラベルをスタイル設定し、そのラベルが押された時にファイルピッカーが期待通り開くようにします。

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

上記の CSS スタイル設定の結果は、下記のライブ実行の例で見ることができます（[styled-file-picker.html](https://mdn.github.io/learning-area/html/forms/styling-examples/styled-file-picker.html) のライブと、[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/styling-examples/styled-file-picker.html)も見てください）。

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/styled-file-picker.html", '100%', 200)}}

### meter とプログレスバー

[`<meter>`](/ja/docs/Web/HTML/Element/meter) と [`<progress>`](/ja/docs/Web/HTML/Element/progress) は多くの中で最悪かもしれません。先ほどの例で見たように、幅は比較的希望通りに設定することができます。しかし、それ以上に、どのような方法でもスタイルを設定することは本当に困難です。また、背景には色をつけることができますが、前面のバーには色をつけることができませんし、 `appearance: none` を設定すると、良くなるどころか悪化してしまいます。

スタイル設定を制御したい場合は、この機能のカスタムソリューションを作ったり、[progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#例) のようなサードパーティのソリューションを使ったりした方が簡単です。

## スキルをテストしましょう!

この記事の最後に到達しましたが、重要な情報を覚えていますか？次に進む前に、この情報を保持しているか検証するテストがあります — [Test your skills: Advanced styling](/ja/docs/Learn/Forms/Test_your_skills:_Advanced_styling) を見てください。心に留めておくこととして、この評価シリーズでの質問は、[次の記事](/ja/docs/Learn/Forms/UI_pseudo-classes)の知識も前提していてるので、試す前にその記事に取り組むとよいかもしれません。

## まとめ

HTML フォームで CSS を使用するのはまだ困難ですが、しばしばそれらを回避する方法があります。クリーンでユニバーサルな解決方法はありませんが、最新のブラウザーでは新しい可能性があります。今のところ、最良の解決策は、HTML フォームウィジェットに適用されたときに異なるブラウザーが CSS をサポートする方法の詳細を学ぶことです。

このガイドの次の記事では、現代のブラウザーでさまざまな状態のフォームをスタイル設定できるさまざまな [UI 擬似クラス](/ja/docs/Learn/Forms/UI_pseudo-classes)を見ていきます。

{{PreviousMenuNext("Learn/Forms/Styling_web_forms", "Learn/Forms/UI_pseudo-classes", "Learn/Forms")}}
