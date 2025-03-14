---
title: "Element: previousElementSibling プロパティ"
short-title: previousElementSibling
slug: Web/API/Element/previousElementSibling
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.previousElementSibling`** は読み取り専用のプロパティで、この要素 ({{domxref("Element")}}) の親の子リスト内ですぐ前にある要素を返します。このノードがリストの最初のノードであった場合は `null` を返します。

## 値

{{domxref("Element")}} オブジェクト、または `null` です。

## 例

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>

<script>
  let el = document.getElementById("div-03").previousElementSibling;
  document.write("<p>Siblings of div-03</p><ol>");
  while (el) {
    document.write("<li>" + el.nodeName + "</li>");
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>
```

この例は読み込み時に、ページに以下のような出力を行います。

```
Siblings of div-03

   1. LI
   2. LI
   3. DIV
   4. DIV
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.nextElementSibling")}}
