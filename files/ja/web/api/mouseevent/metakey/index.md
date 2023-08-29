---
title: MouseEvent.metaKey
slug: Web/API/MouseEvent/metaKey
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("UI Events")}}

**`MouseEvent.metaKey`** は読み取り専用のプロパティでありマウスイベントが発行されたときに <kbd>meta</kbd> キーが押されていたかどうかを論理値で示します。

多くのオペレーティングシステムでは、 <kbd>meta</kbd> キーに特殊な機能を割り当てているため、このプロパティは実際にはキーが押されていても `false` を返す可能性があることに注意してください。
例えば、 Windows では、このキーはスタートメニューを開きます。

> **メモ:** Macintosh のキーボードでは、このキーは <kbd>command</kbd> キー (<kbd>⌘</kbd>) です。
> Windows のキーボードでは、このキーは Windows キー (<kbd>⊞</kbd>) です。

## 値

論理値であり、 `true` はキーが押されていたことを、 `false` はキーが押されてい*なかった*ことを示します。

## 例

この例は、 {{domxref("Element/click_event", "click")}} イベントが発行されたときに `metaKey` プロパティを記録します。

### HTML

```html
<p>
  <code>metaKey</code> プロパティを試験するためにどこかをクリックしてください。
</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `Meta キーの押下状態: ${e.metaKey}`;
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
