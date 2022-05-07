---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
tags:
  - API
  - HTML DOM
  - HTMLElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLElement.contentEditable
translation_of: Web/API/HTMLElement/contentEditable
---
{{APIRef("HTML DOM")}}

**`contentEditable`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素が編集可能かどうかを指定します。

これは列挙属性で、次の値を設定できます。

- '`true`' は、要素の内容が編集可能 (`contenteditable`) であることを示します。
- '`false`' は、要素が編集できないことを示します。
- '`inherit`' は、要素がその親の編集可能状態を継承することを示します。

{{domxref("HTMLElement.isContentEditable")}} プロパティを使用すると、このプロパティの計算済みの論理値をテストできます。

## 値

文字列。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

Internet Explorer では、`contenteditable` を {{htmlelement("table")}}、{{htmlelement("col")}}、{{htmlelement("colgroup")}}、{{htmlelement("tbody")}}、{{htmlelement("td")}}、{{htmlelement("tfoot")}}、{{htmlelement("th")}}、{{htmlelement("thead")}}、{{htmlelement("tr")}} 要素に直接適用することはできません。コンテンツを編集可能な {{htmlelement("span")}} または {{htmlelement("div")}} 要素を、表の個々のセル内に配置できます。

## 関連情報

- [コンテンツを編集可能にする](/ja/docs/Web/Guide/HTML/Editable_content)
- {{domxref("HTMLElement.isContentEditable")}}
- {{htmlattrxref("contenteditable")}} グローバル属性
