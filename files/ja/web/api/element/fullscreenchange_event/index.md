---
title: 'Element: fullscreenchange イベント'
slug: Web/API/Element/fullscreenchange_event
---

{{APIRef}}

`fullscreenchange` イベントは、ある要素 ({{domxref("Element")}}) が全画面モードに切り替わったり、終了したりした直後に発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("Element.onfullscreenchange", "onfullscreenchange")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントは、全画面モードへ移行または終了する要素 (`Element`) へ送られます。

## 例

この例では、 `fullscreenchange` イベントのハンドラーは、 ID が `fullscreen-div` である要素に追加されます。

ユーザーが "Toggle Fullscreen Mode" ボタンをクリックすると、 `click` ハンドラーが `div` の全画面モードを切り替えます。もし `document.fullscreenElement` に値があれば、全画面モードを終了します。そうでなければ、 div は全画面モードに移行します。

`fullscreenchange` イベントが処理されたとき、要素の状態はすでに変化していることを思い出してください。よって、全画面モードへ変化した場合は、 `document.fullscreenElement` が全画面モードになった要素を指します。一方、 `document.fullscreenElement` が null の場合は、全画面モードが取り消されています。

すなわち、この例のコードでは、要素が現在全画面モードである場合、 `fullscreenchange` ハンドラーはコンソールへ全画面の要素の `id` をログ出力します。 `document.fullscreenElement` が null の場合は、このコードは全画面モードが終了した旨をログ出力します。

### HTML

```html
 <h1>fullscreenchange event example</h1>
 <div id="fullscreen-div">
   <button id="toggle-fullscreen">Toggle Fullscreen Mode</button>
 </div>
```

### JavaScript

```js
document.getElementById('fullscreen-div').addEventListener('fullscreenchange', (event) => {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If not, the value
  // of the property is null.
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
  } else {
    console.log('Leaving full-screen mode.');
  }
});

document.getElementById('toggle-fullscreen').addEventListener('click', (event) => {
  if (document.fullscreenElement) {
    // exitFullscreen is only available on the Document object.
    document.exitFullscreen();
  } else {
    document.getElementById('fullscreen-div').requestFullscreen();
  }
});
```

## 仕様書

| 仕様書                                                                                     | 状態            |
| ------------------------------------------------------------------------------------------ | --------------- |
| [Fullscreen API](https://fullscreen.spec.whatwg.org/) | Living Standard |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Document: fullscreenchange イベント](/ja/docs/Web/API/Document/fullscreenchange_event)
- [Element: fullscreenerror イベント](/ja/docs/Web/API/Element/fullscreenerror_event)
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
