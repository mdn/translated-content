---
title: "ProcessingInstruction: target プロパティ"
slug: Web/API/ProcessingInstruction/target
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
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
<output></output>
```

```js
let parser = new DOMParser();
const doc = parser.parseFromString(
  '<?xml version="1.0"?><test/>',
  "application/xml",
);
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css" type="text/css"',
);
doc.insertBefore(pi, doc.firstChild);

const output = document.querySelector("output");
output.textContent = `この処理命令のターゲット: ${doc.firstChild.target}`;
```

{{EmbedLiveSample("In an XML document", "100%", 50)}}

### HTML 文書内で

処理命令の行は {{domxref("Comment")}} オブジェクトと見なされ、表現されます。

```html
<?xml version="1.0"?>
<pre></pre>
```

```js
const node = document.querySelector("pre").previousSibling.previousSibling;
const result = `この処理命令のノード: ${node.nodeName}: ${node.nodeValue}\n`;
document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("In an HTML document", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM API](/ja/docs/Web/API/Document_Object_Model)
