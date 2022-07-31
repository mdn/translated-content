---
title: 'HTMLElement: pointerdown イベント'
slug: conflicting/Web/API/Element/pointerdown_event
tags:
  - イベント
  - HTML DOM
  - HTMLElement
  - PointerEvent
  - リファレンス
translation_of: Web/API/HTMLElement/pointerdown_event
original_slug: Web/API/HTMLElement/pointerdown_event
browser-compat: api.HTMLElement.pointerdown_event
---
{{APIRef}}

`pointerdown` イベントは、ポインターがアクティブになったときに発生します。マウスの場合は、ボタンが押されていない状態から少なくとも 1 つのボタンが押された状態に移行したときに発生します。タッチの場合は、物理的にデジタイザーに接触したときに発生します。ペンの場合は、スタイラスがデジタイザーと物理的に接触したときに発生します。

> **Note:** [直接操作](https://w3c.github.io/pointerevents/#dfn-direct-manipulation)が可能なタッチ画面のブラウザーの場合、 `pointerdown` イベントは[暗黙のポインターキャプチャ](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture)を起動し、それ以降のすべてのポインターイベントがキャプチャターゲット上で発生したかのようにターゲットに捕捉されるようになります。したがって、このキャプチャが設定されている限り、 `pointerover`, `pointerenter`, `pointerleave`, `pointerout` は**発生しません**。キャプチャは、ターゲット要素で {{domxref('element.releasePointerCapture')}} を呼び出すと手動で解放することができます。また、 `pointerup` または `pointercancel` イベントの後に暗黙的に解放されることもあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        <code
          ><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerdown"
            >onpointerdown</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

`addEventListener()` を使用する場合

```js
const para = document.querySelector('p');

para.addEventListener('pointerdown', (event) => {
  console.log('ポインターダウンイベント');
});
```

`onpointerdown` イベントハンドラープロパティを使用する場合

```js
const para = document.querySelector('p');

para.onpointerdown = (event) => {
  console.log('ポインターダウンイベント');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`onpointerdown`](/ja/docs/Web/API/GlobalEventHandlers/onpointerdown) イベントハンドラープロパティ
- `Document` をターゲットとしたこのイベント: [`pointerdown`](/ja/docs/Web/API/Document/pointerdown_event) イベント
