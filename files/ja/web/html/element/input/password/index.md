---
title: <input type="password">
slug: Web/HTML/Element/input/password
tags:
  - 要素
  - フォーム
  - HTML
  - HTML 入力型
  - HTML Inputs
  - HTML パスワード入力
  - HTML フォーム
  - HTML input tag
  - 入力型
  - リファレンス
  - ウェブ
  - password
browser-compat: html.elements.input.input-password
translation_of: Web/HTML/Element/input/password
---

{{HTMLRef("Input_types")}}

`<input>` 要素の **`password`** 型は、パスワードを安全に入力する方法を提供します。
この要素はプレーンテキストの 1 行編集コントロールとして表示され、そのテキストは読み取られることがないように、1 つ 1 つの文字がアスタリスク ("\*") やドット ("•") のような記号に置き換えられ、隠されます。
この文字は{{Glossary("user agent", "ユーザーエージェント")}}やオペレーティングシステムによって変わります。

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

詳細な入力プロセスの動作は、ブラウザーによって異なっている場合があります。
例えば、モバイル端末ではしばしば、ユーザーが思ったとおりのキーを押したかどうかを確かめることができるように、入力した文字を、隠す前に一瞬だけ表示します。
これは特に、キーのサイズが小さく、押し間違いが起こりやすい、仮想キーボードの場合に役立ちます。

> **Note:** パスワードのような機密情報が含まれているフォーム (ログインフォームなど) は、 HTTPS で送信するべきです。
> 現在では多くのブラウザーで、安全ではないログインフォームの場合に警告を行う仕組みが実装されています。詳細は[安全でないパスワード](/ja/docs/Web/Security/Insecure_passwords)を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("値")}}</strong></td>
      <td>
        パスワードを表す {{domxref("DOMString")}}、または空欄
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応している共通属性</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("inputmode", "input")}},
        {{htmlattrxref("maxlength", "input")}},
        {{htmlattrxref("minlength", "input")}},
        {{htmlattrxref("pattern", "input")}},
        {{htmlattrxref("placeholder", "input")}},
        {{htmlattrxref("readonly", "input")}},
        {{htmlattrxref("required", "input")}},
        {{htmlattrxref("size", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td>
        <code>selectionStart</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code>, <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
      </td>
    </tr>
  </tbody>
</table>

## 値

{{htmlattrxref("value", "input")}} 属性は、パスワードを入力するために使われているテキスト編集コントロールの、現在の内容である {{domxref("DOMString")}} を格納します。ユーザーが何も入力していない場合、この値は空文字列 (`""`) です。{{htmlattrxref("required")}} プロパティが指定されている場合、パスワード編集ボックスが妥当となるためには、空文字列以外の値を含まなければなりません。

{{htmlattrxref("pattern", "input")}} 属性が指定されている場合、`password` コントロールの内容は、その値が検証をパスした場合のみ、妥当とみなされます。詳細は{{anch("検証")}}を参照してください。

> **Note:** 改行文字の LF (U+000A) と CR (U+000D) は `password` の値には許容されません。パスワードコントロールに値がセットされるとき、LF および CR は値から取り除かれます。

## 追加の属性

型に関係なくすべての {{HTMLElement("input")}} 要素を操作する属性に加え、 `password` 型の入力欄は次の属性にも対応しています。

### maxlength

ユーザーがパスワード入力欄に入力することができる（UTF-16 コード単位での）最大文字数です。 0 以上の整数値である必要があります。 `maxlength` が指定されていないか、無効な値が指定されていると、パスワード入力欄には最大文字数が設定されません。この値は `minlength` の値以上である必要もあります。

フィールドに入力されたテキストの長さが UTF-16 コード単位で `maxlength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。

### minlength

ユーザーがパスワード入力欄に入力することができる (UTF-16 コード単位での) 最小文字数です。これは非負の整数値で、 `maxlength` で指定された値以下である必要があります。 `minlength` が指定されていないか、無効な値が指定されていると、パスワード入力欄には最小文字数が設定されません。

入力欄のテキストの長さが UTF-16 コード単位で `minlength` の長さよりも短いと、その入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。

### pattern

`pattern` 属性は、指定する場合は正規表現であり、入力欄の {{htmlattrxref("value")}} が[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に合格するためにはこれと一致しなければなりません。これは {{jsxref("RegExp")}} 型で使用される JavaScript の妥当な正規表現である必要があり、これは[正規表現のガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)で記述されています。正規表現がコンパイルされるときに `'u'` フラグが指定されるので、パターンは ASCII ではなく Unicode コードポイントの並びとして扱われます。パターンのテキストをスラッシュで囲んではいけません。

指定されたパターンがないかか無効である場合は、正規表現は適用されず、この属性は完全に無視されます。

> **Note:** {{htmlattrxref("title", "input")}} 属性を使用してテキストを指定すると、多くのブラウザーでパターンに一致する要件が何であるかを説明するツールチップを表示することができます。近くに他の説明テキストを配置する必要があります。

パスワードの入力には、 pattern を使用することを強くお勧めします。これは、さまざまな文字クラスを使用した有効なパスワードが、ユーザーによって選択され使用されることを保証するためです。パターンでは、大文字と小文字を区別するルールや、数字や記号の使用を義務付けることができます。詳細と例については{{anch("検証")}}の節を参照してください。

### placeholder

`placeholder` 属性は文字列で、その欄にどのような種類の情報が求められるかについてのユーザーに対する短いヒントを提供します。これは求められるデータの種類を紹介する一語または短い句であり、説明的なメッセージではありません。テキストには改行を含めることは*できません*。

コントロールの内容がある書字方向 ({{Glossary("LTR")}} または {{Glossary("RTL")}}) であるものの、プレイスホルダーを逆の方向に表示する必要がある場合、 Unicode 双方向アルゴリズム書式文字を使用してプレイスホルダーの中で書字方向を上書きすることができます。詳しくは、[双方向テキストでの Unicode コードの使い方（英語）](https://www.w3.org/International/questions/qa-bidi-unicode-controls)を参照してください。

> **Note:** 可能であれば `placeholder` を使用することは避けてください。フォームを説明する他の方法ほど意味論的に有益ではなく、コンテンツに予期しない技術的な問題を引き起こす可能性があります。詳しくは、[\<input>: 入力欄 (フォーム入力) 要素](/ja/docs/Web/HTML/Element/input)の[プレイスホルダーはアクセシブルではない](/ja/docs/Web/HTML/Element/input#プレイスホルダーはアクセシブルではない)を参照してください。

### readonly

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `value` は、 JavaScript コードから直接 {{domxref("HTMLInputElement","HTMLInputElement.value")}} プロパティを設定することで変更することができます。

> **Note:** 読み取り専用フィールドは値を持てないため、 `required` は `readonly` 属性も指定されている入力欄には効果がありません。

### size

`size` 属性は数値であり、入力欄の幅を何文字分とするかを示します。値はゼロより大きな数値である必要があり、既定値は 20 です。文字の幅は様々であるため、これは正確ではない可能性もあり、依存することはできません。結果の入力欄は文字数やフォント（使用中の {{cssxref("font")}} 設定）によって、指定された文字数より狭くなったり広くなったりすることがあります。

これはユーザーがフィールドに入力することができる文字数の制限を設定するものではありません。これは一度に見える文字数をおよそ指定するだけです。入力データの長さの上限を設定するには、 `{{anch("maxlength")}}` 属性を使用してください。

## パスワード入力欄の使用

パスワード入力ボックスは通常、他のテキスト入力ボックスのように動作します。主な違いは、ユーザーの近くにいる人がパスワードを読み取ることを防ぐために、その内容を隠すことです。

### シンプルなパスワード入力欄

以下は最も基本的なパスワード入力欄で、{{HTMLElement("label")}} 要素を使ったラベルとともに設置されています。

```html
<label for="userPassword">パスワード: </label>
<input id="userPassword" type="password">
```

{{EmbedLiveSample("A_simple_password_input", 600, 40)}}

### オートコンプリートを許可する

パスワードを自動的に入力するため、ユーザーのパスワードマネージャを許可するには、{{htmlattrxref("autocomplete", "input")}} 属性を指定します。パスワードの場合、通常は次のいずれかの値をとります。

- `on`
  - : ブラウザー、あるいはパスワードマネージャが自動的にパスワード欄を埋めることを許可します。これは、`current-password` あるいは`new-password` を使用するほど有益ではありません。
- `off`
  - : ブラウザー、あるいはパスワードマネージャが自動的にパスワード欄を埋めることを許可しません。いくつかのソフトウェアはこの値を無視しますが、それは通常、ユーザーの安全なパスワードの実践を維持する能力を、阻害するものであることに注意してください。
- `current-password`
  - : ブラウザー、あるいはパスワードマネージャがサイトのための現在のパスワードを入力することを許可します。この値はブラウザー、あるいはパスワードマネージャに、そのサイトの既知のパスワードを自動的に入力させ、新しいパスワードを提案するものではないもので、`"on"` よりも多くの情報を提供します。
- `new-password`
  - : ブラウザー、あるいはパスワードマネージャが、そのサイトの新しいパスワードを自動的に入力することを許可します。これは「パスワードの変更」や「新規ユーザー」フォームの、ユーザーに新しいパスワードを求める入力欄で使われます。新しいパスワードは、パスワードマネージャによって、複数の方法で生成される場合があります。単に新しく提示されるパスワードで埋めるかもしれませんし、あるいは新しいパスワードを生成するインターフェイスを、ユーザーに見せるかもしれません。

```html
<label for="userPassword">パスワード:</label>
<input id="userPassword" type="password" autocomplete="current-password">
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### パスワードを必須にする

ユーザーのブラウザーに対して、フォームの送信前に、パスワード欄に有効な値が入力されている必要があることを伝えるためには、 {{htmlattrxref("required", "input")}} 論理属性を指定してください。

```html
<label for="userPassword">パスワード: </label>
<input id="userPassword" type="password" required>
<input type="submit" value="Submit">
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### 入力モードを指定する

推奨する、または必須となるパスワードの構文ルールが、標準キーボードよりも、代替となるテキスト入力インターフェースから恩恵を受ける場合、特定のものを要求するために {{htmlattrxref("inputmode", "input")}} 属性を使用することができます。この最も明快な用途は、 PIN のようにパスワードが数字で構成されていることを必要とする場合です。例えば、仮想キーボードを持つモバイル端末では、パスワードの入力をより簡単にするため、フルキーボードの代わりに、数字のキーパッドレイアウトに切り替えることを選択するかもしれません。 PIN が１回限りの使用であれば、 {{htmlattrxref("autocomplete", "input")}} 属性を `off` または `one-time-code` のどちらかに設定してサジェストが保存されないようにしてください。

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric">
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### 長さの要件を設定する

普通、{{htmlattrxref("minlength", "input")}} 属性や {{htmlattrxref("maxlength", "input")}} 属性を使って、許容する最小の長さと最大の長さをパスワードに適用することができます。この例では、直前の例を拡張して、ユーザーの PIN が 4 〜 8文字でなければならないことを指定しています。{{htmlattrxref("size", "input")}} 属性は、パスワード入力コントロールが 8 文字分の幅であることを保証するために使用されています。

```html
<label for="pin">PIN:</label>
<input id="pin" type="password" inputmode="numeric" minlength="4"
       maxlength="8" size="8">
```

{{EmbedLiveSample("Setting_length_requirements", 600, 40)}}

### テキストを選択する

他のテキスト入力コントロールのように、 {{domxref("HTMLInputElement.select", "select()")}} メソッドを使って、パスワード欄のすべてのテキストを選択することができます。

#### HTML

```html
<label for="userPassword">パスワード: </label>
<input id="userPassword" type="password" size="12">
<button id="selectAll">Select All</button>
```

#### JavaScript

```js
document.getElementById("selectAll").onclick = function() {
  document.getElementById("userPassword").select();
}
```

#### 結果

{{EmbedLiveSample("Selecting_text", 600, 40)}}

また、{{domxref("HTMLInputElement.selectionStart", "selectionStart")}} や {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}} を使って、コントロールの文字がどの範囲で選択されているかを取得または設定することができ、{{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}} を使って、どの方向に選択が発生したのか（あるいはどの方向に広がるのか。プラットフォームに依存します。詳細は各ドキュメントを参照してください）を知ることができます。ただし、テキストは隠されているため、有用性はやや制限されます。

## 検証

もしアプリケーションが文字セットの制限を有している場合、あるいは入力されたパスワードの実際の内容について、他の何らかの要件がある場合には、{{htmlattrxref("pattern", "input")}} 属性を使って、パスワードがそれらの要件に合致しているか自動的に確認するための正規表現を設定することができます。

この例では、4 〜 8 文字の 16 進数の数字のみが妥当です。

```html
<label for="hexId">Hex ID: </label>
<input id="hexId" type="password" pattern="[0-9a-fA-F]{4,8}"
       title="4-8 桁の 16 進数で ID を入力してください"
       autocomplete="new-password">
```

{{EmbedLiveSample("Validation", 600, 40)}}

## 例

### 社会保障番号の要求

この例では、[有効なアメリカ合衆国の社会保障番号](https://ja.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%9A%9C%E7%95%AA%E5%8F%B7#%E6%AD%A3%E5%BD%93%E3%81%AA%E7%95%AA%E5%8F%B7)の形式に合致する入力のみが受け付けられます。これらの数字はアメリカ合衆国において、税や個人の識別を目的として使われており、その形式は "123-45-6789" です。各種、それぞれのグループ内でどのような値が許可されているかについてのルールも存在しています。

#### HTML

```html
<label for="ssn">SSN:</label>
<input type="password" id="ssn" inputmode="numeric" minlength="9" maxlength="12"
    pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
    required autocomplete="off">
<br>
<label for="ssn">Value:</label>
<span id="current"></span>
```

ここでは {{htmlattrxref("pattern", "input")}} を使って、入力される値を、正当な社会保障番号を示す文字列に制限しています。明らかに、この正規表現は、妥当な SSN であることを保証していません（社会保障局のデータベースにアクセスしているわけではないので）が、その番号が SSN になり得るものであることは保証しています。一般に、値が妥当になり得ないことを避けています。加えて、3 つの数字のグループがスペース、ダッシュ ("-") で区切る、あるいは区切らないことを許容しています。

{{htmlattrxref("inputmode", "input")}} が  `numeric` にセットされ、より入力しやすくするために、仮想キーボードを持つ端末が数字キーパッドレイアウトに切り替えることを支援しています。{{htmlattrxref("minlength", "input")}} と {{htmlattrxref("maxlength", "input")}} がそれぞれ 9 と 12 にセットされ、値が 9 〜 12 文字 (前者はグループ間の区切り文字無し、後者は有り) であることを要件としています。 {{htmlattrxref("required", "input")}} 属性は、このコントロールが値を持っていなければならないことを示すために使われています。最後に、 {{htmlattrxref("autocomplete", "input")}} が `"off"` にセットされており、これはまったくパスワードではないので、パスワードマネージャーが値をセットしようとすることを回避しています。

#### JavaScript

これは実にシンプルなコードで、入力された SSN を見られるように、画面に表示するためのものです。これは明らかに、パスワード欄の目的を損ねるものですが、`pattern` を試すには役立ちます。

```js
var ssn = document.getElementById("ssn");
var current = document.getElementById("current");

ssn.oninput = function(event) {
  current.textContent = ssn.value;
}
```

#### 結果

{{EmbedLiveSample("Requesting_a_Social_Security_number", 600, 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS プロパティの互換性](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
