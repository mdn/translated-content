---
title: 'Document: pointerdown イベント'
slug: conflicting/Web/API/Element/pointerdown_event
original_slug: Web/API/Document/pointerdown_event
---

{{APIRef}}

`pointerdown` イベントは、ポインターがアクティブになったときに発生します。マウスでは、端末がボタンが押されていない状態から一つ以上のボタンが押されている状態に遷移したときに発生します。タッチ操作では、デジタイザーに物理的な接触が行われたときに発生します。ペンでは、スタイラスがデジタイザーに物理的に接触したときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`addEventListener()` の使用例:

```js
document.addEventListener('pointerdown', (event) => {
  console.log('Pointer down event');
});
```

`onpointerdown` イベントハンドラープロパティの使用例:

```js
document.onpointerdown = (event) => {
  console.log('Pointer down event');
};
```

## 仕様書

| 仕様書                                                                       | 状態                                 |
| ---------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-pointerdown-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointerdown_event", "pointerdown")}} イベント
