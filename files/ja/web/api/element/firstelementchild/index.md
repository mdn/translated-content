---
title: "Element: firstElementChild プロパティ"
short-title: firstElementChild
slug: Web/API/Element/firstElementChild
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`Element.firstElementChild`** は読み取り専用のプロパティで、要素の最初の子を {{domxref("Element")}} で返します。子要素がない場合は `null` を返します。

`Element.firstElementChild` は要素ノードのみを含みます。
テキストやコメントノードなど、要素以外のノードを含むすべての子ノードを取得するには、 {{domxref("Node.firstChild")}} を使用してください。

## 値

{{domxref("Element")}} オブジェクト、または `null` です。

## 例

```html
<ul id="list">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.firstElementChild.textContent);
  // logs "First (1)"
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.nextElementSibling")}}
- {{domxref("Element.lastElementChild")}}
