---
title: MouseEvent.altKey
slug: Web/API/MouseEvent/altKey
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("UI Events")}}

**`MouseEvent.altKey`** は読み取り専用のプロパティでありマウスイベントが発行されたときに <kbd>alt</kbd> キーが押されていたかどうかを論理値で示します。

オペレーティングシステムによっては、ブラウザーがいつでも <kbd>alt</kbd> キーを検出できるとは限りらないことに注意してください。
例えば、一部の Linux では、 <kbd>alt</kbd> キーを押しながらマウスの左クリックが、ウィンドウの移動またはリサイズに使われています。

> **メモ:** Macintosh のキーボードでは、このキーは <kbd>option</kbd> キーとも呼ばれています。

## 値

論理値であり、 `true` はキーが押されていたことを、 `false` はキーが押されてい*なかった*ことを示します。

## 例

この例は、 {{domxref("Element/click_event", "click")}} イベントが発行されたときに `altKey` プロパティを記録します。

### HTML

```html
<p>
  <code>altKey</code> プロパティを試験するためにどこかをクリックしてください。
</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `Alt キーの押下状態: ${e.altKey}`;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("MouseEvent") }}
