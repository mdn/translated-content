---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{APIRef}}

**`BeforeUnloadEvent`** は {{domxref("Window/beforeunload_event", "beforeunload")}} イベントのインターフェイスです。

`beforeunload` イベントは、ウィンドウ、文書、そのリソースがアンロードされようとしているときに発生します。

Event の `returnValue` プロパティに空文字列でない値が代入されると、ダイアログボックスが現れ、ユーザーにページを離れるかどうかの確認を求めます（下記の例を参照）。値が指定されなかった場合、イベントはサイレントで処理されます。実装によっては、フレームまたは埋め込まれたフレームがユーザージェスチャまたはユーザーの操作を受け取った場合にのみ、ダイアログボックスを示すものもあります。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

> [!NOTE]
> セキュリティ上の理由から、返す文字列の代わりに、ウェブページの制御しない一般的な文字列のみが示されます。

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <td>バブリング</td>
      <td>なし</td>
    </tr>
    <tr>
      <td>キャンセル</td>
      <td>可</td>
    </tr>
    <tr>
      <td>対象オブジェクト</td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td>インターフェイス</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## 例

```js
window.addEventListener("beforeunload", (event) => {
  event.returnValue = "\\o/";
});

// is equivalent to
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
});
```

WebKit 派生ブラウザーは、ダイアログボックスについては仕様に従っていません。ほぼクロスブラウザーで動作する例としては、下記の例のようなものがあります。

```js
window.addEventListener("beforeunload", (e) => {
  const confirmationMessage = "\\o/";

  // Gecko + IE
  (e || window.event).returnValue = confirmationMessage;

  // Safari, Chrome, and other WebKit-derived browsers
  return confirmationMessage;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
- {{domxref("Document/readystatechange_event", "readystatechange")}}
- {{domxref("Window/load_event", "load")}}
- {{domxref("Window/beforeunload_event", "beforeunload")}}
- {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/#prompt-to-unload-a-document)
