---
title: "Element: lastElementChild プロパティ"
short-title: lastElementChild
slug: Web/API/Element/lastElementChild
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`Element.lastElementChild`** は読み取り専用のプロパティで、要素の最後の子を {{domxref("Element")}} で返します。子要素がない場合は `null` を返します。

`Element.lastElementChild` は要素ノードのみを含みます。
テキストやコメントノードなど、要素以外のノードを含むすべての子ノードを取得するには、 {{domxref("Node.lastChild")}} を使用してください。

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
  console.log(list.lastElementChild.textContent);
  // logs "Third (3)"
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.previousElementSibling")}}
- {{domxref("Element.firstElementChild")}}
