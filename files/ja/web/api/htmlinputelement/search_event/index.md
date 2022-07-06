---
title: 'HTMLInputElement: search イベント'
slug: Web/API/HTMLInputElement/search_event
tags:
  - API
  - Event
  - HTMLInputElement
  - 標準外
  - リファレンス
  - Search
  - ウェブ
browser-compat: api.HTMLInputElement.search_event
translation_of: Web/API/HTMLInputElement/search_event
---
{{APIRef}}{{non-standard_header}}

**`search`** イベントは、 {{HTMLElement("input")}} 要素の `type="search"` にて検索が開始されたときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        <code
          ><a href="/ja/docs/Web/API/GlobalEventHandlers/onsearch"
            >onsearch</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

検索を開始する方法はいくつかあり、例えば、 {{HTMLElement("input")}} にフォーカスがある時に <kbd>Enter</kbd> を押したり、[`incremental`](/ja/docs/Web/HTML/Element/input#attr-incremental) 属性が存在すれば、最も新しいキー入力から UA 定義のタイムアウト時間が経過してから検索が開始されます（新しくキー入力をするとタイムアウトがリセットされるので、イベントが繰り返して発生します）。

現在 UA が `<input type="search">` を実装している方法では、フィールド内をクリアするために追加のコントロールを置きます。このコントロールを使用しても `search` イベントが発生します。この場合、 {{HTMLElement("input")}} 要素の `value` は空文字列になります。

## 例

```js
// addEventListener 版
const input = document.querySelector('input[type="search"]');

input.addEventListener('search', () => {
 console.log("The term searched for was " + input.value);
})

// onsearch 版
const input = document.querySelector('input[type="search"]');

input.onsearch = () => {
 console.log("The term searched for was " + input.value);
})
```

## 仕様書

このイベントは仕様書に含まれていません。

## ブラウザーの互換性

{{Compat}}
