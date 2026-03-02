---
title: HTML におけるフォームとボタン
short-title: フォームとボタン
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 8b1662a185211610f2ccf60ba14dd77ecab24b1b
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

HTML フォームとボタンは、ウェブサイトのユーザーと対話するための強力なツールです。最も一般的な用途として、ユーザーインターフェイス (UI) を操作したり、必要なデータを入力したりするための制御手段をユーザーに提供します。

この記事では、フォームとボタンの基本について紹介します。入力型やフォーム機能など、さらに学ぶべきことが多いです（多くの入力型やフォーム機能は触れていません）。しかし、この記事はほとんどの場合で十分な基礎知識を提供します。高度な使い方や特殊な用途については、キャリアを通じて継続的に学ぶ過程で、必要に応じて習得していけばよいでしょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。 <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >見出しと段落</a
        >および<a href="/ja/docs/Learn_web_development/Core/Structuring_content/Lists"
          >リスト</a
        >などのテキストレベルの意味付け。<a href="/ja/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >構造化 HTML</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>ユーザーがウェブサイトと対話する主な手段は、リンクとともに、フォームとボタンであるという認識。</li>
          <li>さまざまな種類のボタン。</li>
          <li>よく使われる <code>&lt;input&gt;</code> の型。</li>
          <li>よく使われる属性。 <code>name</code> や <code>value</code>。</li>
          <li><code>&lt;form&gt;</code> 要素、そしてフォーム送信の基本。</li>
          <li>ラベルと正しい意味づけでフォームにアクセシビリティを提供する。</li>
          <li>その他のコントロール型。<code>&lt;textarea&gt;</code>、<code>&lt;select&gt;</code>、<code>&lt;option&gt;</code>。</li>
          <li>クライアントサイド検証の基本。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ユーザーとのやりとり

これまでこのコースでは、ユーザーがウェブとやり取りするいくつかの方法を見てきました。

- [リンク](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)は、同じページ内または別のページにあるコンテンツの異なるセクションへ移動するために使用できます。
- [`<video>` および `<audio>`](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) 要素には通常、再生/一時停止、早送り、巻き戻しなどのコントロールが備わっており、ユーザーがメディアコンテンツを自由に視聴することができるようになっています。

しかし、これらの機能はユーザーが受動的にコンテンツを消費する一方的なやり取りを促進する傾向があります。それはそれで良いのですが、ウェブは双方向の体験です。ウェブサイト利用者は、コンテンツやサービスをどのように体験したいかについて好みを設定します。タクシーを呼び、折り返し電話をリクエストします。フィードバックを提供し、苦情を申し立てます。商品を購入し、自宅へ配送してもらいます。

この双方向の体験を提供するには、ボタンとフォームを使用する必要があります。

ボタンは通常、HTML の {{htmlelement("button")}} 要素を使用して作成します（{{htmlelement("input")}} 要素に `type` 属性を `button` や `submit` などの値に設定して作成することもあります）。これらのプッシュボタンは汎用的なもので、想像力とコーディングスキル次第で、任意の機能を起動するように設定できます。

フォームは、{{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}}, {{htmlelement("select")}} などの要素を使用して作成します。フォーム要素を使用すると、単純なボタンよりも複雑なコントロールを作成できます。例えば、ユーザーインターフェース要素の異なるテーマを選択できる複数のオプションを含むドロップダウンメニューなどです。

ただし重要なのは、ユーザーがウェブサイトのサーバーに情報を送信する必要がある際に記入するフォームを作成することも可能である点です。EC サイトを例に考えてみましょう。購入したい商品を検索する際には、検索語を入力するためのフォームを使用します。購入したアイテムの代金を支払い配送を確定する際には、郵便物の宛先を入力するフォームと、クレジットカード情報を入力する別のフォームを使用します。

この記事では主に、このより伝統的なフォーム要素の使用法に焦点を当てます。なお、ボタンもフォーム内でよく使用され、入力データをサーバーに送信するために用いられます。

この重要な理論の説明はここまでとし、次にコードを調べてボタンやフォームがどのように実装されているかを見ていきましょう。

## ボタン

すでに示唆したように、ウェブ上ではボタンには主に2つ用途があります。まず第一に、機能を起動するために使用され、UI コントロールを作成する際に有用です。最もシンプルなボタンは、次のコードで実装されます。

```html live-sample___basic-button
<button>押してね</button>
```

これは次のとおり表示されます。

{{EmbedLiveSample("basic-button", "100%", "60")}}

`<button></button>` タグの間に現れるテキストはボタン内部に描画され、ブラウザーによって基本的なスタイル設定が指定されるため、デフォルトでボタンの見た目と動作をします。ここまでは問題ありません。しかし、ここで課題が発生します。この単体では、この孤独なボタンは何の役にも立ちません。何か有益な動作をさせるには、フォーム内に配置するか（後述）、JavaScript を追加する必要があります。

例えば、上記のボタンに次の JavaScript を適用した場合、

```html hidden live-sample___basic-button-with-js
<button>押してね</button>
```

```js live-sample___basic-button-with-js
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "クリックしてくれました ❤️";
  setTimeout(() => {
    btn.textContent = "押してね";
  }, 1000);
});
```

次のような結果になります。クリックしてみてください。

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

現時点では JavaScript の仕組みを理解する必要はありません。このコースの後半で詳しく学びます。

次のセクションでは、ボタンの 2 つ目の主な用途であるフォーム送信のデモをご覧いただけます。

## フォームの構造

基本的なフォームには、次の 3 つの要素が含まれています。

- 他のすべてのフォームコンテンツを囲む {{htmlelement("form")}} 要素。`<form></form>` タグ内のフォームコントロールはすべて同一のフォームに属し、フォーム送信時にはそれらのデータも記載されます。
- 1つ以上のペアで、それぞれが {{htmlelement("label")}} 要素とフォームコントロール要素（通常は {{htmlelement("input")}} 要素ですが、例えば {{htmlelement("select")}} など他の型もあります）で構成されます。
  - フォームコントロール要素は、ユーザーがデータを選択または入力することができるようにし、フォームが送信されたときそのデータがサーバーに送信されます。
  - `<label>` 要素は、フォームコントロールに関連付けられた識別ラベルを提供し、そのコントロールに入力すべきデータを説明します。
- フォームを送信するために使用されている {{htmlelement("button")}} 要素。

上記の3つをすべて含む基本的な例をみてみましょう。このフォームは、ユーザーの名前とメールアドレスを尋ね、ニュースレターに登録するために使用することができます（ご心配なく——サーバーには接続されていないため、現時点では何も実行しません）。

```html live-sample___form-anatomy
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>初めてのフォーム</title>
  </head>
  <body>
    <form action="./submit_page" method="get">
      <h2>ニュースレターを購読</h2>
      <p>
        <label for="name">名前（必須）:</label>
        <input type="text" name="name" id="name" required />
      </p>
      <p>
        <label for="email">メールアドレス（必須）:</label>
        <input type="email" name="email" id="email" required />
      </p>
      <p>
        <button>登録する！</button>
      </p>
    </form>
  </body>
</html>
```

これは次のとおり表示されます。

{{EmbedLiveSample("form-anatomy", "100%", "200", , , , , "allow-forms")}}

「登録する！」をすぐにクリックした場合、データが入力されていないため検証エラーが表示されます。名前とメールアドレスでフォーム埋めて「登録する！」をクリックすると、`404` エラーメッセージが表示されます。

その理由は後ほど説明します。先に進む前に、前回の HTML コードリストを[コードエディター](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors)を使って新しい HTML ファイルにコピーし、新しいブラウザータブで開いてください。

### `<form>` 要素

先ほど述べたように、{{htmlelement("form")}} 要素はフォームの外側を囲む要素として機能し、内部のすべてのフォームコントロールをまとめてグループ化します。`<button>` が押されると、フォームコントロールが表すすべてのデータがサーバーに送信されます。`<form>` 要素にはたくさんの属性を指定できますが、最も重要な 2 つ（例に含めたもの）は以下の通りです。

- `action`: 送信されたフォームデータを処理するために送信したいページへのパスを指定します。後ほどフォームを送信すると、URL に `/submit_page` が含まれているのが確認できます。また、実際にはページが存在しないため {{HTTPStatus("404")}} エラーレスポンスが返されますが、これで問題ありません。
- `method`: サーバーにフォームデータを送信する際に使用するデータ転送[メソッド](/ja/docs/Web/HTTP/Reference/Methods)を指定します。現時点ではあまり気にしなくて大丈夫です。`get` 値を指定すると、データは URL の末尾に引数として添付されて送信されます。

#### 送信されたデータの確認

1. 別のタブにある例に移動し、"Bob" という名前と "bob@bob.com" というメールアドレスを入力してみてください。
2. `<button>` を押してみてください。

`action` 属性と `method` 属性により、フォームデータは以下の行で URL に送信されます。

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### フォームの構造化

`<form>` 要素内には任意の HTML 要素を含めることができ、それ自体を構造化したり、CSS によるスタイリングなどの対象となるコンテナーを提供したりできます。

この例では、フォームの目的を記述するために[見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) を含めています。

それぞれの入力欄とラベルのペア、および送信ボタンを別個の {{htmlelement("p")}} 内に配置しました。これにより、各要素が別個の行に表示されます。これらの要素はデフォルトで全てインライン要素です。つまり、この処理を行わなければ、すべて同じ行に配置されてしまいます。

これはフォーム構造化における一般的なパターンです。フォーム要素を分離するために `<p>` 要素を使用する人もいれば、{{htmlelement("div")}}、{{htmlelement("section")}}、さらには {{htmlelement("li")}} 要素を使用する人もいます。使用される要素が意味的に適切であれば、どれを使用しても大きな問題はありません。例えば、フォーム要素のグループを別個の段落やコンテンツ節、あるいはリストアイテムに分割するのは意味があります。一方、[blockquote](/ja/docs/Web/HTML/Reference/Elements/blockquote)、[aside](/ja/docs/Web/HTML/Reference/Elements/aside)、[address](/ja/docs/Web/HTML/Reference/Elements/address)として表すのはあまり意味がないと言えます。

フォーム要素をグループ化するための専用要素として {{htmlelement("fieldset")}} があります。これは複雑なフォームや、複数のチェックボックスやラジオボタンをまとめる場合など、特定の状況で有用です。後ほど `<fieldset>` の例をいくつか見ていきましょう。

### `<input>` 要素

{{htmlelement("input")}} 要素は、フォームに入力される異なるデータ項目を表します。基本フォームの例の一つを見てみましょう。

```html
<input type="text" name="name" id="name" required />
```

属性は次の通りです。

- `type`: 作成するフォームコントロールの型を指定します。フォームコントロールには、様々な種類の型があります。単純なテキストフィールドからラジオボタン、チェックボックスなど多岐にわたります。`text` 型を指定すると、あらゆる値を受け入れることができる基本的なテキストフィールドが生成されます。
- `name`: データ項目の名前を指定します。フォームが送信されたとき、データは名前と値のペアで送信されます。それぞれの場合において、名前はこの `name` 属性の値に等しく、値はテキストフィールドに入力されたテキストに等しくなります。
- `id`: 要素を識別するために使用できる ID を指定します。この場合、フォームコントロールを対応する `<label>` 要素に関連付けるために使用されます。
- `required`: フォーム要素に値が入力されるまでフォームを送信できないことを指定します。これは必須入力項目にのみ設定し、オプションのフィールドには設定しないでください。

一部の入力型は通常、フィールドに入力されたテキストから値を取得しないことに注意してください。例えば、[`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color) は、色を選択するためのカラーピッカーウィジェットを生成します。一方、[`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio) は、選択可能または非選択状態のラジオボタンコントロールを生成します。

ラジオボタンの場合、通常は特定の `value` 属性内に、選択された際に送信される値を指定する必要があります。なお、`text` や `color` などの入力型でも `value` 属性を指定できることに注意してください。これにより、フォームフィールドがまずレンダリングされた際に値が事前に入力されます。

#### `required` および `value` 属性の実演

1. 再度、別タブで読み込まれたサンプルページに移動し、どちらのフィールドにも値を入力せずにフォームを送信してみてください。「名前」フィールドの横に「このフィールドに入力してください」といったエラーメッセージが表示されます（ブラウザーによって表示は異なります）。これが `required` 属性 —— そしてブラウザーのデフォルトのクライアントサイドフォーム検証 —— が機能している様子です。
2. 次に、最初のフィールドに有効な名前を入力し、2 番目のフィールドには有効なメールアドレスではない値（例：「aaaa」など）を入力してフォームを送信してみてください。今回は「メールアドレス」フィールドの横に「メールアドレスを入力してください」といったエラーメッセージが表示されます。
3. フォームを編集して、最初の入力フィールドに `value="Bob"` を記載してみてください。コードを再読み込みすると、最初のフィールドにデフォルトで "Bob" という値が入力されているのが確認できます。

#### 特殊テキストフィールド入力

上の 2 つ目の演習は興味深い点を提起しています。2 つ目の入力フィールドは仕様上メールアドレスを想定しており、入力値をそのように検証します。フォームのコードを再度確認すると、その理由がわかります—。2 つ目の `<input>` 要素の `type` 属性が `email` となっているからです。特定のデータ型を扱うために設計された、いくつかの特殊なテキストフィールド入力型が存在します。[`<input type="number">`](/ja/docs/Web/HTML/Reference/Elements/input/number)、[`<input type="password">`](/ja/docs/Web/HTML/Reference/Elements/input/password)、[`<input type="tel">`](/ja/docs/Web/HTML/Reference/Elements/input/tel) などです。

上記のリンクをいくつかたどって、これらの入力型がどのような用途に使われるか確認してみましょう。[`<input>`](/ja/docs/Web/HTML/Reference/Elements/input) のリファレンスを参照し、さらに特殊なテキストフィールド入力型が見つかるか探してみてください。

### `<label>` 要素

先述の通り、{{htmlelement("label")}} 要素は、フォームコントロールに関連付けられた識別ラベルを指定し、それらに入力すべきデータを説明します。`<label>` 要素には任意のテキストコンテンツを記述できますが、関連付けられたフォームコントロールが期待するデータを正確に記述する必要があります。この関連付けは、フォームコントロールに `id` 属性を付与し、`<label>` 要素にコントロールの `id` と同じ値を持つ `for` 属性を付与することで生成されます。

例を示します。

```html
<label for="name">名前（必須）:</label>
<input type="text" name="name" id="name" required />
```

`<label>` 要素はいくつかの理由で重要であり、特に以下の点が挙げられます。

- 視覚障碍のあるユーザーがスクリーンリーダーを使用してウェブページのコンテンツを読み取り操作する際、それぞれのコントロールに遭遇するとスクリーンリーダーは関連付けられたラベルテキストを読み上げます。これにより、ユーザーはそれぞれのコントロールに入力すべきコンテンツを容易に理解できます。
- ラベルテキストやコントロールをクリックすることで、フォーム要素にフォーカスを合わせられるようになります。これは特に、タッチ画面上で指でフォーム要素を正確に選択するのが難しい携帯電話ユーザーにとって有用です。このような状況では、**ヒット領域**を大きくすることが有効です。

#### 明示的および暗黙的なフォームラベル

以上で説明したフォームラベルスタイルは**明示的フォームラベル**と呼ばれます。コントロールとラベルの関連付けは `id` 属性と `for` 属性によって明示的に行われます。また、同様にラベル内にコントロールを入れ子にすることで**暗黙的フォームラベル**を実装することも可能です：

```html
<label>
  名前（必須）:
  <input type="text" name="name" required />
</label>
```

入れ子にすることで、コントロールとラベルの間に暗黙の関連付けが生まれ、`id` 属性と `for` 属性は必要なくなります。

どちらの手法でも問題ありませんが、明示的なラベル付けの使用をお勧めします。これは、特に HTML コードが複雑になるにつれて、明示的な関連付けの方が通常は識別しやすく理解しやすいからです。さらに、スクリーンリーダー（およびその他の支援技術）は、暗黙的なラベルを常に正しく処理するとは限りません。

フォームのラベル付けの最善の取り組みについて詳しくは、[HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/)、csstricks.com (2021) をご覧ください。

### `<button>` 要素

{{htmlelement("button")}} 要素が `<form>` 要素内に配置されている場合、そのデフォルト動作は、クライアントサイドのフォーム検証によって送信がブロックされるような不正なデータが存在しない限り、フォームを送信することです。この動作は、上記の基本的なフォーム例を試した際に既に確認済みでしょう。

`<button>` 要素の `type` 属性で指定できる、その他のボタン動作もあります。

- `<button type="submit">` は、ボタンが送信ボタンのように動作することを明示的に宣言します。通常、これを宣言する必要はありません。ただし、何らかの理由で `<form>` 内に他のボタンを含む場合、どのボタンが送信ボタンかを明確にしたい場合を除きます。これはとても稀なケースです。
- `<button type="reset">` は「リセットボタン」を作成します。これによりフォーム内のすべてのデータが即座に削除され、初期状態にリセットされます。**リセットボタンは使用しないでください**。ウェブの初期には一般的でしたが、通常は役立つよりも煩わしいものです。長いフォームに入力したのに、送信ボタンではなく誤ってリセットボタンをクリックし、最初からやり直さなければならなかった経験は、多くの人が持っているでしょう。
- `<button type="button">` は、`<form>` 要素の外で指定されたボタンと同じ動作をするボタンを作成します。前述のように、デフォルトでまったく何もしません。機能を持たせるには JavaScript が必要です。

これらのボタン型は `<input>` 要素に同じ `type` 値を使用することでも作成することができます。[`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)、[`<input type="reset">`](/ja/docs/Web/HTML/Reference/Elements/input/reset)、[`<input type="button">`](/ja/docs/Web/HTML/Reference/Elements/input/button) です。しかしこれらは `<button>` と比べると多くの欠点があります。そのため、代わりに `<button>` を使用しましょう。

> [!NOTE]
> Scrimba<sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> には無料のレッスン [The very basics of forms](https://scrimba.com/learn-responsive-web-design-c029/~031?via=mdn) があり、この記事で以前扱ったフォームの基本事項について、有益な対話形式の復習を提供します。

## アクセシビリティに関する余談

アクセシビリティにおけるフォームラベルの重要性については既に説明しましたが、フォーム作成において適切なセマンティック要素を使用することの一般的な重要性についても補足します（例えば、フォーム送信には `<button>` を使用し、`<div>` に `<button>` のように振る舞うようプログラムするのは避けるべきです）。CSS と JavaScript を組み合わせれば、ほぼあらゆる HTML 要素をフォーム要素のように見せて動作させることは可能です。開発者がこの手法を取る主な理由はデザイン上の制約です。一部のフォームコントロールはスタイル設定が困難なためです。

しかし、これを行うと、自分自身とユーザーにとって操作が難しくなります。ブラウザーは既定で、JavaScript やその他の追加コードを必要とせずに、すべてのユーザーにとってフォームをより使いやすくするための `<button>` やフォームコントロール機能をいくつか提供しています。

例を示します。

- 意味的な要素はスクリーンリーダーなどの支援技術によって理解され、それらを視覚的に認識できないユーザーにその意味を伝達します。
- フォームコントロールとボタンはデフォルトでキーボード操作が可能です。前回の例では、<kbd>Tab</kbd> キーと <kbd>Shift</kbd> + <kbd>Tab</kbd> キー（「タブ移動」と呼ばれる）を使用して、フォーム要素間を前後に移動してみてください。
- 同時に、フォーム要素間でタブ移動すると、フォーカスされた要素が青い枠線（**フォーカス枠線**と呼ばれる）で強調表示される点にも注目してください。これはキーボードユーザーがフォーム内の現在位置を把握するために重要な機能です。

フォームを実装する際に適切な意味的要素を使用しない場合、この機能のすべてを再実装する必要があります。さもなければ、フォーム要素はユーザーの期待通りに動作せず、結果として不具合があるように見えてしまいます。すべてが積み重なっていくのです。

## その他のコントロール型

フォームでデータを収集するために使用できるコントロール型は他にも多数あります。少し複雑な例を見てみましょう。その後、その例を探索し説明します。

> [!NOTE]
> この例では、ユーザーが既に登録済みでログイン済みであることを想定しているため、名前やメールアドレスなどの詳細情報を収集する必要はありません。

```html live-sample___form-other-controls
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Second form</title>
  </head>
  <body>
    <form action="./payment_page" method="get">
      <h2>交流会に申し込む</h2>
      <fieldset>
        <legend>ホテルの部屋のタイプを選択:</legend>
        <div>
          <input
            type="radio"
            id="hotelChoice1"
            name="hotel"
            value="economy"
            checked />
          <label for="hotelChoice1">エコノミー (+$0)</label>

          <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
          <label for="hotelChoice2">上級 (+$50)</label>

          <input
            type="radio"
            id="hotelChoice3"
            name="hotel"
            value="penthouse"
            disabled />
          <label for="hotelChoice3">ペントハウス (+$150)</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>参加したいクラス:</legend>
        <div>
          <input type="checkbox" id="yoga" name="yoga" />
          <label for="yoga">ヨガ (+$10)</label>

          <input type="checkbox" id="coffee" name="coffee" />
          <label for="coffee">コーヒーロースト (+$20)</label>

          <input type="checkbox" id="balloon" name="balloon" />
          <label for="balloon">動物のバルーンアート (+$5)</label>
        </div>
      </fieldset>
      <p>
        <label for="transport">ここまでの交通手段:</label>
        <select name="transport" id="transport">
          <option value="">--選択してください--</option>
          <option value="plane">航空機</option>
          <option value="bike">バイク</option>
          <option value="walk">徒歩</option>
          <option value="bus">バス</option>
          <option value="train">鉄道</option>
          <option value="jetPack">ジェットパック</option>
        </select>
      </p>
      <p>
        <label for="comments">ほかにコメントはありますか:</label>
        <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
      </p>
      <p>
        <button>支払いを継続</button>
      </p>
    </form>
  </body>
</html>
```

これは次のとおり表示されます。

{{EmbedLiveSample("form-other-controls", "100%", "500", , , , , "allow-forms")}}

次のいくつかの項では、それぞれのコントロール型を順番に確認していきます。作業を進める際には、この例を別のブラウザータブで開くことをお勧めします。そのためには、コードエディターを使用してコードをHTMLファイルにコピーし、ブラウザータブで開いてください。

先に進む前に、ローカルコピーのフォームコントロールを操作して値を選択してみてください。フォームを送信し、URLに送信されたデータがどのように見えるか確認してみましょう。

### ラジオボタン

「ホテルの部屋のタイプを選択」ボタンは、[`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio) コントロールを使用して実装されています。これらは一連の押しボタンとして表示され、一度に選択できるのはセット内の1つだけです。複数のものを同時に選択することはできません。この名称は、昔ながらのラジオに付いていたボタンに由来します。ボタンを押すと、前回選択されていたボタンが再び飛び出す仕組みでした。

例のコードは次のようになります。

```html
<fieldset>
  <legend>ホテルの部屋のタイプを選択:</legend>
  <div>
    <input
      type="radio"
      id="hotelChoice1"
      name="hotel"
      value="economy"
      checked />
    <label for="hotelChoice1">エコノミー (+$0)</label>

    <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
    <label for="hotelChoice2">上級 (+$50)</label>

    <input
      type="radio"
      id="hotelChoice3"
      name="hotel"
      value="penthouse"
      disabled />
    <label for="hotelChoice3">ペントハウス (+$150)</label>
  </div>
</fieldset>
```

`radio` 入力型は、`text` 入力型とほぼ同じように動作しますが、いくつか違いがあります。

- それぞれのラジオボタンセットの `name` 属性には、同じ値を含める必要があります。これにより、それらを一つのセットとして関連付けることができます。異なる値が含まれている場合、それらは実質的に別個のセットとなり、送信時に異なる値が送信されます。
- それぞれのラジオボタンには、送信する値を含む `value` 属性を必ず記載する必要があります。送信される値は名前と値のペアになりますが、名前は常に同じになります。例えば `hotel=economy` や `hotel=superior` といった形です。
- それぞれのラジオボタンの `<label>` は、選択する全体的な値ではなく、その具体的な値の選択肢を記述する必要があります。全体的な値の選択肢の説明を提供する推奨方法は、それらを {{htmlelement("fieldset")}} で囲み、説明を含む子要素として {{htmlelement("legend")}} 要素を指定することです。

> [!NOTE]
> フィールドセットは、フォームの構造化やラベル付け以外にも、一連のコントロールを単一の単位として[無効化](#フォームコントロールの無効化)するなどの用途があります。

また、最初のラジオボタンに `checked` 属性を適用している点にも注意すべきです。これにより、ページが最初に読み込まれた時点で選択された状態が発生します。つまり、常に 1 つのオプションが選択された状態となり、別のラジオボタンを選択しない限り、選択を解除することはできません。

最初のラジオボタンの`checked`属性を除去し、保存してからページを再読み込みして、その効果を確認してください。次に進む前に元に戻しておいてください。

#### フォームコントロールの無効化

ラジオボタンの例では、3 番目のラジオボタンに `disabled` 属性が設定されていることに気づくでしょう。これにより、表示されたコントロールはグレー表示され、選択できなくなります。これは、通常は利用できるオプションが、現時点では利用できない状況で非常に有用です。例えば、商品が在庫切れの場合や、この例のようにペントハウススイートがすべて予約済みである場合などが挙げられます。

`disabled` 属性は、`<button>` 要素を含むあらゆるフォームコントロールに設定できます。`<fieldset>` 要素も `disabled` 属性を受け付けます。これにより、フィールドセット内のすべてのフォームコントロールが無効化されます。

2 つの `<fieldset>` 要素に `disabled` 属性を設定し、保存してからページを再読み込みして、その効果を確認してください。次に移動する前に、再度これらの属性を除去してください。

### チェックボックス

「参加したいクラス」セレクターは [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) コントロールで実装されています。これらはオン/オフ状態のチェックボックス群として表示されます。ラジオボタンとは異なり、複数のものを同時に選択できます。

```html
<fieldset>
  <legend>参加したいクラス:</legend>
  <div>
    <input type="checkbox" id="yoga" name="yoga" />
    <label for="yoga">ヨガ (+$10)</label>

    <input type="checkbox" id="coffee" name="coffee" />
    <label for="coffee">コーヒーロースト (+$20)</label>

    <input type="checkbox" id="balloon" name="balloon" />
    <label for="balloon">動物のバルーンアート (+$5)</label>
  </div>
</fieldset>
```

コードスニペットからもわかるように、ラジオボタンとチェックボックスはとても似た方法で実装されています（ページ読み込み時に事前選択状態を表現するため、`checked` 属性を指定することも可能です）。動作もほぼ同様ですが、ラジオボタンは複数アイテムの中からゼロ個または 1 個のみを選択可能であるのに対し、チェックボックスは複数アイテムの中からゼロ個以上を選択可能である点が異なります。

主な違い（`type` 値を除いて！）は、それぞれのチェックボックスが異なる `name` 値を持ち、通常 `value` 属性が指定されない点です。動作面では、これらが異なるデータ値を表すということですが、ラジオボタンセットは単一の値のみを表します。送信時には、チェックされたチェックボックスの値が `on` として送信されます。`yoga=on`、`balloon=on` などです。

> [!NOTE]
> チェックボックスに `value` 属性を指定することで、送信される値を変更できます。例えば、`<input type="checkbox" id="yoga" name="yoga" value="yes" />` と記述すると、チェックされた場合に `yoga=yes` が送信されます。ただし、これを行う意味はあまりありません。チェックボックスは、チェックされた場合に 1 つの値で送信されるか、まったく送信されないかのいずれかです。サーバーに送信される値が何かは、実際には重要ではありません。

### ドロップダウンメニュー

ドロップダウンメニュー（例えば、この例における「ここまでの交通手段」選択コントロール）は、`<input>` の型ではなく、{{htmlelement("select")}} および {{htmlelement("option")}} 要素で実装されています。

```html
<label for="transport">ここまでの交通手段:</label>
<select name="transport" id="transport">
  <option value="">--選択してください--</option>
  <option value="plane">航空機</option>
  <option value="bike">バイク</option>
  <option value="walk">徒歩</option>
  <option value="bus">バス</option>
  <option value="train">鉄道</option>
  <option value="jetPack">ジェットパック</option>
</select>
```

`<select>` 要素は、すべての異なる値の選択肢を囲みます。この要素内で、コントロールとそのラベルを関連付け、`id` 属性を設定し、送信されるデータ項目の名前を設定する `name` 属性を設定します。

データ項目のそれぞれの選択可能な値は、`<select>` 要素内に含まれる `<option>` 要素で表されます。それぞれの `<option>` 要素は `value` 属性を指定でき、この属性はドロップダウンリストからそのオプションが選択された際に送信される値を指定します。`value` 属性を指定しない場合、`<option></option>` タグ内のテキストが値として使用されます。

> [!NOTE]
> ページ読み込み時に特定のオプションを選択状態にしたい場合は、該当する `<option>` 要素に `selected` 属性を追加します。

### 複数行テキスト入力フィールド

複数行テキスト入力フィールドは、{{htmlelement("textarea")}} 要素を使用して作成されます。

```html
<label for="comments">ほかにコメントはありますか:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

これは `<input type="text">` 要素と同様の動作をしますが、複数行のテキスト入力が可能です。`rows` 属性はテキストエリアのデフォルトの行数を、`cols` 属性はデフォルトの桁数を指定します。指定しない場合、デフォルト値は `cols="20"` および `rows="2"` となります。

ほとんどのブラウザーでは、テキストエリアの角にサイズ変更用のドラッグハンドルが表示されます。このハンドルを使用してテキストエリアのサイズを変更してみてください。

## フォーム検証

先ほど、ブラウザーが指定した基本的なクライアントサイド検ォーム検証について見てきました。`required` 属性は、フォームを送信する前にフィールドへの入力が必須であることを指定するために使用されます。また、メールアドレス、URL、数値などの特定の値型に対して、正しい値型が入力されているかどうかもチェックします。検証が重要な理由は主に 2 つあります。

- データが正しい形式で送信されることを確認し、アプリケーションでエラーが発生しないようにします。
- データがセキュリティ上の問題を発生させないようにします。悪意のある者は、不安全なアプリケーションにおいてデータベースを削除したりシステムを制御したりするコマンドを実行可能にするために、仕様上、特定の形式でデータを送信する方法を知っています。

フォームの検証は巨大なテーマであり、この記事の範囲を超えているため、ここではひとまず割愛します。ただ、フォームの検証には主に 2 種類あることを覚えておいてください。

- クライアントサイド検証はブラウザー内で実行され、フォーム検証属性（`required` など）と JavaScript を組み合わせて実装されます。クライアントサイド検証は、ユーザーが誤ったデータを入力した際に即座にヒントを与えるのに有用ですが、悪意のあるデータが通過するのを防ぐ効果はあまり高くありません。JavaScript を無効にしたり、クライアントサイド検ードを変更して検証が動作しなくしたりすることがあまりにも簡単にできるからです。
- サーバーサイド検証はサーバー上で実行され、サーバーが使用する言語で実装されます。不正な形式のメッセージは、意図的または偶発的にサーバーに送信される可能性があります。一般的な対策として、不正なメッセージによるバグやセキュリティ課題を避けるため、クライアントが送信する内容を一切信頼しないようにサーバーを設計することが推奨されます。サーバーサイド検証は、サーバー上で実行されるコードを改ざんするのが難しいため、悪意のあるメッセージを阻止するのにとても有効です。一方で、ユーザーに誤ったデータに関するヒントを与える点ではあまり優れていません。なぜなら、データは検証のためにサーバーに取得し、結果がクライアントに返送されて初めてユーザーに通知できるからです。

要するに、クライアントサイド検証とサーバーサイド検証のどちらか一方を選ぶ必要はなく、両方が必要となります。クライアントサイド検証はユーザーに入力内容のフィードバックを提供し、サーバーサイド検証はメッセージがサーバーで安全に処理できる書式化を確認するために必要です。検証についてさらに学びたい場合は、[クライアントサイドのフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation) から始めるのが良いでしょう。

## まとめ

今は以上です。フォームについてはまだ学ぶべきことはたくさんありますが、今のところ、学習を進めるのに十分な理解は得られたはずです。

次に、HTML フォームに関する情報がどれだけ理解され、記憶されているかを調べるための確認テストを提供します。

## 関連情報

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
