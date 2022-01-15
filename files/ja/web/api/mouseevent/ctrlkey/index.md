---
title: MouseEvent.ctrlKey
slug: Web/API/MouseEvent/ctrlKey
tags:
  - API
  - DOM
  - DOM イベント
  - MouseEvent
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.MouseEvent.ctrlKey
translation_of: Web/API/MouseEvent/ctrlKey
---
{{APIRef("DOM Events")}}

**`MouseEvent.ctrlKey`** は読み取り専用のプロパティで、このマウスイベントが発生した際に <kbd>ctrl</kbd> キーが押されていたかどうかを示す論理値です。

> **Note:** Macintosh のキーボードでは、このキーは <kbd>control</kbd> キーです。

## 値

論理値で、 `true` はキーが押されていたことを示し、 `false` はキーが押されていなかったことを示します。

## 例

この例では、 {{Event("click")}} イベントを発生させた際に `ctrlKey` プロパティを記録します。

### HTML

```html
<p><code>ctrlKey</code> プロパティを試験するためにどこかをクリックしてください。</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector('#log');
document.addEventListener('click', logKey);

function logKey(e) {
  log.textContent = `Ctrl キーの押下状態: ${e.ctrlKey}`;
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
