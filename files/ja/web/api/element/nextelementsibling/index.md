---
title: Element.nextElementSibling
slug: Web/API/Element/nextElementSibling
tags:
  - API
  - DOM
  - Element
  - プロパティ
browser-compat: api.Element.nextElementSibling
translation_of: Web/API/Element/nextElementSibling
---
{{APIRef("DOM")}}

**`Element.nextElementSibling`** は読み取り専用のプロパティで、この要素の親の子リスト内ですぐ次にある要素を返します。このノードがリストの最後のノードであった場合は `null` を返します。

## 構文

```js
// ゲッター
element = el.nextElementSibling;

// セッターなし。読み取り専用プロパティ
```

## 例

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script type="text/javascript">
  let el = document.getElementById('div-01').nextElementSibling;
  console.log('Siblings of div-01:');
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;
  }
</script>
```

この例は読み込み時に、コンソールに以下のような出力を行います。

```
Siblings of div-01:
DIV
SCRIPT
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.previousElementSibling")}}
