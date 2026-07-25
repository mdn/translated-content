---
title: "Selection: type プロパティ"
short-title: type
slug: Web/API/Selection/type
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

**`type`** は {{domxref("Selection")}} インターフェイスの読み取り専用プロパティで、現在の選択範囲の種類を表す文字列を返します。

## 値

現在の選択範囲の種類を説明する文字列です。
取り得る値は以下の通りです。

- `None`
  - : 現在、選択されている範囲はありません。
- `Caret`
  - : 選択範囲は折りたたまれています（つまり、カーソルがテキストの上に置かれていますが、範囲は選択されていません）。
- `Range`
  - : 範囲が選択されています。

## 例

この例では、新しい選択が行われるたびにイベントハンドラーが実行されます。
`console.log(selection.type)` は、カーソルがテキスト内の単一の位置にあるか、範囲が選択されているかによって、`Caret` または `Range` を返します。

```js
let selection;

document.onselectionchange = () => {
  console.log("新しく選択が行われました");
  selection = document.getSelection();
  console.log(selection.type);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Selection")}}
