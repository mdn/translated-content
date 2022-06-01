---
title: MouseEvent.altKey
slug: Web/API/MouseEvent/altKey
tags:
  - API
  - DOM
  - DOM イベント
  - MouseEvent
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.MouseEvent.altKey
translation_of: Web/API/MouseEvent/altKey
translation_of_original: Web/API/event.altKey
---
{{APIRef("DOM Events")}}

**`MouseEvent.altKey`** は読み取り専用のプロパティでありマウスイベントが発行されたときに <kbd>alt</kbd> キーが押されていたかどうかを論理値で示します。

オペレーティングシステムによっては、ブラウザーがいつでも <kbd>alt</kbd> キーを検出できるとは限りらないことに注意してください。
例えば、一部の Linux では、 <kbd>alt</kbd> キーを押しながらマウスの左クリックが、ウィンドウの移動またはリサイズに使われています。

> **Note:** Macintosh のキーボードでは、このキーは <kbd>option</kbd> キーとも呼ばれています。

## 値

論理値であり、 `true` はキーが押されていたことを、 `false` はキーが押されてい*なかった*ことを示します。

## 例

この例は、 {{Event("click")}} イベントが発行されたときに `altKey` プロパティを記録します。

### HTML

```html
<p><code>altKey</code> プロパティを試験するためにどこかをクリックしてください。</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector('#log');
document.addEventListener('click', logKey);

function logKey(e) {
  log.textContent = `Alt キーの押下状態: ${e.altKey}`;
}
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("MouseEvent") }}
