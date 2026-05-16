---
title: "Window: blur イベント"
short-title: blur
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef}}

**`blur`** イベントは、要素がフォーカスを失ったときに発生します。

`blur` の反対は {{domxref("Window/focus_event", "focus")}} です。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## イベント型

{{domxref("FocusEvent")}} です。{{domxref("UIEvent")}} および {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("FocusEvent")}}

## イベントプロパティ

_このインターフェイスは親である {{domxref("UIEvent")}} から、そして間接的に {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("FocusEvent.relatedTarget")}}
  - : このイベントのセカンダリーターゲットを {{domxref("EventTarget")}} で表します。場合によっては（ページへの移動やページからの移動時など）、セキュリティ上の理由から、このプロパティが `null` に設定されることがあります。

## 例

### ライブデモ

この例ではフォーカスを失ったときに文書の外見を変更します。 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} を使用して {{domxref("Window/focus_event", "focus")}} および `blur` イベントを監視します。

#### HTML

```html
<p id="log">この文書をクリックして、アクティブにしてください。</p>
```

#### CSS

```css
.paused {
  background: #dddddd;
  color: #555555;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

function pause() {
  document.body.classList.add("paused");
  log.textContent = "フォーカスが失われました!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "この文書にフォーカスがあります。文書の外をクリックするとフォーカスが失われます。";
}

window.addEventListener("blur", pause);
window.addEventListener("focus", play);
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
