---
title: リンク
slug: Web/SVG/Guides/Linking
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

SVG の {{SVGElement("a")}} 要素の {{SVGAttr("target")}} 属性は、 Mozilla Firefox 1.5 では動作しません。 SVG 文書はタグを使用して親の HTML 文書に埋め込まれます。

page1.html:

```html
<html lang="en">
  <body>
    <p>これは SVG ボタンです</p>
    <object
      width="100"
      height="50"
      type="image/svg+xml"
      data="button.svg"></object>
  </body>
</html>
```

button.svg:

```xml
<?xml version="1.1" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <a href="page2.html" target="_top">
    <g>
      <!-- ここにボタンのグラフィック要素 -->
    </g>
  </a>
</svg>
```

仕様書では、ブラウザーはボタンのグラフィックがクリックされたとき、 HTML 文書 page2.html へ移動します。しかし、 `target` は Firefox 1.5 における SVG の `<a>` 要素の Mozilla の実装では動作しません。（この問題は Firefox 2.0 で修正されます。）

いずれにせよ、 Moz SVG の結果としての動作は、 SVG ボタンがあったフレームに page2.html が読み込まれることになります（つまり、 page2.html が page1.html の中にある 100x50 ピクセルのフレームに埋め込まれることになります）。

これを回避するには、少し醜い JavaScript ハッキングが必要です。

button.svg:

```xml
<?xml version="1.1" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <g onclick="top.document.href='page2.html'" cursor="pointer">
    <!-- ここにボタンのグラフィック要素 -->
  </g>
</svg>
```

## 例

このソリューションの使用例については、 [www.codedread.com](https://www.codedread.com/) を参照してください。
