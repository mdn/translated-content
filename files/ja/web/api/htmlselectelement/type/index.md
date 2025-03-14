---
title: "HTMLSelectElement: type プロパティ"
short-title: type
slug: Web/API/HTMLSelectElement/type
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.type`** は読み取り専用のプロパティで、フォームコントロールの `type` を返します。

## 値

次のうちのいずれかです。

- `"select-multiple"` 複数の値が選択可能な場合
- `"select-one"` 一つの値だけが選択可能な場合

## 例

```js
switch (select.type) {
  case "select-multiple":
    // 複数の値が選択可能
    break;
  case "select-one":
    // 一つの値だけが選択可能
    break;
  default:
  // 標準外の値（または SELECT 要素ではない）
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML の {{HTMLElement("select")}} 要素。
