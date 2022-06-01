---
title: Node.isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.isDefaultNamespace
translation_of: Web/API/Node/isDefaultNamespace
---
{{APIRef("DOM")}}

**`isDefaultNamespace()`** は {{domxref("Node")}} インターフェイスのメソッドで、名前空間 URI を引数として受け取ります。
その名前空間がこのノードの既定の名前空間である場合は `true` を返し、そうでない場合は `false` を返します。

> **Note:** 既定の名前空間は、 HTML 要素では常に `""` です。 SVG 要素では、 `xmlns` 属性で設定されます。

## 構文

```js
isDefaultNamespace(namespaceURI);
```

### 引数

- `namespaceURI`
  - : 要素の検査対象となる名前空間を表す文字列です。
    > **Note:** `namespaceURI` は省略可能ではありませんが、 `null` に設定することはできます。

### 返値

`true` または `false` の値を持つ論理値で、引数が既定の名前空間であるかどうかを示します。

## 例

```html
"" が &lt;output&gt; の既定の名前空間であるか: <output>未検査</output><br/>
"http://www.w3.org/2000/svg" が &lt;output&gt; の既定の名前空間であるか: <output>未検査</output><br/>
"" が &lt;svg&gt; の既定の名前空間であるか: <output>未検査</output><br/>
"http://www.w3.org/2000/svg" が &lt;svg&gt; の既定の名前空間であるか: <output>未検査</output><br/>
<svg xmlns="http://www.w3.org/2000/svg" height="1"></svg>
<button>結果を見るにはクリック</button>
```

```js
const button = document.getElementsByTagName('button')[0];
button.addEventListener("click", function () {
  const aHtmlElt = document.getElementsByTagName('output')[0];
  const aSvgElt = document.getElementsByTagName('svg')[0];

  const result = document.getElementsByTagName('output');
  result[0].value = aHtmlElt.isDefaultNamespace(""); // true
  result[1].value = aHtmlElt.isDefaultNamespace("http://www.w3.org/2000/svg"); // false
  result[2].value = aSvgElt.isDefaultNamespace(""); // true
  result[3].value = aSvgElt.isDefaultNamespace("http://www.w3.org/2000/svg"); // false
});
```

{{ EmbedLiveSample('Example','100%',130) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.lookupNamespaceURI")}}
- {{domxref("Node.lookupPrefix")}}
