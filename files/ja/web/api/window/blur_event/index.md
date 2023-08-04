---
title: "Window: blur イベント"
slug: Web/API/Window/blur_event
---

{{APIRef}}

**`blur`** イベントは、要素がフォーカスを失ったときに発生します。

`blur` の反対は {{domxref("Window/focus_event", "focus")}} です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{DOMxRef("FocusEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onblur", "onblur")}}
      </td>
    </tr>
    <tr>
      <th scope="row">同期 / 非同期</th>
      <td>同期</td>
    </tr>
    <tr>
      <th scope="row">Composed</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 例

### ライブデモ

この例ではフォーカスを失ったときに文書の外見を変更します。 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} を使用して {{domxref("Window/focus_event", "focus")}} および `blur` イベントを監視します。

#### HTML

```html
<p id="log">Click on this document to give it focus.</p>
```

#### CSS

```css
.paused {
  background: #ddd;
  color: #555;
}
```

#### JavaScript

```js
function pause() {
  document.body.classList.add('paused');
  log.textContent = 'FOCUS LOST!';
}

function play() {
  document.body.classList.remove('paused');
  log.textContent = 'This document has focus. Click outside the document to lose focus.';
}

const log = document.getElementById('log');

window.addEventListener('blur', pause);
window.addEventListener('focus', play);
```

#### 結果

{{EmbedLiveSample("Live_example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

このイベントが処理されている間、 {{DOMxRef("Document.activeElement")}} の値はブラウザーによって異なります ([Firefox バグ 452307](https://bugzil.la/452307))。 IE10 はフォーカスが移動する先の要素を設定しますが、 Firefox と Chrome ではふつう、文書の `body` を設定します。

## 関連情報

- 関連イベント: {{domxref("Window/focus_event", "focus")}}
- `Element` を対象としたこのイベント: {{domxref("Element/blur_event", "blur")}} イベント
