---
title: クライアント側のフォーム検証
slug: Learn/Forms/Form_validation
l10n:
  sourceCommit: af0e71822122feda89495ab9215c131bbe34d65c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

データをサーバーへ送信する前に、必須のフォームコントロールが記入され、すべてのフォームコントロールが正しい書式で記入されていることを保証することが重要です。
この**クライアント側フォーム検証** (client-side form validation) は、送信されるデータが様々なフォームコントロールで指定されている要件を満たしていることを保証します。
この記事では、クライアント側フォーム検証の基本概念と例を紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        コンピューターリテラシー、適度な
        <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript</a> の理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        フォーム検証とは何か、なぜ重要なのか、どのように実装するのかを理解すること。
      </td>
    </tr>
  </tbody>
</table>

クライアント側の検証は最初のチェックであり、ユーザーの使い勝手を良くするために重要な機能ですクライアント側で不当なデータを捕捉することで、ユーザーはすぐに修正できます。
もしも無効なデータがサーバーに送られてから拒否された場合、サーバーへの往復とクライアント側に戻ってユーザーにデータを修正するように指示することになり、かなり時間を浪費します。

しかし、クライアント側の検証はセキュリティ対策*とは考えられません*。アプリは常に*サーバー側でも*クライアント側と**同様に**送信されたデータのセキュリティをチェックしてください。なぜならクライアント側の検証は容易に回避することができて、悪意のユーザーは簡単に、サーバーへ不正なデータを送信できます。
何が起こり得るかは [ウェブサイトセキュリティ](/ja/docs/Learn/Server-side/First_steps/Website_security)を見てください。サーバー側の検証はこのガイドの範囲を超えますが、覚えておいてください。

## フォーム検証とは何か

有名なサイトの登録フォームに行き、データを求められている書式で入力しないと、フィードバックがあることに気づくでしょう。
次のようなメッセージが表示されます。

- 「このフィールドは必須です」（このフィールドが空欄にできない場合）
- 「電話番号は XXX-XXXX の形式で入力してください」（あるデータフォーマットが必須の場合）
- 「有効なメールアドレスを入力してください」（入力データが適切なフォーマットではない場合）
- 「パスワードは 8 文字から 30 文字の間で、1 文字以上の大文字、記号、数字を含む必要があります。」（特に詳しいデータフォーマットが必要な場合）

これは**フォーム検証**と呼ばれます。
データを入力したとき、ブラウザー、またはウェブアプリケーションは、そのデータが正しい書式であり、アプリケーションに設定された制約に合っているかをチェックします。ブラウザーで行われる検証は**クライアント側**の検証と、サーバー側で行われるものは**サーバー側**の検証と呼ばれます。
この章では、クライアント側の検証に集中します。

情報が正しく書式化されていれば、アプリケーションはデータをサーバーに送信し、（通常は）データベースに保存することができます。情報が正しく書式化されていない場合は、修正すべき点を説明するエラーメッセージを表示して、ユーザーに再試行を促します。

私たちはできるだけ簡単にフォームを埋めてもらいたいわけですが、なぜフォームを検証する必要があるのでしょうか？理由は主に 3 つあります。

- **正しいデータを正しい書式で入力してほしい。** ユーザーのデータが誤った形式で格納されたり、ユーザーが正しい情報を入力しなかったり、省略したりすると、アプリケーションが正しく動作しないからです。
- **ユーザーのデータを保護したい。** ユーザーに安全なパスワードを入力させることで、アカウント情報を保護しやすくなります。
- **自分たちを守りたい。** 悪意のあるユーザーが保護のないフォームを悪用して、そのフォームを一部に持つアプリケーションに危害を加える方法がたくさんあります。[ウェブサイトセキュリティ](/ja/docs/Learn/Server-side/First_steps/Website_security)を参照してください。

  > **警告:** クライアントからサーバーに渡されたデータを信用しないでください。フォームが正しく検証を行い、クライアント側で悪意のある入力を防いでいるとしても、悪意のあるユーザーはネットワークリクエストを改ざんすることができます。

## 様々な種類のフォーム検証

ウェブで見かけるクライアント側のフォーム検証には 2 つの種類があります。

- **組み込みフォーム検証** は、このモジュールを通して多くの場所で説明してきた、 HTML フォーム検証の機能を使用します。
  この検証は一般に、あまり JavaScript を必要としません。組み込みのフォーム検証は JavaScript よりもパフォーマンスがよいのですが、 JavaScript の検証ほどにはカスタマイズできません。
- **JavaScript** 検証は JavaScript を使ってコーディングされるものです。
  これは完全にカスタマイズ可能ですが、すべて作成する（かライブラリーを使う）必要があります。

## 組み込みフォーム検証の利用

[最新のフォームコントロール](/ja/docs/Learn/Forms/HTML5_input_types)の機能の一つに、 JavaScript に頼らない多くのユーザーデータの検証があります。
これはフォーム要素の検証の属性を使って行います。
これまで多くを見てきましたが、まとめ直すと次のようになります。

- [`required`](/ja/docs/Web/HTML/Attributes/required): フォームを送信する前に、フォームフィールドに入力する必要があるかどうかを指定します。
- [`minlength`](/ja/docs/Web/HTML/Attributes/minlength) と [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength): テキストデータ（文字列）の最小・最大長を指定します。
- [`min`](/ja/docs/Web/HTML/Attributes/min) と [`max`](/ja/docs/Web/HTML/Attributes/max): 数値入力型の最小値、最大値を指定します。
- [`type`](/ja/docs/Web/HTML/Element/input#input_の型): データを数字にするか、メールアドレスにするか、その他のプリセットされた特定の型にするかを指定します。
- [`pattern`](/ja/docs/Web/HTML/Attributes/pattern): データが指定された[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)に一致するかどうかを指定します。

入力データをこの指定されたルールに基いて検証します。検証にパスすれば妥当で検証にパスしなければ妥当ではないと考えます。

要素が妥当な場合は、次のようになります。

- 要素が CSS の {{cssxref(":valid")}} 擬似クラスに一致します。これにより、妥当な要素に特定のスタイルを適用することができます。
- ユーザーがデータを送信しようとすると、ブラウザーは止めるもの（JavaScript など）が他になければ、フォームを送信します。

要素が不正なときは、次のようになります。

- 要素が CSS の {{cssxref(":invalid")}} 擬似クラスに一致し、エラーによっては他の UI 擬似クラス（{{cssxref(":out-of-range")}} など）に一致することもあります。これにより、不正な要素に特定のスタイルを適用することができます。
- ユーザーがデータを送信しようとすると、ブラウザーはフォームをブロックしてエラーメッセージを表示します。

> **メモ:** サーバーへの送信を中断するエラーがいくつかあります。 {{domxref('validityState.badInput', 'badInput')}}、{{domxref('validityState.patternMismatch','patternMismatch')}}、{{domxref('validityState.rangeOverflow','rangeOverflow')}} または{{domxref('validityState.rangeUnderflow','rangeUnderflow')}}、{{domxref('validityState.stepMismatch','stepMismatch')}}、{{domxref('validityState.tooLong','tooLong')}} または{{domxref('validityState.tooShort','tooShort')}}、{{domxref('validityState.typeMismatch','typeMismatch')}}、{{domxref('validityState.valueMissing','valueMissing')}}、または {{domxref('validityState.customError','customError')}} が含まれます。

## 入力要素の制約の検証

この節では、これまで述べてきたいくつかの属性をテストします。

### 簡単な最初のファイル

簡単な例から始めましょう。― 好きな果物を banana （バナナ）か cherry （サクランボ）から選べる入力欄があるとします。単純なテキストの {{HTMLElement("input")}} とそれに合わせたラベル、送信の {{htmlelement("button")}} から成ります。ソースコードは GitHub の [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) で、ライブサンプルは次の通りです。

```html
<form>
  <label for="choose">banana と cherry のどちらが好き?</label>
  <input id="choose" name="i-like" />
  <button>Submit</button>
</form>
```

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Simple_start_file", "100%", 80)}}

始めるにあたって、ハードディスク内の新しいディレクトリーに `fruit-start.html` のコピーを作成してください。

### required 属性

最も単純な HTML の検証機能が [`required`](/ja/docs/Web/HTML/Attributes/required) 属性です。
入力欄を必須にしたい場合は、この属性を要素に追加してください。
この属性が設定されていると、この要素が {{cssxref(':required')}} UI 擬似クラスに一致するようになり、入力欄が空であった場合にフォームが送信されずにエラーメッセージが表示されるようになります。
空のままでは、この入力は不正とみなされ、{{cssxref(':invalid')}} UI 擬似クラスに一致します。

以下のように、 `required` 属性を入力欄に追加しましょう。

```html
<form>
  <label for="choose">banana と cherry のどちらが好き? (必須)</label>
  <input id="choose" name="i-like" required />
  <button>送信</button>
</form>
```

このサンプルファイルの中に含まれている CSS も書いておきましょう。

```css
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```

この CSS によって、入力が妥当でない場合には、入力を赤の破線で境界線を描きますが、入力が妥当な場合には、黒の直線で境界線を描きます。
要求された値があり、値が妥当でないときは背景にグラデーションを追加します。つぎの例の動作を確認しましょう。

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

> **メモ:** この例は GitHub の [fruit-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) で見ることができます（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html)も見てください）。

値のないままフォームを送信してみましょう。妥当ではない入力がどのようにフォーカスされるか注意しましょう。デフォルトのエラーメッセージ（「このフィールドは入力必須です。」）が表示され、フォームの送信を抑止します。

`required` 属性に対応している要素にこの属性がある場合、その要素に値があるかないかによって、要素が {{cssxref(':required')}} 擬似クラスに一致するかどうかが決まります。もし {{HTMLElement("input")}} に値がなければ、`input` は{{cssxref(':invalid')}} 擬似クラスに一致します。

> **メモ:** 使い勝手を良くするために、フォームのフィールドが必要なときにはユーザーに通知しましょう。
> これは使い勝手だけに良いというわけではなく、WCAG [アクセシビリティ](/ja/docs/Learn/Accessibility) ガイドラインで求められています。
> また、本当に必要とする場合にのみ必須にしましょう。例えば誰かの性別や肩書などの情報は本当に必要でしょうか？

### 正規表現での検証

もう一つとてもよく使われる機能は [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性で、値として[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)を取ります。
正規表現 (regexp) はテキスト文字列の中の文字の組み合わせに一致させるために使うことができるため、フォームの検証には理想的であり、JavaScript と同様に様々な利用ができます。

正規表現はかなり複雑です。このモジュールでは正規表現のすべてを説明する意図はありません。
いくつかの例を挙げますのでどのように動作するか基本的な考えを把握してください。

- `a` — `a` の 1 文字に一致する (`b` や `aa` などではない)。
- `abc` — `a` と、その次の `b` と、その次の `c` の並びに一致する。
- `ab?c` — `a` と、その次にひとつだけ `b` があるかないかと、その次の `c` の並びに一致する ( `ac` または `abc`)
- `ab*c` — `a` と、その次に任意の数の `b` が続き、その次に `c` のある並びに一致する。( `ac`, `abc`, `abbbbbc`, 等)
- `a|b` — 一文字の `a` または `b` に一致する
- `abc|xyz` — `abc` の並びまたは `xyz` の並びに一致する。これは `abcxyz` や `a` や `y` などには一致しない。

正規表現には多くの組合せがあるので例はここまでとします。完全な一覧や多くの例は、[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)のドキュメントを参照してください。

使用例を実装しましょう。HTML を更新して [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性を追加しましょう。

```html
<form>
  <label for="choose">banana と cherry のどちらが好き?</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

これは下記の更新があります。次のものを使ってみてください。

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

> **メモ:** GitHub の [fruit-pattern.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) でライブ例を見ることができます（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html)も見てください）。

この例では、{{HTMLElement("input")}} 要素は "banana"、"Banana"、"cherry"、"Cherry" という 4 つの文字列値のうち 1 つを受け付けます。正規表現は大文字小文字を区別しますが、中括弧にはさまれた "Aa" のパターンを使って小文字と同様に先頭が大文字のバージョンをサポートします。

この時点で、[`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性の中の値を以前に見たいくつかの例と同じ値に変更してみて、入力欄が有効になるように入力する値がどのように影響するかを確認してください。
自分で考えた値も書いてみて、どのようになるか確認しましょう。
果物に関する値を可能にすれば、例が分かりやすくなります。

もし {{HTMLElement("input")}} の空ではない値が正規表現パターンに一致しなかった場合、この `input` は {{cssxref(':invalid')}} 擬似クラスに一致します。

> **メモ:** {{HTMLElement("input")}} 要素の型によっては、検証のために [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性が必要ないことがあります。例えば `email` 型を指定すると、入力された文字列を、妥当な形式のメールアドレスまたは、 [`multiple`](/ja/docs/Web/HTML/Attributes/multiple) 属性がある場合はカンマで区切られたメールアドレスのリストであることを確認する正規表現で検証します。

> **メモ:** {{HTMLElement("textarea")}} 要素は [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性に対応していません。

### 入力欄の長さの制約

{{HTMLElement("input")}} または {{HTMLElement("textarea")}} によって作成してすべてのテキストフィールドで文字数を制限したいときには [`minlength`](/ja/docs/Web/HTML/Attributes/minlength) 属性と [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength) 属性が使用できます。
フィールドが値をもっており、その文字数が [`minlength`](/ja/docs/Web/HTML/Attributes/minlength) の値より少ないか、文字数が [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength) の値より大きい場合は、フィールドは不正です。

ブラウザーはよくテキストフィールドに期待している以上に入力させないことがあります。単に `maxlength` を使うよりも良いユーザーエクスペリエンスは、入力文字数のフィードバックを提供してサイズ以下でコンテンツを編集できるようにもしておくことです。
例えば、Twitter の文字入力の制限があります。これは JavaScript と [`maxlength` を使った解決策](https://github.com/mimo84/bootstrap-maxlength)の組み合わせ実現できます。

### 入力欄の値に制約を加える

数値のフィールド (例えば [`<input type="number">`](/ja/docs/Web/HTML/Element/input/number)) の場合、[`min`](/ja/docs/Web/HTML/Attributes/min) 属性と [`max`](/ja/docs/Web/HTML/Attributes/max) 属性によって入力に制限を加えられます。
もしそのフィールドの値がこの範囲を超える場合、そのフィールドは妥当ではありません。

他の例を見てみましょう。[fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) ファイルの新しいコピーを作成してください。

では、`<body>` 要素の中身を削除して、以下のように置き換えてください。

```html
<form>
  <div>
    <label for="choose">banana と cherry のどちらが好き?</label>
    <input
      type="text"
      id="choose"
      name="i-like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">どのくらい要りますか?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- ここで、`text` フィールドには `minlength` 属性と `maxlength` 属性には 6 を指定しています。これは banana (バナナ) や cherry (さくらんぼ) の文字数と同じです。
- またここでは、`number` フィールドに `min` 属性で 1 を `max` 属性で 10 を指定しました。
  この範囲外の数字の入力は妥当ではないと表示されます。ユーザーは矢印を使ってこの範囲外の値に増減できませんが、ユーザーが数字を手入力した場合はデータは不正となります。
  この数字は必須ではないので、値を除去すると妥当になります。

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

例をライブで実行してみましょう。

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

> **メモ:** GitHub の [fruit-length.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) でライブサンプルを見ることができます（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html)も見てください）

> **メモ:** `<input type="number">` （および、 `range` や `date` のような他の型）は [`step`](/ja/docs/Web/HTML/Attributes/step) 属性を取ることもでき、入力コントロール（数値の増加・減少ボタンなど）を使用するときに上げ下げすることができる値の刻みを設定することができます。上の例では `step` 属性を入れていませんので、既定値の `1` となります。つまり 3.2 のような浮動小数でも、不正になります。

### サンプル全体

HTML の内蔵検証機能の使い方を示す例の全体を示します。まずは HTML から:

```html
<form>
  <p>
    <fieldset>
      <legend>Do you have a driver's license?<span aria-label="required">*</span></legend>
      <!-- While only one radio button in a same-named group can be selected at a time,
           and therefore only one radio button in a same-named group having the "required"
           attribute suffices in making a selection a requirement -->
      <input type="radio" required name="driver" id="r1" value="yes"><label for="r1">Yes</label>
      <input type="radio" required name="driver" id="r2" value="no"><label for="r2">No</label>
    </fieldset>
  </p>
  <p>
    <label for="n1">How old are you?</label>
    <!-- pattern 属性は number 型の入力欄を実装していないものの、pattern
         属性には対応しているブラウザー向けの代替策として動作できます。
         なお、pattern 属性に対応しているブラウザーでは、number 型の入力欄
         で使用すると暗黙に失敗します。
         ここでは代替策としての使い方のみです。-->
    <input type="number" min="12" max="120" step="1" id="n1" name="age"
           pattern="\d+">
  </p>
  <p>
    <label for="t1">What's your favorite fruit?<span aria-label="required">*</span></label>
    <input type="text" id="t1" name="fruit" list="l1" required
           pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range">
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your email address?</label>
    <input type="email" id="t2" name="email">
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

この HTML をスタイル設定する CSS は:

```css
form {
  font: 1em sans-serif;
  max-width: 320px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  width: 100%;
  border: 1px solid #333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

これで次のようにレンダリングされます。

{{EmbedLiveSample("Full_example", "100%", 420)}}

入力値と、それをサポートする入力型の制約に使える属性の完全なリストは、[検証関連属性](/ja/docs/Web/HTML/Constraint_validation#検証関連属性)を見てください。

> **メモ:** GitHub の [fruit-length.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) でライブサンプルを見ることができます([ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html)も見てください)

## JavaScript を使用したフォーム検証

内蔵のエラーメッセージの見かけを制御したい場合は、JavaScript を使用する必要があります。
この節では、このようにするさまざまな方法を見ていきます。

### 制約検証 API

多くのブラウザーが制約検証 API に対応しています。以下のフォーム要素 DOM インターフェイスで利用できるメソッドとプロパティのセットで構成されています。

- [`HTMLButtonElement`](/ja/docs/Web/API/HTMLButtonElement) ([`<button>`](/ja/docs/Web/HTML/Element/button) 要素を表現)
- [`HTMLFieldSetElement`](/ja/docs/Web/API/HTMLFieldSetElement) ([`<fieldset>`](/ja/docs/Web/HTML/Element/fieldset) 要素を表現)
- [`HTMLInputElement`](/ja/docs/Web/API/HTMLInputElement) ( [`<input>`](/ja/docs/Web/HTML/Element/input) 要素を表現)
- [`HTMLOutputElement`](/ja/docs/Web/API/HTMLOutputElement) ([`<output>`](/ja/docs/Web/HTML/Element/output) 要素を表現)
- [`HTMLSelectElement`](/ja/docs/Web/API/HTMLSelectElement) ([`<select>`](/ja/docs/Web/HTML/Element/select) 要素を表現)
- [`HTMLTextAreaElement`](/ja/docs/Web/API/HTMLTextAreaElement) ([`<textarea>`](/ja/docs/Web/HTML/Element/textarea) 要素を表現)

制約検証 API には、上記の要素で利用できる、次のプロパティがあります。

- `validationMessage`: コントロールが満たさない検証制約を記述したローカライズされたメッセージを返します（存在する場合）。コントロールが制約検証の候補でない場合（`willValidate`が `false`）、または要素の値が制約を満たしている場合（有効である場合）には、空の文字列を返します。
- `validity`: 要素の検証状態を説明する `ValidityState` オブジェクトです。取りうる検証状態の詳細は {{domxref("ValidityState")}}のリファレンスを参照してください。下記はよく使われるものを少し、一覧にしています。

  - {{domxref("ValidityState.patternMismatch", "patternMismatch")}}: 値が指定した [`pattern`](/ja/docs/Web/HTML/Element/input#pattern) に一致しない場合 `true` を、一致する場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.tooLong", "tooLong")}}: [`maxlength`](/ja/docs/Web/HTML/Element/input#maxlength) 属性で指定した最大値より値が長い場合 `true` を、同じ長さ以下の場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.tooShort", "tooShort")}}: [`minlength`](/ja/docs/Web/HTML/Element/input#minlength) 属性で指定した最小値より値が短い場合 `true` を、同じ長さ以上の場合`false` を返す。true なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}}: [`max`](/ja/docs/Web/HTML/Element/input#max) 属性で指定し最大値より値が大きい場合`true` を、同じ大きさ以下の場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} と {{cssxref(":out-of-range")}}CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}}: [`min`](/ja/docs/Web/HTML/Element/input#min) 属性で指定し最小値より値が小さい場合`true` を、同じ大きさ以上の場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} と {{cssxref(":out-of-range")}}CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.typeMismatch", "typeMismatch")}}: 値が要求する構文でない場合 [`type`](/ja/docs/Web/HTML/Element/input#type) が `email` か `url` のとき)は `true` を、文法が正しい場合は `false` を返す。`true` なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - `valid`: 要素が検証制約をすべて満たす、ゆえに妥当とみなされる場合`true` を、いずれかの制約を満たさない場合 `false` を返す。true なら、要素は {{cssxref(":valid")}} CSS 擬似クラスに一致する。そうでない場合は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - `valueMissing`: 要素に [`required`](/ja/docs/Web/HTML/Element/input#required) 属性があって値がない場合は `true` を、そうでない場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。

- `willValidate`: フォームが送信されるときに要素が検証される場合に `true` を返します。そうでない場合は `false` を返します。

また、制約検証 API では、上記の要素や [`form`](/ja/docs/Web/HTML/Element/form) 要素に対して、以下のメソッドを利用することが可能です。

- `checkValidity()`: 要素の値で妥当性の問題がない場合に `true` を返します。そうでない場合は `false` を返します。要素が不正である場合、このメソッドは要素で [`invalid` イベント](/ja/docs/Web/API/HTMLInputElement/invalid_event)を発生させます。
- `reportValidity()`: イベントを使用して、無効なフィールドを報告します。このメソッドは `onSubmit` イベントハンドラーでは `preventDefault()` と組み合わせて使用すると有益です。
- `setCustomValidity(message)`: 要素に独自のエラーメッセージを追加します。独自のエラーメッセージを設定すると、要素が不正であるとみなされる場合に指定したエラーが表示されます。これにより JavaScript で、標準の HTML 制約検証 API で提供されるもの以外の検証不合格状態を作り出すことができます。ユーザーに問題を報告する際に、メッセージが表示されます。

#### 独自のエラーメッセージを実装する

上記の HTML の検証制約の例で見てきたように、ユーザーが不正なフォームを送信しようとするたびにブラウザーはエラーメッセージを表示します。このメッセージを表示する方法は、ブラウザーにより異なります。

これらの自動のメッセージには、2 つの欠点があります。

- CSS でメッセージの表示方法を変更するための標準的な方法がありません。
- メッセージはブラウザーのロケールに依存しており、ある言語のページでエラーメッセージが別の言語で表示されることがあります。これは下記の Firefox スクリーンショットで見ることができます。

![Example of an error message with Firefox in French on an English page](error-firefox-win7.png)

これらのメッセージの外見やテキストを変更するには、制約検証 API の最も一般的なユースケースです。この使用法を例で詳しく見てみましょう。

いくつかの簡単な HTML で開始します (空の HTML ファイルにこれを入力します; もしよければ、[fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) を基礎としてもいいでしょう):

```html
<form>
  <label for="mail">メールアドレスを教えてください:</label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

このページに次の JavaScript を追加します。

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("メールアドレスを入力してください。");
  } else {
    email.setCustomValidity("");
  }
});
```

ここでメールアドレス入力への参照を保管して、入力値が変更されるたびに制約コードが走るためのイベントリスナーを追加します。

このコードの中で、 email 入力欄の `validity.typeMismatch` プロパティが `true` を返しているかどうか、つまり、含まれる値が正規の email アドレスのパターンに一致しないことをチェックしています。その場合、{{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}メソッドをカスタムメッセージとともに呼び出します。これにより、入力が無効となるため、フォームを送信しようとすると、送信に失敗し、カスタムエラーメッセージが表示されます。

`validity.typeMismatch` が `false`の場合、空文字で `setCustomValidity()` メソッドを呼び出します。これは入力が妥当となり、フォームが送信されます。

次のもので試すことができます。

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 80)}}

> **メモ:** この例は GitHub の [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) で見ることができます （[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html)も見てください）。

#### より詳細な例

これまでほんとうに簡単な例を見てきましたので、少し複雑な独自の検証を作成するために API を使用する方法を見ていきましょう。

始めに、HTML です。また、次のものに沿ってみてください。

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>メールアドレスを入力してください。</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

この簡単なフォームでは、ブラウザーの自動検証を無効にするために [`novalidate`](/ja/docs/Web/HTML/Element/form#novalidate) 属性を使用しています。これで、検証を制御するためにスクリプトを使用できます。ただし、これは制約検証 API の対応や CSS の擬似クラス {{cssxref(":valid")}}, {{cssxref(":invalid")}}, {{cssxref(":in-range")}}, {{cssxref(":out-of-range")}} の適用を無効にするわけではありません。つまり、データを送信する前にブラウザーが自動的なフォームの妥当性確認を行わないとしても、あなた自身で確認を行って、フォームの状態に応じたスタイル設定ができます。

検証する入力は [`<input type="email">`](/ja/docs/Web/HTML/Element/input/email)で、これは `required` (入力必須) で、8 文字の `minlength` があります。これをわれわれのコードで確認して、それぞれカスタムエラーメッセージを表示させてみましょう。

`<span>` 要素の中にエラーメッセージを表示させようとしています。 `<span>`にセットされた [`aria-live`](/ja/docs/Accessibility/ARIA/ARIA_Live_Regions) 属性は、画面リーダーのような支援技術を使用している人々を含む皆に、独自のエラーメッセージを提示するようにします。

> **メモ:** ここでの要点は、フォームに `novalidate` 属性をつけると、フォームがエラーメッセージのバブルを表示するのを停止して、その代わり DOM 内にカスタムエラーメッセージを選択した方法で表示させられることです。

この CSS はフォームの見栄えを少し良くして、入力データが無効なときの見た目のフィードバックを提供します。

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* これは不正なフィールド向けのスタイルです */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* これはエラーメッセージ向けのスタイルです */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

以下の JavaScript コードは独自のエラー検証を制御します。

```js
// DOM ノードの選択法はたくさんあります。ここではフォーム自体、メールアドレス
// 入力ボックス、そしてエラーメッセージを配置する span 要素を取得しています。
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // ユーザーが何かを入力するたびに、メールアドレスのフィールドが妥当かを
  // 確認します。

  if (email.validity.valid) {
    // エラーメッセージを表示している場合に、フィールドが妥当になれば
    // エラーメッセージを取り除きます。
    emailError.textContent = ""; // メッセージの内容物をリセットします
    emailError.className = "error"; // メッセージの表示状態をリセットします
  } else {
    // それでもエラーが発生する場合は、正しいエラーを表示します。
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // ユーザーがデータを送信しようとするたびに、メールアドレスの
  // フィールドが妥当かをチェックします。
  if (!email.validity.valid) {
    // フィールドが妥当ではない場合、独自のエラーメッセージを表示します。
    showError();
    // また、イベントをキャンセルしてフォームの送信を止めます。
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}
```

コメントがよく説明していますが、簡単にいうと次の通りです。

- 入力値を変えるたびに、それが妥当なデータを含んでいるかをチェックします。
  その場合は表示されたエラーメッセージを削除します。
  データが不正の場合は、適当なエラーを表示する `showError()` を実行します。
- フォームの送信を試すごとに、またデータが妥当かチェックします。
  その場合はフォームの送信を許可します。そうでない場合、適当なエラーを表示する `showError()` を実行し、[`preventDefault()`](/ja/docs/Web/API/Event/preventDefault)でフォーム送信を停止します。
- `showError()` 関数は、入力の `validity` オブジェクトのさまざまなプロパティを使ってエラーがどれかを決めて、適当なエラーメッセージを表示します。

こちらが実際の結果です。

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

> **メモ:** GitHub の [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) に例があります（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html)見てください）。

制約検証 API はフォーム検証を制御するための強力なツールであり、HTML および CSS のみで検証を行うよりもはるかにユーザーインターフェイスをコントロールできます。

### 組み込み API を使用しないフォーム検証

古いブラウザーや[カスタムコントロール](/ja/docs/Learn/Forms/How_to_build_custom_form_controls)において、制約検証 API を使用できない （または使用したくない）ことがあるでしょう。このような場合でも、フォームを検証するために JavaScript が使用できます。フォームを検証には、実際のデータの検証よりもユーザーインターフェイスの疑問が多くなります。

フォームを検証するために、あなたはいくつかの疑問を考えなければなりません。

- どのような検証を実施するべきか
  - : どのようにデータを検証するかを決めなければなりません。文字列演算、型変換、正規表現など。これはあなた次第です。
- フォームが妥当でない場合に何をするべきか
  - : これは明らかにユーザーインターフェイスの問題です。フォームがどのように動作するかを決めなければなりません。どのような場合でもフォームのデータを送信しますか？
    エラー状態の入力欄を強調しますか？
    エラーメッセージを表示しますか？
- ユーザーが不正なデータを修正することをどのように支援できるか

  - : ユーザーの不満を軽減するためには、ユーザーに入力内容の修正を案内するために、できるだけ多くの役立つ情報を提供することがとても重要です。
    明確なエラーメッセージはもちろん、ユーザーが何を求められているか理解できるように前向きの提案をするべきです。
    フォーム検証のユーザーインターフェイスの要件について深く知りたいのであれば、ぜひ読むべきである有用な記事があります（英語）。

    - [Help users enter the right data in forms](https://web.dev/learn/forms/validation/)
    - [Validating input](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [How to Report Errors in Forms: 10 Design Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### 制約検証 API を使用しない例

これまでのことを説明するため、古いブラウザーでも動作するように前出のサンプルを作り直してみましょう。

ご覧の通り、 HTML はほとんど同じであり、HTML の検証機能を取り除いただけです。

```html
<form>
  <p>
    <label for="mail">
      <span>メールアドレスを入力してください。</span>
      <input type="text" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

同様に、 CSS も大きく変更する必要はありません。 {{cssxref(":invalid")}} 擬似クラスから実クラスへの変更と、属性セレクターの使用を避けただけです。

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input.mail {
  appearance: none;
  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* これは不正なフィールド向けのスタイルです */
input.invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
}

/* これはエラーメッセージ向けのスタイルです */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

JavaScript コードでは大きな変更があり、多くの面倒な作業が必要です。

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

// HTML5 仕様書より
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// ここから検証制約の再構築ができます。
// CSS の擬似クラスに頼ることはできないため、メールアドレスフィールドで
// valid/invalid クラスを明示的に設定しなければなりません。
window.addEventListener("load", () => {
  // ここで、フィールドが空かを確認しています (フィールドは必須入力ではありません)
  // 空でなければ、内容部が適切な電子メールアドレスかを確認します。
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// ユーザーがフィールドに入力したときに、何をするかを定義します。
email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// ユーザーがデータを送信しようとしたときに何をするかを定義します。
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});
```

結果は以下のようになります。

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 130)}}

ご覧の通り、自分でで検証システムを構築するのは大変なことではありません。難しいのはクロスプラットフォームで、かつ作成するであろうあらゆるフォームで使用できる汎用的なものにすることです。フォーム検証を行うために利用できる、[Validate.js](https://rickharrison.github.io/validate.js/) のような多くのライブラリーがあります。

## スキルをテストしましょう!

この記事の最後に到着しましたが、最も大事な情報を覚えていますか？ 次に進む前に、この情報を保持しているか検証するテストがあります — [スキルテスト: フォーム検証](/ja/docs/Learn/Forms/Test_your_skills:_Form_validation) を見てください。

## まとめ

クライアント側のフォーム検証は、カスタムスタイル設定やエラーメッセージには複雑な JavaScript を必要としませんが、ユーザーについては注意深く考えることが必要です。ユーザーが正しいデータを入力できるよう支援することを、常に忘れないでください。最後に、以下のことを必ず行ってください。

- 明確なエラーメッセージを表示してください。
- 入力形式については寛容になってください。
- どこでエラーが発生しているかを正確に示してください（特に大きなフォームで）。

フォームが正しく埋められたことをチェックしたら、送信することができます。次の[データ送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)でカバーします。

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

### 上級トピック

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn/Forms/How_to_build_custom_form_controls)
- [JavaScript によるフォームの送信](/ja/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [フォームコントロール向けの CSS プロパティの互換性一覧表](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
