---
title: HTMLSelectElement.type
slug: Web/API/HTMLSelectElement/type
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.HTMLSelectElement.type
translation_of: Web/API/HTMLSelectElement/type
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.type`** は読み取り専用のプロパティで、フォームコントロールの `type` を返します。

## 構文

```js
var str = selectElt.type;
```

取りうる値は次の通りです。

- `"select-multiple"` 複数の値が選択可能な場合
- `"select-one"` 一つの値だけが選択可能な場合

## 例

```js
switch (select.type) {
  case 'select-multiple':
    // 複数の値が選択可能
    break;
  case 'select-one':
    // 一つの値だけが選択可能
    break;
  default:
    // 標準外の値 (または SELECT 要素ではない)
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML の {{HTMLElement("select")}} 要素。
