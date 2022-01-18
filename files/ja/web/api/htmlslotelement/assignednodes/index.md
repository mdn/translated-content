---
title: HTMLSlotElement.assignedNodes()
slug: Web/API/HTMLSlotElement/assignedNodes
tags:
  - API
  - HTMLSlotElement
  - メソッド
  - リファレンス
  - assignedNodes
  - シャドウ DOM
browser-compat: api.HTMLSlotElement.assignedNodes
translation_of: Web/API/HTMLSlotElement/assignedNodes
---
{{APIRef("Shadow DOM API")}}

`assignedNodes()` は {{domxref("HTMLSlotElement")}} インターフェイスのプロパティで、このスロットに割り当てられた一連のノードを返します。

`flatten` オプションが `true` に設定されていた場合は、このスロットの子孫である他のスロットに割り当てられたノードも返します。割り当てられたノードが見つからない場合は、スロットの代替コンテンツを返します。

## 構文

```js
HTMLSlotElement.assignedNodes()
HTMLSlotElement.assignedNodes(options)
```

### 引数

- `options` {{optional_inline}}

  - : 返されるノードのためのオプションを設定したオブジェクトです。利用可能な値は以下のとおりです。

    - `flatten`
      - : 論理値で、利用可能な子の `<slot>` 要素すべてに割り当てられたノードを返すか (`true`)、返さないか (`false`) を示します。既定値は `false` です。

### 返値

ノードの配列。

## 例

以下のスニペットは、 [slotchange
の例](https://github.com/mdn/web-components-examples/tree/master/slotchange) ([ライブでも確認](https://mdn.github.io/web-components-examples/slotchange/)) からとりました。

```js
let slots = this.shadowRoot.querySelectorAll('slot');
slots[1].addEventListener('slotchange', function(e) {
  let nodes = slots[1].assignedNodes();
  console.log('Element in Slot "' + slots[1].name + '" changed to "' + nodes[0].outerHTML + '".');
});
```

ここではすべてのスロットの参照を取得し、テンプレート内の 2 番目のスロットに slotchange イベントリスナーを追加します。 — これが例の中でコンテンツの変更を追跡します。

スロットの変更の中で要素が挿入されるたびに、コンソールにどのスロットが変更されたか、スロット内の新しいノードは何であるかをログ出力します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
