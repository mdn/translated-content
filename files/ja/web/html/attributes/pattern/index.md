---
title: "HTML attribute: pattern"
slug: Web/HTML/Attributes/pattern
---

{{HTMLSidebar}}

**`pattern`** 属性は、フォームコントロールの値が一致すべき[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)を指定します。 `null` 以外の値が `pattern` 値によって設定された制約に適合しない場合、 {{domxref('ValidityState')}} オブジェクトの読み取り専用の {{domxref('ValidityState.patternMismatch','patternMismatch')}} プロパティが真になります。

`pattern`属性は {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, {{HTMLElement("input/search", "search")}} の入力型の属性です。

`pattern`属性は、[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)を通過させるために、入力の [`value`](/ja/docs/Web/HTML/Element/input#value) が一致するべき正規表現です。これは有効な JavaScript の正規表現でなければならず、 {{jsxref("RegExp")}} 型で使用されたり、 [正規表現ガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)で説明されているものと同じものです。通り正規表現をコンパイルする際に `'u'` フラグを指定することで、パターンが ASCII ではなく Unicode コードポイントの並びとして扱われるようになります。パターンテキストの周りには、スラッシュを指定してはいけません。

パターンが指定されていないか無効な場合、正規表現は適用されず、この属性は無視されます。

> **メモ:** [`title`](/ja/docs/Web/HTML/Element/input#title) 属性を使用すると、ほとんどのブラウザーがパターンに一致するための要件を説明するためにツールチップとして表示するテキストを指定することができます。説明をツールチップだけに頼っては**いけません**。ユーザービリティについての詳細は以下を参照してください。

pattern 属性に対応している入力型の中には、特に {{HTMLElement("input/email", "email")}} および {{HTMLElement("input/url", "url")}} 入力型のように、一致しなければならない期待値の構文を持っているものがあります。 pattern 属性が存在せず、値がその値型の期待される構文と一致しない場合、 {{domxref('ValidityState')}} オブジェクトの読み取り専用の {{domxref('ValidityState.typeMismatch','typeMismatch')}} プロパティが真になります。

### ユーザービリティ

`pattern` を含める場合は、コントロールの近くの可視テキストでパターンについて説明してください。さらに、パターンを説明する [`title`](/ja/docs/Web/HTML/Global_attributes/title) 属性を含めてください。ユーザーエージェントは、制約検証中に title の内容を使用して、パターンが一致しないことをユーザーに伝えることができます。ブラウザーによっては、タイトルの内容を持つツールチップを表示し、視覚障碍者のユーザーの使い勝手を向上させます。さらに、支援技術は、コントロールにフォーカスを合わせるとタイトルを声に出して読むことができる場合がありますが、アクセシビリティのためにはこれに頼るべきではありません。

### 制約検証

入力欄の値が空文字列ではなく、正規表現全体と一致しない場合は、 {{domxref('ValidityState.patternMismatch','patternMismatch')}} が真になります。
pattern の正規表現は、値に一致したときに、先頭が文字列の先頭に該当し、末尾が文字列の末尾に該当するため、これは JavaScript の正規表現とは少し異なります。 pattern 属性の場合、パターンの先頭に `^(?:` が、末尾に `)$` が指定されているかのように、値の部分ではなく全体に一致します。

## 例

以下ののものを考えてみてください。

```html
<p>
 <label>Enter your phone number in the format (123)456-7890
  (<input name="tel1" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit area code" size="2"/>)-
   <input name="tel2" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit prefix" size="2"/> -
   <input name="tel3" type="tel" pattern="[0-9]{4}" placeholder="####" aria-label="4-digit number" size="3"/>
 </label>
</p>
```

ここでは北米の電話番号を示す 3 つの部分があり、電話番号の 3 つの構成要素すべてを含む暗黙のラベルがありますが、それぞれ 3 桁、3 桁、4 桁で [`pattern`](/ja/docs/Web/HTML/Attributes/pattern) 属性によってそれぞれ設定されています。

値が長すぎたり短すぎたり、数字ではない文字が含まれていたりすると、 patternMismatch が true になります。 `true` の場合、要素は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("example1", 300, 40)}}

代わりに [`minlength`](/ja/docs/Web/HTML/Attributes/minlength) と [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength) 属性を用いた場合、 {{domxref('validityState.tooLong')}} または {{domxref('validityState.tooShort')}} が true になります。

### パターンの指定

[`pattern`](/ja/docs/Web/HTML/Element/input#pattern) 属性を使用すると、入力された値が有効とみなされるために一致しなければならない正規表現を指定することができます（正規表現を使用して入力を検証する簡単な集中講座は、[正規表現での検証](/ja/docs/Learn/Forms/Form_validation#正規表現での検証)を参照してください）。

以下の例では、値を 4-8 文字に制限し、小文字のみを含むことを要求しています。

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" required size="45"
           pattern="[a-z]{4,8}" title="4 to 8 lowercase letters">
    <span class="validity"></span>
    <p>Usernames must be lowercase and 4-8 characters in length.</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

This renders like so:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

### アクセシビリティの考慮

コントロールに `pattern` 属性がある場合、 `title` 属性が使われていれば、そのパターンを説明しなければなりません。テキストコンテンツを視覚的な表示するために `title` 属性に頼ることは、多くのユーザーエージェントがアクセス可能な方法で属性を公開しないので、一般的には推奨されません。ブラウザーによっては、タイトルを持つ要素の上にポインターを置いたときにツールチップを表示しますが、キーボードのみのユーザーやタッチのみのユーザーは除外されてしまいます。これが、どのようにコントロールに記入すれば要件に合うかをユーザーに知らせる情報を含める必要がある理由の一つです。

一部のブラウザーでは `title` を使用してエラーメッセージを表示していますが、ブラウザーはポインターを置いたときにもタイトルをテキストとして表示することがあり、エラーが発生していない状況でも表示されることがあるので、エラーが発生したかのような言葉を使用しないように注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Constraint validation](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Forms: Data form validation](/ja/docs/Web/Guide/HTML/Forms/Data_form_validation)
- [Regular Expressions](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
