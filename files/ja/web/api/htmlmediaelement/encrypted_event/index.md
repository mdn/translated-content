---
title: "HTMLMediaElement: encrypted イベント"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}

encrypted`イベントは、初期化データがメディアから見つかり、暗号化されていることを示しているときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("encrypted", (event) => {});

onencrypted = (event) => {};
```

## イベント型

{{domxref("MediaEncryptedEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MediaEncryptedEvent")}}

## イベントプロパティ

- {{domxref("MediaEncryptedEvent.initDataType")}} {{ReadOnlyInline}}
  - : 得られる初期化データの書式の種類を、大文字小文字を区別した文字列を返します。
- {{domxref("MediaEncryptedEvent.initData")}} {{ReadOnlyInline}}
  - : 得られた初期化データを格納した {{jsxref("ArrayBuffer")}} を返します。形式に関連付けられた初期化データがない場合は `null` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- {{domxref("MediaEncryptedEvent")}}
