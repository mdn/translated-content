---
title: 'Document: pointerlockerror イベント'
slug: orphaned/Web/API/Element/pointerlockerror_event
original_slug: Web/API/Element/pointerlockerror_event
---

{{APIRef}}

`pointerlockerror` イベントは、 (技術的な理由、またはパーミッションが拒否されたために) ポインターのロックに失敗したときに発生します。

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
        {{domxref("Document/onpointerlockchange", "onpointerlockerror")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`addEventListener()` を使用した場合

```js
const para = document.querySelector('p');

document.addEventListener('pointerlockerror', (event) => {
  console.log('Error locking pointer');
});
```

`onpointerlockerror` イベントハンドラープロパティを使用した場合

```js
document.onpointerlockerror = (event) => {
  console.log('Error locking pointer');
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
