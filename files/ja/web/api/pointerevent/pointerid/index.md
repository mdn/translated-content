---
title: PointerEvent.pointerId
slug: Web/API/PointerEvent/pointerId
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`pointerId`** 読み取り専用プロパティは、特定のポインタのイベントに割り当てられた識別子です。 識別子は一意であり、他のすべてのアクティブポインタのイベントの識別子とは異なります。 値はランダムに生成される可能性があるため、特定の意味を伝えることは保証されません。

## 構文

```
var id = pointerEvent.pointerId;
```

### 戻り値

- `id`
  - : ポインタイベントの一意の識別子番号。

## 例

次のコードスニペットは、以前に保存された `pointerId` と、発生したばかりの {{event("pointerdown")}} イベントのものとを比較します。

```js
let id; // これが以前に保存された pointerId であると仮定しましょう

target.addEventListener('pointerdown', function(event) {
  // キャッシュされた前のイベントの ID を現在の
  // イベントの ID と比較し、それに応じて処理する
  if (id === event.pointerId) process_event(event);
}, false);
```

## 仕様

| 仕様                                                                                                 | 状態                                     | コメント |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-pointerevent-pointerid', 'pointerId')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#dom-pointerevent-pointerid', 'pointerId')}} | {{Spec2('Pointer Events')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.pointerId")}}
