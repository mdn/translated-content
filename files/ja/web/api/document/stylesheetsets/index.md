---
title: "Document: styleSheetSets プロパティ"
short-title: styleSheetSets
slug: Web/API/Document/styleSheetSets
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

**`styleSheetSets`** プロパティは読み取り専用で、現在有効なすべてのスタイルシートセットの生きたリストを返します。

## 値

利用可能なスタイルシートセットのリストです。

## 例

"sheetList" という ID を持つ {{HTMLElement("ul")}} （リスト）要素がある場合、次のようなコードで、利用可能なすべてのスタイルシートセットの名前を入力することができます。

```js
const list = document.getElementById("sheetList");
const sheets = document.styleSheetSets;

list.textContent = "";

for (const sheet of sheets) {
  const item = document.createElement("li");
  item.textContent = sheet;
  list.appendChild(item);
}
```

## 注

有効なスタイルシートセットのリストは、その文書に有効なすべてのスタイルシートを {{domxref("Document.styleSheets")}} 属性で並べられている順に列挙し、題名を持つそれぞれのスタイルシートの `title` をリストに追加することによって構築されます。重複するものは（大文字小文字を区別する比較を使用して）リストから削除されます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Stylesheet")}}
- {{domxref("Document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
