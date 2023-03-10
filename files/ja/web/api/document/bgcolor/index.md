---
title: document.bgColor
slug: Web/API/Document/bgColor
---

{{APIRef("DOM")}} {{ Deprecated_header() }}

廃止された `bgColor` プロパティは、現在の文書の背景色を取得または設定します。

## 構文

```
color = document.bgColor
document.bgColor =color
```

### 引数

- `color` : 色名 (`"white"` 等) またはカラーコード (`"#FFFFFF"` 等) の文字列

## 例

```
document.bgColor = "darkblue";
```

## メモ

Firefox ではこのプロパティの初期値は白 (16 進表記で `#FFFFFF`) となっています。

`document.bgColor` は [DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) で非推奨になっています。推奨される代替方法は、 CSS の {{Cssxref("background-color")}} を使用することで、 `document.body.style.backgroundColor` で DOM を通してアクセスできます。もう一つの代替手段である `document.body.bgColor` は、 HTML 4.01 で CSS に代替されたため非推奨となっています。

## ブラウザーの互換性

{{Compat}}
