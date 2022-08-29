---
title: ProcessingInstruction.target
slug: Web/API/ProcessingInstruction/target
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.ProcessingInstruction.target
translation_of: Web/API/ProcessingInstruction/target
---
{{ApiRef("DOM")}}

**`target`** は {{domxref("ProcessingInstruction")}} インターフェイスの読み取り専用プロパティで、 `ProcessingInstruction` が対象とするアプリケーションを表します。

例えば次のようなものです。

```html
<?xml version="1.0"?>
```

この場合、処理命令の `target` は `xml` です。

## 値

アプリケーションの名前が入った文字列です。

## 例

### XML 文書内で

```html hidden
<output>
```

```js
let parser = new DOMParser();
const doc = parser.parseFromString('<?xml version="1.0"?><test/>', "application/xml");
const pi = doc.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');
doc.insertBefore(pi, doc.firstChild);

const output = document.getElementsByTagName("output")[0];
output.textContent = "処理命令のターゲット: " + doc.firstChild.target;
```

{{EmbedLiveSample("In an XML document", "100%", 50)}}

### HTML 文書内で

処理命令行は {{domxref("Comment")}} オブジェクトと見なされ、表現されます。

```html
<?xml version="1.0"?>
<pre></pre>
```

```js
let node = document.getElementsByTagName("pre")[0].previousSibling.previousSibling;

let result = "処理命令のノード: " + node.nodeName + ": " + node.nodeValue + "\n";

document.getElementsByTagName("pre")[0].textContent = result;
```

{{EmbedLiveSample("In an HTML document", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM API](/ja/docs/Web/API/Document_Object_Model)
