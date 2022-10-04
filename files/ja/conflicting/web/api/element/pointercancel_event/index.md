---
title: 'Document: pointercancel イベント'
slug: conflicting/Web/API/Element/pointercancel_event
original_slug: Web/API/Document/pointercancel_event
---

{{APIRef}}

**`pointercancel`** イベントは、ブラウザーがもうポインターイベントが存在しないと判断したとき、または {{event("pointerdown")}} イベントが発生した後で、ポインターがビューポートのパン、ズーム、スクロールを操作するために使用されたときに発生します。

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
      <td>{{domxref("PointerEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onpointercancel", "onpointercancel")}}
      </td>
    </tr>
  </tbody>
</table>

`pointercancel` イベントが発生する状況の例をいくつか示します。

- ポインターの操作を中止するハードウェアイベントが発生した場合。例えば、アプリケーションスイッチャーインターフェイスやモバイル端末の「ホーム」ボタンを使用してアプリケーションを切り替えた場合などです。
- ポインターが活動中に端末の画面の向きが変化した場合。
- ユーザーが突然、ポインターの入力を始めたとブラウザーが判断した場合。これが発生するのは、例えば、スタイラスを使用中に画面上で手が反応するのを防ぐために掌を除外して予期せずイベントを起動することを防ぐことに、ハードウェアが対応している場合などです。
- CSS の {{cssxref("touch-action")}} プロパティが、入力の継続を防止している場合。

> **メモ:** `pointercancel` イベントの発生後、ブラウザーは {{event("pointerout")}} イベントと、続いて {{event("pointerleave")}} イベントを送信します。

## 例

`addEventListener()` の使用例:

```js
document.addEventListener('pointercancel', (event) => {
  console.log('Pointer event cancelled')
});
```

`onpointercancel` イベントハンドラープロパティの使用例:

```js
document.onpointercancel = (event) => {
  console.log('Pointer event cancelled')
};
```

## 仕様書

| 仕様書                                                                       | 状態                                 |
| ---------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('Pointer Events', '#the-pointercancel-event')}} | {{Spec2('Pointer Events')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント

  - {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
  - {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
  - {{domxref("Document/pointerover_event", "pointerover")}}
  - {{domxref("Document/pointerenter_event", "pointerenter")}}
  - {{domxref("Document/pointerdown_event", "pointerdown")}}
  - {{domxref("Document/pointermove_event", "pointermove")}}
  - {{domxref("Document/pointerup_event", "pointerup")}}
  - {{domxref("Document/pointerout_event", "pointerout")}}
  - {{domxref("Document/pointerleave_event", "pointerleave")}}

- {{domxref("GlobalEventHandlers.onpointercancel")}} イベントハンドラープロパティ
- `HTMLElement` を対象としたこのイベント: {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} イベント
