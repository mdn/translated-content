---
title: Document.styleSheetSets
slug: Web/API/Document/styleSheetSets
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - DOM
  - プロパティ
  - リファレンス
  - スタイルシート
  - 非推奨
browser-compat: api.Document.styleSheetSets
translation_of: Web/API/Document/styleSheetSets
---
{{APIRef("DOM")}}{{deprecated_header}}

**`styleSheetSets`** プロパティは読み取り専用で、現在有効なすべてのスタイルシートセットの生きたリストを返します。

## 値

利用可能なスタイルシートセットのリストです。

## 例

"sheetList" という ID を持つ {{HTMLElement("ul")}} （リスト）要素がある場合、次のようなコードで、利用可能なすべてのスタイルシートセットの名前を入力することができます。

```js
const list = document.getElementById('sheetList');
const sheets = document.styleSheetSets;

list.textContent = '';

for (let i = 0; i < sheets.length; i++) {
  const item = document.createElement('li');

  item.textContent = sheets[i];
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
