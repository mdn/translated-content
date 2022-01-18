---
title: HTMLSlotElement.assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
tags:
  - API
  - HTMLSlotElement
  - メソッド
  - リファレンス
  - ウェブコンポーネント
  - assignedElements
  - シャドウ DOM
browser-compat: api.HTMLSlotElement.assignedElements
translation_of: Web/API/HTMLSlotElement/assignedElements
---
{{APIRef("Shadow DOM API")}}

**`assignedElements()`** は {{domxref("HTMLSlotElement")}} インターフェイスのメソッドで、このスロットに割り当てられた一連の要素を返します (そしてそれ以外の要素を除きます)。

`flatten` オプションが `true` に設定されていた場合は、このスロットの子孫である他のスロットに割り当てられた要素も返します。割り当てられたノードが見つからない場合は、スロットの代替コンテンツを返します。

## 構文

```js
HTMLSlotElement.assignedElements()
HTMLSlotElement.assignedElements(options)
```

### 引数

- `options` {{optional_inline}}

  - : 返されるノードのためのオプションを設定したオブジェクトです。利用可能なオプションは以下のとおりです。

    - `flatten`
      - : 論理値で、利用可能な子の `<slot>` 要素すべてに割り当てられた要素を返すか (`true`)、返さないか (`false`) を示します。既定値は `false` です。

### 返値

要素の配列です。

## 例

```js
let slots = this.shadowRoot.querySelector('slot');
let elements = slots.assignedElements({flatten: true});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
