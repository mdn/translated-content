---
title: CSSStyleDeclaration.cssText
slug: Web/API/CSSStyleDeclaration/cssText
---

{{APIRef("CSSOM")}}

**`cssText`** は {{domxref("CSSStyleDeclaration")}} インターフェイスのプロパティで、その要素の**インライン**スタイル宣言のみのテキストを返したり設定したりします。**スタイルシート**の規則を動的に設定するためには、[動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)を参照してください。

スタイルシートのスタイル規則である {{domxref("CSSRule.cssText")}} と混同しないようにしてください。

## 例

```html
<span id="s1" style="color: red;">
  Some text
</span>

<script>
  var elem = document.getElementById("s1");
  alert(elem.style.cssText); // "color: red;"
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
