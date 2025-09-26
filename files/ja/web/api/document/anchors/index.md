---
title: "Document: anchors プロパティ"
short-title: anchors
slug: Web/API/Document/anchors
l10n:
  sourceCommit: 10609d35e92f68f2dacbb1be07d31e736a2b487a
---

{{APIRef("DOM")}} {{Deprecated_Header}}

**`anchors`** は {{domxref("Document")}} インターフェイスの読み取り専用のプロパティで、文書中のすべてのアンカーのリストを返します。

### 値

{{domxref("HTMLCollection")}} です。

## 例

```js
if (document.anchors.length >= 5) {
  console.log("found too many anchors");
}
```

文書中のアンカーを基に目次を作成して文書に挿入する例を以下に示します。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test</title>
    <script>
      function init() {
        const toc = document.getElementById("toc");
        for (const anchor of document.anchors) {
          const li = document.createElement("li");
          const newAnchor = document.createElement("a");
          newAnchor.href = "#" + anchor.name;
          newAnchor.textContent = anchor.text;
          li.appendChild(newAnchor);
          toc.appendChild(li);
        }
      }
    </script>
  </head>
  <body onload="init()">
    <h1>Title</h1>
    <h2><a name="contents">Contents</a></h2>
    <ul id="toc"></ul>

    <h2><a name="plants">Plants</a></h2>
    <ol>
      <li>Apples</li>
      <li>Oranges</li>
      <li>Pears</li>
    </ol>

    <h2><a name="veggies">Veggies</a></h2>
    <ol>
      <li>Carrots</li>
      <li>Celery</li>
      <li>Beats</li>
    </ol>
  </body>
</html>
```

[JSFiddle で確認](https://jsfiddle.net/S4yNp)

## メモ

後方互換性のため、返されるアンカーのセットには `name` 属性を付けて作成されたアンカーのみが含まれ、 `id` 属性付きで作成されたものは含まれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
