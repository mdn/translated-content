---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: 5635446aa0127d686183ddd4fd5adcc34be567da
---

{{APIRef("HTML DOM")}}

**`HTMLTextAreaElement`** インターフェイスは、 {{HTMLElement("textarea")}} 要素のレイアウトや表示を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>accessKey</code></td>
      <td>
        <code><em>文字列</em>:</code> この要素の
        <a href="/ja/docs/Web/HTML/Element/textarea#accesskey"><code>accesskey</code></a> 属性を取得／設定します。
      </td>
    </tr>
    <tr>
      <td><code>autocapitalize</code> {{experimental_inline}}</td>
      <td>
        <code><em>文字列</em>:</code> この要素がユーザーの入力を大文字化する動作を取得／設定します。有効な値は、 <code>none</code>, <code>off</code>, <code>characters</code>, <code>words</code>, <code>sentences</code> です。
      </td>
    </tr>
    <tr>
      <td><code>autocomplete</code> {{experimental_inline}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>autofocus</code></td>
      <td>
        <code><em>論理値</em>:</code> この要素の
        <a href="/ja/docs/Web/HTML/Element/textarea#autofocus"><code>autofocus</code></a> 属性を取得／設定します。これはページ読み込み時にこのコントロールにフォーカスを当てるか否かを示します。
      </td>
    </tr>
    <tr>
      <td><code>cols</code></td>
      <td>
        <code><em>unsigned long</em>:</code> この要素の
        <a href="/ja/docs/Web/HTML/Element/textarea#cols"><code>cols</code></a> 属性を取得／設定します。このテキストエリアの表示上の幅を示します。
      </td>
    </tr>
    <tr>
      <td><code>defaultValue</code></td>
      <td>
        <code><em>文字列</em>:</code> このコントロールの既定値を取得／設定します。 {{domxref("Node.textContent")}} プロパティと同様に動作します。
      </td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>
        <code><em>論理値</em>:</code> この要素の
        <a href="/ja/docs/Web/HTML/Element/textarea#disabled"><code>disabled</code></a> 属性を取得／設定します。このコントロールを操作不可にするかどうかを示します。
      </td>
    </tr>
    <tr>
      <td><code>form</code> {{ReadOnlyInline}}</td>
      <td>
        <code><em>オブジェクト</em>:</code> 親フォーム要素への参照を返します。この要素がフォーム要素配下にない場合、任意の {{HTMLElement("form")}} 要素の <a href="/ja/docs/Web/HTML/Element/form#id"><code>id</code></a> 属性もしくは <code>null</code> 値になります。
      </td>
    </tr>
    <tr>
      <td><code>inputMode</code> {{experimental_inline}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>maxLength</code></td>
      <td>
        <code><em>long</em>:</code> この要素の
        <a href="/ja/docs/Web/HTML/Element/textarea#maxlength"><code>maxlength</code></a> 属性を取得／設定します。これはユーザーが入力できる最大文字数を示します。この制約は値が変更されたときのみ評価されます。
      </td>
    </tr>
    <tr>
      <td><code>minLength</code></td>
      <td>
        <code><em>long</em>:</code> この要素の
        <a href="/ja/docs/Web/HTML/Element/textarea#minlength"><code>minlength</code></a> 属性を取得／設定します。これはユーザーが入力できる最小文字数を表示します。この制約は値が変更されたときのみ評価されます。
      </td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>
        <code><em>文字列</em>:</code> この要素の
        <a href="/ja/docs/Web/HTML/Element/textarea#name"><code>name</code></a> 属性を取得／設定します。このコントロールの名前が入ります。
      </td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>
        <code><em>文字列</em>:</code> この要素の <a href="/ja/docs/Web/HTML/Element/textarea#placeholder"><code>placeholder</code></a> 属性を取得／設定します。これは利用者がこのコントロールに入力するに当たっての助言が入ります。
      </td>
    </tr>
    <tr>
      <td><code>readOnly</code></td>
      <td>
        <code><em>論理値</em>:</code> この要素の <a href="/ja/docs/Web/HTML/Element/textarea#readonly"><code>readonly</code></a> 属性を取得／設定します。ユーザーがこのコントロールの値を変更できないことを示します。
      </td>
    </tr>
    <tr>
      <td><code>required</code></td>
      <td>
        <code><em>論理値</em>:</code> この要素の <a href="/ja/docs/Web/HTML/Element/textarea#required"><code>required</code></a> 属性を取得／設定します。これはユーザーがフォームを送信する前に値を指定しなければならないことを示します。
      </td>
    </tr>
    <tr>
      <td><code>rows</code></td>
      <td>
        <code><em>unsigned long</em>:</code> この要素の <a href="/ja/docs/Web/HTML/Element/textarea#rows"><code>rows</code></a> 属性を取得／設定します。このコントロールに表示できるテキストの行数を示します。
      </td>
    </tr>
    <tr>
      <td><code>selectionDirection</code></td>
      <td>
        <code><em>文字列</em>:</code> 選択が行われた方向を取得／設定します。これは選択が現在のロケールで先頭から末尾の方向に行われた場合は "<code>forward</code>"、逆方向ならば "<code>backward</code>" です。方向が不明であれば "<code>none</code>" になることもあります。
      </td>
    </tr>
    <tr>
      <td><code>selectionEnd</code></td>
      <td>
        <code><em>unsigned long</em>:</code> 選択中のテキストの終了位置を取得／設定します。テキストが選択されていない場合は、入力カーソルの次の文字の位置が入ります。値を設定すると、コントロールは <code>setSelectionRange()</code> がこの値を第 2 引数として、 <code>selectionStart</code> を第 1 引数として呼び出されたかのように動作します。
      </td>
    </tr>
    <tr>
      <td><code>selectionStart</code></td>
      <td>
        <code><em>unsigned long</em>:</code> 選択中のテキストの開始位置を取得／設定します。テキストが選択されていない場合は、入力カーソルの次の文字の位置が入ります。値を設定すると、コントロールは <code>setSelectionRange()</code> がこの値を第1引数として、 <code>selectionEnd</code> を第 2 引数として呼び出されたかのように動作します。
      </td>
    </tr>
    <tr>
      <td><code>tabIndex</code></td>
      <td>
        <code><em>long</em>:</code> 現在の文書でタブキーを用いた移動順の中での要素の位置を取得／設定します。
      </td>
    </tr>
    <tr>
      <td><code>textLength</code> {{ReadOnlyInline}}</td>
      <td>
        <code><em>long</em>:</code> このコントロールの <code>value</code> のコードポイント長を返します。 <code>value.length</code> 値を読むのと同じです。
      </td>
    </tr>
    <tr>
      <td><code>type</code> {{ReadOnlyInline}}</td>
      <td>
        <code><em>文字列</em>:</code> <code>textarea</code> という文字列を返します。
      </td>
    </tr>
    <tr>
      <td><code>validationMessage</code> {{ReadOnlyInline}}</td>
      <td>
        <code><em>文字列</em>:</code> コントロールが満たさない検証制約（ある場合）を記述したローカライズされたメッセージを返します。
        コントロールが制約検証の候補でない（<code>willValidate</code> が <code>false</code> の）場合、または制約を満たしている場合、これは空の文字列となります。
      </td>
    </tr>
    <tr>
      <td><code>validity</code> {{ReadOnlyInline}}</td>
      <td>
        <code><em>{{domxref("ValidityState")}} オブジェクト</em>:</code> この要素の検証の状態を返します。
      </td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>
        <code><em>文字列</em>:</code> このコントロール内の生の値を取得／設定します。
      </td>
    </tr>
    <tr>
      <td><code>willValidate</code> {{ReadOnlyInline}}</td>
      <td>
        <p>
          <code><em>論理値</em>:</code> この要素が制約検証の対象となるかどうかを返します。何か制約検証を妨げる条件があれば <code>false</code> となります。これには <code>readOnly</code> や <code>disabled</code> プロパティの値が <code>true</code> である場合も含みます。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>wrap</code></td>
      <td>
        <code><em>文字列</em>:</code> HTML の <a href="/ja/docs/Web/HTML/Element/textarea#wrap"><code>wrap</code></a> 属性を取得／設定します。このコントロールでのテキストの折り返し方法を示します。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLTextAreaElement.labels")}} {{ReadOnlyInline}}
      </td>
      <td>
        {{domxref("NodeList")}}: この要素に関連付けられたラベル要素のリストを返します。
      </td>
    </tr>
  </tbody>
</table>

`tabIndex` と `accessKey` の 2 つのプロパティは、 HTML5 では {{domxref("HTMLElement")}} から継承していますが、 DOM Level 2 HTML および早期の仕様書では `HTMLTextAreaElement` で定義されていました。

## インスタンスメソッド

<table class="standard-table">
  <tbody>
    <tr>
      <td>{{domxref("HTMLElement/blur", "blur()")}}</td>
      <td>
        コントロールからフォーカスを外します。以降のキー入力はどこへも行きません。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement/focus", "focus()")}}</td>
      <td>
        コントロールにフォーカスを与えます。以降のキー入力はこの要素に入ります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement/select", "select()")}}
      </td>
      <td>コントロールの内容を選択します。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement/setRangeText", "setRangeText()")}}
      </td>
      <td>要素のテキストのある範囲を新しいテキストで置き換えます。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement/setSelectionRange", "setSelectionRange()")}}
      </td>
      <td>要素のテキストのある範囲を選択します (ただし、フォーカスを与えません)。</td>
    </tr>
    <tr>
      <td><code>checkValidity()</code></td>
      <td>
        この要素が制約検証の対象であり、制約を満たしていない場合は <code>false</code> を返します。この場合、キャンセル可能な <code>invalid</code> イベントもコントロール上に発生します。このコントロールが制約検証の対象でない場合や、制約を満たしている場合は <code>true</code> を返します。
      </td>
    </tr>
    <tr>
      <td><code>reportValidity()</code></td>
      <td>
        <p>
          このメソッドは要素上の制約の問題がもしあれば、ユーザーに報告します。問題があれば、キャンセル可能な <code>invalid</code> イベントを発生させ、 <code>false</code> を返します。問題がなければ、 <code>true</code> を返します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>setCustomValidity(DOMstring)</code></td>
      <td>
        要素に独自の検証メッセージを設定します。このメッセージが空文字列でない場合は、要素は独自の検証エラーに陥っており、検証が成功しません。
      </td>
    </tr>
  </tbody>
</table>

`blur()` と `focus()` の 2 つのメソッドは、{{domxref("HTMLElement")}} から継承しています。

## イベント

これらのイベントを待ち受けするには {{domxref("EventTarget/addEventListener", "addEventListener()")}} を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{domxref("HTMLElement/input_event", "input")}} イベント
  - : {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} の各要素の `value` が変化したときに発生します。
- {{domxref("HTMLTextAreaElement/selectionchange_event", "selectionchange")}} イベント {{experimental_inline}}
  - : {{HTMLElement("textarea")}} 要素のテキスト選択範囲が変更されたときに発行されます。

## 例

### 自動拡張するテキストエリアの例

入力していくとテキストエリアが自動拡張するようにします。

#### JavaScript

```js
function autoGrow(oField) {
  if (oField.scrollHeight > oField.clientHeight) {
    oField.style.height = `${oField.scrollHeight}px`;
  }
}
```

#### CSS

```css
textarea.noscrollbars {
  overflow: hidden;
  width: 300px;
  height: 100px;
}
```

#### HTML

```html
<form>
  <fieldset>
    <legend>Your comments</legend>
    <p><textarea class="noscrollbars" onkeyup="autoGrow(this);"></textarea></p>
    <p><input type="submit" value="Send" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

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
  const newURL = prompt("Enter the full URL for the link");
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

{{EmbedLiveSample('Insert_HTML_tags_example', 600, 300)}}

### 長さと行数の制限の例

1 行あたりの最大文字数と最大行数のあるテキストエリアを作成します。

最初に、テキストフィールドと入力時のキーイベントを取り、何れかの制限に達したかどうかを判断する関数を作成します。判断に達していなければ、そのキーを返します。

```js
function checkRows(oField, oKeyEvent) {
  let nKey = (
      oKeyEvent ||
      /* old IE */ window.event || /* check is not supported! */ { keyCode: 38 }
    ).keyCode,
    // 行の最大文字数をここに入力
    nCols = 30,
    // 最大行数をここに入力
    nRows = 5,
    nSelS = oField.selectionStart,
    nSelE = oField.selectionEnd,
    sVal = oField.value,
    nLen = sVal.length,
    nBackward = nSelS >= nCols ? nSelS - nCols : 0,
    nDeltaForw =
      sVal
        .substring(nBackward, nSelS)
        .search(new RegExp(`\\n(?!.{0,${String(nCols - 2)}}\\n)`)) + 1,
    nRowStart = nBackward + nDeltaForw,
    aReturns = (
      sVal.substring(0, nSelS) + sVal.substring(nSelE, sVal.length)
    ).match(/\n/g),
    nRowEnd = nSelE + nRowStart + nCols - nSelS,
    sRow =
      sVal.substring(nRowStart, nSelS) +
      sVal.substring(nSelE, nRowEnd > nLen ? nLen : nRowEnd),
    bKeepCols =
      nKey === 13 ||
      nLen + 1 < nCols ||
      /\n/.test(sRow) ||
      ((nRowStart === 0 || nDeltaForw > 0 || nKey > 0) &&
        (sRow.length < nCols ||
          (nKey > 0 && (nLen === nRowEnd || sVal.charAt(nRowEnd) === "\n"))));

  return (
    (nKey !== 13 || (aReturns ? aReturns.length + 1 : 1) < nRows) &&
    ((nKey > 32 && nKey < 41) || bKeepCols)
  );
}
```

HTML では、この関数を `onkeypress` イベントでフックし、テキストエリアが貼り付けを受け付けないように設定します。

```html
<form>
  <p>
    Textarea with fixed number of characters per line:<br />
    <textarea
      cols="50"
      rows="10"
      onkeypress="return checkRows(this, event);"
      onpaste="return false;"></textarea>
  </p>
</form>
```

{{EmbedLiveSample('Maximum_length_and_number_of_lines_example', 600, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
