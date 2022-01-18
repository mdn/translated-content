---
title: 'HTMLSlotElement: slotchange イベント'
slug: Web/API/HTMLSlotElement/slotchange_event
tags:
  - Event
  - リファレンス
  - ウェブコンポーネント
  - イベント
  - シャドウ DOM
  - slotchange
browser-compat: api.HTMLSlotElement.slotchange_event
translation_of: Web/API/HTMLSlotElement/slotchange_event
---
{{APIRef}}

**`slotchange`** イベントは、 {{DOMxRef("HTMLSlotElement")}} インスタンス({{HTMLElement("slot")}} 要素) において、そのスロットに含まれるノードが変更された場合に発行されます。

> **Note:** スロットに入っているノードの子ノードが変更された場合、 `slotchange` イベントは発生しません。つまり実際のノード自体を変更 (例えば、追加または削除) した場合に限ります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>なし</td>
    </tr>
  </tbody>
</table>

**slotchange** イベントを発行させるには、 `slot` 属性を設定または削除しなければなりません。

## 例

```js
element.setAttribute('slot', slotName);
// element.assignedSlot = $slot
element.removeAttribute('slot');
// element.assignedSlot = null
```

次のスニペットは、 [slotchange の例](https://github.com/mdn/web-components-examples/tree/master/slotchange)から取りました ([ライブでも確認できます](https://mdn.github.io/web-components-examples/slotchange/))。

```js
let slots = this.shadowRoot.querySelectorAll('slot');
slots[1].addEventListener('slotchange', function(e) {
  let nodes = slots[1].assignedNodes();
  console.log('Element in Slot "' + slots[1].name + '" changed to "' + nodes[0].outerHTML + '".');
});
```

ここではすべての `<slot>` への参照を取得し、テンプレートの 2 番目のスロットに `slotchange` イベントリスナーを追加します。この例ではコンテンツが変更されているスロットです。

スロットに挿入された要素が変更されるたびに、どのスロットが変更されたか、スロット内の新しいノードが何であるかを示すレポートがコンソールに記録されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{domxref("HTMLSlotElement")}}
