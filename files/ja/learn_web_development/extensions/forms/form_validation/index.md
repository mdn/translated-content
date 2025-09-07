---
title: クライアント側のフォーム検証
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: ddbd6488c73e8933fccc6632b5aea0dbed57914c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

データをサーバーへ送信する前に、必須のフォームコントロールが記入され、すべてのフォームコントロールが正しい書式で記入されていることを保証することが重要です。この**クライアント側フォーム検証** (client-side form validation) は、送信されるデータが様々なフォームコントロールで指定されている要件を満たしていることを保証します。

この記事では、クライアント側フォーム検証の基本概念と例を紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        コンピューターリテラシー、適度な
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、<a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a> の理解。
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

> [!NOTE]
> 何が起こり得るかは [ウェブサイトセキュリティ](/ja/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)を見てください。サーバー側の検証はこのガイドの範囲を超えますが、覚えておいてください。

## フォーム検証とは何か

有名なサイトの登録フォームに行き、データを求められている書式で入力しないと、フィードバックがあることに気づくでしょう。
次のようなメッセージが表示されます。

- 「このフィールドは必須です」（このフィールドが空欄にできない場合）
- 「電話番号は XXX-XXXX の形式で入力してください」（あるデータ形式が必須の場合）
- 「有効なメールアドレスを入力してください」（入力データが適切な形式ではない場合）
- 「パスワードは 8 文字から 30 文字の間で、1 文字以上の大文字、記号、数字を含む必要があります。」（特に詳しいデータ形式が必要な場合）

これは**フォーム検証**と呼ばれます。
データを入力したとき、ブラウザー、またはウェブアプリケーションは、そのデータが正しい書式であり、アプリケーションに設定された制約に合っているかをチェックします。ブラウザーで行われる検証は**クライアント側**の検証と、サーバー側で行われるものは**サーバー側**の検証と呼ばれます。
この章では、クライアント側の検証に集中します。

情報が正しく書式化されていれば、アプリケーションはデータをサーバーに送信し、（通常は）データベースに保存することができます。情報が正しく書式化されていない場合は、修正すべき点を説明するエラーメッセージを表示して、ユーザーに再試行を促します。

私たちはできるだけ簡単にフォームを埋めてもらいたいわけですが、なぜフォームを検証する必要があるのでしょうか？理由は主に 3 つあります。

- **正しいデータを正しい書式で入力してほしい。** ユーザーのデータが誤った形式で格納されたり、ユーザーが正しい情報を入力しなかったり、省略したりすると、アプリケーションが正しく動作しないからです。
- **ユーザーのデータを保護したい。** ユーザーに安全なパスワードを入力させることで、アカウント情報を保護しやすくなります。
- **自分たちを守りたい。** 悪意のあるユーザーが保護のないフォームを悪用して、そのフォームを一部に持つアプリケーションに危害を加える方法がたくさんあります。[ウェブサイトセキュリティ](/ja/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)を参照してください。

  > [!WARNING]
  > クライアントからサーバーに渡されたデータを信用しないでください。フォームが正しく検証を行い、クライアント側で悪意のある入力を防いでいるとしても、悪意のあるユーザーはネットワークリクエストを改ざんすることができます。

## 様々な種類のフォーム検証

ウェブで見かけるクライアント側のフォーム検証には 2 つの種類があります。

- **組み込みフォーム検証**
  HTML のフォーム属性で、どのフォームコントロールが必須であるか、また、ユーザー入力データが有効であるためにはどのような形式で入力されなければならないかを定義することができます。
- **JavaScript フォーム検証**
  JavaScript は一般的に、 HTML フォーム検証の強化やカスタマイズのために利用します。

クライアント側検証は、 JavaScript をほとんど、あるいはまったく使用せずに実行することができます。 HTML 検証は JavaScript よりも高速ですが、 JavaScript 検証よりもカスタマイズ性が低くなります。一般的に、フォームは堅牢な HTML 機能を使用して作成し、必要に応じて JavaScript で使い勝手を向上させることが推奨されます。

## 組み込みフォーム検証の利用

[最新のフォームコントロール](/ja/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)の機能の一つに、 JavaScript に頼らない多くのユーザーデータの検証があります。
これはフォーム要素の検証の属性を使って行います。
これまで多くを見てきましたが、まとめ直すと次のようになります。

- [`required`](/ja/docs/Web/HTML/Reference/Attributes/required): フォームを送信する前に、フォームフィールドに入力する必要があるかどうかを指定します。
- [`minlength`](/ja/docs/Web/HTML/Reference/Attributes/minlength) と [`maxlength`](/ja/docs/Web/HTML/Reference/Attributes/maxlength): テキストデータ（文字列）の最小・最大長を指定します。
- [`min`](/ja/docs/Web/HTML/Reference/Attributes/min)、[`max`](/ja/docs/Web/HTML/Reference/Attributes/max)、[`step`](/ja/docs/Web/HTML/Reference/Attributes/step): 数値入力型の最小値と最大値、および最小値から始まる値の増分（段階）を指定します。
- [`type`](/ja/docs/Web/HTML/Reference/Elements/input#input_の型): データを数字にするか、メールアドレスにするか、その他のプリセットされた特定の型にするかを指定します。
- [`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern): データが指定された[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)に一致するかどうかを指定します。

入力データをこの指定されたルールに基いて検証します。検証にパスすれば妥当で検証にパスしなければ妥当ではないと考えます。

要素が妥当な場合は、次のようになります。

- その要素は、 CSS の擬似クラス {{cssxref(":valid")}} に一致します。これにより、有効な要素に特定のスタイルを適用することができます。また、ユーザーがコントロールを操作した場合は、 {{cssxref(":user-valid")}} にも一致します。さらに、入力タイプや属性によっては、 {{cssxref(":in-range")}} などの他の UI 擬似クラスにも一致する可能性があります。
- ユーザーがデータを送信しようとした場合、送信を妨げるもの（JavaScript など）が何も指定されていない限り、ブラウザーはフォームを送信します。

要素が不正なときは、次のようになります。

- この要素は、CSS 擬似クラス {{cssxref(":invalid")}} に一致します。 ユーザーがコントロールを操作した場合は、 CSS 擬似クラス {{cssxref(":user-invalid")}} にも一致します。 その他の UI 擬似クラス、例えば {{cssxref(":out-of-range")}} などにも、エラー内容によっては一致する場合があります。 これらは、不正な要素に特定のスタイルを適用するために使用します。
- ユーザーがデータを送信しようとすると、ブラウザーがフォームの送信をブロックし、エラーメッセージを表示します。エラーメッセージはエラーの種類によって異なります。[制約検証 API](#制約検証_api) については下記で説明します。

## 入力要素の制約の検証

この節では、これまで述べてきたいくつかの属性をテストします。

### 簡単な最初のファイル

簡単な例から始めましょう。― 好きな果物を banana （バナナ）か cherry （サクランボ）から選べる入力欄があるとします。単純なテキストの {{HTMLElement("input")}} とそれに関連付けられた {{htmlelement("label")}}、送信の {{htmlelement("button")}} から成ります。

```html
<form>
  <label for="choose">banana と cherry のどちらが好き?</label>
  <input id="choose" name="i-like" />
  <button>送信</button>
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

始めるにあたって、ハードディスク内の新しいディレクトリーに [GitHub にある `fruit-start.html` ファイル](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)のコピーを作成してください。

### required 属性

最も単純な HTML の検証機能が [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) 属性です。
入力欄を必須にしたい場合は、この属性を要素に追加してください。
この属性が設定されていると、この要素が {{cssxref(':required')}} UI 擬似クラスに一致するようになり、入力欄が空であった場合にフォームが送信されずにエラーメッセージが表示されるようになります。
空のままでは、この入力は不正とみなされ、{{cssxref(':invalid')}} UI 擬似クラスに一致します。

同じ名前のグループ内のラジオボタンに `required` 属性が指定されている場合、グループを有効にするには、そのグループ内のラジオボタンのいずれかがチェックされている必要があります。チェックされたラジオは、属性を設定したものでなくてもかまいません。

> [!NOTE]
> ユーザーには必要なデータのみを入力させましょう。例えば、誰かの性別や役職を実際に知る必要があるでしょうか？

以下のように、 `required` 属性を入力欄に追加しましょう。

```html
<form>
  <label for="choose">banana と cherry のどちらが好き? (必須)</label>
  <input id="choose" name="i-like" required />
  <button>送信</button>
</form>
```

"(required)" を {{htmlelement("label")}} に追加し、ユーザーにその {{htmlelement("input")}} が必須であることを知らせます。フォーム要素が必須であることをユーザーに示すことは、良い使い勝手を得るためだけでなく、WCAG [アクセシビリティ](/ja/docs/Learn_web_development/Core/Accessibility)ガイドラインで求められていることでもあります。

要素が必須、有効、不正な場合に適用される CSS スタイルを加えます。

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

[ライブの `required` の例](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html)から値を入力せずにフォームを送信してみてください。 不正な入力がフォーカスされ、既定のエラーメッセージ（「このフィールドは入力必須です。」）が表示され、フォームが送信されないことを確認してください。 また、 [GitHub 上のソースコードを](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html)ご覧いただけます。

### 正規表現での検証

もう一つとてもよく使われる機能は [`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern) 属性で、値として[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)を取ります。
正規表現 (regexp) はテキスト文字列の中の文字の組み合わせに一致させるために使うことができるため、フォームの検証には理想的であり、JavaScript と同様に様々な利用ができます。

正規表現はかなり複雑です。このモジュールでは正規表現のすべてを説明する意図はありません。
いくつかの例を挙げますのでどのように動作するか基本的な考えを把握してください。

- `a` — `a` の 1 文字に一致する (`b` や `aa` などではない)。
- `abc` — `a` と、その次の `b` と、その次の `c` の並びに一致する。
- `ab?c` — `a` と、その次にひとつだけ `b` があるかないかと、その次の `c` の並びに一致する ( `ac` または `abc`)
- `ab*c` — `a` と、その次に任意の数の `b` が続き、その次に `c` のある並びに一致する。( `ac`, `abc`, `abbbbbc`, 等)
- `a|b` — 一文字の `a` または `b` に一致する
- `abc|xyz` — `abc` の並びまたは `xyz` の並びに一致する。これは `abcxyz` や `a` や `y` などには一致しない。

正規表現には多くの組合せがあるので例はここまでとします。完全な一覧や多くの例は、[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)のドキュメントを参照してください。

使用例を実装しましょう。 HTML を更新して [`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern) 属性を追加しましょう。

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

これは [GitHub 状のライブサンプル](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html)と、[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html)を見ることができます。

この例では、{{HTMLElement("input")}} 要素は "banana"、"Banana"、"cherry"、"Cherry" という 4 つの文字列値のうち 1 つを受け付けます。正規表現は大文字小文字を区別しますが、中括弧にはさまれた "Aa" のパターンを使って小文字と同様に先頭が大文字のバージョンをサポートします。

この時点で、[`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern) 属性の中の値を以前に見たいくつかの例と同じ値に変更してみて、入力欄が有効になるように入力する値がどのように影響するかを確認してください。
自分で考えた値も書いてみて、どのようになるか確認しましょう。
果物に関する値を可能にすれば、例が分かりやすくなります。

もし {{HTMLElement("input")}} の空ではない値が正規表現パターンに一致しなかった場合、この `input` は {{cssxref(':invalid')}} 擬似クラスに一致します。空欄で、その要素が必須でない場合、それは不正なものと見なされません。

{{HTMLElement("input")}} 要素の型によっては、検証のために [`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern) 属性が必要ないことがあります。例えば `email` 型を指定すると、入力された文字列を、妥当な形式のメールアドレスまたは、 [`multiple`](/ja/docs/Web/HTML/Reference/Attributes/multiple) 属性がある場合はカンマで区切られたメールアドレスのリストであることを確認する正規表現で検証します。

> [!NOTE]
> {{HTMLElement("textarea")}} 要素は [`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern) 属性に対応していません。

### 入力欄の長さの制約

{{HTMLElement("input")}} または {{HTMLElement("textarea")}} によって作成してすべてのテキストフィールドで文字数を制限したいときには [`minlength`](/ja/docs/Web/HTML/Reference/Attributes/minlength) 属性と [`maxlength`](/ja/docs/Web/HTML/Reference/Attributes/maxlength) 属性が使用できます。
フィールドが値をもっており、その文字数が [`minlength`](/ja/docs/Web/HTML/Reference/Attributes/minlength) の値より少ないか、文字数が [`maxlength`](/ja/docs/Web/HTML/Reference/Attributes/maxlength) の値より大きい場合は、フィールドは不正です。

ブラウザーはよくテキストフィールドに期待している以上に入力させないことがあります。単に `maxlength` を使うよりも良いユーザーエクスペリエンスは、入力文字数のフィードバックを提供してサイズ以下でコンテンツを編集できるようにもしておくことです。
この例のひとつが、ソーシャルメディアに投稿する際の文字数制限です。これは JavaScript と [`maxlength` を使った解決策](https://github.com/mimo84/bootstrap-maxlength)の組み合わせ実現できます。

> [!NOTE]
> 長さの制約は、値をプログラムで設定した場合は報告されません。ユーザーが指定した入力に対してのみ報告されます。

### 入力欄の値の制約

数値のフィールド (例えば [`<input type="number">`](/ja/docs/Web/HTML/Reference/Elements/input/number)) の場合、[`min`](/ja/docs/Web/HTML/Reference/Attributes/min) 属性と [`max`](/ja/docs/Web/HTML/Reference/Attributes/max) 属性によって入力に制限を加えられます。
もしそのフィールドの値がこの範囲を超える場合、そのフィールドは妥当ではありません。

他の例を見てみましょう。
[fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) ファイルの新しいコピーを作成してください。

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
  この範囲外の数値を入力すると、不正な数値として表示されます。また、増減する矢印を使用して、この範囲外に数値を移すことはできません。
  ユーザーがこの範囲外の数値を手動で入力した場合、そのデータは不正なものと見なされます。
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

これを [GitHub 上のライブサンプル](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html)で試してみて、[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html)を見てみましょう。

数値の入力型、例えば `range` や `date` などは [`step`](/ja/docs/Web/HTML/Reference/Attributes/step) 属性を取ることもでき、入力コントロール（数値の増加・減少ボタンなど）を使用するときに上げ下げすることができる値の増分を設定することができます。上の例では `step` 属性を入れていませんので、既定値の `1` となります。つまり 3.2 のような浮動小数点数でも不正になります。

### サンプル全体

HTML の内蔵検証機能の使い方を示す例の全体を示します。
まずは HTML から見てみましょう。

```html-nolint
<form>
  <fieldset>
    <legend>
      運転免許を持っていますか？<span aria-label="required">*</span>
    </legend>
    <input type="radio" required name="driver" id="r1" value="yes" /><label
      for="r1"
      >Yes</label
    >
    <input type="radio" required name="driver" id="r2" value="no" /><label
      for="r2"
      >No</label
    >
  </fieldset>
  <p>
    <label for="n1">何歳ですか？</label>
    <input type="number" min="12" max="120" step="1" id="n1" name="age" />
  </p>
  <p>
    <label for="t1"
      >好きな果物は何ですか？<span aria-label="required">*</span></label
    >
    <input
      type="text"
      id="t1"
      name="fruit"
      list="l1"
      required
      pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" />
    <datalist id="l1">
      <option>バナナ</option>
      <option>さくらんぼ</option>
      <option>りんご</option>
      <option>いちご</option>
      <option>レモン</option>
      <option>オレンジ</option>
    </datalist>
  </p>
  <p>
    <label for="t2">メールアドレスは何ですか？</label>
    <input type="email" id="t2" name="email" />
  </p>
  <p>
    <label for="t3">短いメッセージをどうぞ。</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>送信</button>
  </p>
</form>
```

この HTML をスタイル設定する CSS は次の通りです。

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

[GitHub 上の完全なライブサンプル](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html)と[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html)があります。

入力値と、それをサポートする入力型の制約に使える属性の完全なリストは、[検証関連属性](/ja/docs/Web/HTML/Guides/Constraint_validation#検証関連属性)を見てください。

## JavaScript を使用したフォーム検証

内蔵のエラーメッセージの見かけを制御したい場合は、JavaScript を使用する必要があります。
この節では、このようにするさまざまな方法を見ていきます。

### 制約検証 API

多くのブラウザーが制約検証 API に対応しています。以下のフォーム要素 DOM インターフェイスで利用できるメソッドとプロパティのセットで構成されています。

- [`HTMLButtonElement`](/ja/docs/Web/API/HTMLButtonElement) ([`<button>`](/ja/docs/Web/HTML/Reference/Elements/button) 要素を表現)
- [`HTMLFieldSetElement`](/ja/docs/Web/API/HTMLFieldSetElement) ([`<fieldset>`](/ja/docs/Web/HTML/Reference/Elements/fieldset) 要素を表現)
- [`HTMLInputElement`](/ja/docs/Web/API/HTMLInputElement) ( [`<input>`](/ja/docs/Web/HTML/Reference/Elements/input) 要素を表現)
- [`HTMLOutputElement`](/ja/docs/Web/API/HTMLOutputElement) ([`<output>`](/ja/docs/Web/HTML/Reference/Elements/output) 要素を表現)
- [`HTMLSelectElement`](/ja/docs/Web/API/HTMLSelectElement) ([`<select>`](/ja/docs/Web/HTML/Reference/Elements/select) 要素を表現)
- [`HTMLTextAreaElement`](/ja/docs/Web/API/HTMLTextAreaElement) ([`<textarea>`](/ja/docs/Web/HTML/Reference/Elements/textarea) 要素を表現)

制約検証 API には、上記の要素で利用できる、次のプロパティがあります。

- `validationMessage`: コントロールが満たさない検証制約を記述したローカライズされたメッセージを返します（存在する場合）。コントロールが制約検証の候補でない場合（`willValidate`が `false`）、または要素の値が制約を満たしている場合（有効である場合）には、空の文字列を返します。
- `validity`: 要素の検証状態を説明する `ValidityState` オブジェクトです。取りうる検証状態の詳細は {{domxref("ValidityState")}}のリファレンスを参照してください。下記はよく使われるものを少し、一覧にしています。
  - {{domxref("ValidityState.patternMismatch", "patternMismatch")}}: 値が指定した [`pattern`](/ja/docs/Web/HTML/Reference/Elements/input#pattern) に一致しない場合 `true` を、一致する場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.tooLong", "tooLong")}}: [`maxlength`](/ja/docs/Web/HTML/Reference/Elements/input#maxlength) 属性で指定した最大値より値が長い場合 `true` を、同じ長さ以下の場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.tooShort", "tooShort")}}: [`minlength`](/ja/docs/Web/HTML/Reference/Elements/input#minlength) 属性で指定した最小値より値が短い場合 `true` を、同じ長さ以上の場合`false` を返す。true なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}}: [`max`](/ja/docs/Web/HTML/Reference/Elements/input#max) 属性で指定し最大値より値が大きい場合`true` を、同じ大きさ以下の場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} と {{cssxref(":out-of-range")}}CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}}: [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) 属性で指定し最小値より値が小さい場合`true` を、同じ大きさ以上の場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} と {{cssxref(":out-of-range")}}CSS 擬似クラスに一致する。
  - {{domxref("ValidityState.typeMismatch", "typeMismatch")}}: 値が要求する構文でない場合（[`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) が `email` か `url` のとき）は `true` を、構文が正しい場合は `false` を返す。`true` なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - `valid`: 要素が検証制約をすべて満たす、ゆえに妥当とみなされる場合`true` を、いずれかの制約を満たさない場合 `false` を返す。true なら、要素は {{cssxref(":valid")}} CSS 擬似クラスに一致する。そうでない場合は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。
  - `valueMissing`: 要素に [`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性があって値がない場合は `true` を、そうでない場合 `false` を返す。true なら、要素は {{cssxref(":invalid")}} CSS 擬似クラスに一致する。

- `willValidate`: フォームが送信されるときに要素が検証される場合に `true` を返します。そうでない場合は `false` を返します。

また、制約検証 API では、上記の要素や [`form`](/ja/docs/Web/HTML/Reference/Elements/form) 要素に対して、以下のメソッドを利用することが可能です。

- `checkValidity()`: 要素の値で妥当性の問題がない場合に `true` を返します。そうでない場合は `false` を返します。要素が不正である場合、このメソッドは要素で [`invalid` イベント](/ja/docs/Web/API/HTMLInputElement/invalid_event)を発生させます。
- `reportValidity()`: イベントを使用して、無効なフィールドを報告します。このメソッドは `onSubmit` イベントハンドラーでは `preventDefault()` と組み合わせて使用すると有益です。
- `setCustomValidity(message)`: 要素に独自のエラーメッセージを追加します。独自のエラーメッセージを設定すると、要素が不正であるとみなされる場合に指定したエラーが表示されます。これにより JavaScript で、標準の HTML 制約検証 API で提供されるもの以外の検証不合格状態を作り出すことができます。ユーザーに問題を報告する際に、メッセージが表示されます。

#### 独自のエラーメッセージを実装する

上記の HTML の検証制約の例で見てきたように、ユーザーが不正なフォームを送信しようとするたびにブラウザーはエラーメッセージを表示します。このメッセージを表示する方法は、ブラウザーにより異なります。

これらの自動のメッセージには、2 つの欠点があります。

- CSS でメッセージの表示方法を変更するための標準的な方法がありません。
- メッセージはブラウザーのロケールに依存しており、ある言語のページでエラーメッセージが別の言語で表示されることがあります。これは下記の Firefox スクリーンショットで見ることができます。

![英語のページにフランス語で表示される Firefox のエラーメッセージの例](error-firefox-win7.png)

これらのメッセージの外見やテキストを変更するには、制約検証 API の最も一般的なユースケースです。
この使用法を例で詳しく見てみましょう。

いくつかの簡単な HTML で開始します (空の HTML ファイルにこれを入力します; もしよければ、[fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) を基礎としてもいいでしょう)。

```html-nolint
<form>
  <label for="mail">
    メールアドレスを教えてください:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>送信</button>
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

`validity.typeMismatch` が `false`の場合、空文字で `setCustomValidity()` メソッドを呼び出します。これは入力が妥当となり、フォームが送信されます。検証中に、いずれかのフォームコントロールに空文字列ではない `customError` がある場合、フォームの送信はブロックされます。

以下で試すことができます。

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

GitHub 上のライブサンプルを [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) で、[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html)も見ることができます。

#### 組み込みフォーム検証の拡張

前の例では、特定のエラー (`validity.typeMismatch`) に対してカスタマイズしたメッセージを表示させる方法を示しました。
また、組み込みのフォーム検証をすべて使用し、さらに `setCustomValidity()` を使用して追加することも可能です。

ここでは、組み込みの [`<input type="email">`](/ja/docs/Web/HTML/Reference/Elements/input/email) の検証を拡張して、 `@example.com` ドメインのアドレスのみを受け入れるようにする方法を説明します。
下記 HTML の {{htmlelement("form")}} から始めます。

```html
<form>
  <label for="mail">メールアドレス (@example.com のみ):</label>
  <input type="email" id="mail" />
  <button>送信</button>
</form>
```

検証コードを以下にに記します。
新しい入力が有った場合、コードの最初の段階では、 `setCustomValidity("")` を呼んで独自の検証メッセージをリセットします。
次に、 `email.validity.valid` を使用して、入力されたアドレスが不正かどうかをチェックし、不正な場合はイベントハンドラーから戻ります。
これにより、入力されたテキストが有効なメールアドレスではない場合に、すべての通常の組み込み検証チェックが実行されることが保証されます。

メールアドレスが有効である場合、コードは独自の制約を追加し、アドレスが `@example.com` で終わっていない場合、エラーメッセージとともに `setCustomValidity()` を呼び出します。

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  // 組み込みの制約を検証
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }

  // 独自の検証を拡張
  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity("@example.com のメールアドレスを入力してください");
  }
});
```

この例は、{{LiveSampleLink('Extending_built-in_form_validation', 'ライブサンプルデモのリンク')}}の先のページで試すことができます。
不正なメールアドレス、 `@example.com` で終わらない有効なメールアドレス、 `@example.com` で終わる有効なメールアドレスを送信してみてください。

#### より詳細な例

これまでほんとうに簡単な例を見てきましたので、少し複雑な独自の検証を作成するために API を使用する方法を見ていきましょう。

始めに、HTML です。また、次のものに沿ってみてください。

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

このフォームでは、 [`novalidate`](/ja/docs/Web/HTML/Reference/Elements/form#novalidate) 属性を使用してブラウザーの自動検証を無効にしています。 フォームに `novalidate` 属性を設定すると、フォームが独自のエラーメッセージバブルを表示しなくなります。 その代わりに、独自の方法で DOM にカスタムエラーメッセージを表示することができます。
ただし、制約検証 API や、 {{cssxref(":valid")}} などの CSS 擬似クラスのアプリケーションの対応が無効になるわけではありません。
つまり、たとえブラウザーがデータを送信する前にフォームの妥当性を自動的に調べないとしても、自分自身で調べ、それに応じてフォームのスタイル設定を行うことができるということです。

検証する入力は [`<input type="email">`](/ja/docs/Web/HTML/Reference/Elements/input/email)で、これは `required` (入力必須) で、8 文字の `minlength` があります。これをわれわれのコードで確認して、それぞれカスタムエラーメッセージを表示させてみましょう。

`<span>` 要素の中にエラーメッセージを表示させようとしています。 `<span>`にセットされた [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) 属性は、スクリーンリーダーのような支援技術を使用している人々を含む皆に、独自のエラーメッセージを提示するようにします。

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

それでは、独自のエラー検証を実装する JavaScript を見てみましょう。
DOM ノードを選択する方法は数多くありますが、ここではフォーム自体とメールアドレスの入力ボックス、そしてエラーメッセージを表示する span 要素を取得します。

イベントハンドラーを使用して、ユーザーが何かを入力するたびに、フォームフィールドが有効であるかどうかを確認します。エラーがある場合は、それを表示します。エラーがない場合は、エラーメッセージをすべて削除します。

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // メッセージの内容物をリセットします
    emailError.className = "error"; // メッセージの表示状態をリセットします
  } else {
    // それでもエラーが発生する場合は、正しいエラーを表示します。
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // メールアドレスのフィールドが不正な場合
  if (!email.validity.valid) {
    // 適切なエラーメッセージを表示
    showError();
    // フォーム送信を抑止
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // 空であれば
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // メールアドレスでなければ
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // 値が短すぎれば
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // `active` クラスを追加
  emailError.className = "error active";
}
```

入力値を変えるたびに、それが妥当なデータを含んでいるかをチェックします。その場合は表示されたエラーメッセージを削除します。データが不正の場合は、適当なエラーを表示する `showError()` を実行します。

フォームの送信を試すごとに、またデータが妥当かチェックします。その場合はフォームの送信を許可します。そうでない場合、適当なエラーを表示する `showError()` を実行し、 [`preventDefault()`](/ja/docs/Web/API/Event/preventDefault)でフォーム送信を停止します。

`showError()` 関数は、入力の `validity` オブジェクトのさまざまなプロパティを使ってエラーがどれかを決めて、適当なエラーメッセージを表示します。

こちらが実際の結果です。

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

このライブサンプルは GitHub の [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) にあります。[ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html)もあります。

制約検証 API はフォーム検証を制御するための強力なツールであり、HTML および CSS のみで検証を行うよりもはるかにユーザーインターフェイスをコントロールできます。

### 組み込み API を使用しないフォーム検証

古いブラウザーや[カスタムコントロール](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)において、制約検証 API を使用できない （または使用したくない）ことがあるでしょう。このような場合でも、フォームを検証するために JavaScript が使用できます。フォームを検証には、実際のデータの検証よりもユーザーインターフェイスの疑問が多くなります。

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
    - [Help users enter the right data in forms](https://web.dev/Learn_web_development/Extensions/Forms/validation/)
    - [Validating input](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [How to Report Errors in Forms: 10 Design Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### 制約検証 API を使用しない例

説明のために、前回の例の制約検証 API を使用しない簡略版を次に示します。

ご覧の通り、 HTML はほとんど同じであり、HTML の検証機能を取り除いただけです。

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
    </label>
    <input type="text" id="mail" name="mail" />
    <span id="error" aria-live="polite"></span>
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

input {
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
  border: 2px solid #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
  /* キーボードのみを使用するユーザーが、フォーカス時に見ることができることを保証します。 */
  border-style: dashed;
}

/* これはエラーメッセージ向けのスタイルです */
#error {
  width: 100%;
  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.active {
  padding: 0.3rem;
}
```

JavaScript コードでは大きな変更があり、多くの面倒な作業が必要です。

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// HTML 仕様上の電子メール検証用の正規表現
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// メールアドレスが有効であるかをチェック
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

// email 入力のクラスを有効かどうかで更新
const setEmailClass = (isValid) => {
  email.className = isValid ? "valid" : "invalid";
};

// エラーメッセージと表示の有無を更新
const updateError = (isValidInput) => {
  if (isValidInput) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "I expect an email, darling!";
    error.setAttribute("class", "active");
  }
};

// ページ読み込み時にメールアドレスの有効性を初期化
const initializeValidation = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
};

// input イベントを処理してメールの有効性を更新
const handleInput = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

// メールアドレスが不正な場合にエラーを表示させるフォーム送信を処理
const handleSubmit = (event) => {
  event.preventDefault();

  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

// これで検証制約を再構築できます。
// CSS 擬似クラスに頼っていないため、 email フィールドに
// 有効/不正のクラスを明示的に設定する必要があります。
window.addEventListener("load", initializeValidation);
// これは、ユーザーがフィールドに入力したときに現れるものを定義します。
email.addEventListener("input", handleInput);
// これは、ユーザーがデータを送信しようとしたときに現れる内容を定義します。
form.addEventListener("submit", handleSubmit);
```

結果は以下のようになります。

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

ご覧の通り、自分でで検証システムを構築するのは大変なことではありません。難しいのはクロスプラットフォームで、かつ作成するであろうあらゆるフォームで使用できる汎用的なものにすることです。フォーム検証を行うために利用できる、[Validate.js](https://rickharrison.github.io/validate.js/) のような多くのライブラリーがあります。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: フォーム検証](/ja/docs/Learn_web_development/Extensions/Forms) を見てください。

## まとめ

クライアント側のフォーム検証は、カスタムスタイル設定やエラーメッセージには複雑な JavaScript を必要としませんが、ユーザーについては注意深く考えることが必要です。ユーザーが正しいデータを入力できるよう支援することを、常に忘れないでください。最後に、以下のことを必ず行ってください。

- 明確なエラーメッセージを表示してください。
- 入力形式については寛容になってください。
- どこでエラーが発生しているかを正確に示してください（特に大きなフォームで）。

フォームが正しく埋められたことをチェックしたら、送信することができます。
次の[データ送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)でカバーします。

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

### 上級トピック

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [JavaScript によるフォームの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
