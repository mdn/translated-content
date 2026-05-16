---
title: "Window: focus イベント"
short-title: focus
slug: Web/API/Window/focus_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef}}

**`focus`** イベントは、要素がフォーカスを受け取ったときに発生します。

`focus` の反対は {{domxref("Window/blur_event", "blur")}} です。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("focus", (event) => { })

onfocus = (event) => { }
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

この例ではフォーカスを失ったときに文書の外見を変更します。 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} を使用して `focus` および {{domxref("Window/blur_event", "blur")}} イベントを監視します。

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

## 関連情報

- 関連イベント: {{domxref("Window/blur_event", "blur")}}
- `Element` を対象としたこのイベント: {{domxref("Element/focus_event", "focus")}} イベント
