---
title: "<dialog>: ダイアログ要素"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

**`<dialog>`** は [HTML](/ja/docs/Web/HTML) の要素で、ダイアログボックスや、消すことができるアラート、インスペクター、サブウィンドウ等のような対話的コンポーネントを表します。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

> **警告:** `tabindex` 属性を `<dialog>` 要素で使用してはいけません。

- `open`
  - : ダイアログがアクティブで操作で使用できることを示します。 `open` 属性が設定されていないときは、ダイアログはユーザーに表示する*べきではありません*。
    ダイアログを表示するには、`open` 属性ではなく `.show()` または `.showModal()` メソッドを使用することが推奨されます。もし `<dialog>` が `open` 属性を使用して開かれた場合、そのダイアログはモーダルになりません。

## アクセシビリティの考慮

モーダルダイアログの作成には、HTMLネイティブの `<dialog>` 要素を使用しましょう。これは、ユーザビリティとアクセシビリティの機能を提供するためで、他の要素を同様の目的で使用する場合は、それを再現しなければなりません。ダイアログを表示するには、`.showModal()` または `.show()` メソッドのうち適切な方を使用してください。独自のダイアログの実装を作成する場合は、期待される既定の動作にすべて対応していること、適切なラベル付けが行われていることを確認してください。

ダイアログを実装する際には、ユーザーのフォーカスを設定する場所として最も適切な場所を検討することが重要です。[autofocus](/ja/docs/Web/HTML/Global_attributes/autofocus) 属性を使用して初期フォーカスの配置を明確に示すと、特定のダイアログに対して最適な初期フォーカスの配置とみなされる要素に初期フォーカスが設定するのに役立ちます。ダイアログの初期フォーカスがどこに設定されるか常にわからない場合、特にダイアログのコンテンツが呼び出されたときに動的に描画される場合、必要であれば `<dialog>` 要素そのものにフォーカスを当てることが、初期フォーカスの配置として最適と判断されるかもしれません。`<dialog>` を開くための{{domxref("HTMLDialogElement.showModal()")}}を使用すると、最初にネストしたフォーカス可能な要素にフォーカスが設定されます。

ユーザーがダイアログを閉じることができる機構を確実に用意してください。すべてのユーザーが確実にダイアログを閉じることができるようにする最も確実な方法は、閉じるための明確なボタンを記載することです。例えば、確認、キャンセル、閉じるなどのボタンが適切です。また、キーボードを使用する端末では、<kbd>Esc</kbd> キーでモーダルダイアログも閉じられると考えるのが一般的です。既定では、`showModal()` メソッドによって呼び出された `<dialog>` は、<kbd>Esc</kbd> によって閉じることができます。非モーダルダイアログでは、既定では <kbd>Esc</kbd> キーで閉じませんし、非モーダルダイアログが表すものによっては、この動作が望ましくない場合があります。複数のモーダルダイアログが開いている場合、<kbd>Esc</kbd> は最後に示されたダイアログのみを閉じるようにします。`<dialog>` を使用した場合、この動作はブラウザーによって提供されます。

`<dialog>` 要素は、ARIA の [role="dialog"](/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role) 属性を使用したカスタムダイアログと同じような形で、ブラウザーが提供します。`<dialog>` 要素が `showModal()` メソッドで呼び出された場合、暗黙のうちに [aria-modal="true"](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-modal) となり、一方 `<dialog>` が `show()` メソッド、または `open` 属性を使用して表示されたり `<dialog>` の既定の `display` を変更した場合は `[aria-modal="false"]` として表示されます。モーダルダイアログを実装する際には、`<dialog>` とそのコンテンツ以外は [`inert`](/ja/docs/Web/HTML/Global_attributes/inert) 属性を使って不活性化する必要があります。`<dialog>` を `HTMLDialogElement.showModal()` メソッドで使用した場合、この動作はブラウザーが提供します。

## 使用上の注意

- {{HTMLElement("form")}} 要素は `method="dialog"` 属性が指定されていれば、ダイアログを閉じることができます。そのようなフォームが送信されると、 {{domxref("HTMLDialogElement.returnValue", "returnValue")}} プロパティにフォーム送信するために使用されたボタンの `value` が設定されて、ダイアログが閉じられます。
- CSS の {{cssxref('::backdrop')}} 擬似要素を使用して、 `<dialog>` 要素が {{domxref("HTMLDialogElement.showModal()")}} で表示されたときの背後のスタイルを設定することができます。例えば、モーダルダイアログの背後にある操作できないコンテンツを暗くするなどです。

## 例

### シンプルな例

以下は、非モーダル、つまりモーダルレスなダイアログを表示します。"OK" ボタンは、起動時にダイアログを閉じられるようになっています。

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### 結果

{{EmbedLiveSample("Simple_example", "100%", 200)}}

このダイアログは `open` 属性によって開かれたので、モーダルではありません。この例では、ダイアログが閉じられたとき、それを再び開くためのメソッドは提供されていません。{{domxref("HTMLDialogElement.show()")}} でダイアログを開く方が、論理属性の `open` 属性を切り替えるより望ましいです。

### 高度な例

この例では、"Show the dialog" ボタンをクリックすると、モーダルダイアログを開きます。ダイアログには {{HTMLElement("select")}} と 2 つの {{HTMLElement("button")}} 要素があり、これらは `type="submit"` に既定値として設定されています。`<select>` の値を更新すると、「確認」ボタンの値も更新されます。この値は [`returnValue`](/ja/docs/Web/API/HTMLDialogElement/returnValue) です。<kbd>Esc</kbd>キーでダイアログが閉じられた場合、返値はありません。ダイアログが閉じられた場合、返値は「ダイアログを表示」ボタンの下に表示されます。

#### HTML

```html
<!-- フォームを含むモーダルダイアログ -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Show the dialog</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" ボタンで <dialog> をモーダルに開く
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Favorite animal" 入力で、送信ボタンの値を設定する
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// "Cancel" ボタンで [formmethod="dialog"] による送信を行わずにダイアログを閉じ、close イベントを発行する
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // 空文字列ではなく、既定値かどうかを調べる必要がある
});

// ［確認］ボタンが既定でフォームを送信しないようにし、`close()` メソッドでダイアログを閉じ、"close" イベントを発生させる
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // この偽フォームを送信しない
  favDialog.close(selectEl.value); // ここで選択ボックスの値を送る必要がある
});
```

### 結果

{{EmbedLiveSample("Advanced_example", "100%", 300)}}

このモーダルダイアログは、3 つの方法で閉じることができます。キーボードユーザーの場合、モーダルダイアログは <kbd>Esc</kbd> キーで閉じることができます。この例では、［キャンセル］ボタンは `dialog` フォームメソッドで、［確認］ボタンは {{domxref("HTMLDialogElement.close()")}} メソッドでダイアログを閉じます。
［キャンセル］ボタンには [`formmethod="dialog"`](/ja/docs/Web/HTML/Element/input/submit#formmethod) が含まれており、 {{HTMLElement("form")}} の既定の {{HTTPMethod("GET")}} メソッド ([`method`](/ja/docs/Web/HTML/Element/form#method)) を上書きします。フォームのメソッドが [`dialog`](#usage_notes) の場合、フォームの状態は送信されずに保存され、ダイアログは閉じられます。
`action` がない場合、既定の {{HTTPMethod("GET")}} メソッドでフォームを送信すると、ページの再読み込みが発生します。JavaScript を使用して、送信を阻止し、ダイアログを閉じるために、それぞれ {{domxref("event.preventDefault()")}} と {{domxref("HTMLDialogElement.close()")}} メソッドを使用しています。

すべての `dialog` 要素に閉じるための仕組みを提供することが重要です。既定では、非モーダルのダイアログは <kbd>Esc</kbd> キーでは閉じませんし、ユーザーが物理キーボードにアクセスすることも想定してはいけません（たとえば、キーボードにアクセスできないタッチスクリーン端末を使用している人もいます）。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">区分化ルート</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可された内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可された親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>を受け入れるあらゆる要素
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
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLDialogElement/close_event", "close")}} イベント
- {{domxref("HTMLDialogElement/cancel_event", "cancel")}} イベント
- [HTML フォームガイド](/ja/docs/Learn/Forms)
- {{cssxref("::backdrop")}} 擬似要素
- [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)
