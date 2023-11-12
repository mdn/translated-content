---
title: "HTMLDetailsElement: toggle イベント"
slug: Web/API/HTMLDetailsElement/toggle_event
l10n:
  sourceCommit: 559c464755abf4ca999a21ce7f3cb1027143f68f
---

{{APIRef}}

**`toggle`** イベントは、 {{HtmlElement("details")}} 要素の `open`/`closed` の状態がトグル切り替えされたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

> **メモ:** `toggle` イベントは {{domxref("HTMLElement")}} においても別な形で利用できます。こちらは、[ポップオーバー要素](/ja/docs/Web/API/Popover_API)が表示または非表示にされた直後に発行されます。詳しくは、`HTMLElement` の {{domxref("HTMLElement.toggle_event", "toggle")}} イベントのページをご覧ください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この例は開かれた節をログ出力します。節が閉じられるとログから削除されます。

### HTML

```html
<aside id="log">
  <p>Open chapters:</p>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
<section id="summaries">
  <p>Chapter summaries:</p>
  <details id="ch1">
    <summary>Chapter I</summary>
    Philosophy reproves Boethius for the foolishness of his complaints against
    Fortune. Her very nature is caprice.
  </details>
  <details id="ch2">
    <summary>Chapter II</summary>
    Philosophy in Fortune's name replies to Boethius' reproaches, and proves
    that the gifts of Fortune are hers to give and to take away.
  </details>
  <details id="ch3">
    <summary>Chapter III</summary>
    Boethius falls back upon his present sense of misery. Philosophy reminds him
    of the brilliancy of his former fortunes.
  </details>
</section>
```

### CSS

```css
body {
  display: flex;
  flex-direction: row-reverse;
}

#log {
  flex-shrink: 0;
  padding-left: 3em;
}

#summaries {
  flex-grow: 1;
}
```

### JavaScript

```js
function logItem(e) {
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute("hidden");
}

const chapters = document.querySelectorAll("details");
chapters.forEach((chapter) => {
  chapter.addEventListener("toggle", logItem);
});
```

### 結果

{{EmbedLiveSample("Examples", 700, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
