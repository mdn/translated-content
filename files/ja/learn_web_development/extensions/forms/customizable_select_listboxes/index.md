---
title: カスタマイズ可能な選択リストボックス
short-title: カスタマイズ可能なリストボックス
slug: Learn_web_development/Extensions/Forms/Customizable_select_listboxes
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

この記事は前の記事に続き、{{htmlelement("select")}} 要素のカスタマイズ可能なリストボックスのスタイル設定方法を見ていきます。

カスタマイズ可能な `<select>` リストボックスが「従来の」選択リストボックスに比べて持つ大きな利点の一つは、コントロールのすべての部分を自由にスタイル設定できること、そしてその内部にはるかに多様な子要素を置くことのできる点であり、これによりデザインや機能面での柔軟性が大幅に向上します。

## 選択リストボックスとドロップダウンの選択

前回の記事では、「ドロップダウン」の `<select>` 要素について解説しました。これは、ボタンを押すとドロップダウンピッカーが表示され、そこからオプションを選択できるコントロールです。これらは `<select>` といった基本的な HTML を使用して指定します。

一方、「リストボックス」の `<select>` 要素は、複数の選択肢を一度に表示させるボックスを備えたコントロールであり、そこから1つまたは複数の選択肢を選択することができます。「リストボックス」 形式の select 要素を表示させるには、`multiple` 属性（複数選択をすることができるため）を指定するか、`size` の値を `1` より大きく設定します。例えば、`<select multiple>` や `<select size="3">` などのようにします。

次のライブサンプルは、その違いを示しています。

```html hidden live-sample___select-comparison
<form>
  <p>
    <label for="pet-select">ペットのドロップダウン選択:</label><br />
    <select id="pet-select">
      <option value="cat">猫</option>
      <option value="dog">犬</option>
      <option value="chicken">ニワトリ</option>
      <option value="fish">魚</option>
      <option value="Hamster">ハムスター</option>
    </select>
  </p>
  <p>
    <label for="pet-select2">ペットのリストボックス選択:</label><br />
    <select id="pet-select2" multiple>
      <option value="cat">猫</option>
      <option value="dog">犬</option>
      <option value="chicken">ニワトリ</option>
      <option value="fish">魚</option>
      <option value="hamster">ハムスター</option>
    </select>
  </p>
</form>
```

```css hidden live-sample___select-comparison
select,
::picker(select) {
  appearance: base-select;
}

form {
  display: flex;
  gap: 100px;
  justify-content: center;
}
```

{{EmbedLiveSample("select-comparison", "100%", "200px")}}

> [!NOTE]
> `multiple` 属性、または `1` より大きい `サイズ` の値を設定すると、`<select>` 要素はリストボックスモードになります。

### カスタマイズ可能なリストボックスとカスタマイズ可能なドロップダウンの違い

カスタマイズ可能なリストボックス `<select>` は、ドロップダウン形式のものよりもスタイル設定が簡単です。

- ドロップダウンピッカーが存在しないため、{{cssxref("::picker()", "::picker(select)")}} 擬似要素や、その開かれた状態 ({{cssxref(":open")}}) および閉じられた状態のスタイル設定について気にする必要はありません。
- {{cssxref("::picker-icon")}} を使って選択ボタンのアイコンのスタイルを設定したり、{{htmlelement("selectedcontent")}} 要素を使ってボタン内で現在選択されている `<option>` を表示させる方法を変更したりする必要はありません。
- 関係するコンテナーは一つしかありません。ボタンに対するピッカーの位置については、気にする必要はありません。

## カスタマイズされた基本的なリストボックス

カスタマイズされたリストボックスの実装方法を示して、基本的な例を追ってみましょう。この例のマークアップは次のようになります。

```html live-sample___basic-listbox live-sample___expanding-listbox
<p>
  <label for="pet-select">ペットを選択してください:</label><br />
  <select id="pet-select" multiple>
    <option value="cat">猫</option>
    <option value="dog">犬</option>
    <option value="chicken">ニワトリ</option>
    <option value="fish">魚</option>
    <option value="hamster">ハムスター</option>
  </select>
</p>
```

ここには特に目新しい点はありません。リストボックスを `<select size="3">` ではなく `<select multiple>` を使用して表示している点に注意してください。唯一の違いは、単一のオプションではなく複数のオプションを選択できるという点です。スタイル設定方法はまったく同じです。

スタイル設定を始める際、`<select>` を独自のスタイル設定の対象として選択し、{{cssxref("appearance")}} の値を `base-select` に設定します。

```css hidden live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}
```

```css live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
select {
  appearance: base-select;
}
```

これで、{{htmlelement("select")}} や {{htmlelement("option")}} といった要素を、好きなようにスタイル設定することが可能になります。

基本的なスタイルは同様に次のようになります。

```css live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
select {
  border: 2px solid #dddddd;
  border-radius: 8px;
  background: #eeeeee;
  width: 200px;
  height: 130px;
}

option {
  background: #eeeeee;
  padding: 10px;
  height: 40px;
  outline: none;
}

option:nth-of-type(odd) {
  background: white;
}
```

次に、{{cssxref("order")}} の値を `1` に設定して、{{cssxref("::checkmark")}} 擬似要素のチェックマークが左側ではなく右側に現れるようにするとともに、{{cssxref("content")}} プロパティを使用して独自のチェックマークアイコンを設定します。

```css live-sample___basic-listbox live-sample___expanding-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

最後に、`bold` を設定する {{cssxref("font-weight")}} を適用し、{{cssxref(":checked")}} のオプションには `bold` を、{{cssxref(":hover")}} および {{cssxref(":focus")}} の状態には独自の {{cssxref("background")}} 色を適用しました。これにより、どのオプションにカーソルを合わせたりフォーカスを当てたりしているかが常に一目でわかるようになっています。

```css live-sample___basic-listbox live-sample___expanding-listbox
option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

この例は次のよう表示されます。

{{EmbedLiveSample("basic-listbox", "100%", "200px")}}

## リストボックススタイルのバリエーション

カスタマイズされたリストボックスは単なる標準的な HTML 要素であるため、好きなようにスタイルを設定することができます。この節では、前回の例を基にしたいくつかのバリエーションを表示させます。どちらも同じ、あるいは類似したマークアップを使用していますが、CSS を少し追加するだけで、外観や雰囲気を大きく変えることができます。

### リストボックスの拡張

この例では、リストボックスをデフォルトで単一の選択肢の {{cssxref("height")}} の高さに設定し、これにより生成される {{cssxref("overflow")}} を非表示にし、状態が変化した際に `<select>` の高さが滑らかにアニメーションするよう {{cssxref("transition")}} を追加しています。同時に、{{cssxref("interpolate-size")}} の値を `allow-keywords` に設定し、長さとキーワードの間でアニメーションが行われるようにブラウザーに指定しています。

```css live-sample___expanding-listbox
select {
  height: 44px;
  overflow: hidden;
  transition: 0.6s height;
  interpolate-size: allow-keywords;
}
```

`<select>` にポインターを当てたりフォーカスを当てたりした際に、`height` を `fit-content` に変更し、高さが最大まで展開されるようにしています。なお、カスタマイズした select 要素に Tab キーで移動した場合、`<select>` 自体ではなく、最初の `<option>` がフォーカスを受け取ります。そのため、`<option>` にフォーカスが当たっている際に `<select>` を選択するには、単に `select:focus` ではなく、`select:has(option:focus)` を使用する必要があります。

```css live-sample___expanding-listbox
select:hover,
select:has(option:focus) {
  height: fit-content;
}
```

この例は、次のよう表示されます。

{{EmbedLiveSample("expanding-listbox", "100%", "260px")}}

### 水平リストボックス

この例では、リストボックスのオプションを縦ではなく横に並べて表示しています。

HTML は前回の例と同様ですが、`<div>` という追加のラッパー要素を記載している点が異なります。これにより、`<select>` に `width` を設定し、さらにそのラッパー要素に別の `width` を設定することで、すべての `<option>` 要素を 1 行に収め、`<select>` が狭くなりすぎて要素がすべて収まらなくなった場合にスクロールできるようにしています。

```html live-sample___horizontal-listbox
<p>
  <label for="pet-select">ペットを選択してください:</label><br />
  <select id="pet-select" multiple>
    <div class="wrapper">
      <option value="cat">猫</option>
      <option value="dog">犬</option>
      <option value="chicken">ニワトリ</option>
      <option value="fish">魚</option>
      <option value="hamster">ハムスター</option>
      <option value="gerbil">アレチネズミ</option>
      <option value="guinea">モルモット</option>
    </div>
  </select>
</p>
```

CSSでは、まず親要素である {{htmlelement("p")}} の {{cssxref("width")}} と {{cssxref("margin")}} を設定し、デモがビューポート内で水平方向に中央揃えになり、幅の大部分を占めるようにします。次に、`<select>` のサイズを、親要素の幅全体を占め、高さは `<option>` 要素の高さだけになるように調整します。`.wrapper` `<div>` に {{cssxref("display")}} 値として `flex` を指定し、`<option>` 要素が横一列に配置されるようにします。その後、その `width` を設定して、常に `<option>` 要素と同じ幅になるようにします。

```css live-sample___horizontal-listbox
p {
  width: 90%;
  margin: 0 auto;
}

select {
  width: 100%;
  height: fit-content;
}

.wrapper {
  display: flex;
  width: fit-content;
}
```

次に、`<option>` 要素に余白を追加して水平方向に間隔を空け、{{cssxref("position")}} の値を `relative` に設定します。これにより、その子要素を親要素を基準として配置することが可能になります。

```css live-sample___horizontal-listbox
option {
  padding: 10px 30px;
  position: relative;
}
```

最後に、オプションのチェックマークを絶対位置指定し、独自のデザインを適用します。

```css live-sample___horizontal-listbox
option::checkmark {
  position: absolute;
  top: -2px;
  left: 2px;
  font-size: 1.5rem;
  color: red;
  text-shadow: 1px 1px 1px black;
}
```

```css hidden live-sample___horizontal-listbox
option:hover,
option:focus {
  background: plum;
}
```

2 つ目のバリエーションは、次のように表示されます。

{{EmbedLiveSample("horizontal-listbox", "100%", "100px")}}

## より完全なリストボックス

この節で、より複雑な例を追ってみましょう。この例では、組み込みのフィルターフィールドと、（架空の）連絡先編集モードにアクセスするためのリンクを提供する連絡先ピッカーのリストボックスを紹介します。

### HTML

マークアップには、見出しとラッパー要素の {{htmlelement("div")}} を含む {{htmlelement("form")}} を配置します。このラッパー要素の内側には、さらに 3 つの `<div>` 要素を配置し、それぞれにフィルターフィールドを表すテキスト {{htmlelement("input")}}、リストボックス {{htmlelement("select")}}、およびリンクを含めます。`<select>` には、JavaScript で、連絡先の選択肢を表す {{htmlelement("option")}} 要素が設定されます。

```html live-sample___complex-listbox
<form>
  <h2>連絡先を選択</h2>
  <div class="wrapper">
    <div class="filter">
      <input
        type="text"
        aria-label="Filter contacts"
        placeholder="名前で絞り込み、例: amara" />
    </div>
    <div class="options">
      <select
        multiple
        name="contact-select"
        aria-label="Select contacts"></select>
    </div>
    <div class="edit">
      <a href="#">連絡先を編集</a>
    </div>
  </div>
</form>
```

### CSS

CSS の記述は、前回と同様に、`<select>` 要素を独自のスタイル設定の対象として指定することから始まります。

```css hidden live-sample___complex-listbox
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}
```

```css live-sample___complex-listbox
select {
  appearance: base-select;
}
```

スタイル設定のほとんどはごく基本的なものですが、重要な点についてはその都度指しながら、順を追って説明していきます。まず、`.wrapper` の `<div>` にスタイルを設定し、コントロール全体の横幅を制御する固定の {{cssxref("width")}} を指定します。

```css live-sample___complex-listbox
.wrapper {
  border: 2px solid #dddddd;
  border-radius: 8px;
  background: #dddddd;
  width: 250px;
}
```

次に、フィルターの `<input>`、`.options` の `<div>` とその中に含まれている `<select>`、そしてリンクが含まれている `.edit` の `<div>` にスタイルを設定します。特に注目すべきは、`<select>` に固定の {{cssxref("height")}} を指定し、{{cssxref("overflow-y")}} の値を `scroll` に設定することで、その中に含まれる `<option>` 要素が内部でスクロールできるようにしている点です。

```css live-sample___complex-listbox
.filter input {
  display: block;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
  width: 95%;
  margin: 8px auto;
}

.options {
  padding: 0 5px;
  background: #dddddd;
}

select {
  height: 200px;
  overflow-y: scroll;
  width: 100%;
  border: 1px solid #bbbbbb;
}

.edit {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

`<option>` 要素のスタイル設定は、これまでの例と同様に、縞模様を適用し、`:hover` および `:focus` のスタイルを明示的に指定します。

```css live-sample___complex-listbox
option {
  background: #eeeeee;
  padding: 10px;
}

option:nth-of-type(odd) {
  background: white;
}

option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

次の段階は、`<input>`、`<option>`、`<a>` 要素のデフォルトのフォーカス枠を削除することです。前回、`<option>` 要素に対して代替のスタイル設定を指定しましたが、ここでは `<input>` および `<a>` 要素に対して、より控えめな代替スタイル設定を指定します。

```css live-sample___complex-listbox
input,
option,
a {
  outline: none;
}

input:hover,
input:focus {
  border: 1px solid #999999;
  background: #eeeeff;
}

.edit a {
  color: #333333;
}

a:hover,
a:focus {
  outline: 2px dotted #666666;
}
```

最後に、`::checkmark` 擬似要素を使用して、選択されたオプションのチェックマークに独自のスタイル設定を指定します。

```css live-sample___complex-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

### JavaScript

この例で最後に追加する必要があるのは、オプションの入力や絞り込み機能を実現するための JavaScript です。

実際のサイトでは、おそらくサーバーから最新の連絡先リストを取得することになるでしょうが、ここでは静的な `contacts` オブジェクトとしてデータを指定しています（簡潔にするため、連絡先のほとんどは非表示にしています）。それぞれの連絡先について、名前と、`<select>` 要素で選択されたかどうかを示す論理値を格納しています。

```js
const contacts = [
  { name: "Aisha Khan", selected: false },
  // …
];
```

```js hidden live-sample___complex-listbox
const contacts = [
  { name: "Aisha Khan", selected: false },
  { name: "Aisyah Rahman", selected: false },
  { name: "Amara Okafor", selected: false },
  { name: "Ananya Sharma", selected: false },
  { name: "Andrei Popescu", selected: false },
  { name: "Anh Nguyen", selected: false },
  { name: "Arjun Patel", selected: false },
  { name: "Arun Prasetyo", selected: false },
  { name: "Aya Nakamura", selected: false },
  { name: "Benjamin Brown", selected: false },
  { name: "Carlos Mendez", selected: false },
  { name: "Chloe Dubois", selected: false },
  { name: "Clara Fischer", selected: false },
  { name: "Daniel Kim", selected: false },
  { name: "Daniel Muller", selected: false },
  { name: "Diego Alvarez", selected: false },
  { name: "Ethan Williams", selected: false },
  { name: "Fatima Al-Farsi", selected: false },
  { name: "Freya Andersen", selected: false },
  { name: "Gabriel Costa", selected: false },
  { name: "Hannah Cohen", selected: false },
  { name: "Hiroshi Tanaka", selected: false },
  { name: "Isabella Martinez", selected: false },
  { name: "Jakub Novak", selected: false },
  { name: "Jonas Schmidt", selected: false },
  { name: "Kanya Chaiyaporn", selected: false },
  { name: "Kwame Mensah", selected: false },
  { name: "Leila Haddad", selected: false },
  { name: "Lena Gruber", selected: false },
  { name: "Liam O'Connor", selected: false },
  { name: "Liam Silva", selected: false },
  { name: "Lucas Silva", selected: false },
  { name: "Maria Santos", selected: false },
  { name: "Mariam Said", selected: false },
  { name: "Mateo Garcia", selected: false },
  { name: "Maya Chen", selected: false },
  { name: "Maya Nguyen", selected: false },
  { name: "Mohamed Salah", selected: false },
  { name: "Nadia Rahman", selected: false },
  { name: "Nathan Lee", selected: false },
  { name: "Nguyen Minh", selected: false },
  { name: "Noah Kim", selected: false },
  { name: "Oliver Smith", selected: false },
  { name: "Omar Hassan", selected: false },
  { name: "Ravi Reddy", selected: false },
  { name: "Samuel Johnson", selected: false },
  { name: "Sofia Rossi", selected: false },
  { name: "Thomas Anderson", selected: false },
  { name: "Valentina Ivanova", selected: false },
  { name: "Yusuf Demir", selected: false },
];
```

まず、`.filter`、`<input>`、`<select>` 要素への参照を取得します。

```js live-sample___complex-listbox
const filterInput = document.querySelector(".filter input");
const select = document.querySelector("select");
```

次に、オブジェクトの配列を引数として取る `populateOptions()` という関数を定義します。この関数内では、まず `<select>` 要素のコンテンツを空にします。次に、入力配列をループ処理し、配列内のそれぞれのオブジェクトに対して `<option>` 要素を作成します。その際、`textContent` プロパティと `selected` プロパティを、それぞれオブジェクトの `name` プロパティと `selected` プロパティと同じ値に設定します。各 `<option>` 要素は、`<select>` の子要素として DOM に追加されます。

```js live-sample___complex-listbox
function populateOptions(array) {
  select.innerHTML = "";

  array.forEach((obj) => {
    const option = document.createElement("option");
    option.textContent = obj.name;
    option.selected = obj.selected;
    select.appendChild(option);
  });
}
```

これで、絞り込み文字列とオブジェクトの配列を引数として取る関数 `filterOptions()` を定義します。その文字列が空文字列か、1 つ以上の空白であるかどうかを、その文字列の {{jsxref("String.trim", "trim()")}} メソッドの返値を `""` と比較することで確認します。これが `true` を返した場合、`populateOptions()` 関数を実行し、配列全体を引数として渡すことで、`<select>` にすべての `<option>` 要素が設定されるようにします。`false` が返された場合は、{{jsxref("Array.filter", "filter()")}} メソッドを使用して、{{jsxref("String.startsWith", "startsWith()")}} が `filter` 文字列である `name` プロパティを持つオブジェクトのみを含むように絞り込み、絞り込まれた配列を `populateOptions()` 関数に渡して、`<select>` に絞り込まれた `<option>` 要素のセットが設定されるようにします。

```js live-sample___complex-listbox
function filterOptions(filter, array) {
  if (filter.trim() === "") {
    populateOptions(array);
  } else {
    const filteredArray = array.filter((obj) =>
      obj.name.toLowerCase().startsWith(filter.toLowerCase()),
    );
    populateOptions(filteredArray);
  }
}
```

> [!NOTE]
> オブジェクトの `name` と `filter` 文字列の両方を、{{jsxref("String.toLowerCase", "toLowerCase()")}} を使用して小文字に変換し、絞り込みで大文字と小文字を区別せずに照合するようにします。

次に、{{domxref("Element.input_event", "input")}} イベントリスナーを `.filter` の `<input>` 要素に追加します。これにより、その値が変更された際に `filterOptions()` 関数が実行され、表示されている `<option>` 要素が絞り込まれるようになります。この関数には、検索文字列として `<input>` の現在の値を、入力配列として `contacts` 配列を渡します。

```js live-sample___complex-listbox
filterInput.addEventListener("input", () => {
  filterOptions(filterInput.value, contacts);
});
```

次のコードは、{{domxref("HTMLElement.change_event", "change")}} イベントリスナーをこの `<select>` 要素に追加するものです。これにより、`<option>` が選択または選択解除されるたびに、`contacts` 配列内のオブジェクトの `selected` 状態が、現在表示されている `<option>` オブジェクトの選択状態と同期されます。この理由では、`<select>` 要素に新しいフィルターを適用するたびに、表示される `<option>` 要素が `contacts` 配列から新たに生成され、その際、選択状態も記載されるためです。これを行わないと、絞り込み文字列を変更するたびに、選択されていたオプションが失われてしまいます。

トグル操作が行われるそれぞれの時点で、どの `<option>` が変更されたかを正確に特定する方法はないため、この問題を次のように解決します。

1. すべての `<option>` 値を配列で取得するには、{{domxref("HTMLSelectElement.options", "select.options")}} の集合から {{jsxref("Array.from")}} を使用して配列を作成し、その {{jsxref("Array.map", "map()")}} メソッドを用いて対応付けを行い、配列内のそれぞれの `<option>` をその値に置き換えます。
2. 同じ手法を用いて、現在選択されているすべての `<option>` の値の配列を取得します。ただし、今回は {{domxref("HTMLSelectElement.selectedOptions", "select.selectedOptions")}} の集合から入力配列を作成します。
3. `contacts` 配列内のそれぞれの連絡先オブジェクトについて、その連絡先の `name` プロパティの値が `allCurrentValues` 配列に含まれているかどうかを、{{jsxref("Array.includes", "includes()")}} メソッドを使用して調べます。含まれていない場合は、その連絡先を無視します。これにより、表示されていない連絡先の選択状態が誤って切り替わってしまうのを防ぎます。含まれている場合は、連絡先の `name` が `currentSelectedValues` 配列に含まれているかどうかを {{jsxref("Array.includes", "includes()")}} で調べ、その結果に基づいて連絡先の `selected` プロパティを設定します。含まれている場合は `true` を、含まれていない場合は `false` を設定します。

```js live-sample___complex-listbox
select.addEventListener("change", () => {
  const allCurrentValues = Array.from(select.options).map(
    (option) => option.value,
  );
  const currentSelectedValues = Array.from(select.selectedOptions).map(
    (option) => option.value,
  );

  contacts.forEach((contact) => {
    if (allCurrentValues.includes(contact.name)) {
      contact.selected = currentSelectedValues.includes(contact.name);
    }
  });
});
```

最後に、`populateOptions()` 関数を実行し、`contacts` 配列を引数として渡すことで、ページの読み込み時に連絡先の全リストを表示させるようにします。

```js live-sample___complex-listbox
populateOptions(contacts);
```

### 結果

この例は次のよう表示されます。

{{EmbedLiveSample("complex-listbox", "100%", "380px")}}

```css hidden live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox live-sample___complex-listbox
@supports not (appearance: base-select) {
  body::before {
    content: "このブラウザーは `appearance: base-select` に対応していません。";
    color: black;
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
}
```

## 次は

このモジュールの次の記事では、現行ブラウザーで利用できるさまざまな [UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) について解説し、フォームのさまざまな状態に応じてスタイルを設定する方法を探っていきます。

## 関連情報

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}
- {{cssxref("appearance")}}
- {{cssxref("::checkmark")}}
- {{cssxref(":checked")}}
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
