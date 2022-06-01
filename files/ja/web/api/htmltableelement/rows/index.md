---
title: HTMLTableElement.rows
slug: Web/API/HTMLTableElement/rows
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - NeedsBrowserCompatibility
  - NeedsSpecTable
  - プロパティ
  - 読み取り専用
  - リファレンス
  - 表の行
  - rows
browser-compat: api.HTMLTableElement.rows
translation_of: Web/API/HTMLTableElement/rows
---
{{APIRef("HTML DOM")}}

{{domxref("HTMLTableElement")}} の **`rows`** プロパティは読み取り専用で、表のすべての行を表す生きた {{domxref("HTMLCollection")}} を返し、すべての {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("tbody")}} 要素に含まれる行を示します。

プロパティ自身は読み取り専用ですが、返されたオブジェクトは生きており、内容を変更することができます。

## 構文

```js
HTMLCollectionObject = table.rows;
```

### 値

{{domxref("HTMLCollection")}} で、 {{domxref("HTMLTableRowElement")}} オブジェクトのライブで更新されるリストを提供し、この表に含まれるすべての {{HTMLElement("tr")}} 要素を表します。これにより、この表のすべての行を、手作業で探す必要なくすばやくアクセスすることができます。

## 例

```js
myrows = mytable.rows;
firstRow = mytable.rows[0];
lastRow = mytable.rows.item(mytable.rows.length-1);
```

これは、配列構文（2 行目）と {{domxref("HTMLCollection.item()")}} メソッド（3 行目）の両方を使用して、表の個々の行を取得する方法を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
