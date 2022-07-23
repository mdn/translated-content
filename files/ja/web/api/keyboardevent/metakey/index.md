---
title: KeyboardEvent.metaKey
slug: Web/API/KeyboardEvent/metaKey
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.metaKey
translation_of: Web/API/KeyboardEvent/metaKey
---
{{APIRef("UI Events")}}

**`KeyboardEvent.metaKey`** は読み取り専用のプロパティで、 プロパティは、イベントが発生したときに <kbd>Meta</kbd> キーが押されていたか (`true`) あるいは押されていなかった (`false`) かを示す論理値を返します。オペレーティングシステムによっては、キーが検出されないように遮蔽されることがあります。

> **Note:** Macintosh のキーボードでは、これは <kbd>⌘ Command</kbd> キーです。

> **Warning:** 少なくとも Firefox 48 の時点では、 <kbd>⊞ Windows</kbd> キーは "Meta" キーとみなされなくなりました。<kbd>⊞ Windows</kbd> キーが押されたとき `KeyboardEvent.metaKey` は `false` になります。

## 値

論理値です。

## 例

```html
<button onclick="ismetaKey(event)">Click me with the meta key</button>

<p id="output"></p>
```

```js
function ismetaKey(e) {
  document.querySelector("#output").textContent = "metaKey pressed? " + e.metaKey;
}
```

#### 結果

{{ EmbedLiveSample('Examples', 400, 90) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("KeyboardEvent") }}
