---
title: "MouseEvent: ctrlKey プロパティ"
short-title: ctrlKey
slug: Web/API/MouseEvent/ctrlKey
l10n:
  sourceCommit: 192bb8c0fd91f451c69303a431971c1937c4feca
---

{{APIRef("UI Events")}}

**`MouseEvent.ctrlKey`** は読み取り専用のプロパティで、このマウスイベントが発生した際に <kbd>Ctrl</kbd> キーが押されていたかどうかを示す論理値です。

Macintosh のキーボードでは、このキーは <kbd>control</kbd> キーと表記されています。また、 Mac では <kbd>control</kbd> キーと組み合わせたクリックは、オペレーティングシステムに拾われてコンテキストメニューを開くのに使われるので、 `ctrlKey` はクリックイベントで検出されないことに注意してください。

## 値

論理値で、 `true` はキーが押されていたことを示し、 `false` はキーが押されていなかったことを示します。

## 例

この例では、 {{domxref("Element/mousemove_event", "mousemove")}} イベントを発生させた際に `ctrlKey` プロパティを記録します。

### HTML

```html
<p id="log">カーソルが動いていたときに Ctrl キーが押されていた: false</p>
```

### JavaScript

```js
const log = document.querySelector("#log");
window.addEventListener("mousemove", logKey);

function logKey(e) {
  log.textContent = `カーソルが動いていたときに Ctrl キーが押されていた: ${e.ctrlKey}`;
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
