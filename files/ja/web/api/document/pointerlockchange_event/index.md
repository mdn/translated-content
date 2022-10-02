---
title: 'Document: pointerlockchange イベント'
slug: Web/API/Document/pointerlockchange_event
original_slug: Web/API/Element/pointerlockchange_event
---

{{APIRef}}

`pointerlockchange` イベントは、ポインターがロックされたり解除されたりしたときに発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("Document/onpointerlockchange", "onpointerlockchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`addEventListener()` を使用した場合

```js
document.addEventListener('pointerlockchange', (event) => {
  console.log('Pointer lock changed');
});
```

`onpointerlockerror` イベントハンドラープロパティを使用した場合

```js
document.onpointerlockchange = (event) => {
  console.log('Pointer lock changed');
};
```

## 仕様書

| 仕様書                                                                                                   | 状態                             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('Pointer Lock', '#pointerlockchange-and-pointerlockerror-events')}} | {{Spec2('Pointer Lock')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Pointer Lock API の使用](/ja/docs/API/Pointer_Lock_API)
