---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
tags:
  - API
  - Form Element
  - Forms
  - HTML DOM
  - HTML forms
  - HTMLFormElement
  - Interface
  - Reference
translation_of: Web/API/HTMLFormElement
---
{{APIRef("HTML DOM")}}

The **`HTMLFormElement`** インターフェイスは DOM 内で {{HTMLElement("form")}} 要素を表します。これは、フォームのコンポーネント要素へのアクセスだけでなく、フォームの様々な側面へのアクセスや、場合によっては変更を可能にします。

{{InheritanceDiagram(600,120)}}

## プロパティ

_このインターフェイスは親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLFormElement.elements")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormControlsCollection")}} で、このフォーム要素に所属するすべてのフォームコントロールを保持します。
- {{domxref("HTMLFormElement.length")}}{{ReadOnlyInline}}
  - : `long` で、フォーム内のコントロールの数を反映します。
- {{domxref("HTMLFormElement.name")}}
  - : {{domxref("DOMString")}} で、フォームの {{ htmlattrxref("name", "form") }} 属性の値を反映し、フォームの名前を表します。
- {{domxref("HTMLFormElement.method")}}
  - : {{domxref("DOMString")}} で、フォームの {{ htmlattrxref("method", "form") }} 属性の値を反映し、フォームを送信するために使用する HTTP メソッドを示します。指定された値のみが設定できます。
- {{domxref("HTMLFormElement.target")}}
  - : {{domxref("DOMString")}} で、フォームの {{ htmlattrxref("target", "form") }} 属性の値を反映し、フォームを送信して受け取った結果を表示する場所を示します。
- {{domxref("HTMLFormElement.action")}}
  - : {{domxref("DOMString")}} で、フォームの {{ htmlattrxref("action", "form") }} 属性の値を反映し、フォームによって送信された情報を処理するプログラムの URI を示します。
- {{domxref("HTMLFormElement.encoding")}} または {{domxref("HTMLFormElement.enctype")}}
  - : {{domxref("DOMString")}} で、フォームの {{ htmlattrxref("enctype", "form") }} 属性の値を反映し、フォームをサーバーへ送信するのに使用するコンテンツの型を示します。指定された方のみが設定できます。二つのプロパティは別名です。
- {{domxref("HTMLFormElement.acceptCharset")}}
  - : {{domxref("DOMString")}} で、フォームの {{ htmlattrxref("accept-charset", "form") }} 属性の値を反映し、サーバーが受け付ける文字エンコーディングを表します。
- {{domxref("HTMLFormElement.autocomplete")}}
  - : {{domxref("DOMString")}} で、フォームの {{ htmlattrxref("autocomplete", "form") }} 属性の値を反映し、ブラウザーが自動的にこのフォーム内のコントロールの値を生み出すことができるかどうかを示します。
- {{domxref("HTMLFormElement.noValidate")}}
  - : {{jsxref("Boolean")}} で、フォームの {{ htmlattrxref("novalidate", "form") }} 属性の値を反映し、フォームの検証を行わないかどうかを示します。

名前の付いた入力欄がプロパティとしてオーナーのフォームのインスタンスに追加され、同じ名前のネイティブのプロパティがあると上書きしてしまいます (例えば、フォームに `action` という名前の入力欄がある場合、`action` プロパティはフォームの {{ htmlattrxref("action", "form") }} 属性ではなくその入力欄を返します)。

## メソッド

_このインターフェイスは親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

- {{domxref("HTMLFormElement.checkValidity", "checkValidity()")}}
  - : この要素の子コントロールが[制約検証](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)の対象となり、それらの制約を満たしている場合は `true` を返します。制約を満たさないコントロールがある場合は `false` を返します。制約を満たさないコントロールに対して、{{domxref("HTMLInputElement/invalid_event", "invalid")}} という名前のイベントを発生させます。イベントがキャンセルされない場合、そのようなコントロールは無効とみなされます。`false` にどう対応するかはプログラマ次第です。
- {{domxref("HTMLFormElement.reportValidity", "reportValidity()")}}
  - : 要素の子コントロールがその[検証する制約](/ja/docs/Web/Guide/HTML/HTML5/Constraint_validation)を満たしている場合、`true` を返します。`false` が返された場合、無効な子要素それぞれにキャンセル可能な {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントが発生し、検証上の問題がユーザーに報告されます。
- {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}}
  - : 指定された送信ボタンとそれに対応する設定を使用してフォームを送信するよう要求します。
- {{domxref("HTMLFormElement.reset", "reset()")}}
  - : フォームを初期状態にリセットします。
- {{domxref("HTMLFormElement.submit", "submit()")}}
  - : フォームをサーバーへ送信します。

### 非推奨のメソッド

- {{domxref("HTMLFormElement.requestAutocomplete()")}} {{deprecated_inline}}
  - : ネイティブのブラウザーインターフェイスを起動して、[自動補完フィールド名](https://html.spec.whatwg.org/#autofill-field-name) の値が `off` または `on` ではないフィールドを補完してユーザーを支援します。ユーザーがインターフェイスの操作を終えると、フォームはフィールドが入力された場合は {{event("autocomplete")}}、問題があった場合は {{event("autocompleteerror")}} のいずれかのイベントを受け取ります。

## イベント

これらのイベントを待ち受けするには、`addEventListener()` を使用するか、このインターフェイスの `oneventname` プロパティへイベントリスナーを代入するかしてください。

- {{domxref("HTMLFormElement/formdata_event", "formdata")}}
  - : `formdata` イベントは、フォームのデータを表す項目リストが構築されると発行されます。
    {{domxref("GlobalEventHandlers/onformdata", "onformdata")}} プロパティからも利用できます。
- {{domxref("HTMLFormElement/reset_event", "reset")}}
  - : `reset` イベントはフォームがリセットされたときに発行されます。
    {{domxref("GlobalEventHandlers/onreset", "onreset")}} プロパティからも利用できます。
- {{domxref("HTMLFormElement/submit_event", "submit")}}
  - : `submit` イベントはフォームが送信されたときに発行されます。
    {{domxref("GlobalEventHandlers/onsubmit", "onsubmit")}} プロパティからも利用できます。

## 使用上の注意

### フォーム要素オブジェクトの取得

`HTMLFormElement` オブジェクトを取得するには、[CSS selector](/ja/docs/Web/CSS/CSS_Selectors) と {{domxref("ParentNode.querySelector", "querySelector()")}}を使うか、document の {{domxref("Document.forms", "forms")}} プロパティを使ってすべてのフォームのリストを取得できます。

{{domxref("Document.forms")}} は `HTMLFormElement` オブジェクトの配列、つまりそのページの各フォームの一覧を返します。個別のフォームを取得するには、下記の文法を使うことができます:

- `document.forms[index]`
  - : フォーム配列の指定した `index` のフォームを返します。
- `document.forms[id]`
  - : ID が `id`であるフォームを返します。
- `document.forms[name]`
  - : {{domxref("Element.name", "name")}} 属性値が `name`であるフォームを返します。

### フォーム内の要素へのアクセス

フォームのデータを含む要素の一覧にアクセスするには、フォームの{{domxref("HTMLFormElement.elements", "elements")}} プロパティを調べることでできます。これはフォームのユーザーデータ入力要素の全一覧の{{domxref("HTMLFormControlsCollection")}} を返し、これには `<form>` の子孫と、`form` 属性を使ったフォームのメンバーからなるものの両方が返されます。

フォームの要素を探すのに `form` のキーとして `name` 属性を使うこともできますが、 `elements` を使うのがより良い方法です—フォーム要素*のみ*を含み、`form`の他の属性と混合されることがないです。

### 要素の名前付けの問題

名前によっては JavaScript からのプロパティや要素のアクセスが干渉します。

例えば、

- `<input name="id">` は `<form id="…">`に優先します。つまり `form.id` ではフォームの id を参照せずに、名前が "`id`"である要素を参照します。その他のプロパティも同様であり、例えば `<input name="action">` や `<input name="post">`もそうです。
- `<input name="elements">` はフォーム `elements` のコレクションをアクセス不能にします。`form.elements` は個別の要素を参照します。

要素名のこうした問題を避けるには:

- _常に_ `elements` のコレクションを使って、要素名とフォームプロパティとのあいまいさを避けます。
- *決して*要素名に "`elements`" を使わない。

JavaScript を使っていなければ、これは問題になりません。

### フォームコントロールと見なされる要素

The elements included by `HTMLFormElement.elements` and `HTMLFormElement.length` are the following:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (with the exception that any whose {{htmlattrxref("type", "input")}} is `"image"` are omitted for historical reasons)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

No other elements are included in the list returned by `elements`, which makes it an excellent way to get at the elements most important when processing forms.

## 例

Creating a new form element, modifying its attributes, then submitting it:

```js
const f = document.createElement("form"); // Create a form
document.body.appendChild(f);             // Add it to the document body
f.action = "/cgi-bin/some.cgi";           // Add action and method attributes
f.method = "POST";
f.submit();                               // Call the form's submit() method
```

Extract information from a `<form>` element and set some of its attributes:

```html
<form name="formA" action="/cgi-bin/test" method="post">
 <p>Press "Info" for form details, or "Set" to change those details.</p>
 <p>
  <button type="button" onclick="getFormInfo();">Info</button>
  <button type="button" onclick="setFormInfo(this.form);">Set</button>
  <button type="reset">Reset</button>
 </p>

 <textarea id="form-info" rows="15" cols="20"></textarea>
</form>

<script>
  function getFormInfo(){
    // Get a reference to the form via its name
    var f = document.forms["formA"];
    // The form properties we're interested in
    var properties = [ 'elements', 'length', 'name', 'charset', 'action', 'acceptCharset', 'action', 'enctype', 'method', 'target' ];
    // Iterate over the properties, turning them into a string that we can display to the user
    var info = properties.map(function(property) { return property + ": " + f[property] }).join("\n");

    // Set the form's <textarea> to display the form's properties
    document.forms["formA"].elements['form-info'].value = info; // document.forms["formA"]['form-info'].value would also work
  }

  function setFormInfo(f){ // Argument should be a form element reference.
    f.action = "a-different-url.cgi";
    f.name   = "a-different-name";
  }
</script>
```

Submit a `<form>` into a new window:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Example new-window form submission</title>
</head>
<body>

<form action="test.php" target="_blank">
  <p><label>First name: <input type="text" name="firstname"></label></p>
  <p><label>Last name: <input type="text" name="lastname"></label></p>
  <p><label><input type="password" name="pwd"></label></p>

  <fieldset>
   <legend>Pet preference</legend>

    <p><label><input type="radio" name="pet" value="cat"> Cat</label></p>
    <p><label><input type="radio" name="pet" value="dog"> Dog</label></p>
  </fieldset>

  <fieldset>
    <legend>Owned vehicles</legend>

    <p><label><input type="checkbox" name="vehicle" value="Bike">I have a bike</label></p>
    <p><label><input type="checkbox" name="vehicle" value="Car">I have a car</label></p>
  </fieldset>

  <p><button>Submit</button></p>
</form>

</body>
</html>
```

### XMLHttpRequest を使用したフォームの送信とファイルのアップロード

If you want to know how to serialize and submit a form using the {{domxref("XMLHttpRequest")}} API, please read [this paragraph](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files).

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "#htmlformelement", "HTMLFormElement")}}                 | {{Spec2('HTML WHATWG')}} | `requestAutocomplete()` メソッドを追加。                                                                                                                                                                                                                                             |
| {{SpecName('HTML5 W3C', "sec-forms.html#htmlformelement", "HTMLFormElement")}} | {{Spec2('HTML5 W3C')}}     | elements プロパティが生の {{domxref("HTMLCollection")}} の代わりに {{domxref("HTMLFormControlsCollection")}} を返すようになった。これは主に技術的な変更。`checkValidity()` メソッドを追加。`autocomplete`, `noValidate`, `encoding` の各プロパティを追加。 |

## ブラウザーの互換性

{{Compat("api.HTMLFormElement")}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("form") }}
