---
title: UI 擬似クラス
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 76936e1d9ff271ac59307a0f858d0d7b57f3866a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

これまでの記事では、様々なフォームコントロールのスタイル設定について、一般的な方法で説明しました。これには、例えばチェックボックスが選択されたときだけターゲットにするために `:checked` を使用するような、擬似クラスの使用方法も記載しました。この記事では、さまざまな状態のフォームをスタイル設定するために利用できる、さまざまな UI 擬似クラスについて詳しく説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的な
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> および
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a> を理解していること（一般的な
        <a
          href="/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >擬似クラスと擬似要素</a
        >の知識を含む）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        フォームのどの部分がスタイル設定しにくいのか、その理由を理解すること。カスタマイズするために何ができるかを学ぶこと。
      </td>
    </tr>
  </tbody>
</table>

## 利用できる擬似クラスには何があるのか

以下の擬似クラスは、すでによくご存じかもしれません。

- {{cssxref(":hover")}}: マウスポインターを当てたときだけ要素を選択します。
- {{cssxref(":focus")}}: フォーカスされているとき（キーボードからタブで移動しているとき）にのみ、要素を選択します。
- {{cssxref(":active")}}: その要素がアクティブ化されているとき（つまり、クリックされたとき、またはキーボード操作の場合は <kbd>Return</kbd> / <kbd>Enter</kbd> キーが押されたとき）だけ、要素を選択します。

これらの基本的な擬似クラスについては、 もう慣れたことでしょう。 [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)では、他にも HTML フォームに関連する擬似クラスをいくつか提供しています。これらは、これらは、利用することができる有用なターゲット条件をいくつか提供しています。以下の節で詳しく説明しますが、簡単に説明すると、主なものは以下のとおりです。

- {{cssxref(':required')}} および {{cssxref(':optional')}}: 必須となりうる要素（HTML [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) 属性に対応している要素など）を、必須かオプションかに基づいて対象とします。
  必須または省略可能なフォームコントロールを対象とします。
- {{cssxref(":valid")}} と {{cssxref(":invalid")}}、 {{cssxref(":in-range")}} と {{cssxref(":out-of-range")}}: 設定されたフォーム検証の制約に従って有効/無効、または範囲内/範囲外のフォームコントロールを対象とします。
- {{cssxref(":enabled")}} と {{cssxref(":disabled")}}、 {{cssxref(":read-only")}} と {{cssxref(":read-write")}}: 無効化できる要素（HTML [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) 属性に対応した要素など）については現在有効か無効かに基づいて、また、読み書き可能、読み取り専用のフォームコントロール（HTML の [`readonly`](/ja/docs/Web/HTML/Reference/Attributes/readonly) 属性が設定された要素など）を対象にします。
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, {{cssxref(":default")}}: それぞれ、チェックされているチェックボックスとラジオボタン、不確定な状態（チェックされていないかチェックされていないかのどちらか）、ページを読み込んだときの既定の選択オプション（例えば、 [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) に [`checked`](/ja/docs/Web/HTML/Reference/Elements/input#checked) 属性が設定されているもの、または [`<option>`](/ja/docs/Web/HTML/Reference/Elements/option) 要素に [`selected`](/ja/docs/Web/HTML/Reference/Elements/option#selected) 属性が設定されているものなどが対象です。）

他にもたくさんありますが、上に挙げたものが明らかに最も有用です。中にはとても特殊でニッチな問題を解決することを目的としたものもあります。上に挙げた UI 擬似クラスはブラウザーの対応が充実していますが、もちろん、対象とするユーザーに対して確実に動作するよう、フォームの実装を慎重にテストする必要があります。

> [!NOTE]
> ここで説明する多くの擬似クラスは、検証状態（データが有効か無効か）に基づくフォームコントロールのスタイル設定に関係しています。検証制約の設定と操作については、次の記事「[クライアントサイドのフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)」で詳しく説明しますが、今は混乱しないようにフォーム検証に関して単純にしておきます。

## 入力が必須か否かによるスタイル設定

クライアントサイドのフォーム検証に関する最も基本的な概念の一つは、フォームの入力が必須（フォームを送信する前に入力する必要がある）か任意（オプション）かです。

{{htmlelement('input')}}、{{htmlelement('select')}}、{{htmlelement('textarea')}} の各要素には `required` 属性を利用することができ、設定すると、フォームが正常に送信される前にそのコントロールに入力しなければならないことを意味しています。
例えば、以下のフォームでは苗字と名前の入力が必須ですが、メールアドレスは任意です。

```html live-sample___optional-required-styles
<form>
  <fieldset>
    <legend>フィードバックフォーム</legend>
    <div>
      <label for="fname">苗字: </label>
      <input id="fname" name="fname" type="text" required />
    </div>
    <div>
      <label for="lname">名前: </label>
      <input id="lname" name="lname" type="text" required />
    </div>
    <div>
      <label for="email"> メールアドレス（返信がほしい場合）: </label>
      <input id="email" name="email" type="email" />
    </div>
    <div><button>送信</button></div>
  </fieldset>
</form>
```

この 2 つの状態を一致させるには、 {{cssxref(':required')}} と {{cssxref(':optional')}} 擬似クラスが使用できます。例えば、上記の HTML に以下のような CSS を適用するとします。

```css hidden live-sample___optional-required-styles
body {
  font-family: sans-serif;
  margin: 20px auto;
  max-width: 70%;
}

fieldset {
  padding: 10px 30px 0;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}

button,
label,
input {
  display: block;
  font-size: 100%;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```css live-sample___optional-required-styles
input:required {
  border: 2px solid;
}

input:optional {
  border: 2px dashed;
}
```

必須の入力項目には実線枠が、任意の入力項目には破線枠が表示されています。
また、フォームに入力せずに送信すると、ブラウザーがデフォルトで表示するクライアント側検証のエラーメッセージを確認することもできます。

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

一般的に、フォーム内の「必須」要素と「任意」要素を色だけで区別するスタイル設定は避けるべきです。色覚障害のある人々にとって、これは好ましくないからです。

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

ウェブ上では、必須項目を示す際には、各入力欄にアスタリスク (`*`) を付けたり、「必須」という文字を関連付けたりするのが一般的な慣習です。
次の節では、`:required` 属性と生成コンテンツを使用して、必須項目を示すより適切な例を見ていきます。

> [!NOTE]
> おそらく `:optional` 擬似クラスを使用することはあまりないでしょう。フォームコントロールは既定でオプションなので、オプションのスタイル設定を既定値で行い、必要なコントロールのスタイルを上から追加すればよいのです。

> [!NOTE]
> 同じ名前のラジオボタン群の中の 1 つのラジオボタンに `required` 属性が設定されている場合、すべてのラジオボタンは 1 つが選択されるまで無効ですが、属性が割り当てられたものだけが実際に {{cssxref(':required')}} に一致することになります。

## 擬似クラスでコンテンツを生成する

これまでの記事で、[生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)の使い方を見てきましたが、今こそもう少し詳しく話をする良い機会だと思い、今回はその内容を紹介します。

これは、{{cssxref("::before")}} と {{cssxref("::after")}} という擬似要素と {{cssxref("content")}} というプロパティを使用して、影響を受ける要素の前または後にコンテンツの塊を表示させることができるというものです。コンテンツの塊は DOM に追加されないので、スクリーンリーダーによっては見えないかもしれません。擬似要素なので、実際の DOM ノードと同じ方法でスタイル設定の対象とすることができます。

これは、すべてのユーザーのアクセシビリティを保証するため代替のインジケーターも利用できる場合に、ラベルやアイコンのような視覚的なインジケーターを要素に追加したい場合に実に有益です。例えば、生成コンテンツを使用することで、ラジオボタンが選択された際の、カスタムラジオボタンの内側の円の配置やアニメーションを処理することができます。

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

これは実に有用です。スクリーンリーダーでは、遭遇したラジオボタンやチェックボックスがチェックまたは選択されているかをすでにユーザーに知らせているので、選択を示す別の DOM 要素を読み上げさせたくはないでしょう。紛らわしくなる可能性があるからです。純粋に視覚的なインジケーターを置くことで、この問題は解決されます。

すべての `<input>` 型が生成コンテンツを保有することに対応しているわけではありません。動的テキストを入力する `text`、`password`、`button` などの入力型は、すべて生成コンテンツを表示しません。他にも `range`、`color`、`checkbox` などがあり、これらは生成コンテンツを表示します。

先ほどの必須/オプションの例に戻りますが、今回は入力フィールド自体の外観は変更しません。生成コンテンツを使用して、指示するラベルを追加します。

まず最初に、フォームの一番上に、何を求めているのか、という段落を追加します。

```html
<p>「必須」と表示されたフィールドは必須項目です。</p>
```

スクリーンリーダーには、「必須」が追加情報として読み上げられ、目の見えるユーザーには、このラベルが表示されます。

前に述べたように、テキスト入力フィールドは生成コンテンツに対応していないので、生成コンテンツをぶら下げるために空の [`<span>`](/ja/docs/Web/HTML/Reference/Elements/span) を追加します。

```html
<div>
  <label for="fname">苗字: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

この場合、入力フィールドとラベルの両方が `width: 100%` に設定されているため、span が入力フィールドの下の新しい行にドロップされてしまうという問題がありました。これを修正するために、親の `<div>` をフレックスコンテナーにするスタイルを設定し、さらにコンテンツが長くなりすぎた場合は新しい行に折り返すように指示します。

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

この効果として、ラベルと入力フィールドはどちらも `width: 100%` なので別個の行に表示されますが、 `<span>` は width が `0` なので、入力フィールドと同じ行に表示されます。

次に、生成コンテンツについて説明します。この CSS を使用してコンテンツを作成します。

```css
input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "必須";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}
```

ここでは `<span>` を `position: relative` に設定しているので、生成されるコンテンツを `position: absolute` に設定すると、位置は `<body>` ではなく `<span>` からの相対位置になります（位置決めのために生成コンテンツは生成要素の子ノードであるかのように動作します）。

そして、生成コンテンツに、このラベルに書かせたい内容である "required" を与え、好きなようにスタイルと位置を設定します。結果は以下のようになります（**Play** ボタンを押すと、この例を MDN Playground で実行し、ソースコードを編集することができます）。

```html-nolint hidden live-sample___required-optional-generated
<form>
  <fieldset>
    <legend>フィードバックフォーム</legend>

    <p>「必須」と表示されたフィールドは必須項目です。</p>
    <div>
      <label for="fname">苗字: </label>
      <input id="fname" name="fname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="lname">名前: </label>
      <input id="lname" name="lname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="email"
        >メールアドレス（返信してほしい場合に記入）:
      </label>
      <input id="email" name="email" type="email" />
      <span></span>
    </div>
    <div><button>送信</button></div>
  </fieldset>
</form>
```

```css hidden live-sample___required-optional-generated
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
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

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "必須";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___required-optional-generated
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("required-optional-generated", "100%", 430, , , , , "allow-forms")}}

## データが妥当が否かでコントロールをスタイル設定する

フォーム検証におけるもう一つの実に重要で基本的な概念は、フォームコントロールのデータが有効か無効か（数値データの場合、範囲内と範囲外のデータという言い方もできる）です。[制約制限](/ja/docs/Web/HTML/Guides/Constraint_validation)を持つフォームコントロールは、これらの状態に基づいて対象とすることができます。

### :valid と :invalid

フォームコントロールは {{cssxref(":valid")}} と {{cssxref(":invalid")}} 擬似クラスを使用して対象とすることができます。この点については、いくつか留意すべき点があります。

- 制約検証を行わないコントロールは常に有効であり、したがって `:valid` と一致します。
- `required` が設定されているコントロールで、値がないものは無効とみなされ、 `:invalid` および `:required` と一致します。
- 組み込みの検証機能を持つコントロール、たとえば `<input type="email">` や `<input type="url">` は、入力されたデータが検索するパターンと一致しない場合、 `:invalid` に一致します（ただし、空の場合は有効になります）。
- 現在の値が [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) と [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性で指定した範囲の外にあるコントロールは、後述するように `:invalid` と一致しますが {{cssxref(":out-of-range")}} によっても一致させることができます。
- 他にも `:valid`/`:invalid` に一致する要素を作る方法はいくつかありますが、それは[クライアントサイドのフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation) の記事で見てください。しかし、今は事をシンプルにすることにしましょう。

それでは、 `:valid`/`:invalid` の簡単な例を見てみましょう。

前の例と同様に、コンテンツを生成するための余分な `<span>` を保有しており、これを使用して、有効/無効なデータのインジケーターを提供していきます。

```html
<div>
  <label for="fname">苗字: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

これらの指標を提供するために、以下の CSS を使用しています。

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

これまでと同様に、`<span>`を `position: relative` に設定し、生成されたコンテンツを相対的に位置指定できるようにします。次に、フォームのデータが有効か無効かによって、異なる生成コンテンツを絶対位置指定します。無効なデータには、少し緊急性を追加するために、入力フィールドに太い赤の境界線が指定されました。

> [!NOTE]
> ここで `::before` を使用してラベルを追加したのは、 `::after` を既に "required" ラベルのために使用していたからです。

次の例で試すことができます（**Play** ボタンを押すと、この例を MDN Playground で実行し、ソースコードを編集することができます）。

```html-nolint hidden live-sample___valid-invalid
<form>
  <fieldset>
    <legend>フィードバックフォーム</legend>

    <p>「必須」と表示されたフィールドは必須項目です。</p>
    <div>
      <label for="fname">苗字: </label>
      <input id="fname" name="fname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="lname">名前: </label>
      <input id="lname" name="lname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="email"
        >メールアドレス（返信してほしい場合に記入）:
      </label>
      <input id="email" name="email" type="email" />
      <span></span>
    </div>
    <div><button>送信</button></div>
  </fieldset>
</form>
```

```css hidden live-sample___valid-invalid
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
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

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "必須";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___valid-invalid
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("valid-invalid", "100%", 430, , , , , "allow-forms")}}

必須のテキスト入力フィールドは、空の状態では無効ですが、何か記入されている状態では有効であることに注目してください。一方、メールアドレスの入力フィールドは、必須でないため空の状態では有効ですが、適切なメールアドレスでないものが含まれていると無効となります。

### 範囲内のデータと範囲外のデータ

上で触れたように、他にも2つの関連する擬似クラスがあります。 {{cssxref(":in-range")}} と {{cssxref(":out-of-range")}} です。これらは、 [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) と [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) によって範囲指定された数値入力フィールドに対して、そのデータがそれぞれ指定した範囲内または範囲外にあるときに一致させます。

> [!NOTE]
> 数値の入力型とは、 `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` のことです。

注目すべきは、データが範囲内にある入力フィールドは `:valid` 擬似クラスに一致し、データが範囲外である入力フィールドは `:invalid` 擬似クラスに一致することです。では、なぜこの 2 つが存在するのでしょうか？実に意味論上の問題です。範囲外であるということは無効であることを伝えるためのより具体的なものなので、入力が範囲外であるというと、単に「無効」と言うよりユーザーに役立つ可能性があります。両方を提供することもできます。

それでは、これを実際に行う例を見ていきましょう。前の例を基に、数値入力に対して範囲外のメッセージを提供するだけでなく、入力が必須かどうかを示すようにします。

数値入力フィールドはこのようになります。

```html
<div>
  <label for="age">年齢（12 歳以上）: </label>
  <input id="age" name="age" type="number" min="12" max="120" required />
  <span></span>
</div>
```

そして、 CSS は次のようになります。

```css
input + span {
  position: relative;
}

input + span::after {
  font-size: 0.7rem;
  position: absolute;
  padding: 5px 10px;
  top: -26px;
}

input:required + span::after {
  color: white;
  background-color: black;
  content: "必須";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "値が指定可能な範囲外です";
  left: -182px;
}
```

これは以前の `:required` の例と同じような話ですが、ここでは `::after` の内容に適用される宣言を別のルールに分割し、 `:required` と `:out-of-range` 状態のための `::after` の内容に、それぞれ別のコンテンツとスタイルを保有するようにした点が異なっています。こちらで試すことができます（**Play** ボタンを押すと、この例を MDN Playground で実行し、ソースコードを編集することができます）。

```html-nolint hidden live-sample___out-of-range
<form>
  <fieldset>
    <legend>フィードバックフォーム</legend>

    <p>「必須」と表示されたフィールドは必須項目です。</p>
    <div>
      <label for="name">氏名: </label>
      <input id="name" name="name" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="age">年齢（12 歳以上）: </label>
      <input id="age" name="age" type="number" min="12" max="120" required />
      <span></span>
    </div>
    <div>
      <label for="email"
        >メールアドレス（返信してほしい場合に記入）:
      </label>
      <input id="email" name="email" type="email" />
      <span></span>
    </div>
    <div><button>送信</button></div>
  </fieldset>
</form>
```

```css hidden live-sample___out-of-range
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
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

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

input + span {
  position: relative;
}

input + span::after {
  font-size: 0.7rem;
  position: absolute;
  padding: 5px 10px;
  top: -26px;
}

input:required + span::after {
  color: white;
  background-color: black;
  content: "必須";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "値が指定可能な範囲外です";
  left: -182px;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___out-of-range
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("out-of-range", "100%", 430, , , , , "allow-forms")}}

数値の入力フィールドが必須であると同時に範囲外である可能性もありますが、その場合はどうなるのでしょうか？ `:out-of-range` のルールは `:required` のルールよりもソースコード上の後で現れるため、[カスケードルール](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#カスケードを理解する)が作用して、範囲外のメッセージが表示されます。

これはとてもうまく動作します。最初にページを読み込んだばかりの時には、「必須」が赤いバツ印と枠線とともに表示されます。有効な年齢（12 ～ 120 歳の範囲）を入力すると、入力フィールドは有効になります。しかし、年齢を範囲外の値に変更すると、「必須」の代わりに「値が指定可能な範囲外です」というメッセージが表示されます。

> [!NOTE]
> 無効な値や範囲外の値を入力するには、実際にフォームにフォーカスを当てて、キーボードを使用して入力する必要があります。スピナーボタンでは、許容範囲外の値まで増加/減少させることはできません。

## 有効/無効や読み取り専用/読み書き可能の入力フィールドをスタイル設定する

有効な要素とは、選択、クリック、入力などが可能な、アクティブにできる要素のことです。一方、無効な要素はどのような方法でも操作することができず、そのデータがサーバーに送信されることもありません。

この 2 つの状態は {{cssxref(":enabled")}} と {{cssxref(":disabled")}} を使用して対象化することができます。無効化された入力フィールドはなぜ有用なのでしょうか？あるデータが特定のユーザーに適用されない場合、そのユーザーがフォームを送信するときにそのデータを送信したくないことがあります。請求先と配送先に同じ住所を使用するかどうか尋ねられることがよくありますが、その場合は単一の住所をサーバーに送信すればよく、請求先フィールドを使用しないようにすることもできます。

このような例を見てみましょう。まず最初の HTML は、テキスト入力フィールドと、請求先住所の無効化をオン・オフするためのチェックボックスを含むシンプルなフォームです。請求先住所フィールドは既定値で無効になっています。

```html-nolint
<form>
  <fieldset id="shipping">
    <legend>お届け先住所</legend>
    <div>
      <label for="name1">氏名: </label>
      <input id="name1" name="name1" type="text" required />
    </div>
    <div>
      <label for="address1">住所: </label>
      <input id="address1" name="address1" type="text" required />
    </div>
    <div>
      <label for="zip-code1">郵便番号: </label>
      <input id="zip-code1" name="zip-code1" type="text" required />
    </div>
  </fieldset>
  <fieldset id="billing">
    <legend>請求先住所</legend>
    <div>
      <label for="billing-checkbox">お届け先住所と同じ</label>
      <input type="checkbox" id="billing-checkbox" checked />
    </div>
    <div>
      <label for="name" class="billing-label disabled-label">氏名: </label>
      <input id="name" name="name" type="text" disabled required />
    </div>
    <div>
      <label for="address2" class="billing-label disabled-label">
        住所:
      </label>
      <input id="address2" name="address2" type="text" disabled required />
    </div>
    <div>
      <label for="zip-code2" class="billing-label disabled-label">
        郵便番号:
      </label>
      <input id="zip-code2" name="zip-code2" type="text" disabled required />
    </div>
  </fieldset>

  <div><button>送信</button></div>
</form>
```

さて、CSS の話です。この例で最も関連性の高い部分は以下の通りです。

```css
input[type="text"]:disabled {
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}
```

無効にしたい入力フィールドを、 `input[type="text"]:disabled` を使用して直接選択しましたが、対応するテキストラベルも灰色で表示したいと思います。ラベルは入力欄のすぐ前にあるため、{{cssxref(":has")}} 擬似クラスを使用して選択します。

最後に、請求先住所フィールドの無効化を切り替えるために、いくらかの JavaScript を使用しました。

```js
function toggleBilling() {
  // 請求先テキストフィールドを選択
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  // 請求先テキストフィールドの状態を切り替え
  for (const item of billingItems) {
    item.disabled = !item.disabled;
  }
}

// `change` イベントリスナーをチェックボックスへ設定
document
  .getElementById("billing-checkbox")
  .addEventListener("change", toggleBilling);
```

ここでは [`change` イベント](/ja/docs/Web/API/HTMLElement/change_event)を使用して、ユーザーが請求先情報の入力欄の表示/非表示を切り替えたり、関連付けられたラベルのスタイル設定を変更したりできるようにしています。

以下で実際の例を試すことができます（**Play** ボタンを押すと、この例を MDN Playground で実行し、ソースコードを編集することができます）。

```html hidden live-sample___enabled-disabled-shipping
<form>
  <fieldset id="shipping">
    <legend>お届け先住所</legend>
    <div>
      <label for="name1">氏名: </label>
      <input id="name1" name="name1" type="text" required />
    </div>
    <div>
      <label for="address1">住所: </label>
      <input id="address1" name="address1" type="text" required />
    </div>
    <div>
      <label for="zip-code1">郵便番号: </label>
      <input id="zip-code1" name="zip-code1" type="text" required />
    </div>
  </fieldset>
  <fieldset id="billing">
    <legend>請求先住所</legend>
    <div>
      <label for="billing-checkbox">お届け先住所と同じ</label>
      <input type="checkbox" id="billing-checkbox" checked />
    </div>
    <div>
      <label for="name" class="billing-label">氏名: </label>
      <input id="name" name="name" type="text" disabled required />
    </div>
    <div>
      <label for="address2" class="billing-label">住所: </label>
      <input id="address2" name="address2" type="text" disabled required />
    </div>
    <div>
      <label for="zip-code2" class="billing-label">郵便番号: </label>
      <input id="zip-code2" name="zip-code2" type="text" disabled required />
    </div>
  </fieldset>

  <div><button>送信</button></div>
</form>
```

```css hidden live-sample___enabled-disabled-shipping
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
  margin-bottom: 20px;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
}

button,
label,
input[type="text"] {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

input[type="text"]:disabled {
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___enabled-disabled-shipping
function toggleBilling() {
  // 請求先テキストフィールドを選択
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  // 請求先テキストフィールドの状態を切り替え
  for (const item of billingItems) {
    item.disabled = !item.disabled;
  }
}

// `change` イベントリスナーをチェックボックスへ設定
document
  .getElementById("billing-checkbox")
  .addEventListener("change", toggleBilling);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("enabled-disabled-shipping", "100%", 580, , , , , "allow-forms")}}

### read-only と read-write

`:disabled` と `:enabled` と同様に、`:read-only` と `:read-write` 擬似クラスは、フォーム入力フィールドが切り替えられる 2 つの状態を対象としています。無効化された入力フィールドと同様に、ユーザーは read-only の入力フィールドを編集することはできません。ただし、無効化された入力フィールドとは異なり、読み取り専用の入力フィールドの値はサーバーに送信されます。read-write とは、編集が可能であることを意味し、これがデフォルトの状態です。

入力フィールドは `readonly` 属性を使用して読み取り専用に設定されます。例として、開発者が前のページで入力された内容をこのページに送り、ユーザーに一箇所で確認してもらい、必要なデータを追加し、送信して注文を確定させることを目的とした確認ページを想像してください。この点で、すべての最終的なフォームデータを一度にサーバーに送信することができます。

フォームがどのようなものか見てみましょう。

HTML の一部を以下に示します。 readonly 属性に注意してください。

```html
<div>
  <label for="name">氏名: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

ライブサンプルを試してみると、一番上のフォーム要素のセットはフォーカスされませんが、フォームが送信されたときに値が送信されることがわかります。このように、`:read-only` と `:read-write` 擬似クラスを使用して、フォームコントロールのスタイル設定を行いました。

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

完全な例は次のようになります（**Play** ボタンを押すと、この例を MDN Playground で実行し、ソースコードを編集することができます）。

```html hidden live-sample___readonly-confirmation
<form>
  <fieldset>
    <legend>お届け先の詳細の確認</legend>
    <div>
      <label for="name">氏名: </label>
      <input id="name" name="name" type="text" value="Mr Soft" readonly />
    </div>
    <div>
      <label for="address">住所: </label>
      <textarea id="address" name="address" readonly>
23 Elastic Way,
Viscous,
Bright Ridge,
CA
</textarea
      >
    </div>
    <div>
      <label for="zip-code">郵便番号: </label>
      <input id="zip-code" name="zip-code" type="text" value="94708" readonly />
    </div>
  </fieldset>

  <fieldset>
    <legend>最終的な指示</legend>
    <div>
      <label for="sms-confirm">SMS で確認結果を送信</label>
      <input id="sms-confirm" name="sms-confirm" type="checkbox" />
    </div>
    <div>
      <label for="instructions">備考</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>

  <div><button type="button">詳細を修正</button></div>
  <div><button type="submit">送信</button></div>
</form>
```

```css hidden live-sample___readonly-confirmation
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
  margin-bottom: 20px;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

button,
label,
input[type="text"],
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

input[type="text"],
textarea {
  width: 50%;
}

textarea {
  height: 110px;
  resize: none;
}

label {
  width: 40%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  background-color: #eeeeee;
}

button {
  width: 60%;
  margin: 20px auto;
}

input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

```js hidden live-sample___readonly-confirmation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("readonly-confirmation", "100%", 660, , , , , "allow-forms")}}

> [!NOTE]
> また、 `:enabled` と `:read-write` は、入力要素の既定の状態を記述する擬似クラスで、おそらくほとんど使用することはないでしょう。

## ラジオボタンとチェックボックスの状態 — チェック済み、既定、不定

このモジュールの以前の記事で見たように、{{HTMLElement("input/radio", "radio buttons")}} と {{HTMLElement("input/checkbox", "checkboxes")}} にはチェックと解除の状態があります。しかし、他にも考慮すべき状態がいくつかあります。

- {{cssxref(":default")}}: ページ読み込み時に既定で（つまり、それらに `checked` 属性を設定することで）チェックされているラジオボタン/チェックボックスに一致します。これらは、ユーザーがチェックを外したとしても、 {{cssxref(":default")}} 擬似クラスに一致します。
- {{cssxref(":indeterminate")}}: ラジオボタン/チェックボックスがチェックも解除もされていない状態で、これらは _不定_ とみなされ、 {{cssxref(":indeterminate")}} 擬似クラスに一致します。これが何を意味しているかは、以下で詳しく説明します。

### :checked

チェックされたときは、 {{cssxref(":checked")}} 擬似クラスで照合できます。

これの最も一般的な使用方法は、 [`appearance: none;`](/ja/docs/Web/CSS/Reference/Properties/appearance) を使用してシステムの既定のスタイルを削除し、自分でスタイルを構築し直したい場合に、チェックボックスやラジオボタンがチェックされたとき、異なるスタイルを追加することです。以前の記事で、[`appearance` を使用したチェックボックスとラジオボタンのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#appearance_を使用したチェックボックスとラジオボタンのスタイル設定)について述べたときに、この例を見ました。

おさらいとして、ラジオボタンのスタイル設定の例にある `:checked` のコードは、次のようになっています。

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

こちらで試すことができます（**Play** ボタンを押すと、この例を MDN Playground で実行し、ソースコードを編集することができます）。

```html hidden live-sample___radios-styled
<form>
  <fieldset>
    <legend>好きな果物を選んでください</legend>
    <p>
      <label>
        <input type="radio" name="fruit" value="cherry" />
        サクランボ
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="fruit" value="banana" />
        バナナ
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="fruit" value="strawberry" />
        イチゴ
      </label>
    </p>
  </fieldset>
</form>
```

```css hidden live-sample___radios-styled
input[type="radio"] {
  appearance: none;
}

input[type="radio"] {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid gray;
  /* チェックボックスの位置をテキストのベースライン上に調整 */
  vertical-align: -2px;
  outline: none;
}

input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

{{EmbedLiveSample("radios-styled", "100%", 200, , , , , "allow-forms")}}

基本的には、ラジオボタンの「内側の円」のスタイルを `::before` 擬似要素を使用して構築しますが、それに `scale(0)` を {{cssxref("transform")}} を設定します。次に、 {{cssxref("transition")}} を使用して、ラジオが選択/チェックされたときにラベルの生成コンテンツがうまくアニメーションして表示されるようにしています。 {{cssxref("width")}}/{{cssxref("height")}} を遷移させるのではなく、座標変換を使用することの利点は、円の角から伸びるように見えるのではなく、円の中心から伸びるようにするために {{cssxref("transform-origin")}} を使用することができ、かつボックスモデルプロパティ値を更新しないため、ジャンプする動作がないことです。

### :default と :indeterminate

前述のように、 {{cssxref(":default")}} 擬似クラスは、ページ読み込み時に既定でチェックされるラジオ／チェックボックスに、チェックされていないときでも一致します。これは、ユーザーが選択をリセットしたい場合に備えて、既定値（または開始時の選択肢）が何であったかを思い出させるために、選択肢のリストにインジケータを追加するのに有用でしょう。

また、上記のラジオボタン/チェックボックスは、チェックでも解除でもない状態にあるとき、 {{cssxref(":indeterminate")}} 擬似クラスに一致します。しかし、これはどういう意味でしょうか？ indeterminate になる要素には、以下のようなものが記載されています。

- {{HTMLElement("input/radio")}} 入力フィールドで、同じ名前のグループ内のすべてのラジオボタンのチェックが外れている場合
- {{HTMLElement("input/checkbox")}} 入力フィールドの `indeterminate` プロパティが、JavaScript によって `true` に設定された場合。
- {{HTMLElement("progress")}} の要素に値がない場合。

これは、あまり頻繁に使用するものではないでしょう。 1 つの用途は、ユーザーが次に移動する前に、必ずラジオボタンを選択する必要があることを指示するためのものです。

前の例を修正して、既定値が何であるかをユーザーに知らせる版と、不確定な場合にラジオボタンのラベルのスタイルを設定する版を見てみましょう。これらは両方とも、入力フィールドに以下のような HTML 構造を有しています。

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">サクランボ</label>
  <span></span>
</p>
```

`:default` の例では、中央のラジオボタン入力フィールドに `checked` 属性を追加して、読み込んだときに既定で選択されるようにしました。そして、以下の CSS でスタイルを設定しています。

```css
input ~ span {
  position: relative;
}

input:default ~ span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "Default";
  color: white;
  background-color: black;
  padding: 5px 10px;
  right: -65px;
  top: -3px;
}
```

これは、ページが読み込まれたときに最初に選択されたものの上に、小さな "Default" ラベルを提供しています。ここでは、次兄弟結合子 (`+`) ではなく、後続兄弟結合子 (`~`) を使用していることに注意してください。 `<span>` がソース順では `<input>` のすぐ後に来ないので、このようにする必要があるのです。

実行結果は次のようになります（**Play** ボタンを押すと、この例を MDN Playground で実行し、ソースコードを編集することができます）。

```html hidden live-sample___radios-checked-default
<form>
  <fieldset>
    <legend>好きな果物を選んでください</legend>
    <p>
      <input type="radio" name="fruit" value="cherry" id="cherry" />
      <label for="cherry">サクランボ</label>
      <span></span>
    </p>
    <p>
      <input type="radio" name="fruit" value="banana" id="banana" checked />
      <label for="banana">バナナ</label>
      <span></span>
    </p>
    <p>
      <input type="radio" name="fruit" value="strawberry" id="strawberry" />
      <label for="strawberry">イチゴ</label>
      <span></span>
    </p>
  </fieldset>
</form>
```

```css hidden live-sample___radios-checked-default
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
}

input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
}

input[type="radio"] {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid gray;
  /* チェックボックスの位置をテキストのベースライン上に調整 */
  vertical-align: -2px;
  outline: none;
}

input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}

input ~ span {
  position: relative;
}

input:default ~ span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "Default";
  color: white;
  background-color: black;
  padding: 5px 10px;
  right: -65px;
  top: -3px;
}
```

{{EmbedLiveSample("radios-checked-default", "100%", 200, , , , , "allow-forms")}}

`:indeterminate` の例では、既定値で選択されたラジオボタンがありません。これは重要なことで、もしあれば、スタイル設定する不定値の状態は存在しません。不確定なラジオボタンには以下の CSS でスタイルを設定しています。

```css
input[type="radio"]:indeterminate {
  outline: 2px solid red;
  animation: 0.4s linear infinite alternate outline-pulse;
}

@keyframes outline-pulse {
  from {
    outline: 2px solid red;
  }

  to {
    outline: 6px solid red;
  }
}
```

これは、ラジオボタンにちょっと動く楽しい輪郭線を生成し、いずれかを選択する必要があることを期待します。

以下のライブ結果をご覧ください（**Play** ボタンを押すと、この例を MDN Playground で実行し、ソースコードを編集することができます）。

```html hidden live-sample___radios-checked-indeterminate
<form>
  <fieldset>
    <legend>好きな果物を選んでください</legend>
    <p>
      <input type="radio" name="fruit" value="cherry" id="cherry" />
      <label for="cherry">サクランボ</label>
      <span></span>
    </p>
    <p>
      <input type="radio" name="fruit" value="banana" id="banana" />
      <label for="banana">バナナ</label>
      <span></span>
    </p>
    <p>
      <input type="radio" name="fruit" value="strawberry" id="strawberry" />
      <label for="strawberry">イチゴ</label>
      <span></span>
    </p>
  </fieldset>
</form>
```

```css hidden live-sample___radios-checked-indeterminate
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

body {
  font-family: "Josefin Sans", sans-serif;
}

input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
}

input[type="radio"] {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid gray;
  /* チェックボックスの位置をテキストのベースライン上に調整 */
  vertical-align: -2px;
  outline: none;
}

input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}

input[type="radio"]:indeterminate {
  border: 2px solid red;
  animation: 0.4s linear infinite alternate border-pulse;
}

@keyframes border-pulse {
  from {
    border: 2px solid red;
  }

  to {
    border: 6px solid red;
  }
}
```

{{EmbedLiveSample("radios-checked-indeterminate", "100%", 200, , , , , "allow-forms")}}

> [!NOTE]
> [`indeterminate` 状態を含む興味深い例](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#未決定状態のチェックボックス)が [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) リファレンスページに掲載されていますので、参考にしてください。

## その他の擬似クラス

他にも興味のある擬似クラスはたくさんありますが、ここでそのすべてを詳しく書くスペースはありません。ここでは、時間をかけて調査する必要があるいくつかのものについて説明します。

- {{cssxref(":focus-within")}} 擬似クラスは、フォーカスを保有する要素、あるいはフォーカスを保有する要素を 含む\_ 要素に一致します。これは、フォーム内の入力フィールドにフォーカスが当たったとき、フォーム全体を何らかの方法でハイライトさせたい場合に有用です。
- {{cssxref(":focus-visible")}} 擬似クラスは、（タッチやマウスではなく）キーボード操作によってフォーカスを受けた要素に一致します。マウス（または他の）フォーカスとは異なるスタイルをキーボードフォーカスのために使用したい場合、有用です。
- {{cssxref(":placeholder-shown")}} 擬似クラスは、{{htmlelement('input')}} と {{htmlelement('textarea')}} 要素の値が空であるため、そのプレースホルダーを表示している（すなわち [`placeholder`](/ja/docs/Web/HTML/Reference/Elements/input#placeholder) 属性の内容を示している）要素に一致します。

以下のものも興味深いですが、まだブラウザーの対応が十分でありません。

- {{cssxref(":blank")}} 擬似クラスは、空のフォームコントロールを選択します。 {{cssxref(":empty")}} も {{HTMLElement("input")}} のように子を持たない要素に一致しますが、より一般化されており、他の{{glossary("void element", "空要素")}}、例えば {{HTMLElement("br")}} や {{HTMLElement("hr")}} などにも一致します。 `:empty` はそれなりにブラウザーが対応しています。`:blank` 擬似クラスの仕様書はまだ完成していないので、どのブラウザーも対応しているわけではありません。
- {{cssxref(":user-invalid")}} 擬似クラスは、対応されると {{cssxref(":invalid")}} に似ていますが、使い勝手がより良くなるでしょう。入力にフォーカスが当たった時に値が有効であれば、ユーザーがデータを入力フィールドする際に、その要素が `:invalid` に一致する可能性がありますが、フォーカスが外れた時には `:user-invalid` にのみ一致することになります。元々無効な値であった場合は、フォーカスがある間中、 `:invalid` と `:user-invalid` の両方に一致することになります。 `:invalid` と同様に、値が有効になると `:user-invalid` と一致しなくなります。

## まとめ

これで、フォーム入力に関連する UI 擬似クラスについての説明は完全に終了しました。どんどん使って、楽しいフォームスタイルを作成してください。次は別のもの、[クライアントサイドフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)に移動しましょう。

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
