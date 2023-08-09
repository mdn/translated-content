---
title: "Window: focus イベント"
slug: Web/API/Window/focus_event
---

{{APIRef}}

**`focus`** イベントは、要素がフォーカスを受け取ったときに発生します。

`focus` の反対は {{domxref("Window/blur_event", "blur")}} です。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{DOMxRef("FocusEvent")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onfocus", "onfocus")}}
      </td>
    </tr>
    <tr>
      <th>同期 / 非同期</th>
      <td>同期</td>
    </tr>
    <tr>
      <th>Composed</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 例

### ライブデモ

この例ではフォーカスを失ったときに文書の外見を変更します。 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} を使用して `focus` および {{domxref("Window/blur_event", "blur")}} イベントを監視します。

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

## 関連情報

- 関連イベント: {{domxref("Window/blur_event", "blur")}}
- `Element` を対象としたこのイベント: {{domxref("Element/focus_event", "focus")}} イベント
