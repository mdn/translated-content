---
title: 'HTMLDialogElement: cancel イベント'
slug: Web/API/HTMLDialogElement/cancel_event
---

{{APIRef}}

**`cancel`** イベントは、ユーザーが現在開いているダイアログを閉じたいと操作したときに {{HTMLElement("dialog")}} に発生します。例えば、ユーザーがブラウザーの UI の中で <kbd>Esc</kbd> キーを押したり、「ダイアログを閉じる」ボタンをクリックしたりしたときにブラウザーがこのイベントを発生させることがあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/oncancel", "oncancel")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### ライブ例

#### HTML

```html
<dialog class="example-dialog">
    <button class="close" type="reset">Close</button>
</dialog>

<button class="open-dialog">Open dialog</button>

<div class="result"></div>
```

```css hidden
button, div {
    margin: .5rem;
}
```

#### JS

```js
const result = document.querySelector('.result');

const dialog = document.querySelector('.example-dialog');

dialog.addEventListener('cancel', (event) => {
  result.textContent = 'dialog was canceled';
});

const openDialog = document.querySelector('.open-dialog');
openDialog.addEventListener('click', () => {
  if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      result.textContent = '';
  } else {
      result.textContent = 'The dialog API is not supported by this browser';
  }
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    dialog.close();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '100px') }}

## 仕様書

| 仕様書                                                                                       | 状態                             |
| -------------------------------------------------------------------------------------------- | -------------------------------- |
| {{ SpecName('HTML WHATWG', 'indices.html#event-cancel', 'cancel') }} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.HTMLDialogElement.cancel_event")}}

## 関連情報

- {{domxref("GlobalEventHandlers.oncancel")}}
- HTML {{HTMLElement("dialog")}} element
- {{domxref("HTMLDialogElement/close_event", "close")}}
