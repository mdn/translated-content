---
title: "DOMParser: parseFromString() メソッド"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOMParser")}}

**`parseFromString()`** は {{domxref("DOMParser")}} インターフェイスのメソッドで、 HTML または XML の入った文字列を構文解析し、 {{domxref("HTMLDocument")}} または {{domxref("XMLDocument")}} を返します。

> [!NOTE]
> 静的メソッドの [`Document.parseHTMLUnsafe()`](/ja/docs/Web/API/Document/parseHTMLUnsafe_static) は、 HTML の文字列を {{domxref("Document")}} 内の要素に構文解析できる、人間工学的な代替手段を提供します。

## 構文

```js-nolint
parseFromString(string, mimeType)
```

### 引数

- `string`
  - : 構文解析する文字列です。
    {{Glossary("HTML")}}、{{Glossary("xml")}}、{{Glossary("XHTML")}}、{{Glossary("svg")}} のいずれかの文書が入っている必要があります。
- `mimeType`
  - : 文字列。 この文字列は、文字列を構文解析する際に XML パーサーと HTML パーサーのどちらを使用するかを決定します。 有効な値は次のとおりです。
    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

    `text/html` の値を指定すると、 HTML パーサーを呼び出し、メソッドは {{domxref("HTMLDocument")}} を返します。すべての {{HTMLElement("script")}} 要素は実行不可とマークされ、{{HTMLElement("noscript")}} のコンテンツがマークアップとして解釈されます。

    他の有効な値 (`text/xml`, `application/xml`, `application/xhtml+xml`, `image/svg+xml`) は機能的に同等です。これらはすべて XML パーサーを呼び出し、メソッドは {{domxref("XMLDocument")}} を返します。

    他の値は無効であり、 [`TypeError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypeError) が発生します。

### 返値

{{domxref("HTMLDocument")}} または {{domxref("XMLDocument")}} であり、これは `mimeType` 引数によって決まります。

## 例

### XML、SVG、HTML の構文解析

MIME タイプが `text/html` の場合は HTML パーサーが起動され、その他の有効な MIME タイプの場合は XML パーサーが起動されることに注意してください。例えば、下記にある MIME タイプ `application/xml` と `image/svg+xml` は機能的には同一であり、後者には SVG 固有の解析ルールは含まれていません。この 2 つを判別する理由は、コードの意図を明確にするためだけです。

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const svgString = '<circle cx="50" cy="50" r="50"/>';
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
// XMLDocument

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument

console.log(doc1.documentElement.textContent);
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"
```

### エラー処理

整形式の XML を表していない文字列をXMLパーサーで使用する場合、 `parseFromString` によって返される {{domxref("XMLDocument")}} には、構文解析エラーの性質を記述した `<parsererror>` ノードが含まれます。

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the missing closing tag";
const doc = parser.parseFromString(xmlString, "application/xml");
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  // 構文解析に失敗
} else {
  // 構文解析に成功
}
```

さらに、構文解析エラーがブラウザーの JavaScript コンソールに報告される場合があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - {{jsxref("JSON")}} 文書で対応するもの。
