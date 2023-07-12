---
title: "HTMLStyleElement: sheet プロパティ"
short-title: sheet
slug: Web/API/HTMLStyleElement/sheet
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`sheet`** は {{domxref("HTMLStyleElement")}} インターフェイスの読み取り専用プロパティで、この要素に関連付けられたスタイルシートを保持します。

{{DOMxref("StyleSheet")}} は `type` 属性が `text/css` 出ない限り、常に {{domxref("HTMLStyleElement")}} と関連付けられます。

## 値

{{DOMxRef("StyleSheet")}} オブジェクト、またはこの要素に関連付けられているものがなければ `null` です。

## 例

```html
<html>
  <header>
    <style media="print" />
    …
  </header>
</html>
```

関連付けられた `HTMLStyleElement` オブジェクトの `sheet` プロパティは、そこに記述された {{domxref("StyleSheet")}} オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
