---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
tags:
  - API
  - HTMLSlotElement
  - インターフェイス
  - リファレンス
  - シャドウ DOM
browser-compat: api.HTMLSlotElement
translation_of: Web/API/HTMLSlotElement
---
{{APIRef('Web Components')}}

**`HTMLSlotElement`** は [Shadow DOM API](/en-US/docs/Web/Web_Components/Using_shadow_DOM) のインターフェイスで、 HTML の {{HTMLElement("slot")}} 要素の名前と割り当てられたノードにアクセスできるようにします。

## プロパティ

- {{domxref('HTMLSlotElement.name')}}
  - : {{domxref("DOMString","文字列","",1)}}で、スロットの名前を取得または設定するために使用します。

## メソッド

- {{domxref('HTMLSlotElement.assign()')}}
  - : このスロットに手動で割り当てられたノードを、指定されたノードに設定します。
- {{domxref('HTMLSlotElement.assignedNodes()')}}
  - : このスロットに割り当てられた一連のノードを返し、 `flatten` オプションが `true` に設定されていた場合は、このスロットの子孫である他のスロットに割り当てられたノードも返します。割り当てられたノードが見つからない場合は、スロットの代替コンテンツを返します。
- {{domxref('HTMLSlotElement.assignedElements()')}}
  - : このスロットに割り当てられた一連の要素を返します (それ以外のノードは返しません)。 `flatten` オプションが `true` に設定されていた場合は、このスロットの子孫である他のスロットに割り当てられた要素も返します。割り当てられたノードが見つからない場合は、スロットの代替コンテンツを返します。

## イベント

- {{domxref('HTMLSlotElement.slotchange_event', 'slotchange')}}
  - : スロットに含まれるノードが変更されたときに `HTMLSlotElement` インスタンス ([`<slot>`](/en-US/docs/Web/HTML/Element/slot "<slot> は HTML の要素 — ウェブコンポーネント技術の一部 — は、ウェブコンポーネント内で別な DOM ツリーを構築し、いっしょに表示することができる独自のマークアップを入れることができるプレイスホルダーです。") 要素) に発生します。

## 例

以下のスニペットは、 [slotchange の例](https://github.com/mdn/web-components-examples/tree/master/slotchange)からとりました  ([ライブでも確認](https://mdn.github.io/web-components-examples/slotchange/))。

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
