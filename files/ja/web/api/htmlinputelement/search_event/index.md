---
title: "HTMLInputElement: search イベント"
short-title: search
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}{{non-standard_header}}

**`search`** イベントは、 {{HTMLElement("input")}} 要素の `type="search"` にて検索が開始されたときに発生します。

検索を開始する方法はいくつかあり、例えば、 {{HTMLElement("input")}} にフォーカスがある時に <kbd>Enter</kbd> を押したり、[`incremental`](/ja/docs/Web/HTML/Element/input#attr-incremental) 属性が存在すれば、最も新しいキー入力から UA 定義のタイムアウト時間が経過してから検索が開始されます（新しくキー入力をするとタイムアウトがリセットされるので、イベントが繰り返して発生します）。

現在 UA が `<input type="search">` を実装している方法では、フィールド内をクリアするために追加のコントロールを置きます。このコントロールを使用しても `search` イベントが発生します。この場合、 {{HTMLElement("input")}} 要素の `value` は空文字列になります。

このイベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("search", (event) => {});

onsearch = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
// addEventListener 版
const input = document.querySelector('input[type="search"]');

input.addEventListener("search", () => {
  console.log(`The term searched for was ${input.value}`);
});
```

```js
// onsearch 版
const input = document.querySelector('input[type="search"]');

input.onsearch = () => {
  console.log(`The term searched for was ${input.value}`);
};
```

## 仕様書

このイベントは仕様書に含まれていません。

## ブラウザーの互換性

{{Compat}}
