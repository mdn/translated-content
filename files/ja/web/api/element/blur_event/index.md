---
title: "Element: blur イベント"
short-title: blur
slug: Web/API/Element/blur_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

**`blur`** イベントは、要素がフォーカスを失ったときに発生します。このイベントはバブリングしませんが、続いて発生する関連する {{domxref("Element/focusout_event", "focusout")}} イベントはバブリングします。

要素は他の要素が選択されるとフォーカスを失います。
また、`hidden`のようなフォーカスを許可しないスタイルが適用された場合や、文書から要素が除去された場合もフォーカスを失います。どちらの場合も、フォーカスは `body` 要素（ビューポート）へ移動します。
なお、フォーカスされた要素が文書から除去された場合には `blur` は発生しないことに注意してください。

<!-- Prior to FF110 elements did not lose focus if the style changed to hidden (say) -->

`blur` の反対は {{domxref("Element/focus_event", "focus")}} イベントであり、こちらは要素がフォーカスを得たときに発生します。

`blur` イベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("blur", (event) => {});

onblur = (event) => {};
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

このイベントのイベント委譲を実装する方法は 2 つあります。{{domxref("Element/focusout_event", "focusout")}} イベントを使用するか、{{domxref("EventTarget.addEventListener()", "addEventListener()")}} の `useCapture` 引数に `true` を設定するかです。

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

このイベントが処理されている間、{{DOMxRef("Document.activeElement")}} の値はブラウザーによって異なります ([Firefox バグ 452307](https://bugzil.la/452307))。 IE10 はフォーカスが移動する先の要素を設定しますが、 Firefox と Chrome ではふつう、文書の `body` を設定します。

## 関連情報

- {{domxref("HTMLElement.blur()")}} メソッド
- 関連イベント: {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- `Window` を対象としたこのイベント: {{domxref("Window/blur_event", "blur")}} イベント
- [Focusing: focus/blur](https://javascript.info/focus-blur)
