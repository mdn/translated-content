---
title: 初めてのフォーム
slug: Learn/Forms/Your_first_form
tags:
  - 初心者向け
  - CSS
  - CodingScripting
  - 例
  - フォーム
  - ガイド
  - HTML
  - 学習
  - ウェブ
translation_of: Learn/Forms/Your_first_form
---
{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

このシリーズの最初の記事では、簡単なフォームの設計、HTML フォームコントロールとその他の HTML 要素を使用した正しい実装、CSS によるとても簡単なスタイル付け、データをサーバーに送る方法を含めた、ウェブフォームを作成する本当に初歩的な経験をします。
サブトピックは、モジュールの後で詳しく展開していきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシーと、<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML を理解する</a>を理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        ウェブフォームとは何か、何に使うのか、どうデザインするのか、サンプル事例に必要な基本の HTML 要素について熟知する。
      </td>
    </tr>
  </tbody>
</table>

## ウェブフォームとは何か?

**ウェブフォーム**とは、ユーザーと ウェブサイトやアプリケーションとの対話の要となるもののひとつです。ユーザーはフォームによって、ウェブサイトへデータを送ることができます。それらのデータはたいてい ウェブサーバーに送られて処理、保存されたり（このモジュール後半の[サーバーにデータを送る](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)を見てください）、クライアント側ですぐにインターフェイスを更新する（例えば、リストに他の項目を追加したり、UI の機能を表示/非表示にしたりする）こともあります。

ウェブフォームは 1 つ以上の**フォームコントロール**（**ウィジェット**ともいいます）と、フォーム全体を構成するのに役立つ追加要素 — よく **HTML フォーム**と呼ばれます — とで作られます。それらのコントロールは単一行または複数行のテキストフィールド、ドロップダウンボックス、ボタン、チェックボックス、ラジオボタンがあります。たいていは {{htmlelement("input")}} 要素を使って作成されますが、その他の要素もあります。

フォームコントロールは、特定フォームの値が入力されるのを強制するためにもプログラミングされ（**フォーム検証**）、目の見えるユーザーと目の不自由なユーザーの両方に対して用途を説明するテキストのラベルと対になります。

## フォームを設計する

コードを書き始める前に、そこから離れてフォームについて考える時間をとるとよいでしょう。簡単なモデルを作ると、ユーザーに入力を依頼したいデータの適切なセットを定義することの助けになります。ユーザー体験 (UX) の観点では、フォームが大規模になるとユーザーが不満を持って離れるリスクが高まると覚えておくことが重要です。簡単に、かつ集中するようにしてください。本当に必要なことだけを尋ねてください。

フォームの設計は、サイトやアプリケーションを構築する際の大切なステップです。フォームのユーザー体験まで扱うと本記事の対象を超えてしまいますが、そこまで踏み込みたい場合は以下の記事をご覧ください。

- Smashing Magazine に[フォームの UX に関するよい記事](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/)がありますが、もっとも重要な記事は [Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/) でしょう。
- UXMatters もまた、[基本的なベストプラクティス](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php)から[複数ページのフォーム](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php)といった複雑なことに至るまで、良いアドバイスを得られる、思慮深いリソースです。

本記事では、シンプルな問い合わせフォームを作成します。簡単に図を描いてみましょう。

![The form to build, roughly sketch](form-sketch-low.jpg)

このフォームには、3 つのテキストフィールドと 1 つのボタンがあります。要するに、ユーザーへ名前 (Name)、メールアドレス (E-mail)、送信したいメッセージ (Message) を尋ねます。ボタンを押すと、データをウェブサーバーへ送信します。

## アクティブラーニング: フォームの HTML の実装

これで、HTML に移ってフォームのコードを書く準備ができました。問い合わせフォームを作るために、以下の HTML 要素を使用します: {{HTMLElement("form")}}、{{HTMLElement("label")}}、{{HTMLElement("input")}}、{{HTMLElement("textarea")}}、{{HTMLElement("button")}} です。

前に進む前に、[簡単な HTML テンプレート](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)をローカルにコピーします。 — ここにフォームの HTML を入力します。

### `<form>` 要素

すべてのフォームは、以下のように {{HTMLElement("form")}} 要素から始まります。

```html
<form action="/my-handling-form-page" method="post">

</form>
```

これは、フォームを正式に定義します。これは {{HTMLElement("section")}} や {{HTMLElement("footer")}} 要素と同様にコンテナー要素ですが、フォームを含めるのに特化しています。フォームの動作方法を設定するための特有の属性もにも対応しています。すべての属性は省略可能ですが、少なくとも [`action`](/ja/docs/Web/HTML/Attributes/action) 属性と [`method`](/ja/docs/Web/HTML/Attributes/method) 属性は常に設定するのがふつうです。

- `action` 属性は、フォームで収集したデータを送信すべき場所 (URL) を定義します。
- `method` 属性は、データを送信するために使用する HTTP メソッド（`get` または `post`）を定義します。

> **Note:** これらの属性がどのように働くかについて、詳しくは[フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)で説明しています。

今のところは、上の {{htmlelement("form")}} 要素を HTML の {{htmlelement("body")}} に追加します。

### `<label>`、`<input>`、`<textarea>` 要素

問い合わせフォームはとてもシンプルで、 3 つのテキストフィールドがあり、それぞれに対応する {{HTMLelement("label")}} がついています。

- 名前の入力フィールドは、基本的な{{HTMLelement("input/text", "単一行のテキストフィールド")}}です。
- メールアドレスの入力フィールドは、{{HTMLelement("input/email", "email 型の入力フィールド")}}です。メールアドレスだけを受け付ける単一行のテキストフィールドです。
- メッセージの入力フィールドは {{HTMLelement("textarea")}} です。複数行のテキストフィールドです。

これらのフォームウィジェットを実装するためには、 HTML コードとしては、以下のようなものが必要です。

```html
<form action="/my-handling-form-page" method="post">
 <ul>
  <li>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name">
  </li>
  <li>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email">
  </li>
  <li>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </li>
 </ul>
</form>
```

フォームのコードを上記のようなものに更新してください。

{{HTMLelement("li")}} 要素はコードを扱いやすく構造化するとともに、スタイル設定を容易にするため (後述) に置いています。
ユーザビリティとアクセシビリティのため、それぞれのフォームコントロールに明示的にラベルをつけます。
[`for`](/ja/docs/Web/HTML/Attributes/for) 属性をすべての {{HTMLElement("label")}} 要素に使用し、その値として関連付けるフォームコントロールの [`id`](/ja/docs/Web/HTML/Global_attributes/id) を取ります。これで、フォームコントロールをラベルと関連付けることができます。

これには利点があります — フォームコントロールにラベルを関連付けて、ユーザーがマウス、トラックパッド、タッチ端末でラベルをクリックすると、対応するウィジェットがアクティブになり、画面リーダーのユーザーに読み上げられるアクセシブルな名前が提供されます。この属性の利点をさらに知りたいのでしたら、 [HTML フォームの構築方法](/ja/docs/Learn/Forms/How_to_structure_a_web_form) の記事ですべてを詳しく説明しています。

{{HTMLElement("input")}} 要素において、もっとも重要な属性は、`type` 属性です。
この属性は {{HTMLElement("input")}} 要素の見た目や動作を定義するため、とても重要です。
これについてもっと詳しいことは、[基本的なネイティブフォームコントロール](/ja/docs/Learn/Forms/Basic_native_form_controls)の記事にあります。

- このシンプルな例では、最初の input に {{HTMLelement("input/text", "text")}} という値を使用しています。これはこの属性の既定値です。
  これはあらゆるテキストを受け入れる、単一行のテキストフィールドを表します。
- 2 番目の input では、 {{HTMLelement("input/email", "email")}} という値を使用しています。これは正しい形式のメールアドレスのみを受け付ける単一行のテキストフィールドを定義します。
  この値は基本的なテキストフィールドを、ユーザーによって入力されたデータをチェックするようにする「賢い」フィールドへと変化させます。
  また、スマートフォンのように動的なキーボードのある端末で、メールアドレスを入力するのにふさわしいキーボードレイアウト（例えば既定で @ 記号があるもの）が表示されるようにします。
  フォームの検証について詳しく知りたい場合は、[データフォームの検証](/ja/docs/Learn/Forms/Form_validation)の記事をご覧ください。

大事なことを言い忘れましたが、`<input>` と `<textarea></textarea>` の構文に注意してください。
これは HTML の奇妙な点の 1 つです。
`<input>` タグは空要素です。つまり、終了タグは不要です。
一方 {{HTMLElement("textarea")}} は空の要素ではないので、適切な終了タグで閉じる必要があります。これは HTML フォームの特定の機能、つまり既定値の定義方法に影響があります。
{{HTMLElement("input")}} 要素の既定値を定義するには、次のように [`value`](/ja/docs/Web/HTML/Attributes/value) 属性を使う必要があります。

```html
<input type="text" value="既定でこの要素にはこの文章が挿入されます">
```

一方、 {{HTMLElement("textarea")}} の既定値を定義したい場合は、次のように既定値を {{HTMLElement("textarea")}} の開始タグと終了タグの間に書いてください。

```html
<textarea>
既定でこの要素にはこの文章が挿入されます
</textarea>
```

### `<button>` 要素

フォームはほぼできあがりました。あとは、ユーザーがフォームに記入したらデータを「送信」するためのボタンを追加します。
これは、{{HTMLElement("button")}} 要素を使用して簡単にできます。終了タグ `</ul>` の直前に次の行を追加してください。

```html
<li class="button">
  <button type="submit">メッセージを送信</button>
</li>
```

{{htmlelement("button")}} 要素は `type` 属性を受け入れます。これは `submit`、`reset`、`button` の 3 種類の値のうち 1 つを受け入れます。

- `submit` ボタン（既定値）をクリックすると、フォームのデータを {{HTMLElement("form")}} 要素の `action` 属性で定義したウェブページへ送信します。
- `reset` ボタンをクリックすると、直ちにすべてのフォームウィジェットを既定値にリセットします。 UX の観点では、このボタンは悪い行為であると考えられており、必要な理由がない限りこのボタンは使用しないようにしてください。
- `button` ボタンをクリックすると...何もしません! おかしなことのように見えますが、独自のボタンを作成するのに驚くほど役立ちます。 JavaScript でその機能を定義することができます。

> **Note:** {{HTMLElement("input")}} 要素を使用して、対応する `type` を指定してボタンを作成することもできます。例えば `<input type="submit">` のように。{{HTMLElement("button")}} 要素との大きな違いは、{{HTMLElement("input")}} 要素ではラベルとしてプレーンテキストしか許容しませんが、{{HTMLElement("button")}} 要素ではすべての HTML コンテンツを使用して、もっと複雑でクリエイティブなボタンの内容を作成することができます。

## 基本的なフォームの整形

フォームの HTML コードの記述ができました。このフォームを保存してブラウザーで見てみてください。今のところ、かなり不格好であることがわかると思います。

> **Note:** 作成した HTML コードが正しくないと思われる場合は、完成例と比較してみてください — [first-form.html](https://github.com/mdn/learning-area/blob/master/html/forms/your-first-HTML-form/first-form.html) にあります ([ライブ版も参照](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html))。

フォームをきれいにスタイル付けするのは、なかなか難しいものです。フォームのスタイル付けを詳しく教えるのはこの記事の範囲外なので、とりあえず見た目が問題ないように CSS を追加してもらうだけにしておきましょう。

最初に、ページの HTML の head 内に {{htmlelement("style")}} 要素を追加します。次のようになります。

```html
<style>

</style>
```

`style` タグの中に、以下の CSS を追加してください。

```css
form {
  /* フォームをページの中央に配置 */
  margin: 0 auto;
  width: 500px;
  /* フォームの輪郭 */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}


form li + li {
  margin-top: 1em;
}

label {
  /* 大きさと配置を統一 */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* すべてのテキストフィールドのフォント設定を一致させる
     既定で、 textarea には等幅フォントが設定されている */
  font: 1em sans-serif;

  /* テキストフィールドの大きさを統一 */
  width: 300px;
  box-sizing: border-box;

  /* フォームフィールド境界に合わせる */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* フォーカスのある要素を強調する */
  border-color: #000;
}

textarea {
  /* 複数行のテキストフィールドをラベルに揃える */
  vertical-align: top;

  /* テキスト入力に十分な空間を与える */
  height: 5em;
}

.button {
  /* ボタンを他のテキストフィールドと同じ場所に置く */
  padding-left: 90px; /* label 要素と同じサイズ */
}

button {
  /* このマージンは、ラベルとテキストフィールドの間のスペースと
     おおよそ同じスペースを表す */
  margin-left: .5em;
}
```

保存して再読み込みすると、フォームがよりきれいになりました。

> **Note:** Github の [first-form-styled.html](https://github.com/mdn/learning-area/blob/master/html/forms/your-first-HTML-form/first-form-styled.html) にあります([ライブ版も確認](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html))。

## データをウェブサーバーに送信する

最後の、またもっともややこしいであろう部分が、サーバー側でのフォームデータの扱いです。
{{HTMLElement("form")}} 要素は  [`action`](/ja/docs/Web/HTML/Attributes/action) 属性と [`method`](/ja/docs/Web/HTML/Attributes/method) 属性により、どこへどのようにデータを送信するかを定義できます。

フォームコントロールには [`name`](/ja/docs/Web/HTML/Attributes/name) をつけます。これらの名前はクライアント側とサーバー側の両側で重要です。ブラウザー側ではそれぞれのデータにどのような名前をつけるかを示すものであり、サーバー側では名前によってそれぞれのデータを扱うことができます。フォームデータは名前/値のペアとしてサーバーに送信されます。

データに名前をつけるために、各々のデータを集めるフォームウィジェットの `name` 属性を使用しなければなりません。ここでもフォームのコードで見てみましょう:

```html
<form action="/my-handling-form-page" method="post">
 <ul>
  <li>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </li>
  <li>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email" />
  </li>
  <li>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </li>

  ...
```

この例では、フォームはそれぞれ "`user_name`"、"`user_email`"、"`user_message`" と名付けられた 3 つのデータを送信します。これらのデータは URL "`/my-handling-form-page`" へ、[HTTP `POST`](/ja/docs/Web/HTTP/Methods/POST) メソッドで送信します。

サーバー側では URL "`/my-handling-form-page`" のスクリプトが、HTTP リクエストに埋め込まれた 3 つのキーおよび値のアイテムリストとしてデータを受け取ります。スクリプトがデータを処理する方法は、あなた次第です。各サーバーサイド言語 (PHP、Python、Ruby、Java、C# など) は、これらのデータを扱う仕組みを持っています。これは本ガイドで踏み込んでいく範囲を超えますが、詳しく知りたい場合は[フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)の記事に例を載せていますのでご覧ください。

## まとめ

おめでとうございます。初めてのウェブフォームが完成しました。こちらが最終結果のデモです。

{{ EmbedLiveSample('A_simple_form', '100%', '240', '', 'Learn/Forms/Your_first_form/Example') }}

これはほんの開始点です、しかし — さて、より深く見ていくときが来ました。ウェブフォームはここで見てきたものよりさらに強力であり、ガイドの他の記事で残りの部分を習得できます。

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

## このモジュール内

- [初めてのフォーム](/ja/docs/Learn/Forms/Your_first_form)
- [フォームの構築方法](/ja/docs/Learn/Forms/How_to_structure_a_web_form)
- [基本的なネイティブフォームコントロール](/ja/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 入力型](/ja/docs/Learn/Forms/HTML5_input_types)
- [その他のフォームコントロール](/ja/docs/Learn/Forms/Other_form_controls)
- [フォームへのスタイル設定](/ja/docs/Learn/Forms/Styling_web_forms)
- [フォームへの高度なスタイル設定](/ja/docs/Learn/Forms/Advanced_form_styling)
- [UI 擬似クラス](/ja/docs/Learn/Forms/UI_pseudo-classes)
- [フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
- [フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)

### 上級トピック

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn/Forms/How_to_build_custom_form_controls)
- [JavaScript によるフォームの送信](/ja/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [フォームウィジェット向けプロパティ実装状況一覧](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
