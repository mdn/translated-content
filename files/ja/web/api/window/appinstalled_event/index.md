---
title: "Window: appinstalled イベント"
slug: Web/API/Window/appinstalled_event
l10n:
  sourceCommit: 266a565a634d1218995379e54e74bf9cc9504d83
---

{{APIRef}}

**`appinstalled`** は[ウェブマニフェスト API](/ja/docs/Web/Manifest) のイベントで、ブラウザーがあるページをアプリケーションとして成功裏にインストールしたとき発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('appinstalled', (event) => { });

onappinstalled = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`appinstalled` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。

```js
window.addEventListener('appinstalled', () => {
  console.log('アプリをインストールしてくれてありがとう！');
});
```

または `onappinstalled` イベントハンドラープロパティを使用してください。

```js
window.onappinstalled = () => {
  console.log('アプリをインストールしてくれてありがとう！');
};
```

## ブラウザーの互換性

{{Compat}}
