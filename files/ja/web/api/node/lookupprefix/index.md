---
title: Node.lookupPrefix()
slug: Web/API/Node/lookupPrefix
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.lookupPrefix
translation_of: Web/API/Node/lookupPrefix
---
{{APIRef("DOM")}}

**`lookupPrefix()`** は {{domxref("Node")}} インターフェイスのメソッドで、指定された名前空間 URI に対応する接頭辞があれば、それを含む文字列を返します。ない場合は `null` を返します。
複数の接頭辞の可能性があれば、最初の接頭辞を返します。

## 構文

```js
lookupPrefix(namespace);
```

### 引数

- `namespace`
  - : 接頭辞を検索するための名前空間の入った文字列です。
    > **Note:** この引数は省略可能ではありませんが、 `null` に設定することはできます。

### 返値

対応する接頭辞の入った文字列です。見つからなかった場合は `null` になります。
`namespace` が null または空文字列であった場合、 `lookupPrefix()` は `null` を返します。

このノードが {{domxref("DocumentType")}} または {{domxref("DocumentFragment")}} であった場合は、　`lookupPrefix()` は常に `null` を返します。

## 例

```html
Prefix for <code>http://www.w3.org/2000/svg</code> on &lt;output&gt;: <output>未検査</output><br/>
Prefix for <code>http://www.w3.org/XML/1998/namespace</code> on &lt;output&gt;: <output>未検査</output><br/>
Prefix for <code>http://www.w3.org/TR/html4/</code> on &lt;output&gt;: <output>未検査</output><br/>
Prefix for <code>https://www.w3.org/1999/xlink</code> on &lt;output&gt;: <output>未検査</output><br/>
Prefix for <code>http://www.w3.org/2000/svg</code> on &lt;svg&gt;: <output>未検査</output><br/>
Prefix for <code>https://www.w3.org/1999/xlink</code> on &lt;svg&gt;: <output>未検査</output><br/>
Prefix for <code>http://www.w3.org/XML/1998/namespace</code> on &lt;svg&gt;: <output>未検査</output><br/>
<svg xmlns:t="http://www.w3.org/2000/svg" height="1"></svg>
<button>結果を確認するにはクリック</button>
```

```js
const button = document.getElementsByTagName('button')[0];
button.addEventListener("click", function () {
  const aHtmlElt = document.getElementsByTagName('output')[0];
  const aSvgElt = document.getElementsByTagName('svg')[0];

  const result = document.getElementsByTagName('output');
  result[0].value = aHtmlElt.lookupPrefix("http://www.w3.org/2000/svg"); // true
  result[1].value = aHtmlElt.lookupPrefix("http://www.w3.org/XML/1998/namespace"); // false
  result[2].value = aHtmlElt.lookupPrefix("http://www.w3.org/TR/html4/"); // true
  result[3].value = aHtmlElt.lookupPrefix("https://www.w3.org/1999/xlink"); // false
  result[4].value = aSvgElt.lookupPrefix("http://www.w3.org/2000/svg"); // true
  result[5].value = aSvgElt.lookupPrefix("https://www.w3.org/1999/xlink"); // true
  result[6].value = aSvgElt.lookupPrefix("http://www.w3.org/XML/1998/namespace"); // false
});
```

{{ EmbedLiveSample('Example','100%',190) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [http://www.w3.org/TR/DOM-Level-3-Cor...amespacePrefix](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix)
