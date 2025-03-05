---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

**`HTMLTextAreaElement`** インターフェイスは、 {{HTMLElement("textarea")}} 要素のレイアウトや表示を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{DOMxRef("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLTextAreaElement.autocomplete", "autocomplete")}}
  - : 文字列で、この要素の [`autocomplete`](/ja/docs/Web/HTML/Element/textarea#autocomplete) 属性を表しいます。
- {{domxref("HTMLTextAreaElement.cols", "cols")}}
  - : 数値で、この要素の [`cols`](/ja/docs/Web/HTML/Element/textarea#cols) 属性を表します。これはテキストエリアの表示上の幅を示します。
- {{domxref("HTMLTextAreaElement.defaultValue", "defaultValue")}}
  - : 文字列で、このコントロールの既定値を表します。 {{domxref("Node.textContent")}} プロパティのように動作します。
- {{domxref("HTMLTextAreaElement.dirName", "dirName")}}
  - : 文字列で、この要素の書字方向を表します。
- {{domxref("HTMLTextAreaElement.disabled", "disabled")}}
  - : 論理値で、この要素の [`disabled`](/ja/docs/Web/HTML/Element/textarea#disabled) 属性を表します。これは、このコントロールが操作できない状態を示します。
- {{domxref("HTMLTextAreaElement.form", "form")}} {{ReadOnlyInline}}
  - : 親フォーム要素への参照を返します。この要素がフォーム要素配下にない場合、任意の {{HTMLElement("form")}} 要素の [`id`](/ja/docs/Web/HTML/Global_attributes/id) 属性もしくは `null` 値になります。
- {{domxref("HTMLTextAreaElement.labels", "labels")}} {{ReadOnlyInline}}
  - : この要素に関連付けられた {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。
- {{domxref("HTMLTextAreaElement.maxLength", "maxLength")}}
  - : 数値で、この要素の [`maxlength`](/ja/docs/Web/HTML/Element/textarea#maxlength) 属性を表します。これはユーザーが入力できる最大文字数を示します。この制約は値が変更されたときのみ評価されます。
- {{domxref("HTMLTextAreaElement.minLength", "minLength")}}
  - : 数値で、この要素の [`minlength`](/ja/docs/Web/HTML/Element/textarea#minlength) 属性を表します。これはユーザーが入力できる最小文字数を示します。この制約は値が変更されたときのみ評価されます。
- {{domxref("HTMLTextAreaElement.name", "name")}}
  - : 文字列で、この要素の [`name`](/ja/docs/Web/HTML/Element/textarea#name) 属性を表します。このコントロールの名前が入ります。
- {{domxref("HTMLTextAreaElement.placeholder", "placeholder")}}
  - : 文字列で、この要素の [`placeholder`](/ja/docs/Web/HTML/Element/textarea#placeholder) 属性を表します。これは利用者がこのコントロールに入力するに当たっての助言が入ります。
- {{domxref("HTMLTextAreaElement.readOnly", "readOnly")}}
  - : 論理値で、この要素の [`readonly`](/ja/docs/Web/HTML/Element/textarea#readonly) 属性を表します。ユーザーがこのコントロールの値を変更できないことを示します。
- {{domxref("HTMLTextAreaElement.required", "required")}}
  - : 論理値で、この要素の [`required`](/ja/docs/Web/HTML/Element/textarea#required) 属性を表します。これはユーザーがフォームを送信する前に値を指定しなければならないことを示します。
- {{domxref("HTMLTextAreaElement.rows", "rows")}}
  - : 数値で、この要素の [`rows`](/ja/docs/Web/HTML/Element/textarea#rows) 属性を表します。このコントロールに表示できるテキストの行数を示します。
- {{domxref("HTMLTextAreaElement.selectionDirection", "selectionDirection")}}
  - : 文字列で、選択が行われた方向を表します。これは選択が現在のロケールで先頭から末尾の方向に行われた場合は `forward`、逆方向ならば `backward` です。方向が不明であれば `none` になることもあります。
- {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}}
  - : 数値で、選択中のテキストの終了位置を表します。テキストが選択されていない場合は、入力カーソルの次の文字の位置が入ります。値を設定すると、コントロールは `setSelectionRange()` がこの値を第 2 引数として、 `selectionStart` を第 1 引数として呼び出されたかのように動作します。
- {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}}
  - : 数値で、選択中のテキストの開始位置を表します。テキストが選択されていない場合は、入力カーソルの次の文字の位置が入ります。値を設定すると、コントロールは `setSelectionRange()` がこの値を第1引数として、 `selectionEnd` を第 2 引数として呼び出されたかのように動作します。
- {{domxref("HTMLTextAreaElement.textLength", "textLength")}} {{ReadOnlyInline}}
  - : このコントロールの `value` のコードポイント数を返します。 `value.length` 値を読むのと同じです。
- {{domxref("HTMLTextAreaElement.type", "type")}} {{ReadOnlyInline}}
  - : 文字列 `textarea` を返します。
- {{domxref("HTMLTextAreaElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}
  - : コントロールが満たさない検証制約（ある場合）を記述したローカライズされたメッセージを返します。コントロールが制約検証の候補でない（`willValidate` が `false` の）場合、または制約を満たしている場合、これは空の文字列となります。
- {{domxref("HTMLTextAreaElement.validity", "validity")}} {{ReadOnlyInline}}
  - : この要素の検証の状態を返します。
- {{domxref("HTMLTextAreaElement.value", "value")}}
  - : このコントロール内の生の値を表します。
- {{domxref("HTMLTextAreaElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : この要素が制約検証の対象となるかどうかを返します。何か制約検証を妨げる条件があれば `false` となります。これには `readOnly` や `disabled` プロパティの値が `true` である場合も含みます。
- {{domxref("HTMLTextAreaElement.wrap", "wrap")}}
  - : 文字列で、 [`wrap`](/ja/docs/Web/HTML/Element/textarea#wrap) 属性を表します。このコントロールでのテキストの折り返し方法を示します。

## インスタンスメソッド

_親インターフェイスである {{DOMxRef("HTMLElement")}} から継承したメソッドもあります。_

- {{domxref("HTMLTextAreaElement.checkValidity", "checkValidity()")}}
  - : この要素が制約検証の対象であり、制約を満たしていない場合は `false` を返します。この場合、キャンセル可能な `invalid` イベントもコントロール上に発生します。このコントロールが制約検証の対象でない場合や、制約を満たしている場合は `true` を返します。
- {{domxref("HTMLTextAreaElement.reportValidity", "reportValidity()")}}
  - : このメソッドは、この要素に制約の問題がもしあれば、ユーザーに報告します。問題があれば、キャンセル可能な `invalid` イベントを発生させ、 `false` を返します。問題がなければ、 `true` を返します。
- {{domxref("HTMLTextAreaElement.select", "select()")}}
  - : このコントロールの内容を選択します。
- {{domxref("HTMLTextAreaElement.setCustomValidity", "setCustomValidity()")}}
  - : この要素に独自の検証メッセージを設定します。このメッセージが空文字列でない場合は、要素は独自の検証エラーに陥っており、検証が成功しません。
- {{domxref("HTMLTextAreaElement.setRangeText", "setRangeText()")}}
  - : この要素のテキストのある範囲を、新しいテキストで置き換えます。
- {{domxref("HTMLTextAreaElement.setSelectionRange", "setSelectionRange()")}}
  - : 要素のテキストのある範囲を選択します（ただし、フォーカスを与えません）。

## イベント

_親インターフェイスである {{DOMxRef("HTMLElement")}} から継承したイベントもあります。_

これらのイベントを待ち受けするには {{domxref("EventTarget/addEventListener", "addEventListener()")}} を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{domxref("HTMLTextAreaElement/select_event", "select")}} イベント
  - : 一部のテキストが選択されたときに発行されます。
- {{domxref("HTMLTextAreaElement/selectionchange_event", "selectionchange")}} イベント {{experimental_inline}}
  - : {{HTMLElement("textarea")}} 要素のテキスト選択範囲が変更されたときに発行されます。

## 例

### 自動拡張するテキストエリアの例

入力していくとテキストエリアが自動拡張するようにします。

#### JavaScript

```js
function autoGrow(field) {
  if (field.scrollHeight > field.clientHeight) {
    field.style.height = `${field.scrollHeight}px`;
  }
}
```

#### CSS

```css
textarea.no-scrollbars {
  overflow: hidden;
  width: 300px;
  height: 100px;
}
```

#### HTML

```html
<form>
  <fieldset>
    <legend>あなたのコメント</legend>
    <p><textarea class="no-scrollbars" onkeyup="autoGrow(this);"></textarea></p>
    <p><input type="submit" value="送信" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample('自動拡張するテキストエリアの例', 600, 300)}}

### HTML タグを挿入する例

いくつかの HTML タグや、<em>顔文字</em>や、カスタムテキストをテキストエリアに挿入します。

#### JavaScript

```js
function insert(startTag, endTag) {
  const textArea = document.myForm.myTxtArea;
  const selectionStart = textArea.selectionStart;
  const selectionEnd = textArea.selectionEnd;
  const oldText = textArea.value;

  const prefix = oldText.substring(0, selectionStart);
  const inserted =
    startTag + oldText.substring(selectionStart, selectionEnd) + endTag;
  const suffix = oldText.substring(selectionEnd);
  textArea.value = `${prefix}${inserted}${suffix}`;

  const newSelectionStart = selectionStart + startTag.length;
  const newSelectionEnd = selectionEnd + startTag.length;
  textArea.setSelectionRange(newSelectionStart, newSelectionEnd);

  textArea.focus();
}

function insertURL() {
  const newURL = prompt("リンクの完全な URL を入力してください");
  if (newURL) {
    insert(`<a href="${newURL}">`, "</a>");
  } else {
    document.myForm.myTxtArea.focus();
  }
}

const strong = document.querySelector("#format-strong");
const em = document.querySelector("#format-em");
const link = document.querySelector("#format-link");
const code = document.querySelector("#format-code");

strong.addEventListener("click", (e) => insert("<strong>", "</strong>"));
em.addEventListener("click", (e) => insert("<em>", "</em>"));
link.addEventListener("click", (e) => insertURL());
code.addEventListener("click", (e) => insert("\n<code>\n", "\n</code>\n"));
```

#### CSS

内部の span をリンクのように動作させるよう装飾する CSS です。

```css
.intLink {
  cursor: pointer;
  text-decoration: underline;
  color: #0000ff;
}
```

HTML:

```html
<form name="myForm">
  <p>
    [&nbsp;
    <span class="intLink" id="format-strong"><strong>Bold</strong></span> |
    <span class="intLink" id="format-em"><em>Italic</em></span> |
    <span class="intLink" id="format-link">URL</span> |
    <span class="intLink" id="format-code">code</span> &nbsp;]
  </p>

  <p>
    <textarea name="myTxtArea" rows="10" cols="50">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, arcu vitae adipiscing placerat, nisl lectus accumsan nisi, vitae iaculis sem neque vel lectus. Praesent tristique commodo lorem quis fringilla. Sed ac tellus eros. Sed consectetur eleifend felis vitae luctus. Praesent sagittis, est eget bibendum tincidunt, ligula diam tincidunt augue, a fermentum odio velit eget mi. Phasellus mattis, elit id fringilla semper, orci magna cursus ligula, non venenatis lacus augue sit amet dui. Pellentesque lacinia odio id nisi pulvinar commodo tempus at odio. Ut consectetur eros porttitor nunc mollis ultrices. Aenean porttitor, purus sollicitudin viverra auctor, neque erat blandit sapien, sit amet tincidunt massa mi ac nibh. Proin nibh sem, bibendum ut placerat nec, cursus et lacus. Phasellus vel augue turpis. Nunc eu mauris eu leo blandit mollis interdum eget lorem.
    </textarea>
  </p>
</form>
```

{{EmbedLiveSample('HTML タグを挿入する例', 600, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
