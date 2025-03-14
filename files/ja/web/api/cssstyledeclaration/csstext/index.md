---
title: CSSStyleDeclaration.cssText
slug: Web/API/CSSStyleDeclaration/cssText
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

**`cssText`** は {{domxref("CSSStyleDeclaration")}} インターフェイスのプロパティで、その要素の**インライン**スタイル宣言のみのテキストを返したり設定したりします。

**スタイルシート**のルールを動的に設定するためには、[動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)を参照してください。

スタイルシートのスタイルルールである {{domxref("CSSRule.cssText")}} と混同しないようにしてください。

## 値

文字列で、この要素のインラインスタイル宣言のテキストが入ります。

## 例

```html
<span id="s1" style="color: red;"> Some text </span>

<script>
  const elem = document.getElementById("s1");
  alert(elem.style.cssText); // "color: red;"
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
