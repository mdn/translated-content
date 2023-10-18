---
title: MouseEvent.shiftKey
slug: Web/API/MouseEvent/shiftKey
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("UI Events")}}

**`MouseEvent.shiftKey`** は読み取り専用のプロパティで、このマウスイベントが発行されたときに <kbd>shift</kbd> キーが押されていたかどうかを示す論理値です。

## 値

論理値で、 `true` はキーが押されていたことを示し、 `false` はキーが押されていなかったことを示します。

## 例

この例では、 {{domxref("Element/click_event", "click")}} イベントを発生させた際に `shiftKey` プロパティを記録します。

### HTML

```html
<p>
  <code>shiftKey</code> プロパティを試験するためにどこかをクリックしてください。
</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `Shift キーの押下状態: ${e.shiftKey}`;
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
