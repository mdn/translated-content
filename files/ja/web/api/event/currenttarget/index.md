---
title: "Event: currentTarget プロパティ"
short-title: currentTarget
slug: Web/API/Event/currentTarget
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`currentTarget`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントハンドラーが取り付けられた要素を識別します。

これは、イベントが発行された要素と常に同じであるとは限りません。イベントは、ハンドラーを持つ要素の子孫で発生し、ハンドラーを持つ要素に[バブルアップ](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)される可能性があるからです。イベントが発行された要素は、 {{domxref("Event.target")}} で指定されます。

なお、`currentTarget` の値はイベントハンドラー内でのみ利用できます。イベントハンドラー外では `null` となります。つまり、例えばイベントハンドラー内で `Event` オブジェクトの参照を取得し、その後イベントハンドラー外でその `currentTarget` プロパティにアクセスすると、その値は `null` となります。

## 値

{{domxref("EventTarget")}} で、現在のイベントハンドラーが装着されているオブジェクトを表します。

## 例

### currentTarget と target

この例は、`currentTarget`と`target`の違いを示しています。

#### HTML

このページには、 "parent" の {{htmlelement("div")}} の中に "child" の `<div>`　があります。

```html
<div id="parent">
  parent をクリック
  <div id="child">child クリック</div>
</div>

<button id="reset">リセット</button>
<pre id="output"></pre>
```

```css hidden
button,
div,
pre {
  margin: 0.5rem;
}

div {
  padding: 1rem;
  border: 1px solid black;
}
```

#### JavaScript

イベントハンドラーは親要素に装着されています。イベントハンドラーは、`event.currentTarget` と `event.target` の値をログ出力します。

「リセット」ボタンも備えており、これは例を再読み込みするだけです。

```js
const output = document.querySelector("#output");
const parent = document.querySelector("#parent");
parent.addEventListener("click", (event) => {
  const currentTarget = event.currentTarget.getAttribute("id");
  const target = event.target.getAttribute("id");
  output.textContent = `Current target: ${currentTarget}\n`;
  output.textContent += `Target: ${target}`;
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 結果

子要素の `<div>` 内をクリックすると、 `target` は子要素を示します。親要素の `<div>` 内をクリックすると、 `target` は親要素を示します。

どちらの場合も、 `currentTarget` は親を特定します。ハンドラーが装着されている要素だからです。

{{EmbedLiveSample("currentTarget versus target", 100, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: イベントのバブリング](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)
