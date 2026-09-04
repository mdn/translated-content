---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement`** インターフェイスは DOM 内の {{HTMLElement("form")}} 要素を表します。これは、フォームのコンポーネント要素へのアクセスだけでなく、フォームの様々な側面へのアクセスや、場合によっては変更を可能にします。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには親である {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLFormElement.elements")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormControlsCollection")}} で、このフォーム要素に所属するすべてのフォームコントロールを保持します。
- {{domxref("HTMLFormElement.length")}} {{ReadOnlyInline}}
  - : `long` で、フォーム内のコントロールの数を反映します。
- {{domxref("HTMLFormElement.name")}}
  - : 文字列で、フォームの [`name`](/ja/docs/Web/HTML/Reference/Elements/form#name) 属性の値を反映し、フォームの名前を表します。
- {{domxref("HTMLFormElement.method")}}
  - : 文字列で、フォームの [`method`](/ja/docs/Web/HTML/Reference/Elements/form#method) 属性の値を反映し、フォームを送信するために使用する HTTP メソッドを示します。指定された値のみが設定できます。
- {{domxref("HTMLFormElement.target")}}
  - : 文字列で、フォームの [`target`](/ja/docs/Web/HTML/Reference/Elements/form#target) 属性の値を反映し、フォームを送信して受け取った結果を表示する場所を示します。
- {{domxref("HTMLFormElement.action")}}
  - : 文字列で、フォームの [`action`](/ja/docs/Web/HTML/Reference/Elements/form#action) 属性の値を反映し、フォームによって送信された情報を処理するプログラムの URI を示します。
- {{domxref("HTMLFormElement.encoding")}} または {{domxref("HTMLFormElement.enctype")}}
  - : 文字列で、フォームの [`enctype`](/ja/docs/Web/HTML/Reference/Elements/form#enctype) 属性の値を反映し、フォームをサーバーへ送信するのに使用するコンテンツの型を示します。指定された方のみが設定できます。二つのプロパティは別名です。
- {{domxref("HTMLFormElement.acceptCharset")}}
  - : 文字列で、フォームの [`accept-charset`](/ja/docs/Web/HTML/Reference/Elements/form#accept-charset) 属性の値を反映し、サーバーが受け付ける文字エンコーディングを表します。
- {{domxref("HTMLFormElement.autocomplete")}}
  - : 文字列で、フォームの [`autocomplete`](/ja/docs/Web/HTML/Reference/Elements/form#autocomplete) 属性の値を反映し、ブラウザーが自動的にこのフォーム内のコントロールの値を生み出すことができるかどうかを示します。
- {{domxref("HTMLFormElement.noValidate")}}
  - : {{jsxref("Boolean")}} で、フォームの [`novalidate`](/ja/docs/Web/HTML/Reference/Elements/form#novalidate) 属性の値を反映し、フォームの検証を行わないかどうかを示します。

名前の付いた入力欄がプロパティとしてオーナーのフォームのインスタンスに追加され、同じ名前のネイティブのプロパティがあると上書きしてしまいます（例えば、フォームに `action` という名前の入力欄がある場合、 `action` プロパティはフォームの [`action`](/ja/docs/Web/HTML/Reference/Elements/form#action) 属性ではなくその入力欄を返します）。

## インスタンスメソッド

_このインターフェイスには親である {{domxref("HTMLElement")}} から継承したメソッドもあります。_

- {{domxref("HTMLFormElement.checkValidity", "checkValidity()")}}
  - : この要素の子コントロールが[制約検証](/ja/docs/Web/HTML/Guides/Constraint_validation)の対象となり、それらの制約を満たしている場合は `true` を返します。制約を満たさないコントロールがある場合は `false` を返します。制約を満たさないコントロールに対して、{{domxref("HTMLInputElement/invalid_event", "invalid")}} という名前のイベントを発生させます。イベントがキャンセルされない場合、そのようなコントロールは無効とみなされます。`false` にどう対応するかはプログラマー次第です。
- {{domxref("HTMLFormElement.reportValidity", "reportValidity()")}}
  - : 要素の子コントロールがその[検証する制約](/ja/docs/Web/HTML/Guides/Constraint_validation)を満たしている場合、`true` を返します。`false` が返された場合、無効な子要素それぞれにキャンセル可能な {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントが発生し、検証上の問題がユーザーに報告されます。
- {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}}
  - : 指定された送信ボタンとそれに対応する設定を使用してフォームを送信するよう要求します。
- {{domxref("HTMLFormElement.reset", "reset()")}}
  - : フォームを初期状態にリセットします。
- {{domxref("HTMLFormElement.submit", "submit()")}}
  - : フォームをサーバーへ送信します。

## イベント

これらのイベントを待ち受けするには、`addEventListener()` を使用するか、このインターフェイスの `oneventname` プロパティへイベントリスナーを代入するかしてください。

- {{domxref("HTMLFormElement/formdata_event", "formdata")}}
  - : `formdata` イベントは、フォームのデータを表す項目リストが構築されると発行されます。
- {{domxref("HTMLFormElement/reset_event", "reset")}}
  - : `reset` イベントはフォームがリセットされたときに発行されます。
- {{domxref("HTMLFormElement/submit_event", "submit")}}
  - : `submit` イベントはフォームが送信されたときに発行されます。

## 使用上の注意

### フォーム要素オブジェクトの取得

`HTMLFormElement` オブジェクトを取得するには、[CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)と {{domxref("Document.querySelector", "querySelector()")}} を使うか、document の {{domxref("Document.forms", "forms")}} プロパティを使ってすべてのフォームのリストを取得できます。

{{domxref("Document.forms")}} は `HTMLFormElement` オブジェクトの配列、つまりそのページの各フォームの一覧を返します。その後、以下の構文を使用して、個々のフォームを取得することができます。

- `document.forms[index]`
  - : フォーム配列の指定した `index` のフォームを返します。
- `document.forms[id]`
  - : ID が `id` であるフォームを返します。
- `document.forms[name]`
  - : `name` 属性値が `name` であるフォームを返します。

### フォーム内の要素へのアクセス

フォームのデータを含む要素の一覧にアクセスするには、フォームの {{domxref("HTMLFormElement.elements", "elements")}} プロパティを調べることでできます。これはフォームのユーザーデータ入力要素をすべて列挙する {{domxref("HTMLFormControlsCollection")}} を返します。これには `<form>` の子孫と、 `form` 属性を使ったフォームのメンバーからなるものの両方が返されます。

フォームの要素を探すのに `form` のキーとして `name` 属性を使うこともできますが、 `elements` を使うのがより良い方法です。フォーム要素*のみ*を含み、`form` の他の属性と混合されることがないからです。

### 要素の名前付けの問題

名前によっては JavaScript からのプロパティや要素のアクセスに干渉します。

例えば、

- `<input name="id">` は `<form id="…">` よりも優先されます。つまり `form.id` ではフォームの id を参照せずに、名前が `"id"` である要素を参照します。その他のプロパティも同様であり、例えば `<input name="action">` や `<input name="post">` もそうです。
- `<input name="elements">` を使うと、`elements` のコレクションがアクセス不能になります。`form.elements` は特定の要素を参照するようになります。

要素名のこうした問題を避けるには、

- _常に_ `elements` のコレクションを使って、要素名とフォームプロパティとのあいまいさを避けましょう。
- *決して*要素名に `"elements"` を使わないでください。

JavaScript を使っていなければ、これは問題になりません。

### フォームコントロールと見なされる要素

`HTMLFormElement.elements` および `HTMLFormElement.length` に含まれる要素は以下のものです。

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} （[`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) が `"image"` のものは歴史的な理由により除外されます）
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

`elements` が返す一覧には他の要素が記載されないので、フォームを処理する際に最も重要な要素を取得するための優れた方法となります。

## 例

新しいフォーム要素を作成し、その属性を変更し、送信します。

```js
const f = document.createElement("form"); // フォームを作成
document.body.appendChild(f); // 文書の本体に追加
f.action = "/cgi-bin/some.cgi"; // action および method 属性を追加
f.method = "POST";
f.submit(); // フォームの submit() メソッド
```

`<form>` 要素から情報を取り出し、その属性のいくつかを設定します。

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
  function getFormInfo() {
    // フォームの名前からそのフォームへの参照を取得する
    const f = document.forms["formA"];
    // 関心のあるフォームプロパティ
    const properties = [
      "elements",
      "length",
      "name",
      "charset",
      "action",
      "acceptCharset",
      "action",
      "enctype",
      "method",
      "target",
    ];
    // プロパティを反復処理し、文字列に円関してユーザーに表示できるようにする
    const info = properties
      .map((property) => `${property}: ${f[property]}`)
      .join("\n");

    // フォームの <textarea> にフォームのプロパティを表示するように設定する
    document.forms["formA"].elements["form-info"].value = info; // document.forms["formA"]['form-info'].value would also work
  }

  function setFormInfo(f) {
    // 引数は、フォーム要素の参照でなければならない
    f.action = "a-different-url.cgi";
    f.name = "a-different-name";
  }
</script>
```

`<form>` を新しいウィンドウへ送信します。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Example new-window form submission</title>
  </head>
  <body>
    <form action="test.php" target="_blank">
      <p>
        <label>First name: <input type="text" name="first-name" /></label>
      </p>
      <p>
        <label>Last name: <input type="text" name="last-name" /></label>
      </p>
      <p>
        <label><input type="password" name="pwd" /></label>
      </p>

      <fieldset>
        <legend>Pet preference</legend>

        <p>
          <label><input type="radio" name="pet" value="cat" /> Cat</label>
        </p>
        <p>
          <label><input type="radio" name="pet" value="dog" /> Dog</label>
        </p>
      </fieldset>

      <fieldset>
        <legend>Owned vehicles</legend>

        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Bike" />I have a
            bike</label
          >
        </p>
        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Car" />I have a
            car</label
          >
        </p>
      </fieldset>

      <p><button>Submit</button></p>
    </form>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("form")}}
