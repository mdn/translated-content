---
title: Node.cloneNode()
slug: Web/API/Node/cloneNode
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.cloneNode
translation_of: Web/API/Node/cloneNode
---
{{APIRef("DOM")}}

**`cloneNode()`** は {{domxref("Node")}} インターフェイスのメソッドで、このメソッドが呼び出されたノードの複製を返します。
引数でノードに含まれるサブツリーを一緒に複製するかどうかを制御できます。

ノードを複製すると、固有（インライン）のリスナーを含む、ノードのすべての属性とその値が複製されます。 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使って追加されたイベントリスナーや、要素のプロパティに代入されたイベントリスナー（例: `node.onclick = someFunction`）は複製されません。さらに、 {{HTMLElement("canvas")}} 要素では、描画された画像は複製されません。

> **Warning:** `cloneNode()` を使用すると、文書内で要素の ID が重複する可能性があります。
>
> 元のノードに `id` 属性があり、複製を同じ文書に配置する場合は、複製の ID が重複しないように変更してください。
>
> また、 `name` 属性も重複した名前を使わない場面では、変更する必要があるかもしれません。

**異なる**文書にノードを複製する場合は、代わりに {{domxref("Document.importNode()")}} を使用してください。

## 構文

```js
cloneNode();
cloneNode(deep);
```

### 引数

- `deep` {{optional_inline}}

  - : `true` の場合、ノードとそのサブツリーは、子ノードの {{domxref("Text")}} にあるテキストも含め複製されます。

    `false` の場合、このノードのみが複製されます。
    サブツリーは、そのノードに含まれているテキストも含め、複製されません。

    なお、 `deep` は {{HTMLElement("img")}} や {{HTMLElement("input")}} のような空要素には効果がありません。

### 返値

複製された {{domxref("Node")}} を返します。
複製されたノードには、文書に所属する他のノードに {{domxref("Node.appendChild()")}} などを使用して追加されるまで、親ノードがなく、文書にも所属していません。

## 例

```js
let p = document.getElementById("para1")
let p_prime = p.cloneNode(true)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
