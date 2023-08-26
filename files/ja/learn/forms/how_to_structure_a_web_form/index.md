---
title: フォームの構築方法
slug: Learn/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: 456818a08b697e125ddb765d8f18020bc80c9747
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

基本を押さえた上で、フォームの各パーツに構造と意味を提供している要素について、より詳しく見ていきましょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
         基本的なコンピューターリテラシーと、
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML の基本的な理解</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        HTML フォームを構造化して意味を与えて使いやすくアクセシブルにする方法を理解すること。
      </td>
    </tr>
  </tbody>
</table>

フォームは柔軟性があるため、[HTML](/ja/docs/Learn/HTML) で最も複雑な構造の 1 つとなっています。専用のフォーム要素と属性を使用して、あらゆる種類の基本フォームを作成できます。 HTML フォームを構築するときに正しい構造を使用すると、フォームの使用性や[アクセシビリティ](/ja/docs/Learn/Accessibility)を保証するのに役立ちます。

## \<form> 要素

{{HTMLElement("form")}} 要素はフォームを正式に定義するとともに、属性でフォームの動作を定義します。HTML フォームを作成しようとするたびに、この要素から始めて、すべてのコンテンツをその中に入れなければなりません。多くの支援技術やブラウザープラグインは {{HTMLElement("form")}} 要素を検出して、フォームを使いやすくするための特別なフックを実装しています。

前の記事ですでにこれを見ています。

> **警告:** フォームの中にフォームを入れ子にすることは厳格に禁じられています。これは予期せぬ動作を発生するおそれがあるので、悪い考えです。

{{HTMLElement("form")}} 要素の外部でもフォームウィジェットを使用できますが、そのフォームウィジェットは [`form`](/ja/docs/Web/HTML/Element/input#form) 属性を用いて関連付けなければ、どのフォームに対しても何も行わないことに注意してください。これは、フォーム内に包含されていないコントロールを明示的にフォームへ紐付けられるように導入されました。

それでは、フォームに入れ子になっている構造要素に移動してみましょう。

## \<fieldset> および \<legend> 要素

{{HTMLElement("fieldset")}} 要素は、スタイルや意味付けのために、同じ目的を持つウィジェットのグループの作成に便利です。 {{HTMLElement("fieldset")}} 要素にラベルを付与するには、 {{HTMLElement("legend")}} 要素を {{HTMLElement("fieldset")}} の開始タグの直下に入れることで実現できます。{{HTMLElement("legend")}} 要素は、{{HTMLElement("fieldset")}} 要素の目的を正式に説明します。

多くの支援技術は {{HTMLElement("legend")}} 要素を、対応する {{HTMLElement("fieldset")}} 要素内にある各ウィジェットのラベルの一部であるかのように扱うでしょう。例えば [Jaws](https://www.freedomscientific.com/products/software/jaws/) や [NVDA](https://www.nvaccess.org/) といったスクリーンリーダーは、各ウィジェットのラベルを読み上げる前に legend の内容を読み上げます。

以下に小さなサンプルを挙げます。

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

> **メモ:** この例は [fieldset-legend.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/fieldset-legend.html) で見ることができます([ライブ版も見てください](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html))。

この例では、スクリーンリーダーは最初のウィジェットを "Fruit juice size small"、2 番目を "Fruit juice size medium"、3 番目を "Fruit juice size large" と読み上げるでしょう。

この例での用途は、最も重要なものの 1 つです。一連のラジオボタンを有するたびに、それらを {{HTMLElement("fieldset")}} 要素の内部に入れ子にする必要があります。他にも用途があり、一般的に {{HTMLElement("fieldset")}} 要素はフォームを分割するために使用することもできます。長いフォームは複数のページにまたがるのが理想的ですが、フォームが長くなって単一のページに収めなければならない場合、異なるフィールドセット内に異なる関連するセクションを置くことでユーザビリティを向上させることができます。

支援技術に対する影響力が大きいため、 {{HTMLElement("fieldset")}} 要素はアクセシブルなフォームを構築するための重要な要素の 1 つです。しかし、それを乱用しないことはあなたの責任です。可能であれば、フォームを作成するたびに、[スクリーンリーダーがどのように解釈するかを聞いてみる](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#スクリーンリーダー)ようにしてください。変だと感じたら、フォームの構造を改善するようにしましょう。

## \<label> 要素

これまでの記事で見てきたように、{{HTMLElement("label")}} 要素は、HTML フォームウィジェットのラベルを定義する正式な方法です。これは、アクセシブルなフォームを作成したい場合にもっとも重要な要素です — 適切に実装された時は、スクリーンリーダーはフォーム要素のラベルと関連する指示を一緒に読み上げます。前の記事で見てきたこの例を見てみます:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

`<label>` と`<input>` とがそれぞれ `for` と `id` 属性により正し関連付けられると (label の `for` 属性は対応するウィジェットの `id` 属性を参照します)、スクリーンリーダーは "Name, edit text"のように読み上げます。

フォームコントロールとラベルを関連付けるもう 1 つの方法は、フォームコントロールを `<label>` の中でネストすることで、暗黙的に関連付けることです。

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

この場合でも `for` 属性を設定することがベストプラクティスと考えられています。これは、ラベルとウィジェットの暗黙的な関係を理解できない支援技術があるためです。

ラベルがなかったり、フォームコントロールが明示的/暗黙にラベルに関連付けられていない場合、スクリーンリーダーは全く役立たない "Edit text blank" のような読み上げを行います。

### ラベルもクリック可能です！

ラベルをセットアップするもう 1 つの利点は、ユーザーがラベルをクリックするとウィジェットをアクティブにすることが、あらゆるブラウザーで可能になります。これは例えば、テキスト入力で、入力と同様にラベルをクリックしてフォーカスさせることができますし、ラジオボタンやチェックボックスで特に有用です — このコントロールのヒットエリアはとても小さく、できるだけ大きくしておくのは便利です。

例えば、次の例で "I like cherry" の テキストをクリックすると選択された _taste_cherry_ チェックボックスの状態が切り替わります:

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
    <label for="taste_1">I like cherry</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
    <label for="taste_2">I like banana</label>
  </p>
</form>
```

> **メモ:** この例は [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) で見ることができます([ライブ版も見てください](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html))。

### 複数のラベル

厳密に言うと、1 つのウィジェット内に複数のラベルを入れることができますが、複数のラベルを持つウィジェットの扱いに問題がある支援技術があるかもしれません。複数のラベルがある場合、アクセシブルなフォームを作成するには 1 つの {{htmlelement("label")}} 要素内にウィジェットを入れ子にするとよいでしょう。

以下の例について考えてみましょう。

```html
<p>Required fields are followed by <span aria-label="required">*</span>.</p>

<!-- このようにします -->
<!--div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username">
  <label for="username"><span aria-label="required">*</abbr></label>
</div-->

<!-- より良い例です -->
<!--div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username">
    <span aria-label="required">*</span>
  </label>
</div-->

<!-- これが最も良いでしょう -->
<div>
  <label for="username">Name: <span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" />
</div>
```

{{EmbedLiveSample("Multiple_labels", 120, 120)}}

このサンプルでは、最初の段落で入力必須の要素の規則を定義しています。ユーザーが入力必須の要素を見つける前にスクリーンリーダーのような支援技術が注意事項を表示したり読み上げたりするためには、規則をはじめに置かなければなりません。これがユーザーにアスタリスクの意味を知らせても、それに依存することはできません。スクリーンリーダーはアスタリスクが出てくると "スター" と読み上げます。視力のあるユーザーがマウスを持ってくると、`title` 属性によって"必須"と表示されます。タイトルはスクリーンリーダーの設定により読み上げられるので、常にスクリーンリーダーに読み上げられる [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性を入れておくのがより信頼性が高いでしょう。

上記の違いをふまえると、以降を効率よく見ていけるでしょう。

- 最初の例では、 label 要素すべての入力が読み上げられません — "edit text blank" だけです。その上に実際のラベルは別々に読まれます。複数の `<label>` 要素はスクリーンリーダーを混乱させます。
- 2 つ目の例では、少し明確になります "name star name edit text required" というようにラベルが入力と一緒に読み上げられます。しかしラベルはまだ別々に読み上げられます。少し混乱しやすいですが、これは `<input>` と関連したラベルがあるためまだ良いでしょう。
- 3 つ目の例が最も良いです — 実際のラベルがすべて一緒に読み上げられ、 "name required edit text" のようにラベルと入力が一緒に読み上げられます。

> **メモ:** スクリーンリーダーによっては、少し異なる結果になる場合もあります。これは VoiceOver (と同様に動作する NVDA)でテストしています。あなたの体験を聞きたいです。

> **メモ:** この例は GitHub の [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) で見ることができます([ライブ版も見てください](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html))。2 や 3 のコメントを外したバージョンの例を実行しないでください — 複数の label と複数の同じ input ID があると、スクリーンリーダーは確実に混乱します!

## フォームで使用される一般的な HTML 構造

ウェブフォーム特有の構造の前提として、フォームは単に HTML であると覚えておくとよいでしょう。つまり、ウェブフォームを組み立てるために HTML のすべての力を利用できるのです。

サンプルでわかるように、ラベルとそのウィジェットを {{HTMLElement("ul")}} や {{HTMLElement("ol")}} リストの中の {{HTMLElement("li")}} 要素で包み込むのが一般的な慣習です。HTML リストにあるように、{{HTMLElement("p")}} 要素と {{HTMLElement("div")}} 要素も良く使われます。リストは複数のチェックボックスやラジオボタンを構造化するのに最もよく使われます。

{{HTMLElement("fieldset")}} 要素に加えて、複雑なフォームの構築に HTML の見出し (例{{htmlelement("h1")}}, {{htmlelement("h2")}}) やセクション (例 {{htmlelement("section")}}) を使うことも一般的です。

とりわけ、コーディングスタイルがどうあるのが心地よく、どれがアクセシブルで使いやすいフォームとなるのかを見つけるのはあなた次第です。別の機能セクションは別の {{htmlelement("section")}} 要素と、ラジオボタンを含む {{htmlelement("fieldset")}} にそれぞれ分けておくべきです。

### アクティブラーニング: フォーム構造を構築する

これらのアイデアを実践し、もう少し複雑なフォーム構造、つまり支払いフォームを作成しましょう。このフォームはあなたがまだ理解していないかもしれないウィジェットタイプをいくつも含みますが、今はそのことを心配しないでください。次の記事 ([基本的なネイティブフォームコントロール](/ja/docs/Learn/Forms/Basic_native_form_controls)) でそれらがどのように機能するのかがわかります。今のところ、以下の説明に沿って説明を注意深く読み、フォームを構成するためにどのラッパー要素を使用しているか、そしてその理由を理解することから始めてください。

1. あらかじめ、[空のテンプレートファイル](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)と[お支払いフォームの CSS](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.css) のローカルコピーをコンピューターの新しいディレクトリーに作成します。
2. まず最初に、HTML {{htmlelement("head")}} 内に次の行を追加して CSS を HTML に適用します。

   ```html
   <link href="payment-form.css" rel="stylesheet" />
   ```

3. 次に、外側の {{htmlelement("form")}} 要素を追加してフォームを作成します:

   ```html
   <form></form>
   ```

4. `<form>` タグ内に、必須フィールドにマークを付ける方法をユーザーに通知するための見出しと段落を追加します:

   ```html
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><abbr title="required">*</abbr></strong
     >.
   </p>
   ```

5. 次に、前のエントリーの下に、より大きなコードセクションをフォームに追加します。ここでは、連絡先情報フィールドを個別の {{htmlelement("section")}} 要素内にラップしていることがわかります。さらに、2 つのラジオボタンのセットがあり、それぞれ独自のリスト ({{htmlelement("li")}}) 要素の中に入れています。最後に、2 つの標準テキスト {{htmlelement("input")}} とそれに関連する {{htmlelement("label")}} 要素があり、それぞれ {{htmlelement("p")}} の内側に含まれていて、パスワードを入力するためのパスワード入力があります。フォームにこのコードを追加してください:

   ```html
   <section>
     <h2>Contact information</h2>
     <fieldset>
       <legend>Title</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="K" />
             King
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="Q" />
             Queen
           </label>
         </li>
         <li>
           <label for="title_3">
             <input type="radio" id="title_3" name="title" value="J" />
             Joker
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>Name: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="text" id="name" name="username" />
     </p>
     <p>
       <label for="mail">
         <span>E-mail: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="email" id="mail" name="usermail" />
     </p>
     <p>
       <label for="pwd">
         <span>Password: </span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="password" id="pwd" name="password" />
     </p>
   </section>
   ```

6. それでは、フォームの 2 番目の `<section>` — 支払い情報に目を向けます。ここには 3 つの異なるウィジェットとそのラベルがあり、それぞれ `<p>` の中に含まれています。1 つ目は、クレジットカードの種類を選択するためのドロップダウンメニュー ({{htmlelement("select")}}) です。2 番目は、クレジットカード番号を入力するための `tel` 型の `<input>` 要素です。`number` 型を使うこともできますが、そのスピナー UI は望ましくありません。最後のものは、カードの有効期限を入力するための `date` 型の `<input>` 要素です。これは、サポートしているブラウザーでは日付選択ウィジェットが表示され、サポートしていないブラウザーでは通常のテキスト入力に戻ります。新しい入力型は [HTML5 の入力型](/ja/docs/Learn/Forms/HTML5_input_types)で再度紹介します。

   前のセクションの下に次のように入力してください。

   ```html
   <section>
     <h2>Payment information</h2>
     <p>
       <label for="card">
         <span>Card type:</span>
       </label>
       <select id="card" name="usercard">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Card number:</span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="tel" id="number" name="cardnumber" />
     </p>
     <p>
       <label for="date">
         <span>Expiration date:</span>
         <strong><abbr title="required">*</abbr></strong>
         <em>formatted as mm/dd/yyyy</em>
       </label>
       <input type="date" id="date" name="expiration" />
     </p>
   </section>
   ```

7. 最後に追加するセクションはもっと単純で、フォームデータを送信するための `submit` タイプの {{htmlelement("button")}} のみを含みます。これをフォームの一番下に追加してください:

   ```html
   <p><button type="submit">Validate the payment</button></p>
   ```

完成したフォームは以下のように動作しています (GitHub でも確認できます。payment-form.html [ソース](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.html)を参照して[ライブ実行](https://mdn.github.io/learning-area/html/forms/html-form-structure/payment-form.html)してください)。

{{EmbedLiveSample("A_payment_form","100%",620, "", "Learn/Forms/How_to_structure_a_web_form/Example")}}

## あなたのスキルをテストしてみましょう!

この記事はここまでですが、最も重要な情報を覚えていますか？ 先に進む前に、この情報を保持しているかどうかを確認するためのテストがあります — [Test your skills: Form structure](/ja/docs/Learn/Forms/Test_your_skills:_Form_structure) を参照してください。

## まとめ

ウェブフォームを適切に構築するためのあらゆる知識を得ることができました。これからここで出てきた機能を見ていき、次の記事では、ユーザーから情報を集めるのに使いたくなるすべての種類のフォームウィジェットの詳細な実装について詳しく見ていきます。

## 関連情報

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}
