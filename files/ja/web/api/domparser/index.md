---
title: DOMParser
slug: Web/API/DOMParser
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("DOM")}}

**`DOMParser`** インターフェイスは、 {{Glossary("XML")}} や {{Glossary("HTML")}} ソースコードを文字列から DOM の {{domxref("Document")}} に解釈する機能を提供します。

{{domxref("XMLSerializer")}} インターフェイスを使い、DOM ツリーを XML もしく HTML ソースに転換する、逆の操作を行うことができます。

HTML 文書の場合、{{domxref("Element.innerHTML")}} や {{domxref("Element.outerHTML", "outerHTML")}} プロパティの値を設定することで、HTML から構築された新しい DOM ツリーに一部分を置き換えることもできます。DOM のサブツリーに対応した HTML の要素を取り込むために、これらのプロパティを読み込むことも可能です。

なお、 {{domxref("XMLHttpRequest")}}は、 URL アドレスが指定できるリソースから直接 XML や HTML を解釈でき、その {{domxref("XMLHttpRequest.response", "response")}} プロパティで `Document` を返すことに注意してください。

> **メモ:** [ブロックレベル要素](/ja/docs/Glossary/Block-level_content)、例えば `<p>` の中に別のブロックレベル要素が入れ子になっている場合、自動的に閉じられ、その結果、閉じられた `</p>` タグの前に解釈されることになります。

## コンストラクター

- {{domxref("DOMParser.DOMParser","DOMParser()")}}
  - : 新しい `DOMParser` オブジェクト作成します。

## インスタンスメソッド

- {{domxref("DOMParser.parseFromString()")}}
  - : HTML パーサーまたは XML パーサーを使用して文字列を解釈し、 {{domxref("HTMLDocument")}} または {{domxref("XMLDocument")}} を返します。

## 例

このインターフェイスの唯一のメソッドである {{domxref("DOMParser.parseFromString()")}} のドキュメントには、XML、SVG、HTML 文字列を解釈する例が含まれています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XML の解釈とシリアライズ](/ja/docs/Web/XML/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - {{jsxref("JSON")}} 文書での同様のページ
