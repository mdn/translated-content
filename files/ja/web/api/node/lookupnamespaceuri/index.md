---
title: Node.lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.lookupNamespaceURI
---
{{APIRef("DOM")}}

**`lookupNamespaceURI()`** は {{domxref("Node")}} インターフェイスのメソッドで、引数として接頭辞を受け取り、このノードに関連付けられた名前空間が見つかれば、その URI を返します（見つからなければ `null` を返します）。

## 構文

```js
lookupNamespaceURI(prefix);
```

### 引数

- `prefix`
  - : 検索する接頭辞です。
    > **Note:** この引数は省略可能ではありませんが、 `null` に設定することはできます。

### 返値

指定された接頭辞に対応する名前空間 URI の入った文字列です。
接頭辞が見つからない場合、 `null` を返します。
要求された `prefix` が `null` である場合は、既定の名前空間 URI を返します。

## 例

```html
Namespace URL for <code>xlink</code> on &lt;output&gt;: <output>未検査</output>.<br/>
Namespace URL for <code>xml</code> on &lt;output&gt;: <output>未検査</output>.<br/>
Namespace URL for <code>html</code> on &lt;output&gt;: <output>未検査</output>.<br/>
Namespace URL for <code>``</code> on &lt;output&gt;: <output>未検査</output>.<br/>
Namespace URL for <code>svg</code> on &lt;svg&gt;: <output>未検査</output>.<br/>
Namespace URL for <code>xlink</code> on &lt;svg&gt;: <output>未検査</output>.<br/>
Namespace URL for <code>xml</code> on &lt;svg&gt;: <output>未検査</output>.<br/>
<svg xmlns:svg="http://www.w3.org/2000/svg" height="1"></svg>
<button>ここをクリックして結果を確認</button>
```

```js
const button = document.getElementsByTagName('button')[0];
button.addEventListener("click", function () {
  const aHtmlElt = document.getElementsByTagName('output')[0];
  const aSvgElt = document.getElementsByTagName('svg')[0];

  const result = document.getElementsByTagName('output');
  result[0].value = aHtmlElt.lookupNamespaceURI("xlink");
  result[1].value = aHtmlElt.lookupNamespaceURI("xml");
  result[2].value = aHtmlElt.lookupNamespaceURI("html");
  result[3].value = aHtmlElt.lookupNamespaceURI("");
  result[4].value = aSvgElt.lookupNamespaceURI("svg");
  result[5].value = aSvgElt.lookupNamespaceURI("xlink");
  result[6].value = aSvgElt.lookupNamespaceURI("xml");
});
```

{{ EmbedLiveSample('Example','100%',190) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.lookupPrefix")}}
- {{domxref("Node.isDefaultNameSpace")}}
