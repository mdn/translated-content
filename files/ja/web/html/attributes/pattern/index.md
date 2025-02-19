---
title: "HTML 属性: pattern"
short-title: pattern
slug: Web/HTML/Attributes/pattern
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

**`pattern`** 属性は、フォームコントロールの値が一致すべき[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)を指定します。`null` 以外の値が `pattern` 値によって設定された制約に適合しない場合、{{domxref('ValidityState')}} オブジェクトの読み取り専用の {{domxref('ValidityState.patternMismatch','patternMismatch')}} プロパティが真になります。

{{EmbedInteractiveExample("pages/tabbed/attribute-pattern.html", "tabbed-shorter")}}

## 概要

`pattern` 属性は {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, {{HTMLElement("input/search", "search")}} の入力型の属性です。

`pattern` 属性は、[制約検証](/ja/docs/Web/HTML/Constraint_validation)を通過させるために、入力の [`value`](/ja/docs/Web/HTML/Element/input#value) が一致するべき正規表現です。これは有効な JavaScript の正規表現でなければならず、 {{jsxref("RegExp")}} 型で使用されたり、[正規表現ガイド](/ja/docs/Web/JavaScript/Guide/Regular_expressions)で説明されているものと同じものです。

パターンの正規表現は [`'v'` フラグ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)でコンパイルされます。これは正規表現を [unicode 対応](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)にし、文字クラスの解釈方法も変更します。これにより、文字クラスの設定には交差と減算の処理が可能になり、 `]` と `\` に加え、続く文字がリテラル文字 `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|` である場合は、 `\` バックスラッシュを使用してエスケープする必要があります。 2023 年半ば以前は、代わりに `'u'` フラグが指定されていました。古いコードを更新する場合は、[この文書に違いの概要がまとめられています](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag)。

パターンの正規表現は、部分文字列に一致させるのではなく、入力の `value` 全体に一致させる必要があります。パターンの始めに `^(?:` が、終わりに `)$` が含まれているかのように扱われます。

パターンテキストの周りにはスラッシュを指定しないでください。属性値が存在しないか、空文字列か、不正な場合は、正規表現は適用されません。

pattern 属性に対応している入力型の中には、特に {{HTMLElement("input/email", "email")}} および {{HTMLElement("input/url", "url")}} 入力型のように、一致しなければならない期待値の構文を持っているものがあります。 pattern 属性が存在せず、値がその値型の期待される構文と一致しない場合、 {{domxref('ValidityState')}} オブジェクトの読み取り専用の {{domxref('ValidityState.typeMismatch','typeMismatch')}} プロパティが true になります。

### 制約検証

入力の値が空文字列でなく、正規表現全体に一致しない場合、{{domxref('ValidityState')}} オブジェクトの {{domxref('ValidityState.patternMismatch','patternMismatch')}} プロパティが `true` になって報告される制約違反が存在することになります。

> **メモ:** `pattern` 属性が値なしで指定された場合、その値は暗黙的に空文字列となります。したがって、**空でない**入力欄の `value` は制約に違反することになります。

### ユーザビリティとアクセシビリティの考慮

コントロールに `pattern` 属性がある場合、 [`title`](/ja/docs/Web/HTML/Element/input#title) 属性が使われていれば、そのパターンを説明しなければなりません。テキストコンテンツを視覚的な表示するために `title` 属性に頼ることは、多くのユーザーエージェントがアクセス可能な方法で属性を公開しないので、一般的には推奨されません。ブラウザーによっては、タイトルを持つ要素の上にポインターを置いたときにツールチップを表示しますが、キーボードのみのユーザーやタッチのみのユーザーは除外されてしまいます。これが、どのようにコントロールに記入すれば要件に合うかをユーザーに知らせる情報を含める必要がある理由の一つです。

多くのユーザーエージェントは `title` 属性をアクセシビリティのある方法で公開していないため、テキストコンテンツの視覚的な表示のためだけに `title`属性を頼ることは推奨されません。ブラウザーによっては、タイトルのある要素にカーソルを合わせるとツールチップを表示させるものもありますが、キーボードのみのユーザーやタッチのみのユーザーを除外することになります。これは、要求に一致するように制御する方法をユーザーに知らせる情報を記載しなければならないいくつかの理由の一つです。

一部のブラウザーでは `title` を使用してエラーメッセージを表示していますが、ブラウザーはポインターを当てたときにもタイトルをテキストとして表示することがあり、エラーが発生していない状況でも表示されることがあるので、エラーが発生したかのような言葉を使用しないように注意してください。

## 例

### 電話番号の照合

以下のものを考えてみてください。

```html
<p>
  <label>
    Enter your phone number in the format (123) - 456 - 7890 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit area code"
      size="2" />) -
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit prefix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-digit number"
      size="3" />
  </label>
</p>
```

ここでは北米の電話番号を示す 3 つの部分があり、電話番号の 3 つの構成要素すべてを含む暗黙のラベルがありますが、それぞれ 3 桁、3 桁、4 桁で `pattern` 属性によってそれぞれ設定されています。

値が長すぎたり短すぎたり、数字ではない文字が含まれていたりすると、 `patternMismatch` が true になります。 `true` の場合、要素は CSS の {{cssxref(":invalid")}} 擬似クラスに一致します。

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

代わりに [`minlength`](/ja/docs/Web/HTML/Attributes/minlength) と [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength) 属性を用いた場合、 {{domxref('validityState.tooLong')}} または {{domxref('validityState.tooShort')}} が true になります。

### パターンの指定

[`pattern`](/ja/docs/Web/HTML/Element/input#pattern) 属性を使用すると、入力された値が有効とみなされるために一致しなければならない正規表現を指定することができます（正規表現を使用して入力を検証する簡単な集中講座は、[正規表現での検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation#正規表現での検証)を参照してください）。

以下の例では、値を 4-8 文字に制限し、小文字のみを含むことを要求しています。

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}"
      title="4 to 8 lowercase letters" />
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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

This renders like so:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [制約検証](/ja/docs/Web/HTML/Constraint_validation)
- [フォーム: データフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)
