---
title: '<dialog>: ダイアログ要素'
slug: Web/HTML/Element/dialog
---

{{HTMLSidebar}}

**HTML の `<dialog>` 要素**は、ダイアログボックスや、消すことができるアラート、インスペクター、サブウィンドウ等のような対話的コンポーネントを表します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a
          href="/ja/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots"
          >区分化ルート</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可された内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可された親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるあらゆる要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可された ARIA ロール</th>
      <td><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/alertdialog_role">alertdialog</a></code></td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

> **警告:** `tabindex` 属性を `<dialog>` 要素で使用してはいけません。

- {{htmlattrdef("open")}}
  - : ダイアログがアクティブで操作で使用できることを示します。 `open` 属性が設定されていないときは、ダイアログはユーザーに表示する*べきではありません*。

## 使用上の注意

- {{HTMLElement("form")}} 要素は `method="dialog"` 属性が指定されていれば、ダイアログを閉じることができます。そのようなフォームが送信されると、 {{domxref("HTMLDialogElement.returnValue", "returnValue")}} プロパティにフォーム送信するために使用されたボタンの `value` が設定されて、ダイアログが閉じられます。
- CSS の {{cssxref('::backdrop')}} 擬似要素を使用して、 `<dialog>` 要素が {{domxref("HTMLDialogElement.showModal()")}} で表示されたときの背後のスタイルを設定することができます。例えば、モーダルダイアログの背後にある操作できないコンテンツを暗くするなどです。

## 例

### シンプルな例

```html
<dialog open>
  <p>Greetings, one and all!</p>
</dialog>
```

### 応用的な例

この例では、 "Update details" ボタンをクリックすると、フォームを含むポップアップダイアログボックスが開きます。

#### HTML

```html
<!-- Simple pop-up dialog box containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p><label>Favorite animal:
      <select>
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </label></p>
    <menu>
      <button value="cancel">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>

<output aria-live="polite"></output>
```

#### JavaScript

```js
var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var selectEl = document.querySelector('select');
var confirmBtn = document.getElementById('confirmBtn');

// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});
```

### 結果

{{EmbedLiveSample("Advanced_example", "100%", 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.dialog")}}

## ポリフィル

`<dialog>` 要素のないブラウザーには、このポリフィルを含めてください。

[dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)

## 関連情報

- {{domxref("HTMLDialogElement/close_event", "close")}} イベント
- {{domxref("HTMLDialogElement/cancel_event", "cancel")}} イベント
- [HTML フォームガイド](/ja/docs/Web/Guide/HTML/Forms)
- {{cssxref("::backdrop")}} 擬似要素
