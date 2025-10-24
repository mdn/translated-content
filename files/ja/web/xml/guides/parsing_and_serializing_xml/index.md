---
title: XML の構文解析とシリアライズ
slug: Web/XML/Guides/Parsing_and_serializing_XML
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

場合によっては、{{Glossary("XML")}} のコンテンツを解析して {{Glossary("DOM")}} ツリーに変換する必要があるでしょう。または逆に、既存の DOM ツリーを XML にシリアライズすることもあります。この記事では、XML のシリアライズと解析の一般的な作業を容易にするため、ウェブプラットフォームで提供されるオブジェクトに注目します。

- {{domxref("XMLSerializer")}}
  - : DOM ツリーをシリアライズし、XML を含む文字列に変換します。
- {{domxref("DOMParser")}}
  - : XML を含む文字列を解析して DOM ツリーを構築し、入力データに基づいて適切な {{domxref("XMLDocument")}} または {{domxref("Document")}} を返します。
- {{domxref("Window/fetch", "fetch()")}}
  - : URL からコンテンツを読み込みます。 XML コンテンツは、 `DOMParser` を使用して構文解析できるテキスト文字列として返されます。
- {{domxref("XMLHttpRequest")}}
  - : `fetch()` の前身です。 `fetch()` API とは異なり、 `XMLHttpRequest` は、そのプロパティ {{domxref("XMLHttpRequest.responseXML", "responseXML")}} を使用して、リソースを `Document` として返すことができます。
- [XPath](/ja/docs/Web/XML/XPath)
  - : XML 文書の特定の部分のアドレスを含む文字列を作成し、それらのアドレスに基づいて XML ノードを特定する技術。

## XML 文書を作成する

次のいずれかの方法で XML 文書を作成します（これは {{domxref("Document")}} のインスタンスです）。

### 文字列を DOM ツリーに構文解析する

この例では、{{domxref("DOMParser")}} を使用して文字列の XML の断片を DOM ツリーに変換します。

```js
const xmlStr = '<q id="a"><span id="b">hey!</span></q>';
const parser = new DOMParser();
const doc = parser.parseFromString(xmlStr, "application/xml");
// ルート要素の名前またはエラーメッセージを出力します
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  console.log("構文解析中にエラー発生");
} else {
  console.log(doc.documentElement.nodeName);
}
```

### URL でアドレス指定が可能なリソースを DOM ツリーに構文解析する

#### fetch の使用

URL アドレス指定が可能な XML ファイルを読み込み解析して DOM ツリーにするサンプルコードを次に示します。

```js
fetch("example.xml")
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    console.log(doc.documentElement.nodeName);
  });
```

このコードはリソースをテキスト文字列として取得し、 {{domxref("DOMParser.parseFromString()")}} を使用して {{domxref("XMLDocument")}} を構築します。

文書が {{Glossary("HTML")}} である場合、上記のコードは {{domxref("Document")}} を返します。文書が XML である場合、返されるオブジェクトは `XMLDocument` になります。この 2 種類は基本的に同じですが、その違いは主に歴史的な部分であり、差別化にはいくつかの実用的な利点があります。

> [!NOTE]
> {{domxref("HTMLDocument")}} インターフェイスもありますが、独立した型であるとは限りません。独立した型として扱うブラウザーもありますが、単なる `Document` インターフェイスへのエイリアスとしているブラウザーもあります。

## XML 文書のシリアライズ

{{domxref("Document")}} がある時、{{domxref("XMLSerializer.serializeToString()")}} メソッドを用いて文章の DOM ツリーを XML にシリアライズし直すことができます。

前の節で作成した XML 文書をシリアライズするには、以下の方法を用いてください。

### DOM ツリーを文字列にシリアライズ

まず、[DOM ツリーの作成方法](/ja/docs/Web/API/Document_Object_Model)で説明された方法で DOM ツリーを作成します。もしくは、 {{ domxref("Window/fetch", "fetch()") }} で取得した DOM ツリーを用います。

DOM ツリー `doc` を XML 文字列にシリアライズするには、以下のように {{domxref("XMLSerializer.serializeToString()")}} を呼び出します。

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### HTML 文書のシリアライズ

DOM が HTML 文書である場合、`serializeToString()` を用いてシリアライズすることもできますが、より単純な方法があります。{{domxref("Element.innerHTML")}} プロパティ (指定したノードの子孫のみを得たい場合) または {{domxref("Element.outerHTML")}} プロパティ (指定したノードとその子孫を得たい場合) を用いればよいです。

```js
const docInnerHtml = document.documentElement.innerHTML;
```

これを実行すると、 `docHTML` は文書の内容、すなわち {{HTMLElement("body")}} 要素の内容を表す HTML が入った文字列になります。

このコードを用いると、 `<body>` とその子孫に対応する HTML を得ることができます。

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## 関連項目

- [XPath](/ja/docs/Web/XML/XPath)
- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("Document")}}、{{domxref("XMLDocument")}}、{{domxref("HTMLDocument")}}
