---
title: "Element: focus イベント"
short-title: focus
slug: Web/API/Element/focus_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

**`focus`** イベントは、要素がフォーカスを受け取ったときに発生します。このイベントはバブリングしませんが、その後に発生する関連する {{domxref("Element/focusin_event", "focusin")}} イベントはバブリングします。

`focus` の反対は {{domxref("Element/blur_event", "blur")}} であり、これは要素がフォーカスを失ったときに発生します。

`focus` イベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## イベント型

{{domxref("FocusEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("FocusEvent")}}

## イベントプロパティ

_親である {{domxref("UIEvent")}} および間接的に {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("FocusEvent.relatedTarget")}}
  - : もしあれば、フォーカスを受け取った要素。

## 例

### 簡単な例

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
const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});
```

#### 結果

{{EmbedLiveSample("Simple_example", '100%', '50px')}}

### イベント委譲

このイベントのイベント委譲を実装する方法は 2 つあります。 {{domxref("Element/focusin_event", "focusin")}} イベントを使用するか、 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} の `useCapture` 引数に `true` を設定するかです。

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

form.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "pink";
  },
  true,
);

form.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true,
);
```

#### 結果

{{EmbedLiveSample("Event_delegation", '100%', '50px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.focus()")}} メソッド
- 関連イベント: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- `Window` を対象としたこのイベント: {{domxref("Window/focus_event", "focus")}} イベント
- [Focusing: focus/blur](https://javascript.info/focus-blur)
