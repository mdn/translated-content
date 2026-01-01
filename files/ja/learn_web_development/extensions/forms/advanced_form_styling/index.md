---
title: フォームへの高度なスタイル設定
slug: Learn_web_development/Extensions/Forms/Advanced_form_styling
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}

この記事では、スタイル設定がより難しい、「不良」「劣悪」に分類される種類のフォームコントロールにスタイル設定するために、CSS で何ができるかを見ていきます。[前の記事](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)で見たように、テキストフィールドやボタンでの CSS 使用はまったく問題がありません。ここからは、より問題のある部分のスタイル設定を掘り下げます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> および
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a> に対する基本的な理解。
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
- [`<input type="search">`](/ja/docs/Web/HTML/Reference/Elements/input/search)

**劣悪**: 一部の要素は CSS でスタイル設定できません。例えば以下のものです。

- ドロップダウンウィジェットを作成する要素、{{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("datalist")}} を含む
  > [!NOTE]
  > 一部のブラウザーでは、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)に対応するようになりました。これは HTML と CSS の機能群であり、`<select>` 要素とその内容を通常の DOM 要素と同様に完全にカスタマイズすることを可能にします。
- [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color)
- [`<input type="datetime-local">`](/ja/docs/Web/HTML/Reference/Elements/input/datetime-local) のような日付関連コントロール
- [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file)
- {{HTMLElement("progress")}} および {{HTMLElement("meter")}}

最初に {{cssxref("appearance")}} プロパティについて説明します。これは上記のすべてをよりスタイル付けできるようにするためにかなり有用なプロパティです。

## appearance: OS レベルのスタイル制御

前の記事で述べたように、過去にはウェブフォームコントロールのスタイルは主に基盤となるオペレーティングシステムから派生したものであり、これがこれらのコントロールの外観を独自のものにすることが難しい理由の一部となっています。

{{cssxref("appearance")}} プロパティは OS やシステムレベルでウェブフォームのスタイル設定を制御する方法として作成されました。最も有用な値は、おそらく唯一使用することになるであろう `none` です。これは適用したコントロールがシステムレベルのスタイルを使用することを可能な限り止め、 CSS を使用して自分でスタイルを構築できるようにします。

例えば、次のコントロールを見てみましょう。

```html
<form>
  <p>
    <label for="search">検索: </label>
    <input id="search" name="search" type="search" />
  </p>
  <p>
    <label for="text">テキスト: </label>
    <input id="text" name="text" type="text" />
  </p>
  <p>
    <label for="date">日時: </label>
    <input id="date" name="date" type="datetime-local" />
  </p>
  <p>
    <label for="radio">ラジオボタン: </label>
    <input id="radio" name="radio" type="radio" />
  </p>
  <p>
    <label for="checkbox">チェックボックス: </label>
    <input id="checkbox" name="checkbox" type="checkbox" />
  </p>
  <p><input type="submit" value="送信" /></p>
  <p><input type="button" value="ボタン" /></p>
</form>
```

次の CSS を適用してシステムレベルのスタイル設定を削除します。

```css
input {
  appearance: none;
}
```

下記の例ではお使いのシステムでどのように見えるかを示します。既定では左で、上記の CSS が適用されると右のようになります。

```html hidden live-sample___appearance-tester
<div>
  <form>
    <div>
      <label for="search1">検索: </label>
      <input id="search1" name="search1" type="search" />
    </div>
    <div>
      <label for="text1">テキスト: </label>
      <input id="text1" name="text1" type="text" />
    </div>
    <div>
      <label for="date1">日時: </label>
      <input id="date1" name="date1" type="datetime-local" />
    </div>
    <div>
      <label for="radio1">ラジオボタン: </label>
      <input id="radio1" name="radio1" type="radio" />
    </div>
    <div>
      <label for="checkbox1">チェックボックス: </label>
      <input id="checkbox1" name="checkbox1" type="checkbox" />
    </div>
    <div><input type="submit" value="送信" /></div>
    <div><input type="button" value="ボタン" /></div>
  </form>
</div>
<div class="appearance">
  <form>
    <div>
      <label for="search2">検索: </label>
      <input id="search2" name="search2" type="search" />
    </div>
    <div>
      <label for="text2">テキスト: </label>
      <input id="text2" name="text2" type="text" />
    </div>
    <div>
      <label for="date2">日時: </label>
      <input id="date2" name="date2" type="datetime-local" />
    </div>
    <div>
      <label for="radio2">ラジオボタン: </label>
      <input id="radio2" name="radio2" type="radio" />
    </div>
    <div>
      <label for="checkbox2">チェックボックス: </label>
      <input id="checkbox2" name="checkbox2" type="checkbox" />
    </div>
    <div><input type="submit" value="送信" /></div>
    <div><input type="button" value="ボタン" /></div>
  </form>
</div>
```

```css hidden live-sample___appearance-tester
body {
  margin: 20px auto;
  max-width: 800px;
  justify-content: space-around;
}

body,
form > div {
  display: flex;
}

form > div {
  margin-bottom: 20px;
}

.appearance input {
  appearance: none;
}
```

{{EmbedLiveSample("appearance-tester", '100%', 350)}}

たいていの場合、効果は枠線を除去し、 CSS でのスタイル設定を少し簡単にしますが、それは本質的ではありません。いくつかの場合、検索やラジオボタン/チェックボックスでは、もっと便利です。これを見ていきましょう。

### 検索ボックスと `appearance`

`appearance: none;` の値は、[`<input type="search">`](/en-US/docs/Web/HTML/Reference/Elements/input/search) 要素を一貫してスタイル設定するのに特に便利でした。これがないと、Safari ではこれらの要素に {{cssxref("height")}} や {{cssxref("font-size")}} の値を設定することはできませんでした。ただし、この制限はSafari 16 以降ではなくなりました。ただし、ブラウザーの対応範囲に Safari 16 より古いバージョンが含まれている場合、`input[type="search"]` 要素を明示的にターゲットとして、`appearance: none;` を適用することを検討してください。

検索入力欄において、値が null でない場合に現れる "x" 削除ボタンは、Edge と Chrome では入力欄がフォーカスを失うと消えますが、Safari では表示されたままになります。 次のルールを使用することで、CSS により除去することができます。

```css
input[type="search"]:not(:focus, :active)::-webkit-search-cancel-button {
  display: none;
}
```

### `appearance` を使用したチェックボックスとラジオボタンのスタイル設定

チェックボックスやラジオボタンのスタイル設定は、初期状態のままでは厄介です。チェックボックスやラジオボタンのサイズは初期状態のままでは変更できないようになっていますし、変更しようとするとブラウザーの反応も大きく異なります。コントロールのサイズが大きくななるものもあれば、コントロールのサイズをそのままに周囲に空間を追加するものもあります。

{{cssxref("appearance", "appearance: none;")}} でチェックボックスとラジオボタンのデフォルトの外観が完全に除去されるように設定し、その後、それぞれの様々な状態に自分自身でスタイルを追加するのがはるかに良い方法です。

この HTML の例を見てみましょう。

```html live-sample___checkboxes-styled
<form>
  <fieldset>
    <legend>果物の好み</legend>

    <p>
      <label>
        <input type="checkbox" name="fruit" value="cherry" />
        サクランボが好き
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit" value="banana" disabled />
        バナナは好きになれない
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" name="fruit" value="strawberry" />
        イチゴが好き
      </label>
    </p>
  </fieldset>
</form>
```

これらを独自のチェックボックスデザインでスタイル設定しましょう。元のチェックボックスのスタイルを削除することから始めましょう。

```css live-sample___checkboxes-styled
input[type="checkbox"] {
  appearance: none;
}
```

{{cssxref(":checked")}} と {{cssxref(":disabled")}} 擬似クラスを使用して、状態の変化に合わせてカスタムチェックボックスの外観を変更します。

```css live-sample___checkboxes-styled
input[type="checkbox"] {
  position: relative;
  width: 1em;
  height: 1em;
  border: 1px solid gray;
  /* チェックボックスの位置をテキストのベースラインに合わせて調整 */
  vertical-align: -2px;
  /* Windows のハイコントラストモードが優先されるように設定する */
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
  /* `visibility` を `display` の代わりに使用すると、レイアウトの再計算を避けることができる */
  visibility: visible;
}

input[type="checkbox"]:disabled {
  border-color: black;
  background: #dddddd;
  color: gray;
}
```

こうした擬似クラスなどについての情報は、[次の記事](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)で見ることができます。上記のものは次のようなことをしています。

- `:checked` — チェックボックス (やラジオボタン) がチェックされた状態にあります — ユーザーがクリック/有効化しています。
- `:disabled` — チェックボックス (やラジオボタン) が無効な状態にあります — 操作することができません。

実際の結果が表示されます。

{{EmbedLiveSample("checkboxes-styled", '100%', 200)}}

また、より多くのアイデアを提供するために、他の例もいくつか作成しています。

- [Styled radio buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html): カスタムラジオボタンスタイル設定。
- [Toggle switch example](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/): トグルスイッチのようなチェックボックス。

## 「劣悪」要素に何ができるか

今度は「劣悪」なコントロールに注目しましょう。これは完全にスタイル設定するのが本当に難しいものです。簡単にいうと、これはドロップダウンボックス、 [`color`](/ja/docs/Web/HTML/Reference/Elements/input/color) や [`datetime-local`](/ja/docs/Web/HTML/Reference/Elements/input/datetime-local) のような複合コントロール型、{{HTMLElement("progress")}} や {{HTMLElement("meter")}} のようなコントロール志向のフィードバックです。

問題は、要素はブラウザー同士でいろいろな既定の見た目があって、それにスタイル設定できても、内部のいくつかはスタイル設定できないことです。

見た目や操作感に多少の違いがあることを許容できる場合、単純なスタイル設定で大幅に改善することができます。 例えば、`background-color` などのプロパティのサイズやスタイルを統一したり、`appearance` を使用してシステムレベルのスタイルが一部除去されるようにしたりすることです。

例を見てみましょう。たくさんの「劣悪」なフォーム機能をつぎつぎに表示しています。

```html hidden live-sample___ugly-styling
<form>
  <div>
    <label for="select">選択ボックス:</label>
    <div class="select-wrapper">
      <select id="select" name="select">
        <option>バナナ</option>
        <option>サクランボ</option>
        <option>レモン</option>
      </select>
    </div>
  </div>
  <div>
    <label for="myFruit">「好きな果物」データリスト:</label>
    <input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
    <datalist id="mySuggestion">
      <option>リンゴ</option>
      <option>バナナ</option>
      <option>ブラックベリー</option>
      <option>ブルーベリー</option>
      <option>レモン</option>
      <option>ライチ</option>
      <option>モモ</option>
      <option>ナシ</option>
    </datalist>
  </div>
  <div>
    <label for="date1">ローカル日時: </label>
    <input id="date1" name="date1" type="datetime-local" />
  </div>
  <div>
    <label for="range">範囲: </label>
    <input id="range" name="range" type="range" />
  </div>
  <div>
    <label for="color">色: </label>
    <input id="color" name="color" type="color" />
  </div>
  <div>
    <label for="file">ファイルピッカー: </label>
    <input id="file" name="file" type="file" multiple />
    <ul id="file-list"></ul>
  </div>
  <div>
    <label for="progress">進捗: </label>
    <progress max="100" value="75" id="progress">75/100</progress>
  </div>
  <div>
    <label for="meter">メーター: </label>
    <meter
      id="meter"
      min="0"
      max="100"
      value="75"
      low="33"
      high="66"
      optimum="50">
      75
    </meter>
  </div>
  <div><button>送信?</button></div>
</form>
```

{{EmbedLiveSample("ugly-styling", '100%', 750)}}

**Play** ボタンを押すと、MDN Playground でこの例を実行し、ソースを編集することができます。

この例では下記の CSS を適用しています。

```css live-sample___ugly-styling
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
  width: 100%;
  height: 100%;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 3px;
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
  box-shadow: inset 1px 1px 3px #cccccc;
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

ファイルピッカーで選択されたファイルを一覧表示するページに、コントロールの下部に JavaScript を追加しました。これは [`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file#examples) リファレンスページにある例の簡略版です。

```js live-sample___ugly-styling
const fileInput = document.querySelector("#file");
const fileList = document.querySelector("#file-list");

fileInput.addEventListener("change", updateFileList);

function updateFileList() {
  while (fileList.firstChild) {
    fileList.removeChild(fileList.firstChild);
  }

  const curFiles = fileInput.files;

  if (!(curFiles.length === 0)) {
    for (const file of curFiles) {
      const listItem = document.createElement("li");
      listItem.textContent = `ファイル名: ${file.name}; ファイルサイズ: ${returnFileSize(file.size)}.`;
      fileList.appendChild(listItem);
    }
  }
}

function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  }
  return `${(number / 1e6).toFixed(1)} MB`;
}
```

### 「グローバルな」スタイル

前の例では、「劣悪」なコントロールを現行のブラウザー間で統一された見た目にするという点で、かなりうまくいきました。

前の記事で触れたように、すべてのコントロールとそのラベルにグローバルな正規化 CSS を適用し、同じ方法でサイズ調整したり、親要素のフォントを採用したりしました。

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
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

範囲、進捗バー、メーターについては、コントロール領域の周りに美しくないボックスができるだけなので、意味はありません。

これらの種類のコントロールとそれぞれの具体的な点について、その過程で生じる困難を強調しながら説明しましょう。

### select とデータリスト

一部のブラウザーでは、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)に対応するようになりました。これは HTML と CSS の機能群であり、`<select>` 要素とそのコンテンツを通常の DOM 要素と同様に完全にカスタマイズすることができます。対応ブラウザーやコードベースでは、下記で説明している `<select>` 要素向けの古い手法を気にする必要はもうありません。

（カスタマイズ可能な select に対応してしていないブラウザーにおいて）データリストと select のスタイル設定は、デフォルトの見た目から大きく外れなければ、容認できるレベルのカスタマイズをすることができます。ボックスの基本的な見た目をかなり均一で一貫性のあるものにしてきました。データリストコントロールはどのみち `<input type="text">` なので、問題にならないことがわかっています。

2 つのものが多少問題をはらんでいます。まず最初に、 select がドロップダウンであることを示す「矢印」アイコンは、ブラウザーによって異なります。また select ボックスのサイズを大きくしたり、変更したりすると、醜くなりがちです。これを修正するため、例では最初に旧友の `appearance: none` を使ってアイコンを除去しています。

```css
select {
  appearance: none;
}
```

次に生成されたコンテンツを使って独自のアイコンを作成します。コントロールの周りに特別なラッパーを置きました。それは {{cssxref("::before")}}/{{cssxref("::after")}} が `<select>` 要素では動作しないためです（これはコンテンツが完全にブラウザーによって制御されているからです）。

```html
<label for="select">Select a fruit</label>
<div class="select-wrapper">
  <select id="select" name="select">
    <option>バナナ</option>
    <option>サクランボ</option>
    <option>レモン</option>
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

2 つ目の、もう少し重要な問題は、 `<select>` ボックスをクリックして開いたときに現れる、選択肢の入ったボックスを操作することができないことです。親要素に設定されているフォントを継承することはできますが、間隔や色などを設定することはできません。 {{HTMLElement("datalist")}} で現れる自動補完リストも同様です。

本当に選択肢をスタイル設定する必要がある場合、カスタムコントロールを生成するライブラリーを使用するか、独自のカスタムコントロールを作成するかのどちらかが必要です。 `<select>` の場合、`multiple` 属性を使うことで、これはページ上に出てくるすべての選択肢を作成し、この特殊な問題を避けることができます。

```html
<label for="select">果物を選択</label>
<select id="select" name="select" multiple>
  …
</select>
```

もちろんこれでも進めているデザインには合わない可能性もありますが、注目に値します。

### 日付入力型

日付/時間の入力型 ([`datetime-local`](/ja/docs/Web/HTML/Reference/Elements/input/datetime-local), [`time`](/ja/docs/Web/HTML/Reference/Elements/input/time), [`week`](/ja/docs/Web/HTML/Reference/Elements/input/week), [`month`](/ja/docs/Web/HTML/Reference/Elements/input/month)) にはすべて同じ重大な関連した問題があります。実際のボックスは、テキスト入力と同様に簡単にスタイルを設定することができ、このデモではうまく表示されています。

しかし、コントロールの内部部品（日付をピックアップするのに使うポップアップカレンダー、値を増減するスピナーなど）はまったくスタイル設定できず、`appearance: none;` を使ってもスタイルを除去できません。スタイル設定を完全に制御する必要がある場合は、カスタムコントロールを生成するライブラリーを使うか、自分で作らなければなりません。

> [!NOTE]
> ここでも[`<input type="number">`](/ja/docs/Web/HTML/Reference/Elements/input/number) は触れる価値があります、これもまた、値を増加/減少させるために使用することができるスピナーがあるので、同じ問題に悩まされる可能性があります。しかし、 `number` 型の場合、収集するデータはより単純で、代わりに `tel` 入力型を使用するのも簡単です。これは `text` のような外観ですが、タッチキーボードを搭載した機器ではテンキーを表示することができます。

### 範囲入力型

[`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) はスタイル設定が困難です。以下のように使用することで、既定値のスライダートラックを完全に削除し、カスタムスタイル（この例では、細い赤のトラック）に置き換えることができます。

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

color 型の入力コントロールは悪いものではありません。対応しているブラウザーでは、小さな境界線付きの無地のブロックが表示されます。

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
  box-shadow: 1px 1px 3px #cccccc;
  background: linear-gradient(to bottom, #eeeeee, #cccccc);
  border: 1px solid darkgrey;
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, white, #dddddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #cccccc;
}
```

上記の CSS スタイルの設定の結果は、下記ライブサンプルで確認可能です。

```html hidden live-sample___styled-file-picker
<form>
  <div>
    <label for="file">アップロードするファイルを選択</label>
    <input id="file" name="file" type="file" multiple />
    <ul id="file-list"></ul>
  </div>
  <div><button>送信?</button></div>
</form>
```

```css hidden live-sample___styled-file-picker
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

form > div {
  margin-bottom: 20px;
}

button,
label,
input {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type="file"] {
  height: 0;
  padding: 0;
  opacity: 0;
}

label[for="file"] {
  box-shadow: 1px 1px 3px #cccccc;
  background: linear-gradient(to bottom, #eeeeee, #cccccc);
  border: 1px solid darkgrey;
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
}

label[for="file"]:hover {
  background: linear-gradient(to bottom, white, #dddddd);
}

label[for="file"]:active {
  box-shadow: inset 1px 1px 3px #cccccc;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___styled-file-picker
const fileInput = document.querySelector("#file");
const fileList = document.querySelector("#file-list");

fileInput.addEventListener("change", updateFileList);

function updateFileList() {
  while (fileList.firstChild) {
    fileList.removeChild(fileList.firstChild);
  }

  let curFiles = fileInput.files;

  if (!(curFiles.length === 0)) {
    for (const file of curFiles) {
      const listItem = document.createElement("li");
      listItem.textContent = `File name: ${file.name}; file size: ${returnFileSize(file.size)}.`;
      fileList.appendChild(listItem);
    }
  }
}

function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  }
  return `${(number / 1e6).toFixed(1)} MB`;
}
```

{{EmbedLiveSample("styled-file-picker", '100%', 200)}}

**Play** ボタンを押すと、MDN Playground でこの例を実行し、ソースを編集することができます。

### meter と進捗バー

[`<meter>`](/ja/docs/Web/HTML/Reference/Elements/meter) と [`<progress>`](/ja/docs/Web/HTML/Reference/Elements/progress) は多くの中で最悪かもしれません。先ほどの例で見たように、幅は比較的希望通りに設定することができます。しかし、それ以上に、どのような方法でもスタイルを設定することは本当に困難です。また、背景には色をつけることができますが、前面のバーには色をつけることができませんし、 `appearance: none` を設定すると、良くなるどころか悪化してしまいます。

スタイル設定を制御したい場合は、この機能のカスタムソリューションを作ったり、[progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/#例) のようなサードパーティのソリューションを使ったりした方が簡単です。

## まとめ

HTML フォームで CSS を使用するのはまだ困難ですが、しばしばそれらを回避する方法があります。クリーンでユニバーサルな解決方法はありませんが、最新のブラウザーでは新しい可能性があります。今のところ、最良の解決策は、HTML フォームウィジェットに適用されたときに異なるブラウザーが CSS をサポートする方法の詳細を学ぶことです。

このモジュールの次の記事では、最新のHTMLとCSSの専用機能を活用して、[完全に独自の `<select>` 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)を生成する方法について探求します。

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Styling_web_forms", "Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms")}}
