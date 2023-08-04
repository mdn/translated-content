---
title: "NetworkInformation: change イベント"
slug: Web/API/NetworkInformation/change_event
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiref("Network Information API")}}{{SeeCompatTable}}

**`change`** イベントは、接続情報が変更されたときに発行され、 {{domxref("NetworkInformation")}} オブジェクトで受信されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('change', (event) => { });

onchange = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
// 接続型の取得
const type = navigator.connection.type;

function changeHandler(e) {
   // ここで接続型の変更を操作する
}

// change イベントの登録
navigator.connection.onchange = changeHandler;

// 他の方法: navigator.connection.addEventListener('change', changeHandler);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
