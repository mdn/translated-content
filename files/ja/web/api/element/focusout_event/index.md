---
title: "Element: focusout イベント"
short-title: focusout
slug: Web/API/Element/focusout_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`focusout`** イベントは、要素がフォーカスを失おうとしているときに発生します。このイベントと {{domxref("Element/blur_event", "blur")}} との主な違いは、 `focusout` がバブリングするのに対し `blur` はしないことです。

`focusout` の反対は {{domxref("Element/focusin_event", "focusin")}} であり、こちらは要素がフォーカスを受け取ったときに発生します。

`focusout` イベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用してください。

```js
addEventListener("focusout", (event) => {});
```

## イベント型

{{domxref("FocusEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("FocusEvent")}}

## イベントプロパティ

_親である {{domxref("UIEvent")}} および間接的に {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("FocusEvent.relatedTarget")}}
  - : もしあれば、フォーカスを受け取った要素。

## 例

### ライブデモ

#### HTML

```html
<form id="form">
  <label>
    テキストを入力:
    <input type="text" placeholder="テキストを入力" />
  </label>
  <label>
    パスワード:
    <input type="password" placeholder="password" />
  </label>
</form>
```

#### JavaScript

```js
const form = document.getElementById("form");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "pink";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
```

#### 結果

{{EmbedLiveSample("Live_example", '100%', '50px')}}

## 仕様書

{{Specifications}}

**メモ:** _UI Events_ 仕様書では[フォーカスイベントの順序](/ja/docs/Web/API/FocusEvent#order_of_events)を記述していますが、現在のブラウザーの実装とは異なります。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}
- [Focusing: focus/blur](https://javascript.info/focus-blur)
