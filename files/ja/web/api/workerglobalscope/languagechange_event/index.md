---
title: "WorkerGlobalScope: languagechange イベント"
slug: Web/API/WorkerGlobalScope/languagechange_event
l10n:
  sourceCommit: 2c732b2ab1969d6ae887b865b11ba27de225f291
---

{{APIRef}}

**`languagechange`** イベントは、ユーザーの推奨言語が変更されたときにグローバルスコープオブジェクトで発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('languagechange', (event) => { });

onlanguagechange = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`languagechange` は {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。

```js
worker.addEventListener('languagechange', () => {
  console.log('languagechange event detected!');
});
```

または、 `onlanguagechange`  イベントハンドラープロパティを使用します。

```js
worker.onlanguagechange = (event) => {
  console.log('languagechange event detected!');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WorkerNavigator.language", "navigator.language")}}
- {{domxref("WorkerNavigator.languages", "navigator.languages")}}
- {{domxref("Navigator")}}
